(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Demographics_Population_ages___0_to_14_map') 

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
    "b55c1e1d3936": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c1e1d3936",
  "attrs": {
    "b55c1e1d3936": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 60,
      "colorbar": {
        "title": "Population ages 0 14"
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
        "title": "Population ages 0 14",
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
      "z": [14.949999999999999, 18.5, 18.5, 18.5, 14.18, 17.969999999999999, 14.359999999999999, 20.940000000000001, 14.460000000000001, 16.059999999999999, 16.440000000000001, 18.510000000000002, 17.370000000000001, 18.789999999999999, 17.449999999999999, 15.34, 17.859999999999999, 17.84, 15.710000000000001, 16.120000000000001, 17.890000000000001, 18.739999999999998, 18.781862138937807, 23.48, 17.719999999999999, 17.719999999999999, 16.859999999999999, 16.010000000000002, 14.390000000000001, 16.460000000000001, 14.85, 20.920000000000002, 18.449999999999999, 18.449919455191345, 18.449919455191345, 18.449919455191345, 18.280000000000001, 33.920000000000002, 19.940000000000001, 19.940000000000001, 16.609999999999999, 18.16, 22.780000000000001, 15.52, 27.25, 15.77, 17.66, 21.539999999999999, 20.32, 21.579999999999998, 20.989999999999998, 15.25, 13.83, 15.15, 18.312302148994572, 29.75, 16, 25.75, 34.229999999999997, 24.649999999999999, 16.449999999999999, 28.059999999999999, 40.340000000000003, 33.539999999999999, 34.649999999999999, 24.190000000000001, 31.949999999999999, 13.890000000000001, 22, 21.966677279205268, 15.75, 19.510000000000002, 33.920000000000002, 29.550000000000001, 28.870000000000001, 37.039999999999999, 22.300000000000001, 18.52, 30.710000000000001, 32.43, 26.16, 37.329999999999998, 39.630000000000003, 41.079999999999998, 32.112017866773066, 33.280000000000001, 42.25, 30.670000000000002, 35.560000000000002, 32.112017866773066, 29.09, 41.850000000000001, 41.049999999999997, 32.112017866773066, 38.609999999999999, 38.100000000000001, 39.369999999999997, 32.112017866773066, 32.112017866773066, 32.112017866773066, 25.129999999999999, 32.112017866773066, 32.112017866773066, 32.112017866773066, 35.719999999999999, 32.112017866773066, 32.112017866773066, 32.112017866773066, 32.112017866773066, 32.112017866773066, 20.129999999999999, 36.009999999999998, 41.829999999999998, 39.740000000000002, 49.960000000000001, 35.369999999999997, 28.559999999999999, 42.93, 47.869999999999997, 39.450000000000003, 27.719999999999999, 39.409999999999997, 30.010000000000002, 20.050000000000001, 46.5, 35.030000000000001, 26.18, 27.219999999999999, 22.329999999999998, 34.950000000000003, 35.369999999999997, 30.73, 43.939999999999998, 32.240000000000002, 47.799999999999997, 46.350000000000001, 27.32, 48.950000000000003, 31.940000000000001, 43.869999999999997, 37.885490132063076, 32.280000000000001, 43.549999999999997, 46.140000000000001, 47.18, 44.57, 44.710000000000001, 50.520000000000003, 40.93, 44.729999999999997, 45.57, 44.869999999999997, 46.049999999999997, 44.600000000000001, 45.82, 41.75, 45.600000000000001, 47.829999999999998, 43.57, 47.399999999999999, 45.579999999999998, 43.659999999999997, 44.719999999999999, 46.609999999999999, 44.850967582373542, 42.539999999999999, 43.939999999999998, 45.509999999999998, 41.93, 42.530000000000001, 43.520000000000003, 38.009999999999998, 40.799999999999997, 37.329999999999998, 45.619999999999997, 39.850000000000001, 44.030000000000001, 24.989999999999998, 42.280000000000001, 41.609999999999999, 44.850967582373542, 38.350000000000001, 46.119999999999997, 39.18, 44.850967582373542, 42.340000000000003, 27.190000000000001, 44.850967582373542, 28.170000000000002, 32.979999999999997, 27.489999999999998, 25.239999999999998, 31.219999999999999, 32.630000000000003, 23.960000000000001, 32.880000000000003, 34.200000000000003, 42.729999999999997, 35.323405944694919, 37.5, 33.82, 39.109999999999999, 41.600000000000001, 35.890000000000001, 37.350000000000001, 38.659999999999997, 28.789999999999999, 22.969999999999999, 31.23, 31.440000000000001, 23.260000000000002, 36.340000000000003, 30.77, 35.323405944694919, 35.323405944694919, 28.73, 21.289999999999999, 38.75, 35.323405944694919, 29.32, 35.323405944694919, 30.079999999999998, 30.050000000000001, 35.323405944694919, 22.100000000000001, 26.859999999999999, 28.190000000000001, 18.16, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 20.989999999999998, 18.309999999999999, 20.149999999999999, 20.149999999999999, 20.149999999999999, 20.149999999999999, 22.120000000000001],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [14.949999999999999, 18.5, 18.5, 18.5, 14.18, 17.969999999999999, 14.359999999999999, 20.940000000000001, 14.460000000000001, 16.059999999999999, 16.440000000000001, 18.510000000000002, 17.370000000000001, 18.789999999999999, 17.449999999999999, 15.34, 17.859999999999999, 17.84, 15.710000000000001, 16.120000000000001, 17.890000000000001, 18.739999999999998, 18.781862138937807, 23.48, 17.719999999999999, 17.719999999999999, 16.859999999999999, 16.010000000000002, 14.390000000000001, 16.460000000000001, 14.85, 20.920000000000002, 18.449999999999999, 18.449919455191345, 18.449919455191345, 18.449919455191345, 18.280000000000001, 33.920000000000002, 19.940000000000001, 19.940000000000001, 16.609999999999999, 18.16, 22.780000000000001, 15.52, 27.25, 15.77, 17.66, 21.539999999999999, 20.32, 21.579999999999998, 20.989999999999998, 15.25, 13.83, 15.15, 18.312302148994572, 29.75, 16, 25.75, 34.229999999999997, 24.649999999999999, 16.449999999999999, 28.059999999999999, 40.340000000000003, 33.539999999999999, 34.649999999999999, 24.190000000000001, 31.949999999999999, 13.890000000000001, 22, 21.966677279205268, 15.75, 19.510000000000002, 33.920000000000002, 29.550000000000001, 28.870000000000001, 37.039999999999999, 22.300000000000001, 18.52, 30.710000000000001, 32.43, 26.16, 37.329999999999998, 39.630000000000003, 41.079999999999998, 32.112017866773066, 33.280000000000001, 42.25, 30.670000000000002, 35.560000000000002, 32.112017866773066, 29.09, 41.850000000000001, 41.049999999999997, 32.112017866773066, 38.609999999999999, 38.100000000000001, 39.369999999999997, 32.112017866773066, 32.112017866773066, 32.112017866773066, 25.129999999999999, 32.112017866773066, 32.112017866773066, 32.112017866773066, 35.719999999999999, 32.112017866773066, 32.112017866773066, 32.112017866773066, 32.112017866773066, 32.112017866773066, 20.129999999999999, 36.009999999999998, 41.829999999999998, 39.740000000000002, 49.960000000000001, 35.369999999999997, 28.559999999999999, 42.93, 47.869999999999997, 39.450000000000003, 27.719999999999999, 39.409999999999997, 30.010000000000002, 20.050000000000001, 46.5, 35.030000000000001, 26.18, 27.219999999999999, 22.329999999999998, 34.950000000000003, 35.369999999999997, 30.73, 43.939999999999998, 32.240000000000002, 47.799999999999997, 46.350000000000001, 27.32, 48.950000000000003, 31.940000000000001, 43.869999999999997, 37.885490132063076, 32.280000000000001, 43.549999999999997, 46.140000000000001, 47.18, 44.57, 44.710000000000001, 50.520000000000003, 40.93, 44.729999999999997, 45.57, 44.869999999999997, 46.049999999999997, 44.600000000000001, 45.82, 41.75, 45.600000000000001, 47.829999999999998, 43.57, 47.399999999999999, 45.579999999999998, 43.659999999999997, 44.719999999999999, 46.609999999999999, 44.850967582373542, 42.539999999999999, 43.939999999999998, 45.509999999999998, 41.93, 42.530000000000001, 43.520000000000003, 38.009999999999998, 40.799999999999997, 37.329999999999998, 45.619999999999997, 39.850000000000001, 44.030000000000001, 24.989999999999998, 42.280000000000001, 41.609999999999999, 44.850967582373542, 38.350000000000001, 46.119999999999997, 39.18, 44.850967582373542, 42.340000000000003, 27.190000000000001, 44.850967582373542, 28.170000000000002, 32.979999999999997, 27.489999999999998, 25.239999999999998, 31.219999999999999, 32.630000000000003, 23.960000000000001, 32.880000000000003, 34.200000000000003, 42.729999999999997, 35.323405944694919, 37.5, 33.82, 39.109999999999999, 41.600000000000001, 35.890000000000001, 37.350000000000001, 38.659999999999997, 28.789999999999999, 22.969999999999999, 31.23, 31.440000000000001, 23.260000000000002, 36.340000000000003, 30.77, 35.323405944694919, 35.323405944694919, 28.73, 21.289999999999999, 38.75, 35.323405944694919, 29.32, 35.323405944694919, 30.079999999999998, 30.050000000000001, 35.323405944694919, 22.100000000000001, 26.859999999999999, 28.190000000000001, 18.16, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 35.323405944694919, 20.989999999999998, 18.309999999999999, 20.149999999999999, 20.149999999999999, 20.149999999999999, 20.149999999999999, 22.120000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [14.68, 18.420000000000002, 18.420000000000002, 18.420000000000002, 14.140000000000001, 17.379999999999999, 14.279999999999999, 20.469999999999999, 14.460000000000001, 15.98, 16.23, 18.440000000000001, 17.27, 18.68, 16.920000000000002, 15.01, 17.34, 17.280000000000001, 15.210000000000001, 15.609999999999999, 17.66, 18.739999999999998, 18.779928793944219, 23.239999999999998, 17.550000000000001, 17.550000000000001, 16.329999999999998, 15.779999999999999, 14.02, 16.210000000000001, 14.550000000000001, 20.77, 18.260000000000002, 18.260023922540128, 18.260023922540128, 18.260023922540128, 18.309999999999999, 33.520000000000003, 19.82, 19.82, 16.390000000000001, 17.93, 22.469999999999999, 15.06, 26.379999999999999, 15.56, 17.16, 20.93, 19.780000000000001, 21.140000000000001, 20.73, 15.18, 13.880000000000001, 15.199999999999999, 17.917710205046006, 29.239999999999998, 15.57, 25.129999999999999, 33.369999999999997, 24.32, 15.859999999999999, 27.149999999999999, 39.600000000000001, 32.759999999999998, 33.780000000000001, 23.329999999999998, 30.890000000000001, 13.75, 21.140000000000001, 21.107964080314694, 15.18, 18.23, 33.520000000000003, 29.219999999999999, 28.120000000000001, 36.789999999999999, 21.82, 18.010000000000002, 30.399999999999999, 31.899999999999999, 26.030000000000001, 36.43, 39.380000000000003, 40.439999999999998, 31.722495940809882, 32.869999999999997, 42.079999999999998, 29.859999999999999, 34.079999999999998, 31.722495940809882, 28.670000000000002, 41.329999999999998, 40.850000000000001, 31.722495940809882, 38.210000000000001, 38.189999999999998, 38.93, 31.722495940809882, 31.722495940809882, 31.722495940809882, 24.629999999999999, 31.722495940809882, 31.722495940809882, 31.722495940809882, 35.240000000000002, 31.722495940809882, 31.722495940809882, 31.722495940809882, 31.722495940809882, 31.722495940809882, 19.73, 35.609999999999999, 41.479999999999997, 39.369999999999997, 49.920000000000002, 34.270000000000003, 27.16, 42.75, 47.350000000000001, 39.009999999999998, 27.649999999999999, 39.030000000000001, 29.329999999999998, 19.600000000000001, 45.990000000000002, 34.030000000000001, 25.48, 25.93, 22.329999999999998, 34.630000000000003, 34.869999999999997, 29.890000000000001, 43.590000000000003, 31.670000000000002, 48.020000000000003, 46.369999999999997, 26.559999999999999, 48.600000000000001, 31.57, 43.799999999999997, 37.512726918403388, 31.43, 43.640000000000001, 46.159999999999997, 46.969999999999999, 44.590000000000003, 44.380000000000003, 50.530000000000001, 40.560000000000002, 44.840000000000003, 45.460000000000001, 44.700000000000003, 45.939999999999998, 44.439999999999998, 45.630000000000003, 45.710000000000001, 41.920000000000002, 47.670000000000002, 43.439999999999998, 47.549999999999997, 45.5, 43.219999999999999, 44.600000000000001, 46.020000000000003, 44.732852950922535, 42.420000000000002, 43.909999999999997, 45.520000000000003, 41.609999999999999, 42.670000000000002, 42.920000000000002, 37.689999999999998, 40.32, 36.840000000000003, 45.670000000000002, 39.460000000000001, 43.920000000000002, 24.73, 41.710000000000001, 40.960000000000001, 38.299999999999997, 44.732852950922535, 45.549999999999997, 38.119999999999997, 44.732852950922535, 42.229999999999997, 26.699999999999999, 44.732852950922535, 27.640000000000001, 32.549999999999997, 27.25, 24.649999999999999, 30.699999999999999, 32.189999999999998, 23.75, 32.340000000000003, 33.759999999999998, 42.299999999999997, 34.854163662750459, 37.119999999999997, 33.390000000000001, 38.630000000000003, 41.140000000000001, 35.420000000000002, 36.710000000000001, 38.049999999999997, 28.100000000000001, 22.530000000000001, 30.890000000000001, 30.809999999999999, 22.640000000000001, 35.979999999999997, 30.449999999999999, 34.854163662750459, 34.854163662750459, 28.370000000000001, 38.390000000000001, 21.079999999999998, 34.854163662750459, 28.550000000000001, 34.854163662750459, 29.530000000000001, 28.98, 34.854163662750459, 21.670000000000002, 26.440000000000001, 27.600000000000001, 17.870000000000001, 34.854163662750459, 34.854163662750459, 34.854163662750459, 34.854163662750459, 34.854163662750459, 34.854163662750459, 34.854163662750459, 34.854163662750459, 34.854163662750459, 34.854163662750459, 34.854163662750459, 34.854163662750459, 34.854163662750459, 34.854163662750459, 20.82, 18.010000000000002, 19.949999999999999, 19.949999999999999, 19.949999999999999, 19.949999999999999, 21.850000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [14.4, 18.350000000000001, 18.350000000000001, 18.350000000000001, 14.119999999999999, 16.809999999999999, 14.279999999999999, 19.899999999999999, 14.470000000000001, 15.890000000000001, 16.02, 18.300000000000001, 17.16, 18.539999999999999, 16.440000000000001, 14.710000000000001, 16.879999999999999, 16.73, 14.77, 15.210000000000001, 17.399999999999999, 18.68, 18.717234669357332, 22.890000000000001, 17.359999999999999, 17.359999999999999, 15.970000000000001, 15.550000000000001, 13.74, 16.010000000000002, 14.32, 20.579999999999998, 18.079999999999998, 18.080125473005136, 18.080125473005136, 18.080125473005136, 18.34, 33.119999999999997, 19.640000000000001, 19.640000000000001, 16.149999999999999, 17.710000000000001, 22.050000000000001, 14.66, 25.469999999999999, 15.34, 16.710000000000001, 20.289999999999999, 19.280000000000001, 20.649999999999999, 20.48, 15.01, 13.83, 15.35, 17.524731266235829, 28.77, 15.210000000000001, 24.649999999999999, 32.509999999999998, 23.949999999999999, 15.380000000000001, 26.309999999999999, 38.880000000000003, 32.060000000000002, 32.920000000000002, 22.43, 29.899999999999999, 13.640000000000001, 20.25, 20.219214566180327, 14.550000000000001, 17.030000000000001, 33.119999999999997, 28.940000000000001, 27.370000000000001, 36.5, 21.350000000000001, 17.43, 30.07, 31.309999999999999, 25.920000000000002, 35.579999999999998, 39.130000000000003, 39.689999999999998, 31.315723985743265, 32.479999999999997, 41.920000000000002, 29.100000000000001, 32.619999999999997, 31.315723985743265, 28.210000000000001, 40.810000000000002, 40.590000000000003, 31.315723985743265, 37.810000000000002, 38.280000000000001, 38.579999999999998, 31.315723985743265, 31.315723985743265, 31.315723985743265, 23.989999999999998, 31.315723985743265, 31.315723985743265, 31.315723985743265, 34.729999999999997, 31.315723985743265, 31.315723985743265, 31.315723985743265, 31.315723985743265, 31.315723985743265, 19.27, 35.210000000000001, 41.090000000000003, 38.960000000000001, 49.619999999999997, 33.259999999999998, 25.879999999999999, 42.530000000000001, 46.770000000000003, 38.619999999999997, 27.59, 38.630000000000003, 28.629999999999999, 19, 45.43, 32.770000000000003, 24.890000000000001, 24.57, 21.190000000000001, 33.939999999999998, 34.450000000000003, 29.199999999999999, 43.170000000000002, 31.100000000000001, 48.240000000000002, 46.450000000000003, 48.460000000000001, 25.899999999999999, 31.260000000000002, 43.710000000000001, 37.189554324222492, 30.73, 43.75, 46.140000000000001, 46.75, 44.659999999999997, 44.109999999999999, 50.530000000000001, 40.240000000000002, 44.93, 45.280000000000001, 45.850000000000001, 44.509999999999998, 44.310000000000002, 45.479999999999997, 45.850000000000001, 42.159999999999997, 47.509999999999998, 43.329999999999998, 47.810000000000002, 45.460000000000001, 42.93, 44.420000000000002, 44.642736215937738, 45.609999999999999, 42.299999999999997, 43.859999999999999, 45.509999999999998, 41.299999999999997, 42.82, 42.899999999999999, 39.710000000000001, 37.399999999999999, 36.420000000000002, 45.700000000000003, 39.079999999999998, 43.850000000000001, 24.399999999999999, 41.18, 40.310000000000002, 38.170000000000002, 44.642736215937738, 44.890000000000001, 37.060000000000002, 44.642736215937738, 42.159999999999997, 26.280000000000001, 44.642736215937738, 27.129999999999999, 32.100000000000001, 26.989999999999998, 24.030000000000001, 30.149999999999999, 31.77, 23.550000000000001, 31.850000000000001, 33.310000000000002, 41.829999999999998, 34.394149944554904, 36.729999999999997, 32.93, 38.140000000000001, 40.649999999999999, 34.939999999999998, 36.060000000000002, 37.450000000000003, 27.440000000000001, 22.050000000000001, 30.559999999999999, 30.210000000000001, 22.129999999999999, 35.539999999999999, 30.399999999999999, 34.394149944554904, 34.394149944554904, 28.02, 38.009999999999998, 20.829999999999998, 34.394149944554904, 27.789999999999999, 34.394149944554904, 28.949999999999999, 27.969999999999999, 34.394149944554904, 21.359999999999999, 25.940000000000001, 26.98, 17.550000000000001, 34.394149944554904, 34.394149944554904, 34.394149944554904, 34.394149944554904, 34.394149944554904, 34.394149944554904, 34.394149944554904, 34.394149944554904, 34.394149944554904, 34.394149944554904, 34.394149944554904, 34.394149944554904, 34.394149944554904, 34.394149944554904, 20.609999999999999, 17.690000000000001, 19.760000000000002, 19.760000000000002, 19.760000000000002, 19.760000000000002, 21.550000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [14.16, 18.289999999999999, 18.289999999999999, 18.289999999999999, 14.109999999999999, 16.309999999999999, 14.32, 19.280000000000001, 14.529999999999999, 15.77, 15.77, 18.129999999999999, 17.050000000000001, 18.390000000000001, 16.02, 14.449999999999999, 16.43, 16.199999999999999, 14.43, 14.960000000000001, 17.120000000000001, 18.609999999999999, 18.644540060926712, 22.530000000000001, 17.170000000000002, 17.170000000000002, 15.800000000000001, 15.33, 13.57, 15.81, 14.15, 20.370000000000001, 17.899999999999999, 17.900179869004763, 17.900179869004763, 17.900179869004763, 18.27, 32.700000000000003, 19.449999999999999, 19.449999999999999, 15.9, 17.43, 21.530000000000001, 14.35, 24.539999999999999, 15.09, 16.260000000000002, 19.670000000000002, 18.850000000000001, 20.140000000000001, 20.23, 15.09, 13.66, 15.68, 17.132194676472825, 28.350000000000001, 14.94, 24.329999999999998, 31.649999999999999, 23.530000000000001, 15.029999999999999, 25.57, 38.240000000000002, 31.469999999999999, 32.18, 21.48, 29.07, 13.550000000000001, 19.539999999999999, 19.509518694211664, 13.94, 15.960000000000001, 32.700000000000003, 28.68, 26.629999999999999, 36.189999999999998, 20.879999999999999, 16.940000000000001, 29.73, 30.68, 25.829999999999998, 34.75, 38.880000000000003, 38.859999999999999, 30.896564238727205, 32.109999999999999, 41.770000000000003, 28.379999999999999, 31.079999999999998, 30.896564238727205, 27.68, 40.299999999999997, 40.210000000000001, 30.896564238727205, 37.390000000000001, 38.340000000000003, 38.159999999999997, 30.896564238727205, 30.896564238727205, 30.896564238727205, 23.260000000000002, 30.896564238727205, 30.896564238727205, 34.18, 30.896564238727205, 30.896564238727205, 30.896564238727205, 30.896564238727205, 30.896564238727205, 30.896564238727205, 18.73, 34.859999999999999, 40.700000000000003, 38.509999999999998, 49.229999999999997, 32.460000000000001, 24.73, 42.280000000000001, 46.130000000000003, 37.82, 27.530000000000001, 38.25, 17.739999999999998, 27.949999999999999, 44.829999999999998, 31.530000000000001, 24.449999999999999, 18.030000000000001, 23.399999999999999, 32.909999999999997, 34.109999999999999, 28.629999999999999, 42.770000000000003, 30.539999999999999, 48.450000000000003, 46.57, 48.509999999999998, 25.32, 30.940000000000001, 43.619999999999997, 36.920758297891851, 30.140000000000001, 43.869999999999997, 46.119999999999997, 46.490000000000002, 44.740000000000002, 43.899999999999999, 50.479999999999997, 39.969999999999999, 45.030000000000001, 45.060000000000002, 45.789999999999999, 44.299999999999997, 44.200000000000003, 45.399999999999999, 45.990000000000002, 42.329999999999998, 47.350000000000001, 43.259999999999998, 48.159999999999997, 45.380000000000003, 42.75, 44.289999999999999, 44.570883049364816, 45.399999999999999, 42.149999999999999, 43.780000000000001, 45.590000000000003, 41.020000000000003, 43, 43.109999999999999, 39.030000000000001, 37.130000000000003, 36.060000000000002, 45.729999999999997, 38.700000000000003, 43.829999999999998, 23.989999999999998, 40.689999999999998, 39.759999999999998, 37.850000000000001, 44.570883049364816, 44.259999999999998, 36, 44.570883049364816, 42.119999999999997, 25.870000000000001, 44.570883049364816, 26.649999999999999, 31.640000000000001, 26.719999999999999, 23.420000000000002, 29.57, 31.379999999999999, 23.350000000000001, 31.399999999999999, 32.859999999999999, 41.32, 33.931905016670349, 36.340000000000003, 32.450000000000003, 37.670000000000002, 40.119999999999997, 34.439999999999998, 35.409999999999997, 36.840000000000003, 26.800000000000001, 21.530000000000001, 30.25, 29.620000000000001, 21.719999999999999, 34.979999999999997, 30.329999999999998, 33.931905016670349, 33.931905016670349, 27.699999999999999, 37.600000000000001, 20.550000000000001, 33.931905016670349, 27.02, 33.931905016670349, 28.32, 27.079999999999998, 33.931905016670349, 21.239999999999998, 25.460000000000001, 26.329999999999998, 17.210000000000001, 33.931905016670349, 33.931905016670349, 33.931905016670349, 33.931905016670349, 33.931905016670349, 33.931905016670349, 33.931905016670349, 33.931905016670349, 33.931905016670349, 33.931905016670349, 33.931905016670349, 33.931905016670349, 33.931905016670349, 33.931905016670349, 20.420000000000002, 17.379999999999999, 19.579999999999998, 19.579999999999998, 19.579999999999998, 19.579999999999998, 21.280000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.970000000000001, 18.25, 18.25, 18.25, 14.09, 15.84, 14.35, 18.649999999999999, 14.6, 15.619999999999999, 15.51, 17.949999999999999, 16.949999999999999, 18.25, 15.68, 14.279999999999999, 16.039999999999999, 15.710000000000001, 14.210000000000001, 14.85, 16.899999999999999, 18.5, 18.533014038944316, 22.260000000000002, 16.98, 16.98, 15.74, 15.130000000000001, 13.51, 15.640000000000001, 14.06, 20.289999999999999, 17.77, 17.770176067241891, 17.770176067241891, 17.770176067241891, 18.129999999999999, 32.270000000000003, 19.25, 19.25, 15.640000000000001, 17.16, 21.09, 14.15, 23.600000000000001, 14.869999999999999, 15.98, 19.18, 18.510000000000002, 19.68, 19.969999999999999, 15.460000000000001, 13.390000000000001, 15.779999999999999, 16.821610704485355, 27.960000000000001, 14.82, 24.190000000000001, 30.870000000000001, 23.09, 14.800000000000001, 24.98, 37.719999999999999, 31.039999999999999, 31.52, 20.579999999999998, 28.48, 13.460000000000001, 19.120000000000001, 19.088996153539117, 13.49, 14.99, 32.270000000000003, 28.460000000000001, 25.91, 35.810000000000002, 20.460000000000001, 16.420000000000002, 29.390000000000001, 30.010000000000002, 25.73, 33.969999999999999, 38.640000000000001, 38.049999999999997, 30.472165446086063, 31.77, 41.640000000000001, 27.710000000000001, 29.460000000000001, 30.472165446086063, 27.140000000000001, 39.829999999999998, 39.829999999999998, 30.472165446086063, 36.920000000000002, 38.25, 37.649999999999999, 30.472165446086063, 30.472165446086063, 30.472165446086063, 22.609999999999999, 30.472165446086063, 30.472165446086063, 33.630000000000003, 30.472165446086063, 30.472165446086063, 30.472165446086063, 30.472165446086063, 30.472165446086063, 30.472165446086063, 18.140000000000001, 34.549999999999997, 40.310000000000002, 38.009999999999998, 49.700000000000003, 31.73, 23.75, 42.009999999999998, 45.479999999999997, 36.670000000000002, 27.530000000000001, 37.880000000000003, 16.100000000000001, 27.32, 44.18, 30.390000000000001, 24.09, 15.609999999999999, 22.41, 31.940000000000001, 33.82, 28.170000000000002, 42.450000000000003, 30.039999999999999, 48.640000000000001, 46.689999999999998, 48.579999999999998, 24.809999999999999, 30.579999999999998, 43.5, 36.708959754640411, 29.66, 43.990000000000002, 46.109999999999999, 46.189999999999998, 44.82, 43.740000000000002, 50.390000000000001, 39.700000000000003, 45.100000000000001, 44.810000000000002, 45.75, 44.060000000000002, 44.079999999999998, 45.399999999999999, 46.109999999999999, 42.469999999999999, 47.18, 43.219999999999999, 48.420000000000002, 45.189999999999998, 42.640000000000001, 44.210000000000001, 44.498641253465628, 45.259999999999998, 42, 43.689999999999998, 45.740000000000002, 40.829999999999998, 43.170000000000002, 43.289999999999999, 38.380000000000003, 36.810000000000002, 35.719999999999999, 45.75, 38.32, 43.810000000000002, 23.5, 40.200000000000003, 39.340000000000003, 37.43, 44.498641253465628, 43.659999999999997, 34.93, 44.498641253465628, 42.119999999999997, 25.489999999999998, 44.498641253465628, 26.18, 31.190000000000001, 26.449999999999999, 22.859999999999999, 28.969999999999999, 31.010000000000002, 23.120000000000001, 30.98, 32.420000000000002, 40.789999999999999, 33.475061580241167, 35.960000000000001, 31.949999999999999, 37.219999999999999, 39.560000000000002, 33.890000000000001, 34.780000000000001, 36.229999999999997, 26.219999999999999, 21.02, 29.960000000000001, 28.940000000000001, 21.399999999999999, 34.340000000000003, 30.260000000000002, 33.475061580241167, 33.475061580241167, 27.359999999999999, 37.149999999999999, 20.32, 33.475061580241167, 26.260000000000002, 33.475061580241167, 27.629999999999999, 26.32, 33.475061580241167, 21.18, 25.02, 25.609999999999999, 16.890000000000001, 33.475061580241167, 33.475061580241167, 33.475061580241167, 33.475061580241167, 33.475061580241167, 33.475061580241167, 33.475061580241167, 33.475061580241167, 33.475061580241167, 33.475061580241167, 33.475061580241167, 33.475061580241167, 33.475061580241167, 33.475061580241167, 20.27, 17.120000000000001, 19.43, 19.43, 19.43, 19.43, 21.120000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.82, 18.239999999999998, 18.239999999999998, 18.239999999999998, 14.08, 15.43, 14.42, 18.030000000000001, 14.699999999999999, 15.470000000000001, 15.25, 17.789999999999999, 16.899999999999999, 18.050000000000001, 15.460000000000001, 14.210000000000001, 15.720000000000001, 15.31, 14.119999999999999, 14.890000000000001, 16.719999999999999, 18.359999999999999, 18.392760786031747, 22.100000000000001, 16.800000000000001, 16.800000000000001, 15.74, 14.970000000000001, 13.52, 15.529999999999999, 14.07, 20.440000000000001, 17.690000000000001, 17.690191810594651, 17.690191810594651, 17.690191810594651, 18.079999999999998, 31.840000000000003, 19.079999999999998, 19.079999999999998, 15.43, 16.84, 20.879999999999999, 14.09, 22.68, 14.68, 15.92, 18.879999999999999, 18.25, 19.25, 19.73, 15.789999999999999, 13.130000000000001, 15.539999999999999, 16.608759581295335, 27.57, 14.869999999999999, 24.219999999999999, 30.23, 22.629999999999999, 14.710000000000001, 24.510000000000002, 37.340000000000003, 30.940000000000001, 30.77, 19.890000000000001, 28.149999999999999, 13.390000000000001, 18.82, 18.788333582428752, 13.119999999999999, 14.15, 31.84, 28.27, 25.27, 35.369999999999997, 20.07, 15.74, 29.02, 29.309999999999999, 25.66, 33.240000000000002, 38.380000000000003, 37.280000000000001, 30.041051609110379, 31.489999999999998, 41.5, 27.079999999999998, 27.969999999999999, 30.041051609110379, 26.66, 39.409999999999997, 39.530000000000001, 30.041051609110379, 36.460000000000001, 38.009999999999998, 37.210000000000001, 30.041051609110379, 30.041051609110379, 30.041051609110379, 22.079999999999998, 30.041051609110379, 30.041051609110379, 33.159999999999997, 30.041051609110379, 30.041051609110379, 30.041051609110379, 30.041051609110379, 30.041051609110379, 30.041051609110379, 17.539999999999999, 34.240000000000002, 39.939999999999998, 37.439999999999998, 49.890000000000001, 30.989999999999998, 23, 41.719999999999999, 44.829999999999998, 36.340000000000003, 27.59, 37.490000000000002, 14.73, 26.739999999999998, 43.539999999999999, 23.73, 29.41, 14.56, 21.550000000000001, 31.039999999999999, 33.57, 27.84, 42.229999999999997, 29.59, 48.82, 46.829999999999998, 48.560000000000002, 24.370000000000001, 30.27, 43.329999999999998, 36.560336968738135, 29.300000000000001, 44.100000000000001, 46.140000000000001, 45.880000000000003, 44.899999999999999, 43.609999999999999, 50.25, 39.460000000000001, 45.200000000000003, 45.729999999999997, 44.549999999999997, 43.810000000000002, 43.969999999999999, 45.469999999999999, 46.259999999999998, 46.979999999999997, 42.68, 43.189999999999998, 48.450000000000003, 44.960000000000001, 42.539999999999999, 44.079999999999998, 44.423036119302608, 45.049999999999997, 41.890000000000001, 43.560000000000002, 45.82, 40.829999999999998, 43.240000000000002, 43.049999999999997, 37.82, 36.520000000000003, 35.399999999999999, 45.75, 37.969999999999999, 43.759999999999998, 22.98, 39.689999999999998, 39.060000000000002, 36.979999999999997, 44.423036119302608, 43.079999999999998, 33.869999999999997, 44.423036119302608, 42.159999999999997, 25.140000000000001, 44.423036119302608, 25.710000000000001, 30.75, 26.18, 22.350000000000001, 28.350000000000001, 30.66, 22.870000000000001, 30.57, 31.989999999999998, 40.229999999999997, 33.017491167501376, 35.579999999999998, 31.48, 36.789999999999999, 38.960000000000001, 33.259999999999998, 34.159999999999997, 35.609999999999999, 25.690000000000001, 20.510000000000002, 29.699999999999999, 28.190000000000001, 21.149999999999999, 33.670000000000002, 30.18, 33.017491167501376, 33.017491167501376, 27.039999999999999, 36.670000000000002, 20.219999999999999, 33.017491167501376, 25.530000000000001, 33.017491167501376, 26.960000000000001, 25.68, 33.017491167501376, 21.129999999999999, 24.620000000000001, 24.879999999999999, 16.629999999999999, 33.017491167501376, 33.017491167501376, 33.017491167501376, 33.017491167501376, 33.017491167501376, 33.017491167501376, 33.017491167501376, 33.017491167501376, 33.017491167501376, 33.017491167501376, 33.017491167501376, 33.017491167501376, 33.017491167501376, 33.017491167501376, 20.140000000000001, 16.91, 19.300000000000001, 19.300000000000001, 19.300000000000001, 19.300000000000001, 21.030000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.699999999999999, 18.27, 18.27, 18.27, 14.09, 15.109999999999999, 14.49, 17.460000000000001, 14.85, 15.34, 15.02, 17.640000000000001, 16.899999999999999, 17.850000000000001, 15.32, 14.24, 15.52, 15.050000000000001, 14.130000000000001, 15.039999999999999, 16.620000000000001, 18.199999999999999, 18.232924966519416, 21.960000000000001, 16.670000000000002, 16.670000000000002, 15.779999999999999, 14.83, 13.609999999999999, 15.43, 14.119999999999999, 20.75, 17.649999999999999, 17.650207771850305, 17.650207771850305, 17.650207771850305, 18.07, 31.41, 18.949999999999999, 18.949999999999999, 15.27, 16.57, 20.890000000000001, 14.130000000000001, 21.800000000000001, 14.51, 15.949999999999999, 18.760000000000002, 18.109999999999999, 18.829999999999998, 19.539999999999999, 16.09, 15.44, 13.029999999999999, 16.465256526538539, 27.16, 15.029999999999999, 24.379999999999999, 29.699999999999999, 22.190000000000001, 14.76, 24.149999999999999, 37.030000000000001, 30.48, 30.649999999999999, 19.48, 28.059999999999999, 13.300000000000001, 18.609999999999999, 18.57727263532929, 12.720000000000001, 13.48, 31.41, 28.079999999999998, 24.73, 34.909999999999997, 19.699999999999999, 14.93, 28.649999999999999, 28.559999999999999, 25.600000000000001, 32.600000000000001, 38.119999999999997, 36.590000000000003, 29.614472523707523, 31.280000000000001, 41.340000000000003, 26.5, 26.699999999999999, 29.614472523707523, 26.199999999999999, 39.039999999999999, 39.259999999999998, 29.614472523707523, 36.049999999999997, 37.789999999999999, 36.810000000000002, 29.614472523707523, 29.614472523707523, 29.614472523707523, 21.66, 29.614472523707523, 29.614472523707523, 32.759999999999998, 29.614472523707523, 29.614472523707523, 29.614472523707523, 29.614472523707523, 29.614472523707523, 29.614472523707523, 16.960000000000001, 33.880000000000003, 39.579999999999998, 49.32, 36.810000000000002, 30.289999999999999, 22.510000000000002, 41.439999999999998, 44.210000000000001, 36.520000000000003, 27.68, 37.079999999999998, 13.85, 26.210000000000001, 42.950000000000003, 23.359999999999999, 28.629999999999999, 13.93, 20.719999999999999, 30.18, 33.390000000000001, 27.640000000000001, 42.090000000000003, 29.23, 48.969999999999999, 46.990000000000002, 48.539999999999999, 24.030000000000001, 30.02, 43.219999999999999, 36.487147841544122, 29.02, 44.200000000000003, 46.189999999999998, 45.509999999999998, 44.990000000000002, 43.469999999999999, 50.079999999999998, 39.280000000000001, 45.740000000000002, 45.329999999999998, 44.280000000000001, 43.530000000000001, 43.880000000000003, 45.549999999999997, 46.43, 46.780000000000001, 42.909999999999997, 43.189999999999998, 48.369999999999997, 44.740000000000002, 42.380000000000003, 43.890000000000001, 44.346262362679546, 44.829999999999998, 41.82, 43.409999999999997, 45.899999999999999, 40.700000000000003, 43.259999999999998, 42.789999999999999, 37.359999999999999, 35.100000000000001, 36.329999999999998, 45.75, 37.659999999999997, 43.670000000000002, 22.440000000000001, 38.920000000000002, 39.189999999999998, 36.530000000000001, 44.346262362679546, 42.530000000000001, 32.829999999999998, 44.346262362679546, 42.18, 24.73, 44.346262362679546, 25.23, 30.32, 25.899999999999999, 21.890000000000001, 27.739999999999998, 30.329999999999998, 22.600000000000001, 30.170000000000002, 31.57, 39.659999999999997, 32.567858150709014, 35.210000000000001, 31.050000000000001, 36.390000000000001, 38.340000000000003, 32.57, 33.549999999999997, 35.020000000000003, 25.190000000000001, 20.039999999999999, 29.440000000000001, 27.41, 20.960000000000001, 32.990000000000002, 30.050000000000001, 32.567858150709014, 32.567858150709014, 26.809999999999999, 36.140000000000001, 20.190000000000001, 32.567858150709014, 24.850000000000001, 32.567858150709014, 25.170000000000002, 26.32, 32.567858150709014, 21.050000000000001, 24.260000000000002, 24.210000000000001, 16.41, 32.567858150709014, 32.567858150709014, 32.567858150709014, 32.567858150709014, 32.567858150709014, 32.567858150709014, 32.567858150709014, 32.567858150709014, 32.567858150709014, 32.567858150709014, 32.567858150709014, 32.567858150709014, 32.567858150709014, 32.567858150709014, 20.010000000000002, 16.73, 19.170000000000002, 19.170000000000002, 19.170000000000002, 19.170000000000002, 20.949999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.6, 18.300000000000001, 18.300000000000001, 18.300000000000001, 14.09, 14.82, 14.57, 16.960000000000001, 14.970000000000001, 15.17, 14.83, 17.510000000000002, 16.93, 17.670000000000002, 15.23, 14.4, 15.449999999999999, 14.880000000000001, 14.17, 15.24, 16.629999999999999, 18, 18.033038843243975, 21.800000000000001, 16.559999999999999, 16.559999999999999, 15.83, 14.69, 13.75, 15.31, 14.199999999999999, 21.100000000000001, 17.629999999999999, 17.630233871309724, 17.630233871309724, 17.630233871309724, 18.100000000000001, 30.980000000000004, 18.809999999999999, 18.809999999999999, 15.16, 16.260000000000002, 20.920000000000002, 14.210000000000001, 20.98, 14.35, 15.93, 18.719999999999999, 18, 18.460000000000001, 19.34, 16.32, 15.43, 12.98, 16.33877324239959, 26.73, 15.16, 24.620000000000001, 29.239999999999998, 21.719999999999999, 14.92, 23.91, 36.780000000000001, 30.170000000000002, 30.670000000000002, 19.25, 28.09, 13.199999999999999, 18.449999999999999, 18.415536147418255, 12.27, 12.949999999999999, 30.98, 27.870000000000001, 24.289999999999999, 34.490000000000002, 19.289999999999999, 14.25, 28.300000000000001, 27.829999999999998, 25.52, 32.090000000000003, 37.869999999999997, 35.950000000000003, 29.213246058170327, 31.059999999999999, 41.18, 25.960000000000001, 25.68, 29.213246058170327, 25.77, 38.880000000000003, 39.020000000000003, 29.213246058170327, 36.409999999999997, 35.520000000000003, 37.579999999999998, 29.213246058170327, 29.213246058170327, 29.213246058170327, 21.350000000000001, 29.213246058170327, 29.213246058170327, 32.469999999999999, 29.213246058170327, 29.213246058170327, 29.213246058170327, 29.213246058170327, 29.213246058170327, 29.213246058170327, 16.399999999999999, 33.380000000000003, 39.240000000000002, 48.969999999999999, 36.159999999999997, 29.640000000000001, 22.260000000000002, 41.200000000000003, 43.630000000000003, 36.439999999999998, 27.789999999999999, 36.649999999999999, 13.74, 25.77, 42.439999999999998, 23.02, 26.91, 13.82, 20.449999999999999, 29.48, 33.280000000000001, 27.57, 42.109999999999999, 28.93, 49.090000000000003, 47.189999999999998, 48.600000000000001, 23.800000000000001, 29.859999999999999, 43.299999999999997, 36.504185909479716, 28.739999999999998, 44.270000000000003, 46.18, 45.079999999999998, 45.049999999999997, 43.289999999999999, 49.899999999999999, 39.170000000000002, 45.740000000000002, 45.439999999999998, 44, 43.210000000000001, 43.810000000000002, 45.619999999999997, 46.539999999999999, 46.579999999999998, 43.170000000000002, 43.210000000000001, 48.270000000000003, 44.520000000000003, 42.170000000000002, 43.689999999999998, 44.269311908004049, 44.880000000000003, 41.810000000000002, 43.229999999999997, 46.009999999999998, 40.609999999999999, 43.280000000000001, 42.649999999999999, 37.030000000000001, 34.840000000000003, 36.119999999999997, 45.75, 37.409999999999997, 43.549999999999997, 21.93, 38.869999999999997, 38.810000000000002, 36.109999999999999, 44.269311908004049, 42.009999999999998, 31.969999999999999, 44.269311908004049, 42.130000000000003, 24.27, 44.269311908004049, 24.75, 29.890000000000001, 25.640000000000001, 21.48, 27.129999999999999, 30.02, 22.309999999999999, 29.82, 31.16, 39.060000000000002, 32.126297036943534, 34.850000000000001, 30.649999999999999, 36.009999999999998, 37.689999999999998, 31.850000000000001, 32.960000000000001, 34.439999999999998, 24.710000000000001, 19.550000000000001, 29.190000000000001, 26.609999999999999, 20.82, 32.310000000000002, 29.890000000000001, 32.126297036943534, 32.126297036943534, 26.399999999999999, 35.450000000000003, 20.09, 32.126297036943534, 24.07, 32.126297036943534, 24.739999999999998, 25.73, 32.126297036943534, 20.75, 23.780000000000001, 23.600000000000001, 16.23, 32.126297036943534, 32.126297036943534, 32.126297036943534, 32.126297036943534, 32.126297036943534, 32.126297036943534, 32.126297036943534, 32.126297036943534, 32.126297036943534, 32.126297036943534, 32.126297036943534, 32.126297036943534, 32.126297036943534, 32.126297036943534, 19.870000000000001, 16.559999999999999, 19.059999999999999, 19.059999999999999, 19.059999999999999, 19.059999999999999, 20.870000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.49, 18.309999999999999, 18.309999999999999, 18.309999999999999, 14.06, 14.52, 14.609999999999999, 16.620000000000001, 15.08, 14.99, 14.65, 17.379999999999999, 16.949999999999999, 17.370000000000001, 15.15, 14.59, 15.41, 14.74, 14.27, 15.43, 16.719999999999999, 17.800000000000001, 17.832914227596337, 21.609999999999999, 16.489999999999998, 16.489999999999998, 15.85, 14.56, 13.869999999999999, 15.119999999999999, 14.31, 21.379999999999999, 17.629999999999999, 17.630250116644731, 17.630250116644731, 17.630250116644731, 18.129999999999999, 30.530000000000001, 18.629999999999999, 18.629999999999999, 15.08, 15.94, 20.82, 14.31, 20.25, 14.199999999999999, 18.690000000000001, 15.82, 17.859999999999999, 18.100000000000001, 19.100000000000001, 16.440000000000001, 12.859999999999999, 15.300000000000001, 16.199035492496979, 26.280000000000001, 15.359999999999999, 24.969999999999999, 28.84, 21.239999999999998, 15.15, 23.809999999999999, 36.640000000000001, 30.02, 30.850000000000001, 19.109999999999999, 28.120000000000001, 13.109999999999999, 18.34, 18.30400392649662, 11.9, 12.609999999999999, 30.530000000000001, 27.670000000000002, 23.969999999999999, 34.130000000000003, 18.829999999999998, 13.949999999999999, 27.940000000000001, 27.190000000000001, 25.420000000000002, 31.73, 37.619999999999997, 35.350000000000001, 28.843588446541695, 30.84, 41.030000000000001, 25.510000000000002, 24.870000000000001, 28.843588446541695, 25.379999999999999, 38.960000000000001, 38.840000000000003, 28.843588446541695, 36.109999999999999, 35, 37.409999999999997, 28.843588446541695, 28.843588446541695, 28.843588446541695, 21.109999999999999, 28.843588446541695, 28.843588446541695, 32.299999999999997, 28.843588446541695, 28.843588446541695, 28.843588446541695, 28.843588446541695, 28.843588446541695, 28.843588446541695, 15.800000000000001, 32.82, 38.960000000000001, 48.259999999999998, 35.530000000000001, 29.039999999999999, 22.210000000000001, 41.020000000000003, 43.149999999999999, 36.43, 27.870000000000001, 36.210000000000001, 14.07, 25.390000000000001, 42, 22.699999999999999, 24.690000000000001, 14.16, 20.550000000000001, 29, 33.219999999999999, 27.640000000000001, 42.259999999999998, 28.699999999999999, 49.170000000000002, 47.399999999999999, 48.579999999999998, 23.649999999999999, 31.100000000000001, 43.539999999999999, 36.65151956123789, 28.52, 44.329999999999998, 46.119999999999997, 44.600000000000001, 45.07, 43.049999999999997, 49.700000000000003, 39.119999999999997, 45.75, 45.479999999999997, 43.93, 42.859999999999999, 43.75, 45.670000000000002, 46.579999999999998, 46.409999999999997, 43.380000000000003, 43.240000000000002, 48.170000000000002, 44.289999999999999, 41.93, 44.194294694883524, 43.530000000000001, 45.170000000000002, 41.799999999999997, 43.020000000000003, 40.82, 46.329999999999998, 42.899999999999999, 42.420000000000002, 36.82, 34.670000000000002, 35.880000000000003, 45.740000000000002, 37.210000000000001, 43.43, 21.449999999999999, 38.799999999999997, 38.549999999999997, 35.689999999999998, 44.194294694883524, 41.520000000000003, 31.34, 44.194294694883524, 42.039999999999999, 23.82, 44.194294694883524, 24.280000000000001, 29.460000000000001, 25.420000000000002, 21.109999999999999, 26.539999999999999, 29.710000000000001, 22.030000000000001, 29.510000000000002, 30.77, 38.460000000000001, 31.700567813922163, 34.490000000000002, 30.280000000000001, 35.649999999999999, 37.020000000000003, 31.120000000000001, 33.890000000000001, 32.380000000000003, 24.239999999999998, 28.949999999999999, 19.030000000000001, 25.850000000000001, 20.73, 31.649999999999999, 29.68, 31.700567813922163, 31.700567813922163, 25.77, 34.659999999999997, 19.91, 31.700567813922163, 23.219999999999999, 31.700567813922163, 24.469999999999999, 25.190000000000001, 31.700567813922163, 20.23, 23.219999999999999, 23.09, 16.059999999999999, 31.700567813922163, 31.700567813922163, 31.700567813922163, 31.700567813922163, 31.700567813922163, 31.700567813922163, 31.700567813922163, 31.700567813922163, 31.700567813922163, 31.700567813922163, 31.700567813922163, 31.700567813922163, 31.700567813922163, 31.700567813922163, 19.739999999999998, 16.420000000000002, 18.969999999999999, 18.969999999999999, 18.969999999999999, 18.969999999999999, 20.77],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.369999999999999, 18.32, 18.32, 18.32, 14.01, 14.25, 14.640000000000001, 16.440000000000001, 15.15, 14.84, 14.49, 17.23, 16.969999999999999, 17.079999999999998, 15.07, 14.75, 15.369999999999999, 14.65, 14.42, 15.59, 16.859999999999999, 17.579999999999998, 17.612622904137918, 21.390000000000001, 16.440000000000001, 16.440000000000001, 15.85, 14.470000000000001, 13.99, 14.91, 14.460000000000001, 21.52, 17.640000000000001, 17.640226150047379, 17.640226150047379, 17.640226150047379, 18.09, 30.079999999999998, 18.440000000000001, 18.440000000000001, 14.98, 15.699999999999999, 20.690000000000001, 14.48, 19.620000000000001, 14.08, 18.710000000000001, 15.630000000000001, 17.739999999999998, 17.789999999999999, 18.890000000000001, 16.41, 12.710000000000001, 15.17, 16.071262028094957, 25.82, 15.699999999999999, 25.420000000000002, 28.539999999999999, 20.809999999999999, 15.43, 23.859999999999999, 36.600000000000001, 30, 31.170000000000002, 19.100000000000001, 28.210000000000001, 13.01, 18.309999999999999, 18.273065254774917, 11.73, 12.58, 30.079999999999998, 27.48, 23.75, 33.780000000000001, 18.390000000000001, 13.800000000000001, 27.579999999999998, 26.620000000000001, 25.34, 31.539999999999999, 37.359999999999999, 34.780000000000001, 28.511846958788489, 30.640000000000001, 40.899999999999999, 25.16, 24.27, 28.511846958788489, 25.039999999999999, 39.090000000000003, 38.700000000000003, 28.511846958788489, 35.939999999999998, 34.579999999999998, 37.270000000000003, 28.511846958788489, 28.511846958788489, 28.511846958788489, 28.511846958788489, 20.989999999999998, 28.511846958788489, 32.229999999999997, 28.511846958788489, 28.511846958788489, 28.511846958788489, 28.511846958788489, 28.511846958788489, 28.511846958788489, 15.199999999999999, 32.200000000000003, 38.780000000000001, 47.43, 34.979999999999997, 28.5, 22.329999999999998, 40.880000000000003, 42.75, 36.909999999999997, 27.949999999999999, 35.780000000000001, 14.26, 25.07, 41.609999999999999, 23.02, 22.329999999999998, 14.52, 20.149999999999999, 28.609999999999999, 33.219999999999999, 27.829999999999998, 42.329999999999998, 28.489999999999998, 49.189999999999998, 47.710000000000001, 48.530000000000001, 23.629999999999999, 32.409999999999997, 43.920000000000002, 36.822202648636988, 28.43, 44.359999999999999, 46.130000000000003, 44.090000000000003, 45.020000000000003, 42.75, 49.490000000000002, 39.090000000000003, 45.75, 45.450000000000003, 44.030000000000001, 42.479999999999997, 43.700000000000003, 45.68, 46.549999999999997, 46.240000000000002, 43.450000000000003, 43.259999999999998, 48.07, 44.030000000000001, 41.740000000000002, 44.108588735205487, 43.409999999999997, 45.490000000000002, 41.759999999999998, 42.789999999999999, 41.130000000000003, 46.890000000000001, 42.619999999999997, 42.229999999999997, 36.689999999999998, 34.57, 45.700000000000003, 35.649999999999999, 37.030000000000001, 43.289999999999999, 38.689999999999998, 20.989999999999998, 38.299999999999997, 35.280000000000001, 44.108588735205487, 41.07, 30.75, 44.108588735205487, 42.079999999999998, 23.57, 44.108588735205487, 23.809999999999999, 29.030000000000001, 25.23, 20.77, 25.969999999999999, 29.399999999999999, 21.760000000000002, 29.219999999999999, 30.370000000000001, 37.869999999999997, 31.288777085622311, 34.140000000000001, 29.940000000000001, 35.280000000000001, 36.340000000000003, 30.399999999999999, 33.390000000000001, 31.829999999999998, 23.800000000000001, 28.73, 18.5, 25.149999999999999, 20.670000000000002, 31.039999999999999, 29.440000000000001, 31.288777085622311, 31.288777085622311, 25.16, 33.920000000000002, 19.690000000000001, 31.288777085622311, 22.469999999999999, 31.288777085622311, 24.309999999999999, 24.719999999999999, 31.288777085622311, 19.739999999999998, 22.649999999999999, 22.699999999999999, 15.869999999999999, 31.288777085622311, 31.288777085622311, 31.288777085622311, 31.288777085622311, 31.288777085622311, 31.288777085622311, 31.288777085622311, 31.288777085622311, 31.288777085622311, 31.288777085622311, 31.288777085622311, 31.288777085622311, 31.288777085622311, 31.288777085622311, 19.640000000000001, 16.329999999999998, 18.940000000000001, 18.940000000000001, 18.940000000000001, 18.940000000000001, 20.629999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.27, 18.309999999999999, 18.309999999999999, 18.309999999999999, 13.949999999999999, 14.01, 14.640000000000001, 16.309999999999999, 15.19, 14.68, 14.380000000000001, 17.039999999999999, 16.98, 16.920000000000002, 15.02, 14.92, 15.33, 14.58, 14.619999999999999, 15.74, 17.02, 17.350000000000001, 17.383225054907335, 21.25, 16.420000000000002, 16.420000000000002, 15.800000000000001, 14.44, 14.119999999999999, 14.73, 14.609999999999999, 21.539999999999999, 17.66, 17.660151527384059, 17.660151527384059, 17.660151527384059, 17.960000000000001, 29.620000000000001, 18.289999999999999, 18.289999999999999, 14.92, 15.48, 20.579999999999998, 14.710000000000001, 19.09, 14.119999999999999, 18.780000000000001, 15.41, 17.670000000000002, 17.530000000000001, 18.73, 16.25, 12.51, 15.119999999999999, 16.027110791211967, 25.379999999999999, 16.07, 25.920000000000002, 28.399999999999999, 20.43, 15.73, 24.02, 36.57, 30.079999999999998, 31.57, 19.190000000000001, 28.449999999999999, 12.9, 18.329999999999998, 18.292788002837028, 11.69, 12.67, 29.620000000000001, 27.280000000000001, 23.609999999999999, 33.420000000000002, 18.010000000000002, 13.529999999999999, 27.23, 26.109999999999999, 25.260000000000002, 31.359999999999999, 37.100000000000001, 34.210000000000001, 28.214415277059782, 30.48, 40.780000000000001, 24.850000000000001, 23.82, 24.719999999999999, 28.214415277059782, 39.25, 38.560000000000002, 28.214415277059782, 35.789999999999999, 34.07, 37.100000000000001, 28.214415277059782, 28.214415277059782, 28.214415277059782, 28.214415277059782, 20.879999999999999, 28.214415277059782, 32.07, 28.214415277059782, 28.214415277059782, 28.214415277059782, 28.214415277059782, 28.214415277059782, 28.214415277059782, 14.68, 31.530000000000001, 38.659999999999997, 46.869999999999997, 34.479999999999997, 28.02, 22.550000000000001, 40.700000000000003, 42.380000000000003, 38.43, 28.010000000000002, 35.469999999999999, 14.33, 24.800000000000001, 41.25, 22.149999999999999, 21.960000000000001, 14.68, 19.899999999999999, 28.23, 33.270000000000003, 28.16, 42.329999999999998, 28.300000000000001, 49.18, 47.969999999999999, 48.439999999999998, 23.780000000000001, 32.100000000000001, 44.060000000000002, 36.943477349539911, 28.420000000000002, 44.380000000000003, 46.170000000000002, 43.57, 44.969999999999999, 42.399999999999999, 49.240000000000002, 39.049999999999997, 45.759999999999998, 45.350000000000001, 42.090000000000003, 44.039999999999999, 43.630000000000003, 45.68, 46.439999999999998, 46.039999999999999, 43.369999999999997, 43.270000000000003, 47.990000000000002, 43.799999999999997, 44.006104093378411, 41.590000000000003, 43.310000000000002, 45.829999999999998, 41.689999999999998, 42.509999999999998, 41.490000000000002, 47.490000000000002, 42.719999999999999, 42.090000000000003, 36.57, 34.490000000000002, 45.619999999999997, 35.439999999999998, 36.859999999999999, 43.149999999999999, 38.640000000000001, 20.550000000000001, 38.07, 34.859999999999999, 44.006104093378411, 40.630000000000003, 30.16, 44.006104093378411, 42.229999999999997, 23.48, 44.006104093378411, 23.34, 28.579999999999998, 25.059999999999999, 20.469999999999999, 25.420000000000002, 29.09, 21.52, 28.949999999999999, 29.949999999999999, 37.280000000000001, 30.884346354088695, 33.789999999999999, 34.920000000000002, 29.629999999999999, 35.640000000000001, 29.690000000000001, 32.93, 31.329999999999998, 23.379999999999999, 28.510000000000002, 17.93, 24.449999999999999, 20.609999999999999, 30.600000000000001, 29.140000000000001, 30.884346354088695, 30.884346354088695, 24.510000000000002, 33.189999999999998, 19.43, 30.884346354088695, 21.82, 30.884346354088695, 24.18, 24.329999999999998, 30.884346354088695, 19.350000000000001, 22.120000000000001, 22.25, 15.65, 30.884346354088695, 30.884346354088695, 30.884346354088695, 30.884346354088695, 30.884346354088695, 30.884346354088695, 30.884346354088695, 30.884346354088695, 30.884346354088695, 30.884346354088695, 30.884346354088695, 30.884346354088695, 30.884346354088695, 30.884346354088695, 19.539999999999999, 16.27, 18.93, 18.93, 18.93, 18.93, 20.440000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.210000000000001, 18.260000000000002, 18.260000000000002, 18.260000000000002, 13.859999999999999, 13.81, 14.609999999999999, 16.190000000000001, 15.19, 14.470000000000001, 14.300000000000001, 16.829999999999998, 16.989999999999998, 16.75, 14.99, 15.1, 15.32, 14.529999999999999, 14.82, 15.890000000000001, 17.190000000000001, 17.129999999999999, 17.164543399632773, 21.190000000000001, 16.399999999999999, 16.399999999999999, 15.73, 14.460000000000001, 14.140000000000001, 14.56, 14.75, 21.48, 17.670000000000002, 17.6700913797456, 17.6700913797456, 17.6700913797456, 17.850000000000001, 29.140000000000001, 18.129999999999999, 18.129999999999999, 14.890000000000001, 15.300000000000001, 20.43, 14.960000000000001, 18.609999999999999, 14.25, 19, 15.210000000000001, 17.829999999999998, 17.309999999999999, 18.620000000000001, 15.94, 12.279999999999999, 15.06, 16.086843206612116, 24.949999999999999, 16.460000000000001, 26.449999999999999, 28.41, 20.100000000000001, 24.210000000000001, 16.02, 36.590000000000003, 30.23, 32, 19.390000000000001, 28.82, 12.789999999999999, 18.359999999999999, 18.322369537914891, 11.66, 12.76, 29.140000000000001, 27.079999999999998, 23.510000000000002, 33.039999999999999, 17.690000000000001, 13.130000000000001, 26.899999999999999, 25.620000000000001, 25.149999999999999, 31.109999999999999, 36.82, 33.630000000000003, 27.895797199061477, 30.350000000000001, 40.649999999999999, 24.539999999999999, 23.379999999999999, 24.420000000000002, 27.895797199061477, 39.439999999999998, 38.460000000000001, 27.895797199061477, 35.689999999999998, 33.560000000000002, 36.960000000000001, 27.895797199061477, 27.895797199061477, 27.895797199061477, 27.895797199061477, 20.699999999999999, 27.895797199061477, 31.800000000000001, 27.895797199061477, 27.895797199061477, 27.895797199061477, 27.895797199061477, 27.895797199061477, 27.895797199061477, 14.210000000000001, 30.870000000000001, 38.539999999999999, 46.229999999999997, 33.960000000000001, 27.550000000000001, 22.969999999999999, 40.5, 42.030000000000001, 40.259999999999998, 35.32, 28.050000000000001, 14.33, 24.59, 40.920000000000002, 22.149999999999999, 21.859999999999999, 14.4, 20.239999999999998, 27.859999999999999, 33.359999999999999, 28.57, 42.200000000000003, 28.140000000000001, 49.18, 48.07, 48.329999999999998, 24, 31.800000000000001, 43.909999999999997, 37.049814889296627, 28.390000000000001, 44.369999999999997, 46.210000000000001, 43.039999999999999, 44.909999999999997, 42, 48.920000000000002, 38.979999999999997, 45.759999999999998, 45.18, 41.700000000000003, 43.890000000000001, 43.460000000000001, 45.640000000000001, 46.25, 45.789999999999999, 43.170000000000002, 43.240000000000002, 47.899999999999999, 43.560000000000002, 41.409999999999997, 43.86192287244976, 43.229999999999997, 46.170000000000002, 41.579999999999998, 42.18, 41.780000000000001, 48.270000000000003, 42.729999999999997, 42.119999999999997, 36.439999999999998, 34.380000000000003, 45.5, 35.280000000000001, 36.740000000000002, 42.969999999999999, 38.640000000000001, 20.059999999999999, 37.789999999999999, 34.390000000000001, 43.86192287244976, 40.219999999999999, 29.59, 43.86192287244976, 42.299999999999997, 23.390000000000001, 43.86192287244976, 22.899999999999999, 28.100000000000001, 24.890000000000001, 20.210000000000001, 24.890000000000001, 28.780000000000001, 21.32, 28.670000000000002, 29.5, 36.710000000000001, 30.481806441962444, 33.43, 34.549999999999997, 29.34, 34.920000000000002, 29, 30.890000000000001, 32.509999999999998, 22.98, 28.280000000000001, 17.309999999999999, 23.789999999999999, 20.530000000000001, 30.329999999999998, 28.82, 30.481806441962444, 30.481806441962444, 23.870000000000001, 32.469999999999999, 19.129999999999999, 30.481806441962444, 21.23, 30.481806441962444, 24.07, 30.481806441962444, 23.969999999999999, 19.050000000000001, 21.66, 22.030000000000001, 15.390000000000001, 30.481806441962444, 30.481806441962444, 30.481806441962444, 30.481806441962444, 30.481806441962444, 30.481806441962444, 30.481806441962444, 30.481806441962444, 30.481806441962444, 30.481806441962444, 30.481806441962444, 30.481806441962444, 30.481806441962444, 30.481806441962444, 19.420000000000002, 16.239999999999998, 18.91, 18.91, 18.91, 18.91, 20.23],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.199999999999999, 18.190000000000001, 18.190000000000001, 18.190000000000001, 13.74, 13.66, 14.550000000000001, 16.120000000000001, 15.16, 14.24, 14.31, 16.600000000000001, 16.98, 16.57, 14.970000000000001, 15.27, 15.32, 14.550000000000001, 14.98, 16.010000000000002, 17.350000000000001, 16.920000000000002, 16.954719772785637, 20.989999999999998, 16.359999999999999, 16.359999999999999, 15.720000000000001, 14.48, 14.109999999999999, 14.43, 14.869999999999999, 21.359999999999999, 17.719999999999999, 17.720040759232024, 17.720040759232024, 17.720040759232024, 17.800000000000001, 28.629999999999999, 17.98, 17.98, 14.869999999999999, 15.039999999999999, 20.18, 15.17, 18.170000000000002, 14.31, 19.379999999999999, 15.09, 18.199999999999999, 17.120000000000001, 18.52, 15.5, 12.09, 14.92, 16.189916052172034, 24.609999999999999, 16.850000000000001, 27, 28.52, 19.829999999999998, 24.41, 16.289999999999999, 36.630000000000003, 30.420000000000002, 32.469999999999999, 29.289999999999999, 19.620000000000001, 12.67, 18.359999999999999, 18.32194053196072, 11.6, 12.869999999999999, 28.629999999999999, 26.879999999999999, 23.420000000000002, 32.640000000000001, 17.399999999999999, 12.710000000000001, 26.600000000000001, 25.18, 24.989999999999998, 30.890000000000001, 36.539999999999999, 33.130000000000003, 27.598739763689263, 30.23, 40.509999999999998, 22.940000000000001, 24.199999999999999, 24.109999999999999, 27.598739763689263, 39.619999999999997, 38.380000000000003, 27.598739763689263, 35.640000000000001, 33.07, 36.770000000000003, 27.598739763689263, 27.598739763689263, 27.598739763689263, 20.600000000000001, 27.598739763689263, 27.598739763689263, 31.629999999999999, 27.598739763689263, 27.598739763689263, 27.598739763689263, 27.598739763689263, 27.598739763689263, 27.598739763689263, 13.77, 30.199999999999999, 38.43, 45.789999999999999, 33.380000000000003, 27.030000000000001, 23.469999999999999, 40.259999999999998, 41.700000000000003, 41.090000000000003, 35.07, 14.32, 28.129999999999999, 24.850000000000001, 40.630000000000003, 22.27, 21.710000000000001, 13.9, 20.370000000000001, 27.52, 33.479999999999997, 41.979999999999997, 29, 27.989999999999998, 49.140000000000001, 48.119999999999997, 48.350000000000001, 24.239999999999998, 31.550000000000001, 43.75, 37.148105939485681, 28.280000000000001, 44.310000000000002, 46.25, 42.520000000000003, 44.850000000000001, 41.57, 48.5, 38.859999999999999, 45.759999999999998, 44.960000000000001, 41.329999999999998, 43.619999999999997, 43.259999999999998, 45.549999999999997, 45.990000000000002, 45.5, 43.140000000000001, 42.869999999999997, 47.82, 43.329999999999998, 41.170000000000002, 43.159999999999997, 43.684974470226145, 46.799999999999997, 41.439999999999998, 41.810000000000002, 42, 42.630000000000003, 48.75, 42.219999999999999, 36.329999999999998, 45.359999999999999, 34.240000000000002, 35.130000000000003, 36.659999999999997, 42.759999999999998, 38.68, 19.52, 37.460000000000001, 33.880000000000003, 43.684974470226145, 39.850000000000001, 29.059999999999999, 43.684974470226145, 42.270000000000003, 23.329999999999998, 43.684974470226145, 22.5, 27.609999999999999, 24.73, 19.969999999999999, 24.370000000000001, 28.469999999999999, 21.140000000000001, 28.41, 29.02, 36.159999999999997, 30.088980388054821, 33.07, 34.189999999999998, 29.030000000000001, 34.200000000000003, 28.370000000000001, 30.510000000000002, 32.109999999999999, 22.59, 28.050000000000001, 16.649999999999999, 23.27, 20.43, 30.079999999999998, 28.48, 30.088980388054821, 23.27, 30.088980388054821, 31.77, 18.800000000000001, 30.088980388054821, 20.649999999999999, 30.088980388054821, 23.960000000000001, 18.800000000000001, 30.088980388054821, 23.649999999999999, 21.16, 21.75, 15.109999999999999, 30.088980388054821, 30.088980388054821, 30.088980388054821, 30.088980388054821, 30.088980388054821, 30.088980388054821, 30.088980388054821, 30.088980388054821, 30.088980388054821, 30.088980388054821, 30.088980388054821, 30.088980388054821, 30.088980388054821, 30.088980388054821, 19.300000000000001, 16.239999999999998, 18.899999999999999, 18.899999999999999, 18.899999999999999, 18.899999999999999, 20.030000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.27, 18.07, 18.07, 18.07, 13.59, 13.57, 14.48, 16.079999999999998, 15.1, 14.050000000000001, 14.369999999999999, 16.359999999999999, 16.960000000000001, 16.359999999999999, 14.99, 15.43, 15.4, 14.65, 15.18, 16.149999999999999, 17.510000000000002, 16.75, 16.784845415141636, 20.82, 16.289999999999999, 16.289999999999999, 15.77, 14.51, 14.09, 14.33, 14.960000000000001, 21.199999999999999, 17.800000000000001, 17.799974363720537, 17.799974363720537, 17.799974363720537, 17.75, 28.120000000000005, 17.870000000000001, 17.870000000000001, 14.880000000000001, 14.859999999999999, 19.870000000000001, 15.33, 17.789999999999999, 14.27, 19.77, 15.02, 18.59, 16.91, 18.43, 15.17, 12.06, 14.67, 16.261239146942195, 24.32, 17.210000000000001, 27.550000000000001, 28.670000000000002, 19.59, 24.579999999999998, 16.52, 36.630000000000003, 30.629999999999999, 32.920000000000002, 29.84, 19.859999999999999, 12.550000000000001, 18.350000000000001, 18.312348516323251, 11.66, 13.029999999999999, 28.120000000000001, 26.66, 23.309999999999999, 32.259999999999998, 17.109999999999999, 12.44, 26.289999999999999, 24.75, 24.77, 30.68, 36.229999999999997, 32.729999999999997, 27.293923580051334, 30.09, 40.350000000000001, 22.59, 23.870000000000001, 23.789999999999999, 27.293923580051334, 39.740000000000002, 38.310000000000002, 27.293923580051334, 35.68, 32.649999999999999, 36.5, 27.293923580051334, 27.293923580051334, 27.293923580051334, 20.59, 27.293923580051334, 27.293923580051334, 27.293923580051334, 31.510000000000002, 27.293923580051334, 27.293923580051334, 27.293923580051334, 27.293923580051334, 27.293923580051334, 13.369999999999999, 29.52, 38.310000000000002, 45.520000000000003, 32.729999999999997, 26.460000000000001, 23.789999999999999, 39.960000000000001, 41.409999999999997, 40.700000000000003, 34.700000000000003, 14.33, 28.239999999999998, 25.579999999999998, 22.16, 40.359999999999999, 21.59, 13.69, 20.190000000000001, 27.140000000000001, 33.530000000000001, 41.770000000000003, 29.440000000000001, 27.82, 49.090000000000003, 48.109999999999999, 48.340000000000003, 24.48, 31.260000000000002, 43.549999999999997, 37.234236289202059, 28.370000000000001, 44.219999999999999, 46.259999999999998, 42.020000000000003, 44.75, 41.109999999999999, 47.950000000000003, 38.68, 45.719999999999999, 44.710000000000001, 40.990000000000002, 43.340000000000003, 43.140000000000001, 45.409999999999997, 45.659999999999997, 45.189999999999998, 42.979999999999997, 42.520000000000003, 47.75, 43.100000000000001, 40.859999999999999, 43.100000000000001, 47.479999999999997, 43.47372204581999, 41.289999999999999, 41.409999999999997, 42.109999999999999, 42.479999999999997, 48.700000000000003, 42.170000000000002, 36.270000000000003, 45.170000000000002, 34.049999999999997, 34.990000000000002, 36.630000000000003, 42.5, 38.770000000000003, 18.989999999999998, 37.100000000000001, 33.340000000000003, 43.47372204581999, 39.5, 28.609999999999999, 43.47372204581999, 42.119999999999997, 23.329999999999998, 43.47372204581999, 22.109999999999999, 27.129999999999999, 24.579999999999998, 19.719999999999999, 23.879999999999999, 28.219999999999999, 20.98, 28.149999999999999, 28.52, 35.619999999999997, 29.706230768739953, 32.729999999999997, 33.840000000000003, 28.73, 33.5, 30.190000000000001, 31.739999999999998, 27.77, 22.210000000000001, 27.800000000000001, 15.99, 22.850000000000001, 20.309999999999999, 29.879999999999999, 28.140000000000001, 29.706230768739953, 22.649999999999999, 29.706230768739953, 31.109999999999999, 18.460000000000001, 29.706230768739953, 20.120000000000001, 29.706230768739953, 23.960000000000001, 18.57, 29.706230768739953, 23.34, 20.640000000000001, 21.219999999999999, 14.91, 29.706230768739953, 29.706230768739953, 29.706230768739953, 29.706230768739953, 29.706230768739953, 29.706230768739953, 29.706230768739953, 29.706230768739953, 29.706230768739953, 29.706230768739953, 29.706230768739953, 29.706230768739953, 29.706230768739953, 29.706230768739953, 19.170000000000002, 16.23, 18.890000000000001, 18.890000000000001, 18.890000000000001, 18.890000000000001, 19.870000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.390000000000001, 17.960000000000001, 17.960000000000001, 17.960000000000001, 13.43, 13.5, 14.42, 16.07, 15.01, 13.9, 14.42, 16.149999999999999, 16.949999999999999, 16.190000000000001, 15.08, 15.58, 15.539999999999999, 14.77, 15.390000000000001, 16.280000000000001, 17.629999999999999, 16.629999999999999, 16.66563987727255, 20.760000000000002, 16.199999999999999, 16.199999999999999, 15.859999999999999, 14.529999999999999, 14.1, 14.279999999999999, 15.050000000000001, 20.989999999999998, 17.879999999999999, 17.879906736109717, 17.879906736109717, 17.879906736109717, 17.699999999999999, 27.600000000000001, 17.780000000000001, 17.780000000000001, 14.94, 14.789999999999999, 19.530000000000001, 15.44, 17.440000000000001, 14.18, 20.129999999999999, 14.98, 18.940000000000001, 16.68, 18.329999999999998, 14.699999999999999, 12.17, 14.35, 16.299543337163151, 24.129999999999999, 17.469999999999999, 28.059999999999999, 28.84, 19.390000000000001, 24.620000000000001, 16.699999999999999, 36.590000000000003, 30.850000000000001, 33.329999999999998, 30.449999999999999, 20.07, 12.4, 18.399999999999999, 18.363251810246073, 11.869999999999999, 13.27, 27.600000000000001, 26.440000000000001, 23.170000000000002, 31.920000000000002, 16.84, 12.289999999999999, 25.98, 24.34, 24.52, 30.440000000000001, 35.920000000000002, 32.369999999999997, 26.986963064170077, 29.91, 40.170000000000002, 22.300000000000001, 23.539999999999999, 23.489999999999998, 26.986963064170077, 39.810000000000002, 38.25, 26.986963064170077, 35.780000000000001, 32.32, 36.219999999999999, 26.986963064170077, 26.986963064170077, 26.986963064170077, 20.579999999999998, 26.986963064170077, 26.986963064170077, 26.986963064170077, 31.48, 26.986963064170077, 26.986963064170077, 26.986963064170077, 26.986963064170077, 26.986963064170077, 13.050000000000001, 28.829999999999998, 38.119999999999997, 45.119999999999997, 32.060000000000002, 25.82, 23.969999999999999, 39.619999999999997, 41.119999999999997, 39.729999999999997, 34.329999999999998, 14.4, 28.300000000000001, 26.289999999999999, 22.350000000000001, 40.140000000000001, 21.510000000000002, 13.77, 19.989999999999998, 26.719999999999999, 33.5, 41.530000000000001, 29.850000000000001, 27.640000000000001, 49.060000000000002, 48.030000000000001, 48.229999999999997, 24.699999999999999, 30.879999999999999, 43.310000000000002, 37.291781234469624, 28.59, 44.07, 46.280000000000001, 41.530000000000001, 44.590000000000003, 40.600000000000001, 47.329999999999998, 45.640000000000001, 38.43, 44.460000000000001, 40.670000000000002, 43.060000000000002, 43.060000000000002, 45.219999999999999, 45.259999999999998, 44.859999999999999, 42.789999999999999, 47.659999999999997, 42.149999999999999, 42.880000000000003, 40.509999999999998, 43.039999999999999, 47.719999999999999, 43.222605921841748, 41.109999999999999, 40.990000000000002, 42.100000000000001, 42.32, 48.640000000000001, 41.990000000000002, 36.25, 44.939999999999998, 33.829999999999998, 34.810000000000002, 36.630000000000003, 42.18, 38.859999999999999, 18.489999999999998, 36.729999999999997, 32.770000000000003, 43.222605921841748, 39.18, 28.239999999999998, 43.222605921841748, 41.869999999999997, 23.370000000000001, 43.222605921841748, 21.75, 26.66, 24.41, 19.420000000000002, 23.359999999999999, 28.18, 20.77, 27.859999999999999, 28.02, 35.079999999999998, 32.390000000000001, 29.329748193513062, 33.530000000000001, 28.440000000000001, 32.829999999999998, 29.91, 31.390000000000001, 27.239999999999998, 21.870000000000001, 27.539999999999999, 15.32, 22.390000000000001, 20.170000000000002, 29.719999999999999, 27.800000000000001, 29.329748193513062, 22.010000000000002, 29.329748193513062, 30.5, 18.140000000000001, 29.329748193513062, 19.66, 29.329748193513062, 24.030000000000001, 18.329999999999998, 29.329748193513062, 23.030000000000001, 20.190000000000001, 20.899999999999999, 29.329748193513062, 14.869999999999999, 29.329748193513062, 29.329748193513062, 29.329748193513062, 29.329748193513062, 29.329748193513062, 29.329748193513062, 29.329748193513062, 29.329748193513062, 29.329748193513062, 29.329748193513062, 29.329748193513062, 29.329748193513062, 29.329748193513062, 19.059999999999999, 16.170000000000002, 18.850000000000001, 18.850000000000001, 18.850000000000001, 18.850000000000001, 19.739999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.52, 17.84, 17.84, 17.84, 13.26, 13.41, 14.35, 16.039999999999999, 14.859999999999999, 13.76, 14.43, 15.94, 16.93, 16.100000000000001, 15.199999999999999, 15.73, 15.68, 14.880000000000001, 15.52, 16.359999999999999, 17.710000000000001, 16.510000000000002, 16.546473052033711, 20.690000000000001, 16.07, 16.07, 15.949999999999999, 14.539999999999999, 14.1, 14.25, 15.130000000000001, 20.75, 17.91, 17.90984799413636, 17.90984799413636, 17.90984799413636, 17.620000000000001, 27.09, 17.640000000000001, 17.640000000000001, 14.99, 14.76, 19.16, 15.460000000000001, 17.079999999999998, 14.09, 20.449999999999999, 14.960000000000001, 19.239999999999998, 16.420000000000002, 18.260000000000002, 14.1, 12.300000000000001, 14.029999999999999, 16.325051036808951, 24.039999999999999, 17.609999999999999, 28.5, 29.09, 19.23, 24.550000000000001, 16.780000000000001, 36.549999999999997, 31.030000000000001, 33.729999999999997, 31.109999999999999, 20.219999999999999, 12.24, 18.390000000000001, 18.354268748783998, 12.050000000000001, 13.59, 27.09, 26.199999999999999, 23.02, 31.600000000000001, 16.579999999999998, 12.210000000000001, 25.670000000000002, 23.969999999999999, 24.239999999999998, 30.190000000000001, 35.590000000000003, 32.039999999999999, 26.683165161435056, 29.690000000000001, 39.979999999999997, 22.050000000000001, 23.23, 39.840000000000003, 23.219999999999999, 26.683165161435056, 38.18, 26.683165161435056, 35.950000000000003, 31.960000000000001, 35.869999999999997, 26.683165161435056, 26.683165161435056, 26.683165161435056, 20.629999999999999, 26.683165161435056, 26.683165161435056, 26.683165161435056, 31.489999999999998, 26.683165161435056, 26.683165161435056, 26.683165161435056, 26.683165161435056, 26.683165161435056, 12.76, 28.170000000000002, 37.859999999999999, 44.710000000000001, 31.420000000000002, 25.09, 24.109999999999999, 39.25, 40.82, 38.219999999999999, 33.93, 14.529999999999999, 28.27, 26.989999999999998, 23.010000000000002, 39.969999999999999, 21.140000000000001, 13.99, 19.93, 26.32, 33.439999999999998, 41.329999999999998, 30.210000000000001, 27.48, 49.020000000000003, 47.93, 48.079999999999998, 24.859999999999999, 30.420000000000002, 43.039999999999999, 37.338501135713599, 28.68, 43.890000000000001, 46.350000000000001, 41.079999999999998, 44.390000000000001, 40.079999999999998, 46.759999999999998, 45.549999999999997, 38.149999999999999, 44.259999999999998, 40.359999999999999, 42.759999999999998, 42.969999999999999, 44.990000000000002, 44.799999999999997, 44.5, 42.57, 47.549999999999997, 41.799999999999997, 42.649999999999999, 40.149999999999999, 42.950000000000003, 47.530000000000001, 42.950084295082064, 40.920000000000002, 40.57, 42.030000000000001, 42.109999999999999, 48.579999999999998, 41.560000000000002, 36.240000000000002, 44.649999999999999, 33.619999999999997, 36.630000000000003, 34.600000000000001, 41.799999999999997, 38.909999999999997, 17.989999999999998, 36.329999999999998, 32.200000000000003, 42.950084295082064, 38.909999999999997, 27.859999999999999, 42.950084295082064, 41.539999999999999, 23.359999999999999, 42.950084295082064, 21.440000000000001, 26.190000000000001, 24.190000000000001, 19.100000000000001, 22.82, 28.399999999999999, 20.489999999999998, 27.460000000000001, 27.469999999999999, 34.560000000000002, 32.049999999999997, 28.935928258637276, 33.229999999999997, 28.16, 32.200000000000003, 29.66, 31.050000000000001, 26.789999999999999, 21.559999999999999, 27.27, 14.720000000000001, 21.899999999999999, 19.870000000000001, 29.100000000000001, 27.460000000000001, 28.935928258637276, 21.370000000000001, 29.940000000000001, 28.935928258637276, 17.859999999999999, 28.935928258637276, 19.27, 28.935928258637276, 24.100000000000001, 18.07, 28.935928258637276, 22.75, 19.77, 20.620000000000001, 28.935928258637276, 14.9, 28.935928258637276, 28.935928258637276, 28.935928258637276, 28.935928258637276, 28.935928258637276, 28.935928258637276, 28.935928258637276, 28.935928258637276, 28.935928258637276, 28.935928258637276, 28.935928258637276, 28.935928258637276, 28.935928258637276, 18.91, 16.09, 18.780000000000001, 18.780000000000001, 18.780000000000001, 18.780000000000001, 19.57],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.640000000000001, 17.699999999999999, 17.699999999999999, 17.699999999999999, 13.06, 13.289999999999999, 14.27, 16.02, 14.65, 13.630000000000001, 14.43, 15.75, 16.870000000000001, 16.030000000000001, 15.289999999999999, 15.859999999999999, 15.789999999999999, 14.970000000000001, 15.609999999999999, 16.43, 17.739999999999998, 16.390000000000001, 16.428142878110371, 20.710000000000001, 15.880000000000001, 15.880000000000001, 16, 14.550000000000001, 14.06, 14.24, 15.19, 20.460000000000001, 17.870000000000001, 17.869782381580428, 17.869782381580428, 17.869782381580428, 17.460000000000001, 26.59, 17.440000000000001, 17.440000000000001, 15.039999999999999, 14.74, 18.850000000000001, 15.4, 16.75, 14.06, 20.710000000000001, 14.94, 19.48, 16.219999999999999, 18.219999999999999, 13.67, 12.449999999999999, 13.68, 16.364860360048844, 23.899999999999999, 17.66, 28.890000000000001, 29.420000000000002, 19.109999999999999, 24.41, 36.530000000000001, 16.809999999999999, 31.170000000000002, 34.100000000000001, 31.75, 20.300000000000001, 12.07, 18.260000000000002, 18.225777963930149, 12.19, 13.970000000000001, 26.59, 25.960000000000001, 22.859999999999999, 31.27, 16.329999999999998, 12.210000000000001, 25.390000000000001, 23.620000000000001, 23.93, 29.920000000000002, 35.25, 31.710000000000001, 26.388747019252982, 29.440000000000001, 39.780000000000001, 21.870000000000001, 22.93, 39.829999999999998, 22.969999999999999, 26.388747019252982, 38.079999999999998, 26.388747019252982, 36.119999999999997, 31.59, 35.490000000000002, 26.388747019252982, 26.388747019252982, 26.388747019252982, 20.760000000000002, 26.388747019252982, 26.388747019252982, 26.388747019252982, 31.539999999999999, 26.388747019252982, 26.388747019252982, 26.388747019252982, 26.388747019252982, 26.388747019252982, 12.449999999999999, 27.559999999999999, 37.579999999999998, 44.289999999999999, 30.809999999999999, 24.300000000000001, 24.109999999999999, 38.859999999999999, 40.5, 36.200000000000003, 33.5, 14.710000000000001, 28.25, 27.629999999999999, 39.759999999999998, 24.09, 20.829999999999998, 14.59, 20.07, 25.989999999999998, 33.340000000000003, 41.229999999999997, 30.469999999999999, 27.300000000000001, 48.990000000000002, 47.799999999999997, 47.939999999999998, 24.940000000000001, 29.920000000000002, 42.719999999999999, 37.368607205572154, 28.75, 43.710000000000001, 46.439999999999998, 40.689999999999998, 44.149999999999999, 39.530000000000001, 46.200000000000003, 45.43, 37.890000000000001, 44.060000000000002, 40.039999999999999, 42.439999999999998, 42.810000000000002, 44.740000000000002, 44.289999999999999, 44.100000000000001, 42.329999999999998, 47.439999999999998, 41.469999999999999, 42.380000000000003, 39.759999999999998, 42.840000000000003, 47.109999999999999, 42.651566462585691, 40.719999999999999, 40.170000000000002, 41.890000000000001, 41.829999999999998, 48.43, 41.030000000000001, 36.229999999999997, 44.310000000000002, 33.409999999999997, 36.600000000000001, 34.399999999999999, 41.399999999999999, 38.869999999999997, 17.5, 35.890000000000001, 31.670000000000002, 42.651566462585691, 38.689999999999998, 27.460000000000001, 42.651566462585691, 41.130000000000003, 23.32, 42.651566462585691, 21.149999999999999, 25.739999999999998, 23.940000000000001, 18.829999999999998, 22.329999999999998, 28.600000000000001, 20.170000000000002, 27.039999999999999, 26.93, 34.030000000000001, 31.710000000000001, 28.536458096118871, 32.93, 27.899999999999999, 31.609999999999999, 29.420000000000002, 30.719999999999999, 26.420000000000002, 21.239999999999998, 26.98, 14.279999999999999, 21.370000000000001, 19.640000000000001, 28.780000000000001, 27.109999999999999, 28.536458096118871, 20.75, 29.370000000000001, 28.536458096118871, 28.536458096118871, 17.600000000000001, 18.91, 28.536458096118871, 24.140000000000001, 17.77, 28.536458096118871, 22.5, 19.390000000000001, 20.379999999999999, 28.536458096118871, 14.93, 28.536458096118871, 28.536458096118871, 28.536458096118871, 28.536458096118871, 28.536458096118871, 28.536458096118871, 28.536458096118871, 28.536458096118871, 28.536458096118871, 28.536458096118871, 28.536458096118871, 28.536458096118871, 28.536458096118871, 18.739999999999998, 15.98, 18.68, 18.68, 18.68, 18.68, 19.309999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.75, 17.550000000000001, 17.550000000000001, 17.550000000000001, 12.859999999999999, 13.199999999999999, 14.18, 16.010000000000002, 14.4, 13.5, 14.4, 15.6, 16.789999999999999, 15.98, 15.35, 15.960000000000001, 15.84, 15.07, 15.65, 16.469999999999999, 17.75, 16.27, 16.30940161370502, 20.68, 15.66, 15.660000000000002, 16.02, 14.56, 14.02, 14.19, 15.199999999999999, 20.18, 17.789999999999999, 17.789698187386765, 17.789698187386765, 17.789698187386765, 17.23, 26.110000000000003, 17.210000000000001, 17.210000000000001, 15.06, 14.640000000000001, 18.710000000000001, 15.33, 16.469999999999999, 14.130000000000001, 20.91, 14.92, 19.649999999999999, 16.120000000000001, 18.210000000000001, 13.33, 12.609999999999999, 13.380000000000001, 16.441193738773954, 23.710000000000001, 17.68, 29.239999999999998, 29.77, 19.010000000000002, 24.219999999999999, 36.490000000000002, 16.84, 31.23, 34.350000000000001, 32.200000000000003, 20.34, 11.92, 18.030000000000001, 17.997693894535939, 12.24, 14.33, 26.109999999999999, 25.719999999999999, 22.690000000000001, 30.940000000000001, 16.07, 12.15, 25.120000000000001, 23.280000000000001, 23.59, 29.629999999999999, 34.920000000000002, 31.370000000000001, 26.095306361276574, 29.190000000000001, 39.57, 21.789999999999999, 22.640000000000001, 39.759999999999998, 22.73, 26.095306361276574, 37.93, 26.095306361276574, 36.189999999999998, 31.16, 35.07, 26.095306361276574, 26.095306361276574, 26.095306361276574, 20.890000000000001, 26.095306361276574, 26.095306361276574, 26.095306361276574, 31.609999999999999, 26.095306361276574, 26.095306361276574, 26.095306361276574, 26.095306361276574, 26.095306361276574, 12.17, 26.98, 37.270000000000003, 43.810000000000002, 30.120000000000001, 23.530000000000001, 23.989999999999998, 38.490000000000002, 40.189999999999998, 34.469999999999999, 33.060000000000002, 14.94, 28.239999999999998, 27.84, 39.479999999999997, 25.640000000000001, 20.969999999999999, 15.35, 20.300000000000001, 26.039999999999999, 33.210000000000001, 41.18, 30.649999999999999, 27.09, 48.950000000000003, 47.609999999999999, 47.82, 24.949999999999999, 29.399999999999999, 42.380000000000003, 37.376518907314143, 28.739999999999998, 43.5, 46.490000000000002, 40.310000000000002, 43.880000000000003, 38.969999999999999, 45.670000000000002, 45.310000000000002, 37.579999999999998, 43.859999999999999, 39.719999999999999, 42.109999999999999, 42.630000000000003, 44.439999999999998, 43.729999999999997, 43.68, 42.07, 47.340000000000003, 41.159999999999997, 42.109999999999999, 42.710000000000001, 39.329999999999998, 46.719999999999999, 42.338852652493131, 40.5, 39.789999999999999, 41.670000000000002, 41.460000000000001, 48.210000000000001, 40.420000000000002, 36.200000000000003, 43.93, 33.170000000000002, 36.530000000000001, 34.229999999999997, 40.979999999999997, 38.859999999999999, 17.030000000000001, 35.439999999999998, 31.190000000000001, 42.338852652493131, 38.469999999999999, 27.039999999999999, 42.338852652493131, 40.609999999999999, 23.239999999999998, 42.338852652493131, 20.829999999999998, 25.34, 23.66, 18.620000000000001, 21.920000000000002, 28.48, 19.800000000000001, 26.670000000000002, 26.489999999999998, 33.479999999999997, 31.399999999999999, 32.640000000000001, 28.162580486964458, 27.620000000000001, 31.07, 29.210000000000001, 30.399999999999999, 26.079999999999998, 20.899999999999999, 26.68, 13.94, 20.829999999999998, 19.52, 28.870000000000001, 26.77, 20.170000000000002, 28.162580486964458, 28.780000000000001, 28.162580486964458, 28.162580486964458, 17.370000000000001, 18.57, 28.162580486964458, 24.129999999999999, 17.350000000000001, 28.162580486964458, 22.280000000000001, 19.079999999999998, 28.162580486964458, 20.129999999999999, 14.93, 28.162580486964458, 28.162580486964458, 28.162580486964458, 28.162580486964458, 28.162580486964458, 28.162580486964458, 28.162580486964458, 28.162580486964458, 28.162580486964458, 28.162580486964458, 28.162580486964458, 28.162580486964458, 28.162580486964458, 18.510000000000002, 15.869999999999999, 18.539999999999999, 18.539999999999999, 18.539999999999999, 18.539999999999999, 19.07],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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
            "title": "Population ages 0 14",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [13.869999999999999, 17.370000000000001, 17.370000000000001, 17.370000000000001, 12.65, 13.130000000000001, 14.06, 15.98, 14.109999999999999, 13.34, 14.390000000000001, 15.5, 16.690000000000001, 15.91, 15.369999999999999, 16, 15.880000000000001, 15.18, 15.630000000000001, 16.469999999999999, 17.710000000000001, 16.170000000000002, 16.210594847960628, 20.670000000000002, 15.43, 15.43, 16.030000000000001, 14.550000000000001, 13.99, 14.140000000000001, 15.19, 19.91, 17.66, 17.659692223225424, 17.659692223225424, 17.659692223225424, 17.100000000000001, 25.690000000000001, 16.969999999999999, 16.969999999999999, 15.07, 14.550000000000001, 18.629999999999999, 15.220000000000001, 16.280000000000001, 14.27, 21.09, 14.92, 19.809999999999999, 16.07, 18.18, 13.07, 12.81, 13.1, 16.547508555532026, 23.48, 17.719999999999999, 29.530000000000001, 30.07, 18.949999999999999, 23.920000000000002, 36.409999999999997, 16.84, 31.219999999999999, 34.460000000000001, 32.43, 20.420000000000002, 11.77, 17.670000000000002, 17.639826230401006, 12.17, 14.609999999999999, 25.690000000000001, 25.48, 22.550000000000001, 30.640000000000001, 15.800000000000001, 11.99, 24.879999999999999, 22.960000000000001, 23.210000000000001, 29.300000000000001, 34.579999999999998, 31.02, 25.803304234975101, 28.91, 39.340000000000003, 21.719999999999999, 22.350000000000001, 39.619999999999997, 22.48, 25.803304234975101, 37.719999999999999, 25.803304234975101, 36.170000000000002, 30.699999999999999, 34.619999999999997, 25.803304234975101, 25.803304234975101, 25.803304234975101, 20.960000000000001, 25.803304234975101, 25.803304234975101, 25.803304234975101, 31.629999999999999, 25.803304234975101, 25.803304234975101, 25.803304234975101, 25.803304234975101, 25.803304234975101, 11.890000000000001, 26.449999999999999, 36.939999999999998, 43.420000000000002, 29.390000000000001, 22.800000000000001, 23.809999999999999, 38.119999999999997, 39.869999999999997, 33.020000000000003, 32.609999999999999, 15.140000000000001, 28.170000000000002, 27.620000000000001, 39.140000000000001, 26.77, 21.120000000000001, 15.77, 20.379999999999999, 26.18, 33.049999999999997, 41.090000000000003, 30.710000000000001, 26.850000000000001, 48.899999999999999, 47.390000000000001, 47.659999999999997, 24.920000000000002, 28.859999999999999, 42.009999999999998, 37.340149810563062, 28.670000000000002, 43.289999999999999, 46.530000000000001, 39.960000000000001, 43.609999999999999, 38.399999999999999, 45.189999999999998, 45.18, 37.25, 43.68, 39.399999999999999, 41.799999999999997, 42.43, 44.090000000000003, 43.159999999999997, 43.259999999999998, 47.25, 41.759999999999998, 40.890000000000001, 41.829999999999998, 42.579999999999998, 38.890000000000001, 46.289999999999999, 42.024306569471925, 40.25, 39.390000000000001, 41.399999999999999, 41.009999999999998, 48.18, 39.780000000000001, 36.210000000000001, 43.5, 32.909999999999997, 36.420000000000002, 34.100000000000001, 40.560000000000002, 38.770000000000003, 16.640000000000001, 35.030000000000001, 30.77, 42.024306569471925, 38.259999999999998, 26.609999999999999, 42.024306569471925, 40.039999999999999, 23.16, 42.024306569471925, 20.539999999999999, 24.949999999999999, 23.359999999999999, 18.460000000000001, 21.600000000000001, 28.170000000000002, 19.440000000000001, 26.329999999999998, 26.100000000000001, 32.93, 31.120000000000001, 32.359999999999999, 27.359999999999999, 27.820206746531461, 30.57, 29.02, 30.079999999999998, 25.760000000000002, 20.550000000000001, 26.41, 13.65, 20.300000000000001, 19.300000000000001, 28.710000000000001, 26.48, 19.620000000000001, 27.820206746531461, 28.239999999999998, 27.820206746531461, 27.820206746531461, 17.16, 18.289999999999999, 27.820206746531461, 24.07, 16.800000000000001, 27.820206746531461, 22.09, 18.82, 27.820206746531461, 19.859999999999999, 14.9, 27.820206746531461, 27.820206746531461, 27.820206746531461, 27.820206746531461, 27.820206746531461, 27.820206746531461, 27.820206746531461, 27.820206746531461, 27.820206746531461, 27.820206746531461, 27.820206746531461, 27.820206746531461, 27.820206746531461, 18.239999999999998, 15.73, 18.370000000000001, 18.370000000000001, 18.370000000000001, 18.370000000000001, 18.890000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 60,
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

  
