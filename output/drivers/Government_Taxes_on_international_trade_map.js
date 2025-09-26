(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Government_Taxes_on_international_trade_map') 

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
    "b55c2637093": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c2637093",
  "attrs": {
    "b55c2637093": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 70,
      "colorbar": {
        "title": "Taxes on international trade"
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
        "title": "Taxes on international trade",
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
      "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
      "z": [1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.3700000000000001, 0.029999999999999999, 2.6200000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.3, 1.05, 0.93999999999999995, 0.88, 1.0900000000000001, 0.11, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.2999999999999998, 1.9399999999999999, 2.3300000000000001, 2.02, 1.3400000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.6, 0.20999999999999999, 0.20999999999999999, 1.28, 1.2799999999999998, 1, 5.4100000000000001, 8.3100000000000005, 6.2800000000000002, 26.350000000000001, 6.3600000000000003, 6.46, 5.3300000000000001, 9.9702644087704684, 9.9702644087704684, 9.9702644087704684, 0.84999999999999998, 9.9702644087704684, 0.93000000000000005, 12.42, 6.0700000000000003, 6.71, 7.0627264082358021, 8.9000000000000004, 2.21, 11.31, 10.76, 7.0627264082358021, 3.1600000000000001, 5.6600000000000001, -15.84, -15.834548117397642, -15.834548117397642, 1.0000000000000001e-05, 14.6, 3.1800000000000002, 16.649999999999999, 9.7200000000000006, 0.050000000000000003, 1.2, 5.4800000000000004, 13.960000000000001, 25.489999999999998, 4.6699999999999999, 7.7833482226324984, 7.7833482226324984, 18.329999999999998, 30.07, 7.7833482226324984, 26.699999999999999, 7.7833482226324984, 7.7833482226324984, 23.059999999999999, 6.6200000000000001, 7.7833482226324984, 6.6200000000000001, 7.7833482226324984, 17.390000000000001, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 10.66, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 4.0700000000000003, 25.129999999999999, 21.899999999999999, 11.19, 1.6499999999999999, 7.4000000000000004, 0.54000000000000004, 3.4714384465746004, 3.4714384465746004, 0.62, 10.470000000000001, 7.6900000000000004, 0.01, 20.02, 3.4714384465746004, 3.4714384465746004, 4.3499999999999996, 3.4714384465746004, 1.6399999999999999, 7.5499999999999998, 11.552707387135468, 12.74, 11.94, 11.552707387135468, 10.99, 7.5999999999999996, 11.552707387135468, 11.552707387135468, 11.552707387135468, 11.552707387135468, 2.3599999999999999, 31.27, 5.2199999999999998, 7.8399999999999999, 9.4000000000000004, 19.260000000000002, 4.6799999999999997, 49.850000000000001, 33.18, 4.4699999999999998, 11.77, 10.300000000000001, 41.729999999999997, 6.5300000000000002, 8.8399999999999999, 10.4, 37.380000000000003, 15.366770382463752, 3.71, 15.366770382463752, 15.366770382463752, 15.366770382463752, 20.050000000000001, 15.366770382463752, 19.440000000000001, 7.0599999999999996, 15.366770382463752, 15.366770382463752, 11.65, 31.16, 24.16, 15.366770382463752, 15.59, 18.030000000000001, 19.559999999999999, 15.366770382463752, 0.48999999999999999, 15.366770382463752, 15.366770382463752, 15.366770382463752, 0.089999999999999997, 15.366770382463752, 15.366770382463752, 16.539999999999999, 15.366770382463752, 1.8700000000000001, 1.49, 16.469999999999999, 3, 3.1200000000000001, 4.9100000000000001, 6.2599999999999998, 8.8000000000000007, 10.99, 8.5494804863790179, 3.2200000000000002, 20.870000000000001, 8.5494804863790179, 6.1399999999999997, 7.79, 8.3900000000000006, 5.1399999999999997, 4.54, 8.5494804863790179, 5.5700000000000003, 9.4000000000000004, 5.6100000000000003, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 58.710000000000001, 9.1199999999999992, 36.719999999999999, 8.5494804863790179, 50.299999999999997, 8.5494804863790179, 41.189999999999998, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 1.1200000000000001, 1.24, 2.6099999999999999, 2.6099999999999999, 2.6099999999999999, 2.6099999999999999, 2.98],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.3700000000000001, 0.029999999999999999, 2.6200000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.3, 1.05, 0.93999999999999995, 0.88, 1.0900000000000001, 0.11, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.2999999999999998, 1.9399999999999999, 2.3300000000000001, 2.02, 1.3400000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.6, 0.20999999999999999, 0.20999999999999999, 1.28, 1.2799999999999998, 1, 5.4100000000000001, 8.3100000000000005, 6.2800000000000002, 26.350000000000001, 6.3600000000000003, 6.46, 5.3300000000000001, 9.9702644087704684, 9.9702644087704684, 9.9702644087704684, 0.84999999999999998, 9.9702644087704684, 0.93000000000000005, 12.42, 6.0700000000000003, 6.71, 7.0627264082358021, 8.9000000000000004, 2.21, 11.31, 10.76, 7.0627264082358021, 3.1600000000000001, 5.6600000000000001, -15.84, -15.834548117397642, -15.834548117397642, 1.0000000000000001e-05, 14.6, 3.1800000000000002, 16.649999999999999, 9.7200000000000006, 0.050000000000000003, 1.2, 5.4800000000000004, 13.960000000000001, 25.489999999999998, 4.6699999999999999, 7.7833482226324984, 7.7833482226324984, 18.329999999999998, 30.07, 7.7833482226324984, 26.699999999999999, 7.7833482226324984, 7.7833482226324984, 23.059999999999999, 6.6200000000000001, 7.7833482226324984, 6.6200000000000001, 7.7833482226324984, 17.390000000000001, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 10.66, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 7.7833482226324984, 4.0700000000000003, 25.129999999999999, 21.899999999999999, 11.19, 1.6499999999999999, 7.4000000000000004, 0.54000000000000004, 3.4714384465746004, 3.4714384465746004, 0.62, 10.470000000000001, 7.6900000000000004, 0.01, 20.02, 3.4714384465746004, 3.4714384465746004, 4.3499999999999996, 3.4714384465746004, 1.6399999999999999, 7.5499999999999998, 11.552707387135468, 12.74, 11.94, 11.552707387135468, 10.99, 7.5999999999999996, 11.552707387135468, 11.552707387135468, 11.552707387135468, 11.552707387135468, 2.3599999999999999, 31.27, 5.2199999999999998, 7.8399999999999999, 9.4000000000000004, 19.260000000000002, 4.6799999999999997, 49.850000000000001, 33.18, 4.4699999999999998, 11.77, 10.300000000000001, 41.729999999999997, 6.5300000000000002, 8.8399999999999999, 10.4, 37.380000000000003, 15.366770382463752, 3.71, 15.366770382463752, 15.366770382463752, 15.366770382463752, 20.050000000000001, 15.366770382463752, 19.440000000000001, 7.0599999999999996, 15.366770382463752, 15.366770382463752, 11.65, 31.16, 24.16, 15.366770382463752, 15.59, 18.030000000000001, 19.559999999999999, 15.366770382463752, 0.48999999999999999, 15.366770382463752, 15.366770382463752, 15.366770382463752, 0.089999999999999997, 15.366770382463752, 15.366770382463752, 16.539999999999999, 15.366770382463752, 1.8700000000000001, 1.49, 16.469999999999999, 3, 3.1200000000000001, 4.9100000000000001, 6.2599999999999998, 8.8000000000000007, 10.99, 8.5494804863790179, 3.2200000000000002, 20.870000000000001, 8.5494804863790179, 6.1399999999999997, 7.79, 8.3900000000000006, 5.1399999999999997, 4.54, 8.5494804863790179, 5.5700000000000003, 9.4000000000000004, 5.6100000000000003, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 58.710000000000001, 9.1199999999999992, 36.719999999999999, 8.5494804863790179, 50.299999999999997, 8.5494804863790179, 41.189999999999998, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 8.5494804863790179, 1.1200000000000001, 1.24, 2.6099999999999999, 2.6099999999999999, 2.6099999999999999, 2.6099999999999999, 2.98],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.70999999999999996, 0.029999999999999999, 0.92000000000000004, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.5, 0.38, 0.34000000000000002, 0.44, 0.33000000000000002, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.3100000000000001, 0.41999999999999998, 2.3300000000000001, 1.6899999999999999, 0.40999999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.859999999999999, 0.19, 0.19, 1.22, 1.22, 1, 5.46, 7.5599999999999996, 6.2800000000000002, 26.350000000000001, 6.4199999999999999, 5.29, 5.3300000000000001, 9.8110070406145553, 9.8110070406145553, 9.8110070406145553, 1.1899999999999999, 9.8110070406145553, 0.93000000000000005, 18.66, 5.2699999999999996, 6.71, 6.7244567922051202, 6.96, 2.21, 11.1, 10.76, 6.7244567922051202, 3.1600000000000001, 5.3500000000000005, -15.84, -15.834444826061448, -15.834444826061448, 1.0000000000000001e-05, 14.859999999999999, 3.02, 17.350000000000001, 8.4000000000000004, 0.070000000000000007, 3.6800000000000002, 5.5099999999999998, 15.199999999999999, 25.5, 4.6699999999999999, 9.0494836936541354, 9.0494836936541354, 18.329999999999998, 30.07, 9.0494836936541354, 33.369999999999997, 9.0494836936541354, 9.0494836936541354, 23.059999999999999, 6.6200000000000001, 9.0494836936541354, 6.6200000000000001, 9.0494836936541354, 17.390000000000001, 9.0494836936541354, 9.0494836936541354, 9.0494836936541354, 10.66, 9.0494836936541354, 9.0494836936541354, 9.0494836936541354, 9.0494836936541354, 9.0494836936541354, 9.0494836936541354, 9.0494836936541354, 9.0494836936541354, 9.0494836936541354, 3.8799999999999999, 32.560000000000002, 21.890000000000001, 11.19, 1.48, 8.1899999999999995, 0.54000000000000004, 3.5409965708321853, 3.5409965708321853, 0.68999999999999995, 11.25, 7.5700000000000003, 0.01, 20.02, 3.5409965708321853, 3.5409965708321853, 4.2699999999999996, 3.5409965708321853, 1.6399999999999999, 7.4500000000000002, 11.512825877301031, 12.74, 11.43, 11.512825877301031, 12.140000000000001, 7.2599999999999998, 11.512825877301031, 11.512825877301031, 11.512825877301031, 11.512825877301031, 3.2599999999999998, 32.689999999999998, 5.2199999999999998, 7.8399999999999999, 9.4000000000000004, 15.27, 4.6799999999999997, 49.57, 26.850000000000001, 4.6399999999999997, 11.77, 13.539999999999999, 6.5300000000000002, 41.729999999999997, 8.5099999999999998, 10.4, 37.380000000000003, 14.842463789767969, 3.71, 14.842463789767969, 14.842463789767969, 14.842463789767969, 20.050000000000001, 14.842463789767969, 19.440000000000001, 4.5, 14.842463789767969, 14.842463789767969, 14.27, 37.130000000000003, 24.16, 14.842463789767969, 15.59, 18.030000000000001, 19.91, 14.842463789767969, 0.48999999999999999, 14.842463789767969, 14.842463789767969, 14.842463789767969, 0.089999999999999997, 14.842463789767969, 14.842463789767969, 16.539999999999999, 14.842463789767969, 1.8700000000000001, 1.49, 15.800000000000001, 2.0299999999999998, 3.5380000000000003, 5.3899999999999997, 6.0800000000000001, 8.8000000000000007, 10.380000000000001, 8.9147451449204791, 3.1099999999999999, 28, 8.9147451449204791, 5.5999999999999996, 6.9900000000000002, 8.3900000000000006, 4.6900000000000004, 5.0700000000000003, 8.9147451449204791, 5.5700000000000003, 9.3000000000000007, 5.6699999999999999, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 51.210000000000001, 36.289999999999999, 9.9100000000000001, 8.9147451449204791, 51.659999999999997, 8.9147451449204791, 40.18, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 8.9147451449204791, 1.1299999999999999, 1.1699999999999999, 2.4500000000000002, 2.4500000000000002, 2.4500000000000002, 2.4500000000000002, 2.8500000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, 0.01, 0.01, 0.01, 1.0000000000000001e-05, 0.71999999999999997, 0.01, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.4500000000000002, -0.01, 2.3300000000000001, 1.5700000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.430000000000001, 0.17000000000000001, 0.17000000000000001, 1.0800000000000001, 1.0800000000000001, 0.85999999999999999, 4.9000000000000004, 6.9728571428571424, 6.2800000000000002, 26.350000000000001, 4.5800000000000001, 5.5, 5.3300000000000001, 9.4936975808029462, 9.4936975808029462, 9.4936975808029462, 1.6899999999999999, 9.4936975808029462, 0.93000000000000005, 24.190000000000001, 7.2666666666666657, 6.71, 6.7958535544604359, 7.6500000000000004, 2.21, 10.700588235294116, 10.76, 6.7958535544604359, 3.4399999999999999, 5.04, -15.84, -15.83424913557689, -15.83424913557689, 1.0000000000000001e-05, 14.43, 3.2075, 17.52, 7.4400000000000004, 0.059999999999999998, 2.25, 5.1500000000000004, 13.67, 20.670000000000002, 4.6699999999999999, 7.5319425248533118, 7.5319425248533118, 17.969999999999999, 30.07, 7.5319425248533118, 27.210000000000001, 7.5319425248533118, 7.5319425248533118, 23.059999999999999, 6.6200000000000001, 7.5319425248533118, 6.6200000000000001, 7.5319425248533118, 17.390000000000001, 7.5319425248533118, 7.5319425248533118, 7.5319425248533118, 10.66, 7.5319425248533118, 7.5319425248533118, 7.5319425248533118, 7.5319425248533118, 7.5319425248533118, 7.5319425248533118, 7.5319425248533118, 7.5319425248533118, 7.5319425248533118, 3.3500000000000001, 32.390000000000001, 19.039999999999999, 11.19, 2.3100000000000001, 5.7300000000000004, 0.54000000000000004, 3.5075135562204749, 3.5075135562204749, 0.72999999999999998, 11.460000000000001, 7.0199999999999996, 0.01, 20.02, 3.5075135562204749, 3.5075135562204749, 4.2699999999999996, 3.5075135562204749, 1.6399999999999999, 5.8300000000000001, 10.961308331713884, 12.74, 9.9600000000000009, 10.961308331713884, 12.35, 10.961308331713884, 6.6699999999999999, 10.961308331713884, 10.961308331713884, 10.961308331713884, 3.8300000000000001, 33.859999999999999, 5.2199999999999998, 7.8399999999999999, 9.4000000000000004, 14.02, 4.6799999999999997, 43.960000000000001, 4.2300000000000004, 29.140000000000001, 11.77, 12.57, 6.5300000000000002, 41.729999999999997, 9.3599999999999994, 10.4, 37.380000000000003, 14.44157067995241, 3.71, 14.44157067995241, 14.44157067995241, 14.44157067995241, 21.690000000000001, 14.44157067995241, 18.912000000000003, 2.6699999999999999, 14.44157067995241, 14.44157067995241, 29.77, 14.869999999999999, 24.16, 14.44157067995241, 15.59, 18.030000000000001, 19.600000000000001, 14.44157067995241, 0.48999999999999999, 14.44157067995241, 14.44157067995241, 14.44157067995241, 0.089999999999999997, 14.44157067995241, 14.44157067995241, 16.539999999999999, 14.44157067995241, 1.8700000000000001, 1.49, 15.82, 1.8200000000000001, 3.956, 5.0800000000000001, 5.6900000000000004, 8.8000000000000007, 15, 8.9385589465908772, 3.23, 22.949999999999999, 8.9385589465908772, 5.4100000000000001, 6.5599999999999996, 8.3900000000000006, 5.1500000000000004, 5.0800000000000001, 8.9385589465908772, 5.5700000000000003, 9.9100000000000001, 4.7699999999999996, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 54.960000000000001, 28.629999999999999, 9.4700000000000006, 8.9385589465908772, 52.950000000000003, 8.9385589465908772, 40.829999999999998, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 8.9385589465908772, 1.0800000000000001, 1.25, 2.2200000000000002, 2.2200000000000002, 2.2200000000000002, 2.2200000000000002, 1.6100000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, -0.029999999999999999, -0.029999999999999999, -0.029999999999999999, 1.0000000000000001e-05, 0.11, 0.01, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, -0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.4199999999999999, 1.0000000000000001e-05, 2.5600000000000001, 1.46, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.169999999999998, 0.16, 0.16, 1.0800000000000001, 1.0800000000000001, 0.95999999999999996, 4.2599999999999998, 6.3857142857142852, 6.2800000000000002, 0.029999999999999999, 3.71, 4.1500000000000004, 5.1600000000000001, 4.2925169571669102, 4.2925169571669102, 4.2925169571669102, 1.8700000000000001, 4.2925169571669102, 0.93000000000000005, 29.18, 9.2633333333333319, 6.71, 6.631799388541161, 7.0199999999999996, 2.21, 10.301176470588235, 10.76, 6.631799388541161, 3.1600000000000001, 4.7300000000000004, 5.0300000000000002, 5.0280865948634066, 5.0280865948634066, 1.0000000000000001e-05, 15.17, 3.395, 20.32, 6.21, 0.059999999999999998, 2.4471428571428571, 4.0800000000000001, 14.56, 21.559999999999999, 4.6699999999999999, 7.6160595767089356, 7.6160595767089356, 15.93, 30.07, 7.6160595767089356, 27.59, 7.6160595767089356, 7.6160595767089356, 23.059999999999999, 6.6200000000000001, 7.6160595767089356, 6.6200000000000001, 7.6160595767089356, 17.390000000000001, 7.6160595767089356, 7.6160595767089356, 7.6160595767089356, 10.66, 7.6160595767089356, 7.6160595767089356, 7.6160595767089356, 7.6160595767089356, 7.6160595767089356, 7.6160595767089356, 7.6160595767089356, 7.6160595767089356, 7.6160595767089356, 3.3300000000000001, 30.920000000000002, 18.239999999999998, 11.19, 1.29, 5.4400000000000004, 0.54000000000000004, 3.0097078281420684, 3.0097078281420684, 0.70999999999999996, 10.42, 0.01, 5.9299999999999997, 14.52, 3.0097078281420684, 3.0097078281420684, 3.0097078281420684, 4.2699999999999996, 1.6399999999999999, 5.4900000000000002, 9.1119440325495606, 12.74, 8.7400000000000002, 9.1119440325495606, 3.75, 9.1119440325495606, 6.25, 9.1119440325495606, 9.1119440325495606, 9.1119440325495606, 4.2300000000000004, 48.130000000000003, 5.2199999999999998, 7.8399999999999999, 9.4000000000000004, 16.57, 4.6799999999999997, 47.159999999999997, 2.25, 24.780000000000001, 11.77, 13.68, 6.5300000000000002, 41.729999999999997, 9.1199999999999992, 10.4, 37.380000000000003, 14.466672546154737, 3.71, 14.466672546154737, 14.466672546154737, 14.466672546154737, 19.170000000000002, 14.466672546154737, 18.384, 2.4399999999999999, 14.466672546154737, 14.466672546154737, 38.109999999999999, 17.850000000000001, 24.16, 14.466672546154737, 15.59, 18.030000000000001, 16.829999999999998, 14.466672546154737, 0.48999999999999999, 14.466672546154737, 14.466672546154737, 14.466672546154737, 13.779999999999999, 14.466672546154737, 14.466672546154737, 11.470000000000001, 14.466672546154737, 1.8700000000000001, 1.49, 14.65, 1.5700000000000001, 4.3739999999999997, 5.1200000000000001, 4.0899999999999999, 8.8000000000000007, 9.6400000000000006, 6.9253727408168526, 2.1000000000000001, 13.66, 6.9253727408168526, 5.0499999999999998, 5.9699999999999998, 8.1999999999999993, 4.5800000000000001, 4.9500000000000002, 6.9253727408168526, 5.5700000000000003, 9.4800000000000004, 4.5599999999999996, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 58.579999999999998, 27.530000000000001, 8.1300000000000008, 6.9253727408168526, 53.020000000000003, 6.9253727408168526, 40.729999999999997, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 6.9253727408168526, 1.04, 1.26, 1.8500000000000001, 1.8500000000000001, 1.8500000000000001, 1.8500000000000001, 1.7],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, -0.01, -0.01, -0.01, 1.0000000000000001e-05, 0.38, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, -0.01, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.51000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 1.0000000000000001e-05, 0.01, 1.3600000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.66, 0.17999999999999999, 0.17999999999999999, 1.04, 1.04, 1.03, 4.4500000000000002, 5.798571428571428, 6.2800000000000002, 0.059999999999999998, 1.0700000000000001, 4.6699999999999999, 5.1900000000000004, 3.9106274142170792, 3.9106274142170792, 3.9106274142170792, 1.6200000000000001, 3.9106274142170792, 0.93000000000000005, 22.52, 11.26, 6.71, 8.1204757321134586, 16.899999999999999, 2.21, 9.9017647058823535, 10.76, 8.1204757321134586, 3.4399999999999999, 5.3499999999999996, 3.1499999999999999, 3.1487554401872746, 3.1487554401872746, 1.0000000000000001e-05, 14.66, 3.5825, 19.989999999999998, 5.5199999999999996, 0.050000000000000003, 2.6442857142857141, 3.3900000000000001, 14.19, 21.850000000000001, 4.6699999999999999, 7.5264554543929734, 7.5264554543929734, 18.280000000000001, 30.07, 7.5264554543929734, 27.690000000000001, 7.5264554543929734, 7.5264554543929734, 23.059999999999999, 6.6200000000000001, 7.5264554543929734, 6.6200000000000001, 7.5264554543929734, 17.390000000000001, 7.5264554543929734, 7.5264554543929734, 7.5264554543929734, 10.66, 7.5264554543929734, 7.5264554543929734, 7.5264554543929734, 7.5264554543929734, 7.5264554543929734, 7.5264554543929734, 7.5264554543929734, 7.5264554543929734, 7.5264554543929734, 3.1400000000000001, 27.09, 16.350000000000001, 8.4600000000000009, 1.02, 5.2800000000000002, 0.54000000000000004, 2.9256985691204678, 2.9256985691204678, 0.79000000000000004, 9.25, 0.01, 6.6799999999999997, 13.43, 2.9256985691204678, 2.9256985691204678, 2.9256985691204678, 4.2699999999999996, 1.6399999999999999, 5.04, 10.069506248728194, 12.74, 8.0899999999999999, 10.069506248728194, 11.140000000000001, 10.069506248728194, 6.1200000000000001, 10.069506248728194, 10.069506248728194, 10.069506248728194, 4.1200000000000001, 48.859999999999999, 5.2199999999999998, 7.8399999999999999, 9.4000000000000004, 17.640000000000001, 4.6799999999999997, 42.829999999999998, 2.6299999999999999, 34.740000000000002, 11.77, 12.880000000000001, 6.5300000000000002, 41.729999999999997, 7.4800000000000004, 10.4, 37.380000000000003, 14.767748199977344, 3.71, 14.767748199977344, 14.767748199977344, 14.767748199977344, 19.579999999999998, 14.767748199977344, 17.856000000000002, 2.7400000000000002, 14.767748199977344, 14.767748199977344, 39.119999999999997, 16.870000000000001, 27.460000000000001, 14.767748199977344, 15.59, 18.030000000000001, 13.630000000000001, 14.767748199977344, 0.55000000000000004, 14.767748199977344, 14.767748199977344, 14.767748199977344, 13.800000000000001, 14.767748199977344, 14.767748199977344, 14.859999999999999, 14.767748199977344, 1.8700000000000001, 1.49, 15.73, 1.28, 4.7919999999999998, 5.2199999999999998, 2.3700000000000001, 8.8000000000000007, 8.5999999999999996, 5.9493578501067326, 3.3399999999999999, 9.4499999999999993, 5.9493578501067326, 5.21, 5.1699999999999999, 6.5800000000000001, 4.46, 5.0800000000000001, 5.9493578501067326, 5.5700000000000003, 9.6600000000000001, 4.8099999999999996, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 44.770000000000003, 23.120000000000001, 8.5700000000000003, 5.9493578501067326, 50.210000000000001, 5.9493578501067326, 23.969999999999999, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 5.9493578501067326, 1.0700000000000001, 1.28, 1.97, 1.97, 1.97, 1.97, 2.79],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, -0.01, -0.01, -0.01, 1.0000000000000001e-05, 0.040000000000000001, 1.0000000000000001e-05, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, -0.02, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 1.0000000000000001e-05, 0.01, 1.47, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.139999999999999, 0.17000000000000001, 0.17000000000000001, 0.95999999999999996, 0.95999999999999996, 0.92000000000000004, 3.7400000000000002, 5.2114285714285717, 6.1699999999999999, 0.029999999999999999, 0.93000000000000005, 5.0800000000000001, 4.6500000000000004, 3.8475458536002076, 3.8475458536002076, 3.8475458536002076, 1.55, 3.8475458536002076, 0.93000000000000005, 25.170000000000002, 13.256666666666666, 6.71, 8.7971405749048337, 21.02, 2.21, 9.5023529411764702, 8.7971405749048337, 10.76, 4.4900000000000002, 7.4100000000000001, 4.8399999999999999, 4.8380252063902711, 4.8380252063902711, 1.0000000000000001e-05, 14.140000000000001, 3.77, 22.190000000000001, 5.2800000000000002, 1.0000000000000001e-05, 2.8414285714285712, 3.3900000000000001, 14.31, 19.030000000000001, 4.6699999999999999, 7.30845027171131, 7.30845027171131, 17.57, 30.07, 7.30845027171131, 33.030000000000001, 7.30845027171131, 7.30845027171131, 23.059999999999999, 6.6200000000000001, 7.30845027171131, 6.6200000000000001, 7.30845027171131, 17.390000000000001, 7.30845027171131, 7.30845027171131, 7.30845027171131, 10.66, 7.30845027171131, 7.30845027171131, 7.30845027171131, 7.30845027171131, 7.30845027171131, 7.30845027171131, 7.30845027171131, 7.30845027171131, 7.30845027171131, 3.5600000000000001, 26.550000000000001, 17.460000000000001, 3.1600000000000001, 0.82999999999999996, 5.5199999999999996, 0.54000000000000004, 2.4313524519618328, 2.4313524519618328, 0.85999999999999999, 6.4800000000000004, 0.01, 6.9299999999999997, 10.52, 2.4313524519618328, 2.4313524519618328, 2.4313524519618328, 4.2699999999999996, 1.6399999999999999, 5.6299999999999999, 9.0994002656520099, 12.74, 6.5499999999999998, 9.0994002656520099, 8.5500000000000007, 9.0994002656520099, 5.9100000000000001, 9.0994002656520099, 9.0994002656520099, 9.0994002656520099, 3.1600000000000001, 30.23, 5.2199999999999998, 7.8399999999999999, 9.4000000000000004, 21.210000000000001, 4.6799999999999997, 3.79, 37.979999999999997, 32.280000000000001, 11.77, 12.970000000000001, 6.5300000000000002, 9.9100000000000001, 41.729999999999997, 10.4, 37.380000000000003, 14.675975344568673, 3.71, 14.675975344568673, 14.675975344568673, 14.675975344568673, 21.289999999999999, 14.675975344568673, 17.327999999999999, 1.98, 14.675975344568673, 14.675975344568673, 36.289999999999999, 16.170000000000002, 25.539999999999999, 14.675975344568673, 15.59, 18.030000000000001, 11.43, 14.675975344568673, 0.23999999999999999, 14.675975344568673, 14.675975344568673, 14.675975344568673, 13, 14.675975344568673, 14.675975344568673, 12.390000000000001, 14.675975344568673, 1.8700000000000001, 1.49, 20.120000000000001, 1.3500000000000001, 5.21, 4.21, 2.5499999999999998, 8.8000000000000007, 7.4900000000000002, 5.7416806419804036, 3.3399999999999999, 9.5199999999999996, 5.7416806419804036, 4.5700000000000003, 4.0300000000000002, 7.0099999999999998, 4.3799999999999999, 5.0800000000000001, 5.7416806419804036, 5.5700000000000003, 9.4000000000000004, 3.7200000000000002, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 43.310000000000002, 20.5, 8.3900000000000006, 5.7416806419804036, 45.530000000000001, 5.7416806419804036, 16.75, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 5.7416806419804036, 1.1200000000000001, 1.3500000000000001, 1.9399999999999999, 1.9399999999999999, 1.9399999999999999, 1.9399999999999999, 2.8700000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, -0.01, -0.01, -0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.48999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 1.0000000000000001e-05, 0.01, 1.3999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 11.41, 0.19, 0.19, 0.98999999999999999, 0.98999999999999999, 0.93999999999999995, 2.2000000000000002, 4.6242857142857137, 4.5300000000000002, 0.01, 0.71999999999999997, 4.3499999999999996, 4.1100000000000003, 2.9822525871655392, 2.9822525871655392, 0.69999999999999996, 2.9822525871655392, 2.9822525871655392, 0.80000000000000004, 25.530000000000001, 15.253333333333334, 6.71, 8.0293963327175373, 16.449999999999999, 2.7999999999999998, 9.102941176470587, 8.0293963327175373, 10.76, 3.48, 6.0999999999999996, 3.71, 3.7085096430006113, 3.7085096430006113, 1.0000000000000001e-05, 11.41, 2.2000000000000002, 19.620000000000001, 4.5599999999999996, 1.0000000000000001e-05, 3.0385714285714283, 2.0600000000000001, 18.920000000000002, 16.699999999999999, 4.6699999999999999, 7.5970787282037087, 7.5970787282037087, 18.350000000000001, 30.07, 7.5970787282037087, 32.32, 7.5970787282037087, 7.5970787282037087, 23.059999999999999, 6.6200000000000001, 7.5970787282037087, 5.1600000000000001, 7.5970787282037087, 17.390000000000001, 7.5970787282037087, 7.5970787282037087, 7.5970787282037087, 9.8499999999999996, 7.5970787282037087, 7.5970787282037087, 7.5970787282037087, 7.5970787282037087, 7.5970787282037087, 7.5970787282037087, 7.5970787282037087, 7.5970787282037087, 7.5970787282037087, 3.7400000000000002, 24.350000000000001, 4.8399999999999999, 16.149999999999999, 0.98999999999999999, 6, 0.54000000000000004, 1.7744478487363551, 1.7744478487363551, 0.90000000000000002, 6.4199999999999999, 0.01, 6.4699999999999998, 0.67000000000000004, 1.7744478487363551, 1.7744478487363551, 1.7744478487363551, 4.2699999999999996, 1.6399999999999999, 4.8799999999999999, 9.4490408897402123, 12.74, 6.8899999999999997, 9.4490408897402123, 9.9000000000000004, 9.4490408897402123, 5.8099999999999996, 9.4490408897402123, 9.4490408897402123, 9.4490408897402123, 2.6600000000000001, 24.809999999999999, 5.2199999999999998, 7.8399999999999999, 9.4000000000000004, 15.890000000000001, 8.5700000000000003, 4.6799999999999997, 34.619999999999997, 40.899999999999999, 11.77, 11.630000000000001, 6.5300000000000002, 8.0399999999999991, 41.729999999999997, 10.4, 37.380000000000003, 14.688059457700508, 3.71, 14.688059457700508, 14.688059457700508, 14.688059457700508, 18.289999999999999, 14.688059457700508, 16.800000000000001, 4.46, 14.688059457700508, 14.688059457700508, 35.759999999999998, 26.510000000000002, 15.630000000000001, 14.688059457700508, 15.59, 18.030000000000001, 2.1699999999999999, 0.41999999999999998, 14.688059457700508, 14.688059457700508, 14.688059457700508, 14.688059457700508, 11.99, 14.688059457700508, 14.688059457700508, 11.9, 14.688059457700508, 1.8700000000000001, 1.47, 13.68, 0.89000000000000001, 4.2699999999999996, 3.3700000000000001, 2.1499999999999999, 8.8000000000000007, 6.96, 5.3667912764631609, 3.3399999999999999, 8.8300000000000001, 5.3667912764631609, 3.3700000000000001, 4.9400000000000004, 5.9400000000000004, 3.6000000000000001, 4.0199999999999996, 5.3667912764631609, 5.5700000000000003, 8.0899999999999999, 4.4000000000000004, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 50.5, 23.390000000000001, 7.3300000000000001, 5.3667912764631609, 48.460000000000001, 5.3667912764631609, 5.3667912764631609, 15.23, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 5.3667912764631609, 1.02, 1.3200000000000001, 2.0299999999999998, 2.0299999999999998, 2.0299999999999998, 2.0299999999999998, 2.7999999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, -0.01, -0.01, -0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.26000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 1.0000000000000001e-05, 0.01, 1.3899999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 13.460000000000003, 0.20999999999999999, 0.20999999999999999, 1.01, 1.01, 1.1000000000000001, 2.4500000000000002, 4.0371428571428574, 3.9300000000000002, 1.0000000000000001e-05, 1.28, 4.3799999999999999, 3.6800000000000002, 2.7999425764586205, 2.7999425764586205, 0.71999999999999997, 2.7999425764586205, 2.7999425764586205, 0.91000000000000003, 25.579999999999998, 17.25, 6.71, 7.0434574182401297, 11.17, 1.46, 8.7035294117647055, 7.0434574182401297, 10.76, 3.6000000000000001, 6.4400000000000004, 4.4400000000000004, 4.438218349147613, 4.438218349147613, 1.0000000000000001e-05, 13.460000000000001, 2.9100000000000001, 21.460000000000001, 4.5199999999999996, 1.0000000000000001e-05, 3.2357142857142858, 2.3700000000000001, 15.67, 14.93, 4.6699999999999999, 6.9736670813215378, 6.9736670813215378, 19.48, 30.07, 6.9736670813215378, 32.32, 6.9736670813215378, 6.9736670813215378, 15.83, 6.6200000000000001, 6.9736670813215378, 17.390000000000001, 4.75, 6.9736670813215378, 6.9736670813215378, 6.9736670813215378, 6.9736670813215378, 9.0500000000000007, 6.9736670813215378, 6.9736670813215378, 6.9736670813215378, 6.9736670813215378, 6.9736670813215378, 6.9736670813215378, 6.9736670813215378, 6.9736670813215378, 6.9736670813215378, 4.0099999999999998, 24.300000000000001, 4.5499999999999998, 16.289999999999999, 0.67000000000000004, 6, 0.54000000000000004, 2.6487777376012174, 2.6487777376012174, 0.91000000000000003, 6.1299999999999999, 0.01, 6.9400000000000004, 15.279999999999999, 2.6487777376012174, 2.6487777376012174, 2.6487777376012174, 4.2699999999999996, 1.6399999999999999, 4.8499999999999996, 9.8346055788955908, 13.9, 6.4699999999999998, 9.8346055788955908, 10.09, 9.8346055788955908, 6.2300000000000004, 9.8346055788955908, 9.8346055788955908, 9.8346055788955908, 3.3999999999999999, 29.09, 5.2199999999999998, 7.8399999999999999, 9.4000000000000004, 17.300000000000001, 3.7799999999999998, 4.6799999999999997, 42.369999999999997, 10.210000000000001, 11.77, 10.99, 5.8499999999999996, 7.75, 30.899999999999999, 10.4, 37.380000000000003, 12.488880853365508, 3.71, 12.488880853365508, 12.488880853365508, 12.488880853365508, 17.640000000000001, 12.488880853365508, 16.271999999999998, 2, 12.488880853365508, 12.488880853365508, 25.57, 19.5, 8.6500000000000004, 12.488880853365508, 15.59, 18.030000000000001, 2.1800000000000002, 0.56999999999999995, 12.488880853365508, 12.488880853365508, 12.488880853365508, 12.488880853365508, 11.74, 12.488880853365508, 12.488880853365508, 17.98, 12.488880853365508, 1.8700000000000001, 1.1000000000000001, 15.67, 1.1299999999999999, 4.6299999999999999, 3.5099999999999998, 2.1200000000000001, 8.8000000000000007, 6.9500000000000002, 5.4113446716943949, 3.3399999999999999, 8.1799999999999997, 5.4113446716943949, 3.8199999999999998, 4.7699999999999996, 7.9199999999999999, 3.9199999999999999, 4.1200000000000001, 5.4113446716943949, 5.5700000000000003, 8.8100000000000005, 4.0999999999999996, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 36.880000000000003, 20.859999999999999, 8.3900000000000006, 5.4113446716943949, 44.920000000000002, 5.4113446716943949, 5.4113446716943949, 16.43, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 5.4113446716943949, 1.1599999999999999, 1.22, 1.8899999999999999, 1.8899999999999999, 1.8899999999999999, 1.8899999999999999, 2.9199999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.01, 1.0000000000000001e-05, 0.01, 1.51, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.82, 0.19, 0.19, 0.94999999999999996, 0.94999999999999996, 1.24, 2.5299999999999998, 3.4500000000000002, 3.25, 1.4299999999999999, 1.0000000000000001e-05, 4.3899999999999997, 2.8500000000000001, 2.4730097852624922, 2.4730097852624922, 2.4730097852624922, 0.69999999999999996, 2.4730097852624922, 1.1200000000000001, 25.609999999999999, 23.890000000000001, 6.71, 8.049736266709381, 17.57, 1.8100000000000001, 8.304117647058824, 8.049736266709381, 10.76, 3.9300000000000002, 8.4900000000000002, 4.7199999999999998, 4.7180721301358526, 4.7180721301358526, 1.0000000000000001e-05, 14.82, 4.4699999999999998, 19.5, 4.4299999999999997, 1.0000000000000001e-05, 3.4328571428571424, 2.21, 16.640000000000001, 15.630000000000001, 4.6699999999999999, 7.2402477831055858, 7.2402477831055858, 17.550000000000001, 30.07, 7.2402477831055858, 32.32, 7.2402477831055858, 7.2402477831055858, 15.09, 6.6200000000000001, 7.2402477831055858, 17.390000000000001, 4.5599999999999996, 7.2402477831055858, 7.2402477831055858, 7.2402477831055858, 7.2402477831055858, 8.4499999999999993, 7.2402477831055858, 7.2402477831055858, 7.2402477831055858, 7.2402477831055858, 7.2402477831055858, 7.2402477831055858, 7.2402477831055858, 7.2402477831055858, 7.2402477831055858, 3.8199999999999998, 24.559999999999999, 3.8300000000000001, 14.460000000000001, 1.02, 6, 0.54000000000000004, 2.6357351795464541, 2.6357351795464541, 0.92000000000000004, 5.2999999999999998, 0.01, 5.9000000000000004, 18.309999999999999, 2.6357351795464541, 2.6357351795464541, 2.6357351795464541, 4.2699999999999996, 1.28, 4.5899999999999999, 7.5195365210516023, 7.9199999999999999, 6.1200000000000001, 7.5195365210516023, 11.07, 7.5195365210516023, 5.0499999999999998, 7.5195365210516023, 7.5195365210516023, 7.5195365210516023, 3.8799999999999999, 29.66, 5.6799999999999997, 7.8399999999999999, 9.4000000000000004, 16.629999999999999, 2.3999999999999999, 5.25, 40.960000000000001, 11.17, 11.77, 10.69, 6.4199999999999999, 7.0800000000000001, 22.280000000000001, 10.4, 37.380000000000003, 12.084852206887568, 3.71, 12.084852206887568, 12.084852206887568, 12.084852206887568, 18.32, 12.084852206887568, 3.1800000000000002, 15.744, 12.084852206887568, 12.084852206887568, 23.859999999999999, 21.949999999999999, 8.5800000000000001, 12.084852206887568, 15.59, 18.030000000000001, 2.0899999999999999, 0.48999999999999999, 12.084852206887568, 12.084852206887568, 12.084852206887568, 12.084852206887568, 14.24, 12.084852206887568, 12.084852206887568, 23.93, 12.084852206887568, 2.0899999999999999, 1.0800000000000001, 15.33, 1.0600000000000001, 3.5499999999999998, 3.79, 1.3899999999999999, 8.8000000000000007, 6.4199999999999999, 5.0960068446470617, 3.3399999999999999, 7.2300000000000004, 5.0960068446470617, 3.5699999999999998, 4.4000000000000004, 4.04, 7.5199999999999996, 4.96, 5.5700000000000003, 5.0960068446470617, 9.1999999999999993, 4.6100000000000003, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 36.539999999999999, 23.690000000000001, 7.7400000000000002, 5.0960068446470617, 45.75, 5.0960068446470617, 5.0960068446470617, 16.280000000000001, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 5.0960068446470617, 1.23, 1.27, 1.8100000000000001, 1.8100000000000001, 1.8100000000000001, 1.8100000000000001, 2.71],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, -0.01, -0.01, -0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 0.02, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 1.0000000000000001e-05, 0.059999999999999998, 1.4399999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.869999999999997, 0.17999999999999999, 0.17999999999999999, 0.93999999999999995, 0.93999999999999995, 1.21, 2.54, 3.8900000000000001, 2.8500000000000001, 1.25, 1.0000000000000001e-05, 4.4299999999999997, 3.0600000000000001, 2.3046668562302388, 2.3046668562302388, 2.3046668562302388, 0.56000000000000005, 2.3046668562302388, 1.1000000000000001, 26.489999999999998, 10.869999999999999, 7.8700000000000001, 8.3365339699690999, 16.02, 2.5699999999999998, 7.9047058823529408, 8.3365339699690999, 10.76, 4.3600000000000003, 7.0899999999999999, 4.71, 4.7080256184518285, 4.7080256184518285, 1.0000000000000001e-05, 14.869999999999999, 3.71, 18.98, 4.9400000000000004, 1.0000000000000001e-05, 3.6299999999999999, 2.04, 20.309999999999999, 12.789999999999999, 4.6699999999999999, 7.5721915178845531, 7.5721915178845531, 19.25, 31.68, 7.5721915178845531, 32.32, 7.5721915178845531, 7.5721915178845531, 16.390000000000001, 6.6200000000000001, 7.5721915178845531, 13.57, 3.6899999999999999, 7.5721915178845531, 7.5721915178845531, 7.5721915178845531, 7.5721915178845531, 7.5721915178845531, 9.9499999999999993, 7.5721915178845531, 7.5721915178845531, 7.5721915178845531, 7.5721915178845531, 7.5721915178845531, 7.5721915178845531, 7.5721915178845531, 7.5721915178845531, 2.5, 23.420000000000002, 4.2199999999999998, 15.220000000000001, 1.1699999999999999, 6, 0.54000000000000004, 2.6679807590781959, 2.6679807590781959, 0.78000000000000003, 5.6500000000000004, 0.01, 6.0199999999999996, 18.77, 2.6679807590781959, 2.6679807590781959, 2.6679807590781959, 4.2699999999999996, 1.4299999999999999, 4.2400000000000002, 11.863587081733206, 21.149999999999999, 3.9300000000000002, 11.863587081733206, 11.140000000000001, 11.863587081733206, 5.8700000000000001, 11.863587081733206, 11.863587081733206, 11.863587081733206, 4.0700000000000003, 38.310000000000002, 5.8700000000000001, 7.8399999999999999, 9.4000000000000004, 12.65, 2.5099999999999998, 5.4800000000000004, 39.18, 11.720000000000001, 11.77, 11.640000000000001, 6.9699999999999998, 8.4000000000000004, 19.489999999999998, 10.4, 37.380000000000003, 11.943122492452808, 3.71, 11.943122492452808, 11.943122492452808, 11.943122492452808, 19.739999999999998, 11.943122492452808, 3.6400000000000001, 15.216000000000001, 11.943122492452808, 11.943122492452808, 36.310000000000002, 34.189999999999998, 11.943122492452808, 13.619999999999999, 15.59, 18.030000000000001, 0.46000000000000002, 1.8500000000000001, 11.943122492452808, 11.943122492452808, 11.943122492452808, 11.943122492452808, 12.65, 11.943122492452808, 11.943122492452808, 20.899999999999999, 11.943122492452808, 2.1800000000000002, 1.05, 13.880000000000001, 1.0900000000000001, 2.6099999999999999, 3.7400000000000002, 1.3899999999999999, 8.8000000000000007, 5.5599999999999996, 4.9008376157310281, 3.3399999999999999, 6.6299999999999999, 4.9008376157310281, 3.6600000000000001, 4.3700000000000001, 4.1500000000000004, 6.5700000000000003, 4.8700000000000001, 5.5700000000000003, 4.9008376157310281, 9.75, 4.4400000000000004, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 34.780000000000001, 23.420000000000002, 8.3599999999999994, 4.9008376157310281, 39.229999999999997, 4.9008376157310281, 4.9008376157310281, 16.25, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 4.9008376157310281, 1.23, 1.28, 2.02, 2.02, 2.02, 2.02, 2.8700000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.01, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 0.029999999999999999, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.01, 1.0000000000000001e-05, 0.040000000000000001, 0.83999999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 13.210000000000001, 0.20999999999999999, 0.20999999999999999, 0.93000000000000005, 0.93000000000000005, 0.87, 2.5499999999999998, 3.5600000000000001, 2.1000000000000001, 1.1699999999999999, 1.0000000000000001e-05, 4.4000000000000004, 3.0099999999999998, 1.9691439573081193, 1.9691439573081193, 1.9691439573081193, 0.55000000000000004, 1.9691439573081193, 1.21, 25.41, 23.43, 10.93, 9.0968946705138301, 12.109999999999999, 2.8399999999999999, 7.5052941176470584, 9.0968946705138301, 10.76, 4.2599999999999998, 7.0499999999999998, 4.1200000000000001, 4.1182119291974333, 4.1182119291974333, 1.0000000000000001e-05, 13.210000000000001, 3.2999999999999998, 17.800000000000001, 4.1299999999999999, 1.0000000000000001e-05, 3.0899999999999999, 2.0899999999999999, 16.629999999999999, 15.19, 4.6699999999999999, 6.9479070307747728, 6.9479070307747728, 20.5, 23.09, 6.9479070307747728, 32.32, 6.9479070307747728, 6.9479070307747728, 16.280000000000001, 8.0199999999999996, 6.9479070307747728, 11.85, 4.0300000000000002, 6.9479070307747728, 6.9479070307747728, 6.9479070307747728, 6.9479070307747728, 6.9479070307747728, 10.48, 6.9479070307747728, 6.9479070307747728, 6.9479070307747728, 6.9479070307747728, 6.9479070307747728, 6.9479070307747728, 6.9479070307747728, 6.9479070307747728, 2.7599999999999998, 20.57, 3.7000000000000002, 17.199999999999999, 0.93999999999999995, 6, 0.54000000000000004, 2.6027642651753649, 2.6027642651753649, 0.65000000000000002, 5.6399999999999997, 0.20999999999999999, 6.2400000000000002, 17.239999999999998, 2.6027642651753649, 2.6027642651753649, 2.6027642651753649, 4.2699999999999996, 1.53, 4.1500000000000004, 10.900482054516205, 19.890000000000001, 3.2400000000000002, 10.900482054516205, 9.4800000000000004, 10.900482054516205, 5.8700000000000001, 10.900482054516205, 10.900482054516205, 10.900482054516205, 4.1200000000000001, 33.189999999999998, 5.3799999999999999, 7.8399999999999999, 9.4000000000000004, 12.640000000000001, 2.6400000000000001, 5.6399999999999997, 10.289999999999999, 39.829999999999998, 10.800000000000001, 11.699999999999999, 6.9500000000000002, 6.6900000000000004, 16.023333333333333, 10.4, 37.380000000000003, 11.562217151271293, 11.562217151271293, 3.71, 11.562217151271293, 11.562217151271293, 20.010000000000002, 11.562217151271293, 4.5099999999999998, 14.688000000000001, 11.562217151271293, 11.562217151271293, 34.770000000000003, 26.949999999999999, 11.562217151271293, 13.68, 15.449999999999999, 18.030000000000001, 1.24, 1.6399999999999999, 11.562217151271293, 11.562217151271293, 11.562217151271293, 11.562217151271293, 12.710000000000001, 11.562217151271293, 11.562217151271293, 7.8799999999999999, 11.562217151271293, 2.4199999999999999, 1.0600000000000001, 10.720000000000001, 1.05, 2.0699999999999998, 3.5499999999999998, 1.45, 8.8000000000000007, 4.5, 4.6691267274738983, 3.3399999999999999, 4.6691267274738983, 5.9699999999999998, 3.0499999999999998, 4.5599999999999996, 4.04, 6.1600000000000001, 5.0700000000000003, 5.5700000000000003, 4.6691267274738983, 9.7699999999999996, 4.6100000000000003, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 39.950000000000003, 20.609999999999999, 8.4299999999999997, 4.6691267274738983, 24.93, 4.6691267274738983, 4.6691267274738983, 16.780000000000001, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 4.6691267274738983, 1.1200000000000001, 1.29, 2.1699999999999999, 2.1699999999999999, 2.1699999999999999, 2.1699999999999999, 2.77],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, -0.01, -0.01, -0.01, 1.0000000000000001e-05, 0.94999999999999996, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 0.029999999999999999, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 13.039999999999999, 0.22, 0.21999999999999997, 0.93000000000000005, 0.93000000000000005, 0.81999999999999995, 2.0800000000000001, 2.8999999999999999, 1.8999999999999999, 1.1399999999999999, 1.0000000000000001e-05, 3.79, 2.8700000000000001, 1.7866740925267075, 1.7866740925267075, 1.7866740925267075, 0.51000000000000001, 1.7866740925267075, 1.1100000000000001, 25.109999999999999, 22.82, 10.32, 8.2272858198306444, 2.8799999999999999, 8.3399999999999999, 7.1058823529411761, 8.2272858198306444, 10.76, 4.0099999999999998, 6.1600000000000001, 2.8399999999999999, 2.838713550789056, 2.838713550789056, 1.0000000000000001e-05, 13.039999999999999, 2.7799999999999998, 19.370000000000001, 4.04, 1.0000000000000001e-05, 3.3999999999999999, 2.0699999999999998, 16.719999999999999, 19.100000000000001, 4.6699999999999999, 7.5434195529772854, 7.5434195529772854, 20.57, 24.690000000000001, 7.5434195529772854, 32.32, 7.5434195529772854, 7.5434195529772854, 14.69, 8.3300000000000001, 7.5434195529772854, 3.1800000000000002, 3.3300000000000001, 7.5434195529772854, 7.5434195529772854, 7.5434195529772854, 7.5434195529772854, 7.5434195529772854, 10.84, 7.5434195529772854, 7.5434195529772854, 7.5434195529772854, 7.5434195529772854, 7.5434195529772854, 7.5434195529772854, 7.5434195529772854, 7.5434195529772854, 2.1899999999999999, 20.449999999999999, 3.8100000000000001, 16.800000000000001, 3.6200000000000001, 6, 0.54000000000000004, 2.5453369889521786, 2.5453369889521786, 4.5, 0.73999999999999999, 0.26000000000000001, 5.29, 19.239999999999998, 2.5453369889521786, 2.5453369889521786, 2.5453369889521786, 4.2699999999999996, 1.8799999999999999, 3.3999999999999999, 9.8461736639099851, 15.449999999999999, 3.1400000000000001, 9.8461736639099851, 12.99, 9.8461736639099851, 5.8700000000000001, 9.8461736639099851, 9.8461736639099851, 9.8461736639099851, 3.3700000000000001, 19.219999999999999, 6.46, 7.8399999999999999, 9.4000000000000004, 13.23, 4.1200000000000001, 6.7400000000000002, 10.34, 41.159999999999997, 11.970000000000001, 10.880000000000001, 7.9800000000000004, 5.9500000000000002, 12.556666666666667, 10.4, 37.380000000000003, 11.908726275366867, 3.71, 11.908726275366867, 11.908726275366867, 11.908726275366867, 19.969999999999999, 11.908726275366867, 5.3099999999999996, 14.16, 11.908726275366867, 11.908726275366867, 36.270000000000003, 28.100000000000001, 11.908726275366867, 14.470000000000001, 15.6, 18.030000000000001, 1.3799999999999999, 1.3600000000000001, 11.908726275366867, 11.908726275366867, 11.908726275366867, 11.908726275366867, 14.109999999999999, 11.908726275366867, 11.908726275366867, 6.4199999999999999, 11.908726275366867, 2.3199999999999998, 1.1499999999999999, 10.76, 1.1000000000000001, 1.8899999999999999, 3.6899999999999999, 1.4299999999999999, 9.0299999999999994, 4.2300000000000004, 4.6151251909767872, 3.3399999999999999, 4.6151251909767872, 5.9900000000000002, 3, 3.9199999999999999, 6.2300000000000004, 3.6699999999999999, 5.21, 5.5700000000000003, 4.6151251909767872, 9.8399999999999999, 4.5999999999999996, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 35.229999999999997, 22.559999999999999, 9.4000000000000004, 4.6151251909767872, 25.539999999999999, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 19.530000000000001, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 4.6151251909767872, 1.1200000000000001, 1.3300000000000001, 2.3799999999999999, 2.3799999999999999, 2.3799999999999999, 2.3799999999999999, 2.7799999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, -0.01, -0.01, -0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.059999999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 0.040000000000000001, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 12.289999999999999, 0.23000000000000001, 0.23000000000000001, 0.89000000000000001, 0.89000000000000001, 0.66000000000000003, 5.71, 2.9100000000000001, 1.96, 0.70999999999999996, 1.0000000000000001e-05, 3.3100000000000001, 2.6899999999999999, 1.6550724458850516, 1.6550724458850516, 1.6550724458850516, 0.52000000000000002, 1.6550724458850516, 1.22, 13.23, 19.27, 15.25, 10.843725737761581, 3.0699999999999998, 14.109999999999999, 6.7064705882352937, 10.843725737761581, 6.9500000000000002, 5.9100000000000001, 5.1299999999999999, 2.3599999999999999, 2.3589009483428103, 2.3589009483428103, 1.0000000000000001e-05, 12.289999999999999, 2.2799999999999998, 17.960000000000001, 3.5499999999999998, 1.0000000000000001e-05, 3.3900000000000001, 1.72, 16.719999999999999, 14.630000000000001, 5.1399999999999997, 6.9378631959441552, 6.9378631959441552, 19.780000000000001, 25.010000000000002, 32.32, 6.9378631959441552, 6.9378631959441552, 6.9378631959441552, 10.98, 8.1799999999999997, 6.9378631959441552, 1.1299999999999999, 3.8999999999999999, 6.9378631959441552, 6.9378631959441552, 6.9378631959441552, 6.9378631959441552, 12.56, 6.9378631959441552, 6.9378631959441552, 6.9378631959441552, 6.9378631959441552, 6.9378631959441552, 6.9378631959441552, 6.9378631959441552, 6.9378631959441552, 6.9378631959441552, 2.0499999999999998, 23.73, 4.5700000000000003, 16.629999999999999, 5.0099999999999998, 6, 1.27, 3.184441614788621, 3.184441614788621, 4.9000000000000004, 0.20000000000000001, 0.72999999999999998, 5.3499999999999996, 23.32, 3.184441614788621, 3.184441614788621, 3.184441614788621, 4.2699999999999996, 3.52, 4.0599999999999996, 16.629999999999999, 10.022192127666864, 3.1099999999999999, 10.022192127666864, 11.210000000000001, 10.022192127666864, 5.8700000000000001, 10.022192127666864, 10.022192127666864, 10.022192127666864, 3.4900000000000002, 18.800000000000001, 6.3099999999999996, 7.4299999999999997, 9.4000000000000004, 11.75, 4.9800000000000004, 7.2400000000000002, 12.380000000000001, 25.850000000000001, 11.42, 11.18, 7.5899999999999999, 5.2699999999999996, 10.4, 9.0899999999999999, 37.380000000000003, 10.927091909212438, 4.0300000000000002, 10.927091909212438, 10.927091909212438, 10.927091909212438, 18.48, 10.927091909212438, 9.5399999999999991, 10.927091909212438, 13.632000000000001, 10.927091909212438, 33.240000000000002, 10.927091909212438, 32.579999999999998, 12.529999999999999, 20.780000000000001, 18.030000000000001, 0.85999999999999999, 1.1000000000000001, 10.927091909212438, 10.927091909212438, 10.927091909212438, 10.927091909212438, 12.119999999999999, 10.927091909212438, 10.927091909212438, 5.21, 10.927091909212438, 2.2200000000000002, 1.28, 8.0500000000000007, 0.95999999999999996, 2.2200000000000002, 3.48, 1.47, 10.859999999999999, 4.4000000000000004, 4.7885209152378838, 3.3399999999999999, 4.7885209152378838, 5.5099999999999998, 3.3100000000000001, 3.5899999999999999, 5.3099999999999996, 3.7599999999999998, 5.1600000000000001, 5.4000000000000004, 4.7885209152378838, 9.6999999999999993, 4.9000000000000004, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 28.260000000000002, 4.7885209152378838, 25.039999999999999, 9.1500000000000004, 4.7885209152378838, 25.710000000000001, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 22.219999999999999, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 4.7885209152378838, 1.1000000000000001, 1.45, 2.73, 2.73, 2.73, 2.73, 2.9100000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, -0.01, -0.01, -0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, -0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, -0.059999999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 0.040000000000000001, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 11.289999999999999, 0.23999999999999999, 0.23999999999999999, 0.94999999999999996, 0.94999999999999996, 0.41999999999999998, 2.7999999999999998, 1.6599999999999999, 2.0099999999999998, 0.67000000000000004, 0.029999999999999999, 3.4399999999999999, 2.8399999999999999, 1.7052893296394753, 1.7052893296394753, 1.7052893296394753, 0.46999999999999997, 1.7052893296394753, 1.21, 10.130000000000001, 16.09, 15.220000000000001, 10.667559502127313, 3.3900000000000001, 11.300000000000001, 6.3070588235294114, 10.667559502127313, 9.5999999999999996, 6.0899999999999999, 4.6500000000000004, 2.27, 2.2689332111340588, 2.2689332111340588, 1.0000000000000001e-05, 11.289999999999999, 2.2200000000000002, 18.050000000000001, 3.3700000000000001, 1.0000000000000001e-05, 3.5, 1.8300000000000001, 21.510000000000002, 12.34, 5.1200000000000001, 7.5196788920584439, 7.5196788920584439, 20.25, 28.059999999999999, 32.32, 7.5196788920584439, 7.5196788920584439, 7.5196788920584439, 10.710000000000001, 7.9900000000000002, 7.5196788920584439, 1.3700000000000001, 3.9399999999999999, 7.5196788920584439, 7.5196788920584439, 7.5196788920584439, 7.5196788920584439, 12.720000000000001, 7.5196788920584439, 7.5196788920584439, 7.5196788920584439, 7.5196788920584439, 7.5196788920584439, 7.5196788920584439, 7.5196788920584439, 7.5196788920584439, 7.5196788920584439, 1.8, 24.550000000000001, 6.3799999999999999, 15.68, 4.1600000000000001, 6, 1.1000000000000001, 2.982440770584577, 2.982440770584577, 4.4000000000000004, 0.19, 0.80000000000000004, 5, 2.982440770584577, 22.960000000000001, 2.982440770584577, 2.982440770584577, 4.2699999999999996, 4.9800000000000004, 4.0599999999999996, 15.65, 9.5067486316685219, 3.5800000000000001, 9.5067486316685219, 9.3000000000000007, 9.5067486316685219, 5.8700000000000001, 9.5067486316685219, 9.5067486316685219, 9.5067486316685219, 3.2599999999999998, 19.309999999999999, 8.9299999999999997, 6.8599999999999994, 10.41, 13.619999999999999, 3.4399999999999999, 7.1299999999999999, 10.970000000000001, 26.859999999999999, 11.76, 11.279999999999999, 6.8700000000000001, 4.3899999999999997, 9.8300000000000001, 7.7199999999999998, 37.380000000000003, 11.025717182236846, 4.3200000000000003, 11.025717182236846, 11.025717182236846, 11.025717182236846, 16.859999999999999, 11.025717182236846, 9.4299999999999997, 11.025717182236846, 13.103999999999999, 11.025717182236846, 27.59, 11.025717182236846, 20.539999999999999, 9.6500000000000004, 19.18, 18.030000000000001, 1.8500000000000001, 1.3500000000000001, 11.025717182236846, 11.025717182236846, 11.025717182236846, 11.025717182236846, 12.15, 11.025717182236846, 11.025717182236846, 5.0999999999999996, 11.025717182236846, 1.6899999999999999, 1.3, 7.1100000000000003, 0.87, 1.8, 2.6800000000000002, 1.3400000000000001, 9.1699999999999999, 4.3499999999999996, 4.5172617892520321, 3.3399999999999999, 4.5172617892520321, 6.29, 3.1720000000000002, 4.4500000000000002, 3.8399999999999999, 3.54, 5.5599999999999996, 4.6299999999999999, 4.5172617892520321, 11.039999999999999, 5.4299999999999997, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 20.690000000000001, 4.5172617892520321, 15.91, 8.5700000000000003, 4.5172617892520321, 26.82, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 16.210000000000001, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 4.5172617892520321, 1.0800000000000001, 1.5, 3.4100000000000001, 3.4100000000000001, 3.4100000000000001, 3.4100000000000001, 2.8300000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, -0.01, -0.01, -0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.059999999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 0.040000000000000001, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 1.0000000000000001e-05, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.21, 0.22, 0.22, 0.88, 0.88, 0.44, 2.5499999999999998, 1.5900000000000001, 2.04, 0.59999999999999998, 1.0000000000000001e-05, 3.2200000000000002, 2.8999999999999999, 1.6753491880465723, 1.6753491880465723, 1.6753491880465723, 0.46000000000000002, 1.6753491880465723, 1.45, 9.1600000000000001, 16.09, 4.8700000000000001, 6.1548259320140826, 3.6299999999999999, 10.18, 5.907647058823529, 6.1548259320140826, 10.19, 8, 5.71, 2.3100000000000001, 2.3089277376728461, 2.3089277376728461, 1.0000000000000001e-05, 6.21, 2.3199999999999998, 18.530000000000001, 3.0600000000000001, 1.0000000000000001e-05, 3.27, 1.8799999999999999, 20.190000000000001, 10.699999999999999, 4.8399999999999999, 6.9601064668516166, 6.9601064668516166, 18.699999999999999, 19.719999999999999, 32.32, 6.9601064668516166, 6.9601064668516166, 6.9601064668516166, 10.890000000000001, 7.6500000000000004, 6.9601064668516166, 1.96, 3.4300000000000002, 6.9601064668516166, 6.9601064668516166, 6.9601064668516166, 6.9601064668516166, 13, 6.9601064668516166, 6.9601064668516166, 6.9601064668516166, 6.9601064668516166, 6.9601064668516166, 6.9601064668516166, 6.9601064668516166, 6.9601064668516166, 6.9601064668516166, 1.78, 10.119999999999999, 7.4199999999999999, 15.76, 4.5199999999999996, 6, 1.47, 3.2444555888713817, 3.2444555888713817, 4.0999999999999996, 0.080000000000000002, 0.68000000000000005, 4.5099999999999998, 3.2444555888713817, 26.420000000000002, 3.2444555888713817, 3.2444555888713817, 4.2699999999999996, 2.9100000000000001, 4.0599999999999996, 15.65, 9.4831496735023126, 3.23, 9.4831496735023126, 9.5, 9.4831496735023126, 5.8700000000000001, 9.4831496735023126, 9.4831496735023126, 9.4831496735023126, 3.3900000000000001, 18.739999999999998, 8.6999999999999993, 6.29, 10.210000000000001, 3.6299999999999999, 13.82, 5.5199999999999996, 11.43, 27.800000000000001, 12.69, 12.619999999999999, 6.9800000000000004, 5.4400000000000004, 9.5099999999999998, 37.380000000000003, 7.7400000000000002, 11.145279022017291, 4.3399999999999999, 11.145279022017291, 11.145279022017291, 11.145279022017291, 16.66, 11.145279022017291, 9.4299999999999997, 11.145279022017291, 12.576000000000001, 11.145279022017291, 32.479999999999997, 11.145279022017291, 31.719999999999999, 12.109999999999999, 16.09, 18.030000000000001, 1.6499999999999999, 1.1200000000000001, 11.145279022017291, 11.145279022017291, 11.145279022017291, 11.145279022017291, 12.85, 11.145279022017291, 11.145279022017291, 3.8399999999999999, 11.145279022017291, 1.76, 1.23, 6.4100000000000001, 0.81000000000000005, 1.73, 3.1099999999999999, 1.1599999999999999, 8.9199999999999999, 4.3899999999999997, 3.3399999999999999, 4.4712930682956111, 4.4712930682956111, 6.1200000000000001, 3.0340000000000003, 6, 3.48, 3.3199999999999998, 5.7400000000000002, 4.0999999999999996, 4.4712930682956111, 11.19, 6.4699999999999998, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 20.829999999999998, 4.4712930682956111, 14.23, 8.5700000000000003, 4.4712930682956111, 29.18, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 17.629999999999999, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 4.4712930682956111, 1.02, 1.4399999999999999, 3.2400000000000002, 3.2400000000000002, 3.2400000000000002, 3.2400000000000002, 2.7799999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, -0.01, -0.01, -0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.01, 0.059999999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 0.050000000000000003, 0.050000000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 1.0000000000000001e-05, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.5099999999999998, 0.20000000000000001, 0.19999999999999998, 0.87, 0.87, 0.44, 2.4300000000000002, 1.47, 2.1200000000000001, 0.62, 0.040000000000000001, 3.1000000000000001, 2.98, 1.7098848748648843, 1.7098848748648843, 1.7098848748648843, 0.38, 1.7098848748648843, 1.45, 10.81, 18.780000000000001, 3.5600000000000001, 5.9069329394348609, 3.3599999999999999, 13.26, 5.5082352941176467, 5.9069329394348609, 10.85, 7.0999999999999996, 5.8799999999999999, 1.9099999999999999, 1.9091032620410058, 1.9091032620410058, 1.0000000000000001e-05, 4.5099999999999998, 2.3500000000000001, 20.920000000000002, 2.9300000000000002, 1.0000000000000001e-05, 3.7200000000000002, 1.98, 17.68, 10.720000000000001, 5.7599999999999998, 6.8850796903380935, 6.8850796903380935, 19.09, 32.390000000000001, 32.32, 6.8850796903380935, 9.5199999999999996, 6.8850796903380935, 6.8850796903380935, 7.75, 6.8850796903380935, 0.32000000000000001, 2.96, 6.8850796903380935, 6.8850796903380935, 6.8850796903380935, 6.8850796903380935, 12.369999999999999, 6.8850796903380935, 6.8850796903380935, 6.8850796903380935, 6.8850796903380935, 6.8850796903380935, 6.8850796903380935, 6.8850796903380935, 6.8850796903380935, 6.8850796903380935, 1.5800000000000001, 9.9700000000000006, 7.4199999999999999, 15.789999999999999, 4.0700000000000003, 6, 1.52, 3.3223475585520514, 3.3223475585520514, 3.6099999999999999, 0.040000000000000001, 0.63, 4.5700000000000003, 3.3223475585520514, 28.550000000000001, 3.3223475585520514, 3.3223475585520514, 4.2699999999999996, 1.78, 4.0599999999999996, 15.65, 9.9165879240705443, 3.5, 9.9165879240705443, 11.09, 9.9165879240705443, 5.8700000000000001, 9.9165879240705443, 9.9165879240705443, 9.9165879240705443, 3.6600000000000001, 21.890000000000001, 6.7400000000000002, 6.6799999999999997, 11, 2.71, 12.81, 6.5999999999999996, 11.84, 24.600000000000001, 11.76, 11.59, 7.5700000000000003, 5.6299999999999999, 10.44, 36.450000000000003, 7.6600000000000001, 10.662862345413576, 4.6100000000000003, 10.662862345413576, 10.662862345413576, 10.662862345413576, 15.57, 10.662862345413576, 9.4299999999999997, 10.662862345413576, 12.047999999999998, 10.662862345413576, 28.18, 10.662862345413576, 27.68, 16.199999999999999, 10.550000000000001, 18.125, 1.3400000000000001, 1.2, 10.662862345413576, 10.662862345413576, 10.662862345413576, 10.662862345413576, 12.85, 10.662862345413576, 10.662862345413576, 3.7999999999999998, 10.662862345413576, 2.0299999999999998, 1.52, 7.4500000000000002, 0.81999999999999995, 1.48, 3.3199999999999998, 1.03, 7.8200000000000003, 4.4400000000000004, 3.3399999999999999, 4.2294847797164037, 4.2294847797164037, 6.0899999999999999, 2.8959999999999999, 6.2599999999999998, 2.8399999999999999, 3.4399999999999999, 5.1299999999999999, 3.75, 4.2294847797164037, 11.06, 5.7199999999999998, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 21.149999999999999, 14.23, 4.2294847797164037, 8.5700000000000003, 4.2294847797164037, 29.18, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 17.629999999999999, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 4.2294847797164037, 1.48, 1.6000000000000001, 3.27, 3.27, 3.27, 3.27, 2.8500000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, -0.01, -0.01, -0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.17000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.059999999999999998, 0.060000000000000005, 0.060000000000000005, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 1.0000000000000001e-05, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.5099999999999998, 0.20000000000000001, 0.20000000000000001, 0.88, 0.88, 0.37, 2.4100000000000001, 1.5, 2.1299999999999999, 0.58999999999999997, 0.050000000000000003, 3.0699999999999998, 2.96, 1.7036898765342905, 1.7036898765342905, 1.7036898765342905, 0.40000000000000002, 1.7036898765342905, 1.4399999999999999, 8.3699999999999992, 18.609999999999999, 2.7000000000000002, 5.2815228497597877, 3.71, 5.1088235294117643, 10.880000000000001, 5.2815228497597877, 12.050000000000001, 6.1900000000000004, 6.0199999999999996, 1.8500000000000001, 1.8491173068771536, 1.8491173068771536, 1.0000000000000001e-05, 4.5099999999999998, 2.0600000000000001, 20.100000000000001, 3.0099999999999998, 1.0000000000000001e-05, 2.79, 1.46, 17.559999999999999, 10.619999999999999, 6.5599999999999996, 6.3917450891816774, 6.3917450891816774, 19.370000000000001, 27.43, 32.32, 6.3917450891816774, 8.0899999999999999, 6.3917450891816774, 6.3917450891816774, 7.54, 6.3917450891816774, 1.53, 3.25, 6.3917450891816774, 6.3917450891816774, 6.3917450891816774, 6.3917450891816774, 11.279999999999999, 6.3917450891816774, 6.3917450891816774, 6.3917450891816774, 6.3917450891816774, 6.3917450891816774, 6.3917450891816774, 6.3917450891816774, 6.3917450891816774, 6.3917450891816774, 1.4199999999999999, 9.2699999999999996, 7.4199999999999999, 16.030000000000001, 5.4500000000000002, 6, 0.89000000000000001, 2.9825093486680867, 2.9825093486680867, 3.5699999999999998, 0.050000000000000003, 0.66000000000000003, 3.98, 28.800000000000001, 2.9825093486680867, 2.9825093486680867, 2.9825093486680867, 4.2699999999999996, 1.8700000000000001, 4.0599999999999996, 15.65, 9.7230349912245639, 3.4399999999999999, 9.7230349912245639, 9.8800000000000008, 9.7230349912245639, 5.8700000000000001, 9.7230349912245639, 9.7230349912245639, 9.7230349912245639, 3.3900000000000001, 15.19, 6.7400000000000002, 7.8300000000000001, 9.8499999999999996, 2.8700000000000001, 10.130000000000001, 5.3399999999999999, 11.890000000000001, 25.129999999999999, 10.970000000000001, 10.220000000000001, 7.7999999999999998, 5.8700000000000001, 11.119999999999999, 32.149999999999999, 7.6600000000000001, 10.266471982036965, 4.7999999999999998, 10.266471982036965, 10.266471982036965, 10.266471982036965, 15.94, 10.266471982036965, 9.4299999999999997, 10.266471982036965, 11.52, 10.266471982036965, 27.149999999999999, 10.266471982036965, 25.77, 14.880000000000001, 11.35, 18.219999999999999, 1.6100000000000001, 1.1799999999999999, 10.266471982036965, 10.266471982036965, 10.266471982036965, 10.266471982036965, 12.85, 10.266471982036965, 10.266471982036965, 3.7599999999999998, 10.266471982036965, 1.99, 1.4199999999999999, 13.16, 0.70999999999999996, 1.3799999999999999, 3.29, 0.93000000000000005, 7.5199999999999996, 4.4100000000000001, 3.3399999999999999, 4.028932552120212, 4.028932552120212, 5.6600000000000001, 2.758, 4.8399999999999999, 2.6000000000000001, 3.48, 4.9500000000000002, 3.8300000000000001, 4.028932552120212, 11.34, 5.9800000000000004, 4.028932552120212, 4.028932552120212, 4.028932552120212, 18.34, 14.23, 4.028932552120212, 4.028932552120212, 8.5700000000000003, 29.18, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 17.629999999999999, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 4.028932552120212, 2.0899999999999999, 1.29, 3.1000000000000001, 3.1000000000000001, 3.1000000000000001, 3.1000000000000001, 2.71],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 0.050000000000000003, 0.050000000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 1.0000000000000001e-05, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 0.040000000000000001, 0.040000000000000001, 0.040000000000000001, 0.040000000000000001, 4.5099999999999998, 0.23999999999999999, 0.23999999999999999, 0.93999999999999995, 0.93999999999999995, 0.29999999999999999, 2.23, 1.5700000000000001, 2.2599999999999998, 0.58999999999999997, 0.040000000000000001, 3, 3.5600000000000001, 1.8032432983994411, 1.8032432983994411, 1.8032432983994411, 0.39000000000000001, 1.8032432983994411, 1.78, 4.9400000000000004, 14.69, 3.1099999999999999, 5.0683279847790867, 4.3600000000000003, 4.709411764705882, 9.1999999999999993, 5.0683279847790867, 10.220000000000001, 6.5599999999999996, 4.4100000000000001, 1.8300000000000001, 1.8291115632730017, 1.8291115632730017, 1.0000000000000001e-05, 4.5099999999999998, 2.2000000000000002, 18.829999999999998, 2.7799999999999998, 1.0000000000000001e-05, 2.79, 1.3700000000000001, 26.329999999999998, 9.4900000000000002, 6.29, 7.5812300433842559, 7.5812300433842559, 20.530000000000001, 22.77, 32.32, 7.5812300433842559, 7.9400000000000004, 7.5812300433842559, 7.5812300433842559, 5.8799999999999999, 7.5812300433842559, 1.54, 4.5, 7.5812300433842559, 7.5812300433842559, 7.5812300433842559, 7.5812300433842559, 12.34, 7.5812300433842559, 7.5812300433842559, 7.5812300433842559, 7.5812300433842559, 7.5812300433842559, 7.5812300433842559, 7.5812300433842559, 7.5812300433842559, 7.5812300433842559, 1.3, 8.6099999999999994, 7.4199999999999999, 15.81, 2.8700000000000001, 6, 0.89000000000000001, 3.1335625748167755, 3.1335625748167755, 3.8999999999999999, 0.02, 0.64000000000000001, 2.3599999999999999, 32.520000000000003, 3.1335625748167755, 3.1335625748167755, 3.1335625748167755, 4.2699999999999996, 2.27, 4.0599999999999996, 15.65, 9.8392694422783435, 3.1899999999999999, 9.8392694422783435, 10.710000000000001, 9.8392694422783435, 5.8700000000000001, 9.8392694422783435, 9.8392694422783435, 9.8392694422783435, 2.98, 17.809999999999999, 6.7400000000000002, 7.9100000000000001, 8.7699999999999996, 2.8700000000000001, 10, 5.7599999999999998, 11.27, 22.800000000000001, 11.19, 9.3900000000000006, 6.6900000000000004, 4.9699999999999998, 10.619999999999999, 17.98, 7.6600000000000001, 9.5304264805614931, 9.5304264805614931, 4.6500000000000004, 9.5304264805614931, 9.5304264805614931, 15.94, 9.5304264805614931, 9.4299999999999997, 9.5304264805614931, 9.8300000000000001, 9.5304264805614931, 40.229999999999997, 9.5304264805614931, 33.359999999999999, 14.880000000000001, 14.460000000000001, 18.219999999999999, 1.46, 1.0700000000000001, 9.5304264805614931, 9.5304264805614931, 9.5304264805614931, 9.5304264805614931, 12.85, 9.5304264805614931, 9.5304264805614931, 3.4399999999999999, 9.5304264805614931, 2.3399999999999999, 1.3200000000000001, 13.380000000000001, 0.67000000000000004, 1.0700000000000001, 3.3300000000000001, 0.88, 6.8799999999999999, 3.8999999999999999, 3.3399999999999999, 3.6897886705228591, 3.6897886705228591, 4.8799999999999999, 2.6200000000000001, 5.0300000000000002, 2.8300000000000001, 2.9900000000000002, 4.0999999999999996, 3.27, 3.6897886705228591, 8.8300000000000001, 5.9800000000000004, 3.6897886705228591, 3.6897886705228591, 19.440000000000001, 3.6897886705228591, 14.23, 3.6897886705228591, 3.6897886705228591, 8.5700000000000003, 29.18, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 17.629999999999999, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 3.6897886705228591, 1.8100000000000001, 0.94999999999999996, 3.8300000000000001, 3.8300000000000001, 3.8300000000000001, 3.8300000000000001, 2.9900000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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
            "title": "Taxes on international trade",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02, 0.16, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 0.040000000000000001, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 1.0000000000000001e-05, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.63, 0.63, 0.63, 0.63, 0.63, 4.5099999999999998, 0.20999999999999999, 0.20999999999999999, 0.92000000000000004, 0.92000000000000004, 0.42999999999999999, 2.3300000000000001, 1.3600000000000001, 2.2599999999999998, 0.56000000000000005, 1.0000000000000001e-05, 3.1499999999999999, 3.9199999999999999, 1.8437233404077957, 1.8437233404077957, 1.8437233404077957, 0.38, 1.8437233404077957, 1.6899999999999999, 7.8899999999999997, 17.170000000000002, 3.1099999999999999, 5.1507891512988389, 3.8300000000000001, 4.3099999999999996, 10.07, 5.1507891512988389, 10.94, 7.0099999999999998, 5.1299999999999999, 1.6699999999999999, 1.6691933894415774, 1.6691933894415774, 1.0000000000000001e-05, 4.5099999999999998, 3.6299999999999999, 21.41, 3.1099999999999999, 1.0000000000000001e-05, 2.79, 2.0099999999999998, 24.100000000000001, 9.7899999999999991, 6.29, 7.3850158815012055, 7.3850158815012055, 13.42, 22.77, 32.32, 7.3850158815012055, 7.9400000000000004, 7.3850158815012055, 7.3850158815012055, 6.8499999999999996, 7.3850158815012055, 2.9500000000000002, 4.5, 7.3850158815012055, 7.3850158815012055, 7.3850158815012055, 7.3850158815012055, 12.34, 7.3850158815012055, 7.3850158815012055, 7.3850158815012055, 7.3850158815012055, 7.3850158815012055, 7.3850158815012055, 7.3850158815012055, 7.3850158815012055, 7.3850158815012055, 1.3799999999999999, 9.3200000000000003, 7.4199999999999999, 19.870000000000001, 2.8700000000000001, 6, 0.89000000000000001, 3.4504379813739061, 3.4504379813739061, 3.8999999999999999, 0.02, 0.68999999999999995, 2.52, 37.600000000000001, 3.4504379813739061, 3.4504379813739061, 3.4504379813739061, 4.2699999999999996, 2.27, 4.0599999999999996, 15.65, 10.127638327441559, 3.98, 10.127638327441559, 10.710000000000001, 10.127638327441559, 5.8700000000000001, 10.127638327441559, 10.127638327441559, 10.127638327441559, 3.2400000000000002, 17.809999999999999, 6.7400000000000002, 7.8300000000000001, 8.5899999999999999, 2.8700000000000001, 10, 6.1699999999999999, 13.130000000000001, 23.920000000000002, 11.24, 10.630000000000001, 6.5800000000000001, 4.9199999999999999, 17.98, 11.84, 7.6600000000000001, 9.702334643335778, 9.702334643335778, 4.6500000000000004, 9.702334643335778, 9.702334643335778, 15.94, 9.702334643335778, 9.4299999999999997, 9.702334643335778, 15.859999999999999, 9.702334643335778, 27.260000000000002, 9.702334643335778, 20.699999999999999, 14.880000000000001, 9.8300000000000001, 18.219999999999999, 1.26, 1.1200000000000001, 9.702334643335778, 9.702334643335778, 9.702334643335778, 9.702334643335778, 12.85, 9.702334643335778, 9.702334643335778, 3.4399999999999999, 9.702334643335778, 2.52, 1.5800000000000001, 15.039999999999999, 0.83999999999999997, 1.4199999999999999, 3.3300000000000001, 0.79000000000000004, 7.04, 4.3600000000000003, 3.3399999999999999, 3.8620309832897539, 5.5, 3.8620309832897539, 2.6200000000000001, 5.4299999999999997, 3.1600000000000001, 3.3799999999999999, 4.29, 3.79, 3.8620309832897539, 8.8300000000000001, 5.9800000000000004, 3.8620309832897539, 3.8620309832897539, 15.67, 3.8620309832897539, 14.23, 3.8620309832897539, 3.8620309832897539, 8.5700000000000003, 29.18, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 17.629999999999999, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 3.8620309832897539, 2.02, 1.1200000000000001, 3.3199999999999998, 3.3199999999999998, 3.3199999999999998, 3.3199999999999998, 2.8100000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 70,
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

  
