(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Sectors_Value_added___agriculture_map') 

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
    "b55c65022f36": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c65022f36",
  "attrs": {
    "b55c65022f36": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 80,
      "colorbar": {
        "title": "Value added in the agricultural sector"
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
        "title": "Value added in the agricultural sector",
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
      "z": [0.82999999999999996, 1.8500000000000001, 1.8500000000000001, 1.8500000000000001, 2.3599999999999999, 1.96, 5, 3.3500000000000001, 3.4300000000000002, 2.6499999999999999, 1.49, 2.0600000000000001, 1.03, 0.46000000000000002, 2.6099999999999999, 2.4399999999999999, 1.8100000000000001, 4.4199999999999999, 3.9399999999999999, 3.46, 1.8600000000000001, 1.6100000000000001, 1.7018494187665001, 12.01, 2.54, 2.54, 11.91, 3.8999999999999999, 9.0999999999999996, 3.9300000000000002, 2.25, 1.48, 0.84999999999999998, 0.84999999999999998, 0.84999999999999998, 0.84999999999999998, 0.84999999999999998, 19.59, 1.26, 1.26, 0.83999999999999997, 0.12, 6.4199999999999999, 10.5, 21.98, 8.0899999999999999, 8.1099999999999994, 19.300000000000001, 18.329999999999998, 11.539999999999999, 9.9100000000000001, 0.41999999999999998, 11.619972283818312, 0.02, 11.619972283818312, 9.8000000000000007, 5.5, 7.8600000000000003, 28.460000000000001, 21.905122469768028, 8.6400000000000006, 12.43, 24.190000000000001, 33.619999999999997, 19.120000000000001, 17.91, 18.440000000000001, 1.3, 12.35, 12.28623276042852, 0.080000000000000002, 12.28623276042852, 19.59, 15.19, 22.539999999999999, 13.15, 9.4399999999999995, 0.059999999999999998, 52.270000000000003, 9.3100000000000005, 13.23, 31.969999999999999, 38.350000000000001, 32.090000000000003, 32.000475111792738, 12.51, 35.829999999999998, 1.22, 5.3099999999999996, 32.000475111792738, 1.74, 22.829999999999998, 10.99, 32.000475111792738, 23.170000000000002, 19.16, 23.449999999999999, 32.000475111792738, 32.000475111792738, 32.000475111792738, 3.7400000000000002, 32.000475111792738, 32.000475111792738, 32.000475111792738, 16.289999999999999, 32.000475111792738, 32.000475111792738, 32.000475111792738, 32.000475111792738, 32.000475111792738, 2.96, 19.809999999999999, 22.859999999999999, 35.109999999999999, 37.420000000000002, 22.140000000000001, 7.4500000000000002, 8.4100000000000001, 12.880000000000001, 24.66, 1.71, 2.4700000000000002, 5.4900000000000002, 1.9299999999999999, 6.9800000000000004, 2.21, 0.45000000000000001, 0.27000000000000002, 0.23000000000000001, 4.4699999999999998, 15.289999999999999, 9.8100000000000005, 38.420000000000002, 12.49, 41.200000000000003, 29.879999999999999, 9.2899999999999991, 25.629999999999999, 4.0899999999999999, 24.18, 21.827715656037547, 2.6499999999999999, 33.829999999999998, 26.050000000000001, 37.289999999999999, 24.91, 25.800000000000001, 24.510000000000002, 36.549999999999997, 22.710000000000001, 20.780000000000001, 32.030000000000001, 6.2000000000000002, 17.469999999999999, 25.960000000000001, 14.789999999999999, 30.129999999999999, 15.619999999999999, 15.49, 24.189012872593565, 20.780000000000001, 33.039999999999999, 24.449999999999999, 42.840000000000003, 24.189012872593565, 24.940000000000001, 46.899999999999999, 38.329999999999998, 6.2800000000000002, 72.239999999999995, 11.83, 6.3499999999999996, 10.220000000000001, 2.7200000000000002, 26.75, 6, 42.350000000000001, 5.1799999999999997, 12.390000000000001, 1.52, 24.189012872593565, 1.1899999999999999, 29.379999999999999, 10.140000000000001, 24.189012872593565, 10.630000000000001, 2.46, 24.189012872593565, 6.1699999999999999, 3.3900000000000001, 10.33, 4.0899999999999999, 8.3300000000000001, 4.3099999999999996, 9.6400000000000006, 7.3099999999999996, 10.84, 13.470000000000001, 10.006678724770916, 13.43, 6.6900000000000004, 16.719999999999999, 11.609999999999999, 5.4900000000000002, 13.01, 15.630000000000001, 8.8399999999999999, 0.56000000000000005, 6.8700000000000001, 5.21, 0.94999999999999996, 32.109999999999999, 6.4800000000000004, 10.006678724770916, 10.006678724770916, 1.3500000000000001, 1.98, 10.539999999999999, 10.006678724770916, 2.98, 10.006678724770916, 6.0999999999999996, 5.8700000000000001, 10.006678724770916, 0.02, 1.75, 11.039999999999999, 0.81999999999999995, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 1.1200000000000001, 2.0499999999999998, 2.8900000000000001, 2.8900000000000001, 2.8900000000000001, 2.8900000000000001, 5.7300000000000004],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.82999999999999996, 1.8500000000000001, 1.8500000000000001, 1.8500000000000001, 2.3599999999999999, 1.96, 5, 3.3500000000000001, 3.4300000000000002, 2.6499999999999999, 1.49, 2.0600000000000001, 1.03, 0.46000000000000002, 2.6099999999999999, 2.4399999999999999, 1.8100000000000001, 4.4199999999999999, 3.9399999999999999, 3.46, 1.8600000000000001, 1.6100000000000001, 1.7018494187665001, 12.01, 2.54, 2.54, 11.91, 3.8999999999999999, 9.0999999999999996, 3.9300000000000002, 2.25, 1.48, 0.84999999999999998, 0.84999999999999998, 0.84999999999999998, 0.84999999999999998, 0.84999999999999998, 19.59, 1.26, 1.26, 0.83999999999999997, 0.12, 6.4199999999999999, 10.5, 21.98, 8.0899999999999999, 8.1099999999999994, 19.300000000000001, 18.329999999999998, 11.539999999999999, 9.9100000000000001, 0.41999999999999998, 11.619972283818312, 0.02, 11.619972283818312, 9.8000000000000007, 5.5, 7.8600000000000003, 28.460000000000001, 21.905122469768028, 8.6400000000000006, 12.43, 24.190000000000001, 33.619999999999997, 19.120000000000001, 17.91, 18.440000000000001, 1.3, 12.35, 12.28623276042852, 0.080000000000000002, 12.28623276042852, 19.59, 15.19, 22.539999999999999, 13.15, 9.4399999999999995, 0.059999999999999998, 52.270000000000003, 9.3100000000000005, 13.23, 31.969999999999999, 38.350000000000001, 32.090000000000003, 32.000475111792738, 12.51, 35.829999999999998, 1.22, 5.3099999999999996, 32.000475111792738, 1.74, 22.829999999999998, 10.99, 32.000475111792738, 23.170000000000002, 19.16, 23.449999999999999, 32.000475111792738, 32.000475111792738, 32.000475111792738, 3.7400000000000002, 32.000475111792738, 32.000475111792738, 32.000475111792738, 16.289999999999999, 32.000475111792738, 32.000475111792738, 32.000475111792738, 32.000475111792738, 32.000475111792738, 2.96, 19.809999999999999, 22.859999999999999, 35.109999999999999, 37.420000000000002, 22.140000000000001, 7.4500000000000002, 8.4100000000000001, 12.880000000000001, 24.66, 1.71, 2.4700000000000002, 5.4900000000000002, 1.9299999999999999, 6.9800000000000004, 2.21, 0.45000000000000001, 0.27000000000000002, 0.23000000000000001, 4.4699999999999998, 15.289999999999999, 9.8100000000000005, 38.420000000000002, 12.49, 41.200000000000003, 29.879999999999999, 9.2899999999999991, 25.629999999999999, 4.0899999999999999, 24.18, 21.827715656037547, 2.6499999999999999, 33.829999999999998, 26.050000000000001, 37.289999999999999, 24.91, 25.800000000000001, 24.510000000000002, 36.549999999999997, 22.710000000000001, 20.780000000000001, 32.030000000000001, 6.2000000000000002, 17.469999999999999, 25.960000000000001, 14.789999999999999, 30.129999999999999, 15.619999999999999, 15.49, 24.189012872593565, 20.780000000000001, 33.039999999999999, 24.449999999999999, 42.840000000000003, 24.189012872593565, 24.940000000000001, 46.899999999999999, 38.329999999999998, 6.2800000000000002, 72.239999999999995, 11.83, 6.3499999999999996, 10.220000000000001, 2.7200000000000002, 26.75, 6, 42.350000000000001, 5.1799999999999997, 12.390000000000001, 1.52, 24.189012872593565, 1.1899999999999999, 29.379999999999999, 10.140000000000001, 24.189012872593565, 10.630000000000001, 2.46, 24.189012872593565, 6.1699999999999999, 3.3900000000000001, 10.33, 4.0899999999999999, 8.3300000000000001, 4.3099999999999996, 9.6400000000000006, 7.3099999999999996, 10.84, 13.470000000000001, 10.006678724770916, 13.43, 6.6900000000000004, 16.719999999999999, 11.609999999999999, 5.4900000000000002, 13.01, 15.630000000000001, 8.8399999999999999, 0.56000000000000005, 6.8700000000000001, 5.21, 0.94999999999999996, 32.109999999999999, 6.4800000000000004, 10.006678724770916, 10.006678724770916, 1.3500000000000001, 1.98, 10.539999999999999, 10.006678724770916, 2.98, 10.006678724770916, 6.0999999999999996, 5.8700000000000001, 10.006678724770916, 0.02, 1.75, 11.039999999999999, 0.81999999999999995, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 10.006678724770916, 1.1200000000000001, 2.0499999999999998, 2.8900000000000001, 2.8900000000000001, 2.8900000000000001, 2.8900000000000001, 5.7300000000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.94999999999999996, 1.8200000000000001, 1.8200000000000001, 1.8200000000000001, 2.3500000000000001, 1.8999999999999999, 4.2800000000000002, 3.0800000000000001, 3.1299999999999999, 2.6000000000000001, 1.48, 1.8700000000000001, 1.02, 0.54000000000000004, 3.29, 2.4199999999999999, 1.6699999999999999, 4.1699999999999999, 4.2000000000000002, 3.6200000000000001, 1.8300000000000001, 1.6200000000000001, 1.7110376501928239, 11.880000000000001, 2.3799999999999999, 2.3799999999999999, 12.710000000000001, 4.3499999999999996, 8.4499999999999993, 4.4199999999999999, 2.4300000000000002, 1.5700000000000001, 0.72999999999999998, 0.72999999999999998, 0.72999999999999998, 0.72999999999999998, 0.72999999999999998, 17.809999999999999, 1.3400000000000001, 1.3400000000000001, 0.93000000000000005, 0.12, 5.2800000000000002, 10.44, 20.539999999999999, 8.5299999999999994, 8.5800000000000001, 16.399999999999999, 17.59, 11.550000000000001, 9.2599999999999998, 0.40999999999999998, 11.272634405722584, 0.02, 11.272634405722584, 9.3300000000000001, 4.9000000000000004, 7.1200000000000001, 26.440000000000001, 20.223233114856559, 8.8499999999999996, 10.99, 19.219999999999999, 29.899999999999999, 18.359999999999999, 17.91, 20.030000000000001, 1.23, 12.92, 12.853094825723591, 0.070000000000000007, 12.853094825723591, 17.809999999999999, 14.34, 21.809999999999999, 13.98, 9.2899999999999991, 0.059999999999999998, 49.289999999999999, 9.2699999999999996, 12.539999999999999, 29.390000000000001, 35.969999999999999, 30.52, 30.177163549180442, 12.35, 35.539999999999999, 1.1299999999999999, 5.5800000000000001, 30.177163549180442, 1.79, 23.600000000000001, 11.74, 30.177163549180442, 21.960000000000001, 20.25, 24.399999999999999, 30.177163549180442, 30.177163549180442, 30.177163549180442, 3.7599999999999998, 30.177163549180442, 30.177163549180442, 30.177163549180442, 17.649999999999999, 30.177163549180442, 30.177163549180442, 30.177163549180442, 30.177163549180442, 30.177163549180442, 2.96, 19.27, 23.079999999999998, 34.68, 29.719999999999999, 21.73, 6.8899999999999997, 6.9400000000000004, 11.73, 22.43, 1.6200000000000001, 2.5, 3.8199999999999998, 1.6699999999999999, 11.140000000000001, 1.9399999999999999, 0.40000000000000002, 0.27000000000000002, 0.17999999999999999, 3.8700000000000001, 14.27, 9.4399999999999995, 34.009999999999998, 11.869999999999999, 37.369999999999997, 30.02, 9.9000000000000004, 29.77, 3.3399999999999999, 22.920000000000002, 20.734040578634453, 2.4100000000000001, 27.23, 23.879999999999999, 38.68, 25.699999999999999, 24.93, 21.670000000000002, 37.950000000000003, 22.379999999999999, 16.640000000000001, 31.420000000000002, 6.25, 17.559999999999999, 23.379999999999999, 28.870000000000001, 18.059999999999999, 15.58, 14.199999999999999, 23.815782801742699, 23.309999999999999, 33.899999999999999, 26.52, 41.899999999999999, 23.815782801742699, 27.350000000000001, 49.109999999999999, 38.329999999999998, 5.5099999999999998, 65.049999999999997, 10.640000000000001, 5.9800000000000004, 8.9399999999999995, 2.2599999999999998, 31.5, 5.4699999999999998, 41.990000000000002, 5.2800000000000002, 9.6600000000000001, 1.52, 1.1899999999999999, 23.815782801742699, 29.379999999999999, 9.8599999999999994, 23.815782801742699, 10.16, 3.23, 23.815782801742699, 5.6699999999999999, 3.3399999999999999, 8.3599999999999994, 3.7599999999999998, 7.9100000000000001, 3.7200000000000002, 11, 6.9299999999999997, 9.6899999999999995, 13.07, 9.7930866179046241, 13.32, 7.0199999999999996, 15.85, 12.17, 5.7300000000000004, 13.93, 15.970000000000001, 8.8499999999999996, 0.63, 6.4400000000000004, 4.9800000000000004, 0.76000000000000001, 31.489999999999998, 5.2199999999999998, 9.7930866179046241, 9.7930866179046241, 1.1599999999999999, 10.42, 1.6399999999999999, 9.7930866179046241, 2.98, 9.7930866179046241, 5.8499999999999996, 5.0099999999999998, 9.7930866179046241, 0.02, 1.6100000000000001, 11.199999999999999, 0.83999999999999997, 9.7930866179046241, 9.7930866179046241, 9.7930866179046241, 9.7930866179046241, 9.7930866179046241, 9.7930866179046241, 9.7930866179046241, 9.7930866179046241, 9.7930866179046241, 9.7930866179046241, 9.7930866179046241, 9.7930866179046241, 9.7930866179046241, 9.7930866179046241, 1.27, 2.1699999999999999, 3.0600000000000001, 3.0600000000000001, 3.0600000000000001, 3.0600000000000001, 5.3700000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.72999999999999998, 1.6799999999999999, 1.6799999999999999, 1.6799999999999999, 2.0299999999999998, 1.8400000000000001, 4.2800000000000002, 2.7400000000000002, 2.77, 2.2999999999999998, 1.26, 1.8600000000000001, 0.83999999999999997, 0.35999999999999999, 2.9199999999999999, 2.2799999999999998, 1.6200000000000001, 4.3300000000000001, 3.7200000000000002, 3.29, 1.25, 1.1499999999999999, 1.2418926875588332, 11.539999999999999, 2.2799999999999998, 2.2799999999999998, 8.4900000000000002, 3.7200000000000002, 7.2800000000000002, 3.8700000000000001, 2.4300000000000002, 1.03, 0.55000000000000004, 0.55000000000000004, 0.55000000000000004, 0.55000000000000004, 0.55000000000000004, 17.620000000000001, 1.3600000000000001, 1.3600000000000001, 0.81999999999999995, 0.12, 4.7000000000000002, 8.8800000000000008, 18.850000000000001, 6.7400000000000002, 8.3000000000000007, 14.77, 16.399999999999999, 9.7400000000000002, 8.7599999999999998, 0.38, 9.8963832654292112, 0.02, 9.8963832654292112, 9.1699999999999999, 4.2599999999999998, 6.3700000000000001, 26.329999999999998, 20.027550295464067, 8.5199999999999996, 9.0899999999999999, 21.190000000000001, 28.48, 18.530000000000001, 17.91, 19.800000000000001, 1.1100000000000001, 11.640000000000001, 11.579849884001414, 0.070000000000000007, 11.579849884001414, 17.620000000000001, 13.130000000000001, 19.300000000000001, 13.52, 9.1899999999999995, 0.059999999999999998, 47.32, 8.2599999999999998, 11.82, 30.710000000000001, 28.184999999999999, 28.300000000000001, 28.627743780740364, 12.07, 31.25, 0.94999999999999996, 7.7300000000000004, 28.627743780740364, 1.55, 22.27, 12.49, 28.627743780740364, 22.43, 17.760000000000002, 20.469999999999999, 28.627743780740364, 28.627743780740364, 28.627743780740364, 3.7000000000000002, 28.627743780740364, 28.627743780740364, 28.627743780740364, 19.43, 28.627743780740364, 28.627743780740364, 28.627743780740364, 28.627743780740364, 28.627743780740364, 2.6200000000000001, 18.57, 22.960000000000001, 33.82, 31.109999999999999, 20.199999999999999, 6.5, 6.8899999999999997, 10.550000000000001, 20.289999999999999, 1.8799999999999999, 2.7599999999999998, 3.5800000000000001, 1.3999999999999999, 8.9900000000000002, 1.6200000000000001, 0.29999999999999999, 0.27000000000000002, 0.13, 3.1899999999999999, 13.98, 7.6900000000000004, 33.200000000000003, 10.699999999999999, 39.280000000000001, 32.380000000000003, 23.780000000000001, 9.1699999999999999, 2.5099999999999998, 20.07, 19.8764599363525, 2.0899999999999999, 26.09, 21.579999999999998, 41.170000000000002, 24.649999999999999, 24.239999999999998, 25.07, 37.450000000000003, 22.77, 16.07, 5.0599999999999996, 30.760000000000002, 16.73, 26.77, 27.379999999999999, 17.149999999999999, 14.59, 15.18, 23.938100834126743, 22.280000000000001, 33.780000000000001, 26.690000000000001, 23.938100834126743, 40.850000000000001, 32.130000000000003, 50.100000000000001, 38.329999999999998, 6.0999999999999996, 66.030000000000001, 22.600000000000001, 10.369999999999999, 5.6699999999999999, 1.8300000000000001, 32.090000000000003, 4.9800000000000004, 44.359999999999999, 4.9800000000000004, 10.970000000000001, 1.52, 1.1899999999999999, 23.938100834126743, 29.379999999999999, 9, 23.938100834126743, 9.0099999999999998, 3.04, 23.938100834126743, 4.6500000000000004, 3.0699999999999998, 7.9400000000000004, 3.9199999999999999, 7.5300000000000002, 3.7000000000000002, 8.75, 6.8499999999999996, 9.4800000000000004, 12.59, 9.7350720478728814, 11.789999999999999, 7.21, 18.050000000000001, 12.470000000000001, 6.1699999999999999, 12.710000000000001, 16.140000000000001, 8.6199999999999992, 0.58999999999999997, 6.0199999999999996, 5.1900000000000004, 0.47999999999999998, 28.890000000000001, 4.9199999999999999, 9.7350720478728814, 9.7350720478728814, 1.0600000000000001, 9.8200000000000003, 1.5900000000000001, 9.7350720478728814, 2.98, 9.7350720478728814, 6.5999999999999996, 2.96, 9.7350720478728814, 0.02, 1.76, 11.49, 0.80000000000000004, 9.7350720478728814, 9.7350720478728814, 9.7350720478728814, 9.7350720478728814, 9.7350720478728814, 9.7350720478728814, 9.7350720478728814, 9.7350720478728814, 9.7350720478728814, 9.7350720478728814, 9.7350720478728814, 9.7350720478728814, 9.7350720478728814, 9.7350720478728814, 1.1499999999999999, 1.8799999999999999, 2.8900000000000001, 2.8900000000000001, 2.8900000000000001, 2.8900000000000001, 4.5199999999999996],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.73999999999999999, 1.52, 1.52, 1.52, 1.95, 1.8700000000000001, 3.2000000000000002, 2.2799999999999998, 2.4100000000000001, 2.25, 1.3, 1.95, 0.91000000000000003, 0.31, 2.6899999999999999, 2.1600000000000001, 1.8500000000000001, 3.8599999999999999, 3.2599999999999998, 3.1400000000000001, 1.3600000000000001, 1.1699999999999999, 1.2811097368076132, 13.779999999999999, 2, 2, 7.8200000000000003, 3.54, 6.0999999999999996, 3.98, 2.1200000000000001, 0.92000000000000004, 0.56999999999999995, 0.56999999999999995, 0.56999999999999995, 0.56999999999999995, 0.56999999999999995, 16.809999999999999, 1.3700000000000001, 1.3700000000000001, 0.75, 0.12, 4.75, 7.2400000000000002, 17.710000000000001, 6.8200000000000003, 8.0500000000000007, 11.199999999999999, 14.5, 8.9900000000000002, 8.2100000000000009, 0.34999999999999998, 8.953750010486063, 0.02, 8.953750010486063, 8.0899999999999999, 3.8599999999999999, 5.5, 25.079999999999998, 19.18902786268908, 8.5800000000000001, 7.0899999999999999, 21.449999999999999, 28.68, 17.199999999999999, 17.91, 17.640000000000001, 1.0800000000000001, 10.630000000000001, 10.575002802613387, 0.059999999999999998, 10.575002802613387, 16.809999999999999, 12.970000000000001, 18.73, 13.359999999999999, 9.4000000000000004, 0.050000000000000003, 45.090000000000003, 8.6099999999999994, 11.34, 30.059999999999999, 20.399999999999999, 26.73, 27.121124345567509, 12.369999999999999, 30.699999999999999, 0.70999999999999996, 6.5999999999999996, 27.121124345567509, 1.73, 20.98, 10.99, 27.121124345567509, 22.34, 15.77, 22.039999999999999, 27.121124345567509, 27.121124345567509, 27.121124345567509, 4.1299999999999999, 27.121124345567509, 27.121124345567509, 21.66, 27.121124345567509, 27.121124345567509, 27.121124345567509, 27.121124345567509, 27.121124345567509, 27.121124345567509, 2.5, 18.030000000000001, 21.609999999999999, 32.369999999999997, 28.640000000000001, 19.359999999999999, 7.1200000000000001, 5.8300000000000001, 10.15, 21.460000000000001, 1.8200000000000001, 2.5800000000000001, 1.0900000000000001, 4.4699999999999998, 11.390000000000001, 1.3999999999999999, 0.23999999999999999, 0.12, 0.27000000000000002, 2.9199999999999999, 13.24, 7.54, 31.82, 12.300000000000001, 39.75, 29.789999999999999, 26.699999999999999, 9.2799999999999994, 1.52, 16.609999999999999, 19.87795456269696, 2.0499999999999998, 24.73, 21.210000000000001, 42.520000000000003, 23.670000000000002, 20.52, 24.030000000000001, 28.329999999999998, 23.899999999999999, 15.94, 5.1900000000000004, 30.18, 15.630000000000001, 25.23, 25.670000000000002, 19.23, 13.210000000000001, 13.4, 22.279957696448029, 15.58, 30.030000000000001, 26.629999999999999, 22.279957696448029, 40.640000000000001, 29.57, 50.920000000000002, 38.329999999999998, 4.8099999999999996, 63.82, 24.600000000000001, 9.6500000000000004, 4.8399999999999999, 1.74, 25.600000000000001, 4.9100000000000001, 42.259999999999998, 4.9100000000000001, 11.18, 1.52, 1.1899999999999999, 22.279957696448029, 29.379999999999999, 8.3200000000000003, 22.279957696448029, 9.0700000000000003, 2.7799999999999998, 22.279957696448029, 4.3700000000000001, 3.0800000000000001, 6.9400000000000004, 3.71, 7.1900000000000004, 3.6600000000000001, 8.9100000000000001, 6.5999999999999996, 9.4100000000000001, 11.449999999999999, 9.3997179530366104, 10.94, 6.8600000000000003, 17.719999999999999, 11.859999999999999, 6.0499999999999998, 11.789999999999999, 15.9, 8.4299999999999997, 0.58999999999999997, 5.75, 5.1600000000000001, 0.56999999999999995, 34, 9.9900000000000002, 9.3997179530366104, 9.3997179530366104, 1.1699999999999999, 9.5800000000000001, 1.45, 9.3997179530366104, 2.98, 9.3997179530366104, 6.1500000000000004, 3.8900000000000001, 9.3997179530366104, 0.02, 1.6499999999999999, 10.5, 0.69800000000000006, 9.3997179530366104, 9.3997179530366104, 9.3997179530366104, 9.3997179530366104, 9.3997179530366104, 9.3997179530366104, 9.3997179530366104, 9.3997179530366104, 9.3997179530366104, 9.3997179530366104, 9.3997179530366104, 9.3997179530366104, 9.3997179530366104, 9.3997179530366104, 1.01, 1.7, 2.73, 2.73, 2.73, 2.73, 4.9800000000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.78000000000000003, 1.6100000000000001, 1.6100000000000001, 1.6100000000000001, 1.8999999999999999, 1.8300000000000001, 3.04, 2.02, 2.5099999999999998, 2, 1.4199999999999999, 1.8200000000000001, 0.89000000000000001, 0.35999999999999999, 3.0499999999999998, 2.0899999999999999, 2.2999999999999998, 3.48, 3.2799999999999998, 3.9300000000000002, 1.5800000000000001, 1.1699999999999999, 1.2685152970625517, 12.390000000000001, 2.3799999999999999, 2.3799999999999999, 5.5, 3.4900000000000002, 4.6500000000000004, 3.7000000000000002, 2.0499999999999998, 1.04, 0.56000000000000005, 0.56000000000000005, 0.56000000000000005, 0.56000000000000005, 0.56000000000000005, 16.75, 1.2, 1.2, 0.77000000000000002, 0.12, 4.1299999999999999, 6.2800000000000002, 17.149999999999999, 6.1200000000000001, 7.7000000000000002, 9.1999999999999993, 9.9800000000000004, 8.9299999999999997, 7.2300000000000004, 0.37, 7.6618173795557754, 0.02, 7.6618173795557754, 7.46, 3.7799999999999998, 5.6600000000000001, 23.239999999999998, 18.21179275948845, 8.3000000000000007, 6.7000000000000002, 19.43, 26.879999999999999, 18.850000000000001, 17.91, 18.43, 1.05, 10.25, 10.196801760384746, 0.059999999999999998, 10.196801760384746, 16.75, 13.720000000000001, 18.66, 13.609999999999999, 9.3499999999999996, 0.040000000000000001, 43.57, 9.9900000000000002, 11.68, 29.699999999999999, 19.609999999999999, 25.789999999999999, 26.693926806253057, 11.880000000000001, 30.82, 0.68999999999999995, 6.1699999999999999, 26.693926806253057, 1.27, 20.960000000000001, 10.66, 26.693926806253057, 24.98, 16.710000000000001, 23.170000000000002, 26.693926806253057, 26.693926806253057, 26.693926806253057, 3.6099999999999999, 26.693926806253057, 26.693926806253057, 22.079999999999998, 26.693926806253057, 26.693926806253057, 26.693926806253057, 26.693926806253057, 26.693926806253057, 26.693926806253057, 2.2799999999999998, 17.809999999999999, 21.800000000000001, 31.16, 30.109999999999999, 16.739999999999998, 7.1900000000000004, 4.9299999999999997, 9.8599999999999994, 19.460000000000001, 1.75, 2.5299999999999998, 0.97999999999999998, 4.8899999999999997, 8.9299999999999997, 1.3799999999999999, 0.20999999999999999, 0.11, 0.28999999999999998, 2.7400000000000002, 13.42, 7.5700000000000003, 35.670000000000002, 9.8800000000000008, 37.090000000000003, 31.350000000000001, 26.539999999999999, 8.6400000000000006, 1.54, 18.43, 20.16591789755272, 2.3599999999999999, 24.66, 21.600000000000001, 42.270000000000003, 23.25, 20.59, 22.280000000000001, 27.289999999999999, 23.77, 15.58, 5.2400000000000002, 28.07, 15.859999999999999, 21.84, 22.879999999999999, 21.199999999999999, 12.109999999999999, 12.25, 21.461600647497193, 16.82, 26.07, 26.969999999999999, 21.461600647497193, 34.93, 25.609999999999999, 52.960000000000001, 38.329999999999998, 4.9199999999999999, 65.599999999999994, 24.27, 8.4399999999999995, 4.8899999999999997, 1.9299999999999999, 23.57, 4.96, 43.18, 4.3799999999999999, 10.75, 1.3700000000000001, 1.1899999999999999, 21.461600647497193, 28.960000000000001, 6.0899999999999999, 21.461600647497193, 9.7599999999999998, 2.6299999999999999, 21.461600647497193, 4.4199999999999999, 3.1800000000000002, 7.4500000000000002, 3.5499999999999998, 6.9299999999999997, 3.8100000000000001, 8.5, 6.71, 9.3599999999999994, 11.640000000000001, 9.4866896889079744, 10.01, 6.5099999999999998, 19.079999999999998, 11.91, 6.9900000000000002, 12.710000000000001, 16.460000000000001, 7.9199999999999999, 0.47999999999999998, 4.8499999999999996, 4.6200000000000001, 0.37, 30.379999999999999, 10.15, 9.4866896889079744, 9.4866896889079744, 1.0900000000000001, 8.7400000000000002, 1.3100000000000001, 9.4866896889079744, 2.9100000000000001, 9.4866896889079744, 5.96, 3.5600000000000001, 9.4866896889079744, 0.02, 1.6100000000000001, 10.449999999999999, 0.59600000000000009, 9.4866896889079744, 9.4866896889079744, 9.4866896889079744, 9.4866896889079744, 9.4866896889079744, 9.4866896889079744, 9.4866896889079744, 9.4866896889079744, 9.4866896889079744, 9.4866896889079744, 9.4866896889079744, 9.4866896889079744, 9.4866896889079744, 9.4866896889079744, 1.0800000000000001, 1.5900000000000001, 2.21, 2.21, 2.21, 2.21, 6.0700000000000003],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.83999999999999997, 1.52, 1.52, 1.52, 1.8700000000000001, 1.0600000000000001, 2.8100000000000001, 2.0899999999999999, 2.3700000000000001, 1.96, 1.3400000000000001, 1.6399999999999999, 0.70999999999999996, 0.31, 2.5899999999999999, 1.9199999999999999, 2.5299999999999998, 3.2799999999999998, 2.9500000000000002, 3.3999999999999999, 1.5700000000000001, 0.85999999999999999, 0.93585786284356587, 9.5199999999999996, 2.21, 2.21, 6.2999999999999998, 3.4500000000000002, 5.8700000000000001, 3.8900000000000001, 1.8300000000000001, 0.84999999999999998, 0.67000000000000004, 0.67000000000000004, 0.67000000000000004, 0.67000000000000004, 0.67000000000000004, 16.789999999999999, 1.0800000000000001, 1.0800000000000001, 0.78000000000000003, 0.12, 4.7800000000000002, 6.54, 16.84, 7.4400000000000004, 7.21, 8.1300000000000008, 8.8100000000000005, 11.44, 7.4400000000000004, 0.40999999999999998, 8.0058141550498956, 0.02, 8.0058141550498956, 7.4199999999999999, 3.75, 5.3200000000000003, 19.690000000000001, 15.926621687878418, 8.6699999999999999, 5.5999999999999996, 19.870000000000001, 10.720000000000001, 23.489999999999998, 17.91, 19.219999999999999, 1.05, 10.17, 10.117122064311788, 0.050000000000000003, 10.117122064311788, 16.789999999999999, 14.48, 20.41, 14.52, 10.07, 0.040000000000000001, 41.630000000000003, 9.9700000000000006, 13.380000000000001, 32.75, 20.170000000000002, 24.18, 26.443719221654558, 10.699999999999999, 31.539999999999999, 0.64000000000000001, 6.8799999999999999, 26.443719221654558, 1.3899999999999999, 20.010000000000002, 10.029999999999999, 26.443719221654558, 26.199999999999999, 14.74, 24.690000000000001, 26.443719221654558, 26.443719221654558, 26.443719221654558, 3.96, 26.443719221654558, 26.443719221654558, 21.010000000000002, 26.443719221654558, 26.443719221654558, 26.443719221654558, 26.443719221654558, 26.443719221654558, 26.443719221654558, 2.1400000000000001, 17.600000000000001, 22.5, 30.309999999999999, 24.890000000000001, 16.379999999999999, 6.1200000000000001, 3.8500000000000001, 8.6999999999999993, 18.760000000000002, 1.8100000000000001, 2.8799999999999999, 0.82999999999999996, 4.5199999999999996, 10.130000000000001, 0.16, 1.1200000000000001, 0.12, 0.26000000000000001, 2.29, 12.630000000000001, 6.5899999999999999, 36.18, 10.859999999999999, 38.780000000000001, 32.969999999999999, 24.859999999999999, 7.8499999999999996, 1.3799999999999999, 18.559999999999999, 20.479192262888908, 2.5699999999999998, 25.280000000000001, 22.620000000000001, 45.18, 24.77, 22.199999999999999, 21.379999999999999, 29.41, 26.420000000000002, 4.8099999999999996, 16.190000000000001, 27.050000000000001, 16, 27.309999999999999, 24.93, 11.449999999999999, 19.02, 14.69, 22.36334658957707, 15.98, 24.780000000000001, 26.829999999999998, 22.36334658957707, 38, 34.189999999999998, 54.090000000000003, 38.329999999999998, 4.25, 65.170000000000002, 16.780000000000001, 7.5300000000000002, 4.9000000000000004, 2.1400000000000001, 29.780000000000001, 4.2300000000000004, 46.670000000000002, 4.0700000000000003, 10, 0.89000000000000001, 1.1899999999999999, 22.36334658957707, 29.140000000000001, 5.3200000000000003, 22.36334658957707, 9.8599999999999994, 2.54, 22.36334658957707, 4.5700000000000003, 3.1600000000000001, 7.3200000000000003, 3.4199999999999999, 6.6900000000000004, 4.1600000000000001, 9.1699999999999999, 7.1600000000000001, 8.9700000000000006, 11.33, 9.5199908967761697, 10.44, 6.3399999999999999, 18.43, 12.15, 7.0899999999999999, 13.699999999999999, 16.260000000000002, 6.9800000000000004, 0.55000000000000004, 4.5, 4.9000000000000004, 0.37, 31.73, 8.9299999999999997, 9.5199908967761697, 9.5199908967761697, 1.04, 8.3800000000000008, 1.1799999999999999, 9.5199908967761697, 3.5899999999999999, 9.5199908967761697, 6.04, 3.77, 9.5199908967761697, 0.02, 1.55, 11.56, 0.49400000000000005, 9.5199908967761697, 9.5199908967761697, 9.5199908967761697, 9.5199908967761697, 9.5199908967761697, 9.5199908967761697, 9.5199908967761697, 9.5199908967761697, 9.5199908967761697, 9.5199908967761697, 9.5199908967761697, 9.5199908967761697, 9.5199908967761697, 9.5199908967761697, 1.05, 1.77, 2.3399999999999999, 2.3399999999999999, 2.3399999999999999, 2.3399999999999999, 5.0099999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.69999999999999996, 1.3200000000000001, 1.3200000000000001, 1.3200000000000001, 1.8, 1.4399999999999999, 2.7999999999999998, 1.99, 2.27, 1.95, 1.1499999999999999, 1.55, 0.65000000000000002, 0.23000000000000001, 2.5600000000000001, 1.76, 2.0899999999999999, 2.54, 3.21, 2.4700000000000002, 1.4399999999999999, 0.82999999999999996, 0.91029838909123417, 10, 2.25, 2.25, 6.1200000000000001, 3.0600000000000001, 4.2400000000000002, 4, 1.8200000000000001, 0.56000000000000005, 0.68000000000000005, 0.68000000000000005, 0.68000000000000005, 0.68000000000000005, 0.68000000000000005, 16.739999999999998, 1.24, 1.24, 0.71999999999999997, 0.12, 5.6500000000000004, 6.9100000000000001, 16.789999999999999, 7.2000000000000002, 7.0800000000000001, 8.0999999999999996, 8.5, 10.369999999999999, 8.2699999999999996, 0.41999999999999998, 0.02, 7.7702959299285661, 7.7702959299285661, 8.0700000000000003, 4.0800000000000001, 6.1500000000000004, 18.629999999999999, 14.939310901911176, 8.1300000000000008, 6.1200000000000001, 18.550000000000001, 10.52, 18.760000000000002, 17.91, 17.859999999999999, 1.0800000000000001, 9.6400000000000006, 9.5901359584072363, 0.070000000000000007, 9.5901359584072363, 16.739999999999998, 15.289999999999999, 19.170000000000002, 14.539999999999999, 9.7899999999999991, 0.040000000000000001, 39.109999999999999, 9.2200000000000006, 12.69, 33.490000000000002, 21.640000000000001, 24.210000000000001, 25.315600572636825, 10.09, 30.43, 0.91000000000000003, 5.4199999999999999, 25.315600572636825, 1.4199999999999999, 19.390000000000001, 11.24, 25.315600572636825, 25.030000000000001, 15.51, 26.609999999999999, 25.315600572636825, 25.315600572636825, 25.315600572636825, 3.9100000000000001, 25.315600572636825, 25.315600572636825, 23.34, 25.315600572636825, 25.315600572636825, 25.315600572636825, 25.315600572636825, 25.315600572636825, 25.315600572636825, 2.2400000000000002, 17.100000000000001, 22.719999999999999, 29.300000000000001, 31.32, 16.190000000000001, 6.9199999999999999, 5.2300000000000004, 10.02, 22.800000000000001, 2.1499999999999999, 3.2400000000000002, 1.04, 3.9500000000000002, 10.02, 0.26000000000000001, 1.48, 0.12, 0.34000000000000002, 2.8300000000000001, 13, 9.3399999999999999, 33.509999999999998, 11.970000000000001, 34.780000000000001, 31.739999999999998, 27, 8.4600000000000009, 2.1600000000000001, 19.18, 20.557912638266359, 2.3999999999999999, 26.75, 23.670000000000002, 45.880000000000003, 26.039999999999999, 16.25, 34.869999999999997, 30.989999999999998, 6.6200000000000001, 27.48, 15.25, 30.469999999999999, 16.390000000000001, 23.199999999999999, 25.309999999999999, 11.550000000000001, 10.74, 16.109999999999999, 22.839912959995374, 16.359999999999999, 25.359999999999999, 26.98, 22.839912959995374, 36.719999999999999, 27.190000000000001, 56.060000000000002, 38.329999999999998, 5.2800000000000002, 58.039999999999999, 14.119999999999999, 8.1500000000000004, 2.3799999999999999, 5.5, 31.73, 5.04, 44, 3.8799999999999999, 1.0600000000000001, 9.25, 1.1899999999999999, 22.839912959995374, 30.030000000000001, 6.0300000000000002, 22.839912959995374, 11.210000000000001, 2.2400000000000002, 22.839912959995374, 4.4800000000000004, 3.2400000000000002, 5.2699999999999996, 3.7000000000000002, 6.6900000000000004, 5.6600000000000001, 7.8899999999999997, 7.4000000000000004, 9.9100000000000001, 11.85, 9.547245244578292, 11.15, 6.1399999999999997, 18.789999999999999, 10.83, 6.6699999999999999, 10.25, 16.07, 7.0499999999999998, 0.58999999999999997, 3.79, 5.4699999999999998, 0.59999999999999998, 29.420000000000002, 9.8399999999999999, 9.547245244578292, 9.547245244578292, 0.91000000000000003, 8.5800000000000001, 1.4099999999999999, 9.547245244578292, 3.6499999999999999, 9.547245244578292, 4.6299999999999999, 6.3499999999999996, 9.547245244578292, 0.02, 1.49, 12.550000000000001, 0.39200000000000002, 9.547245244578292, 9.547245244578292, 9.547245244578292, 9.547245244578292, 9.547245244578292, 9.547245244578292, 9.547245244578292, 9.547245244578292, 9.547245244578292, 9.547245244578292, 9.547245244578292, 9.547245244578292, 9.547245244578292, 9.547245244578292, 0.95999999999999996, 1.55, 2.2999999999999998, 2.2999999999999998, 2.2999999999999998, 2.2999999999999998, 5.75],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.80000000000000004, 1.6000000000000001, 1.6000000000000001, 1.6000000000000001, 1.78, 1.27, 2.9900000000000002, 2.0600000000000001, 2.4300000000000002, 1.9399999999999999, 1.27, 1.78, 0.77000000000000002, 0.27000000000000002, 2.9300000000000002, 1.54, 1.5700000000000001, 3.02, 4.0599999999999996, 3.1699999999999999, 1.6499999999999999, 1.2, 1.3183312254080344, 14.81, 2.4199999999999999, 2.4199999999999999, 5.1799999999999997, 3.0299999999999998, 4.0300000000000002, 3.6499999999999999, 1.8899999999999999, 0.94999999999999996, 0.58999999999999997, 0.58999999999999997, 0.58999999999999997, 0.58999999999999997, 0.58999999999999997, 17.030000000000001, 1.52, 1.52, 0.66000000000000003, 0.12, 6.2800000000000002, 7.4000000000000004, 17.960000000000001, 6.5999999999999996, 6.7999999999999998, 8.4499999999999993, 11.16, 10.119999999999999, 7.6799999999999997, 0.46999999999999997, 0.02, 7.8432862920301805, 7.8432862920301805, 8.9700000000000006, 3.3399999999999999, 4.5099999999999998, 26.920000000000002, 18.118490625915562, 8.8900000000000006, 5.5199999999999996, 19.59, 11.34, 17.449999999999999, 17.91, 11.73, 1.1100000000000001, 9.3300000000000001, 9.2815258715286326, 0.050000000000000003, 9.2815258715286326, 17.030000000000001, 13.93, 15.380000000000001, 13.75, 10.52, 0.040000000000000001, 37.43, 10.09, 9.0500000000000007, 33.880000000000003, 19.609999999999999, 22.600000000000001, 24.101803309177601, 9.3800000000000008, 32.460000000000001, 0.72999999999999998, 5.6299999999999999, 24.101803309177601, 1.3400000000000001, 19.539999999999999, 10.140000000000001, 24.101803309177601, 24.190000000000001, 24.75, 16.440000000000001, 24.101803309177601, 24.101803309177601, 24.101803309177601, 3.8100000000000001, 24.101803309177601, 24.101803309177601, 26.510000000000002, 24.101803309177601, 24.101803309177601, 24.101803309177601, 24.101803309177601, 24.101803309177601, 24.101803309177601, 2.1400000000000001, 17, 23.280000000000001, 26.210000000000001, 33.18, 14.779999999999999, 6.5, 5.1600000000000001, 8.1600000000000001, 19.440000000000001, 1.8400000000000001, 3.5800000000000001, 0.76000000000000001, 3.8599999999999999, 9, 0.45000000000000001, 1.25, 0.12, 0.29999999999999999, 2.6200000000000001, 13.34, 8.4700000000000006, 31.850000000000001, 11.960000000000001, 35.82, 33.020000000000003, 27.710000000000001, 6.8499999999999996, 1.8, 16.73, 20.205229062325774, 2.1099999999999999, 23.890000000000001, 21.43, 41.450000000000003, 25.579999999999998, 17.57, 32.869999999999997, 28.039999999999999, 6.1799999999999997, 26.850000000000001, 17.489999999999998, 29.079999999999998, 17.27, 24.140000000000001, 24.629999999999999, 9.4199999999999999, 9.6099999999999994, 15.949999999999999, 22.303897850151952, 17.48, 24.309999999999999, 25.84, 22.303897850151952, 38.43, 25.260000000000002, 52.939999999999998, 37.359999999999999, 4.04, 44.799999999999997, 14.119999999999999, 8.4600000000000009, 2.0899999999999999, 4.8600000000000003, 35.189999999999998, 3.9100000000000001, 45.090000000000003, 3.6400000000000001, 1.0600000000000001, 10.16, 1.1899999999999999, 22.303897850151952, 30.420000000000002, 5.8300000000000001, 22.303897850151952, 11.619999999999999, 2.23, 22.303897850151952, 4.1200000000000001, 3.2200000000000002, 7.1299999999999999, 3.48, 6.3200000000000003, 5.3799999999999999, 7.2000000000000002, 6.8300000000000001, 9.7300000000000004, 11.23, 9.5909634997471969, 10.390000000000001, 6.0599999999999996, 20.23, 11.59, 6.9800000000000004, 13.32, 16.98, 6.4900000000000002, 0.83999999999999997, 3.6099999999999999, 5.2699999999999996, 0.52000000000000002, 28.530000000000001, 9.4700000000000006, 9.5909634997471969, 9.5909634997471969, 1.1000000000000001, 8.8000000000000007, 1.3, 9.5909634997471969, 2.6899999999999999, 9.5909634997471969, 4.5099999999999998, 6.2699999999999996, 9.5909634997471969, 0.02, 1.6299999999999999, 11.470000000000001, 0.28999999999999998, 9.5909634997471969, 9.5909634997471969, 9.5909634997471969, 9.5909634997471969, 9.5909634997471969, 9.5909634997471969, 9.5909634997471969, 9.5909634997471969, 9.5909634997471969, 9.5909634997471969, 9.5909634997471969, 9.5909634997471969, 9.5909634997471969, 9.5909634997471969, 1.03, 1.49, 2.2000000000000002, 2.2000000000000002, 2.2000000000000002, 2.2000000000000002, 6.5899999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.91000000000000003, 1.6499999999999999, 1.6499999999999999, 1.6499999999999999, 1.8799999999999999, 0.98999999999999999, 3.1099999999999999, 2.1499999999999999, 2.3700000000000001, 1.8300000000000001, 1.3999999999999999, 1.5800000000000001, 0.65000000000000002, 0.25, 3.2000000000000002, 1.98, 1.8799999999999999, 3.4900000000000002, 3.6899999999999999, 3.6800000000000002, 1.6699999999999999, 1.3100000000000001, 1.4233424320377852, 14.43, 2.3199999999999998, 2.3199999999999998, 5.9500000000000002, 4, 4.6600000000000001, 3.6299999999999999, 2.1400000000000001, 1.21, 0.68000000000000005, 0.68000000000000005, 0.68000000000000005, 0.68000000000000005, 0.68000000000000005, 17.190000000000001, 1.3, 1.3, 0.68000000000000005, 0.12, 6.4199999999999999, 8.1500000000000004, 18.23, 7.4500000000000002, 9.1300000000000008, 6.7599999999999998, 11.380000000000001, 9.3499999999999996, 8.0700000000000003, 0.48999999999999999, 8.2776154854668409, 0.02, 8.2776154854668409, 8.1699999999999999, 3.1499999999999999, 4.9900000000000002, 29.699999999999999, 19.221285376961234, 8, 5.0800000000000001, 23.84, 8.8800000000000008, 16.57, 17.91, 10.31, 1.0800000000000001, 9.1799999999999997, 9.1322495430463846, 0.050000000000000003, 9.1322495430463846, 17.190000000000001, 13.51, 16.260000000000002, 14.1, 11.59, 0.029999999999999999, 34.509999999999998, 11.449999999999999, 9.5299999999999994, 34.560000000000002, 19.199999999999999, 20.789999999999999, 23.326297232632019, 9.2200000000000006, 32.82, 0.57999999999999996, 5.3899999999999997, 23.326297232632019, 1.3700000000000001, 20.859999999999999, 8.75, 23.326297232632019, 25.219999999999999, 26.370000000000001, 17.050000000000001, 23.326297232632019, 23.326297232632019, 23.326297232632019, 3.7599999999999998, 23.326297232632019, 23.326297232632019, 25.829999999999998, 23.326297232632019, 23.326297232632019, 23.326297232632019, 23.326297232632019, 23.326297232632019, 23.326297232632019, 2.21, 16.809999999999999, 25.129999999999999, 23.739999999999998, 30.809999999999999, 14.300000000000001, 4.6399999999999997, 4.5599999999999996, 8.5299999999999994, 20.649999999999999, 1.8600000000000001, 3.5099999999999998, 0.67000000000000004, 3.7999999999999998, 8.3399999999999999, 0.44, 1.1000000000000001, 0.10000000000000001, 0.28999999999999998, 2.1600000000000001, 13.869999999999999, 8.1099999999999994, 27.850000000000001, 12.08, 33.649999999999999, 34.560000000000002, 22.809999999999999, 7.5800000000000001, 3.0600000000000001, 14.52, 19.032231816520351, 2.04, 22.23, 20.920000000000002, 41.25, 24.98, 18.890000000000001, 28.969999999999999, 23.66, 5.8499999999999996, 25.75, 18.489999999999998, 29.050000000000001, 16.699999999999999, 23.039999999999999, 23.93, 9.6500000000000004, 8.6699999999999999, 12.949999999999999, 21.467580642953088, 16.07, 23.84, 21.467580642953088, 25.800000000000001, 36.700000000000003, 26.260000000000002, 54.780000000000001, 3.98, 37.57, 44.299999999999997, 14.119999999999999, 8.1099999999999994, 2.1200000000000001, 4.54, 27.199999999999999, 3.4300000000000002, 45.020000000000003, 3.7000000000000002, 1.05, 9.7200000000000006, 1.1899999999999999, 21.467580642953088, 30.559999999999999, 5.4000000000000004, 21.467580642953088, 11.65, 2.1899999999999999, 21.467580642953088, 4.3399999999999999, 3.0899999999999999, 7, 3.6299999999999999, 6.0899999999999999, 5.0099999999999998, 8.8300000000000001, 7.0999999999999996, 9.5999999999999996, 11.26, 9.8025503325300321, 9.7699999999999996, 5.6399999999999997, 20.039999999999999, 14.220000000000001, 7.3300000000000001, 18.879999999999999, 14.130000000000001, 5.5999999999999996, 3.23, 0.79000000000000004, 5.6500000000000004, 0.46000000000000002, 25.68, 8.7300000000000004, 9.8025503325300321, 9.8025503325300321, 1.0900000000000001, 8.9199999999999999, 1.23, 9.8025503325300321, 2.3500000000000001, 9.8025503325300321, 4.4500000000000002, 6.3300000000000001, 9.8025503325300321, 0.02, 1.9299999999999999, 12.5, 0.31, 9.8025503325300321, 9.8025503325300321, 9.8025503325300321, 9.8025503325300321, 9.8025503325300321, 9.8025503325300321, 9.8025503325300321, 9.8025503325300321, 9.8025503325300321, 9.8025503325300321, 9.8025503325300321, 9.8025503325300321, 9.8025503325300321, 9.8025503325300321, 1.2, 1.77, 2.29, 2.29, 2.29, 2.29, 6.2800000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.84999999999999998, 1.6299999999999999, 1.6299999999999999, 1.6299999999999999, 1.97, 1.0600000000000001, 3.4399999999999999, 2, 2.4100000000000001, 1.9199999999999999, 1.3500000000000001, 1.6599999999999999, 0.78000000000000003, 0.28999999999999998, 3.0099999999999998, 2.25, 1.8999999999999999, 3.98, 3.4500000000000002, 3.3199999999999998, 1.55, 1.6499999999999999, 1.7405050122671417, 12.220000000000001, 2.3100000000000001, 2.3100000000000001, 4.54, 3.8900000000000001, 4.4299999999999997, 3.29, 1.96, 0.98999999999999999, 0.63, 0.63, 0.63, 0.63, 0.63, 16.850000000000001, 1.0800000000000001, 1.0800000000000001, 0.63, 0.12, 6.5499999999999998, 7.7599999999999998, 18.77, 6.4299999999999997, 8.1799999999999997, 6.1399999999999997, 10.449999999999999, 9.0999999999999996, 7.4500000000000002, 0.59999999999999998, 7.4370317473585592, 0.02, 7.4370317473585592, 7.6900000000000004, 2.9300000000000002, 4.29, 28.960000000000001, 18.932852065269074, 8.1300000000000008, 5.1399999999999997, 23.329999999999998, 8.5, 16.649999999999999, 17.91, 11.26, 1.1200000000000001, 9.1099999999999994, 9.0624146052848946, 0.050000000000000003, 9.0624146052848946, 16.850000000000001, 13.369999999999999, 16.199999999999999, 13.1, 11.5, 0.029999999999999999, 31.489999999999998, 9.7899999999999991, 7.9100000000000001, 33.520000000000003, 19.27, 18.550000000000001, 21.341224129541494, 9.6799999999999997, 33.340000000000003, 0.66000000000000003, 5.1900000000000004, 21.341224129541494, 1.6399999999999999, 21.620000000000001, 8.9900000000000002, 21.341224129541494, 24.41, 28.109999999999999, 16.640000000000001, 21.341224129541494, 21.341224129541494, 21.341224129541494, 21.341224129541494, 3.6600000000000001, 21.341224129541494, 19.620000000000001, 21.341224129541494, 21.341224129541494, 21.341224129541494, 21.341224129541494, 21.341224129541494, 21.341224129541494, 2.1899999999999999, 16.18, 23.710000000000001, 24.390000000000001, 30.079999999999998, 13.960000000000001, 6.7999999999999998, 4.1200000000000001, 14.859999999999999, 23.43, 1.5, 3.3100000000000001, 0.63, 3.7599999999999998, 8.1099999999999994, 1.02, 0.35999999999999999, 0.089999999999999997, 0.28000000000000003, 2.0699999999999998, 11.27, 8.7699999999999996, 33.770000000000003, 11.33, 33.68, 38.109999999999999, 24.579999999999998, 8.3000000000000007, 1.8200000000000001, 16.09, 20.864432458023003, 1.98, 21.859999999999999, 20.440000000000001, 44.329999999999998, 26.550000000000001, 18.829999999999998, 27.18, 22.129999999999999, 6.0700000000000003, 24.91, 16.379999999999999, 28, 16.66, 23.760000000000002, 23.530000000000001, 9.3200000000000003, 8.0399999999999991, 14.1, 21.36769017901775, 16.829999999999998, 24.77, 21.36769017901775, 25.77, 35.420000000000002, 37.380000000000003, 50.759999999999998, 3.7999999999999998, 36.810000000000002, 46.710000000000001, 14.119999999999999, 8.0500000000000007, 2.3100000000000001, 27.390000000000001, 4.9000000000000004, 3.3500000000000001, 46.890000000000001, 1.0600000000000001, 3.6600000000000001, 10.199999999999999, 1.1899999999999999, 21.36769017901775, 30.170000000000002, 5.79, 21.36769017901775, 11.83, 2, 21.36769017901775, 4.1699999999999999, 3.1699999999999999, 5.7800000000000002, 3.27, 5.5800000000000001, 5.0199999999999996, 8.1199999999999992, 6.7300000000000004, 8.6400000000000006, 10.720000000000001, 9.2016736383727995, 9.8100000000000005, 5.4000000000000004, 19.469999999999999, 13.57, 6.5099999999999998, 17.609999999999999, 10.369999999999999, 5.1299999999999999, 3.0499999999999998, 0.80000000000000004, 5.7699999999999996, 0.60999999999999999, 25.440000000000001, 8.3900000000000006, 9.2016736383727995, 9.2016736383727995, 1.0700000000000001, 10.449999999999999, 1.3300000000000001, 9.2016736383727995, 2.3700000000000001, 9.2016736383727995, 4.8300000000000001, 6.1500000000000004, 9.2016736383727995, 0.02, 1.8999999999999999, 12.02, 0.28000000000000003, 9.2016736383727995, 9.2016736383727995, 9.2016736383727995, 9.2016736383727995, 9.2016736383727995, 9.2016736383727995, 9.2016736383727995, 9.2016736383727995, 9.2016736383727995, 9.2016736383727995, 9.2016736383727995, 9.2016736383727995, 9.2016736383727995, 9.2016736383727995, 1.1499999999999999, 1.8100000000000001, 2.27, 2.27, 2.27, 2.27, 5.5199999999999996],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.93999999999999995, 1.46, 1.46, 1.46, 2.1400000000000001, 1.0700000000000001, 3.3799999999999999, 2.04, 2.6200000000000001, 2.1000000000000001, 1.25, 1.79, 0.68000000000000005, 0.26000000000000001, 3.25, 2.3599999999999999, 2.2200000000000002, 3.54, 3.1699999999999999, 3.0899999999999999, 1.47, 1.3, 1.4150098054484603, 14.800000000000001, 2.3700000000000001, 2.3700000000000001, 5.5099999999999998, 3.9199999999999999, 4.5199999999999996, 3.4500000000000002, 1.97, 1.0800000000000001, 0.63, 0.63, 0.63, 0.63, 0.63, 17.149999999999999, 1.25, 1.25, 0.66000000000000003, 0.12, 5.8399999999999999, 8.6899999999999995, 19.57, 7.4100000000000001, 8.6199999999999992, 6.8399999999999999, 11.550000000000001, 10.029999999999999, 8.0299999999999994, 0.58999999999999997, 8.2780183615835377, 0.02, 8.2780183615835377, 6.6799999999999997, 2.9900000000000002, 4.5, 27.809999999999999, 18.083945081203694, 6.8099999999999996, 5.3700000000000001, 21.32, 8.4700000000000006, 14.640000000000001, 18.43, 13.41, 1.0700000000000001, 8.9399999999999995, 8.8934823753525265, 0.059999999999999998, 8.8934823753525265, 17.149999999999999, 13.359999999999999, 15.220000000000001, 12.470000000000001, 11.32, 0.029999999999999999, 30.030000000000001, 9.1099999999999994, 7.9199999999999999, 31.600000000000001, 19.260000000000002, 17.93, 20.460397326144918, 10.109999999999999, 33.619999999999997, 0.68000000000000005, 5.4100000000000001, 1.71, 20.460397326144918, 21.52, 9.3699999999999992, 20.460397326144918, 23.120000000000001, 26.41, 17.109999999999999, 20.460397326144918, 20.460397326144918, 20.460397326144918, 20.460397326144918, 3.7400000000000002, 20.460397326144918, 19.010000000000002, 20.460397326144918, 20.460397326144918, 20.460397326144918, 20.460397326144918, 20.460397326144918, 20.460397326144918, 2.1000000000000001, 15.49, 23.829999999999998, 22.809999999999999, 28.620000000000001, 14.09, 8.7699999999999996, 4.7699999999999996, 14.550000000000001, 25.100000000000001, 1.52, 3.5800000000000001, 0.63, 3.96, 7.5999999999999996, 1.1399999999999999, 0.35999999999999999, 0.10000000000000001, 0.27000000000000002, 2.1699999999999999, 11.27, 9.8499999999999996, 29.609999999999999, 12.359999999999999, 32.240000000000002, 36.75, 22.920000000000002, 7.9699999999999998, 2.4199999999999999, 16.280000000000001, 20.085344597933769, 1.9299999999999999, 20.760000000000002, 19.32, 41.240000000000002, 26.789999999999999, 18.620000000000001, 26.030000000000001, 20.370000000000001, 6.5099999999999998, 23.5, 26.489999999999998, 15.34, 16.719999999999999, 23.640000000000001, 23.850000000000001, 8.2300000000000004, 7.1399999999999997, 13.720000000000001, 20.750019518125935, 17.550000000000001, 20.750019518125935, 24.920000000000002, 25.280000000000001, 38.369999999999997, 32.969999999999999, 47.979999999999997, 4.2599999999999998, 32.259999999999998, 39.530000000000001, 14.119999999999999, 7.8200000000000003, 1.99, 26.219999999999999, 5.0599999999999996, 3.3300000000000001, 44.140000000000001, 1.1899999999999999, 3.3300000000000001, 10.119999999999999, 1.1899999999999999, 20.750019518125935, 30.789999999999999, 5.8200000000000003, 20.750019518125935, 12.33, 2.71, 20.750019518125935, 4.5099999999999998, 3.1400000000000001, 6.0499999999999998, 3.4700000000000002, 5.3899999999999997, 4.9000000000000004, 7.6200000000000001, 6.6699999999999999, 8.7699999999999996, 10.359999999999999, 9.1103553306119789, 9.9700000000000006, 19.329999999999998, 5.2999999999999998, 12.19, 5.6100000000000003, 16.489999999999998, 13.19, 4.7800000000000002, 2.9399999999999999, 0.82999999999999996, 5.9699999999999998, 0.68999999999999995, 25.649999999999999, 8.4900000000000002, 9.1103553306119789, 9.1103553306119789, 0.92000000000000004, 10.109999999999999, 1.4199999999999999, 9.1103553306119789, 2.6200000000000001, 9.1103553306119789, 4.8399999999999999, 6.54, 9.1103553306119789, 0.02, 2.02, 13.98, 0.33000000000000002, 9.1103553306119789, 9.1103553306119789, 9.1103553306119789, 9.1103553306119789, 9.1103553306119789, 9.1103553306119789, 9.1103553306119789, 9.1103553306119789, 9.1103553306119789, 9.1103553306119789, 9.1103553306119789, 9.1103553306119789, 9.1103553306119789, 9.1103553306119789, 1.3200000000000001, 1.8899999999999999, 2.29, 2.29, 2.29, 2.29, 7.0300000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.90000000000000002, 1.5600000000000001, 1.5600000000000001, 1.5600000000000001, 2, 1, 3.5800000000000001, 1.8400000000000001, 2.54, 2.0800000000000001, 1.2, 1.74, 0.64000000000000001, 0.28999999999999998, 2.9900000000000002, 2.4100000000000001, 2.75, 3.4199999999999999, 3.54, 3.1600000000000001, 1.4399999999999999, 1.3799999999999999, 1.4957969628083965, 14.99, 2.3999999999999999, 2.3999999999999999, 4.9500000000000002, 3.9399999999999999, 4.5599999999999996, 2.9500000000000002, 2.02, 1.24, 0.75, 0.75, 0.75, 0.75, 0.75, 16.789999999999999, 1.3799999999999999, 1.3799999999999999, 0.70999999999999996, 0.12, 5.2699999999999996, 10.15, 19.989999999999998, 7.0700000000000003, 8.5299999999999994, 5.9500000000000002, 14.07, 10.18, 8.0999999999999996, 0.54000000000000004, 8.327790084496911, 0.02, 8.327790084496911, 6.5599999999999996, 3.3599999999999999, 4.3300000000000001, 28.699999999999999, 18.768605001997383, 5.3200000000000003, 7.2999999999999998, 23.77, 8.3000000000000007, 14.720000000000001, 18.07, 13.34, 1, 8.6400000000000006, 8.5950741159293873, 0.070000000000000007, 8.5950741159293873, 16.789999999999999, 13.34, 14.880000000000001, 12.27, 10.09, 0.029999999999999999, 28.629999999999999, 8.8699999999999992, 8.0800000000000001, 28.870000000000001, 17.690000000000001, 17.850000000000001, 19.475247056823495, 8.0999999999999996, 34.759999999999998, 0.85999999999999999, 5.3099999999999996, 1.77, 19.475247056823495, 23.399999999999999, 8.9800000000000004, 19.475247056823495, 23.989999999999998, 24.899999999999999, 16.359999999999999, 19.475247056823495, 19.475247056823495, 19.475247056823495, 19.475247056823495, 3.3399999999999999, 19.475247056823495, 18.239999999999998, 19.475247056823495, 19.475247056823495, 19.475247056823495, 19.475247056823495, 19.475247056823495, 19.475247056823495, 2.0600000000000001, 15.35, 23.739999999999998, 22.140000000000001, 27.460000000000001, 14.51, 9.3800000000000008, 4.9299999999999997, 14.57, 26.859999999999999, 3.9700000000000002, 1.3899999999999999, 0.63, 4.0199999999999996, 7.8399999999999999, 1.1100000000000001, 0.45000000000000001, 0.12, 0.29999999999999999, 2.29, 11.34, 10.289999999999999, 32.619999999999997, 10.35, 33.43, 37.460000000000001, 25.469999999999999, 8.5700000000000003, 3.52, 18.809999999999999, 21.026645118213739, 2.1299999999999999, 19.989999999999998, 18.559999999999999, 38.520000000000003, 25.800000000000001, 18.350000000000001, 24.82, 19.579999999999998, 7.5499999999999998, 23.93, 25.850000000000001, 15.24, 16.829999999999998, 23.690000000000001, 23.870000000000001, 6.7800000000000002, 8.75, 13.369999999999999, 20.277875464737182, 17.52, 24.690000000000001, 20.277875464737182, 25.620000000000001, 34.960000000000001, 22.579999999999998, 51.789999999999999, 4.5499999999999998, 33.990000000000002, 36.5, 14.119999999999999, 8.1400000000000006, 1.8200000000000001, 22.460000000000001, 3.96, 3.6200000000000001, 41.130000000000003, 1.29, 3.1899999999999999, 9.2300000000000004, 1.23, 20.277875464737182, 30.010000000000002, 5.7400000000000002, 20.277875464737182, 11.66, 2.3300000000000001, 20.277875464737182, 4.3300000000000001, 3.1299999999999999, 6.71, 3.9500000000000002, 5.4500000000000002, 5.0300000000000002, 6.7400000000000002, 6.7999999999999998, 9.1300000000000008, 10.07, 9.0202510031696068, 9.7400000000000002, 17.829999999999998, 5.1900000000000004, 12.539999999999999, 5.8700000000000001, 12.1, 16.710000000000001, 4.8899999999999997, 2.8500000000000001, 0.84999999999999998, 5.9699999999999998, 0.68999999999999995, 24.59, 9.3800000000000008, 9.0202510031696068, 9.0202510031696068, 0.83999999999999997, 10.18, 1.3500000000000001, 9.0202510031696068, 2.2200000000000002, 9.0202510031696068, 6.0999999999999996, 9.0202510031696068, 6.5499999999999998, 0.01, 1.6599999999999999, 13.449999999999999, 0.20999999999999999, 9.0202510031696068, 9.0202510031696068, 9.0202510031696068, 9.0202510031696068, 9.0202510031696068, 9.0202510031696068, 9.0202510031696068, 9.0202510031696068, 9.0202510031696068, 9.0202510031696068, 9.0202510031696068, 9.0202510031696068, 9.0202510031696068, 9.0202510031696068, 1.1699999999999999, 1.5900000000000001, 2.2200000000000002, 2.2200000000000002, 2.2200000000000002, 2.2200000000000002, 4.7800000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.68000000000000005, 1.6100000000000001, 1.6100000000000001, 1.6100000000000001, 2.0699999999999998, 0.92000000000000004, 3.8599999999999999, 1.8700000000000001, 2.73, 2.1000000000000001, 1.1299999999999999, 1.72, 0.68999999999999995, 0.22, 2.5, 2.21, 2.2000000000000002, 3.4199999999999999, 3.4900000000000002, 2.8599999999999999, 1.45, 0.95999999999999996, 1.0854006535500762, 15.66, 2.25, 2.25, 4.4299999999999997, 3.79, 4.0599999999999996, 2.9700000000000002, 2.1000000000000001, 0.89000000000000001, 0.63, 0.63, 0.63, 0.63, 0.63, 16.170000000000002, 1.48, 1.48, 0.63, 0.12, 5.29, 12.06, 19.780000000000001, 6.71, 7.8099999999999996, 6.04, 12.82, 9.7300000000000004, 8.0600000000000005, 0.51000000000000001, 7.8679859526720044, 0.02, 7.8679859526720044, 6.8700000000000001, 3.8700000000000001, 4.71, 29.219999999999999, 18.769340787604669, 6.1799999999999997, 6.2800000000000002, 21.59, 9.3100000000000005, 14.06, 14.08, 17.219999999999999, 1.03, 8.3900000000000006, 8.3462674843039828, 0.070000000000000007, 8.3462674843039828, 16.170000000000002, 13.49, 14.470000000000001, 11, 8.8699999999999992, 0.029999999999999999, 27.27, 8.2899999999999991, 8.2200000000000006, 26.579999999999998, 17.460000000000001, 17.59, 18.545865992596813, 7.8700000000000001, 33.219999999999999, 5.5599999999999996, 1.1000000000000001, 1.9099999999999999, 18.545865992596813, 22.420000000000002, 8.3200000000000003, 18.545865992596813, 21.68, 26.199999999999999, 16.870000000000001, 18.545865992596813, 18.545865992596813, 18.545865992596813, 2.9199999999999999, 18.545865992596813, 18.545865992596813, 15.92, 18.545865992596813, 18.545865992596813, 18.545865992596813, 18.545865992596813, 18.545865992596813, 18.545865992596813, 2, 14.779999999999999, 23.82, 20.629999999999999, 26.52, 14.44, 10.09, 4.1900000000000004, 14.07, 33.130000000000003, 4.3899999999999997, 0.71999999999999997, 1.4199999999999999, 3.2799999999999998, 7.4100000000000001, 1.73, 0.54000000000000004, 0.16, 0.32000000000000001, 2.77, 11.390000000000001, 31.559999999999999, 11.58, 11.800000000000001, 32.420000000000002, 37.719999999999999, 30.460000000000001, 9.2100000000000009, 4.3899999999999997, 20.629999999999999, 21.843514663659501, 2.23, 20.629999999999999, 18.370000000000001, 36.060000000000002, 26.75, 19.469999999999999, 23.469999999999999, 19.98, 9.1199999999999992, 22.920000000000002, 25.739999999999998, 18.359999999999999, 17.210000000000001, 22.649999999999999, 22.989999999999998, 4.9800000000000004, 14.27, 8.2799999999999994, 20.502016970940272, 18.48, 23.98, 26.390000000000001, 20.502016970940272, 30.68, 21.420000000000002, 58.759999999999998, 5.9400000000000004, 34.399999999999999, 31.530000000000001, 14.119999999999999, 6.6500000000000004, 22.210000000000001, 1.95, 3.7799999999999998, 4.3099999999999996, 46.789999999999999, 1.8899999999999999, 3.0699999999999998, 9.3499999999999996, 1.0600000000000001, 20.502016970940272, 30.600000000000001, 6.4100000000000001, 20.502016970940272, 12.23, 2.3100000000000001, 20.502016970940272, 4.3200000000000003, 3.1899999999999999, 5.1600000000000001, 3.71, 5.9800000000000004, 5.0300000000000002, 6.1299999999999999, 7.0499999999999998, 9.4499999999999993, 9.9700000000000006, 8.975207987646332, 10.24, 17.219999999999999, 5.4800000000000004, 12.220000000000001, 5.5300000000000002, 9.7699999999999996, 16.109999999999999, 4.75, 2.79, 0.82999999999999996, 6.3099999999999996, 0.97999999999999998, 25.440000000000001, 10.41, 8.975207987646332, 0.82999999999999996, 8.975207987646332, 9.5399999999999991, 1.3, 8.975207987646332, 2.1600000000000001, 8.975207987646332, 7.4299999999999997, 0.01, 8.975207987646332, 6.2599999999999998, 1.6100000000000001, 14.06, 0.23000000000000001, 8.975207987646332, 8.975207987646332, 8.975207987646332, 8.975207987646332, 8.975207987646332, 8.975207987646332, 8.975207987646332, 8.975207987646332, 8.975207987646332, 8.975207987646332, 8.975207987646332, 8.975207987646332, 8.975207987646332, 8.975207987646332, 1.03, 1.8700000000000001, 2.3799999999999999, 2.3799999999999999, 2.3799999999999999, 2.3799999999999999, 4.4699999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.69999999999999996, 1.4399999999999999, 1.4399999999999999, 1.4399999999999999, 1.9299999999999999, 0.93000000000000005, 3.52, 2.1400000000000001, 2.8199999999999998, 2.0699999999999998, 1.1100000000000001, 1.77, 0.63, 0.20999999999999999, 2.6499999999999999, 2.0899999999999999, 2.2400000000000002, 3.1099999999999999, 3.2599999999999998, 2.1099999999999999, 1.3999999999999999, 0.95999999999999996, 1.1179601742907022, 19.41, 2.3100000000000001, 2.3100000000000001, 4.29, 3.8900000000000001, 4.0499999999999998, 3.0600000000000001, 1.98, 0.93999999999999995, 0.56999999999999995, 0.56999999999999995, 0.56999999999999995, 0.56999999999999995, 0.56999999999999995, 16.359999999999999, 2.0299999999999998, 2.0299999999999998, 0.66000000000000003, 0.12, 4.5700000000000003, 11.73, 19.850000000000001, 6.8099999999999996, 7.2999999999999998, 6.1699999999999999, 12.48, 9.1699999999999999, 7.4699999999999998, 0.52000000000000002, 7.7287300652963493, 0.01, 7.7287300652963493, 6.1399999999999997, 3.8399999999999999, 4.5599999999999996, 29.280000000000001, 18.657716552460442, 5.5999999999999996, 6.9000000000000004, 20.859999999999999, 10.529999999999999, 12.83, 12.630000000000001, 16.390000000000001, 1.1200000000000001, 8.0600000000000005, 8.0180353008823726, 0.080000000000000002, 8.0180353008823726, 16.359999999999999, 13.48, 13.82, 10.210000000000001, 8.4800000000000004, 0.029999999999999999, 26.73, 8.4600000000000009, 7.2599999999999998, 24.739999999999998, 17.870000000000001, 17.23, 18.046241612277949, 10.66, 34.450000000000003, 5.6799999999999997, 1.2, 1.9299999999999999, 18.046241612277949, 21.68, 8.6400000000000006, 18.046241612277949, 26.34, 27.170000000000002, 16.620000000000001, 18.046241612277949, 18.046241612277949, 18.046241612277949, 3.1200000000000001, 18.046241612277949, 18.046241612277949, 18.046241612277949, 15.92, 18.046241612277949, 18.046241612277949, 18.046241612277949, 18.046241612277949, 18.046241612277949, 1.8600000000000001, 13.460000000000001, 22.329999999999998, 25.739999999999998, 25.52, 14.390000000000001, 9.7799999999999994, 3.98, 20.050000000000001, 34.170000000000002, 4.5099999999999998, 0.75, 1.45, 2.73, 1.99, 7.5999999999999996, 0.52000000000000002, 0.17999999999999999, 0.33000000000000002, 2.9500000000000002, 11.77, 22.98, 12.220000000000001, 10.32, 35.259999999999998, 37.399999999999999, 26.969999999999999, 8.5299999999999994, 4.6100000000000003, 21.739999999999998, 19.968408421367748, 2.4100000000000001, 20.98, 18.600000000000001, 34.700000000000003, 27.440000000000001, 20.030000000000001, 22.66, 20.84, 9.8300000000000001, 22.850000000000001, 25.129999999999999, 17.859999999999999, 17.190000000000001, 21.710000000000001, 22.190000000000001, 6.2300000000000004, 14.41, 7.8700000000000001, 20.640870708736088, 17.59, 25.149999999999999, 27.75, 31.539999999999999, 20.640870708736088, 20.760000000000002, 57.75, 7.0099999999999998, 35.920000000000002, 31.920000000000002, 14.119999999999999, 6.7199999999999998, 21.859999999999999, 1.98, 4.9199999999999999, 4.9699999999999998, 46.350000000000001, 2.3300000000000001, 3.1000000000000001, 8.9600000000000009, 1, 20.640870708736088, 31.370000000000001, 6.3099999999999996, 20.640870708736088, 11.67, 2.2799999999999998, 20.640870708736088, 4.8899999999999997, 3.3500000000000001, 6.2599999999999998, 4.2000000000000002, 6.6100000000000003, 5.0300000000000002, 6.6799999999999997, 6.9400000000000004, 9.5199999999999996, 9.6600000000000001, 9.0450664354944355, 11.17, 17.98, 5.5099999999999998, 12.050000000000001, 11.039999999999999, 14.92, 5.7300000000000004, 4.9100000000000001, 2.6000000000000001, 0.81000000000000005, 6.5999999999999996, 1.0700000000000001, 20.390000000000001, 10.77, 9.0450664354944355, 0.89000000000000001, 9.0450664354944355, 7.6399999999999997, 1.29, 9.0450664354944355, 2.0800000000000001, 9.0450664354944355, 6.21, 0.02, 9.0450664354944355, 6.75, 1.5700000000000001, 16.27, 0.31, 9.0450664354944355, 9.0450664354944355, 9.0450664354944355, 9.0450664354944355, 9.0450664354944355, 9.0450664354944355, 9.0450664354944355, 9.0450664354944355, 9.0450664354944355, 9.0450664354944355, 9.0450664354944355, 9.0450664354944355, 9.0450664354944355, 9.0450664354944355, 0.93999999999999995, 1.8600000000000001, 2.3999999999999999, 2.3999999999999999, 2.3999999999999999, 2.3999999999999999, 5.5499999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.84999999999999998, 1.54, 1.54, 1.54, 1.97, 0.65000000000000002, 3.8599999999999999, 1.8500000000000001, 2.79, 2.1000000000000001, 1.21, 1.8600000000000001, 0.67000000000000004, 0.23000000000000001, 3.0099999999999998, 2.0600000000000001, 2.0899999999999999, 3.5099999999999998, 3.5499999999999998, 2.3900000000000001, 1.4399999999999999, 1.3, 1.4439402307278801, 17.98, 2.3199999999999998, 2.3199999999999998, 4.4400000000000004, 3.75, 4.04, 2.8900000000000001, 1.8400000000000001, 1.1799999999999999, 0.58999999999999997, 0.58999999999999997, 0.58999999999999997, 0.58999999999999997, 0.58999999999999997, 16.559999999999999, 1.9199999999999999, 1.9199999999999997, 0.63, 0.13, 3.7799999999999998, 10.18, 19.02, 6.0099999999999998, 6.2400000000000002, 5.4299999999999997, 12.199999999999999, 7.8700000000000001, 6.8499999999999996, 0.56000000000000005, 6.9173044589429642, 0.02, 6.9173044589429642, 6.04, 3.5499999999999998, 4.5199999999999996, 28.66, 18.368843944716453, 5.6100000000000003, 7.5700000000000003, 20.280000000000001, 11.119999999999999, 12.51, 11.140000000000001, 14.99, 1.1299999999999999, 7.46, 7.4210747871093954, 0.070000000000000007, 7.4210747871093954, 16.559999999999999, 13.16, 12.93, 10.18, 8.4100000000000001, 0.029999999999999999, 24.920000000000002, 8.5999999999999996, 7.4299999999999997, 23.359999999999999, 17.649999999999999, 16.199999999999999, 17.194875570413569, 10.529999999999999, 33.280000000000001, 5.3499999999999996, 1.0900000000000001, 2.0099999999999998, 17.194875570413569, 21.370000000000001, 9.9100000000000001, 17.194875570413569, 30.440000000000001, 27.629999999999999, 16.809999999999999, 17.194875570413569, 17.194875570413569, 17.194875570413569, 3.54, 17.194875570413569, 17.194875570413569, 17.194875570413569, 15.92, 17.194875570413569, 17.194875570413569, 17.194875570413569, 17.194875570413569, 17.194875570413569, 1.8500000000000001, 12.960000000000001, 21.960000000000001, 26.420000000000002, 23.699999999999999, 15.029999999999999, 9.8300000000000001, 2.98, 18.93, 40.640000000000001, 4.4400000000000004, 0.76000000000000001, 1.4299999999999999, 2.79, 1.98, 7.04, 0.53000000000000003, 0.20999999999999999, 0.28999999999999998, 2.8700000000000001, 10.99, 21.23, 11.76, 11.16, 35.82, 37.43, 32.810000000000002, 8.9900000000000002, 3.8700000000000001, 22.719999999999999, 20.274603349657731, 2.4900000000000002, 20.850000000000001, 19.699999999999999, 33.780000000000001, 28.760000000000002, 20.890000000000001, 23.460000000000001, 10.02, 19.559999999999999, 25.039999999999999, 24.550000000000001, 17.309999999999999, 16.690000000000001, 20.59, 22.93, 4.0199999999999996, 14.98, 20.966594650067719, 8.3399999999999999, 20.530000000000001, 26.350000000000001, 28.489999999999998, 28.550000000000001, 20.966594650067719, 20.640000000000001, 60.609999999999999, 7.4199999999999999, 35.939999999999998, 32.789999999999999, 14.119999999999999, 7.6799999999999997, 21, 1.8400000000000001, 4.96, 5.2699999999999996, 49.159999999999997, 2.3199999999999998, 2.9900000000000002, 8.4299999999999997, 1.29, 20.966594650067719, 31.899999999999999, 5.3799999999999999, 20.966594650067719, 11.18, 2.8300000000000001, 20.966594650067719, 4.5999999999999996, 3.3799999999999999, 5.2300000000000004, 4.2800000000000002, 6.3899999999999997, 5.0300000000000002, 5.3099999999999996, 6.7800000000000002, 9.3300000000000001, 9.6999999999999993, 11.59, 9.0974547471471237, 18.829999999999998, 5.3399999999999999, 12.67, 10.529999999999999, 15, 5.3899999999999997, 4.7000000000000002, 2.3799999999999999, 0.81999999999999995, 6.6299999999999999, 1.1799999999999999, 22.760000000000002, 10.92, 9.0974547471471237, 0.78000000000000003, 9.0974547471471237, 8.4900000000000002, 1.3, 9.0974547471471237, 1.5700000000000001, 9.0974547471471237, 5.3700000000000001, 0.02, 9.0974547471471237, 6.7699999999999996, 1.79, 13.41, 9.0974547471471237, 0.27000000000000002, 9.0974547471471237, 9.0974547471471237, 9.0974547471471237, 9.0974547471471237, 9.0974547471471237, 9.0974547471471237, 9.0974547471471237, 9.0974547471471237, 9.0974547471471237, 9.0974547471471237, 9.0974547471471237, 9.0974547471471237, 9.0974547471471237, 0.94999999999999996, 1.8899999999999999, 2.7000000000000002, 2.7000000000000002, 2.7000000000000002, 2.7000000000000002, 5.9100000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.68999999999999995, 1.6499999999999999, 1.6499999999999999, 1.6499999999999999, 1.95, 0.65000000000000002, 3.6400000000000001, 1.73, 2.7599999999999998, 2.04, 1.1299999999999999, 1.6499999999999999, 0.59999999999999998, 0.23000000000000001, 2.4100000000000001, 1.9399999999999999, 2.1499999999999999, 2.8799999999999999, 3.5899999999999999, 2.0899999999999999, 1.3899999999999999, 1.03, 1.1634145850706819, 16.32, 2.3900000000000001, 2.3900000000000001, 4.5599999999999996, 3.4900000000000002, 3.3799999999999999, 2.9500000000000002, 2.25, 0.89000000000000001, 0.56999999999999995, 0.56999999999999995, 0.56999999999999995, 0.56999999999999995, 0.56999999999999995, 16.030000000000001, 1.8100000000000001, 1.8100000000000001, 0.64000000000000001, 0.14000000000000001, 3.8999999999999999, 10.140000000000001, 18.43, 6.3399999999999999, 6.7599999999999998, 5.7199999999999998, 10.15, 8.4700000000000006, 6.7300000000000004, 0.55000000000000004, 6.9710908623199481, 0.02, 6.9710908623199481, 5.7800000000000002, 3.3900000000000001, 4.4000000000000004, 26.559999999999999, 17.235510995386566, 5.21, 6.5899999999999999, 19.77, 11.039999999999999, 11.68, 11.43, 13.94, 1.04, 7.04, 7.0031125491291162, 0.059999999999999998, 7.0031125491291162, 16.030000000000001, 12.81, 12.31, 9.6500000000000004, 8.1999999999999993, 0.029999999999999999, 23, 7.5099999999999998, 7.5899999999999999, 22.010000000000002, 16.969999999999999, 15.710000000000001, 16.023282986601178, 10.91, 33.969999999999999, 5.2400000000000002, 1.02, 21.219999999999999, 1.8999999999999999, 16.023282986601178, 9.1500000000000004, 16.023282986601178, 25.309999999999999, 22.510000000000002, 17.07, 16.023282986601178, 16.023282986601178, 16.023282986601178, 3.4399999999999999, 16.023282986601178, 16.023282986601178, 16.023282986601178, 15.92, 16.023282986601178, 16.023282986601178, 16.023282986601178, 16.023282986601178, 16.023282986601178, 1.75, 12.48, 21.649999999999999, 22.039999999999999, 22.329999999999998, 15.99, 11.220000000000001, 2.8199999999999998, 17.18, 39.009999999999998, 4.3799999999999999, 0.70999999999999996, 1.3899999999999999, 3.23, 1.8500000000000001, 7.3600000000000003, 0.45000000000000001, 0.22, 0.28999999999999998, 2.48, 10.83, 21.989999999999998, 11.869999999999999, 11.31, 37.659999999999997, 37.609999999999999, 28, 9.8900000000000006, 3.6600000000000001, 23.66, 20.475229416985179, 2.27, 21.199999999999999, 18.890000000000001, 31.219999999999999, 27.870000000000001, 20.309999999999999, 23.25, 8.6099999999999994, 18.140000000000001, 24.57, 23.969999999999999, 18.23, 16.5, 21, 21.629999999999999, 3.3399999999999999, 14.99, 20.403418358747402, 7.3200000000000003, 22.940000000000001, 24.629999999999999, 28.059999999999999, 29.010000000000002, 20.403418358747402, 19.649999999999999, 58.93, 6.9100000000000001, 35.5, 31.239999999999998, 14.119999999999999, 7.7699999999999996, 19.870000000000001, 2.1200000000000001, 5.4400000000000004, 4.25, 30.719999999999999, 2.2599999999999998, 2.5600000000000001, 8.5199999999999996, 1.4199999999999999, 20.403418358747402, 33.719999999999999, 4.5199999999999996, 20.403418358747402, 11.4, 2.6800000000000002, 20.403418358747402, 4.4199999999999999, 3.3799999999999999, 4.54, 3.9300000000000002, 6.2300000000000004, 5.0300000000000002, 5.7199999999999998, 6.8899999999999997, 8.9499999999999993, 9.4399999999999995, 11.48, 8.9140818182555162, 18.710000000000001, 5.1500000000000004, 11.609999999999999, 10.25, 15.32, 5.1299999999999999, 4.4800000000000004, 2.3700000000000001, 0.70999999999999996, 6.5899999999999999, 1.03, 19.539999999999999, 10.029999999999999, 8.9140818182555162, 0.68999999999999995, 7.0700000000000003, 8.9140818182555162, 1.4399999999999999, 8.9140818182555162, 1.6299999999999999, 8.9140818182555162, 5.21, 0.02, 8.9140818182555162, 7.1100000000000003, 1.74, 11.02, 8.9140818182555162, 0.23000000000000001, 8.9140818182555162, 8.9140818182555162, 8.9140818182555162, 8.9140818182555162, 8.9140818182555162, 8.9140818182555162, 8.9140818182555162, 8.9140818182555162, 8.9140818182555162, 8.9140818182555162, 8.9140818182555162, 8.9140818182555162, 8.9140818182555162, 0.90000000000000002, 1.7, 2.46, 2.46, 2.46, 2.46, 5.6600000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.78000000000000003, 1.52, 1.52, 1.52, 1.9099999999999999, 0.46999999999999997, 3.8100000000000001, 1.77, 2.4700000000000002, 2.0899999999999999, 1.05, 1.6399999999999999, 0.67000000000000004, 0.22, 2.3700000000000001, 1.8600000000000001, 1.6699999999999999, 3.1000000000000001, 4.1699999999999999, 2.3799999999999999, 1.3899999999999999, 1.27, 1.408709401646751, 16.98, 2.3500000000000001, 2.3500000000000001, 4.4199999999999999, 3.3300000000000001, 3.2400000000000002, 2.8700000000000001, 2.0099999999999998, 0.90000000000000002, 0.59999999999999998, 0.59999999999999998, 0.59999999999999998, 0.59999999999999998, 0.59999999999999998, 16.760000000000002, 1.78, 1.7799999999999998, 0.65000000000000002, 0.14000000000000001, 4.3799999999999999, 8.9700000000000006, 18.390000000000001, 5.9500000000000002, 6.5, 5.4500000000000002, 10.16, 8.1300000000000008, 6.3899999999999997, 0.52000000000000002, 6.6775898289370552, 0.02, 6.6775898289370552, 6.4100000000000001, 3.5299999999999998, 4.4699999999999998, 24.379999999999999, 16.522479616011353, 5.7000000000000002, 20.870000000000001, 6.79, 11.039999999999999, 11.67, 11.56, 11.529999999999999, 1.04, 7.1399999999999997, 7.1024937330988678, 0.070000000000000007, 7.1024937330988678, 16.760000000000002, 12.710000000000001, 11.779999999999999, 8.8200000000000003, 8.1300000000000008, 0.029999999999999999, 21.350000000000001, 7.2400000000000002, 7.2599999999999998, 20.710000000000001, 16.98, 16.050000000000001, 15.171727306495635, 11.9, 32.670000000000002, 4.5999999999999996, 0.98999999999999999, 21.219999999999999, 1.79, 15.171727306495635, 9.0999999999999996, 15.171727306495635, 25.899999999999999, 23.25, 19.640000000000001, 15.171727306495635, 15.171727306495635, 15.171727306495635, 3.4100000000000001, 15.171727306495635, 15.171727306495635, 15.171727306495635, 15.92, 15.171727306495635, 15.171727306495635, 15.171727306495635, 15.171727306495635, 15.171727306495635, 1.6699999999999999, 11.98, 20.68, 25.77, 21.579999999999998, 15.779999999999999, 13.32, 3.77, 17.18, 40.740000000000002, 4.3700000000000001, 0.75, 1.3400000000000001, 3.1699999999999999, 7.0499999999999998, 1.99, 0.38, 0.26000000000000001, 0.28000000000000003, 2.5600000000000001, 10.699999999999999, 20.16, 12.34, 10.84, 36.909999999999997, 37.310000000000002, 24.140000000000001, 9.7699999999999996, 4.0899999999999999, 21.649999999999999, 19.718132113021287, 1.96, 21.91, 19.43, 33.630000000000003, 26.59, 20.859999999999999, 22.949999999999999, 7.8799999999999999, 17.32, 24.210000000000001, 22.960000000000001, 17.5, 16.800000000000001, 18.379999999999999, 23, 2.8599999999999999, 14.9, 20.102109077167466, 9.8200000000000003, 26.43, 23.57, 26.879999999999999, 28.84, 20.102109077167466, 19.510000000000002, 58.149999999999999, 7.6299999999999999, 36.439999999999998, 28.34, 14.119999999999999, 7.0800000000000001, 20, 2.0800000000000001, 5.5499999999999998, 4.3700000000000001, 30.399999999999999, 2.4399999999999999, 2.71, 8.5999999999999996, 1.52, 20.102109077167466, 35.619999999999997, 3.8300000000000001, 20.102109077167466, 12.529999999999999, 2.71, 20.102109077167466, 4.21, 3.3900000000000001, 5.3200000000000003, 3.98, 6.4100000000000001, 5.0300000000000002, 6.5599999999999996, 6.8499999999999996, 8.8000000000000007, 9.4100000000000001, 12.220000000000001, 8.9100388114017015, 19.190000000000001, 5.2300000000000004, 10.75, 10, 15.529999999999999, 5.1500000000000004, 4.2000000000000002, 2.3599999999999999, 0.68000000000000005, 7.0199999999999996, 0.81999999999999995, 17.600000000000001, 8.5999999999999996, 8.9100388114017015, 0.55000000000000004, 6.4900000000000002, 8.9100388114017015, 8.9100388114017015, 1.3, 1.73, 8.9100388114017015, 4.6799999999999997, 0.029999999999999999, 8.9100388114017015, 7, 1.75, 11.98, 8.9100388114017015, 0.22, 8.9100388114017015, 8.9100388114017015, 8.9100388114017015, 8.9100388114017015, 8.9100388114017015, 8.9100388114017015, 8.9100388114017015, 8.9100388114017015, 8.9100388114017015, 8.9100388114017015, 8.9100388114017015, 8.9100388114017015, 8.9100388114017015, 0.83999999999999997, 1.7, 2.1200000000000001, 2.1200000000000001, 2.1200000000000001, 2.1200000000000001, 5.6900000000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.75, 1.5700000000000001, 1.5700000000000001, 1.5700000000000001, 2.0099999999999998, 0.77000000000000002, 4.2400000000000002, 1.8799999999999999, 2.8700000000000001, 2.1699999999999999, 1.0900000000000001, 1.6000000000000001, 0.75, 0.20999999999999999, 2.5699999999999998, 1.96, 1.73, 3.52, 4.3399999999999999, 2.0499999999999998, 1.3300000000000001, 1.3600000000000001, 1.469359580895568, 13.6, 2.4500000000000002, 2.4500000000000002, 4.1799999999999997, 3.3900000000000001, 3.4900000000000002, 3.0800000000000001, 2.0899999999999999, 0.93000000000000005, 0.64000000000000001, 0.64000000000000001, 0.64000000000000001, 0.64000000000000001, 0.64000000000000001, 18.640000000000001, 1.8400000000000001, 1.8400000000000001, 0.69999999999999996, 0.20000000000000001, 4.6399999999999997, 9.3100000000000005, 19.23, 6.3399999999999999, 7.29, 5.9100000000000001, 9.3699999999999992, 8.5700000000000003, 7.5499999999999998, 0.56000000000000005, 7.024268916877503, 0.01, 7.024268916877503, 6.6699999999999999, 4.0099999999999998, 5.3899999999999997, 24.850000000000001, 17.336908387675248, 6.7400000000000002, 22.690000000000001, 7.0800000000000001, 11.039999999999999, 13.57, 12.970000000000001, 11.35, 1.03, 7.7000000000000002, 7.659920794089305, 0.10000000000000001, 7.659920794089305, 18.640000000000001, 13.699999999999999, 12.66, 10.19, 8.6999999999999993, 0.029999999999999999, 20.93, 8.1699999999999999, 8.2400000000000002, 22.699999999999999, 18.760000000000002, 16.34, 15.776124695421535, 14.5, 34.119999999999997, 8, 1.22, 21.219999999999999, 1.79, 15.776124695421535, 9.5399999999999991, 15.776124695421535, 26.670000000000002, 22.100000000000001, 17.809999999999999, 15.776124695421535, 15.776124695421535, 15.776124695421535, 3.4500000000000002, 15.776124695421535, 15.776124695421535, 15.776124695421535, 15.92, 15.776124695421535, 15.776124695421535, 15.776124695421535, 15.776124695421535, 15.776124695421535, 1.77, 12, 21.850000000000001, 26.82, 22.18, 19.149999999999999, 12.210000000000001, 6.0899999999999999, 17.18, 36.630000000000003, 4.6100000000000003, 0.95999999999999996, 1.3200000000000001, 3.0800000000000001, 7.0999999999999996, 2.4700000000000002, 0.46000000000000002, 0.34000000000000002, 0.31, 2.96, 11.17, 20.32, 13.779999999999999, 10.66, 38.380000000000003, 36.189999999999998, 27.059999999999999, 10.380000000000001, 3.5899999999999999, 19.620000000000001, 20.355015644136472, 2.52, 24.140000000000001, 20.879999999999999, 35.560000000000002, 25.25, 22.699999999999999, 23.93, 9.9499999999999993, 18.850000000000001, 25.989999999999998, 24.690000000000001, 19.09, 17.5, 18.399999999999999, 22.890000000000001, 2.98, 16.149999999999999, 20.956096740517722, 8.7699999999999996, 26.140000000000001, 27.109999999999999, 26.66, 28.620000000000001, 20.956096740517722, 18.890000000000001, 59.490000000000002, 11.24, 41.049999999999997, 29.5, 14.119999999999999, 9.1600000000000001, 21.239999999999998, 2.21, 6.6299999999999999, 5.0300000000000002, 30.859999999999999, 2.9100000000000001, 3.1400000000000001, 8.1199999999999992, 1.6799999999999999, 20.956096740517722, 35.799999999999997, 4.7000000000000002, 20.956096740517722, 14.23, 2.71, 20.956096740517722, 5.71, 3.7999999999999998, 6.1299999999999999, 4.04, 7.4699999999999998, 5.0300000000000002, 6.4900000000000002, 7.7000000000000002, 9.8399999999999999, 9.9299999999999997, 14, 20.359999999999999, 9.7763596403076445, 6.04, 12.119999999999999, 11.08, 15.74, 5.3499999999999996, 4.3399999999999999, 2.9500000000000002, 0.66000000000000003, 8.6799999999999997, 1.1699999999999999, 16.850000000000001, 8.1400000000000006, 0.82999999999999996, 9.7763596403076445, 8.3900000000000006, 9.7763596403076445, 9.7763596403076445, 1.49, 1.95, 9.7763596403076445, 4.9000000000000004, 0.029999999999999999, 9.7763596403076445, 8.5999999999999996, 2.1400000000000001, 9.7763596403076445, 15.16, 0.26000000000000001, 9.7763596403076445, 9.7763596403076445, 9.7763596403076445, 9.7763596403076445, 9.7763596403076445, 9.7763596403076445, 9.7763596403076445, 9.7763596403076445, 9.7763596403076445, 9.7763596403076445, 9.7763596403076445, 9.7763596403076445, 9.7763596403076445, 0.94999999999999996, 1.7, 2.0099999999999998, 2.0099999999999998, 2.0099999999999998, 2.0099999999999998, 5.6500000000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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
            "title": "Value added in the agricultural sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.84999999999999998, 1.6399999999999999, 1.6399999999999999, 1.6399999999999999, 1.9399999999999999, 0.88, 3.8700000000000001, 1.7, 2.6099999999999999, 2.1899999999999999, 1.21, 1.55, 0.66000000000000003, 0.20000000000000001, 2.2200000000000002, 1.8500000000000001, 1.78, 3.3199999999999998, 4.2300000000000004, 2.02, 1.29, 0.87, 0.9898901176437146, 14.16, 2.3100000000000001, 2.3100000000000001, 4.5199999999999996, 3.46, 4.3700000000000001, 2.9100000000000001, 1.6899999999999999, 1.02, 0.67000000000000004, 0.67000000000000004, 0.67000000000000004, 0.67000000000000004, 0.67000000000000004, 17.329999999999998, 1.6499999999999999, 1.6499999999999999, 0.63, 0.20000000000000001, 4.3300000000000001, 10.890000000000001, 18.359999999999999, 6.29, 6.4699999999999998, 5.0199999999999996, 10.59, 7.25, 6.46, 0.53000000000000003, 6.7196926442689957, 0.02, 6.7196926442689957, 5.54, 3.8700000000000001, 5.0300000000000002, 24.620000000000001, 17.133319466763066, 5.7300000000000004, 22.449999999999999, 6.71, 11.039999999999999, 13.779999999999999, 13.16, 11.34, 0.94999999999999996, 7.2400000000000002, 7.2026152967681956, 0.080000000000000002, 7.2026152967681956, 17.329999999999998, 13.279999999999999, 12.56, 10.07, 8.7100000000000009, 0.029999999999999999, 23.440000000000001, 9.5899999999999999, 8.8300000000000001, 22.850000000000001, 18.760000000000002, 16.07, 17.089895819204955, 14.52, 34.119999999999997, 5.2699999999999996, 1.26, 21.219999999999999, 1.79, 17.089895819204955, 9.8499999999999996, 17.089895819204955, 26.670000000000002, 22.280000000000001, 16.32, 17.089895819204955, 17.089895819204955, 17.089895819204955, 3.8599999999999999, 17.089895819204955, 17.089895819204955, 17.089895819204955, 15.92, 17.089895819204955, 17.089895819204955, 17.089895819204955, 17.089895819204955, 17.089895819204955, 1.79, 11.630000000000001, 22.670000000000002, 33.479999999999997, 22.02, 19.190000000000001, 12.390000000000001, 3.3100000000000001, 17.18, 36.630000000000003, 4.6500000000000004, 0.91000000000000003, 1.26, 1.3999999999999999, 6.3200000000000003, 2.1200000000000001, 0.46000000000000002, 0.29999999999999999, 0.28000000000000003, 2.7000000000000002, 11.44, 6.3600000000000003, 12.18, 12.039999999999999, 36.479999999999997, 35.68, 25.300000000000001, 10.140000000000001, 1.7, 18.579999999999998, 16.765043398943465, 2.4700000000000002, 23.359999999999999, 19.039999999999999, 37.579999999999998, 24.789999999999999, 21.48, 23.84, 11.49, 19.710000000000001, 27.5, 23.190000000000001, 17.469999999999999, 16.91, 17.460000000000001, 22.77, 3.3900000000000001, 20.686046363180285, 15.470000000000001, 8.8499999999999996, 27.32, 28.530000000000001, 24.09, 28.66, 20.686046363180285, 18.539999999999999, 57.450000000000003, 9.5099999999999998, 36.960000000000001, 30.07, 14.119999999999999, 9.4900000000000002, 22.420000000000002, 1.79, 6.0199999999999996, 4.2199999999999998, 30.859999999999999, 2.6299999999999999, 3.2799999999999998, 8.1300000000000008, 1.6799999999999999, 20.686046363180285, 35.509999999999998, 4.5300000000000002, 20.686046363180285, 13.949999999999999, 2.8799999999999999, 20.686046363180285, 7.4900000000000002, 3.8900000000000001, 7.1299999999999999, 3.6499999999999999, 7.6399999999999997, 5.0300000000000002, 8.1300000000000008, 7.2199999999999998, 9.4100000000000001, 9.3000000000000007, 12.92, 20.68, 5.6699999999999999, 9.3589290364601645, 11.039999999999999, 11.619999999999999, 15.529999999999999, 4.8600000000000003, 4.3200000000000003, 2.6600000000000001, 0.67000000000000004, 8.3399999999999999, 0.95999999999999996, 13.49, 9.1899999999999995, 0.47999999999999998, 9.3589290364601645, 7.6900000000000004, 9.3589290364601645, 9.3589290364601645, 1.48, 1.76, 9.3589290364601645, 5.3399999999999999, 0.029999999999999999, 9.3589290364601645, 5.3600000000000003, 1.98, 9.3589290364601645, 16.960000000000001, 0.29999999999999999, 9.3589290364601645, 9.3589290364601645, 9.3589290364601645, 9.3589290364601645, 9.3589290364601645, 9.3589290364601645, 9.3589290364601645, 9.3589290364601645, 9.3589290364601645, 9.3589290364601645, 9.3589290364601645, 9.3589290364601645, 9.3589290364601645, 0.95999999999999996, 1.7, 2.3100000000000001, 2.3100000000000001, 2.3100000000000001, 2.3100000000000001, 5.6500000000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 80,
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

  
