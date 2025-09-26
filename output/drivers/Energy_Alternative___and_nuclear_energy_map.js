(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Energy_Alternative___and_nuclear_energy_map') 

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
    "b55c48571f02": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c48571f02",
  "attrs": {
    "b55c48571f02": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 110,
      "colorbar": {
        "title": "Alternative and nuclear energy"
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
        "title": "Alternative and nuclear energy",
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
      "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
      "z": [5.4400000000000004, 8.9100000000000001, 8.9100000000000001, 8.9100000000000001, 6.2400000000000002, 0.10000000000000001, 7.5999999999999996, 3.2400000000000002, 8.9100000000000001, 22.09, 22.559999999999999, 1.9099999999999999, 1.8899999999999999, 1.28, 7.29, 6.7199999999999998, 5.3499999999999996, 18.07, 34.340000000000003, 19.879999999999999, 34.560000000000002, 12.720000000000001, 12.635127604389803, 3.1099999999999999, 28.350000000000001, 28.350000000000001, 15.67, 5.0099999999999998, 9.1600000000000001, 24.82, 16.899999999999999, 2.0099999999999998, 0.93000000000000005, 0.92955937251736886, 0.92955937251736886, 0.92955937251736886, 1.0000000000000001e-05, 45.630000000000003, 56.229999999999997, 56.229999999999997, 18.030000000000001, 50.240000000000002, 61.880000000000003, 0.98999999999999999, 33.670000000000002, 15.67, 20.140000000000001, 55.329999999999998, 5.9199999999999999, 17.289999999999999, 47.609999999999999, 16.52, 23.04642211789476, 23.04642211789476, 23.04642211789476, 16.289999999999999, 3.2799999999999998, 2.2799999999999998, 1.4199999999999999, 9.2599999999999998, 6.25, 2.9399999999999999, 64.579999999999998, 30.510000000000002, 0.080000000000000002, 9.8100000000000005, 6.0899999999999999, 4.1900000000000004, 23.859999999999999, 23.729027557197796, 0.080000000000000002, 2.1600000000000001, 45.630000000000003, 43, 50.829999999999998, 30.809999999999999, 20.210000000000001, 0.57999999999999996, 79.859999999999999, 3.3300000000000001, 61.310000000000002, 79.920000000000002, 60.399999999999999, 78.739999999999995, 58.602259917802812, 40.829999999999998, 51.460000000000001, 1.0000000000000001e-05, 2.2200000000000002, 58.602259917802812, 4.9299999999999997, 51.369999999999997, 52.409999999999997, 58.602259917802812, 0.85999999999999999, 2.0099999999999998, 50.520000000000003, 58.602259917802812, 58.602259917802812, 58.602259917802812, 1.0000000000000001e-05, 58.602259917802812, 58.602259917802812, 58.602259917802812, 0.029999999999999999, 58.602259917802812, 58.602259917802812, 58.602259917802812, 58.602259917802812, 58.602259917802812, 0.84999999999999998, 52.619999999999997, 50.090000000000003, 89.439999999999998, 36.659999999999997, 91.920000000000002, 0.82999999999999996, 0.34999999999999998, 0.78000000000000003, 1.8999999999999999, 6.5199999999999996, 1.98, 7.3899999999999997, 0.070000000000000007, 21.68, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 0.01, 7.4500000000000002, 0.46999999999999997, 77, 15.710000000000001, 86.969999999999999, 85.790000000000006, 14.130000000000001, 83.909999999999997, 2.8500000000000001, 40.170000000000002, 41.692866662835911, 12.07, 82.950000000000003, 97.969999999999999, 94.230000000000004, 92.400000000000006, 82.870000000000005, 95.280000000000001, 64.469999999999999, 92.730000000000004, 70.319999999999993, 84.790000000000006, 65.140000000000001, 85.299999999999997, 85.299999999999997, 78.010000000000005, 82.829999999999998, 89.200000000000003, 43.659999999999997, 92.799999999999997, 83.469999999999999, 87.299999999999997, 61.729999999999997, 95.760000000000005, 80.388248271526905, 74.790000000000006, 86.540000000000006, 90.25, 61.990000000000002, 90.349999999999994, 75.049999999999997, 55.939999999999998, 33.259999999999998, 36.210000000000001, 62.409999999999997, 83.629999999999995, 89.049999999999997, 18.899999999999999, 65.599999999999994, 29.489999999999998, 80.388248271526905, 32.880000000000003, 64.390000000000001, 24.829999999999998, 80.388248271526905, 51.810000000000002, 1.1200000000000001, 80.388248271526905, 45.109999999999999, 10.17, 10.82, 31.620000000000001, 30.550000000000001, 13.41, 43.829999999999998, 40.909999999999997, 16.550000000000001, 64.290000000000006, 38.892753157800357, 27.52, 18.940000000000001, 79.019999999999996, 47.939999999999998, 33.850000000000001, 67.049999999999997, 51.490000000000002, 33.299999999999997, 0.5, 27.449999999999999, 8.1799999999999997, 0.59999999999999998, 34.82, 24.640000000000001, 38.892753157800357, 38.892753157800357, 1.54, 6.1900000000000004, 30.18, 38.892753157800357, 20.02, 38.892753157800357, 5.6299999999999999, 10.43, 38.892753157800357, 0.17999999999999999, 1.0000000000000001e-05, 10.56, 0.51000000000000001, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 5.3300000000000001, 21.18, 7.1500000000000004, 7.1500000000000004, 7.1500000000000004, 7.1500000000000004, 25.899999999999999],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [5.4400000000000004, 8.9100000000000001, 8.9100000000000001, 8.9100000000000001, 6.2400000000000002, 0.10000000000000001, 7.5999999999999996, 3.2400000000000002, 8.9100000000000001, 22.09, 22.559999999999999, 1.9099999999999999, 1.8899999999999999, 1.28, 7.29, 6.7199999999999998, 5.3499999999999996, 18.07, 34.340000000000003, 19.879999999999999, 34.560000000000002, 12.720000000000001, 12.635127604389803, 3.1099999999999999, 28.350000000000001, 28.350000000000001, 15.67, 5.0099999999999998, 9.1600000000000001, 24.82, 16.899999999999999, 2.0099999999999998, 0.93000000000000005, 0.92955937251736886, 0.92955937251736886, 0.92955937251736886, 1.0000000000000001e-05, 45.630000000000003, 56.229999999999997, 56.229999999999997, 18.030000000000001, 50.240000000000002, 61.880000000000003, 0.98999999999999999, 33.670000000000002, 15.67, 20.140000000000001, 55.329999999999998, 5.9199999999999999, 17.289999999999999, 47.609999999999999, 16.52, 23.04642211789476, 23.04642211789476, 23.04642211789476, 16.289999999999999, 3.2799999999999998, 2.2799999999999998, 1.4199999999999999, 9.2599999999999998, 6.25, 2.9399999999999999, 64.579999999999998, 30.510000000000002, 0.080000000000000002, 9.8100000000000005, 6.0899999999999999, 4.1900000000000004, 23.859999999999999, 23.729027557197796, 0.080000000000000002, 2.1600000000000001, 45.630000000000003, 43, 50.829999999999998, 30.809999999999999, 20.210000000000001, 0.57999999999999996, 79.859999999999999, 3.3300000000000001, 61.310000000000002, 79.920000000000002, 60.399999999999999, 78.739999999999995, 58.602259917802812, 40.829999999999998, 51.460000000000001, 1.0000000000000001e-05, 2.2200000000000002, 58.602259917802812, 4.9299999999999997, 51.369999999999997, 52.409999999999997, 58.602259917802812, 0.85999999999999999, 2.0099999999999998, 50.520000000000003, 58.602259917802812, 58.602259917802812, 58.602259917802812, 1.0000000000000001e-05, 58.602259917802812, 58.602259917802812, 58.602259917802812, 0.029999999999999999, 58.602259917802812, 58.602259917802812, 58.602259917802812, 58.602259917802812, 58.602259917802812, 0.84999999999999998, 52.619999999999997, 50.090000000000003, 89.439999999999998, 36.659999999999997, 91.920000000000002, 0.82999999999999996, 0.34999999999999998, 0.78000000000000003, 1.8999999999999999, 6.5199999999999996, 1.98, 7.3899999999999997, 0.070000000000000007, 21.68, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 0.01, 7.4500000000000002, 0.46999999999999997, 77, 15.710000000000001, 86.969999999999999, 85.790000000000006, 14.130000000000001, 83.909999999999997, 2.8500000000000001, 40.170000000000002, 41.692866662835911, 12.07, 82.950000000000003, 97.969999999999999, 94.230000000000004, 92.400000000000006, 82.870000000000005, 95.280000000000001, 64.469999999999999, 92.730000000000004, 70.319999999999993, 84.790000000000006, 65.140000000000001, 85.299999999999997, 85.299999999999997, 78.010000000000005, 82.829999999999998, 89.200000000000003, 43.659999999999997, 92.799999999999997, 83.469999999999999, 87.299999999999997, 61.729999999999997, 95.760000000000005, 80.388248271526905, 74.790000000000006, 86.540000000000006, 90.25, 61.990000000000002, 90.349999999999994, 75.049999999999997, 55.939999999999998, 33.259999999999998, 36.210000000000001, 62.409999999999997, 83.629999999999995, 89.049999999999997, 18.899999999999999, 65.599999999999994, 29.489999999999998, 80.388248271526905, 32.880000000000003, 64.390000000000001, 24.829999999999998, 80.388248271526905, 51.810000000000002, 1.1200000000000001, 80.388248271526905, 45.109999999999999, 10.17, 10.82, 31.620000000000001, 30.550000000000001, 13.41, 43.829999999999998, 40.909999999999997, 16.550000000000001, 64.290000000000006, 38.892753157800357, 27.52, 18.940000000000001, 79.019999999999996, 47.939999999999998, 33.850000000000001, 67.049999999999997, 51.490000000000002, 33.299999999999997, 0.5, 27.449999999999999, 8.1799999999999997, 0.59999999999999998, 34.82, 24.640000000000001, 38.892753157800357, 38.892753157800357, 1.54, 6.1900000000000004, 30.18, 38.892753157800357, 20.02, 38.892753157800357, 5.6299999999999999, 10.43, 38.892753157800357, 0.17999999999999999, 1.0000000000000001e-05, 10.56, 0.51000000000000001, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 38.892753157800357, 5.3300000000000001, 21.18, 7.1500000000000004, 7.1500000000000004, 7.1500000000000004, 7.1500000000000004, 25.899999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [6.3399999999999999, 8.9499999999999993, 8.9499999999999993, 8.9499999999999993, 5.9400000000000004, 0.12, 7.8499999999999996, 3.29, 8.0399999999999991, 19.870000000000001, 23.170000000000002, 2.2200000000000002, 2.04, 1.3500000000000001, 7.3099999999999996, 7.1299999999999999, 6.25, 18.07, 36.109999999999999, 20, 35.490000000000002, 14.44, 14.342218820163263, 3.4199999999999999, 31.100000000000001, 31.100000000000005, 17.280000000000001, 4.6299999999999999, 9.5500000000000007, 26.559999999999999, 17.77, 2.3100000000000001, 1.1399999999999999, 1.1394545660851942, 1.1394545660851942, 1.1394545660851942, 1.0000000000000001e-05, 44.920000000000002, 56.850000000000001, 56.850000000000001, 18.100000000000001, 50.310000000000002, 61.880000000000003, 1.21, 35.840000000000003, 14.640000000000001, 20.100000000000001, 54.530000000000001, 4.8499999999999996, 18.199999999999999, 47.609999999999999, 16.57, 22.414745783157937, 22.414745783157937, 22.414745783157937, 16.780000000000001, 3.5499999999999998, 1.8899999999999999, 1.05, 9.3699999999999992, 6.2699999999999996, 3.0699999999999998, 61.409999999999997, 27.710000000000001, 0.080000000000000002, 8.7100000000000009, 5.7599999999999998, 4.2599999999999998, 20.170000000000002, 20.059218003009558, 0.089999999999999997, 2.2000000000000002, 44.920000000000002, 41.460000000000001, 45.770000000000003, 30.100000000000001, 19.890000000000001, 0.53000000000000003, 80.25, 3.2200000000000002, 61.609999999999999, 80.689999999999998, 57.479999999999997, 73.980000000000004, 58.310692408187116, 35.719999999999999, 49.909999999999997, 1.0000000000000001e-05, 1.6699999999999999, 58.310692408187116, 5.2000000000000002, 65.469999999999999, 48.82, 58.310692408187116, 1.02, 2.1499999999999999, 50.549999999999997, 58.310692408187116, 58.310692408187116, 58.310692408187116, 1.0000000000000001e-05, 58.310692408187116, 58.310692408187116, 58.310692408187116, 0.02, 58.310692408187116, 58.310692408187116, 58.310692408187116, 58.310692408187116, 58.310692408187116, 0.77000000000000002, 52.049999999999997, 47.93, 90.299999999999997, 44.240000000000002, 93.459999999999994, 0.73999999999999999, 0.35999999999999999, 0.75, 2.5899999999999999, 6.7300000000000004, 1.8300000000000001, 6.5800000000000001, 0.10000000000000001, 23.079999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 0.01, 7.5700000000000003, 0.44, 75.400000000000006, 22.969999999999999, 86.989999999999995, 81.530000000000001, 13.92, 84, 2.73, 38.590000000000003, 42.711454450635287, 11.1, 84.049999999999997, 97.879999999999995, 94.129999999999995, 91.549999999999997, 81.670000000000002, 95.019999999999996, 62.380000000000003, 92.939999999999998, 75.400000000000006, 84.319999999999993, 61.920000000000002, 85.530000000000001, 85.310000000000002, 82.450000000000003, 81.840000000000003, 89.280000000000001, 39.880000000000003, 93, 83.189999999999998, 87.549999999999997, 60.689999999999998, 96.040000000000006, 80.089221435803296, 76.140000000000001, 86.540000000000006, 90.640000000000001, 63.030000000000001, 89.560000000000002, 69.790000000000006, 55.409999999999997, 34.780000000000001, 34.340000000000003, 61.25, 85.780000000000001, 88.549999999999997, 19.079999999999998, 65.640000000000001, 7.2000000000000002, 33.619999999999997, 80.089221435803296, 63.520000000000003, 24.379999999999999, 80.089221435803296, 48.920000000000002, 0.95999999999999996, 80.089221435803296, 45.18, 10.210000000000001, 9.2899999999999991, 31.440000000000001, 29.039999999999999, 14.640000000000001, 39.310000000000002, 37.829999999999998, 16.73, 66.099999999999994, 38.694540241387237, 26.260000000000002, 20.670000000000002, 81.109999999999999, 46.700000000000003, 33.329999999999998, 66.75, 51.170000000000002, 39.159999999999997, 0.5, 28.210000000000001, 6.4000000000000004, 0.59999999999999998, 35.710000000000001, 22.629999999999999, 38.694540241387237, 38.694540241387237, 1.5900000000000001, 32.020000000000003, 6.2800000000000002, 38.694540241387237, 18.43, 38.694540241387237, 5.8600000000000003, 10.56, 38.694540241387237, 0.19, 1.0000000000000001e-05, 11.4, 0.52000000000000002, 38.694540241387237, 38.694540241387237, 38.694540241387237, 38.694540241387237, 38.694540241387237, 38.694540241387237, 38.694540241387237, 38.694540241387237, 38.694540241387237, 38.694540241387237, 38.694540241387237, 38.694540241387237, 38.694540241387237, 38.694540241387237, 5.4800000000000004, 21.579999999999998, 6.6799999999999997, 6.6799999999999997, 6.6799999999999997, 6.6799999999999997, 28.210000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [7.2800000000000002, 8.6600000000000001, 8.6600000000000001, 8.6600000000000001, 6.7000000000000002, 0.14000000000000001, 8.0099999999999998, 3.3399999999999999, 7.2999999999999998, 18.07, 24.41, 2.7400000000000002, 2.4399999999999999, 1.8700000000000001, 7.2199999999999998, 7.5300000000000002, 6.3099999999999996, 17.510000000000002, 36.299999999999997, 18.899999999999999, 39.299999999999997, 16.120000000000001, 16.011391510758187, 3.8399999999999999, 31.52, 31.52, 18.48, 7.29, 9.8300000000000001, 26.82, 18.579999999999998, 2.8900000000000001, 1.3500000000000001, 1.3493485055502477, 1.3493485055502477, 1.3493485055502477, 1.0000000000000001e-05, 44.159999999999997, 58.560000000000002, 58.560000000000002, 18.73, 49.869999999999997, 62.700000000000003, 1.27, 36.770000000000003, 16.100000000000001, 19.73, 41.479999999999997, 4.2699999999999996, 19.030000000000001, 47.609999999999999, 16.609999999999999, 20.696757531337877, 20.696757531337877, 20.696757531337877, 15.34, 3.6099999999999999, 2.0899999999999999, 1.6200000000000001, 9.2300000000000004, 6.8300000000000001, 3.3599999999999999, 63.729999999999997, 28.030000000000001, 0.080000000000000002, 6.4900000000000002, 5.3399999999999999, 4.0099999999999998, 17.440000000000001, 17.344204919776534, 0.080000000000000002, 2, 44.159999999999997, 41.57, 44.149999999999999, 31.219999999999999, 20.109999999999999, 0.54000000000000004, 79.579999999999998, 3.0099999999999998, 60.079999999999998, 79.239999999999995, 58.560000000000002, 73.930000000000007, 57.524637570973717, 40.020000000000003, 49.700000000000003, 1.0000000000000001e-05, 1.95, 57.524637570973717, 5.0800000000000001, 65.379999999999995, 48.890000000000001, 57.524637570973717, 1.3500000000000001, 2.1499999999999999, 48.509999999999998, 57.524637570973717, 57.524637570973717, 57.524637570973717, 1.0000000000000001e-05, 57.524637570973717, 57.524637570973717, 57.524637570973717, 0.02, 57.524637570973717, 57.524637570973717, 57.524637570973717, 57.524637570973717, 57.524637570973717, 0.87, 50.659999999999997, 47.960000000000001, 89.519999999999996, 33.880000000000003, 91.670000000000002, 1.3999999999999999, 2.4300000000000002, 0.73999999999999999, 2.1000000000000001, 7.0300000000000002, 1.6899999999999999, 6.9699999999999998, 0.11, 22.780000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 0.01, 6.4800000000000004, 0.57999999999999996, 72.280000000000001, 20.129999999999999, 87.540000000000006, 82.329999999999998, 83.819999999999993, 14.18, 2.6099999999999999, 38.770000000000003, 41.934758778307327, 9.8900000000000006, 84.010000000000005, 97.420000000000002, 94.730000000000004, 90.760000000000005, 80.689999999999998, 94.109999999999999, 61.43, 93.670000000000002, 77.920000000000002, 68.379999999999995, 84.890000000000001, 86.310000000000002, 87.700000000000003, 83.170000000000002, 80.290000000000006, 88.680000000000007, 40.32, 93.299999999999997, 81.560000000000002, 89.25, 59.200000000000003, 80.468019435418739, 96.010000000000005, 77.219999999999999, 88.109999999999999, 90.959999999999994, 63.109999999999999, 87.760000000000005, 74.689999999999998, 34.539999999999999, 55.310000000000002, 33, 61.710000000000001, 85.25, 88.530000000000001, 17.649999999999999, 66.560000000000002, 7.0999999999999996, 33.090000000000003, 80.468019435418739, 65.739999999999995, 23.879999999999999, 80.468019435418739, 47.939999999999998, 0.93999999999999995, 80.468019435418739, 46.130000000000003, 10.31, 9.6400000000000006, 32.259999999999998, 28.940000000000001, 14.23, 41.32, 38.350000000000001, 16.16, 65.239999999999995, 38.924325209072336, 25.07, 19.440000000000001, 81.109999999999999, 51.369999999999997, 34.079999999999998, 68.810000000000002, 52.759999999999998, 41.729999999999997, 0.56000000000000005, 22.77, 5.4299999999999997, 0.54000000000000004, 34.869999999999997, 18.879999999999999, 38.924325209072336, 38.924325209072336, 1.71, 31.010000000000002, 6.3799999999999999, 38.924325209072336, 18.440000000000001, 38.924325209072336, 5.8099999999999996, 10.58, 38.924325209072336, 0.19, 1.0000000000000001e-05, 10.02, 0.48999999999999999, 38.924325209072336, 38.924325209072336, 38.924325209072336, 38.924325209072336, 38.924325209072336, 38.924325209072336, 38.924325209072336, 38.924325209072336, 38.924325209072336, 38.924325209072336, 38.924325209072336, 38.924325209072336, 38.924325209072336, 38.924325209072336, 5.8399999999999999, 21.260000000000002, 6.71, 6.7100000000000009, 6.7100000000000009, 6.7100000000000009, 26.789999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8.5899999999999999, 8.5199999999999996, 8.5199999999999996, 8.5199999999999996, 7.5099999999999998, 0.17000000000000001, 8.5099999999999998, 3.5, 8.4800000000000004, 22.329999999999998, 26.640000000000001, 3.1200000000000001, 2.8700000000000001, 2.0800000000000001, 7.1799999999999997, 7.8799999999999999, 6.5700000000000003, 17.460000000000001, 34, 17.219999999999999, 40.079999999999998, 15.26, 15.163428809245723, 4.2999999999999998, 31.25, 31.25, 17.390000000000001, 7.8600000000000003, 9.9600000000000009, 25.510000000000002, 17.359999999999999, 3.23, 1.55, 1.5492464947097573, 1.5492464947097573, 1.5492464947097573, 1.0000000000000001e-05, 43.159999999999997, 57.020000000000003, 57.019999999999996, 18.07, 50.840000000000003, 64.189999999999998, 1.75, 31.620000000000001, 15.33, 18.120000000000001, 37.219999999999999, 4.9800000000000004, 19.800000000000001, 44.829999999999998, 17.57, 19.450623944421817, 19.450623944421817, 19.450623944421817, 14.23, 3.48, 2.1299999999999999, 0.84999999999999998, 8.9600000000000009, 7.2000000000000002, 2.8599999999999999, 61.57, 27.760000000000002, 0.089999999999999997, 7.6500000000000004, 4.4800000000000004, 4.4299999999999997, 16.390000000000001, 16.299856837503111, 0.070000000000000007, 2.4900000000000002, 43.159999999999997, 40.07, 44.25, 33.170000000000002, 20.530000000000001, 0.52000000000000002, 81.319999999999993, 3.1299999999999999, 62.18, 78.010000000000005, 58.859999999999999, 69.810000000000002, 58.079519411097294, 39.07, 48.93, 1.0000000000000001e-05, 1.6299999999999999, 58.079519411097294, 4.5199999999999996, 64.659999999999997, 45.960000000000001, 58.079519411097294, 1.3700000000000001, 1.8600000000000001, 48.119999999999997, 58.079519411097294, 58.079519411097294, 58.079519411097294, 1.0000000000000001e-05, 58.079519411097294, 58.079519411097294, 0.02, 58.079519411097294, 58.079519411097294, 58.079519411097294, 58.079519411097294, 58.079519411097294, 58.079519411097294, 0.94999999999999996, 48.689999999999998, 47.039999999999999, 91.25, 31.890000000000001, 91.920000000000002, 1.3999999999999999, 2.5600000000000001, 0.76000000000000001, 1.8200000000000001, 6.8600000000000003, 2.2799999999999998, 0.12, 7.04, 18.079999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.10000000000000001, 1.0000000000000001e-05, 0.01, 6.2199999999999998, 0.40999999999999998, 69.25, 18.120000000000001, 87.430000000000007, 81.650000000000006, 83.739999999999995, 14.32, 2.79, 39.119999999999997, 41.087488338158046, 9.4199999999999999, 85.930000000000007, 97.329999999999998, 94.540000000000006, 90.629999999999995, 79.260000000000005, 93.819999999999993, 58.560000000000002, 93.060000000000002, 74.790000000000006, 62.130000000000003, 85.900000000000006, 85.510000000000005, 85.879999999999995, 82.799999999999997, 78.670000000000002, 89.430000000000007, 43.350000000000001, 93.469999999999999, 81.060000000000002, 90.590000000000003, 57.310000000000002, 79.626151492745223, 95.310000000000002, 79.650000000000006, 84.370000000000005, 90.799999999999997, 69.420000000000002, 87.590000000000003, 77.290000000000006, 35.719999999999999, 55.460000000000001, 31.399999999999999, 60.210000000000001, 86.159999999999997, 88.290000000000006, 16.41, 71.420000000000002, 6.9900000000000002, 33.009999999999998, 79.626151492745223, 61.810000000000002, 21.18, 79.626151492745223, 47.329999999999998, 0.94999999999999996, 79.626151492745223, 46.670000000000002, 9.8200000000000003, 9.1799999999999997, 32.909999999999997, 29.579999999999998, 15.6, 37.600000000000001, 38.700000000000003, 14.19, 64.730000000000004, 38.629065807337582, 23.699999999999999, 17.98, 81.370000000000005, 52.219999999999999, 34.759999999999998, 66.459999999999994, 53.289999999999999, 42.399999999999999, 0.47999999999999998, 22.09, 4.8200000000000003, 0.55000000000000004, 37.020000000000003, 22.09, 38.629065807337582, 38.629065807337582, 2.0099999999999998, 36.799999999999997, 6.5899999999999999, 38.629065807337582, 16.940000000000001, 38.629065807337582, 5.29, 10.369999999999999, 38.629065807337582, 0.19, 1.0000000000000001e-05, 9.8200000000000003, 0.44, 38.629065807337582, 38.629065807337582, 38.629065807337582, 38.629065807337582, 38.629065807337582, 38.629065807337582, 38.629065807337582, 38.629065807337582, 38.629065807337582, 38.629065807337582, 38.629065807337582, 38.629065807337582, 38.629065807337582, 38.629065807337582, 6.4000000000000004, 21.18, 6.8499999999999996, 6.8500000000000005, 6.8500000000000005, 6.8500000000000005, 27],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [10.470000000000001, 9.4600000000000009, 9.4600000000000009, 9.4600000000000009, 8.7300000000000004, 0.20000000000000001, 8.0500000000000007, 4.3200000000000003, 9.0099999999999998, 23.149999999999999, 28.989999999999998, 3.6800000000000002, 3.3999999999999999, 3.6400000000000001, 7.2800000000000002, 8.3200000000000003, 8.2300000000000004, 17.059999999999999, 33.079999999999998, 18.649999999999999, 41.75, 17.690000000000001, 17.574538666989973, 4.54, 31.800000000000001, 31.800000000000004, 18.16, 9, 8.8499999999999996, 22.66, 18.350000000000001, 3.5499999999999998, 1.8400000000000001, 1.8391001007636711, 1.8391001007636711, 1.8391001007636711, 1.0000000000000001e-05, 41.539999999999999, 57.359999999999999, 57.359999999999999, 19.309999999999999, 53.359999999999999, 67.5, 2.3900000000000001, 32, 14.029999999999999, 14.84, 36.219999999999999, 4.4400000000000004, 15.710000000000001, 42.270000000000003, 16.559999999999999, 17.667669403413917, 17.667669403413917, 17.667669403413917, 12.48, 3.6699999999999999, 1.8300000000000001, 0.90000000000000002, 10.9, 7.2800000000000002, 3.7799999999999998, 53.789999999999999, 24.489999999999998, 0.070000000000000007, 7.0199999999999996, 4.7000000000000002, 4.2800000000000002, 14.880000000000001, 14.798365188480204, 0.10000000000000001, 3.4199999999999999, 41.539999999999999, 40.009999999999998, 41.899999999999999, 32.259999999999998, 21.609999999999999, 0.5, 80.5, 2.8500000000000001, 60.200000000000003, 74.790000000000006, 57.130000000000003, 70.670000000000002, 56.749390230163222, 36.039999999999999, 47.420000000000002, 1.0000000000000001e-05, 1.52, 56.749390230163222, 5.8200000000000003, 42.399999999999999, 43.18, 56.749390230163222, 1.2, 2.1699999999999999, 48.420000000000002, 56.749390230163222, 56.749390230163222, 56.749390230163222, 1.0000000000000001e-05, 56.749390230163222, 56.749390230163222, 0.02, 56.749390230163222, 56.749390230163222, 56.749390230163222, 56.749390230163222, 56.749390230163222, 56.749390230163222, 1.03, 47.189999999999998, 44.850000000000001, 91.310000000000002, 28.780000000000001, 92.069999999999993, 1.3, 2, 0.76000000000000001, 1.54, 6.7199999999999998, 2.3199999999999998, 0.11, 7.9400000000000004, 20.48, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.070000000000000007, 1.0000000000000001e-05, 0.01, 6.0499999999999998, 0.40999999999999998, 65.620000000000005, 16.449999999999999, 86.170000000000002, 78.870000000000005, 82.379999999999995, 14.32, 2.9500000000000002, 35.630000000000003, 39.738728171795991, 8.8599999999999994, 87.280000000000001, 97.170000000000002, 94.159999999999997, 90.810000000000002, 79.780000000000001, 93.739999999999995, 54.530000000000001, 87.530000000000001, 76.329999999999998, 58.490000000000002, 86.230000000000004, 80.819999999999993, 84.299999999999997, 82.209999999999994, 77.980000000000004, 90.319999999999993, 40.009999999999998, 93.019999999999996, 80.359999999999999, 90.310000000000002, 54.490000000000002, 78.551546250953692, 95.290000000000006, 79.900000000000006, 86.349999999999994, 90.879999999999995, 60.340000000000003, 89.829999999999998, 79.099999999999994, 36.520000000000003, 55.329999999999998, 29.030000000000001, 57.270000000000003, 87.349999999999994, 87.900000000000006, 15.69, 71.349999999999994, 8.4900000000000002, 32.520000000000003, 78.551546250953692, 74.359999999999999, 21.039999999999999, 78.551546250953692, 47.689999999999998, 1.01, 78.551546250953692, 47.189999999999998, 9.4600000000000009, 7.7199999999999998, 30.460000000000001, 30.300000000000001, 16.640000000000001, 43.200000000000003, 36.049999999999997, 15.880000000000001, 63.280000000000001, 37.46662403280574, 22.07, 17.890000000000001, 79.260000000000005, 50.57, 28.239999999999998, 68.439999999999998, 52.609999999999999, 41.18, 0.48999999999999999, 22.789999999999999, 5.3499999999999996, 0.45000000000000001, 33.310000000000002, 24.59, 37.46662403280574, 37.46662403280574, 3.54, 32.310000000000002, 6.3600000000000003, 37.46662403280574, 16.260000000000002, 37.46662403280574, 4.71, 9.8900000000000006, 37.46662403280574, 0.19, 1.0000000000000001e-05, 7.75, 0.5, 37.46662403280574, 37.46662403280574, 37.46662403280574, 37.46662403280574, 37.46662403280574, 37.46662403280574, 37.46662403280574, 37.46662403280574, 37.46662403280574, 37.46662403280574, 37.46662403280574, 37.46662403280574, 37.46662403280574, 37.46662403280574, 6.2999999999999998, 21.260000000000002, 6.9500000000000002, 6.9500000000000011, 6.9500000000000011, 6.9500000000000011, 27.050000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [10.25, 10.6, 10.6, 10.6, 10.82, 0.22, 8.3200000000000003, 5.4500000000000002, 9.7400000000000002, 23.190000000000001, 29.68, 3.9399999999999999, 3.9500000000000002, 3.96, 8.0099999999999998, 8.9900000000000002, 7.6299999999999999, 18.34, 33.710000000000001, 20.449999999999999, 43.200000000000003, 18.539999999999999, 18.417103254538656, 4.5099999999999998, 34.609999999999999, 34.609999999999999, 20.399999999999999, 8.9600000000000009, 9.9399999999999995, 24.140000000000001, 17.629999999999999, 4.1900000000000004, 2.3999999999999999, 2.3988196271098552, 2.3988196271098552, 2.3988196271098552, 1.0000000000000001e-05, 39.380000000000003, 58.450000000000003, 58.449999999999996, 19.550000000000001, 52.960000000000001, 73.920000000000002, 2.7200000000000002, 35.789999999999999, 15.5, 14.279999999999999, 36.299999999999997, 4.9299999999999997, 15.609999999999999, 38.759999999999998, 17.02, 18.150436205521174, 18.150436205521174, 18.150436205521174, 12.529999999999999, 3.3100000000000001, 1.1499999999999999, 0.80000000000000004, 10.199999999999999, 7.0800000000000001, 3.0800000000000001, 54.609999999999999, 0.080000000000000002, 22.039999999999999, 6.4000000000000004, 4.6600000000000001, 4.4400000000000004, 14.140000000000001, 14.062978384998427, 0.13, 4.6600000000000001, 39.380000000000003, 41.119999999999997, 39.259999999999998, 33.729999999999997, 22.629999999999999, 0.53000000000000003, 85.620000000000005, 3.04, 61.579999999999998, 74.129999999999995, 56.93, 69.269999999999996, 58.709277740448854, 42.130000000000003, 46.689999999999998, 1.0000000000000001e-05, 1.53, 58.709277740448854, 7.7800000000000002, 47.68, 44.869999999999997, 58.709277740448854, 1.4399999999999999, 1.99, 49.740000000000002, 58.709277740448854, 58.709277740448854, 58.709277740448854, 1.0000000000000001e-05, 58.709277740448854, 58.709277740448854, 0.20000000000000001, 58.709277740448854, 58.709277740448854, 58.709277740448854, 58.709277740448854, 58.709277740448854, 58.709277740448854, 1.0600000000000001, 45.200000000000003, 46.630000000000003, 90.469999999999999, 21.170000000000002, 91.810000000000002, 0.69999999999999996, 1.1499999999999999, 0.73999999999999999, 1.25, 8.9000000000000004, 2.7400000000000002, 0.11, 5.4000000000000004, 20.100000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.11, 1.0000000000000001e-05, 0.01, 5.8799999999999999, 0.29999999999999999, 63.490000000000002, 14.6, 86.060000000000002, 75, 79.849999999999994, 14.609999999999999, 2.7799999999999998, 35.799999999999997, 38.636980108881353, 9.9000000000000004, 86.25, 96.969999999999999, 94.090000000000003, 90.329999999999998, 79.870000000000005, 93.730000000000004, 57.340000000000003, 88.109999999999999, 54.880000000000003, 74.209999999999994, 86.390000000000001, 80.819999999999993, 84.430000000000007, 80.390000000000001, 89.359999999999999, 81.569999999999993, 39.810000000000002, 93.370000000000005, 80.150000000000006, 90.629999999999995, 54.759999999999998, 78.399177416382614, 95.150000000000006, 76.510000000000005, 86.040000000000006, 93.640000000000001, 56.859999999999999, 91.840000000000003, 81.359999999999999, 32.490000000000002, 54.990000000000002, 27.859999999999999, 56.280000000000001, 87.319999999999993, 88.420000000000002, 12.73, 72.680000000000007, 7.2300000000000004, 33.140000000000001, 78.399177416382614, 73.439999999999998, 23.809999999999999, 78.399177416382614, 46.039999999999999, 0.91000000000000003, 78.399177416382614, 47.039999999999999, 9.7699999999999996, 7.6500000000000004, 30.829999999999998, 29.850000000000001, 16.350000000000001, 44.090000000000003, 33.710000000000001, 15.32, 66.510000000000005, 37.311309488293588, 21.300000000000001, 17.68, 79.640000000000001, 49.969999999999999, 31.5, 65.810000000000002, 53.770000000000003, 40.700000000000003, 0.51000000000000001, 23.359999999999999, 5.9900000000000002, 0.46000000000000002, 32.740000000000002, 26.190000000000001, 37.311309488293588, 37.311309488293588, 1.97, 34.060000000000002, 5.7000000000000002, 37.311309488293588, 15.529999999999999, 37.311309488293588, 5.3300000000000001, 10.69, 37.311309488293588, 0.19, 1.0000000000000001e-05, 7.96, 0.46000000000000002, 37.311309488293588, 37.311309488293588, 37.311309488293588, 37.311309488293588, 37.311309488293588, 37.311309488293588, 37.311309488293588, 37.311309488293588, 37.311309488293588, 37.311309488293588, 37.311309488293588, 37.311309488293588, 37.311309488293588, 37.311309488293588, 6.8499999999999996, 21.300000000000001, 6.79, 6.7899999999999991, 6.7899999999999991, 6.7899999999999991, 26.129999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [10.720000000000001, 11.32, 11.32, 11.32, 12.539999999999999, 0.26000000000000001, 9.1799999999999997, 6.29, 12.210000000000001, 24.899999999999999, 31.309999999999999, 4.3799999999999999, 4.8700000000000001, 3.73, 8.8399999999999999, 10.25, 10, 20.09, 38.399999999999999, 24.210000000000001, 45.710000000000001, 19.329999999999998, 19.2055681451487, 5.1200000000000001, 32.460000000000001, 32.460000000000001, 22.149999999999999, 12.289999999999999, 11.619999999999999, 27.16, 19.57, 5.2999999999999998, 2.9199999999999999, 2.9185554909454692, 2.9185554909454692, 2.9185554909454692, 1.0000000000000001e-05, 37.409999999999997, 56.719999999999999, 56.720000000000006, 19.969999999999999, 55.149999999999999, 74.609999999999999, 2.96, 37.090000000000003, 20.68, 17.43, 36.719999999999999, 4.8399999999999999, 18.43, 49.159999999999997, 17.129999999999999, 21.40049675235511, 21.40049675235511, 21.40049675235511, 13.119999999999999, 3.6000000000000001, 1.3100000000000001, 1.25, 12.42, 7.3899999999999997, 3.27, 60.579999999999998, 0.080000000000000002, 24.73, 7.7999999999999998, 4.4299999999999997, 4.5099999999999998, 13.43, 13.356444454370651, 0.11, 2.9700000000000002, 37.409999999999997, 38.18, 36.969999999999999, 33.969999999999999, 22.829999999999998, 0.47999999999999998, 85.769999999999996, 2.27, 63.509999999999998, 68.040000000000006, 56.020000000000003, 66.450000000000003, 57.855660243253666, 41.619999999999997, 45.789999999999999, 1.0000000000000001e-05, 1.49, 57.855660243253666, 6.9500000000000002, 38.659999999999997, 43.280000000000001, 57.855660243253666, 1.1499999999999999, 1.8200000000000001, 50.82, 57.855660243253666, 57.855660243253666, 57.855660243253666, 1.0000000000000001e-05, 57.855660243253666, 57.855660243253666, 0.25, 57.855660243253666, 57.855660243253666, 57.855660243253666, 57.855660243253666, 57.855660243253666, 57.855660243253666, 1.21, 43.100000000000001, 46.43, 16.530000000000001, 88.930000000000007, 92.379999999999995, 0.78000000000000003, 1.21, 0.69999999999999996, 0.91000000000000003, 8.4600000000000009, 2.7799999999999998, 0.11, 4.3099999999999996, 16.539999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.070000000000000007, 1.0000000000000001e-05, 0.01, 5.6500000000000004, 0.31, 63.100000000000001, 14.25, 83.25, 78.689999999999998, 79.359999999999999, 16.07, 2.5099999999999998, 33.43, 38.822351022607243, 9.3699999999999992, 88.680000000000007, 97.019999999999996, 94.180000000000007, 90.930000000000007, 77.609999999999999, 93.870000000000005, 51.899999999999999, 52.409999999999997, 86.120000000000005, 73.709999999999994, 87.209999999999994, 79.219999999999999, 84.810000000000002, 80.010000000000005, 88.680000000000007, 82.579999999999998, 51.310000000000002, 93.629999999999995, 79.25, 90.540000000000006, 52.829999999999998, 77.697211996351541, 95.180000000000007, 63.380000000000003, 86.140000000000001, 93.909999999999997, 56.030000000000001, 91.810000000000002, 81.650000000000006, 33.359999999999999, 28.289999999999999, 53.979999999999997, 53.909999999999997, 87.939999999999998, 87.890000000000001, 12.779999999999999, 9.2400000000000002, 70.829999999999998, 34.380000000000003, 77.697211996351541, 68.530000000000001, 22.079999999999998, 77.697211996351541, 45.409999999999997, 0.82999999999999996, 77.697211996351541, 48.920000000000002, 9.1699999999999999, 8.5899999999999999, 31.530000000000001, 30.780000000000001, 16.210000000000001, 44.640000000000001, 32.920000000000002, 12.869999999999999, 65.269999999999996, 36.773654952997113, 20.620000000000001, 17.34, 80.329999999999998, 50.450000000000003, 32.200000000000003, 65.359999999999999, 54.560000000000002, 40.719999999999999, 0.52000000000000002, 20.370000000000001, 7.5, 0.48999999999999999, 31.629999999999999, 26.469999999999999, 36.773654952997113, 36.773654952997113, 1.53, 29.18, 6.5300000000000002, 36.773654952997113, 15.08, 36.773654952997113, 10.460000000000001, 4.0999999999999996, 36.773654952997113, 0.29999999999999999, 1.0000000000000001e-05, 7.4800000000000004, 0.42999999999999999, 36.773654952997113, 36.773654952997113, 36.773654952997113, 36.773654952997113, 36.773654952997113, 36.773654952997113, 36.773654952997113, 36.773654952997113, 36.773654952997113, 36.773654952997113, 36.773654952997113, 36.773654952997113, 36.773654952997113, 36.773654952997113, 7.3499999999999996, 21.940000000000001, 7.1500000000000004, 7.1500000000000004, 7.1500000000000004, 7.1500000000000004, 28.469999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [11.609999999999999, 11.99, 11.99, 11.99, 12.789999999999999, 1.22, 11.380000000000001, 6.5, 14.390000000000001, 27.829999999999998, 31.149999999999999, 3.8500000000000001, 6.25, 3.6800000000000002, 9.4900000000000002, 10.949999999999999, 10.279999999999999, 21.460000000000001, 33.07, 25.32, 44.700000000000003, 21.199999999999999, 21.045065214050609, 3.3799999999999999, 33.43, 33.43, 24.079999999999998, 13.460000000000001, 14.27, 29.75, 20.07, 5.29, 3.1299999999999999, 3.1284425165969285, 3.1284425165969285, 3.1284425165969285, 1.0000000000000001e-05, 36.159999999999997, 56.710000000000001, 56.709999999999994, 20.559999999999999, 52.310000000000002, 75.890000000000001, 2.8799999999999999, 36.990000000000002, 20.469999999999999, 19.57, 39.149999999999999, 20.010000000000002, 22.300000000000001, 49.090000000000003, 18.670000000000002, 24.397183507088709, 24.397183507088709, 24.397183507088709, 14.210000000000001, 3.3399999999999999, 1.3799999999999999, 1.3500000000000001, 13.609999999999999, 7.29, 4.4500000000000002, 61.829999999999998, 0.070000000000000007, 25.59, 9.3599999999999994, 4.46, 4.6600000000000001, 12.26, 12.194066170695434, 0.14999999999999999, 5.4900000000000002, 36.159999999999997, 35.960000000000001, 34.579999999999998, 32.600000000000001, 22.829999999999998, 0.46999999999999997, 84.930000000000007, 1.96, 61.850000000000001, 64.819999999999993, 55.25, 64.849999999999994, 56.48044109387272, 27.949999999999999, 45.07, 1.0000000000000001e-05, 1.3600000000000001, 56.48044109387272, 4.8499999999999996, 38.079999999999998, 41.280000000000001, 56.48044109387272, 50.240000000000002, 1.95, 1.01, 56.48044109387272, 56.48044109387272, 56.48044109387272, 1.0000000000000001e-05, 56.48044109387272, 56.48044109387272, 0.45000000000000001, 56.48044109387272, 56.48044109387272, 56.48044109387272, 56.48044109387272, 56.48044109387272, 56.48044109387272, 1.3200000000000001, 40.310000000000002, 47.399999999999999, 15.15, 87.290000000000006, 90.799999999999997, 0.90000000000000002, 1.6699999999999999, 0.78000000000000003, 1.3500000000000001, 8.5500000000000007, 2.9500000000000002, 0.11, 5.7000000000000002, 14.06, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.13, 1.0000000000000001e-05, 0.01, 5.3700000000000001, 0.26000000000000001, 61.310000000000002, 13.91, 80.670000000000002, 79.200000000000003, 79.230000000000004, 12.609999999999999, 2.3700000000000001, 34, 38.176566583973653, 9.6500000000000004, 86.459999999999994, 96.810000000000002, 94.109999999999999, 89.739999999999995, 76.109999999999999, 93.180000000000007, 51.909999999999997, 52.509999999999998, 84.890000000000001, 75.420000000000002, 86.730000000000004, 78.739999999999995, 82.799999999999997, 81.209999999999994, 88.590000000000003, 82.510000000000005, 49.549999999999997, 93.569999999999993, 75.709999999999994, 90.469999999999999, 47.189999999999998, 76.930535342179752, 92.579999999999998, 65.810000000000002, 84.890000000000001, 93.840000000000003, 54.799999999999997, 88.579999999999998, 80.900000000000006, 31.210000000000001, 29.41, 52.979999999999997, 56.600000000000001, 85.829999999999998, 87.810000000000002, 12.77, 5.7400000000000002, 72.390000000000001, 32.539999999999999, 76.930535342179752, 66.019999999999996, 21.219999999999999, 76.930535342179752, 38.200000000000003, 0.70999999999999996, 76.930535342179752, 46.810000000000002, 9.3599999999999994, 8.7899999999999991, 27.039999999999999, 29.629999999999999, 13.789999999999999, 53.289999999999999, 32.170000000000002, 11.789999999999999, 67.079999999999998, 36.70407759567366, 19.93, 16.91, 78.989999999999995, 53.630000000000003, 32.619999999999997, 63.609999999999999, 54.439999999999998, 40.390000000000001, 0.68999999999999995, 20.649999999999999, 8.9900000000000002, 0.38, 30.949999999999999, 22.100000000000001, 36.70407759567366, 36.70407759567366, 1.3, 32.93, 6.4100000000000001, 36.70407759567366, 13.220000000000001, 36.70407759567366, 10.529999999999999, 5.1299999999999999, 36.70407759567366, 5.46, 1.0000000000000001e-05, 10.279999999999999, 0.42999999999999999, 36.70407759567366, 36.70407759567366, 36.70407759567366, 36.70407759567366, 36.70407759567366, 36.70407759567366, 36.70407759567366, 36.70407759567366, 36.70407759567366, 36.70407759567366, 36.70407759567366, 36.70407759567366, 36.70407759567366, 36.70407759567366, 7.4400000000000004, 21.129999999999999, 8.1600000000000001, 8.1600000000000001, 8.1600000000000001, 8.1600000000000001, 29.370000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [12.539999999999999, 10.65, 10.65, 10.65, 11.9, 1.97, 11.380000000000001, 7.5999999999999996, 14.720000000000001, 27.219999999999999, 31.640000000000001, 4.6900000000000004, 6.7000000000000002, 3.7599999999999998, 10.44, 12.16, 10.359999999999999, 22.739999999999998, 35.539999999999999, 25.16, 45.43, 23.829999999999998, 23.667329421092109, 5, 35.140000000000001, 35.140000000000001, 21.100000000000001, 14.74, 13.220000000000001, 27.16, 19.140000000000001, 6.96, 3.9399999999999999, 3.9380290808395007, 3.9380290808395007, 3.9380290808395007, 1.0000000000000001e-05, 35.009999999999998, 56.710000000000001, 56.710000000000001, 20.57, 55.259999999999998, 77.120000000000005, 2.7400000000000002, 35.840000000000003, 17.440000000000001, 31.530000000000001, 14.16, 20.370000000000001, 18.620000000000001, 42.770000000000003, 18.550000000000001, 20.487590793957462, 20.487590793957462, 20.487590793957462, 12.68, 3.23, 1.3799999999999999, 0.94999999999999996, 18.27, 7.5199999999999996, 3.5499999999999998, 59.979999999999997, 0.070000000000000007, 25.949999999999999, 8.0099999999999998, 4.04, 4.8200000000000003, 11.34, 11.281205246388549, 0.47999999999999998, 6.3700000000000001, 35.009999999999998, 32.390000000000001, 36.329999999999998, 33.710000000000001, 22.960000000000001, 0.47999999999999998, 84.079999999999998, 2.1600000000000001, 56.420000000000002, 63.990000000000002, 54.729999999999997, 63.630000000000003, 55.071484108844253, 33.380000000000003, 43.609999999999999, 0.02, 1.3400000000000001, 55.071484108844253, 5.9299999999999997, 35.75, 40.259999999999998, 55.071484108844253, 50.57, 1.5700000000000001, 1.1399999999999999, 55.071484108844253, 55.071484108844253, 55.071484108844253, 1.0000000000000001e-05, 55.071484108844253, 55.071484108844253, 0.20999999999999999, 55.071484108844253, 55.071484108844253, 55.071484108844253, 55.071484108844253, 55.071484108844253, 55.071484108844253, 1.3500000000000001, 38.439999999999998, 46.759999999999998, 12.609999999999999, 86.950000000000003, 89.010000000000005, 0.92000000000000004, 1.1399999999999999, 0.93000000000000005, 1.6200000000000001, 9.0800000000000001, 3, 0.11, 6.1799999999999997, 15.42, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.14000000000000001, 1.0000000000000001e-05, 0.01, 5.4299999999999997, 0.17999999999999999, 63.659999999999997, 11.869999999999999, 77.230000000000004, 78.849999999999994, 80.680000000000007, 13.24, 3.1600000000000001, 33.280000000000001, 38.321119472261778, 9.2300000000000004, 84.629999999999995, 96.209999999999994, 93.549999999999997, 88.769999999999996, 76.790000000000006, 92.790000000000006, 50.090000000000003, 51.060000000000002, 86.209999999999994, 79.109999999999999, 84.510000000000005, 78.629999999999995, 81.980000000000004, 80.170000000000002, 87.280000000000001, 79.400000000000006, 47.969999999999999, 93.650000000000006, 74.75, 89.700000000000003, 76.518621643094306, 48.700000000000003, 91.659999999999997, 69.099999999999994, 81, 64.620000000000005, 93.329999999999998, 87.090000000000003, 77.069999999999993, 31.620000000000001, 28.41, 42.210000000000001, 56.240000000000002, 79.700000000000003, 87.870000000000005, 12.01, 5.5800000000000001, 72.519999999999996, 34.619999999999997, 76.518621643094306, 68.989999999999995, 20.780000000000001, 76.518621643094306, 42.380000000000003, 0.84999999999999998, 76.518621643094306, 45.259999999999998, 9.0700000000000003, 8.8300000000000001, 28.789999999999999, 28.739999999999998, 14.76, 49.670000000000002, 30.629999999999999, 13.15, 67.090000000000003, 35.960281471191315, 18.100000000000001, 16.75, 79.010000000000005, 50.920000000000002, 29.52, 53.299999999999997, 62.460000000000001, 38.020000000000003, 19.73, 0.66000000000000003, 9.8399999999999999, 0.38, 33.140000000000001, 21.16, 35.960281471191315, 35.960281471191315, 1.4399999999999999, 44.359999999999999, 3.1200000000000001, 35.960281471191315, 12.93, 35.960281471191315, 11.27, 6.0899999999999999, 35.960281471191315, 5.6600000000000001, 0.059999999999999998, 13.800000000000001, 0.41999999999999998, 35.960281471191315, 35.960281471191315, 35.960281471191315, 35.960281471191315, 35.960281471191315, 35.960281471191315, 35.960281471191315, 35.960281471191315, 35.960281471191315, 35.960281471191315, 35.960281471191315, 35.960281471191315, 35.960281471191315, 35.960281471191315, 8.3599999999999994, 21.170000000000002, 8.3200000000000003, 8.3200000000000003, 8.3200000000000003, 8.3200000000000003, 30.309999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.640000000000001, 12.35, 12.35, 12.35, 14.390000000000001, 2.6699999999999999, 14.17, 8.5999999999999996, 15.75, 25.52, 34.369999999999997, 4.9000000000000004, 7.6900000000000004, 4.1500000000000004, 10.91, 12.800000000000001, 10.470000000000001, 23.920000000000002, 40.369999999999997, 24.960000000000001, 48.289999999999999, 26.93, 26.739656913651981, 4.7000000000000002, 38.719999999999999, 38.719999999999999, 21.530000000000001, 16.469999999999999, 15.630000000000001, 29.399999999999999, 20.219999999999999, 6.9000000000000004, 4.1500000000000004, 4.1479143940075298, 4.1479143940075298, 4.1479143940075298, 1.0000000000000001e-05, 34.75, 57.68, 57.68, 21.879999999999999, 55.5, 77.709999999999994, 2.8599999999999999, 39.909999999999997, 19.469999999999999, 28.690000000000001, 15.279999999999999, 22.140000000000001, 18.27, 45.859999999999999, 18.760000000000002, 21.326427504853804, 21.326427504853804, 21.326427504853804, 13.029999999999999, 3.2400000000000002, 1.3300000000000001, 1.3400000000000001, 17.829999999999998, 7.2400000000000002, 2.8399999999999999, 55.799999999999997, 0.050000000000000003, 22.449999999999999, 6.5599999999999996, 2.9700000000000002, 4.6799999999999997, 11.529999999999999, 11.47019251226955, 0.17000000000000001, 11.130000000000001, 34.75, 30.09, 37.909999999999997, 34.060000000000002, 23.559999999999999, 0.51000000000000001, 78.459999999999994, 2.52, 52.859999999999999, 64.359999999999999, 55.450000000000003, 62.359999999999999, 52.419126694510062, 33.259999999999998, 43.82, 0.01, 1.2, 52.419126694510062, 6.1699999999999999, 38.979999999999997, 40.259999999999998, 52.419126694510062, 48.759999999999998, 1.4199999999999999, 1.1499999999999999, 52.419126694510062, 52.419126694510062, 52.419126694510062, 52.419126694510062, 1.0000000000000001e-05, 52.419126694510062, 0.27000000000000002, 52.419126694510062, 52.419126694510062, 52.419126694510062, 52.419126694510062, 52.419126694510062, 52.419126694510062, 1.6100000000000001, 37.359999999999999, 47.200000000000003, 15.359999999999999, 84.700000000000003, 87.319999999999993, 0.93000000000000005, 1.3, 1.0800000000000001, 2.02, 2.8799999999999999, 2.9100000000000001, 0.10000000000000001, 5.5599999999999996, 12.24, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 1.0000000000000001e-05, 0.01, 5.29, 0.17999999999999999, 63.740000000000002, 10.93, 72.709999999999994, 78.730000000000004, 76.079999999999998, 13, 2.6600000000000001, 31.84, 37.550945985375343, 8.4900000000000002, 84.569999999999993, 95.469999999999999, 93.239999999999995, 86.640000000000001, 78.25, 92.950000000000003, 46.5, 49.469999999999999, 85.310000000000002, 74.900000000000006, 83.310000000000002, 78.569999999999993, 78.790000000000006, 80.200000000000003, 84.629999999999995, 77.640000000000001, 49.600000000000001, 93.900000000000006, 76.359999999999999, 88.780000000000001, 75.646387142996346, 50.329999999999998, 91.469999999999999, 72.650000000000006, 79.060000000000002, 65.299999999999997, 93.069999999999993, 86.200000000000003, 78.420000000000002, 31.870000000000001, 27.550000000000001, 56.950000000000003, 40.530000000000001, 75.480000000000004, 87.810000000000002, 4.4199999999999999, 11.449999999999999, 71.409999999999997, 34.090000000000003, 75.646387142996346, 67.5, 24.260000000000002, 75.646387142996346, 40.149999999999999, 0.80000000000000004, 75.646387142996346, 43.490000000000002, 8.9700000000000006, 8.6099999999999994, 30.309999999999999, 28.800000000000001, 13.710000000000001, 47.850000000000001, 30.800000000000001, 13.199999999999999, 67.359999999999999, 36.289429453273542, 17.359999999999999, 16.48, 82.189999999999998, 49.390000000000001, 30.27, 53.270000000000003, 63.43, 38.060000000000002, 21.25, 0.53000000000000003, 12.16, 0.37, 28.989999999999998, 15.77, 36.289429453273542, 36.289429453273542, 1.4099999999999999, 50.07, 3.0099999999999998, 36.289429453273542, 12.390000000000001, 36.289429453273542, 11.369999999999999, 5.0199999999999996, 36.289429453273542, 6.8600000000000003, 0.11, 11.33, 0.44, 36.289429453273542, 36.289429453273542, 36.289429453273542, 36.289429453273542, 36.289429453273542, 36.289429453273542, 36.289429453273542, 36.289429453273542, 36.289429453273542, 36.289429453273542, 36.289429453273542, 36.289429453273542, 36.289429453273542, 36.289429453273542, 8.7300000000000004, 21.440000000000001, 8.3000000000000007, 8.3000000000000007, 8.3000000000000007, 8.3000000000000007, 28.760000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.630000000000001, 13.44, 13.44, 13.44, 16.32, 3.2400000000000002, 16.609999999999999, 9.7300000000000004, 16.920000000000002, 30.170000000000002, 34.579999999999998, 4.9400000000000004, 8.2599999999999998, 5.71, 11.41, 13.949999999999999, 10.68, 26.34, 39.600000000000001, 24.469999999999999, 47.270000000000003, 27.050000000000001, 26.85814660602227, 4.5300000000000002, 38.520000000000003, 38.520000000000003, 23.07, 17.18, 18.239999999999998, 32.82, 22.48, 7.71, 5.1799999999999997, 5.1773836271685392, 5.1773836271685392, 5.1773836271685392, 1.0000000000000001e-05, 34.859999999999999, 57.240000000000002, 57.240000000000002, 21.829999999999998, 53.530000000000001, 76.620000000000005, 3.4900000000000002, 41.140000000000001, 20.030000000000001, 32.409999999999997, 19.48, 23.82, 21.16, 49.340000000000003, 19.140000000000001, 23.48035979007588, 23.48035979007588, 23.48035979007588, 13.800000000000001, 3.6099999999999999, 1.1599999999999999, 1.1899999999999999, 24.050000000000001, 6.9699999999999998, 2.52, 55.119999999999997, 0.059999999999999998, 24.809999999999999, 6.7699999999999996, 3.0099999999999998, 5.0499999999999998, 11.470000000000001, 11.413521157528447, 0.26000000000000001, 16.609999999999999, 34.859999999999999, 30.629999999999999, 37.369999999999997, 33.049999999999997, 23.210000000000001, 0.56000000000000005, 75.959999999999994, 2.75, 56.880000000000003, 64.969999999999999, 58.270000000000003, 58.57, 52.113946382647406, 32.810000000000002, 41.829999999999998, 0.01, 1.26, 6.5599999999999996, 52.113946382647406, 40.920000000000002, 42.609999999999999, 52.113946382647406, 46.149999999999999, 1.4099999999999999, 1.5800000000000001, 52.113946382647406, 52.113946382647406, 52.113946382647406, 52.113946382647406, 1.0000000000000001e-05, 52.113946382647406, 0.69999999999999996, 52.113946382647406, 52.113946382647406, 52.113946382647406, 52.113946382647406, 52.113946382647406, 52.113946382647406, 1.9199999999999999, 36.960000000000001, 48.130000000000003, 16.859999999999999, 86.049999999999997, 86.700000000000003, 0.98999999999999999, 1.46, 0.76000000000000001, 3.0699999999999998, 3.27, 3.1200000000000001, 0.10000000000000001, 5.9199999999999999, 11.74, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 1.0000000000000001e-05, 0.01, 5.2800000000000002, 0.13, 64.299999999999997, 11.59, 78.700000000000003, 80.920000000000002, 72.620000000000005, 13.17, 2.3900000000000001, 35.020000000000003, 38.616732852889889, 7.9400000000000004, 82.189999999999998, 93.920000000000002, 92.420000000000002, 85.569999999999993, 76.549999999999997, 92.549999999999997, 46.189999999999998, 47.950000000000003, 83.939999999999998, 81.060000000000002, 72.159999999999997, 77.670000000000002, 77.090000000000003, 79.760000000000005, 84.560000000000002, 79.040000000000006, 42.689999999999998, 94.400000000000006, 78.530000000000001, 74.741907644350093, 88.469999999999999, 51.969999999999999, 91.109999999999999, 76.189999999999998, 74.620000000000005, 62.509999999999998, 95.079999999999998, 87.530000000000001, 79.650000000000006, 30.699999999999999, 26.359999999999999, 59.329999999999998, 45.579999999999998, 82.180000000000007, 87.709999999999994, 3.6800000000000002, 11.390000000000001, 69.700000000000003, 34.420000000000002, 74.741907644350093, 62.229999999999997, 25.940000000000001, 74.741907644350093, 42.770000000000003, 1.47, 74.741907644350093, 42.32, 9.2300000000000004, 8.9100000000000001, 30.23, 32.130000000000003, 15.289999999999999, 51.869999999999997, 28.350000000000001, 11.85, 67.189999999999998, 35.374895440509043, 16.02, 80.390000000000001, 16.550000000000001, 51.100000000000001, 27.539999999999999, 54.280000000000001, 62.549999999999997, 37.799999999999997, 20.710000000000001, 1.3799999999999999, 11.390000000000001, 0.35999999999999999, 26.850000000000001, 17.629999999999999, 35.374895440509043, 35.374895440509043, 1.4299999999999999, 40.990000000000002, 2.3700000000000001, 35.374895440509043, 12.1, 35.374895440509043, 10.93, 5.3700000000000001, 35.374895440509043, 6.8899999999999997, 0.11, 11.41, 1.47, 35.374895440509043, 35.374895440509043, 35.374895440509043, 35.374895440509043, 35.374895440509043, 35.374895440509043, 35.374895440509043, 35.374895440509043, 35.374895440509043, 35.374895440509043, 35.374895440509043, 35.374895440509043, 35.374895440509043, 35.374895440509043, 9.0800000000000001, 21.84, 9.2200000000000006, 9.2200000000000006, 9.2200000000000006, 9.2200000000000006, 28.289999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [14.02, 13.19, 13.19, 13.19, 17.129999999999999, 4.4800000000000004, 16.41, 9.4900000000000002, 17.329999999999998, 30.460000000000001, 35.670000000000002, 5.5300000000000002, 9.1300000000000008, 6.8499999999999996, 11.58, 14.85, 12.24, 27.73, 40.240000000000002, 25.289999999999999, 48.609999999999999, 30.190000000000001, 29.988780443025817, 6.54, 41.25, 41.25, 24.309999999999999, 15.720000000000001, 17.149999999999999, 33.600000000000001, 22.91, 8.7799999999999994, 6.5300000000000002, 6.5266849458957381, 6.5266849458957381, 6.5266849458957381, 1.0000000000000001e-05, 33.850000000000001, 56.32, 56.319999999999993, 22.199999999999999, 54.969999999999999, 76.950000000000003, 3.5, 38.560000000000002, 23.25, 30.690000000000001, 23.649999999999999, 24.309999999999999, 21.190000000000001, 45.950000000000003, 19.449999999999999, 25.186077595779157, 25.186077595779157, 25.186077595779157, 11.51, 3.2999999999999998, 1.3400000000000001, 1.3999999999999999, 21.23, 2.1200000000000001, 6.6900000000000004, 45.890000000000001, 0.059999999999999998, 26.600000000000001, 7.0800000000000001, 3.3399999999999999, 5.5800000000000001, 11.91, 11.848591103703441, 0.23000000000000001, 11.449999999999999, 33.850000000000001, 29.289999999999999, 36.689999999999998, 32.329999999999998, 24.41, 0.58999999999999997, 72.430000000000007, 3.0299999999999998, 54.229999999999997, 63.700000000000003, 56.82, 58.25, 50.123124431321273, 33.170000000000002, 45.890000000000001, 0.01, 1.2, 4.29, 50.123124431321273, 31.510000000000002, 41.240000000000002, 50.123124431321273, 48, 1.51, 1.7, 50.123124431321273, 50.123124431321273, 50.123124431321273, 50.123124431321273, 0.27000000000000002, 50.123124431321273, 0.65000000000000002, 50.123124431321273, 50.123124431321273, 50.123124431321273, 50.123124431321273, 50.123124431321273, 50.123124431321273, 2.8700000000000001, 35.340000000000003, 47.219999999999999, 18.93, 84.060000000000002, 86.540000000000006, 0.93000000000000005, 1, 0.76000000000000001, 2.6800000000000002, 3.1000000000000001, 3.7000000000000002, 0.14000000000000001, 4.2400000000000002, 10.76, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 1.0000000000000001e-05, 0.01, 5.3799999999999999, 0.070000000000000007, 63.770000000000003, 11.140000000000001, 78.079999999999998, 80.650000000000006, 72.519999999999996, 12.859999999999999, 2.3100000000000001, 30.920000000000002, 38.448950116241448, 7.7199999999999998, 80.640000000000001, 92.870000000000005, 91.159999999999997, 86.379999999999995, 74.310000000000002, 91.840000000000003, 47.689999999999998, 48.270000000000003, 82.060000000000002, 81.730000000000004, 71.909999999999997, 76.879999999999995, 76.840000000000003, 82.780000000000001, 83.769999999999996, 80.450000000000003, 42.530000000000001, 94.640000000000001, 78.569999999999993, 87.950000000000003, 74.676456686249423, 51.049999999999997, 91.310000000000002, 81.439999999999998, 73.040000000000006, 62.270000000000003, 94.819999999999993, 91.159999999999997, 80.480000000000004, 30.190000000000001, 25.379999999999999, 53.170000000000002, 42.390000000000001, 81.290000000000006, 87.280000000000001, 4.8799999999999999, 10.59, 71.670000000000002, 30.91, 74.676456686249423, 65.799999999999997, 26.109999999999999, 74.676456686249423, 38.390000000000001, 1.3700000000000001, 74.676456686249423, 41.710000000000001, 9.7599999999999998, 9.7899999999999991, 26.949999999999999, 32.219999999999999, 12.01, 56.700000000000003, 28.559999999999999, 12.18, 66.25, 35.000853688132729, 15.029999999999999, 77.769999999999996, 17.280000000000001, 52.159999999999997, 23.949999999999999, 62.539999999999999, 53.020000000000003, 37.619999999999997, 19.780000000000001, 1.6499999999999999, 11.880000000000001, 0.34999999999999998, 24.02, 12.85, 35.000853688132729, 35.000853688132729, 1.3999999999999999, 37.43, 2.3300000000000001, 35.000853688132729, 11.720000000000001, 35.000853688132729, 11.27, 35.000853688132729, 3.3199999999999998, 6.9299999999999997, 0.11, 9.8599999999999994, 0.42999999999999999, 35.000853688132729, 35.000853688132729, 35.000853688132729, 35.000853688132729, 35.000853688132729, 35.000853688132729, 35.000853688132729, 35.000853688132729, 35.000853688132729, 35.000853688132729, 35.000853688132729, 35.000853688132729, 35.000853688132729, 35.000853688132729, 9.2200000000000006, 21.829999999999998, 9.3300000000000001, 9.3300000000000001, 9.3300000000000001, 9.3300000000000001, 28.989999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [14.550000000000001, 13.34, 13.34, 13.34, 16.57, 5.9800000000000004, 17.469999999999999, 10.41, 16.300000000000001, 27.210000000000001, 34.82, 5.75, 9.4199999999999999, 9.0899999999999999, 11.869999999999999, 14.84, 13.41, 28.960000000000001, 38.100000000000001, 28.170000000000002, 51.909999999999997, 32.530000000000001, 32.31622174299558, 7.4699999999999998, 43.229999999999997, 43.229999999999997, 23.670000000000002, 15.6, 17.850000000000001, 33.090000000000003, 21.379999999999999, 9.5199999999999996, 7.71, 7.7060718290135917, 7.7060718290135917, 7.7060718290135917, 1.0000000000000001e-05, 33.399999999999999, 57.280000000000001, 57.279999999999994, 23.940000000000001, 55.530000000000001, 77.760000000000005, 4.1500000000000004, 38.490000000000002, 21.239999999999998, 27.539999999999999, 25.25, 24.73, 23.91, 42.960000000000001, 19.32, 24.297784029041896, 24.297784029041896, 24.297784029041896, 13.34, 3.2000000000000002, 1.72, 1.71, 23.309999999999999, 2.3300000000000001, 6.8200000000000003, 48.109999999999999, 0.059999999999999998, 23.510000000000002, 3.5499999999999998, 10.74, 6.1600000000000001, 12.18, 12.113922330126469, 0.20000000000000001, 5.4100000000000001, 33.399999999999999, 26.579999999999998, 26.539999999999999, 30.75, 22.649999999999999, 0.65000000000000002, 70.430000000000007, 3.4100000000000001, 51.270000000000003, 60.630000000000003, 55.149999999999999, 53.270000000000003, 48.252159457076921, 32.740000000000002, 48.640000000000001, 1.4299999999999999, 0.01, 5.0899999999999999, 48.252159457076921, 35.619999999999997, 37.469999999999999, 48.252159457076921, 47.329999999999998, 1.71, 1.9399999999999999, 48.252159457076921, 48.252159457076921, 48.252159457076921, 0.37, 48.252159457076921, 48.252159457076921, 2.98, 48.252159457076921, 48.252159457076921, 48.252159457076921, 48.252159457076921, 48.252159457076921, 48.252159457076921, 2.7400000000000002, 31.120000000000001, 45.880000000000003, 17.530000000000001, 85.040000000000006, 86.680000000000007, 0.91000000000000003, 0.81999999999999995, 1.96, 0.57999999999999996, 3.1899999999999999, 0.13, 3.7400000000000002, 4.1699999999999999, 10.99, 1.0000000000000001e-05, 0.01, 0.050000000000000003, 1.0000000000000001e-05, 0.01, 5.2800000000000002, 61.909999999999997, 0.059999999999999998, 11.25, 78.879999999999995, 81.140000000000001, 72.659999999999997, 12.5, 3.0499999999999998, 28.199999999999999, 38.421095735852425, 7.7300000000000004, 82.180000000000007, 95.819999999999993, 91.459999999999994, 86.239999999999995, 71.959999999999994, 91.069999999999993, 44.020000000000003, 47.840000000000003, 80.939999999999998, 82.980000000000004, 64.510000000000005, 78.060000000000002, 74.549999999999997, 80.980000000000004, 83.090000000000003, 39.109999999999999, 81, 94.5, 76.230000000000004, 86.310000000000002, 49.939999999999998, 73.429960209699729, 91.180000000000007, 81.040000000000006, 74.030000000000001, 64.150000000000006, 91.930000000000007, 92.859999999999999, 81.189999999999998, 29.32, 48.950000000000003, 25.59, 44.939999999999998, 81.939999999999998, 87.150000000000006, 5.54, 11.49, 71.680000000000007, 28.239999999999998, 73.429960209699729, 64.060000000000002, 26.350000000000001, 73.429960209699729, 39.240000000000002, 1.3600000000000001, 73.429960209699729, 43.619999999999997, 9.1899999999999995, 9.4000000000000004, 25.059999999999999, 31.460000000000001, 15.33, 59.399999999999999, 27.43, 13.07, 63.289999999999999, 33.87013141672589, 14.220000000000001, 76.120000000000005, 14.880000000000001, 50.740000000000002, 21.030000000000001, 60.509999999999998, 50, 38.329999999999998, 21.899999999999999, 1.8600000000000001, 12.119999999999999, 0.37, 24.949999999999999, 11.59, 33.87013141672589, 1.45, 33.87013141672589, 30.32, 2.1299999999999999, 33.87013141672589, 11.52, 33.87013141672589, 11.07, 6.7300000000000004, 33.87013141672589, 4.2999999999999998, 0.35999999999999999, 8.6799999999999997, 0.55000000000000004, 33.87013141672589, 33.87013141672589, 33.87013141672589, 33.87013141672589, 33.87013141672589, 33.87013141672589, 33.87013141672589, 33.87013141672589, 33.87013141672589, 33.87013141672589, 33.87013141672589, 33.87013141672589, 33.87013141672589, 33.87013141672589, 9.0299999999999994, 21.829999999999998, 9.3200000000000003, 9.3200000000000003, 9.3200000000000003, 9.3200000000000003, 29.32],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [14.24, 14.25, 14.25, 14.25, 16.09, 9.2400000000000002, 16.41, 10.27, 16.710000000000001, 29, 34.630000000000003, 5.6200000000000001, 9.1999999999999993, 13.5, 11.34, 14.77, 13.09, 31.469999999999999, 38.479999999999997, 27.23, 50.890000000000001, 31.949999999999999, 31.730568061405378, 6.3200000000000003, 42.399999999999999, 42.399999999999999, 24.399999999999999, 15.34, 17.710000000000001, 31.829999999999998, 20.960000000000001, 8.6099999999999994, 7.6799999999999997, 7.6760622674746113, 7.6760622674746113, 7.6760622674746113, 1.0000000000000001e-05, 33.009999999999998, 58.369999999999997, 58.370000000000005, 24.100000000000001, 55.82, 80.769999999999996, 5.4800000000000004, 39.439999999999998, 20.91, 27.18, 23, 25.300000000000001, 21.370000000000001, 43.890000000000001, 19.300000000000001, 23.61504683055772, 23.61504683055772, 23.61504683055772, 13.23, 3.3599999999999999, 2.0699999999999998, 1.6100000000000001, 23.27, 1.9399999999999999, 6.7199999999999998, 43.670000000000002, 0.059999999999999998, 22.16, 3.3900000000000001, 13.15, 6.3799999999999999, 12.6, 12.531236716468959, 0.16, 5.3799999999999999, 33.009999999999998, 27.77, 26.969999999999999, 28.510000000000002, 22.43, 0.70999999999999996, 69.25, 4.4299999999999997, 45.130000000000003, 58, 54.560000000000002, 51.700000000000003, 46.581518821814306, 27.68, 48.700000000000003, 1.21, 0.01, 3.7000000000000002, 46.581518821814306, 33.149999999999999, 36.82, 46.581518821814306, 48.090000000000003, 1.8700000000000001, 2.0299999999999998, 46.581518821814306, 46.581518821814306, 46.581518821814306, 0.56999999999999995, 46.581518821814306, 46.581518821814306, 46.581518821814306, 7.2699999999999996, 46.581518821814306, 46.581518821814306, 46.581518821814306, 46.581518821814306, 46.581518821814306, 2.5600000000000001, 30.23, 43.689999999999998, 19.920000000000002, 79.200000000000003, 85.019999999999996, 1.04, 0.93999999999999995, 2.6400000000000001, 1.3200000000000001, 4.6699999999999999, 0.12, 3.9900000000000002, 3.96, 1.0000000000000001e-05, 12.32, 0.01, 0.059999999999999998, 1.0000000000000001e-05, 0.01, 5.0700000000000003, 58.850000000000001, 0.080000000000000002, 11.07, 80.25, 74.540000000000006, 72.719999999999999, 12.4, 2.8199999999999998, 31.66, 37.555852632870874, 7.9699999999999998, 82.019999999999996, 97.030000000000001, 90.370000000000005, 86.670000000000002, 71.069999999999993, 90.810000000000002, 45.219999999999999, 49.030000000000001, 78.329999999999998, 83.849999999999994, 64.040000000000006, 78.780000000000001, 74.140000000000001, 78.909999999999997, 83.069999999999993, 36.719999999999999, 82.069999999999993, 94.780000000000001, 75.290000000000006, 85.5, 45.420000000000002, 89.579999999999998, 73.124706019481806, 80.650000000000006, 73.609999999999999, 67.629999999999995, 92.780000000000001, 92.109999999999999, 81.400000000000006, 29.210000000000001, 48.619999999999997, 26.129999999999999, 43.549999999999997, 80.939999999999998, 86.769999999999996, 4.7800000000000002, 10.33, 69.609999999999999, 25.059999999999999, 73.124706019481806, 60.399999999999999, 26.309999999999999, 73.124706019481806, 38.060000000000002, 1.21, 73.124706019481806, 45.460000000000001, 9.2200000000000006, 9.3800000000000008, 24.550000000000001, 30.600000000000001, 14.51, 60.32, 27.199999999999999, 14.75, 63.240000000000002, 34.068634574857285, 13.619999999999999, 76.129999999999995, 15.31, 52.659999999999997, 62.490000000000002, 49.539999999999999, 20.710000000000001, 34.109999999999999, 22.100000000000001, 1.8899999999999999, 11.130000000000001, 0.42999999999999999, 21.34, 11.1, 34.068634574857285, 1.3300000000000001, 34.068634574857285, 33.270000000000003, 2.3999999999999999, 34.068634574857285, 11.17, 34.068634574857285, 11.4, 6.9900000000000002, 34.068634574857285, 4.0999999999999996, 0.45000000000000001, 10.74, 1.0900000000000001, 34.068634574857285, 34.068634574857285, 34.068634574857285, 34.068634574857285, 34.068634574857285, 34.068634574857285, 34.068634574857285, 34.068634574857285, 34.068634574857285, 34.068634574857285, 34.068634574857285, 34.068634574857285, 34.068634574857285, 34.068634574857285, 9.4600000000000009, 21.620000000000001, 9.3599999999999994, 9.3599999999999994, 9.3599999999999994, 9.3599999999999994, 30.09],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [15.220000000000001, 14.119999999999999, 14.119999999999999, 14.119999999999999, 16.43, 7.2699999999999996, 16.379999999999999, 10.94, 15.18, 24.420000000000002, 33.969999999999999, 6.3899999999999997, 9.6600000000000001, 15.32, 11.130000000000001, 14.460000000000001, 12.43, 33.780000000000001, 42.600000000000001, 27.52, 51.82, 35.020000000000003, 34.769312727659177, 5.9699999999999998, 44.479999999999997, 44.479999999999997, 23.350000000000001, 14.550000000000001, 17.109999999999999, 29.789999999999999, 19.710000000000001, 10.109999999999999, 8.8100000000000005, 8.8054352507033116, 8.8054352507033116, 8.8054352507033116, 1.0000000000000001e-05, 32.57, 59.520000000000003, 59.520000000000003, 24.989999999999998, 55.329999999999998, 80.680000000000007, 6.4800000000000004, 36.939999999999998, 20, 27.52, 18.489999999999998, 26.07, 19, 37.770000000000003, 19.02, 22.282984179267391, 22.282984179267391, 22.282984179267391, 11.4, 3.25, 2.0099999999999998, 1.75, 11.98, 1.9099999999999999, 7.2800000000000002, 44.229999999999997, 0.059999999999999998, 24.73, 3.1899999999999999, 12.56, 6.9199999999999999, 13.140000000000001, 13.067592524044397, 0.20000000000000001, 3.8700000000000001, 32.57, 24.879999999999999, 28.52, 27.690000000000001, 22.25, 0.69999999999999996, 59.920000000000002, 5.2199999999999998, 45.780000000000001, 56.32, 54.450000000000003, 50.579999999999998, 43.116228469427341, 28.550000000000001, 48.979999999999997, 1.25, 0.01, 5.0800000000000001, 43.116228469427341, 35.689999999999998, 35.789999999999999, 43.116228469427341, 42.659999999999997, 1.72, 1.96, 43.116228469427341, 43.116228469427341, 43.116228469427341, 0.56000000000000005, 43.116228469427341, 43.116228469427341, 43.116228469427341, 6.9800000000000004, 43.116228469427341, 43.116228469427341, 43.116228469427341, 43.116228469427341, 43.116228469427341, 2.8399999999999999, 28.010000000000002, 42.100000000000001, 19.210000000000001, 76.409999999999997, 83.629999999999995, 0.97999999999999998, 0.56999999999999995, 2.9399999999999999, 1.0700000000000001, 5.2599999999999998, 0.19, 3.8900000000000001, 3.9700000000000002, 0.01, 10.51, 0.02, 0.070000000000000007, 1.0000000000000001e-05, 0.01, 4.9299999999999997, 59.380000000000003, 0.14000000000000001, 10.449999999999999, 82.010000000000005, 71.450000000000003, 72.840000000000003, 11.82, 3, 26.539999999999999, 37.596743903220151, 8.0299999999999994, 82.319999999999993, 96.700000000000003, 90.200000000000003, 85.290000000000006, 71.030000000000001, 90.730000000000004, 56.25, 45.280000000000001, 79.049999999999997, 81.319999999999993, 62.539999999999999, 79.180000000000007, 71.129999999999995, 76.920000000000002, 81.890000000000001, 37.93, 94.900000000000006, 82.629999999999995, 71.959999999999994, 84.459999999999994, 45.380000000000003, 88.189999999999998, 72.963514321654387, 78.390000000000001, 74.579999999999998, 69.75, 93.560000000000002, 91.579999999999998, 81.640000000000001, 30.210000000000001, 48.020000000000003, 26.109999999999999, 39.619999999999997, 90.099999999999994, 86.75, 4.2400000000000002, 9.4199999999999999, 65.349999999999994, 24.350000000000001, 72.963514321654387, 56.32, 24.66, 72.963514321654387, 39.240000000000002, 1.24, 72.963514321654387, 45.329999999999998, 9.9900000000000002, 10.369999999999999, 24.100000000000001, 32.380000000000003, 14.31, 60.82, 27.59, 17.050000000000001, 64.989999999999995, 14.289999999999999, 34.492298334827282, 76.170000000000002, 16.870000000000001, 45.600000000000001, 60.119999999999997, 48.909999999999997, 24.989999999999998, 33.329999999999998, 23.600000000000001, 2.2599999999999998, 10.98, 0.41999999999999998, 22.120000000000001, 15.529999999999999, 34.492298334827282, 1.1499999999999999, 34.492298334827282, 37.240000000000002, 3.46, 34.492298334827282, 10.220000000000001, 34.492298334827282, 11.48, 6.7000000000000002, 34.492298334827282, 5.2800000000000002, 0.45000000000000001, 9.6699999999999999, 34.492298334827282, 0.63, 34.492298334827282, 34.492298334827282, 34.492298334827282, 34.492298334827282, 34.492298334827282, 34.492298334827282, 34.492298334827282, 34.492298334827282, 34.492298334827282, 34.492298334827282, 34.492298334827282, 34.492298334827282, 34.492298334827282, 9.9199999999999999, 22.350000000000001, 9.6500000000000004, 9.6500000000000004, 9.6500000000000004, 9.6500000000000004, 28.399999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [16.039999999999999, 15.210000000000001, 15.210000000000001, 15.210000000000001, 17.079999999999998, 7.5599999999999996, 17.859999999999999, 12.02, 16.899999999999999, 27.469999999999999, 34.079999999999998, 7.4400000000000004, 10.65, 16.050000000000001, 15.050000000000001, 14.720000000000001, 12.43, 33.729999999999997, 40.969999999999999, 28.59, 51.560000000000002, 34.560000000000002, 34.309574977663274, 5.8600000000000003, 44.299999999999997, 44.299999999999997, 23.030000000000001, 13.6, 19.59, 32.829999999999998, 20.629999999999999, 10.83, 10.09, 10.084711244261578, 10.084711244261578, 10.084711244261578, 1.0000000000000001e-05, 32.729999999999997, 59.740000000000002, 59.740000000000002, 24.199999999999999, 56.810000000000002, 81.260000000000005, 6.9199999999999999, 37.829999999999998, 21.050000000000001, 27.370000000000001, 35.359999999999999, 25.75, 20.870000000000001, 40.600000000000001, 18.579999999999998, 25.599157932252609, 25.599157932252609, 25.599157932252609, 11.83, 3.1800000000000002, 1.8799999999999999, 1.49, 13.19, 1.9299999999999999, 7.21, 41.579999999999998, 0.059999999999999998, 23.390000000000001, 3.2599999999999998, 11.130000000000001, 7.2599999999999998, 13.550000000000001, 13.47724907973547, 0.23000000000000001, 8.4299999999999997, 32.729999999999997, 22.050000000000001, 24.59, 27.530000000000001, 23.699999999999999, 0.78000000000000003, 59.850000000000001, 5.3099999999999996, 47.859999999999999, 58.149999999999999, 52.960000000000001, 50.210000000000001, 43.423763029748599, 25.800000000000001, 48.640000000000001, 1.1200000000000001, 0.01, 29.699999999999999, 4.6200000000000001, 43.423763029748599, 36.630000000000003, 43.423763029748599, 42.520000000000003, 2, 1.78, 43.423763029748599, 43.423763029748599, 43.423763029748599, 0.58999999999999997, 43.423763029748599, 43.423763029748599, 43.423763029748599, 6.5899999999999999, 43.423763029748599, 43.423763029748599, 43.423763029748599, 43.423763029748599, 43.423763029748599, 3.1800000000000002, 25.789999999999999, 43.359999999999999, 17.960000000000001, 74.290000000000006, 82.609999999999999, 1, 0.48999999999999999, 2.9100000000000001, 0.88, 7.1699999999999999, 0.32000000000000001, 3.8500000000000001, 4.75, 0.01, 12.73, 0.029999999999999999, 0.050000000000000003, 1.0000000000000001e-05, 0.01, 5.0300000000000002, 59.740000000000002, 0.19, 10.859999999999999, 81.969999999999999, 70.590000000000003, 73.129999999999995, 11.91, 2.98, 25.170000000000002, 37.944654469395253, 8.0700000000000003, 81.640000000000001, 96.379999999999995, 89.730000000000004, 85.290000000000006, 71.629999999999995, 91.469999999999999, 55.939999999999998, 42.130000000000003, 79.810000000000002, 83.760000000000005, 62.979999999999997, 78.569999999999993, 69.129999999999995, 73.189999999999998, 81.870000000000005, 36.009999999999998, 94.930000000000007, 80.430000000000007, 73.180000000000007, 82.819999999999993, 43.969999999999999, 85.650000000000006, 72.648644587208864, 76.739999999999995, 75.859999999999999, 70.510000000000005, 94.420000000000002, 91.420000000000002, 80.799999999999997, 30.850000000000001, 48.090000000000003, 25.109999999999999, 90.079999999999998, 40.219999999999999, 86.569999999999993, 5.9100000000000001, 9.1899999999999995, 65.719999999999999, 26.280000000000001, 72.648644587208864, 54.590000000000003, 23.129999999999999, 72.648644587208864, 40.590000000000003, 1.23, 72.648644587208864, 46.950000000000003, 10.16, 10.52, 25.460000000000001, 30.57, 14.57, 60.829999999999998, 27.890000000000001, 16.329999999999998, 64.019999999999996, 14.33, 34.508830659031567, 76.25, 15.949999999999999, 48.829999999999998, 59.240000000000002, 51.439999999999998, 23.210000000000001, 33.130000000000003, 24.440000000000001, 1.3600000000000001, 8.8800000000000008, 0.46000000000000002, 16.77, 18.32, 34.508830659031567, 1.2, 35.530000000000001, 34.508830659031567, 4.1500000000000004, 34.508830659031567, 10.220000000000001, 34.508830659031567, 10.69, 8.3100000000000005, 34.508830659031567, 4.9299999999999997, 0.69999999999999996, 8.1699999999999999, 34.508830659031567, 0.68000000000000005, 34.508830659031567, 34.508830659031567, 34.508830659031567, 34.508830659031567, 34.508830659031567, 34.508830659031567, 34.508830659031567, 34.508830659031567, 34.508830659031567, 34.508830659031567, 34.508830659031567, 34.508830659031567, 34.508830659031567, 10.119999999999999, 21.920000000000002, 9.5999999999999996, 9.5999999999999996, 9.5999999999999996, 9.5999999999999996, 28.93],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [17.07, 15.529999999999999, 15.529999999999999, 15.529999999999999, 17.27, 7.4000000000000004, 18.52, 11.970000000000001, 16.68, 28.190000000000001, 33.979999999999997, 8.6099999999999994, 10.199999999999999, 16.449999999999999, 15.619999999999999, 15.880000000000001, 17.640000000000001, 33.539999999999999, 41.479999999999997, 31.34, 52.869999999999997, 37.289999999999999, 37.008431392838006, 5.4000000000000004, 45.600000000000001, 45.600000000000001, 23.539999999999999, 13.640000000000001, 19.32, 31.600000000000001, 20.859999999999999, 12.33, 11.390000000000001, 11.383954454148931, 11.383954454148931, 11.383954454148931, 1.0000000000000001e-05, 33.270000000000003, 60.600000000000001, 60.599999999999994, 24.760000000000002, 56.130000000000003, 81.569999999999993, 7.4400000000000004, 40.109999999999999, 21.530000000000001, 24.690000000000001, 36.840000000000003, 22.039999999999999, 17.050000000000001, 38.740000000000002, 18.460000000000001, 24.686036509768044, 24.686036509768044, 24.686036509768044, 14.119999999999999, 3.2200000000000002, 1.8500000000000001, 1.5600000000000001, 11.31, 1.6200000000000001, 40.07, 7.8099999999999996, 0.059999999999999998, 28.309999999999999, 3.3199999999999998, 10.34, 7.7599999999999998, 14.33, 14.25243501756343, 0.23000000000000001, 8.4299999999999997, 33.270000000000003, 19.77, 20.649999999999999, 26.800000000000001, 23.949999999999999, 0.89000000000000001, 58.890000000000001, 5.5899999999999999, 46.130000000000003, 53.049999999999997, 53.119999999999997, 48.719999999999999, 42.181416216900338, 26.48, 48.359999999999999, 1.1100000000000001, 0.01, 31.629999999999999, 5.2300000000000004, 42.181416216900338, 34.210000000000001, 42.181416216900338, 42.590000000000003, 1.98, 1.77, 42.181416216900338, 42.181416216900338, 42.181416216900338, 0.85999999999999999, 42.181416216900338, 42.181416216900338, 42.181416216900338, 6.5099999999999998, 42.181416216900338, 42.181416216900338, 42.181416216900338, 42.181416216900338, 42.181416216900338, 3.23, 26.370000000000001, 45.880000000000003, 18.510000000000002, 77.180000000000007, 82.849999999999994, 1, 1.04, 3.0099999999999998, 0.98999999999999999, 8.4600000000000009, 0.67000000000000004, 4.4900000000000002, 5.1299999999999999, 13.859999999999999, 0.01, 0.059999999999999998, 0.059999999999999998, 1.0000000000000001e-05, 0.029999999999999999, 6.2300000000000004, 59.640000000000001, 0.16, 10.57, 80.739999999999995, 66.909999999999997, 72.780000000000001, 12.19, 3, 24.98, 37.599936424039043, 8.8399999999999999, 80.810000000000002, 96.290000000000006, 89.5, 83.540000000000006, 71.420000000000002, 91.620000000000005, 54.390000000000001, 42.600000000000001, 78.340000000000003, 82.519999999999996, 62.409999999999997, 78.790000000000006, 67.200000000000003, 72.099999999999994, 81.480000000000004, 36.890000000000001, 95.030000000000001, 81.519999999999996, 68.269999999999996, 81.799999999999997, 46.469999999999999, 84.840000000000003, 72.010253425560052, 76.200000000000003, 75.439999999999998, 69.969999999999999, 89.709999999999994, 91.260000000000005, 80.549999999999997, 30.23, 47.32, 25.739999999999998, 89.780000000000001, 39.469999999999999, 86.200000000000003, 8.1199999999999992, 8.9399999999999995, 65.469999999999999, 26.989999999999998, 72.010253425560052, 53, 22.41, 72.010253425560052, 38.619999999999997, 1.21, 72.010253425560052, 47.579999999999998, 10.27, 10.74, 25.27, 31.5, 15.77, 59.340000000000003, 27.140000000000001, 17.73, 62.82, 13.52, 33.756602115445766, 76.370000000000005, 14.890000000000001, 46.159999999999997, 60.090000000000003, 50.719999999999999, 19.379999999999999, 33.420000000000002, 18.91, 2.4199999999999999, 9.1999999999999993, 0.42999999999999999, 11.31, 14.84, 33.756602115445766, 1.1799999999999999, 30.43, 33.756602115445766, 33.756602115445766, 2.79, 10.02, 33.756602115445766, 10.369999999999999, 8.1799999999999997, 33.756602115445766, 5.3899999999999997, 0.68999999999999995, 7.9100000000000001, 33.756602115445766, 0.81000000000000005, 33.756602115445766, 33.756602115445766, 33.756602115445766, 33.756602115445766, 33.756602115445766, 33.756602115445766, 33.756602115445766, 33.756602115445766, 33.756602115445766, 33.756602115445766, 33.756602115445766, 33.756602115445766, 33.756602115445766, 10.42, 22.469999999999999, 10.06, 10.06, 10.06, 10.06, 27.93],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [18.600000000000001, 16.870000000000001, 16.870000000000001, 16.870000000000001, 18.690000000000001, 9.1799999999999997, 20.079999999999998, 15.02, 19.350000000000001, 31.210000000000001, 35.770000000000003, 10.789999999999999, 12.279999999999999, 20.789999999999999, 16.140000000000001, 16.969999999999999, 17.640000000000001, 31.699999999999999, 43.75, 40, 58.399999999999999, 39.700000000000003, 39.392917582076741, 5.3300000000000001, 47.490000000000002, 47.490000000000002, 24.059999999999999, 14.76, 21.079999999999998, 32.369999999999997, 22.399999999999999, 13.69, 13.5, 13.492724160216737, 13.492724160216737, 13.492724160216737, 1.0000000000000001e-05, 35.82, 61.289999999999999, 61.289999999999999, 26.370000000000001, 55.210000000000001, 82.790000000000006, 8.7200000000000006, 44.579999999999998, 26.010000000000002, 23.449999999999999, 37.710000000000001, 23.66, 20.260000000000002, 39.560000000000002, 21.859999999999999, 26.981449032100087, 26.981449032100087, 26.981449032100087, 13.720000000000001, 3.7200000000000002, 1.78, 1.03, 12.699999999999999, 1.23, 38.75, 8.3900000000000006, 0.059999999999999998, 30.039999999999999, 3.98, 8.3800000000000008, 8.4499999999999993, 14.81, 14.731528892673003, 0.27000000000000002, 11.02, 35.82, 22.010000000000002, 19.109999999999999, 29.059999999999999, 20.829999999999998, 0.92000000000000004, 59.75, 5.8399999999999999, 49.32, 51.409999999999997, 54.280000000000001, 49.909999999999997, 42.976933780735621, 31.789999999999999, 49.009999999999998, 1.28, 0.01, 26.030000000000001, 6.04, 42.976933780735621, 37.539999999999999, 42.976933780735621, 42.75, 2.0299999999999998, 1.8899999999999999, 42.976933780735621, 42.976933780735621, 42.976933780735621, 0.87, 42.976933780735621, 42.976933780735621, 42.976933780735621, 6.6699999999999999, 42.976933780735621, 42.976933780735621, 42.976933780735621, 42.976933780735621, 42.976933780735621, 3.6299999999999999, 27.960000000000001, 46.600000000000001, 17.579999999999998, 74.540000000000006, 88.390000000000001, 1.03, 1.0800000000000001, 3.5299999999999998, 1.0800000000000001, 11.039999999999999, 0.92000000000000004, 5.6100000000000003, 6.71, 15.02, 0.050000000000000003, 0.10000000000000001, 0.059999999999999998, 1.0000000000000001e-05, 0.059999999999999998, 6.5099999999999998, 62.130000000000003, 0.14999999999999999, 10.92, 81.909999999999997, 63.840000000000003, 73.549999999999997, 12.880000000000001, 3.1200000000000001, 23.780000000000001, 38.347455520604036, 9.7599999999999998, 82.510000000000005, 96.159999999999997, 89.519999999999996, 83.950000000000003, 72.5, 92.909999999999997, 61.020000000000003, 40.25, 80.909999999999997, 84.75, 63.340000000000003, 78.939999999999998, 67.510000000000005, 70.260000000000005, 81.840000000000003, 38.640000000000001, 95.519999999999996, 84.359999999999999, 65.769999999999996, 46.200000000000003, 81.700000000000003, 83.519999999999996, 72.969394009521878, 76.620000000000005, 75.069999999999993, 71.879999999999995, 92.959999999999994, 90.879999999999995, 80.900000000000006, 31.300000000000001, 49.740000000000002, 27.210000000000001, 90.120000000000005, 41.420000000000002, 87.219999999999999, 6.9699999999999998, 9.4100000000000001, 66.010000000000005, 31.91, 72.969394009521878, 48.289999999999999, 23.420000000000002, 72.969394009521878, 41.609999999999999, 1.3400000000000001, 72.969394009521878, 50.049999999999997, 12.33, 9.8399999999999999, 26.73, 31.309999999999999, 23.329999999999998, 61.090000000000003, 31.620000000000001, 20.100000000000001, 65.459999999999994, 16.859999999999999, 76.310000000000002, 36.699776918537388, 16.690000000000001, 50.090000000000003, 61.439999999999998, 52.130000000000003, 23.699999999999999, 36.43, 28.43, 2.46, 11.43, 0.46999999999999997, 12.039999999999999, 14.66, 1.4099999999999999, 36.699776918537388, 30.199999999999999, 36.699776918537388, 36.699776918537388, 4.5700000000000003, 9.9600000000000009, 36.699776918537388, 10.359999999999999, 8.6699999999999999, 36.699776918537388, 4.9000000000000004, 0.73999999999999999, 36.699776918537388, 8.3100000000000005, 0.94999999999999996, 36.699776918537388, 36.699776918537388, 36.699776918537388, 36.699776918537388, 36.699776918537388, 36.699776918537388, 36.699776918537388, 36.699776918537388, 36.699776918537388, 36.699776918537388, 36.699776918537388, 36.699776918537388, 36.699776918537388, 11.16, 23.850000000000001, 10.890000000000001, 10.890000000000001, 10.890000000000001, 10.890000000000001, 28.609999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Alternative and nuclear energy",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [18.600000000000001, 16.870000000000001, 16.870000000000001, 16.870000000000001, 18.690000000000001, 9.1799999999999997, 20.079999999999998, 15.02, 19.350000000000001, 31.210000000000001, 35.770000000000003, 10.789999999999999, 12.279999999999999, 20.789999999999999, 16.140000000000001, 16.969999999999999, 17.640000000000001, 31.699999999999999, 43.75, 40, 58.399999999999999, 39.700000000000003, 39.389765150807577, 5.3099999999999996, 47.490000000000002, 47.490000000000009, 24.059999999999999, 14.76, 21.079999999999998, 32.369999999999997, 22.399999999999999, 13.69, 13.5, 13.492580381327153, 13.492580381327153, 13.492580381327153, 1.0000000000000001e-05, 35.82, 61.289999999999999, 61.290000000000006, 26.370000000000001, 55.310000000000002, 82.790000000000006, 8.7200000000000006, 44.579999999999998, 26.010000000000002, 23.449999999999999, 37.710000000000001, 23.66, 20.260000000000002, 39.560000000000002, 20.59, 26.965032252290463, 26.965032252290463, 26.965032252290463, 13.720000000000001, 3.7200000000000002, 1.78, 1.03, 12.699999999999999, 1.23, 38.75, 8.3900000000000006, 0.059999999999999998, 30.039999999999999, 3.98, 8.3800000000000008, 8.4499999999999993, 14.81, 14.733508169491534, 0.27000000000000002, 13.539999999999999, 35.82, 22.010000000000002, 19.109999999999999, 29.059999999999999, 20.829999999999998, 0.92000000000000004, 59.75, 5.8399999999999999, 49.32, 51.409999999999997, 53.479999999999997, 50.009999999999998, 42.894834608494016, 29.800000000000001, 49.079999999999998, 1.04, 0.01, 22.73, 8.3000000000000007, 42.894834608494016, 37.57, 42.894834608494016, 42.799999999999997, 2.0299999999999998, 2.0600000000000001, 42.894834608494016, 42.894834608494016, 42.894834608494016, 0.88, 42.894834608494016, 42.894834608494016, 42.894834608494016, 6.6799999999999997, 42.894834608494016, 42.894834608494016, 42.894834608494016, 42.894834608494016, 42.894834608494016, 3.6299999999999999, 27.960000000000001, 46.600000000000001, 17.859999999999999, 74.540000000000006, 87.450000000000003, 1.03, 1.0800000000000001, 3.5299999999999998, 1.0800000000000001, 11.039999999999999, 0.92000000000000004, 5.6100000000000003, 6.71, 14.73, 0.050000000000000003, 0.10000000000000001, 0.059999999999999998, 1.0000000000000001e-05, 0.059999999999999998, 6.5099999999999998, 62.130000000000003, 0.14999999999999999, 10.92, 81.909999999999997, 63.759999999999998, 73.739999999999995, 12.880000000000001, 3.1200000000000001, 23.440000000000001, 38.614629515297672, 9.7599999999999998, 82.510000000000005, 96.159999999999997, 89.519999999999996, 83.950000000000003, 72.5, 93.030000000000001, 61.020000000000003, 40.25, 80.909999999999997, 83.629999999999995, 63.340000000000003, 78.939999999999998, 68, 75.170000000000002, 81.840000000000003, 95.370000000000005, 38.640000000000001, 84.359999999999999, 65.530000000000001, 46.200000000000003, 81.390000000000001, 83.25, 73.013138831123271, 76.620000000000005, 71.170000000000002, 71.879999999999995, 92.939999999999998, 90.450000000000003, 80.900000000000006, 31.300000000000001, 48.740000000000002, 27.210000000000001, 90.120000000000005, 32.289999999999999, 87.260000000000005, 5.9900000000000002, 9.4100000000000001, 68.769999999999996, 30.940000000000001, 73.013138831123271, 39.049999999999997, 23.239999999999998, 73.013138831123271, 40.75, 1.75, 73.013138831123271, 50.049999999999997, 12.33, 9.8399999999999999, 26.73, 31.309999999999999, 23.329999999999998, 61.090000000000003, 31.620000000000001, 20.100000000000001, 65.459999999999994, 16.859999999999999, 76.310000000000002, 16.690000000000001, 36.756398129800758, 50.090000000000003, 61.439999999999998, 52.130000000000003, 23.699999999999999, 36.43, 28.43, 2.46, 11.43, 0.46999999999999997, 11.970000000000001, 14.66, 1.27, 36.756398129800758, 31.350000000000001, 36.756398129800758, 36.756398129800758, 4.6799999999999997, 9.6600000000000001, 36.756398129800758, 9.9600000000000009, 8.5, 36.756398129800758, 5.0099999999999998, 0.71999999999999997, 36.756398129800758, 8.3399999999999999, 0.91000000000000003, 36.756398129800758, 36.756398129800758, 36.756398129800758, 36.756398129800758, 36.756398129800758, 36.756398129800758, 36.756398129800758, 36.756398129800758, 36.756398129800758, 36.756398129800758, 36.756398129800758, 36.756398129800758, 36.756398129800758, 11.16, 23.850000000000001, 10.890000000000001, 10.890000000000001, 10.890000000000001, 10.890000000000001, 28.609999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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

  
