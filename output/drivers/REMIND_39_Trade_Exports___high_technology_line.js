(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_39_Trade_Exports___high_technology_line') 

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
      "y": [34675.365801621614, 34672.331938277792, 34659.814812113058, 34637.091281466346, 34615.798576181995, 41591.740328782995, 38638.557573114733, 41726.599889245626, 48957.142631998177, 49091.12986190588, 52030.819752246323, 54672.982504464308, 51510.454563771535, 53173.642289390766, 28552.931019069405, 28798.585592344167, 28556.472042198926, 27939.831427765654, 36470.175933712191],
      "text": ["Exports - high technology: 34675.37 #<br>Period: 2003<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 34672.33 #<br>Period: 2004<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 34659.81 #<br>Period: 2005<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 34637.09 #<br>Period: 2006<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 34615.8 #<br>Period: 2007<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 41591.74 #<br>Period: 2008<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 38638.56 #<br>Period: 2009<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 41726.6 #<br>Period: 2010<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 48957.14 #<br>Period: 2011<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 49091.13 #<br>Period: 2012<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 52030.82 #<br>Period: 2013<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 54672.98 #<br>Period: 2014<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 51510.45 #<br>Period: 2015<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 53173.64 #<br>Period: 2016<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 28552.93 #<br>Period: 2017<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 28798.59 #<br>Period: 2018<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 28556.47 #<br>Period: 2019<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 27939.83 #<br>Period: 2020<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - high technology: 36470.18 #<br>Period: 2021<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [30526.43, 30526.430000000004, 30526.430000000004, 30526.430000000004, 30526.43, 30127.810000000001, 25642.279999999999, 26566.349999999999, 27498.830000000002, 33106.18, 32177.509999999995, 28785.439999999999, 28241.57, 26201.900000000001, 26937.509999999995, 30479.68, 31536.889999999999, 25573.110000000001, 29239.719999999998],
      "text": ["Exports - high technology: 30526.43 #<br>Period: 2003<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 30526.43 #<br>Period: 2004<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 30526.43 #<br>Period: 2005<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 30526.43 #<br>Period: 2006<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 30526.43 #<br>Period: 2007<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 30127.81 #<br>Period: 2008<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 25642.28 #<br>Period: 2009<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 26566.35 #<br>Period: 2010<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 27498.83 #<br>Period: 2011<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 33106.18 #<br>Period: 2012<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 32177.51 #<br>Period: 2013<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 28785.44 #<br>Period: 2014<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 28241.57 #<br>Period: 2015<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 26201.9 #<br>Period: 2016<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 26937.51 #<br>Period: 2017<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 30479.68 #<br>Period: 2018<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 31536.89 #<br>Period: 2019<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 25573.11 #<br>Period: 2020<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Exports - high technology: 29239.72 #<br>Period: 2021<br>REMIND_39 region code: CAN<br>Countries in region: Canada"],
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
      "y": [151.02882479602368, 150.19321358646769, 149.33059819758984, 148.45255584077043, 147.53664774989261, 146.8122006672447, 138.57444721222396, 155.07246357995098, 167.84668287670112, 137.97474632682432, 136.52414210833487, 172.99878468514993, 138.80496993295645, 132.20395152331747, 148.13261573245848, 180.83232745309968, 269.80560862928502, 253.75491868308819, 352.32417022805822],
      "text": ["Exports - high technology: 151.03 #<br>Period: 2003<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Exports - high technology: 150.19 #<br>Period: 2004<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Exports - high technology: 149.33 #<br>Period: 2005<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 148.45 #<br>Period: 2006<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 147.54 #<br>Period: 2007<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 146.81 #<br>Period: 2008<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 138.57 #<br>Period: 2009<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 155.07 #<br>Period: 2010<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 167.85 #<br>Period: 2011<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 137.97 #<br>Period: 2012<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 136.52 #<br>Period: 2013<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 173 #<br>Period: 2014<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 138.8 #<br>Period: 2015<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 132.2 #<br>Period: 2016<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 148.13 #<br>Period: 2017<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 180.83 #<br>Period: 2018<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 269.81 #<br>Period: 2019<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 253.75 #<br>Period: 2020<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 352.32 #<br>Period: 2021<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [3314.8438536257881, 3312.9705346624078, 3313.3749409306429, 3313.9684242057242, 3317.9835648301669, 3827.1864310813658, 3290.5314731663784, 3904.2726664573333, 4831.429483128818, 4701.9846129551443, 4605.1733025494332, 4687.499717177785, 4370.4735177608845, 4602.4960829840093, 4190.2949921878781, 4479.3324550797397, 5387.8323189094353, 4761.0213732870188, 5373.5519618335302],
      "text": ["Exports - high technology: 3314.84 #<br>Period: 2003<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 3312.97 #<br>Period: 2004<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 3313.37 #<br>Period: 2005<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 3313.97 #<br>Period: 2006<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 3317.98 #<br>Period: 2007<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 3827.19 #<br>Period: 2008<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 3290.53 #<br>Period: 2009<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 3904.27 #<br>Period: 2010<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 4831.43 #<br>Period: 2011<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 4701.98 #<br>Period: 2012<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 4605.17 #<br>Period: 2013<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 4687.5 #<br>Period: 2014<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 4370.47 #<br>Period: 2015<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 4602.5 #<br>Period: 2016<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 4190.29 #<br>Period: 2017<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 4479.33 #<br>Period: 2018<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 5387.83 #<br>Period: 2019<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 4761.02 #<br>Period: 2020<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 5373.55 #<br>Period: 2021<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [43655.040000000001, 43655.040000000001, 43655.040000000001, 43655.040000000001, 43655.040000000008, 43655.040000000001, 38922.30999999999, 49221.000000000007, 52263.260000000002, 57554.230000000003, 58517.570000000007, 61491.329999999994, 60215.240000000005, 62439.830000000002, 69631.039999999979, 74815.819999999992, 75162.630000000005, 71003.029999999999, 74932.929999999978],
      "text": ["Exports - high technology: 43655.04 #<br>Period: 2003<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 43655.04 #<br>Period: 2004<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 43655.04 #<br>Period: 2005<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 43655.04 #<br>Period: 2006<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 43655.04 #<br>Period: 2007<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 43655.04 #<br>Period: 2008<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 38922.31 #<br>Period: 2009<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 49221 #<br>Period: 2010<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 52263.26 #<br>Period: 2011<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 57554.23 #<br>Period: 2012<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 58517.57 #<br>Period: 2013<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 61491.33 #<br>Period: 2014<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 60215.24 #<br>Period: 2015<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 62439.83 #<br>Period: 2016<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 69631.04 #<br>Period: 2017<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 74815.82 #<br>Period: 2018<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 75162.63 #<br>Period: 2019<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 71003.03 #<br>Period: 2020<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Exports - high technology: 74932.93 #<br>Period: 2021<br>REMIND_39 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [4440.5626885442762, 4440.5629280266003, 4440.5653489731076, 4440.5574213517793, 4440.5551492264703, 5400.9316430098534, 4887.2565206278314, 4941.1020922364405, 5377.1692371511417, 5154.4097386883141, 5369.5925550829443, 5695.3899816550911, 5032.9164133497197, 4309.6634721225782, 4263.5029772958305, 4316.4110303824882, 4608.3547390348394, 4067.0364248319793, 4730.9412071427523],
      "text": ["Exports - high technology: 4440.56 #<br>Period: 2003<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 4440.56 #<br>Period: 2004<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 4440.57 #<br>Period: 2005<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 4440.56 #<br>Period: 2006<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 4440.56 #<br>Period: 2007<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 5400.93 #<br>Period: 2008<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 4887.26 #<br>Period: 2009<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 4941.1 #<br>Period: 2010<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 5377.17 #<br>Period: 2011<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 5154.41 #<br>Period: 2012<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 5369.59 #<br>Period: 2013<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 5695.39 #<br>Period: 2014<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 5032.92 #<br>Period: 2015<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 4309.66 #<br>Period: 2016<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 4263.5 #<br>Period: 2017<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 4316.41 #<br>Period: 2018<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 4608.35 #<br>Period: 2019<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 4067.04 #<br>Period: 2020<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - high technology: 4730.94 #<br>Period: 2021<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [9536.3299999999999, 9536.3299999999999, 9536.3299999999999, 9536.3299999999999, 9536.3299999999999, 10794.669999999998, 8460.8200000000015, 8821.369999999999, 9144.3400000000001, 9470.9099999999999, 9066.2299999999996, 8794.6100000000006, 9433.0100000000002, 10375.41, 10715.07, 11062.940000000001, 9391.8799999999992, 5944.9300000000003, 6350.1099999999997],
      "text": ["Exports - high technology: 9536.33 #<br>Period: 2003<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 9536.33 #<br>Period: 2004<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 9536.33 #<br>Period: 2005<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 9536.33 #<br>Period: 2006<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 9536.33 #<br>Period: 2007<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 10794.67 #<br>Period: 2008<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 8460.82 #<br>Period: 2009<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 8821.37 #<br>Period: 2010<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 9144.34 #<br>Period: 2011<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 9470.91 #<br>Period: 2012<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 9066.23 #<br>Period: 2013<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 8794.61 #<br>Period: 2014<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 9433.01 #<br>Period: 2015<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 10375.41 #<br>Period: 2016<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 10715.07 #<br>Period: 2017<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 11062.94 #<br>Period: 2018<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 9391.88 #<br>Period: 2019<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 5944.93 #<br>Period: 2020<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Exports - high technology: 6350.11 #<br>Period: 2021<br>REMIND_39 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [1296.9774241586081, 1295.7297674716958, 1294.3348796407934, 1293.6658635476113, 1294.0700095688999, 1301.6198736237052, 1296.9900312856475, 1300.8341879204081, 1307.3659335438031, 1789.9908615741278, 1519.6596216768812, 1363.0263125433901, 1034.6012435830316, 792.0551177902779, 860.44457836576021, 870.18861976729431, 845.70705616647717, 874.36965832307465, 978.72943013017505],
      "text": ["Exports - high technology: 1296.98 #<br>Period: 2003<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 1295.73 #<br>Period: 2004<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 1294.33 #<br>Period: 2005<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 1293.67 #<br>Period: 2006<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 1294.07 #<br>Period: 2007<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 1301.62 #<br>Period: 2008<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 1296.99 #<br>Period: 2009<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Exports - high technology: 1300.83 #<br>Period: 2010<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Exports - high technology: 1307.37 #<br>Period: 2011<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 1789.99 #<br>Period: 2012<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 1519.66 #<br>Period: 2013<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 1363.03 #<br>Period: 2014<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 1034.6 #<br>Period: 2015<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 792.06 #<br>Period: 2016<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 860.44 #<br>Period: 2017<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 870.19 #<br>Period: 2018<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 845.71 #<br>Period: 2019<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 874.37 #<br>Period: 2020<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - high technology: 978.73 #<br>Period: 2021<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [106527.47, 106527.46999999999, 106527.47000000002, 106527.47, 106527.47, 110787.21000000001, 103492.16, 132075.42999999999, 133455.01000000001, 130654.61, 143473.57000000001, 149049.31, 147041.12, 135900.45000000001, 166652.76999999999, 192785.76000000004, 153546.69, 163935.67000000004, 204979.88],
      "text": ["Exports - high technology: 106527.47 #<br>Period: 2003<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 106527.47 #<br>Period: 2004<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 106527.47 #<br>Period: 2005<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 106527.47 #<br>Period: 2006<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 106527.47 #<br>Period: 2007<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 110787.21 #<br>Period: 2008<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 103492.16 #<br>Period: 2009<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 132075.43 #<br>Period: 2010<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 133455.01 #<br>Period: 2011<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 130654.61 #<br>Period: 2012<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 143473.57 #<br>Period: 2013<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 149049.31 #<br>Period: 2014<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 147041.12 #<br>Period: 2015<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 135900.45 #<br>Period: 2016<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 166652.77 #<br>Period: 2017<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 192785.76 #<br>Period: 2018<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 153546.69 #<br>Period: 2019<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 163935.67 #<br>Period: 2020<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - high technology: 204979.88 #<br>Period: 2021<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [382.83250211097101, 381.08070105489981, 379.44344123001162, 377.98355251135882, 376.64093777840515, 373.58266812009225, 354.13516460735741, 450.64047601848796, 504.58692659246805, 674.91156056406487, 635.30093386864621, 652.59512973902019, 551.25247684548583, 443.93378132189497, 406.92899300555962, 388.22339699846208, 466.62587207973013, 526.12919832503098, 568.14919064804667],
      "text": ["Exports - high technology: 382.83 #<br>Period: 2003<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 381.08 #<br>Period: 2004<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 379.44 #<br>Period: 2005<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 377.98 #<br>Period: 2006<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 376.64 #<br>Period: 2007<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 373.58 #<br>Period: 2008<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 354.14 #<br>Period: 2009<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 450.64 #<br>Period: 2010<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 504.59 #<br>Period: 2011<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 674.91 #<br>Period: 2012<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 635.3 #<br>Period: 2013<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 652.6 #<br>Period: 2014<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 551.25 #<br>Period: 2015<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 443.93 #<br>Period: 2016<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 406.93 #<br>Period: 2017<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 388.22 #<br>Period: 2018<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 466.63 #<br>Period: 2019<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 526.13 #<br>Period: 2020<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 568.15 #<br>Period: 2021<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [4321.0600000000004, 4321.0599999999995, 4321.0599999999995, 4321.0600000000004, 4321.0600000000004, 5470.0799999999999, 4756.2700000000004, 5263.1800000000003, 5731.6500000000005, 7709.7200000000003, 9200.8600000000006, 10399.91, 11449.52, 11205.91, 10359.16, 10075.33, 10756.540000000001, 6524.880000000001, 10553.18],
      "text": ["Exports - high technology: 4321.06 #<br>Period: 2003<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 4321.06 #<br>Period: 2004<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 4321.06 #<br>Period: 2005<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 4321.06 #<br>Period: 2006<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 4321.06 #<br>Period: 2007<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 5470.08 #<br>Period: 2008<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 4756.27 #<br>Period: 2009<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 5263.18 #<br>Period: 2010<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 5731.65 #<br>Period: 2011<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 7709.72 #<br>Period: 2012<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 9200.86 #<br>Period: 2013<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 10399.91 #<br>Period: 2014<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 11449.52 #<br>Period: 2015<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 11205.91 #<br>Period: 2016<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 10359.16 #<br>Period: 2017<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 10075.33 #<br>Period: 2018<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 10756.54 #<br>Period: 2019<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 6524.88 #<br>Period: 2020<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Exports - high technology: 10553.18 #<br>Period: 2021<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [19812.623254921749, 19871.829115375578, 19941.791483498087, 19998.170826764301, 20049.447979644614, 20479.564598274821, 19725.281375142979, 22759.090764364217, 23945.673076347626, 26387.271516930999, 29139.319969746211, 30515.410527217467, 32526.320361083213, 34185.711981259141, 40255.294818613533, 43782.002951752394, 44927.891569179046, 48654.116553641543, 55957.844578095865],
      "text": ["Exports - high technology: 19812.62 #<br>Period: 2003<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 19871.83 #<br>Period: 2004<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 19941.79 #<br>Period: 2005<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 19998.17 #<br>Period: 2006<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 20049.45 #<br>Period: 2007<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 20479.56 #<br>Period: 2008<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 19725.28 #<br>Period: 2009<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 22759.09 #<br>Period: 2010<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 23945.67 #<br>Period: 2011<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 26387.27 #<br>Period: 2012<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 29139.32 #<br>Period: 2013<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 30515.41 #<br>Period: 2014<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 32526.32 #<br>Period: 2015<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 34185.71 #<br>Period: 2016<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 40255.29 #<br>Period: 2017<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 43782 #<br>Period: 2018<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 44927.89 #<br>Period: 2019<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 48654.12 #<br>Period: 2020<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Exports - high technology: 55957.84 #<br>Period: 2021<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [7056.0899999999992, 7056.0900000000001, 7056.0900000000001, 7056.0900000000001, 7056.0900000000001, 7056.0900000000001, 7056.0900000000001, 7056.0899999999992, 7277.4099999999999, 7229.3699999999999, 6492.9099999999999, 6585.8900000000003, 5889.54, 5415.6000000000004, 5971.4799999999996, 6382.0100000000002, 6281.2700000000004, 6408.6899999999996, 7492.0699999999988],
      "text": ["Exports - high technology: 7056.09 #<br>Period: 2003<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 7056.09 #<br>Period: 2004<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 7056.09 #<br>Period: 2005<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 7056.09 #<br>Period: 2006<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 7056.09 #<br>Period: 2007<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 7056.09 #<br>Period: 2008<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 7056.09 #<br>Period: 2009<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 7056.09 #<br>Period: 2010<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 7277.41 #<br>Period: 2011<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 7229.37 #<br>Period: 2012<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 6492.91 #<br>Period: 2013<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 6585.89 #<br>Period: 2014<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 5889.54 #<br>Period: 2015<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 5415.6 #<br>Period: 2016<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 5971.48 #<br>Period: 2017<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 6382.01 #<br>Period: 2018<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 6281.27 #<br>Period: 2019<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 6408.69 #<br>Period: 2020<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Exports - high technology: 7492.07 #<br>Period: 2021<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [155.2995033335786, 155.72865014450076, 156.17674910871065, 156.60210970492355, 157.45262827362228, 158.32667043763556, 130.0721664068223, 145.39290347622833, 176.01841056213064, 194.92366900551127, 200.13209859896745, 160.5997225519146, 166.06896621883863, 188.36123887866879, 212.89984438339306, 220.15324014693692, 231.2892823086888, 188.36175869148676, 193.09124163413662],
      "text": ["Exports - high technology: 155.3 #<br>Period: 2003<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 155.73 #<br>Period: 2004<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 156.18 #<br>Period: 2005<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 156.6 #<br>Period: 2006<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 157.45 #<br>Period: 2007<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 158.33 #<br>Period: 2008<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 130.07 #<br>Period: 2009<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 145.39 #<br>Period: 2010<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 176.02 #<br>Period: 2011<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 194.92 #<br>Period: 2012<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 200.13 #<br>Period: 2013<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 160.6 #<br>Period: 2014<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 166.07 #<br>Period: 2015<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 188.36 #<br>Period: 2016<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 212.9 #<br>Period: 2017<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 220.15 #<br>Period: 2018<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 231.29 #<br>Period: 2019<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 188.36 #<br>Period: 2020<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 193.09 #<br>Period: 2021<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [128315.03999999999, 128315.04000000001, 128315.03999999999, 128315.03999999999, 128315.03999999999, 130246.56, 103707.83, 129808.10000000001, 133086.54999999999, 129203.44, 111060.3, 107367.02, 98249.839999999997, 99101.200000000012, 106183.79000000001, 110741.5, 103896.71000000001, 102751.08999999998, 116513.86],
      "text": ["Exports - high technology: 128315.04 #<br>Period: 2003<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 128315.04 #<br>Period: 2004<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 128315.04 #<br>Period: 2005<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 128315.04 #<br>Period: 2006<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 128315.04 #<br>Period: 2007<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 130246.56 #<br>Period: 2008<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 103707.83 #<br>Period: 2009<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 129808.1 #<br>Period: 2010<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 133086.55 #<br>Period: 2011<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 129203.44 #<br>Period: 2012<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 111060.3 #<br>Period: 2013<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 107367.02 #<br>Period: 2014<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 98249.84 #<br>Period: 2015<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 99101.2 #<br>Period: 2016<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 106183.79 #<br>Period: 2017<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 110741.5 #<br>Period: 2018<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 103896.71 #<br>Period: 2019<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 102751.09 #<br>Period: 2020<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 116513.86 #<br>Period: 2021<br>REMIND_39 region code: JPN<br>Countries in region: Japan"],
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
      "y": [1881.5899999999999, 1881.5899999999999, 1881.5899999999999, 1881.5900000000001, 1881.5899999999999, 1962.2299999999998, 1587.6400000000001, 1943.25, 2202.0900000000001, 2327.2000000000003, 3782.3899999999994, 4292.9200000000001, 3872.0999999999999, 3421.6300000000006, 4068.8499999999999, 3735.7300000000005, 4280.1999999999998, 4172.6999999999998, 5715.25],
      "text": ["Exports - high technology: 1881.59 #<br>Period: 2003<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 1881.59 #<br>Period: 2004<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 1881.59 #<br>Period: 2005<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 1881.59 #<br>Period: 2006<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 1881.59 #<br>Period: 2007<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 1962.23 #<br>Period: 2008<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 1587.64 #<br>Period: 2009<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 1943.25 #<br>Period: 2010<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 2202.09 #<br>Period: 2011<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 2327.2 #<br>Period: 2012<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 3782.39 #<br>Period: 2013<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 4292.92 #<br>Period: 2014<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 3872.1 #<br>Period: 2015<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 3421.63 #<br>Period: 2016<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 4068.85 #<br>Period: 2017<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 3735.73 #<br>Period: 2018<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 4280.2 #<br>Period: 2019<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 4172.7 #<br>Period: 2020<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Exports - high technology: 5715.25 #<br>Period: 2021<br>REMIND_39 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [5329.1402865163045, 5338.2241930896134, 5348.2677266181518, 5359.4838915789524, 5386.6241283425798, 6419.0279331429356, 5920.4002408326678, 7120.1391646373886, 8135.5326695909198, 6008.5658629065692, 5964.1945917404701, 5992.959165110351, 5755.8068732195761, 6493.8114512404136, 6896.6031991307991, 7749.5208859108425, 8037.205786111811, 8008.9659040551842, 8941.1827078398637],
      "text": ["Exports - high technology: 5329.14 #<br>Period: 2003<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5338.22 #<br>Period: 2004<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5348.27 #<br>Period: 2005<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5359.48 #<br>Period: 2006<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5386.62 #<br>Period: 2007<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 6419.03 #<br>Period: 2008<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5920.4 #<br>Period: 2009<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 7120.14 #<br>Period: 2010<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 8135.53 #<br>Period: 2011<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 6008.57 #<br>Period: 2012<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5964.19 #<br>Period: 2013<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5992.96 #<br>Period: 2014<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5755.81 #<br>Period: 2015<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 6493.81 #<br>Period: 2016<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 6896.6 #<br>Period: 2017<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 7749.52 #<br>Period: 2018<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 8037.21 #<br>Period: 2019<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 8008.97 #<br>Period: 2020<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 8941.18 #<br>Period: 2021<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "text": ["Exports - high technology: 9111.91 #<br>Period: 2003<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 9128.4 #<br>Period: 2004<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 9144.93 #<br>Period: 2005<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 9161.38 #<br>Period: 2006<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 9179.23 #<br>Period: 2007<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 9815.06 #<br>Period: 2008<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 8748.93 #<br>Period: 2009<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 9653.23 #<br>Period: 2010<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 11394.28 #<br>Period: 2011<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 11593.46 #<br>Period: 2012<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 12217.83 #<br>Period: 2013<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 12406.29 #<br>Period: 2014<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 11101.14 #<br>Period: 2015<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 13210.41 #<br>Period: 2016<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 12735.37 #<br>Period: 2017<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 13230.63 #<br>Period: 2018<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 12986.86 #<br>Period: 2019<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 13519.05 #<br>Period: 2020<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 19887.84 #<br>Period: 2021<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [659.19000000000005, 659.19000000000005, 659.19000000000005, 659.19000000000005, 659.19000000000005, 659.19000000000005, 659.19000000000005, 659.19000000000005, 659.19000000000017, 464.81500000000011, 270.44, 299.13, 248.62, 249.19999999999996, 278.92000000000002, 153.09999999999999, 157.77000000000004, 119.89, 96.089999999999989],
      "text": ["Exports - high technology: 659.19 #<br>Period: 2003<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 659.19 #<br>Period: 2004<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 659.19 #<br>Period: 2005<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 659.19 #<br>Period: 2006<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 659.19 #<br>Period: 2007<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 659.19 #<br>Period: 2008<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 659.19 #<br>Period: 2009<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 659.19 #<br>Period: 2010<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 659.19 #<br>Period: 2011<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 464.82 #<br>Period: 2012<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 270.44 #<br>Period: 2013<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 299.13 #<br>Period: 2014<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 248.62 #<br>Period: 2015<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 249.2 #<br>Period: 2016<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 278.92 #<br>Period: 2017<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 153.1 #<br>Period: 2018<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 157.77 #<br>Period: 2019<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 119.89 #<br>Period: 2020<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - high technology: 96.09 #<br>Period: 2021<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "text": ["Exports - high technology: 11215.08 #<br>Period: 2003<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.08 #<br>Period: 2004<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.08 #<br>Period: 2005<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.08 #<br>Period: 2006<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.08 #<br>Period: 2007<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.08 #<br>Period: 2008<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.08 #<br>Period: 2009<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 10659.48 #<br>Period: 2010<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 14503.89 #<br>Period: 2011<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 13873.82 #<br>Period: 2012<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 17938.42 #<br>Period: 2013<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 18326.34 #<br>Period: 2014<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 14583.51 #<br>Period: 2015<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 14261.35 #<br>Period: 2016<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 15101.76 #<br>Period: 2017<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 20182.21 #<br>Period: 2018<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 23470.54 #<br>Period: 2019<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 21583.2 #<br>Period: 2020<br>REMIND_39 region code: IND<br>Countries in region: India", "Exports - high technology: 27446.65 #<br>Period: 2021<br>REMIND_39 region code: IND<br>Countries in region: India"],
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
      "text": ["Exports - high technology: 240506.01 #<br>Period: 2003<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 240506.01 #<br>Period: 2004<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 240506.01 #<br>Period: 2005<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 240506.01 #<br>Period: 2006<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 240506.01 #<br>Period: 2007<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 243004.98 #<br>Period: 2008<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 150884.06 #<br>Period: 2009<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 166039.75 #<br>Period: 2010<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 166463.7 #<br>Period: 2011<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 169065.94 #<br>Period: 2012<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 169222.37 #<br>Period: 2013<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 175881.16 #<br>Period: 2014<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 175243.76 #<br>Period: 2015<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 173921.75 #<br>Period: 2016<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 154545.03 #<br>Period: 2017<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 153808.47 #<br>Period: 2018<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 153923.49 #<br>Period: 2019<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 141538.56 #<br>Period: 2020<br>REMIND_39 region code: USA<br>Countries in region: United States", "Exports - high technology: 169217.26 #<br>Period: 2021<br>REMIND_39 region code: USA<br>Countries in region: United States"],
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
      "y": [4229.3000000000002, 4229.3000000000002, 4229.3000000000002, 4229.3000000000002, 4229.3000000000002, 7292.6999999999998, 7798.6899999999987, 9586.5, 9697.3199999999997, 10726.76, 13659.5, 16755.599999999999, 16500.619999999999, 16886.380000000005, 18835.619999999999, 21760.889999999999, 19829.130000000001, 19966.820000000003, 23834.310000000001],
      "text": ["Exports - high technology: 4229.3 #<br>Period: 2003<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 4229.3 #<br>Period: 2004<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 4229.3 #<br>Period: 2005<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 4229.3 #<br>Period: 2006<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 4229.3 #<br>Period: 2007<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 7292.7 #<br>Period: 2008<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 7798.69 #<br>Period: 2009<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 9586.5 #<br>Period: 2010<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 9697.32 #<br>Period: 2011<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 10726.76 #<br>Period: 2012<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 13659.5 #<br>Period: 2013<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 16755.6 #<br>Period: 2014<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 16500.62 #<br>Period: 2015<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 16886.38 #<br>Period: 2016<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 18835.62 #<br>Period: 2017<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 21760.89 #<br>Period: 2018<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 19829.13 #<br>Period: 2019<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 19966.82 #<br>Period: 2020<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Exports - high technology: 23834.31 #<br>Period: 2021<br>REMIND_39 region code: POL<br>Countries in region: Poland"],
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
      "y": [40.188219697139061, 40.180483577515119, 40.174948379910042, 40.168317505953759, 40.159610609197237, 39.885734418990438, 41.134379347844472, 40.729026456283407, 47.827364719060348, 58.726151876810249, 50.507104562676936, 65.150879211601719, 137.48940423480229, 27.01743230100195, 23.256776864546296, 38.418581295063333, 43.653179505153709, 59.408924905788815, 55.858220916606662],
      "text": ["Exports - high technology: 40.19 #<br>Period: 2003<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 40.18 #<br>Period: 2004<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 40.17 #<br>Period: 2005<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 40.17 #<br>Period: 2006<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 40.16 #<br>Period: 2007<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 39.89 #<br>Period: 2008<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 41.13 #<br>Period: 2009<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 40.73 #<br>Period: 2010<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 47.83 #<br>Period: 2011<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 58.73 #<br>Period: 2012<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 50.51 #<br>Period: 2013<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 65.15 #<br>Period: 2014<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 137.49 #<br>Period: 2015<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 27.02 #<br>Period: 2016<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 23.26 #<br>Period: 2017<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 38.42 #<br>Period: 2018<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 43.65 #<br>Period: 2019<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 59.41 #<br>Period: 2020<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 55.86 #<br>Period: 2021<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [1932.9199999999998, 1932.9200000000001, 1932.9200000000003, 1932.9200000000001, 1932.9199999999998, 2087.6999999999998, 1482.8200000000002, 2504.73, 2743.3800000000001, 2860.6499999999996, 2613.5700000000002, 2806.8599999999997, 2818.2300000000005, 2397.48, 2197.9499999999998, 2091.4000000000001, 1832.8299999999999, 1835.0400000000002, 2418.1700000000001],
      "text": ["Exports - high technology: 1932.92 #<br>Period: 2003<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 1932.92 #<br>Period: 2004<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 1932.92 #<br>Period: 2005<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 1932.92 #<br>Period: 2006<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 1932.92 #<br>Period: 2007<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 2087.7 #<br>Period: 2008<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 1482.82 #<br>Period: 2009<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 2504.73 #<br>Period: 2010<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 2743.38 #<br>Period: 2011<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 2860.65 #<br>Period: 2012<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 2613.57 #<br>Period: 2013<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 2806.86 #<br>Period: 2014<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 2818.23 #<br>Period: 2015<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 2397.48 #<br>Period: 2016<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 2197.95 #<br>Period: 2017<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 2091.4 #<br>Period: 2018<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 1832.83 #<br>Period: 2019<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 1835.04 #<br>Period: 2020<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Exports - high technology: 2418.17 #<br>Period: 2021<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa"],
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
      "text": ["Exports - high technology: 169493.51 #<br>Period: 2003<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 169493.51 #<br>Period: 2004<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 169493.51 #<br>Period: 2005<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 169493.51 #<br>Period: 2006<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 169493.51 #<br>Period: 2007<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 183022.57 #<br>Period: 2008<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 158680.29 #<br>Period: 2009<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 179569.61 #<br>Period: 2010<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 202276.36 #<br>Period: 2011<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 202764.81 #<br>Period: 2012<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 209260.63 #<br>Period: 2013<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 215614.57 #<br>Period: 2014<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 199429.95 #<br>Period: 2015<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 205076.59 #<br>Period: 2016<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 195686.92 #<br>Period: 2017<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 209722.67 #<br>Period: 2018<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 208148.37 #<br>Period: 2019<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 182351.77 #<br>Period: 2020<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 211891.21 #<br>Period: 2021<br>REMIND_39 region code: DEU<br>Countries in region: Germany"],
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
      "y": [8396.4430097145651, 8421.485226627723, 8455.1879239879763, 8492.1331872574701, 8534.4861897885421, 10347.312747158488, 8869.3952528149111, 10819.60531237465, 14270.276974626549, 14013.744968509851, 14149.960278386323, 15365.302670516467, 14093.469747421294, 14102.080172441798, 16799.060342661196, 20110.420880251459, 20664.590763536675, 21651.975794447731, 22618.848307007785],
      "text": ["Exports - high technology: 8396.44 #<br>Period: 2003<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 8421.49 #<br>Period: 2004<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 8455.19 #<br>Period: 2005<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 8492.13 #<br>Period: 2006<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 8534.49 #<br>Period: 2007<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 10347.31 #<br>Period: 2008<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 8869.4 #<br>Period: 2009<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 10819.61 #<br>Period: 2010<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 14270.28 #<br>Period: 2011<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 14013.74 #<br>Period: 2012<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 14149.96 #<br>Period: 2013<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 15365.3 #<br>Period: 2014<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 14093.47 #<br>Period: 2015<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 14102.08 #<br>Period: 2016<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 16799.06 #<br>Period: 2017<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 20110.42 #<br>Period: 2018<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 20664.59 #<br>Period: 2019<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 21651.98 #<br>Period: 2020<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 22618.85 #<br>Period: 2021<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [67020.360000000001, 67020.360000000001, 67020.360000000001, 67020.360000000001, 67020.360000000001, 66749.190000000002, 57034.330000000002, 23343.990000000005, 27780.07, 26187.419999999998, 25027.869999999999, 25849.279999999995, 30612.18, 37991.860000000001, 35187.470000000001, 36589.110000000008, 39354.030000000006, 43116.360000000001, 49839.639999999999],
      "text": ["Exports - high technology: 67020.36 #<br>Period: 2003<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 67020.36 #<br>Period: 2004<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 67020.36 #<br>Period: 2005<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 67020.36 #<br>Period: 2006<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 67020.36 #<br>Period: 2007<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 66749.19 #<br>Period: 2008<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 57034.33 #<br>Period: 2009<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 23343.99 #<br>Period: 2010<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 27780.07 #<br>Period: 2011<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 26187.42 #<br>Period: 2012<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 25027.87 #<br>Period: 2013<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 25849.28 #<br>Period: 2014<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 30612.18 #<br>Period: 2015<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 37991.86 #<br>Period: 2016<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 35187.47 #<br>Period: 2017<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 36589.11 #<br>Period: 2018<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 39354.03 #<br>Period: 2019<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 43116.36 #<br>Period: 2020<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Exports - high technology: 49839.64 #<br>Period: 2021<br>REMIND_39 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [130.91, 130.91, 130.91, 130.91, 130.91, 180.69, 209.62, 202.10999999999999, 213.85000000000002, 258.05000000000001, 289.52999999999997, 254.59, 278.11000000000001, 421.11999999999995, 261.73000000000002, 252.67999999999998, 270.57999999999998, 217.41, 158.44],
      "text": ["Exports - high technology: 130.91 #<br>Period: 2003<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 130.91 #<br>Period: 2004<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 130.91 #<br>Period: 2005<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 130.91 #<br>Period: 2006<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 130.91 #<br>Period: 2007<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 180.69 #<br>Period: 2008<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 209.62 #<br>Period: 2009<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 202.11 #<br>Period: 2010<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 213.85 #<br>Period: 2011<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 258.05 #<br>Period: 2012<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 289.53 #<br>Period: 2013<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 254.59 #<br>Period: 2014<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 278.11 #<br>Period: 2015<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 421.12 #<br>Period: 2016<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 261.73 #<br>Period: 2017<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 252.68 #<br>Period: 2018<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 270.58 #<br>Period: 2019<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 217.41 #<br>Period: 2020<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - high technology: 158.44 #<br>Period: 2021<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "text": ["Exports - high technology: 17465.62 #<br>Period: 2003<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 17467.93 #<br>Period: 2004<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 17470.32 #<br>Period: 2005<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 17475.15 #<br>Period: 2006<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 17481.74 #<br>Period: 2007<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 18685.69 #<br>Period: 2008<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 13883.66 #<br>Period: 2009<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 14817.28 #<br>Period: 2010<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 16386.38 #<br>Period: 2011<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 14284.88 #<br>Period: 2012<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 14086.71 #<br>Period: 2013<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 14067.83 #<br>Period: 2014<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 12606.35 #<br>Period: 2015<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 12447.25 #<br>Period: 2016<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 11542.78 #<br>Period: 2017<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 11795.03 #<br>Period: 2018<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 11950.32 #<br>Period: 2019<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 12307.58 #<br>Period: 2020<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 13736.55 #<br>Period: 2021<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "text": ["Exports - high technology: 85762.57 #<br>Period: 2003<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 85762.69 #<br>Period: 2004<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 85762.82 #<br>Period: 2005<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 85762.92 #<br>Period: 2006<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 85762.99 #<br>Period: 2007<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 98746.27 #<br>Period: 2008<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 87877.53 #<br>Period: 2009<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 105228.7 #<br>Period: 2010<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 111866.94 #<br>Period: 2011<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 114050.14 #<br>Period: 2012<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 118697.35 #<br>Period: 2013<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 120575.65 #<br>Period: 2014<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 109597.44 #<br>Period: 2015<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 108734.15 #<br>Period: 2016<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 108769.82 #<br>Period: 2017<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 117564.22 #<br>Period: 2018<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 120523.43 #<br>Period: 2019<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 87112.6 #<br>Period: 2020<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 97519.36 #<br>Period: 2021<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [68490.706694246212, 68490.058564458843, 68489.850129767845, 68489.782058063254, 68489.807355258235, 67136.284372928756, 48385.129357309423, 66358.066575032994, 75379.237184664278, 72758.573155186154, 74300.506831318373, 75612.326430412897, 74186.372600523304, 73420.420276695688, 73305.76203905062, 75186.462024569075, 76493.639312260595, 57840.576019527471, 66350.314886216307],
      "text": ["Exports - high technology: 68490.71 #<br>Period: 2003<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 68490.06 #<br>Period: 2004<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 68489.85 #<br>Period: 2005<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 68489.78 #<br>Period: 2006<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 68489.81 #<br>Period: 2007<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 67136.28 #<br>Period: 2008<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 48385.13 #<br>Period: 2009<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 66358.07 #<br>Period: 2010<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 75379.24 #<br>Period: 2011<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 72758.57 #<br>Period: 2012<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 74300.51 #<br>Period: 2013<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 75612.33 #<br>Period: 2014<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 74186.37 #<br>Period: 2015<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 73420.42 #<br>Period: 2016<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 73305.76 #<br>Period: 2017<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 75186.46 #<br>Period: 2018<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 76493.64 #<br>Period: 2019<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 57840.58 #<br>Period: 2020<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 66350.31 #<br>Period: 2021<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [16729.299999999996, 16729.299999999999, 16729.299999999999, 16729.299999999999, 16729.299999999996, 17672.52, 14164.719999999999, 15801.879999999999, 17846.669999999998, 18475.490000000002, 20792.970000000001, 21648.209999999999, 18084.509999999998, 17333.740000000005, 17021.300000000003, 16673.59, 15959.51, 15986.049999999999, 17002.73],
      "text": ["Exports - high technology: 16729.3 #<br>Period: 2003<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 16729.3 #<br>Period: 2004<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 16729.3 #<br>Period: 2005<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 16729.3 #<br>Period: 2006<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 16729.3 #<br>Period: 2007<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 17672.52 #<br>Period: 2008<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 14164.72 #<br>Period: 2009<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 15801.88 #<br>Period: 2010<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 17846.67 #<br>Period: 2011<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 18475.49 #<br>Period: 2012<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 20792.97 #<br>Period: 2013<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 21648.21 #<br>Period: 2014<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 18084.51 #<br>Period: 2015<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 17333.74 #<br>Period: 2016<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 17021.3 #<br>Period: 2017<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 16673.59 #<br>Period: 2018<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 15959.51 #<br>Period: 2019<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 15986.05 #<br>Period: 2020<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Exports - high technology: 17002.73 #<br>Period: 2021<br>REMIND_39 region code: AUT<br>Countries in region: Austria"],
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
      "y": [335156.69171206449, 335157.06966627843, 335164.7313353286, 335168.55015396228, 335169.6264960636, 382522.22217865166, 351501.40855793591, 464146.77838871512, 528558.86017036811, 581099.23555408069, 641827.89697064424, 639829.86434504425, 638231.47502577712, 581792.43457779277, 641697.88900440081, 717411.54947370908, 701697.58901948621, 743059.48893680668, 924463.3182233593],
      "text": ["Exports - high technology: 335156.69 #<br>Period: 2003<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 335157.07 #<br>Period: 2004<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 335164.73 #<br>Period: 2005<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 335168.55 #<br>Period: 2006<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 335169.63 #<br>Period: 2007<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 382522.22 #<br>Period: 2008<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 351501.41 #<br>Period: 2009<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 464146.78 #<br>Period: 2010<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 528558.86 #<br>Period: 2011<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 581099.24 #<br>Period: 2012<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 641827.9 #<br>Period: 2013<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 639829.86 #<br>Period: 2014<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 638231.48 #<br>Period: 2015<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 581792.43 #<br>Period: 2016<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 641697.89 #<br>Period: 2017<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 717411.55 #<br>Period: 2018<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 701697.59 #<br>Period: 2019<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 743059.49 #<br>Period: 2020<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 924463.32 #<br>Period: 2021<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [666.93290563694825, 662.81870501139088, 657.52210969918804, 626.19860277592466, 580.64089729912507, 1549.6017190468283, 1686.2238873755041, 1752.3928868450148, 1871.7324653685027, 1887.3500339409725, 1942.850349293537, 2228.7470046714297, 2455.7131249933773, 2041.9668043621668, 2045.5380757213761, 2212.4099831158887, 2131.0632467394676, 2348.1840594979767, 3111.1800048828236],
      "text": ["Exports - high technology: 666.93 #<br>Period: 2003<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Exports - high technology: 662.82 #<br>Period: 2004<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Exports - high technology: 657.52 #<br>Period: 2005<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Exports - high technology: 626.2 #<br>Period: 2006<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - high technology: 580.64 #<br>Period: 2007<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - high technology: 1549.6 #<br>Period: 2008<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports - high technology: 1686.22 #<br>Period: 2009<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports - high technology: 1752.39 #<br>Period: 2010<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports - high technology: 1871.73 #<br>Period: 2011<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports - high technology: 1887.35 #<br>Period: 2012<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - high technology: 1942.85 #<br>Period: 2013<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - high technology: 2228.75 #<br>Period: 2014<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - high technology: 2455.71 #<br>Period: 2015<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - high technology: 2041.97 #<br>Period: 2016<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Exports - high technology: 2045.54 #<br>Period: 2017<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Exports - high technology: 2212.41 #<br>Period: 2018<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Exports - high technology: 2131.06 #<br>Period: 2019<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - high technology: 2348.18 #<br>Period: 2020<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - high technology: 3111.18 #<br>Period: 2021<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [27584.614149739435, 27584.570090115976, 27584.306640466799, 27584.191476207732, 27584.473363549423, 29278.40942170038, 25491.587047240268, 29067.050307775804, 33521.305474022498, 29348.681998081709, 31658.254609512725, 32633.829476819246, 29874.12955354415, 30858.439133719265, 31638.577756172359, 32234.660969873607, 32282.362501248695, 32617.358407158514, 36531.727820361019],
      "text": ["Exports - high technology: 27584.61 #<br>Period: 2003<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 27584.57 #<br>Period: 2004<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 27584.31 #<br>Period: 2005<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 27584.19 #<br>Period: 2006<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 27584.47 #<br>Period: 2007<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 29278.41 #<br>Period: 2008<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 25491.59 #<br>Period: 2009<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 29067.05 #<br>Period: 2010<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 33521.31 #<br>Period: 2011<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 29348.68 #<br>Period: 2012<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 31658.25 #<br>Period: 2013<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 32633.83 #<br>Period: 2014<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 29874.13 #<br>Period: 2015<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 30858.44 #<br>Period: 2016<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 31638.58 #<br>Period: 2017<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 32234.66 #<br>Period: 2018<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 32282.36 #<br>Period: 2019<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 32617.36 #<br>Period: 2020<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Exports - high technology: 36531.73 #<br>Period: 2021<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [83718.320000000007, 83718.320000000022, 83718.320000000007, 83718.320000000007, 83718.320000000007, 78313.710000000006, 67839.889999999999, 77485.429999999993, 85917.610000000001, 81430.300000000003, 80845.639999999999, 84386.290000000008, 69698.580000000002, 70989.860000000001, 77733.570000000007, 85531.770000000004, 86980.979999999996, 87143.360000000001, 101298.57000000001],
      "text": ["Exports - high technology: 83718.32 #<br>Period: 2003<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 83718.32 #<br>Period: 2004<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 83718.32 #<br>Period: 2005<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 83718.32 #<br>Period: 2006<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 83718.32 #<br>Period: 2007<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 78313.71 #<br>Period: 2008<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 67839.89 #<br>Period: 2009<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 77485.43 #<br>Period: 2010<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 85917.61 #<br>Period: 2011<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 81430.3 #<br>Period: 2012<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 80845.64 #<br>Period: 2013<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 84386.29 #<br>Period: 2014<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 69698.58 #<br>Period: 2015<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 70989.86 #<br>Period: 2016<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 77733.57 #<br>Period: 2017<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 85531.77 #<br>Period: 2018<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 86980.98 #<br>Period: 2019<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 87143.36 #<br>Period: 2020<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Exports - high technology: 101298.57 #<br>Period: 2021<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [27214.83405627275, 27204.14631410563, 27193.455025156309, 27183.159438693645, 27174.17294311395, 30329.961919051122, 30793.104974721708, 17296.971692006493, 18875.597787654184, 17770.484711850389, 21983.142995986331, 25532.629259731268, 21500.796572248772, 25886.39674658763, 24008.291012565354, 26784.969851348615, 31430.787598541941, 32572.703485961865, 57698.152094421523],
      "text": ["Exports - high technology: 27214.83 #<br>Period: 2003<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 27204.15 #<br>Period: 2004<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 27193.46 #<br>Period: 2005<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 27183.16 #<br>Period: 2006<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 27174.17 #<br>Period: 2007<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 30329.96 #<br>Period: 2008<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 30793.1 #<br>Period: 2009<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 17296.97 #<br>Period: 2010<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 18875.6 #<br>Period: 2011<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 17770.48 #<br>Period: 2012<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 21983.14 #<br>Period: 2013<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 25532.63 #<br>Period: 2014<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 21500.8 #<br>Period: 2015<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 25886.4 #<br>Period: 2016<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 24008.29 #<br>Period: 2017<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 26784.97 #<br>Period: 2018<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 31430.79 #<br>Period: 2019<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 32572.7 #<br>Period: 2020<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - high technology: 57698.15 #<br>Period: 2021<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [1035.4523691486845, 1034.2128682213404, 1033.0209083804043, 1031.8460906484424, 1030.6420640288775, 1432.6630104947319, 1249.7187286896913, 1187.9017617791983, 1281.7530966611794, 1034.6659018478333, 862.95030780289505, 1211.0555418615877, 1199.8635559892809, 1275.2355276568057, 1245.1471058978159, 1579.1185270842068, 1597.6230443354248, 1795.4203061917469, 4002.7159824283253],
      "text": ["Exports - high technology: 1035.45 #<br>Period: 2003<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1034.21 #<br>Period: 2004<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1033.02 #<br>Period: 2005<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1031.85 #<br>Period: 2006<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1030.64 #<br>Period: 2007<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1432.66 #<br>Period: 2008<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1249.72 #<br>Period: 2009<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1187.9 #<br>Period: 2010<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1281.75 #<br>Period: 2011<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1034.67 #<br>Period: 2012<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 862.95 #<br>Period: 2013<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1211.06 #<br>Period: 2014<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1199.86 #<br>Period: 2015<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1275.24 #<br>Period: 2016<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1245.15 #<br>Period: 2017<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1579.12 #<br>Period: 2018<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1597.62 #<br>Period: 2019<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 1795.42 #<br>Period: 2020<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - high technology: 4002.72 #<br>Period: 2021<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "l": 53.333333333333343
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.611872146118724
    },
    "title": {
      "text": "Exports - high technology (REMIND_39)",
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
    "b55c610563a6": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c50fb2d40": {
      "y": {}
    }
  },
  "cur_data": "b55c610563a6",
  "visdat": {
    "b55c610563a6": ["function (y) ", "x"],
    "b55c50fb2d40": ["function (y) ", "x"]
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

  
