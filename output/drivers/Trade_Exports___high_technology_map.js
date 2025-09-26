(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Trade_Exports___high_technology_map') 

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
    "b55c3786f3c": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c3786f3c",
  "attrs": {
    "b55c3786f3c": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 942320,
      "colorbar": {
        "title": "High technology exports"
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
        "title": "High technology exports",
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
      "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
      "z": [169493.51000000001, 85771.309999999998, 8.5454603005902587, 0.19152192547275812, 27766.080000000002, 1491.1400000000001, 1121.3199999999999, 96.700000000000003, 10502.549999999999, 3502.5100000000002, 16729.299999999999, 83718.320000000007, 28337.950000000001, 1411.4100000000001, 4229.3000000000002, 16618.380000000001, 2684.2199999999998, 1262.47, 356.06, 838.05999999999995, 21936.130000000001, 12072.52, 249.786195667459, 0.14000000000000001, 15796.200000000001, 79.648026312609176, 1425.95, 19947.349999999999, 648.36000000000001, 803.5, 1322.0999999999999, 67020.360000000001, 68857.350000000006, 174.26869755329713, 90.100010435461613, 68.781070503920063, 32.639594293997895, 0.030126387392621325, 4442.8999999999996, 2.3397745601996118, 36172.959999999999, 167.97085922729809, 775, 1932.26, 10.130000000000001, 264.45999999999998, 139.41, 14.81, 10.34, 23.25, 6.2800000000000002, 33.420000000000002, 1.3593591683893187, 1.1691059901607401, 0.033322648916839538, 1881.5899999999999, 4321.0600000000004, 1812.3599999999999, 39.350000000000001, 253.45509974431542, 417.13999999999999, 16.91, 42.450000000000003, 11.470000000000001, 51.172766420367154, 5.2000000000000002, 7.1100000000000003, 128315.03999999999, 342573.96999999997, 17824.040542871327, 2650.4299999999998, 1.0000000000000001e-05, 11215.08, 7056.0900000000001, 3013.1900000000001, 33502.470000000001, 32476.130000000001, 109335.74000000001, 0.059999999999999998, 55648.610000000001, 103.06999999999999, 1.6000000000000001, 65.909999999999997, 19.43, 1341.1659449002818, 5.2599999999999998, 0.19, 45.460000000000001, 1.0000000000000001e-05, 368.08274915187428, 5.5899999999999999, 293.64179179231257, 0.17999999999999999, 238.62911832675368, 164.24520832992846, 1.0000000000000001e-05, 0.040000000000000001, 95.694756861132376, 83.334494934892049, 75.535096521789868, 1.1100000000000001, 22.053925332772241, 21.987370076246332, 14.713831327343369, 14.181389275136095, 3.1288284331630845, 2.8201875732297461, 2.3177319552813969, 0.4323897544848096, 0.073137644533966456, 106527.47, 62.060000000000002, 279.14999999999998, 2.5299999999999998, 1.0000000000000001e-05, 1.9399999999999999, 659.19000000000005, 1487.1247179386828, 0.38, 86.640000000000001, 3121.6599999999999, 38.759999999999998, 51.310000000000002, 211.03, 3.4199999999999999, 167.09999999999999, 127.95, 0.31, 0.94999999999999996, 130.91, 102.65000000000001, 6.8200000000000003, 0.01, 564.38999999999999, 4.8600000000000003, 3.3700000000000001, 768.24000000000001, 102.17387475476134, 1.1200000000000001, 1.0000000000000001e-05, 3.351067011014198, 1932.9200000000001, 47.270000000000003, 63.189999999999998, 8.3499999999999996, 16.34, 80.109999999999999, 5.46, 9.1500000000000004, 104.75, 186.08000000000001, 9.3000000000000007, 102, 13.49, 18.489999999999998, 58.979999999999997, 2.1200000000000001, 4.04, 48.939999999999998, 42.983637222917729, 0.98999999999999999, 14.880000000000001, 0.56999999999999995, 0.050000000000000003, 29.94417251353757, 0.10000000000000001, 1.0000000000000001e-05, 0.63, 49.5, 13.531810202753169, 10.817975920771683, 0.45000000000000001, 85.739999999999995, 26.07, 0.02, 77.930000000000007, 1.0000000000000001e-05, 102.8, 2.3199999999999998, 3.6778297713011781, 3.535247293748617, 1.3300000000000001, 0.19, 1.0000000000000001e-05, 0.77561484328523655, 1.0000000000000001e-05, 3.5800000000000001, 0.024926991398107501, 9536.3299999999999, 43655.040000000001, 1202.0899999999999, 650.98000000000002, 360.29000000000002, 49.310000000000002, 121.65000000000001, 80.060000000000002, 125.89, 585.11175610508405, 15.43, 759.72000000000003, 457.25331123452554, 9.8100000000000005, 188.41, 26.190000000000001, 5.5599999999999996, 2537.25, 199.71600260914286, 1.1100000000000001, 6.4500000000000002, 60.960000000000001, 0.40999999999999998, 5.5199999999999996, 21.878381383001084, 21.581137645755206, 1.0000000000000001e-05, 29.760000000000002, 1.0000000000000001e-05, 9.7196796838132258, 1.51, 6.8848111706944319, 0.040000000000000001, 0.080000000000000002, 5.6637864096696617, 1.0800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.82999999999999996, 2.4103129003539592, 2.2932841078514996, 1.6909668747177431, 1.6352189931866874, 1.1553591852138456, 1.1341144400985461, 0.80338543506037297, 0.61301790327782602, 0.39957868269684593, 0.24152195491029471, 0.16541670091003327, 0.052198390946681369, 0.0015659517284004412, 5.219839094668137e-05, 240506.01000000001, 30526.43, 3856.9299999999998, 0.36913273991737733, 0.12016273996250749, 0.00019557737624106034, 662.37],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [169493.51000000001, 85771.309999999998, 8.5454603005902587, 0.19152192547275812, 27766.080000000002, 1491.1400000000001, 1121.3199999999999, 96.700000000000003, 10502.549999999999, 3502.5100000000002, 16729.299999999999, 83718.320000000007, 28337.950000000001, 1411.4100000000001, 4229.3000000000002, 16618.380000000001, 2684.2199999999998, 1262.47, 356.06, 838.05999999999995, 21936.130000000001, 12072.52, 249.786195667459, 0.14000000000000001, 15796.200000000001, 79.648026312609176, 1425.95, 19947.349999999999, 648.36000000000001, 803.5, 1322.0999999999999, 67020.360000000001, 68857.350000000006, 174.26869755329713, 90.100010435461613, 68.781070503920063, 32.639594293997895, 0.030126387392621325, 4442.8999999999996, 2.3397745601996118, 36172.959999999999, 167.97085922729809, 775, 1932.26, 10.130000000000001, 264.45999999999998, 139.41, 14.81, 10.34, 23.25, 6.2800000000000002, 33.420000000000002, 1.3593591683893187, 1.1691059901607401, 0.033322648916839538, 1881.5899999999999, 4321.0600000000004, 1812.3599999999999, 39.350000000000001, 253.45509974431542, 417.13999999999999, 16.91, 42.450000000000003, 11.470000000000001, 51.172766420367154, 5.2000000000000002, 7.1100000000000003, 128315.03999999999, 342573.96999999997, 17824.040542871327, 2650.4299999999998, 1.0000000000000001e-05, 11215.08, 7056.0900000000001, 3013.1900000000001, 33502.470000000001, 32476.130000000001, 109335.74000000001, 0.059999999999999998, 55648.610000000001, 103.06999999999999, 1.6000000000000001, 65.909999999999997, 19.43, 1341.1659449002818, 5.2599999999999998, 0.19, 45.460000000000001, 1.0000000000000001e-05, 368.08274915187428, 5.5899999999999999, 293.64179179231257, 0.17999999999999999, 238.62911832675368, 164.24520832992846, 1.0000000000000001e-05, 0.040000000000000001, 95.694756861132376, 83.334494934892049, 75.535096521789868, 1.1100000000000001, 22.053925332772241, 21.987370076246332, 14.713831327343369, 14.181389275136095, 3.1288284331630845, 2.8201875732297461, 2.3177319552813969, 0.4323897544848096, 0.073137644533966456, 106527.47, 62.060000000000002, 279.14999999999998, 2.5299999999999998, 1.0000000000000001e-05, 1.9399999999999999, 659.19000000000005, 1487.1247179386828, 0.38, 86.640000000000001, 3121.6599999999999, 38.759999999999998, 51.310000000000002, 211.03, 3.4199999999999999, 167.09999999999999, 127.95, 0.31, 0.94999999999999996, 130.91, 102.65000000000001, 6.8200000000000003, 0.01, 564.38999999999999, 4.8600000000000003, 3.3700000000000001, 768.24000000000001, 102.17387475476134, 1.1200000000000001, 1.0000000000000001e-05, 3.351067011014198, 1932.9200000000001, 47.270000000000003, 63.189999999999998, 8.3499999999999996, 16.34, 80.109999999999999, 5.46, 9.1500000000000004, 104.75, 186.08000000000001, 9.3000000000000007, 102, 13.49, 18.489999999999998, 58.979999999999997, 2.1200000000000001, 4.04, 48.939999999999998, 42.983637222917729, 0.98999999999999999, 14.880000000000001, 0.56999999999999995, 0.050000000000000003, 29.94417251353757, 0.10000000000000001, 1.0000000000000001e-05, 0.63, 49.5, 13.531810202753169, 10.817975920771683, 0.45000000000000001, 85.739999999999995, 26.07, 0.02, 77.930000000000007, 1.0000000000000001e-05, 102.8, 2.3199999999999998, 3.6778297713011781, 3.535247293748617, 1.3300000000000001, 0.19, 1.0000000000000001e-05, 0.77561484328523655, 1.0000000000000001e-05, 3.5800000000000001, 0.024926991398107501, 9536.3299999999999, 43655.040000000001, 1202.0899999999999, 650.98000000000002, 360.29000000000002, 49.310000000000002, 121.65000000000001, 80.060000000000002, 125.89, 585.11175610508405, 15.43, 759.72000000000003, 457.25331123452554, 9.8100000000000005, 188.41, 26.190000000000001, 5.5599999999999996, 2537.25, 199.71600260914286, 1.1100000000000001, 6.4500000000000002, 60.960000000000001, 0.40999999999999998, 5.5199999999999996, 21.878381383001084, 21.581137645755206, 1.0000000000000001e-05, 29.760000000000002, 1.0000000000000001e-05, 9.7196796838132258, 1.51, 6.8848111706944319, 0.040000000000000001, 0.080000000000000002, 5.6637864096696617, 1.0800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.82999999999999996, 2.4103129003539592, 2.2932841078514996, 1.6909668747177431, 1.6352189931866874, 1.1553591852138456, 1.1341144400985461, 0.80338543506037297, 0.61301790327782602, 0.39957868269684593, 0.24152195491029471, 0.16541670091003327, 0.052198390946681369, 0.0015659517284004412, 5.219839094668137e-05, 240506.01000000001, 30526.43, 3856.9299999999998, 0.36913273991737733, 0.12016273996250749, 0.00019557737624106034, 662.37],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [169493.51000000001, 85771.309999999998, 8.4263192399458902, 0.19285951023981343, 27766.080000000002, 1491.1400000000001, 1121.3199999999999, 96.700000000000003, 10502.549999999999, 3502.5100000000002, 16729.299999999999, 83718.320000000007, 28337.950000000001, 1411.4100000000001, 4229.3000000000002, 16618.380000000001, 2684.2199999999998, 1262.47, 356.06, 838.05999999999995, 21936.130000000001, 12072.52, 249.76143381218819, 0.14000000000000001, 15796.200000000001, 79.965178444779554, 1425.95, 19947.349999999999, 648.36000000000001, 803.5, 1322.0999999999999, 67020.360000000001, 68857.350000000006, 174.51855731001109, 90.441703560075993, 68.545242788525471, 32.960624400035314, 0.029617510003351583, 4442.8999999999996, 2.339534572759483, 36172.959999999999, 168.62154075748094, 775, 1932.26, 10.130000000000001, 264.45999999999998, 139.41, 14.81, 10.34, 23.25, 6.2800000000000002, 33.420000000000002, 1.3624808848902574, 1.2422880312691462, 0.033561218565501802, 1881.5899999999999, 4321.0600000000004, 1812.3599999999999, 39.350000000000001, 250.49457356957291, 417.13999999999999, 16.91, 42.450000000000003, 11.470000000000001, 51.205042689784278, 5.2000000000000002, 7.1100000000000003, 128315.03999999999, 342573.96999999997, 17803.725513804569, 2650.4299999999998, 1.0000000000000001e-05, 11215.08, 7056.0900000000001, 3013.1900000000001, 33502.470000000001, 32476.130000000001, 109335.74000000001, 0.059999999999999998, 55648.610000000001, 103.06999999999999, 1.6000000000000001, 65.909999999999997, 19.43, 1353.3217839165784, 5.2599999999999998, 0.19, 45.460000000000001, 1.0000000000000001e-05, 372.39458573311589, 5.5899999999999999, 299.64585973912011, 0.17999999999999999, 238.61139308965133, 163.0338817627692, 1.0000000000000001e-05, 0.040000000000000001, 93.134333992833916, 82.763092195640127, 75.440587628997804, 1.1100000000000001, 22.014126022610956, 21.635400900803315, 14.653748943787878, 14.298329983322247, 2.8914206414929358, 2.7537686260666985, 2.1973340240262442, 0.43232929289425864, 0.072831754193776743, 106527.47, 62.060000000000002, 279.14999999999998, 2.5299999999999998, 1.0000000000000001e-05, 1.9399999999999999, 659.19000000000005, 1478.0290936328515, 0.38, 86.640000000000001, 3121.6599999999999, 38.759999999999998, 51.310000000000002, 211.03, 3.4199999999999999, 167.09999999999999, 127.95, 0.31, 0.94999999999999996, 130.91, 102.65000000000001, 6.8200000000000003, 0.01, 564.38999999999999, 4.8600000000000003, 3.3700000000000001, 768.24000000000001, 103.98260991257139, 1.1200000000000001, 1.0000000000000001e-05, 3.4079180923194583, 1932.9200000000001, 47.270000000000003, 63.189999999999998, 8.3499999999999996, 16.34, 80.109999999999999, 5.46, 9.1500000000000004, 104.75, 186.08000000000001, 9.3000000000000007, 102, 13.49, 18.489999999999998, 2.1200000000000001, 58.979999999999997, 4.04, 48.939999999999998, 43.377927617015018, 0.98999999999999999, 14.880000000000001, 0.56999999999999995, 0.050000000000000003, 30.517886390883639, 0.10000000000000001, 1.0000000000000001e-05, 0.63, 49.5, 13.319663389753968, 10.962765996107406, 0.45000000000000001, 85.739999999999995, 26.07, 0.02, 77.930000000000007, 1.0000000000000001e-05, 102.8, 2.3199999999999998, 3.796959642178833, 1.3300000000000001, 3.4788400104559312, 0.19, 1.0000000000000001e-05, 0.77528409203333271, 1.0000000000000001e-05, 3.5800000000000001, 0.023788036521817303, 9536.3299999999999, 43655.040000000001, 1202.0899999999999, 650.98000000000002, 360.29000000000002, 49.310000000000002, 121.65000000000001, 80.060000000000002, 125.89, 578.28054888127201, 15.43, 759.72000000000003, 458.46993904988148, 9.8100000000000005, 188.41, 26.190000000000001, 5.5599999999999996, 2537.25, 196.90872462589846, 1.1100000000000001, 6.4500000000000002, 60.960000000000001, 0.40999999999999998, 5.5199999999999996, 21.103144593175656, 21.025474565591082, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.760000000000002, 9.9663328837048031, 1.51, 6.9047342442060007, 0.040000000000000001, 0.080000000000000002, 5.5810249830992014, 1.0800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.82999999999999996, 2.3830985939579179, 2.3335482550616322, 1.7067853494586656, 1.6305817649255407, 1.1773222266728083, 1.1760358731189069, 0.82586470867584061, 0.61405373249041972, 0.40378638056968069, 0.23957048587861524, 0.16395862398028513, 0.051454142156059979, 0.0015436242646817994, 5.1454142156059973e-05, 240506.01000000001, 30526.43, 3856.9299999999998, 0.36400732002382818, 0.11845911190654243, 0.00019349740592378704, 662.37],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [169493.51000000001, 85771.309999999998, 8.3014319599098805, 0.19412997060786802, 27766.080000000002, 1491.1400000000001, 1121.3199999999999, 96.700000000000003, 10502.549999999999, 3502.5100000000002, 16729.299999999999, 83718.320000000007, 28337.950000000001, 1411.4100000000001, 4229.3000000000002, 16618.380000000001, 2684.2199999999998, 1262.47, 356.06, 838.05999999999995, 21936.130000000001, 12072.52, 249.19381498996432, 0.14000000000000001, 15796.200000000001, 80.238169030837412, 1425.95, 19947.349999999999, 648.36000000000001, 803.5, 1322.0999999999999, 67020.360000000001, 68857.350000000006, 174.5635770269223, 90.648207299039697, 68.243225381542871, 33.245808006714306, 0.02913824364365895, 4442.8999999999996, 2.337108522911493, 36172.959999999999, 169.03313702692509, 775, 1932.26, 10.130000000000001, 264.45999999999998, 139.41, 14.81, 10.34, 23.25, 6.2800000000000002, 33.420000000000002, 1.3655154961528291, 1.2648717896062034, 0.033830529833280276, 1881.5899999999999, 4321.0600000000004, 1812.3599999999999, 39.350000000000001, 247.23021605072546, 417.13999999999999, 16.91, 42.450000000000003, 11.470000000000001, 51.198902300749872, 5.2000000000000002, 7.1100000000000003, 128315.03999999999, 342573.96999999997, 17771.830320564579, 2650.4299999999998, 1.0000000000000001e-05, 11215.08, 7056.0900000000001, 3013.1900000000001, 33502.470000000001, 32476.130000000001, 109335.74000000001, 0.059999999999999998, 55648.610000000001, 103.06999999999999, 1.6000000000000001, 65.909999999999997, 19.43, 1376.1288149243314, 5.2599999999999998, 0.19, 45.460000000000001, 1.0000000000000001e-05, 376.58010966293591, 5.5899999999999999, 305.84155307009206, 0.17999999999999999, 238.51606979676259, 161.6740325993789, 1.0000000000000001e-05, 0.040000000000000001, 90.484172519133239, 82.15900175635511, 75.322697161018212, 1.1100000000000001, 21.979640745758918, 21.117665596187678, 14.582471848554544, 14.424297957471602, 2.6933095582562672, 2.657031142870272, 2.0736742234634731, 0.43243871140106016, 0.072556830771989961, 106527.47, 62.060000000000002, 279.14999999999998, 2.5299999999999998, 1.0000000000000001e-05, 1.9399999999999999, 659.19000000000005, 1466.2686508738739, 0.38, 86.640000000000001, 3121.6599999999999, 38.759999999999998, 51.310000000000002, 211.03, 3.4199999999999999, 167.09999999999999, 127.95, 0.31, 0.94999999999999996, 130.91, 102.65000000000001, 6.8200000000000003, 0.01, 564.38999999999999, 4.8600000000000003, 3.3700000000000001, 105.26902042632929, 768.24000000000001, 1.1200000000000001, 1.0000000000000001e-05, 3.4571565199879264, 1932.9200000000001, 47.270000000000003, 63.189999999999998, 8.3499999999999996, 16.34, 80.109999999999999, 5.46, 9.1500000000000004, 104.75, 186.08000000000001, 102, 9.3000000000000007, 13.49, 18.489999999999998, 2.1200000000000001, 58.979999999999997, 4.04, 48.939999999999998, 43.683137831832923, 0.98999999999999999, 14.880000000000001, 0.56999999999999995, 31.149395036664174, 0.050000000000000003, 0.10000000000000001, 1.0000000000000001e-05, 0.63, 49.5, 13.547125562318655, 10.921432878470966, 85.739999999999995, 0.45000000000000001, 26.07, 0.02, 77.930000000000007, 1.0000000000000001e-05, 102.8, 2.3199999999999998, 3.8879252904325292, 1.3300000000000001, 3.4212636137007308, 0.19, 1.0000000000000001e-05, 0.76801716198909653, 1.0000000000000001e-05, 3.5800000000000001, 0.022704977763968948, 9536.3299999999999, 43655.040000000001, 1202.0899999999999, 650.98000000000002, 360.29000000000002, 49.310000000000002, 121.65000000000001, 80.060000000000002, 125.89, 571.98227208688536, 15.43, 759.72000000000003, 460.18758432053227, 9.8100000000000005, 188.41, 26.190000000000001, 5.5599999999999996, 2537.25, 194.07243856291251, 1.1100000000000001, 6.4500000000000002, 60.960000000000001, 0.40999999999999998, 5.5199999999999996, 20.47869546388387, 20.333269192354265, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.760000000000002, 10.221178970412437, 1.51, 6.9911261345283195, 0.040000000000000001, 0.080000000000000002, 5.507915287654912, 1.0800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.82999999999999996, 2.376184526742442, 2.3583585720342559, 1.723074049399794, 1.6280530771518864, 1.2182592636466121, 1.2018553224194211, 0.84937373081781575, 0.61593498205378161, 0.40852415861152863, 0.23833961665389156, 0.16274436428028885, 0.050786195749817083, 0.0015235858724945124, 5.0786195749817083e-05, 240506.01000000001, 30526.43, 3856.9299999999998, 0.35841798400185876, 0.11660531746193806, 0.00019115625813432468, 662.37],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [169493.51000000001, 85771.309999999998, 8.1932717366015844, 0.19467024907696734, 27766.080000000002, 1491.1400000000001, 1121.3199999999999, 96.700000000000003, 10502.549999999999, 3502.5100000000002, 16729.299999999999, 83718.320000000007, 28337.950000000001, 1411.4100000000001, 4229.3000000000002, 16618.380000000001, 2684.2199999999998, 1262.47, 356.06, 838.05999999999995, 21936.130000000001, 12072.52, 247.69038333716321, 0.14000000000000001, 15796.200000000001, 80.664502474997477, 1425.95, 19947.349999999999, 648.36000000000001, 803.5, 1322.0999999999999, 67020.360000000001, 68857.350000000006, 174.51639005785347, 90.864765995987966, 67.923375996066866, 33.490072544464937, 0.028686030831367424, 4442.8999999999996, 2.3450528753655315, 36172.959999999999, 169.34836671729065, 775, 1932.26, 10.130000000000001, 264.45999999999998, 139.41, 14.81, 10.34, 23.25, 6.2800000000000002, 33.420000000000002, 1.3655004790122329, 1.2857181413889396, 0.03400013982429935, 1881.5899999999999, 4321.0600000000004, 1812.3599999999999, 39.350000000000001, 243.84976305372624, 417.13999999999999, 16.91, 42.450000000000003, 11.470000000000001, 51.178208583872838, 5.2000000000000002, 7.1100000000000003, 128315.03999999999, 342573.96999999997, 17733.095300329423, 2650.4299999999998, 1.0000000000000001e-05, 11215.08, 7056.0900000000001, 3013.1900000000001, 33502.470000000001, 32476.130000000001, 109335.74000000001, 0.059999999999999998, 55648.610000000001, 103.06999999999999, 1.6000000000000001, 65.909999999999997, 19.43, 1411.664138732353, 5.2599999999999998, 0.19, 45.460000000000001, 1.0000000000000001e-05, 380.48700701471142, 5.5899999999999999, 312.1151875620198, 0.17999999999999999, 238.27362255311283, 160.0579956908476, 1.0000000000000001e-05, 0.040000000000000001, 87.715406935057786, 81.488223040719632, 75.154072663516772, 1.1100000000000001, 21.970048284597468, 20.612730346625426, 14.535877725502477, 14.50407687924541, 2.6488659439124196, 2.6377356477224456, 1.9730979609497694, 0.43133511468674807, 0.072274650584240638, 106527.47, 62.060000000000002, 279.14999999999998, 2.5299999999999998, 1.0000000000000001e-05, 1.9399999999999999, 659.19000000000005, 1394.1818320422326, 0.38, 86.640000000000001, 3121.6599999999999, 38.759999999999998, 211.03, 51.310000000000002, 3.4199999999999999, 167.09999999999999, 127.95, 0.94999999999999996, 0.31, 130.91, 102.65000000000001, 6.8200000000000003, 0.01, 564.38999999999999, 4.8600000000000003, 3.3700000000000001, 106.04499134962161, 768.24000000000001, 1.1200000000000001, 1.0000000000000001e-05, 3.502911854670101, 1932.9200000000001, 47.270000000000003, 63.189999999999998, 8.3499999999999996, 16.34, 80.109999999999999, 5.46, 9.1500000000000004, 104.75, 186.08000000000001, 102, 9.3000000000000007, 13.49, 18.489999999999998, 2.1200000000000001, 58.979999999999997, 4.04, 48.939999999999998, 43.803623467224966, 0.98999999999999999, 14.880000000000001, 0.56999999999999995, 31.834602324388452, 0.050000000000000003, 0.10000000000000001, 1.0000000000000001e-05, 0.63, 49.5, 13.931856543079656, 10.789773775348921, 85.739999999999995, 0.45000000000000001, 26.07, 0.02, 77.930000000000007, 1.0000000000000001e-05, 102.8, 2.3199999999999998, 3.9524945533609284, 1.3300000000000001, 3.3738841334257303, 0.19, 1.0000000000000001e-05, 0.76193067596722697, 1.0000000000000001e-05, 3.5800000000000001, 0.021657356788317865, 9536.3299999999999, 43655.040000000001, 1202.0899999999999, 650.98000000000002, 360.29000000000002, 49.310000000000002, 121.65000000000001, 80.060000000000002, 125.89, 565.03751021909466, 15.43, 759.72000000000003, 461.73517387074753, 9.8100000000000005, 188.41, 26.190000000000001, 5.5599999999999996, 2537.25, 190.63520083794833, 1.1100000000000001, 6.4500000000000002, 60.960000000000001, 0.40999999999999998, 5.5199999999999996, 20.085758259891634, 19.816479264149478, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.760000000000002, 10.413933061474044, 1.51, 7.0758504334187204, 0.040000000000000001, 0.080000000000000002, 5.4291154399220707, 1.0800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.82999999999999996, 2.4163468879321699, 2.3330332191099936, 1.7363109645453878, 1.6245914928235279, 1.2586225507032656, 1.2270605474813949, 0.8719629620264433, 0.6174629995389781, 0.4126606675215061, 0.23704066387981132, 0.16109146247607173, 0.050098417812493155, 0.0015029525343747947, 5.0098417812493154e-05, 240506.01000000001, 30526.43, 3856.9299999999998, 0.35240679574744771, 0.11466516740578414, 0.00018859402533846073, 662.37],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [169493.51000000001, 85771.309999999998, 8.1253573782637663, 0.19534621250735545, 27766.080000000002, 1491.1400000000001, 1121.3199999999999, 96.700000000000003, 10502.549999999999, 3502.5100000000002, 16729.299999999999, 83718.320000000007, 28337.950000000001, 1411.4100000000001, 4229.3000000000002, 16618.380000000001, 2684.2199999999998, 1262.47, 356.06, 838.05999999999995, 21936.130000000001, 12072.52, 245.65850051232962, 0.14000000000000001, 15796.200000000001, 81.052624952729587, 1425.95, 19947.349999999999, 648.36000000000001, 803.5, 1322.0999999999999, 67020.360000000001, 68857.350000000006, 174.39231315855662, 91.11779121543114, 67.591913454699323, 33.692933111639697, 0.028257258403291557, 4442.8999999999996, 2.3473298064428998, 36172.959999999999, 168.91950098508607, 775, 1932.26, 10.130000000000001, 264.45999999999998, 139.41, 14.81, 10.34, 23.25, 6.2800000000000002, 33.420000000000002, 1.3632534178246247, 1.3364482339329826, 0.034187314407487533, 1881.5899999999999, 4321.0600000000004, 1812.3599999999999, 39.350000000000001, 240.4020802682779, 417.13999999999999, 16.91, 42.450000000000003, 11.470000000000001, 51.150692879459911, 5.2000000000000002, 7.1100000000000003, 128315.03999999999, 342573.96999999997, 17691.511269881681, 2650.4299999999998, 1.0000000000000001e-05, 11215.08, 7056.0900000000001, 3013.1900000000001, 33502.470000000001, 32476.130000000001, 109335.74000000001, 0.059999999999999998, 55648.610000000001, 103.06999999999999, 1.6000000000000001, 65.909999999999997, 19.43, 1446.4986497743298, 5.2599999999999998, 0.19, 45.460000000000001, 1.0000000000000001e-05, 383.52714304621998, 5.5899999999999999, 318.5181997488923, 0.17999999999999999, 237.8954216358764, 158.16798834219838, 1.0000000000000001e-05, 0.040000000000000001, 84.843278129573292, 80.772482069947003, 74.902359604898905, 1.1100000000000001, 22.321723655100747, 20.10063514024807, 14.656593168003857, 14.423400465861189, 2.6226981685428234, 2.617804000720076, 1.9324765594230189, 0.43011098395202829, 0.071973056216872208, 106527.47, 62.060000000000002, 279.14999999999998, 2.5299999999999998, 1.0000000000000001e-05, 1.9399999999999999, 659.19000000000005, 1286.6404286685045, 0.38, 86.640000000000001, 3121.6599999999999, 38.759999999999998, 211.03, 51.310000000000002, 3.4199999999999999, 167.09999999999999, 127.95, 0.94999999999999996, 0.31, 130.91, 102.65000000000001, 6.8200000000000003, 0.01, 564.38999999999999, 4.8600000000000003, 3.3700000000000001, 106.54369445706374, 768.24000000000001, 1.1200000000000001, 1.0000000000000001e-05, 3.5422586901425341, 1932.9200000000001, 47.270000000000003, 63.189999999999998, 8.3499999999999996, 16.34, 80.109999999999999, 5.46, 9.1500000000000004, 104.75, 186.08000000000001, 102, 9.3000000000000007, 13.49, 18.489999999999998, 2.1200000000000001, 58.979999999999997, 4.04, 48.939999999999998, 43.932081135609216, 0.98999999999999999, 14.880000000000001, 0.56999999999999995, 32.548840454008193, 0.050000000000000003, 0.10000000000000001, 1.0000000000000001e-05, 0.63, 49.5, 14.236064025909194, 10.64381352919221, 85.739999999999995, 0.45000000000000001, 26.07, 0.02, 77.930000000000007, 1.0000000000000001e-05, 102.8, 2.3199999999999998, 4.0198930834028062, 1.3300000000000001, 3.3391515494488697, 0.19, 1.0000000000000001e-05, 0.75896897834917998, 1.0000000000000001e-05, 3.5800000000000001, 0.02061271722588752, 9536.3299999999999, 43655.040000000001, 1202.0899999999999, 650.98000000000002, 360.29000000000002, 49.310000000000002, 121.65000000000001, 80.060000000000002, 125.89, 557.83799576996682, 15.43, 759.72000000000003, 463.24573859818798, 9.8100000000000005, 188.41, 26.190000000000001, 5.5599999999999996, 2537.25, 186.96265570704824, 1.1100000000000001, 6.4500000000000002, 60.960000000000001, 0.40999999999999998, 5.5199999999999996, 19.848511565341866, 19.562161298644018, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.760000000000002, 10.54185607742235, 1.51, 7.1195157092553751, 0.040000000000000001, 0.080000000000000002, 5.3542162311434423, 1.0800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.82999999999999996, 2.4556240423569435, 2.3082974726251009, 1.7464203269420031, 1.6205922670502653, 1.298312306895504, 1.2536349439174477, 0.89438743121004705, 0.61898410687905359, 0.41662629414271407, 0.23571756938477756, 0.15886657443911678, 0.049421861701389569, 0.001482655851041687, 4.9421861701389564e-05, 240506.01000000001, 30526.43, 3856.9299999999998, 0.34484854036625012, 0.11222114459346341, 0.00018518340691990663, 662.37],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [183022.57000000001, 98755.789999999994, 9.2941495237849345, 0.22581477426774654, 29472.790000000001, 1346.4100000000001, 1561.5899999999999, 123.59, 11248.66, 3575.3899999999999, 17672.52, 78313.710000000006, 31661.470000000001, 1146.6700000000001, 7292.6999999999998, 20127.5, 3057.6100000000001, 1546.8900000000001, 430.11000000000001, 915.16999999999996, 23709.91, 12416.9, 250.18935221317847, 6.4400000000000004, 16911.189999999999, 87.149265910954554, 2630.52, 21676.18, 803.39999999999998, 936.95000000000005, 1647.54, 66749.190000000002, 67496.529999999999, 170.80586532705561, 89.580036359476793, 65.939267520286336, 33.212615609123205, 0.027853611673787679, 5403.7799999999997, 2.8513645114772577, 43492.660000000003, 201.73649222541493, 417.16000000000003, 1932.26, 10.130000000000001, 318.67000000000002, 139.41, 14.81, 10.34, 38.590000000000003, 6.2800000000000002, 17.940000000000001, 1.6016897183538439, 1.5929356659919403, 0.040178081702392877, 1962.23, 5470.0799999999999, 1812.3599999999999, 39.350000000000001, 233.28681452901037, 417.13999999999999, 7.4299999999999997, 42.450000000000003, 50.351060895636749, 11.470000000000001, 7.25, 9.7033333333333331, 130246.56, 390966.87, 20135.63421456271, 2354.3099999999999, 1.0000000000000001e-05, 11215.08, 7056.0900000000001, 3013.1900000000001, 33502.470000000001, 33496.239999999998, 123642.5, 0.059999999999999998, 55648.610000000001, 103.06999999999999, 3.8100000000000001, 65.909999999999997, 19.43, 1481.0199249258451, 5.2599999999999998, 0.19, 45.460000000000001, 1.0000000000000001e-05, 384.98981182403179, 5.5899999999999999, 325.48242725259996, 0.17999999999999999, 237.68669266432659, 156.26874733441414, 1.0000000000000001e-05, 0.040000000000000001, 81.98170402953815, 80.085294358023731, 74.637061428816622, 1.1100000000000001, 23.042381659255842, 19.603166691437508, 14.805479742587282, 14.357915584105816, 2.6115081747292073, 2.5998887206147847, 1.932989434467238, 0.42920255197966428, 0.071725025397671172, 110787.21000000001, 62.060000000000002, 279.14999999999998, 2.5299999999999998, 1.0000000000000001e-05, 0.01, 659.19000000000005, 3426.6194226591115, 0.38, 86.640000000000001, 9659.0499999999993, 42.630000000000003, 211.03, 77.049999999999997, 4.75, 127.95, 167.09999999999999, 0.94999999999999996, 0.31, 180.69, 102.65000000000001, 8.5999999999999996, 0.01, 564.38999999999999, 4.8600000000000003, 3.3700000000000001, 107.15415474767588, 768.24000000000001, 1.1200000000000001, 1.0000000000000001e-05, 3.5767472313871185, 2087.6999999999998, 47.270000000000003, 63.189999999999998, 8.3499999999999996, 16.34, 80.109999999999999, 5.46, 9.1500000000000004, 104.75, 102, 186.08000000000001, 6.8600000000000003, 13.49, 18.489999999999998, 2.1200000000000001, 4.04, 58.979999999999997, 48.939999999999998, 43.483975718901732, 0.98999999999999999, 14.880000000000001, 0.56999999999999995, 32.875211054455811, 0.050000000000000003, 0.10000000000000001, 1.0000000000000001e-05, 0.63, 49.5, 14.246009175090458, 10.500232604385545, 23.870000000000001, 0.45000000000000001, 26.07, 0.02, 77.930000000000007, 1.0000000000000001e-05, 102.8, 2.3199999999999998, 4.0434996598172921, 1.3300000000000001, 3.2584914824279898, 0.19, 1.0000000000000001e-05, 0.74934284978581356, 1.0000000000000001e-05, 3.5800000000000001, 0.019609219164807842, 10794.67, 43655.040000000001, 2014.77, 656.54999999999995, 475.94999999999999, 82.010000000000005, 121.65000000000001, 80.060000000000002, 157.36000000000001, 471.59945585141725, 17.440000000000001, 343.56999999999999, 398.05194550175912, 12.655000000000001, 200.65000000000001, 39.799999999999997, 8.2100000000000009, 2435.4099999999999, 157.07224073002035, 1.1100000000000001, 6.4500000000000002, 36.210000000000001, 0.070000000000000007, 5.5199999999999996, 16.793462632366467, 16.516937144387509, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.760000000000002, 9.1263225787575237, 1.51, 6.0926654865383059, 0.040000000000000001, 0.080000000000000002, 4.5271912581868161, 1.0800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.82999999999999996, 2.1363170571834442, 1.9560596933234271, 1.5017827362554454, 1.3842980364087754, 1.1454862647332471, 1.0979160289972509, 0.7852012440338868, 0.53168822303520624, 0.36011796104796095, 0.20103540800282516, 0.13383566322739238, 0.041764912849864999, 0.00125294738549595, 4.1764912849864995e-05, 243004.98000000001, 30127.810000000001, 4467.0600000000004, 0.39013093848855196, 0.12697439748199452, 0.00021022251238740812, 637.50999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [158680.29000000001, 87885.949999999997, 8.2226989182343484, 0.20183235203991146, 25662.490000000002, 1006.41, 1363.5999999999999, 109.54000000000001, 10374.41, 1617.9300000000001, 14164.719999999999, 67839.889999999999, 32164.709999999999, 1044.1500000000001, 7798.6899999999996, 17057.59, 3058.4899999999998, 961.34000000000003, 375.92000000000002, 615.94000000000005, 18592.470000000001, 11257.82, 225.60476432055924, 0.35999999999999999, 8741.5, 45.233566347641663, 3349.0999999999999, 18119.040000000001, 754.42999999999995, 792.99000000000001, 1331.6300000000001, 57034.330000000002, 48644.839999999997, 123.03398057141187, 64.784778933613069, 47.324156598010774, 24.076263773023015, 0.02745374168709263, 4889.8299999999999, 2.576192461531261, 40395.080000000002, 186.44530715610918, 246.41999999999999, 1932.26, 10.130000000000001, 293.93000000000001, 83.120000000000005, 14.81, 10.34, 53.490000000000002, 16.649999999999999, 10.4, 1.4864411352631131, 1.4548835934692854, 0.035909066075369714, 1587.6400000000001, 4756.2700000000004, 1812.3599999999999, 39.350000000000001, 189.3395851421943, 318.94999999999999, 4.54, 42.450000000000003, 41.490006952415669, 10.99, 5.1299999999999999, 12.296666666666667, 103707.83, 359238.42999999999, 18447.116351241897, 1999.99, 1.0000000000000001e-05, 11215.08, 7056.0900000000001, 3533.6300000000001, 33502.470000000001, 30052.689999999999, 99666.669999999998, 0.059999999999999998, 55648.610000000001, 46.939999999999998, 9.9600000000000009, 65.909999999999997, 19.43, 1511.6140936569293, 5.1699999999999999, 0.19, 45.460000000000001, 1.0000000000000001e-05, 384.73574123168231, 141.28, 332.26807749930657, 0.17999999999999999, 237.24378463673628, 154.12929451853273, 0.01, 0.040000000000000001, 79.276855285206935, 78.987033904590007, 74.267085705971397, 1.1100000000000001, 23.748934757991911, 19.11893112577166, 14.93508109671787, 14.299758365808831, 2.5919739729558633, 2.5786964417256297, 1.9352358690948352, 0.42773638242774814, 0.071384576506633532, 103492.16, 44.119999999999997, 233.46000000000001, 1.0000000000000001e-05, 2.5299999999999998, 0.44, 659.19000000000005, 3731.8946669042116, 0.38, 47.280000000000001, 10540.23, 50.93, 281.54750000000001, 161.87, 6.9800000000000004, 127.95, 167.09999999999999, 0.94999999999999996, 0.31, 209.62, 86.519999999999996, 4.6200000000000001, 0.01, 564.38999999999999, 4.8600000000000003, 3.2850000000000001, 105.8573265600394, 744.46000000000004, 1.1200000000000001, 1.0000000000000001e-05, 3.5414609535558781, 1482.8199999999999, 47.270000000000003, 63.189999999999998, 6.9900000000000002, 18.559999999999999, 98.510000000000005, 3.6400000000000001, 9.1500000000000004, 102, 104.75, 197.11000000000001, 5.1600000000000001, 13.49, 18.489999999999998, 3.7599999999999998, 4.9800000000000004, 7.5800000000000001, 105.12, 46.04594811292931, 0.98999999999999999, 14.880000000000001, 0.56999999999999995, 35.584077213898198, 0.050000000000000003, 0.26000000000000001, 1.0000000000000001e-05, 0.63, 49.5, 15.179116436202971, 11.117228350740602, 44.649999999999999, 26.07, 0.45000000000000001, 0.02, 77.930000000000007, 1.0000000000000001e-05, 22.75, 4.3718971055878715, 2.1000000000000001, 1.3300000000000001, 3.3996321342611924, 0.19, 1.0000000000000001e-05, 0.79432064068864039, 1.0000000000000001e-05, 3.5800000000000001, 0.02034325924317925, 8460.8199999999997, 38922.309999999998, 1607.4400000000001, 475.67000000000002, 492.12, 81.819999999999993, 121.31999999999999, 53.100000000000001, 149.66, 361.44437824364218, 14.82, 181.13999999999999, 310.07806214447731, 15.5, 177.65000000000001, 40.890000000000001, 7.4500000000000002, 1794.97, 119.6975477500858, 0.90000000000000002, 4.2999999999999998, 3.4700000000000002, 0.02, 5.5199999999999996, 12.886140673177888, 12.615314655011705, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.760000000000002, 7.1530165983184482, 1.51, 4.6988298151241032, 0.080000000000000002, 0.040000000000000001, 3.4690563243869792, 1.0800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.82999999999999996, 1.6838382871166571, 1.5013675373135633, 1.1681072096303966, 1.0717516453271496, 0.91484984134879677, 0.87100821959673824, 0.62440709753734869, 0.41428732496507353, 0.28212243603368525, 0.15587776609801279, 0.10224378211520238, 0.032001183760626724, 0.00096003551281880178, 3.2001183760626725e-05, 150884.06, 25642.279999999999, 3840.2199999999998, 0.32741178682878619, 0.10657613045902957, 0.00017703676155984976, 521.13999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [179569.60999999999, 105238.74000000001, 9.7945865933969305, 0.24276073843515192, 29262.02, 1185.0799999999999, 1293.77, 143.94, 11504.35, 1498.6500000000001, 15801.879999999999, 77485.429999999993, 18056.970000000001, 962.86000000000001, 9586.5, 20394.439999999999, 4112.1400000000003, 1263.1600000000001, 430.70999999999998, 1253.04, 22902.02, 9011.7099999999991, 181.67335507260182, 0.35999999999999999, 7052.2600000000002, 36.647517906712075, 4856.8100000000004, 20245.77, 852.62, 817.13999999999999, 1259.9200000000001, 23343.990000000002, 66714.279999999999, 168.59803507627058, 89.148492292647504, 64.604569817289885, 33.213454713205074, 0.025716858959398292, 4943.6999999999998, 2.6006424704637845, 43607.940000000002, 200.74932688418485, 142.43000000000001, 1932.26, 14.07, 309.44, 74.420000000000002, 12.44, 20.489999999999998, 81.120000000000005, 8.6300000000000008, 19.550000000000001, 1.5914843721479903, 1.586365982372822, 0.038220499349150713, 1943.25, 5263.1800000000003, 2364.7399999999998, 39.350000000000001, 219.69706288929956, 407.44999999999999, 7.2000000000000002, 42.450000000000003, 48.923842306764961, 2.9700000000000002, 4.7300000000000004, 14.890000000000001, 129808.10000000001, 474347.23999999999, 24281.050790634035, 2527.6900000000001, 1.0000000000000001e-05, 10659.48, 7056.0900000000001, 6068.6899999999996, 33502.470000000001, 37178.169999999998, 131843.20000000001, 0.059999999999999998, 65670.160000000003, 62.43, 8.2400000000000002, 65.909999999999997, 19.43, 1816.1432951463805, 5.1500000000000004, 0.19, 108.14, 1.0000000000000001e-05, 453.04836988704272, 6.4900000000000002, 398.91295745749187, 0.58999999999999997, 278.81780120603935, 0.040000000000000001, 180.06069072973824, 1.0000000000000001e-05, 92.471562466263563, 90.567814973612357, 87.140399742779408, 1.1100000000000001, 28.819086933608475, 22.003603935511023, 17.771658651715097, 16.815599005009869, 3.0339405951486489, 3.0138482733264724, 2.288850327576271, 0.502308045554412, 0.083718007592402013, 132075.42999999999, 37.560000000000002, 268.27999999999997, 1.0000000000000001e-05, 4.3099999999999996, 0.39000000000000001, 659.19000000000005, 3881.3440210798935, 0.40000000000000002, 38.810000000000002, 10584.450000000001, 122.34999999999999, 352.06500000000005, 605.17999999999995, 11.23, 127.95, 167.09999999999999, 0.53000000000000003, 0.95999999999999996, 202.11000000000001, 104.58, 5.3799999999999999, 0.01, 564.38999999999999, 4.6200000000000001, 3.2000000000000002, 117.21025884567142, 999.33000000000004, 1.1200000000000001, 1.0000000000000001e-05, 3.934399566703962, 2504.73, 63.079999999999998, 63.189999999999998, 9.1799999999999997, 27.510000000000002, 117.84, 6.7599999999999998, 9.1500000000000004, 102, 104.75, 70.489999999999995, 5.5199999999999996, 13.49, 11.300000000000001, 1.8, 2.6400000000000001, 9.5, 14.630000000000001, 38.083792936314893, 0.98999999999999999, 1.24, 0.56999999999999995, 30.269959377682685, 0.050000000000000003, 0.16, 1.0000000000000001e-05, 0.63, 49.5, 12.60650809812878, 9.1474543925791316, 50.43, 26.07, 0.45000000000000001, 0.02, 77.930000000000007, 1.0000000000000001e-05, 6.21, 3.693179584039838, 2.3300000000000001, 1.3300000000000001, 2.7646566811718034, 0.19, 1.0000000000000001e-05, 0.65778467039418487, 1.0000000000000001e-05, 3.5800000000000001, 0.016526496059302724, 8821.3700000000008, 49221, 1686.22, 541.75, 451.12, 116.18000000000001, 267.47000000000003, 146.12, 228.55000000000001, 518.56453674674981, 37.07, 75.810000000000002, 449.98287764054498, 19.52, 235.61000000000001, 41.670000000000002, 6.2199999999999998, 2203.3899999999999, 170.8224326141019, 0.69999999999999996, 2.9399999999999999, 2.8599999999999999, 0.070000000000000007, 5.5199999999999996, 18.501462209017802, 18.001575280303392, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.760000000000002, 10.48628790864114, 1.51, 6.8256449162681401, 0.080000000000000002, 0.01, 4.973715434067012, 0.69999999999999996, 1.0000000000000001e-05, 0.14999999999999999, 0.82999999999999996, 2.4832085722896653, 2.1502872285528691, 1.6917343230061166, 1.5511848738785734, 1.3650555413468339, 1.2703154815822195, 0.92828275128375848, 0.604587547087993, 0.41253696082096469, 0.22663713424795698, 0.14626414749997263, 0.045901191746421661, 0.0013770357523926499, 4.5901191746421658e-05, 166039.75, 26566.349999999999, 4554.3999999999996, 0.38098467892927251, 0.1240319084956937, 0.00020671984749282284, 614.25],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [202276.35999999999, 111877.55, 10.351195852960545, 0.25683225174825602, 33747.080000000002, 1315.21, 1402.4300000000001, 112.88, 13554.459999999999, 1830.26, 17846.669999999998, 85917.610000000001, 19708.639999999999, 1135.8599999999999, 9697.3199999999997, 26849.990000000002, 5014.1800000000003, 1582.03, 633.82000000000005, 2547.5500000000002, 25823.119999999999, 10407.809999999999, 208.9244977411546, 0.35999999999999999, 6421.3599999999997, 33.214678947165247, 5673.7200000000003, 22847.599999999999, 1061.8099999999999, 776.01999999999998, 1499.8800000000001, 27780.07, 75783.350000000006, 191.32600969098218, 101.08869641556647, 73.053360994302622, 37.928327469327996, 0.034499531476920017, 5379.96, 2.7936626847736199, 51148.25, 234.7322839422385, 157.69999999999999, 1932.26, 11.890000000000001, 326.31999999999999, 12.15, 106.56, 19.850000000000001, 129.99000000000001, 8.0600000000000005, 18.989999999999998, 1.8155571531614838, 1.7446377875486838, 0.038460117505403381, 2202.0900000000001, 5731.6499999999996, 2599.1399999999999, 39.350000000000001, 259.62659753378887, 514.19000000000005, 10.33, 42.450000000000003, 58.79247852131595, 11.890000000000001, 7.4500000000000002, 17.483333333333334, 133086.54999999999, 540167.5, 27569.861512712589, 1223.1500000000001, 1.0000000000000001e-05, 14503.889999999999, 7277.4099999999999, 11706.110000000001, 33502.470000000001, 36110, 132143.64999999999, 3.7400000000000002, 66492.789999999994, 71.719999999999999, 7.2000000000000002, 65.909999999999997, 21.09, 1868.8220012946606, 5.3899999999999997, 0.19, 112, 1.0000000000000001e-05, 457.40064325463118, 160.69999999999999, 409.84209966539231, 0.37, 280.34341574284502, 0.040000000000000001, 181.28906762021171, 1.0000000000000001e-05, 92.405275557684647, 90.238856218168479, 87.3755467414653, 1.1100000000000001, 29.910726685208104, 21.714692680465106, 18.14607651902433, 16.998059433126869, 3.047631868060626, 3.0299571182044334, 2.3263337429769595, 0.50499285303407215, 0.084165475505678725, 133455.01000000001, 43.969999999999999, 324.88, 1.0000000000000001e-05, 2.7799999999999998, 1.0000000000000001e-05, 659.19000000000005, 4149.3009203156716, 0.68000000000000005, 38.810000000000002, 11680.969999999999, 117.33, 422.58250000000004, 61.170000000000002, 0.69999999999999996, 131.44, 167.09999999999999, 0.11, 1.6200000000000001, 213.84999999999999, 133.43000000000001, 3.5699999999999998, 0.01, 564.38999999999999, 3.29, 7.3200000000000003, 121.8721292453412, 1085.02, 1.1200000000000001, 1.0000000000000001e-05, 4.1017935552319829, 2743.3800000000001, 40.530000000000001, 63.189999999999998, 5.7400000000000002, 43.100000000000001, 104.58333333333333, 153.38, 23.760000000000002, 102, 104.75, 176.34999999999999, 52.259999999999998, 13.49, 8.2599999999999998, 22.800000000000001, 11.609999999999999, 8.9800000000000004, 9.0700000000000003, 60.400512874276373, 0.98999999999999999, 3.3599999999999999, 50.321128407019827, 0.56999999999999995, 0.050000000000000003, 0.85999999999999999, 1.0000000000000001e-05, 49.5, 1.0000000000000001e-05, 20.646596975876434, 14.666169333112901, 48.109999999999999, 26.07, 0.45000000000000001, 0.02, 29.620000000000001, 1.0000000000000001e-05, 9.7899999999999991, 6.0740548623008817, 1.3500000000000001, 1.3300000000000001, 4.3856076454415112, 0.19, 0.059999999999999998, 1.0632524610933241, 1.0000000000000001e-05, 3.5800000000000001, 0.026194784987580776, 9144.3400000000001, 52263.260000000002, 1926.29, 554.59000000000003, 433.81, 136.34999999999999, 322.87, 59.880000000000003, 198.22, 544.44716021791407, 48.200000000000003, 97.370000000000005, 477.64521646001589, 12.06, 238.65000000000001, 7.5599999999999996, 59.109999999999999, 2521.5100000000002, 1.4299999999999999, 177.22095367119914, 4.1399999999999997, 6.4800000000000004, 0.10000000000000001, 5.8899999999999997, 19.42119918653173, 18.769663606357327, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.760000000000002, 11.255121182675561, 1.51, 7.266203045826833, 0.070000000000000007, 1.0000000000000001e-05, 5.2168130413017728, 1.27, 1.0000000000000001e-05, 1.05, 0.82999999999999996, 2.6787894170710724, 2.2587080640361523, 1.7857793206022292, 1.6507944638127976, 1.4859896118939375, 1.3830889501872186, 1.0055456515937937, 0.64271965269671816, 0.4387730462662901, 0.23899353123924735, 0.15292984578088911, 0.048174467091160522, 0.0014452340127348157, 4.8174467091160519e-05, 166463.70000000001, 27498.830000000002, 5598.8999999999996, 0.46189622267191827, 0.15037315984978347, 0.00025062193308297251, 923.24000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [202764.81, 114060.87, 10.470139721094839, 0.26058087907154898, 29546.75, 1272.1900000000001, 1137.98, 55.509999999999998, 13768.26, 1919.3299999999999, 18475.490000000002, 81430.300000000003, 18575.75, 925.02999999999997, 10726.76, 25441.41, 6429.5100000000002, 1712.05, 777.10000000000002, 2356.3800000000001, 22163.619999999999, 9741.8099999999995, 194.57694978108458, 0.35999999999999999, 5472.4799999999996, 28.172203005889759, 3649.8899999999999, 17575.52, 1020.74, 913.35000000000002, 1492.6400000000001, 26187.419999999998, 73147.759999999995, 184.61077300790899, 96.84294377342367, 70.274434968233621, 36.779304513179426, 0.032550473114853741, 5157.0500000000002, 2.6429689475474403, 51279.43, 235.0609902447973, 111.3, 2647.71, 10.01, 461.94999999999999, 20.050000000000001, 80.760000000000005, 26.510000000000002, 117.34, 9.8900000000000006, 19.710000000000001, 2.4544157880714703, 2.3665939330749342, 0.045197850011099765, 2327.1999999999998, 7709.7200000000003, 3570.8200000000002, 39.350000000000001, 312.99446802827947, 635.60000000000002, 45.369999999999997, 42.450000000000003, 72.110993950426192, 16.120000000000001, 7.5800000000000001, 20.076666666666668, 129203.44, 593857.54000000004, 30221.52562479239, 962.29999999999995, 1.0000000000000001e-05, 13873.82, 7229.3699999999999, 21344.68, 33502.470000000001, 37172.470000000001, 136447.45999999999, 15.470000000000001, 66465.539999999994, 60.090000000000003, 13.859999999999999, 15.609999999999999, 11.789999999999999, 1894.0202243003121, 2.77, 0.19, 70.719999999999999, 1.0000000000000001e-05, 455.75244974850006, 85.540000000000006, 415.36317378812356, 0.11, 277.59136646276517, 0.040000000000000001, 180.0586332533787, 0.14999999999999999, 90.937203330645602, 88.842722055893617, 85.813651527069055, 30.039534426213649, 1.1100000000000001, 21.146750782774696, 18.247855185767381, 17.134692627791633, 3.0265671647511567, 3.0040368880904782, 2.4032295104723822, 0.50067281468174629, 0.083445469113624396, 130654.61, 105.41, 316.86000000000001, 1.0000000000000001e-05, 0.81999999999999995, 0.059999999999999998, 464.81500000000005, 4191.9795822529031, 0.57999999999999996, 38.810000000000002, 11564.74, 107.81999999999999, 493.10000000000002, 44.880000000000003, 1.1299999999999999, 167.09999999999999, 114.515, 62.659999999999997, 7.2400000000000002, 258.05000000000001, 78.780000000000001, 2.2200000000000002, 0.01, 564.38999999999999, 4.7400000000000002, 3.9700000000000002, 112.53417160099724, 854.25, 1.1200000000000001, 1.0000000000000001e-05, 3.7986783806973339, 2860.6500000000001, 77.579999999999998, 63.189999999999998, 8.25, 99.480000000000004, 91.326666666666668, 177.38999999999999, 74.459999999999994, 102, 104.75, 96.849999999999994, 1.8700000000000001, 13.49, 10.98, 1.6599999999999999, 45.640000000000001, 20.199999999999999, 8.5500000000000007, 63.85427853843963, 0.98999999999999999, 1.1000000000000001, 55.117817682006006, 0.56999999999999995, 0.050000000000000003, 0.68999999999999995, 1.0000000000000001e-05, 49.5, 0.13, 22.408628553246544, 15.562329483763849, 108.42, 26.07, 0.01, 0.45000000000000001, 129.19, 1.0000000000000001e-05, 6.6281488855561213, 10.640000000000001, 0.68999999999999995, 1.3300000000000001, 4.6228218184055754, 0.19, 1.0000000000000001e-05, 1.1456471641223263, 0.10000000000000001, 3.5800000000000001, 0.027614660837646837, 9470.9099999999999, 57554.230000000003, 1654.53, 578.35000000000002, 565.87, 198.24000000000001, 202.75999999999999, 55.270000000000003, 208.06999999999999, 502.91351072566135, 52.909999999999997, 145.44, 448.03551973790144, 39.630000000000003, 225.44999999999999, 4.3399999999999999, 56.619999999999997, 2732.04, 0.46000000000000002, 161.70970720795597, 4.6399999999999997, 32.890000000000001, 0.040000000000000001, 11.67, 17.930015080388468, 17.218214162098775, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.760000000000002, 10.644667276808455, 1.51, 6.7668694874886386, 0.20000000000000001, 1.0000000000000001e-05, 4.8136215619405931, 3.6600000000000001, 1.0000000000000001e-05, 1.95, 0.82999999999999996, 2.5421588490686369, 2.0926448674783882, 1.6585255050735526, 1.5582825078922371, 1.4294304351727125, 1.3501436970559328, 0.95415493766236559, 0.59865491658881453, 0.4100263384484743, 0.22135326718910087, 0.14211102219135444, 0.044493119032985098, 0.0013347935709895531, 4.4493119032985104e-05, 169065.94, 33106.18, 5466.4399999999996, 0.44316380806885353, 0.14427470691335437, 0.00024045784485559064, 762.13999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [209260.63, 118708.42, 10.801006039098315, 0.26980031737964144, 31874.950000000001, 1016.4, 950.02999999999997, 56.420000000000002, 14479.33, 2135.7600000000002, 20792.970000000001, 80845.639999999999, 23017.330000000002, 743.24000000000001, 13659.5, 24673.080000000002, 8084.0200000000004, 1906.9200000000001, 1082.1300000000001, 2546.3000000000002, 21877.009999999998, 10195.610000000001, 201.64393975451304, 0.35999999999999999, 4694.1800000000003, 24.054451977322188, 3679.0100000000002, 17133.939999999999, 1174.0799999999999, 999.78999999999996, 1586.8399999999999, 25027.869999999999, 74696.889999999999, 188.43854992836, 98.007801044166598, 71.504425744866083, 37.747813889047038, 0.041529583593500979, 5372.3100000000004, 2.7201981958109887, 54346.220000000001, 248.46762649044805, 94.980000000000004, 2234.79, 10.84, 438.19999999999999, 21.32, 82.099999999999994, 16.760000000000002, 122.68000000000001, 6.9100000000000001, 21.600000000000001, 2.4048267100574408, 2.241596731091712, 0.037944525035549598, 3782.3899999999999, 9200.8600000000006, 3111, 39.350000000000001, 374.49971317825919, 795.00999999999999, 73.390000000000001, 42.450000000000003, 87.814043066621338, 17.239999999999998, 9.3300000000000001, 22.670000000000002, 111060.3, 655897.26000000001, 33294.382229139075, 680.83000000000004, 1.0000000000000001e-05, 17938.419999999998, 6492.9099999999999, 32759.459999999999, 33502.470000000001, 37049.82, 143334.16, 6.0700000000000003, 67074.149999999994, 72.420000000000002, 73.019999999999996, 20.091428571428569, 45.039999999999999, 1958.1840268224491, 2.7200000000000002, 0.19, 56.850000000000001, 1.0000000000000001e-05, 99.290000000000006, 464.28782494174726, 430.072268814339, 0.20999999999999999, 280.48103270974207, 0.040000000000000001, 182.72350805351712, 0.059999999999999998, 91.269649521723309, 89.160540855961898, 85.650429719113788, 30.277032292827354, 1.1100000000000001, 21.064891798383886, 18.591590089776656, 17.773634485426879, 3.0850784209514845, 3.0419836525404946, 2.538366358953235, 0.50699727542341577, 0.084499545903902643, 143473.57000000001, 68.650000000000006, 354.22000000000003, 1.0000000000000001e-05, 1.9099999999999999, 0.059999999999999998, 270.44, 4323.9689270826493, 2.6699999999999999, 38.810000000000002, 11743.77, 81.700000000000003, 401.35000000000002, 49.880000000000003, 0.38, 159.94999999999999, 97.590000000000003, 48.289999999999999, 18.920000000000002, 289.52999999999997, 72.680000000000007, 3.2599999999999998, 1.3999999999999999, 564.38999999999999, 53.490000000000002, 5.5049999999999999, 114.73337267235699, 801.02999999999997, 1.1200000000000001, 1.0000000000000001e-05, 3.8779631055874337, 2613.5700000000002, 91.780000000000001, 63.189999999999998, 5.5899999999999999, 50.049999999999997, 78.069999999999993, 9.2100000000000009, 62.18, 102, 82.430000000000007, 2.5899999999999999, 165.47, 13.49, 14.210000000000001, 10.9, 16.739999999999998, 18.940000000000001, 11.619999999999999, 43.96332635613944, 0.98999999999999999, 38.144683663478503, 2.3900000000000001, 0.56999999999999995, 0.050000000000000003, 0.93999999999999995, 1.0000000000000001e-05, 49.5, 0.01, 15.270611959238373, 10.502203256471095, 72.290000000000006, 26.07, 0.02, 0.45000000000000001, 38.530000000000001, 1.0000000000000001e-05, 4.598763665777593, 6.4000000000000004, 1.1599999999999999, 1.3300000000000001, 3.097992138611311, 0.19, 1.0000000000000001e-05, 0.78904020904450523, 0.12, 3.5800000000000001, 0.01852017816877595, 9066.2299999999996, 58517.57, 1791.01, 696.14999999999998, 773.38, 193.91999999999999, 203.75999999999999, 78.370000000000005, 213.66999999999999, 542.95743248892484, 44.100000000000001, 491.2573362999812, 197.78999999999999, 42.120000000000005, 227.69, 7.4199999999999999, 66.159999999999997, 3074.1199999999999, 0.050000000000000003, 172.67295329012296, 4.3600000000000003, 10.35, 0.12, 4.4699999999999998, 19.335640382163003, 18.488849797533558, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.760000000000002, 11.791800978736083, 2.8799999999999999, 7.3922432001856038, 0.20000000000000001, 0.01, 5.1921399253114178, 1.7, 1.0000000000000001e-05, 2.2799999999999998, 2.6699999999999999, 2.8187907120365527, 2.2620008528658855, 1.7982495891858457, 1.7230401873558701, 1.6172664535362054, 1.5235550582847983, 1.0574009383162608, 0.65838262304834672, 0.44875744043981464, 0.24074217154457614, 0.1566422014471596, 0.048057125769952316, 0.0014417137730985694, 4.8057125769952312e-05, 169222.37, 32177.509999999998, 5341.2399999999998, 0.42562480172953027, 0.1385647753867163, 0.00023094129231119386, 775.32000000000005],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [215614.57000000001, 120586.81, 10.890844423383756, 0.27277119110161346, 32860.989999999998, 856.96000000000004, 1337.1500000000001, 68.209999999999994, 14664.459999999999, 2314.8400000000001, 21648.209999999999, 84386.289999999994, 26766.119999999999, 679.5, 16755.599999999999, 26887.41, 8401.7999999999993, 2092.8400000000001, 1329.49, 2708.9699999999998, 21303.68, 10640.389999999999, 208.68398262425501, 0.35999999999999999, 5102.5299999999997, 26.039055417254417, 4471.1400000000003, 15681.719999999999, 1154.6800000000001, 915.59000000000003, 1622.6500000000001, 25849.279999999999, 76014.220000000001, 191.47136164908559, 98.711425779931218, 72.410382238879478, 38.609378893301901, 0.041895889357113733, 5698.2399999999998, 2.8528735474668072, 57101.559999999998, 259.7399042113052, 119.69, 1989.9300000000001, 1.96, 449.00999999999999, 26.440000000000001, 93.75, 26.539999999999999, 130.75, 11.119999999999999, 18.02, 2.5691180175715602, 2.3221476102690244, 0.034090876262837855, 4292.9200000000001, 10399.91, 3394.0700000000002, 39.350000000000001, 316.4501682777734, 33.920000000000002, 693.00999999999999, 42.450000000000003, 75.537485240814235, 6.2300000000000004, 9.3100000000000005, 33.799999999999997, 107367.02, 653847.63, 33110.565274550005, 540.91999999999996, 0.040000000000000001, 18326.34, 6585.8900000000003, 36376, 33502.470000000001, 38435.809999999998, 144926.28, 15.85, 70927.139999999999, 71.140000000000001, 31.190000000000001, 24.572857142857139, 153.55000000000001, 2094.9093487126702, 3.3500000000000001, 0.19, 61.140000000000001, 1.0000000000000001e-05, 137.71000000000001, 489.89274937338246, 461.27237929761191, 0.42999999999999999, 293.32201414250153, 0.040000000000000001, 192.13065180734682, 0.029999999999999999, 94.767864400269431, 92.484899350564064, 88.26283199932324, 31.578653203067368, 1.1100000000000001, 21.814900892273894, 19.469012504630225, 19.040070313614152, 3.2489712236878363, 3.1904791067310994, 2.6489839027831268, 0.53174651778851656, 0.08862441963141944, 149049.31, 81.129999999999995, 264.49000000000001, 1.0000000000000001e-05, 4.4000000000000004, 0.059999999999999998, 299.13, 4964.1186586392396, 1.3200000000000001, 38.810000000000002, 93.170000000000002, 12408.26, 1465.45, 46.479999999999997, 1.1000000000000001, 230.87, 5.5, 0.029999999999999999, 47.090000000000003, 254.59, 168.38999999999999, 4.0300000000000002, 1.23, 564.38999999999999, 72.920000000000002, 7.0399999999999991, 119.81001073015887, 871.47000000000003, 1.1200000000000001, 1.0000000000000001e-05, 4.0363354090573136, 2806.8600000000001, 140.22, 63.189999999999998, 24.23, 28.109999999999999, 79.639999999999986, 11.57, 96.019999999999996, 102, 44.100000000000001, 4.3899999999999997, 241.13999999999999, 27.5, 13.84, 9.9800000000000004, 18.07, 12.119999999999999, 14.52, 47.742826750925623, 3.6000000000000001, 6.7599999999999998, 40.210990342360304, 3.9900000000000002, 0.39000000000000001, 0.53000000000000003, 1.0000000000000001e-05, 49.5, 2.0499999999999998, 16.335874430250943, 11.077807114465065, 114.01000000000001, 18.359999999999999, 1.0000000000000001e-05, 0.45000000000000001, 89.390000000000001, 1.0000000000000001e-05, 5.0100671521195759, 0.35999999999999999, 1.0600000000000001, 1.3300000000000001, 3.2740874808101186, 0.19, 1.0000000000000001e-05, 0.85795236438817335, 1.0000000000000001e-05, 2.0600000000000001, 0.019529136019239841, 8794.6100000000006, 61491.330000000002, 1510, 731.38, 762.80999999999995, 178.78, 206.09999999999999, 81.590000000000003, 229.71000000000001, 488.32421294867316, 33.149999999999999, 448.83951851836758, 223.05000000000001, 44.609999999999999, 226.16, 62.07, 9.9499999999999993, 2418.5300000000002, 0.23000000000000001, 152.95046763937154, 3.3100000000000001, 6.1100000000000003, 0.11, 7.3099999999999996, 17.344249357074442, 16.632149768468185, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.760000000000002, 10.876572121375887, 2.1000000000000001, 6.7460267209486888, 1.22, 4.6679463963554797, 1.0000000000000001e-05, 2.2400000000000002, 1.0000000000000001e-05, 1.6599999999999999, 2.5600000000000001, 2.603063117153424, 2.0374940013902521, 1.6204240980285192, 1.5867608150307575, 1.5165784949505901, 1.4262328202727916, 0.97660299344599988, 0.61097993260912431, 0.40984398014756029, 0.21855172547775839, 0.14421558127447409, 0.043269001282470472, 0.0012980700384741144, 4.3269001282470476e-05, 175881.16, 28785.439999999999, 5455.3199999999997, 0.4282794871255306, 0.13942902456609788, 0.00023238170761016313, 699.09000000000003],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [199429.95000000001, 109607.53, 9.8459929108302013, 0.24705569364746235, 30088.41, 634.07000000000005, 1328.8399999999999, 55.43, 13109.48, 2095.8699999999999, 18084.509999999998, 69698.580000000002, 22551.599999999999, 702.20000000000005, 16500.619999999999, 24757.970000000001, 7465.1599999999999, 1919.8399999999999, 1291.46, 2052.9400000000001, 18912.18, 10082.5, 195.71026391826052, 0.35999999999999999, 4250.8699999999999, 21.621558080426958, 4436.0600000000004, 14668.17, 1185.6400000000001, 915.71000000000004, 1552.49, 30612.18, 74578.600000000006, 187.20636227972636, 95.740339435248856, 70.584634826539912, 38.016449784960642, 0.032944068476062106, 5035.4099999999999, 2.4960600253594074, 53795.510000000002, 243.52963223926989, 111.54000000000001, 1494.8199999999999, 16.609999999999999, 390.50999999999999, 34.240000000000002, 98.640000000000001, 20.719999999999999, 125.09, 11.85, 18, 2.3505141206075004, 2.1036772050391752, 0.030656377544936636, 3872.0999999999999, 11449.52, 2855.23, 39.350000000000001, 268.88970085651715, 13.93, 577.13, 42.450000000000003, 65.35028986476874, 43.740000000000002, 3.1499999999999999, 11.859999999999999, 98249.839999999997, 652212.43999999994, 32960.128187690469, 453.11000000000001, 1.0000000000000001e-05, 14583.51, 5889.54, 47523.75, 33502.470000000001, 38815.029999999999, 138734.94, 9.4900000000000002, 64451.559999999998, 63.229999999999997, 121.43000000000001, 29.054285714285712, 298.10000000000002, 1927.8417931161491, 2.7200000000000002, 0.19, 1.0000000000000001e-05, 79.870000000000005, 38.229999999999997, 444.50079508867663, 425.68038577548862, 0.14999999999999999, 263.79767087048509, 0.02, 173.91241979537102, 0.029999999999999999, 84.588661594794047, 82.40667788861569, 78.065106203448494, 2.23, 28.307399320145958, 19.488281891875229, 17.537454084188646, 17.523056830995387, 2.9538364468169598, 2.8794506386517886, 2.3267560855105702, 0.47990843977529801, 0.079984739962549692, 147041.12, 93.609999999999999, 266.54000000000002, 1.0000000000000001e-05, 2.8500000000000001, 0.059999999999999998, 248.62, 5470.8958633619504, 3.0299999999999998, 38.810000000000002, 121.23, 903.52999999999997, 14350.16, 37.640000000000001, 5.8600000000000003, 138.99000000000001, 4.0700000000000003, 96.519999999999996, 22.84, 278.11000000000001, 89.650000000000006, 1.01, 2.5499999999999998, 564.38999999999999, 11.880000000000001, 8.5749999999999993, 113.29654354640418, 838.42999999999995, 1.1200000000000001, 1.0000000000000001e-05, 3.8041605926924866, 2818.23, 495.10000000000002, 63.189999999999998, 15.630000000000001, 9.4199999999999999, 81.209999999999994, 9.6699999999999999, 89.340000000000003, 102, 31.399999999999999, 1.5700000000000001, 187.84999999999999, 14.039999999999999, 5.7699999999999996, 1.8899999999999999, 29.359999999999999, 28.140000000000001, 11.81, 40.492632560484253, 2.46, 8.6699999999999999, 1.1699999999999999, 32.575910156068723, 0.76000000000000001, 1.25, 1.0000000000000001e-05, 53.840000000000003, 13.665034622308301, 4.0899999999999999, 9.1078489221475891, 6.2599999999999998, 1.0000000000000001e-05, 37.479999999999997, 0.45000000000000001, 61.950000000000003, 1.0000000000000001e-05, 4.2640202490755543, 1.29, 2.77, 1.3300000000000001, 2.7054632381913128, 0.14000000000000001, 1.0000000000000001e-05, 0.73185783088620171, 0.22, 1.3700000000000001, 0.016121430989927472, 9433.0100000000002, 60215.239999999998, 1475.1800000000001, 579.47000000000003, 823.78999999999996, 273.94, 219.75, 103.05, 249.13, 359.22140978663811, 24.940000000000001, 335.26847310999636, 207.37, 18.699999999999999, 208.81, 50.420000000000002, 11.890000000000001, 869.82000000000005, 1.0000000000000001e-05, 110.65650579895235, 0.55000000000000004, 5.6299999999999999, 0.089999999999999997, 2.4700000000000002, 12.71488311594077, 1.0000000000000001e-05, 12.218714390943424, 1.0000000000000001e-05, 29.760000000000002, 8.188799095332973, 2.0800000000000001, 5.0332125196700064, 0.35999999999999999, 1.27, 3.4316836746341033, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.04, 1.03, 1.963902304959479, 1.5001827947442812, 1.1938188778614685, 1.1905691774120042, 1.1662282838493516, 1.0990996677020881, 0.73800060011163449, 0.46277964586951936, 0.30722413170767104, 0.16116284042759035, 0.10856229687793104, 0.031859808328079539, 0.00095579424984238619, 3.1859808328079535e-05, 175243.76000000001, 28241.57, 5089.6300000000001, 0.3938608523389428, 0.12822382604631885, 0.00021370637674386476, 657.02999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [205076.59, 108744.11, 9.7215035836224946, 0.24446362741716246, 31085.830000000002, 582.91999999999996, 1415.1900000000001, 56.149999999999999, 15598.98, 2457.3299999999999, 17333.740000000002, 70989.860000000001, 27174.310000000001, 811.59000000000003, 16886.380000000001, 24689.66, 7474.3800000000001, 1962.8399999999999, 1203.26, 2106, 18693.34, 10050.870000000001, 193.81601890296966, 0.35999999999999999, 3966.6599999999999, 20.118050062025691, 5254.4799999999996, 15878.52, 1366.7, 1336.1099999999999, 1672.1300000000001, 37991.860000000001, 73806.479999999996, 184.35198428789863, 93.890902171511044, 69.278090493550437, 37.861883704606896, 0.031834689969918221, 4311.7799999999997, 2.1186088272867099, 55536.699999999997, 250.15378301938841, 136.81999999999999, 1122.99, 10.199999999999999, 406.37, 16.32, 96.209999999999994, 15.49, 82.150000000000006, 5.1699999999999999, 21.710000000000001, 2.3785919532644884, 2.1121840391943296, 0.030590647665924342, 3421.6300000000001, 11205.91, 2073.6700000000001, 39.350000000000001, 288.6248995253294, 11.73, 625.53999999999996, 42.450000000000003, 71.431352945011881, 66.840000000000003, 35.520000000000003, 21.850000000000001, 99101.199999999997, 594520.82999999996, 29977.178986367722, 469.85000000000002, 1.0000000000000001e-05, 14261.35, 5415.6000000000004, 55215.139999999999, 33502.470000000001, 39026.190000000002, 134922.31, 252.83000000000001, 63195.050000000003, 67.489999999999995, 171.12, 33.535714285714278, 275.18000000000001, 1923.2125831159299, 3.3999999999999999, 0.53000000000000003, 1.0000000000000001e-05, 75.590000000000003, 38.229999999999997, 437.11910534875415, 426.01646984012524, 0.17000000000000001, 257.14555598486248, 0.040000000000000001, 170.78267777516626, 0.029999999999999999, 81.801888612088575, 79.497124901934598, 74.699709135690185, 3.5099999999999998, 27.472407648343498, 18.883561634722831, 17.457958809929902, 17.113496842379714, 2.913835098231349, 2.8183251890469792, 2.233522712319731, 0.46972086484116315, 0.078286810806860535, 135900.45000000001, 93.609999999999999, 311.29000000000002, 1.0000000000000001e-05, 4.2400000000000002, 0.059999999999999998, 249.19999999999999, 4549.4297624338378, 3.0299999999999998, 38.810000000000002, 149.41999999999999, 484.00999999999999, 12189.27, 38.909999999999997, 50.130000000000003, 4.3399999999999999, 3.79, 0.059999999999999998, 21.52, 421.12, 56.100000000000001, 1.53, 4.8399999999999999, 602.60000000000002, 4.1100000000000003, 10.109999999999999, 119.26524082208478, 871.05999999999995, 1.1200000000000001, 1.0000000000000001e-05, 3.9883988044945293, 2397.48, 7.3899999999999997, 5.5599999999999996, 10.5, 17.98, 136.06, 8.4399999999999995, 21.059999999999999, 101.14, 12.220000000000001, 5.1799999999999997, 126.53, 11.76, 6.8799999999999999, 2.98, 182.88, 23.030000000000001, 13.73, 44.629454295659464, 0.80000000000000004, 5.5499999999999998, 0.57999999999999996, 0.59999999999999998, 33.685295170609407, 0.28999999999999998, 1.0000000000000001e-05, 71.75, 14.791555905541008, 6.6100000000000003, 9.7188719412811526, 24.27, 1.0000000000000001e-05, 28.739999999999998, 0.28999999999999998, 94.530000000000001, 1.0000000000000001e-05, 4.6909706466458694, 1.05, 2.2400000000000002, 1.3300000000000001, 2.882126211803349, 0.02, 1.0000000000000001e-05, 0.8095685232596822, 0.73999999999999999, 1.0600000000000001, 0.017137971220405668, 10375.41, 62439.830000000002, 1333.4300000000001, 720.58000000000004, 766.92999999999995, 153.43000000000001, 186.69, 111.06, 259.69999999999999, 356.91603062333979, 15.51, 338.0920693352171, 228.46000000000001, 37.759999999999998, 60.869999999999997, 17.030000000000001, 223.94, 951.88999999999999, 0.81999999999999995, 107.92985306751856, 2.1400000000000001, 5.5599999999999996, 0.16, 2.52, 12.604771977555966, 5.6900000000000004, 12.050053531706414, 1.0000000000000001e-05, 29.760000000000002, 8.3264319074922071, 4.5599999999999996, 5.0584594173352428, 2.9900000000000002, 1.26, 3.406311521158282, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.41999999999999998, 1.28, 1.9991281017252094, 1.491425600455059, 1.2138921270618288, 1.2118011214403728, 1.1777747572366823, 1.0733195218739562, 0.75306300180598051, 0.46931987535509329, 0.31182913377544169, 0.16108663761048855, 0.1111401169707137, 0.031681903355391589, 0.00095045710066174764, 3.1681903355391586e-05, 173921.75, 26201.900000000001, 5375.1199999999999, 0.40950701683074558, 0.13331753125254872, 0.00022219588542091455, 640.08000000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [195686.92000000001, 108779.75, 9.6835048429406605, 0.24383510599984873, 31878.139999999999, 650.66999999999996, 1383.99, 54.649999999999999, 14928.18, 2816.2399999999998, 17021.299999999999, 77733.570000000007, 25234.290000000001, 622.25999999999999, 18835.619999999999, 29448.209999999999, 8807.9500000000007, 2317.4299999999998, 1413.24, 1843.54, 17103.360000000001, 8928.7600000000002, 171.0075771708014, 0.35999999999999999, 4404.7399999999998, 22.287534315115568, 5558.6000000000004, 16896.040000000001, 1681.8, 923.39999999999998, 1754.99, 35187.470000000001, 73689.919999999998, 183.30098563282786, 93.267437775151407, 68.716535309215686, 38.200952129675741, 0.033321099859420472, 4265.5799999999999, 2.0790483777805742, 29833.880000000001, 134.00085100522489, 167.56, 1213.5699999999999, 1.1200000000000001, 396.94999999999999, 21.23, 236.66, 30.059999999999999, 186.19999999999999, 5.1299999999999999, 24.239999999999998, 2.802840865018144, 2.5162188083029546, 0.035662240848497749, 4068.8499999999999, 10359.16, 1785.3800000000001, 39.350000000000001, 300.14542308871091, 14.07, 687.60000000000002, 23.66, 75.648252790712377, 88.909999999999997, 3.7799999999999998, 28.239999999999998, 106183.78999999999, 654156.81999999995, 32960.999600588017, 293607.83000000002, 4.7699999999999996, 15101.76, 5971.4799999999996, 74113.929999999993, 33502.470000000001, 43933.57, 146751.91, 286, 74120.470000000001, 79.030000000000001, 177.19999999999999, 38.017142857142858, 389.69999999999999, 2279.9284438360223, 4.2199999999999998, 0.31, 1.0000000000000001e-05, 159.19, 38.229999999999997, 510.16760209786179, 507.28969340765269, 0.070000000000000007, 297.79069098879791, 0.059999999999999998, 199.41539323594458, 0.029999999999999999, 93.961897274133747, 90.99837990769683, 84.750768004268011, 1.28, 31.685228240844292, 21.740960839453738, 20.62622658729676, 19.797461742964366, 3.4043109759499863, 3.2786301534028759, 2.7066913377537078, 0.54643835890047932, 0.091073059816746557, 166652.76999999999, 93.609999999999999, 360.25999999999999, 1.0000000000000001e-05, 5.9900000000000002, 0.059999999999999998, 278.92000000000002, 4557.9061189965623, 3.0299999999999998, 38.810000000000002, 83.319999999999993, 527.37, 12056.940000000001, 272.17000000000002, 48.359999999999999, 4.29, 5.4500000000000002, 0.28999999999999998, 14.800000000000001, 261.73000000000002, 73.849999999999994, 0.55000000000000004, 9.0299999999999994, 691.26999999999998, 17.739999999999998, 3.02, 130.60397098890422, 850.80999999999995, 1.1200000000000001, 1.0000000000000001e-05, 4.3375808640040079, 2197.9499999999998, 18.32, 9.3399999999999999, 7.9299999999999997, 16.949999999999999, 48.619999999999997, 8.1199999999999992, 90.109999999999999, 41.159999999999997, 32.329999999999998, 3.7000000000000002, 137.43000000000001, 30.199999999999999, 5.3499999999999996, 1.0700000000000001, 36.18, 18.809999999999999, 33.3645019005465, 11.18, 0.80000000000000004, 3.5499999999999998, 3.52, 0.22, 22.946978377688364, 3.2000000000000002, 1.0000000000000001e-05, 82.790000000000006, 10.845745870471633, 35.460000000000001, 7.0464820482483637, 2.1600000000000001, 1.0000000000000001e-05, 53.700000000000003, 0.40000000000000002, 51.880000000000003, 1.0000000000000001e-05, 3.4946611805794885, 28.41, 3.6200000000000001, 1.3300000000000001, 2.0862871992200009, 2.0899999999999999, 1.0000000000000001e-05, 0.60741813439362935, 0.39000000000000001, 35.200000000000003, 0.012290842518339966, 10715.07, 69631.039999999994, 1487.3599999999999, 634.21000000000004, 692.52999999999997, 129.22, 211.71000000000001, 93.239999999999995, 246.97, 19.399999999999999, 416.22535540098784, 400.31045131380097, 479.79000000000002, 45.740000000000002, 62.25, 12.609999999999999, 251.22, 1106.6500000000001, 0.17999999999999999, 123.05204383529741, 2.4900000000000002, 6.5700000000000003, 0.25, 3, 14.691779458241319, 23.399999999999999, 13.96757407444014, 1.0000000000000001e-05, 29.760000000000002, 9.9673944325898169, 3.9199999999999999, 5.9272679466724858, 0.33000000000000002, 2, 3.9699280948148643, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.32000000000000001, 2.3881144806524666, 1.1399999999999999, 1.7410829211233991, 1.4769785893899727, 1.4430450497795551, 1.3631513616455397, 1.2100248764678856, 0.90164412145870743, 0.55562933178890195, 0.37169622531825675, 0.17386775993407633, 0.13314381190652474, 0.03700495050209137, 0.0011101485150627412, 3.7004950502091369e-05, 154545.03, 26937.509999999998, 4900.4899999999998, 0.36724898859770272, 0.11956016991786304, 0.00019926694986310508, 564.04999999999995],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [209722.67000000001, 117574.89, 10.407104320150935, 0.26260672016530245, 32487.110000000001, 760.30999999999995, 1754.8, 95.280000000000001, 15483.66, 2977.9499999999998, 16673.59, 85531.770000000004, 28164.34, 858.26999999999998, 21760.889999999999, 36023.129999999997, 8973.3400000000001, 2515.9499999999998, 1879.3499999999999, 1907.5999999999999, 17172.93, 9552.8999999999996, 181.5383142777689, 0.35999999999999999, 4515.4099999999999, 22.817228116997018, 6636.9899999999998, 18039.32, 2011.48, 1011.9400000000001, 2089.3699999999999, 36589.110000000001, 75580.039999999994, 187.58332063342914, 95.304731678788769, 70.377435383422011, 39.636669863761163, 0.044044833795967318, 4318.5, 2.0909935322772424, 30114.43, 135.27272551718406, 143.43000000000001, 1213.0599999999999, 0.58999999999999997, 458.07999999999998, 23.140000000000001, 261.33999999999997, 18.850000000000001, 234.16999999999999, 4.25, 33.880000000000003, 3.2675070093131979, 2.9564626769279818, 0.041055796515823952, 3735.73, 10075.33, 1772.26, 12.130000000000001, 261.55632773022717, 21.18, 716.79999999999995, 7.1299999999999999, 67.131408285194354, 40.020000000000003, 6.7599999999999998, 36.289999999999999, 110741.5, 731318.65000000002, 36770.915621971115, 330081.5, 1.0000000000000001e-05, 20182.209999999999, 6382.0100000000002, 82611.149999999994, 33903.550000000003, 44752.860000000001, 154866.70999999999, 325.32999999999998, 90499.820000000007, 85.009999999999991, 164.81999999999999, 42.498571428571424, 467.98000000000002, 2814.3380520127421, 4.6699999999999999, 0.17000000000000001, 0.0025000000000000001, 0.12, 629.18577977748726, 38.229999999999997, 617.17813975523143, 0.14000000000000001, 358.81536943066419, 0.059999999999999998, 242.42242968517678, 0.029999999999999999, 112.28599159680263, 108.24741906176402, 99.883537547364, 0.40000000000000002, 38.053234659068067, 26.061034291506665, 25.314416703789259, 23.713103945494321, 4.1609869401148769, 3.9701969213924082, 3.5753828942094965, 0.6616994868987347, 0.11028324781645579, 192785.76000000001, 93.609999999999999, 374.56, 1.0000000000000001e-05, 3.2599999999999998, 0.059999999999999998, 153.09999999999999, 4930.5933384196278, 3.0299999999999998, 38.810000000000002, 74.310000000000002, 643.62, 12968.6, 39.530000000000001, 73.299999999999997, 6.2400000000000002, 231.33000000000001, 155.18000000000001, 11.789999999999999, 252.68000000000001, 125.22, 0.87, 9.0299999999999994, 837.11000000000001, 5.8499999999999996, 10.4, 147.95789199902748, 828.92999999999995, 1.1200000000000001, 1.0000000000000001e-05, 4.8719688896152658, 2091.4000000000001, 41.630000000000003, 26.16, 9.9000000000000004, 186.25999999999999, 54.890000000000001, 19.620000000000001, 62.390000000000001, 50.009999999999998, 27.219999999999999, 3.1099999999999999, 78.790000000000006, 16.43, 6.5, 1.1699999999999999, 25.100000000000001, 28.16, 49.62779582063105, 9.7100000000000009, 0.80000000000000004, 3.4900000000000002, 1.3999999999999999, 1.9199999999999999, 32.511338508354299, 0.34000000000000002, 0.38, 40.590000000000003, 15.880670361797792, 8.1699999999999999, 10.253989625377326, 2.8900000000000001, 0.01, 39.43, 98.519999999999996, 0.42999999999999999, 1.0000000000000001e-05, 5.1913624632705453, 31.289999999999999, 11.43, 1.3300000000000001, 3.0227504123533233, 0.029999999999999999, 1.0000000000000001e-05, 0.90874744968423182, 1.3300000000000001, 5.5300000000000002, 0.017574083623593608, 11062.940000000001, 74815.820000000007, 647.16999999999996, 667.73000000000002, 603.54999999999995, 120.52, 210.91, 68.769999999999996, 255.87, 19.559999999999999, 396.24938419508328, 386.90509815818996, 388.07999999999998, 29, 102.34, 14.949999999999999, 277.83999999999997, 1148.8299999999999, 0.089999999999999997, 112.70608859877535, 4.1200000000000001, 5.4699999999999998, 0.080000000000000002, 1.1699999999999999, 13.985652727611134, 6.2199999999999998, 0.01, 13.229603295910589, 29.760000000000002, 9.763948794759715, 9.9399999999999995, 5.6235974254575201, 1.28, 2.5600000000000001, 3.7764883524211732, 1.0000000000000001e-05, 0.01, 0.29999999999999999, 2.3273186086765976, 2.9399999999999999, 1.6590981810507799, 1.4667814266994845, 1.4015934939986507, 1.2710058648740787, 1.2231825574514312, 0.88129002682177449, 0.53579751290273758, 0.36204537825942179, 0.15382869771336422, 0.1290170481796955, 0.035293953817451922, 0.0010588186145235577, 3.5293953817451923e-05, 153808.47, 30479.68, 5240.3999999999996, 0.38689089380881292, 0.12595471312278228, 0.0002099245218713038, 604.75],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [208148.37, 120534.3, 10.59875160986839, 0.26832282556628834, 32548.43, 754.55999999999995, 1778.2, 92.909999999999997, 15036.52, 3594.6799999999998, 15959.51, 86980.979999999996, 33084.260000000002, 790.98000000000002, 19829.130000000001, 37656.860000000001, 8049.0299999999997, 2526.9099999999999, 1469.8599999999999, 1734.95, 17416.509999999998, 9579.5499999999993, 182.00990136261566, 0.35999999999999999, 4563.21, 23.033375780524725, 6994.4700000000003, 18426.66, 2098.8400000000001, 952.47000000000003, 2333.1300000000001, 39354.029999999999, 76894.050000000003, 190.56483382083522, 96.591091186833197, 71.749864833984688, 40.83523935568752, 0.05069120478632147, 4610.5699999999997, 2.2173927914828555, 29872.169999999998, 134.33502949291452, 305, 1165.8299999999999, 1.75, 505.60000000000002, 15.539999999999999, 253.43000000000001, 24.949999999999999, 252.77000000000001, 9.6999999999999993, 37.390000000000001, 3.5384701242764933, 3.2185045505732526, 0.044512912371832143, 4280.1999999999998, 10756.540000000001, 2224.5799999999999, 20.469999999999999, 281.11938953584831, 28, 7.8700000000000001, 756.85000000000002, 73.459851637664215, 29.75, 39.590000000000003, 45.57, 103896.71000000001, 715302.95999999996, 35914.254978155732, 322026.72999999998, 1.0000000000000001e-05, 23470.540000000001, 6281.2700000000004, 90430.119999999995, 35825.93, 40141.559999999998, 150031.23999999999, 219.41999999999999, 86900.600000000006, 90.989999999999995, 160.37, 46.979999999999997, 229.43000000000001, 2732.0106738806535, 6.2599999999999998, 0.17000000000000001, 0.0050000000000000001, 47.340000000000003, 613.17437448396561, 38.229999999999997, 585.97701392112219, 0.11, 339.80005543607206, 0.070000000000000007, 231.59441877781634, 0.029999999999999999, 105.43991016136249, 101.07186831357357, 92.41558538252265, 0.40000000000000002, 35.931344238302145, 24.599635675480499, 24.332933120351075, 22.220312880507013, 4.0330886387878007, 3.7800362144327209, 3.6792352487145155, 0.63000603573878688, 0.10500100595646449, 153546.69, 93.609999999999999, 396.19, 1.0000000000000001e-05, 5.29, 0.059999999999999998, 157.77000000000001, 4749.4654481781818, 3.0299999999999998, 38.810000000000002, 71.400000000000006, 670.37, 12563.74, 65.230000000000004, 6.6399999999999997, 77.189999999999998, 26.5, 0.12, 171.03, 270.57999999999998, 326.79000000000002, 0.87, 9.0299999999999994, 1017.95, 1.8400000000000001, 11.050000000000001, 171.54419696829135, 840.50999999999999, 1.1200000000000001, 1.0000000000000001e-05, 5.6019818175216907, 1832.8299999999999, 85.420000000000002, 32.090000000000003, 44.07, 9.2200000000000006, 82.480000000000004, 15.779999999999999, 79.25, 9.9299999999999997, 4.3300000000000001, 2.6800000000000002, 141.80000000000001, 12.93, 34.840000000000003, 4.0099999999999998, 21.43, 9.4100000000000001, 32.91955286333274, 27.780000000000001, 0.80000000000000004, 6.9100000000000001, 0.69999999999999996, 0.040000000000000001, 21.404389079290127, 0.20000000000000001, 0.38, 29.719999999999999, 10.357266574021091, 88.769999999999996, 6.6537290642253399, 2.5099999999999998, 1.0000000000000001e-05, 18.649999999999999, 64.379999999999995, 1.3200000000000001, 1.0000000000000001e-05, 3.4297036681447737, 24.300000000000001, 3.5699999999999998, 1.3300000000000001, 1.949630213898393, 0.82999999999999996, 0.029999999999999999, 0.60473231491529711, 0.19, 1.95, 0.011184372092628812, 9391.8799999999992, 75162.630000000005, 561.91999999999996, 672.13, 753.14999999999998, 115.77, 179.19, 67.989999999999995, 241.81, 14.18, 362.32345694690713, 359.16418454015042, 399.43000000000001, 12.6, 76.180000000000007, 24.129999999999999, 230.31, 1154.5699999999999, 0.26000000000000001, 103.29073973797333, 2.1299999999999999, 10.68, 0.10000000000000001, 2.9100000000000001, 12.790811582221837, 4.2699999999999996, 1.0000000000000001e-05, 12.039165232609017, 9.187498446693839, 29.760000000000002, 5.3399999999999999, 5.0919710388929751, 0.80000000000000004, 1.6599999999999999, 3.4498984301908315, 1.1200000000000001, 1.0000000000000001e-05, 1.2, 2.1774959136155596, 1.5700000000000001, 1.5185258237568549, 1.39607866988176, 1.3061353167579779, 1.1770903764617209, 1.1082664083037173, 0.82700342001138716, 0.49740517776598547, 0.33896127738719789, 0.14568494575551102, 0.11998915501230897, 0.03234209029981374, 0.00097026270899441217, 3.2342090299813738e-05, 153923.48999999999, 31536.889999999999, 6334.6899999999996, 0.46082154540946907, 0.15002329204866055, 0.00025003882008110091, 572.74000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [182351.76999999999, 87120.399999999994, 7.6106667804715027, 0.19331132284662186, 32892.830000000002, 844.22000000000003, 2006.3, 62.939999999999998, 15725.219999999999, 3370.8499999999999, 15986.049999999999, 87143.360000000001, 34318.550000000003, 618.35000000000002, 19966.82, 39603.32, 7860.0699999999997, 2619.1100000000001, 1837.8299999999999, 2169.1399999999999, 17724.959999999999, 10455.65, 198.53522908055393, 0.35999999999999999, 4419.5299999999997, 22.276112262803629, 6984.6099999999997, 18155.66, 2153.9299999999998, 1084.0799999999999, 2542.4200000000001, 43116.360000000001, 58143.800000000003, 144.0870123677212, 72.863901150059348, 54.427767044357005, 31.353562717704328, 0.046163398787008751, 4068.98, 1.9454345563461117, 29244.240000000002, 131.698099867715, 144.56999999999999, 1175.95, 3.8100000000000001, 701.57000000000005, 13.23, 212.05000000000001, 18.899999999999999, 232.38999999999999, 9.9100000000000001, 36.289999999999999, 4.4721315877445003, 4.0866232669087061, 0.056345332014841348, 4172.6999999999998, 6524.8800000000001, 2538.73, 42.219999999999999, 304.51820608923458, 33.909999999999997, 1.55, 801.64999999999998, 80.974497653610968, 27.640000000000001, 3.0499999999999998, 26.510000000000002, 102751.09, 757458.85999999999, 38011.179203444124, 340121.88, 1.0000000000000001e-05, 21583.200000000001, 6408.6899999999996, 101534.39, 34896.239999999998, 45837.989999999998, 159927.95999999999, 225.72, 92100.009999999995, 83.150000000000006, 308.42000000000002, 61.780000000000001, 235.75, 2929.7194260254923, 11.119999999999999, 0.17000000000000001, 0.0074999999999999997, 15.970000000000001, 660.28287573960222, 38.229999999999997, 616.87129490386258, 0.080000000000000002, 358.2642946288284, 0.080000000000000002, 245.05261845268893, 0.029999999999999999, 109.93962410134026, 105.00613842745321, 94.352637343940756, 0.40000000000000002, 37.621970800620417, 25.748906756075439, 25.723499194387262, 22.975063825683513, 4.2916685721117629, 4.0353836020397091, 3.9768357424973861, 0.66280595708289758, 0.11046765951381629, 163935.67000000001, 93.609999999999999, 309.38999999999999, 1.0000000000000001e-05, 9.5099999999999998, 0.059999999999999998, 119.89, 5234.1037122654998, 3.0299999999999998, 38.810000000000002, 78.700000000000003, 1202.1600000000001, 12960.52, 76.219999999999999, 11.99, 589.21000000000004, 30.600000000000001, 465.89999999999998, 334.57999999999998, 217.41, 343.56, 0.87, 9.0299999999999994, 850, 8.7699999999999996, 11.050000000000001, 149.81713575506348, 832.61000000000001, 1.1200000000000001, 1.1899999999999999, 4.8364047133959094, 1835.04, 190.33000000000001, 17.460000000000001, 43.189999999999998, 18.390000000000001, 85.950000000000003, 11.77, 46.119999999999997, 9.9299999999999997, 2.25, 3.27, 56.25, 6.6200000000000001, 4.0999999999999996, 1.3200000000000001, 10.710000000000001, 7.5599999999999996, 23.058084368372977, 8.2799999999999994, 0.80000000000000004, 1.4099999999999999, 5.2199999999999998, 0.02, 14.814925532849522, 0.92000000000000004, 0.38, 37.909999999999997, 7.1308263958905416, 0.11, 4.5576562299465122, 3.7599999999999998, 1.0000000000000001e-05, 16.829999999999998, 59.109999999999999, 0.23999999999999999, 1.0000000000000001e-05, 2.3769148981362616, 20.09, 3.7400000000000002, 1.3300000000000001, 1.3263647035774153, 0.040000000000000001, 0.059999999999999998, 0.42316728568159534, 0.14000000000000001, 1.3200000000000001, 0.0075061505401484933, 5944.9300000000003, 71003.029999999999, 546.45000000000005, 1368.0599999999999, 689.64999999999998, 113.94, 172.74000000000001, 52.969999999999999, 300.04000000000002, 13.49, 375.74439298965109, 373.48889362142381, 487, 59, 54.399999999999999, 9.8900000000000006, 228.06, 1038.6700000000001, 0.68999999999999995, 109.66233650845693, 1.1299999999999999, 4.5099999999999998, 1.4399999999999999, 2.8100000000000001, 5.7000000000000002, 13.221475702198353, 0.059999999999999998, 12.377643442336634, 9.7235535517735823, 25.309999999999999, 2.8900000000000001, 5.177984126125458, 0.11, 1.79, 3.5519754029821478, 1.0000000000000001e-05, 0.23000000000000001, 2.2952665215770613, 0.14999999999999999, 0.87, 1.5662911575667822, 1.4832814021710945, 1.3703961550991808, 1.2409691089447932, 1.0622174255263013, 0.87397509374533933, 0.52081603777850016, 0.35691855575831061, 0.15037999165885471, 0.12519969749997759, 0.033417775924189937, 0.001002533277725698, 3.3417775924189933e-05, 141538.56, 25573.110000000001, 5589.4300000000003, 0.40162267096485643, 0.13075073390065861, 0.000217917889834431, 589],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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
            "title": "High technology exports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [211891.20999999999, 97528.029999999999, 8.4564396436197207, 0.21563382006680118, 36845.379999999997, 763.24000000000001, 4490.6300000000001, 88.019999999999996, 23455.68, 3561.3600000000001, 17002.73, 101298.57000000001, 60841.050000000003, 806.61000000000001, 23834.310000000001, 41415.75, 8421.8199999999997, 3107.1399999999999, 1946.9300000000001, 2680.8899999999999, 18966.630000000001, 12558.35, 238.59372271305006, 0.35999999999999999, 5489.6700000000001, 27.612727513739809, 8026.9899999999998, 19657.869999999999, 2627.0500000000002, 1330.71, 2476.1700000000001, 49839.639999999999, 66699.919999999998, 165.92908586857232, 83.69646155451953, 62.757916770929235, 36.678526858684052, 0.058223534974620107, 4733.1899999999996, 2.2509327628542688, 38184.110000000001, 171.87913051639913, 239.16, 1283.5899999999999, 6.3799999999999999, 913.78999999999996, 16.789999999999999, 323.35000000000002, 21.77, 276.60000000000002, 13.07, 36.060000000000002, 6.0171571241717769, 5.3494864852475326, 0.074872819719364339, 5715.25, 10553.18, 2835.0300000000002, 15.07, 295.77063759781595, 22.210000000000001, 0.72999999999999998, 856.74000000000001, 79.962464929279321, 87.120000000000005, 25.34, 37.560000000000002, 116513.86, 942314.81999999995, 47328.099985125926, 431628.78000000003, 1.0000000000000001e-05, 27446.650000000001, 7492.0699999999997, 120466.00999999999, 38194.370000000003, 49287.589999999997, 192362.53, 305.57999999999998, 108683.17999999999, 94.329999999999998, 454.81999999999999, 86.299999999999997, 109.84, 3486.4862732067827, 1.95, 0.17000000000000001, 0.01, 30.890000000000001, 789.84799595686968, 38.229999999999997, 722.5115098171907, 0.050000000000000003, 422.80268736192824, 1.0000000000000001e-05, 288.2485016434855, 0.029999999999999999, 127.11453176199181, 121.31464880947919, 106.82268837782256, 0.40000000000000002, 43.905836999152172, 30.236344386006341, 30.025885587863069, 26.324134825429041, 5.0019471411473466, 4.7747032854834499, 4.6481697749433266, 0.77469496249055436, 0.12911582708175909, 204979.88, 93.609999999999999, 318.58999999999997, 1.0000000000000001e-05, 6.4299999999999997, 0.059999999999999998, 96.090000000000003, 6936.326662898985, 3.0299999999999998, 38.810000000000002, 109.41, 2904.9699999999998, 16090.26, 43.840000000000003, 14.529999999999999, 662.02999999999997, 33.549999999999997, 147.16, 18.780000000000001, 158.44, 526.17999999999995, 0.87, 9.0299999999999994, 1132.1099999999999, 12.800000000000001, 11.050000000000001, 192.90254522821627, 959.67999999999995, 1.1200000000000001, 1.3799999999999999, 6.1196064494143547, 2418.1700000000001, 195.94999999999999, 4.6600000000000001, 24.780000000000001, 14.67, 57.060000000000002, 17.82, 43.600000000000001, 9.9299999999999997, 8.0199999999999996, 3.0600000000000001, 56.850000000000001, 5.7199999999999998, 3.6000000000000001, 4.6200000000000001, 9.1899999999999995, 21.01250723676845, 26.329999999999998, 5.0199999999999996, 0.80000000000000004, 1.21, 9.5199999999999996, 0.050000000000000003, 13.219360971487186, 1.27, 0.38, 38.829999999999998, 6.3985180265608994, 0.88, 4.0758489862246288, 0.64000000000000001, 1.0000000000000001e-05, 23.41, 40.020000000000003, 0.54000000000000004, 1.0000000000000001e-05, 2.1397476302297727, 2.6800000000000002, 4.2000000000000002, 1.3300000000000001, 1.1753972559744392, 0.029999999999999999, 0.059999999999999998, 0.384464174504136, 0.080000000000000002, 0.78000000000000003, 0.0065739244683245017, 6350.1099999999997, 74932.929999999993, 466.43000000000001, 1264.1800000000001, 735.04999999999995, 132.81999999999999, 222.58000000000001, 77.489999999999995, 332.47000000000003, 22.370000000000001, 474.10929467106581, 565.38999999999999, 463.58814515913792, 21.989999999999998, 103.19, 30.359999999999999, 348.60000000000002, 1457.23, 0.33000000000000002, 135.99379150662924, 1.03, 5.25, 0.14000000000000001, 5.29, 5.7000000000000002, 16.507981940069755, 0.01, 15.371933042913652, 12.39810711269965, 19.199999999999999, 2.8900000000000001, 6.3509616191512919, 0.089999999999999997, 1.1699999999999999, 4.4128156424177316, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.9222034481781649, 0.28999999999999998, 1.8799999999999999, 1.9491498808574701, 1.885794069234962, 1.7327397664205864, 1.5759341326548786, 1.2488180736986649, 1.1131449376254645, 0.65660796084827167, 0.45272312364333789, 0.1841069868004073, 0.15688899667573761, 0.041681455014808078, 0.0012504436504442425, 4.1681455014808075e-05, 169217.26000000001, 29239.720000000001, 6309.3199999999997, 0.45271131956146937, 0.14738295807752663, 0.00024563826346254443, 673.67999999999995],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 942320,
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

  
