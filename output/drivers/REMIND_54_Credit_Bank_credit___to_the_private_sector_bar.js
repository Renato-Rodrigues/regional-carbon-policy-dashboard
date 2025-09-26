(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Credit_Bank_credit___to_the_private_sector_bar') 

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
      "y": [11.26],
      "text": "Bank credit - to the private sector: 11.26 % (GDP)<br>REMIND_54 region code: ARG<br>Countries in region: Argentina",
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
      "y": [167.5931227671735],
      "text": "Bank credit - to the private sector: 167.59 % (GDP)<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland",
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
      "y": [44.270891104586774],
      "text": "Bank credit - to the private sector: 44.27 % (GDP)<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Guatemala; Ecuador; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Belize; Bahamas; Guadeloupe; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island",
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
      "y": [28.230000000000004],
      "text": "Bank credit - to the private sector: 28.23 % (GDP)<br>REMIND_54 region code: EGY<br>Countries in region: Egypt",
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
      "y": [124.09999999999999],
      "text": "Bank credit - to the private sector: 124.1 % (GDP)<br>REMIND_54 region code: CAN<br>Countries in region: Canada",
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
      "y": [139.18106246937413],
      "text": "Bank credit - to the private sector: 139.18 % (GDP)<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand",
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
      "y": [27.169999999999998],
      "text": "Bank credit - to the private sector: 27.17 % (GDP)<br>REMIND_54 region code: MEX<br>Countries in region: Mexico",
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
      "y": [119.33000000000001],
      "text": "Bank credit - to the private sector: 119.33 % (GDP)<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen",
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
      "y": [69.680000000000007],
      "text": "Bank credit - to the private sector: 69.68 % (GDP)<br>REMIND_54 region code: BRA<br>Countries in region: Brazil",
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
      "y": [27.572413277729083],
      "text": "Bank credit - to the private sector: 27.57 % (GDP)<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)",
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
      "y": [171.53],
      "text": "Bank credit - to the private sector: 171.53 % (GDP)<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of",
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
      "y": [49.939999999999998],
      "text": "Bank credit - to the private sector: 49.94 % (GDP)<br>REMIND_54 region code: PHL<br>Countries in region: Philippines",
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
      "y": [28.550677264952643],
      "text": "Bank credit - to the private sector: 28.55 % (GDP)<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Tajikistan; Azerbaijan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia",
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
      "y": [51.109999999999999],
      "text": "Bank credit - to the private sector: 51.11 % (GDP)<br>REMIND_54 region code: COL<br>Countries in region: Colombia",
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
      "y": [17.8092350301356],
      "text": "Bank credit - to the private sector: 17.81 % (GDP)<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Gabon; Botswana; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha",
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
      "y": [54.409999999999989],
      "text": "Bank credit - to the private sector: 54.41 % (GDP)<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation",
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
      "y": [45.911133976373591],
      "text": "Bank credit - to the private sector: 45.91 % (GDP)<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan",
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
      "y": [124.40000000000001],
      "text": "Bank credit - to the private sector: 124.4 % (GDP)<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam",
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
      "y": [15.31],
      "text": "Bank credit - to the private sector: 15.31 % (GDP)<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan",
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
      "y": [38.960000000000001],
      "text": "Bank credit - to the private sector: 38.96 % (GDP)<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh",
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
      "y": [32.009999999999991],
      "text": "Bank credit - to the private sector: 32.01 % (GDP)<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia",
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
      "y": [71.053513707073861],
      "text": "Bank credit - to the private sector: 71.05 % (GDP)<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn",
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
      "y": [126.93000000000001],
      "text": "Bank credit - to the private sector: 126.93 % (GDP)<br>REMIND_54 region code: THA<br>Countries in region: Thailand",
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
      "y": [118.90000000000002],
      "text": "Bank credit - to the private sector: 118.9 % (GDP)<br>REMIND_54 region code: JPN<br>Countries in region: Japan",
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
      "y": [26.91170067844326],
      "text": "Bank credit - to the private sector: 26.91 % (GDP)<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara",
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
      "y": [80.709999999999994],
      "text": "Bank credit - to the private sector: 80.71 % (GDP)<br>REMIND_54 region code: CHL<br>Countries in region: Chile",
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
      "y": [66.140000000000015],
      "text": "Bank credit - to the private sector: 66.14 % (GDP)<br>REMIND_54 region code: TUR<br>Countries in region: Turkey",
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
      "y": [17.640000000000004],
      "text": "Bank credit - to the private sector: 17.64 % (GDP)<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia",
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
      "y": [36.014175223428069],
      "text": "Bank credit - to the private sector: 36.01 % (GDP)<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia",
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
      "y": [60.29999999999999],
      "text": "Bank credit - to the private sector: 60.3 % (GDP)<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of",
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
      "y": [50.409999999999997],
      "text": "Bank credit - to the private sector: 50.41 % (GDP)<br>REMIND_54 region code: IND<br>Countries in region: India",
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
      "y": [50.409999999999989],
      "text": "Bank credit - to the private sector: 50.41 % (GDP)<br>REMIND_54 region code: USA<br>Countries in region: United States",
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
      "y": [7.1900000000000004],
      "text": "Bank credit - to the private sector: 7.19 % (GDP)<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the",
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
      "y": [98.5],
      "text": "Bank credit - to the private sector: 98.5 % (GDP)<br>REMIND_54 region code: ESP<br>Countries in region: Spain",
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
      "y": [46.379999999999995],
      "text": "Bank credit - to the private sector: 46.38 % (GDP)<br>REMIND_54 region code: POL<br>Countries in region: Poland",
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
      "y": [12.199999999999999],
      "text": "Bank credit - to the private sector: 12.2 % (GDP)<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria",
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
      "y": [58.039999999999992],
      "text": "Bank credit - to the private sector: 58.04 % (GDP)<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa",
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
      "y": [83.5],
      "text": "Bank credit - to the private sector: 83.5 % (GDP)<br>REMIND_54 region code: DEU<br>Countries in region: Germany",
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
      "y": [53.145783057979131],
      "text": "Bank credit - to the private sector: 53.15 % (GDP)<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia",
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
      "y": [27.859999999999999],
      "text": "Bank credit - to the private sector: 27.86 % (GDP)<br>REMIND_54 region code: IRL<br>Countries in region: Ireland",
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
      "y": [99.560000000000002],
      "text": "Bank credit - to the private sector: 99.56 % (GDP)<br>REMIND_54 region code: PRT<br>Countries in region: Portugal",
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
      "y": [51.97999999999999],
      "text": "Bank credit - to the private sector: 51.98 % (GDP)<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia",
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
      "y": [116.57999999999998],
      "text": "Bank credit - to the private sector: 116.58 % (GDP)<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories",
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
      "y": [138.81606367236645],
      "text": "Bank credit - to the private sector: 138.82 % (GDP)<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory",
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
      "y": [92.799999999999997],
      "text": "Bank credit - to the private sector: 92.8 % (GDP)<br>REMIND_54 region code: AUT<br>Countries in region: Austria",
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
      "y": [177.72612176825524],
      "text": "Bank credit - to the private sector: 177.73 % (GDP)<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao",
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
      "y": [35.05394777406952],
      "text": "Bank credit - to the private sector: 35.05 % (GDP)<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain",
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
      "y": [135.56999999999999],
      "text": "Bank credit - to the private sector: 135.57 % (GDP)<br>REMIND_54 region code: SWE<br>Countries in region: Sweden",
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
      "y": [158.27000000000001],
      "text": "Bank credit - to the private sector: 158.27 % (GDP)<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands",
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
      "y": [76.723915091351373],
      "text": "Bank credit - to the private sector: 76.72 % (GDP)<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta",
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
      "y": [97.840000000000003],
      "text": "Bank credit - to the private sector: 97.84 % (GDP)<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands",
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
      "y": [75.080911376079953],
      "text": "Bank credit - to the private sector: 75.08 % (GDP)<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg",
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
      "y": [97.859999999999999],
      "text": "Bank credit - to the private sector: 97.86 % (GDP)<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands",
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
      "y": [60.915069093416442],
      "text": "Bank credit - to the private sector: 60.92 % (GDP)<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus",
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
      "text": "Bank credit - to the private sector (REMIND_54)",
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
      "range": [0, 177.72612176825524],
      "tickmode": "array",
      "ticktext": ["0", "50", "100", "150"],
      "tickvals": [0, 50, 100, 150],
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
    "b55c7782271f": {
      "x": {},
      "fill": {},
      "text": {},
      "y": {},
      "type": "bar"
    },
    "b55c128a5f32": {
      "y": {}
    }
  },
  "cur_data": "b55c7782271f",
  "visdat": {
    "b55c7782271f": ["function (y) ", "x"],
    "b55c128a5f32": ["function (y) ", "x"]
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

  
