(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Demographics_Population_ages___65_and_above_map') 

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
    "b55c1cbd25c1": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c1cbd25c1",
  "attrs": {
    "b55c1cbd25c1": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 50,
      "colorbar": {
        "title": "Population ages 65 and above"
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
        "title": "Population ages 65 and above",
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
      "z": [17.800000000000001, 16.420000000000002, 16.420000000000002, 16.420000000000002, 19.120000000000001, 13.59, 17.82, 10.130000000000001, 16.960000000000001, 16.960000000000001, 15.449999999999999, 13.85, 17.039999999999999, 13.94, 12.75, 13.85, 11.5, 15.390000000000001, 16.5, 16.010000000000002, 17.16, 14.869999999999999, 14.856752487677909, 13.369999999999999, 15.460000000000001, 15.460000000000003, 14.31, 15.33, 17.379999999999999, 16.670000000000002, 14.76, 11.07, 15.789999999999999, 15.789981048280316, 15.789981048280316, 15.789981048280316, 15.75, 4.6799999999999997, 14.76, 14.76, 15.57, 10.720000000000001, 11.720000000000001, 15.279999999999999, 8.9000000000000004, 15.970000000000001, 12.66, 13.119999999999999, 10.550000000000001, 10.25, 11.92, 12.24, 22.579999999999998, 16.109999999999999, 13.593058552635194, 5.6399999999999997, 13.140000000000001, 7.1799999999999997, 4.8399999999999999, 7.3799999999999999, 14.720000000000001, 6.2000000000000002, 3.6099999999999999, 5.1799999999999997, 4.25, 10.300000000000001, 3.52, 19.57, 7.5, 7.5230782547108053, 11.960000000000001, 7.2300000000000004, 4.6799999999999997, 5.3499999999999996, 6.3499999999999996, 3.9199999999999999, 6.9100000000000001, 6.8600000000000003, 5.0300000000000002, 4.4000000000000004, 7.1699999999999999, 3.2000000000000002, 2.3999999999999999, 3.71, 4.8299852547971964, 3.48, 3.3599999999999999, 3.0499999999999998, 4.2999999999999998, 4.8299852547971964, 5.9699999999999998, 3.5800000000000001, 4.4800000000000004, 4.8299852547971964, 3.54, 5.5499999999999998, 3.2599999999999998, 4.8299852547971964, 4.8299852547971964, 4.8299852547971964, 5.3899999999999997, 4.8299852547971964, 4.8299852547971964, 4.8299852547971964, 5.6500000000000004, 4.8299852547971964, 4.8299852547971964, 4.8299852547971964, 4.8299852547971964, 4.8299852547971964, 8.2599999999999998, 3.98, 3.5, 3.9199999999999999, 2.29, 4.4699999999999998, 4.4100000000000001, 3.1099999999999999, 2.7000000000000002, 3.3900000000000001, 10.09, 2.9700000000000002, 5.5, 0.84999999999999998, 2.4199999999999999, 2.3900000000000001, 1.6599999999999999, 2.4700000000000002, 1.1799999999999999, 2.5800000000000001, 4.4299999999999997, 4.5099999999999998, 2.3999999999999999, 4.5499999999999998, 2.2599999999999998, 2.9900000000000002, 5.7699999999999996, 2.6299999999999999, 3.75, 3.0499999999999998, 3.6590315803780458, 4.29, 3.1000000000000001, 3, 2.6600000000000001, 2.7599999999999998, 2.1899999999999999, 2.02, 3.2599999999999998, 2.77, 2.5299999999999998, 2.8100000000000001, 2.54, 3.2400000000000002, 2.8199999999999998, 2.9399999999999999, 4.0199999999999996, 2.0600000000000001, 3.29, 2.5899999999999999, 3.9399999999999999, 2.8700000000000001, 3.21, 2.3999999999999999, 2.8171452318626673, 2.7799999999999998, 3.3500000000000001, 2.04, 2.9500000000000002, 3.3300000000000001, 3.2200000000000002, 4.5199999999999996, 3.1400000000000001, 3.25, 3.4199999999999999, 4.6299999999999999, 3.23, 6.5300000000000002, 2.4399999999999999, 3.1600000000000001, 2.8171452318626673, 3.2799999999999998, 3.8399999999999999, 5.2400000000000002, 2.8171452318626673, 4.0999999999999996, 6.4500000000000002, 2.8171452318626673, 5.8600000000000003, 5.3799999999999999, 9.9199999999999999, 8.5399999999999991, 4.8499999999999996, 4.9800000000000004, 13.56, 5.4000000000000004, 5.0899999999999999, 3.9199999999999999, 5.0466386257421627, 4.9500000000000002, 5.1299999999999999, 3.7799999999999998, 3.0099999999999998, 5.6299999999999999, 4.4000000000000004, 3.4300000000000002, 6.2699999999999996, 11.949999999999999, 5.4299999999999997, 5.5999999999999996, 5.54, 3.8900000000000001, 5.5700000000000003, 5.0466386257421627, 5.0466386257421627, 5.3499999999999996, 11.32, 3.8999999999999999, 5.0466386257421627, 7.3300000000000001, 5.0466386257421627, 7.3099999999999996, 8.8599999999999994, 5.0466386257421627, 7.7000000000000002, 7.0599999999999996, 10.16, 11.460000000000001, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 12.279999999999999, 12.76, 12.68, 12.68, 12.68, 12.68, 11.76],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [17.800000000000001, 16.420000000000002, 16.420000000000002, 16.420000000000002, 19.120000000000001, 13.59, 17.82, 10.130000000000001, 16.960000000000001, 16.960000000000001, 15.449999999999999, 13.85, 17.039999999999999, 13.94, 12.75, 13.85, 11.5, 15.390000000000001, 16.5, 16.010000000000002, 17.16, 14.869999999999999, 14.856752487677909, 13.369999999999999, 15.460000000000001, 15.460000000000003, 14.31, 15.33, 17.379999999999999, 16.670000000000002, 14.76, 11.07, 15.789999999999999, 15.789981048280316, 15.789981048280316, 15.789981048280316, 15.75, 4.6799999999999997, 14.76, 14.76, 15.57, 10.720000000000001, 11.720000000000001, 15.279999999999999, 8.9000000000000004, 15.970000000000001, 12.66, 13.119999999999999, 10.550000000000001, 10.25, 11.92, 12.24, 22.579999999999998, 16.109999999999999, 13.593058552635194, 5.6399999999999997, 13.140000000000001, 7.1799999999999997, 4.8399999999999999, 7.3799999999999999, 14.720000000000001, 6.2000000000000002, 3.6099999999999999, 5.1799999999999997, 4.25, 10.300000000000001, 3.52, 19.57, 7.5, 7.5230782547108053, 11.960000000000001, 7.2300000000000004, 4.6799999999999997, 5.3499999999999996, 6.3499999999999996, 3.9199999999999999, 6.9100000000000001, 6.8600000000000003, 5.0300000000000002, 4.4000000000000004, 7.1699999999999999, 3.2000000000000002, 2.3999999999999999, 3.71, 4.8299852547971964, 3.48, 3.3599999999999999, 3.0499999999999998, 4.2999999999999998, 4.8299852547971964, 5.9699999999999998, 3.5800000000000001, 4.4800000000000004, 4.8299852547971964, 3.54, 5.5499999999999998, 3.2599999999999998, 4.8299852547971964, 4.8299852547971964, 4.8299852547971964, 5.3899999999999997, 4.8299852547971964, 4.8299852547971964, 4.8299852547971964, 5.6500000000000004, 4.8299852547971964, 4.8299852547971964, 4.8299852547971964, 4.8299852547971964, 4.8299852547971964, 8.2599999999999998, 3.98, 3.5, 3.9199999999999999, 2.29, 4.4699999999999998, 4.4100000000000001, 3.1099999999999999, 2.7000000000000002, 3.3900000000000001, 10.09, 2.9700000000000002, 5.5, 0.84999999999999998, 2.4199999999999999, 2.3900000000000001, 1.6599999999999999, 2.4700000000000002, 1.1799999999999999, 2.5800000000000001, 4.4299999999999997, 4.5099999999999998, 2.3999999999999999, 4.5499999999999998, 2.2599999999999998, 2.9900000000000002, 5.7699999999999996, 2.6299999999999999, 3.75, 3.0499999999999998, 3.6590315803780458, 4.29, 3.1000000000000001, 3, 2.6600000000000001, 2.7599999999999998, 2.1899999999999999, 2.02, 3.2599999999999998, 2.77, 2.5299999999999998, 2.8100000000000001, 2.54, 3.2400000000000002, 2.8199999999999998, 2.9399999999999999, 4.0199999999999996, 2.0600000000000001, 3.29, 2.5899999999999999, 3.9399999999999999, 2.8700000000000001, 3.21, 2.3999999999999999, 2.8171452318626673, 2.7799999999999998, 3.3500000000000001, 2.04, 2.9500000000000002, 3.3300000000000001, 3.2200000000000002, 4.5199999999999996, 3.1400000000000001, 3.25, 3.4199999999999999, 4.6299999999999999, 3.23, 6.5300000000000002, 2.4399999999999999, 3.1600000000000001, 2.8171452318626673, 3.2799999999999998, 3.8399999999999999, 5.2400000000000002, 2.8171452318626673, 4.0999999999999996, 6.4500000000000002, 2.8171452318626673, 5.8600000000000003, 5.3799999999999999, 9.9199999999999999, 8.5399999999999991, 4.8499999999999996, 4.9800000000000004, 13.56, 5.4000000000000004, 5.0899999999999999, 3.9199999999999999, 5.0466386257421627, 4.9500000000000002, 5.1299999999999999, 3.7799999999999998, 3.0099999999999998, 5.6299999999999999, 4.4000000000000004, 3.4300000000000002, 6.2699999999999996, 11.949999999999999, 5.4299999999999997, 5.5999999999999996, 5.54, 3.8900000000000001, 5.5700000000000003, 5.0466386257421627, 5.0466386257421627, 5.3499999999999996, 11.32, 3.8999999999999999, 5.0466386257421627, 7.3300000000000001, 5.0466386257421627, 7.3099999999999996, 8.8599999999999994, 5.0466386257421627, 7.7000000000000002, 7.0599999999999996, 10.16, 11.460000000000001, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 5.0466386257421627, 12.279999999999999, 12.76, 12.68, 12.68, 12.68, 12.68, 11.76],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [18.370000000000001, 16.510000000000002, 16.510000000000002, 16.510000000000002, 19.390000000000001, 13.85, 18.109999999999999, 10.199999999999999, 16.75, 17.199999999999999, 15.710000000000001, 14.01, 17.129999999999999, 13.970000000000001, 12.92, 13.92, 11.609999999999999, 15.84, 16.960000000000001, 16.370000000000001, 17.199999999999999, 14.949999999999999, 14.935625634180079, 13.33, 15.720000000000001, 15.720000000000001, 14.58, 15.449999999999999, 17.510000000000002, 16.949999999999999, 14.99, 11.050000000000001, 15.82, 15.820014353524073, 15.820014353524073, 15.820014353524073, 15.85, 4.7400000000000002, 14.720000000000001, 14.720000000000001, 15.67, 10.94, 11.75, 15.720000000000001, 9.3100000000000005, 16.32, 13.16, 13.59, 10.56, 10.42, 12.27, 12.029999999999999, 22.82, 16.309999999999999, 13.931348638950068, 5.7400000000000002, 13.5, 7.3799999999999999, 4.8899999999999997, 7.7599999999999998, 14.949999999999999, 6.3399999999999999, 3.6200000000000001, 5.2199999999999998, 4.3099999999999996, 10.66, 3.5699999999999998, 20.059999999999999, 7.6699999999999999, 7.6934519170065947, 12.210000000000001, 7.1600000000000001, 4.7400000000000002, 5.4500000000000002, 6.3799999999999999, 3.96, 7.2199999999999998, 6.96, 5.0499999999999998, 4.5, 7.1900000000000004, 3.2599999999999998, 2.4399999999999999, 3.7599999999999998, 4.8687177654199925, 3.5800000000000001, 3.3799999999999999, 3.1299999999999999, 4.4800000000000004, 4.8687177654199925, 6.2000000000000002, 3.6000000000000001, 4.5599999999999996, 4.8687177654199925, 3.5600000000000001, 5.6100000000000003, 3.2799999999999998, 4.8687177654199925, 4.8687177654199925, 4.8687177654199925, 5.5, 4.8687177654199925, 4.8687177654199925, 4.8687177654199925, 5.6699999999999999, 4.8687177654199925, 4.8687177654199925, 4.8687177654199925, 4.8687177654199925, 4.8687177654199925, 8.6600000000000001, 4.0499999999999998, 3.52, 3.9900000000000002, 2.2999999999999998, 4.6200000000000001, 4.4900000000000002, 3.1000000000000001, 2.71, 3.3999999999999999, 10.1, 3.0600000000000001, 5.5899999999999999, 0.82999999999999996, 2.4900000000000002, 2.3999999999999999, 1.6699999999999999, 2.4100000000000001, 1.1499999999999999, 2.5699999999999998, 4.3799999999999999, 4.5800000000000001, 2.3700000000000001, 4.6299999999999999, 2.27, 2.9399999999999999, 5.8799999999999999, 2.5699999999999998, 3.7799999999999998, 3.0600000000000001, 3.6768989734674897, 4.3600000000000003, 3.0899999999999999, 3.02, 2.6699999999999999, 2.7599999999999998, 2.1699999999999999, 1.95, 3.2599999999999998, 2.7599999999999998, 2.52, 2.7999999999999998, 2.5699999999999998, 3.2000000000000002, 2.79, 4.1200000000000001, 2.9100000000000001, 2, 3.29, 2.5800000000000001, 3.9100000000000001, 2.8799999999999999, 3.1899999999999999, 2.3999999999999999, 2.8037894549687028, 2.77, 3.3199999999999998, 2.02, 2.9100000000000001, 3.3700000000000001, 3.2400000000000002, 4.5300000000000002, 3.1600000000000001, 3.2400000000000002, 3.3100000000000001, 4.5599999999999996, 3.1299999999999999, 6.6399999999999997, 2.48, 3.1800000000000002, 3.3500000000000001, 2.8037894549687028, 3.8999999999999999, 5.4299999999999997, 2.8037894549687028, 4.0599999999999996, 6.4400000000000004, 2.8037894549687028, 5.9900000000000002, 5.5099999999999998, 9.9800000000000004, 8.7100000000000009, 4.96, 5.0599999999999996, 13.699999999999999, 5.6600000000000001, 5.1900000000000004, 3.9500000000000002, 5.1572123562348153, 4.9000000000000004, 5.21, 3.8199999999999998, 3.0099999999999998, 5.9000000000000004, 4.4800000000000004, 3.5, 6.4199999999999999, 12.25, 5.5599999999999996, 5.54, 5.6399999999999997, 3.96, 5.71, 5.1572123562348153, 5.1572123562348153, 5.4699999999999998, 3.8900000000000001, 11.32, 5.1572123562348153, 7.3300000000000001, 5.1572123562348153, 7.4500000000000002, 8.9199999999999999, 5.1572123562348153, 7.9900000000000002, 7.0199999999999996, 10.220000000000001, 11.75, 5.1572123562348153, 5.1572123562348153, 5.1572123562348153, 5.1572123562348153, 5.1572123562348153, 5.1572123562348153, 5.1572123562348153, 5.1572123562348153, 5.1572123562348153, 5.1572123562348153, 5.1572123562348153, 5.1572123562348153, 5.1572123562348153, 5.1572123562348153, 12.300000000000001, 12.869999999999999, 12.789999999999999, 12.789999999999999, 12.789999999999999, 12.789999999999999, 11.82],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [18.989999999999998, 16.579999999999998, 16.579999999999998, 16.579999999999998, 19.710000000000001, 14.07, 18.359999999999999, 10.300000000000001, 16.66, 17.43, 16.190000000000001, 14.19, 17.170000000000002, 14.01, 13.09, 14.050000000000001, 11.73, 16.260000000000002, 17.379999999999999, 16.710000000000001, 17.239999999999998, 15.07, 15.054699292639386, 13.34, 15.94, 15.94, 14.779999999999999, 15.59, 17.629999999999999, 17.219999999999999, 15.23, 10.970000000000001, 15.84, 15.840043432963316, 15.840043432963316, 15.840043432963316, 15.93, 4.79, 14.710000000000001, 14.710000000000001, 15.81, 11.300000000000001, 11.720000000000001, 16.039999999999999, 9.7200000000000006, 16.629999999999999, 13.6, 14.01, 10.619999999999999, 10.59, 12.58, 11.84, 23.100000000000001, 16.23, 14.238763254968278, 5.8399999999999999, 13.800000000000001, 7.5199999999999996, 4.9000000000000004, 8.1300000000000008, 15.09, 6.3899999999999997, 3.6200000000000001, 5.2199999999999998, 4.3399999999999999, 10.94, 3.6499999999999999, 20.600000000000001, 7.8300000000000001, 7.8536833206115571, 12.44, 7.0700000000000003, 4.79, 5.5499999999999998, 6.4000000000000004, 4, 7.54, 7, 5.0700000000000003, 4.5899999999999999, 7.21, 3.3199999999999998, 2.46, 3.7799999999999998, 4.9030605726576111, 3.7000000000000002, 3.3900000000000001, 3.21, 4.6399999999999997, 4.9030605726576111, 6.4299999999999997, 3.6299999999999999, 4.6299999999999999, 4.9030605726576111, 3.54, 5.6600000000000001, 3.2999999999999998, 4.9030605726576111, 4.9030605726576111, 4.9030605726576111, 5.5499999999999998, 4.9030605726576111, 4.9030605726576111, 4.9030605726576111, 5.7400000000000002, 4.9030605726576111, 4.9030605726576111, 4.9030605726576111, 4.9030605726576111, 4.9030605726576111, 9.0600000000000005, 4.1200000000000001, 3.5499999999999998, 4.0800000000000001, 2.2999999999999998, 4.7300000000000004, 4.5700000000000003, 3.0899999999999999, 2.7200000000000002, 3.4100000000000001, 10.1, 3.1400000000000001, 5.6699999999999999, 0.77000000000000002, 2.5499999999999998, 2.46, 1.6699999999999999, 2.3399999999999999, 1.1299999999999999, 2.52, 4.3300000000000001, 4.6500000000000004, 2.3500000000000001, 4.7000000000000002, 2.29, 2.8999999999999999, 2.5099999999999998, 6.0099999999999998, 3.8100000000000001, 3.0699999999999998, 3.6971801286179384, 4.4500000000000002, 3.0899999999999999, 3.0299999999999998, 2.6800000000000002, 2.77, 2.1600000000000001, 1.8799999999999999, 3.2599999999999998, 2.7400000000000002, 2.52, 2.5899999999999999, 2.79, 3.1699999999999999, 2.7599999999999998, 4.1900000000000004, 2.9100000000000001, 1.95, 3.2799999999999998, 2.5699999999999998, 3.8700000000000001, 2.8999999999999999, 3.1800000000000002, 2.7928931915548119, 2.3900000000000001, 2.7599999999999998, 3.29, 2.0099999999999998, 2.8700000000000001, 3.4199999999999999, 3.2799999999999998, 3.1899999999999999, 4.5300000000000002, 3.23, 3.21, 4.4800000000000004, 3.0299999999999998, 6.7400000000000002, 2.52, 3.2200000000000002, 3.4100000000000001, 2.7928931915548119, 4.0199999999999996, 5.6100000000000003, 2.7928931915548119, 4.0199999999999996, 6.4299999999999997, 2.7928931915548119, 6.1399999999999997, 5.6200000000000001, 10.050000000000001, 8.8900000000000006, 5.0700000000000003, 5.1500000000000004, 13.83, 5.9199999999999999, 5.29, 3.9900000000000002, 5.2678115711652724, 4.8600000000000003, 5.2800000000000002, 3.8500000000000001, 3.02, 6.1699999999999999, 4.5599999999999996, 3.5499999999999998, 6.5800000000000001, 12.56, 5.7000000000000002, 5.5099999999999998, 5.7699999999999996, 4.0300000000000002, 5.7400000000000002, 5.2678115711652724, 5.2678115711652724, 5.5999999999999996, 3.8900000000000001, 11.33, 5.2678115711652724, 7.3600000000000003, 5.2678115711652724, 7.6100000000000003, 8.9499999999999993, 5.2678115711652724, 8.2899999999999991, 6.9900000000000002, 10.300000000000001, 12.01, 5.2678115711652724, 5.2678115711652724, 5.2678115711652724, 5.2678115711652724, 5.2678115711652724, 5.2678115711652724, 5.2678115711652724, 5.2678115711652724, 5.2678115711652724, 5.2678115711652724, 5.2678115711652724, 5.2678115711652724, 5.2678115711652724, 5.2678115711652724, 12.359999999999999, 12.99, 12.9, 12.9, 12.9, 12.9, 11.970000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [19.559999999999999, 16.59, 16.59, 16.59, 19.98, 14.220000000000001, 18.550000000000001, 10.44, 16.640000000000001, 17.620000000000001, 16.66, 14.380000000000001, 17.109999999999999, 14, 13.23, 14.25, 11.869999999999999, 16.670000000000002, 17.739999999999998, 17.07, 17.289999999999999, 15.210000000000001, 15.194668442343758, 13.470000000000001, 16.23, 16.23, 14.94, 15.74, 17.75, 17.460000000000001, 15.49, 10.789999999999999, 15.85, 15.850009722648906, 15.850009722648906, 15.850009722648906, 15.869999999999999, 4.8499999999999996, 14.68, 14.68, 15.99, 11.699999999999999, 11.619999999999999, 16.25, 10.119999999999999, 16.91, 13.93, 14.300000000000001, 10.710000000000001, 10.77, 12.789999999999999, 11.710000000000001, 23.420000000000002, 15.73, 14.492590105985991, 5.9400000000000004, 13.98, 7.5599999999999996, 4.8799999999999999, 8.4600000000000009, 15.119999999999999, 6.3399999999999999, 3.6000000000000001, 5.1600000000000001, 4.3300000000000001, 11.119999999999999, 3.73, 21.260000000000002, 8, 8.0236472091421565, 12.619999999999999, 6.9900000000000002, 4.8499999999999996, 5.6399999999999997, 6.4199999999999999, 4.0300000000000002, 7.8499999999999996, 7, 5.0800000000000001, 4.6799999999999997, 7.2400000000000002, 3.3700000000000001, 2.4900000000000002, 3.7799999999999998, 4.9336929943114072, 3.8100000000000001, 3.3900000000000001, 3.29, 4.7199999999999998, 4.9336929943114072, 6.6799999999999997, 3.6600000000000001, 4.7000000000000002, 4.9336929943114072, 3.48, 5.6900000000000004, 3.3300000000000001, 4.9336929943114072, 4.9336929943114072, 4.9336929943114072, 5.5999999999999996, 4.9336929943114072, 4.9336929943114072, 5.7800000000000002, 4.9336929943114072, 4.9336929943114072, 4.9336929943114072, 4.9336929943114072, 4.9336929943114072, 4.9336929943114072, 9.4700000000000006, 4.1900000000000004, 3.5800000000000001, 4.2000000000000002, 2.2999999999999998, 4.8099999999999996, 4.6500000000000004, 3.0800000000000001, 2.7200000000000002, 3.3900000000000001, 10.07, 3.21, 0.63, 5.7599999999999998, 2.6000000000000001, 2.52, 1.6899999999999999, 1.0900000000000001, 2.29, 2.4300000000000002, 4.2699999999999996, 4.71, 2.3300000000000001, 4.7800000000000002, 2.2999999999999998, 2.8799999999999999, 2.4399999999999999, 6.1699999999999999, 3.8300000000000001, 3.0899999999999999, 3.7188741046239433, 4.5300000000000002, 3.0899999999999999, 3.04, 2.6899999999999999, 2.77, 2.1400000000000001, 1.8100000000000001, 3.25, 2.73, 2.5099999999999998, 2.6000000000000001, 2.77, 3.1400000000000001, 2.7400000000000002, 4.25, 2.8999999999999999, 1.8999999999999999, 3.27, 2.5499999999999998, 3.8399999999999999, 2.9300000000000002, 3.1699999999999999, 2.7784292060506934, 2.3799999999999999, 2.7599999999999998, 3.27, 2, 2.8300000000000001, 3.4500000000000002, 3.3199999999999998, 3.23, 4.4800000000000004, 3.2200000000000002, 3.1299999999999999, 4.4100000000000001, 2.9399999999999999, 6.8499999999999996, 2.5699999999999998, 3.2599999999999998, 3.46, 2.7784292060506934, 4.1299999999999999, 5.7800000000000002, 2.7784292060506934, 3.96, 6.4100000000000001, 2.7784292060506934, 6.2800000000000002, 5.7400000000000002, 10.140000000000001, 9.0600000000000005, 5.21, 5.25, 13.949999999999999, 6.1799999999999997, 5.4000000000000004, 4.0199999999999996, 5.3800079604632955, 4.8200000000000003, 5.3499999999999996, 3.8799999999999999, 3.02, 6.46, 4.6500000000000004, 3.6000000000000001, 6.7400000000000002, 12.91, 5.8399999999999999, 5.5199999999999996, 5.9199999999999999, 4.1100000000000003, 5.7800000000000002, 5.3800079604632955, 5.3800079604632955, 5.7300000000000004, 3.8900000000000001, 11.33, 5.3800079604632955, 7.4199999999999999, 5.3800079604632955, 7.7699999999999996, 8.9800000000000004, 5.3800079604632955, 8.5399999999999991, 6.9699999999999998, 10.43, 12.18, 5.3800079604632955, 5.3800079604632955, 5.3800079604632955, 5.3800079604632955, 5.3800079604632955, 5.3800079604632955, 5.3800079604632955, 5.3800079604632955, 5.3800079604632955, 5.3800079604632955, 5.3800079604632955, 5.3800079604632955, 5.3800079604632955, 5.3800079604632955, 12.42, 13.16, 13.01, 13.01, 13.01, 13.01, 12.18],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [19.940000000000001, 16.629999999999999, 16.629999999999999, 16.629999999999999, 20.140000000000001, 14.42, 18.649999999999999, 10.609999999999999, 16.52, 17.809999999999999, 17, 14.59, 17.039999999999999, 13.98, 13.300000000000001, 14.48, 12.02, 17.07, 18.039999999999999, 17.359999999999999, 17.41, 15.43, 15.415073439839007, 13.73, 16.489999999999998, 16.489999999999998, 15.09, 15.93, 17.879999999999999, 17.670000000000002, 15.76, 10.68, 15.890000000000001, 15.889863058811862, 15.889863058811862, 15.889863058811862, 15.609999999999999, 4.9000000000000004, 14.640000000000001, 14.640000000000001, 16.199999999999999, 12.130000000000001, 11.550000000000001, 16.280000000000001, 10.52, 17.16, 14.119999999999999, 14.34, 10.789999999999999, 10.93, 12.91, 11.59, 23.75, 15.77, 14.661949034419184, 6.04, 13.93, 7.4800000000000004, 4.8300000000000001, 8.7699999999999996, 15.029999999999999, 6.2000000000000002, 3.54, 5.0300000000000002, 4.2800000000000002, 11.109999999999999, 3.7799999999999998, 21.940000000000001, 8.1600000000000001, 8.183473777923588, 12.75, 6.9400000000000004, 4.9000000000000004, 5.7300000000000004, 6.4400000000000004, 4.0800000000000001, 8.0999999999999996, 6.9900000000000002, 5.0999999999999996, 4.7699999999999996, 7.3099999999999996, 3.4300000000000002, 2.5099999999999998, 3.79, 4.9759721814645337, 3.9399999999999999, 3.3999999999999999, 3.3599999999999999, 4.6900000000000004, 4.9759721814645337, 6.9400000000000004, 3.6899999999999999, 4.7400000000000002, 4.9759721814645337, 3.4100000000000001, 5.71, 3.3500000000000001, 4.9759721814645337, 4.9759721814645337, 4.9759721814645337, 5.6900000000000004, 4.9759721814645337, 4.9759721814645337, 5.75, 4.9759721814645337, 4.9759721814645337, 4.9759721814645337, 4.9759721814645337, 4.9759721814645337, 4.9759721814645337, 9.9100000000000001, 4.25, 3.6200000000000001, 4.3300000000000001, 2.3100000000000001, 4.8799999999999999, 4.7300000000000004, 3.0800000000000001, 2.73, 3.3399999999999999, 10.02, 3.27, 0.42999999999999999, 5.8399999999999999, 2.6600000000000001, 2.5499999999999998, 1.72, 1.03, 2.23, 2.3399999999999999, 4.21, 4.75, 2.3300000000000001, 4.8700000000000001, 2.3199999999999998, 2.8599999999999999, 2.3900000000000001, 6.3200000000000003, 3.8599999999999999, 3.1000000000000001, 3.7435601479880702, 4.6100000000000003, 3.0800000000000001, 3.0600000000000001, 2.7000000000000002, 2.79, 2.1200000000000001, 1.74, 3.2400000000000002, 2.71, 2.5099999999999998, 2.6099999999999999, 2.75, 3.1000000000000001, 2.7200000000000002, 4.2599999999999998, 2.8900000000000001, 1.8600000000000001, 3.2599999999999998, 2.52, 3.7999999999999998, 2.9700000000000002, 3.1699999999999999, 2.7637691543117757, 2.3599999999999999, 2.75, 3.2400000000000002, 2, 2.7799999999999998, 3.48, 3.3799999999999999, 3.27, 4.4199999999999999, 3.2000000000000002, 3.0499999999999998, 4.3399999999999999, 2.8599999999999999, 6.96, 2.6200000000000001, 3.3100000000000001, 3.5099999999999998, 2.7637691543117757, 4.2199999999999998, 5.9400000000000004, 2.7637691543117757, 3.8999999999999999, 6.4100000000000001, 2.7637691543117757, 6.4400000000000004, 5.8499999999999996, 10.220000000000001, 9.2300000000000004, 5.3600000000000003, 5.3600000000000003, 14.06, 6.4299999999999997, 5.5099999999999998, 4.0599999999999996, 5.4912726733419168, 4.7999999999999998, 5.4100000000000001, 3.9199999999999999, 3.04, 6.6500000000000004, 4.75, 3.6600000000000001, 6.9100000000000001, 13.300000000000001, 5.9900000000000002, 5.5599999999999996, 6.0800000000000001, 4.2000000000000002, 5.8300000000000001, 5.4912726733419168, 5.4912726733419168, 5.8700000000000001, 3.8999999999999999, 11.359999999999999, 5.4912726733419168, 7.5, 5.4912726733419168, 7.9400000000000004, 8.9800000000000004, 5.4912726733419168, 8.7799999999999994, 6.9699999999999998, 10.59, 12.369999999999999, 5.4912726733419168, 5.4912726733419168, 5.4912726733419168, 5.4912726733419168, 5.4912726733419168, 5.4912726733419168, 5.4912726733419168, 5.4912726733419168, 5.4912726733419168, 5.4912726733419168, 5.4912726733419168, 5.4912726733419168, 5.4912726733419168, 5.4912726733419168, 12.51, 13.35, 13.109999999999999, 13.110000000000001, 13.110000000000001, 13.110000000000001, 12.380000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [20.190000000000001, 16.73, 16.73, 16.73, 20.219999999999999, 14.91, 18.77, 10.82, 16.52, 18.02, 17.260000000000002, 14.84, 17.050000000000001, 13.960000000000001, 13.34, 14.779999999999999, 12.17, 17.43, 18.260000000000002, 17.440000000000001, 17.629999999999999, 15.73, 15.715634307729395, 14.09, 16.629999999999999, 16.629999999999999, 15.24, 16.129999999999999, 18.02, 17.829999999999998, 16.030000000000001, 10.76, 16, 15.999680315675585, 15.999680315675585, 15.999680315675585, 15.35, 4.9500000000000002, 14.66, 14.659999999999998, 16.379999999999999, 12.630000000000001, 11.58, 16.059999999999999, 10.9, 17.359999999999999, 14.18, 14.09, 10.789999999999999, 11.09, 12.99, 11.4, 24.43, 16.600000000000001, 14.728678573324244, 6.1500000000000004, 13.58, 7.2800000000000002, 4.7599999999999998, 9.0399999999999991, 14.82, 5.9699999999999998, 3.4399999999999999, 4.1900000000000004, 4.7999999999999998, 10.91, 3.8100000000000001, 22.579999999999998, 8.3000000000000007, 8.3233129192694406, 12.869999999999999, 6.9299999999999997, 4.9500000000000002, 5.7999999999999998, 6.4500000000000002, 4.1299999999999999, 8.3200000000000003, 6.9800000000000004, 5.1200000000000001, 4.8700000000000001, 7.4100000000000001, 3.5, 2.54, 3.8100000000000001, 5.027060001446797, 4.04, 3.4100000000000001, 3.3999999999999999, 4.6299999999999999, 5.027060001446797, 7.2000000000000002, 3.7200000000000002, 4.7699999999999996, 5.027060001446797, 3.3399999999999999, 5.7300000000000004, 3.3700000000000001, 5.027060001446797, 5.027060001446797, 5.027060001446797, 5.7800000000000002, 5.027060001446797, 5.027060001446797, 5.6399999999999997, 5.027060001446797, 5.027060001446797, 5.027060001446797, 5.027060001446797, 5.027060001446797, 5.027060001446797, 10.300000000000001, 4.3099999999999996, 3.6600000000000001, 4.46, 2.3199999999999998, 4.96, 4.8200000000000003, 3.0699999999999998, 2.7400000000000002, 3.3399999999999999, 9.9600000000000009, 3.3199999999999998, 0.27000000000000002, 5.9299999999999997, 2.71, 1.74, 2.5699999999999998, 0.95999999999999996, 2.1699999999999999, 2.2599999999999998, 4.1600000000000001, 4.7800000000000002, 2.3399999999999999, 4.9699999999999998, 2.3399999999999999, 2.8399999999999999, 2.3300000000000001, 6.4800000000000004, 3.8999999999999999, 3.2000000000000002, 3.7711701179262107, 4.7000000000000002, 3.0800000000000001, 3.0699999999999998, 2.7200000000000002, 2.8100000000000001, 2.1099999999999999, 1.6799999999999999, 3.2200000000000002, 2.7000000000000002, 2.6099999999999999, 2.5099999999999998, 2.7400000000000002, 3.0699999999999998, 2.71, 4.1500000000000004, 1.8100000000000001, 2.8999999999999999, 3.25, 2.5, 3.77, 3.0099999999999998, 3.1699999999999999, 2.7489591870344223, 2.3500000000000001, 2.75, 3.23, 2, 2.73, 3.5099999999999998, 3.4300000000000002, 3.3100000000000001, 4.3499999999999996, 3.1800000000000002, 2.98, 4.2699999999999996, 2.79, 7.1100000000000003, 2.6699999999999999, 3.3500000000000001, 3.5699999999999998, 2.7489591870344223, 4.2699999999999996, 6.0800000000000001, 2.7489591870344223, 3.8300000000000001, 6.4299999999999997, 2.7489591870344223, 6.5899999999999999, 5.96, 10.300000000000001, 9.4100000000000001, 5.54, 5.4699999999999998, 14.16, 6.6799999999999997, 5.6299999999999999, 4.0999999999999996, 5.5993056367274203, 4.79, 5.46, 3.9500000000000002, 3.0499999999999998, 6.7300000000000004, 4.8600000000000003, 3.73, 7.0800000000000001, 13.73, 6.1399999999999997, 5.6200000000000001, 6.2699999999999996, 4.2999999999999998, 5.8700000000000001, 5.5993056367274203, 5.5993056367274203, 5.9900000000000002, 3.9100000000000001, 11.449999999999999, 5.5993056367274203, 7.5899999999999999, 5.5993056367274203, 8.1099999999999994, 8.9800000000000004, 5.5993056367274203, 9.0299999999999994, 6.9800000000000004, 10.77, 12.640000000000001, 5.5993056367274203, 5.5993056367274203, 5.5993056367274203, 5.5993056367274203, 5.5993056367274203, 5.5993056367274203, 5.5993056367274203, 5.5993056367274203, 5.5993056367274203, 5.5993056367274203, 5.5993056367274203, 5.5993056367274203, 5.5993056367274203, 5.5993056367274203, 12.67, 13.57, 13.210000000000001, 13.210000000000001, 13.210000000000001, 13.210000000000001, 12.550000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [20.41, 16.850000000000001, 16.850000000000001, 16.850000000000001, 20.32, 15.58, 18.960000000000001, 11.039999999999999, 16.690000000000001, 18.289999999999999, 17.510000000000002, 15.15, 17.120000000000001, 13.960000000000001, 13.369999999999999, 15.140000000000001, 12.359999999999999, 17.710000000000001, 18.449999999999999, 17.43, 17.93, 16.120000000000001, 16.105639110347916, 14.48, 16.879999999999999, 16.879999999999999, 15.449999999999999, 16.359999999999999, 18.199999999999999, 17.899999999999999, 16.219999999999999, 11, 16.16, 16.159574562401751, 16.159574562401751, 16.159574562401751, 15.300000000000001, 5.0099999999999998, 14.779999999999999, 14.779999999999998, 16.59, 13.16, 11.81, 15.77, 11.27, 17.530000000000001, 14.199999999999999, 13.69, 10.69, 11.25, 13.02, 11.15, 17.16, 25.75, 14.738368164037565, 6.25, 13.140000000000001, 7.0300000000000002, 4.6699999999999999, 9.2799999999999994, 14.56, 5.75, 3.3300000000000001, 4.0700000000000003, 4.5, 10.619999999999999, 3.8100000000000001, 23.170000000000002, 8.4499999999999993, 8.4733670693304681, 13.050000000000001, 6.9699999999999998, 5.0099999999999998, 5.8700000000000001, 6.4699999999999998, 4.2000000000000002, 8.5600000000000005, 7.0199999999999996, 5.1399999999999997, 4.9900000000000002, 7.5199999999999996, 3.5699999999999998, 2.5699999999999998, 3.8399999999999999, 5.0842571593594332, 4.1100000000000003, 3.4199999999999999, 3.4300000000000002, 4.5599999999999996, 5.0842571593594332, 7.46, 3.7599999999999998, 4.7800000000000002, 5.0842571593594332, 3.27, 5.71, 3.3700000000000001, 5.0842571593594332, 5.0842571593594332, 5.0842571593594332, 5.9100000000000001, 5.0842571593594332, 5.0842571593594332, 5.5199999999999996, 5.0842571593594332, 5.0842571593594332, 5.0842571593594332, 5.0842571593594332, 5.0842571593594332, 5.0842571593594332, 10.67, 4.3799999999999999, 3.6899999999999999, 2.3399999999999999, 4.5999999999999996, 5.0499999999999998, 4.9100000000000001, 3.0699999999999998, 2.75, 3.3799999999999999, 9.9600000000000009, 3.3799999999999999, 0.17000000000000001, 6.0199999999999996, 2.7599999999999998, 1.77, 2.5699999999999998, 0.89000000000000001, 2.1200000000000001, 2.1899999999999999, 4.1399999999999997, 4.8099999999999996, 2.3599999999999999, 5.0599999999999996, 2.3599999999999999, 2.8199999999999998, 2.2799999999999998, 6.6399999999999997, 3.9300000000000002, 3.3700000000000001, 3.7995392590156531, 4.79, 3.0800000000000001, 3.0800000000000001, 2.7400000000000002, 2.8500000000000001, 2.0899999999999999, 1.6299999999999999, 3.1899999999999999, 2.6000000000000001, 2.6800000000000002, 2.5099999999999998, 2.73, 3.04, 2.71, 3.98, 1.78, 2.9199999999999999, 3.2400000000000002, 2.48, 3.73, 3.0600000000000001, 3.1800000000000002, 2.7341859671527571, 2.3399999999999999, 2.75, 3.2200000000000002, 2.0099999999999998, 2.6800000000000002, 3.5299999999999998, 3.48, 3.3599999999999999, 3.1600000000000001, 4.2800000000000002, 2.9199999999999999, 4.2000000000000002, 2.73, 7.3200000000000003, 3.3900000000000001, 2.73, 3.6299999999999999, 2.7341859671527571, 4.2800000000000002, 6.2199999999999998, 2.7341859671527571, 3.7599999999999998, 6.4699999999999998, 2.7341859671527571, 6.75, 6.0700000000000003, 10.41, 9.5999999999999996, 5.7199999999999998, 5.5800000000000001, 14.25, 6.9299999999999997, 5.7599999999999998, 4.1299999999999999, 5.712963630540612, 4.79, 5.5, 3.9900000000000002, 3.0800000000000001, 6.8200000000000003, 4.9699999999999998, 3.8199999999999998, 7.2599999999999998, 14.199999999999999, 6.2999999999999998, 5.71, 6.4900000000000002, 4.4100000000000001, 5.9199999999999999, 5.712963630540612, 5.712963630540612, 6.0999999999999996, 3.9500000000000002, 11.609999999999999, 5.712963630540612, 7.71, 5.712963630540612, 8.9900000000000002, 8.3000000000000007, 5.712963630540612, 9.3000000000000007, 7.0099999999999998, 10.960000000000001, 12.93, 5.712963630540612, 5.712963630540612, 5.712963630540612, 5.712963630540612, 5.712963630540612, 5.712963630540612, 5.712963630540612, 5.712963630540612, 5.712963630540612, 5.712963630540612, 5.712963630540612, 5.712963630540612, 5.712963630540612, 5.712963630540612, 12.859999999999999, 13.800000000000001, 13.35, 13.350000000000001, 13.350000000000001, 13.350000000000001, 12.73],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [20.449999999999999, 16.98, 16.98, 16.98, 20.41, 16.239999999999998, 19.25, 11.289999999999999, 16.949999999999999, 18.59, 17.640000000000001, 15.449999999999999, 17.199999999999999, 13.93, 13.41, 15.460000000000001, 12.529999999999999, 17.98, 18.600000000000001, 17.440000000000001, 18.27, 16.579999999999998, 16.564436965945596, 14.789999999999999, 17.260000000000002, 17.260000000000002, 15.65, 16.559999999999999, 18.440000000000001, 17.890000000000001, 16.260000000000002, 11.35, 16.34, 16.339651681028069, 16.339651681028069, 16.339651681028069, 15.640000000000001, 5.0700000000000003, 14.98, 14.979999999999999, 16.789999999999999, 13.609999999999999, 12.140000000000001, 15.449999999999999, 11.609999999999999, 17.690000000000001, 14.199999999999999, 13.4, 10.539999999999999, 11.390000000000001, 13, 10.83, 17.25, 27.370000000000001, 14.749938541532561, 6.3600000000000003, 12.789999999999999, 6.7999999999999998, 4.5800000000000001, 9.5399999999999991, 14.33, 5.5800000000000001, 3.21, 3.9700000000000002, 4.21, 10.390000000000001, 3.8100000000000001, 23.600000000000001, 8.6199999999999992, 8.643769298596812, 13.289999999999999, 7.0800000000000001, 5.0700000000000003, 5.9299999999999997, 6.4900000000000002, 4.2699999999999996, 8.8499999999999996, 7.2000000000000002, 5.1699999999999999, 5.1100000000000003, 7.6399999999999997, 3.6499999999999999, 2.5899999999999999, 3.8900000000000001, 5.1484892264439557, 4.2000000000000002, 3.4300000000000002, 3.4399999999999999, 4.4800000000000004, 5.1484892264439557, 7.6799999999999997, 3.7799999999999998, 4.7800000000000002, 5.1484892264439557, 3.3700000000000001, 3.2400000000000002, 5.7400000000000002, 5.1484892264439557, 5.1484892264439557, 5.1484892264439557, 6.0800000000000001, 5.1484892264439557, 5.1484892264439557, 5.4000000000000004, 5.1484892264439557, 5.1484892264439557, 5.1484892264439557, 5.1484892264439557, 5.1484892264439557, 5.1484892264439557, 11.050000000000001, 4.4500000000000002, 3.73, 2.3500000000000001, 4.7300000000000004, 5.1399999999999997, 5.0199999999999996, 3.0699999999999998, 2.7599999999999998, 3.3999999999999999, 10.01, 3.4300000000000002, 0.17999999999999999, 6.1200000000000001, 2.8199999999999998, 1.8, 2.5299999999999998, 0.85999999999999999, 2.1400000000000001, 2.1499999999999999, 4.1399999999999997, 4.8300000000000001, 2.3999999999999999, 5.1500000000000004, 2.3799999999999999, 2.79, 2.23, 6.7999999999999998, 3.96, 3.52, 3.829360886371707, 4.8899999999999997, 3.0800000000000001, 3.0899999999999999, 2.77, 2.8999999999999999, 2.1099999999999999, 1.5800000000000001, 3.1699999999999999, 2.6000000000000001, 2.6600000000000001, 2.5099999999999998, 2.7200000000000002, 3.02, 2.71, 3.8300000000000001, 1.75, 2.9399999999999999, 3.2400000000000002, 2.4700000000000002, 3.7000000000000002, 3.1099999999999999, 3.1800000000000002, 2.727723549721953, 2.3300000000000001, 2.7599999999999998, 3.21, 2.02, 2.6400000000000001, 3.5499999999999998, 3.54, 3.4199999999999999, 3.1600000000000001, 4.2199999999999998, 2.8700000000000001, 4.1399999999999997, 2.6800000000000002, 7.5599999999999996, 3.4100000000000001, 2.8100000000000001, 3.71, 2.727723549721953, 4.25, 6.1600000000000001, 2.727723549721953, 3.6800000000000002, 6.5199999999999996, 2.727723549721953, 6.9100000000000001, 6.1699999999999999, 10.51, 9.7899999999999991, 5.9199999999999999, 5.71, 14.34, 7.1500000000000004, 5.8799999999999999, 4.1699999999999999, 5.8219264466341345, 4.7999999999999998, 5.5599999999999996, 3.9900000000000002, 3.1200000000000001, 6.9100000000000001, 5.0700000000000003, 3.9100000000000001, 7.46, 14.710000000000001, 6.46, 5.8099999999999996, 6.7400000000000002, 4.54, 5.9800000000000004, 5.8219264466341345, 5.8219264466341345, 6.1900000000000004, 3.98, 11.77, 5.8219264466341345, 7.8099999999999996, 5.8219264466341345, 9.0099999999999998, 8.4900000000000002, 5.8219264466341345, 9.6099999999999994, 7.0999999999999996, 11.18, 13.31, 5.8219264466341345, 5.8219264466341345, 5.8219264466341345, 5.8219264466341345, 5.8219264466341345, 5.8219264466341345, 5.8219264466341345, 5.8219264466341345, 5.8219264466341345, 5.8219264466341345, 5.8219264466341345, 5.8219264466341345, 5.8219264466341345, 5.8219264466341345, 13.029999999999999, 14.06, 13.57, 13.57, 13.57, 13.57, 12.949999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [20.399999999999999, 17.27, 17.27, 17.27, 20.629999999999999, 16.890000000000001, 19.609999999999999, 11.539999999999999, 17.210000000000001, 18.920000000000002, 17.710000000000001, 15.9, 17.370000000000001, 13.890000000000001, 13.609999999999999, 15.9, 12.710000000000001, 18.239999999999998, 18.789999999999999, 17.57, 18.600000000000001, 17.09, 17.072463023091711, 15.06, 17.82, 17.82, 15.82, 16.760000000000002, 18.789999999999999, 17.989999999999998, 16.359999999999999, 11.74, 16.600000000000001, 16.599734876356585, 16.599734876356585, 16.599734876356585, 16.07, 5.1399999999999997, 15.25, 15.25, 17.010000000000002, 14.09, 12.449999999999999, 15.24, 11.960000000000001, 17.899999999999999, 13.33, 14.24, 10.43, 11.550000000000001, 13.029999999999999, 10.81, 28.960000000000001, 17.280000000000001, 14.832900939244968, 6.4800000000000004, 12.699999999999999, 6.6699999999999999, 4.4900000000000002, 9.8000000000000007, 14.220000000000001, 5.4400000000000004, 3.1099999999999999, 3.9100000000000001, 4.0099999999999998, 10.289999999999999, 3.7999999999999998, 23.98, 8.8200000000000003, 8.8442633183509596, 13.58, 7.29, 5.1399999999999997, 5.9900000000000002, 6.5199999999999996, 4.3300000000000001, 9.1799999999999997, 7.5199999999999996, 5.2199999999999998, 5.2300000000000004, 7.7800000000000002, 3.73, 2.6200000000000001, 3.9399999999999999, 5.2245734611128496, 4.3099999999999996, 3.4399999999999999, 3.4900000000000002, 4.3899999999999997, 5.2245734611128496, 7.8799999999999999, 3.77, 4.7699999999999996, 5.2245734611128496, 3.3599999999999999, 3.2999999999999998, 5.8300000000000001, 5.2245734611128496, 5.2245734611128496, 5.2245734611128496, 6.29, 5.2245734611128496, 5.2245734611128496, 5.2999999999999998, 5.2245734611128496, 5.2245734611128496, 5.2245734611128496, 5.2245734611128496, 5.2245734611128496, 5.2245734611128496, 11.4, 4.5199999999999996, 3.77, 2.3700000000000001, 4.8600000000000003, 5.2400000000000002, 5.1399999999999997, 3.0600000000000001, 2.77, 3.4500000000000002, 10.130000000000001, 3.48, 0.25, 6.2300000000000004, 2.8700000000000001, 1.8500000000000001, 2.4900000000000002, 0.90000000000000002, 2.2000000000000002, 2.1600000000000001, 4.1699999999999999, 4.8600000000000003, 2.46, 5.2599999999999998, 2.3999999999999999, 2.75, 2.1899999999999999, 6.9299999999999997, 4.25, 3.6600000000000001, 3.8768608066636276, 4.9900000000000002, 3.0800000000000001, 3.1000000000000001, 2.8100000000000001, 2.9399999999999999, 2.1699999999999999, 1.55, 3.1400000000000001, 2.5899999999999999, 2.6299999999999999, 2.4900000000000002, 2.71, 2.9900000000000002, 2.71, 3.71, 1.73, 2.9700000000000002, 3.23, 2.4500000000000002, 3.6600000000000001, 3.1699999999999999, 2.7232398939446449, 3.1800000000000002, 2.3100000000000001, 2.7799999999999998, 3.21, 2.6000000000000001, 2.0299999999999998, 3.54, 3.6000000000000001, 3.4700000000000002, 3.1499999999999999, 4.1799999999999997, 2.8300000000000001, 4.0800000000000001, 2.6499999999999999, 7.8200000000000003, 3.3599999999999999, 2.8900000000000001, 3.7799999999999998, 2.7232398939446449, 4.21, 5.9400000000000004, 2.7232398939446449, 3.6099999999999999, 6.5800000000000001, 2.7232398939446449, 7.0700000000000003, 6.29, 10.619999999999999, 9.9900000000000002, 6.1299999999999999, 5.8499999999999996, 14.42, 7.3399999999999999, 6.0099999999999998, 4.2000000000000002, 5.9267316229477007, 4.8200000000000003, 5.6200000000000001, 4, 3.1699999999999999, 7, 3.9900000000000002, 5.1600000000000001, 7.6799999999999997, 6.6200000000000001, 15.279999999999999, 5.9299999999999997, 7.0199999999999996, 4.6799999999999997, 6.04, 5.9267316229477007, 5.9267316229477007, 6.3099999999999996, 4.0099999999999998, 11.92, 5.9267316229477007, 7.8799999999999999, 5.9267316229477007, 9.0299999999999994, 8.6899999999999995, 5.9267316229477007, 9.9800000000000004, 7.25, 11.140000000000001, 13.84, 5.9267316229477007, 5.9267316229477007, 5.9267316229477007, 5.9267316229477007, 5.9267316229477007, 5.9267316229477007, 5.9267316229477007, 5.9267316229477007, 5.9267316229477007, 5.9267316229477007, 5.9267316229477007, 5.9267316229477007, 5.9267316229477007, 5.9267316229477007, 13.27, 14.4, 13.84, 13.84, 13.84, 13.84, 13.26],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [20.460000000000001, 17.710000000000001, 17.710000000000001, 17.710000000000001, 20.98, 17.460000000000001, 19.949999999999999, 11.800000000000001, 17.489999999999998, 19.27, 17.93, 16.510000000000002, 17.600000000000001, 13.9, 14.02, 16.5, 12.99, 18.469999999999999, 19.030000000000001, 17.859999999999999, 18.899999999999999, 17.609999999999999, 17.591505125213146, 15.449999999999999, 18.449999999999999, 18.449999999999999, 15.970000000000001, 17.039999999999999, 19.190000000000001, 18.260000000000002, 16.670000000000002, 12.15, 16.949999999999999, 16.94969344104689, 16.94969344104689, 16.94969344104689, 16.34, 5.2199999999999998, 15.529999999999999, 15.529999999999999, 17.260000000000002, 14.630000000000001, 12.77, 15.220000000000001, 12.32, 18.149999999999999, 13.43, 14.369999999999999, 10.390000000000001, 11.75, 13.19, 11.18, 30.489999999999998, 17.460000000000001, 14.997990318880936, 6.6100000000000003, 12.83, 6.6500000000000004, 4.4100000000000001, 10.06, 14.279999999999999, 5.3700000000000001, 3.0299999999999998, 3.8799999999999999, 3.8900000000000001, 10.31, 3.79, 24.649999999999999, 9.0500000000000007, 9.0750806743186772, 13.94, 7.6299999999999999, 5.2199999999999998, 6.04, 6.5599999999999996, 4.3899999999999997, 9.5600000000000005, 7.8700000000000001, 5.2699999999999996, 5.3700000000000001, 8, 3.8199999999999998, 2.6499999999999999, 3.9900000000000002, 5.3199202144556512, 4.4299999999999997, 3.4399999999999999, 3.6000000000000001, 4.3099999999999996, 5.3199202144556512, 8.0800000000000001, 3.7599999999999998, 4.75, 5.3199202144556512, 3.3399999999999999, 3.4500000000000002, 5.9100000000000001, 5.3199202144556512, 5.3199202144556512, 5.3199202144556512, 5.3199202144556512, 6.54, 5.3199202144556512, 5.2800000000000002, 5.3199202144556512, 5.3199202144556512, 5.3199202144556512, 5.3199202144556512, 5.3199202144556512, 5.3199202144556512, 11.74, 4.5999999999999996, 3.7999999999999998, 2.3900000000000001, 5.0199999999999996, 5.3399999999999999, 5.29, 3.0600000000000001, 2.79, 3.5299999999999998, 10.35, 3.54, 0.33000000000000002, 6.3499999999999996, 2.9300000000000002, 2.48, 1.9199999999999999, 0.98999999999999999, 2.23, 2.1699999999999999, 4.2300000000000004, 4.9000000000000004, 2.5299999999999998, 5.3899999999999997, 2.4100000000000001, 2.7200000000000002, 2.1400000000000001, 7.0599999999999996, 4.5599999999999996, 3.77, 3.9301104732821854, 5.1100000000000003, 3.0699999999999998, 3.1000000000000001, 2.8500000000000001, 2.9900000000000002, 2.25, 1.53, 3.1200000000000001, 2.5800000000000001, 2.6099999999999999, 2.46, 2.7200000000000002, 2.9700000000000002, 2.7000000000000002, 3.5899999999999999, 1.71, 2.9900000000000002, 3.2200000000000002, 2.4500000000000002, 3.6200000000000001, 3.1499999999999999, 2.7231958180491684, 3.1800000000000002, 2.29, 2.7999999999999998, 3.21, 2.5800000000000001, 2.0499999999999998, 3.5299999999999998, 3.6699999999999999, 3.5299999999999998, 3.1499999999999999, 2.79, 4.1500000000000004, 4.0300000000000002, 2.6200000000000001, 3.25, 8.0999999999999996, 2.98, 3.8700000000000001, 2.7231958180491684, 4.1600000000000001, 5.7300000000000004, 2.7231958180491684, 3.5499999999999998, 6.6299999999999999, 2.7231958180491684, 7.2400000000000002, 6.4400000000000004, 10.75, 10.220000000000001, 6.3499999999999996, 5.9900000000000002, 14.52, 7.5199999999999996, 6.1399999999999997, 4.2400000000000002, 6.0365117307856968, 4.8399999999999999, 5.71, 4.0300000000000002, 3.23, 7.0800000000000001, 4.0800000000000001, 5.25, 7.9299999999999997, 6.79, 15.9, 6.04, 7.3300000000000001, 4.8399999999999999, 6.0899999999999999, 6.0365117307856968, 6.0365117307856968, 6.4699999999999998, 4.0599999999999996, 12.130000000000001, 6.0365117307856968, 7.9699999999999998, 6.0365117307856968, 9.0500000000000007, 8.9000000000000004, 6.0365117307856968, 10.4, 7.4100000000000001, 10.82, 14.41, 6.0365117307856968, 6.0365117307856968, 6.0365117307856968, 6.0365117307856968, 6.0365117307856968, 6.0365117307856968, 6.0365117307856968, 6.0365117307856968, 6.0365117307856968, 6.0365117307856968, 6.0365117307856968, 6.0365117307856968, 6.0365117307856968, 6.0365117307856968, 13.58, 14.800000000000001, 14.130000000000001, 14.130000000000001, 14.130000000000001, 14.130000000000001, 13.66],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [20.57, 18.170000000000002, 18.170000000000002, 18.170000000000002, 21.32, 17.93, 20.239999999999998, 12.09, 17.879999999999999, 19.670000000000002, 18.18, 17.030000000000001, 17.800000000000001, 13.98, 14.5, 17.09, 13.359999999999999, 18.710000000000001, 19.32, 18.199999999999999, 19.170000000000002, 18.050000000000001, 18.032024393370651, 15.94, 19.07, 19.07, 16.149999999999999, 17.359999999999999, 19.620000000000001, 18.59, 17.039999999999999, 12.56, 17.300000000000001, 17.299712097970282, 17.299712097970282, 17.299712097970282, 16.73, 5.3200000000000003, 15.779999999999999, 15.780000000000001, 17.489999999999998, 15.16, 13.07, 15.26, 12.69, 18.460000000000001, 13.66, 14.609999999999999, 10.52, 12.039999999999999, 13.41, 11.630000000000001, 31.899999999999999, 17.710000000000001, 15.258114128668135, 6.7599999999999998, 13.01, 6.7199999999999998, 4.3399999999999999, 10.279999999999999, 14.48, 5.3600000000000003, 2.9900000000000002, 3.8999999999999999, 3.8399999999999999, 10.380000000000001, 3.79, 25.579999999999998, 9.3200000000000003, 9.3458945677160248, 14.369999999999999, 8.0500000000000007, 5.3200000000000003, 6.0800000000000001, 6.6299999999999999, 4.4699999999999998, 9.9900000000000002, 8.1999999999999993, 5.3300000000000001, 5.5199999999999996, 8.3000000000000007, 3.9300000000000002, 2.6800000000000002, 4.0599999999999996, 5.4214169016466967, 4.5599999999999996, 3.4399999999999999, 3.7400000000000002, 4.2300000000000004, 8.3000000000000007, 5.4214169016466967, 3.7599999999999998, 4.7300000000000004, 5.4214169016466967, 3.3300000000000001, 3.6400000000000001, 5.96, 5.4214169016466967, 5.4214169016466967, 5.4214169016466967, 5.4214169016466967, 6.8300000000000001, 5.4214169016466967, 5.3399999999999999, 5.4214169016466967, 5.4214169016466967, 5.4214169016466967, 5.4214169016466967, 5.4214169016466967, 5.4214169016466967, 12.119999999999999, 4.6600000000000001, 3.8399999999999999, 2.3999999999999999, 5.1900000000000004, 5.4400000000000004, 5.4400000000000004, 3.0600000000000001, 2.7999999999999998, 3.7200000000000002, 10.550000000000001, 3.4300000000000002, 0.42999999999999999, 6.5, 2.98, 2.48, 2.02, 1.04, 2.3799999999999999, 2.21, 4.29, 4.9699999999999998, 2.6099999999999999, 5.5199999999999996, 2.4100000000000001, 2.7000000000000002, 2.1000000000000001, 7.2000000000000002, 4.5599999999999996, 3.7599999999999998, 3.9791308079380667, 5.2300000000000004, 3.0600000000000001, 3.1000000000000001, 2.8900000000000001, 3.0299999999999998, 2.3300000000000001, 1.52, 3.1099999999999999, 2.5699999999999998, 2.5899999999999999, 2.73, 2.4199999999999999, 2.9399999999999999, 2.6800000000000002, 3.48, 1.6899999999999999, 2.9900000000000002, 3.2000000000000002, 2.4500000000000002, 3.5800000000000001, 2.7199007494419774, 3.0699999999999998, 3.1600000000000001, 2.2799999999999998, 2.8300000000000001, 3.2000000000000002, 2.5600000000000001, 2.0699999999999998, 3.52, 3.73, 3.5800000000000001, 3.1400000000000001, 2.73, 4.1399999999999997, 3.98, 2.6099999999999999, 3.1600000000000001, 8.4299999999999997, 3.0800000000000001, 3.96, 2.7199007494419774, 4.1299999999999999, 5.5599999999999996, 2.7199007494419774, 3.5299999999999998, 6.6900000000000004, 2.7199007494419774, 7.4299999999999997, 6.6100000000000003, 10.880000000000001, 10.470000000000001, 6.5899999999999999, 6.1299999999999999, 14.6, 7.6799999999999997, 6.29, 4.2999999999999998, 6.1502212388172071, 4.8600000000000003, 4.0499999999999998, 5.8200000000000003, 3.3100000000000001, 7.1500000000000004, 4.1799999999999997, 5.3499999999999996, 8.1899999999999995, 6.96, 16.550000000000001, 6.1500000000000004, 7.6699999999999999, 4.9800000000000004, 6.1299999999999999, 6.1502212388172071, 6.1502212388172071, 6.6500000000000004, 4.1200000000000001, 12.4, 6.1502212388172071, 8.0600000000000005, 6.1502212388172071, 9.0800000000000001, 9.1099999999999994, 6.1502212388172071, 10.859999999999999, 7.5899999999999999, 10.710000000000001, 14.98, 6.1502212388172071, 6.1502212388172071, 6.1502212388172071, 6.1502212388172071, 6.1502212388172071, 6.1502212388172071, 6.1502212388172071, 6.1502212388172071, 6.1502212388172071, 6.1502212388172071, 6.1502212388172071, 6.1502212388172071, 6.1502212388172071, 6.1502212388172071, 13.890000000000001, 15.210000000000001, 14.4, 14.4, 14.4, 14.4, 14.07],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [20.739999999999998, 18.649999999999999, 18.649999999999999, 18.649999999999999, 21.690000000000001, 18.289999999999999, 20.52, 12.4, 18.289999999999999, 20.129999999999999, 18.370000000000001, 17.489999999999998, 18.02, 14.09, 15.01, 17.609999999999999, 13.77, 18.989999999999998, 19.649999999999999, 18.559999999999999, 19.41, 18.420000000000002, 18.40383436962998, 16.52, 19.66, 19.66, 16.449999999999999, 17.73, 20.079999999999998, 18.98, 17.449999999999999, 12.869999999999999, 17.579999999999998, 17.579842623771462, 17.579842623771462, 17.579842623771462, 17.27, 5.46, 16.030000000000001, 16.030000000000001, 17.68, 15.69, 13.369999999999999, 15.460000000000001, 13.1, 18.850000000000001, 13.85, 14.92, 10.9, 12.390000000000001, 13.699999999999999, 12.1, 33.200000000000003, 17.98, 15.591904606284672, 6.9199999999999999, 13.289999999999999, 6.8399999999999999, 4.2999999999999998, 10.460000000000001, 5.4000000000000004, 14.73, 2.9700000000000002, 3.9500000000000002, 3.8199999999999998, 10.48, 3.7999999999999998, 26.530000000000001, 9.6300000000000008, 9.6570480025095122, 14.890000000000001, 8.4900000000000002, 5.46, 6.1299999999999999, 6.79, 4.5499999999999998, 10.460000000000001, 8.5099999999999998, 5.4299999999999997, 5.6900000000000004, 8.6300000000000008, 4.0599999999999996, 2.7200000000000002, 4.1299999999999999, 5.5656649729988823, 4.6900000000000004, 3.4399999999999999, 3.8999999999999999, 4.1900000000000004, 8.5500000000000007, 5.5656649729988823, 3.75, 4.7199999999999998, 5.5656649729988823, 3.3500000000000001, 3.8599999999999999, 5.9800000000000004, 5.5656649729988823, 5.5656649729988823, 5.5656649729988823, 5.5656649729988823, 7.1100000000000003, 5.5656649729988823, 5.4199999999999999, 5.5656649729988823, 5.5656649729988823, 5.5656649729988823, 5.5656649729988823, 5.5656649729988823, 5.5656649729988823, 12.539999999999999, 4.7199999999999998, 3.8700000000000001, 2.4100000000000001, 5.3600000000000003, 5.5499999999999998, 5.5999999999999996, 3.0800000000000001, 2.7999999999999998, 3.9500000000000002, 3.1899999999999999, 10.73, 0.54000000000000004, 6.6699999999999999, 3.04, 2.5099999999999998, 2.1600000000000001, 1, 2.6400000000000001, 2.2599999999999998, 4.3300000000000001, 5.0599999999999996, 2.7000000000000002, 5.6799999999999997, 2.3799999999999999, 2.6699999999999999, 2.0600000000000001, 7.3399999999999999, 4.5800000000000001, 3.6400000000000001, 4.0320005005506321, 5.3499999999999996, 3.04, 3.0899999999999999, 2.9300000000000002, 3.0600000000000001, 2.4300000000000002, 1.53, 3.1200000000000001, 2.5600000000000001, 2.5800000000000001, 2.7799999999999998, 2.3999999999999999, 2.8900000000000001, 2.6400000000000001, 3.3700000000000001, 1.6799999999999999, 3.0299999999999998, 3.1600000000000001, 2.46, 3.5099999999999998, 3.0099999999999998, 2.7230202104902612, 3.1200000000000001, 2.27, 2.8500000000000001, 3.1699999999999999, 2.5499999999999998, 2.1099999999999999, 3.48, 3.7999999999999998, 3.6400000000000001, 3.1600000000000001, 2.6600000000000001, 4.1699999999999999, 3.9399999999999999, 2.6099999999999999, 3.1000000000000001, 8.8399999999999999, 3.1899999999999999, 4.0599999999999996, 2.7230202104902612, 4.1200000000000001, 5.4199999999999999, 2.7230202104902612, 3.52, 6.7599999999999998, 2.7230202104902612, 7.6600000000000001, 6.79, 11, 10.75, 6.8499999999999996, 6.29, 14.67, 7.8200000000000003, 6.4699999999999998, 4.3600000000000003, 6.2655257485919797, 4.8700000000000001, 4.0700000000000003, 5.9500000000000002, 3.4100000000000001, 7.2400000000000002, 5.46, 4.29, 8.4499999999999993, 7.1299999999999999, 17.239999999999998, 6.21, 8.0500000000000007, 5.1299999999999999, 6.1799999999999997, 6.2655257485919797, 6.2655257485919797, 6.8300000000000001, 4.1900000000000004, 12.699999999999999, 6.2655257485919797, 8.1400000000000006, 6.2655257485919797, 9.1300000000000008, 6.2655257485919797, 9.3100000000000005, 11.33, 7.7999999999999998, 10.08, 15.49, 6.2655257485919797, 6.2655257485919797, 6.2655257485919797, 6.2655257485919797, 6.2655257485919797, 6.2655257485919797, 6.2655257485919797, 6.2655257485919797, 6.2655257485919797, 6.2655257485919797, 6.2655257485919797, 6.2655257485919797, 6.2655257485919797, 6.2655257485919797, 14.140000000000001, 15.619999999999999, 14.66, 14.66, 14.66, 14.66, 14.359999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [20.949999999999999, 19.109999999999999, 19.109999999999999, 19.109999999999999, 22.010000000000002, 18.559999999999999, 20.800000000000001, 12.699999999999999, 18.59, 20.550000000000001, 18.440000000000001, 17.890000000000001, 18.210000000000001, 14.17, 15.539999999999999, 18.09, 14.220000000000001, 19.27, 19.949999999999999, 18.890000000000001, 19.59, 18.75, 18.735071350767846, 17, 20.210000000000001, 20.210000000000001, 16.829999999999998, 18.100000000000001, 20.510000000000002, 19.390000000000001, 17.890000000000001, 13.119999999999999, 17.800000000000001, 17.800000000000001, 17.800000000000001, 17.800000000000001, 17.800000000000001, 5.6399999999999997, 16.280000000000001, 16.280000000000001, 17.859999999999999, 16.18, 13.69, 15.74, 13.529999999999999, 19.27, 13.949999999999999, 15.27, 11.359999999999999, 12.720000000000001, 14.08, 12.59, 34.390000000000001, 18.289999999999999, 15.940994840587988, 7.0899999999999999, 13.619999999999999, 6.9900000000000002, 4.3300000000000001, 10.67, 5.4900000000000002, 14.99, 2.9700000000000002, 4.0199999999999996, 3.8500000000000001, 3.8399999999999999, 10.66, 27.329999999999998, 10.02, 10.048295565005244, 15.5, 8.9499999999999993, 5.6399999999999997, 6.1900000000000004, 7.0199999999999996, 4.6399999999999997, 10.960000000000001, 8.9199999999999999, 5.5800000000000001, 5.8799999999999999, 8.9900000000000002, 4.21, 2.7599999999999998, 4.1500000000000004, 5.7371480840687035, 4.7800000000000002, 3.4500000000000002, 4.1799999999999997, 4.0899999999999999, 8.8300000000000001, 5.7371480840687035, 3.75, 4.7199999999999998, 5.7371480840687035, 3.3799999999999999, 4.1100000000000003, 5.9900000000000002, 5.7371480840687035, 5.7371480840687035, 5.7371480840687035, 7.3700000000000001, 5.7371480840687035, 5.7371480840687035, 5.4800000000000004, 5.7371480840687035, 5.7371480840687035, 5.7371480840687035, 5.7371480840687035, 5.7371480840687035, 5.7371480840687035, 12.960000000000001, 4.8099999999999996, 3.9100000000000001, 2.4100000000000001, 5.5, 5.6799999999999997, 5.79, 3.0899999999999999, 2.79, 4.1299999999999999, 3.1200000000000001, 0.67000000000000004, 10.91, 7.0300000000000002, 3.1000000000000001, 2.5299999999999998, 2.3500000000000001, 0.97999999999999998, 2.77, 2.3199999999999998, 4.3600000000000003, 2.79, 5.1900000000000004, 5.8700000000000001, 2.3799999999999999, 2.6400000000000001, 2.0299999999999998, 7.5, 4.6500000000000004, 3.54, 4.1043305862212369, 5.4299999999999997, 3.0299999999999998, 3.0699999999999998, 2.96, 3.0699999999999998, 2.5, 1.55, 3.1400000000000001, 2.5499999999999998, 2.5800000000000001, 2.8599999999999999, 2.3799999999999999, 2.8500000000000001, 2.6000000000000001, 3.2599999999999998, 1.6699999999999999, 3.1499999999999999, 3.1000000000000001, 2.4900000000000002, 3.46, 2.98, 3.0899999999999999, 2.7301363976268131, 2.2799999999999998, 2.8799999999999999, 3.1499999999999999, 2.5499999999999998, 3.4500000000000002, 2.1699999999999999, 3.8500000000000001, 3.7000000000000002, 2.6000000000000001, 3.2000000000000002, 4.1799999999999997, 3.9199999999999999, 2.6299999999999999, 3.0699999999999998, 9.3100000000000005, 3.3199999999999998, 4.1500000000000004, 2.7301363976268131, 4.1299999999999999, 5.2999999999999998, 2.7301363976268131, 3.54, 6.8499999999999996, 2.7301363976268131, 7.9100000000000001, 6.9800000000000004, 11.109999999999999, 11.039999999999999, 7.1299999999999999, 6.4500000000000002, 14.74, 7.9100000000000001, 6.6600000000000001, 4.4199999999999999, 6.3779879827182944, 4.8799999999999999, 4.1200000000000001, 6.0800000000000001, 3.52, 7.3499999999999996, 5.5700000000000003, 4.4100000000000001, 8.7100000000000009, 7.3200000000000003, 18, 6.2800000000000002, 8.4499999999999993, 5.2800000000000002, 6.2599999999999998, 6.3779879827182944, 7.0300000000000002, 6.3779879827182944, 4.2699999999999996, 13.029999999999999, 6.3779879827182944, 8.2300000000000004, 6.3779879827182944, 9.1899999999999995, 11.85, 6.3779879827182944, 9.5299999999999994, 8.0600000000000005, 9.5099999999999998, 15.98, 6.3779879827182944, 6.3779879827182944, 6.3779879827182944, 6.3779879827182944, 6.3779879827182944, 6.3779879827182944, 6.3779879827182944, 6.3779879827182944, 6.3779879827182944, 6.3779879827182944, 6.3779879827182944, 6.3779879827182944, 6.3779879827182944, 6.3779879827182944, 14.33, 16.010000000000002, 14.92, 14.92, 14.92, 14.92, 14.550000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [21.140000000000001, 19.530000000000001, 19.530000000000001, 19.530000000000001, 22.280000000000001, 18.699999999999999, 21.100000000000001, 13, 18.82, 20.960000000000001, 18.489999999999998, 18.25, 18.390000000000001, 14.220000000000001, 16.109999999999999, 18.559999999999999, 14.73, 19.5, 20.219999999999999, 19.190000000000001, 19.710000000000001, 19.039999999999999, 19.025188558183039, 17.309999999999999, 20.68, 20.68, 17.190000000000001, 18.469999999999999, 20.879999999999999, 19.780000000000001, 18.329999999999998, 13.380000000000001, 17.969999999999999, 17.970174326700338, 17.970174326700338, 17.970174326700338, 18.309999999999999, 5.8399999999999999, 16.52, 16.52, 18.010000000000002, 16.690000000000001, 13.93, 16.030000000000001, 13.970000000000001, 19.59, 14.06, 15.67, 11.81, 13.050000000000001, 14.43, 12.93, 35.039999999999999, 18.550000000000001, 16.258938012784114, 7.2400000000000002, 13.9, 7.1500000000000004, 4.4199999999999999, 10.76, 5.6200000000000001, 15.23, 2.9900000000000002, 4.1200000000000001, 3.8999999999999999, 3.8799999999999999, 10.92, 27.949999999999999, 10.460000000000001, 10.489211778568686, 16.109999999999999, 9.4199999999999999, 5.8399999999999999, 6.25, 7.2300000000000004, 4.7199999999999998, 11.49, 9.5600000000000005, 5.7300000000000004, 6.0700000000000003, 9.3399999999999999, 4.3799999999999999, 2.8100000000000001, 4.1200000000000001, 5.908461512461173, 4.8700000000000001, 3.4500000000000002, 4.1799999999999997, 4.3099999999999996, 9.1300000000000008, 5.908461512461173, 3.73, 4.75, 5.908461512461173, 3.4399999999999999, 4.3700000000000001, 6.0099999999999998, 5.908461512461173, 5.908461512461173, 5.908461512461173, 7.6900000000000004, 5.908461512461173, 5.908461512461173, 5.908461512461173, 5.4699999999999998, 5.908461512461173, 5.908461512461173, 5.908461512461173, 5.908461512461173, 5.908461512461173, 13.359999999999999, 4.9299999999999997, 3.9399999999999999, 2.3999999999999999, 5.6299999999999999, 5.8099999999999996, 6, 3.1299999999999999, 2.77, 4.2599999999999998, 3.1899999999999999, 0.82999999999999996, 11.1, 7.5700000000000003, 2.5299999999999998, 3.1699999999999999, 2.5600000000000001, 1.04, 2.7799999999999998, 2.3300000000000001, 4.4000000000000004, 2.8999999999999999, 5.3399999999999999, 6.0899999999999999, 2.3900000000000001, 2.6200000000000001, 2.0299999999999998, 7.6799999999999997, 4.7199999999999998, 3.4700000000000002, 4.1956232479839919, 5.5700000000000003, 3.02, 3.0499999999999998, 3, 3.0800000000000001, 2.5600000000000001, 1.5800000000000001, 3.1600000000000001, 2.5499999999999998, 2.5699999999999998, 2.9399999999999999, 2.3799999999999999, 2.8199999999999998, 2.5800000000000001, 3.1499999999999999, 1.6699999999999999, 3.1499999999999999, 3.1699999999999999, 2.52, 3.4399999999999999, 2.9700000000000002, 3.0899999999999999, 2.3199999999999998, 2.7428043152689585, 2.9199999999999999, 3.1400000000000001, 2.5600000000000001, 3.4300000000000002, 2.2400000000000002, 3.8700000000000001, 3.77, 2.5499999999999998, 3.2599999999999998, 4.1600000000000001, 3.8999999999999999, 2.6499999999999999, 3.0699999999999998, 9.8200000000000003, 3.4500000000000002, 4.2199999999999998, 2.7428043152689585, 4.1500000000000004, 5.2300000000000004, 2.7428043152689585, 3.5699999999999998, 6.9500000000000002, 2.7428043152689585, 8.1600000000000001, 7.2000000000000002, 11.220000000000001, 11.34, 7.4100000000000001, 6.6200000000000001, 14.82, 7.9500000000000002, 6.8499999999999996, 4.4900000000000002, 6.4877780800995275, 4.8899999999999997, 4.1699999999999999, 6.2300000000000004, 3.6400000000000001, 5.6799999999999997, 4.54, 7.5, 8.9800000000000004, 7.5099999999999998, 18.800000000000001, 6.4000000000000004, 8.8800000000000008, 5.4400000000000004, 6.4000000000000004, 6.4877780800995275, 7.2300000000000004, 6.4877780800995275, 4.3600000000000003, 13.369999999999999, 6.4877780800995275, 8.3200000000000003, 6.4877780800995275, 9.2599999999999998, 12.4, 6.4877780800995275, 9.7699999999999996, 8.4000000000000004, 9.5199999999999996, 16.530000000000001, 6.4877780800995275, 6.4877780800995275, 6.4877780800995275, 6.4877780800995275, 6.4877780800995275, 6.4877780800995275, 6.4877780800995275, 6.4877780800995275, 6.4877780800995275, 6.4877780800995275, 6.4877780800995275, 6.4877780800995275, 6.4877780800995275, 6.4877780800995275, 14.67, 16.399999999999999, 15.18, 15.18, 15.18, 15.18, 14.710000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [21.309999999999999, 19.93, 19.93, 19.93, 22.52, 18.760000000000002, 21.370000000000001, 13.289999999999999, 19.07, 21.370000000000001, 18.600000000000001, 18.609999999999999, 18.579999999999998, 14.279999999999999, 16.690000000000001, 19.02, 15.27, 19.73, 20.5, 19.469999999999999, 19.789999999999999, 19.300000000000001, 19.284639471780835, 17.52, 21.140000000000001, 21.140000000000001, 17.559999999999999, 18.809999999999999, 21.210000000000001, 20.190000000000001, 18.760000000000002, 13.66, 18.140000000000001, 18.14032124228876, 18.14032124228876, 18.14032124228876, 18.760000000000002, 6.04, 16.780000000000001, 16.780000000000001, 18.18, 17.149999999999999, 14.029999999999999, 16.34, 14.4, 19.890000000000001, 14.18, 16.140000000000001, 12.23, 13.41, 14.779999999999999, 13.18, 35.189999999999998, 18.809999999999999, 16.58529311949183, 7.3600000000000003, 14.220000000000001, 7.3099999999999996, 4.5199999999999996, 10.699999999999999, 5.7800000000000002, 15.5, 3.04, 4.25, 3.96, 3.9300000000000002, 11.25, 28.460000000000001, 10.949999999999999, 10.979749263774156, 16.690000000000001, 9.9299999999999997, 6.04, 6.3499999999999996, 7.4699999999999998, 4.8200000000000003, 12.029999999999999, 10.380000000000001, 5.8899999999999997, 6.29, 9.6999999999999993, 4.5700000000000003, 2.8500000000000001, 4.1299999999999999, 6.0955892920910273, 4.9900000000000002, 3.4500000000000002, 4.1900000000000004, 4.5599999999999996, 9.4199999999999999, 6.0955892920910273, 3.71, 4.79, 6.0955892920910273, 3.5, 4.6299999999999999, 6.04, 6.0955892920910273, 6.0955892920910273, 6.0955892920910273, 8.0399999999999991, 6.0955892920910273, 6.0955892920910273, 6.0955892920910273, 5.5199999999999996, 6.0955892920910273, 6.0955892920910273, 6.0955892920910273, 6.0955892920910273, 6.0955892920910273, 13.869999999999999, 5.0700000000000003, 3.9900000000000002, 2.3999999999999999, 5.75, 5.8799999999999999, 6.25, 3.1899999999999999, 2.7599999999999998, 4.3700000000000001, 3.27, 1.01, 11.31, 8.0899999999999999, 2.5299999999999998, 3.23, 2.8399999999999999, 1.1000000000000001, 2.7599999999999998, 2.2999999999999998, 4.4699999999999998, 3.0099999999999998, 5.5, 6.3300000000000001, 2.4100000000000001, 2.5899999999999999, 2.0299999999999998, 7.8799999999999999, 4.7599999999999998, 3.4100000000000001, 4.2903981966664126, 5.7400000000000002, 3.0099999999999998, 3.04, 3.0299999999999998, 3.0899999999999999, 2.6299999999999999, 1.6000000000000001, 2.5499999999999998, 3.21, 2.5699999999999998, 3.02, 2.3799999999999999, 2.7999999999999998, 2.5699999999999998, 3.0499999999999998, 1.6799999999999999, 3.1600000000000001, 2.5499999999999998, 3.23, 3.4199999999999999, 2.98, 3.0899999999999999, 2.3599999999999999, 2.7601238599898985, 2.9500000000000002, 3.1400000000000001, 2.5699999999999998, 3.4199999999999999, 2.3100000000000001, 3.9100000000000001, 3.8399999999999999, 2.5099999999999998, 3.3199999999999998, 4.1500000000000004, 3.8900000000000001, 2.6899999999999999, 3.1000000000000001, 10.32, 3.5800000000000001, 4.2800000000000002, 2.7601238599898985, 4.1900000000000004, 5.2199999999999998, 2.7601238599898985, 3.6200000000000001, 7.0700000000000003, 2.7601238599898985, 8.4299999999999997, 7.4199999999999999, 11.33, 11.609999999999999, 7.6699999999999999, 6.8600000000000003, 14.91, 8, 7.04, 4.5599999999999996, 4.9199999999999999, 6.6046192880356891, 4.2300000000000004, 6.3799999999999999, 3.7599999999999998, 5.7999999999999998, 4.6799999999999997, 7.6799999999999997, 9.2699999999999996, 7.71, 19.640000000000001, 6.5300000000000002, 9.3100000000000005, 5.6100000000000003, 6.5700000000000003, 6.6046192880356891, 7.4299999999999997, 6.6046192880356891, 4.46, 13.74, 6.6046192880356891, 8.4299999999999997, 6.6046192880356891, 9.3399999999999999, 12.98, 6.6046192880356891, 10.02, 8.7599999999999998, 9.3200000000000003, 6.6046192880356891, 17.149999999999999, 6.6046192880356891, 6.6046192880356891, 6.6046192880356891, 6.6046192880356891, 6.6046192880356891, 6.6046192880356891, 6.6046192880356891, 6.6046192880356891, 6.6046192880356891, 6.6046192880356891, 6.6046192880356891, 6.6046192880356891, 6.6046192880356891, 15.07, 16.780000000000001, 15.42, 15.42, 15.42, 15.42, 14.859999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [21.5, 20.309999999999999, 20.309999999999999, 20.309999999999999, 22.760000000000002, 18.789999999999999, 21.620000000000001, 13.57, 19.289999999999999, 21.719999999999999, 18.75, 18.969999999999999, 18.780000000000001, 14.35, 17.260000000000002, 19.440000000000001, 15.789999999999999, 19.940000000000001, 20.75, 19.68, 19.879999999999999, 19.550000000000001, 19.533159571668644, 17.620000000000001, 21.609999999999999, 21.609999999999999, 17.949999999999999, 19.140000000000001, 21.57, 20.629999999999999, 19.219999999999999, 13.94, 18.32, 18.32045077600942, 18.32045077600942, 18.32045077600942, 19.18, 6.2500000000000009, 17.09, 17.09, 18.359999999999999, 17.600000000000001, 14.130000000000001, 16.620000000000001, 14.85, 20.23, 14.279999999999999, 16.670000000000002, 12.609999999999999, 13.82, 15.17, 13.51, 35.369999999999997, 19.09, 16.933428589625432, 7.6100000000000003, 14.539999999999999, 7.4900000000000002, 4.6299999999999999, 10.73, 5.9900000000000002, 15.83, 3.1000000000000001, 4.3799999999999999, 4.0499999999999998, 4.0099999999999998, 11.609999999999999, 28.899999999999999, 11.48, 11.510381423113303, 17.32, 10.48, 6.25, 6.46, 7.7599999999999998, 4.9400000000000004, 12.6, 11.26, 6.0700000000000003, 6.5199999999999996, 10.07, 4.7800000000000002, 2.9100000000000001, 4.1500000000000004, 6.2983279257304909, 5.1600000000000001, 3.46, 4.21, 4.8300000000000001, 3.7000000000000002, 9.7200000000000006, 6.2983279257304909, 4.8499999999999996, 6.2983279257304909, 3.5600000000000001, 4.9100000000000001, 6.0899999999999999, 6.2983279257304909, 6.2983279257304909, 6.2983279257304909, 8.4100000000000001, 6.2983279257304909, 6.2983279257304909, 6.2983279257304909, 5.6699999999999999, 6.2983279257304909, 6.2983279257304909, 6.2983279257304909, 6.2983279257304909, 6.2983279257304909, 14.449999999999999, 5.25, 4.0499999999999998, 2.4100000000000001, 5.8600000000000003, 5.9000000000000004, 6.5199999999999996, 3.2799999999999998, 2.75, 4.46, 3.3700000000000001, 1.22, 11.51, 8.5700000000000003, 2.5600000000000001, 3.29, 3.1400000000000001, 1.1299999999999999, 2.7999999999999998, 2.29, 4.54, 3.1200000000000001, 5.6699999999999999, 6.5899999999999999, 2.4199999999999999, 2.5699999999999998, 2.0299999999999998, 8.0899999999999999, 4.7800000000000002, 3.3700000000000001, 4.3890982066231059, 5.8499999999999996, 3.0099999999999998, 3.0299999999999998, 3.0699999999999998, 3.1000000000000001, 2.7000000000000002, 1.6200000000000001, 2.5600000000000001, 3.2599999999999998, 2.5800000000000001, 3.1000000000000001, 2.3900000000000001, 2.77, 2.5600000000000001, 2.9500000000000002, 1.6899999999999999, 3.1600000000000001, 2.5800000000000001, 3.29, 3.4100000000000001, 3.0099999999999998, 3.0899999999999999, 2.3999999999999999, 2.7791748358698158, 2.98, 3.1400000000000001, 2.5899999999999999, 3.4100000000000001, 2.3799999999999999, 3.9399999999999999, 3.8999999999999999, 2.48, 3.3900000000000001, 3.8900000000000001, 4.1600000000000001, 2.73, 3.1299999999999999, 10.81, 3.71, 4.3399999999999999, 2.7791748358698158, 4.2699999999999996, 5.25, 2.7791748358698158, 3.7000000000000002, 7.21, 2.7791748358698158, 8.7100000000000009, 7.6699999999999999, 11.460000000000001, 11.869999999999999, 7.9299999999999997, 7.21, 15.029999999999999, 8.0800000000000001, 7.2199999999999998, 4.6500000000000004, 4.9500000000000002, 6.7253587156931163, 4.29, 6.5599999999999996, 3.8799999999999999, 5.9199999999999999, 4.8099999999999996, 7.8700000000000001, 9.5700000000000003, 7.9199999999999999, 20.41, 6.6699999999999999, 9.6799999999999997, 5.71, 6.75, 6.7253587156931163, 7.6699999999999999, 4.5499999999999998, 6.7253587156931163, 14.15, 6.7253587156931163, 8.5700000000000003, 6.7253587156931163, 9.4299999999999997, 13.609999999999999, 6.7253587156931163, 10.25, 9.0899999999999999, 9.2100000000000009, 6.7253587156931163, 17.780000000000001, 6.7253587156931163, 6.7253587156931163, 6.7253587156931163, 6.7253587156931163, 6.7253587156931163, 6.7253587156931163, 6.7253587156931163, 6.7253587156931163, 6.7253587156931163, 6.7253587156931163, 6.7253587156931163, 6.7253587156931163, 6.7253587156931163, 15.4, 17.16, 15.67, 15.669999999999998, 15.669999999999998, 15.669999999999998, 15.039999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [21.73, 20.68, 20.68, 20.68, 23.059999999999999, 18.829999999999998, 21.879999999999999, 13.85, 19.48, 22.02, 18.93, 19.32, 19.010000000000002, 14.44, 17.829999999999998, 19.82, 16.32, 20.18, 21.050000000000001, 19.899999999999999, 19.969999999999999, 19.800000000000001, 19.781370029441462, 17.690000000000001, 22.059999999999999, 22.059999999999999, 18.329999999999998, 19.609999999999999, 21.949999999999999, 21.109999999999999, 19.690000000000001, 14.24, 18.530000000000001, 18.530562623231091, 18.530562623231091, 18.530562623231091, 19.59, 6.4699999999999998, 17.399999999999999, 17.399999999999999, 18.559999999999999, 18.050000000000001, 14.31, 16.920000000000002, 15.35, 20.539999999999999, 14.390000000000001, 17.23, 13, 14.25, 15.59, 13.84, 35.619999999999997, 19.379999999999999, 17.276408119145984, 7.9500000000000002, 14.91, 7.6799999999999997, 4.75, 10.869999999999999, 6.2400000000000002, 3.1800000000000002, 16.219999999999999, 4.54, 4.1600000000000001, 4.1200000000000001, 12.02, 29.280000000000001, 12.02, 12.05126264818141, 18, 11.08, 6.4699999999999998, 6.5899999999999999, 8.0700000000000003, 5.0700000000000003, 13.210000000000001, 12.199999999999999, 6.2599999999999998, 6.7599999999999998, 10.449999999999999, 5.0199999999999996, 2.9700000000000002, 4.21, 6.5116418009305379, 5.3399999999999999, 3.46, 4.2699999999999996, 5.1399999999999997, 3.7000000000000002, 10.039999999999999, 6.5116418009305379, 4.9299999999999997, 6.5116418009305379, 3.6200000000000001, 5.2199999999999998, 6.1500000000000004, 6.5116418009305379, 6.5116418009305379, 6.5116418009305379, 8.7899999999999991, 6.5116418009305379, 6.5116418009305379, 6.5116418009305379, 5.8200000000000003, 6.5116418009305379, 6.5116418009305379, 6.5116418009305379, 6.5116418009305379, 6.5116418009305379, 15.07, 5.4400000000000004, 4.1200000000000001, 2.4199999999999999, 5.9699999999999998, 5.9500000000000002, 6.8099999999999996, 3.3599999999999999, 2.7400000000000002, 4.4900000000000002, 3.4900000000000002, 1.47, 11.67, 8.9900000000000002, 3.3700000000000001, 2.6299999999999999, 3.5299999999999998, 1.1699999999999999, 2.9500000000000002, 2.29, 4.6299999999999999, 3.23, 5.8600000000000003, 6.8700000000000001, 2.4399999999999999, 2.54, 2.0299999999999998, 8.3399999999999999, 4.79, 3.3399999999999999, 4.4976505195489596, 5.9500000000000002, 3.0099999999999998, 3.02, 3.1000000000000001, 3.1200000000000001, 2.7599999999999998, 1.6499999999999999, 2.5800000000000001, 3.3300000000000001, 2.5899999999999999, 3.1800000000000002, 2.3999999999999999, 2.7599999999999998, 2.5699999999999998, 2.8700000000000001, 1.71, 3.1699999999999999, 2.6099999999999999, 3.3500000000000001, 3.3999999999999999, 3.0499999999999998, 3.0899999999999999, 2.4399999999999999, 2.8046320956578445, 3.02, 3.1499999999999999, 2.6200000000000001, 3.3999999999999999, 2.4399999999999999, 3.9700000000000002, 3.98, 2.4700000000000002, 3.4700000000000002, 3.8999999999999999, 4.1900000000000004, 2.77, 3.1600000000000001, 11.289999999999999, 3.8500000000000001, 4.4000000000000004, 2.8046320956578445, 4.3200000000000003, 5.2999999999999998, 2.8046320956578445, 3.77, 7.4000000000000004, 2.8046320956578445, 9, 7.8799999999999999, 11.6, 12.130000000000001, 8.1999999999999993, 7.6200000000000001, 15.17, 8.1600000000000001, 7.4100000000000001, 4.7599999999999998, 4.9900000000000002, 6.86490778690436, 4.3700000000000001, 6.7599999999999998, 4.0099999999999998, 6.04, 4.9500000000000002, 8.0199999999999996, 9.8900000000000006, 8.1400000000000006, 21.079999999999998, 6.8399999999999999, 10.130000000000001, 5.8499999999999996, 6.9299999999999997, 6.86490778690436, 7.9699999999999998, 4.6600000000000001, 6.86490778690436, 6.86490778690436, 14.619999999999999, 8.7300000000000004, 6.86490778690436, 9.5500000000000007, 14.27, 6.86490778690436, 10.48, 9.4299999999999997, 9.1600000000000001, 6.86490778690436, 18.379999999999999, 6.86490778690436, 6.86490778690436, 6.86490778690436, 6.86490778690436, 6.86490778690436, 6.86490778690436, 6.86490778690436, 6.86490778690436, 6.86490778690436, 6.86490778690436, 6.86490778690436, 6.86490778690436, 6.86490778690436, 15.789999999999999, 17.559999999999999, 15.93, 15.93, 15.93, 15.93, 15.27],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [21.960000000000001, 21.010000000000002, 21.010000000000002, 21.010000000000002, 23.370000000000001, 18.84, 22.18, 14.15, 19.670000000000002, 22.300000000000001, 19.149999999999999, 19.649999999999999, 19.210000000000001, 14.56, 18.370000000000001, 20.16, 16.82, 20.420000000000002, 21.399999999999999, 20.18, 20.030000000000001, 20.050000000000001, 20.029986481927608, 17.809999999999999, 22.489999999999998, 22.489999999999998, 18.690000000000001, 20.100000000000001, 22.27, 21.57, 20.100000000000001, 14.539999999999999, 18.719999999999999, 18.720711415445471, 18.720711415445471, 18.720711415445471, 20.039999999999999, 6.6699999999999999, 17.73, 17.73, 18.73, 18.469999999999999, 14.57, 17.190000000000001, 15.82, 20.739999999999998, 14.5, 17.739999999999998, 13.359999999999999, 14.59, 15.970000000000001, 14.19, 35.850000000000001, 19.699999999999999, 17.549307613298168, 8.1799999999999997, 15.31, 7.8399999999999999, 4.8700000000000001, 11.1, 6.4699999999999998, 3.2400000000000002, 16.550000000000001, 4.7199999999999998, 4.2699999999999996, 4.2599999999999998, 12.41, 29.579999999999998, 12.6, 12.632025271647377, 18.760000000000002, 11.68, 6.6699999999999999, 6.71, 8.4299999999999997, 5.2199999999999998, 13.85, 13.15, 6.4500000000000002, 7.0099999999999998, 10.800000000000001, 5.2699999999999996, 3.0299999999999998, 4.2800000000000002, 6.7237575667101721, 5.54, 3.46, 4.3799999999999999, 5.4699999999999998, 3.71, 10.380000000000001, 6.7237575667101721, 5.0099999999999998, 6.7237575667101721, 3.6899999999999999, 5.5599999999999996, 6.1799999999999997, 6.7237575667101721, 6.7237575667101721, 6.7237575667101721, 9.1500000000000004, 6.7237575667101721, 6.7237575667101721, 6.7237575667101721, 5.9900000000000002, 6.7237575667101721, 6.7237575667101721, 6.7237575667101721, 6.7237575667101721, 6.7237575667101721, 15.83, 5.6299999999999999, 4.1699999999999999, 2.4199999999999999, 6.04, 6.0300000000000002, 7.1100000000000003, 3.3999999999999999, 2.7200000000000002, 4.5499999999999998, 3.6099999999999999, 1.6499999999999999, 11.81, 9.3499999999999996, 3.4300000000000002, 2.7599999999999998, 3.98, 1.26, 3.2000000000000002, 2.3999999999999999, 4.71, 3.3399999999999999, 6.0199999999999996, 7.1500000000000004, 2.4399999999999999, 2.5, 2.0299999999999998, 8.5800000000000001, 4.8099999999999996, 3.2999999999999998, 4.5950145556969355, 6, 3, 3, 3.1299999999999999, 3.1299999999999999, 2.7999999999999998, 1.6599999999999999, 2.5899999999999999, 3.4100000000000001, 2.6000000000000001, 3.25, 2.4100000000000001, 2.7400000000000002, 2.5600000000000001, 2.79, 1.73, 3.1699999999999999, 2.6200000000000001, 3.3799999999999999, 3.3900000000000001, 3.0899999999999999, 3.1000000000000001, 2.4700000000000002, 2.8210452004436233, 3.0600000000000001, 3.1499999999999999, 2.6499999999999999, 3.3799999999999999, 2.48, 4, 4.0300000000000002, 2.4500000000000002, 3.5499999999999998, 3.8999999999999999, 4.21, 2.7999999999999998, 3.1699999999999999, 11.779999999999999, 3.9500000000000002, 4.46, 2.8210452004436233, 4.3300000000000001, 5.3700000000000001, 2.8210452004436233, 3.79, 7.6399999999999997, 2.8210452004436233, 9.2899999999999991, 8.0199999999999996, 11.73, 12.4, 8.4700000000000006, 7.9900000000000002, 15.34, 8.25, 7.54, 4.8499999999999996, 4.9800000000000004, 4.4299999999999997, 6.9947383679094157, 6.96, 4.1200000000000001, 6.1600000000000001, 5.0599999999999996, 8.0999999999999996, 10.220000000000001, 8.3599999999999994, 21.710000000000001, 7.04, 10.67, 6.0499999999999998, 7.1100000000000003, 8.2799999999999994, 6.9947383679094157, 4.8099999999999996, 6.9947383679094157, 6.9947383679094157, 15.16, 8.9199999999999999, 6.9947383679094157, 9.6899999999999995, 14.94, 6.9947383679094157, 10.67, 9.8000000000000007, 6.9947383679094157, 9.1699999999999999, 19.02, 6.9947383679094157, 6.9947383679094157, 6.9947383679094157, 6.9947383679094157, 6.9947383679094157, 6.9947383679094157, 6.9947383679094157, 6.9947383679094157, 6.9947383679094157, 6.9947383679094157, 6.9947383679094157, 6.9947383679094157, 6.9947383679094157, 16.219999999999999, 18.02, 16.23, 16.23, 16.23, 16.23, 15.58],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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
            "title": "Population ages 65 and above",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [22.170000000000002, 21.32, 21.32, 21.32, 23.68, 18.870000000000001, 22.510000000000002, 14.48, 19.899999999999999, 22.559999999999999, 19.440000000000001, 19.949999999999999, 19.420000000000002, 14.75, 18.84, 20.449999999999999, 17.23, 20.59, 21.609999999999999, 20.370000000000001, 20.100000000000001, 20.27, 20.24862004674074, 17.899999999999999, 22.890000000000001, 22.890000000000001, 18.920000000000002, 20.420000000000002, 22.420000000000002, 21.969999999999999, 20.5, 14.83, 18.920000000000002, 18.920829898088595, 18.920829898088595, 18.920829898088595, 20.43, 6.7999999999999998, 18.100000000000001, 18.100000000000001, 18.969999999999999, 18.859999999999999, 14.93, 17.399999999999999, 16.23, 20.719999999999999, 14.56, 18.140000000000001, 13.609999999999999, 14.77, 16.260000000000002, 14.539999999999999, 35.969999999999999, 20.039999999999999, 17.674081727085458, 8.3800000000000008, 15.59, 7.9500000000000002, 4.9800000000000004, 11.359999999999999, 6.7199999999999998, 3.3199999999999998, 16.829999999999998, 4.9100000000000001, 4.3899999999999997, 4.4199999999999999, 12.75, 29.789999999999999, 13.15, 13.183262581385859, 19.600000000000001, 12.32, 6.7999999999999998, 6.7800000000000002, 8.75, 5.3300000000000001, 14.51, 14.130000000000001, 6.6299999999999999, 7.25, 11.16, 5.5300000000000002, 3.1000000000000001, 4.3600000000000003, 6.9370741341215743, 5.7199999999999998, 3.46, 4.54, 5.8099999999999996, 3.7200000000000002, 10.69, 6.9370741341215743, 5.1100000000000003, 6.9370741341215743, 3.7400000000000002, 5.8799999999999999, 6.2000000000000002, 6.9370741341215743, 6.9370741341215743, 6.9370741341215743, 9.5199999999999996, 6.9370741341215743, 6.9370741341215743, 6.9370741341215743, 6.2199999999999998, 6.9370741341215743, 6.9370741341215743, 6.9370741341215743, 6.9370741341215743, 6.9370741341215743, 16.649999999999999, 5.8300000000000001, 4.2199999999999998, 2.3999999999999999, 6.0499999999999998, 6.1399999999999997, 7.3799999999999999, 3.4100000000000001, 2.6899999999999999, 4.6200000000000001, 3.7200000000000002, 1.76, 11.93, 9.6199999999999992, 3.48, 2.79, 4.46, 1.3999999999999999, 3.4900000000000002, 2.6000000000000001, 4.7699999999999996, 3.4199999999999999, 6.1799999999999997, 7.4199999999999999, 2.4199999999999999, 2.4399999999999999, 2.02, 8.8000000000000007, 4.8200000000000003, 3.2599999999999998, 4.6745043888092415, 5.9699999999999998, 2.98, 2.96, 3.1400000000000001, 3.1200000000000001, 2.8399999999999999, 1.6799999999999999, 2.5899999999999999, 3.48, 2.5899999999999999, 3.2999999999999998, 2.3999999999999999, 2.7000000000000002, 2.5499999999999998, 2.7000000000000002, 1.74, 2.6000000000000001, 3.1600000000000001, 3.3599999999999999, 3.3599999999999999, 3.0800000000000001, 3.1400000000000001, 2.48, 2.8246344772201697, 3.1000000000000001, 3.1400000000000001, 2.6800000000000002, 3.3399999999999999, 2.5, 4.0099999999999998, 4.0300000000000002, 2.4399999999999999, 3.5899999999999999, 3.8999999999999999, 4.21, 2.8100000000000001, 3.1499999999999999, 12.289999999999999, 3.9900000000000002, 4.5, 2.8246344772201697, 4.2999999999999998, 5.4400000000000004, 2.8246344772201697, 3.7599999999999998, 7.8899999999999997, 2.8246344772201697, 9.5800000000000001, 8.1300000000000008, 11.82, 12.68, 8.7200000000000006, 8.3399999999999999, 15.460000000000001, 8.3200000000000003, 7.6399999999999997, 4.9000000000000004, 4.9100000000000001, 4.4900000000000002, 7.1699999999999999, 7.0893242951556656, 4.2000000000000002, 6.2300000000000004, 5.1600000000000001, 8.1500000000000004, 10.529999999999999, 8.5700000000000003, 22.359999999999999, 7.2400000000000002, 11.1, 6.1600000000000001, 7.2699999999999996, 8.5700000000000003, 7.0893242951556656, 4.96, 7.0893242951556656, 7.0893242951556656, 15.720000000000001, 9.0800000000000001, 7.0893242951556656, 9.8399999999999999, 15.539999999999999, 7.0893242951556656, 10.789999999999999, 10.19, 7.0893242951556656, 9.3200000000000003, 19.68, 7.0893242951556656, 7.0893242951556656, 7.0893242951556656, 7.0893242951556656, 7.0893242951556656, 7.0893242951556656, 7.0893242951556656, 7.0893242951556656, 7.0893242951556656, 7.0893242951556656, 7.0893242951556656, 7.0893242951556656, 7.0893242951556656, 16.68, 18.52, 16.57, 16.57, 16.57, 16.57, 15.93],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 50,
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

  
