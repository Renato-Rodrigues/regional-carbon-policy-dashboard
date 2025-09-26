(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Demographics_Population_growth_map') 

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
    "b55c5b965d80": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c5b965d80",
  "attrs": {
    "b55c5b965d80": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 30,
      "colorbar": {
        "title": "Population growth"
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
        "title": "Population growth",
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
      "z": [0.059999999999999998, 0.70999999999999996, 0.70999999999999996, 0.70999999999999996, 0.44, 0.66000000000000003, 0.23999999999999999, 1.8300000000000001, 1.8100000000000001, 0.38, 0.48999999999999999, 0.46999999999999997, 0.41999999999999998, 1.22, -0.070000000000000007, -0.029999999999999999, -0.070000000000000007, -0.81000000000000005, -0.96999999999999997, -0.63, 0.37, 0.27000000000000002, 0.27847840788613848, 1.23, 0.23999999999999999, 0.23999999999999999, -0.71999999999999997, -0.28999999999999998, -0.79000000000000004, 0.029999999999999999, 0.059999999999999998, 1.6299999999999999, 0.46999999999999997, 0.47046905506215569, 0.47046905506215569, 0.47046905506215569, 1.46, 1.72, 0.58999999999999997, 0.58999999999999997, 0.73999999999999999, 0.91000000000000003, 0.68999999999999995, -0.81000000000000005, -0.37, -0.20999999999999999, -0.34999999999999998, -0.68000000000000005, -0.28000000000000003, 0.33000000000000002, 0.40000000000000002, 4.2300000000000004, -0.22, 2.23, -0.24478214471155102, 1.3200000000000001, -0.45000000000000001, 0.34000000000000002, 1.1599999999999999, 0.59999999999999998, -0.69999999999999996, 0.76000000000000001, 1.98, 1.05, 1.27, -0.68000000000000005, 0.87, 0.20999999999999999, 0.62, 0.61649318788639229, -0.20000000000000001, 2.8199999999999998, 1.72, 1.3400000000000001, 1.03, 2.02, 0.85999999999999999, -1.47, 0.94999999999999996, 2.4399999999999999, 1, 1.78, 3.3100000000000001, 1.47, 1.5169521197330953, 0.98999999999999999, 2.29, 1.8799999999999999, 1.6799999999999999, 1.5169521197330953, 1.7, 2.5099999999999998, 0.42999999999999999, 1.5169521197330953, -0.17000000000000001, 0.57999999999999996, 2.04, 1.5169521197330953, 1.5169521197330953, 1.5169521197330953, 0.14999999999999999, 1.5169521197330953, 1.5169521197330953, 1.5169521197330953, 0.60999999999999999, 1.5169521197330953, 1.5169521197330953, 1.5169521197330953, 1.5169521197330953, 1.5169521197330953, 0.52000000000000002, 1.75, 2.1899999999999999, 1.3799999999999999, 7.54, 2.4900000000000002, 0.93000000000000005, 3.0499999999999998, 2.6499999999999999, 2.5699999999999998, 1.8100000000000001, 2.2599999999999998, 1.3, 4.8300000000000001, 2.5600000000000001, 1.1599999999999999, 2.6099999999999999, 3.9199999999999999, 4.8399999999999999, 2.2999999999999998, 2.0899999999999999, 1.3500000000000001, 2.2200000000000002, 1.22, 3.5, 3.21, 0.97999999999999998, 3.9700000000000002, 2.5099999999999998, 2.1600000000000001, 2.0611524917392186, 0.92000000000000004, 2.6899999999999999, 2.9399999999999999, 2.9100000000000001, 2.6600000000000001, 2.9700000000000002, 3.1200000000000001, 2.71, 2.6000000000000001, 2.4199999999999999, 2.9300000000000002, 3.4100000000000001, 2.73, 3.1000000000000001, 0.76000000000000001, 2.54, 3.0899999999999999, 2.46, 3.6200000000000001, 2.2400000000000002, 2.3100000000000001, 3.0099999999999998, 3.1400000000000001, 2.7157572755810993, 2.6099999999999999, 4.0199999999999996, 2.4199999999999999, 2.77, 0.80000000000000004, 4.0800000000000001, -0.23000000000000001, 1.4099999999999999, 1.75, 2.8500000000000001, 2.7000000000000002, 2.2999999999999998, 0.71999999999999997, 0.76000000000000001, 4.6100000000000003, 2.7157572755810993, 2.1699999999999999, 1.96, 1.4399999999999999, 2.7157572755810993, 2.5800000000000001, -1.1299999999999999, 2.7157572755810993, 1.1899999999999999, 1.49, 1.03, 1.05, 1.48, 1.77, 0.11, 1.05, 1.75, 2.1800000000000002, 1.4235942242513864, 1.75, 1.4099999999999999, 1.72, 2.5600000000000001, 0.26000000000000001, 1.25, 1.21, 1.5900000000000001, 0.059999999999999998, 1.9199999999999999, 0.47999999999999998, 0.56000000000000005, 0.029999999999999999, 1.6200000000000001, 1.4235942242513864, 1.4235942242513864, 1.3300000000000001, 0.39000000000000001, 3.0800000000000001, 1.4235942242513864, 0.77000000000000002, 1.4235942242513864, -0.29999999999999999, 0.46999999999999997, 1.4235942242513864, 1, 1.1299999999999999, 0.26000000000000001, 0.65000000000000002, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 0.85999999999999999, 0.90000000000000002, 1.1499999999999999, 1.1499999999999999, 1.1499999999999999, 1.1499999999999999, 1.97],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.059999999999999998, 0.70999999999999996, 0.70999999999999996, 0.70999999999999996, 0.44, 0.66000000000000003, 0.23999999999999999, 1.8300000000000001, 1.8100000000000001, 0.38, 0.48999999999999999, 0.46999999999999997, 0.41999999999999998, 1.22, -0.070000000000000007, -0.029999999999999999, -0.070000000000000007, -0.81000000000000005, -0.96999999999999997, -0.63, 0.37, 0.27000000000000002, 0.27847840788613848, 1.23, 0.23999999999999999, 0.23999999999999999, -0.71999999999999997, -0.28999999999999998, -0.79000000000000004, 0.029999999999999999, 0.059999999999999998, 1.6299999999999999, 0.46999999999999997, 0.47046905506215569, 0.47046905506215569, 0.47046905506215569, 1.46, 1.72, 0.58999999999999997, 0.58999999999999997, 0.73999999999999999, 0.91000000000000003, 0.68999999999999995, -0.81000000000000005, -0.37, -0.20999999999999999, -0.34999999999999998, -0.68000000000000005, -0.28000000000000003, 0.33000000000000002, 0.40000000000000002, 4.2300000000000004, -0.22, 2.23, -0.24478214471155102, 1.3200000000000001, -0.45000000000000001, 0.34000000000000002, 1.1599999999999999, 0.59999999999999998, -0.69999999999999996, 0.76000000000000001, 1.98, 1.05, 1.27, -0.68000000000000005, 0.87, 0.20999999999999999, 0.62, 0.61649318788639229, -0.20000000000000001, 2.8199999999999998, 1.72, 1.3400000000000001, 1.03, 2.02, 0.85999999999999999, -1.47, 0.94999999999999996, 2.4399999999999999, 1, 1.78, 3.3100000000000001, 1.47, 1.5169521197330953, 0.98999999999999999, 2.29, 1.8799999999999999, 1.6799999999999999, 1.5169521197330953, 1.7, 2.5099999999999998, 0.42999999999999999, 1.5169521197330953, -0.17000000000000001, 0.57999999999999996, 2.04, 1.5169521197330953, 1.5169521197330953, 1.5169521197330953, 0.14999999999999999, 1.5169521197330953, 1.5169521197330953, 1.5169521197330953, 0.60999999999999999, 1.5169521197330953, 1.5169521197330953, 1.5169521197330953, 1.5169521197330953, 1.5169521197330953, 0.52000000000000002, 1.75, 2.1899999999999999, 1.3799999999999999, 7.54, 2.4900000000000002, 0.93000000000000005, 3.0499999999999998, 2.6499999999999999, 2.5699999999999998, 1.8100000000000001, 2.2599999999999998, 1.3, 4.8300000000000001, 2.5600000000000001, 1.1599999999999999, 2.6099999999999999, 3.9199999999999999, 4.8399999999999999, 2.2999999999999998, 2.0899999999999999, 1.3500000000000001, 2.2200000000000002, 1.22, 3.5, 3.21, 0.97999999999999998, 3.9700000000000002, 2.5099999999999998, 2.1600000000000001, 2.0611524917392186, 0.92000000000000004, 2.6899999999999999, 2.9399999999999999, 2.9100000000000001, 2.6600000000000001, 2.9700000000000002, 3.1200000000000001, 2.71, 2.6000000000000001, 2.4199999999999999, 2.9300000000000002, 3.4100000000000001, 2.73, 3.1000000000000001, 0.76000000000000001, 2.54, 3.0899999999999999, 2.46, 3.6200000000000001, 2.2400000000000002, 2.3100000000000001, 3.0099999999999998, 3.1400000000000001, 2.7157572755810993, 2.6099999999999999, 4.0199999999999996, 2.4199999999999999, 2.77, 0.80000000000000004, 4.0800000000000001, -0.23000000000000001, 1.4099999999999999, 1.75, 2.8500000000000001, 2.7000000000000002, 2.2999999999999998, 0.71999999999999997, 0.76000000000000001, 4.6100000000000003, 2.7157572755810993, 2.1699999999999999, 1.96, 1.4399999999999999, 2.7157572755810993, 2.5800000000000001, -1.1299999999999999, 2.7157572755810993, 1.1899999999999999, 1.49, 1.03, 1.05, 1.48, 1.77, 0.11, 1.05, 1.75, 2.1800000000000002, 1.4235942242513864, 1.75, 1.4099999999999999, 1.72, 2.5600000000000001, 0.26000000000000001, 1.25, 1.21, 1.5900000000000001, 0.059999999999999998, 1.9199999999999999, 0.47999999999999998, 0.56000000000000005, 0.029999999999999999, 1.6200000000000001, 1.4235942242513864, 1.4235942242513864, 1.3300000000000001, 0.39000000000000001, 3.0800000000000001, 1.4235942242513864, 0.77000000000000002, 1.4235942242513864, -0.29999999999999999, 0.46999999999999997, 1.4235942242513864, 1, 1.1299999999999999, 0.26000000000000001, 0.65000000000000002, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 1.4235942242513864, 0.85999999999999999, 0.90000000000000002, 1.1499999999999999, 1.1499999999999999, 1.1499999999999999, 1.1499999999999999, 1.97],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [-0.02, 0.73999999999999999, 0.73999999999999999, 0.73999999999999999, 0.65000000000000002, 0.67000000000000004, 0.25, 1.8200000000000001, 1.73, 0.23999999999999999, 0.62, 0.34999999999999998, 0.42999999999999999, 1.4199999999999999, -0.059999999999999998, 0.029999999999999999, -0.02, -1.1200000000000001, -1.0900000000000001, -0.59999999999999998, 0.39000000000000001, 0.26000000000000001, 0.26878433466772861, 1.25, 0.28999999999999998, 0.28999999999999998, -0.56999999999999995, -0.22, -0.75, 0.029999999999999999, 0.059999999999999998, 1.8300000000000001, 0.56999999999999995, 0.57042582121419028, 0.57042582121419028, 0.57042582121419028, 1.46, 1.6699999999999999, 0.58999999999999997, 0.58999999999999997, 0.68999999999999995, 0.88, 0.88, -0.76000000000000001, -0.41999999999999998, -0.23000000000000001, -0.97999999999999998, -0.62, -0.25, 0.28000000000000003, 0.17999999999999999, 4.0099999999999998, -0.25, 1.71, -0.36225440769054174, 1.3600000000000001, -0.40000000000000002, 0.68999999999999995, 1.1499999999999999, 0.69999999999999996, -0.68000000000000005, 0.88, 1.9099999999999999, 1.21, 1.27, -0.59999999999999998, 0.84999999999999998, 0.029999999999999999, 0.58999999999999997, 0.59174947280515533, 0.78000000000000003, 2.77, 1.6699999999999999, 1.27, 1.02, 1.99, 0.81999999999999995, 1.25, 0.88, 2.3700000000000001, 0.96999999999999997, 1.77, 3.27, 1.3799999999999999, 1.466747342241167, 0.96999999999999997, 2.27, 1.8, 1.6399999999999999, 1.466747342241167, 1.52, 2.46, 0.34000000000000002, 1.466747342241167, -0.33000000000000002, 0.59999999999999998, 2.02, 1.466747342241167, 1.466747342241167, 1.466747342241167, 0.14000000000000001, 1.466747342241167, 1.466747342241167, 1.466747342241167, 1.26, 1.466747342241167, 1.466747342241167, 1.466747342241167, 1.466747342241167, 1.466747342241167, 0.40000000000000002, 1.6599999999999999, 2.2400000000000002, 1.24, 3.9300000000000002, 2.3900000000000001, 1.6200000000000001, 2.8799999999999999, 2.6600000000000001, 2.6499999999999999, 1.77, 2.4900000000000002, 1.54, 4.6100000000000003, 2.5600000000000001, 1.52, 2.4399999999999999, 6.8499999999999996, 3.8500000000000001, 2.1800000000000002, 2.0299999999999998, 1.4099999999999999, 2.25, 1.25, 3.5499999999999998, 3.27, 0.95999999999999996, 4.4400000000000004, 2.5800000000000001, 2.1699999999999999, 2.138820235061341, 0.93999999999999995, 2.7000000000000002, 2.98, 2.8700000000000001, 2.71, 2.9900000000000002, 2.96, 2.6699999999999999, 2.6099999999999999, 2.3399999999999999, 2.9300000000000002, 3.5099999999999998, 2.7400000000000002, 3.1400000000000001, 2.6400000000000001, 0.69999999999999996, 3.1800000000000002, 2.5, 3.6099999999999999, 2.1299999999999999, 2.5800000000000001, 3.0299999999999998, 3.71, 2.7304064560033341, 2.6299999999999999, 3.3500000000000001, 2.1699999999999999, 3.3999999999999999, 1.2, 4.0499999999999998, -0.38, 1.24, 1.75, 2.8900000000000001, 2.77, 2.3599999999999999, 0.63, 0.66000000000000003, 4.54, 1.47, 2.7304064560033341, 1.9199999999999999, 1.3400000000000001, 2.7304064560033341, 2.5299999999999998, -0.37, 2.7304064560033341, 1.1399999999999999, 1.47, 1.02, 1, 1.4299999999999999, 1.71, 0.11, 0.96999999999999997, 1.74, 2.1299999999999999, 1.3773373626570122, 1.74, 1.3700000000000001, 1.6799999999999999, 2.4900000000000002, 0.14999999999999999, 1.1699999999999999, 1.1799999999999999, 1.52, 0.02, 1.9199999999999999, 0.48999999999999999, 0.56000000000000005, -0.02, 1.3400000000000001, 1.3773373626570122, 1.3773373626570122, 1.3500000000000001, 3.0299999999999998, 0.38, 1.3773373626570122, 0.72999999999999998, 1.3773373626570122, -0.44, 0.70999999999999996, 1.3773373626570122, 0.90000000000000002, 1.1000000000000001, 0.19, 0.65000000000000002, 1.3773373626570122, 1.3773373626570122, 1.3773373626570122, 1.3773373626570122, 1.3773373626570122, 1.3773373626570122, 1.3773373626570122, 1.3773373626570122, 1.3773373626570122, 1.3773373626570122, 1.3773373626570122, 1.3773373626570122, 1.3773373626570122, 1.3773373626570122, 0.93000000000000005, 0.93000000000000005, 1.0700000000000001, 1.0700000000000001, 1.0700000000000001, 1.0700000000000001, 1.49],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [-0.059999999999999998, 0.75, 0.74999999999999989, 0.74999999999999989, 0.48999999999999999, 0.64000000000000001, 0.28999999999999998, 1.79, 1.6899999999999999, 0.19, 0.68000000000000005, 0.23000000000000001, 0.55000000000000004, 1.53, -0.040000000000000001, 0.14000000000000001, 0.01, -1.6299999999999999, -1.0800000000000001, -0.56999999999999995, 0.40000000000000002, 0.28000000000000003, 0.28309551883018208, 0.63, 0.34000000000000002, 0.34000000000000002, -0.62, -0.20000000000000001, -0.75, 0.13, 0.17000000000000001, 2.1800000000000002, 0.68999999999999995, 0.69040054843947751, 0.69040054843947751, 0.69040054843947751, 1.52, 1.6000000000000001, 0.68000000000000005, 0.68000000000000005, 0.64000000000000001, 0.88, 1.5800000000000001, -0.72999999999999998, -0.51000000000000001, -0.29999999999999999, -1.1799999999999999, -0.64000000000000001, -0.23999999999999999, 0.20999999999999999, 0.14999999999999999, 3.6899999999999999, -0.29999999999999999, 1.4199999999999999, -0.4352935223273004, 1.3500000000000001, -0.38, 0.89000000000000001, 1.1599999999999999, 0.63, -0.68000000000000005, 1.02, 1.8600000000000001, 1.1299999999999999, 1.3600000000000001, -0.60999999999999999, 0.83999999999999997, 0.01, 0.58999999999999997, 0.58998975977773405, 0.44, 2.7200000000000002, 1.6000000000000001, 1.26, 1, 1.9399999999999999, 0.78000000000000003, 2.3500000000000001, 0.81000000000000005, 2.2999999999999998, 0.93999999999999995, 1.75, 3.2200000000000002, 1.46, 1.4233445763946551, 0.93999999999999995, 2.2400000000000002, 1.72, 1.6000000000000001, 1.4233445763946551, 1.52, 2.4199999999999999, 0.28999999999999998, 1.4233445763946551, -0.45000000000000001, 0.56999999999999995, 2, 1.4233445763946551, 1.4233445763946551, 1.4233445763946551, -0.38, 1.4233445763946551, 1.4233445763946551, 1.4233445763946551, 1.23, 1.4233445763946551, 1.4233445763946551, 1.4233445763946551, 1.4233445763946551, 1.4233445763946551, 0.20999999999999999, 1.52, 2.1600000000000001, 1.0800000000000001, 3.5800000000000001, 2.0299999999999998, 1.6100000000000001, 2.9700000000000002, 2.79, 2.7200000000000002, 1.76, 2.6099999999999999, 1.48, 6.96, 2.5600000000000001, 1.8600000000000001, 3.73, 7.9000000000000004, 8.7100000000000009, 3.0600000000000001, 1.98, 1.3600000000000001, 2.4300000000000002, 1.3200000000000001, 3.5899999999999999, 3.3100000000000001, 3.9900000000000002, 0.93000000000000005, 2.6099999999999999, 2.21, 2.1650394812039835, 0.94999999999999996, 2.6899999999999999, 3.1200000000000001, 2.8399999999999999, 2.77, 2.98, 2.9100000000000001, 2.6600000000000001, 2.5899999999999999, 2.27, 3.5600000000000001, 2.9199999999999999, 2.73, 3.1499999999999999, 2.7400000000000002, 0.52000000000000002, 3.3100000000000001, 2.54, 3.3999999999999999, 1.98, 2.6299999999999999, 3.1800000000000002, 2.7403649594618162, 3.7000000000000002, 2.6000000000000001, 2.6699999999999999, 2.25, 3.6000000000000001, 4.5, 2.4500000000000002, 1.2, -0.40000000000000002, 1.8, 2.9399999999999999, 2.8700000000000001, 2.3999999999999999, 0.58999999999999997, 0.56999999999999995, 4.54, 1.51, 2.7403649594618162, 1.96, 1.28, 2.7403649594618162, 2.4900000000000002, 0.46000000000000002, 2.7403649594618162, 1.1200000000000001, 1.4299999999999999, 1.03, 0.97999999999999998, 1.3700000000000001, 1.6699999999999999, 0.12, 0.90000000000000002, 1.72, 2.0800000000000001, 1.3371840549912211, 1.73, 1.3400000000000001, 1.6599999999999999, 2.4199999999999999, 0.040000000000000001, 1.1100000000000001, 1.26, 1.47, -0.14000000000000001, 1.9099999999999999, 0.47999999999999998, 0.57999999999999996, -0.089999999999999997, 1.1000000000000001, 1.3371840549912211, 1.3371840549912211, 1.3600000000000001, 2.9900000000000002, 0.35999999999999999, 1.3371840549912211, 0.69999999999999996, 1.3371840549912211, -0.5, 0.67000000000000004, 1.3371840549912211, 1, 1.1699999999999999, 0.14999999999999999, 0.65000000000000002, 1.3371840549912211, 1.3371840549912211, 1.3371840549912211, 1.3371840549912211, 1.3371840549912211, 1.3371840549912211, 1.3371840549912211, 1.3371840549912211, 1.3371840549912211, 1.3371840549912211, 1.3371840549912211, 1.3371840549912211, 1.3371840549912211, 1.3371840549912211, 0.92000000000000004, 0.93999999999999995, 1.22, 1.22, 1.22, 1.22, 1.1299999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [-0.11, 0.68999999999999995, 0.68999999999999995, 0.68999999999999995, 0.29999999999999999, 0.35999999999999999, 0.29999999999999999, 1.76, 1.6899999999999999, 0.17999999999999999, 0.48999999999999999, 0.16, 0.66000000000000003, 1.6000000000000001, -0.059999999999999998, 0.27000000000000002, 1.0000000000000001e-05, -1.6000000000000001, -0.92000000000000004, -0.58999999999999997, 0.56000000000000005, 0.33000000000000002, 0.32753285279094918, 0.050000000000000003, 0.38, 0.38, -0.58999999999999997, -0.16, -0.76000000000000001, 0.02, 0.32000000000000001, 2.7000000000000002, 0.73999999999999999, 0.74035487668508204, 0.74035487668508204, 0.74035487668508204, 1.47, 1.52, 0.81000000000000005, 0.81000000000000005, 0.63, 0.81999999999999995, 2.3500000000000001, -0.68000000000000005, -0.63, -0.39000000000000001, -0.89000000000000001, -0.56999999999999995, -0.28000000000000003, 0.17000000000000001, 0.12, 0.48999999999999999, -0.40999999999999998, 1.52, -0.42752936662612351, 1.3, -0.33000000000000002, 1.0600000000000001, 1.22, 0.56000000000000005, -0.60999999999999999, 1.1000000000000001, 1.8300000000000001, 1.0800000000000001, 1.3899999999999999, -0.68000000000000005, 0.85999999999999999, 0.059999999999999998, 0.56000000000000005, 0.56121456018616855, 0.64000000000000001, 2.6699999999999999, 1.52, 1.3, 0.96999999999999997, 1.8799999999999999, 0.75, 3.1299999999999999, 0.76000000000000001, 2.23, 1, 1.73, 3.1699999999999999, 1.5900000000000001, 1.4074107157802473, 0.93000000000000005, 2.2400000000000002, 1.6499999999999999, 2.3799999999999999, 1.4074107157802473, 1.5, 2.3999999999999999, 0.40000000000000002, 1.4074107157802473, -0.57999999999999996, 0.53000000000000003, 1.9399999999999999, 1.4074107157802473, 1.4074107157802473, 1.4074107157802473, -1.0700000000000001, 1.4074107157802473, 1.4074107157802473, 1.1799999999999999, 1.4074107157802473, 1.4074107157802473, 1.4074107157802473, 1.4074107157802473, 1.4074107157802473, 1.4074107157802473, 0.53000000000000003, 1.21, 2.1000000000000001, 0.89000000000000001, 4.1399999999999997, 1.49, 1.55, 0.71999999999999997, 2.98, 4.46, 1.77, 6.7599999999999998, 13.48, 1.6399999999999999, 2.5600000000000001, 1.79, 5.5700000000000003, 17.899999999999999, 7.3799999999999999, 3.96, 1.95, 1.4399999999999999, 2.6499999999999999, 1.3100000000000001, 3.6099999999999999, 3.3100000000000001, 3.54, 0.91000000000000003, 2.29, 2.2599999999999998, 2.1923908040454747, 0.95999999999999996, 2.7000000000000002, 3.1899999999999999, 2.8300000000000001, 2.8100000000000001, 2.9700000000000002, 2.9199999999999999, 2.6400000000000001, 2.5600000000000001, 2.21, 3.5899999999999999, 2.9300000000000002, 2.7200000000000002, 3.1200000000000001, 2.7999999999999998, 0.85999999999999999, 3.46, 2.6000000000000001, 2.9900000000000002, 2.0600000000000001, 2.6600000000000001, 3.0600000000000001, 2.7529222994607876, 3.5800000000000001, 2.8100000000000001, 2.2000000000000002, 2.0099999999999998, 3.75, 5.6299999999999999, 1.6899999999999999, 1.2, -0.029999999999999999, 1.8799999999999999, 3.02, 2.98, 2.46, 0.46999999999999997, 0.54000000000000004, 4.5999999999999996, 1.9199999999999999, 2.7529222994607876, 2, 1.22, 2.7529222994607876, 2.4700000000000002, 2.0800000000000001, 2.7529222994607876, 1.0800000000000001, 1.3600000000000001, 1.03, 0.97999999999999998, 1.3, 1.6100000000000001, 0.14000000000000001, 0.82999999999999996, 1.72, 2.0299999999999998, 1.3025616401733402, 1.75, 1.29, 1.6799999999999999, 2.3599999999999999, -0.059999999999999998, 1.05, 1.3700000000000001, 1.4299999999999999, -0.41999999999999998, 1.8799999999999999, 0.47999999999999998, 0.56999999999999995, -0.17999999999999999, 1.1200000000000001, 1.3025616401733402, 1.3025616401733402, 1.3899999999999999, 2.9399999999999999, 0.34999999999999998, 1.3025616401733402, 0.65000000000000002, 1.3025616401733402, -0.55000000000000004, 0.66000000000000003, 1.3025616401733402, 1.1799999999999999, 1.28, 0.10000000000000001, 0.56999999999999995, 1.3025616401733402, 1.3025616401733402, 1.3025616401733402, 1.3025616401733402, 1.3025616401733402, 1.3025616401733402, 1.3025616401733402, 1.3025616401733402, 1.3025616401733402, 1.3025616401733402, 1.3025616401733402, 1.3025616401733402, 1.3025616401733402, 1.3025616401733402, 0.95999999999999996, 1.01, 1.3500000000000001, 1.3500000000000001, 1.3500000000000001, 1.3500000000000001, 1.22],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [-0.13, 0.62, 0.62, 0.62, 0.5, 0.34999999999999998, 0.25, 1.73, 1.8500000000000001, 0.20000000000000001, 0.32000000000000001, 0.22, 0.72999999999999998, 1.54, -0.050000000000000003, 0.57999999999999996, 0.029999999999999999, -1.1899999999999999, -0.81999999999999995, -0.46000000000000002, 0.73999999999999999, 0.44, 0.43701468796780146, 0.10000000000000001, 0.42999999999999999, 0.42999999999999999, -1.48, -0.14999999999999999, -0.73999999999999999, -0.02, 0.56000000000000005, 2.8900000000000001, 0.78000000000000003, 0.78028855464643154, 0.78028855464643154, 0.78028855464643154, 1.3700000000000001, 1.47, 1.03, 1.03, 0.89000000000000001, 0.75, 2.5299999999999998, -0.59999999999999998, -0.76000000000000001, -0.40999999999999998, -1.25, -0.52000000000000002, -0.23000000000000001, 0.16, 0.14000000000000001, -2.5899999999999999, -0.58999999999999997, 1.3700000000000001, -0.49545674929069461, 1.24, -0.17000000000000001, 1.1399999999999999, 1.4199999999999999, 0.5, -0.46000000000000002, 1.1299999999999999, 1.8400000000000001, 0.94999999999999996, 1.4199999999999999, -0.72999999999999998, 0.93999999999999995, 0.11, 0.52000000000000002, 0.52261148496569365, 0.85999999999999999, 2.6499999999999999, 1.47, 1.3100000000000001, 0.95999999999999996, 1.8700000000000001, 0.76000000000000001, 4.1699999999999999, 0.73999999999999999, 2.1800000000000002, 1.04, 1.74, 3.1200000000000001, 1.5800000000000001, 1.4005046960660326, 0.84999999999999998, 2.2400000000000002, 1.5800000000000001, 3.3500000000000001, 1.4005046960660326, 1.47, 2.3999999999999999, 0.57999999999999996, 1.4005046960660326, -0.69999999999999996, 0.41999999999999998, 1.8999999999999999, 1.4005046960660326, 1.4005046960660326, 1.4005046960660326, -1.3, 1.4005046960660326, 1.4005046960660326, 1.1799999999999999, 1.4005046960660326, 1.4005046960660326, 1.4005046960660326, 1.4005046960660326, 1.4005046960660326, 1.4005046960660326, 0.51000000000000001, 1.05, 2.1400000000000001, 0.72999999999999998, 1.79, 1.23, 1.45, -0.84999999999999998, 3.0299999999999998, 6.3399999999999999, 1.78, 6.3399999999999999, 18.129999999999999, 1.8799999999999999, 2.5600000000000001, 1.74, 5.8899999999999997, 19.359999999999999, 6.9199999999999999, 3.9300000000000002, 1.95, 1.6299999999999999, 2.79, 1.29, 3.6400000000000001, 3.2999999999999998, 3.3900000000000001, 0.92000000000000004, 2.0499999999999998, 2.3199999999999998, 2.2503486810723388, 1.01, 2.71, 3.2200000000000002, 2.8500000000000001, 2.8100000000000001, 2.9700000000000002, 2.9300000000000002, 2.6099999999999999, 2.5899999999999999, 2.1600000000000001, 3.6400000000000001, 2.9300000000000002, 2.7799999999999998, 3.0299999999999998, 2.8300000000000001, 0.96999999999999997, 3.5299999999999998, 2.6299999999999999, 3.04, 2.29, 2.6899999999999999, 2.8799999999999999, 2.7668088527989232, 3.6699999999999999, 2.9100000000000001, 2.2000000000000002, 1.8700000000000001, 3.6800000000000002, 5, 1.5900000000000001, 1.25, 0.34000000000000002, 1.96, 3.0800000000000001, 3.1000000000000001, 2.5499999999999998, 0.46000000000000002, 0.57999999999999996, 4.6799999999999997, 2.1299999999999999, 2.7668088527989232, 2, 1.1699999999999999, 2.7668088527989232, 2.46, 0.51000000000000001, 2.7668088527989232, 1.03, 1.3200000000000001, 1.01, 0.97999999999999998, 1.24, 1.55, 0.19, 0.77000000000000002, 1.72, 1.98, 1.2807932737670267, 1.75, 1.26, 1.6499999999999999, 2.29, 0.16, 1, 1.3899999999999999, 1.3999999999999999, -0.58999999999999997, 1.8500000000000001, 0.42999999999999999, 0.57999999999999996, -0.23999999999999999, 1.1299999999999999, 1.2807932737670267, 1.2807932737670267, 1.4099999999999999, 2.8799999999999999, 0.38, 1.2807932737670267, 0.63, 1.2807932737670267, -0.54000000000000004, 0.66000000000000003, 1.2807932737670267, 1.23, 1.3799999999999999, 0.050000000000000003, 0.56000000000000005, 1.2807932737670267, 1.2807932737670267, 1.2807932737670267, 1.2807932737670267, 1.2807932737670267, 1.2807932737670267, 1.2807932737670267, 1.2807932737670267, 1.2807932737670267, 1.2807932737670267, 1.2807932737670267, 1.2807932737670267, 1.2807932737670267, 1.2807932737670267, 0.94999999999999996, 0.96999999999999997, 1.8200000000000001, 1.8200000000000001, 1.8200000000000001, 1.8200000000000001, 0.93000000000000005],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [-0.19, 0.56000000000000005, 0.56000000000000005, 0.56000000000000005, 0.66000000000000003, 0.65000000000000002, 0.27000000000000002, 1.71, 1.6000000000000001, 0.14000000000000001, 0.31, 0.39000000000000001, 0.79000000000000004, 1.79, 0.01, 0.82999999999999996, 0.089999999999999997, -1.03, -1.05, -0.27000000000000002, 0.78000000000000003, 0.58999999999999997, 0.58570781145573358, 0.10000000000000001, 0.46999999999999997, 0.46999999999999997, -1.6699999999999999, -0.17999999999999999, -0.69999999999999996, -0.01, 0.16, 2.04, 0.79000000000000004, 0.79026558390028245, 0.79026558390028245, 0.79026558390028245, 1.3300000000000001, 1.4199999999999999, 1.25, 1.25, 1.27, 0.70999999999999996, 1.8600000000000001, -0.54000000000000004, -0.77000000000000002, -0.42999999999999999, -1.6200000000000001, -0.29999999999999999, -0.19, 0.16, 0.17999999999999999, -2.7400000000000002, 0.12, 1.0700000000000001, -0.52299207085550181, 1.2, -0.040000000000000001, 1.8700000000000001, 1.6100000000000001, 0.46000000000000002, -0.34999999999999998, 2.1000000000000001, 1.8799999999999999, 1.49, 0.94999999999999996, -0.69999999999999996, 1.0800000000000001, 0.050000000000000003, 0.51000000000000001, 0.51133054186323124, 0.59999999999999998, 2.6299999999999999, 1.4199999999999999, 1.3, 0.97999999999999998, 1.8700000000000001, 0.75, 5.3200000000000003, 0.57999999999999996, 2.0899999999999999, 1.03, 1.6599999999999999, 3.0899999999999999, 1.55, 1.3112529292294637, 0.68000000000000005, 2.23, 1.52, 3.5499999999999998, 1.3112529292294637, 1.45, 2.4300000000000002, 0.68000000000000005, 1.3112529292294637, -0.76000000000000001, 0.28000000000000003, 1.9099999999999999, 1.3112529292294637, 1.3112529292294637, 1.3112529292294637, -1.3700000000000001, 1.3112529292294637, 1.3112529292294637, 1.2, 1.3112529292294637, 1.3112529292294637, 1.3112529292294637, 1.3112529292294637, 1.3112529292294637, 1.3112529292294637, 0.76000000000000001, 0.89000000000000001, 2.1800000000000002, 0.63, 2, 1.1799999999999999, 1.3700000000000001, 1.9299999999999999, 2.9900000000000002, 3.6600000000000001, 1.78, 2.4300000000000002, 17.399999999999999, 1.6100000000000001, 2.75, 5.5899999999999999, 1.72, 15.91, 6.4900000000000002, 3.8500000000000001, 1.96, 1.71, 2.7599999999999998, 1.28, 3.6699999999999999, 3.2799999999999998, 3.4500000000000002, 0.93999999999999995, 2.1299999999999999, 2.5, 2.2802846908920058, 1.1299999999999999, 2.7200000000000002, 3.2000000000000002, 2.8399999999999999, 2.73, 2.98, 2.9300000000000002, 2.5699999999999998, 2.6200000000000001, 3.6699999999999999, 2.1299999999999999, 2.9100000000000001, 2.8399999999999999, 2.9399999999999999, 2.8799999999999999, 3.5699999999999998, 0.80000000000000004, 2.6400000000000001, 2.8999999999999999, 2.4100000000000001, 2.6800000000000002, 2.9500000000000002, 2.7712554372487301, 4.1100000000000003, 2.8500000000000001, 2.52, 2.0699999999999998, 3.3100000000000001, 4.0800000000000001, 2.6800000000000002, 1.3400000000000001, 0.57999999999999996, 2.0299999999999998, 3.1000000000000001, 3.1899999999999999, 2.5800000000000001, 0.35999999999999999, 0.54000000000000004, 4.75, 2.02, 2.7712554372487301, 2.02, 1.1000000000000001, 2.7712554372487301, 2.4199999999999999, 2.2400000000000002, 2.7712554372487301, 0.98999999999999999, 1.27, 0.98999999999999999, 1, 1.1699999999999999, 1.47, 0.22, 0.71999999999999997, 1.7, 1.9299999999999999, 1.2693797280675936, 1.73, 1.28, 1.6299999999999999, 2.21, 0.40000000000000002, 0.97999999999999998, 1.4199999999999999, 1.3799999999999999, -0.58999999999999997, 1.8400000000000001, 0.38, 0.56999999999999995, -0.31, 1.1299999999999999, 1.2693797280675936, 1.2693797280675936, 1.4199999999999999, 2.8199999999999998, 0.44, 1.2693797280675936, 0.63, 1.2693797280675936, -0.46000000000000002, 0.67000000000000004, 1.2693797280675936, 1.24, 1.49, 0.01, 0.58999999999999997, 1.2693797280675936, 1.2693797280675936, 1.2693797280675936, 1.2693797280675936, 1.2693797280675936, 1.2693797280675936, 1.2693797280675936, 1.2693797280675936, 1.2693797280675936, 1.2693797280675936, 1.2693797280675936, 1.2693797280675936, 1.2693797280675936, 1.2693797280675936, 0.94999999999999996, 1.0800000000000001, 2, 2, 2, 2, 0.84999999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [-0.25, 0.51000000000000001, 0.51000000000000001, 0.51000000000000001, 0.46000000000000002, 0.75, 0.26000000000000001, 1.6899999999999999, 0.89000000000000001, 0.10000000000000001, 0.26000000000000001, 0.51000000000000001, 0.80000000000000004, 1.8500000000000001, 0.070000000000000007, 0.56999999999999995, 0.13, -1.1100000000000001, -1.6499999999999999, -0.19, 0.84999999999999998, 0.54000000000000004, 0.53562167998412036, 0.040000000000000001, 0.47999999999999998, 0.47999999999999998, -0.82999999999999996, -0.14999999999999999, -0.64000000000000001, -0.11, 0.90000000000000002, 1.02, 0.76000000000000001, 0.76030671082664691, 0.76030671082664691, 0.76030671082664691, 1.3799999999999999, 1.3899999999999999, 1.26, 1.26, 1.25, 0.77000000000000002, 0.34000000000000002, -0.44, -0.67000000000000004, -0.40000000000000002, -1.6799999999999999, -0.89000000000000001, -0.13, 0.17999999999999999, 0.20999999999999999, -2.9399999999999999, 1.1599999999999999, 1.6799999999999999, -0.60724310651860158, 1.26, 0.029999999999999999, 1.98, 1.6899999999999999, 0.46000000000000002, -0.25, 2.0800000000000001, 1.95, 1.5700000000000001, 1.21, -0.64000000000000001, 1.24, -0.01, 0.5, 0.49938485673169014, 0.22, 2.6099999999999999, 1.3899999999999999, 1.27, 1.03, 1.8400000000000001, 0.71999999999999997, 3.02, 0.58999999999999997, 1.98, 0.96999999999999997, 1.51, 3.0499999999999998, 1.52, 1.265253791968223, 0.52000000000000002, 2.27, 1.48, 3.54, 1.265253791968223, 1.3100000000000001, 2.4199999999999999, 0.71999999999999997, 1.265253791968223, -0.77000000000000002, 0.20000000000000001, 1.9299999999999999, 1.265253791968223, 1.265253791968223, 1.265253791968223, -1.46, 1.265253791968223, 1.265253791968223, 1.3200000000000001, 1.265253791968223, 1.265253791968223, 1.265253791968223, 1.265253791968223, 1.265253791968223, 1.265253791968223, 0.51000000000000001, 0.88, 2.23, 3.5600000000000001, 0.54000000000000004, 1.1399999999999999, 1.3600000000000001, 3.6000000000000001, 2.96, 1.6299999999999999, 2.3900000000000001, 2.2000000000000002, 13.42, 1.29, 2.6699999999999999, 5.3099999999999996, 1.74, 10.880000000000001, 6.04, 3.7400000000000002, 1.96, 1.8, 2.7200000000000002, 1.28, 3.7000000000000002, 3.2599999999999998, 3.52, 0.96999999999999997, 2.0899999999999999, 2.7200000000000002, 2.3098337664550859, 1.1899999999999999, 2.73, 3.1899999999999999, 2.7999999999999998, 2.5, 2.96, 2.9199999999999999, 2.54, 3.6899999999999999, 2.6699999999999999, 2.1200000000000001, 2.8999999999999999, 2.8500000000000001, 2.9300000000000002, 2.9100000000000001, 3.5499999999999998, 1.03, 2.6800000000000002, 2.46, 2.4399999999999999, 2.6400000000000001, 2.9399999999999999, 2.7674186720113068, 5.0800000000000001, 2.79, 2.7400000000000002, 2.1499999999999999, 4.0199999999999996, 3.1499999999999999, 2.5699999999999998, 1.4299999999999999, 2.0499999999999998, 0.70999999999999996, 3.1099999999999999, 3.29, 2.5699999999999998, 0.27000000000000002, 4.7800000000000002, 0.46000000000000002, 2.04, 2.7674186720113068, 2.0499999999999998, 1.03, 2.7674186720113068, 2.3399999999999999, 0.39000000000000001, 2.7674186720113068, 0.94999999999999996, 1.24, 1.01, 1.03, 1.1299999999999999, 1.3999999999999999, 0.23999999999999999, 0.69999999999999996, 1.6799999999999999, 1.8799999999999999, 1.258117309536932, 1.71, 1.3100000000000001, 1.6100000000000001, 2.1400000000000001, 0.38, 1.01, 1.45, 1.3500000000000001, -0.55000000000000004, 1.8200000000000001, 0.40999999999999998, 0.59999999999999998, -0.38, 1.1299999999999999, 1.258117309536932, 1.258117309536932, 1.4399999999999999, 2.7400000000000002, 0.41999999999999998, 1.258117309536932, 0.66000000000000003, 1.258117309536932, 0.68000000000000005, -0.42999999999999999, 1.258117309536932, 1.23, 1.53, 0.01, 0.55000000000000004, 1.258117309536932, 1.258117309536932, 1.258117309536932, 1.258117309536932, 1.258117309536932, 1.258117309536932, 1.258117309536932, 1.258117309536932, 1.258117309536932, 1.258117309536932, 1.258117309536932, 1.258117309536932, 1.258117309536932, 1.258117309536932, 0.88, 1.1399999999999999, 2.0600000000000001, 2.0600000000000001, 2.0600000000000001, 2.0600000000000001, 1],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [-0.14999999999999999, 0.48999999999999999, 0.48999999999999999, 0.48999999999999999, 0.31, 0.48999999999999999, 0.13, 1.6699999999999999, 0.46000000000000002, 0.050000000000000003, 0.23999999999999999, 0.51000000000000001, 0.91000000000000003, 1.8300000000000001, -0.28999999999999998, 0.28999999999999998, 0.089999999999999997, -2.1000000000000001, -2.0800000000000001, -0.23000000000000001, 0.84999999999999998, 0.44, 0.43582667243233969, -0.040000000000000001, 0.46000000000000002, 0.46000000000000002, -0.58999999999999997, -0.23000000000000001, -0.66000000000000003, -0.23000000000000001, 0.44, 0.54000000000000004, 0.78000000000000003, 0.78032343904536627, 0.78032343904536627, 0.78032343904536627, 1.4299999999999999, 1.3799999999999999, 1.25, 1.25, 1.04, 0.69999999999999996, -0.14000000000000001, -0.40000000000000002, -0.5, -0.40000000000000002, -1.73, -0.72999999999999998, -0.10000000000000001, 0.20999999999999999, 0.17999999999999999, -3.21, 1.75, 2.3700000000000001, -0.57871485939443867, 1.3300000000000001, 0.040000000000000001, 1.4099999999999999, 2.8199999999999998, 0.42999999999999999, -0.22, 1.1899999999999999, 2.0299999999999998, 1.6699999999999999, 1.1899999999999999, -0.60999999999999999, 1.3300000000000001, 0.02, 0.47999999999999998, 0.48215161133164569, 0.72999999999999998, 2.6000000000000001, 1.3799999999999999, 1.25, 1.0700000000000001, 1.8, 0.67000000000000004, 1.77, 0.76000000000000001, 1.76, 0.90000000000000002, 1.46, 3, 1.49, 1.2648820638332896, 0.41999999999999998, 2.3500000000000001, 1.46, 3.5299999999999998, 1.2648820638332896, 1.53, 2.3799999999999999, 0.77000000000000002, 1.2648820638332896, 1.8700000000000001, -0.26000000000000001, 0.22, 1.2648820638332896, 1.2648820638332896, 1.2648820638332896, -1.53, 1.2648820638332896, 1.2648820638332896, 1.3600000000000001, 1.2648820638332896, 1.2648820638332896, 1.2648820638332896, 1.2648820638332896, 1.2648820638332896, 1.2648820638332896, 0.5, 1.1399999999999999, 2.25, 2.8900000000000001, 0.5, 1.1200000000000001, 1.3999999999999999, 3.1699999999999999, 2.9300000000000002, 2.3100000000000001, 1.8300000000000001, 2.2000000000000002, 5.9400000000000004, 0.90000000000000002, 2.6000000000000001, 5.1500000000000004, 6.6100000000000003, 6.21, 2.8599999999999999, 3.21, 2.0299999999999998, 1.8600000000000001, 2.3700000000000001, 1.3100000000000001, 3.73, 3.25, 3.4100000000000001, 1.02, 2.0499999999999998, 2.8700000000000001, 2.2611959241588577, 1.1899999999999999, 2.7400000000000002, 3.25, 2.8199999999999998, 2.5899999999999999, 2.8199999999999998, 2.9199999999999999, 2.4700000000000002, 3.73, 2.7999999999999998, 2.1200000000000001, 2.8700000000000001, 2.8500000000000001, 2.9399999999999999, 2.8900000000000001, 3.5, 1.25, 2.71, 2.5, 2.46, 2.6099999999999999, 2.9300000000000002, 2.7629161362004688, 4.6799999999999997, 2.6699999999999999, 2.79, 2.0699999999999998, 4.1600000000000001, 2.8999999999999999, 2.0499999999999998, 1.5, 2.0600000000000001, 0.67000000000000004, 3.1000000000000001, 3.4199999999999999, 2.5899999999999999, 0.23999999999999999, 4.7599999999999998, 0.46000000000000002, 1.99, 2.7629161362004688, 2.0800000000000001, 1.0800000000000001, 2.7629161362004688, 2.23, 2.79, 2.7629161362004688, 0.93999999999999995, 1.3300000000000001, 0.26000000000000001, 1.01, 1.1299999999999999, 1.3600000000000001, 0.25, 0.76000000000000001, 1.6599999999999999, 1.8400000000000001, 1.2330055606296293, 1.7, 1.3100000000000001, 1.1499999999999999, 2.0800000000000001, 0.37, 1.1499999999999999, 1.46, 1.29, -0.51000000000000001, 1.79, 0.41999999999999998, 0.65000000000000002, -0.44, 1.1200000000000001, 1.2330055606296293, 1.2330055606296293, 1.4099999999999999, 2.4900000000000002, 0.34000000000000002, 1.2330055606296293, 0.72999999999999998, 1.2330055606296293, 0.69999999999999996, -0.48999999999999999, 1.2330055606296293, 1.1299999999999999, 1.3600000000000001, -0.050000000000000003, -0.78000000000000003, 1.2330055606296293, 1.2330055606296293, 1.2330055606296293, 1.2330055606296293, 1.2330055606296293, 1.2330055606296293, 1.2330055606296293, 1.2330055606296293, 1.2330055606296293, 1.2330055606296293, 1.2330055606296293, 1.2330055606296293, 1.2330055606296293, 1.2330055606296293, 0.82999999999999996, 1.1100000000000001, 1.5600000000000001, 1.5600000000000001, 1.5600000000000001, 1.5600000000000001, 1.1100000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [-1.8500000000000001, 0.47999999999999998, 0.47999999999999998, 0.47999999999999998, 0.17000000000000001, 0.41999999999999998, -0.14999999999999999, 1.3500000000000001, 0.35999999999999999, -0.14999999999999999, 0.34000000000000002, 0.46999999999999997, 1.3, 2.2200000000000002, 0.050000000000000003, 0.20999999999999999, 0.13, -2.2599999999999998, -1.8200000000000001, -0.29999999999999999, 0.76000000000000001, 0.40999999999999998, 0.40602610375477272, -0.050000000000000003, 0.46000000000000002, 0.46000000000000002, -0.48999999999999999, -0.28000000000000003, -0.64000000000000001, -0.34999999999999998, 0.20999999999999999, 0.44, 0.78000000000000003, 0.78030514230657477, 0.78030514230657477, 0.78030514230657477, 1.3899999999999999, 1.3600000000000001, 1.3, 1.3, 1.1100000000000001, 0.72999999999999998, 0.31, -0.35999999999999999, -0.27000000000000002, -0.79000000000000004, -0.80000000000000004, -1.8, -0.059999999999999998, 0.17000000000000001, 0.11, -1.3400000000000001, 2.29, 2.77, -0.75073184934632409, 1.3300000000000001, 0.080000000000000002, 1.4299999999999999, 2.6800000000000002, 0.39000000000000001, -0.23000000000000001, 1.3, 2.1200000000000001, 1.75, 1.22, -0.58999999999999997, 1.52, -0.19, 0.55000000000000004, 0.55139121825634629, 0.67000000000000004, 2.4300000000000002, 1.3600000000000001, 1.26, 1.0700000000000001, 1.78, 0.65000000000000002, 2.0800000000000001, 0.81000000000000005, 1.6100000000000001, 0.92000000000000004, 1.45, 2.8999999999999999, 1.46, 1.2495410033244874, 0.34999999999999998, 2.4399999999999999, 1.3700000000000001, 3.5, 1.2495410033244874, 1.8300000000000001, 2.3500000000000001, 0.85999999999999999, 1.2495410033244874, 1.72, 0.28000000000000003, 0.20999999999999999, 1.2495410033244874, 1.2495410033244874, 1.2495410033244874, -1.6299999999999999, 1.2495410033244874, 1.2495410033244874, 1.4099999999999999, 1.2495410033244874, 1.2495410033244874, 1.2495410033244874, 1.2495410033244874, 1.2495410033244874, 1.2495410033244874, 0.77000000000000002, 1.22, 2.1099999999999999, 3.6899999999999999, 0.39000000000000001, 1.1000000000000001, 1.28, 3.5, 2.9100000000000001, 1.74, 1.8500000000000001, 2.5499999999999998, 1.1000000000000001, 0.97999999999999998, 2.5299999999999998, 6.5899999999999999, 10.68, 5.1600000000000001, -0.13, 2.48, 2.21, 1.8999999999999999, 1.99, 1.3400000000000001, 3.75, 3.23, 3.4900000000000002, 1.25, -4.79, 3.02, 1.9762221367569504, 1.26, 2.7599999999999998, 3.3500000000000001, 2.8500000000000001, 2.8500000000000001, 2.6600000000000001, 2.9100000000000001, 2.4399999999999999, 3.7599999999999998, 2.9300000000000002, 2.0800000000000001, 2.7999999999999998, 2.8300000000000001, 2.9700000000000002, 2.8599999999999999, 3.3799999999999999, 1.4399999999999999, 2.7200000000000002, 1.5700000000000001, 2.4700000000000002, 2.5699999999999998, 2.7175476588028684, 2.9300000000000002, 3.54, 2.6499999999999999, 2.6899999999999999, 3.2400000000000002, 1.53, 3.9300000000000002, 1.8799999999999999, 1.5600000000000001, 2.0099999999999998, 0.73999999999999999, 3.1000000000000001, 3.5299999999999998, 2.6299999999999999, 0.16, 4.4699999999999998, 0.48999999999999999, 1.8999999999999999, 2.7175476588028684, 2.1200000000000001, 1.2, 2.7175476588028684, 2.1200000000000001, -2.6299999999999999, 2.7175476588028684, 0.93000000000000005, 1.4299999999999999, 1.1499999999999999, 0.98999999999999999, 1.0900000000000001, 1.3200000000000001, 0.27000000000000002, 0.84999999999999998, 1.6399999999999999, 1.8200000000000001, 1.2305785321834852, 1.6799999999999999, 1.3, 1.1299999999999999, 2.0099999999999998, 0.38, 1.47, 1.3, 1.24, 1.78, -1.1599999999999999, 0.45000000000000001, 0.68999999999999995, -0.5, 1.1000000000000001, 1.2305785321834852, 1.2305785321834852, 1.25, 2.2799999999999998, 0.28000000000000003, 1.2305785321834852, 0.70999999999999996, 1.2305785321834852, 0.77000000000000002, -0.56000000000000005, 1.2305785321834852, 0.93999999999999995, 1.2, -0.02, -0.85999999999999999, 1.2305785321834852, 1.2305785321834852, 1.2305785321834852, 1.2305785321834852, 1.2305785321834852, 1.2305785321834852, 1.2305785321834852, 1.2305785321834852, 1.2305785321834852, 1.2305785321834852, 1.2305785321834852, 1.2305785321834852, 1.2305785321834852, 1.2305785321834852, 0.72999999999999998, 0.97999999999999998, 1.3899999999999999, 1.3899999999999999, 1.3899999999999999, 1.3899999999999999, 0.76000000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.19, 0.47999999999999998, 0.47999999999999998, 0.47999999999999998, 0.27000000000000002, 0.90000000000000002, -0.54000000000000004, 1, 0.059999999999999998, -0.40999999999999998, 0.46000000000000002, 0.37, 0.62, 2.3999999999999999, 1.0000000000000001e-05, 0.14000000000000001, 0.17000000000000001, -1.3400000000000001, -1.24, -0.35999999999999999, 0.73999999999999999, 0.38, 0.37683189644854853, 0.01, 0.47999999999999998, 0.47999999999999998, -0.45000000000000001, -0.52000000000000002, -0.57999999999999996, -0.31, 0.20999999999999999, 0.41999999999999998, 0.69999999999999996, 0.70037189118901877, 0.70037189118901877, 0.70037189118901877, 1.4399999999999999, 1.3300000000000001, 1.3100000000000001, 1.3100000000000001, 1.0600000000000001, 0.87, 0.53000000000000003, -0.25, -0.17000000000000001, -0.48999999999999999, -0.73999999999999999, -1.8500000000000001, -0.01, 0.12, 0.080000000000000002, 0.63, 2.2000000000000002, 1.9399999999999999, -0.61561491883986841, 1.48, 0.17000000000000001, 1.4099999999999999, 1.47, 0.41999999999999998, -0.16, 1.3300000000000001, 2.1800000000000002, 1.8100000000000001, 1.6699999999999999, -0.5, 1.75, -0.16, 0.68000000000000005, 0.68277212998234837, 1.1000000000000001, 2.04, 1.3300000000000001, 1.26, 1.0700000000000001, 1.74, 0.64000000000000001, 2.4500000000000002, 0.84999999999999998, 1.6200000000000001, 0.75, 1.45, 2.7799999999999998, 1.4299999999999999, 1.2334565032296239, 0.29999999999999999, 2.5, 1.27, 3.4399999999999999, 1.2334565032296239, 1.8100000000000001, 2.3700000000000001, 0.90000000000000002, 1.2334565032296239, 1.5800000000000001, 0.32000000000000001, -0.10000000000000001, 1.2334565032296239, 1.2334565032296239, 1.2334565032296239, 1.2334565032296239, -1.6200000000000001, 1.2334565032296239, 1.4299999999999999, 1.2334565032296239, 1.2334565032296239, 1.2334565032296239, 1.2334565032296239, 1.2334565032296239, 1.2334565032296239, 0.53000000000000003, 1.24, 1.8, 4.0800000000000001, 0.23999999999999999, 1.0900000000000001, 1.28, 4.4900000000000002, 2.8900000000000001, -0.55000000000000004, 1.8500000000000001, 1.4199999999999999, 1.04, 2.6099999999999999, 2.4700000000000002, 9.7599999999999998, 7.6799999999999997, 5.4699999999999998, 1.0600000000000001, 2.2000000000000002, 2.2599999999999998, 1.9399999999999999, 2.1299999999999999, 1.3500000000000001, 3.8100000000000001, 2.9199999999999999, 3.4900000000000002, 1.28, -5.2800000000000002, 3.1200000000000001, 1.9975704643466679, 1.3300000000000001, 2.75, 3.3599999999999999, 2.8300000000000001, 2.9100000000000001, 2.5299999999999998, 2.8900000000000001, 2.46, 3.7599999999999998, 3.0099999999999998, 2.0600000000000001, 2.73, 2.8100000000000001, 3.0299999999999998, 2.8300000000000001, 3.2999999999999998, 1.8200000000000001, 2.73, 1.8100000000000001, 2.4500000000000002, 2.46, 2.7071229160516608, 2.9199999999999999, 3.5299999999999998, 2.6000000000000001, 2.6299999999999999, 2.7799999999999998, 0.87, 3.54, 1.3899999999999999, 1.6299999999999999, 1.9199999999999999, 3.0899999999999999, 0.82999999999999996, 3.5600000000000001, 2.6800000000000002, 4.2000000000000002, 0.28000000000000003, 0.55000000000000004, 1.8500000000000001, 2.7071229160516608, 2.1400000000000001, 1.2, 2.7071229160516608, 2.0600000000000001, 0.97999999999999998, 2.7071229160516608, 0.90000000000000002, 1.3999999999999999, 1.1399999999999999, 0.96999999999999997, 1.04, 1.28, 0.28000000000000003, 0.92000000000000004, 1.6000000000000001, 1.78, 1.2667364821367462, 1.6499999999999999, 1.28, 1.54, 1.95, 0.39000000000000001, 1.47, 1.3500000000000001, 1.2, 1.78, -1.21, 0.5, 0.72999999999999998, -0.040000000000000001, 1.0700000000000001, 1.2667364821367462, 1.2667364821367462, 1.0800000000000001, 2.2599999999999998, 0.26000000000000001, 1.2667364821367462, 0.56999999999999995, 1.2667364821367462, 0.85999999999999999, -0.56999999999999995, 1.2667364821367462, 0.81000000000000005, 1.0800000000000001, 0.20999999999999999, 0.35999999999999999, 1.2667364821367462, 1.2667364821367462, 1.2667364821367462, 1.2667364821367462, 1.2667364821367462, 1.2667364821367462, 1.2667364821367462, 1.2667364821367462, 1.2667364821367462, 1.2667364821367462, 1.2667364821367462, 1.2667364821367462, 1.2667364821367462, 1.2667364821367462, 0.72999999999999998, 1.0900000000000001, 1.75, 1.75, 1.75, 1.75, 0.55000000000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.27000000000000002, 0.52000000000000002, 0.52000000000000002, 0.52000000000000002, 1.1599999999999999, 1.3999999999999999, -0.72999999999999998, 0.90000000000000002, -0.33000000000000002, -0.55000000000000004, 0.58999999999999997, 0.28999999999999998, 0.46999999999999997, 2.3100000000000001, -0.059999999999999998, 0.029999999999999999, 0.11, -1.01, -1.0700000000000001, -0.35999999999999999, 0.84999999999999998, 0.41999999999999998, 0.41684787940622742, 0.050000000000000003, 0.46000000000000002, 0.46000000000000002, -0.37, -0.28000000000000003, -0.56000000000000005, -0.28000000000000003, 0.14000000000000001, 0.53000000000000003, 0.67000000000000004, 0.67005556004082245, 0.67005556004082245, 0.67005556004082245, 0.78000000000000003, 1.3, 1.21, 1.21, 1.1499999999999999, 0.81999999999999995, 0.94999999999999996, -0.23000000000000001, -0.17999999999999999, -0.48999999999999999, -0.29999999999999999, -1.5600000000000001, -0.029999999999999999, 0.14000000000000001, 0.10000000000000001, 0.5, 2.0699999999999998, 0.46000000000000002, -0.49308627048353554, 1.71, 0.20999999999999999, 1.4399999999999999, 1.5600000000000001, 0.46000000000000002, -0.040000000000000001, 1.29, 2.2400000000000002, 1.8400000000000001, 1.98, -0.45000000000000001, 1.8700000000000001, -0.14000000000000001, 0.67000000000000004, 0.66907407293946919, 0.40000000000000002, 1.8, 1.3, 1.21, 1.0800000000000001, 1.6899999999999999, 0.60999999999999999, 1.6200000000000001, 0.84999999999999998, 1.5900000000000001, 0.54000000000000004, 1.4299999999999999, 2.6899999999999999, 1.3999999999999999, 1.1905074376222535, 0.26000000000000001, 2.54, 1.24, 3.3500000000000001, 1.78, 1.1905074376222535, 2.3900000000000001, 0.91000000000000003, 1.1905074376222535, 1.51, 0.34999999999999998, -0.38, 1.1905074376222535, 1.1905074376222535, 1.1905074376222535, 1.1905074376222535, -0.79000000000000004, 1.1905074376222535, 0.58999999999999997, 1.1905074376222535, 1.1905074376222535, 1.1905074376222535, 1.1905074376222535, 1.1905074376222535, 1.1905074376222535, 0.46000000000000002, 1.27, 1.54, 3.4700000000000002, 0.19, 1.0700000000000001, 1.46, 4.6699999999999999, 2.8599999999999999, -5.0300000000000002, 1.8700000000000001, 6.4800000000000004, 1, 9.2300000000000004, 2.3999999999999999, 7.6500000000000004, 7.1600000000000001, 6.5899999999999999, 2.9500000000000002, 2.1200000000000001, 2.3199999999999998, 1.97, 2.3399999999999999, 1.3400000000000001, 3.8199999999999998, 2.9199999999999999, 3.5600000000000001, 1.1200000000000001, 1.95, 2.8999999999999999, 2.29730046512775, 1.3600000000000001, 2.7000000000000002, 3.4100000000000001, 2.75, 3.02, 2.4100000000000001, 2.8799999999999999, 2.4500000000000002, 3.7400000000000002, 3.0699999999999998, 2.6699999999999999, 2.0600000000000001, 2.8100000000000001, 3.0099999999999998, 2.8100000000000001, 3.27, 2.1600000000000001, 2.71, 3.2599999999999998, 2.4399999999999999, 2.731608597624033, 2.3799999999999999, 2.8999999999999999, 3.5499999999999998, 2.5600000000000001, 2.5600000000000001, 2.4100000000000001, 0.60999999999999999, 2.1800000000000002, 1.3400000000000001, 1.6899999999999999, 1.9099999999999999, 3.0499999999999998, 0.93000000000000005, 3.5099999999999998, 2.6899999999999999, 4.1299999999999999, 0.23999999999999999, 0.62, 1.8100000000000001, 2.731608597624033, 2.1400000000000001, 1.1299999999999999, 2.731608597624033, 2, 1.8500000000000001, 2.731608597624033, 0.87, 1.3200000000000001, 1.1200000000000001, 0.95999999999999996, 0.98999999999999999, 1.24, 0.29999999999999999, 0.96999999999999997, 1.53, 1.76, 1.2622284079754633, 1.6299999999999999, 1.5, 1.25, 1.8999999999999999, 0.39000000000000001, 1.46, 1.3799999999999999, 1.1499999999999999, 1.76, -1.1499999999999999, 0.47999999999999998, 0.71999999999999997, 0.46000000000000002, 1.04, 1.2622284079754633, 1.2622284079754633, 0.93000000000000005, 2.2400000000000002, 0.23999999999999999, 1.2622284079754633, 0.48999999999999999, 1.2622284079754633, 0.89000000000000001, -0.58999999999999997, 1.2622284079754633, 0.75, 0.93000000000000005, -0.10000000000000001, 0.31, 1.2622284079754633, 1.2622284079754633, 1.2622284079754633, 1.2622284079754633, 1.2622284079754633, 1.2622284079754633, 1.2622284079754633, 1.2622284079754633, 1.2622284079754633, 1.2622284079754633, 1.2622284079754633, 1.2622284079754633, 1.2622284079754633, 1.2622284079754633, 0.68999999999999995, 1.0600000000000001, 1.72, 1.72, 1.72, 1.72, 0.77000000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.41999999999999998, 0.46999999999999997, 0.46999999999999997, 0.46999999999999997, 0.92000000000000004, 2, -0.67000000000000004, 0.85999999999999999, -0.29999999999999999, -0.54000000000000004, 0.78000000000000003, 0.35999999999999999, 0.44, 2.3599999999999999, -0.070000000000000007, 0.11, 0.10000000000000001, -0.85999999999999999, -0.93999999999999995, -0.26000000000000001, 0.98999999999999999, 0.51000000000000001, 0.50651162713068021, 0.10000000000000001, 0.40999999999999998, 0.41000000000000003, -0.37, -0.27000000000000002, -0.56999999999999995, -0.40999999999999998, 0.10000000000000001, 0.72999999999999998, 0.73999999999999999, 0.73969032419546699, 0.73969032419546699, 0.73969032419546699, 0.13, 1.24, 1.1299999999999999, 1.1299999999999999, 1.22, 0.78000000000000003, 1.1100000000000001, -0.47999999999999998, -0.20999999999999999, -0.46999999999999997, 0.050000000000000003, -1.29, -0.059999999999999998, 0.17000000000000001, 0.10000000000000001, 0.35999999999999999, 1.9199999999999999, 0.31, -0.38100330385345449, 1.99, 0.22, 1.47, 1.6899999999999999, 0.5, 1.25, 0.059999999999999998, 2.3100000000000001, 1.8400000000000001, 2.0099999999999998, -0.40000000000000002, 2.0099999999999998, -0.13, 0.63, 0.6308939943373657, 0.69999999999999996, 1.8, 1.24, 1.1599999999999999, 1.0700000000000001, 1.6200000000000001, 0.55000000000000004, 1.3, 0.82999999999999996, 1.55, 0.51000000000000001, 1.3999999999999999, 2.6200000000000001, 1.3600000000000001, 1.1639349832474395, 0.23000000000000001, 2.54, 1.2, 3.9199999999999999, 1.6599999999999999, 1.1639349832474395, 2.3999999999999999, 0.91000000000000003, 1.1639349832474395, 1.47, 0.38, -0.42999999999999999, 1.1639349832474395, 1.1639349832474395, 1.1639349832474395, 1.1639349832474395, -0.050000000000000003, 1.1639349832474395, -0.17000000000000001, 1.1639349832474395, 1.1639349832474395, 1.1639349832474395, 1.1639349832474395, 1.1639349832474395, 1.1639349832474395, 0.63, 1.25, 1.4099999999999999, 3.6600000000000001, 0.28999999999999998, 1.02, 1.8999999999999999, 3.5, 2.8100000000000001, -6.8499999999999996, 11.789999999999999, 1.9199999999999999, 0.95999999999999996, 9.9700000000000006, 2.3399999999999999, 4.9199999999999999, 3.1099999999999999, 8.4299999999999997, 3.8500000000000001, 2.02, 2.3399999999999999, 1.98, 2.77, 1.3100000000000001, 3.7799999999999998, 3.1699999999999999, 3.5699999999999998, 1.1299999999999999, 1.8600000000000001, 2.6400000000000001, 2.4040181799993916, 1.5800000000000001, 2.6299999999999999, 3.4500000000000002, 2.71, 3.1200000000000001, 2.29, 2.9700000000000002, 2.4100000000000001, 3.6800000000000002, 3.0699999999999998, 2.6299999999999999, 2.3199999999999998, 3.04, 2.98, 2.79, 3.25, 2.1899999999999999, 2.7200000000000002, 3.4900000000000002, 2.48, 2.3799999999999999, 2.7452550251693011, 2.9300000000000002, 3.3500000000000001, 2.5299999999999998, 2.4900000000000002, 2.3900000000000001, -0.080000000000000002, 2.0600000000000001, 0.81999999999999995, 1.73, 1.9299999999999999, 2.9700000000000002, 1.02, 3.3399999999999999, 2.6499999999999999, 4.04, 0.17999999999999999, 0.67000000000000004, 1.77, 2.7452550251693011, 2.1499999999999999, 1.1299999999999999, 2.7452550251693011, 1.9099999999999999, 1.5600000000000001, 2.7452550251693011, 0.85999999999999999, 1.24, 1.1000000000000001, 1.01, 0.94999999999999996, 1.1799999999999999, 0.31, 1.04, 1.48, 1.73, 1.2463141557879023, 1.6000000000000001, 1.47, 1.22, 1.8500000000000001, 0.39000000000000001, 1.4099999999999999, 1.45, 1.0900000000000001, 1.74, -1.6299999999999999, 0.40999999999999998, 0.68999999999999995, 0.48999999999999999, 1.01, 1.2463141557879023, 1.2463141557879023, 0.90000000000000002, 2.1899999999999999, 0.23000000000000001, 1.2463141557879023, 0.46999999999999997, 1.2463141557879023, 0.87, 1.2463141557879023, -0.5, 0.68999999999999995, 0.82999999999999996, 0.80000000000000004, 0.20999999999999999, 1.2463141557879023, 1.2463141557879023, 1.2463141557879023, 1.2463141557879023, 1.2463141557879023, 1.2463141557879023, 1.2463141557879023, 1.2463141557879023, 1.2463141557879023, 1.2463141557879023, 1.2463141557879023, 1.2463141557879023, 1.2463141557879023, 1.2463141557879023, 0.72999999999999998, 1.01, 1.49, 1.49, 1.49, 1.49, 1.6599999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.87, 0.35999999999999999, 0.35999999999999999, 0.35999999999999999, -0.10000000000000001, 2.3900000000000001, -0.66000000000000003, 0.87, -0.080000000000000002, -0.40999999999999998, 1.1200000000000001, 0.44, 0.57999999999999996, 2.3599999999999999, -0.070000000000000007, 0.20000000000000001, 0.10000000000000001, -0.93999999999999995, -0.81999999999999995, 0.070000000000000007, 1.0600000000000001, 0.70999999999999996, 0.71008530656704083, 0.71999999999999997, 0.33000000000000002, 0.33000000000000002, -0.46999999999999997, -0.23999999999999999, -0.64000000000000001, -0.81999999999999995, 0.080000000000000002, 0.93999999999999995, 0.79000000000000004, 0.78970449556781885, 0.78970449556781885, 0.78970449556781885, 0.20999999999999999, 1.1899999999999999, 1, 1, 1.1399999999999999, 0.69999999999999996, 1.04, -0.26000000000000001, -0.28999999999999998, -0.48999999999999999, 0.16, -1.3200000000000001, -0.77000000000000002, 0.13, 0.059999999999999998, 0.17000000000000001, 1.78, 0.54000000000000004, -0.47152402308904923, 1.9399999999999999, 0.19, 1.46, 1.74, 0.52000000000000002, 1.1899999999999999, 0.13, 2.3500000000000001, 1.8100000000000001, 2.0600000000000001, 2.1099999999999999, -0.39000000000000001, -0.11, 0.57999999999999996, 0.58199298065952432, 0.84999999999999998, 1.8200000000000001, 1.1899999999999999, 1.1100000000000001, 1.04, 1.6699999999999999, 0.47999999999999998, 1.1899999999999999, 0.80000000000000004, 1.5, 0.46000000000000002, 1.3500000000000001, 2.54, 1.4199999999999999, 1.1277632997852982, 0.17999999999999999, 2.5299999999999998, 4.4199999999999999, 1.1399999999999999, 0.52000000000000002, 1.1277632997852982, 2.3799999999999999, 0.90000000000000002, 1.1277632997852982, 1.49, 0.40000000000000002, -0.46999999999999997, 1.1277632997852982, 1.1277632997852982, 1.1277632997852982, -0.01, 1.1277632997852982, 1.1277632997852982, -0.20000000000000001, 1.1277632997852982, 1.1277632997852982, 1.1277632997852982, 1.1277632997852982, 1.1277632997852982, 1.1277632997852982, 0.53000000000000003, 1.1899999999999999, 1.3, 3.1200000000000001, 0.54000000000000004, 0.93000000000000005, 2.2599999999999998, 2.71, 2.71, -4.4199999999999999, 9.2200000000000006, 0.91000000000000003, 1.98, 1.97, 2.29, 4.4500000000000002, 3.8399999999999999, 8.6500000000000004, 3.8199999999999998, 1.9199999999999999, 2.21, 3.1099999999999999, 2, 1.25, 3.8300000000000001, 3.1499999999999999, 3.1800000000000002, 1.1200000000000001, 1.54, 2.6499999999999999, 2.4383353310575129, 2.0699999999999998, 2.54, 3.3900000000000001, 2.7000000000000002, 3.3399999999999999, 2.2000000000000002, 3.0899999999999999, 2.3599999999999999, 3.6200000000000001, 3.04, 2.5899999999999999, 2.5800000000000001, 3.1499999999999999, 2.9700000000000002, 2.7599999999999998, 3.1899999999999999, 2.7200000000000002, 2.1400000000000001, 3.3599999999999999, 2.5499999999999998, 2.3900000000000001, 2.9500000000000002, 2.7479520906745365, 2.1899999999999999, 2.5, 2.4100000000000001, 2.3900000000000001, 2.04, 0.42999999999999999, 0.5, 1.75, 2.8900000000000001, 1.96, 1.1000000000000001, 3.0899999999999999, 2.5800000000000001, 3.9199999999999999, 0.13, 0.70999999999999996, 1.72, 2.7479520906745365, 2.1600000000000001, 1.1100000000000001, 2.7479520906745365, 1.8200000000000001, 2.23, 2.7479520906745365, 0.84999999999999998, 1.1699999999999999, 1.0800000000000001, 1.03, 0.93999999999999995, 1.1100000000000001, 0.33000000000000002, 1.1699999999999999, 1.48, 1.6899999999999999, 1.2569331893336817, 1.5700000000000001, 1.4399999999999999, 1.2, 1.8100000000000001, 0.34999999999999998, 1.4199999999999999, 1.4399999999999999, 1.05, 1.74, -1.76, 0.34999999999999998, 0.65000000000000002, 0.52000000000000002, 1.01, 1.2569331893336817, 0.91000000000000003, 1.2569331893336817, 2.1200000000000001, 0.20999999999999999, 1.2569331893336817, 0.46999999999999997, 1.2569331893336817, 0.84999999999999998, 0.64000000000000001, 1.2569331893336817, -0.40000000000000002, 0.79000000000000004, 0.91000000000000003, 0.14999999999999999, 1.2569331893336817, 1.2569331893336817, 1.2569331893336817, 1.2569331893336817, 1.2569331893336817, 1.2569331893336817, 1.2569331893336817, 1.2569331893336817, 1.2569331893336817, 1.2569331893336817, 1.2569331893336817, 1.2569331893336817, 1.2569331893336817, 1.2569331893336817, 0.73999999999999999, 0.75, 1.4399999999999999, 1.4399999999999999, 1.4399999999999999, 1.4399999999999999, 2.04],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.81000000000000005, 0.26000000000000001, 0.26000000000000001, 0.26000000000000001, -0.17000000000000001, 2.29, -0.41999999999999998, 0.89000000000000001, 0.080000000000000002, -0.32000000000000001, 1.0800000000000001, 0.53000000000000003, 0.51000000000000001, 2.1600000000000001, -0.040000000000000001, 0.19, 0.13, -1.27, -0.91000000000000003, 0.029999999999999999, 1.26, 0.78000000000000003, 0.78522253150771415, 1.3899999999999999, 0.28999999999999998, 0.28999999999999998, -0.56999999999999995, -0.29999999999999999, -0.69999999999999996, -0.69999999999999996, 0.070000000000000007, 1.1299999999999999, 0.76000000000000001, 0.75968211013466913, 0.75968211013466913, 0.75968211013466913, 0.14000000000000001, 1.1899999999999999, 0.88, 0.88000000000000012, 1.0900000000000001, 0.68000000000000005, 1.3899999999999999, -0.33000000000000002, -0.16, -0.52000000000000002, 0.059999999999999998, -1.24, -1.1599999999999999, 0.11, 0.02, 1.1000000000000001, 0.83999999999999997, 0.78000000000000003, -0.5378965153157319, 1.71, 0.17000000000000001, 1.4199999999999999, 1.74, 0.52000000000000002, 1.1200000000000001, 0.089999999999999997, 2.3300000000000001, 1.76, 2.04, 2.1600000000000001, -0.44, -0.050000000000000003, 0.56999999999999995, 0.57085651447281294, 0.62, 1.8400000000000001, 1.1899999999999999, 1.0600000000000001, 1.01, 1.77, 0.44, 1.3, 0.79000000000000004, 1.46, 0.41999999999999998, 1.3300000000000001, 2.4700000000000002, 1.52, 1.1083390533752355, 0.13, 2.4900000000000002, 4.2000000000000002, 1.0800000000000001, 0.28000000000000003, 1.1083390533752355, 2.4199999999999999, 0.95999999999999996, 1.1083390533752355, 1.54, 0.41999999999999998, -0.39000000000000001, 1.1083390533752355, 1.1083390533752355, 1.1083390533752355, 0.12, 1.1083390533752355, 1.1083390533752355, 1.1083390533752355, -0.23000000000000001, 1.1083390533752355, 1.1083390533752355, 1.1083390533752355, 1.1083390533752355, 1.1083390533752355, 0.40000000000000002, 1.23, 1.2, 2.5800000000000001, 0.90000000000000002, 0.87, 1.8400000000000001, 2.46, 2.6200000000000001, -1.26, 4.8399999999999999, 0.85999999999999999, 1.96, -2.2200000000000002, 4.7999999999999998, 2.25, 3.5, 7.21, 3.4300000000000002, 2.0099999999999998, 2.0899999999999999, 3.1099999999999999, 1.99, 1.22, 3.8700000000000001, 3.1899999999999999, 3.1499999999999999, 1.1000000000000001, 1.4399999999999999, 2.6400000000000001, 2.439871209009735, 0.96999999999999997, 2.5099999999999998, 3.4700000000000002, 2.7200000000000002, 3.48, 2.2000000000000002, 3.3300000000000001, 2.3399999999999999, 3.5899999999999999, 3.1299999999999999, 2.5899999999999999, 2.5800000000000001, 2.9900000000000002, 2.9300000000000002, 2.7200000000000002, 3.1499999999999999, 2.7200000000000002, 2.0800000000000001, 3.77, 2.5899999999999999, 2.4399999999999999, 2.9500000000000002, 1.6299999999999999, 2.786664666816022, 2.4900000000000002, 2.4199999999999999, 2.3900000000000001, 2.0099999999999998, 1.75, 0.75, 1.77, 2.7999999999999998, 2.0299999999999998, 1.1899999999999999, 2.7999999999999998, 2.52, 3.7799999999999998, 0.070000000000000007, 0.75, 1.6799999999999999, 2.786664666816022, 2.1699999999999999, 1.1200000000000001, 2.786664666816022, 1.73, 1.3400000000000001, 2.786664666816022, 0.81000000000000005, 1.1299999999999999, 1.0600000000000001, 1.1899999999999999, 1.0700000000000001, 0.68999999999999995, 0.32000000000000001, 1.3600000000000001, 1.49, 1.6599999999999999, 1.2796489255436383, 1.55, 1.4099999999999999, 1.1599999999999999, 1.77, 1.4199999999999999, 1.4299999999999999, 0.31, 1.02, 1.73, -1.9299999999999999, 0.28999999999999998, 0.62, 0.54000000000000004, 1.03, 1.2796489255436383, 0.82999999999999996, 1.2796489255436383, 2.0499999999999998, 0.20000000000000001, 1.2796489255436383, 0.45000000000000001, 1.2796489255436383, 0.82999999999999996, 0.58999999999999997, 1.2796489255436383, -0.48999999999999999, 0.68999999999999995, 0.10000000000000001, -1.05, 1.2796489255436383, 1.2796489255436383, 1.2796489255436383, 1.2796489255436383, 1.2796489255436383, 1.2796489255436383, 1.2796489255436383, 1.2796489255436383, 1.2796489255436383, 1.2796489255436383, 1.2796489255436383, 1.2796489255436383, 1.2796489255436383, 1.2796489255436383, 0.71999999999999997, 1.1299999999999999, 1.5600000000000001, 1.5600000000000001, 1.5600000000000001, 1.5600000000000001, 2.25],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.37, 0.28999999999999998, 0.28999999999999998, 0.28999999999999998, -0.14999999999999999, 2.7400000000000002, -0.20000000000000001, 0.88, 0.23000000000000001, -0.23999999999999999, 0.68999999999999995, 0.58999999999999997, 0.39000000000000001, 2.4300000000000002, 0.01, 0.27000000000000002, 0.16, -1.3999999999999999, -0.89000000000000001, 0.12, 1.3500000000000001, 0.64000000000000001, 0.64707619839309727, 1.46, 0.23000000000000001, 0.23000000000000001, -0.57999999999999996, -0.27000000000000002, -0.72999999999999998, -1.2, 0.070000000000000007, 1.0900000000000001, 0.68000000000000005, 0.67970466434743326, 0.67970466434743326, 0.67970466434743326, 0.11, 1.1599999999999999, 0.81000000000000005, 0.81000000000000005, 0.93000000000000005, 0.73999999999999999, 2.3500000000000001, -0.39000000000000001, -0.089999999999999997, -0.53000000000000003, 0.01, -1.1799999999999999, -1.73, 0.10000000000000001, 0.01, 1.77, -0.070000000000000007, 0.65000000000000002, -0.61240338357351976, 1.3100000000000001, 0.11, 1.3600000000000001, 1.6799999999999999, 0.5, 0.97999999999999998, -0.11, 2.27, 1.6899999999999999, 1.9299999999999999, 2.1699999999999999, -0.48999999999999999, -0.080000000000000002, 0.60999999999999999, 0.61142878445435112, 0.77000000000000002, 1.8799999999999999, 1.1599999999999999, 1.01, 0.96999999999999997, 1.76, 0.40999999999999998, 0.089999999999999997, 0.76000000000000001, 1.4199999999999999, 0.38, 1.3100000000000001, 2.3900000000000001, 1.53, 1.0763022020676005, 0.070000000000000007, 2.4399999999999999, 3.9300000000000002, 1, 0.22, 1.0763022020676005, 2.4500000000000002, 1.01, 1.0763022020676005, 1.55, 0.46000000000000002, -0.28000000000000003, 1.0763022020676005, 1.0763022020676005, 1.0763022020676005, 0.12, 1.0763022020676005, 1.0763022020676005, 1.0763022020676005, -0.22, 1.0763022020676005, 1.0763022020676005, 1.0763022020676005, 1.0763022020676005, 1.0763022020676005, 0.28000000000000003, 1.25, 1.3300000000000001, 2.8700000000000001, 1.1499999999999999, 0.83999999999999997, 1.4299999999999999, 2.3599999999999999, 2.5600000000000001, 0.10000000000000001, 2.4900000000000002, 0.81999999999999995, 1.9399999999999999, -2.4199999999999999, 3.2200000000000002, 1.99, 1.8799999999999999, 4.3899999999999997, 3.29, 2.2999999999999998, 1.99, 3.25, 1.96, 1.1899999999999999, 3.8300000000000001, 3.2200000000000002, 3.3199999999999998, 1.0700000000000001, 1.52, 2.6299999999999999, 2.4797165421754865, 0.39000000000000001, 2.5299999999999998, 3.4399999999999999, 2.7200000000000002, 3.3700000000000001, 2.1800000000000002, 3.5, 3.5499999999999998, 2.23, 3.1000000000000001, 2.5800000000000001, 2.5899999999999999, 2.8300000000000001, 2.8700000000000001, 2.7000000000000002, 3.1099999999999999, 2.7200000000000002, 3.9199999999999999, 2.04, 2.5600000000000001, 2.48, 2.9500000000000002, 2.29, 2.7845801126406791, 2.4700000000000002, 2.4199999999999999, 2.3900000000000001, 1.9099999999999999, 1.8700000000000001, 0.93999999999999995, 1.76, 2.7200000000000002, 2.0800000000000001, 1.24, 2.5600000000000001, 2.4399999999999999, 3.6299999999999999, 0.089999999999999997, 0.77000000000000002, 1.6499999999999999, 2.7845801126406791, 2.0499999999999998, 1.1699999999999999, 2.7845801126406791, 1.6499999999999999, 1.22, 2.7845801126406791, 0.79000000000000004, 1.0800000000000001, 1.04, 1.5600000000000001, 1.51, -0.57999999999999996, 0.25, 1.51, 1.55, 1.6299999999999999, 1.52, 1.2940952630035412, 1.3899999999999999, 1.1299999999999999, 1.74, 1.4099999999999999, 1.4199999999999999, 0.26000000000000001, 0.97999999999999998, 1.72, -2.4199999999999999, 0.20000000000000001, 0.63, 0.55000000000000004, 1.04, 1.2940952630035412, 0.77000000000000002, 1.2940952630035412, 1.99, 0.19, 1.2940952630035412, 0.41999999999999998, 1.2940952630035412, 0.79000000000000004, 0.54000000000000004, 1.2940952630035412, -0.39000000000000001, 0.60999999999999999, 0.46999999999999997, 1.2940952630035412, -1.0600000000000001, 1.2940952630035412, 1.2940952630035412, 1.2940952630035412, 1.2940952630035412, 1.2940952630035412, 1.2940952630035412, 1.2940952630035412, 1.2940952630035412, 1.2940952630035412, 1.2940952630035412, 1.2940952630035412, 1.2940952630035412, 1.2940952630035412, 0.63, 1.2, 1.6499999999999999, 1.6499999999999999, 1.6499999999999999, 1.6499999999999999, 2.0899999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.29999999999999999, 0.35999999999999999, 0.35999999999999999, 0.35999999999999999, -0.19, 3.4900000000000002, -0.20000000000000001, 0.84999999999999998, 0.44, -0.16, 0.48999999999999999, 0.57999999999999996, 0.46000000000000002, 1.9299999999999999, 1.0000000000000001e-05, 0.33000000000000002, 0.14000000000000001, -0.94999999999999996, -0.78000000000000003, 0.34999999999999998, 1.1599999999999999, 0.5, 0.50811481779697409, 1.4299999999999999, 0.13, 0.13, -0.58999999999999997, -0.13, -0.71999999999999997, -0.89000000000000001, 0.35999999999999999, 1.24, 0.60999999999999999, 0.60975364566927071, 0.60975364566927071, 0.60975364566927071, 0.14000000000000001, 1.0900000000000001, 0.66000000000000003, 0.66000000000000003, 0.73999999999999999, 0.77000000000000002, 2.6800000000000002, -0.46999999999999997, -0.25, -0.55000000000000004, -0.040000000000000001, -1.1699999999999999, -1.76, 0.080000000000000002, -0.02, 1.5800000000000001, -0.040000000000000001, 0.28999999999999998, -0.63215980407494832, 0.87, -0.01, 1.3100000000000001, 1.74, 0.47999999999999998, 0.87, -0.20999999999999999, 2.2400000000000002, 1.6100000000000001, 1.99, 2.1699999999999999, -0.54000000000000004, -0.13, 0.46999999999999997, 0.47242032176566046, 0.80000000000000004, 1.9199999999999999, 1.0900000000000001, 0.96999999999999997, 0.93000000000000005, 1.7, 0.32000000000000001, 0.46999999999999997, 0.71999999999999997, 1.3200000000000001, 0.76000000000000001, 1.22, 2.3300000000000001, 1.52, 1.0819947204210736, 1.0000000000000001e-05, 2.3999999999999999, 3.6000000000000001, 0.92000000000000004, 2.3999999999999999, 0.13, 1.0819947204210736, 0.98999999999999999, 1.0819947204210736, 1.5700000000000001, 0.45000000000000001, -0.25, 1.0819947204210736, 1.0819947204210736, 1.0819947204210736, 0.14999999999999999, 1.0819947204210736, 1.0819947204210736, 1.0819947204210736, 0.34000000000000002, 1.0819947204210736, 1.0819947204210736, 1.0819947204210736, 1.0819947204210736, 1.0819947204210736, 0.42999999999999999, 1.1599999999999999, 1.54, 2.8900000000000001, 1.1399999999999999, 0.79000000000000004, 1.3100000000000001, 2.4199999999999999, 2.4900000000000002, 1.8300000000000001, 2.3700000000000001, 0.79000000000000004, 1.9299999999999999, -2.6299999999999999, 1.3, 2.5299999999999998, 4.5599999999999996, 2.0099999999999998, 2.0699999999999998, 2.3799999999999999, 1.8999999999999999, 3.1899999999999999, 1.8999999999999999, 1.1200000000000001, 3.79, 3.1699999999999999, 3.3799999999999999, 1.02, 1.55, 2.6299999999999999, 2.4448793967528699, 1.23, 2.5, 3.27, 2.6699999999999999, 3.1899999999999999, 2.0299999999999998, 3.3999999999999999, 3.46, 2.1200000000000001, 2.9500000000000002, 2.5499999999999998, 2.5699999999999998, 2.7599999999999998, 2.77, 2.6899999999999999, 3.0600000000000001, 2.71, 3.6099999999999999, 2.02, 2.5299999999999998, 2.4399999999999999, 2.9199999999999999, 2.98, 2.7170144633208753, 2.4399999999999999, 2.3599999999999999, 2.3900000000000001, 1.9199999999999999, 1.9399999999999999, 1.4199999999999999, 1.73, 2.6400000000000001, 2.04, 2.3900000000000001, 1.25, 2.3700000000000001, 3.48, 0.050000000000000003, 0.78000000000000003, 1.6200000000000001, 2.7170144633208753, 1.9099999999999999, 1.1000000000000001, 2.7170144633208753, 1.5800000000000001, 0.94999999999999996, 2.7170144633208753, 0.79000000000000004, 0.94999999999999996, 1.02, 1.8, 1.8999999999999999, -2.4399999999999999, 0.14000000000000001, 1.8799999999999999, 1.8899999999999999, 1.6000000000000001, 1.49, 1.3839757660166978, 1.3600000000000001, 1.1000000000000001, 1.71, 1.3700000000000001, 1.4099999999999999, 0.14999999999999999, 0.93000000000000005, 1.6799999999999999, -4.0499999999999998, 0.12, 1.75, 2.8799999999999999, 1.04, 1.3839757660166978, 0.71999999999999997, 1.95, 1.3839757660166978, 0.17999999999999999, 1.3839757660166978, 0.40999999999999998, 1.3839757660166978, 0.76000000000000001, 0.48999999999999999, 1.3839757660166978, -0.25, 0.55000000000000004, 0.58999999999999997, 1.3839757660166978, 0.070000000000000007, 1.3839757660166978, 1.3839757660166978, 1.3839757660166978, 1.3839757660166978, 1.3839757660166978, 1.3839757660166978, 1.3839757660166978, 1.3839757660166978, 1.3839757660166978, 1.3839757660166978, 1.3839757660166978, 1.3839757660166978, 1.3839757660166978, 0.53000000000000003, 1.4099999999999999, 1.5, 1.5, 1.5, 1.5, 1.79],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.23000000000000001, 0.34000000000000002, 0.34000000000000002, 0.34000000000000002, -1.1499999999999999, 3.9300000000000002, -0.11, 0.81999999999999995, 0.71999999999999997, 0.02, 0.44, 0.66000000000000003, 0.54000000000000004, 1.96, -0.02, 0.39000000000000001, 0.14000000000000001, -0.26000000000000001, -0.69999999999999996, 0.37, 1.01, 0.35999999999999999, 0.36927083842960468, 1.4099999999999999, 0.11, 0.11, -0.53000000000000003, -0.050000000000000003, -0.69999999999999996, -0.55000000000000004, 0.69999999999999996, 1.3700000000000001, 0.56000000000000005, 0.55976115051510267, 0.55976115051510267, 0.55976115051510267, 0.11, 1.03, 0.68000000000000005, 0.68000000000000005, 0.70999999999999996, 0.79000000000000004, 2.2000000000000002, -0.53000000000000003, -0.42999999999999999, -0.54000000000000004, -0.17000000000000001, -1.1699999999999999, -1.6000000000000001, 0.02, -0.029999999999999999, 1.76, 0.01, 0.059999999999999998, -0.63330020349021721, 0.81000000000000005, -0.050000000000000003, 1.29, 1.8799999999999999, 0.46000000000000002, 0.84999999999999998, 2.2599999999999998, -0.20000000000000001, 1.53, 2.0899999999999999, 2.1400000000000001, -0.56000000000000005, -0.14000000000000001, 0.34999999999999998, 0.35281783377070347, 0.73999999999999999, 1.9299999999999999, 1.03, 0.93999999999999995, 0.90000000000000002, 1.6599999999999999, 0.25, 1.1399999999999999, 0.70999999999999996, 1.24, 0.60999999999999999, 1.1299999999999999, 2.2599999999999998, 1.5, 1.0210502339261409, -0.059999999999999998, 2.3599999999999999, 2.9700000000000002, 0.87, 2.3599999999999999, 0.029999999999999999, 1.0210502339261409, 1.05, 1.0210502339261409, 1.6100000000000001, 0.40000000000000002, -0.19, 1.0210502339261409, 1.0210502339261409, 1.0210502339261409, 0.28999999999999998, 1.0210502339261409, 1.0210502339261409, 1.0210502339261409, 0.82999999999999996, 1.0210502339261409, 1.0210502339261409, 1.0210502339261409, 1.0210502339261409, 1.0210502339261409, 0.34999999999999998, 1.1100000000000001, 1.6100000000000001, 2.9100000000000001, 1.1399999999999999, 0.69999999999999996, 1.1000000000000001, 2.3700000000000001, 2.4300000000000002, 3.8799999999999999, 2.2599999999999998, 0.78000000000000003, 1.9099999999999999, -2.8799999999999999, 2.5099999999999998, 0.040000000000000001, 2.8300000000000001, 1.45, 0.46000000000000002, 2.2799999999999998, 1.79, 2.8900000000000001, 1.8400000000000001, 1.04, 3.77, 3.1299999999999999, 3.29, 0.96999999999999997, 1.3999999999999999, 2.6099999999999999, 2.340209517225416, 1.3, 2.4500000000000002, 3.1899999999999999, 2.6600000000000001, 3.02, 1.98, 3.3999999999999999, 3.3999999999999999, 2.0899999999999999, 2.8900000000000001, 2.5299999999999998, 2.5299999999999998, 2.77, 2.7000000000000002, 2.6800000000000002, 3.0099999999999998, 2.7000000000000002, 3.6299999999999999, 1.99, 2.54, 2.3900000000000001, 2.8900000000000001, 3.2599999999999998, 2.6848903056029787, 2.4100000000000001, 2.3300000000000001, 2.3599999999999999, 1.9399999999999999, 2.2200000000000002, 1.54, 1.6899999999999999, 2.5800000000000001, 1.95, 2.29, 1.25, 2.3399999999999999, 3.3399999999999999, 0.029999999999999999, 0.79000000000000004, 1.5800000000000001, 2.6848903056029787, 1.8700000000000001, 1.02, 2.6848903056029787, 1.53, 0.89000000000000001, 2.6848903056029787, 0.77000000000000002, 0.85999999999999999, 0.98999999999999999, 1.79, 1.8300000000000001, -2.8999999999999999, 0.040000000000000001, 1.9099999999999999, 1.9099999999999999, 1.5600000000000001, 1.46, 1.4457539196074707, 1.3400000000000001, 1.0700000000000001, 1.6799999999999999, 1.3400000000000001, 1.3899999999999999, 0.059999999999999998, 0.87, 1.6000000000000001, 0.01, 0.070000000000000007, 1.01, 1.6699999999999999, 1.1000000000000001, 1.4457539196074707, 0.66000000000000003, 1.8200000000000001, 1.4457539196074707, 1.4457539196074707, 0.17999999999999999, 0.39000000000000001, 1.4457539196074707, 0.71999999999999997, 0.45000000000000001, 1.4457539196074707, -0.34000000000000002, 0.53000000000000003, 0.84999999999999998, 1.4457539196074707, -0.01, 1.4457539196074707, 1.4457539196074707, 1.4457539196074707, 1.4457539196074707, 1.4457539196074707, 1.4457539196074707, 1.4457539196074707, 1.4457539196074707, 1.4457539196074707, 1.4457539196074707, 1.4457539196074707, 1.4457539196074707, 1.4457539196074707, 0.46000000000000002, 1.4399999999999999, 1.49, 1.49, 1.49, 1.49, 1.5900000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.080000000000000002, 0.27000000000000002, 0.27000000000000002, 0.27000000000000002, -0.48999999999999999, 2.21, -0.20999999999999999, 0.70999999999999996, 0.48999999999999999, 0.11, 0.41999999999999998, 0.56000000000000005, 0.42999999999999999, 1.6699999999999999, -0.17999999999999999, 0.23999999999999999, 0.089999999999999997, 0.029999999999999999, -0.69999999999999996, 0.20000000000000001, 0.71999999999999997, 0.28999999999999998, 0.30000675903619572, 1.4099999999999999, 0.14000000000000001, 0.14000000000000001, -0.55000000000000004, -0.22, -0.59999999999999998, -0.42999999999999999, 0.67000000000000004, 1.03, 0.37, 0.36983831467148304, 0.36983831467148304, 0.36983831467148304, 0.070000000000000007, 0.95999999999999985, 0.58999999999999997, 0.58999999999999997, 0.72999999999999998, 0.70999999999999996, 1.6200000000000001, -0.56999999999999995, -0.56999999999999995, -0.67000000000000004, 0.070000000000000007, -1.27, -1.1000000000000001, -0.20000000000000001, -0.12, 1.76, -0.29999999999999999, -0.5, -0.61926057529134859, 0.78000000000000003, -0.23000000000000001, 1.3, 1.9199999999999999, 0.42999999999999999, 0.68000000000000005, 2.1800000000000002, -0.41999999999999998, 1.48, 1.8999999999999999, 1.8999999999999999, -0.53000000000000003, -0.28999999999999998, 0.23999999999999999, 0.23763420736233873, -0.35999999999999999, 1.8899999999999999, 0.95999999999999996, 0.83999999999999997, 0.91000000000000003, 1.6299999999999999, 0.23999999999999999, -0.31, 0.71999999999999997, 1.2, 0.53000000000000003, 1.1599999999999999, 2.1499999999999999, 1.48, 1.0009207039657062, 0.20999999999999999, 2.3700000000000001, 1.95, 0.83999999999999997, 2.3599999999999999, 0.45000000000000001, 1.0009207039657062, 1.4199999999999999, 1.0009207039657062, 1.77, 0.65000000000000002, 0.28999999999999998, 1.0009207039657062, 1.0009207039657062, 1.0009207039657062, 0.31, 1.0009207039657062, 1.0009207039657062, 1.0009207039657062, 1.03, 1.0009207039657062, 1.0009207039657062, 1.0009207039657062, 1.0009207039657062, 1.0009207039657062, 0.14000000000000001, 1.1399999999999999, 1.73, 3.1299999999999999, 1.77, 0.66000000000000003, 0.83999999999999997, 2.3599999999999999, 2.3100000000000001, 3.2999999999999998, 2.1299999999999999, 0.81999999999999995, 1.76, -2.0800000000000001, 2.4900000000000002, -1.3, -1.8300000000000001, -1.6799999999999999, -1.1299999999999999, 0.46999999999999997, 1.73, 2.7599999999999998, 1.73, 1.05, 3.73, 3.1400000000000001, 3.1600000000000001, 0.93000000000000005, 1.28, 2.5800000000000001, 2.2782634930598116, 1.22, 2.4399999999999999, 3.2200000000000002, 2.6499999999999999, 3.0099999999999998, 2.0099999999999998, 3.3300000000000001, 3.27, 2.0699999999999998, 2.8999999999999999, 2.48, 2.5099999999999998, 2.71, 2.6899999999999999, 2.6699999999999999, 2.9300000000000002, 2.6800000000000002, 3.4199999999999999, 2.0299999999999998, 2.5099999999999998, 2.8300000000000001, 2.3999999999999999, 2.8700000000000001, 2.6493614704502111, 2.3900000000000001, 2.2999999999999998, 2.3300000000000001, 2.0299999999999998, 2.5299999999999998, 1.6200000000000001, 1.72, 2.5600000000000001, 1.8500000000000001, 2.2000000000000002, 1.27, 2.2799999999999998, 2.73, 1.0000000000000001e-05, 0.93999999999999995, 1.49, 2.6493614704502111, 1.8999999999999999, 0.96999999999999997, 2.6493614704502111, 1.8700000000000001, 0.84999999999999998, 2.6493614704502111, 0.67000000000000004, 0.72999999999999998, 0.96999999999999997, 1.3600000000000001, 1.47, -1.6699999999999999, 0.02, 1.45, 1.3999999999999999, 1.52, 1.3400000000000001, 1.3, 1.3049098949264422, 1.0800000000000001, 1.6200000000000001, 1.3500000000000001, 1.3700000000000001, 0.20000000000000001, 0.76000000000000001, 1.45, 2.71, 0.23999999999999999, -0.12, -0.19, 1.1200000000000001, 0.46999999999999997, 1.3049098949264422, 1.49, 1.3049098949264422, 1.3049098949264422, 0.17999999999999999, 0.37, 1.3049098949264422, 0.76000000000000001, 0.13, 1.3049098949264422, -0.28000000000000003, 0.58999999999999997, 1.3049098949264422, 0.79000000000000004, -0.029999999999999999, 1.3049098949264422, 1.3049098949264422, 1.3049098949264422, 1.3049098949264422, 1.3049098949264422, 1.3049098949264422, 1.3049098949264422, 1.3049098949264422, 1.3049098949264422, 1.3049098949264422, 1.3049098949264422, 1.3049098949264422, 1.3049098949264422, 0.95999999999999996, 1.0700000000000001, 1.24, 1.24, 1.24, 1.24, 2.2000000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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
            "title": "Population growth",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.040000000000000001, 0.26000000000000001, 0.26000000000000001, 0.26000000000000001, -0.56000000000000005, 0.62, -0.54000000000000004, 0.54000000000000004, 0.11, 0.27000000000000002, 0.44, 0.52000000000000002, 0.46999999999999997, 1.52, -0.40000000000000002, -1.8100000000000001, -0.20999999999999999, 0.20999999999999999, -0.83999999999999997, 0.11, 0.59999999999999998, 0.42999999999999999, 0.43423990634255427, 0.90000000000000002, 0.20999999999999999, 0.20999999999999996, -0.76000000000000001, -0.40999999999999998, -0.81000000000000005, -4.2599999999999998, 0.27000000000000002, 0.94999999999999996, -0.080000000000000002, -0.08002198405532697, -0.08002198405532697, -0.08002198405532697, -0.12, 0.79999999999999993, 0.53000000000000003, 0.53000000000000003, 0.75, 0.72999999999999998, 1.6399999999999999, -0.77000000000000002, -0.93000000000000005, -0.93999999999999995, -0.38, -1.4399999999999999, -0.76000000000000001, -0.35999999999999999, -0.34000000000000002, 1.7, -0.64000000000000001, -0.77000000000000002, -0.81568448395356452, 0.76000000000000001, -0.42999999999999999, 1.3, 1.98, 0.40000000000000002, 0.44, 2.1400000000000001, -0.82999999999999996, 1.45, 1.6899999999999999, 1.6100000000000001, -0.52000000000000002, -0.46000000000000002, 0.089999999999999997, 0.085468267364358294, -0.91000000000000003, 1.52, 0.80000000000000004, 0.68999999999999995, 0.83999999999999997, 1.49, 0.17999999999999999, -4.1699999999999999, 0.69999999999999996, 1.1200000000000001, 1.0800000000000001, 1.1699999999999999, 2.0299999999999998, 1.4299999999999999, 1.0507419742707278, 0.45000000000000001, 2.3799999999999999, 1.3600000000000001, 0.81999999999999995, 2.3599999999999999, 0.80000000000000004, 1.0507419742707278, 1.77, 1.0507419742707278, 1.8899999999999999, 0.91000000000000003, 0.71999999999999997, 1.0507419742707278, 1.0507419742707278, 1.0507419742707278, 0.28999999999999998, 1.0507419742707278, 1.0507419742707278, 1.0507419742707278, 1.21, 1.0507419742707278, 1.0507419742707278, 1.0507419742707278, 1.0507419742707278, 1.0507419742707278, -0.17999999999999999, 1.1499999999999999, 1.8300000000000001, 2.8500000000000001, 2.3100000000000001, 0.64000000000000001, 0.71999999999999997, 2.27, 2.1400000000000001, 2.6200000000000001, 1.99, 0.82999999999999996, 1.6100000000000001, -1.25, 2.46, -0.51000000000000001, -2.5600000000000001, -2.6499999999999999, -0.96999999999999997, -0.13, 1.6599999999999999, 2.7000000000000002, 1.6599999999999999, 1.05, 3.71, 3.1600000000000001, 3.1600000000000001, 0.82999999999999996, 1.21, 2.5499999999999998, 2.2506275980572292, 1, 2.4100000000000001, 3.2200000000000002, 2.6000000000000001, 3.0099999999999998, 1.9399999999999999, 3.21, 3.1699999999999999, 2.0099999999999998, 2.8399999999999999, 2.4199999999999999, 2.46, 2.6400000000000001, 2.6499999999999999, 2.6099999999999999, 2.8399999999999999, 3.1499999999999999, 2.6499999999999999, 2.0499999999999998, 2.4399999999999999, 2.7599999999999998, 2.3700000000000001, 2.6699999999999999, 2.5826928068708677, 2.3700000000000001, 2.2400000000000002, 2.3199999999999998, 2.0600000000000001, 2.1099999999999999, 1.8, 1.6399999999999999, 2.5299999999999998, 1.6399999999999999, 2.1000000000000001, 1.21, 2.2000000000000002, 2.3799999999999999, 0.029999999999999999, 0.97999999999999998, 1.3999999999999999, 2.5826928068708677, 1.8999999999999999, 0.90000000000000002, 2.5826928068708677, 2.02, 0.81000000000000005, 2.5826928068708677, 0.53000000000000003, 0.56000000000000005, 0.94999999999999996, 0.98999999999999999, 1.1399999999999999, -1.03, -0.080000000000000002, 1.23, 1.1799999999999999, 1.48, 1.1899999999999999, 1.24, 1.0700000000000001, 1.1395121474240946, 1.54, 1.28, 1.3899999999999999, 0.34000000000000002, 0.59999999999999998, 1.3200000000000001, -0.57999999999999996, 0.26000000000000001, 0.48999999999999999, 0.92000000000000004, 0.96999999999999997, 0.34999999999999998, 1.1395121474240946, 1.29, 1.1395121474240946, 1.1395121474240946, 0.17999999999999999, 0.23000000000000001, 1.1395121474240946, 0.76000000000000001, -0.050000000000000003, 1.1395121474240946, -0.28999999999999998, 0.59999999999999998, 1.1395121474240946, 0.57999999999999996, -0.20000000000000001, 1.1395121474240946, 1.1395121474240946, 1.1395121474240946, 1.1395121474240946, 1.1395121474240946, 1.1395121474240946, 1.1395121474240946, 1.1395121474240946, 1.1395121474240946, 1.1395121474240946, 1.1395121474240946, 1.1395121474240946, 1.1395121474240946, 0.16, 0.57999999999999996, 0.13, 0.13, 0.13, 0.13, 0.41999999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 30,
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

  
