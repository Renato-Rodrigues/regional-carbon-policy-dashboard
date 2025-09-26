(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_39_Trade_Exports___goods_and_services_bar') 

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
      "width": 0.89999999999999858,
      "base": 0,
      "x": [17],
      "y": [69.98064771384017],
      "text": "Exports - goods and services: 69.98 % (GDP)<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,109,44,1)",
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
      "x": [45],
      "y": [24.173263484205616],
      "text": "Exports - goods and services: 24.17 % (GDP)<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Guatemala; Ecuador; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Belize; Bahamas; Guadeloupe; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,109,44,1)",
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
      "x": [49],
      "y": [30.909999999999997],
      "text": "Exports - goods and services: 30.91 % (GDP)<br>REMIND_39 region code: CAN<br>Countries in region: Canada",
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
      "x": [38],
      "y": [19.012918831639777],
      "text": "Exports - goods and services: 19.01 % (GDP)<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara",
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
      "x": [50],
      "y": [22.091616909242575],
      "text": "Exports - goods and services: 22.09 % (GDP)<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(33,113,181,1)",
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
      "x": [44],
      "y": [41.100000000000001],
      "text": "Exports - goods and services: 41.1 % (GDP)<br>REMIND_39 region code: MEX<br>Countries in region: Mexico",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(35,139,69,1)",
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
      "y": [41.740000000000002],
      "text": "Exports - goods and services: 41.74 % (GDP)<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(35,139,69,1)",
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
      "x": [43],
      "y": [19.559999999999995],
      "text": "Exports - goods and services: 19.56 % (GDP)<br>REMIND_39 region code: BRA<br>Countries in region: Brazil",
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
      "x": [18],
      "y": [42.670988844861434],
      "text": "Exports - goods and services: 42.67 % (GDP)<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)",
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
      "width": 0.90000000000000213,
      "base": 0,
      "x": [32],
      "y": [42.039999999999999],
      "text": "Exports - goods and services: 42.04 % (GDP)<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(77,0,75,1)",
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
      "x": [22],
      "y": [34.099154533727891],
      "text": "Exports - goods and services: 34.1 % (GDP)<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Tajikistan; Azerbaijan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(105,105,105,1)",
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
      "y": [29.890000000000001],
      "text": "Exports - goods and services: 29.89 % (GDP)<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation",
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
      "x": [31],
      "y": [55.05364588005407],
      "text": "Exports - goods and services: 55.05 % (GDP)<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(136,65,157,1)",
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
      "x": [30],
      "y": [21.41],
      "text": "Exports - goods and services: 21.41 % (GDP)<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia",
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
      "width": 0.90000000000000568,
      "base": 0,
      "x": [33],
      "y": [9.1428792788989366],
      "text": "Exports - goods and services: 9.14 % (GDP)<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(140,150,198,1)",
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
      "x": [24],
      "y": [18.200000000000003],
      "text": "Exports - goods and services: 18.2 % (GDP)<br>REMIND_39 region code: JPN<br>Countries in region: Japan",
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
      "x": [19],
      "y": [35.300000000000004],
      "text": "Exports - goods and services: 35.3 % (GDP)<br>REMIND_39 region code: TUR<br>Countries in region: Turkey",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(161,217,155,1)",
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
      "y": [56.444568279453314],
      "text": "Exports - goods and services: 56.44 % (GDP)<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia",
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
      "y": [36.131577041285446],
      "text": "Exports - goods and services: 36.13 % (GDP)<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal",
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
      "width": 0.90000000000000568,
      "base": 0,
      "x": [35],
      "y": [22.84],
      "text": "Exports - goods and services: 22.84 % (GDP)<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of",
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
      "x": [28],
      "y": [21.510000000000002],
      "text": "Exports - goods and services: 21.51 % (GDP)<br>REMIND_39 region code: IND<br>Countries in region: India",
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
      "x": [47],
      "y": [10.890000000000001],
      "text": "Exports - goods and services: 10.89 % (GDP)<br>REMIND_39 region code: USA<br>Countries in region: United States",
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
      "y": [57.909999999999989],
      "text": "Exports - goods and services: 57.91 % (GDP)<br>REMIND_39 region code: POL<br>Countries in region: Poland",
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
      "width": 0.90000000000000568,
      "base": 0,
      "x": [41],
      "y": [20.901324996182581],
      "text": "Exports - goods and services: 20.9 % (GDP)<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Gabon; Botswana; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(250,159,181,1)",
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
      "x": [40],
      "y": [31.189999999999998],
      "text": "Exports - goods and services: 31.19 % (GDP)<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa",
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
      "y": [47.030000000000001],
      "text": "Exports - goods and services: 47.03 % (GDP)<br>REMIND_39 region code: DEU<br>Countries in region: Germany",
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
      "y": [78.150304492454907],
      "text": "Exports - goods and services: 78.15 % (GDP)<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia",
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
      "y": [134.41],
      "text": "Exports - goods and services: 134.41 % (GDP)<br>REMIND_39 region code: IRL<br>Countries in region: Ireland",
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
      "width": 0.90000000000000568,
      "base": 0,
      "x": [37],
      "y": [32.979999999999997],
      "text": "Exports - goods and services: 32.98 % (GDP)<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia",
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
      "y": [48.192437267075327],
      "text": "Exports - goods and services: 48.19 % (GDP)<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands",
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
      "y": [29.449999999999996],
      "text": "Exports - goods and services: 29.45 % (GDP)<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories",
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
      "y": [28.819674532801706],
      "text": "Exports - goods and services: 28.82 % (GDP)<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory",
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
      "y": [55.899999999999999],
      "text": "Exports - goods and services: 55.9 % (GDP)<br>REMIND_39 region code: AUT<br>Countries in region: Austria",
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
      "x": [26],
      "y": [20.933447496704581],
      "text": "Exports - goods and services: 20.93 % (GDP)<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao",
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
      "width": 0.90000000000000568,
      "base": 0,
      "x": [36],
      "y": [30.595947423758115],
      "text": "Exports - goods and services: 30.6 % (GDP)<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain",
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
      "y": [33.880990477070817],
      "text": "Exports - goods and services: 33.88 % (GDP)<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta",
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
      "y": [83.069999999999993],
      "text": "Exports - goods and services: 83.07 % (GDP)<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands",
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
      "y": [93.353007111169475],
      "text": "Exports - goods and services: 93.35 % (GDP)<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg",
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
      "y": [45.940189343117865],
      "text": "Exports - goods and services: 45.94 % (GDP)<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus",
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
      "b": 67.945205479452099,
      "l": 35.799086757990878
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.611872146118724
    },
    "title": {
      "text": "Exports - goods and services (REMIND_39)",
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
      "range": [0.40000000000000002, 50.600000000000001],
      "tickmode": "array",
      "ticktext": ["DEU", "FRA", "ITA", "GRC", "ESW", "AUT", "NLD", "BELUX", "POL", "ECE_other", "ENC", "ECS", "IRL", "GBR", "", "NOR", "NEN_other", "NES_EU", "TUR", "RUS", "CAS", "JPN", "CHA", "IND", "IDN", "SEA", "KOR", "OAS_central", "IRN", "MEA_other", "SAU", "NAF", "ZAF", "AFC", "BRA", "MEX", "OLA", "USA", "CAN", "ANZ"],
      "tickvals": [1, 2, 3, 3.9999999999999996, 5, 6, 7, 8, 9, 10, 11, 12, 13.000000000000002, 14, 15, 16, 17, 18, 19, 21, 22, 24, 26, 27.999999999999996, 30.000000000000004, 31, 32, 33, 35, 36, 37, 38, 40, 41, 43, 44, 45, 47, 49, 50],
      "categoryorder": "array",
      "categoryarray": ["DEU", "FRA", "ITA", "GRC", "ESW", "AUT", "NLD", "BELUX", "POL", "ECE_other", "ENC", "ECS", "IRL", "GBR", "", "NOR", "NEN_other", "NES_EU", "TUR", "RUS", "CAS", "JPN", "CHA", "IND", "IDN", "SEA", "KOR", "OAS_central", "IRN", "MEA_other", "SAU", "NAF", "ZAF", "AFC", "BRA", "MEX", "OLA", "USA", "CAN", "ANZ"],
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
      "range": [0, 184.30000000000001],
      "tickmode": "array",
      "ticktext": ["0", "50", "100", "150"],
      "tickvals": [0, 50.000000000000007, 100, 150],
      "categoryorder": "array",
      "categoryarray": ["0", "50", "100", "150"],
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
    "b55c6273b0e": {
      "x": {},
      "fill": {},
      "text": {},
      "y": {},
      "type": "bar"
    },
    "b55c68715fb4": {
      "y": {}
    }
  },
  "cur_data": "b55c6273b0e",
  "visdat": {
    "b55c6273b0e": ["function (y) ", "x"],
    "b55c68715fb4": ["function (y) ", "x"]
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

  
