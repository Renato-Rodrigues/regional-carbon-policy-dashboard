(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Government_Taxes_on_international_trade_line') 

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
      "y": [16.469999999999999, 15.800000000000001, 15.819999999999999, 14.649999999999999, 15.729999999999999, 20.120000000000001, 13.68, 15.67, 15.330000000000002, 13.880000000000001, 10.720000000000001, 10.76, 8.0500000000000007, 7.1100000000000003, 6.4100000000000001, 7.4499999999999993, 13.160000000000002, 13.380000000000001, 15.040000000000001],
      "text": ["Taxes on international trade: 16.47 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 15.8 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 15.82 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 14.65 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 15.73 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 20.12 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 13.68 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 15.67 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 15.33 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 13.88 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 10.72 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 10.76 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 8.05 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 7.11 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 6.41 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 7.45 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 13.16 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 13.38 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Taxes on international trade: 15.04 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,68,27,1)",
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
      "y": [1.2694205792523974, 1.2116724903857443, 1.0715967531867383, 1.075340024157736, 1.039605510040903, 0.95841304148383577, 0.98803348871188112, 1.0134996684179869, 0.96118978572579339, 0.950365201645058, 0.92770110959712415, 0.92578963305668704, 0.88120447986609185, 0.92967383384403302, 0.86289453813011419, 0.85296855826016338, 0.85950982716850555, 0.91406584662561541, 0.89997698175828489],
      "text": ["Taxes on international trade: 1.27 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 1.21 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 1.07 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 1.08 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 1.04 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.96 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.99 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 1.01 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.96 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.95 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.93 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.93 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.88 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.93 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.86 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.85 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.86 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.91 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.9 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [7.5499999999999998, 7.4499999999999993, 5.8300000000000001, 5.4900000000000002, 5.04, 5.6299999999999999, 4.8799999999999999, 4.8499999999999996, 4.5899999999999999, 4.2400000000000002, 4.1500000000000004, 3.4000000000000004, 4.0599999999999996, 4.0599999999999996, 4.0599999999999996, 4.0599999999999996, 4.0599999999999996, 4.0599999999999996, 4.0599999999999996],
      "text": ["Taxes on international trade: 7.55 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 7.45 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 5.83 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 5.49 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 5.04 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 5.63 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 4.88 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 4.85 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 4.59 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 4.24 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 4.15 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 3.4 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 4.06 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 4.06 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 4.06 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 4.06 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 4.06 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 4.06 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Taxes on international trade: 4.06 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(8,48,107,1)",
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
      "y": [1.24, 1.1699999999999999, 1.25, 1.2600000000000002, 1.28, 1.3500000000000001, 1.3200000000000001, 1.22, 1.2700000000000002, 1.28, 1.29, 1.3299999999999998, 1.45, 1.4999999999999998, 1.4399999999999997, 1.6000000000000001, 1.29, 0.95000000000000007, 1.1200000000000001],
      "text": ["Taxes on international trade: 1.24 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.17 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.25 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.26 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.28 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.35 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.32 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.22 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.27 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.28 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.29 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.33 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.45 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.5 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.44 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.6 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.29 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 0.95 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Taxes on international trade: 1.12 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [2.6727383750594793, 2.518060579527134, 2.1162836694260694, 1.824523545367863, 2.1082426375348828, 2.0952876248971055, 2.1574393023663681, 2.0598404018602463, 1.9576289347324158, 2.1580372737129583, 2.2666630982785021, 2.4445338052333612, 2.7591858976688308, 3.3154161503205524, 3.1647072764214257, 3.2010844710536981, 3.0359461045431737, 3.6909139606631887, 3.2353625183755041],
      "text": ["Taxes on international trade: 2.67 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.52 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.12 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 1.82 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.11 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.1 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.16 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.06 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 1.96 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.16 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.27 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.44 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.76 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 3.32 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 3.16 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 3.2 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 3.04 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 3.69 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 3.24 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [1.4900000000000002, 1.49, 1.49, 1.49, 1.49, 1.4899999999999998, 1.4699999999999998, 1.1000000000000001, 1.0800000000000001, 1.05, 1.0600000000000001, 1.1499999999999997, 1.2800000000000002, 1.3, 1.23, 1.52, 1.4199999999999999, 1.3200000000000001, 1.5800000000000001],
      "text": ["Taxes on international trade: 1.49 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.49 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.49 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.49 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.49 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.49 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.47 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.1 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.08 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.05 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.06 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.15 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.28 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.3 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.23 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.52 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.42 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.32 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Taxes on international trade: 1.58 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [0.20999999999999996, 0.19, 0.17000000000000004, 0.16, 0.17999999999999999, 0.17000000000000001, 0.19, 0.20999999999999999, 0.19, 0.17999999999999999, 0.21000000000000002, 0.22, 0.22999999999999998, 0.23999999999999999, 0.22, 0.19999999999999998, 0.20000000000000001, 0.23999999999999999, 0.20999999999999999],
      "text": ["Taxes on international trade: 0.21 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.19 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.17 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.16 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.18 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.17 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.19 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.21 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.19 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.18 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.21 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.22 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.23 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.24 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.22 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.2 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.2 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.24 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Taxes on international trade: 0.21 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [1.8700000000000003, 1.8700000000000003, 1.8699999999999999, 1.8699999999999999, 1.8700000000000003, 1.8699999999999999, 1.8700000000000001, 1.8700000000000001, 2.0899999999999999, 2.1800000000000002, 2.4199999999999999, 2.3199999999999994, 2.2200000000000002, 1.6899999999999997, 1.7599999999999998, 2.0299999999999998, 1.99, 2.3400000000000003, 2.5199999999999996],
      "text": ["Taxes on international trade: 1.87 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 1.87 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 1.87 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 1.87 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 1.87 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 1.87 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 1.87 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 1.87 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 2.09 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 2.18 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 2.42 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 2.32 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 2.22 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 1.69 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 1.76 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 2.03 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 1.99 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 2.34 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Taxes on international trade: 2.52 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [6.9434825901525272, 6.8987716879556489, 6.4165150182353212, 4.3572011798526811, 4.3368404037367547, 3.8335049729798403, 2.5421834586633039, 2.6232832011306852, 2.5498290164665738, 2.5223661287684216, 2.412110305762829, 2.0231357958992735, 4.3471563580152068, 2.4167751706627123, 2.2419978040851323, 2.1695065696894331, 2.1559658585139423, 2.0719676231552229, 2.1409972408651008],
      "text": ["Taxes on international trade: 6.94 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 6.9 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 6.42 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 4.36 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 4.34 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 3.83 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 2.54 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Taxes on international trade: 2.62 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Taxes on international trade: 2.55 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 2.52 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 2.41 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 2.02 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 4.35 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 2.42 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 2.24 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 2.17 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 2.16 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 2.07 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Taxes on international trade: 2.14 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [4.0700000000000003, 3.8799999999999999, 3.3500000000000001, 3.3300000000000001, 3.1400000000000001, 3.5599999999999996, 3.7400000000000002, 4.0099999999999998, 3.8199999999999998, 2.4999999999999996, 2.7599999999999998, 2.1899999999999995, 2.0499999999999998, 1.8, 1.78, 1.5800000000000001, 1.4199999999999999, 1.3000000000000003, 1.3799999999999999],
      "text": ["Taxes on international trade: 4.07 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 3.88 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 3.35 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 3.33 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 3.14 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 3.56 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 3.74 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 4.01 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 3.82 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 2.5 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 2.76 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 2.19 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 2.05 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 1.8 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 1.78 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 1.58 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 1.42 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 1.3 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Taxes on international trade: 1.38 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [16.649999999999999, 17.350000000000001, 17.52, 20.32, 19.989999999999998, 22.190000000000005, 19.620000000000001, 21.460000000000001, 19.500000000000004, 18.980000000000004, 17.800000000000001, 19.370000000000005, 17.960000000000001, 18.050000000000001, 18.530000000000001, 20.919999999999998, 20.100000000000001, 18.829999999999998, 21.41],
      "text": ["Taxes on international trade: 16.65 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 17.35 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 17.52 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 20.32 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 19.99 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 22.19 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 19.62 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 21.46 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 19.5 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 18.98 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 17.8 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 19.37 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 17.96 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 18.05 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 18.53 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 20.92 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 20.1 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 18.83 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Taxes on international trade: 21.41 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [6.9149798522975745, 6.5083944224334846, 6.8657236183881007, 7.0222526565283623, 8.5864319359779042, 9.4588212992398422, 9.1015785007859744, 8.5613308732643532, 10.410886390998751, 8.714957094359244, 11.241712809256892, 10.414673662958263, 12.108828871931713, 11.483378882507893, 7.6537371330663069, 7.8535957004882126, 7.3005565587674788, 6.5283096231476883, 6.977368063547881],
      "text": ["Taxes on international trade: 6.91 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Taxes on international trade: 6.51 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Taxes on international trade: 6.87 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Taxes on international trade: 7.02 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Taxes on international trade: 8.59 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Taxes on international trade: 9.46 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 9.1 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 8.56 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 10.41 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 8.71 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 11.24 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 10.41 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 12.11 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Taxes on international trade: 11.48 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Taxes on international trade: 7.65 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Taxes on international trade: 7.85 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Taxes on international trade: 7.3 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Taxes on international trade: 6.53 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Taxes on international trade: 6.98 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [3.1200000000000001, 3.5380000000000003, 3.956, 4.3739999999999997, 4.7919999999999998, 5.21, 4.2699999999999996, 4.6299999999999999, 3.5499999999999998, 2.6099999999999999, 2.0699999999999998, 1.8899999999999999, 2.2200000000000002, 1.8, 1.7299999999999998, 1.48, 1.3800000000000001, 1.0700000000000001, 1.4199999999999999],
      "text": ["Taxes on international trade: 3.12 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 3.54 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 3.96 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 4.37 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 4.79 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 5.21 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 4.27 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 4.63 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 3.55 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 2.61 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 2.07 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 1.89 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 2.22 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 1.8 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 1.73 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 1.48 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 1.38 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 1.07 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Taxes on international trade: 1.42 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [15.366770382463756, 14.842463789767967, 14.441570679952411, 14.466672546154744, 14.767748199977348, 14.675975344568668, 14.688059457700513, 12.488880853365513, 12.084852206887566, 11.943122492452808, 11.562217151271295, 11.908726275366867, 10.927091909212439, 11.025717182236844, 11.14527902201729, 10.662862345413572, 10.266471982036965, 9.5304264805614913, 9.702334643335778],
      "text": ["Taxes on international trade: 15.37 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 14.84 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 14.44 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 14.47 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 14.77 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 14.68 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 14.69 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 12.49 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 12.08 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 11.94 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 11.56 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 11.91 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 10.93 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 11.03 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 11.15 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 10.66 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 10.27 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 9.53 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Taxes on international trade: 9.7 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(122,1,119,1)",
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
      "y": [12.419999999999998, 18.659999999999997, 24.190000000000001, 29.180000000000003, 22.52, 25.169999999999998, 25.530000000000001, 25.579999999999998, 25.610000000000003, 26.489999999999998, 25.41, 25.110000000000003, 13.23, 10.130000000000001, 9.1600000000000001, 10.810000000000002, 8.3699999999999992, 4.9400000000000013, 7.8899999999999997],
      "text": ["Taxes on international trade: 12.42 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 18.66 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 24.19 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 29.18 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 22.52 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 25.17 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 25.53 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 25.58 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 25.61 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 26.49 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 25.41 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 25.11 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 13.23 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 10.13 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 9.16 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 10.81 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 8.37 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 4.94 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Taxes on international trade: 7.89 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [16.674023638249658, 16.606545109810984, 15.09556512208353, 14.620388250788762, 12.325188579684673, 10.25684928269553, 10.345837191661179, 10.200369833669498, 8.8707903762516658, 9.3328204843727391, 9.8807761253454469, 9.6815089055478136, 9.9530177967626798, 10.4542820411476, 11.010536264884292, 10.96487630638344, 11.047035953109219, 10.90120169418288, 12.593397061707314],
      "text": ["Taxes on international trade: 16.67 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Taxes on international trade: 16.61 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Taxes on international trade: 15.1 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Taxes on international trade: 14.62 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Taxes on international trade: 12.33 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Taxes on international trade: 10.26 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Taxes on international trade: 10.35 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Taxes on international trade: 10.2 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Taxes on international trade: 8.87 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Taxes on international trade: 9.33 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Taxes on international trade: 9.88 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Taxes on international trade: 9.68 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Taxes on international trade: 9.95 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Taxes on international trade: 10.45 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Taxes on international trade: 11.01 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Taxes on international trade: 10.96 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Taxes on international trade: 11.05 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Taxes on international trade: 10.9 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Taxes on international trade: 12.59 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(129,15,124,1)",
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
      "y": [25.129999999999995, 32.560000000000002, 32.390000000000001, 30.919999999999998, 27.089999999999996, 26.550000000000001, 24.350000000000001, 24.299999999999997, 24.559999999999999, 23.420000000000005, 20.57, 20.449999999999999, 23.73, 24.550000000000001, 10.120000000000001, 9.9700000000000006, 9.2699999999999996, 8.6099999999999994, 9.3199999999999985],
      "text": ["Taxes on international trade: 25.13 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 32.56 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 32.39 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 30.92 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 27.09 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 26.55 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 24.35 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 24.3 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 24.56 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 23.42 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 20.57 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 20.45 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 23.73 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 24.55 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 10.12 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 9.97 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 9.27 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 8.61 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Taxes on international trade: 9.32 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [3.1800000000000002, 3.0200000000000005, 3.2075, 3.395, 3.5825, 3.77, 2.2000000000000002, 2.9099999999999997, 4.4699999999999998, 3.71, 3.2999999999999998, 2.7799999999999998, 2.2799999999999998, 2.2200000000000002, 2.3199999999999998, 2.3500000000000001, 2.0600000000000001, 2.2000000000000002, 3.6299999999999994],
      "text": ["Taxes on international trade: 3.18 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 3.02 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 3.21 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 3.4 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 3.58 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 3.77 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 2.2 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 2.91 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 4.47 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 3.71 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 3.3 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 2.78 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 2.28 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 2.22 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 2.32 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 2.35 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 2.06 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 2.2 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Taxes on international trade: 3.63 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [7.5283213771295792, 8.7536699198218297, 7.2833334545337669, 7.3602044822412536, 7.2661966256445671, 7.0437916571522248, 7.317125821725619, 6.7153897959502329, 6.9699214970862009, 7.2862088833372853, 6.6832069454221239, 7.2559702577469007, 6.6736879051251279, 7.2333621516147266, 6.6981103233492796, 6.6277686101860391, 6.1528057353275534, 7.3015557291824802, 7.1260522074675006],
      "text": ["Taxes on international trade: 7.53 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 8.75 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 7.28 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 7.36 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 7.27 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 7.04 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 7.32 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 6.72 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 6.97 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 7.29 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 6.68 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 7.26 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 6.67 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 7.23 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 6.7 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 6.63 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 6.15 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 7.3 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Taxes on international trade: 7.13 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [9.7200000000000006, 8.4000000000000004, 7.4400000000000013, 6.21, 5.5199999999999996, 5.2800000000000002, 4.5599999999999996, 4.5199999999999996, 4.4299999999999997, 4.9400000000000004, 4.1299999999999999, 4.04, 3.5499999999999998, 3.3700000000000001, 3.0600000000000001, 2.9300000000000002, 3.0099999999999998, 2.7799999999999998, 3.1099999999999999],
      "text": ["Taxes on international trade: 9.72 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 8.4 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 7.44 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 6.21 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 5.52 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 5.28 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 4.56 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 4.52 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 4.43 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 4.94 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 4.13 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 4.04 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 3.55 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 3.37 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 3.06 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 2.93 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 3.01 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 2.78 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Taxes on international trade: 3.11 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [11.552707387135468, 11.512825877301029, 10.961308331713882, 9.1119440325495606, 10.069506248728194, 9.0994002656520099, 9.4490408897402141, 9.8346055788955908, 7.5195365210516032, 11.863587081733209, 10.900482054516207, 9.8461736639099868, 10.022192127666864, 9.5067486316685219, 9.4831496735023144, 9.9165879240705461, 9.7230349912245657, 9.8392694422783435, 10.127638327441559],
      "text": ["Taxes on international trade: 11.55 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Taxes on international trade: 11.51 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Taxes on international trade: 10.96 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 9.11 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 10.07 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 9.1 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 9.45 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 9.83 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 7.52 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 11.86 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 10.9 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 9.85 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 10.02 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 9.51 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 9.48 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 9.92 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 9.72 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 9.84 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 10.13 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(158,202,225,1)",
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
      "y": [3, 2.0299999999999998, 1.8200000000000001, 1.5700000000000001, 1.28, 1.3500000000000001, 0.89000000000000001, 1.1299999999999999, 1.0600000000000003, 1.0900000000000001, 1.05, 1.1000000000000001, 0.96000000000000008, 0.86999999999999988, 0.81000000000000005, 0.81999999999999995, 0.70999999999999996, 0.67000000000000004, 0.83999999999999997],
      "text": ["Taxes on international trade: 3 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 2.03 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 1.82 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 1.57 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 1.28 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 1.35 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 0.89 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 1.13 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 1.06 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 1.09 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 1.05 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 1.1 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 0.96 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 0.87 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 0.81 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 0.82 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 0.71 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 0.67 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Taxes on international trade: 0.84 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [0.93000000000000005, 0.93000000000000005, 0.93000000000000005, 0.93000000000000016, 0.93000000000000005, 0.93000000000000005, 0.80000000000000016, 0.91000000000000014, 1.1200000000000001, 1.1000000000000001, 1.21, 1.1100000000000001, 1.22, 1.21, 1.45, 1.45, 1.4399999999999999, 1.78, 1.6899999999999999],
      "text": ["Taxes on international trade: 0.93 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 0.93 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 0.93 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 0.93 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 0.93 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 0.93 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 0.8 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 0.91 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 1.12 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 1.1 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 1.21 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 1.11 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 1.22 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 1.21 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 1.45 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 1.45 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 1.44 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 1.78 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Taxes on international trade: 1.69 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [31.269999999999996, 32.689999999999998, 33.859999999999999, 48.130000000000003, 48.859999999999999, 30.23, 24.809999999999999, 29.09, 29.66, 38.310000000000002, 33.189999999999998, 19.219999999999999, 18.800000000000001, 19.309999999999999, 18.739999999999998, 21.889999999999997, 15.19, 17.809999999999999, 17.809999999999999],
      "text": ["Taxes on international trade: 31.27 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 32.69 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 33.86 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 48.13 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 48.86 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 30.23 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 24.81 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 29.09 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 29.66 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 38.31 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 33.19 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 19.22 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 18.8 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 19.31 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 18.74 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 21.89 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 15.19 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 17.81 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Taxes on international trade: 17.81 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,1,126,1)",
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
      "text": ["Taxes on international trade: 2.16 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 1.75 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 1.69 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 1.71 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.16 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.16 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.15 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.15 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.15 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.17 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.09 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [7.4000000000000004, 8.1899999999999995, 5.7300000000000004, 5.4400000000000004, 5.2800000000000011, 5.5199999999999996, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6.0000000000000009, 6.0000000000000009, 6],
      "text": ["Taxes on international trade: 7.4 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 8.19 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 5.73 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 5.44 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 5.28 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 5.52 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 6 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 6 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 6 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 6 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 6 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 6 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 6 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 6 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 6 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 6 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 6 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 6 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Taxes on international trade: 6 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "text": ["Taxes on international trade: 14.6 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 14.86 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 14.43 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 15.17 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 14.66 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 14.14 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 11.41 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 13.46 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 14.82 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 14.87 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 13.21 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 13.04 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 12.29 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 11.29 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 6.21 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 4.51 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 4.51 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 4.51 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Taxes on international trade: 4.51 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "text": ["Taxes on international trade: 1.12 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.13 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.08 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.04 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.07 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.12 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.02 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.16 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.23 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.23 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.12 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.12 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.1 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.08 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.02 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.48 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 2.09 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.81 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Taxes on international trade: 2.02 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [1.3, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Taxes on international trade: 1.3 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0.5 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [2.3599999999999999, 3.2599999999999993, 3.8300000000000001, 4.2300000000000004, 4.1200000000000001, 3.1600000000000001, 2.6600000000000001, 3.3999999999999999, 3.8799999999999994, 4.0700000000000003, 4.1200000000000001, 3.3700000000000001, 3.4900000000000007, 3.2600000000000002, 3.3900000000000001, 3.6600000000000001, 3.3899999999999997, 2.98, 3.2399999999999998],
      "text": ["Taxes on international trade: 2.36 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 3.26 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 3.83 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 4.23 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 4.12 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 3.16 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 2.66 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 3.4 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 3.88 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 4.07 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 4.12 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 3.37 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 3.49 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 3.26 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 3.39 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 3.66 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 3.39 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 2.98 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Taxes on international trade: 3.24 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "text": ["Taxes on international trade: 0.95 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0.35 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0.05 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0.05 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0.05 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [1.6399999999999999, 1.6399999999999999, 1.6399999999999999, 1.6399999999999997, 1.6399999999999999, 1.6400000000000001, 1.6399999999999997, 1.6399999999999997, 1.28, 1.4299999999999997, 1.53, 1.8799999999999997, 3.52, 4.9800000000000004, 2.9100000000000001, 1.7799999999999998, 1.8700000000000003, 2.2700000000000005, 2.27],
      "text": ["Taxes on international trade: 1.64 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 1.64 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 1.64 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 1.64 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 1.64 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 1.64 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 1.64 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 1.64 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 1.28 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 1.43 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 1.53 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 1.88 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 3.52 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 4.98 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 2.91 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 1.78 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 1.87 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 2.27 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Taxes on international trade: 2.27 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [0, 0, 0.0099999999999999985, -0.029999999999999995, -0.010000000000000002, -0.01, -0.01, -0.01, 0, -0.0099999999999999985, 0, -0.0099999999999999985, -0.0099999999999999985, -0.0099999999999999967, -0.01, -0.0099999999999999985, -0.0099999999999999967, 0, 0],
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.03 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0.04 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0.63 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: -0.02 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "text": ["Taxes on international trade: -15.83 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: -15.83 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: -15.83 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 5.03 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 3.15 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 4.84 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 3.71 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 4.44 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 4.72 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 4.71 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 4.12 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 2.84 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 2.36 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 2.27 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 2.31 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 1.91 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 1.85 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 1.83 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 1.67 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [3.4714384465745995, 3.5409965708321853, 3.5075135562204749, 3.0097078281420684, 2.9256985691204682, 2.4313524519618332, 1.7744478487363553, 2.6487777376012169, 2.6357351795464536, 2.6679807590781954, 2.6027642651753653, 2.5453369889521782, 3.184441614788621, 2.982440770584577, 3.2444555888713817, 3.3223475585520519, 2.9825093486680871, 3.133562574816775, 3.4504379813739052],
      "text": ["Taxes on international trade: 3.47 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Taxes on international trade: 3.54 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Taxes on international trade: 3.51 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Taxes on international trade: 3.01 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Taxes on international trade: 2.93 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Taxes on international trade: 2.43 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Taxes on international trade: 1.77 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Taxes on international trade: 2.65 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Taxes on international trade: 2.64 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Taxes on international trade: 2.67 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Taxes on international trade: 2.6 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Taxes on international trade: 2.55 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Taxes on international trade: 3.18 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Taxes on international trade: 2.98 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Taxes on international trade: 3.24 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Taxes on international trade: 3.32 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Taxes on international trade: 2.98 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Taxes on international trade: 3.13 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Taxes on international trade: 3.45 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.020000000000000004, 0.029999999999999999, 0.029999999999999999, 0.040000000000000008, 0.039999999999999994, 0.040000000000000001, 0.05000000000000001, 0.059999999999999984, 0.050000000000000003, 0.040000000000000008],
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0.03 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0.03 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0.04 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0.04 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0.04 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0.05 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0.06 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0.05 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Taxes on international trade: 0.04 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [0.023274645551164288, 0.0049047509154220527, 0.0049810511028343463, 0.0007614760535000196, 0.0026264768578432634, 0.00027643881409498359, 0, 0, 0, 0, 0, 0.0067429788380309842, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Taxes on international trade: 0.02 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "text": ["Taxes on international trade: 0.05 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.03 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.03 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.03 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.04 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.04 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "text": ["Taxes on international trade: 0.25 % (total revenue)<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.11 % (total revenue)<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.04 % (total revenue)<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Taxes on international trade (REMIND_54)",
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
    "b55c3ea93abc": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c13a315e3": {
      "y": {}
    }
  },
  "cur_data": "b55c3ea93abc",
  "visdat": {
    "b55c3ea93abc": ["function (y) ", "x"],
    "b55c13a315e3": ["function (y) ", "x"]
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

  
