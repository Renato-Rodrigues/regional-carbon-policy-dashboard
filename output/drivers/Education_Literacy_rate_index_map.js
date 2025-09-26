(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Education_Literacy_rate_index_map') 

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
    "b55c4bf8107e": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c4bf8107e",
  "attrs": {
    "b55c4bf8107e": {
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
        "title": "Literacy rate"
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
        "title": "Literacy rate",
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
      "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
      "z": [98.849999999999994, 92.359999999999999, 93.909999999999997, 98.680000000000007, 97.170000000000002, 94.480000000000004, 99.799999999999997, 99.859438961996574, 99.859438961996574, 99.819999999999993, 99.900000000000006, 99.890000000000001, 98.599999999999994, 99.099999999999994, 98.349999999999994, 99.450000000000003, 98.754829379266695, 62.75, 99.969999999999999, 95.939999999999998, 96.400000000000006, 98.140000000000001, 99.590000000000003, 99.359999999999999, 97.599999999999994, 97.769999999999996, 97.7813081606064, 97.7813081606064, 97.7813081606064, 97.7813081606064, 87.370000000000005, 99.680000000000007, 99.730000000000004, 99.989999999999995, 100, 99.620000000000005, 99.590000000000003, 99.700000000000003, 99.239999999999995, 99.400000000000006, 99.739999999999995, 98.260000000000005, 95.120000000000005, 95.119442421097474, 95.119442421097474, 93.5, 62.75, 90.379999999999995, 93.519999999999996, 92.590000000000003, 93.510000000000005, 95.859999999999999, 75.549999999999997, 77.750135863105399, 90.810000000000002, 73.609999999999999, 61.600000000000001, 72.700000000000003, 77.750135863105399, 77.750135863105399, 77.750135863105399, 96.090000000000003, 98.400000000000006, 77.750135863105399, 97.299999999999997, 78.400000000000006, 98.969999999999999, 77.750135863105399, 77.750135863105399, 99.019999999999996, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 99.5, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 97.969999999999999, 46.659999999999997, 49.869999999999997, 59.630000000000003, 31.449999999999999, 52.810000000000002, 82.439999999999998, 77.200000000000003, 54.100000000000001, 80.840000000000003, 75.690606685055471, 89.890000000000001, 89.609999999999999, 90.030000000000001, 92.480000000000004, 81.359999999999999, 93.269999999999996, 92.299999999999997, 88.959999999999994, 82.859999999999999, 67.329999999999998, 72.650000000000006, 53.520000000000003, 52.310000000000002, 28.670000000000002, 24, 74.299999999999997, 28.379999999999999, 52.341171235887849, 45.5, 52.341171235887849, 88.719999999999999, 54.770000000000003, 61.210000000000001, 35.899999999999999, 67.799999999999997, 72.159999999999997, 71.370000000000005, 71.5, 48.159999999999997, 40.979999999999997, 58.939999999999998, 66.030000000000001, 70.680000000000007, 21.82, 83.579999999999998, 61.310000000000002, 61.130000000000003, 41.890000000000001, 59.818589170706261, 29.699999999999999, 65.849999999999994, 28.699999999999999, 48.079999999999998, 59.818589170706261, 56.890000000000001, 34.829999999999998, 36.75, 76.109999999999999, 42.939999999999998, 64.659999999999997, 75.799999999999997, 76.489999999999995, 81.189999999999998, 41.950000000000003, 82.280000000000001, 45.579999999999998, 89.25, 83.099999999999994, 94.370000000000005, 59.818589170706261, 59.818589170706261, 49.200000000000003, 85.329999999999998, 59.818589170706261, 69.540000000000006, 93.950000000000003, 59.818589170706261, 88.620000000000005, 90.950000000000003, 96.700000000000003, 92.799999999999997, 95.150000000000006, 97.790000000000006, 87.670000000000002, 92.099999999999994, 78.260000000000005, 85.355438721510495, 90.739999999999995, 88.239999999999995, 58.740000000000002, 83.590000000000003, 83.560000000000002, 94.560000000000002, 78, 97.409999999999997, 91.969999999999999, 94.090000000000003, 85.355438721510495, 85.355438721510495, 84.989999999999995, 89.599999999999994, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 96.819999999999993, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495],
      "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [98.849999999999994, 92.359999999999999, 93.909999999999997, 98.680000000000007, 97.170000000000002, 94.480000000000004, 99.799999999999997, 99.859438961996574, 99.859438961996574, 99.819999999999993, 99.900000000000006, 99.890000000000001, 98.599999999999994, 99.099999999999994, 98.349999999999994, 99.450000000000003, 98.754829379266695, 62.75, 99.969999999999999, 95.939999999999998, 96.400000000000006, 98.140000000000001, 99.590000000000003, 99.359999999999999, 97.599999999999994, 97.769999999999996, 97.7813081606064, 97.7813081606064, 97.7813081606064, 97.7813081606064, 87.370000000000005, 99.680000000000007, 99.730000000000004, 99.989999999999995, 100, 99.620000000000005, 99.590000000000003, 99.700000000000003, 99.239999999999995, 99.400000000000006, 99.739999999999995, 98.260000000000005, 95.120000000000005, 95.119442421097474, 95.119442421097474, 93.5, 62.75, 90.379999999999995, 93.519999999999996, 92.590000000000003, 93.510000000000005, 95.859999999999999, 75.549999999999997, 77.750135863105399, 90.810000000000002, 73.609999999999999, 61.600000000000001, 72.700000000000003, 77.750135863105399, 77.750135863105399, 77.750135863105399, 96.090000000000003, 98.400000000000006, 77.750135863105399, 97.299999999999997, 78.400000000000006, 98.969999999999999, 77.750135863105399, 77.750135863105399, 99.019999999999996, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 99.5, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 77.750135863105399, 97.969999999999999, 46.659999999999997, 49.869999999999997, 59.630000000000003, 31.449999999999999, 52.810000000000002, 82.439999999999998, 77.200000000000003, 54.100000000000001, 80.840000000000003, 75.690606685055471, 89.890000000000001, 89.609999999999999, 90.030000000000001, 92.480000000000004, 81.359999999999999, 93.269999999999996, 92.299999999999997, 88.959999999999994, 82.859999999999999, 67.329999999999998, 72.650000000000006, 53.520000000000003, 52.310000000000002, 28.670000000000002, 24, 74.299999999999997, 28.379999999999999, 52.341171235887849, 45.5, 52.341171235887849, 88.719999999999999, 54.770000000000003, 61.210000000000001, 35.899999999999999, 67.799999999999997, 72.159999999999997, 71.370000000000005, 71.5, 48.159999999999997, 40.979999999999997, 58.939999999999998, 66.030000000000001, 70.680000000000007, 21.82, 83.579999999999998, 61.310000000000002, 61.130000000000003, 41.890000000000001, 59.818589170706261, 29.699999999999999, 65.849999999999994, 28.699999999999999, 48.079999999999998, 59.818589170706261, 56.890000000000001, 34.829999999999998, 36.75, 76.109999999999999, 42.939999999999998, 64.659999999999997, 75.799999999999997, 76.489999999999995, 81.189999999999998, 41.950000000000003, 82.280000000000001, 45.579999999999998, 89.25, 83.099999999999994, 94.370000000000005, 59.818589170706261, 59.818589170706261, 49.200000000000003, 85.329999999999998, 59.818589170706261, 69.540000000000006, 93.950000000000003, 59.818589170706261, 88.620000000000005, 90.950000000000003, 96.700000000000003, 92.799999999999997, 95.150000000000006, 97.790000000000006, 87.670000000000002, 92.099999999999994, 78.260000000000005, 85.355438721510495, 90.739999999999995, 88.239999999999995, 58.740000000000002, 83.590000000000003, 83.560000000000002, 94.560000000000002, 78, 97.409999999999997, 91.969999999999999, 94.090000000000003, 85.355438721510495, 85.355438721510495, 84.989999999999995, 89.599999999999994, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 96.819999999999993, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495, 85.355438721510495],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [98.849999999999994, 92.359999999999999, 93.909999999999997, 98.680000000000007, 97.170000000000002, 94.480000000000004, 99.799999999999997, 99.859474260600877, 99.859474260600877, 99.819999999999993, 99.900000000000006, 99.890000000000001, 98.599999999999994, 99.099999999999994, 98.349999999999994, 99.450000000000003, 98.755649676457423, 62.75, 99.969999999999999, 95.939999999999998, 96.594999999999999, 98.140000000000001, 99.590000000000003, 99.359999999999999, 97.599999999999994, 97.853749999999991, 97.861008128331349, 97.861008128331349, 97.861008128331349, 97.861008128331349, 87.370000000000005, 99.680000000000007, 99.730000000000004, 99.989999999999995, 100, 99.620000000000005, 99.590000000000003, 99.700000000000003, 99.239999999999995, 99.400000000000006, 99.739999999999995, 98.260000000000005, 95.120000000000005, 95.119431857210841, 95.119431857210841, 93.5, 62.75, 90.379999999999995, 93.519999999999996, 93.156000000000006, 93.510000000000005, 95.859999999999999, 75.549999999999997, 77.715095238534303, 90.810000000000002, 73.609999999999999, 61.600000000000001, 72.700000000000003, 77.715095238534303, 77.715095238534303, 77.715095238534303, 96.090000000000003, 98.400000000000006, 77.715095238534303, 97.299999999999997, 78.400000000000006, 98.969999999999999, 77.715095238534303, 77.715095238534303, 99.019999999999996, 77.715095238534303, 77.715095238534303, 77.715095238534303, 77.715095238534303, 99.5, 77.715095238534303, 77.715095238534303, 77.715095238534303, 77.715095238534303, 77.715095238534303, 77.715095238534303, 77.715095238534303, 77.715095238534303, 77.715095238534303, 97.969999999999999, 46.659999999999997, 49.869999999999997, 59.630000000000003, 31.449999999999999, 52.810000000000002, 82.439999999999998, 77.200000000000003, 54.100000000000001, 80.840000000000003, 75.756365885496393, 90.509999999999991, 89.609999999999999, 90.030000000000001, 92.480000000000004, 82.412000000000006, 93.269999999999996, 92.299999999999997, 88.959999999999994, 82.859999999999999, 67.329999999999998, 72.650000000000006, 53.520000000000003, 52.310000000000002, 28.670000000000002, 24.726666666666667, 74.299999999999997, 28.379999999999999, 52.255614966680007, 45.5, 52.255614966680007, 88.719999999999999, 59.913333333333334, 61.210000000000001, 35.899999999999999, 67.799999999999997, 72.159999999999997, 71.370000000000005, 71.5, 48.563333333333333, 40.979999999999997, 58.939999999999998, 66.030000000000001, 70.680000000000007, 22.670000000000002, 61.310000000000002, 83.579999999999998, 61.130000000000003, 41.890000000000001, 59.854628717286623, 29.072857142857142, 65.849999999999994, 28.699999999999999, 48.079999999999998, 59.854628717286623, 56.890000000000001, 34.829999999999998, 36.75, 76.109999999999999, 42.939999999999998, 64.659999999999997, 75.799999999999997, 76.489999999999995, 81.753, 41.950000000000003, 82.280000000000001, 45.579999999999998, 89.25, 83.099999999999994, 94.370000000000005, 59.854628717286623, 59.854628717286623, 49.200000000000003, 85.329999999999998, 59.854628717286623, 69.540000000000006, 93.950000000000003, 59.854628717286623, 88.620000000000005, 90.950000000000003, 96.700000000000003, 92.799999999999997, 95.150000000000006, 97.790000000000006, 87.670000000000002, 92.099999999999994, 78.260000000000005, 85.090238256690441, 90.739999999999995, 88.239999999999995, 55.390000000000001, 83.590000000000003, 83.560000000000002, 94.560000000000002, 78, 97.409999999999997, 91.969999999999999, 94.090000000000003, 85.090238256690441, 85.090238256690441, 84.989999999999995, 89.599999999999994, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 96.819999999999993, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441, 85.090238256690441],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [98.849999999999994, 92.359999999999999, 93.909999999999997, 98.680000000000007, 97.75, 94.480000000000004, 99.799999999999997, 99.859608752155481, 99.859608752155481, 99.819999999999993, 99.900000000000006, 99.890000000000001, 98.599999999999994, 99.099999999999994, 98.349999999999994, 99.450000000000003, 98.756594282023215, 62.750000000000007, 99.969999999999999, 95.939999999999998, 96.790000000000006, 98.140000000000001, 99.590000000000003, 99.359999999999999, 97.599999999999994, 97.9375, 97.941291003871854, 97.941291003871854, 97.941291003871854, 97.941291003871854, 88.230000000000004, 99.680000000000007, 99.730000000000004, 99.989999999999995, 100, 99.620000000000005, 99.590000000000003, 99.700000000000003, 99.239999999999995, 99.400000000000006, 99.739999999999995, 98.260000000000005, 95.120000000000005, 95.119411843411271, 95.119411843411271, 93.5, 62.75, 91.180000000000007, 93.519999999999996, 93.722000000000008, 93.510000000000005, 95.859999999999999, 75.549999999999997, 77.796202895293789, 90.810000000000002, 74.424999999999997, 61.600000000000001, 72.700000000000003, 77.796202895293789, 77.796202895293789, 77.796202895293789, 96.090000000000003, 98.400000000000006, 77.796202895293789, 97.299999999999997, 79.030000000000001, 98.969999999999999, 77.796202895293789, 77.796202895293789, 99.019999999999996, 77.796202895293789, 77.796202895293789, 77.796202895293789, 77.796202895293789, 99.5, 77.796202895293789, 77.796202895293789, 77.796202895293789, 77.796202895293789, 77.796202895293789, 77.796202895293789, 77.796202895293789, 77.796202895293789, 77.796202895293789, 97.969999999999999, 46.659999999999997, 49.869999999999997, 59.630000000000003, 31.449999999999999, 52.810000000000002, 82.439999999999998, 77.200000000000003, 54.100000000000001, 81.385999999999996, 75.960104216372486, 91.129999999999995, 89.609999999999999, 90.030000000000001, 92.965000000000003, 83.463999999999999, 93.269999999999996, 92.299999999999997, 90.333333333333329, 84.145555555555561, 67.329999999999998, 72.650000000000006, 53.520000000000003, 53.020000000000003, 28.670000000000002, 25.453333333333333, 28.163636363636364, 75.263333333333335, 52.378850924387017, 45.5, 52.378850924387017, 88.719999999999999, 65.056666666666672, 61.210000000000001, 29.82, 67.799999999999997, 72.159999999999997, 71.370000000000005, 71.5, 48.966666666666661, 40.979999999999997, 66.030000000000001, 58.939999999999998, 70.680000000000007, 23.52, 61.310000000000002, 83.579999999999998, 61.130000000000003, 41.890000000000001, 59.882113201882611, 28.445714285714285, 65.849999999999994, 28.699999999999999, 59.882113201882611, 48.079999999999998, 56.890000000000001, 34.563333333333333, 36.75, 76.109999999999999, 42.939999999999998, 64.659999999999997, 76.489999999999995, 75.799999999999997, 82.316000000000003, 41.950000000000003, 82.280000000000001, 45.579999999999998, 89.25, 83.099999999999994, 94.370000000000005, 59.882113201882611, 59.882113201882611, 49.200000000000003, 85.329999999999998, 59.882113201882611, 69.540000000000006, 93.950000000000003, 59.882113201882611, 89.120000000000005, 91.629999999999995, 96.700000000000003, 92.849999999999994, 95.150000000000006, 97.790000000000006, 87.909999999999997, 92.099999999999994, 78.260000000000005, 84.884303629974454, 90.739999999999995, 88.239999999999995, 52.039999999999999, 83.590000000000003, 83.560000000000002, 94.560000000000002, 78, 97.409999999999997, 91.969999999999999, 94.090000000000003, 84.884303629974454, 84.884303629974454, 84.989999999999995, 90.85499999999999, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 96.819999999999993, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454, 84.884303629974454],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [98.849999999999994, 92.518333333333331, 93.909999999999997, 98.680000000000007, 97.75, 94.480000000000004, 99.799999999999997, 99.859757459902411, 99.859757459902411, 99.819999999999993, 99.900000000000006, 99.890000000000001, 98.599999999999994, 99.099999999999994, 98.349999999999994, 99.450000000000003, 98.757488145799542, 62.749999999999993, 99.969999999999999, 95.939999999999998, 96.984999999999999, 98.140000000000001, 99.590000000000003, 99.359999999999999, 97.599999999999994, 98.021249999999995, 98.022466653034584, 98.022466653034584, 98.022466653034584, 98.022466653034584, 88.120000000000005, 99.680000000000007, 99.730000000000004, 99.989999999999995, 100, 99.620000000000005, 99.590000000000003, 99.700000000000003, 99.239999999999995, 99.400000000000006, 99.739999999999995, 98.260000000000005, 95.120000000000005, 95.119383754210475, 95.119383754210475, 93.5, 62.75, 91.980000000000004, 93.519999999999996, 94.287999999999997, 94.094000000000008, 95.859999999999999, 75.549999999999997, 77.730405112931265, 90.810000000000002, 75.240000000000009, 61.600000000000001, 70.298333333333332, 77.730405112931265, 77.730405112931265, 77.730405112931265, 96.090000000000003, 98.400000000000006, 77.730405112931265, 97.299999999999997, 79.660000000000011, 98.969999999999999, 77.730405112931265, 77.730405112931265, 99.019999999999996, 77.730405112931265, 77.730405112931265, 77.730405112931265, 77.730405112931265, 99.5, 77.730405112931265, 77.730405112931265, 77.730405112931265, 77.730405112931265, 77.730405112931265, 77.730405112931265, 77.730405112931265, 77.730405112931265, 77.730405112931265, 97.969999999999999, 46.659999999999997, 54.149999999999999, 59.630000000000003, 31.449999999999999, 53.168571428571433, 82.329999999999998, 77.200000000000003, 54.100000000000001, 81.932000000000002, 76.267662599369913, 91.664999999999992, 90.583571428571432, 89.609999999999999, 93.450000000000003, 84.516000000000005, 93.280000000000001, 91.706666666666663, 92.299999999999997, 85.431111111111107, 66.370000000000005, 72.650000000000006, 53.520000000000003, 53.730000000000004, 28.940000000000001, 26.18, 27.947272727272725, 76.226666666666659, 52.534459444789192, 45.5, 52.534459444789192, 88.719999999999999, 70.200000000000003, 61.210000000000001, 34.409999999999997, 67.799999999999997, 72.159999999999997, 71.370000000000005, 71.5, 49.369999999999997, 40.979999999999997, 66.030000000000001, 60.325000000000003, 70.680000000000007, 22.469999999999999, 61.310000000000002, 83.579999999999998, 61.130000000000003, 41.890000000000001, 59.919175806971616, 27.818571428571428, 65.849999999999994, 28.699999999999999, 59.919175806971616, 48.079999999999998, 56.890000000000001, 34.296666666666667, 36.75, 76.643333333333331, 42.939999999999998, 64.659999999999997, 76.489999999999995, 75.799999999999997, 82.878999999999991, 41.950000000000003, 82.280000000000001, 45.579999999999998, 89.25, 83.099999999999994, 94.370000000000005, 59.919175806971616, 59.919175806971616, 49.200000000000003, 85.329999999999998, 59.919175806971616, 69.540000000000006, 93.950000000000003, 59.919175806971616, 89.620000000000005, 91.730000000000004, 96.700000000000003, 92.299999999999997, 95.150000000000006, 97.790000000000006, 88.700000000000003, 92.099999999999994, 78.260000000000005, 84.822519997158054, 90.739999999999995, 88.239999999999995, 48.689999999999998, 83.590000000000003, 83.560000000000002, 94.560000000000002, 78.460999999999999, 97.409999999999997, 91.969999999999999, 94.090000000000003, 84.822519997158054, 84.822519997158054, 84.989999999999995, 92.109999999999999, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 96.819999999999993, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054, 84.822519997158054],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [98.849999999999994, 92.676666666666662, 93.909999999999997, 98.680000000000007, 97.939999999999998, 94.480000000000004, 99.799999999999997, 99.859849628612068, 99.859849628612068, 99.819999999999993, 99.900000000000006, 99.890000000000001, 98.599999999999994, 99.099999999999994, 98.349999999999994, 99.450000000000003, 98.759022048418245, 64.060000000000002, 99.969999999999999, 95.939999999999998, 97.180000000000007, 98.140000000000001, 99.590000000000003, 99.359999999999999, 97.599999999999994, 98.10499999999999, 98.104074611049072, 98.104074611049072, 98.104074611049072, 98.104074611049072, 88.659999999999997, 99.680000000000007, 99.730000000000004, 99.989999999999995, 100, 99.620000000000005, 99.590000000000003, 99.700000000000003, 99.239999999999995, 99.400000000000006, 99.739999999999995, 98.260000000000005, 95.120000000000005, 95.11952904276292, 95.11952904276292, 93.927999999999997, 64.060000000000002, 92.085000000000008, 93.519999999999996, 94.853999999999999, 94.678000000000011, 95.859999999999999, 75.549999999999997, 77.6394369956015, 90.685000000000002, 76.055000000000007, 61.600000000000001, 67.896666666666675, 77.6394369956015, 77.6394369956015, 77.6394369956015, 96.090000000000003, 98.42625000000001, 77.6394369956015, 97.299999999999997, 80.290000000000006, 98.969999999999999, 77.6394369956015, 77.6394369956015, 99.093999999999994, 77.6394369956015, 77.6394369956015, 77.6394369956015, 77.6394369956015, 99.5, 77.6394369956015, 77.6394369956015, 77.6394369956015, 77.6394369956015, 77.6394369956015, 77.6394369956015, 77.6394369956015, 77.6394369956015, 77.6394369956015, 97.969999999999999, 46.659999999999997, 52.140000000000001, 59.630000000000003, 31.449999999999999, 53.527142857142856, 82.644999999999996, 77.200000000000003, 54.100000000000001, 82.478000000000009, 76.658615984955603, 92.200000000000003, 91.137142857142862, 89.609999999999999, 93.760000000000005, 85.567999999999998, 93.659999999999997, 93.079999999999998, 92.299999999999997, 86.716666666666669, 67.790000000000006, 73.89500000000001, 53.520000000000003, 54.439999999999998, 29.210000000000001, 27.41, 27.730909090909091, 77.189999999999998, 53.023317806358321, 45.5, 53.023317806358321, 88.719999999999999, 60.640000000000001, 61.210000000000001, 39, 67.799999999999997, 72.159999999999997, 71.829999999999998, 71.5, 49.773333333333333, 40.979999999999997, 66.030000000000001, 61.710000000000001, 70.680000000000007, 28.289999999999999, 61.310000000000002, 83.579999999999998, 61.130000000000003, 43.939999999999998, 60.346773191514231, 27.19142857142857, 65.849999999999994, 29.408333333333331, 60.346773191514231, 48.079999999999998, 56.956666666666671, 34.030000000000001, 36.75, 77.176666666666662, 42.939999999999998, 64.659999999999997, 76.489999999999995, 75.799999999999997, 83.441999999999993, 41.950000000000003, 82.280000000000001, 45.579999999999998, 89.25, 83.099999999999994, 94.370000000000005, 60.346773191514231, 60.346773191514231, 49.200000000000003, 85.329999999999998, 60.346773191514231, 69.540000000000006, 93.950000000000003, 60.346773191514231, 90.010000000000005, 92.799999999999997, 96.700000000000003, 92.650000000000006, 95.150000000000006, 97.859999999999999, 89.590000000000003, 92.099999999999994, 78.260000000000005, 85.058418805094391, 90.739999999999995, 88.239999999999995, 49.989999999999995, 83.590000000000003, 82.030000000000001, 94.560000000000002, 78.921999999999997, 97.409999999999997, 91.969999999999999, 94.090000000000003, 85.058418805094391, 85.058418805094391, 84.989999999999995, 93.365000000000009, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 96.819999999999993, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391, 85.058418805094391],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [98.849999999999994, 92.835000000000008, 93.909999999999997, 98.680000000000007, 97.629999999999995, 94.480000000000004, 99.799999999999997, 99.859892194475407, 99.859892194475407, 99.819999999999993, 99.900000000000006, 99.890000000000001, 98.599999999999994, 99.099999999999994, 98.349999999999994, 99.450000000000003, 98.760676533517866, 65.370000000000005, 99.969999999999999, 95.939999999999998, 97.375, 98.140000000000001, 99.590000000000003, 99.359999999999999, 97.599999999999994, 98.188749999999999, 98.186648141503028, 98.186648141503028, 98.186648141503028, 98.186648141503028, 89.739999999999995, 99.680000000000007, 99.730000000000004, 99.989999999999995, 100, 99.620000000000005, 99.675000000000011, 99.700000000000003, 99.400000000000006, 99.239999999999995, 99.739999999999995, 98.260000000000005, 95.120000000000005, 95.119688276380614, 95.119688276380614, 94.355999999999995, 65.370000000000005, 92.189999999999998, 93.519999999999996, 95.420000000000002, 95.262, 95.859999999999999, 75.549999999999997, 77.549665118853738, 90.560000000000002, 76.870000000000005, 61.600000000000001, 65.495000000000005, 77.549665118853738, 77.549665118853738, 77.549665118853738, 96.090000000000003, 98.452500000000001, 77.549665118853738, 97.299999999999997, 80.920000000000002, 98.969999999999999, 77.549665118853738, 77.549665118853738, 99.167999999999992, 77.549665118853738, 77.549665118853738, 77.549665118853738, 77.549665118853738, 99.5, 77.549665118853738, 77.549665118853738, 77.549665118853738, 77.549665118853738, 77.549665118853738, 77.549665118853738, 77.549665118853738, 77.549665118853738, 77.549665118853738, 97.969999999999999, 49.6875, 55.530000000000001, 59.630000000000003, 31.449999999999999, 53.885714285714286, 82.959999999999994, 77.200000000000003, 54.100000000000001, 83.024000000000001, 76.990502347994322, 92.316666666666663, 91.690714285714293, 90.39500000000001, 94.010000000000005, 93.900000000000006, 86.620000000000005, 93.989999999999995, 92.299999999999997, 88.00222222222223, 69.210000000000008, 75.140000000000001, 53.520000000000003, 55.149999999999999, 29.48, 28.640000000000001, 27.514545454545456, 77.709999999999994, 53.539774605832882, 48.26166666666667, 53.539774605832882, 90.805000000000007, 51.079999999999998, 63.972000000000001, 40.277000000000001, 67.799999999999997, 73.098571428571432, 72.289999999999992, 71.5, 50.176666666666662, 66.030000000000001, 40.979999999999997, 63.094999999999999, 70.88333333333334, 29.19142857142857, 61.310000000000002, 68.423333333333332, 83.579999999999998, 45.990000000000002, 60.949127782792395, 26.564285714285713, 65.849999999999994, 30.116666666666667, 60.949127782792395, 48.079999999999998, 57.023333333333333, 33.763333333333335, 36.75, 77.710000000000008, 43.475999999999999, 64.659999999999997, 79.435000000000002, 75.799999999999997, 84.004999999999995, 41.950000000000003, 82.280000000000001, 45.579999999999998, 89.25, 83.099999999999994, 94.370000000000005, 60.949127782792395, 60.949127782792395, 49.200000000000003, 85.329999999999998, 60.949127782792395, 69.540000000000006, 93.950000000000003, 60.949127782792395, 90.040000000000006, 92.930000000000007, 96.700000000000003, 93.379999999999995, 95.330000000000013, 98.159999999999997, 90.439999999999998, 92.390000000000001, 78.260000000000005, 85.483895196127705, 90.700000000000003, 88.673333333333332, 51.289999999999999, 83.980000000000004, 83.950000000000003, 93.290000000000006, 79.382999999999996, 97.409999999999997, 91.969999999999999, 94.090000000000003, 85.483895196127705, 85.483895196127705, 84.989999999999995, 94.620000000000005, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 96.819999999999993, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705, 85.483895196127705],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [98.849999999999994, 92.993333333333339, 93.909999999999997, 98.680000000000007, 97.680000000000007, 94.480000000000004, 99.799999999999997, 99.85987732825231, 99.85987732825231, 99.819999999999993, 99.900000000000006, 99.890000000000001, 98.599999999999994, 99.099999999999994, 98.349999999999994, 99.450000000000003, 98.761596030409379, 66.679999999999993, 99.969999999999999, 96.243333333333325, 97.569999999999993, 98.140000000000001, 99.590000000000003, 99.359999999999999, 97.599999999999994, 98.272499999999994, 98.268295083945304, 98.268295083945304, 98.268295083945304, 98.268295083945304, 90.819999999999993, 99.680000000000007, 99.730000000000004, 99.989999999999995, 100, 99.620000000000005, 99.760000000000005, 99.700000000000003, 99.400000000000006, 99.239999999999995, 99.739999999999995, 98.260000000000005, 95.120000000000005, 95.11986502427176, 95.11986502427176, 94.784000000000006, 66.679999999999993, 92.579999999999998, 93.519999999999996, 95.616, 95.846000000000004, 95.859999999999999, 75.549999999999997, 77.326849817754592, 90.870000000000005, 76.140000000000001, 61.600000000000001, 63.093333333333334, 77.326849817754592, 77.326849817754592, 77.326849817754592, 96.090000000000003, 98.478750000000005, 77.326849817754592, 97.299999999999997, 81.550000000000011, 98.969999999999999, 77.326849817754592, 77.326849817754592, 99.242000000000004, 77.326849817754592, 77.326849817754592, 77.326849817754592, 77.326849817754592, 99.5, 77.326849817754592, 77.326849817754592, 77.326849817754592, 77.326849817754592, 77.326849817754592, 77.326849817754592, 77.326849817754592, 77.326849817754592, 77.326849817754592, 98.052999999999997, 52.715000000000003, 54.890000000000001, 31.449999999999999, 59.630000000000003, 54.244285714285716, 83.127499999999998, 77.200000000000003, 54.100000000000001, 83.569999999999993, 77.230306879245006, 92.433333333333337, 92.244285714285709, 91.180000000000007, 94.430000000000007, 94.185000000000002, 86.780000000000001, 94.719999999999999, 92.299999999999997, 89.287777777777777, 70.629999999999995, 75.766999999999996, 54.238, 56.079999999999998, 29.75, 29.870000000000001, 27.298181818181817, 78.419999999999987, 54.131868057746232, 51.023333333333333, 54.131868057746232, 92.890000000000001, 52.173999999999999, 66.733999999999995, 41.554000000000002, 67.799999999999997, 74.037142857142854, 72.75, 71.5, 66.030000000000001, 50.579999999999998, 40.979999999999997, 64.480000000000004, 71.086666666666673, 30.092857142857142, 61.310000000000002, 75.716666666666669, 83.579999999999998, 48.039999999999999, 61.62315048835417, 25.937142857142856, 65.849999999999994, 30.825000000000003, 61.62315048835417, 50.318333333333328, 57.090000000000003, 33.496666666666663, 36.75, 78.243333333333339, 44.012, 65.850999999999999, 82.379999999999995, 84.567999999999998, 75.799999999999997, 41.950000000000003, 82.280000000000001, 45.579999999999998, 89.25, 94.370000000000005, 83.099999999999994, 61.62315048835417, 61.62315048835417, 49.200000000000003, 85.329999999999998, 61.62315048835417, 74.689999999999998, 93.950000000000003, 61.62315048835417, 90.299999999999997, 93.439999999999998, 96.700000000000003, 93.239999999999995, 95.510000000000005, 98.269999999999996, 91.290000000000006, 92.25, 78.260000000000005, 85.885112156054973, 91.170000000000002, 89.106666666666669, 52.589999999999996, 84.370000000000005, 84.099999999999994, 93.75, 79.843999999999994, 97.409999999999997, 91.969999999999999, 94.090000000000003, 85.885112156054973, 85.885112156054973, 84.989999999999995, 94.650000000000006, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 96.819999999999993, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973, 85.885112156054973],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [98.849999999999994, 93.151666666666671, 93.909999999999997, 98.680000000000007, 97.75, 94.480000000000004, 99.799999999999997, 99.859993130883112, 99.859993130883112, 99.819999999999993, 99.900000000000006, 99.890000000000001, 98.599999999999994, 99.099999999999994, 98.349999999999994, 99.450000000000003, 98.762197474266728, 67.989999999999995, 99.969999999999999, 96.546666666666667, 97.765000000000001, 98.140000000000001, 99.590000000000003, 99.359999999999999, 97.599999999999994, 98.356250000000003, 98.350828421111572, 98.350828421111572, 98.350828421111572, 98.350828421111572, 92.659999999999997, 99.680000000000007, 99.780000000000001, 99.989999999999995, 100, 99.64500000000001, 99.769999999999996, 99.700000000000003, 99.400000000000006, 99.275999999999996, 99.739999999999995, 98.260000000000005, 95.120000000000005, 95.120036917089735, 95.120036917089735, 95.212000000000003, 67.989999999999995, 92.694999999999993, 93.742999999999995, 95.811999999999998, 96.430000000000007, 95.859999999999999, 75.549999999999997, 77.260801204822471, 91.180000000000007, 76.524000000000001, 61.600000000000001, 60.691666666666663, 77.260801204822471, 77.260801204822471, 77.260801204822471, 96.090000000000003, 98.504999999999995, 77.260801204822471, 97.299999999999997, 82.180000000000007, 98.969999999999999, 77.260801204822471, 77.260801204822471, 77.260801204822471, 99.316000000000003, 77.260801204822471, 77.260801204822471, 77.260801204822471, 99.5, 77.260801204822471, 77.260801204822471, 77.260801204822471, 77.260801204822471, 77.260801204822471, 77.260801204822471, 77.260801204822471, 77.260801204822471, 77.260801204822471, 98.135999999999996, 55.7425, 55.380000000000003, 31.449999999999999, 59.630000000000003, 54.602857142857147, 83.294999999999987, 77.200000000000003, 54.100000000000001, 84.116, 77.402140676866082, 92.549999999999997, 92.79785714285714, 91.592000000000013, 94.719999999999999, 94.469999999999999, 86.939999999999998, 96.280000000000001, 92.299999999999997, 90.573333333333338, 72.049999999999997, 76.394000000000005, 54.956000000000003, 61.579999999999998, 30.02, 31.100000000000001, 27.081818181818182, 79.129999999999995, 55.636214507769843, 53.784999999999997, 55.636214507769843, 92.879999999999995, 53.268000000000001, 69.495999999999995, 42.831000000000003, 67.799999999999997, 74.97571428571429, 73.209999999999994, 71.5, 66.030000000000001, 51.489999999999995, 40.979999999999997, 66.843333333333334, 71.290000000000006, 30.994285714285713, 61.310000000000002, 83.010000000000005, 83.579999999999998, 49.924999999999997, 62.407456799085516, 25.309999999999999, 65.849999999999994, 31.533333333333335, 62.407456799085516, 52.556666666666665, 58.75, 33.229999999999997, 36.75, 78.776666666666671, 44.547999999999995, 67.042000000000002, 85.324999999999989, 85.131, 75.968000000000004, 41.950000000000003, 82.280000000000001, 45.579999999999998, 89.25, 94.370000000000005, 83.099999999999994, 62.407456799085516, 62.407456799085516, 49.200000000000003, 85.329999999999998, 62.407456799085516, 79.840000000000003, 93.950000000000003, 62.407456799085516, 90.379999999999995, 93.069999999999993, 96.700000000000003, 93.370000000000005, 95.140000000000001, 98.069999999999993, 92.140000000000001, 91.849999999999994, 78.260000000000005, 86.268574788530557, 91.700000000000003, 89.540000000000006, 53.890000000000001, 84.760000000000005, 84.489999999999995, 93.870000000000005, 80.305000000000007, 97.409999999999997, 91.969999999999999, 94.090000000000003, 86.268574788530557, 86.268574788530557, 85.11999999999999, 94.680000000000007, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 96.819999999999993, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557, 86.268574788530557],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [98.849999999999994, 93.310000000000002, 93.909999999999997, 98.680000000000007, 97.780000000000001, 94.480000000000004, 99.799999999999997, 99.860169428751405, 99.860169428751405, 99.819999999999993, 99.900000000000006, 99.890000000000001, 98.599999999999994, 99.099999999999994, 98.349999999999994, 99.450000000000003, 98.762577294041748, 69.299999999999997, 99.969999999999999, 96.849999999999994, 97.959999999999994, 99.590000000000003, 98.140000000000001, 99.359999999999999, 97.599999999999994, 98.439999999999998, 98.433990939482328, 98.433990939482328, 98.433990939482328, 98.433990939482328, 94.109999999999999, 99.702727272727273, 99.781999999999996, 99.989999999999995, 100, 99.670000000000002, 99.780000000000001, 99.700000000000003, 99.400000000000006, 99.311999999999998, 99.739999999999995, 98.352000000000004, 95.323000000000008, 95.323129477700618, 95.323129477700618, 95.640000000000001, 69.299999999999997, 92.810000000000002, 93.965999999999994, 96.00800000000001, 95.52000000000001, 96.189999999999998, 75.549999999999997, 77.172652822993967, 91.381666666666675, 76.908000000000001, 61.600000000000001, 58.289999999999999, 77.172652822993967, 77.172652822993967, 77.172652822993967, 96.090000000000003, 98.53125, 77.172652822993967, 97.299999999999997, 82.810000000000002, 98.969999999999999, 77.172652822993967, 77.172652822993967, 77.172652822993967, 99.390000000000001, 77.172652822993967, 77.172652822993967, 77.172652822993967, 99.5, 77.172652822993967, 77.172652822993967, 77.172652822993967, 77.172652822993967, 77.172652822993967, 77.172652822993967, 77.172652822993967, 77.172652822993967, 77.172652822993967, 98.218999999999994, 58.770000000000003, 54.740000000000002, 31.449999999999999, 59.630000000000003, 54.96142857142857, 83.462499999999991, 77.200000000000003, 54.100000000000001, 84.661999999999992, 77.821177932113358, 95.900000000000006, 93.351428571428571, 92.004000000000005, 95.030000000000001, 94.990000000000009, 88.159999999999997, 96.409999999999997, 92.299999999999997, 91.858888888888899, 72.960000000000008, 77.021000000000001, 55.674000000000007, 67.079999999999998, 30.289999999999999, 30.620000000000001, 26.865454545454543, 79.650000000000006, 56.940396466758109, 56.546666666666667, 56.940396466758109, 93.099999999999994, 54.362000000000002, 72.257999999999996, 44.108000000000004, 72.949999999999989, 75.914285714285711, 71.704999999999998, 72.388000000000005, 66.030000000000001, 52.399999999999999, 40.979999999999997, 69.206666666666663, 72.012500000000003, 31.895714285714284, 62.270000000000003, 83.459000000000003, 83.579999999999998, 51.810000000000002, 63.564454453446089, 26.982499999999998, 67.087499999999991, 63.564454453446089, 32.241666666666667, 54.795000000000002, 60.409999999999997, 32.963333333333331, 79.310000000000002, 36.831249999999997, 45.083999999999996, 68.23299999999999, 88.269999999999996, 85.693999999999988, 76.135999999999996, 41.950000000000003, 82.280000000000001, 45.579999999999998, 89.25, 94.370000000000005, 83.717999999999989, 63.564454453446089, 63.564454453446089, 49.200000000000003, 85.329999999999998, 63.564454453446089, 84.990000000000009, 94.174999999999997, 63.564454453446089, 91.409999999999997, 93.519999999999996, 96.700000000000003, 93.579999999999998, 94.769999999999996, 98.340000000000003, 92.990000000000009, 91.590000000000003, 78.260000000000005, 86.709220632611476, 92.230000000000004, 90.109999999999999, 55.189999999999998, 85.120000000000005, 85.489999999999995, 80.766000000000005, 94.034999999999997, 97.409999999999997, 94.254999999999995, 92.030000000000001, 86.709220632611476, 86.709220632611476, 85.25, 93.775000000000006, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 96.936999999999998, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476, 86.709220632611476],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [98.912499999999994, 93.472999999999999, 93.909999999999997, 98.748000000000005, 97.890000000000001, 94.710000000000008, 99.799999999999997, 99.859976481798924, 99.859976481798924, 99.820999999999998, 99.899000000000001, 99.888000000000005, 98.629999999999995, 99.099999999999994, 98.356999999999999, 99.450000000000003, 98.77831185317639, 69.299999999999997, 99.969999999999999, 97.25, 98.135999999999996, 99.590000000000003, 97.564999999999998, 99.359999999999999, 97.599999999999994, 98.494, 98.411684196875314, 98.411684196875314, 98.411684196875314, 98.411684196875314, 94.920000000000002, 99.725454545454554, 99.784000000000006, 99.989999999999995, 100, 99.695000000000007, 99.780000000000001, 99.700000000000003, 99.400000000000006, 99.347999999999999, 99.739999999999995, 98.444000000000003, 95.52600000000001, 95.52612324165078, 95.52612324165078, 95.820000000000007, 69.299999999999997, 93.579999999999998, 94.188999999999993, 96.204000000000008, 94.609999999999999, 96.370000000000005, 75.549999999999997, 77.663118112229782, 91.583333333333343, 77.292000000000002, 61.600000000000001, 64.882499999999993, 77.663118112229782, 77.663118112229782, 77.663118112229782, 96.25, 98.557500000000005, 77.663118112229782, 97.299999999999997, 83.439999999999998, 98.983000000000004, 77.663118112229782, 77.663118112229782, 77.663118112229782, 99.391000000000005, 77.663118112229782, 77.663118112229782, 77.663118112229782, 77.663118112229782, 99.5, 77.663118112229782, 77.663118112229782, 77.663118112229782, 77.663118112229782, 77.663118112229782, 77.663118112229782, 77.663118112229782, 77.663118112229782, 98.301999999999992, 57.859999999999999, 56.759999999999998, 32.031999999999996, 60.782000000000004, 55.32, 83.629999999999995, 77.200000000000003, 54.100000000000001, 85.207999999999998, 78.169113003745707, 97.890000000000001, 93.905000000000001, 92.415999999999997, 95.670000000000002, 89.379999999999995, 95.510000000000005, 96.680000000000007, 92.299999999999997, 93.144444444444446, 73.870000000000005, 77.647999999999996, 56.392000000000003, 69.430000000000007, 30.559999999999999, 31.232500000000002, 26.649090909090908, 80.219999999999999, 57.72680238790339, 59.308333333333337, 57.72680238790339, 93.730000000000004, 55.456000000000003, 75.019999999999996, 45.385000000000005, 78.099999999999994, 76.852857142857147, 70.200000000000003, 73.275999999999996, 66.030000000000001, 53.310000000000002, 40.979999999999997, 71.569999999999993, 72.734999999999999, 32.797142857142859, 63.230000000000004, 83.908000000000001, 85.283333333333331, 47.670000000000002, 64.567071010642906, 28.655000000000001, 68.324999999999989, 64.567071010642906, 32.950000000000003, 57.033333333333331, 61.244999999999997, 32.696666666666665, 79.439999999999998, 36.912500000000001, 45.619999999999997, 69.423999999999992, 88.667999999999992, 86.256999999999991, 41.950000000000003, 76.304000000000002, 82.280000000000001, 45.579999999999998, 94.370000000000005, 91.769999999999996, 84.335999999999999, 64.567071010642906, 64.567071010642906, 49.200000000000003, 85.329999999999998, 64.567071010642906, 90.140000000000001, 94.400000000000006, 64.567071010642906, 91.340000000000003, 94.230000000000004, 96.484999999999999, 93.783333333333331, 95.22999999999999, 98.400000000000006, 93.840000000000003, 92.060000000000002, 78.260000000000005, 87.299584327576113, 94.459999999999994, 90.159999999999997, 56.489999999999995, 85.359999999999999, 86.129999999999995, 81.227000000000004, 94.200000000000003, 97.472999999999999, 94.420000000000002, 92.090000000000003, 87.299584327576113, 87.299584327576113, 85.379999999999995, 92.870000000000005, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 97.053999999999988, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113, 87.299584327576113],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [98.974999999999994, 93.635999999999996, 93.909999999999997, 98.816000000000003, 98.079999999999998, 94.939999999999998, 99.799999999999997, 99.859738615305503, 99.859738615305503, 99.821999999999989, 99.89800000000001, 99.885999999999996, 98.659999999999997, 99.099999999999994, 98.36399999999999, 99.450000000000003, 98.794070611593071, 69.299999999999997, 99.973333333333329, 97.25, 98.311999999999998, 99.590000000000003, 96.989999999999995, 99.359999999999999, 97.599999999999994, 98.548000000000002, 98.392678628132842, 98.392678628132842, 98.392678628132842, 98.392678628132842, 95.260000000000005, 99.74818181818182, 99.786000000000001, 99.989999999999995, 100, 99.719999999999999, 99.790000000000006, 99.700000000000003, 99.400000000000006, 99.384, 99.739999999999995, 98.536000000000001, 95.728999999999999, 95.729117613395033, 95.729117613395033, 96, 69.299999999999997, 94.350000000000009, 94.411999999999992, 96.400000000000006, 93.700000000000003, 96.549999999999997, 75.549999999999997, 78.057773821114523, 91.784999999999997, 77.676000000000002, 61.600000000000001, 71.474999999999994, 78.057773821114523, 78.057773821114523, 78.057773821114523, 96.409999999999997, 98.583749999999995, 97.299999999999997, 78.057773821114523, 84.070000000000007, 98.995999999999995, 78.057773821114523, 78.057773821114523, 78.057773821114523, 99.391999999999996, 78.057773821114523, 78.057773821114523, 78.057773821114523, 78.057773821114523, 99.5, 78.057773821114523, 78.057773821114523, 78.057773821114523, 78.057773821114523, 78.057773821114523, 78.057773821114523, 78.057773821114523, 78.057773821114523, 98.384999999999991, 61.020000000000003, 55.590000000000003, 32.613999999999997, 61.934000000000005, 57.567999999999998, 84.629999999999995, 79.700000000000003, 54.100000000000001, 85.753999999999991, 79.124159767296064, 97.948888888888888, 94.458571428571432, 92.828000000000003, 96.049999999999997, 90.600000000000009, 95.590000000000003, 97.480000000000004, 92.299999999999997, 94.430000000000007, 72.439999999999998, 78.275000000000006, 57.109999999999999, 72.510000000000005, 30.559999999999999, 31.844999999999999, 26.432727272727274, 79.629999999999995, 58.542184892157856, 62.07, 58.542184892157856, 93.935000000000002, 56.549999999999997, 75.525000000000006, 46.661999999999999, 78.030000000000001, 77.791428571428568, 71.254999999999995, 74.164000000000001, 66.030000000000001, 54.219999999999999, 72.421666666666667, 42.444999999999993, 73.457499999999996, 33.698571428571427, 64.189999999999998, 84.356999999999999, 86.986666666666665, 43.530000000000001, 65.173677116321159, 30.327500000000001, 65.173677116321159, 69.5625, 32.950000000000003, 59.271666666666661, 62.079999999999998, 32.43, 79.570000000000007, 36.993749999999999, 46.155999999999999, 70.614999999999995, 89.066000000000003, 86.819999999999993, 41.950000000000003, 76.471999999999994, 82.280000000000001, 45.579999999999998, 94.370000000000005, 91.489999999999995, 84.953999999999994, 65.173677116321159, 65.173677116321159, 49.200000000000003, 85.816666666666663, 65.173677116321159, 90.140000000000001, 94.625, 65.173677116321159, 91.480000000000004, 93.959999999999994, 96.269999999999996, 93.986666666666665, 95.689999999999998, 98.359999999999999, 93.775000000000006, 93.290000000000006, 77.040000000000006, 87.478504060091637, 93.793333333333322, 57.789999999999999, 90.859999999999999, 85.459999999999994, 86.769999999999996, 81.688000000000002, 95.060000000000002, 97.536000000000001, 94.585000000000008, 92.150000000000006, 87.478504060091637, 87.478504060091637, 85.510000000000005, 93.106666666666669, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 97.170999999999992, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637, 87.478504060091637],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [99.037499999999994, 93.799000000000007, 93.909999999999997, 98.884, 98.090000000000003, 95.170000000000002, 99.799999999999997, 99.85949067122985, 99.85949067122985, 99.822999999999993, 99.897000000000006, 99.884, 98.689999999999998, 99.099999999999994, 98.370999999999995, 99.450000000000003, 98.809755155793241, 69.299999999999997, 99.976666666666659, 97.25, 98.488, 99.590000000000003, 96.989999999999995, 99.359999999999999, 97.599999999999994, 98.602000000000004, 98.470372643577178, 98.470372643577178, 98.470372643577178, 98.470372643577178, 95.439999999999998, 99.7709090909091, 99.787999999999997, 99.980000000000004, 100, 99.790000000000006, 99.745000000000005, 99.700000000000003, 99.400000000000006, 99.419999999999987, 99.739999999999995, 98.628, 95.932000000000002, 95.932112337818424, 95.932112337818424, 96.180000000000007, 69.299999999999997, 95.120000000000005, 94.634999999999991, 97.290000000000006, 93.284999999999997, 96.719999999999999, 75.549999999999997, 78.561866679107823, 91.986666666666665, 78.060000000000002, 61.600000000000001, 78.067499999999995, 78.561866679107823, 78.561866679107823, 78.561866679107823, 96.569999999999993, 98.609999999999999, 97.299999999999997, 78.561866679107823, 84.700000000000003, 99.009, 78.561866679107823, 78.561866679107823, 78.561866679107823, 99.393000000000001, 78.561866679107823, 78.561866679107823, 78.561866679107823, 78.561866679107823, 98.045000000000002, 78.561866679107823, 78.561866679107823, 78.561866679107823, 78.561866679107823, 78.561866679107823, 78.561866679107823, 78.561866679107823, 78.561866679107823, 98.468000000000004, 61.090000000000003, 56.979999999999997, 33.195999999999998, 63.086000000000006, 59.816000000000003, 84.709999999999994, 82.200000000000003, 54.100000000000001, 86.299999999999997, 98.007777777777775, 80.121635169959717, 95.012142857142862, 93.240000000000009, 96.209999999999994, 91.820000000000007, 95.640000000000001, 97.75, 92.299999999999997, 94.655000000000001, 72.122500000000002, 78.902000000000001, 57.828000000000003, 75.590000000000003, 30.559999999999999, 32.457500000000003, 26.216363636363635, 79.040000000000006, 59.292867733566965, 62.681249999999999, 59.292867733566965, 94.140000000000001, 57.643999999999998, 76.030000000000001, 47.939, 77.959999999999994, 78.730000000000004, 72.310000000000002, 75.051999999999992, 66.030000000000001, 55.129999999999995, 73.273333333333326, 43.909999999999997, 74.180000000000007, 34.600000000000001, 65.150000000000006, 84.805999999999997, 88.689999999999998, 45.622500000000002, 65.991969216805927, 32, 70.799999999999997, 65.991969216805927, 32.950000000000003, 61.509999999999998, 62.914999999999999, 32.43, 79.700000000000003, 37.075000000000003, 46.692, 71.805999999999997, 89.463999999999999, 86.819999999999993, 46.365000000000002, 76.640000000000001, 82.280000000000001, 45.579999999999998, 94.370000000000005, 92.469999999999999, 85.572000000000003, 65.991969216805927, 65.991969216805927, 49.200000000000003, 86.303333333333342, 65.991969216805927, 90.140000000000001, 94.850000000000009, 65.991969216805927, 91.730000000000004, 94.560000000000002, 96.569999999999993, 94.189999999999998, 96.150000000000006, 98.439999999999998, 93.709999999999994, 94.219999999999999, 81.290000000000006, 88.344084916615827, 93.126666666666665, 59.089999999999996, 91.760000000000005, 87.200000000000003, 87.370000000000005, 95.030000000000001, 82.149000000000001, 97.599000000000004, 94.75, 92.209999999999994, 88.344084916615827, 88.344084916615827, 85.640000000000001, 93.343333333333334, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 97.287999999999997, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827, 88.344084916615827],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [99.099999999999994, 93.962000000000003, 93.909999999999997, 98.951999999999998, 98.140000000000001, 95.400000000000006, 99.799999999999997, 99.859282519211519, 99.859282519211519, 99.823999999999998, 99.896000000000001, 99.882000000000005, 98.719999999999999, 99.099999999999994, 98.378, 99.450000000000003, 98.82530396844372, 69.299999999999997, 99.980000000000004, 97.25, 98.664000000000001, 99.513333333333335, 96.989999999999995, 99.394285714285715, 97.599999999999994, 98.656000000000006, 98.538650665895346, 98.538650665895346, 98.538650665895346, 98.538650665895346, 95.599999999999994, 99.793636363636367, 99.789999999999992, 99.980000000000004, 100, 99.790000000000006, 99.77000000000001, 99.700000000000003, 99.400000000000006, 99.455999999999989, 98.719999999999999, 99.739999999999995, 96.135000000000005, 96.135104782467309, 96.135104782467309, 96.359999999999999, 69.299999999999997, 95.219999999999999, 94.858000000000004, 98.180000000000007, 92.870000000000005, 96.829999999999998, 75.549999999999997, 79.377755824252205, 92.188333333333333, 80.530000000000001, 61.600000000000001, 84.659999999999997, 79.377755824252205, 79.377755824252205, 79.377755824252205, 98.170000000000002, 96.730000000000004, 97.299999999999997, 79.377755824252205, 85.328571428571436, 99.021999999999991, 79.377755824252205, 79.377755824252205, 79.377755824252205, 99.394000000000005, 79.377755824252205, 79.377755824252205, 79.377755824252205, 96.590000000000003, 79.377755824252205, 79.377755824252205, 79.377755824252205, 79.377755824252205, 79.377755824252205, 79.377755824252205, 79.377755824252205, 79.377755824252205, 79.377755824252205, 98.551000000000002, 65.140000000000001, 57.696666666666665, 33.777999999999999, 64.238, 62.064, 85.125, 82.75, 54.100000000000001, 86.299999999999997, 98.066666666666663, 95.565714285714293, 80.430630109212629, 93.652000000000001, 96.480000000000004, 93.040000000000006, 95.689999999999998, 97.75, 92.299999999999997, 94.879999999999995, 71.805000000000007, 58.546000000000006, 79.528999999999996, 75.590000000000003, 30.559999999999999, 33.07, 26, 79.040000000000006, 59.493925330458126, 63.292499999999997, 59.493925330458126, 94.370000000000005, 58.738, 76.534999999999997, 49.216000000000001, 77.890000000000001, 78.730000000000004, 73.365000000000009, 75.939999999999998, 66.030000000000001, 56.039999999999999, 74.125, 53.105999999999995, 74.902500000000003, 35.787500000000001, 62.140000000000001, 85.254999999999995, 47.715000000000003, 88.689999999999998, 66.928539267889022, 33.905000000000001, 71.405000000000001, 32.950000000000003, 66.928539267889022, 63.799999999999997, 63.75, 32.43, 79.829999999999998, 47.227999999999994, 37.15625, 72.997, 89.861999999999995, 50.780000000000001, 86.819999999999993, 76.640000000000001, 82.280000000000001, 45.579999999999998, 94.370000000000005, 92.709999999999994, 86.189999999999998, 66.928539267889022, 66.928539267889022, 49.200000000000003, 86.790000000000006, 66.928539267889022, 90.140000000000001, 95.075000000000003, 66.928539267889022, 92.049999999999997, 94.469999999999999, 96.870000000000005, 94.25, 96.609999999999999, 98.519999999999996, 94.159999999999997, 94.459999999999994, 81.170000000000002, 88.642189076653182, 92.459999999999994, 60.390000000000001, 91.989999999999995, 87.909999999999997, 87.969999999999999, 95.549999999999997, 82.609999999999999, 97.662000000000006, 94.914999999999992, 92.269999999999996, 88.642189076653182, 88.642189076653182, 85.640000000000001, 93.579999999999998, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 97.405000000000001, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182, 88.642189076653182],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [99.162499999999994, 94.125, 93.909999999999997, 99.02000000000001, 98.25, 95.629999999999995, 99.799999999999997, 99.859106626811368, 99.859106626811368, 99.824999999999989, 99.89500000000001, 99.879999999999995, 98.75, 99.099999999999994, 98.384999999999991, 99.450000000000003, 98.840993149391565, 69.299999999999997, 99.983333333333334, 97.25, 98.840000000000003, 99.436666666666667, 96.989999999999995, 99.428571428571431, 97.599999999999994, 98.710000000000008, 98.606202586642993, 98.606202586642993, 98.606202586642993, 98.606202586642993, 96.170000000000002, 99.816363636363647, 99.792000000000002, 99.989999999999995, 100, 99.790000000000006, 99.795000000000002, 99.700000000000003, 99.400000000000006, 99.49199999999999, 98.812000000000012, 99.739999999999995, 96.338000000000008, 96.338094930110543, 96.338094930110543, 96.540000000000006, 69.299999999999997, 95.379999999999995, 95.081000000000003, 97.705000000000013, 93.170000000000002, 97.049999999999997, 75.549999999999997, 79.408050073313532, 92.390000000000001, 80.530000000000001, 61.600000000000001, 84.659999999999997, 79.408050073313532, 79.408050073313532, 79.408050073313532, 97.730000000000004, 96.890000000000001, 97.299999999999997, 79.408050073313532, 85.957142857142856, 99.034999999999997, 79.408050073313532, 79.408050073313532, 79.408050073313532, 99.39500000000001, 79.408050073313532, 79.408050073313532, 79.408050073313532, 96.590000000000003, 79.408050073313532, 79.408050073313532, 79.408050073313532, 79.408050073313532, 79.408050073313532, 79.408050073313532, 79.408050073313532, 79.408050073313532, 79.408050073313532, 98.634, 72.760000000000005, 58.413333333333334, 34.359999999999999, 65.390000000000001, 64.311999999999998, 85.540000000000006, 83.299999999999997, 54.100000000000001, 86.299999999999997, 98.12555555555555, 96.119285714285709, 80.694230785115849, 94.063999999999993, 94.310000000000002, 96.719999999999999, 95.865000000000009, 97.75, 92.299999999999997, 95.105000000000004, 71.487499999999997, 59.264000000000003, 80.155999999999992, 75.590000000000003, 30.559999999999999, 33.869999999999997, 22.309999999999999, 79.040000000000006, 59.437344773480291, 63.903749999999995, 59.437344773480291, 90.710000000000008, 59.832000000000001, 77.040000000000006, 50.493000000000002, 77.890000000000001, 78.730000000000004, 74.420000000000002, 76.828000000000003, 66.030000000000001, 58.349999999999994, 74.976666666666674, 62.302, 75.625, 36.975000000000001, 62.140000000000001, 85.704000000000008, 49.807499999999997, 88.689999999999998, 68.037782135164818, 35.810000000000002, 72.009999999999991, 32.950000000000003, 66.090000000000003, 68.037782135164818, 64.447500000000005, 32.43, 79.960000000000008, 47.763999999999996, 37.237499999999997, 74.187999999999988, 90.259999999999991, 50.780000000000001, 86.819999999999993, 76.640000000000001, 82.280000000000001, 45.579999999999998, 94.370000000000005, 93.159999999999997, 86.807999999999993, 68.037782135164818, 68.037782135164818, 49.200000000000003, 86.790000000000006, 68.037782135164818, 90.140000000000001, 95.299999999999997, 68.037782135164818, 92.810000000000002, 94.859999999999999, 96.635000000000005, 94.650000000000006, 97.129999999999995, 98.560000000000002, 94.170000000000002, 94.349999999999994, 81.050000000000011, 88.919410318049771, 92.738, 61.689999999999998, 93.780000000000001, 88.989999999999995, 94.650000000000006, 82.609999999999999, 88.140000000000001, 97.724999999999994, 95.079999999999998, 92.329999999999998, 88.919410318049771, 88.919410318049771, 85.640000000000001, 93.816666666666663, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 97.521999999999991, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771, 88.919410318049771],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [99.224999999999994, 94.287999999999997, 93.909999999999997, 99.088000000000008, 98.344999999999999, 95.859999999999999, 99.799999999999997, 99.85894607077654, 99.85894607077654, 99.825999999999993, 99.894000000000005, 99.878, 98.780000000000001, 99.099999999999994, 98.391999999999996, 99.450000000000003, 98.856416795066238, 69.299999999999997, 99.986666666666665, 97.25, 99.053333333333342, 99.359999999999999, 96.989999999999995, 99.462857142857146, 97.599999999999994, 98.763999999999996, 98.688895676778657, 98.688895676778657, 98.688895676778657, 98.688895676778657, 96.150000000000006, 99.839090909090913, 99.793999999999997, 99.989999999999995, 100, 99.790000000000006, 99.820000000000007, 99.700000000000003, 99.400000000000006, 99.527999999999992, 98.904000000000011, 99.739999999999995, 96.541000000000011, 96.541052452659301, 96.541052452659301, 96.654000000000011, 69.299999999999997, 95.519999999999996, 95.304000000000002, 97.230000000000004, 93.469999999999999, 97.200000000000003, 80.056666666666658, 81.480263494754794, 91.900000000000006, 80.530000000000001, 61.600000000000001, 84.659999999999997, 81.480263494754794, 81.480263494754794, 81.480263494754794, 97.756, 97.049999999999997, 97.299999999999997, 81.480263494754794, 86.585714285714289, 99.048000000000002, 81.480263494754794, 81.480263494754794, 81.480263494754794, 99.396000000000001, 81.480263494754794, 81.480263494754794, 81.480263494754794, 96.590000000000003, 81.480263494754794, 81.480263494754794, 81.480263494754794, 81.480263494754794, 81.480263494754794, 81.480263494754794, 81.480263494754794, 81.480263494754794, 81.480263494754794, 98.716999999999999, 72.890000000000001, 59.130000000000003, 34.942, 66.542000000000002, 66.560000000000002, 85.540000000000006, 85.599999999999994, 54.100000000000001, 86.299999999999997, 98.184444444444452, 96.67285714285714, 81.411288184442455, 94.475999999999999, 95.579999999999998, 96.920000000000002, 96.040000000000006, 97.75, 92.299999999999997, 95.329999999999998, 71.170000000000002, 59.981999999999999, 80.783000000000001, 75.590000000000003, 30.559999999999999, 34.670000000000002, 22.309999999999999, 79.040000000000006, 59.674739339009179, 64.515000000000001, 59.674739339009179, 87.049999999999997, 60.926000000000002, 77.040000000000006, 51.770000000000003, 77.890000000000001, 78.730000000000004, 75.474999999999994, 66.030000000000001, 77.715999999999994, 60.659999999999997, 75.828333333333333, 71.49799999999999, 76.347499999999997, 38.162500000000001, 62.140000000000001, 86.153000000000006, 51.899999999999999, 69.148080147370564, 88.689999999999998, 37.714999999999996, 72.614999999999995, 32.950000000000003, 68.379999999999995, 69.148080147370564, 65.14500000000001, 32.43, 80.090000000000003, 48.299999999999997, 37.318750000000001, 75.378999999999991, 90.658000000000001, 50.780000000000001, 86.819999999999993, 76.640000000000001, 82.280000000000001, 45.579999999999998, 94.370000000000005, 92.957999999999998, 87.426000000000002, 69.148080147370564, 69.148080147370564, 49.200000000000003, 86.790000000000006, 69.148080147370564, 90.140000000000001, 95.525000000000006, 69.148080147370564, 93.079999999999998, 94.969999999999999, 96.400000000000006, 94.870000000000005, 97.129999999999995, 98.620000000000005, 94.150000000000006, 92.829999999999998, 80.930000000000007, 93.015999999999991, 88.684612753113214, 61.689999999999998, 93.780000000000001, 88.099999999999994, 94.335000000000008, 82.609999999999999, 88.480000000000004, 97.787999999999997, 95.245000000000005, 92.390000000000001, 88.684612753113214, 88.684612753113214, 85.640000000000001, 94.053333333333342, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 97.638999999999996, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214, 88.684612753113214],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [99.287499999999994, 94.450999999999993, 93.909999999999997, 99.156000000000006, 98.439999999999998, 96.090000000000003, 99.799999999999997, 99.858726998093104, 99.858726998093104, 99.826999999999998, 99.893000000000001, 99.876000000000005, 98.810000000000002, 99.099999999999994, 98.399000000000001, 99.450000000000003, 98.872102125168638, 69.299999999999997, 99.989999999999995, 97.25, 99.266666666666666, 99.359999999999999, 96.989999999999995, 99.497142857142848, 97.599999999999994, 98.817999999999998, 98.785090377617365, 98.785090377617365, 98.785090377617365, 98.785090377617365, 96.444999999999993, 99.861818181818194, 99.795999999999992, 99.989999999999995, 100, 99.795000000000002, 99.844999999999999, 99.700000000000003, 99.400000000000006, 99.563999999999993, 98.996000000000009, 99.756666666666661, 96.744, 96.744011267911532, 96.744011267911532, 96.768000000000001, 69.299999999999997, 95.659999999999997, 95.527000000000001, 96.754999999999995, 93.769999999999996, 97.340000000000003, 84.563333333333333, 83.597282648624486, 91.709999999999994, 80.530000000000001, 61.600000000000001, 84.659999999999997, 83.597282648624486, 83.597282648624486, 83.597282648624486, 97.781999999999996, 97.209999999999994, 87.214285714285708, 97.299999999999997, 83.597282648624486, 99.060999999999993, 83.597282648624486, 83.597282648624486, 83.597282648624486, 99.397000000000006, 83.597282648624486, 83.597282648624486, 83.597282648624486, 96.590000000000003, 83.597282648624486, 83.597282648624486, 83.597282648624486, 83.597282648624486, 83.597282648624486, 83.597282648624486, 83.597282648624486, 83.597282648624486, 83.597282648624486, 98.799999999999997, 73.909999999999997, 57.009999999999998, 35.524000000000001, 67.694000000000003, 66.560000000000002, 85.540000000000006, 85.599999999999994, 54.100000000000001, 86.299999999999997, 98.243333333333339, 97.226428571428571, 81.393769080781937, 94.888000000000005, 95.650000000000006, 97.219999999999999, 96.060000000000002, 97.75, 92.299999999999997, 96.083333333333329, 71.170000000000002, 60.700000000000003, 81.409999999999997, 75.590000000000003, 30.559999999999999, 35.469999999999999, 22.309999999999999, 79.040000000000006, 59.910810210482893, 65.126249999999999, 59.910810210482893, 91.034999999999997, 62.020000000000003, 77.040000000000006, 51.770000000000003, 77.890000000000001, 78.730000000000004, 76.530000000000001, 66.030000000000001, 78.603999999999999, 60.366666666666667, 76.680000000000007, 80.694000000000003, 77.069999999999993, 39.350000000000001, 62.140000000000001, 86.602000000000004, 51.899999999999999, 69.987479172529703, 88.689999999999998, 39.619999999999997, 73.219999999999999, 32.950000000000003, 68.379999999999995, 69.987479172529703, 65.842500000000001, 32.43, 80.219999999999999, 48.299999999999997, 37.399999999999999, 76.569999999999993, 91.055999999999997, 50.780000000000001, 86.819999999999993, 82.280000000000001, 76.640000000000001, 45.579999999999998, 94.370000000000005, 92.756, 88.043999999999997, 69.987479172529703, 69.987479172529703, 49.200000000000003, 86.790000000000006, 69.987479172529703, 90.140000000000001, 95.75, 69.987479172529703, 93.230000000000004, 95.379999999999995, 96.400000000000006, 95.090000000000003, 97.129999999999995, 98.700000000000003, 94.409999999999997, 93.096666666666664, 80.810000000000002, 93.293999999999997, 88.737904092492158, 61.689999999999998, 93.780000000000001, 87.209999999999994, 94.019999999999996, 82.609999999999999, 89.010000000000005, 97.850999999999999, 95.409999999999997, 92.392499999999998, 88.737904092492158, 88.737904092492158, 85.640000000000001, 94.290000000000006, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 97.756, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158, 88.737904092492158],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [99.349999999999994, 94.614000000000004, 93.909999999999997, 99.224000000000004, 98.515000000000001, 96.320000000000007, 99.799999999999997, 99.858410317261871, 99.858410317261871, 99.828000000000003, 99.891999999999996, 99.874000000000009, 98.840000000000003, 99.099999999999994, 98.406000000000006, 99.450000000000003, 98.887972126493153, 69.299999999999997, 99.993333333333339, 97.25, 99.480000000000004, 99.359999999999999, 96.989999999999995, 99.531428571428563, 97.599999999999994, 98.872, 98.881529198050472, 98.881529198050472, 98.881529198050472, 98.881529198050472, 96.739999999999995, 99.88454545454546, 99.798000000000002, 100, 100, 99.799999999999997, 99.700000000000003, 99.870000000000005, 99.400000000000006, 99.599999999999994, 99.088000000000008, 99.773333333333341, 96.947000000000003, 96.946968986457847, 96.946968986457847, 96.882000000000005, 69.299999999999997, 95.829999999999998, 95.75, 96.280000000000001, 93.879999999999995, 97.480000000000004, 89.069999999999993, 85.839724947118924, 92.25, 80.530000000000001, 61.600000000000001, 84.659999999999997, 85.839724947118924, 85.839724947118924, 85.839724947118924, 97.808000000000007, 97.336666666666659, 87.842857142857142, 97.299999999999997, 85.839724947118924, 99.073999999999998, 85.839724947118924, 85.839724947118924, 85.839724947118924, 99.39800000000001, 85.839724947118924, 85.839724947118924, 85.839724947118924, 96.590000000000003, 85.839724947118924, 85.839724947118924, 85.839724947118924, 85.839724947118924, 85.839724947118924, 85.839724947118924, 85.839724947118924, 85.839724947118924, 85.839724947118924, 98.799999999999997, 74.680000000000007, 58, 36.106000000000002, 68.846000000000004, 66.560000000000002, 85.540000000000006, 85.599999999999994, 54.100000000000001, 86.299999999999997, 98.302222222222227, 97.780000000000001, 81.367720803541928, 95.299999999999997, 97.379999999999995, 95.650000000000006, 96.259999999999991, 97.75, 92.299999999999997, 96.836666666666673, 71.170000000000002, 60.700000000000003, 81.409999999999997, 75.590000000000003, 30.559999999999999, 33.115000000000002, 22.309999999999999, 79.040000000000006, 59.52602540145007, 65.737499999999997, 59.52602540145007, 95.019999999999996, 62.020000000000003, 77.040000000000006, 51.770000000000003, 77.890000000000001, 78.730000000000004, 76.530000000000001, 66.030000000000001, 79.49199999999999, 60.073333333333331, 76.680000000000007, 89.890000000000001, 77.650000000000006, 29.66, 62.140000000000001, 87.051000000000002, 51.899999999999999, 70.254570895390501, 88.689999999999998, 41.523333333333333, 74.11333333333333, 32.950000000000003, 68.379999999999995, 70.254570895390501, 66.540000000000006, 32.43, 80.349999999999994, 48.299999999999997, 37.445, 76.569999999999993, 91.453999999999994, 50.780000000000001, 86.819999999999993, 82.280000000000001, 76.640000000000001, 45.579999999999998, 94.370000000000005, 92.554000000000002, 88.662000000000006, 70.254570895390501, 70.254570895390501, 49.200000000000003, 86.790000000000006, 70.254570895390501, 90.140000000000001, 95.975000000000009, 70.254570895390501, 93.230000000000004, 95.314999999999998, 96.400000000000006, 95.25, 97.129999999999995, 98.769999999999996, 94.454999999999998, 93.36333333333333, 80.810000000000002, 93.571999999999989, 88.876769230631808, 61.689999999999998, 93.780000000000001, 88.510000000000005, 93.209999999999994, 82.609999999999999, 89.140000000000001, 97.914000000000001, 95.739999999999995, 92.39500000000001, 88.876769230631808, 88.876769230631808, 85.640000000000001, 94.526666666666671, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 97.87299999999999, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808, 88.876769230631808],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [99.349999999999994, 94.777000000000001, 93.909999999999997, 99.292000000000002, 98.590000000000003, 96.549999999999997, 99.799999999999997, 99.85804588657389, 99.85804588657389, 99.828999999999994, 99.891000000000005, 99.872, 98.870000000000005, 99.099999999999994, 98.412999999999997, 99.450000000000003, 98.903713167419312, 69.299999999999997, 99.99666666666667, 97.25, 99.480000000000004, 99.359999999999999, 96.989999999999995, 99.565714285714279, 97.599999999999994, 98.926000000000002, 98.890775526168852, 98.890775526168852, 98.890775526168852, 98.890775526168852, 96.739999999999995, 99.907272727272741, 99.799999999999997, 100, 100, 99.799999999999997, 99.700000000000003, 99.870000000000005, 99.400000000000006, 99.599999999999994, 99.180000000000007, 99.790000000000006, 97.150000000000006, 97.149925235379257, 97.149925235379257, 96.995999999999995, 69.299999999999997, 96, 95.75, 96.280000000000001, 93.989999999999995, 97.129999999999995, 89.069999999999993, 85.829851985733072, 92.379999999999995, 80.530000000000001, 61.600000000000001, 84.659999999999997, 85.829851985733072, 85.829851985733072, 85.829851985733072, 97.834000000000003, 97.463333333333338, 88.471428571428561, 97.299999999999997, 85.829851985733072, 99.086999999999989, 85.829851985733072, 85.829851985733072, 85.829851985733072, 99.399000000000001, 85.829851985733072, 85.829851985733072, 85.829851985733072, 96.590000000000003, 85.829851985733072, 85.829851985733072, 85.829851985733072, 85.829851985733072, 85.829851985733072, 85.829851985733072, 85.829851985733072, 85.829851985733072, 85.829851985733072, 98.799999999999997, 74.909999999999997, 58, 36.688000000000002, 69.998000000000005, 66.560000000000002, 85.540000000000006, 85.599999999999994, 54.100000000000001, 86.299999999999997, 98.361111111111114, 97.954999999999998, 81.273903877695176, 95.299999999999997, 97.379999999999995, 95.650000000000006, 96.459999999999994, 97.75, 92.299999999999997, 97.590000000000003, 71.170000000000002, 60.700000000000003, 81.409999999999997, 75.590000000000003, 30.559999999999999, 30.760000000000002, 22.309999999999999, 79.040000000000006, 59.133180334175449, 66.348749999999995, 59.133180334175449, 92.509999999999991, 62.020000000000003, 77.040000000000006, 51.770000000000003, 77.890000000000001, 78.730000000000004, 76.530000000000001, 66.030000000000001, 80.379999999999995, 59.780000000000001, 76.680000000000007, 89.890000000000001, 78.230000000000004, 29.66, 62.140000000000001, 87.5, 51.899999999999999, 70.403497494583661, 88.689999999999998, 43.426666666666662, 32.950000000000003, 75.006666666666675, 68.379999999999995, 70.403497494583661, 66.540000000000006, 32.43, 80.480000000000004, 48.299999999999997, 37.490000000000002, 76.569999999999993, 91.852000000000004, 50.780000000000001, 86.819999999999993, 82.280000000000001, 76.640000000000001, 45.579999999999998, 94.370000000000005, 92.352000000000004, 89.280000000000001, 70.403497494583661, 70.403497494583661, 49.200000000000003, 86.790000000000006, 70.403497494583661, 90.140000000000001, 96.200000000000003, 70.403497494583661, 93.230000000000004, 95.25, 96.400000000000006, 95.640000000000001, 97.129999999999995, 98.769999999999996, 94.5, 93.629999999999995, 80.810000000000002, 93.849999999999994, 61.689999999999998, 89.037175938041088, 93.780000000000001, 88.510000000000005, 94.540000000000006, 82.609999999999999, 89.980000000000004, 97.977000000000004, 95.739999999999995, 92.397500000000008, 89.037175938041088, 89.037175938041088, 85.640000000000001, 94.763333333333335, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 97.989999999999995, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088, 89.037175938041088],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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
            "title": "Literacy rate",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "ROU", "HUN", "BGR", "HRV", "SVN", "IOT", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT"],
          "z": [99.349999999999994, 94.939999999999998, 93.909999999999997, 99.359999999999999, 98.590000000000003, 96.780000000000001, 99.799999999999997, 99.857642863233494, 99.857642863233494, 99.829999999999998, 99.890000000000001, 99.870000000000005, 98.900000000000006, 99.099999999999994, 98.420000000000002, 99.450000000000003, 98.919553600355499, 69.299999999999997, 100, 97.25, 99.480000000000004, 99.359999999999999, 96.989999999999995, 99.599999999999994, 97.599999999999994, 98.980000000000004, 98.899339606692635, 98.899339606692635, 98.899339606692635, 98.899339606692635, 96.739999999999995, 99.930000000000007, 99.799999999999997, 100, 100, 99.799999999999997, 99.700000000000003, 99.870000000000005, 99.400000000000006, 99.599999999999994, 99.180000000000007, 99.790000000000006, 97.150000000000006, 97.149980679986626, 97.149980679986626, 97.109999999999999, 69.299999999999997, 96, 95.75, 96.280000000000001, 94.099999999999994, 97.129999999999995, 89.069999999999993, 85.813555014535027, 92.430000000000007, 80.530000000000001, 61.600000000000001, 84.659999999999997, 85.813555014535027, 85.813555014535027, 85.813555014535027, 97.859999999999999, 97.590000000000003, 89.099999999999994, 97.299999999999997, 85.813555014535027, 99.099999999999994, 85.813555014535027, 85.813555014535027, 85.813555014535027, 99.400000000000006, 85.813555014535027, 85.813555014535027, 85.813555014535027, 96.590000000000003, 85.813555014535027, 85.813555014535027, 85.813555014535027, 85.813555014535027, 85.813555014535027, 85.813555014535027, 85.813555014535027, 85.813555014535027, 85.813555014535027, 98.799999999999997, 74.909999999999997, 58, 37.270000000000003, 71.150000000000006, 66.560000000000002, 85.540000000000006, 85.599999999999994, 54.100000000000001, 86.299999999999997, 98.420000000000002, 98.129999999999995, 81.172590410583652, 95.299999999999997, 97.379999999999995, 95.650000000000006, 96.459999999999994, 97.75, 92.299999999999997, 97.590000000000003, 71.170000000000002, 60.700000000000003, 81.409999999999997, 75.590000000000003, 30.559999999999999, 30.760000000000002, 22.309999999999999, 79.040000000000006, 58.970717585427877, 66.959999999999994, 58.970717585427877, 90, 62.020000000000003, 77.040000000000006, 51.770000000000003, 77.890000000000001, 78.730000000000004, 76.530000000000001, 66.030000000000001, 80.379999999999995, 59.780000000000001, 76.680000000000007, 89.890000000000001, 78.230000000000004, 29.66, 62.140000000000001, 87.5, 70.470757982929129, 51.899999999999999, 88.689999999999998, 45.329999999999998, 32.950000000000003, 75.900000000000006, 68.379999999999995, 70.470757982929129, 66.540000000000006, 32.43, 80.609999999999999, 48.299999999999997, 37.490000000000002, 76.569999999999993, 92.25, 50.780000000000001, 86.819999999999993, 82.280000000000001, 76.640000000000001, 45.579999999999998, 94.370000000000005, 92.150000000000006, 89.280000000000001, 70.470757982929129, 70.470757982929129, 49.200000000000003, 86.790000000000006, 70.470757982929129, 90.140000000000001, 96.200000000000003, 70.470757982929129, 93.230000000000004, 95.25, 96.400000000000006, 95.640000000000001, 97.129999999999995, 98.769999999999996, 94.5, 94.480000000000004, 80.810000000000002, 93.849999999999994, 61.689999999999998, 93.780000000000001, 89.131119924790625, 88.510000000000005, 94.540000000000006, 82.609999999999999, 89.980000000000004, 98.040000000000006, 95.739999999999995, 92.400000000000006, 89.131119924790625, 89.131119924790625, 85.640000000000001, 95, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 97.989999999999995, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625, 89.131119924790625],
          "text": ["Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "British Indian Ocean Territory", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island"],
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

  
