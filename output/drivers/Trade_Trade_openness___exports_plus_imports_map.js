(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Trade_Trade_openness___exports_plus_imports_map') 

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
  "visdat": {
    "b55c2ca47f0e": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c2ca47f0e",
  "attrs": {
    "b55c2ca47f0e": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 450,
      "colorbar": {
        "title": "Trade openness  exports plus imports"
      },
      "frame": {},
      "alpha_stroke": 1,
      "sizes": [10, 100],
      "spans": [1, 20],
      "type": "choropleth"
    }
  },
  "layout": {
    "margin": {
      "b": 40,
      "l": 60,
      "t": 25,
      "r": 10
    },
    "geo": {
      "scope": "world",
      "projection": {
        "type": "miller"
      },
      "showframe": false,
      "showcoastlines": false
    },
    "scene": {
      "zaxis": {
        "title": "currentDriver"
      }
    },
    "hovermode": "closest",
    "showlegend": false,
    "sliders": [
      {
        "currentvalue": {
          "prefix": "period: ",
          "xanchor": "right",
          "font": {
            "size": 16,
            "color": "rgba(204,204,204,1)"
          }
        },
        "steps": [
          {
            "method": "animate",
            "args": [
              [
                "2003"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2003",
            "value": "2003"
          },
          {
            "method": "animate",
            "args": [
              [
                "2004"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2004",
            "value": "2004"
          },
          {
            "method": "animate",
            "args": [
              [
                "2005"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2005",
            "value": "2005"
          },
          {
            "method": "animate",
            "args": [
              [
                "2006"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2006",
            "value": "2006"
          },
          {
            "method": "animate",
            "args": [
              [
                "2007"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2007",
            "value": "2007"
          },
          {
            "method": "animate",
            "args": [
              [
                "2008"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2008",
            "value": "2008"
          },
          {
            "method": "animate",
            "args": [
              [
                "2009"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2009",
            "value": "2009"
          },
          {
            "method": "animate",
            "args": [
              [
                "2010"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2010",
            "value": "2010"
          },
          {
            "method": "animate",
            "args": [
              [
                "2011"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2011",
            "value": "2011"
          },
          {
            "method": "animate",
            "args": [
              [
                "2012"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2012",
            "value": "2012"
          },
          {
            "method": "animate",
            "args": [
              [
                "2013"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2013",
            "value": "2013"
          },
          {
            "method": "animate",
            "args": [
              [
                "2014"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2014",
            "value": "2014"
          },
          {
            "method": "animate",
            "args": [
              [
                "2015"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2015",
            "value": "2015"
          },
          {
            "method": "animate",
            "args": [
              [
                "2016"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2016",
            "value": "2016"
          },
          {
            "method": "animate",
            "args": [
              [
                "2017"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2017",
            "value": "2017"
          },
          {
            "method": "animate",
            "args": [
              [
                "2018"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2018",
            "value": "2018"
          },
          {
            "method": "animate",
            "args": [
              [
                "2019"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2019",
            "value": "2019"
          },
          {
            "method": "animate",
            "args": [
              [
                "2020"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2020",
            "value": "2020"
          },
          {
            "method": "animate",
            "args": [
              [
                "2021"
              ],
              {
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                },
                "mode": "immediate"
              }
            ],
            "label": "2021",
            "value": "2021"
          }
        ],
        "visible": true,
        "pad": {
          "t": 40
        }
      }
    ],
    "updatemenus": [
      {
        "type": "buttons",
        "direction": "right",
        "showactive": false,
        "y": 0,
        "x": 0,
        "yanchor": "top",
        "xanchor": "right",
        "pad": {
          "t": 60,
          "r": 5
        },
        "buttons": [
          {
            "label": "Play",
            "method": "animate",
            "args": [
              null,
              {
                "fromcurrent": true,
                "mode": "immediate",
                "transition": {
                  "duration": 500,
                  "easing": "linear"
                },
                "frame": {
                  "duration": 500,
                  "redraw": true
                }
              }
            ]
          }
        ]
      }
    ],
    "legend": {
      "yanchor": "top",
      "y": 0.5
    }
  },
  "source": "A",
  "config": {
    "modeBarButtonsToAdd": ["hoverclosest", "hovercompare"],
    "showSendToCloud": false
  },
  "data": [
    {
      "colorbar": {
        "title": "Trade openness  exports plus imports",
        "ticklen": 2,
        "len": 0.5,
        "lenmode": "fraction",
        "y": 1,
        "yanchor": "top"
      },
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "showscale": true,
      "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
      "z": [61.850000000000001, 50.799999999999997, 50.799999999999997, 50.799999999999997, 46.149999999999999, 216.27000000000001, 48.189999999999998, 114, 53.460000000000001, 61.140000000000001, 86.390000000000001, 111.92, 132.72, 244.97999999999999, 69.450000000000003, 94.969999999999999, 125.15000000000001, 98.230000000000004, 84.609999999999999, 122.78, 75.25, 80.879999999999995, 81.121811258252563, 108.26000000000001, 68.060000000000002, 68.060000000000002, 56.18, 116.63, 79.010000000000005, 81.420000000000002, 102.31999999999999, 146.53, 50.18, 50.18, 50.18, 50.18, 50.18, 30.589999999999996, 66.319999999999993, 66.319999999999993, 90.329999999999998, 90.329999999999998, 68.200000000000003, 102.59, 67.019999999999996, 61.170000000000002, 80.569999999999993, 77.629999999999995, 140.06, 71.069999999999993, 77.599999999999994, 79.100944718103051, 79.100944718103051, 321.36000000000001, 79.100944718103051, 46.229999999999997, 59.130000000000003, 91.459999999999994, 70.459999999999994, 94.160606088336436, 134.13999999999999, 107.55, 137.66999999999999, 83.930000000000007, 63.200000000000003, 80.049999999999997, 120.3, 21.329999999999998, 51.799999999999997, 53.084124619936908, 292.44999999999999, 150.78999999999999, 30.59, 53.619999999999997, 124.33, 87.569999999999993, 116.69, 377.22000000000003, 128.31759071661548, 194.19999999999999, 75.340000000000003, 123.08, 123.45, 60.57, 128.31759071661548, 128.97999999999999, 55.960000000000001, 105.26000000000001, 128.31759071661548, 128.31759071661548, 61.890000000000001, 91.569999999999993, 76.269999999999996, 128.31759071661548, 94.790000000000006, 76.069999999999993, 110.69, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 61.170000000000002, 27.66, 30.190000000000001, 44.25, 46.280000000000001, 78.629999999999995, 50.68, 154.22999999999999, 74.379999999999995, 61.549999999999997, 67.709999999999994, 115.70999999999999, 54.090000000000003, 102.3, 76.400000000000006, 97, 86.560000000000002, 128.09, 90.159999999999997, 69.829999999999998, 46.18, 62.119999999999997, 26.440000000000001, 52.329999999999998, 33.380000000000003, 58.630000000000003, 82.390000000000001, 83.379999999999995, 90.609999999999999, 55.32, 53.703094620767054, 45.719999999999999, 54.030000000000001, 48.229999999999997, 30.420000000000002, 54.130000000000003, 36.590000000000003, 97.290000000000006, 57.148754631303028, 53.259999999999998, 34.030000000000001, 103.90000000000001, 40.240000000000002, 30.370000000000001, 70.450000000000003, 57.148754631303028, 62.310000000000002, 50.82, 98.400000000000006, 51.140000000000001, 29.309999999999999, 41.619999999999997, 27.379999999999999, 57.148754631303028, 57.560000000000002, 46.450000000000003, 36.229999999999997, 156.86000000000001, 57.148754631303028, 74.010000000000005, 165.06, 95.950000000000003, 85.829999999999998, 68.859999999999999, 80.299999999999997, 43.270000000000003, 110.12, 172.09, 131.02000000000001, 57.148754631303028, 348, 35.759999999999998, 98.769999999999996, 57.148754631303028, 57.148754631303028, 168.84, 57.148754631303028, 28.140000000000001, 51.119999999999997, 40.640000000000001, 65.680000000000007, 36.520000000000003, 50.579999999999998, 51.759999999999998, 37.619999999999997, 47.240000000000002, 67, 64.912550970846965, 51.969999999999999, 84.450000000000003, 37.200000000000003, 122.25, 68.239999999999995, 81.129999999999995, 62.18, 83.329999999999998, 118.84, 114.69, 88.150000000000006, 64.912550970846965, 189.16, 98.170000000000002, 64.912550970846965, 64.912550970846965, 71.060000000000002, 90.090000000000003, 95.109999999999999, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 132.78999999999999, 156.15000000000001, 87.969999999999999, 74.599999999999994, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 22.629999999999999, 69.840000000000003, 40.219999999999999, 40.219999999999999, 40.219999999999999, 40.219999999999999, 57.909999999999997],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 450,
      "frame": "2003",
      "type": "choropleth",
      "marker": {
        "line": {
          "color": "rgba(31,119,180,1)"
        }
      },
      "visible": true
    }
  ],
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
  "frames": [
    {
      "name": "2003",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [61.850000000000001, 50.799999999999997, 50.799999999999997, 50.799999999999997, 46.149999999999999, 216.27000000000001, 48.189999999999998, 114, 53.460000000000001, 61.140000000000001, 86.390000000000001, 111.92, 132.72, 244.97999999999999, 69.450000000000003, 94.969999999999999, 125.15000000000001, 98.230000000000004, 84.609999999999999, 122.78, 75.25, 80.879999999999995, 81.121811258252563, 108.26000000000001, 68.060000000000002, 68.060000000000002, 56.18, 116.63, 79.010000000000005, 81.420000000000002, 102.31999999999999, 146.53, 50.18, 50.18, 50.18, 50.18, 50.18, 30.589999999999996, 66.319999999999993, 66.319999999999993, 90.329999999999998, 90.329999999999998, 68.200000000000003, 102.59, 67.019999999999996, 61.170000000000002, 80.569999999999993, 77.629999999999995, 140.06, 71.069999999999993, 77.599999999999994, 79.100944718103051, 79.100944718103051, 321.36000000000001, 79.100944718103051, 46.229999999999997, 59.130000000000003, 91.459999999999994, 70.459999999999994, 94.160606088336436, 134.13999999999999, 107.55, 137.66999999999999, 83.930000000000007, 63.200000000000003, 80.049999999999997, 120.3, 21.329999999999998, 51.799999999999997, 53.084124619936908, 292.44999999999999, 150.78999999999999, 30.59, 53.619999999999997, 124.33, 87.569999999999993, 116.69, 377.22000000000003, 128.31759071661548, 194.19999999999999, 75.340000000000003, 123.08, 123.45, 60.57, 128.31759071661548, 128.97999999999999, 55.960000000000001, 105.26000000000001, 128.31759071661548, 128.31759071661548, 61.890000000000001, 91.569999999999993, 76.269999999999996, 128.31759071661548, 94.790000000000006, 76.069999999999993, 110.69, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 128.31759071661548, 61.170000000000002, 27.66, 30.190000000000001, 44.25, 46.280000000000001, 78.629999999999995, 50.68, 154.22999999999999, 74.379999999999995, 61.549999999999997, 67.709999999999994, 115.70999999999999, 54.090000000000003, 102.3, 76.400000000000006, 97, 86.560000000000002, 128.09, 90.159999999999997, 69.829999999999998, 46.18, 62.119999999999997, 26.440000000000001, 52.329999999999998, 33.380000000000003, 58.630000000000003, 82.390000000000001, 83.379999999999995, 90.609999999999999, 55.32, 53.703094620767054, 45.719999999999999, 54.030000000000001, 48.229999999999997, 30.420000000000002, 54.130000000000003, 36.590000000000003, 97.290000000000006, 57.148754631303028, 53.259999999999998, 34.030000000000001, 103.90000000000001, 40.240000000000002, 30.370000000000001, 70.450000000000003, 57.148754631303028, 62.310000000000002, 50.82, 98.400000000000006, 51.140000000000001, 29.309999999999999, 41.619999999999997, 27.379999999999999, 57.148754631303028, 57.560000000000002, 46.450000000000003, 36.229999999999997, 156.86000000000001, 57.148754631303028, 74.010000000000005, 165.06, 95.950000000000003, 85.829999999999998, 68.859999999999999, 80.299999999999997, 43.270000000000003, 110.12, 172.09, 131.02000000000001, 57.148754631303028, 348, 35.759999999999998, 98.769999999999996, 57.148754631303028, 57.148754631303028, 168.84, 57.148754631303028, 28.140000000000001, 51.119999999999997, 40.640000000000001, 65.680000000000007, 36.520000000000003, 50.579999999999998, 51.759999999999998, 37.619999999999997, 47.240000000000002, 67, 64.912550970846965, 51.969999999999999, 84.450000000000003, 37.200000000000003, 122.25, 68.239999999999995, 81.129999999999995, 62.18, 83.329999999999998, 118.84, 114.69, 88.150000000000006, 64.912550970846965, 189.16, 98.170000000000002, 64.912550970846965, 64.912550970846965, 71.060000000000002, 90.090000000000003, 95.109999999999999, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 132.78999999999999, 156.15000000000001, 87.969999999999999, 74.599999999999994, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 64.912550970846965, 22.629999999999999, 69.840000000000003, 40.219999999999999, 40.219999999999999, 40.219999999999999, 40.219999999999999, 57.909999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2003",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2004",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [66.230000000000004, 51.93, 51.93, 51.93, 47.43, 212, 49.899999999999999, 113.90000000000001, 54.520000000000003, 63.200000000000003, 90.790000000000006, 117.61, 136.91999999999999, 265.23000000000002, 71.450000000000003, 113.48999999999999, 139.65000000000001, 104.59999999999999, 93.140000000000001, 129.97999999999999, 78.590000000000003, 82.209999999999994, 82.309467062247705, 93.420000000000002, 70.959999999999994, 70.959999999999994, 60.630000000000003, 123.45, 93.060000000000002, 81.609999999999999, 111.56, 146.59, 50.420000000000002, 50.420000000000002, 50.420000000000002, 50.420000000000002, 50.420000000000002, 37.5, 68.670000000000002, 68.670000000000002, 95.519999999999996, 95.519999999999996, 70.430000000000007, 109.98, 67.049999999999997, 74.230000000000004, 81.810000000000002, 79.040000000000006, 132.69999999999999, 80.870000000000005, 100.11, 85.411078387636508, 85.411078387636508, 321.36000000000001, 85.411078387636508, 48.829999999999998, 56.579999999999998, 96.409999999999997, 76.599999999999994, 98.981478204944239, 142.13999999999999, 121.51000000000001, 128.34, 93.819999999999993, 59.32, 73.069999999999993, 131.33000000000001, 23.66, 59.509999999999998, 60.932588743826123, 326.83999999999997, 148.90000000000001, 37.5, 59.759999999999998, 133.02000000000001, 87.129999999999995, 127.41, 401.51999999999998, 138.4374028591063, 210.37, 79.480000000000004, 134.50999999999999, 131.08000000000001, 66.079999999999998, 138.4374028591063, 125.12, 62.810000000000002, 100.59, 138.4374028591063, 138.4374028591063, 58.579999999999998, 98.709999999999994, 72.530000000000001, 138.4374028591063, 93.719999999999999, 76.180000000000007, 102.73, 138.4374028591063, 138.4374028591063, 138.4374028591063, 138.4374028591063, 138.4374028591063, 138.4374028591063, 138.4374028591063, 138.4374028591063, 138.4374028591063, 138.4374028591063, 138.4374028591063, 138.4374028591063, 138.4374028591063, 70.019999999999996, 26.859999999999999, 30.440000000000001, 46.149999999999999, 46.280000000000001, 95.939999999999998, 51.310000000000002, 120.23, 71.819999999999993, 78.109999999999999, 75.650000000000006, 134.62, 90.969999999999999, 116.62, 81.120000000000005, 101.55, 89.299999999999997, 140.74000000000001, 90.370000000000005, 75.079999999999998, 57.82, 65.700000000000003, 30.43, 55.549999999999997, 36.960000000000001, 55.310000000000002, 86.930000000000007, 101.77, 96.129999999999995, 75.219999999999999, 58.118040434381243, 45.640000000000001, 49.340000000000003, 48.229999999999997, 33.600000000000001, 59.479999999999997, 35.460000000000001, 99.670000000000002, 59.744278236270347, 58.119999999999997, 48.780000000000001, 103.58, 41.840000000000003, 35.479999999999997, 59.744278236270347, 76.040000000000006, 70.810000000000002, 53.659999999999997, 98.400000000000006, 50.439999999999998, 33.460000000000001, 39.899999999999999, 31.579999999999998, 59.744278236270347, 60.130000000000003, 46.170000000000002, 33.240000000000002, 131.37, 59.744278236270347, 65.569999999999993, 165.06, 81.859999999999999, 91, 49.93, 81.769999999999996, 44.850000000000001, 108.47, 150.16999999999999, 131.02000000000001, 348, 59.744278236270347, 35.759999999999998, 101.56999999999999, 59.744278236270347, 59.744278236270347, 149.53999999999999, 59.744278236270347, 29.68, 54.520000000000003, 40.689999999999998, 69.890000000000001, 35.859999999999999, 55.369999999999997, 61.479999999999997, 41.939999999999998, 50.670000000000002, 70.209999999999994, 67.951652459824288, 57.460000000000001, 81.349999999999994, 33.780000000000001, 135.46000000000001, 69.780000000000001, 80.099999999999994, 67.200000000000003, 85.260000000000005, 117, 123.65000000000001, 89.319999999999993, 67.951652459824288, 200.72999999999999, 98.170000000000002, 67.951652459824288, 67.951652459824288, 76, 87.049999999999997, 92.049999999999997, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 132.44, 156.15000000000001, 87.969999999999999, 74.599999999999994, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 67.951652459824288, 24.449999999999999, 70.189999999999998, 37.030000000000001, 37.030000000000001, 37.030000000000001, 37.030000000000001, 58.799999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2004",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2005",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [70.920000000000002, 53.979999999999997, 53.979999999999997, 53.979999999999997, 49.299999999999997, 217.90000000000001, 50.899999999999999, 111.92, 54.759999999999998, 62.939999999999998, 94.030000000000001, 122.81, 144.53, 284.07999999999998, 70.530000000000001, 121.3, 147.72999999999999, 117.48, 100.23999999999999, 135.94, 83.75, 89.400000000000006, 89.502240564791165, 100.95999999999999, 76.579999999999998, 76.579999999999998, 59.359999999999999, 127.81, 99.709999999999994, 81.469999999999999, 120.26000000000001, 148.18000000000001, 52.649999999999999, 52.649999999999999, 52.649999999999999, 52.649999999999999, 52.649999999999999, 42, 70.469999999999999, 70.469999999999999, 102.26000000000001, 102.26000000000001, 72.450000000000003, 94.650000000000006, 70.870000000000005, 73.019999999999996, 84.359999999999999, 84.530000000000001, 143.02000000000001, 85.840000000000003, 104.63, 88.203700893167934, 88.203700893167934, 321.36000000000001, 88.203700893167934, 46.140000000000001, 56.710000000000001, 97.760000000000005, 69.530000000000001, 91.136193077897403, 118.88, 115.84, 126.98999999999999, 95.079999999999998, 53.969999999999999, 70.140000000000001, 122.38, 26.23, 62.210000000000001, 63.694417353473469, 342.69, 136.37, 42, 63.990000000000002, 130.71000000000001, 83.849999999999994, 137.84999999999999, 420.43000000000001, 135.7438012873545, 203.84999999999999, 73.599999999999994, 136.83000000000001, 131.08000000000001, 71.790000000000006, 135.7438012873545, 117.73999999999999, 66.569999999999993, 97.459999999999994, 135.7438012873545, 135.7438012873545, 61.909999999999997, 100.17, 76.219999999999999, 135.7438012873545, 92.519999999999996, 74.709999999999994, 125.31, 135.7438012873545, 135.7438012873545, 135.7438012873545, 135.7438012873545, 135.7438012873545, 135.7438012873545, 135.7438012873545, 135.7438012873545, 135.7438012873545, 135.7438012873545, 135.7438012873545, 135.7438012873545, 135.7438012873545, 68.319999999999993, 34.399999999999999, 36.140000000000001, 44.060000000000002, 46.280000000000001, 105.52, 54.439999999999998, 115.73999999999999, 76.709999999999994, 80.129999999999995, 79.129999999999995, 146.91, 92.760000000000005, 119.55, 83.840000000000003, 99.109999999999999, 92.239999999999995, 148.31, 94.75, 81.950000000000003, 62.950000000000003, 71.280000000000001, 35.869999999999997, 61.490000000000002, 38.350000000000001, 54.130000000000003, 85.849999999999994, 90.25, 90.859999999999999, 88.239999999999995, 60.84580816788376, 47.43, 52.310000000000002, 48.229999999999997, 36.950000000000003, 64.480000000000004, 38.990000000000002, 98.170000000000002, 62.264291088215749, 62.82, 106.59, 59.130000000000003, 45, 34.170000000000002, 62.264291088215749, 76.040000000000006, 62.200000000000003, 54.899999999999999, 98.400000000000006, 69.900000000000006, 34.219999999999999, 39.100000000000001, 62.264291088215749, 35.100000000000001, 63.859999999999999, 47.549999999999997, 35.07, 119.55, 62.264291088215749, 61.109999999999999, 80.680000000000007, 165.06, 88.510000000000005, 50.020000000000003, 83.950000000000003, 41.32, 123.25, 124.54000000000001, 131.02000000000001, 348, 62.264291088215749, 35.759999999999998, 104.34, 62.264291088215749, 62.264291088215749, 171.09999999999999, 62.264291088215749, 27.09, 54.960000000000001, 40.549999999999997, 72.049999999999997, 37.420000000000002, 60.130000000000003, 58.880000000000003, 47.359999999999999, 56.100000000000001, 67.099999999999994, 69.738800631016261, 67.640000000000001, 61.649999999999999, 34.969999999999999, 136.49000000000001, 69.719999999999999, 85.019999999999996, 71.650000000000006, 89.219999999999999, 113.73999999999999, 135.69, 90.489999999999995, 69.738800631016261, 194.34999999999999, 98.170000000000002, 69.738800631016261, 69.738800631016261, 81.400000000000006, 93.810000000000002, 97.620000000000005, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 145.06999999999999, 156.15000000000001, 87.969999999999999, 74.599999999999994, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 69.738800631016261, 25.640000000000001, 69.760000000000005, 39.18, 39.18, 39.18, 39.18, 58.020000000000003],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2005",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2006",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [77.450000000000003, 56.100000000000001, 56.100000000000001, 56.100000000000001, 53.170000000000002, 253.84, 52.850000000000001, 109.81, 56.18, 68.549999999999997, 98.090000000000003, 127.77, 149.56999999999999, 305.88, 77.969999999999999, 127.03, 164.63, 124.34, 100.13, 136.63999999999999, 88.200000000000003, 97.370000000000005, 97.370176224800659, 97.390000000000001, 81.980000000000004, 81.980000000000004, 61.68, 149.00999999999999, 111.05, 83.599999999999994, 129.78999999999999, 150.02000000000001, 56.880000000000003, 56.880000000000003, 56.880000000000003, 56.880000000000003, 56.880000000000003, 45.719999999999999, 71.659999999999997, 71.659999999999997, 106.25, 106.25, 77.540000000000006, 89.180000000000007, 74.269999999999996, 76.909999999999997, 79.829999999999998, 89.129999999999995, 137.15000000000001, 92.549999999999997, 117.98999999999999, 89.985496122524268, 89.985496122524268, 321.36000000000001, 89.985496122524268, 48.759999999999998, 54.729999999999997, 91.450000000000003, 67.469999999999999, 92.265673548437206, 124.3, 105.26000000000001, 141.15000000000001, 120.75, 52.450000000000003, 61.030000000000001, 112.93000000000001, 30.02, 64.480000000000004, 66.037277546011154, 359.20999999999998, 128.78999999999999, 45.719999999999999, 56.659999999999997, 138.31, 80.849999999999994, 134.09, 425.36000000000001, 137.15593020250211, 202.58000000000001, 71.260000000000005, 144.61000000000001, 131.08000000000001, 81.959999999999994, 137.15593020250211, 118.05, 69.790000000000006, 96.939999999999998, 137.15593020250211, 137.15593020250211, 68.019999999999996, 89.540000000000006, 82.469999999999999, 137.15593020250211, 95.319999999999993, 66.480000000000004, 95.629999999999995, 137.15593020250211, 137.15593020250211, 137.15593020250211, 137.15593020250211, 137.15593020250211, 137.15593020250211, 137.15593020250211, 137.15593020250211, 137.15593020250211, 137.15593020250211, 137.15593020250211, 137.15593020250211, 137.15593020250211, 70.650000000000006, 38.109999999999999, 38.969999999999999, 44.759999999999998, 46.280000000000001, 116.55, 53.170000000000002, 89.650000000000006, 82.079999999999998, 74.209999999999994, 79.090000000000003, 141.75, 119.47, 91.069999999999993, 82.640000000000001, 98.560000000000002, 89.709999999999994, 98.569999999999993, 147.09999999999999, 89.939999999999998, 61.520000000000003, 70.730000000000004, 36.200000000000003, 64.670000000000002, 36.530000000000001, 60.979999999999997, 95.909999999999997, 93.939999999999998, 97.739999999999995, 82.790000000000006, 62.92119912107723, 53.770000000000003, 47.960000000000001, 48.229999999999997, 42.700000000000003, 55.240000000000002, 43.630000000000003, 64.519999999999996, 59.796660557737233, 63.689999999999998, 94.629999999999995, 62.100000000000001, 47.100000000000001, 35.109999999999999, 59.796660557737233, 82.819999999999993, 57.859999999999999, 54.140000000000001, 98.400000000000006, 69.390000000000001, 33.219999999999999, 39.770000000000003, 59.796660557737233, 42.399999999999999, 64.030000000000001, 42.43, 36.399999999999999, 125.59999999999999, 59.796660557737233, 45.259999999999998, 86.829999999999998, 165.06, 86.609999999999999, 50.369999999999997, 88.650000000000006, 40.450000000000003, 127.06, 106.92, 118.53, 348, 59.796660557737233, 35.759999999999998, 117.81999999999999, 59.796660557737233, 59.796660557737233, 177.56999999999999, 59.796660557737233, 26.039999999999999, 56.990000000000002, 40.43, 73.709999999999994, 39.640000000000001, 58.670000000000002, 61.969999999999999, 51.789999999999999, 59.710000000000001, 67.909999999999997, 73.177948799058669, 74.540000000000006, 63.770000000000003, 37.060000000000002, 133.13, 73.459999999999994, 84.730000000000004, 87.310000000000002, 89.810000000000002, 117.73, 137.90000000000001, 100.75, 73.177948799058669, 194.34999999999999, 98.170000000000002, 73.177948799058669, 73.177948799058669, 87.549999999999997, 99.469999999999999, 96.519999999999996, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 141.03999999999999, 156.15000000000001, 87.969999999999999, 74.599999999999994, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 73.177948799058669, 26.98, 68.049999999999997, 41.590000000000003, 41.590000000000003, 41.590000000000003, 41.590000000000003, 59.600000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2006",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2007",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [79.870000000000005, 56.420000000000002, 56.420000000000002, 56.420000000000002, 55.060000000000002, 262.31999999999999, 57.520000000000003, 111.27, 57.75, 69.950000000000003, 100.73, 130.46000000000001, 152.47, 307.49000000000001, 80.829999999999998, 129.78, 166.33000000000001, 116.39, 95.569999999999993, 133.99000000000001, 89.159999999999997, 100.06999999999999, 100.06508301547639, 99.510000000000005, 82.859999999999999, 82.859999999999999, 63.509999999999998, 155.5, 123.53, 83.430000000000007, 137.13, 153.40000000000001, 52.920000000000002, 52.920000000000002, 52.920000000000002, 52.920000000000002, 52.920000000000002, 45.689999999999998, 71.939999999999998, 71.939999999999998, 113.33, 113.33, 74.670000000000002, 88.049999999999997, 83.200000000000003, 75.609999999999999, 83.549999999999997, 88.390000000000001, 142.72, 106.09, 128.75, 92.224446078276941, 92.224446078276941, 321.36000000000001, 92.224446078276941, 47.850000000000001, 51.710000000000001, 92.159999999999997, 74.409999999999997, 96.413090037180112, 128.15000000000001, 96.640000000000001, 145.53, 137.06, 56.280000000000001, 56.979999999999997, 117.88, 32.82, 62.189999999999998, 63.782280413019571, 362.14999999999998, 130.66999999999999, 45.689999999999998, 54.829999999999998, 154.61000000000001, 73.640000000000001, 129.87, 394.29000000000002, 131.87369748479435, 192.47, 68.609999999999999, 138.27000000000001, 131.08000000000001, 79.209999999999994, 131.87369748479435, 110.39, 83.75, 95.75, 131.87369748479435, 131.87369748479435, 72.170000000000002, 90.170000000000002, 83.200000000000003, 131.87369748479435, 98.670000000000002, 70.439999999999998, 99.650000000000006, 131.87369748479435, 131.87369748479435, 131.87369748479435, 131.87369748479435, 131.87369748479435, 131.87369748479435, 131.87369748479435, 131.87369748479435, 131.87369748479435, 131.87369748479435, 131.87369748479435, 131.87369748479435, 131.87369748479435, 73.870000000000005, 39.939999999999998, 37.200000000000003, 44.579999999999998, 46.280000000000001, 114.93000000000001, 49.890000000000001, 74.090000000000003, 79.120000000000005, 76.379999999999995, 79.609999999999999, 145.99000000000001, 136.80000000000001, 97.969999999999999, 92, 108.87, 91.730000000000004, 96.109999999999999, 137.78999999999999, 94.859999999999999, 65.079999999999998, 71.939999999999998, 34.399999999999999, 71.349999999999994, 35.5, 56.649999999999999, 84.730000000000004, 104.06, 102.73, 86.060000000000002, 63.717759364979756, 57.130000000000003, 80.140000000000001, 48.229999999999997, 48.100000000000001, 53.890000000000001, 46.780000000000001, 65.349999999999994, 62.910947145528333, 61.43, 108.06, 66.700000000000003, 53.219999999999999, 33.780000000000001, 62.910947145528333, 84.170000000000002, 65.769999999999996, 59.270000000000003, 98.400000000000006, 71.120000000000005, 35.969999999999999, 49.109999999999999, 62.910947145528333, 38.799999999999997, 64.189999999999998, 40.899999999999999, 37.579999999999998, 148.59, 62.910947145528333, 34.560000000000002, 104.98, 165.06, 98.5, 44.289999999999999, 85.129999999999995, 54.140000000000001, 120.88, 114.84999999999999, 134.08000000000001, 348, 62.910947145528333, 33.159999999999997, 94.209999999999994, 62.910947145528333, 62.910947145528333, 174.93000000000001, 62.910947145528333, 25.289999999999999, 57.869999999999997, 40.950000000000003, 76.939999999999998, 37.100000000000001, 56.200000000000003, 59.210000000000001, 55.689999999999998, 62.590000000000003, 69, 74.803391781470083, 76.060000000000002, 61.950000000000003, 34.280000000000001, 135.06999999999999, 77.620000000000005, 79, 93.030000000000001, 86.459999999999994, 117.59999999999999, 149.56999999999999, 101.23999999999999, 74.803391781470083, 194.34999999999999, 101.38, 74.803391781470083, 74.803391781470083, 88.010000000000005, 96.530000000000001, 91.140000000000001, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 139.97, 156.15000000000001, 91.170000000000002, 74.599999999999994, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 74.803391781470083, 28.010000000000002, 66.280000000000001, 42.039999999999999, 42.039999999999999, 42.039999999999999, 42.039999999999999, 58.43],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2007",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2008",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [81.519999999999996, 57.399999999999999, 57.399999999999999, 57.399999999999999, 54.490000000000002, 298.81999999999999, 59.329999999999998, 112.93000000000001, 55.979999999999997, 72.079999999999998, 102.06999999999999, 131.06, 161.09, 292.20999999999998, 80.909999999999997, 123.73999999999999, 162.06999999999999, 126.84999999999999, 91.180000000000007, 136.69, 92.560000000000002, 104.83, 104.81834977395127, 103.5, 86.180000000000007, 86.180000000000007, 65.170000000000002, 158.33000000000001, 124.69, 82.230000000000004, 134.72999999999999, 160.03999999999999, 56.649999999999999, 56.649999999999999, 56.649999999999999, 56.649999999999999, 56.649999999999999, 53.369999999999997, 74.790000000000006, 74.790000000000006, 116.78, 116.78, 82.689999999999998, 94.170000000000002, 77.450000000000003, 78.680000000000007, 86.159999999999997, 86.299999999999997, 134.41999999999999, 111.56999999999999, 132.34, 93.13863004239164, 93.13863004239164, 321.36000000000001, 93.13863004239164, 50.549999999999997, 53.380000000000003, 94.290000000000006, 79.75, 98.129223682529613, 129.59999999999999, 89.239999999999995, 114.48, 94.719999999999999, 146.11000000000001, 54.539999999999999, 121.2, 34.130000000000003, 57.609999999999999, 59.304395120382154, 376.66000000000003, 126.61, 53.369999999999997, 58.560000000000002, 154.31999999999999, 67.680000000000007, 140.44, 437.32999999999998, 124.85078415904881, 176.66999999999999, 63.369999999999997, 133.31999999999999, 131.08000000000001, 81.849999999999994, 124.85078415904881, 131, 87.349999999999994, 105.91, 124.85078415904881, 124.85078415904881, 67.920000000000002, 105.77, 73.890000000000001, 124.85078415904881, 109.29000000000001, 68.659999999999997, 97.530000000000001, 124.85078415904881, 124.85078415904881, 124.85078415904881, 124.85078415904881, 124.85078415904881, 124.85078415904881, 124.85078415904881, 124.85078415904881, 124.85078415904881, 124.85078415904881, 124.85078415904881, 124.85078415904881, 124.85078415904881, 95.519999999999996, 42.619999999999997, 40.840000000000003, 46.039999999999999, 46.280000000000001, 109.40000000000001, 48.229999999999997, 81.060000000000002, 81.239999999999995, 74.230000000000004, 76.099999999999994, 140.91, 148.50999999999999, 106.63, 79.480000000000004, 92.680000000000007, 108.61, 89.430000000000007, 145.88, 96.099999999999994, 71.680000000000007, 76.680000000000007, 36.740000000000002, 77.829999999999998, 39.710000000000001, 63.479999999999997, 80.290000000000006, 114.34, 103.23999999999999, 94.120000000000005, 67.951616567442699, 65.969999999999999, 83.769999999999996, 48.229999999999997, 49, 57.579999999999998, 56.259999999999998, 69.510000000000005, 66.562211529877089, 121.36, 61.939999999999998, 74.359999999999999, 56.920000000000002, 35.390000000000001, 66.562211529877089, 59.450000000000003, 109.52, 62.759999999999998, 98.400000000000006, 64.180000000000007, 37.600000000000001, 47.780000000000001, 66.562211529877089, 47.200000000000003, 63.170000000000002, 40.07, 34.439999999999998, 133.11000000000001, 66.562211529877089, 30.559999999999999, 119.64, 161.13, 99.010000000000005, 39.090000000000003, 89, 52.640000000000001, 115.48999999999999, 112.98999999999999, 128.69, 348, 66.562211529877089, 36.219999999999999, 90.969999999999999, 66.562211529877089, 66.562211529877089, 208.84, 66.562211529877089, 27.260000000000002, 58.979999999999997, 40.399999999999999, 80.780000000000001, 39.170000000000002, 51.829999999999998, 65.209999999999994, 58.43, 68.060000000000002, 65.180000000000007, 77.433013010156586, 82.870000000000005, 61.390000000000001, 36.149999999999999, 135.75, 80.670000000000002, 80.780000000000001, 96.790000000000006, 86.400000000000006, 116.28, 166.69999999999999, 113.58, 77.433013010156586, 194.34999999999999, 109.17, 77.433013010156586, 77.433013010156586, 87.430000000000007, 106.04000000000001, 94.540000000000006, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 139.11000000000001, 156.15000000000001, 96.920000000000002, 74.599999999999994, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 77.433013010156586, 29.870000000000001, 67.019999999999996, 42.859999999999999, 42.859999999999999, 42.859999999999999, 42.859999999999999, 64.409999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2008",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2009",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [71.230000000000004, 50.460000000000001, 50.460000000000001, 50.460000000000001, 45.420000000000002, 294.94999999999999, 47.740000000000002, 102.79000000000001, 46.990000000000002, 61.490000000000002, 87.060000000000002, 116.89, 135.41, 263.52999999999997, 75.269999999999996, 112.8, 136.24000000000001, 105.34, 86.409999999999997, 116.76000000000001, 81.510000000000005, 89.75, 89.81225971062581, 96.859999999999999, 70.120000000000005, 70.120000000000005, 58.469999999999999, 145, 92.689999999999998, 70.120000000000005, 113.12, 173.59, 54.899999999999999, 54.899999999999999, 54.899999999999999, 54.899999999999999, 54.899999999999999, 46.270000000000003, 67.459999999999994, 67.459999999999994, 109.78, 109.78, 89.390000000000001, 87.480000000000004, 75.090000000000003, 66.019999999999996, 73.75, 78.189999999999998, 110.36, 87.180000000000007, 99.430000000000007, 78.315411479782682, 321.36000000000001, 78.315411479782682, 78.315411479782682, 46.789999999999999, 48.439999999999998, 75.769999999999996, 68.670000000000002, 85.423599356802328, 108.64, 74.739999999999995, 85.980000000000004, 104.95, 133.38, 57.270000000000003, 107.81, 24.390000000000001, 45.18, 46.786608491778779, 348.39999999999998, 113.56, 46.270000000000003, 45.509999999999998, 134.71000000000001, 60.890000000000001, 119.27, 358.19, 110.61632324978049, 162.56, 49.149999999999999, 105.14, 131.08000000000001, 76.930000000000007, 110.61632324978049, 108.87, 71.890000000000001, 108.56999999999999, 110.61632324978049, 110.61632324978049, 56.079999999999998, 108.48999999999999, 75.980000000000004, 110.61632324978049, 108.79000000000001, 78.140000000000001, 101.89, 110.61632324978049, 110.61632324978049, 110.61632324978049, 110.61632324978049, 110.61632324978049, 110.61632324978049, 110.61632324978049, 110.61632324978049, 110.61632324978049, 110.61632324978049, 110.61632324978049, 110.61632324978049, 110.61632324978049, 86.129999999999995, 40.090000000000003, 37.130000000000003, 46.280000000000001, 47.079999999999998, 109.56999999999999, 43.700000000000003, 78.689999999999998, 68.069999999999993, 59.939999999999998, 62.600000000000001, 112.15000000000001, 153.46000000000001, 90.400000000000006, 75.150000000000006, 88.810000000000002, 105.01000000000001, 80.140000000000001, 117.95999999999999, 84.859999999999999, 56.549999999999997, 71.319999999999993, 32.780000000000001, 62.369999999999997, 49.509999999999998, 50.520000000000003, 77.109999999999999, 93.019999999999996, 107.62, 82.010000000000005, 60.928230222621579, 49.590000000000003, 62.950000000000003, 48.229999999999997, 44.009999999999998, 45.950000000000003, 47.060000000000002, 71.590000000000003, 122.45, 60.686016846643682, 66.670000000000002, 62.409999999999997, 42.18, 40.299999999999997, 60.686016846643682, 56.119999999999997, 61.780000000000001, 52.310000000000002, 98.400000000000006, 69.819999999999993, 36.810000000000002, 44.700000000000003, 60.686016846643682, 35.799999999999997, 63.969999999999999, 42.030000000000001, 31.489999999999998, 135.55000000000001, 60.686016846643682, 27.969999999999999, 123.76000000000001, 88.480000000000004, 158.90000000000001, 41.780000000000001, 83.5, 54.07, 104.43000000000001, 122.20999999999999, 107.34999999999999, 348, 60.686016846643682, 37.899999999999999, 80.459999999999994, 60.686016846643682, 60.686016846643682, 221.88999999999999, 60.686016846643682, 22.109999999999999, 57.219999999999999, 34.060000000000002, 66.829999999999998, 35.159999999999997, 38.520000000000003, 53.390000000000001, 48.109999999999999, 52.100000000000001, 58.039999999999999, 64.042895033312078, 68.629999999999995, 50.609999999999999, 33.100000000000001, 96.909999999999997, 66.069999999999993, 70.840000000000003, 86.989999999999995, 69.760000000000005, 105.26000000000001, 138.97999999999999, 86.890000000000001, 64.042895033312078, 194.34999999999999, 87.920000000000002, 64.042895033312078, 64.042895033312078, 76.519999999999996, 89.980000000000004, 88.459999999999994, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 137.56999999999999, 156.15000000000001, 84.329999999999998, 74.599999999999994, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 64.042895033312078, 24.760000000000002, 58.469999999999999, 45.75, 45.75, 45.75, 45.75, 55.149999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2009",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2010",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [79.870000000000005, 54.869999999999997, 54.869999999999997, 54.869999999999997, 52.009999999999998, 301.83999999999997, 51.200000000000003, 108.90000000000001, 52.93, 67.780000000000001, 99.019999999999996, 131.52000000000001, 150, 293.67000000000002, 82.549999999999997, 128.03, 153.44999999999999, 129.88999999999999, 108.59999999999999, 143.68000000000001, 84.25, 94.099999999999994, 94.126778851892468, 97.180000000000007, 75.459999999999994, 75.459999999999994, 69.829999999999998, 157.46000000000001, 103.39, 73, 127.48999999999999, 189.93000000000001, 59.130000000000003, 59.130000000000003, 59.130000000000003, 59.130000000000003, 59.130000000000003, 49.259999999999998, 68.239999999999995, 68.239999999999995, 120.06999999999999, 120.06999999999999, 93.650000000000006, 95.730000000000004, 76.540000000000006, 76.730000000000004, 80.969999999999999, 82.900000000000006, 87.939999999999998, 97.879999999999995, 99.780000000000001, 82.836334792040503, 321.36000000000001, 82.836334792040503, 82.836334792040503, 46.689999999999998, 50.359999999999999, 74.140000000000001, 49.259999999999998, 76.847158390989335, 115.92, 74.989999999999995, 73.489999999999995, 96.859999999999999, 133.22999999999999, 64.640000000000001, 103.34999999999999, 28.5, 50.719999999999999, 52.596274859206297, 404.76999999999998, 119.94, 49.259999999999998, 46.700000000000003, 113.98, 66.099999999999994, 127.25, 369.69, 111.49206798237229, 157.94, 48.778333333333336, 113.59999999999999, 131.08000000000001, 84.719999999999999, 111.49206798237229, 121.23, 96.150000000000006, 95.370000000000005, 111.49206798237229, 111.49206798237229, 68.170000000000002, 103.81999999999999, 78.569999999999993, 111.49206798237229, 90.959999999999994, 105.81, 73.189999999999998, 111.49206798237229, 111.49206798237229, 111.49206798237229, 111.49206798237229, 111.49206798237229, 111.49206798237229, 111.49206798237229, 111.49206798237229, 111.49206798237229, 111.49206798237229, 111.49206798237229, 111.49206798237229, 111.49206798237229, 91.370000000000005, 37.799999999999997, 35.520000000000003, 46.280000000000001, 45.979999999999997, 115.92, 43.770000000000003, 73.5, 64.390000000000001, 64.010000000000005, 66.439999999999998, 114.22, 143.88, 95.099999999999994, 68.5, 97.030000000000001, 96.390000000000001, 86.069999999999993, 120.47, 82.549999999999997, 47.939999999999998, 69.870000000000005, 32.729999999999997, 69.540000000000006, 51.950000000000003, 57.990000000000002, 80.390000000000001, 100.15000000000001, 98.079999999999998, 93.420000000000002, 63.421000908783419, 50.409999999999997, 90.75, 48.229999999999997, 47.640000000000001, 50.390000000000001, 38.270000000000003, 75.379999999999995, 106.8, 62.346690127417602, 67.469999999999999, 57.869999999999997, 47.240000000000002, 49.07, 62.346690127417602, 67.900000000000006, 83.120000000000005, 52.460000000000001, 98.400000000000006, 73.549999999999997, 37.280000000000001, 51.43, 62.346690127417602, 39.5, 68.030000000000001, 51.270000000000003, 34.43, 124.06, 62.346690127417602, 37.469999999999999, 108.06999999999999, 94.640000000000001, 150.09999999999999, 41.009999999999998, 89.159999999999997, 50.130000000000003, 113.45999999999999, 144.66999999999999, 106.67, 348, 62.346690127417602, 39.549999999999997, 85.549999999999997, 62.346690127417602, 62.346690127417602, 198.09999999999999, 62.346690127417602, 22.77, 61.939999999999998, 34.969999999999999, 69.700000000000003, 34.259999999999998, 46.140000000000001, 51.700000000000003, 51.670000000000002, 60.299999999999997, 63.130000000000003, 70.382727949503206, 75.510000000000005, 56, 44.719999999999999, 109.44, 73.540000000000006, 81.650000000000006, 100.36, 67.510000000000005, 104.15000000000001, 148.28, 80.920000000000002, 70.382727949503206, 194.34999999999999, 90.959999999999994, 70.382727949503206, 70.382727949503206, 78.680000000000007, 95.430000000000007, 86.920000000000002, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 135.46000000000001, 156.15000000000001, 89.129999999999995, 74.599999999999994, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 70.382727949503206, 28.219999999999999, 60.210000000000001, 40.520000000000003, 40.520000000000003, 40.520000000000003, 40.520000000000003, 58.25],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2010",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2011",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [85.209999999999994, 58.789999999999999, 58.789999999999999, 58.789999999999999, 55.149999999999999, 319.69999999999999, 56.829999999999998, 110.62, 58.789999999999999, 73.099999999999994, 105.09999999999999, 142.47, 161.49000000000001, 308.70999999999998, 87.280000000000001, 137.86000000000001, 167.99000000000001, 148.44999999999999, 125.48999999999999, 167.38999999999999, 85.790000000000006, 101.25, 101.28973896245228, 105.84999999999999, 78.579999999999998, 78.579999999999998, 76.140000000000001, 166.43000000000001, 117.42, 78.140000000000001, 139.28, 187.84, 63.5, 63.5, 63.5, 63.5, 63.5, 55.61999999999999, 69.599999999999994, 69.599999999999994, 125.56, 125.56, 101.41, 104.81, 81.219999999999999, 78.810000000000002, 87.549999999999997, 87.840000000000003, 98.620000000000005, 113.19, 106.66, 88.596330224138754, 88.596330224138754, 321.36000000000001, 88.596330224138754, 53.299999999999997, 48.039999999999999, 73.120000000000005, 49.640000000000001, 86.259429949093715, 157.97, 80.510000000000005, 79.780000000000001, 111.06, 136.18000000000001, 69.439999999999998, 127, 30.190000000000001, 50.740000000000002, 52.709454704011264, 421.85000000000002, 122.89, 55.619999999999997, 50.18, 125.26000000000001, 60.799999999999997, 139.68000000000001, 379.10000000000002, 111.21766286352549, 154.94, 48.406666666666666, 113.58, 131.08000000000001, 91.700000000000003, 111.21766286352549, 124.48, 107.25, 99.540000000000006, 111.21766286352549, 111.21766286352549, 66.840000000000003, 97, 81.599999999999994, 111.21766286352549, 101.05, 106.90000000000001, 78.780000000000001, 111.21766286352549, 111.21766286352549, 111.21766286352549, 111.21766286352549, 111.21766286352549, 111.21766286352549, 111.21766286352549, 111.21766286352549, 111.21766286352549, 111.21766286352549, 111.21766286352549, 111.21766286352549, 111.21766286352549, 105.56999999999999, 47.420000000000002, 34.939999999999998, 46.280000000000001, 36.299999999999997, 114.40000000000001, 41.219999999999999, 72.170000000000002, 63.060000000000002, 50.700000000000003, 69.659999999999997, 118.7, 151.66999999999999, 102.14, 67.25, 99.090000000000003, 101.64, 98.719999999999999, 174.16, 84.859999999999999, 45.259999999999998, 67.469999999999999, 27.510000000000002, 76.829999999999998, 50.25, 53.909999999999997, 80.680000000000007, 100.11, 63.009999999999998, 98.489999999999995, 61.397750587980248, 54.640000000000001, 85.200000000000003, 48.229999999999997, 56.170000000000002, 58.399999999999999, 39.759999999999998, 86.299999999999997, 102.13, 66.692702028708865, 64.719999999999999, 56.479999999999997, 51.520000000000003, 57.5, 66.692702028708865, 76.209999999999994, 89.469999999999999, 57.579999999999998, 98.400000000000006, 85.950000000000003, 39.719999999999999, 66.692702028708865, 47.219999999999999, 43, 80.099999999999994, 72.349999999999994, 124.59, 34.479999999999997, 66.692702028708865, 47.390000000000001, 102.19, 98.959999999999994, 149.80000000000001, 42.640000000000001, 90.5, 56.619999999999997, 117.54000000000001, 114.38, 80.760000000000005, 348, 66.692702028708865, 40, 90.560000000000002, 66.692702028708865, 66.692702028708865, 210.00999999999999, 66.692702028708865, 23.93, 64.719999999999999, 35.210000000000001, 72.530000000000001, 39.469999999999999, 49.640000000000001, 53.25, 55.990000000000002, 64.489999999999995, 65.049999999999997, 74.89509043465263, 82.480000000000004, 58.990000000000002, 44.159999999999997, 122.22, 79.280000000000001, 111.83, 78.540000000000006, 68.640000000000001, 162.49000000000001, 108.56, 83.819999999999993, 74.89509043465263, 194.34999999999999, 90.959999999999994, 74.89509043465263, 74.89509043465263, 88.329999999999998, 107.62, 86.590000000000003, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 154.43000000000001, 156.15000000000001, 90.430000000000007, 76.269999999999996, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 74.89509043465263, 30.84, 62.5, 41.840000000000003, 41.840000000000003, 41.840000000000003, 41.840000000000003, 59.240000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2011",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2012",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [86.510000000000005, 59.700000000000003, 59.700000000000003, 59.700000000000003, 55.649999999999999, 322.67000000000002, 62.060000000000002, 112.34, 60.850000000000001, 76.049999999999997, 105.15000000000001, 149.27000000000001, 160.75, 311.79000000000002, 89.269999999999996, 146.53, 176.16999999999999, 155.84, 128.22999999999999, 170.75999999999999, 85.280000000000001, 103.23999999999999, 103.35918919307083, 117.16, 79.170000000000002, 79.170000000000002, 76.540000000000006, 165.65000000000001, 123.97, 79.439999999999998, 142.38, 191.44999999999999, 62.240000000000002, 62.240000000000002, 62.240000000000002, 62.240000000000002, 62.240000000000002, 55.790000000000006, 68.5, 68.5, 126.45, 126.45, 104.09, 102.62, 76.510000000000005, 85.469999999999999, 91.939999999999998, 88.150000000000006, 96.310000000000002, 112.20999999999999, 111.77, 91.912841823509012, 91.912841823509012, 321.36000000000001, 91.912841823509012, 52.829999999999998, 47.149999999999999, 73.719999999999999, 44.229999999999997, 83.171005343193187, 153.09, 78.260000000000005, 83.180000000000007, 109.33, 139.68000000000001, 75.959999999999994, 109.59, 30.469999999999999, 48.270000000000003, 50.308555912734192, 430.56999999999999, 123.70999999999999, 55.789999999999999, 49.579999999999998, 123.22, 57.840000000000003, 137.66999999999999, 369.20999999999998, 110.58332823614192, 147.84, 48.034999999999997, 120.59999999999999, 131.08000000000001, 98.189999999999998, 110.58332823614192, 125.29000000000001, 104.81999999999999, 105.64, 110.58332823614192, 110.58332823614192, 63.75, 104.45, 82.730000000000004, 110.58332823614192, 105.38, 111.36, 78.040000000000006, 110.58332823614192, 110.58332823614192, 110.58332823614192, 110.58332823614192, 110.58332823614192, 110.58332823614192, 110.58332823614192, 110.58332823614192, 110.58332823614192, 110.58332823614192, 110.58332823614192, 110.58332823614192, 110.58332823614192, 105.43000000000001, 48.109999999999999, 34.909999999999997, 46.280000000000001, 37.920000000000002, 104.19, 44.090000000000003, 73.609999999999999, 61.359999999999999, 35.369999999999997, 70.739999999999995, 117.86, 159.97, 88.549999999999997, 66.930000000000007, 102.06999999999999, 101.01000000000001, 105.75, 185.88, 82.849999999999994, 40.710000000000001, 65.400000000000006, 21.859999999999999, 78.219999999999999, 45.090000000000003, 59.119999999999997, 80.579999999999998, 101.55, 98.219999999999999, 110.79000000000001, 61.534599906910479, 55.579999999999998, 68.349999999999994, 45.399999999999999, 54.369999999999997, 51.619999999999997, 43.5, 93.170000000000002, 94.040000000000006, 65.932533642404422, 70.299999999999997, 52.649999999999999, 50.039999999999999, 61.240000000000002, 65.932533642404422, 79.099999999999994, 74.159999999999997, 61.979999999999997, 98.400000000000006, 86.670000000000002, 40.539999999999999, 65.932533642404422, 50.740000000000002, 43.710000000000001, 77.870000000000005, 85.510000000000005, 97.439999999999998, 33.060000000000002, 65.932533642404422, 47.390000000000001, 100.20999999999999, 111.88, 47.700000000000003, 150.21000000000001, 92.340000000000003, 41.170000000000002, 116.68000000000001, 119.5, 79.670000000000002, 348, 65.932533642404422, 40.810000000000002, 90.650000000000006, 65.932533642404422, 65.932533642404422, 222.08000000000001, 65.932533642404422, 25.109999999999999, 67.150000000000006, 30.530000000000001, 68.120000000000005, 38.840000000000003, 50.399999999999999, 55.060000000000002, 52.619999999999997, 61.75, 61.960000000000001, 72.83792141222969, 84.950000000000003, 58.390000000000001, 40.259999999999998, 121.19, 77.650000000000006, 115.18000000000001, 74.709999999999994, 67.049999999999997, 158.06, 103.31, 82.040000000000006, 72.83792141222969, 194.34999999999999, 90.959999999999994, 72.83792141222969, 72.83792141222969, 84.25, 111.98999999999999, 87.230000000000004, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 156.65000000000001, 156.15000000000001, 84, 73.780000000000001, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 72.83792141222969, 30.68, 62.600000000000001, 43.170000000000002, 43.170000000000002, 43.170000000000002, 43.170000000000002, 57.020000000000003],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2012",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2013",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [85.079999999999998, 59.759999999999998, 59.759999999999998, 59.759999999999998, 54.869999999999997, 304.32999999999998, 62.880000000000003, 120.93000000000001, 61.979999999999997, 78.109999999999999, 104.06999999999999, 149.55000000000001, 157.84999999999999, 320.52999999999997, 90.780000000000001, 146.41999999999999, 181.34999999999999, 155.88999999999999, 125.16, 166.44999999999999, 80.819999999999993, 103.05, 103.14379688577685, 114.06, 77.090000000000003, 77.090000000000003, 81.400000000000006, 164.34999999999999, 129.71000000000001, 81.579999999999998, 143.75999999999999, 189.24000000000001, 61.969999999999999, 61.969999999999999, 61.969999999999999, 61.969999999999999, 61.969999999999999, 53.840000000000003, 67.969999999999999, 67.969999999999999, 133.69, 133.69, 98.790000000000006, 94, 75.870000000000005, 87.920000000000002, 95.599999999999994, 87.930000000000007, 95.689999999999998, 104.86, 102.77, 92.532260935209237, 92.532260935209237, 321.36000000000001, 92.532260935209237, 52.530000000000001, 46.289999999999999, 65.409999999999997, 42.369999999999997, 74.809145119952561, 119.81999999999999, 74.680000000000007, 71.739999999999995, 98.590000000000003, 134.03, 77.560000000000002, 100.31, 33.979999999999997, 46.740000000000002, 48.845151924404981, 442.62, 121.42, 53.840000000000003, 48.640000000000001, 130.84999999999999, 55.82, 132.46000000000001, 367.04000000000002, 111.07262630383663, 142.72, 47.663333333333334, 130.05000000000001, 131.08000000000001, 98.180000000000007, 111.07262630383663, 126.34999999999999, 99.609999999999999, 110.94, 111.07262630383663, 58.869999999999997, 111.07262630383663, 106.41, 77.879999999999995, 111.07262630383663, 106.2, 113.26000000000001, 82.939999999999998, 111.07262630383663, 111.07262630383663, 111.07262630383663, 111.07262630383663, 111.07262630383663, 111.07262630383663, 111.07262630383663, 111.07262630383663, 111.07262630383663, 111.07262630383663, 111.07262630383663, 111.07262630383663, 111.07262630383663, 97.939999999999998, 46.299999999999997, 34.560000000000002, 46.280000000000001, 41.869999999999997, 105.2, 47.090000000000003, 67.409999999999997, 52.509999999999998, 44.710000000000001, 64.640000000000001, 111.45, 161.09999999999999, 86.170000000000002, 66.269999999999996, 112.54000000000001, 97.609999999999999, 102.38, 191.87, 81.920000000000002, 40.369999999999997, 63.609999999999999, 26.859999999999999, 73.859999999999999, 46.299999999999997, 64.819999999999993, 72.650000000000006, 98.950000000000003, 106.33, 102.40000000000001, 61.342398158434079, 58.880000000000003, 77.469999999999999, 41.469999999999999, 48.600000000000001, 47.460000000000001, 43.109999999999999, 60.759999999999998, 86.120000000000005, 61.47934838480851, 56.369999999999997, 58.350000000000001, 49.670000000000002, 64.040000000000006, 61.47934838480851, 80.459999999999994, 58.659999999999997, 60.630000000000003, 98.400000000000006, 80.430000000000007, 61.47934838480851, 42.689999999999998, 59.200000000000003, 46.600000000000001, 84.230000000000004, 87.450000000000003, 93, 38.399999999999999, 61.47934838480851, 47.390000000000001, 97.719999999999999, 125.78, 45.460000000000001, 133.37, 90.640000000000001, 44.079999999999998, 106.89, 113.31, 86.799999999999997, 348, 61.47934838480851, 39.240000000000002, 86.170000000000002, 61.47934838480851, 61.47934838480851, 196.43000000000001, 61.47934838480851, 25.789999999999999, 65.299999999999997, 29.329999999999998, 65.180000000000007, 37.990000000000002, 54.280000000000001, 49.719999999999999, 49.789999999999999, 59.609999999999999, 56.689999999999998, 69.935335507363433, 81.230000000000004, 40.329999999999998, 56.68, 116.31, 80.450000000000003, 110.98, 73.079999999999998, 64.069999999999993, 137.63, 104.89, 83.260000000000005, 69.935335507363433, 194.34999999999999, 90.959999999999994, 69.935335507363433, 69.935335507363433, 85.469999999999999, 108.98, 92.200000000000003, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 161.88999999999999, 156.15000000000001, 87.719999999999999, 76.269999999999996, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 69.935335507363433, 30, 62.229999999999997, 41.280000000000001, 41.280000000000001, 41.280000000000001, 41.280000000000001, 56.020000000000003],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2013",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2014",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [84.620000000000005, 60.479999999999997, 60.479999999999997, 60.479999999999997, 55.32, 287.63999999999999, 66.530000000000001, 130.84, 63.840000000000003, 80.280000000000001, 103.5, 150.05000000000001, 158.78, 333.43000000000001, 92.569999999999993, 157.56999999999999, 178.03, 142.72, 125.28, 160.24000000000001, 82.930000000000007, 102.26000000000001, 102.29301191886088, 106.14, 74.109999999999999, 74.109999999999999, 83.379999999999995, 168.38999999999999, 130.25999999999999, 85.780000000000001, 145.55000000000001, 202.24000000000001, 59.079999999999998, 59.079999999999998, 59.079999999999998, 59.079999999999998, 59.079999999999998, 48.920000000000002, 69.140000000000001, 69.140000000000001, 120.20999999999999, 120.20999999999999, 96.670000000000002, 100.69, 75.409999999999997, 92.230000000000004, 96.769999999999996, 90.549999999999997, 94.230000000000004, 112.54000000000001, 100.13, 95.367451455780611, 95.367451455780611, 321.36000000000001, 95.367451455780611, 53.770000000000003, 47.799999999999997, 64.969999999999999, 36.359999999999999, 67.624024666311342, 69.480000000000004, 110.65000000000001, 54.609999999999999, 91.090000000000003, 125.13, 75.780000000000001, 109.31999999999999, 37.43, 44.909999999999997, 46.93997808961759, 425.98000000000002, 118.64, 48.920000000000002, 48.079999999999998, 135.41, 57.469999999999999, 130.91, 360.47000000000003, 109.25837872401202, 138.31, 47.291666666666671, 129.61000000000001, 131.08000000000001, 99.060000000000002, 109.25837872401202, 110.81, 93.450000000000003, 102.42, 109.25837872401202, 58.960000000000001, 109.25837872401202, 105.39, 80.5, 109.25837872401202, 117.06999999999999, 105.86, 74.920000000000002, 109.25837872401202, 109.25837872401202, 109.25837872401202, 109.25837872401202, 109.25837872401202, 109.25837872401202, 109.25837872401202, 109.25837872401202, 109.25837872401202, 109.25837872401202, 109.25837872401202, 109.25837872401202, 109.25837872401202, 90.620000000000005, 44.509999999999998, 32.729999999999997, 46.280000000000001, 45.979999999999997, 96.329999999999998, 45.350000000000001, 68.980000000000004, 49.840000000000003, 54.259999999999998, 109.94, 62.159999999999997, 164.03, 79.819999999999993, 67.739999999999995, 102.28, 100.04000000000001, 99.030000000000001, 175.56999999999999, 79.560000000000002, 36.920000000000002, 62.409999999999997, 20.850000000000001, 71.890000000000001, 45.740000000000002, 60.640000000000001, 76.629999999999995, 96.109999999999999, 76.519999999999996, 91.609999999999999, 57.784449025557144, 59.5, 78.689999999999998, 40.740000000000002, 45.380000000000003, 46.170000000000002, 36.009999999999998, 63.840000000000003, 78.590000000000003, 59.532434345395025, 61.969999999999999, 53.68, 50.829999999999998, 58.82, 59.532434345395025, 76.189999999999998, 54.670000000000002, 58.439999999999998, 99.540000000000006, 76.769999999999996, 43.899999999999999, 59.532434345395025, 65.269999999999996, 43, 72.930000000000007, 83.189999999999998, 104.23, 53.100000000000001, 59.532434345395025, 47.390000000000001, 103.08, 119.5, 58.259999999999998, 126.29000000000001, 73.519999999999996, 51.590000000000003, 104.38, 110.59, 88.340000000000003, 299.37, 59.532434345395025, 39.240000000000002, 91.299999999999997, 59.532434345395025, 59.532434345395025, 213.16, 59.532434345395025, 24.690000000000001, 66.489999999999995, 28.41, 65.670000000000002, 37.490000000000002, 48.090000000000003, 49.090000000000003, 46.850000000000001, 57.710000000000001, 55.079999999999998, 68.064126820046368, 85.260000000000005, 42.350000000000001, 55.5, 112.98, 78.099999999999994, 69.079999999999998, 106.7, 65.189999999999998, 119.09, 102.39, 84.739999999999995, 68.064126820046368, 194.34999999999999, 90.959999999999994, 68.064126820046368, 68.064126820046368, 83.650000000000006, 107.12, 89.760000000000005, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 162.87, 156.15000000000001, 117.54000000000001, 76.519999999999996, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 68.064126820046368, 30, 64.379999999999995, 42.469999999999999, 42.469999999999999, 42.469999999999999, 42.469999999999999, 55.159999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2014",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2015",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [86.25, 61.75, 61.75, 61.75, 56.420000000000002, 299.47000000000003, 65.280000000000001, 137.28, 64.180000000000007, 80.489999999999995, 102.43000000000001, 157.81999999999999, 154.19, 351.13, 92.819999999999993, 155.18000000000001, 180.19, 138.55000000000001, 122.3, 150.94, 83.719999999999999, 104.05, 104.06330782445836, 105.61, 71.379999999999995, 71.379999999999995, 83.519999999999996, 167.31999999999999, 126.7, 91.109999999999999, 146.30000000000001, 215.43000000000001, 57.07, 57.07, 57.07, 57.07, 57.07, 41.920000000000002, 70.430000000000007, 70.430000000000007, 117.14, 117.14, 95.819999999999993, 107.81, 71.799999999999997, 97.400000000000006, 98.769999999999996, 88.290000000000006, 88.969999999999999, 113.7, 102.69, 96.980783117762925, 96.980783117762925, 321.36000000000001, 96.980783117762925, 51.090000000000003, 49.359999999999999, 53.049999999999997, 30.75, 62.984878320532168, 72.599999999999994, 115.91, 49.939999999999998, 81.299999999999997, 110.95999999999999, 89.650000000000006, 71.680000000000007, 35.43, 39.460000000000001, 41.335209776060459, 389.41000000000003, 118.5, 41.920000000000002, 41.939999999999998, 144.91, 59.140000000000001, 124.84, 329.47000000000003, 105.26094861349532, 131.37, 46.920000000000002, 127.86, 131.08000000000001, 85.799999999999997, 105.26094861349532, 101.19, 88.189999999999998, 105.26094861349532, 89.890000000000001, 60.049999999999997, 105.26094861349532, 113.05, 74.629999999999995, 105.26094861349532, 123.08, 105.3, 81.450000000000003, 105.26094861349532, 105.26094861349532, 105.26094861349532, 105.26094861349532, 105.26094861349532, 105.26094861349532, 105.26094861349532, 105.26094861349532, 105.26094861349532, 105.26094861349532, 105.26094861349532, 105.26094861349532, 105.26094861349532, 79.150000000000006, 42.090000000000003, 29.59, 46.280000000000001, 46.670000000000002, 97.879999999999995, 39.420000000000002, 69.590000000000003, 31.640000000000001, 51.090000000000003, 95.359999999999999, 169.47999999999999, 59.210000000000001, 71.840000000000003, 70.780000000000001, 96.379999999999995, 98.700000000000003, 93.709999999999994, 154.93000000000001, 69.5, 34.850000000000001, 18.379999999999999, 59.700000000000003, 67.290000000000006, 44.729999999999997, 63.640000000000001, 66.560000000000002, 87.25, 56.899999999999999, 77.349999999999994, 53.638544006800849, 56.729999999999997, 59.329999999999998, 39.659999999999997, 40.789999999999999, 40.329999999999998, 37.689999999999998, 76.519999999999996, 65.25, 57.05808625558398, 61.219999999999999, 52.710000000000001, 45.539999999999999, 59.090000000000003, 57.05808625558398, 79.870000000000005, 58.109999999999999, 56.75, 94.189999999999998, 72.439999999999998, 45.200000000000003, 56.759999999999998, 57.05808625558398, 22.84, 70.030000000000001, 66.280000000000001, 122.69, 57.05808625558398, 53.149999999999999, 47.390000000000001, 97.239999999999995, 52.939999999999998, 112.90000000000001, 129.72, 73.950000000000003, 59.780000000000001, 98.879999999999995, 107.15000000000001, 84.090000000000003, 268.36000000000001, 57.05808625558398, 37.799999999999997, 94.010000000000005, 57.05808625558398, 57.05808625558398, 193, 57.05808625558398, 26.949999999999999, 72.900000000000006, 22.489999999999998, 59.340000000000003, 38.359999999999999, 48.090000000000003, 45.329999999999998, 45.159999999999997, 45.240000000000002, 49.890000000000001, 62.31252784997141, 67.930000000000007, 41.950000000000003, 52.170000000000002, 107.26000000000001, 76.560000000000002, 66.920000000000002, 98.189999999999998, 60.75, 99.939999999999998, 108.88, 76.120000000000005, 62.31252784997141, 194.34999999999999, 90.959999999999994, 62.31252784997141, 73.480000000000004, 62.31252784997141, 103.25, 87.340000000000003, 62.31252784997141, 62.31252784997141, 62.31252784997141, 62.31252784997141, 145.81999999999999, 62.31252784997141, 62.31252784997141, 139.88, 107.79000000000001, 73.299999999999997, 62.31252784997141, 62.31252784997141, 62.31252784997141, 62.31252784997141, 62.31252784997141, 62.31252784997141, 62.31252784997141, 62.31252784997141, 62.31252784997141, 62.31252784997141, 62.31252784997141, 62.31252784997141, 62.31252784997141, 62.31252784997141, 27.809999999999999, 66.159999999999997, 41.630000000000003, 41.630000000000003, 41.630000000000003, 41.630000000000003, 54.920000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2015",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2016",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [84.769999999999996, 61.100000000000001, 61.100000000000001, 61.100000000000001, 55.369999999999997, 303.00999999999999, 64.019999999999996, 139.02000000000001, 63.740000000000002, 79.269999999999996, 100.98, 148.86000000000001, 157.66999999999999, 348.44, 97.540000000000006, 150.59, 184.03, 134.44999999999999, 118.91, 150.41, 82.319999999999993, 100.17, 100.20749948853079, 104.55, 70.900000000000006, 70.900000000000006, 85.890000000000001, 164.40000000000001, 122.8, 92.590000000000003, 146.66, 227.74000000000001, 59.469999999999999, 59.469999999999999, 59.469999999999999, 59.469999999999999, 59.469999999999999, 40.079999999999998, 69.120000000000005, 69.120000000000005, 123.56999999999999, 123.56999999999999, 88.329999999999998, 105.52, 74.810000000000002, 101.86, 96.829999999999998, 88.239999999999995, 89, 116.19, 103.67, 98.755928338188426, 98.755928338188426, 320.14999999999998, 98.755928338188426, 48.329999999999998, 46.520000000000003, 60.310000000000002, 29.190000000000001, 64.873807939360717, 90.079999999999998, 125.20999999999999, 55.719999999999999, 62.049999999999997, 105.81999999999999, 101.06, 76.079999999999998, 31.309999999999999, 36.890000000000001, 38.685208044740037, 371.73000000000002, 112.18000000000001, 40.079999999999998, 37.420000000000002, 145.41, 61.780000000000001, 120.58, 303.13999999999999, 102.54409913084132, 126.90000000000001, 46.469999999999999, 126.95, 131.08000000000001, 75.090000000000003, 102.54409913084132, 97.170000000000002, 85.549999999999997, 102.54409913084132, 87.319999999999993, 58.030000000000001, 102.54409913084132, 109.54000000000001, 75.209999999999994, 102.54409913084132, 128.68000000000001, 100.64, 84.950000000000003, 102.54409913084132, 102.54409913084132, 102.54409913084132, 102.54409913084132, 102.54409913084132, 102.54409913084132, 102.54409913084132, 102.54409913084132, 102.54409913084132, 102.54409913084132, 102.54409913084132, 102.54409913084132, 102.54409913084132, 73.579999999999998, 31.329999999999998, 24.699999999999999, 46.280000000000001, 42.119999999999997, 83.409999999999997, 40.390000000000001, 54.590000000000003, 32.649999999999999, 67.109999999999999, 88.719999999999999, 170.90000000000001, 58.039999999999999, 67.719999999999999, 82.859999999999999, 65.420000000000002, 96.159999999999997, 89.549999999999997, 139.62, 59.909999999999997, 30.25, 15.279999999999999, 55.93, 71.120000000000005, 36.490000000000002, 63.759999999999998, 63.299999999999997, 87.090000000000003, 41.109999999999999, 73.150000000000006, 51.020069977899844, 55.859999999999999, 55.93, 34.899999999999999, 35.420000000000002, 34.869999999999997, 31.210000000000001, 67.879999999999995, 56.5, 54.119074968804888, 60.829999999999998, 47.57, 40.640000000000001, 57.890000000000001, 54.119074968804888, 73.959999999999994, 54.109999999999999, 51.219999999999999, 95.069999999999993, 111.84, 49.479999999999997, 58.990000000000002, 23.039999999999999, 54.119074968804888, 66.879999999999995, 75.549999999999997, 130.78, 54.119074968804888, 50.530000000000001, 47.390000000000001, 93.969999999999999, 46.020000000000003, 100.45999999999999, 136.31999999999999, 70.129999999999995, 57.810000000000002, 92.599999999999994, 101.37, 86.650000000000006, 213.06999999999999, 54.119074968804888, 37.130000000000003, 95.379999999999995, 54.119074968804888, 54.119074968804888, 194.44999999999999, 54.119074968804888, 24.530000000000001, 78.060000000000002, 26.09, 56.07, 36.200000000000003, 48.090000000000003, 48.469999999999999, 45.390000000000001, 38.520000000000003, 46.369999999999997, 59.015347680436712, 56.399999999999999, 41.409999999999997, 51.590000000000003, 99.819999999999993, 67.760000000000005, 93.810000000000002, 72.819999999999993, 62.18, 87.409999999999997, 110.27, 76.459999999999994, 59.015347680436712, 194.34999999999999, 90.959999999999994, 59.015347680436712, 70.719999999999999, 59.015347680436712, 95.689999999999998, 78.650000000000006, 59.015347680436712, 59.015347680436712, 59.015347680436712, 59.015347680436712, 142.22999999999999, 59.015347680436712, 59.015347680436712, 136.90000000000001, 101.78, 72.75, 59.015347680436712, 59.015347680436712, 59.015347680436712, 59.015347680436712, 59.015347680436712, 59.015347680436712, 59.015347680436712, 59.015347680436712, 59.015347680436712, 59.015347680436712, 59.015347680436712, 59.015347680436712, 59.015347680436712, 59.015347680436712, 26.59, 65.359999999999999, 40.829999999999998, 40.829999999999998, 40.829999999999998, 40.829999999999998, 52.509999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2016",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2017",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [87.239999999999995, 62.960000000000001, 62.959999999999994, 62.959999999999994, 58.600000000000001, 296.75999999999999, 71.579999999999998, 148.00999999999999, 66.659999999999997, 84.439999999999998, 104.94, 156.03, 165.33000000000001, 353.79000000000002, 101.28, 150.53, 188.06, 144.87, 123.84999999999999, 147.56, 84.930000000000007, 102.98, 103.01676171360316, 107.23999999999999, 75.049999999999997, 75.049999999999997, 87.159999999999997, 165.22999999999999, 129.66999999999999, 97.650000000000006, 157.27000000000001, 220, 63.039999999999999, 63.039999999999992, 63.039999999999992, 63.039999999999992, 63.039999999999992, 40.740000000000002, 69.109999999999999, 69.109999999999999, 123.62, 123.62000000000002, 86.980000000000004, 104.03, 78.189999999999998, 107.53, 104.04000000000001, 96.650000000000006, 88.620000000000005, 124.14, 105.55, 104.46907360195149, 104.46907360195149, 313.85000000000002, 104.46907360195149, 55.759999999999998, 46.880000000000003, 56.829999999999998, 47.780000000000001, 72.883690825415172, 90.400000000000006, 133.37, 53.789999999999999, 53.579999999999998, 100.62, 115.93000000000001, 87.200000000000003, 34.420000000000002, 37.630000000000003, 39.451311483955287, 376.80000000000001, 114.8, 40.740000000000002, 39.359999999999999, 160.97999999999999, 68.170000000000002, 120.89, 316.48000000000002, 104.62544228472566, 133.16, 47.140000000000001, 124.79000000000001, 131.08000000000001, 75.090000000000003, 104.62544228472566, 97.019999999999996, 82.200000000000003, 104.62544228472566, 85.180000000000007, 58.93, 104.62544228472566, 105.52, 74.010000000000005, 104.62544228472566, 119.11, 101.02, 87.969999999999999, 104.62544228472566, 104.62544228472566, 104.62544228472566, 104.62544228472566, 104.62544228472566, 104.62544228472566, 104.62544228472566, 104.62544228472566, 104.62544228472566, 104.62544228472566, 104.62544228472566, 104.62544228472566, 104.62544228472566, 77.079999999999998, 30, 25.469999999999999, 46.280000000000001, 44.640000000000001, 81.209999999999994, 44.740000000000002, 59.780000000000001, 44.950000000000003, 61.049999999999997, 90.069999999999993, 172.80000000000001, 56.560000000000002, 68.459999999999994, 88.950000000000003, 68.450000000000003, 97.840000000000003, 91.489999999999995, 143.09, 61.810000000000002, 42.829999999999998, 17.829999999999998, 55.32, 74.170000000000002, 39.07, 58.07, 73.579999999999998, 95.810000000000002, 47.549999999999997, 78.810000000000002, 53.195347337043593, 53.539999999999999, 74.290000000000006, 31.100000000000001, 33.109999999999999, 36, 36.840000000000003, 55.829999999999998, 70.549999999999997, 54.670002246560749, 65.340000000000003, 48.659999999999997, 39.200000000000003, 59.270000000000003, 54.670002246560749, 71.590000000000003, 57.710000000000001, 100.17, 50.030000000000001, 101.25, 53.68, 61.479999999999997, 22.239999999999998, 54.670002246560749, 58.140000000000001, 74.489999999999995, 100.92, 54.670002246560749, 57.140000000000001, 47.390000000000001, 81.219999999999999, 53.32, 81.920000000000002, 146.37, 75.069999999999993, 60.850000000000001, 102.43000000000001, 101.25, 87.799999999999997, 305.97000000000003, 54.670002246560749, 40.159999999999997, 100.05, 54.670002246560749, 54.670002246560749, 216.24000000000001, 54.670002246560749, 24.32, 79.060000000000002, 25.289999999999999, 55.979999999999997, 35.280000000000001, 48.090000000000003, 46.380000000000003, 47.509999999999998, 42.420000000000002, 46.07, 56.700000000000003, 60.570423491348699, 42.07, 50.229999999999997, 101.81, 71.079999999999998, 96.379999999999995, 74.299999999999997, 65.069999999999993, 87.430000000000007, 113.13, 83.519999999999996, 60.570423491348699, 194.34999999999999, 90.959999999999994, 60.570423491348699, 72.480000000000004, 60.570423491348699, 96.849999999999994, 76.450000000000003, 60.570423491348699, 60.570423491348699, 60.570423491348699, 60.570423491348699, 143.81999999999999, 60.570423491348699, 60.570423491348699, 133.47999999999999, 102.63, 60.570423491348699, 72.390000000000001, 60.570423491348699, 60.570423491348699, 60.570423491348699, 60.570423491348699, 60.570423491348699, 60.570423491348699, 60.570423491348699, 60.570423491348699, 60.570423491348699, 60.570423491348699, 60.570423491348699, 60.570423491348699, 60.570423491348699, 27.280000000000001, 65.099999999999994, 41.960000000000001, 41.960000000000001, 41.960000000000001, 41.960000000000001, 54.210000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2017",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2018",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [88.519999999999996, 64.439999999999998, 64.439999999999998, 64.439999999999998, 60.299999999999997, 304.80000000000001, 80.150000000000006, 148.53, 67.569999999999993, 86.430000000000007, 107.92, 158.81999999999999, 166.49000000000001, 362.42000000000002, 103.45, 147.94999999999999, 189.80000000000001, 148.59, 123.62, 145.91999999999999, 89.129999999999995, 106.97, 106.96912743894656, 106.87, 78.189999999999998, 78.189999999999998, 86.469999999999999, 163.25999999999999, 128.84, 99.609999999999999, 161.13999999999999, 217.08000000000001, 64.390000000000001, 64.390000000000001, 64.390000000000001, 64.390000000000001, 64.390000000000001, 43.619999999999997, 70, 70, 124.43000000000001, 124.43000000000002, 88.640000000000001, 99.200000000000003, 76.810000000000002, 109.48999999999999, 111.76000000000001, 98.430000000000007, 87.450000000000003, 133.22, 109.61, 107.74683161953789, 107.74683161953789, 309.49000000000001, 107.74683161953789, 62.649999999999999, 51.579999999999998, 63.530000000000001, 71.209999999999994, 83.497490901560965, 91.670000000000002, 139.38999999999999, 55.850000000000001, 50.899999999999999, 98.879999999999995, 126.36, 92.469999999999999, 36.609999999999999, 37.57, 39.398852820402141, 376.88999999999999, 115.67, 43.619999999999997, 43.07, 164.66, 72.159999999999997, 120.84, 325.19999999999999, 104.48944261644277, 130.40000000000001, 49.810000000000002, 124.90000000000001, 131.08000000000001, 75.090000000000003, 104.48944261644277, 103.23999999999999, 88.489999999999995, 104.48944261644277, 93.900000000000006, 98.340000000000003, 58.93, 104.48944261644277, 78.930000000000007, 104.48944261644277, 96.579999999999998, 100.84999999999999, 87.590000000000003, 104.48944261644277, 104.48944261644277, 104.48944261644277, 104.48944261644277, 104.48944261644277, 104.48944261644277, 104.48944261644277, 104.48944261644277, 104.48944261644277, 104.48944261644277, 104.48944261644277, 104.48944261644277, 104.48944261644277, 79.010000000000005, 32.509999999999998, 27.629999999999999, 46.280000000000001, 48.450000000000003, 84.189999999999998, 58.890000000000001, 65.799999999999997, 58.899999999999999, 50.659999999999997, 87.959999999999994, 157.91999999999999, 58.890000000000001, 68.260000000000005, 89.280000000000001, 71.400000000000006, 103.12, 91.840000000000003, 150.81, 61.960000000000001, 45.909999999999997, 21.870000000000001, 58.07, 77.25, 37.619999999999997, 60.140000000000001, 74.200000000000003, 103.87, 63.780000000000001, 89.150000000000006, 56.34822482168709, 54.630000000000003, 69.920000000000002, 31.199999999999999, 32.640000000000001, 34.409999999999997, 36.640000000000001, 67.790000000000006, 67.959999999999994, 55.367775956909412, 67.840000000000003, 46.039999999999999, 40.590000000000003, 60.600000000000001, 55.367775956909412, 74.890000000000001, 61.789999999999999, 106.56999999999999, 54.549999999999997, 88.980000000000004, 55.789999999999999, 61.799999999999997, 26.600000000000001, 55.367775956909412, 57.57, 56.700000000000003, 108.7, 55.367775956909412, 49.659999999999997, 47.390000000000001, 81.709999999999994, 63.109999999999999, 87.459999999999994, 77.040000000000006, 144.43000000000001, 56.020000000000003, 103.65000000000001, 98.090000000000003, 84.75, 300.39999999999998, 55.367775956909412, 43, 105.87, 55.367775956909412, 55.367775956909412, 208.72, 55.367775956909412, 28.879999999999999, 82.439999999999998, 30.760000000000002, 58.270000000000003, 36.530000000000001, 48.090000000000003, 47.920000000000002, 48.630000000000003, 46.359999999999999, 47.009999999999998, 57.109999999999999, 61.884503760343875, 45.140000000000001, 52.060000000000002, 103.55, 72.069999999999993, 93.980000000000004, 75.629999999999995, 66.950000000000003, 87.430000000000007, 106, 89.980000000000004, 61.884503760343875, 194.34999999999999, 90.959999999999994, 61.884503760343875, 76.170000000000002, 99.719999999999999, 61.884503760343875, 81.25, 61.884503760343875, 61.884503760343875, 61.884503760343875, 61.884503760343875, 145.21000000000001, 61.884503760343875, 61.884503760343875, 135.28, 106.95999999999999, 61.884503760343875, 77.560000000000002, 61.884503760343875, 61.884503760343875, 61.884503760343875, 61.884503760343875, 61.884503760343875, 61.884503760343875, 61.884503760343875, 61.884503760343875, 61.884503760343875, 61.884503760343875, 61.884503760343875, 61.884503760343875, 61.884503760343875, 27.609999999999999, 66.599999999999994, 43.390000000000001, 43.389999999999993, 43.389999999999993, 43.389999999999993, 55.799999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2018",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2019",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [88.340000000000003, 64.140000000000001, 64.140000000000001, 64.140000000000001, 59.880000000000003, 311.77999999999997, 81.879999999999995, 151.96000000000001, 66.870000000000005, 86.560000000000002, 107.89, 155.27000000000001, 164.16999999999999, 382.69999999999999, 102.69, 141.77000000000001, 183.5, 149.31, 120.33, 143.75, 91.430000000000007, 110.22, 110.20322419712738, 108.31999999999999, 79.609999999999999, 79.609999999999999, 84.5, 160.75, 124.63, 101.61, 158.80000000000001, 252.25, 64.540000000000006, 64.540000000000006, 64.540000000000006, 64.540000000000006, 64.540000000000006, 39.909999999999997, 70.900000000000006, 70.900000000000006, 124.13, 124.12999999999998, 82.920000000000002, 90.510000000000005, 76.280000000000001, 111.95, 118.59999999999999, 94.519999999999996, 87.629999999999995, 138.58000000000001, 108.84, 109.87507868101328, 109.87507868101328, 307.25999999999999, 109.87507868101328, 63.280000000000001, 49.229999999999997, 64.859999999999999, 72.519999999999996, 81.761266650986357, 85.819999999999993, 56.049999999999997, 130.84999999999999, 45.299999999999997, 98.879999999999995, 124.40000000000001, 96.109999999999999, 35.219999999999999, 35.890000000000001, 37.612674934948878, 353.74000000000001, 114.45, 39.909999999999997, 37.630000000000003, 164.69999999999999, 68.840000000000003, 109.69, 321.69999999999999, 101.72257472733233, 123.03, 49.43, 123.56, 131.08000000000001, 75.090000000000003, 101.72257472733233, 106.68000000000001, 83, 101.72257472733233, 108.51000000000001, 99.379999999999995, 58.93, 101.72257472733233, 83.329999999999998, 101.72257472733233, 119.84, 105.51000000000001, 87.170000000000002, 101.72257472733233, 101.72257472733233, 101.72257472733233, 101.72257472733233, 101.72257472733233, 101.72257472733233, 101.72257472733233, 101.72257472733233, 101.72257472733233, 101.72257472733233, 101.72257472733233, 101.72257472733233, 101.72257472733233, 75.760000000000005, 31.579999999999998, 28.91, 46.280000000000001, 49.25, 82.129999999999995, 50.75, 68.989999999999995, 58.899999999999999, 42, 85.819999999999993, 167.38, 56.270000000000003, 62.979999999999997, 68.989999999999995, 86.480000000000004, 98.180000000000007, 90.049999999999997, 141.69999999999999, 60.200000000000003, 41.119999999999997, 26.120000000000001, 51.810000000000002, 76, 37.030000000000001, 63.659999999999997, 74.569999999999993, 100.94, 78.209999999999994, 91.5, 56.30804374596201, 54.009999999999998, 55.240000000000002, 28.82, 33.020000000000003, 31.760000000000002, 39.359999999999999, 59.159999999999997, 76.819999999999993, 54.458404478013307, 62.600000000000001, 44.530000000000001, 43.380000000000003, 59.869999999999997, 54.458404478013307, 68.790000000000006, 64.239999999999995, 101.06, 55.799999999999997, 78.420000000000002, 57.990000000000002, 63.68, 29.030000000000001, 54.458404478013307, 56.340000000000003, 56.189999999999998, 100.38, 54.458404478013307, 50.07, 47.390000000000001, 82.900000000000006, 53.270000000000003, 83.090000000000003, 73.430000000000007, 137.90000000000001, 55.369999999999997, 94.879999999999995, 96.489999999999995, 89.189999999999998, 320.94, 54.458404478013307, 42.270000000000003, 102.94, 54.458404478013307, 54.458404478013307, 196.97, 54.458404478013307, 28.890000000000001, 79.599999999999994, 32.630000000000003, 57.57, 37.560000000000002, 48.090000000000003, 49.560000000000002, 46.939999999999998, 46.079999999999998, 45.520000000000003, 56.399999999999999, 60.707179615791212, 44.57, 51.009999999999998, 98.030000000000001, 71.219999999999999, 94.040000000000006, 76.040000000000006, 65.760000000000005, 87.430000000000007, 107.56999999999999, 90.109999999999999, 60.707179615791212, 194.34999999999999, 90.959999999999994, 60.707179615791212, 72.400000000000006, 100.94, 60.707179615791212, 60.707179615791212, 81.109999999999999, 60.707179615791212, 60.707179615791212, 60.707179615791212, 145.34, 60.707179615791212, 60.707179615791212, 141.72999999999999, 106.95999999999999, 60.707179615791212, 77.560000000000002, 60.707179615791212, 60.707179615791212, 60.707179615791212, 60.707179615791212, 60.707179615791212, 60.707179615791212, 60.707179615791212, 60.707179615791212, 60.707179615791212, 60.707179615791212, 60.707179615791212, 60.707179615791212, 60.707179615791212, 26.449999999999999, 66.170000000000002, 45.829999999999998, 45.829999999999998, 45.829999999999998, 45.829999999999998, 54.380000000000003],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2019",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2020",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [81.109999999999999, 56.960000000000001, 56.960000000000001, 56.960000000000001, 55.270000000000003, 337.69, 71.670000000000002, 164.16, 60.170000000000002, 76.239999999999995, 99.670000000000002, 146.46000000000001, 155.56999999999999, 370.80000000000001, 100.31999999999999, 133.15000000000001, 168.49000000000001, 137.03, 119.45999999999999, 138.47, 83.209999999999994, 103.62, 103.56004879184566, 96.909999999999997, 71.5, 71.5, 78.060000000000002, 155.47999999999999, 110.27, 90.060000000000002, 146.66, 248.66, 58.630000000000003, 58.630000000000003, 58.630000000000003, 58.630000000000003, 58.630000000000003, 37.799999999999997, 65.349999999999994, 65.349999999999994, 122.13, 122.12999999999998, 68.060000000000002, 79.159999999999997, 59.829999999999998, 104.72, 93.879999999999995, 82.109999999999999, 79.269999999999996, 128.24000000000001, 87.010000000000005, 97.892930271738763, 97.892930271738763, 304.89999999999998, 97.892930271738763, 61.350000000000001, 45.969999999999999, 57.030000000000001, 61.840000000000003, 72.006014878603168, 72.019999999999996, 55.75, 118.93000000000001, 36.100000000000001, 98.879999999999995, 112.84, 69.489999999999995, 31.370000000000001, 34.75, 36.456905630965409, 350.68000000000001, 120.95, 37.799999999999997, 32.969999999999999, 163.25, 58.170000000000002, 97.799999999999997, 332.76999999999998, 96.039200668795104, 116.83, 37.030000000000001, 123.98999999999999, 131.08000000000001, 75.090000000000003, 96.039200668795104, 71.620000000000005, 60.219999999999999, 96.039200668795104, 110.29000000000001, 62.969999999999999, 58.93, 96.039200668795104, 77.480000000000004, 96.039200668795104, 95.349999999999994, 91.420000000000002, 85.530000000000001, 96.039200668795104, 96.039200668795104, 96.039200668795104, 96.039200668795104, 96.039200668795104, 96.039200668795104, 96.039200668795104, 96.039200668795104, 96.039200668795104, 96.039200668795104, 96.039200668795104, 96.039200668795104, 96.039200668795104, 69.030000000000001, 26.27, 26.719999999999999, 46.280000000000001, 40.920000000000002, 75.920000000000002, 43.810000000000002, 57.740000000000002, 58.899999999999999, 48.390000000000001, 85.819999999999993, 166.56999999999999, 50.960000000000001, 50.130000000000003, 67.290000000000006, 91.879999999999995, 98.180000000000007, 90.019999999999996, 140.22, 49.710000000000001, 32.130000000000003, 9.9600000000000009, 45.329999999999998, 68.849999999999994, 35.509999999999998, 66.989999999999995, 68.730000000000004, 82.819999999999993, 78.209999999999994, 85.280000000000001, 48.654109220712328, 50.789999999999999, 58.490000000000002, 24.010000000000002, 27.960000000000001, 27.239999999999998, 37, 63.659999999999997, 66.579999999999998, 50.802198463455646, 49.009999999999998, 41.109999999999999, 33.740000000000002, 60, 50.802198463455646, 79.329999999999998, 60.049999999999997, 101.64, 47.310000000000002, 115.04000000000001, 44.93, 55.200000000000003, 26.77, 50.802198463455646, 55.789999999999999, 51.560000000000002, 75.819999999999993, 50.802198463455646, 49.520000000000003, 47.390000000000001, 76.930000000000007, 47.5, 77.659999999999997, 70.060000000000002, 136.5, 43.640000000000001, 76.340000000000003, 85.879999999999995, 86.879999999999995, 223.12, 50.802198463455646, 33.729999999999997, 76.030000000000001, 50.802198463455646, 50.802198463455646, 179.28999999999999, 50.802198463455646, 32.299999999999997, 79.010000000000005, 30.219999999999999, 58.170000000000002, 34.130000000000003, 48.090000000000003, 46.020000000000003, 43.829999999999998, 41.380000000000003, 41.140000000000001, 45.5, 34.460000000000001, 54.555571165737476, 44.289999999999999, 85.620000000000005, 62.759999999999998, 88.930000000000007, 66.060000000000002, 60.140000000000001, 87.430000000000007, 103.51000000000001, 90.109999999999999, 54.555571165737476, 194.34999999999999, 90.959999999999994, 59.039999999999999, 54.555571165737476, 80.359999999999999, 54.555571165737476, 54.555571165737476, 66.239999999999995, 54.555571165737476, 54.555571165737476, 54.555571165737476, 121.73, 54.555571165737476, 54.555571165737476, 93.980000000000004, 54.555571165737476, 106.95999999999999, 69.200000000000003, 54.555571165737476, 54.555571165737476, 54.555571165737476, 54.555571165737476, 54.555571165737476, 54.555571165737476, 54.555571165737476, 54.555571165737476, 54.555571165737476, 54.555571165737476, 54.555571165737476, 54.555571165737476, 54.555571165737476, 23.379999999999999, 61.600000000000001, 44.259999999999998, 44.260000000000005, 44.260000000000005, 44.260000000000005, 43.979999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2020",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    },
    {
      "name": "2021",
      "data": [
        {
          "colorbar": {
            "title": "Trade openness  exports plus imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [89.549999999999997, 61.979999999999997, 61.980000000000004, 61.980000000000004, 63.109999999999999, 321.42000000000002, 89.569999999999993, 181.47999999999999, 68.25, 86.150000000000006, 110.73999999999999, 159.72999999999999, 175.96000000000001, 393.5, 112.40000000000001, 142.49000000000001, 184.06, 156.53999999999999, 131.38999999999999, 156.96000000000001, 88.640000000000001, 112.76000000000001, 112.68909433222879, 104.90000000000001, 78.939999999999998, 78.939999999999998, 86.980000000000004, 159.53999999999999, 120.95, 102.55, 161.5, 231.56, 59.710000000000001, 59.710000000000001, 59.710000000000001, 59.710000000000001, 59.710000000000001, 45.670000000000002, 70.549999999999997, 70.549999999999997, 132.33000000000001, 132.33000000000001, 76.829999999999998, 82.700000000000003, 76.019999999999996, 117.81, 102.81999999999999, 96.069999999999993, 88.469999999999999, 148.56, 105.03, 110.74211999394589, 110.74211999394589, 342.47000000000003, 110.74211999394589, 71.150000000000006, 50.560000000000002, 58.670000000000002, 63.850000000000001, 77.600611898485369, 76.290000000000006, 71.829999999999998, 136.00999999999999, 36.100000000000001, 98.879999999999995, 119.09999999999999, 79.769999999999996, 36.939999999999998, 37.299999999999997, 39.270877513524525, 402.50999999999999, 172.40000000000001, 45.670000000000002, 40.200000000000003, 186.43000000000001, 63.479999999999997, 117.23999999999999, 333.33999999999997, 104.60192178297811, 134.31999999999999, 41.280000000000001, 129.11000000000001, 131.08000000000001, 75.090000000000003, 104.60192178297811, 81.890000000000001, 60.219999999999999, 104.60192178297811, 147.12, 60.469999999999999, 58.93, 104.60192178297811, 60.890000000000001, 104.60192178297811, 93.400000000000006, 96.030000000000001, 73.370000000000005, 104.60192178297811, 104.60192178297811, 104.60192178297811, 104.60192178297811, 104.60192178297811, 104.60192178297811, 104.60192178297811, 104.60192178297811, 104.60192178297811, 104.60192178297811, 104.60192178297811, 104.60192178297811, 104.60192178297811, 80.530000000000001, 27.719999999999999, 27.050000000000001, 50.299999999999997, 43.049999999999997, 84.560000000000002, 44.369999999999997, 62.100000000000001, 58.899999999999999, 48.390000000000001, 85.819999999999993, 166.56999999999999, 55.189999999999998, 78.829999999999998, 73.079999999999998, 93.920000000000002, 98.180000000000007, 92.810000000000002, 159.81, 57.509999999999998, 29.859999999999999, 4.1299999999999999, 53.200000000000003, 75.079999999999998, 37.020000000000003, 67.209999999999994, 82.980000000000004, 92.939999999999998, 78.209999999999994, 81.469999999999999, 51.776977332895605, 56.229999999999997, 80.450000000000003, 24.300000000000001, 29.920000000000002, 30.690000000000001, 41.710000000000001, 75.390000000000001, 63, 54.369501577231127, 54.460000000000001, 45.119999999999997, 36.469999999999999, 62.289999999999999, 54.369501577231127, 86.010000000000005, 105.87, 69.120000000000005, 50.850000000000001, 105.8, 48.049999999999997, 54.710000000000001, 28.82, 54.369501577231127, 54.799999999999997, 58.390000000000001, 94.890000000000001, 54.369501577231127, 44.159999999999997, 47.390000000000001, 82, 42.090000000000003, 88.819999999999993, 72.129999999999995, 140.50999999999999, 43.640000000000001, 83.150000000000006, 98.069999999999993, 90.870000000000005, 265.07999999999998, 54.369501577231127, 42.280000000000001, 74.950000000000003, 54.369501577231127, 54.369501577231127, 235.81999999999999, 54.369501577231127, 38.18, 85.909999999999997, 32.979999999999997, 64.689999999999998, 40.25, 48.090000000000003, 54.420000000000002, 55.969999999999999, 51.390000000000001, 49.490000000000002, 59.020000000000003, 37.170000000000002, 52.729999999999997, 64.348690301672747, 101.56999999999999, 69.739999999999995, 106.68000000000001, 80.769999999999996, 71.159999999999997, 87.430000000000007, 96.799999999999997, 90.109999999999999, 64.348690301672747, 194.34999999999999, 90.959999999999994, 67.760000000000005, 64.348690301672747, 96.480000000000004, 64.348690301672747, 64.348690301672747, 71.329999999999998, 64.348690301672747, 64.348690301672747, 64.348690301672747, 138.88, 64.348690301672747, 64.348690301672747, 103.77, 64.348690301672747, 106.95999999999999, 74.090000000000003, 64.348690301672747, 64.348690301672747, 64.348690301672747, 64.348690301672747, 64.348690301672747, 64.348690301672747, 64.348690301672747, 64.348690301672747, 64.348690301672747, 64.348690301672747, 64.348690301672747, 64.348690301672747, 64.348690301672747, 25.48, 61.869999999999997, 39.859999999999999, 39.859999999999999, 39.859999999999999, 39.859999999999999, 48.200000000000003],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 450,
          "frame": "2021",
          "type": "choropleth",
          "marker": {
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "visible": true
        }
      ],
      "traces": [0]
    }
  ],
  "shinyEvents": ["plotly_hover", "plotly_click", "plotly_selected", "plotly_relayout", "plotly_brushed", "plotly_brushing", "plotly_clickannotation", "plotly_doubleclick", "plotly_deselect", "plotly_afterplot", "plotly_sunburstclick"],
  "base_url": "https://plot.ly"
}
           

                  ); 

           }()); 

  
