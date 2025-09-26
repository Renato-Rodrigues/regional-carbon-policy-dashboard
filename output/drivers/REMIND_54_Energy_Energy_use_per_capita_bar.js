(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Energy_Energy_use_per_capita_bar') 

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
      "x": [57],
      "y": [2029.9200000000003],
      "text": "Energy use per capita: 2029.92 energy per capita<br>REMIND_54 region code: ARG<br>Countries in region: Argentina",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,68,27,1)",
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
      "x": [20],
      "y": [3553.3569340983267],
      "text": "Energy use per capita: 3553.36 energy per capita<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland",
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
      "x": [60],
      "y": [1100.4985223262001],
      "text": "Energy use per capita: 1100.5 energy per capita<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Guatemala; Ecuador; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Belize; Bahamas; Guadeloupe; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island",
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
      "x": [46],
      "y": [782.75999999999999],
      "text": "Energy use per capita: 782.76 energy per capita<br>REMIND_54 region code: EGY<br>Countries in region: Egypt",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(8,48,107,1)",
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
      "x": [64],
      "y": [7631.3399999999992],
      "text": "Energy use per capita: 7631.34 energy per capita<br>REMIND_54 region code: CAN<br>Countries in region: Canada",
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
      "x": [65],
      "y": [5309.1830033563247],
      "text": "Energy use per capita: 5309.18 energy per capita<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand",
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
      "x": [56],
      "y": [1559.1199999999997],
      "text": "Energy use per capita: 1559.12 energy per capita<br>REMIND_54 region code: MEX<br>Countries in region: Mexico",
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
      "x": [19],
      "y": [5817.6400000000003],
      "text": "Energy use per capita: 5817.64 energy per capita<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen",
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
      "x": [55],
      "y": [1490.4299999999998],
      "text": "Energy use per capita: 1490.43 energy per capita<br>REMIND_54 region code: BRA<br>Countries in region: Brazil",
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
      "x": [21],
      "y": [2058.2428781695166],
      "text": "Energy use per capita: 2058.24 energy per capita<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)",
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
      "width": 0.90000000000000568,
      "base": 0,
      "x": [38],
      "y": [5413.3499999999995],
      "text": "Energy use per capita: 5413.35 energy per capita<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of",
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
      "width": 0.90000000000000568,
      "base": 0,
      "x": [35],
      "y": [470.5],
      "text": "Energy use per capita: 470.5 energy per capita<br>REMIND_54 region code: PHL<br>Countries in region: Philippines",
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
      "x": [25],
      "y": [1860.8481397142336],
      "text": "Energy use per capita: 1860.85 energy per capita<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Tajikistan; Azerbaijan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia",
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
      "width": 0.90000000000000568,
      "base": 0,
      "x": [59],
      "y": [728.57000000000005],
      "text": "Energy use per capita: 728.57 energy per capita<br>REMIND_54 region code: COL<br>Countries in region: Colombia",
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
      "width": 0.90000000000000568,
      "base": 0,
      "x": [53],
      "y": [503.14972957388358],
      "text": "Energy use per capita: 503.15 energy per capita<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Gabon; Botswana; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(122,1,119,1)",
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
      "y": [4942.8800000000001],
      "text": "Energy use per capita: 4942.88 energy per capita<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation",
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
      "width": 0.90000000000000568,
      "base": 0,
      "x": [41],
      "y": [423.93457391777162],
      "text": "Energy use per capita: 423.93 energy per capita<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(129,15,124,1)",
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
      "x": [34],
      "y": [663.88999999999999],
      "text": "Energy use per capita: 663.89 energy per capita<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(129,15,124,1)",
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
      "y": [431.63],
      "text": "Energy use per capita: 431.63 energy per capita<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan",
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
      "width": 0.90000000000000568,
      "base": 0,
      "x": [39],
      "y": [227.12999999999997],
      "text": "Energy use per capita: 227.13 energy per capita<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh",
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
      "y": [880.12],
      "text": "Energy use per capita: 880.12 energy per capita<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia",
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
      "x": [37],
      "y": [1247.4444450451331],
      "text": "Energy use per capita: 1247.44 energy per capita<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn",
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
      "x": [36],
      "y": [1926.1600000000003],
      "text": "Energy use per capita: 1926.16 energy per capita<br>REMIND_54 region code: THA<br>Countries in region: Thailand",
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
      "x": [27],
      "y": [3428.5599999999999],
      "text": "Energy use per capita: 3428.56 energy per capita<br>REMIND_54 region code: JPN<br>Countries in region: Japan",
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
      "width": 0.90000000000000568,
      "base": 0,
      "x": [47],
      "y": [779.78161339798351],
      "text": "Energy use per capita: 779.78 energy per capita<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(158,202,225,1)",
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
      "x": [58],
      "y": [2016.6900000000003],
      "text": "Energy use per capita: 2016.69 energy per capita<br>REMIND_54 region code: CHL<br>Countries in region: Chile",
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
      "x": [22],
      "y": [1628.2100000000003],
      "text": "Energy use per capita: 1628.21 energy per capita<br>REMIND_54 region code: TUR<br>Countries in region: Turkey",
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
      "width": 0.90000000000000568,
      "base": 0,
      "x": [52],
      "y": [484.96000000000004],
      "text": "Energy use per capita: 484.96 energy per capita<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,1,126,1)",
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
      "x": [15],
      "y": [2042.197764797897],
      "text": "Energy use per capita: 2042.2 energy per capita<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia",
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
      "x": [43],
      "y": [2964.8599999999997],
      "text": "Energy use per capita: 2964.86 energy per capita<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of",
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
      "x": [31],
      "y": [630.89999999999998],
      "text": "Energy use per capita: 630.9 energy per capita<br>REMIND_54 region code: IND<br>Countries in region: India",
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
      "x": [62],
      "y": [6803.9999999999991],
      "text": "Energy use per capita: 6804 energy per capita<br>REMIND_54 region code: USA<br>Countries in region: United States",
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
      "x": [51],
      "y": [377.72000000000003],
      "text": "Energy use per capita: 377.72 energy per capita<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(221,52,151,1)",
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
      "y": [2571.3400000000001],
      "text": "Energy use per capita: 2571.34 energy per capita<br>REMIND_54 region code: ESP<br>Countries in region: Spain",
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
      "x": [10],
      "y": [2490.21],
      "text": "Energy use per capita: 2490.21 energy per capita<br>REMIND_54 region code: POL<br>Countries in region: Poland",
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
      "x": [50],
      "y": [750.97000000000003],
      "text": "Energy use per capita: 750.97 energy per capita<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria",
      "type": "bar",
      "textposition": "none",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(247,104,161,1)",
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
      "y": [2686.3800000000001],
      "text": "Energy use per capita: 2686.38 energy per capita<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa",
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
      "y": [3817.5500000000002],
      "text": "Energy use per capita: 3817.55 energy per capita<br>REMIND_54 region code: DEU<br>Countries in region: Germany",
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
      "y": [3334.5196759793675],
      "text": "Energy use per capita: 3334.52 energy per capita<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia",
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
      "x": [16],
      "y": [2819.8800000000001],
      "text": "Energy use per capita: 2819.88 energy per capita<br>REMIND_54 region code: IRL<br>Countries in region: Ireland",
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
      "width": 0.90000000000000036,
      "base": 0,
      "x": [6],
      "y": [2131.6799999999998],
      "text": "Energy use per capita: 2131.68 energy per capita<br>REMIND_54 region code: PRT<br>Countries in region: Portugal",
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
      "x": [45],
      "y": [6645.96],
      "text": "Energy use per capita: 6645.96 energy per capita<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia",
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
      "width": 0.90000000000000013,
      "base": 0,
      "x": [2],
      "y": [3692.0199999999995],
      "text": "Energy use per capita: 3692.02 energy per capita<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories",
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
      "x": [17],
      "y": [2766.2253846415597],
      "text": "Energy use per capita: 2766.23 energy per capita<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory",
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
      "x": [7],
      "y": [3800.3000000000002],
      "text": "Energy use per capita: 3800.3 energy per capita<br>REMIND_54 region code: AUT<br>Countries in region: Austria",
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
      "x": [29],
      "y": [2223.0244616467239],
      "text": "Energy use per capita: 2223.02 energy per capita<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao",
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
      "x": [44],
      "y": [2216.0353425365465],
      "text": "Energy use per capita: 2216.04 energy per capita<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain",
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
      "x": [12],
      "y": [5102.79],
      "text": "Energy use per capita: 5102.79 energy per capita<br>REMIND_54 region code: SWE<br>Countries in region: Sweden",
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
      "x": [13],
      "y": [2816.6100000000006],
      "text": "Energy use per capita: 2816.61 energy per capita<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands",
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
      "x": [3],
      "y": [2475.6629181697035],
      "text": "Energy use per capita: 2475.66 energy per capita<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta",
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
      "y": [4233.04],
      "text": "Energy use per capita: 4233.04 energy per capita<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands",
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
      "width": 0.89999999999999858,
      "base": 0,
      "x": [9],
      "y": [4785.1964004107867],
      "text": "Energy use per capita: 4785.2 energy per capita<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg",
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
      "width": 0.89999999999999858,
      "base": 0,
      "x": [14],
      "y": [5924.6999999999998],
      "text": "Energy use per capita: 5924.7 energy per capita<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands",
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
      "y": [2126.0086670795718],
      "text": "Energy use per capita: 2126.01 energy per capita<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus",
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
      "l": 47.488584474885855
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.611872146118724
    },
    "title": {
      "text": "Energy use per capita (REMIND_54)",
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
      "range": [0.40000000000000002, 65.599999999999994],
      "tickmode": "array",
      "ticktext": ["DEU", "FRA", "ITA", "GRC", "ESP", "PRT", "AUT", "NLD", "BELUX", "POL", "ECE_other", "SWE", "DNK", "FIN", "ECS", "IRL", "GBR", "", "NOR", "NEN_other", "NES_EU", "TUR", "RUS", "CAS", "JPN", "CHA", "IND", "IDN", "VNM", "PHL", "THA", "SEA_other", "KOR", "BGD", "PAK", "OAS_other", "IRN", "MEA_other", "SAU", "EGY", "NAF_other", "ZAF", "NGA", "COD", "ETH", "AFC_other", "BRA", "MEX", "ARG", "CHL", "COL", "OLA", "USA", "CAN", "ANZ"],
      "tickvals": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14.000000000000002, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 27, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 55, 56, 57, 58, 59, 60, 62, 64, 65],
      "categoryorder": "array",
      "categoryarray": ["DEU", "FRA", "ITA", "GRC", "ESP", "PRT", "AUT", "NLD", "BELUX", "POL", "ECE_other", "SWE", "DNK", "FIN", "ECS", "IRL", "GBR", "", "NOR", "NEN_other", "NES_EU", "TUR", "RUS", "CAS", "JPN", "CHA", "IND", "IDN", "VNM", "PHL", "THA", "SEA_other", "KOR", "BGD", "PAK", "OAS_other", "IRN", "MEA_other", "SAU", "EGY", "NAF_other", "ZAF", "NGA", "COD", "ETH", "AFC_other", "BRA", "MEX", "ARG", "CHL", "COL", "OLA", "USA", "CAN", "ANZ"],
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
      "range": [0, 17478.889999999999],
      "tickmode": "array",
      "ticktext": ["0", "5000", "10000", "15000"],
      "tickvals": [1.1368683772161603e-13, 5000, 9999.9999999999982, 15000],
      "categoryorder": "array",
      "categoryarray": ["0", "5000", "10000", "15000"],
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
        "text": "energy per capita",
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
    "b55c2e61205b": {
      "x": {},
      "fill": {},
      "text": {},
      "y": {},
      "type": "bar"
    },
    "b55c612d545d": {
      "y": {}
    }
  },
  "cur_data": "b55c2e61205b",
  "visdat": {
    "b55c2e61205b": ["function (y) ", "x"],
    "b55c612d545d": ["function (y) ", "x"]
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

  
