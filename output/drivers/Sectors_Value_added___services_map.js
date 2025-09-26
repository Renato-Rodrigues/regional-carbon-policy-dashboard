(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Sectors_Value_added___services_map') 

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
    "b55c21c33ca4": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c21c33ca4",
  "attrs": {
    "b55c21c33ca4": {
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
        "title": "Value added in the services sector"
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
        "title": "Value added in the services sector",
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
      "z": [63.259999999999998, 68.060000000000002, 68.060000000000002, 68.060000000000002, 64.609999999999999, 62.079999999999998, 64.200000000000003, 67.359999999999999, 59.880000000000003, 62.170000000000002, 60.390000000000001, 66.590000000000003, 65.310000000000002, 72.810000000000002, 58.039999999999999, 56.640000000000001, 56.520000000000003, 57.32, 64.430000000000007, 59.710000000000001, 61.649999999999999, 62.240000000000002, 62.177825008834986, 55.200000000000003, 55.200000000000003, 55.200000000000003, 45.259999999999998, 55.659999999999997, 53.850000000000001, 56.289999999999999, 55.030000000000001, 54.859999999999999, 68.379999999999995, 68.379999999999995, 68.379999999999995, 68.379999999999995, 68.379999999999995, 44.700000000000003, 53.57, 53.57, 69.439999999999998, 54.659999999999997, 60.020000000000003, 49.289999999999999, 41.909999999999997, 46.759999999999998, 55.789999999999999, 51.43, 48.509999999999998, 52.380000000000003, 56.189999999999998, 74.939999999999998, 87.079999999999998, 59.280000000000001, 50.309883566786773, 53.140000000000001, 53.82, 51.82, 37.43, 37.709959501736598, 43.25, 31.920000000000002, 32.259999999999998, 37.759999999999998, 36.219999999999999, 45.700000000000003, 45.149999999999999, 68.719999999999999, 42.030000000000001, 42.282047752718789, 87.709999999999994, 85.049999999999997, 44.700000000000003, 41.07, 37.990000000000002, 52.310000000000002, 52.640000000000001, 64.349999999999994, 37.219999999999999, 46.710000000000001, 58.340000000000003, 38.200000000000003, 41.159999999999997, 41.93, 43.653194334385418, 53.600000000000001, 37.289999999999999, 34.630000000000003, 73.090000000000003, 43.653194334385418, 67.010000000000005, 61.659999999999997, 59.310000000000002, 43.653194334385418, 64.209999999999994, 48.920000000000002, 57.619999999999997, 43.653194334385418, 43.653194334385418, 43.653194334385418, 71.140000000000001, 43.653194334385418, 43.653194334385418, 43.653194334385418, 43.653194334385418, 43.653194334385418, 43.653194334385418, 43.653194334385418, 43.653194334385418, 43.653194334385418, 53.869999999999997, 52.399999999999999, 52.399999999999999, 44.130000000000003, 37.439999999999998, 35.340000000000003, 48.770000000000003, 21.800000000000001, 34.049999999999997, 47.079999999999998, 66.620000000000005, 64.510000000000005, 59.579999999999998, 48.950000000000003, 59.990000000000002, 43.670000000000002, 47.039999999999999, 53.460000000000001, 28.559999999999999, 40.560000000000002, 44.899999999999999, 34.439999999999998, 20.84, 45, 35.979999999999997, 37.259999999999998, 55.939999999999998, 40.399999999999999, 21.489999999999998, 43.359999999999999, 35.725112019399653, 62.579999999999998, 39.149999999999999, 41.990000000000002, 42.75, 45.990000000000002, 50.359999999999999, 46.539999999999999, 29.07, 47.240000000000002, 36.200000000000003, 49.899999999999999, 41.18, 45.899999999999999, 44.909999999999997, 74.359999999999999, 45.990000000000002, 49.719999999999999, 50.789999999999999, 45.796919306031562, 40.560000000000002, 43.68, 37.210000000000001, 33.829999999999998, 45.796919306031562, 93.359999999999999, 38.060000000000002, 29.309999999999999, 32.549999999999997, 23.800000000000001, 45.796919306031562, 49.240000000000002, 59.009999999999998, 49.700000000000003, 58.399999999999999, 38.82, 38.270000000000003, 57.369999999999997, 45.93, 15.69, 45.796919306031562, 80.560000000000002, 54.530000000000001, 71.329999999999998, 45.796919306031562, 71.540000000000006, 35.43, 45.796919306031562, 56.359999999999999, 60.420000000000002, 51.030000000000001, 55.68, 54.899999999999999, 41.520000000000003, 59.009999999999998, 53.960000000000001, 54.18, 54.840000000000003, 54.441053213754287, 51.289999999999999, 55.159999999999997, 55.100000000000001, 55.659999999999997, 59.229999999999997, 40.789999999999999, 52.060000000000002, 57.770000000000003, 50.240000000000002, 70.349999999999994, 65.620000000000005, 47.740000000000002, 35.399999999999999, 43.020000000000003, 54.441053213754287, 54.441053213754287, 81.469999999999999, 71.739999999999995, 61.270000000000003, 54.441053213754287, 69.709999999999994, 54.441053213754287, 66.469999999999999, 64.620000000000005, 54.441053213754287, 77.409999999999997, 74.480000000000004, 63.530000000000001, 88.920000000000002, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 74.599999999999994, 62.920000000000002, 64.310000000000002, 64.310000000000002, 64.310000000000002, 64.310000000000002, 63.899999999999999],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [63.259999999999998, 68.060000000000002, 68.060000000000002, 68.060000000000002, 64.609999999999999, 62.079999999999998, 64.200000000000003, 67.359999999999999, 59.880000000000003, 62.170000000000002, 60.390000000000001, 66.590000000000003, 65.310000000000002, 72.810000000000002, 58.039999999999999, 56.640000000000001, 56.520000000000003, 57.32, 64.430000000000007, 59.710000000000001, 61.649999999999999, 62.240000000000002, 62.177825008834986, 55.200000000000003, 55.200000000000003, 55.200000000000003, 45.259999999999998, 55.659999999999997, 53.850000000000001, 56.289999999999999, 55.030000000000001, 54.859999999999999, 68.379999999999995, 68.379999999999995, 68.379999999999995, 68.379999999999995, 68.379999999999995, 44.700000000000003, 53.57, 53.57, 69.439999999999998, 54.659999999999997, 60.020000000000003, 49.289999999999999, 41.909999999999997, 46.759999999999998, 55.789999999999999, 51.43, 48.509999999999998, 52.380000000000003, 56.189999999999998, 74.939999999999998, 87.079999999999998, 59.280000000000001, 50.309883566786773, 53.140000000000001, 53.82, 51.82, 37.43, 37.709959501736598, 43.25, 31.920000000000002, 32.259999999999998, 37.759999999999998, 36.219999999999999, 45.700000000000003, 45.149999999999999, 68.719999999999999, 42.030000000000001, 42.282047752718789, 87.709999999999994, 85.049999999999997, 44.700000000000003, 41.07, 37.990000000000002, 52.310000000000002, 52.640000000000001, 64.349999999999994, 37.219999999999999, 46.710000000000001, 58.340000000000003, 38.200000000000003, 41.159999999999997, 41.93, 43.653194334385418, 53.600000000000001, 37.289999999999999, 34.630000000000003, 73.090000000000003, 43.653194334385418, 67.010000000000005, 61.659999999999997, 59.310000000000002, 43.653194334385418, 64.209999999999994, 48.920000000000002, 57.619999999999997, 43.653194334385418, 43.653194334385418, 43.653194334385418, 71.140000000000001, 43.653194334385418, 43.653194334385418, 43.653194334385418, 43.653194334385418, 43.653194334385418, 43.653194334385418, 43.653194334385418, 43.653194334385418, 43.653194334385418, 53.869999999999997, 52.399999999999999, 52.399999999999999, 44.130000000000003, 37.439999999999998, 35.340000000000003, 48.770000000000003, 21.800000000000001, 34.049999999999997, 47.079999999999998, 66.620000000000005, 64.510000000000005, 59.579999999999998, 48.950000000000003, 59.990000000000002, 43.670000000000002, 47.039999999999999, 53.460000000000001, 28.559999999999999, 40.560000000000002, 44.899999999999999, 34.439999999999998, 20.84, 45, 35.979999999999997, 37.259999999999998, 55.939999999999998, 40.399999999999999, 21.489999999999998, 43.359999999999999, 35.725112019399653, 62.579999999999998, 39.149999999999999, 41.990000000000002, 42.75, 45.990000000000002, 50.359999999999999, 46.539999999999999, 29.07, 47.240000000000002, 36.200000000000003, 49.899999999999999, 41.18, 45.899999999999999, 44.909999999999997, 74.359999999999999, 45.990000000000002, 49.719999999999999, 50.789999999999999, 45.796919306031562, 40.560000000000002, 43.68, 37.210000000000001, 33.829999999999998, 45.796919306031562, 93.359999999999999, 38.060000000000002, 29.309999999999999, 32.549999999999997, 23.800000000000001, 45.796919306031562, 49.240000000000002, 59.009999999999998, 49.700000000000003, 58.399999999999999, 38.82, 38.270000000000003, 57.369999999999997, 45.93, 15.69, 45.796919306031562, 80.560000000000002, 54.530000000000001, 71.329999999999998, 45.796919306031562, 71.540000000000006, 35.43, 45.796919306031562, 56.359999999999999, 60.420000000000002, 51.030000000000001, 55.68, 54.899999999999999, 41.520000000000003, 59.009999999999998, 53.960000000000001, 54.18, 54.840000000000003, 54.441053213754287, 51.289999999999999, 55.159999999999997, 55.100000000000001, 55.659999999999997, 59.229999999999997, 40.789999999999999, 52.060000000000002, 57.770000000000003, 50.240000000000002, 70.349999999999994, 65.620000000000005, 47.740000000000002, 35.399999999999999, 43.020000000000003, 54.441053213754287, 54.441053213754287, 81.469999999999999, 71.739999999999995, 61.270000000000003, 54.441053213754287, 69.709999999999994, 54.441053213754287, 66.469999999999999, 64.620000000000005, 54.441053213754287, 77.409999999999997, 74.480000000000004, 63.530000000000001, 88.920000000000002, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 54.441053213754287, 74.599999999999994, 62.920000000000002, 64.310000000000002, 64.310000000000002, 64.310000000000002, 64.310000000000002, 63.899999999999999],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [63.240000000000002, 68.170000000000002, 68.170000000000002, 68.170000000000002, 64.450000000000003, 63.409999999999997, 65.599999999999994, 66.819999999999993, 60.100000000000001, 62.609999999999999, 60.32, 66.709999999999994, 65.239999999999995, 72.900000000000006, 56.390000000000001, 54.549999999999997, 54.890000000000001, 56.700000000000003, 64.170000000000002, 59.57, 61.969999999999999, 61.990000000000002, 61.941730524654083, 56.549999999999997, 55.82, 55.82, 45.159999999999997, 54.399999999999999, 54.049999999999997, 55.649999999999999, 55.049999999999997, 55.609999999999999, 68.980000000000004, 68.980000000000004, 68.980000000000004, 68.980000000000004, 68.980000000000004, 44.109999999999999, 52.079999999999998, 52.079999999999998, 69.700000000000003, 54.659999999999997, 59.82, 51.219999999999999, 42.579999999999998, 45.479999999999997, 55.609999999999999, 51.689999999999998, 49.880000000000003, 54.189999999999998, 56.899999999999999, 74.790000000000006, 87.079999999999998, 59.280000000000001, 50.153893195089232, 53.079999999999998, 50.659999999999997, 53.380000000000003, 37.18, 38.186646464740669, 41.82, 31.800000000000001, 39.329999999999998, 39.600000000000001, 38.189999999999998, 45.700000000000003, 40.229999999999997, 68.989999999999995, 41.18, 41.439965076698371, 88.349999999999994, 82.609999999999999, 44.109999999999999, 41.039999999999999, 37.979999999999997, 52.399999999999999, 52.810000000000002, 63.07, 37.219999999999999, 44.549999999999997, 58.840000000000003, 39.289999999999999, 41.159999999999997, 44.060000000000002, 43.485341606093947, 52.899999999999999, 37.990000000000002, 31.02, 73.040000000000006, 43.485341606093947, 65.280000000000001, 61.159999999999997, 57.25, 43.485341606093947, 65.280000000000001, 49.68, 56.920000000000002, 43.485341606093947, 43.485341606093947, 43.485341606093947, 72.230000000000004, 43.485341606093947, 43.485341606093947, 43.485341606093947, 43.485341606093947, 43.485341606093947, 43.485341606093947, 43.485341606093947, 43.485341606093947, 43.485341606093947, 53.100000000000001, 52.810000000000002, 50.659999999999997, 45.170000000000002, 41.109999999999999, 36.969999999999999, 47.920000000000002, 31.719999999999999, 33.810000000000002, 47.539999999999999, 67.439999999999998, 64.349999999999994, 69.069999999999993, 46.659999999999997, 57.420000000000002, 43.030000000000001, 47.039999999999999, 53.460000000000001, 28.559999999999999, 38.520000000000003, 45.090000000000003, 33.579999999999998, 19.609999999999999, 45.659999999999997, 38.380000000000003, 36.549999999999997, 55.799999999999997, 28.690000000000001, 21.489999999999998, 42.850000000000001, 34.741728016139405, 62.530000000000001, 43.359999999999999, 40.170000000000002, 40.07, 45.079999999999998, 50.359999999999999, 52.030000000000001, 28.68, 46.670000000000002, 38.369999999999997, 50.240000000000002, 40.350000000000001, 48.109999999999999, 46.479999999999997, 46.490000000000002, 49.829999999999998, 48.810000000000002, 50.670000000000002, 45.20635137828635, 39.25, 42.450000000000003, 36.899999999999999, 33.979999999999997, 45.20635137828635, 90.799999999999997, 35.170000000000002, 29.309999999999999, 28.629999999999999, 27.18, 45.20635137828635, 48.700000000000003, 57.780000000000001, 47.950000000000003, 51.060000000000002, 36.280000000000001, 39.390000000000001, 57.5, 47.509999999999998, 15.69, 80.560000000000002, 45.20635137828635, 54.530000000000001, 71.920000000000002, 45.20635137828635, 73.200000000000003, 57.090000000000003, 45.20635137828635, 54.920000000000002, 59.390000000000001, 47.840000000000003, 53.649999999999999, 54.149999999999999, 37.280000000000001, 56.270000000000003, 51.390000000000001, 54.060000000000002, 54.969999999999999, 53.669371768805426, 49.280000000000001, 55.140000000000001, 55.43, 56.030000000000001, 60.5, 41.009999999999998, 50.479999999999997, 57.299999999999997, 49.530000000000001, 70.819999999999993, 64.239999999999995, 44.689999999999998, 34.859999999999999, 41.43, 53.669371768805426, 53.669371768805426, 82.290000000000006, 61.390000000000001, 72.849999999999994, 53.669371768805426, 69.709999999999994, 53.669371768805426, 66.560000000000002, 66.400000000000006, 53.669371768805426, 76.459999999999994, 73.170000000000002, 62.060000000000002, 88.920000000000002, 53.669371768805426, 53.669371768805426, 53.669371768805426, 53.669371768805426, 53.669371768805426, 53.669371768805426, 53.669371768805426, 53.669371768805426, 53.669371768805426, 53.669371768805426, 53.669371768805426, 53.669371768805426, 53.669371768805426, 53.669371768805426, 74.159999999999997, 62.399999999999999, 64.290000000000006, 64.290000000000006, 64.290000000000006, 64.290000000000006, 63.890000000000001],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [63.359999999999999, 68.530000000000001, 68.530000000000001, 68.530000000000001, 64.819999999999993, 64.060000000000002, 67.659999999999997, 66.739999999999995, 59.82, 63.030000000000001, 60.57, 66.319999999999993, 65.870000000000005, 73.989999999999995, 56.32, 54.539999999999999, 54.840000000000003, 56.530000000000001, 65, 59.079999999999998, 62.369999999999997, 61.590000000000003, 61.554534198545639, 57.579999999999998, 55.859999999999999, 55.859999999999999, 47.93, 55.280000000000001, 53.530000000000001, 56.649999999999999, 55.609999999999999, 56.729999999999997, 69.290000000000006, 69.290000000000006, 69.290000000000006, 69.290000000000006, 69.290000000000006, 44.439999999999998, 49.520000000000003, 49.520000000000003, 69.629999999999995, 54.659999999999997, 60.060000000000002, 49.380000000000003, 43.549999999999997, 47.159999999999997, 54.640000000000001, 51.090000000000003, 50.409999999999997, 55.770000000000003, 57.649999999999999, 74.420000000000002, 87.079999999999998, 59.280000000000001, 50.776285267854966, 53.039999999999999, 48.810000000000002, 52.020000000000003, 37.039999999999999, 37.608751904574454, 39.630000000000003, 25.41, 40.630000000000003, 42.43, 42.939999999999998, 45.700000000000003, 37.460000000000001, 69.469999999999999, 41.340000000000003, 41.602841337119031, 89.060000000000002, 82.439999999999998, 44.439999999999998, 40.329999999999998, 42.57, 52.670000000000002, 52.299999999999997, 64.069999999999993, 37.219999999999999, 44.200000000000003, 57.990000000000002, 39.079999999999998, 41.159999999999997, 43.390000000000001, 43.257859940601641, 57.329999999999998, 45.219999999999999, 27.489999999999998, 69.569999999999993, 43.257859940601641, 66.010000000000005, 62.270000000000003, 57.299999999999997, 43.257859940601641, 64.939999999999998, 51.32, 59.149999999999999, 43.257859940601641, 43.257859940601641, 43.257859940601641, 70.939999999999998, 43.257859940601641, 43.257859940601641, 43.257859940601641, 43.257859940601641, 43.257859940601641, 43.257859940601641, 43.257859940601641, 43.257859940601641, 43.257859940601641, 53.880000000000003, 52.880000000000003, 51.390000000000001, 45.829999999999998, 39.009999999999998, 39.130000000000003, 47.979999999999997, 30.02, 31.760000000000002, 48.520000000000003, 66.480000000000004, 65.040000000000006, 71.140000000000001, 42.960000000000001, 57.32, 37.109999999999999, 47.039999999999999, 53.460000000000001, 28.559999999999999, 34.259999999999998, 45.93, 30.960000000000001, 18, 47.359999999999999, 37.920000000000002, 34.789999999999999, 35.07, 56.329999999999998, 21.489999999999998, 40.68, 34.368205026710392, 62.640000000000001, 44.68, 43.399999999999999, 39.140000000000001, 45.079999999999998, 50.359999999999999, 45.310000000000002, 28.91, 47.799999999999997, 38.82, 35.530000000000001, 51.409999999999997, 48.159999999999997, 44.549999999999997, 47.810000000000002, 48.68, 48.960000000000001, 49.689999999999998, 44.331300216873558, 37.890000000000001, 42.539999999999999, 38.020000000000003, 44.331300216873558, 34.009999999999998, 84.480000000000004, 35.32, 29.309999999999999, 29.399999999999999, 26.73, 44.331300216873558, 56.490000000000002, 48.880000000000003, 45.280000000000001, 50.740000000000002, 29.57, 38.979999999999997, 59.549999999999997, 46.57, 15.69, 80.560000000000002, 44.331300216873558, 54.530000000000001, 71.790000000000006, 44.331300216873558, 75.739999999999995, 57.130000000000003, 44.331300216873558, 56.079999999999998, 60.009999999999998, 48.490000000000002, 52.149999999999999, 53.170000000000002, 35.07, 56.710000000000001, 49.840000000000003, 53.43, 56.240000000000002, 53.277093841588567, 46.82, 55.770000000000003, 54.299999999999997, 56.399999999999999, 60.539999999999999, 41.799999999999997, 49.859999999999999, 57.789999999999999, 52, 71.239999999999995, 64.469999999999999, 39.75, 37.920000000000002, 41.359999999999999, 53.277093841588567, 53.277093841588567, 82.170000000000002, 62.469999999999999, 71.930000000000007, 53.277093841588567, 69.709999999999994, 53.277093841588567, 66.689999999999998, 61.560000000000002, 53.277093841588567, 75.549999999999997, 72.609999999999999, 60.869999999999997, 88.920000000000002, 53.277093841588567, 53.277093841588567, 53.277093841588567, 53.277093841588567, 53.277093841588567, 53.277093841588567, 53.277093841588567, 53.277093841588567, 53.277093841588567, 53.277093841588567, 53.277093841588567, 53.277093841588567, 53.277093841588567, 53.277093841588567, 74.030000000000001, 62.030000000000001, 64.379999999999995, 64.379999999999995, 64.379999999999995, 64.379999999999995, 64.310000000000002],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [62.719999999999999, 68.719999999999999, 68.719999999999999, 68.719999999999999, 64.25, 65.150000000000006, 65.420000000000002, 66.989999999999995, 60.039999999999999, 62.950000000000003, 60.700000000000003, 65.909999999999997, 66.150000000000006, 75.950000000000003, 56.189999999999998, 54.390000000000001, 53.409999999999997, 56.350000000000001, 64.530000000000001, 57.869999999999997, 62.049999999999997, 60.939999999999998, 60.89012838141705, 55.280000000000001, 54.950000000000003, 54.949999999999996, 48.25, 56.109999999999999, 52.939999999999998, 56.710000000000001, 55.619999999999997, 56.920000000000002, 69.420000000000002, 69.420000000000002, 69.420000000000002, 69.420000000000002, 69.420000000000002, 44.039999999999999, 47.850000000000001, 47.850000000000001, 69.480000000000004, 54.659999999999997, 58.619999999999997, 49.82, 43.520000000000003, 47.600000000000001, 52.590000000000003, 55.219999999999999, 52.649999999999999, 56.289999999999999, 55.850000000000001, 74.120000000000005, 87.079999999999998, 59.280000000000001, 51.570370252292385, 53.43, 49.719999999999999, 51.619999999999997, 37.960000000000001, 38.025897551593104, 40.829999999999998, 23.309999999999999, 40.869999999999997, 43.380000000000003, 45.609999999999999, 45.700000000000003, 33.600000000000001, 69.450000000000003, 41.82, 42.084056726609099, 89.959999999999994, 77.950000000000003, 44.039999999999999, 40.079999999999998, 42.689999999999998, 53.18, 51.450000000000003, 64.879999999999995, 37.219999999999999, 43.93, 58.020000000000003, 38.719999999999999, 41.159999999999997, 38.140000000000001, 42.924024724419766, 56.810000000000002, 46.640000000000001, 26.120000000000001, 72.909999999999997, 42.924024724419766, 63.200000000000003, 63.450000000000003, 59.009999999999998, 42.924024724419766, 66.519999999999996, 53.549999999999997, 65.150000000000006, 42.924024724419766, 42.924024724419766, 42.924024724419766, 74.219999999999999, 42.924024724419766, 42.924024724419766, 42.924024724419766, 42.924024724419766, 42.924024724419766, 42.924024724419766, 42.924024724419766, 42.924024724419766, 42.924024724419766, 54.700000000000003, 52.740000000000002, 52.630000000000003, 47.93, 39.829999999999998, 38.579999999999998, 49.130000000000003, 33.229999999999997, 31.600000000000001, 43.560000000000002, 66.590000000000003, 63.799999999999997, 41, 72.790000000000006, 58.259999999999998, 36.609999999999999, 47.039999999999999, 28.559999999999999, 53.460000000000001, 33.759999999999998, 44.689999999999998, 30.960000000000001, 19.859999999999999, 46.5, 37.439999999999998, 34.590000000000003, 32.520000000000003, 56.57, 21.489999999999998, 34.079999999999998, 34.197106822937762, 63.5, 48.490000000000002, 44.520000000000003, 38.57, 45.549999999999997, 50.359999999999999, 47.119999999999997, 45.469999999999999, 46.159999999999997, 37.939999999999998, 37.159999999999997, 52.479999999999997, 47.93, 47.140000000000001, 48.869999999999997, 44.93, 47.520000000000003, 51.920000000000002, 45.974841896340557, 44.909999999999997, 45.200000000000003, 39.240000000000002, 45.974841896340557, 35.700000000000003, 85.349999999999994, 34.630000000000003, 29.309999999999999, 30.460000000000001, 30.300000000000001, 45.974841896340557, 52.600000000000001, 47.450000000000003, 47.840000000000003, 55.600000000000001, 30.920000000000002, 41.390000000000001, 61.850000000000001, 46.93, 15.69, 80.560000000000002, 45.974841896340557, 54.530000000000001, 72.590000000000003, 45.974841896340557, 73.359999999999999, 59.880000000000003, 45.974841896340557, 57.140000000000001, 58.969999999999999, 48.75, 48.409999999999997, 52.509999999999998, 36.350000000000001, 56.789999999999999, 47.420000000000002, 51.780000000000001, 56.719999999999999, 52.51578235859656, 43.130000000000003, 55.600000000000001, 52.649999999999999, 56.950000000000003, 60.280000000000001, 43.640000000000001, 53.759999999999998, 58.18, 52.299999999999997, 72.069999999999993, 64.659999999999997, 38.039999999999999, 40.270000000000003, 45.409999999999997, 52.51578235859656, 52.51578235859656, 78.930000000000007, 60.490000000000002, 72.519999999999996, 52.51578235859656, 69.709999999999994, 52.51578235859656, 65.819999999999993, 63.840000000000003, 52.51578235859656, 73.75, 68.280000000000001, 60.890000000000001, 88.920000000000002, 52.51578235859656, 52.51578235859656, 52.51578235859656, 52.51578235859656, 52.51578235859656, 52.51578235859656, 52.51578235859656, 52.51578235859656, 52.51578235859656, 52.51578235859656, 52.51578235859656, 52.51578235859656, 52.51578235859656, 52.51578235859656, 73.700000000000003, 62.719999999999999, 63.729999999999997, 63.729999999999997, 63.729999999999997, 63.729999999999997, 64.329999999999998],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [61.909999999999997, 69.010000000000005, 69.010000000000005, 69.010000000000005, 64.109999999999999, 67.159999999999997, 67.180000000000007, 66.099999999999994, 61.299999999999997, 63.560000000000002, 60.32, 66.260000000000005, 66.049999999999997, 74.579999999999998, 55.57, 54.289999999999999, 53.719999999999999, 56.689999999999998, 64.030000000000001, 57.060000000000002, 61.659999999999997, 61.490000000000002, 61.441532581124321, 55.969999999999999, 54.689999999999998, 54.689999999999991, 49.350000000000001, 55.829999999999998, 53.920000000000002, 57.93, 54.909999999999997, 59.259999999999998, 69.75, 69.75, 69.75, 69.75, 69.75, 44.009999999999998, 49.969999999999999, 49.969999999999999, 69.510000000000005, 54.659999999999997, 62.310000000000002, 51.619999999999997, 44.640000000000001, 48.609999999999999, 52.539999999999999, 56.840000000000003, 55.969999999999999, 56.670000000000002, 55.340000000000003, 74.560000000000002, 87.079999999999998, 59.280000000000001, 52.688717122935877, 54.880000000000003, 50.670000000000002, 54.229999999999997, 39.759999999999998, 38.60227129264598, 40.469999999999999, 21.629999999999999, 42.869999999999997, 45.539999999999999, 42.289999999999999, 45.700000000000003, 33.909999999999997, 69.560000000000002, 42.869999999999997, 43.133033242029747, 90.290000000000006, 82.480000000000004, 44.009999999999998, 39.479999999999997, 42.829999999999998, 53.390000000000001, 51.219999999999999, 66.040000000000006, 37.219999999999999, 44.520000000000003, 58.399999999999999, 38.509999999999998, 42.469999999999999, 41.670000000000002, 43.338293638868919, 58.090000000000003, 47.700000000000003, 28.010000000000002, 74.120000000000005, 43.338293638868919, 59.740000000000002, 62.020000000000003, 59.399999999999999, 43.338293638868919, 65.299999999999997, 51.590000000000003, 62.43, 43.338293638868919, 43.338293638868919, 43.338293638868919, 75.390000000000001, 43.338293638868919, 43.338293638868919, 43.338293638868919, 43.338293638868919, 43.338293638868919, 43.338293638868919, 43.338293638868919, 43.338293638868919, 43.338293638868919, 55.079999999999998, 52.880000000000003, 52.759999999999998, 48.780000000000001, 40.289999999999999, 35.18, 47.609999999999999, 35.420000000000002, 31.48, 46.479999999999997, 66.189999999999998, 63.140000000000001, 44.18, 70.75, 60.520000000000003, 39.020000000000003, 47.039999999999999, 28.559999999999999, 52.810000000000002, 33.810000000000002, 46.890000000000001, 33.219999999999999, 10.880000000000001, 48.649999999999999, 37.359999999999999, 35.950000000000003, 33.25, 56.030000000000001, 24.52, 38.299999999999997, 33.543328419496802, 62.75, 49.960000000000001, 43.560000000000002, 39.109999999999999, 45.539999999999999, 50.229999999999997, 46.93, 47.170000000000002, 47.490000000000002, 38.770000000000003, 34.609999999999999, 48.039999999999999, 49.100000000000001, 48.18, 49.579999999999998, 44.490000000000002, 47.450000000000003, 53.219999999999999, 46.288595971263781, 45.560000000000002, 48.189999999999998, 41.009999999999998, 46.288595971263781, 39.920000000000002, 91.700000000000003, 33.770000000000003, 29.309999999999999, 35.740000000000002, 28.48, 46.288595971263781, 49.659999999999997, 48.780000000000001, 48.310000000000002, 57.359999999999999, 31.350000000000001, 41.630000000000003, 61.890000000000001, 47.049999999999997, 17.469999999999999, 80.560000000000002, 46.288595971263781, 54.299999999999997, 67.319999999999993, 46.288595971263781, 72.189999999999998, 61.659999999999997, 46.288595971263781, 57.729999999999997, 59.189999999999998, 49.509999999999998, 49.549999999999997, 52.950000000000003, 39.350000000000001, 56.880000000000003, 47.310000000000002, 51.289999999999999, 57.009999999999998, 52.452869891563147, 42.509999999999998, 54.93, 52.100000000000001, 58.340000000000003, 59.420000000000002, 43.770000000000003, 53.329999999999998, 57.979999999999997, 53.259999999999998, 73.450000000000003, 64.75, 39.5, 40.590000000000003, 44.75, 52.452869891563147, 52.452869891563147, 82.239999999999995, 60.159999999999997, 72.060000000000002, 52.452869891563147, 71.769999999999996, 52.452869891563147, 63.670000000000002, 64.989999999999995, 52.452869891563147, 72.049999999999997, 67.640000000000001, 59.049999999999997, 88.920000000000002, 52.452869891563147, 52.452869891563147, 52.452869891563147, 52.452869891563147, 52.452869891563147, 52.452869891563147, 52.452869891563147, 52.452869891563147, 52.452869891563147, 52.452869891563147, 52.452869891563147, 52.452869891563147, 52.452869891563147, 52.452869891563147, 73.920000000000002, 63.100000000000001, 64.340000000000003, 64.340000000000003, 64.340000000000003, 64.340000000000003, 63.399999999999999],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [62.219999999999999, 69.650000000000006, 69.650000000000006, 69.650000000000006, 64.730000000000004, 67.670000000000002, 69.890000000000001, 66.370000000000005, 63.5, 64.840000000000003, 61.030000000000001, 66.219999999999999, 66.959999999999994, 76.859999999999999, 55.979999999999997, 55.149999999999999, 54.530000000000001, 57.25, 65.329999999999998, 59.549999999999997, 62.5, 62.340000000000003, 62.311443806827945, 59.079999999999998, 56.219999999999999, 56.219999999999992, 46.630000000000003, 56.460000000000001, 53.219999999999999, 57.969999999999999, 55.93, 62.57, 69.920000000000002, 69.920000000000002, 69.920000000000002, 69.920000000000002, 69.920000000000002, 45.880000000000003, 48.170000000000002, 48.170000000000002, 69.569999999999993, 54.659999999999997, 61.270000000000003, 52.880000000000003, 44.700000000000003, 48.560000000000002, 53.649999999999999, 60.710000000000001, 56.43, 55.109999999999999, 55.240000000000002, 75.359999999999999, 87.079999999999998, 59.280000000000001, 53.449612092591664, 55.539999999999999, 50.700000000000003, 52.100000000000001, 41.350000000000001, 38.288246732914914, 37.990000000000002, 23.440000000000001, 43.93, 27.219999999999999, 45.810000000000002, 45.700000000000003, 39.670000000000002, 70.260000000000005, 42.859999999999999, 43.111912529599628, 87.819999999999993, 84.959999999999994, 45.880000000000003, 37.460000000000001, 42.509999999999998, 52.719999999999999, 50.450000000000003, 68.349999999999994, 37.219999999999999, 43.950000000000003, 57.25, 38.840000000000003, 42.289999999999999, 44.109999999999999, 43.173423950955574, 57.469999999999999, 48.07, 25.25, 72.189999999999998, 43.173423950955574, 66.489999999999995, 61.280000000000001, 60.490000000000002, 43.173423950955574, 64.310000000000002, 52.810000000000002, 63.020000000000003, 43.173423950955574, 43.173423950955574, 43.173423950955574, 78.159999999999997, 43.173423950955574, 43.173423950955574, 43.173423950955574, 43.173423950955574, 43.173423950955574, 43.173423950955574, 43.173423950955574, 43.173423950955574, 43.173423950955574, 56.189999999999998, 52.93, 53.109999999999999, 49.200000000000003, 45.409999999999997, 36.329999999999998, 48.640000000000001, 34.270000000000003, 28.359999999999999, 47.020000000000003, 66.670000000000002, 58.789999999999999, 41.149999999999999, 72.439999999999998, 57.469999999999999, 47.039999999999999, 32.899999999999999, 28.559999999999999, 48.310000000000002, 30.510000000000002, 46.670000000000002, 33.390000000000001, 15.5, 46.539999999999999, 34.280000000000001, 36.740000000000002, 32.57, 55.079999999999998, 22.640000000000001, 39.240000000000002, 33.690826630844484, 61.539999999999999, 48.979999999999997, 38.729999999999997, 37.899999999999999, 43.719999999999999, 50.119999999999997, 46.899999999999999, 46.170000000000002, 46.920000000000002, 34.340000000000003, 37.780000000000001, 47.75, 49.600000000000001, 45.07, 49.890000000000001, 49.030000000000001, 48.549999999999997, 53.549999999999997, 45.720471420022157, 43.710000000000001, 49.310000000000002, 43.799999999999997, 45.720471420022157, 38.32, 80.609999999999999, 34.390000000000001, 29.309999999999999, 29.23, 27.73, 45.720471420022157, 48.359999999999999, 48.200000000000003, 51.770000000000003, 52.990000000000002, 28.98, 38.280000000000001, 61.609999999999999, 48.490000000000002, 15.41, 80.560000000000002, 45.720471420022157, 55.780000000000001, 66.480000000000004, 45.720471420022157, 68.400000000000006, 61.030000000000001, 45.720471420022157, 56.799999999999997, 59.520000000000003, 50.259999999999998, 54.450000000000003, 52.009999999999998, 38.799999999999997, 57.640000000000001, 48.359999999999999, 49.530000000000001, 58.039999999999999, 52.528648019976174, 40.5, 57.240000000000002, 51.159999999999997, 59.640000000000001, 58.719999999999999, 43.329999999999998, 52.899999999999999, 59.43, 52.380000000000003, 71.790000000000006, 66.469999999999999, 35.18, 39.520000000000003, 44.149999999999999, 52.528648019976174, 52.528648019976174, 81.170000000000002, 60.399999999999999, 72.549999999999997, 52.528648019976174, 69.769999999999996, 52.528648019976174, 63.479999999999997, 66.680000000000007, 52.528648019976174, 73.150000000000006, 67.269999999999996, 58.479999999999997, 88.920000000000002, 52.528648019976174, 52.528648019976174, 52.528648019976174, 52.528648019976174, 52.528648019976174, 52.528648019976174, 52.528648019976174, 52.528648019976174, 52.528648019976174, 52.528648019976174, 52.528648019976174, 52.528648019976174, 52.528648019976174, 52.528648019976174, 74.620000000000005, 62.729999999999997, 64.480000000000004, 64.480000000000004, 64.480000000000004, 64.480000000000004, 64.329999999999998],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [64.230000000000004, 70.75, 70.75, 70.75, 66.670000000000002, 68.530000000000001, 71.299999999999997, 69.980000000000004, 66.540000000000006, 66.859999999999999, 62.170000000000002, 67.950000000000003, 68.090000000000003, 78.689999999999998, 56.700000000000003, 55.740000000000002, 58.960000000000001, 62.579999999999998, 65.859999999999999, 60.850000000000001, 64.379999999999995, 65.439999999999998, 65.401996182262153, 61.100000000000001, 59.609999999999999, 59.609999999999999, 48.380000000000003, 56.869999999999997, 56.090000000000003, 58.93, 58.32, 63.689999999999998, 71.840000000000003, 71.840000000000003, 71.840000000000003, 71.840000000000003, 71.840000000000003, 45.979999999999997, 53.189999999999998, 53.189999999999998, 71.019999999999996, 54.659999999999997, 65.040000000000006, 55.990000000000002, 45.32, 51.619999999999997, 55.640000000000001, 60.659999999999997, 60.049999999999997, 57.090000000000003, 57.399999999999999, 76.040000000000006, 59.280000000000001, 87.079999999999998, 55.725590622208308, 57.159999999999997, 53.770000000000003, 54, 41.369999999999997, 40.587142913025176, 42.170000000000002, 31.219999999999999, 47.039999999999999, 27, 49.899999999999999, 45.700000000000003, 43.100000000000001, 71.909999999999997, 44.409999999999997, 44.657039271485303, 88.400000000000006, 89.260000000000005, 45.979999999999997, 37.060000000000002, 43.439999999999998, 53.939999999999998, 51.600000000000001, 68.010000000000005, 37.219999999999999, 48.840000000000003, 57.640000000000001, 38.789999999999999, 45.259999999999998, 45.700000000000003, 44.61101897689818, 58.479999999999997, 48.840000000000003, 33.689999999999998, 77.930000000000007, 44.61101897689818, 68.230000000000004, 61.039999999999999, 67.430000000000007, 44.61101897689818, 61.439999999999998, 54.659999999999997, 61.719999999999999, 44.61101897689818, 44.61101897689818, 44.61101897689818, 77.689999999999998, 44.61101897689818, 44.61101897689818, 44.61101897689818, 44.61101897689818, 44.61101897689818, 44.61101897689818, 44.61101897689818, 44.61101897689818, 44.61101897689818, 56, 53.32, 53.109999999999999, 45.240000000000002, 48.609999999999999, 37.939999999999998, 51.479999999999997, 43.539999999999999, 33.200000000000003, 49.909999999999997, 67.260000000000005, 59.729999999999997, 46.920000000000002, 69.189999999999998, 57.829999999999998, 47.039999999999999, 41.109999999999999, 28.559999999999999, 55.600000000000001, 41.719999999999999, 46.57, 40.759999999999998, 26.460000000000001, 47.299999999999997, 36.909999999999997, 34.210000000000001, 37.509999999999998, 56.009999999999998, 33.640000000000001, 42.75, 38.572638368189018, 63.640000000000001, 50.979999999999997, 38.350000000000001, 38.770000000000003, 44.549999999999997, 58.409999999999997, 44.630000000000003, 47.939999999999998, 48.990000000000002, 46.450000000000003, 38.670000000000002, 47.020000000000003, 50.619999999999997, 45.890000000000001, 50.380000000000003, 51.549999999999997, 54.920000000000002, 52.369999999999997, 48.190868471680766, 44.280000000000001, 49.509999999999998, 44.090000000000003, 48.190868471680766, 37.840000000000003, 90.579999999999998, 33.609999999999999, 29.309999999999999, 33.829999999999998, 36.950000000000003, 48.190868471680766, 52.609999999999999, 58.270000000000003, 53.890000000000001, 51.100000000000001, 36.82, 40.740000000000002, 62.229999999999997, 23.68, 48.560000000000002, 80.560000000000002, 48.190868471680766, 53.520000000000003, 66.709999999999994, 48.190868471680766, 67.010000000000005, 62.299999999999997, 48.190868471680766, 59.149999999999999, 60.719999999999999, 53.310000000000002, 55.509999999999998, 53.479999999999997, 45.909999999999997, 58.369999999999997, 50.740000000000002, 52.060000000000002, 58.939999999999998, 54.423102723762781, 43.509999999999998, 59.159999999999997, 51.649999999999999, 61.060000000000002, 60.979999999999997, 46.439999999999998, 54.200000000000003, 61.060000000000002, 49.509999999999998, 72.969999999999999, 68.140000000000001, 46.530000000000001, 40.979999999999997, 47.710000000000001, 54.423102723762781, 54.423102723762781, 82.290000000000006, 61.609999999999999, 73.849999999999994, 54.423102723762781, 70.879999999999995, 54.423102723762781, 69.599999999999994, 62.950000000000003, 54.423102723762781, 75.769999999999996, 68.420000000000002, 59.409999999999997, 88.920000000000002, 54.423102723762781, 54.423102723762781, 54.423102723762781, 54.423102723762781, 54.423102723762781, 54.423102723762781, 54.423102723762781, 54.423102723762781, 54.423102723762781, 54.423102723762781, 54.423102723762781, 54.423102723762781, 54.423102723762781, 54.423102723762781, 76.510000000000005, 66.870000000000005, 64.090000000000003, 64.090000000000003, 64.090000000000003, 64.090000000000003, 65.540000000000006],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [62.259999999999998, 70.650000000000006, 70.650000000000006, 70.650000000000006, 66.310000000000002, 69.299999999999997, 70.329999999999998, 71.640000000000001, 66.280000000000001, 66.060000000000002, 62.289999999999999, 68.370000000000005, 67.659999999999997, 78.909999999999997, 55.270000000000003, 55.789999999999999, 58.460000000000001, 60.729999999999997, 64.489999999999995, 59.920000000000002, 62.829999999999998, 65.390000000000001, 65.327487030809408, 58.200000000000003, 58.939999999999998, 58.939999999999998, 45.990000000000002, 56.659999999999997, 59.5, 60.009999999999998, 58.759999999999998, 66.700000000000003, 70.719999999999999, 70.719999999999999, 70.719999999999999, 70.719999999999999, 70.719999999999999, 45.030000000000001, 52.289999999999999, 52.289999999999999, 71.040000000000006, 54.659999999999997, 61.789999999999999, 55.490000000000002, 44.030000000000001, 51.700000000000003, 55.509999999999998, 63.079999999999998, 54.539999999999999, 55.090000000000003, 58.640000000000001, 76.989999999999995, 59.280000000000001, 87.079999999999998, 55.299724880036081, 54.539999999999999, 53.119999999999997, 51.68, 39.859999999999999, 39.639699465274525, 43.469999999999999, 27.93, 45.090000000000003, 28.140000000000001, 49.340000000000003, 45.700000000000003, 44.840000000000003, 70.540000000000006, 44.18, 44.443876001641897, 90.909999999999997, 93.980000000000004, 45.030000000000001, 40.670000000000002, 40.630000000000003, 53.909999999999997, 49.560000000000002, 67.840000000000003, 36.990000000000002, 48.479999999999997, 53.009999999999998, 38.310000000000002, 44.140000000000001, 43.57, 43.469037234052927, 57.490000000000002, 48.450000000000003, 32.5, 77.689999999999998, 43.469037234052927, 64.879999999999995, 61.729999999999997, 68.079999999999998, 43.469037234052927, 63.350000000000001, 60.719999999999999, 53.590000000000003, 43.469037234052927, 43.469037234052927, 43.469037234052927, 76.719999999999999, 43.469037234052927, 43.469037234052927, 43.469037234052927, 43.469037234052927, 43.469037234052927, 43.469037234052927, 43.469037234052927, 43.469037234052927, 43.469037234052927, 54.700000000000003, 53.5, 52.840000000000003, 48.880000000000003, 46.399999999999999, 37.310000000000002, 51.140000000000001, 39.689999999999998, 27.420000000000002, 50.130000000000003, 66.849999999999994, 59.119999999999997, 46.710000000000001, 71.859999999999999, 57.700000000000003, 47.039999999999999, 39.939999999999998, 28.559999999999999, 53.68, 38.609999999999999, 46.229999999999997, 39.25, 30.829999999999998, 47.170000000000002, 35.109999999999999, 35.450000000000003, 33.409999999999997, 55.899999999999999, 32.159999999999997, 39.950000000000003, 38.621783041705228, 64.280000000000001, 50.789999999999999, 35.380000000000003, 41.759999999999998, 43.32, 57, 44.789999999999999, 48.18, 41.890000000000001, 46.960000000000001, 37.829999999999998, 48.75, 50.630000000000003, 42.119999999999997, 51.189999999999998, 52.810000000000002, 57.829999999999998, 52.43, 47.664762923319053, 43.399999999999999, 49.880000000000003, 44.549999999999997, 47.664762923319053, 36.950000000000003, 92.560000000000002, 35.259999999999998, 29.329999999999998, 25.43, 50.200000000000003, 47.664762923319053, 53.960000000000001, 54.740000000000002, 53.840000000000003, 49.200000000000003, 30.829999999999998, 39.369999999999997, 62.859999999999999, 24.73, 49.549999999999997, 80.560000000000002, 47.664762923319053, 53.189999999999998, 67.439999999999998, 47.664762923319053, 67.120000000000005, 61.539999999999999, 47.664762923319053, 57.609999999999999, 60.359999999999999, 51.5, 53.810000000000002, 53.399999999999999, 39.030000000000001, 58.240000000000002, 48.939999999999998, 51.149999999999999, 59.469999999999999, 53.789777449631856, 43.549999999999997, 59.289999999999999, 52.5, 60.640000000000001, 59.5, 45.350000000000001, 51.740000000000002, 61.909999999999997, 48.560000000000002, 72.909999999999997, 66.540000000000006, 45.509999999999998, 41.560000000000002, 48.240000000000002, 53.789777449631856, 53.789777449631856, 81.069999999999993, 61.689999999999998, 73.310000000000002, 53.789777449631856, 74.090000000000003, 53.789777449631856, 68.370000000000005, 63.950000000000003, 53.789777449631856, 78.540000000000006, 70.689999999999998, 60.289999999999999, 88.920000000000002, 53.789777449631856, 53.789777449631856, 53.789777449631856, 53.789777449631856, 53.789777449631856, 53.789777449631856, 53.789777449631856, 53.789777449631856, 53.789777449631856, 53.789777449631856, 53.789777449631856, 53.789777449631856, 53.789777449631856, 53.789777449631856, 76.280000000000001, 65.730000000000004, 65.719999999999999, 65.719999999999999, 65.719999999999999, 65.719999999999999, 64.400000000000006],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [61.789999999999999, 70.180000000000007, 70.180000000000007, 70.180000000000007, 66.180000000000007, 69.939999999999998, 70.150000000000006, 73.989999999999995, 67.689999999999998, 66.349999999999994, 62.280000000000001, 68.450000000000003, 67.969999999999999, 78.840000000000003, 54.119999999999997, 54.68, 57.710000000000001, 58.479999999999997, 64.129999999999995, 58.289999999999999, 63.310000000000002, 64.730000000000004, 64.680239907885849, 58.969999999999999, 59.310000000000002, 59.310000000000002, 42.329999999999998, 56, 57.590000000000003, 60.350000000000001, 58.119999999999997, 65.129999999999995, 70.290000000000006, 70.290000000000006, 70.290000000000006, 70.290000000000006, 70.290000000000006, 45.439999999999998, 50.579999999999998, 50.579999999999998, 70.780000000000001, 54.659999999999997, 61.090000000000003, 53.5, 44.259999999999998, 50.259999999999998, 61.700000000000003, 55.810000000000002, 53.57, 55.090000000000003, 60.619999999999997, 77.379999999999995, 79.200000000000003, 59.280000000000001, 54.442007460014914, 53.049999999999997, 53.799999999999997, 48.890000000000001, 39.259999999999998, 38.906835651795603, 44.130000000000003, 27.32, 42.43, 26.530000000000001, 47.869999999999997, 45.700000000000003, 45.789999999999999, 71.689999999999998, 44.289999999999999, 44.557918207154195, 91.510000000000005, 96.109999999999999, 45.439999999999998, 40.579999999999998, 38.909999999999997, 54.57, 50.43, 69.019999999999996, 36.43, 47.770000000000003, 53.359999999999999, 37.5, 47.020000000000003, 41.770000000000003, 43.133926585355589, 58.159999999999997, 46.100000000000001, 27.359999999999999, 75.060000000000002, 43.133926585355589, 65.409999999999997, 63.390000000000001, 70.510000000000005, 43.133926585355589, 61.399999999999999, 58.890000000000001, 51.700000000000003, 43.133926585355589, 43.133926585355589, 43.133926585355589, 76.920000000000002, 43.133926585355589, 43.133926585355589, 43.133926585355589, 43.133926585355589, 43.133926585355589, 43.133926585355589, 43.133926585355589, 43.133926585355589, 43.133926585355589, 54.649999999999999, 53.049999999999997, 50.93, 49.700000000000003, 47.899999999999999, 39, 48.719999999999999, 33.479999999999997, 29, 45.619999999999997, 67.609999999999999, 58.909999999999997, 41.289999999999999, 73.540000000000006, 60.219999999999999, 38.82, 37.009999999999998, 28.559999999999999, 49.340000000000003, 33.990000000000002, 45.719999999999999, 40.469999999999999, 38.009999999999998, 48.229999999999997, 36.670000000000002, 36.729999999999997, 32.590000000000003, 56.829999999999998, 60.43, 36.200000000000003, 41.792270455742262, 64.340000000000003, 49.240000000000002, 33.109999999999999, 41.43, 41.409999999999997, 55.210000000000001, 45.780000000000001, 45.840000000000003, 39.079999999999998, 47.409999999999997, 34.009999999999998, 49.130000000000003, 51.770000000000003, 40.560000000000002, 51.659999999999997, 50.390000000000001, 57.899999999999999, 53.759999999999998, 46.76862681272393, 43.880000000000003, 47.890000000000001, 46.76862681272393, 46.979999999999997, 37.990000000000002, 88.859999999999999, 35.020000000000003, 25.539999999999999, 28.57, 47.399999999999999, 46.76862681272393, 54.159999999999997, 51.710000000000001, 51.890000000000001, 54.899999999999999, 25.629999999999999, 40.560000000000002, 63.189999999999998, 22.129999999999999, 50.149999999999999, 80.560000000000002, 46.76862681272393, 53.600000000000001, 67.25, 46.76862681272393, 68.719999999999999, 59.68, 46.76862681272393, 57.57, 59.909999999999997, 51.810000000000002, 54.369999999999997, 51.439999999999998, 38.640000000000001, 58.289999999999999, 47.759999999999998, 49.310000000000002, 58.979999999999997, 52.630455550595308, 41.009999999999998, 59.640000000000001, 51.229999999999997, 58.210000000000001, 57.840000000000003, 48.450000000000003, 44.859999999999999, 63.18, 72.599999999999994, 48.869999999999997, 65.870000000000005, 42.990000000000002, 42.799999999999997, 47, 52.630455550595308, 52.630455550595308, 79.799999999999997, 61.140000000000001, 71.909999999999997, 52.630455550595308, 75.650000000000006, 52.630455550595308, 69.150000000000006, 65.180000000000007, 52.630455550595308, 77.420000000000002, 72.079999999999998, 59.030000000000001, 89.75, 52.630455550595308, 52.630455550595308, 52.630455550595308, 52.630455550595308, 52.630455550595308, 52.630455550595308, 52.630455550595308, 52.630455550595308, 52.630455550595308, 52.630455550595308, 52.630455550595308, 52.630455550595308, 52.630455550595308, 52.630455550595308, 75.900000000000006, 64.799999999999997, 64.640000000000001, 64.640000000000001, 64.640000000000001, 64.640000000000001, 64.349999999999994],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [61.689999999999998, 70.280000000000001, 70.280000000000001, 70.280000000000001, 66.439999999999998, 71.980000000000004, 69.950000000000003, 74.950000000000003, 68.530000000000001, 66.439999999999998, 62, 68.730000000000004, 68.5, 78.870000000000005, 55.18, 54.770000000000003, 58.170000000000002, 58.479999999999997, 64.420000000000002, 58.799999999999997, 64.159999999999997, 64.280000000000001, 64.255254542530551, 61.390000000000001, 60.689999999999998, 60.689999999999991, 49.420000000000002, 55.270000000000003, 57.18, 59.939999999999998, 57.460000000000001, 65.430000000000007, 70.480000000000004, 70.480000000000004, 70.480000000000004, 70.480000000000004, 70.480000000000004, 46.299999999999997, 51.100000000000001, 51.100000000000001, 71.489999999999995, 54.659999999999997, 61.869999999999997, 54.479999999999997, 44.950000000000003, 50.960000000000001, 61.719999999999999, 56.789999999999999, 54.450000000000003, 56.310000000000002, 61.520000000000003, 76.819999999999993, 79.25, 59.280000000000001, 55.131829105005288, 54, 54.509999999999998, 51.390000000000001, 39.390000000000001, 39.354569754913598, 43.289999999999999, 29.210000000000001, 43.520000000000003, 24.920000000000002, 51.039999999999999, 45.700000000000003, 46.859999999999999, 71.75, 45.460000000000001, 45.72481729602881, 91.920000000000002, 95.579999999999998, 46.299999999999997, 40.869999999999997, 39.119999999999997, 55.5, 51.149999999999999, 69.209999999999994, 36.649999999999999, 49.020000000000003, 54.200000000000003, 37.770000000000003, 49.600000000000001, 40.149999999999999, 43.754662436685045, 58, 47.700000000000003, 28.280000000000001, 75.480000000000004, 43.754662436685045, 67.319999999999993, 63.93, 68.819999999999993, 43.754662436685045, 60.93, 57.189999999999998, 51.780000000000001, 43.754662436685045, 43.754662436685045, 43.754662436685045, 43.754662436685045, 77.090000000000003, 43.754662436685045, 43.754662436685045, 43.754662436685045, 43.754662436685045, 43.754662436685045, 43.754662436685045, 43.754662436685045, 43.754662436685045, 55.07, 53.149999999999999, 51.57, 50.579999999999998, 47.990000000000002, 37.32, 50.43, 35.890000000000001, 34.329999999999998, 51.520000000000003, 67.969999999999999, 60.270000000000003, 42.799999999999997, 72.969999999999999, 59.979999999999997, 37.479999999999997, 36.780000000000001, 28.48, 51.189999999999998, 34.950000000000003, 51.770000000000003, 40.5, 46.049999999999997, 49.130000000000003, 34.960000000000001, 34.219999999999999, 31.82, 57.090000000000003, 38.049999999999997, 38.869999999999997, 42.392150239015066, 64.299999999999997, 50.189999999999998, 33.18, 38.579999999999998, 40.609999999999999, 55.649999999999999, 44.439999999999998, 47.579999999999998, 39.600000000000001, 48.039999999999999, 39.689999999999998, 50.950000000000003, 50.759999999999998, 40.32, 52.509999999999998, 53.189999999999998, 55.090000000000003, 53.740000000000002, 46.689183067365015, 42.219999999999999, 48.840000000000003, 46.689183067365015, 48.869999999999997, 38.850000000000001, 63.479999999999997, 32.329999999999998, 26.989999999999998, 30.870000000000001, 34.560000000000002, 46.689183067365015, 53.920000000000002, 55.579999999999998, 54.450000000000003, 52.850000000000001, 27.460000000000001, 38.07, 22.93, 63.619999999999997, 48.390000000000001, 80.560000000000002, 46.689183067365015, 54.039999999999999, 68.670000000000002, 46.689183067365015, 70.019999999999996, 60.670000000000002, 46.689183067365015, 58.729999999999997, 60, 53.659999999999997, 56.299999999999997, 51.990000000000002, 44.869999999999997, 59.340000000000003, 49.130000000000003, 48.979999999999997, 59.530000000000001, 53.154200408885856, 40.439999999999998, 59.909999999999997, 51.009999999999998, 58.619999999999997, 58.340000000000003, 48.039999999999999, 48.140000000000001, 64.290000000000006, 71.340000000000003, 48.990000000000002, 65.450000000000003, 49.460000000000001, 43, 47.659999999999997, 53.154200408885856, 53.154200408885856, 76.939999999999998, 62.159999999999997, 72.129999999999995, 53.154200408885856, 76.040000000000006, 53.154200408885856, 70.469999999999999, 65.939999999999998, 53.154200408885856, 79.540000000000006, 71.620000000000005, 60.149999999999999, 90.689999999999998, 53.154200408885856, 53.154200408885856, 53.154200408885856, 53.154200408885856, 53.154200408885856, 53.154200408885856, 53.154200408885856, 53.154200408885856, 53.154200408885856, 53.154200408885856, 53.154200408885856, 53.154200408885856, 53.154200408885856, 53.154200408885856, 76.159999999999997, 65.159999999999997, 65.170000000000002, 65.170000000000002, 65.170000000000002, 65.170000000000002, 65.099999999999994],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [62.189999999999998, 70.299999999999997, 70.299999999999997, 70.299999999999997, 66.689999999999998, 72.700000000000003, 70.209999999999994, 76.109999999999999, 68.5, 66.900000000000006, 62.329999999999998, 69.069999999999993, 68.769999999999996, 78.959999999999994, 56.609999999999999, 54.609999999999999, 59.609999999999999, 59.729999999999997, 64.799999999999997, 59.170000000000002, 65.209999999999994, 65.150000000000006, 65.10817050779616, 60.240000000000002, 60.439999999999998, 60.439999999999998, 50.549999999999997, 55.479999999999997, 58.18, 59.490000000000002, 56.969999999999999, 66.5, 70.049999999999997, 70.049999999999997, 70.049999999999997, 70.049999999999997, 70.049999999999997, 46.700000000000003, 52.060000000000002, 52.060000000000009, 71.390000000000001, 54.659999999999997, 62.789999999999999, 56.640000000000001, 44.609999999999999, 50.369999999999997, 62.189999999999998, 56.159999999999997, 52.799999999999997, 54.840000000000003, 58.57, 78.019999999999996, 78.069999999999993, 59.280000000000001, 54.434080207820891, 53.340000000000003, 56.119999999999997, 53.18, 40.509999999999998, 40.394633741381774, 45.420000000000002, 30.91, 44.060000000000002, 27.975000000000001, 49.630000000000003, 45.75, 44.719999999999999, 71.620000000000005, 46.880000000000003, 47.132890243461247, 91.109999999999999, 96.200000000000003, 46.700000000000003, 41.520000000000003, 40.539999999999999, 56.75, 51.780000000000001, 70.760000000000005, 37.600000000000001, 49.939999999999998, 54.520000000000003, 38.509999999999998, 50.5, 42.490000000000002, 44.589320151572011, 56.869999999999997, 50.18, 31.25, 75.579999999999998, 67.540000000000006, 44.589320151572011, 63.5, 68.209999999999994, 44.589320151572011, 60.670000000000002, 59.829999999999998, 54.18, 44.589320151572011, 44.589320151572011, 44.589320151572011, 44.589320151572011, 79.049999999999997, 44.589320151572011, 44.589320151572011, 44.589320151572011, 44.589320151572011, 44.589320151572011, 44.589320151572011, 44.589320151572011, 44.589320151572011, 55.210000000000001, 53.390000000000001, 52.009999999999998, 52.68, 48.759999999999998, 37.200000000000003, 47.640000000000001, 37.960000000000001, 32.350000000000001, 51.700000000000003, 67.689999999999998, 60.409999999999997, 45.159999999999997, 72.079999999999998, 60.770000000000003, 39.729999999999997, 38.140000000000001, 30.32, 50.840000000000003, 37.729999999999997, 52.299999999999997, 42.200000000000003, 45.829999999999998, 47.609999999999999, 35.979999999999997, 38.270000000000003, 33.020000000000003, 58.020000000000003, 49.57, 37.899999999999999, 43.400646528457521, 64.049999999999997, 52.369999999999997, 32.329999999999998, 39.670000000000002, 40.270000000000003, 56.079999999999998, 44.539999999999999, 40.590000000000003, 42.780000000000001, 48.659999999999997, 51.5, 38.810000000000002, 50.32, 41.560000000000002, 52.479999999999997, 53.140000000000001, 58.329999999999998, 52.689999999999998, 46.684947429473446, 43.530000000000001, 46.684947429473446, 49.799999999999997, 49.420000000000002, 36.020000000000003, 61.770000000000003, 28.48, 28.59, 40.859999999999999, 36.780000000000001, 46.684947429473446, 57.740000000000002, 55.119999999999997, 55.130000000000003, 54.880000000000003, 29.609999999999999, 40.109999999999999, 27.170000000000002, 63.880000000000003, 49.439999999999998, 80.560000000000002, 46.684947429473446, 53.060000000000002, 68.040000000000006, 46.684947429473446, 69.799999999999997, 64.290000000000006, 46.684947429473446, 59.68, 61.109999999999999, 53.920000000000002, 57.219999999999999, 53.350000000000001, 45.57, 59.100000000000001, 50.520000000000003, 49.25, 60.840000000000003, 53.697201233339896, 40.210000000000001, 51.079999999999998, 58.93, 60.969999999999999, 59.549999999999997, 48.359999999999999, 46.979999999999997, 65.569999999999993, 68.069999999999993, 49.509999999999998, 64.269999999999996, 51.359999999999999, 42.960000000000001, 50.780000000000001, 53.697201233339896, 53.697201233339896, 78.349999999999994, 62.289999999999999, 73.510000000000005, 53.697201233339896, 75.200000000000003, 53.697201233339896, 69.739999999999995, 65.799999999999997, 53.697201233339896, 80.180000000000007, 70.950000000000003, 59.119999999999997, 90.069999999999993, 53.697201233339896, 53.697201233339896, 53.697201233339896, 53.697201233339896, 53.697201233339896, 53.697201233339896, 53.697201233339896, 53.697201233339896, 53.697201233339896, 53.697201233339896, 53.697201233339896, 53.697201233339896, 53.697201233339896, 53.697201233339896, 75.819999999999993, 65.170000000000002, 66.25, 66.25, 66.25, 66.25, 64.430000000000007],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [62.109999999999999, 70.349999999999994, 70.349999999999994, 70.349999999999994, 67.090000000000003, 74.180000000000007, 70.590000000000003, 75.829999999999998, 68.469999999999999, 66.319999999999993, 62.649999999999999, 69.909999999999997, 69.159999999999997, 78.209999999999994, 55.560000000000002, 54.189999999999998, 57.020000000000003, 59.5, 65.569999999999993, 59.270000000000003, 65.680000000000007, 65.599999999999994, 65.535422560785008, 58.009999999999998, 60.740000000000002, 60.740000000000002, 50.909999999999997, 54.869999999999997, 58.729999999999997, 59.710000000000001, 56.289999999999999, 65.959999999999994, 70.25, 70.25, 70.25, 70.25, 70.25, 47.82, 53.43, 53.429999999999993, 71.75, 54.659999999999997, 63.630000000000003, 54.159999999999997, 45.780000000000001, 51.689999999999998, 61.649999999999999, 56.780000000000001, 51.509999999999998, 53.829999999999998, 58.549999999999997, 78.239999999999995, 79.670000000000002, 59.280000000000001, 54.733916406351931, 53.829999999999998, 55.68, 54.840000000000003, 39.390000000000001, 40.412883919444383, 33.619999999999997, 45.649999999999999, 41.109999999999999, 31.030000000000001, 50.609999999999999, 47.409999999999997, 45.82, 70.879999999999995, 48.270000000000003, 48.511911371742144, 90.480000000000004, 94.290000000000006, 47.82, 42.240000000000002, 40.920000000000002, 56.68, 53.149999999999999, 70.349999999999994, 37.880000000000003, 50.119999999999997, 54.630000000000003, 39.700000000000003, 44.479999999999997, 44.159999999999997, 44.592136167942691, 55.539999999999999, 48.109999999999999, 32.840000000000003, 75.409999999999997, 66.510000000000005, 44.592136167942691, 62.609999999999999, 67.349999999999994, 44.592136167942691, 61.259999999999998, 64, 54.020000000000003, 44.592136167942691, 44.592136167942691, 44.592136167942691, 44.592136167942691, 78.780000000000001, 44.592136167942691, 44.592136167942691, 44.592136167942691, 44.592136167942691, 44.592136167942691, 44.592136167942691, 44.592136167942691, 44.592136167942691, 55.640000000000001, 53.640000000000001, 51.700000000000003, 52.990000000000002, 49.560000000000002, 38.229999999999997, 49.359999999999999, 40.109999999999999, 31.68, 53.640000000000001, 60.090000000000003, 68.200000000000003, 47.380000000000003, 73.730000000000004, 61.43, 42.310000000000002, 42.170000000000002, 32.850000000000001, 52.469999999999999, 40.32, 52.32, 43.890000000000001, 46.060000000000002, 54.75, 37.07, 37.310000000000002, 31.09, 57.509999999999998, 67.840000000000003, 44.359999999999999, 45.692118694017587, 64.010000000000005, 54.149999999999999, 31.699999999999999, 39.890000000000001, 41.299999999999997, 56.950000000000003, 44.049999999999997, 37.409999999999997, 46.810000000000002, 47.960000000000001, 50.810000000000002, 37.32, 50.43, 42.5, 52.619999999999997, 53.509999999999998, 57.590000000000003, 53.609999999999999, 46.791944017788012, 43.350000000000001, 49.219999999999999, 46.791944017788012, 49.530000000000001, 39.130000000000003, 50.990000000000002, 29.829999999999998, 31.809999999999999, 42.740000000000002, 40.729999999999997, 46.791944017788012, 57.700000000000003, 53.030000000000001, 56.439999999999998, 53.07, 32.68, 41.93, 29.02, 64.939999999999998, 50.259999999999998, 80.319999999999993, 46.791944017788012, 53.780000000000001, 58.359999999999999, 46.791944017788012, 69.439999999999998, 64.840000000000003, 46.791944017788012, 61.25, 60.210000000000001, 52.939999999999998, 57.149999999999999, 54.630000000000003, 51.670000000000002, 59.100000000000001, 52.390000000000001, 49.350000000000001, 60.899999999999999, 54.204400842253001, 41.469999999999999, 51.810000000000002, 58.719999999999999, 60.149999999999999, 59.420000000000002, 47.119999999999997, 48.549999999999997, 66.400000000000006, 66.569999999999993, 48.990000000000002, 63.640000000000001, 53.310000000000002, 44.780000000000001, 52.259999999999998, 54.204400842253001, 54.204400842253001, 78.069999999999993, 61.93, 73.019999999999996, 54.204400842253001, 75.200000000000003, 54.204400842253001, 68.280000000000001, 54.204400842253001, 65.409999999999997, 80.219999999999999, 70.390000000000001, 59.030000000000001, 90.819999999999993, 54.204400842253001, 54.204400842253001, 54.204400842253001, 54.204400842253001, 54.204400842253001, 54.204400842253001, 54.204400842253001, 54.204400842253001, 54.204400842253001, 54.204400842253001, 54.204400842253001, 54.204400842253001, 54.204400842253001, 54.204400842253001, 75.829999999999998, 64.900000000000006, 65.689999999999998, 65.689999999999998, 65.689999999999998, 65.689999999999998, 65.530000000000001],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [62.149999999999999, 70.209999999999994, 70.209999999999994, 70.209999999999994, 66.969999999999999, 75.700000000000003, 69.989999999999995, 75.519999999999996, 68, 65.530000000000001, 62.880000000000003, 70.060000000000002, 69.230000000000004, 79.730000000000004, 55.090000000000003, 54.060000000000002, 57.270000000000003, 59.909999999999997, 65.359999999999999, 59.990000000000002, 65.299999999999997, 65.829999999999998, 65.753991848766589, 56.920000000000002, 60.82, 60.819999999999993, 52.600000000000001, 54.079999999999998, 58.289999999999999, 59.509999999999998, 56.340000000000003, 53.810000000000002, 70.569999999999993, 70.569999999999993, 70.569999999999993, 70.569999999999993, 70.569999999999993, 47.780000000000001, 55.979999999999997, 55.979999999999997, 72.030000000000001, 54.659999999999997, 64.379999999999995, 51.170000000000002, 46.280000000000001, 50.869999999999997, 62.020000000000003, 54.93, 53.329999999999998, 53.729999999999997, 60.280000000000001, 78.670000000000002, 75.230000000000004, 59.280000000000001, 54.442164749241314, 53.479999999999997, 56.140000000000001, 59.299999999999997, 39.159999999999997, 41.753652493074618, 40, 47.740000000000002, 39.18, 36.399999999999999, 52.149999999999999, 46.170000000000002, 48.210000000000001, 69.799999999999997, 50.770000000000003, 50.994239189067081, 89.840000000000003, 91.719999999999999, 47.780000000000001, 43.310000000000002, 42.189999999999998, 58.520000000000003, 54.950000000000003, 69.950000000000003, 38.25, 52.009999999999998, 54.210000000000001, 39.829999999999998, 43.280000000000001, 44.170000000000002, 45.068443557551518, 55.439999999999998, 51.090000000000003, 72.329999999999998, 39.43, 68.079999999999998, 45.068443557551518, 61.039999999999999, 69.359999999999999, 45.068443557551518, 60.509999999999998, 61.850000000000001, 53.380000000000003, 45.068443557551518, 45.068443557551518, 45.068443557551518, 78.140000000000001, 45.068443557551518, 45.068443557551518, 45.068443557551518, 45.068443557551518, 45.068443557551518, 45.068443557551518, 45.068443557551518, 45.068443557551518, 45.068443557551518, 55.579999999999998, 53.710000000000001, 52.159999999999997, 53.240000000000002, 50.539999999999999, 38.619999999999997, 55.18, 51.25, 29.190000000000001, 51.380000000000003, 60.140000000000001, 55.920000000000002, 68.450000000000003, 73.810000000000002, 61.68, 50.119999999999997, 58.439999999999998, 46.07, 58.829999999999998, 51.549999999999997, 53.170000000000002, 48.770000000000003, 48.520000000000003, 52.200000000000003, 38.530000000000001, 37.270000000000003, 33.039999999999999, 58.950000000000003, 72.450000000000003, 46.490000000000002, 47.304762689009571, 64.099999999999994, 58.119999999999997, 33.100000000000001, 39.549999999999997, 40.43, 56.130000000000003, 44.299999999999997, 40.520000000000003, 48.659999999999997, 47.439999999999998, 50.770000000000003, 54.130000000000003, 49.560000000000002, 44.060000000000002, 53.210000000000001, 56.219999999999999, 51.439999999999998, 58.649999999999999, 48.398783380049544, 45.509999999999998, 49.740000000000002, 49.240000000000002, 48.398783380049544, 49.369999999999997, 49.609999999999999, 33.93, 39.619999999999997, 44.509999999999998, 43.229999999999997, 48.398783380049544, 57.939999999999998, 51.890000000000001, 56.880000000000003, 51.530000000000001, 39.030000000000001, 36.43, 39.119999999999997, 65.530000000000001, 50.079999999999998, 80.290000000000006, 48.398783380049544, 54.899999999999999, 58.009999999999998, 48.398783380049544, 70.430000000000007, 66.519999999999996, 48.398783380049544, 62.310000000000002, 61.039999999999999, 55.810000000000002, 58.340000000000003, 56.219999999999999, 51.670000000000002, 59.329999999999998, 54.039999999999999, 51.369999999999997, 61.450000000000003, 55.290812926432857, 45.979999999999997, 52.439999999999998, 59.060000000000002, 58.829999999999998, 60.009999999999998, 48.640000000000001, 48.57, 67.299999999999997, 65.829999999999998, 47.880000000000003, 61.840000000000003, 59.490000000000002, 44.100000000000001, 54.5, 55.290812926432857, 77.909999999999997, 55.290812926432857, 62.159999999999997, 73.629999999999995, 55.290812926432857, 73.980000000000004, 55.290812926432857, 66.760000000000005, 79.129999999999995, 55.290812926432857, 64.719999999999999, 69.879999999999995, 58.659999999999997, 90.409999999999997, 55.290812926432857, 55.290812926432857, 55.290812926432857, 55.290812926432857, 55.290812926432857, 55.290812926432857, 55.290812926432857, 55.290812926432857, 55.290812926432857, 55.290812926432857, 55.290812926432857, 55.290812926432857, 55.290812926432857, 55.290812926432857, 76.739999999999995, 67, 67.230000000000004, 67.230000000000004, 67.230000000000004, 67.230000000000004, 65.950000000000003],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [61.770000000000003, 70.510000000000005, 70.510000000000005, 70.510000000000005, 66.650000000000006, 75.489999999999995, 69.170000000000002, 74.569999999999993, 67.930000000000007, 65.469999999999999, 62.600000000000001, 70.219999999999999, 69.379999999999995, 79.109999999999999, 54.869999999999997, 54.450000000000003, 58.539999999999999, 60.939999999999998, 65.590000000000003, 60.030000000000001, 65.469999999999999, 65.150000000000006, 65.05650812448485, 54.229999999999997, 60.340000000000003, 60.340000000000011, 55.109999999999999, 55.450000000000003, 57.609999999999999, 59.450000000000003, 56.670000000000002, 55, 71.069999999999993, 71.069999999999993, 71.069999999999993, 71.069999999999993, 71.069999999999993, 47.75, 57.93, 57.930000000000007, 72.260000000000005, 54.659999999999997, 65.349999999999994, 49.909999999999997, 46.700000000000003, 50.32, 61.5, 54.170000000000002, 53.789999999999999, 53.549999999999997, 59.600000000000001, 78.099999999999994, 74.810000000000002, 59.450000000000003, 54.035548994135866, 53.990000000000002, 57.009999999999998, 57.859999999999999, 39.020000000000003, 41.411510818704862, 38.689999999999998, 48.520000000000003, 37.159999999999997, 38.039999999999999, 50.149999999999999, 45.880000000000003, 49.909999999999997, 69.890000000000001, 52.359999999999999, 52.57429004919188, 89.530000000000001, 92.819999999999993, 47.75, 43.640000000000001, 42.850000000000001, 59.509999999999998, 55.939999999999998, 70.700000000000003, 39.350000000000001, 52.530000000000001, 53.420000000000002, 39.890000000000001, 43.43, 42.479999999999997, 45.413387393235453, 54.539999999999999, 49.659999999999997, 69.930000000000007, 42.979999999999997, 69.569999999999993, 45.413387393235453, 62.289999999999999, 67.640000000000001, 45.413387393235453, 60.969999999999999, 60.990000000000002, 52.079999999999998, 45.413387393235453, 45.413387393235453, 45.413387393235453, 76.670000000000002, 45.413387393235453, 45.413387393235453, 45.413387393235453, 45.413387393235453, 45.413387393235453, 45.413387393235453, 45.413387393235453, 45.413387393235453, 45.413387393235453, 55.359999999999999, 51.210000000000001, 52.75, 59.020000000000003, 51.600000000000001, 38.32, 52.520000000000003, 50.780000000000001, 35.969999999999999, 49.600000000000001, 60.689999999999998, 58.219999999999999, 69.310000000000002, 74.200000000000003, 53.329999999999998, 60.960000000000001, 60.710000000000001, 50.780000000000001, 59.600000000000001, 53.590000000000003, 54.479999999999997, 50.149999999999999, 49.289999999999999, 53.390000000000001, 38.270000000000003, 35.640000000000001, 30.489999999999998, 59.700000000000003, 77.840000000000003, 43.880000000000003, 47.706746707766705, 63.909999999999997, 59.789999999999999, 33.829999999999998, 36.719999999999999, 39.450000000000003, 56.450000000000003, 44.43, 43.920000000000002, 46.979999999999997, 45.329999999999998, 51.009999999999998, 54.490000000000002, 50.469999999999999, 43.810000000000002, 53.909999999999997, 54.18, 51.969999999999999, 60.409999999999997, 48.326636252496805, 41.93, 49.280000000000001, 48.200000000000003, 47.670000000000002, 48.326636252496805, 49.170000000000002, 32.759999999999998, 48.5, 46.039999999999999, 42.759999999999998, 48.326636252496805, 57.75, 48.799999999999997, 54.119999999999997, 53.350000000000001, 41.740000000000002, 36.350000000000001, 45.18, 66.189999999999998, 51.350000000000001, 80.680000000000007, 48.326636252496805, 54.170000000000002, 60.18, 48.326636252496805, 70.980000000000004, 66.510000000000005, 48.326636252496805, 63.200000000000003, 60.759999999999998, 56.119999999999997, 58.979999999999997, 56.899999999999999, 51.670000000000002, 63.520000000000003, 54.310000000000002, 51.549999999999997, 61.890000000000001, 55.822577816529446, 49.799999999999997, 53.200000000000003, 59.850000000000001, 58.380000000000003, 47.630000000000003, 49.469999999999999, 60.329999999999998, 67.459999999999994, 64.980000000000004, 48.350000000000001, 61.25, 61.710000000000001, 44.299999999999997, 57.079999999999998, 55.822577816529446, 77.900000000000006, 55.822577816529446, 61.890000000000001, 73.319999999999993, 55.822577816529446, 73.900000000000006, 55.822577816529446, 66.930000000000007, 78.730000000000004, 55.822577816529446, 63.719999999999999, 68.530000000000001, 56.869999999999997, 90.129999999999995, 55.822577816529446, 55.822577816529446, 55.822577816529446, 55.822577816529446, 55.822577816529446, 55.822577816529446, 55.822577816529446, 55.822577816529446, 55.822577816529446, 55.822577816529446, 55.822577816529446, 55.822577816529446, 55.822577816529446, 55.822577816529446, 77.439999999999998, 67.959999999999994, 68.219999999999999, 68.219999999999999, 68.219999999999999, 68.219999999999999, 65.700000000000003],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [61.799999999999997, 70.290000000000006, 70.290000000000006, 70.290000000000006, 66.430000000000007, 76.620000000000005, 69.659999999999997, 74.140000000000001, 67.819999999999993, 65.359999999999999, 62.560000000000002, 70.069999999999993, 69.310000000000002, 80.079999999999998, 55.909999999999997, 55.100000000000001, 58.780000000000001, 60.439999999999998, 64.760000000000005, 60.369999999999997, 65.090000000000003, 64.909999999999997, 64.814298731488478, 53.82, 59.759999999999998, 59.759999999999998, 56.909999999999997, 55.890000000000001, 57.979999999999997, 59.799999999999997, 56.700000000000003, 55.18, 70.909999999999997, 70.909999999999997, 70.909999999999997, 70.909999999999997, 70.909999999999997, 47.670000000000002, 56.289999999999999, 56.289999999999999, 72.090000000000003, 51.57, 65.420000000000002, 50.960000000000001, 47.969999999999999, 50.93, 60.259999999999998, 54.450000000000003, 53.109999999999999, 54.539999999999999, 60.130000000000003, 77.870000000000005, 79.969999999999999, 59.909999999999997, 54.147506860667171, 53.539999999999999, 56.030000000000001, 57.299999999999997, 36.82, 40.646096233538117, 37.579999999999998, 47.630000000000003, 38.880000000000003, 41.840000000000003, 49.93, 42.380000000000003, 50.770000000000003, 69.540000000000006, 52.68, 52.888186033806065, 88.640000000000001, 93.530000000000001, 47.670000000000002, 43.609999999999999, 42.579999999999998, 59.689999999999998, 56.57, 70.370000000000005, 39.609999999999999, 51.880000000000003, 52.240000000000002, 39.719999999999999, 41.5, 41.530000000000001, 44.989415272973268, 54.490000000000002, 49.32, 69.409999999999997, 40.850000000000001, 68.439999999999998, 44.989415272973268, 60.859999999999999, 67.049999999999997, 44.989415272973268, 62.780000000000001, 60.710000000000001, 50.68, 44.989415272973268, 44.989415272973268, 44.989415272973268, 77.450000000000003, 44.989415272973268, 44.989415272973268, 44.989415272973268, 44.989415272973268, 44.989415272973268, 44.989415272973268, 44.989415272973268, 44.989415272973268, 44.989415272973268, 54.850000000000001, 51.380000000000003, 53.25, 58.329999999999998, 51.850000000000001, 38.060000000000002, 50.659999999999997, 47.030000000000001, 30.280000000000001, 42.159999999999997, 60.369999999999997, 56.710000000000001, 70.560000000000002, 75.420000000000002, 52.020000000000003, 59, 56.789999999999999, 47.299999999999997, 57.439999999999998, 51.310000000000002, 53.170000000000002, 51.369999999999997, 47.640000000000001, 53.100000000000001, 37.82, 34.890000000000001, 33.509999999999998, 60.270000000000003, 64.069999999999993, 43.920000000000002, 47.194489953323099, 64.329999999999998, 55.799999999999997, 33.75, 36.630000000000003, 37.950000000000003, 55.850000000000001, 43.479999999999997, 46.759999999999998, 43.479999999999997, 40.950000000000003, 51.049999999999997, 55.75, 50.359999999999999, 43.969999999999999, 53.119999999999997, 52.090000000000003, 52.170000000000002, 47.554033730287543, 60.590000000000003, 37.939999999999998, 47.880000000000003, 48.399999999999999, 49.329999999999998, 47.554033730287543, 49.259999999999998, 32, 44.130000000000003, 44.289999999999999, 42.939999999999998, 47.554033730287543, 58.619999999999997, 53.43, 56.969999999999999, 54.509999999999998, 42.649999999999999, 32.520000000000003, 40.899999999999999, 66.590000000000003, 53.07, 79.209999999999994, 47.554033730287543, 54.200000000000003, 60.520000000000003, 47.554033730287543, 71.129999999999995, 66.349999999999994, 47.554033730287543, 63.340000000000003, 60.149999999999999, 57.350000000000001, 58.280000000000001, 57.609999999999999, 51.670000000000002, 65.359999999999999, 53.93, 51.229999999999997, 62.469999999999999, 48.740000000000002, 55.565589883116751, 53.520000000000003, 59.43, 56.850000000000001, 47.960000000000001, 50.280000000000001, 60.119999999999997, 68.340000000000003, 64.599999999999994, 48.439999999999998, 59.780000000000001, 60.520000000000003, 44.32, 48.189999999999998, 55.565589883116751, 76.140000000000001, 55.565589883116751, 62.609999999999999, 72.629999999999995, 55.565589883116751, 75.049999999999997, 55.565589883116751, 67.019999999999996, 78.989999999999995, 55.565589883116751, 63.460000000000001, 67.390000000000001, 60.549999999999997, 55.565589883116751, 89.709999999999994, 55.565589883116751, 55.565589883116751, 55.565589883116751, 55.565589883116751, 55.565589883116751, 55.565589883116751, 55.565589883116751, 55.565589883116751, 55.565589883116751, 55.565589883116751, 55.565589883116751, 55.565589883116751, 55.565589883116751, 77.030000000000001, 67.120000000000005, 67.010000000000005, 67.010000000000005, 67.010000000000005, 67.010000000000005, 65.129999999999995],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [62.119999999999997, 70.099999999999994, 70.099999999999994, 70.099999999999994, 66.340000000000003, 76.150000000000006, 69.400000000000006, 73.260000000000005, 67.870000000000005, 65.159999999999997, 62.859999999999999, 70.030000000000001, 69.629999999999995, 79.650000000000006, 56.409999999999997, 56.409999999999997, 58.140000000000001, 61.420000000000002, 64.549999999999997, 60.880000000000003, 65.230000000000004, 64.920000000000002, 64.829777187074498, 54.579999999999998, 59.840000000000003, 59.840000000000003, 56.960000000000001, 55.880000000000003, 60.859999999999999, 59.640000000000001, 56.560000000000002, 56.119999999999997, 70.920000000000002, 70.920000000000002, 70.920000000000002, 70.920000000000002, 70.920000000000002, 48.43, 54.57, 54.57, 72.060000000000002, 54.140000000000001, 65.349999999999994, 51.329999999999998, 47.759999999999998, 51.009999999999998, 60.270000000000003, 53.729999999999997, 53.93, 54.32, 59.170000000000002, 77.659999999999997, 79.930000000000007, 56.340000000000003, 54.126063413453842, 54.469999999999999, 53.43, 55.450000000000003, 34.590000000000003, 39.295228415760739, 34.799999999999997, 47.810000000000002, 36.75, 44.049999999999997, 49.770000000000003, 39.799999999999997, 52.619999999999997, 69.400000000000006, 53.270000000000003, 53.476307729655048, 88.700000000000003, 94.290000000000006, 48.43, 43.399999999999999, 42.170000000000002, 59.789999999999999, 57.060000000000002, 69.359999999999999, 40.25, 52.990000000000002, 53.640000000000001, 39.490000000000002, 41.649999999999999, 41.609999999999999, 45.670371535426789, 53.920000000000002, 48.149999999999999, 68.299999999999997, 37.340000000000003, 59.789999999999999, 66.814999999999998, 45.670371535426789, 69.569999999999993, 45.670371535426789, 64.120000000000005, 66.760000000000005, 50.520000000000003, 45.670371535426789, 45.670371535426789, 45.670371535426789, 78.310000000000002, 45.670371535426789, 45.670371535426789, 45.670371535426789, 45.670371535426789, 45.670371535426789, 45.670371535426789, 45.670371535426789, 45.670371535426789, 45.670371535426789, 55.689999999999998, 50.890000000000001, 52.93, 59.479999999999997, 51.590000000000003, 39.93, 48.590000000000003, 44.189999999999998, 24.989999999999998, 42.490000000000002, 60.479999999999997, 52.369999999999997, 70.480000000000004, 76.989999999999995, 47.509999999999998, 59.979999999999997, 51.920000000000002, 43.090000000000003, 55.759999999999998, 45.719999999999999, 51.640000000000001, 51.289999999999999, 45.289999999999999, 53.07, 36.619999999999997, 33.950000000000003, 37.530000000000001, 59.460000000000001, 54.479999999999997, 43.43, 46.348423864607604, 64.189999999999998, 52.020000000000003, 33.109999999999999, 36.409999999999997, 37.240000000000002, 56.020000000000003, 43.340000000000003, 43.210000000000001, 43.68, 40, 48.740000000000002, 55.619999999999997, 50.450000000000003, 43.549999999999997, 53.450000000000003, 54.240000000000002, 52.170000000000002, 46.970318455907432, 55.979999999999997, 35.07, 49.700000000000003, 48.799999999999997, 49.109999999999999, 46.970318455907432, 50.530000000000001, 32.350000000000001, 36.539999999999999, 42.939999999999998, 43.009999999999998, 46.970318455907432, 57.850000000000001, 54.899999999999999, 58.439999999999998, 41.119999999999997, 52.43, 50.259999999999998, 40.479999999999997, 66.900000000000006, 53.32, 77.519999999999996, 46.970318455907432, 52.649999999999999, 58.520000000000003, 46.970318455907432, 72.390000000000001, 66.599999999999994, 46.970318455907432, 62.649999999999999, 59.93, 56.369999999999997, 58, 57.649999999999999, 51.670000000000002, 64.969999999999999, 53.539999999999999, 51.439999999999998, 63.060000000000002, 49.090000000000003, 55.685260626954964, 53.490000000000002, 58.630000000000003, 57.340000000000003, 48.880000000000003, 51.009999999999998, 60.109999999999999, 68.670000000000002, 66.010000000000005, 49.090000000000003, 59.25, 57.240000000000002, 45.950000000000003, 50.829999999999998, 55.685260626954964, 75.950000000000003, 63.960000000000001, 55.685260626954964, 72.379999999999995, 55.685260626954964, 75.590000000000003, 55.685260626954964, 66.030000000000001, 79.730000000000004, 55.685260626954964, 63.460000000000001, 65.810000000000002, 53.409999999999997, 55.685260626954964, 89.620000000000005, 55.685260626954964, 55.685260626954964, 55.685260626954964, 55.685260626954964, 55.685260626954964, 55.685260626954964, 55.685260626954964, 55.685260626954964, 55.685260626954964, 55.685260626954964, 55.685260626954964, 55.685260626954964, 55.685260626954964, 76.739999999999995, 66.870000000000005, 66.650000000000006, 66.650000000000006, 66.650000000000006, 66.650000000000006, 65.629999999999995],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [62.380000000000003, 70.040000000000006, 70.040000000000006, 70.040000000000006, 66.25, 76.650000000000006, 69.469999999999999, 72.980000000000004, 68.180000000000007, 65.629999999999995, 63.130000000000003, 69.969999999999999, 69.349999999999994, 78.980000000000004, 56.880000000000003, 56.960000000000001, 57.93, 61.490000000000002, 64.090000000000003, 61.549999999999997, 65.519999999999996, 65.069999999999993, 64.961663630922615, 52.799999999999997, 60.189999999999998, 60.189999999999998, 58.450000000000003, 56.420000000000002, 61.420000000000002, 59.560000000000002, 56.420000000000002, 57.460000000000001, 71.090000000000003, 71.090000000000003, 71.090000000000003, 71.090000000000003, 71.090000000000003, 50.079999999999998, 57.310000000000002, 57.309999999999995, 71.859999999999999, 52.159999999999997, 65.989999999999995, 54.490000000000002, 48.409999999999997, 51.170000000000002, 60.770000000000003, 54.57, 54.68, 54.990000000000002, 58.719999999999999, 77.560000000000002, 78.439999999999998, 58.090000000000003, 54.561535144693103, 56.359999999999999, 54.170000000000002, 55.530000000000001, 35.130000000000003, 40.215495377955278, 36.490000000000002, 37.079999999999998, 48.43, 48.270000000000003, 49.850000000000001, 39.740000000000002, 53.969999999999999, 69.629999999999995, 54.270000000000003, 54.478214338203962, 90.010000000000005, 93.680000000000007, 50.079999999999998, 44.219999999999999, 42.469999999999999, 60.850000000000001, 58.280000000000001, 70.870000000000005, 40.689999999999998, 54.149999999999999, 55.75, 38.850000000000001, 41.840000000000003, 41.509999999999998, 46.369311719481594, 53.759999999999998, 49.170000000000002, 70.629999999999995, 38.18, 59.789999999999999, 65.189999999999998, 46.369311719481594, 68.980000000000004, 46.369311719481594, 69.180000000000007, 66.140000000000001, 49.270000000000003, 46.369311719481594, 46.369311719481594, 46.369311719481594, 76.909999999999997, 46.369311719481594, 46.369311719481594, 46.369311719481594, 46.369311719481594, 46.369311719481594, 46.369311719481594, 46.369311719481594, 46.369311719481594, 46.369311719481594, 57.240000000000002, 50.850000000000001, 53.619999999999997, 55.469999999999999, 52.020000000000003, 43.469999999999999, 50.119999999999997, 44.420000000000002, 24.989999999999998, 43.340000000000003, 61.219999999999999, 54.729999999999997, 70.920000000000002, 79.310000000000002, 61.109999999999999, 50.670000000000002, 54.719999999999999, 46.450000000000003, 54.799999999999997, 48.469999999999999, 50.759999999999998, 37.640000000000001, 46.399999999999999, 53.479999999999997, 36.670000000000002, 33.5, 40.469999999999999, 59.939999999999998, 55.770000000000003, 42.130000000000003, 43.865694139463855, 64.269999999999996, 49.729999999999997, 35.859999999999999, 37.149999999999999, 36.829999999999998, 55.960000000000001, 43, 42.119999999999997, 45.140000000000001, 40.990000000000002, 49.799999999999997, 53.590000000000003, 51.030000000000001, 44.869999999999997, 52.420000000000002, 54.600000000000001, 50.950000000000003, 46.809497889355804, 52.68, 35.200000000000003, 49.119999999999997, 48.030000000000001, 47.829999999999998, 46.809497889355804, 51.240000000000002, 32.799999999999997, 40.380000000000003, 41.350000000000001, 40.130000000000003, 46.809497889355804, 58.43, 54.770000000000003, 61.219999999999999, 40.469999999999999, 53.490000000000002, 51.240000000000002, 45.299999999999997, 67.420000000000002, 52.100000000000001, 76.980000000000004, 46.809497889355804, 51.890000000000001, 60.090000000000003, 46.809497889355804, 72.670000000000002, 67.810000000000002, 46.809497889355804, 63.07, 59.979999999999997, 55.439999999999998, 58.82, 58.140000000000001, 51.670000000000002, 65.060000000000002, 54.390000000000001, 51.799999999999997, 62.520000000000003, 50.719999999999999, 56.077178115253723, 54.359999999999999, 58.289999999999999, 57.659999999999997, 49.560000000000002, 50.469999999999999, 59.969999999999999, 69.200000000000003, 66.209999999999994, 47.780000000000001, 59.810000000000002, 60.210000000000001, 44.710000000000001, 55.380000000000003, 56.077178115253723, 74.489999999999995, 64.170000000000002, 56.077178115253723, 56.077178115253723, 73.25, 76.650000000000006, 56.077178115253723, 66.859999999999999, 78.329999999999998, 56.077178115253723, 64.390000000000001, 66.700000000000003, 55.439999999999998, 56.077178115253723, 89.150000000000006, 56.077178115253723, 56.077178115253723, 56.077178115253723, 56.077178115253723, 56.077178115253723, 56.077178115253723, 56.077178115253723, 56.077178115253723, 56.077178115253723, 56.077178115253723, 56.077178115253723, 56.077178115253723, 56.077178115253723, 77.180000000000007, 67.670000000000002, 66.079999999999998, 66.079999999999998, 66.079999999999998, 66.079999999999998, 65.569999999999993],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [63.299999999999997, 71.159999999999997, 71.159999999999997, 71.159999999999997, 66.900000000000006, 76.739999999999995, 68.510000000000005, 74.170000000000002, 68.239999999999995, 65.579999999999998, 62.890000000000001, 69.629999999999995, 69.519999999999996, 79.780000000000001, 57.159999999999997, 58.369999999999997, 59.759999999999998, 61.280000000000001, 63.420000000000002, 62.979999999999997, 65.840000000000003, 65.519999999999996, 65.41582249074817, 53.859999999999999, 60.119999999999997, 60.119999999999997, 59.979999999999997, 56.630000000000003, 61.450000000000003, 59.840000000000003, 57.079999999999998, 55.990000000000002, 72.599999999999994, 72.599999999999994, 72.599999999999994, 72.599999999999994, 72.599999999999994, 48.07, 59.600000000000001, 59.600000000000001, 71.760000000000005, 56.149999999999999, 65.209999999999994, 55.789999999999999, 48.350000000000001, 51.859999999999999, 59.090000000000003, 54.659999999999997, 54.090000000000003, 56.560000000000002, 58, 79.819999999999993, 76.629999999999995, 57.909999999999997, 54.619820394702934, 54.200000000000003, 56.369999999999997, 56.100000000000001, 35.640000000000001, 40.963145768180624, 42.350000000000001, 35.25, 49.009999999999998, 48.270000000000003, 49.799999999999997, 40.490000000000002, 53.240000000000002, 69.480000000000004, 54.460000000000001, 54.660848906167296, 89.430000000000007, 88.670000000000002, 48.07, 44.409999999999997, 41.829999999999998, 61.409999999999997, 58.009999999999998, 72.019999999999996, 40.490000000000002, 54.759999999999998, 57.740000000000002, 36.600000000000001, 44.030000000000001, 41.049999999999997, 46.60847478269757, 53.439999999999998, 48.640000000000001, 70.700000000000003, 41.450000000000003, 59.789999999999999, 65.189999999999998, 46.60847478269757, 69.439999999999998, 46.60847478269757, 69.180000000000007, 67.129999999999995, 50.899999999999999, 46.60847478269757, 46.60847478269757, 46.60847478269757, 74.239999999999995, 46.60847478269757, 46.60847478269757, 46.60847478269757, 46.60847478269757, 46.60847478269757, 46.60847478269757, 46.60847478269757, 46.60847478269757, 46.60847478269757, 57.009999999999998, 51.509999999999998, 53.68, 54.689999999999998, 53.939999999999998, 43.469999999999999, 49.200000000000003, 54.82, 24.989999999999998, 41.270000000000003, 62.030000000000001, 56.859999999999999, 71.819999999999993, 87.420000000000002, 60.549999999999997, 55.020000000000003, 69.060000000000002, 52.740000000000002, 56.939999999999998, 53.310000000000002, 52.030000000000001, 36.240000000000002, 49.490000000000002, 53.200000000000003, 36.090000000000003, 34.43, 43.579999999999998, 60.18, 93.629999999999995, 40.68, 45.594685012996209, 64.719999999999999, 46.390000000000001, 35.710000000000001, 36.829999999999998, 34.240000000000002, 53.979999999999997, 42.840000000000003, 44.399999999999999, 45.189999999999998, 41.520000000000003, 50.390000000000001, 52.729999999999997, 51.759999999999998, 40.829999999999998, 53.329999999999998, 53.619999999999997, 50.520000000000003, 46.455586793038869, 52.890000000000001, 36.530000000000001, 47.899999999999999, 46.590000000000003, 45.479999999999997, 46.455586793038869, 51.399999999999999, 30.98, 59.920000000000002, 41.600000000000001, 39, 46.455586793038869, 58.770000000000003, 53.950000000000003, 65.920000000000002, 44.899999999999999, 52.460000000000001, 50.189999999999998, 51.509999999999998, 68.030000000000001, 53.789999999999999, 77.269999999999996, 46.455586793038869, 51.450000000000003, 54.840000000000003, 46.455586793038869, 71.019999999999996, 65.640000000000001, 46.455586793038869, 61.450000000000003, 60.130000000000003, 55.289999999999999, 56.299999999999997, 59.950000000000003, 51.670000000000002, 64.519999999999996, 54.310000000000002, 53.270000000000003, 62.020000000000003, 52.810000000000002, 53.920000000000002, 56.339847848968205, 57.200000000000003, 58.340000000000003, 48.149999999999999, 49.079999999999998, 61.439999999999998, 68.230000000000004, 71.239999999999995, 49.579999999999998, 59.740000000000002, 63.640000000000001, 38.920000000000002, 51.890000000000001, 80.349999999999994, 56.339847848968205, 61.350000000000001, 56.339847848968205, 56.339847848968205, 73.379999999999995, 72.159999999999997, 56.339847848968205, 66.810000000000002, 78.329999999999998, 56.339847848968205, 63.310000000000002, 66.409999999999997, 56.339847848968205, 57.890000000000001, 90.329999999999998, 56.339847848968205, 56.339847848968205, 56.339847848968205, 56.339847848968205, 56.339847848968205, 56.339847848968205, 56.339847848968205, 56.339847848968205, 56.339847848968205, 56.339847848968205, 56.339847848968205, 56.339847848968205, 56.339847848968205, 78.140000000000001, 67.670000000000002, 66.329999999999998, 66.329999999999998, 66.329999999999998, 66.329999999999998, 66.670000000000002],
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
            "title": "Value added in the services sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [62.880000000000003, 70.340000000000003, 70.340000000000003, 70.340000000000003, 64.989999999999995, 77.739999999999995, 68.150000000000006, 73.230000000000004, 67.430000000000007, 64.670000000000002, 62.409999999999997, 69.409999999999997, 68.799999999999997, 79.319999999999993, 56.899999999999999, 58.759999999999998, 57.630000000000003, 60.770000000000003, 63.469999999999999, 62.539999999999999, 64.969999999999999, 66.700000000000003, 66.590033067413344, 54.509999999999998, 60.280000000000001, 60.280000000000001, 59.130000000000003, 56.899999999999999, 62.270000000000003, 60.399999999999999, 57.710000000000001, 55.359999999999999, 71.599999999999994, 71.599999999999994, 71.599999999999994, 71.599999999999994, 71.599999999999994, 47.939999999999998, 51.810000000000002, 51.810000000000002, 71.920000000000002, 56.149999999999999, 64.819999999999993, 51.909999999999997, 47.859999999999999, 51.390000000000001, 59.509999999999998, 53.869999999999997, 54.640000000000001, 56.850000000000001, 59.859999999999999, 79.379999999999995, 80.090000000000003, 56.509999999999998, 54.535155503147678, 52.75, 54.100000000000001, 53.920000000000002, 35.549999999999997, 40.066469375888303, 37.700000000000003, 33.380000000000003, 48.700000000000003, 48.270000000000003, 50.359999999999999, 39.640000000000001, 52.799999999999997, 69.890000000000001, 53.469999999999999, 53.678585933273794, 89.689999999999998, 94.180000000000007, 47.939999999999998, 42.82, 41.210000000000001, 61.039999999999999, 56.299999999999997, 70.280000000000001, 41.509999999999998, 51.549999999999997, 55.640000000000001, 34.18, 44.030000000000001, 38.850000000000001, 45.533017723896464, 53.780000000000001, 48.640000000000001, 73.25, 37.630000000000003, 59.789999999999999, 65.189999999999998, 45.533017723896464, 69.790000000000006, 45.533017723896464, 69.180000000000007, 66.650000000000006, 49.659999999999997, 45.533017723896464, 45.533017723896464, 45.533017723896464, 73.230000000000004, 45.533017723896464, 45.533017723896464, 45.533017723896464, 45.533017723896464, 45.533017723896464, 45.533017723896464, 45.533017723896464, 45.533017723896464, 45.533017723896464, 56.979999999999997, 51.299999999999997, 52.109999999999999, 46.509999999999998, 51.539999999999999, 43.990000000000002, 47.329999999999998, 43.469999999999999, 24.989999999999998, 41.270000000000003, 61.659999999999997, 51.600000000000001, 72.450000000000003, 94.150000000000006, 60.079999999999998, 50.530000000000001, 69.060000000000002, 44.75, 52.030000000000001, 46.520000000000003, 52.479999999999997, 9.6899999999999995, 44.600000000000001, 51.549999999999997, 37.049999999999997, 35.399999999999999, 35.659999999999997, 60.140000000000001, 25.920000000000002, 40.390000000000001, 35.729402191269152, 63.020000000000003, 43.789999999999999, 33.18, 36.539999999999999, 32.549999999999997, 55.119999999999997, 41.850000000000001, 40.93, 45.93, 40.079999999999998, 49.539999999999999, 54.039999999999999, 51.060000000000002, 42.090000000000003, 54.039999999999999, 49.880000000000003, 45.846509197491173, 50.509999999999998, 56.640000000000001, 35.289999999999999, 45.880000000000003, 47.75, 44.810000000000002, 45.846509197491173, 51.090000000000003, 32.329999999999998, 55.530000000000001, 37.729999999999997, 38.68, 45.846509197491173, 57.689999999999998, 53.350000000000001, 60.219999999999999, 38.649999999999999, 55.090000000000003, 50.189999999999998, 46.259999999999998, 66.909999999999997, 53.899999999999999, 77.269999999999996, 45.846509197491173, 50.93, 53.539999999999999, 45.846509197491173, 72.25, 67.329999999999998, 45.846509197491173, 57.759999999999998, 59.159999999999997, 52.509999999999998, 54.420000000000002, 58.030000000000001, 51.670000000000002, 61.990000000000002, 49.439999999999998, 53.409999999999997, 62.189999999999998, 50.579999999999998, 51.740000000000002, 54.630000000000003, 54.190728886137165, 56.960000000000001, 46.990000000000002, 46.479999999999997, 60.039999999999999, 66.739999999999995, 68.120000000000005, 50.130000000000003, 58.219999999999999, 54.020000000000003, 30.829999999999998, 51.740000000000002, 79.129999999999995, 54.190728886137165, 61.829999999999998, 54.190728886137165, 54.190728886137165, 71.099999999999994, 72.159999999999997, 54.190728886137165, 65.219999999999999, 78.329999999999998, 54.190728886137165, 63.740000000000002, 66.620000000000005, 54.190728886137165, 56, 92.530000000000001, 54.190728886137165, 54.190728886137165, 54.190728886137165, 54.190728886137165, 54.190728886137165, 54.190728886137165, 54.190728886137165, 54.190728886137165, 54.190728886137165, 54.190728886137165, 54.190728886137165, 54.190728886137165, 54.190728886137165, 77.599999999999994, 67.670000000000002, 65.650000000000006, 65.650000000000006, 65.650000000000006, 65.650000000000006, 66.670000000000002],
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

  
