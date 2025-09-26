(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_21_Sectors_Value_added___agriculture_bar') 

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
      "width": 0.90000000000000213,
      "base": 0,
      "x": [32],
      "y": [2.2194052169338443],
      "text": "Value added - agriculture: 2.22 % (GDP)<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand",
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
      "width": 0.89999999999999858,
      "base": 0,
      "x": [28],
      "y": [7.0278207529766226],
      "text": "Value added - agriculture: 7.03 % (GDP)<br>REMIND_21 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Guatemala; Ecuador; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Belize; Bahamas; Guadeloupe; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island",
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
      "x": [11],
      "y": [1.1036366263421429],
      "text": "Value added - agriculture: 1.1 % (GDP)<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland",
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
      "x": [24],
      "y": [12.929429409359596],
      "text": "Value added - agriculture: 12.93 % (GDP)<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara",
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
      "x": [12],
      "y": [7.4971412100931785],
      "text": "Value added - agriculture: 7.5 % (GDP)<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey",
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
      "x": [14],
      "y": [9.2735621161374304],
      "text": "Value added - agriculture: 9.27 % (GDP)<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Tajikistan; Azerbaijan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia",
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
      "x": [22],
      "y": [15.034605242887167],
      "text": "Value added - agriculture: 15.03 % (GDP)<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan",
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
      "x": [16],
      "y": [0.94999999999999996],
      "text": "Value added - agriculture: 0.95 % (GDP)<br>REMIND_21 region code: JPN<br>Countries in region: Japan",
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
      "width": 0.90000000000000036,
      "base": 0,
      "x": [6],
      "y": [2.2254051322322996],
      "text": "Value added - agriculture: 2.23 % (GDP)<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia",
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
      "width": 0.89999999999999947,
      "base": 0,
      "x": [8],
      "y": [3.9555635104248994],
      "text": "Value added - agriculture: 3.96 % (GDP)<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia",
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
      "x": [4],
      "y": [2.5346772600985239],
      "text": "Value added - agriculture: 2.53 % (GDP)<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal",
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
      "x": [20],
      "y": [17.329999999999998],
      "text": "Value added - agriculture: 17.33 % (GDP)<br>REMIND_21 region code: IND<br>Countries in region: India",
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
      "x": [30],
      "y": [0.95999999999999985],
      "text": "Value added - agriculture: 0.96 % (GDP)<br>REMIND_21 region code: USA<br>Countries in region: United States",
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
      "y": [0.69501735525496422],
      "text": "Value added - agriculture: 0.7 % (GDP)<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory",
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
      "x": [26],
      "y": [21.944652293869908],
      "text": "Value added - agriculture: 21.94 % (GDP)<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Gabon; Botswana; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha",
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
      "y": [0.84999999999999998],
      "text": "Value added - agriculture: 0.85 % (GDP)<br>REMIND_21 region code: DEU<br>Countries in region: Germany",
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
      "x": [7],
      "y": [1.4671914240018802],
      "text": "Value added - agriculture: 1.47 % (GDP)<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands",
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
      "x": [5],
      "y": [1.1826815395026746],
      "text": "Value added - agriculture: 1.18 % (GDP)<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg",
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
      "y": [1.6399999999999997],
      "text": "Value added - agriculture: 1.64 % (GDP)<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories",
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
      "x": [18],
      "y": [7.2026152967681965],
      "text": "Value added - agriculture: 7.2 % (GDP)<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao",
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
      "y": [2.2130395839427108],
      "text": "Value added - agriculture: 2.21 % (GDP)<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus",
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
      "b": 21.187214611872157,
      "l": 35.799086757990878
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.611872146118724
    },
    "title": {
      "text": "Value added - agriculture (REMIND_21)",
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
      "range": [0.40000000000000002, 32.600000000000001],
      "tickmode": "array",
      "ticktext": ["DEU", "FRA", "ESC", "ESW", "EWN", "ECE", "ENC", "ECS", "UKI", "", "NEN", "NES", "REF", "JPN", "CHA", "IND", "OAS", "MEA", "SSA", "LAM", "USA", "CAZ"],
      "tickvals": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
      "categoryorder": "array",
      "categoryarray": ["DEU", "FRA", "ESC", "ESW", "EWN", "ECE", "ENC", "ECS", "UKI", "", "NEN", "NES", "REF", "JPN", "CHA", "IND", "OAS", "MEA", "SSA", "LAM", "USA", "CAZ"],
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
    "b55c5b7f3147": {
      "x": {},
      "fill": {},
      "text": {},
      "y": {},
      "type": "bar"
    },
    "b55c1165231c": {
      "y": {}
    }
  },
  "cur_data": "b55c5b7f3147",
  "visdat": {
    "b55c5b7f3147": ["function (y) ", "x"],
    "b55c1165231c": ["function (y) ", "x"]
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

  
