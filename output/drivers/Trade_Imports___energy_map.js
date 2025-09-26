(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Trade_Imports___energy_map') 

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
    "b55c2d815c6a": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c2d815c6a",
  "attrs": {
    "b55c2d815c6a": {
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
        "title": "Energy imports"
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
        "title": "Energy imports",
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
      "z": [59.979999999999997, 48.950000000000003, 48.950000000000003, 48.950000000000003, 83.540000000000006, 99.959999999999994, 66.010000000000005, 97.939999999999998, 75.269999999999996, 82.730000000000004, 70.189999999999998, 27.510000000000002, 76.390000000000001, 98.079999999999998, 12.4, 24.559999999999999, 64.640000000000001, 40.979999999999997, 59.829999999999998, 24.969999999999999, 38.909999999999997, -41.719999999999999, -41.719999999999999, -41.719999999999999, 56.810000000000002, 56.810000000000002, 25.710000000000001, 60.170000000000002, 47.399999999999999, 51.82, 52.759999999999998, 86.939999999999998, -10.720000000000001, -10.667541639917292, -10.667541639917292, -10.667541639917292, 100, 19.66, -768.21000000000004, -768.21000000000004, 52.740000000000002, 52.740000000000002, 22.870000000000001, 45.049999999999997, 49.009999999999998, 28.18, 20.82, 49.149999999999999, 96.680000000000007, 40.259999999999998, 39.25, 40.462460476332289, 40.462460476332289, 40.462460476332289, 40.462460476332289, 69.709999999999994, -73.469999999999999, -136.59999999999999, -9.7100000000000009, 3.7999999999999998, 86.599999999999994, -63.25, 32.359999999999999, 50.200000000000003, -234.03, 64.510000000000005, 18.98, 83.680000000000007, 3.0899999999999999, 3.591718770026934, 99.629999999999995, 3.591718770026934, 19.66, -53.990000000000002, -30.32, 47.090000000000003, 44.649999999999999, 98.400000000000006, -30.379999999999999, -50.700000000000003, 46.380000000000003, 19.57, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -746.20000000000005, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, 81.260000000000005, 18.469999999999999, 20.07, 10.49, 10.49, 10.49, -97.060000000000002, -216.81, -286.64999999999998, -119.44, 96.260000000000005, 94.459999999999994, 94.799999999999997, -313.69999999999999, -177.28789993199342, -595.15999999999997, -452.00999999999999, -94.200000000000003, -412.13999999999999, -349.87, -27.149999999999999, -405.04000000000002, -73.140000000000001, 87.799999999999997, 13.039999999999999, -118.92561641121918, 19.629999999999999, -118.92561641121918, -360.99000000000001, -118.92561641121918, -118.92561641121918, -30.379999999999999, -118.86, -7.1200000000000001, 4.4000000000000004, 6.7999999999999998, 13.06, -52.926004228364313, 37.020000000000003, 4.1100000000000003, -2.77, -52.926004228364313, -501.44, -60.630000000000003, -52.926004228364313, 9.1099999999999994, -52.926004228364313, 6.1299999999999999, 50.740000000000002, -52.926004228364313, -52.926004228364313, -52.926004228364313, 33.93, -52.926004228364313, -52.926004228364313, 17.550000000000001, -52.926004228364313, -52.926004228364313, -1169.75, -52.926004228364313, 29.670000000000002, -52.926004228364313, 66.540000000000006, 46.43, -52.926004228364313, -603.50999999999999, -52.926004228364313, 75.840000000000003, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, 10.390000000000001, -52.049999999999997, -41.420000000000002, 66.849999999999994, -185.31999999999999, -238.03, 53.890000000000001, 18.32, -153.69999999999999, 23.899999999999999, -0.084881634482109017, -91.659999999999997, 86.650000000000006, 24.550000000000001, 55.509999999999998, 45.810000000000002, -67.010000000000005, 48.079999999999998, 56.390000000000001, -0.084881634482109017, 72.310000000000002, 89.340000000000003, -125.41, -0.084881634482109017, -39.259999999999998, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, 27.73, -47.049999999999997, -127.83, -127.83, -127.83, -127.83, 21.199999999999999],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [59.979999999999997, 48.950000000000003, 48.950000000000003, 48.950000000000003, 83.540000000000006, 99.959999999999994, 66.010000000000005, 97.939999999999998, 75.269999999999996, 82.730000000000004, 70.189999999999998, 27.510000000000002, 76.390000000000001, 98.079999999999998, 12.4, 24.559999999999999, 64.640000000000001, 40.979999999999997, 59.829999999999998, 24.969999999999999, 38.909999999999997, -41.719999999999999, -41.719999999999999, -41.719999999999999, 56.810000000000002, 56.810000000000002, 25.710000000000001, 60.170000000000002, 47.399999999999999, 51.82, 52.759999999999998, 86.939999999999998, -10.720000000000001, -10.667541639917292, -10.667541639917292, -10.667541639917292, 100, 19.66, -768.21000000000004, -768.21000000000004, 52.740000000000002, 52.740000000000002, 22.870000000000001, 45.049999999999997, 49.009999999999998, 28.18, 20.82, 49.149999999999999, 96.680000000000007, 40.259999999999998, 39.25, 40.462460476332289, 40.462460476332289, 40.462460476332289, 40.462460476332289, 69.709999999999994, -73.469999999999999, -136.59999999999999, -9.7100000000000009, 3.7999999999999998, 86.599999999999994, -63.25, 32.359999999999999, 50.200000000000003, -234.03, 64.510000000000005, 18.98, 83.680000000000007, 3.0899999999999999, 3.591718770026934, 99.629999999999995, 3.591718770026934, 19.66, -53.990000000000002, -30.32, 47.090000000000003, 44.649999999999999, 98.400000000000006, -30.379999999999999, -50.700000000000003, 46.380000000000003, 19.57, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -746.20000000000005, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, -16.685527535552481, 81.260000000000005, 18.469999999999999, 20.07, 10.49, 10.49, 10.49, -97.060000000000002, -216.81, -286.64999999999998, -119.44, 96.260000000000005, 94.459999999999994, 94.799999999999997, -313.69999999999999, -177.28789993199342, -595.15999999999997, -452.00999999999999, -94.200000000000003, -412.13999999999999, -349.87, -27.149999999999999, -405.04000000000002, -73.140000000000001, 87.799999999999997, 13.039999999999999, -118.92561641121918, 19.629999999999999, -118.92561641121918, -360.99000000000001, -118.92561641121918, -118.92561641121918, -30.379999999999999, -118.86, -7.1200000000000001, 4.4000000000000004, 6.7999999999999998, 13.06, -52.926004228364313, 37.020000000000003, 4.1100000000000003, -2.77, -52.926004228364313, -501.44, -60.630000000000003, -52.926004228364313, 9.1099999999999994, -52.926004228364313, 6.1299999999999999, 50.740000000000002, -52.926004228364313, -52.926004228364313, -52.926004228364313, 33.93, -52.926004228364313, -52.926004228364313, 17.550000000000001, -52.926004228364313, -52.926004228364313, -1169.75, -52.926004228364313, 29.670000000000002, -52.926004228364313, 66.540000000000006, 46.43, -52.926004228364313, -603.50999999999999, -52.926004228364313, 75.840000000000003, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, -52.926004228364313, 10.390000000000001, -52.049999999999997, -41.420000000000002, 66.849999999999994, -185.31999999999999, -238.03, 53.890000000000001, 18.32, -153.69999999999999, 23.899999999999999, -0.084881634482109017, -91.659999999999997, 86.650000000000006, 24.550000000000001, 55.509999999999998, 45.810000000000002, -67.010000000000005, 48.079999999999998, 56.390000000000001, -0.084881634482109017, 72.310000000000002, 89.340000000000003, -125.41, -0.084881634482109017, -39.259999999999998, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, -0.084881634482109017, 27.73, -47.049999999999997, -127.83, -127.83, -127.83, -127.83, 21.199999999999999],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [59.740000000000002, 49.240000000000002, 49.240000000000002, 49.240000000000002, 84.060000000000002, 99.950000000000003, 65.310000000000002, 97.709999999999994, 76.590000000000003, 84.909999999999997, 69.650000000000006, 17.59, 76.409999999999997, 97.989999999999995, 13.75, 24.039999999999999, 64.849999999999994, 43.439999999999998, 58.380000000000003, 30.07, 34.710000000000001, -60.07, -60.070000000000007, -60.070000000000007, 57.409999999999997, 57.409999999999997, 26.68, 60.729999999999997, 45.469999999999999, 50.579999999999998, 51.490000000000002, 87.049999999999997, -1.71, -1.6613367688816865, -1.6613367688816865, -1.6613367688816865, 100, 21.379999999999999, -764.51999999999998, -764.51999999999998, 53.719999999999999, 53.719999999999999, 24.09, 44.240000000000002, 46, 33.229999999999997, 25.399999999999999, 53.719999999999999, 96.459999999999994, 41.82, 39.25, 44.251687954786703, 44.251687954786703, 44.251687954786703, 44.251687954786703, 70.129999999999995, -81.079999999999998, -125.81999999999999, -14.33, 1.23, 86.840000000000003, -56.920000000000002, 36.380000000000003, 45.390000000000001, -217.55000000000001, 63.810000000000002, 19.699999999999999, 82.069999999999993, 4.8899999999999997, 5.3831197708730452, 99.599999999999994, 5.3831197708730452, 21.379999999999999, -50.170000000000002, -47.75, 46.159999999999997, 46.759999999999998, 98.709999999999994, -36.43, -52.079999999999998, 45.840000000000003, 24.48, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -803.44000000000005, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, -19.512957275075895, 81.609999999999999, 16.030000000000001, 20.780000000000001, 9.7699999999999996, 9.7699999999999996, 9.7699999999999996, -88.109999999999999, -300.63999999999999, -233.63999999999999, -62.229999999999997, 91.069999999999993, 95.269999999999996, 95.109999999999999, -306.33999999999997, -177.97637875945858, -559.38, -462.60000000000002, -91.980000000000004, -405.56999999999999, -352.89999999999998, -18.109999999999999, -407.12, -83.920000000000002, 81.900000000000006, 13.66, -125.43623666322333, 19.59, -125.43623666322333, -405.68000000000001, -125.43623666322333, -125.43623666322333, -22.690000000000001, -126.55, -7.4100000000000001, 4.4699999999999998, 8.3599999999999994, 14.130000000000001, -56.955711697042695, 36.770000000000003, -8.1600000000000001, -2.6600000000000001, -56.955711697042695, -555.80999999999995, -54.729999999999997, -56.955711697042695, -56.955711697042695, 7.2699999999999996, 7.3499999999999996, 54.079999999999998, -56.955711697042695, -56.955711697042695, -56.955711697042695, 34.82, -56.955711697042695, -56.955711697042695, 16.550000000000001, -56.955711697042695, -56.955711697042695, -1145.3900000000001, -56.955711697042695, 35.219999999999999, -56.955711697042695, 68.209999999999994, 46.340000000000003, -56.955711697042695, -518.5, -56.955711697042695, 75.459999999999994, -56.955711697042695, -56.955711697042695, -56.955711697042695, -56.955711697042695, -56.955711697042695, -56.955711697042695, -56.955711697042695, -56.955711697042695, -56.955711697042695, -56.955711697042695, 13.130000000000001, -52.039999999999999, -29.82, 68.909999999999997, -189.69, -287.02999999999997, 70.290000000000006, 25.379999999999999, -209.63999999999999, 28.100000000000001, -9.2442860379534419, -149.93000000000001, 84.290000000000006, 27.710000000000001, 57.310000000000002, 45.439999999999998, -65.560000000000002, 47.539999999999999, 47.460000000000001, -9.2442860379534419, 69.430000000000007, 89.030000000000001, -129.47, -9.2442860379534419, -21.75, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, -9.2442860379534419, 28.699999999999999, -48.240000000000002, -125.59999999999999, -125.60000000000001, -125.60000000000001, -125.60000000000001, 23.579999999999998],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [59.469999999999999, 49.380000000000003, 49.380000000000003, 49.380000000000003, 83.790000000000006, 99.939999999999998, 65.890000000000001, 97.700000000000003, 78.75, 86.340000000000003, 70.640000000000001, 23.190000000000001, 76.109999999999999, 97.569999999999993, 14.970000000000001, 26.73, 64.900000000000006, 54.270000000000003, 58.909999999999997, 25.77, 32.759999999999998, -65.689999999999998, -65.689999999999998, -65.689999999999998, 51.460000000000001, 51.460000000000001, 27.690000000000001, 62.359999999999999, 46.479999999999997, 51.18, 51.909999999999997, 88.700000000000003, 7.8600000000000003, 7.9044657026668173, 7.9044657026668173, 7.9044657026668173, 100, 22.050000000000001, -736.37, -736.37, 57.560000000000002, 57.560000000000002, 23.66, 43.329999999999998, 47.770000000000003, 35.969999999999999, 27.690000000000001, 65.510000000000005, 96.909999999999997, 45.799999999999997, 39.25, 48.230993744317622, 48.230993744317622, 48.230993744317622, 48.230993744317622, 71.579999999999998, -84.629999999999995, -133.19, -20.07, -3.2999999999999998, 86.180000000000007, -102.97, 33.93, 48.560000000000002, -221.25999999999999, 65.430000000000007, -28.460000000000001, 80.920000000000002, 6.0599999999999996, 6.5462957519885787, 99.599999999999994, 6.5462957519885787, 22.050000000000001, -55.909999999999997, -47.289999999999999, 44.93, 44.259999999999998, 98.170000000000002, -49.549999999999997, -45.399999999999999, 45.329999999999998, 27.359999999999999, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -849.55999999999995, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, -23.714787505863359, 79.560000000000002, 15.050000000000001, 20.289999999999999, 10.73, 10.73, 10.73, -79.909999999999997, -270.16000000000003, -210.40000000000001, -27.010000000000002, 88.75, 96.170000000000002, 94.890000000000001, -294.14999999999998, -155.9779606566878, -501.52999999999997, -458.38, -75.670000000000002, -435.98000000000002, -365.87, -26.850000000000001, -414.05000000000001, -80.329999999999998, 84.379999999999995, 12.720000000000001, -127.7604548911235, -127.7604548911235, 19.640000000000001, -450.06, -127.7604548911235, -127.7604548911235, -23.140000000000001, -121.8, -5.9800000000000004, 4.0899999999999999, 8.0399999999999991, 15.17, -72.9139870467544, 37.579999999999998, -18.699999999999999, -10.5, -735.86000000000001, -72.9139870467544, -49.789999999999999, -72.9139870467544, -72.9139870467544, 8.6799999999999997, 7.46, 54.649999999999999, -72.9139870467544, -72.9139870467544, -72.9139870467544, 33.100000000000001, -72.9139870467544, -72.9139870467544, 15.65, -72.9139870467544, -72.9139870467544, -1154.6099999999999, -72.9139870467544, 34.409999999999997, 68.549999999999997, -72.9139870467544, 45.829999999999998, -72.9139870467544, -440.45999999999998, -72.9139870467544, 77.400000000000006, -72.9139870467544, -72.9139870467544, -72.9139870467544, -72.9139870467544, -72.9139870467544, -72.9139870467544, -72.9139870467544, -72.9139870467544, -72.9139870467544, -72.9139870467544, 9.5800000000000001, -44.960000000000001, -26.539999999999999, 67.079999999999998, -190.21000000000001, -296.27999999999997, 65.510000000000005, 20.010000000000002, -194.88999999999999, 30.77, -10.453746694052517, -168.40000000000001, 85.349999999999994, 19.5, 54.979999999999997, 44.789999999999999, -66.230000000000004, 47.939999999999998, 46.920000000000002, -10.453746694052517, 73.510000000000005, 88.920000000000002, -116.66, -10.453746694052517, -10.35, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, -10.453746694052517, 29.66, -48.950000000000003, -133.66999999999999, -133.66999999999999, -133.66999999999999, -133.66999999999999, 24.030000000000001],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.009999999999998, 48.899999999999999, 48.899999999999999, 48.899999999999999, 83.719999999999999, 99.920000000000002, 66.689999999999998, 97.769999999999996, 77.900000000000006, 82.640000000000001, 70.200000000000003, 23.73, 76.129999999999995, 97.359999999999999, 20.100000000000001, 26.949999999999999, 64.489999999999995, 58.350000000000001, 60.619999999999997, 26.32, 34.609999999999999, -45.859999999999999, -45.859999999999999, -45.859999999999999, 51.32, 51.32, 30.02, 62.18, 46.049999999999997, 48.420000000000002, 52.990000000000002, 88.769999999999996, 14.710000000000001, 14.751462236261156, 14.751462236261156, 14.751462236261156, 100, 23.469999999999999, -693.01999999999998, -693.01999999999998, 54.689999999999998, 54.689999999999998, 19.710000000000001, 39.560000000000002, 42.380000000000003, 38.049999999999997, 26.309999999999999, 69.400000000000006, 96.680000000000007, 44.840000000000003, 41.460000000000001, 49.458305032458831, 49.458305032458831, 49.458305032458831, 49.458305032458831, 71.709999999999994, -82.950000000000003, -108.15000000000001, -21.879999999999999, -3.3100000000000001, 86.760000000000005, -185.41, 37.039999999999999, 49.469999999999999, -208.59, 66.450000000000003, -29.66, 80.719999999999999, 7.8600000000000003, 8.3369198781889455, 99.519999999999996, 8.3369198781889455, 23.469999999999999, -70.829999999999998, -46.520000000000003, 44.539999999999999, 43.200000000000003, 98.299999999999997, -50.5, -40.719999999999999, 43.25, 29.68, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -608.13999999999999, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, -22.343622729032894, 79.519999999999996, 13.720000000000001, 22.989999999999998, 8.9399999999999995, 8.9399999999999995, 8.9399999999999995, -78.829999999999998, -310.00999999999999, -165.63, -16.32, 87.019999999999996, 95.769999999999996, -300.81999999999999, 95.170000000000002, -149.8981354899735, -292.76999999999998, -487.87, -407.38, -67, -316.27999999999997, -24.66, -375.07999999999998, -81.420000000000002, 85.569999999999993, 12.619999999999999, -118.49446788541533, -118.49446788541533, 24.219999999999999, -483.94999999999999, -118.49446788541533, -118.49446788541533, -23.719999999999999, -119.66, -5.2199999999999998, 4.25, 8.0899999999999999, 16.5, -73.853646405371904, 42.450000000000003, -22.649999999999999, -26.260000000000002, -759.63, -73.853646405371904, -52.609999999999999, -73.853646405371904, -73.853646405371904, 8.4299999999999997, 6.9800000000000004, 54.369999999999997, -73.853646405371904, -73.853646405371904, -73.853646405371904, 38.039999999999999, -73.853646405371904, -73.853646405371904, 13.85, -73.853646405371904, -73.853646405371904, -1000.96, -73.853646405371904, 25.859999999999999, 69.260000000000005, -73.853646405371904, 47.859999999999999, -73.853646405371904, -348.45999999999998, -73.853646405371904, 79.5, -73.853646405371904, -73.853646405371904, -73.853646405371904, -73.853646405371904, -73.853646405371904, -73.853646405371904, -73.853646405371904, -73.853646405371904, -73.853646405371904, -73.853646405371904, 7.4000000000000004, -42.219999999999999, -18.16, 67.409999999999997, -193.69, -260.94999999999999, 75.340000000000003, 12.07, -199.59, 31.940000000000001, -10.079065986241019, -126.31, 85.950000000000003, 19.379999999999999, 50.469999999999999, 44.450000000000003, -70.829999999999998, 48.219999999999999, 47.899999999999999, -10.079065986241019, 74.400000000000006, 90.120000000000005, -125.7, -10.079065986241019, -29.149999999999999, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, -10.079065986241019, 27.969999999999999, -53.810000000000002, -128.34999999999999, -128.34999999999999, -128.34999999999999, -128.34999999999999, 21.719999999999999],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [58.460000000000001, 49.039999999999999, 49.039999999999999, 49.039999999999999, 83.090000000000003, 99.909999999999997, 66.340000000000003, 96.989999999999995, 78.939999999999998, 81.680000000000007, 67.489999999999995, 23.719999999999999, 74.379999999999995, 97.200000000000003, 25.039999999999999, 26.539999999999999, 66.530000000000001, 58.18, 62.439999999999998, 22.52, 32.909999999999997, -36.990000000000002, -36.990000000000002, -36.990000000000002, 56.170000000000002, 56.170000000000002, 30.289999999999999, 61.75, 50.43, 51.369999999999997, 52.740000000000002, 90.680000000000007, 16.550000000000001, 16.590813364821553, 16.590813364821553, 16.590813364821553, 100, 24.969999999999999, -680.48000000000002, -680.48000000000002, 50.850000000000001, 50.850000000000001, 16.149999999999999, 39, 48, 36.549999999999997, 30.600000000000001, 67.890000000000001, 96.719999999999999, 50.299999999999997, 50.119999999999997, 50.11387362448405, 50.11387362448405, 50.11387362448405, 50.11387362448405, 72.730000000000004, -84.230000000000004, -100.04000000000001, -25.48, -7.6299999999999999, 86.200000000000003, -330.69, 38.420000000000002, 55.18, -195.06, 70.780000000000001, -44.770000000000003, 82.650000000000006, 8.4199999999999999, 8.8957561900037376, 99.549999999999997, 8.8957561900037376, 24.969999999999999, -74.090000000000003, -38.840000000000003, 42.710000000000001, 42.520000000000003, 98.129999999999995, -50.719999999999999, -28.350000000000001, 45.18, 33.43, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -542.87, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, -18.383721660346819, 80.829999999999998, 13.630000000000001, 24.199999999999999, 8.8599999999999994, 8.8599999999999994, 8.8599999999999994, -76.689999999999998, -317.81, -139.34, -6.2400000000000002, 85.530000000000001, 96.159999999999997, -265.60000000000002, 94.680000000000007, -138.69226464942713, -235.69, -458.87, -404.42000000000002, -63.189999999999998, -289.44999999999999, -22.66, -345.94, -124.77, 86.870000000000005, 13.73, -125.18786707439637, -125.18786707439637, 12.58, -546.96000000000004, -125.18786707439637, -125.18786707439637, -16.559999999999999, -114.75, -4.6100000000000003, 4.6100000000000003, 7.3899999999999997, 16.140000000000001, -79.240693359717127, 45.530000000000001, -21.289999999999999, -12.970000000000001, -858.19000000000005, -79.240693359717127, -45.840000000000003, -79.240693359717127, -79.240693359717127, 6.7000000000000002, 4.96, 53.280000000000001, -79.240693359717127, -79.240693359717127, -79.240693359717127, 41.219999999999999, -79.240693359717127, -79.240693359717127, 14.59, -79.240693359717127, -79.240693359717127, -897.75999999999999, -79.240693359717127, 26.079999999999998, 69.640000000000001, -79.240693359717127, 52.920000000000002, -79.240693359717127, -317.88999999999999, -79.240693359717127, 80.329999999999998, -79.240693359717127, -79.240693359717127, -79.240693359717127, -79.240693359717127, -79.240693359717127, -79.240693359717127, -79.240693359717127, -79.240693359717127, -79.240693359717127, -79.240693359717127, 8.0800000000000001, -36.640000000000001, -12.67, 69.409999999999997, -206.03, -242.74000000000001, 61.289999999999999, 12.970000000000001, -156.97, 33.439999999999998, -9.2052267666177503, -192.13, 86.060000000000002, 21, 54.810000000000002, 47.890000000000001, -68.859999999999999, 49.359999999999999, 49.369999999999997, -9.2052267666177503, 75.560000000000002, 90.329999999999998, -115.86, -9.2052267666177503, -53.950000000000003, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, -9.2052267666177503, 28.59, -53.289999999999999, -134.09999999999999, -134.09999999999999, -134.09999999999999, -134.09999999999999, 17.579999999999998],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60, 48.520000000000003, 48.520000000000003, 48.520000000000003, 81.879999999999995, 99.890000000000001, 67.590000000000003, 96.859999999999999, 78.180000000000007, 81.879999999999995, 66.739999999999995, 16.41, 75.650000000000006, 97.060000000000002, 27.350000000000001, 26.93, 64.959999999999994, 57.689999999999998, 60.990000000000002, 23.030000000000001, 33, -38.710000000000001, -38.710000000000001, -38.710000000000001, 53.350000000000001, 53.350000000000001, 26.859999999999999, 60.340000000000003, 48.289999999999999, 51.170000000000002, 52.649999999999999, 89.530000000000001, 19.82, 19.859434290971578, 19.859434290971578, 19.859434290971578, 100, 25.789999999999999, -588.74000000000001, -588.74000000000001, 52.18, 52.18, 13.17, 37.329999999999998, 45.219999999999999, 36.140000000000001, 28.989999999999998, 64.170000000000002, 96.239999999999995, 46.229999999999997, 42.899999999999999, 48.464695969107453, 48.464695969107453, 48.464695969107453, 48.464695969107453, 70.640000000000001, -82.129999999999995, -106.78, -24.899999999999999, -3.2799999999999998, 86.310000000000002, -340.43000000000001, 39.509999999999998, -200.66999999999999, 64.040000000000006, 73.219999999999999, -58.859999999999999, 82.349999999999994, 8.4399999999999995, 8.9159536721185013, 99.530000000000001, 8.9159536721185013, 25.789999999999999, -73.629999999999995, -26.449999999999999, 42.719999999999999, 39.409999999999997, 98.25, -50.049999999999997, -26.969999999999999, 44.350000000000001, 34.700000000000003, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -495.88, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, -17.566822669360029, 80.299999999999997, 12.82, 24.100000000000001, 10.07, 10.07, 10.07, -65.060000000000002, -329.72000000000003, -103.81, -4.2699999999999996, 82.909999999999997, 96.099999999999994, -212.81999999999999, 96.579999999999998, -132.77942886256187, -433.04000000000002, -277.98000000000002, -491.14999999999998, -55.770000000000003, -266.00999999999999, -23.329999999999998, -334.69999999999999, -115.97, 88.319999999999993, 14.66, -116.93749240935357, -116.93749240935357, 19.890000000000001, -502.20999999999998, -116.93749240935357, -116.93749240935357, -10.289999999999999, -104.98999999999999, -3.46, 4.8399999999999999, 7.3700000000000001, 16.559999999999999, -82.42532742087559, 42.049999999999997, -23.280000000000001, -885.25, -11.56, -82.42532742087559, -45.460000000000001, -82.42532742087559, -82.42532742087559, 5.8899999999999997, 4.1699999999999999, 53.149999999999999, -82.42532742087559, -82.42532742087559, -82.42532742087559, 40.810000000000002, -82.42532742087559, -82.42532742087559, 16.530000000000001, -82.42532742087559, -82.42532742087559, -889.65999999999997, -82.42532742087559, 19.109999999999999, 72.040000000000006, -82.42532742087559, 52.880000000000003, -82.42532742087559, -281.43000000000001, -82.42532742087559, 79.390000000000001, -82.42532742087559, -82.42532742087559, -82.42532742087559, -82.42532742087559, -82.42532742087559, -82.42532742087559, -82.42532742087559, -82.42532742087559, -82.42532742087559, -82.42532742087559, 8.2100000000000009, -26.920000000000002, -6.2300000000000004, 67.930000000000007, -212.72, -209.08000000000001, 66.659999999999997, 15.94, -178.77000000000001, 30.809999999999999, -11.028785525845688, -181.12, 86.579999999999998, 20.73, 55.32, 44.600000000000001, -66.459999999999994, 46.600000000000001, 48.869999999999997, -11.028785525845688, 70.920000000000002, 85.980000000000004, -120.20999999999999, -11.028785525845688, -59.140000000000001, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, -11.028785525845688, 25.260000000000002, -50.43, -126.27, -126.27, -126.27, -126.27, 13.91],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [59.32, 49.25, 49.25, 49.25, 81.329999999999998, 99.879999999999995, 65.769999999999996, 96.700000000000003, 76.239999999999995, 79.769999999999996, 63.850000000000001, 19.199999999999999, 73.430000000000007, 97.200000000000003, 28.600000000000001, 25.800000000000001, 64.530000000000001, 49.890000000000001, 52.359999999999999, 14.619999999999999, 33.170000000000002, -30.460000000000001, -30.460000000000001, -30.460000000000001, 50.280000000000001, 50.279999999999994, 18.760000000000002, 55.689999999999998, 43.789999999999999, 47.909999999999997, 47.770000000000003, 89.859999999999999, 19.120000000000001, 19.160010922030981, 19.160010922030981, 19.160010922030981, 100, 27.450000000000003, -594.19000000000005, -594.19000000000005, 52.600000000000001, 52.600000000000001, 12.17, 30.579999999999998, 41.670000000000002, 32.729999999999997, 28.850000000000001, 61.719999999999999, 95.939999999999998, 42.899999999999999, 39.670000000000002, 46.250062390824375, 46.250062390824375, 46.250062390824375, 46.250062390824375, 69.040000000000006, -84.019999999999996, -133.24000000000001, -28.469999999999999, -4.6399999999999997, 85.640000000000001, -441.16000000000003, 29.789999999999999, -106.76000000000001, 58.659999999999997, 68.109999999999999, -131.59999999999999, 80.359999999999999, 10.359999999999999, 10.824772467092421, 99.560000000000002, 10.824772467092421, 27.449999999999999, -74.400000000000006, -25.239999999999998, 38.539999999999999, 40, 97.930000000000007, -54, -24.719999999999999, 43.560000000000002, 29.09, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -522.42999999999995, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, -19.647857301943187, 80.659999999999997, 12.359999999999999, 23.359999999999999, 11.44, 11.44, 11.44, -63.619999999999997, -275.06, -87.480000000000004, -12.470000000000001, 84.799999999999997, 96.069999999999993, -179.81, 97.189999999999998, -113.20748681775247, -315.26999999999998, -295.95999999999998, -487.87, -60.719999999999999, -211.61000000000001, -18.98, -275.43000000000001, -115.54000000000001, 88.540000000000006, 16.91, -97.405863768824346, -97.405863768824346, 16.02, -418.07999999999998, -97.405863768824346, -97.405863768824346, -11.49, -102.34999999999999, -3.4399999999999999, 4.79, 6.5499999999999998, 18.699999999999999, -71.904082657963087, 44.880000000000003, -764.54999999999995, -22.170000000000002, -15.42, -71.904082657963087, -27.93, -71.904082657963087, -71.904082657963087, 5.0099999999999998, 3.8199999999999998, 44.119999999999997, -71.904082657963087, -71.904082657963087, -71.904082657963087, 41.969999999999999, -71.904082657963087, -71.904082657963087, 26.100000000000001, -71.904082657963087, -71.904082657963087, -901.13999999999999, -71.904082657963087, 22.210000000000001, 72.069999999999993, 53.93, -71.904082657963087, -71.904082657963087, -258.77999999999997, -71.904082657963087, 81.049999999999997, -71.904082657963087, -71.904082657963087, -71.904082657963087, -71.904082657963087, -71.904082657963087, -71.904082657963087, -71.904082657963087, -71.904082657963087, -71.904082657963087, -71.904082657963087, 4.0999999999999996, -24.75, -7.3499999999999996, 65.459999999999994, -219.86000000000001, -207.28999999999999, 63.200000000000003, 4.2400000000000002, -125.65000000000001, 31.030000000000001, -3.937354338275874, -136.96000000000001, 86.280000000000001, 19.289999999999999, 50.710000000000001, 47.490000000000002, -59.240000000000002, 47.329999999999998, 48.100000000000001, -3.937354338275874, 75.010000000000005, 82.319999999999993, -121.22, -3.937354338275874, -57.630000000000003, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, -3.937354338275874, 22.120000000000001, -50.200000000000003, -132.24000000000001, -132.24000000000001, -132.24000000000001, -132.24000000000001, 12.67],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.659999999999997, 48.159999999999997, 48.159999999999997, 48.159999999999997, 81, 99.420000000000002, 65.819999999999993, 96.349999999999994, 73.049999999999997, 75.310000000000002, 64.829999999999998, 16.300000000000001, 74.260000000000005, 97.200000000000003, 33.210000000000001, 28.699999999999999, 65.180000000000007, 78.439999999999998, 56.140000000000001, 12.31, 35, -19.859999999999999, -19.859999999999999, -19.859999999999999, 52.240000000000002, 52.240000000000002, 21.57, 57, 40.75, 45.100000000000001, 48.210000000000001, 87.25, 26.57, 26.606538660155763, 26.606538660155763, 26.606538660155763, 100, 28.350000000000001, -512.23000000000002, -512.23000000000002, 51.780000000000001, 51.780000000000001, 11.52, 40.409999999999997, 23.710000000000001, 32.399999999999999, 32.560000000000002, 57.969999999999999, 93.810000000000002, 43.880000000000003, 24.199999999999999, 45.53993393821326, 45.53993393821326, 45.53993393821326, 45.53993393821326, 69.620000000000005, -85.849999999999994, -126.95999999999999, -27.59, -10.220000000000001, 85.620000000000005, -465.49000000000001, 29.120000000000001, -108.27, 53.880000000000003, 64.650000000000006, -297.58999999999997, 80.140000000000001, 11.449999999999999, 11.908884933858801, 99.299999999999997, 11.908884933858801, 28.350000000000001, -79.049999999999997, -12.69, 41.710000000000001, 40.109999999999999, 97.689999999999998, -60.890000000000001, -21.699999999999999, 43.090000000000003, 31.670000000000002, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -473.19, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, -21.450904861122034, 82.019999999999996, 14.529999999999999, 23.559999999999999, 13.07, 13.07, 13.07, -67.530000000000001, -232.18000000000001, -144.77000000000001, -27.75, 83.370000000000005, 96.159999999999997, -181.46000000000001, 96.760000000000005, -118.74771609234492, -319.47000000000003, -258.44, -545.21000000000004, -59.530000000000001, -186.50999999999999, -16.460000000000001, -275.45999999999998, -109.73, 88.760000000000005, 19.719999999999999, -94.538455051211983, -94.538455051211983, 18.969999999999999, -399.06999999999999, -94.538455051211983, -94.538455051211983, -15.65, -111.90000000000001, -2.8700000000000001, 4.5700000000000003, 7.5199999999999996, 19.219999999999999, -66.859862519721332, 45.909999999999997, -703.76999999999998, -22.550000000000001, -9.8599999999999994, -66.859862519721332, -20.649999999999999, -66.859862519721332, -66.859862519721332, 4.7699999999999996, 4.5899999999999999, 45.520000000000003, -66.859862519721332, -66.859862519721332, -66.859862519721332, 43.759999999999998, -66.859862519721332, -66.859862519721332, 23.98, -66.859862519721332, -66.859862519721332, -944.88999999999999, -66.859862519721332, 21.579999999999998, 73.609999999999999, 50.899999999999999, -66.859862519721332, -66.859862519721332, -235.34, -66.859862519721332, 81.659999999999997, -66.859862519721332, -66.859862519721332, -66.859862519721332, -66.859862519721332, -66.859862519721332, -66.859862519721332, -66.859862519721332, -66.859862519721332, -66.859862519721332, -66.859862519721332, 7.2400000000000002, -22.699999999999999, -1.0700000000000001, 70.150000000000006, -239.49000000000001, -173.38999999999999, 49.25, -3.7400000000000002, -123.06999999999999, 26.370000000000001, -6.1416549576741843, -147.91, 86.920000000000002, 17.77, 51.18, 46.630000000000003, -48.090000000000003, 46.810000000000002, 47.57, -6.1416549576741843, 81.430000000000007, 82.650000000000006, -112.03, -6.1416549576741843, -29.809999999999999, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, -6.1416549576741843, 22.210000000000001, -51.369999999999997, -153.61000000000001, -153.61000000000001, -153.61000000000001, -153.61000000000001, 8.1400000000000006],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.560000000000002, 46.060000000000002, 46.060000000000002, 46.060000000000002, 80.980000000000004, 99.200000000000003, 64.019999999999996, 95.959999999999994, 74.560000000000002, 75.790000000000006, 65.390000000000001, 16.780000000000001, 71.390000000000001, 97.290000000000006, 32.520000000000003, 24.77, 63.020000000000003, 79, 51.25, 10.449999999999999, 33.189999999999998, -14.539999999999999, -14.539999999999999, -14.539999999999999, 51.149999999999999, 51.149999999999999, 22.989999999999998, 56.770000000000003, 35.659999999999997, 49.770000000000003, 47.399999999999999, 87.180000000000007, 30.84, 30.874596134299523, 30.874596134299523, 30.874596134299523, 100, 29.379999999999999, -611.5, -611.5, 51.369999999999997, 51.369999999999997, 10.25, 32.310000000000002, 33.259999999999998, 30.98, 68.439999999999998, 35.369999999999997, 92.519999999999996, 44.369999999999997, 35.549999999999997, 47.474310304137873, 47.474310304137873, 47.474310304137873, 47.474310304137873, 71.609999999999999, -80, -107.23, -21.039999999999999, -43.840000000000003, 85.900000000000006, -377.32999999999998, 29.5, -164.21000000000001, 51.049999999999997, 67.340000000000003, -338.60000000000002, 88.939999999999998, 11.859999999999999, 12.316950429795995, 99.230000000000004, 12.316950429795995, 29.379999999999999, -106.70999999999999, -15.970000000000001, 40.920000000000002, 41.649999999999999, 97.700000000000003, -58.25, -14.74, 48.840000000000003, 31.579999999999998, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -382.69999999999999, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, -17.176606786613672, 81.950000000000003, 16.940000000000001, 23.120000000000001, 13.51, 13.51, 13.51, -65.930000000000007, -244.65000000000001, -178.43000000000001, -26.149999999999999, 79.670000000000002, 96.109999999999999, -191.25, 96.760000000000005, -131.71296175027609, -376.20999999999998, -215.75999999999999, -524.78999999999996, -63.219999999999999, -232.74000000000001, -9.8699999999999992, -248.72999999999999, -108.75, 90.480000000000004, 18.170000000000002, -74.491149385343107, -74.491149385343107, 22.199999999999999, -138.44, -74.491149385343107, -74.491149385343107, -15.5, -104.39, -2.1200000000000001, 4.9400000000000004, 9.1199999999999992, 18.710000000000001, -59.266704514819551, 5.3099999999999996, -619.04999999999995, -24.98, -5.4500000000000002, -59.266704514819551, -21.289999999999999, -59.266704514819551, -59.266704514819551, 6.3899999999999997, 10.65, 46.659999999999997, -59.266704514819551, -59.266704514819551, -59.266704514819551, -59.266704514819551, 43.710000000000001, -59.266704514819551, 22.25, -59.266704514819551, -672.11000000000001, -59.266704514819551, -59.266704514819551, 21.879999999999999, 73.200000000000003, 53.850000000000001, -59.266704514819551, -59.266704514819551, -292.20999999999998, -59.266704514819551, 82.439999999999998, -59.266704514819551, -59.266704514819551, -59.266704514819551, -59.266704514819551, -59.266704514819551, -59.266704514819551, -59.266704514819551, -59.266704514819551, -59.266704514819551, -59.266704514819551, 7.71, -18.02, 3.2200000000000002, 70.609999999999999, -285.13999999999999, -196.00999999999999, 56.939999999999998, -23.02, -117.98, 25.629999999999999, -10.211093865779187, -152.25999999999999, 87.170000000000002, 17.960000000000001, 52.219999999999999, 47.609999999999999, 48.509999999999998, -50.859999999999999, 48.200000000000003, 82.780000000000001, -10.211093865779187, 82.489999999999995, -104.81999999999999, -10.211093865779187, -36.390000000000001, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, -10.211093865779187, 18.550000000000001, -52.960000000000001, -143.74000000000001, -143.74000000000001, -143.74000000000001, -143.74000000000001, 11.98],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.700000000000003, 46.799999999999997, 46.799999999999997, 46.799999999999997, 78.329999999999998, 99.019999999999996, 60.75, 95.200000000000003, 73.310000000000002, 78.040000000000006, 61.950000000000003, 16.850000000000001, 73.700000000000003, 97, 26.98, 23.399999999999999, 61.289999999999999, 78.920000000000002, 47.090000000000003, 7.79, 27.870000000000001, -8.6500000000000004, -8.6500000000000004, -8.6500000000000004, 49.009999999999998, 49.009999999999991, 22.16, 54.899999999999999, 35.869999999999997, 51.109999999999999, 48.979999999999997, 90.430000000000007, 39.18, 39.210565435292068, 39.210565435292068, 39.210565435292068, 100, 31.500000000000004, -584.36000000000001, -584.36000000000001, 50.280000000000001, 50.280000000000001, 10.33, 30.300000000000001, 16.300000000000001, 25.780000000000001, 70.340000000000003, 32.450000000000003, 92.25, 48.5, 33.32, 45.455583260718633, 45.455583260718633, 45.455583260718633, 45.455583260718633, 74.019999999999996, -77.859999999999999, -122.88, -17.5, -42.200000000000003, 86.5, -328.95999999999998, 28.739999999999998, -166.22999999999999, 57.700000000000003, 72.709999999999994, -248.41999999999999, 93.829999999999998, 14.359999999999999, 14.806231251103231, 99.319999999999993, 14.806231251103231, 31.5, -107.20999999999999, -15.73, 41.799999999999997, 40.210000000000001, 97.609999999999999, -46.280000000000001, -11.869999999999999, 47.310000000000002, 31.93, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -383.54000000000002, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, -11.510034264067251, 82.450000000000003, 17.789999999999999, 22.809999999999999, 15.77, 15.77, 15.77, -37.200000000000003, -240.16, -148.59, 5.46, 86.599999999999994, 96.530000000000001, -183.34999999999999, 96.849999999999994, -117.26841282909406, -205.87, -365.44999999999999, -444.13, -58.329999999999998, -211.96000000000001, -4.9699999999999998, -212.77000000000001, -11.720000000000001, 90.939999999999998, 0.81999999999999995, -53.14706339024935, -53.14706339024935, 26.16, -403.06, -53.14706339024935, -53.14706339024935, -19.050000000000001, -99.140000000000001, -1.55, 4.9500000000000002, 11.220000000000001, 16.989999999999998, -57.267181691391251, 2.8799999999999999, -589.50999999999999, -50.850000000000001, 1.1299999999999999, -57.267181691391251, -21.170000000000002, -57.267181691391251, -57.267181691391251, 6.7800000000000002, 13.31, 44.909999999999997, -57.267181691391251, -57.267181691391251, -57.267181691391251, -57.267181691391251, 44.159999999999997, -57.267181691391251, 19.859999999999999, -57.267181691391251, -539.73000000000002, -57.267181691391251, -57.267181691391251, 22.539999999999999, 72.650000000000006, 42.450000000000003, -57.267181691391251, -57.267181691391251, -332.61000000000001, -57.267181691391251, -57.267181691391251, 83.150000000000006, -57.267181691391251, -57.267181691391251, -57.267181691391251, -57.267181691391251, -57.267181691391251, -57.267181691391251, -57.267181691391251, -57.267181691391251, -57.267181691391251, 10.59, -13.98, 6.1399999999999997, 64.989999999999995, -294.75999999999999, -166.05000000000001, 59.700000000000003, -14.19, -125.66, 25.59, -9.1704544110529884, -149.09, 87.239999999999995, 18.050000000000001, 51.609999999999999, 48.640000000000001, 43.329999999999998, -50.75, 47.920000000000002, 80.469999999999999, -9.1704544110529884, 81.950000000000003, -106.86, -9.1704544110529884, -25.25, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, -9.1704544110529884, 15.69, -59.109999999999999, -153.24000000000001, -153.24000000000001, -153.24000000000001, -153.24000000000001, 16.460000000000001],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [62.090000000000003, 46.350000000000001, 46.350000000000001, 46.350000000000001, 76.340000000000003, 98.840000000000003, 60.119999999999997, 94.359999999999999, 70.340000000000003, 73.170000000000002, 63.420000000000002, 10.380000000000001, 73.189999999999998, 96.629999999999995, 27.329999999999998, 28.100000000000001, 60.68, 76.5, 50.609999999999999, 7.2300000000000004, 29, 4.9100000000000001, 4.9100000000000001, 4.9100000000000001, 45.310000000000002, 45.310000000000002, 18.760000000000002, 54.579999999999998, 37.140000000000001, 47.409999999999997, 47.289999999999999, 82.709999999999994, 42.32, 42.349133665042196, 42.349133665042196, 42.349133665042196, 100, 32.479999999999997, -494.81999999999999, -494.81999999999994, 51.520000000000003, 51.520000000000003, 10.44, 25.670000000000002, 12.32, 23.68, 63.359999999999999, 28.460000000000001, 90.049999999999997, 49.649999999999999, 22.23, 42.264701763345037, 42.264701763345037, 42.264701763345037, 42.264701763345037, 73.069999999999993, -83.840000000000003, -107.34, -26.16, -88.420000000000002, 85.390000000000001, -327.60000000000002, 33.719999999999999, -191.91999999999999, 55.469999999999999, 72.049999999999997, -211.40000000000001, 93.920000000000002, 14.76, 15.202493665987822, 99.230000000000004, 15.202493665987822, 32.479999999999997, -112.28, -15.109999999999999, 45.32, 42.469999999999999, 97.560000000000002, -39.82, -5.7599999999999998, 45.869999999999997, 31.640000000000001, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -458.37, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, -8.0574552494138398, 83.469999999999999, 14.98, 23.440000000000001, 14.589999999999998, 14.59, 14.589999999999998, -34.829999999999998, -218.56999999999999, -120.63, 37.729999999999997, 71.829999999999998, 96.540000000000006, -187.52000000000001, 96.469999999999999, -103.59597224045606, -209.62, -387.61000000000001, -455.17000000000002, -60.880000000000003, -219.74000000000001, -6.8899999999999997, -189.34999999999999, -9.1699999999999999, 90.25, -4.6299999999999999, -39.460656430331866, -39.460656430331866, 29.920000000000002, -227.78999999999999, -39.460656430331866, -39.460656430331866, -18.59, -90.579999999999998, 0.22, 5.5899999999999999, 11.289999999999999, 18.140000000000001, -56.562183128029581, -7.4900000000000002, -594.54999999999995, -53.479999999999997, -56.562183128029581, 4.5999999999999996, -22.82, -56.562183128029581, -56.562183128029581, 8.2899999999999991, 15.31, 51.170000000000002, -56.562183128029581, -56.562183128029581, -56.562183128029581, -56.562183128029581, 45.130000000000003, -56.562183128029581, 19.890000000000001, -56.562183128029581, -464.56, -56.562183128029581, -56.562183128029581, 22.359999999999999, 75.310000000000002, 44.579999999999998, -56.562183128029581, -56.562183128029581, -205.16, -56.562183128029581, -56.562183128029581, 83.780000000000001, -56.562183128029581, -56.562183128029581, -56.562183128029581, -56.562183128029581, -56.562183128029581, -56.562183128029581, -56.562183128029581, -56.562183128029581, -56.562183128029581, 13.890000000000001, -12.73, 12.69, 61.289999999999999, -268.52999999999997, -178.77000000000001, 52.560000000000002, -18.920000000000002, -118.76000000000001, 27.82, -11.928532707723104, -180.94999999999999, 18.699999999999999, 86.590000000000003, 51.539999999999999, 48.310000000000002, 39.75, -50.810000000000002, 49.049999999999997, 79.909999999999997, -11.928532707723104, 82.540000000000006, -103.55, -11.928532707723104, -39.869999999999997, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, -11.928532707723104, 13.94, -64.439999999999998, -172.44, -172.44, -172.44, -172.44, 16.41],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.880000000000003, 43.490000000000002, 43.490000000000002, 43.490000000000002, 75, 98.379999999999995, 61.969999999999999, 94.030000000000001, 69.359999999999999, 71.670000000000002, 62.420000000000002, 19.77, 76.260000000000005, 96, 28.390000000000001, 28.989999999999998, 58.829999999999998, 75.040000000000006, 45.159999999999997, 3.3999999999999999, 28.27, 0.93999999999999995, 0.93999999999999995, 0.93999999999999995, 46.200000000000003, 46.200000000000003, 16.780000000000001, 55.609999999999999, 36.549999999999997, 45.859999999999999, 44.5, 84.260000000000005, 39.670000000000002, 39.700627444733563, 39.700627444733563, 39.700627444733563, 100, 34.310000000000002, -582.89999999999998, -582.89999999999998, 47.049999999999997, 47.049999999999997, 10.960000000000001, 27.210000000000001, 13.800000000000001, 28.780000000000001, 68.75, 22.73, 90.010000000000005, 51.770000000000003, 27.57, 44.752164057615829, 44.752164057615829, 44.752164057615829, 44.752164057615829, 74.209999999999994, -83.670000000000002, -116.89, -26.16, -74.75, -310.38, 86.780000000000001, 36.25, -191.50999999999999, 49.539999999999999, 71.340000000000003, -168.09, 93.980000000000004, 15.02, 15.458564697940201, 98.680000000000007, 15.458564697940201, 34.310000000000002, -103.09, -15.109999999999999, 45.770000000000003, 41.57, 97.680000000000007, -32.969999999999999, -5.5099999999999998, 50.270000000000003, 33.119999999999997, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -357.38999999999999, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, -3.6840122599531044, 81.700000000000003, 16.84, 24.120000000000001, 16.68, 16.68, 16.68, -33.399999999999999, -229.38999999999999, -120.63, 47.829999999999998, 96.810000000000002, 67.049999999999997, -183.84, 97.870000000000005, -105.84632524835995, -206.19, -391.06, -398.99000000000001, -61.579999999999998, -191.52000000000001, -7.3899999999999997, -177.12, -8.9900000000000002, 90.719999999999999, -5.8099999999999996, -30.541109599655726, -30.541109599655726, 36.200000000000003, -102.95999999999999, -30.541109599655726, -30.541109599655726, -14.48, -93.030000000000001, 1.96, 5.9299999999999997, 10.73, 17.170000000000002, -53.35815155452601, -8.1899999999999995, -541, -54.600000000000001, -53.35815155452601, 7.0800000000000001, -28.32, -53.35815155452601, -53.35815155452601, 8.2899999999999991, 15.31, 52.689999999999998, -53.35815155452601, -53.35815155452601, -53.35815155452601, -53.35815155452601, 46.590000000000003, -53.35815155452601, 19.969999999999999, -53.35815155452601, -496.60000000000002, -53.35815155452601, -53.35815155452601, 22.27, 74.439999999999998, 44.5, -53.35815155452601, -53.35815155452601, -213.40000000000001, -53.35815155452601, -53.35815155452601, 84.540000000000006, -53.35815155452601, -53.35815155452601, -53.35815155452601, -53.35815155452601, -53.35815155452601, -53.35815155452601, -53.35815155452601, -53.35815155452601, -53.35815155452601, 11.869999999999999, -10.789999999999999, 13.029999999999999, 64.200000000000003, -274.13, -178.77000000000001, 44.43, -14.9, -114.70999999999999, 32.840000000000003, -8.6151563496328833, -177.99000000000001, 22.02, 86.719999999999999, 53, 49.240000000000002, -36.939999999999998, 40.859999999999999, 49.829999999999998, 80.900000000000006, -8.6151563496328833, 82.040000000000006, -102.66, -8.6151563496328833, -43.759999999999998, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, -8.6151563496328833, 9.2100000000000009, -67.930000000000007, -192.02000000000001, -192.01999999999998, -192.01999999999998, -192.01999999999998, 17.079999999999998],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [61.399999999999999, 44.109999999999999, 44.109999999999999, 44.109999999999999, 76.420000000000002, 98.379999999999995, 64.180000000000007, 94.030000000000001, 71.430000000000007, 76.859999999999999, 63.539999999999999, 35.020000000000003, 80.090000000000003, 96.310000000000002, 28.550000000000001, 31.620000000000001, 60.649999999999999, 75.040000000000006, 45.159999999999997, -2.71, 24.649999999999999, 1.77, 1.77, 1.77, 45.329999999999998, 45.329999999999998, 16.780000000000001, 57.670000000000002, 36.549999999999997, 45.859999999999999, 48.539999999999999, 85.670000000000002, 34.630000000000003, 34.663305387468426, 34.663305387468426, 34.663305387468426, 100, 34.310000000000002, -581.35000000000002, -581.35000000000002, 50.090000000000003, 50.090000000000003, 11.56, 27.210000000000001, 13.800000000000001, 28.780000000000001, 68.75, 22.73, 90.010000000000005, 51.770000000000003, 27.57, 44.803459761752244, 44.803459761752244, 44.803459761752244, 44.803459761752244, 75.209999999999994, -83.670000000000002, -116.89, -26.16, -74.75, -310.38, 86.780000000000001, 36.25, -191.50999999999999, 49.539999999999999, -168.09, 71.340000000000003, 93.019999999999996, 15.02, 15.459743060472206, 98.680000000000007, 15.459743060472206, 34.310000000000002, -103.09, -15.109999999999999, 45.770000000000003, 41.57, 97.680000000000007, -32.969999999999999, -5.5099999999999998, 50.270000000000003, 33.119999999999997, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -357.38999999999999, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, -3.651743459759532, 81.450000000000003, 16.84, 24.120000000000001, 16.68, 16.68, 16.68, -33.399999999999999, -229.38999999999999, -120.63, 47.829999999999998, 96.810000000000002, -183.84, 64.969999999999999, 97.870000000000005, -107.61762619957017, -206.19, -391.06, -398.99000000000001, -61.579999999999998, -191.52000000000001, -7.3899999999999997, -8.9900000000000002, -177.12, 90.719999999999999, -5.8099999999999996, -30.710223746999748, -30.710223746999748, 36.200000000000003, -102.95999999999999, -30.710223746999748, -30.710223746999748, -14.48, -93.030000000000001, 1.96, 5.9299999999999997, 10.73, 17.170000000000002, -53.77700023042528, -8.1899999999999995, -541, -54.600000000000001, -53.77700023042528, 7.0800000000000001, -28.32, -53.77700023042528, -53.77700023042528, 8.2899999999999991, 52.689999999999998, 15.31, -53.77700023042528, -53.77700023042528, -53.77700023042528, 46.590000000000003, -53.77700023042528, -53.77700023042528, 19.969999999999999, -53.77700023042528, -496.60000000000002, -53.77700023042528, -53.77700023042528, 22.27, 74.439999999999998, -53.77700023042528, 44.5, -53.77700023042528, -213.40000000000001, -53.77700023042528, -53.77700023042528, 84.540000000000006, -53.77700023042528, -53.77700023042528, -53.77700023042528, -53.77700023042528, -53.77700023042528, -53.77700023042528, -53.77700023042528, -53.77700023042528, -53.77700023042528, 11.869999999999999, -4.6699999999999999, 13.029999999999999, 65.239999999999995, -274.13, -178.77000000000001, 44.43, -14.9, -114.70999999999999, 32.840000000000003, -8.6447959748228786, -177.99000000000001, 22.02, 86.719999999999999, 53, 49.240000000000002, -36.939999999999998, 40.859999999999999, 49.829999999999998, 80.900000000000006, -8.6447959748228786, 82.040000000000006, -102.66, -8.6447959748228786, -43.759999999999998, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, -8.6447959748228786, 7.3099999999999996, -72.530000000000001, -190.19, -190.19, -190.19, -190.19, 19.48],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [61.399999999999999, 44.109999999999999, 44.109999999999999, 44.109999999999999, 76.420000000000002, 98.379999999999995, 64.180000000000007, 94.030000000000001, 71.430000000000007, 76.859999999999999, 63.539999999999999, 35.020000000000003, 80.090000000000003, 96.310000000000002, 28.550000000000001, 31.620000000000001, 60.649999999999999, 75.040000000000006, 45.159999999999997, -2.71, 24.649999999999999, 1.77, 1.77, 1.77, 45.329999999999998, 45.329999999999998, 16.780000000000001, 57.670000000000002, 36.549999999999997, 45.859999999999999, 48.539999999999999, 85.670000000000002, 34.630000000000003, 34.663516871768834, 34.663516871768834, 34.663516871768834, 100, 34.310000000000002, -581.35000000000002, -581.35000000000002, 50.090000000000003, 50.090000000000003, 11.56, 27.210000000000001, 13.800000000000001, 28.780000000000001, 68.75, 22.73, 90.010000000000005, 51.770000000000003, 27.57, 44.817332799206298, 44.817332799206298, 44.817332799206298, 44.817332799206298, 75.209999999999994, -83.670000000000002, -116.89, -26.16, -74.75, -310.38, 86.780000000000001, 36.25, -191.50999999999999, 49.539999999999999, -168.09, 71.340000000000003, 93.019999999999996, 15.02, 15.459945705285811, 98.680000000000007, 15.459945705285811, 34.310000000000002, -103.09, -15.109999999999999, 45.770000000000003, 41.57, 97.680000000000007, -32.969999999999999, -5.5099999999999998, 50.270000000000003, 33.119999999999997, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -357.38999999999999, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, -3.598103918792694, 81.450000000000003, 16.84, 24.120000000000001, 16.68, 16.68, 16.68, -33.399999999999999, -229.38999999999999, -120.63, 47.829999999999998, 96.810000000000002, -183.84, 64.969999999999999, 97.870000000000005, -206.19, -109.11833954000404, -391.06, -398.99000000000001, -61.579999999999998, -191.52000000000001, -7.3899999999999997, -8.9900000000000002, -177.12, 90.719999999999999, -5.8099999999999996, -30.867731773644724, -30.867731773644724, 36.200000000000003, -102.95999999999999, -30.867731773644724, -30.867731773644724, -14.48, -93.030000000000001, 1.96, 5.9299999999999997, 10.73, 17.170000000000002, -54.174441622559485, -8.1899999999999995, -541, -54.600000000000001, -54.174441622559485, 7.0800000000000001, -28.32, -54.174441622559485, -54.174441622559485, 8.2899999999999991, 52.689999999999998, 15.31, -54.174441622559485, -54.174441622559485, -54.174441622559485, 46.590000000000003, -54.174441622559485, -54.174441622559485, 19.969999999999999, -54.174441622559485, -496.60000000000002, -54.174441622559485, -54.174441622559485, 22.27, 74.439999999999998, -54.174441622559485, 44.5, -54.174441622559485, -213.40000000000001, -54.174441622559485, -54.174441622559485, 84.540000000000006, -54.174441622559485, -54.174441622559485, -54.174441622559485, -54.174441622559485, -54.174441622559485, -54.174441622559485, -54.174441622559485, -54.174441622559485, -54.174441622559485, 11.869999999999999, -4.6699999999999999, 13.029999999999999, 65.239999999999995, -274.13, -178.77000000000001, 44.43, -14.9, -114.70999999999999, 32.840000000000003, -8.6843269635752272, -177.99000000000001, 22.02, 86.719999999999999, 53, -36.939999999999998, 40.859999999999999, 49.240000000000002, 49.829999999999998, 80.900000000000006, -8.6843269635752272, 82.040000000000006, -102.66, -8.6843269635752272, -43.759999999999998, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, -8.6843269635752272, 7.3099999999999996, -72.530000000000001, -190.19, -190.19, -190.19, -190.19, 19.48],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [61.399999999999999, 44.109999999999999, 44.109999999999999, 44.109999999999999, 76.420000000000002, 98.379999999999995, 64.180000000000007, 94.030000000000001, 71.430000000000007, 76.859999999999999, 63.539999999999999, 35.020000000000003, 80.090000000000003, 96.310000000000002, 28.550000000000001, 31.620000000000001, 60.649999999999999, 75.040000000000006, 45.159999999999997, -2.71, 24.649999999999999, 1.77, 1.77, 1.77, 45.329999999999998, 45.329999999999998, 16.780000000000001, 57.670000000000002, 36.549999999999997, 45.859999999999999, 48.539999999999999, 85.670000000000002, 34.630000000000003, 34.663870336154893, 34.663870336154893, 34.663870336154893, 100, 34.310000000000002, -581.35000000000002, -581.35000000000002, 50.090000000000003, 50.090000000000003, 11.56, 27.210000000000001, 13.800000000000001, 28.780000000000001, 68.75, 22.73, 90.010000000000005, 51.770000000000003, 27.57, 44.777437363678295, 44.777437363678295, 44.777437363678295, 44.777437363678295, 75.209999999999994, -83.670000000000002, -116.89, -26.16, -74.75, -310.38, 86.780000000000001, 36.25, -191.50999999999999, 49.539999999999999, -168.09, 71.340000000000003, 93.019999999999996, 15.02, 15.460660799787291, 98.680000000000007, 15.460660799787291, 34.310000000000002, -103.09, -15.109999999999999, 45.770000000000003, 41.57, 97.680000000000007, -32.969999999999999, -5.5099999999999998, 50.270000000000003, 33.119999999999997, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -357.38999999999999, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, -3.5481305466221205, 81.450000000000003, 16.84, 24.120000000000001, 16.68, 16.68, 16.68, -33.399999999999999, -229.38999999999999, -120.63, 47.829999999999998, 96.810000000000002, -183.84, 64.969999999999999, 97.870000000000005, -206.19, -110.29325013403511, -391.06, -398.99000000000001, -61.579999999999998, -191.52000000000001, -7.3899999999999997, -8.9900000000000002, -177.12, 90.719999999999999, -5.8099999999999996, -30.993819932074274, -30.993819932074274, 36.200000000000003, -102.95999999999999, -30.993819932074274, -30.993819932074274, -14.48, -93.030000000000001, 1.96, 5.9299999999999997, 10.73, 17.170000000000002, -54.57965164046287, -541, -8.1899999999999995, -54.600000000000001, -54.57965164046287, 7.0800000000000001, -28.32, -54.57965164046287, -54.57965164046287, 8.2899999999999991, 52.689999999999998, -54.57965164046287, 15.31, -54.57965164046287, -54.57965164046287, 46.590000000000003, -54.57965164046287, -54.57965164046287, 19.969999999999999, -54.57965164046287, -496.60000000000002, -54.57965164046287, -54.57965164046287, 22.27, 74.439999999999998, -54.57965164046287, 44.5, -54.57965164046287, -213.40000000000001, -54.57965164046287, -54.57965164046287, 84.540000000000006, -54.57965164046287, -54.57965164046287, -54.57965164046287, -54.57965164046287, -54.57965164046287, -54.57965164046287, -54.57965164046287, -54.57965164046287, -54.57965164046287, 11.869999999999999, -4.6699999999999999, 13.029999999999999, 65.239999999999995, -274.13, -178.77000000000001, 44.43, -14.9, -114.70999999999999, 32.840000000000003, -177.99000000000001, -8.7386221778421174, 22.02, 86.719999999999999, 53, -36.939999999999998, 40.859999999999999, 49.240000000000002, 49.829999999999998, 80.900000000000006, -8.7386221778421174, 82.040000000000006, -102.66, -8.7386221778421174, -43.759999999999998, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, -8.7386221778421174, 7.3099999999999996, -72.530000000000001, -190.19, -190.19, -190.19, -190.19, 19.48],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [61.399999999999999, 44.109999999999999, 44.109999999999999, 44.109999999999999, 76.420000000000002, 98.379999999999995, 64.180000000000007, 94.030000000000001, 71.430000000000007, 76.859999999999999, 63.539999999999999, 35.020000000000003, 80.090000000000003, 96.310000000000002, 28.550000000000001, 31.620000000000001, 60.649999999999999, 75.040000000000006, 45.159999999999997, -2.71, 24.649999999999999, 1.77, 1.77, 1.77, 45.329999999999998, 45.329999999999998, 16.780000000000001, 57.670000000000002, 36.549999999999997, 45.859999999999999, 48.539999999999999, 85.670000000000002, 34.630000000000003, 34.66426421829739, 34.66426421829739, 34.66426421829739, 100, 34.310000000000002, -581.35000000000002, -581.35000000000002, 50.090000000000003, 50.090000000000003, 11.56, 27.210000000000001, 13.800000000000001, 28.780000000000001, 68.75, 22.73, 90.010000000000005, 51.770000000000003, 27.57, 44.737830107636896, 44.737830107636896, 44.737830107636896, 44.737830107636896, 75.209999999999994, -83.670000000000002, -116.89, -26.16, -74.75, -310.38, 86.780000000000001, 36.25, -191.50999999999999, 49.539999999999999, -168.09, 71.340000000000003, 93.019999999999996, 15.02, 15.462120936942416, 98.680000000000007, 15.462120936942416, 34.310000000000002, -103.09, -15.109999999999999, 45.770000000000003, 41.57, 97.680000000000007, -32.969999999999999, -5.5099999999999998, 50.270000000000003, 33.119999999999997, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -357.38999999999999, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, -3.5030902466938465, 81.450000000000003, 16.84, 24.120000000000001, 16.68, 16.68, 16.68, -33.399999999999999, -229.38999999999999, -120.63, 47.829999999999998, 96.810000000000002, -183.84, 64.969999999999999, 97.870000000000005, -206.19, -110.97761027807159, -391.06, -398.99000000000001, -61.579999999999998, -191.52000000000001, -7.3899999999999997, -8.9900000000000002, -177.12, 90.719999999999999, -5.8099999999999996, -31.111414662310562, -31.111414662310562, 36.200000000000003, -102.95999999999999, -31.111414662310562, -31.111414662310562, -14.48, -93.030000000000001, 1.96, 5.9299999999999997, 10.73, 17.170000000000002, -54.998596797391258, -541, -8.1899999999999995, -54.600000000000001, -54.998596797391258, 7.0800000000000001, -28.32, -54.998596797391258, -54.998596797391258, 8.2899999999999991, 52.689999999999998, -54.998596797391258, 15.31, -54.998596797391258, -54.998596797391258, 46.590000000000003, -54.998596797391258, -54.998596797391258, 19.969999999999999, -54.998596797391258, -496.60000000000002, -54.998596797391258, -54.998596797391258, 22.27, 74.439999999999998, -54.998596797391258, 44.5, -213.40000000000001, -54.998596797391258, -54.998596797391258, -54.998596797391258, 84.540000000000006, -54.998596797391258, -54.998596797391258, -54.998596797391258, -54.998596797391258, -54.998596797391258, -54.998596797391258, -54.998596797391258, -54.998596797391258, -54.998596797391258, 11.869999999999999, -4.6699999999999999, 13.029999999999999, 65.239999999999995, -274.13, -178.77000000000001, 44.43, -14.9, -114.70999999999999, 32.840000000000003, -177.99000000000001, -8.8320947319383549, 22.02, 86.719999999999999, 53, -36.939999999999998, 40.859999999999999, 49.240000000000002, 49.829999999999998, 80.900000000000006, -8.8320947319383549, 82.040000000000006, -102.66, -8.8320947319383549, -43.759999999999998, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, -8.8320947319383549, 7.3099999999999996, -72.530000000000001, -190.19, -190.19, -190.19, -190.19, 19.48],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [61.399999999999999, 44.109999999999999, 44.109999999999999, 44.109999999999999, 76.420000000000002, 98.379999999999995, 64.180000000000007, 94.030000000000001, 71.430000000000007, 76.859999999999999, 63.539999999999999, 35.020000000000003, 80.090000000000003, 96.310000000000002, 28.550000000000001, 31.620000000000001, 60.649999999999999, 75.040000000000006, 45.159999999999997, -2.71, 24.649999999999999, 1.77, 1.77, 1.77, 45.329999999999998, 45.329999999999998, 16.780000000000001, 57.670000000000002, 36.549999999999997, 45.859999999999999, 48.539999999999999, 85.670000000000002, 34.630000000000003, 34.664696868506098, 34.664696868506098, 34.664696868506098, 100, 34.310000000000002, -581.35000000000002, -581.35000000000002, 50.090000000000003, 50.090000000000003, 11.56, 27.210000000000001, 13.800000000000001, 28.780000000000001, 68.75, 22.73, 90.010000000000005, 51.770000000000003, 27.57, 44.711785341269731, 44.711785341269731, 44.711785341269731, 44.711785341269731, 75.209999999999994, -83.670000000000002, -116.89, -26.16, -74.75, -310.38, 36.25, 86.780000000000001, -191.50999999999999, 49.539999999999999, -168.09, 71.340000000000003, 93.019999999999996, 15.02, 15.463815316682975, 98.680000000000007, 15.463815316682975, 34.310000000000002, -103.09, -15.109999999999999, 45.770000000000003, 41.57, 97.680000000000007, -32.969999999999999, -5.5099999999999998, 50.270000000000003, 33.119999999999997, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -357.38999999999999, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, -3.4944296393028922, 81.450000000000003, 16.84, 24.120000000000001, 16.68, 16.68, 16.68, -33.399999999999999, -229.38999999999999, -120.63, 47.829999999999998, 96.810000000000002, -183.84, 64.969999999999999, 97.870000000000005, -111.11467876969998, -206.19, -391.06, -398.99000000000001, -61.579999999999998, -191.52000000000001, -7.3899999999999997, -8.9900000000000002, -177.12, 90.719999999999999, -5.8099999999999996, -31.24114801379557, -31.24114801379557, 36.200000000000003, -102.95999999999999, -31.24114801379557, -31.24114801379557, -14.48, -93.030000000000001, 1.96, 5.9299999999999997, 10.73, 17.170000000000002, -55.425196981691322, -541, -8.1899999999999995, -54.600000000000001, -55.425196981691322, 7.0800000000000001, -28.32, -55.425196981691322, -55.425196981691322, 8.2899999999999991, 52.689999999999998, -55.425196981691322, 15.31, -55.425196981691322, -55.425196981691322, 46.590000000000003, -55.425196981691322, -55.425196981691322, 19.969999999999999, -55.425196981691322, -496.60000000000002, -55.425196981691322, -55.425196981691322, 22.27, 74.439999999999998, -55.425196981691322, 44.5, -213.40000000000001, -55.425196981691322, -55.425196981691322, -55.425196981691322, 84.540000000000006, -55.425196981691322, -55.425196981691322, -55.425196981691322, -55.425196981691322, -55.425196981691322, -55.425196981691322, -55.425196981691322, -55.425196981691322, -55.425196981691322, 11.869999999999999, -4.6699999999999999, 13.029999999999999, 65.239999999999995, -274.13, -178.77000000000001, 44.43, -14.9, -114.70999999999999, 32.840000000000003, -177.99000000000001, -8.9356199280693343, 22.02, 86.719999999999999, 53, -36.939999999999998, 40.859999999999999, 49.240000000000002, 49.829999999999998, 80.900000000000006, -8.9356199280693343, 82.040000000000006, -102.66, -8.9356199280693343, -43.759999999999998, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, -8.9356199280693343, 7.3099999999999996, -72.530000000000001, -190.19, -190.19000000000003, -190.19000000000003, -190.19000000000003, 19.48],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [61.399999999999999, 44.109999999999999, 44.109999999999999, 44.109999999999999, 76.420000000000002, 98.379999999999995, 64.180000000000007, 94.030000000000001, 71.430000000000007, 76.859999999999999, 63.539999999999999, 35.020000000000003, 80.090000000000003, 96.310000000000002, 28.550000000000001, 31.620000000000001, 60.649999999999999, 75.040000000000006, 45.159999999999997, -2.71, 24.649999999999999, 1.77, 1.77, 1.77, 45.329999999999998, 45.329999999999998, 16.780000000000001, 57.670000000000002, 36.549999999999997, 45.859999999999999, 48.539999999999999, 85.670000000000002, 34.630000000000003, 34.665231233083837, 34.665231233083837, 34.665231233083837, 100, 34.310000000000002, -581.35000000000002, -581.35000000000002, 50.090000000000003, 50.090000000000003, 11.56, 27.210000000000001, 13.800000000000001, 28.780000000000001, 68.75, 22.73, 90.010000000000005, 51.770000000000003, 27.57, 44.728279122794603, 44.728279122794603, 44.728279122794603, 44.728279122794603, 75.209999999999994, -83.670000000000002, -116.89, -26.16, -74.75, -310.38, 36.25, 86.780000000000001, -191.50999999999999, 49.539999999999999, -168.09, 71.340000000000003, 93.019999999999996, 15.02, 15.461187679801153, 98.680000000000007, 15.461187679801153, 34.310000000000002, -103.09, -15.109999999999999, 45.770000000000003, 41.57, 97.680000000000007, -32.969999999999999, -5.5099999999999998, 50.270000000000003, 33.119999999999997, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -357.38999999999999, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, -3.4823427979682027, 81.450000000000003, 16.84, 24.120000000000001, 16.68, 16.68, 16.68, -33.399999999999999, -229.38999999999999, -120.63, 47.829999999999998, 96.810000000000002, -183.84, 64.969999999999999, 97.870000000000005, -110.99916014093688, -206.19, -391.06, -398.99000000000001, -61.579999999999998, -191.52000000000001, -7.3899999999999997, -8.9900000000000002, -177.12, 90.719999999999999, -5.8099999999999996, -31.337656758448929, -31.337656758448929, 36.200000000000003, -102.95999999999999, -31.337656758448929, -31.337656758448929, -14.48, -93.030000000000001, 1.96, 5.9299999999999997, 10.73, 17.170000000000002, -55.806680962666697, -541, -8.1899999999999995, -54.600000000000001, -55.806680962666697, 7.0800000000000001, -28.32, -55.806680962666697, -55.806680962666697, 8.2899999999999991, 52.689999999999998, -55.806680962666697, 15.31, -55.806680962666697, 46.590000000000003, -55.806680962666697, -55.806680962666697, -55.806680962666697, 19.969999999999999, -55.806680962666697, -496.60000000000002, -55.806680962666697, -55.806680962666697, 22.27, 74.439999999999998, -55.806680962666697, 44.5, -213.40000000000001, -55.806680962666697, -55.806680962666697, -55.806680962666697, 84.540000000000006, -55.806680962666697, -55.806680962666697, -55.806680962666697, -55.806680962666697, -55.806680962666697, -55.806680962666697, -55.806680962666697, -55.806680962666697, -55.806680962666697, 11.869999999999999, -4.6699999999999999, 13.029999999999999, 65.239999999999995, -274.13, -178.77000000000001, 44.43, -14.9, -114.70999999999999, 32.840000000000003, -177.99000000000001, 22.02, -8.9500693266924358, 86.719999999999999, 53, -36.939999999999998, 40.859999999999999, 49.240000000000002, 49.829999999999998, 80.900000000000006, -8.9500693266924358, 82.040000000000006, -102.66, -8.9500693266924358, -43.759999999999998, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, -8.9500693266924358, 7.3099999999999996, -72.530000000000001, -190.19, -190.19, -190.19, -190.19, 19.48],
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
            "title": "Energy imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [61.399999999999999, 44.109999999999999, 44.109999999999999, 44.109999999999999, 76.420000000000002, 98.379999999999995, 64.180000000000007, 94.030000000000001, 71.430000000000007, 76.859999999999999, 63.539999999999999, 35.020000000000003, 80.090000000000003, 96.310000000000002, 28.550000000000001, 31.620000000000001, 60.649999999999999, 75.040000000000006, 45.159999999999997, -2.71, 24.649999999999999, 1.77, 1.77, 1.77, 45.329999999999998, 45.329999999999998, 16.780000000000001, 57.670000000000002, 36.549999999999997, 45.859999999999999, 48.539999999999999, 85.670000000000002, 34.630000000000003, 34.665927442418088, 34.665927442418088, 34.665927442418088, 100, 34.310000000000002, -581.35000000000002, -581.35000000000002, 50.090000000000003, 50.090000000000003, 11.56, 27.210000000000001, 13.800000000000001, 28.780000000000001, 68.75, 22.73, 90.010000000000005, 51.770000000000003, 27.57, 44.732096174756037, 44.732096174756037, 44.732096174756037, 44.732096174756037, 75.209999999999994, -83.670000000000002, -116.89, -26.16, -74.75, -310.38, 36.25, 86.780000000000001, -191.50999999999999, 49.539999999999999, -168.09, 71.340000000000003, 93.019999999999996, 15.02, 15.456816239158217, 98.680000000000007, 15.456816239158217, 34.310000000000002, -103.09, -15.109999999999999, 45.770000000000003, 41.57, 97.680000000000007, -32.969999999999999, -5.5099999999999998, 50.270000000000003, 33.119999999999997, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -357.38999999999999, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, -3.4147978280842155, 81.450000000000003, 16.84, 24.120000000000001, 16.68, 16.68, 16.68, -33.399999999999999, -229.38999999999999, -120.63, 47.829999999999998, 96.810000000000002, -183.84, 64.969999999999999, 97.870000000000005, -110.15329652873108, -206.19, -391.06, -398.99000000000001, -61.579999999999998, -191.52000000000001, -7.3899999999999997, -8.9900000000000002, -177.12, 90.719999999999999, -5.8099999999999996, -31.409382893836774, -31.409382893836774, 36.200000000000003, -102.95999999999999, -31.409382893836774, -31.409382893836774, -14.48, -93.030000000000001, 1.96, 5.9299999999999997, 10.73, 17.170000000000002, -56.166375818955032, -541, -8.1899999999999995, -54.600000000000001, -56.166375818955032, 7.0800000000000001, -28.32, -56.166375818955032, -56.166375818955032, 8.2899999999999991, -56.166375818955032, 52.689999999999998, 15.31, -56.166375818955032, 46.590000000000003, -56.166375818955032, -56.166375818955032, -56.166375818955032, 19.969999999999999, -56.166375818955032, -496.60000000000002, -56.166375818955032, -56.166375818955032, 22.27, 74.439999999999998, -56.166375818955032, 44.5, -213.40000000000001, -56.166375818955032, -56.166375818955032, -56.166375818955032, 84.540000000000006, -56.166375818955032, -56.166375818955032, -56.166375818955032, -56.166375818955032, -56.166375818955032, -56.166375818955032, -56.166375818955032, -56.166375818955032, -56.166375818955032, 11.869999999999999, -4.6699999999999999, 13.029999999999999, 65.239999999999995, -274.13, -178.77000000000001, 44.43, -14.9, -114.70999999999999, 32.840000000000003, -177.99000000000001, 22.02, 86.719999999999999, -8.8928406686558468, 53, -36.939999999999998, 40.859999999999999, 49.240000000000002, 49.829999999999998, 80.900000000000006, -8.8928406686558468, 82.040000000000006, -102.66, -8.8928406686558468, -43.759999999999998, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, -8.8928406686558468, 7.3099999999999996, -72.530000000000001, -190.19, -190.19, -190.19, -190.19, 19.48],
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

  
