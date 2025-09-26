(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_26_Government_Number_of_taxes___paid_by_businesses_bar') 

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
      "orientation": "v",
      "width": 0.90000000000000568,
      "base": 0,
      "x": [37],
      "y": [9.0418077430533916],
      "text": "Number of taxes - paid by businesses: 9.04 # (taxes)<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(8,81,156,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.90000000000000568,
      "base": 0,
      "x": [33],
      "y": [15.940266538018108],
      "text": "Number of taxes - paid by businesses: 15.94 # (taxes)<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Guatemala; Ecuador; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Belize; Bahamas; Guadeloupe; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(65,171,93,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [16],
      "y": [13.876309315925061],
      "text": "Number of taxes - paid by businesses: 13.88 # (taxes)<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(65,171,93,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [29],
      "y": [24.44768528703505],
      "text": "Number of taxes - paid by businesses: 24.45 # (taxes)<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(107,174,214,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [17],
      "y": [10.669304191869671],
      "text": "Number of taxes - paid by businesses: 10.67 # (taxes)<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(116,196,118,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [19],
      "y": [11.068446373974375],
      "text": "Number of taxes - paid by businesses: 11.07 # (taxes)<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Tajikistan; Azerbaijan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(128,128,128,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [27],
      "y": [25.275729431701137],
      "text": "Number of taxes - paid by businesses: 25.28 # (taxes)<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(140,107,177,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [21],
      "y": [19],
      "text": "Number of taxes - paid by businesses: 19 # (taxes)<br>REMIND_26 region code: JPN<br>Countries in region: Japan",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(152,0,67,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [12],
      "y": [12.913105991730337],
      "text": "Number of taxes - paid by businesses: 12.91 # (taxes)<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(217,72,1,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.90000000000000036,
      "base": 0,
      "x": [5],
      "y": [8.8206601430917253],
      "text": "Number of taxes - paid by businesses: 8.82 # (taxes)<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(217,72,1,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [25],
      "y": [11],
      "text": "Number of taxes - paid by businesses: 11 # (taxes)<br>REMIND_26 region code: IND<br>Countries in region: India",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(220,0,5,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.90000000000000568,
      "base": 0,
      "x": [35],
      "y": [10.999999999999998],
      "text": "Number of taxes - paid by businesses: 11 # (taxes)<br>REMIND_26 region code: USA<br>Countries in region: United States",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(220,0,5,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [9],
      "y": [7],
      "text": "Number of taxes - paid by businesses: 7 # (taxes)<br>REMIND_26 region code: POL<br>Countries in region: Poland",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(241,105,19,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [31],
      "y": [37.531023717732836],
      "text": "Number of taxes - paid by businesses: 37.53 # (taxes)<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Gabon; Botswana; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(252,197,192,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999991,
      "base": 0,
      "x": [1],
      "y": [9],
      "text": "Number of taxes - paid by businesses: 9 # (taxes)<br>REMIND_26 region code: DEU<br>Countries in region: Germany",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(253,141,60,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [10],
      "y": [8.1691993547353388],
      "text": "Number of taxes - paid by businesses: 8.17 # (taxes)<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(253,141,60,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [13],
      "y": [9],
      "text": "Number of taxes - paid by businesses: 9 # (taxes)<br>REMIND_26 region code: IRL<br>Countries in region: Ireland",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(253,141,60,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [11],
      "y": [7.5349083434550419],
      "text": "Number of taxes - paid by businesses: 7.53 # (taxes)<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(254,178,76,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.90000000000000013,
      "base": 0,
      "x": [2],
      "y": [8.9991998698328857],
      "text": "Number of taxes - paid by businesses: 9 # (taxes)<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(254,178,76,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [14],
      "y": [8.9528268403007569],
      "text": "Number of taxes - paid by businesses: 8.95 # (taxes)<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(254,178,76,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.90000000000000036,
      "base": 0,
      "x": [6],
      "y": [12],
      "text": "Number of taxes - paid by businesses: 12 # (taxes)<br>REMIND_26 region code: AUT<br>Countries in region: Austria",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(254,196,79,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999858,
      "base": 0,
      "x": [23],
      "y": [6.8644009682375442],
      "text": "Number of taxes - paid by businesses: 6.86 # (taxes)<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(254,196,79,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.90000000000000036,
      "base": 0,
      "x": [3],
      "y": [13.94784364015455],
      "text": "Number of taxes - paid by businesses: 13.95 # (taxes)<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(254,217,118,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.90000000000000036,
      "base": 0,
      "x": [7],
      "y": [9],
      "text": "Number of taxes - paid by businesses: 9 # (taxes)<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(254,217,118,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.89999999999999947,
      "base": 0,
      "x": [8],
      "y": [11.628218983419211],
      "text": "Number of taxes - paid by businesses: 11.63 # (taxes)<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(255,237,160,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "orientation": "v",
      "width": 0.90000000000000036,
      "base": 0,
      "x": [4],
      "y": [8.8865904862282612],
      "text": "Number of taxes - paid by businesses: 8.89 # (taxes)<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(255,237,160,1)",
        "line": {
          "width": 1.8897637795275593,
          "color": "transparent"
        }
      },
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
      "b": 56.255707762557101,
      "l": 35.799086757990878
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.611872146118724
    },
    "title": {
      "text": "Number of taxes - paid by businesses (REMIND_26)",
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
      "range": [0.40000000000000002, 37.600000000000001],
      "tickmode": "array",
      "ticktext": ["DEU", "FRA", "ITA", "GRC", "ESW", "AUT", "NLD", "BELUX", "POL", "ECE_other", "ENC", "ECS", "IRL", "GBR", "", "NEN", "NES", "REF", "JPN", "CHA", "IND", "OAS", "MEA", "SSA", "LAM", "USA", "CAZ"],
      "tickvals": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15.000000000000002, 16, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
      "categoryorder": "array",
      "categoryarray": ["DEU", "FRA", "ITA", "GRC", "ESW", "AUT", "NLD", "BELUX", "POL", "ECE_other", "ENC", "ECS", "IRL", "GBR", "", "NEN", "NES", "REF", "JPN", "CHA", "IND", "OAS", "MEA", "SSA", "LAM", "USA", "CAZ"],
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
      "range": [0, 99.000000000000014],
      "tickmode": "array",
      "ticktext": ["0", "25", "50", "75", "100"],
      "tickvals": [0, 25, 49.999999999999993, 75, 100],
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
        "text": "# (taxes)",
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
    "b55ce8c58f5": {
      "x": {},
      "fill": {},
      "text": {},
      "y": {},
      "type": "bar"
    },
    "b55c210e2f8": {
      "y": {}
    }
  },
  "cur_data": "b55ce8c58f5",
  "visdat": {
    "b55ce8c58f5": ["function (y) ", "x"],
    "b55c210e2f8": ["function (y) ", "x"]
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

  
