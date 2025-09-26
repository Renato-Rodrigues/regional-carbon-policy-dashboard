(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Government_Government_spending___percent_of_GDP_map') 

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
    "b55c6bcd40a0": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c6bcd40a0",
  "attrs": {
    "b55c6bcd40a0": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 90,
      "colorbar": {
        "title": "Government spending percent"
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
        "title": "Government spending percent",
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
      "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
      "z": [19.329999999999998, 23.140000000000001, 23.140000000000001, 23.140000000000001, 18.98, 18.969999999999999, 18.960000000000001, 17.91, 16.780000000000001, 20.109999999999999, 18.98, 22.899999999999999, 22.48, 16.370000000000001, 18.920000000000002, 21.920000000000002, 20.710000000000001, 19.57, 21.100000000000001, 17.850000000000001, 25.710000000000001, 25.039999999999999, 25.074443532037435, 28.940000000000001, 21.100000000000001, 21.100000000000001, 16.039999999999999, 23.010000000000002, 20.109999999999999, 19.969999999999999, 18.77, 16.059999999999999, 18.84, 18.84, 18.84, 18.84, 18.84, 10.880000000000001, 21.940000000000001, 21.940000000000001, 11.73, 11.73, 25.25, 18.239999999999998, 11.1, 24.190000000000001, 22.800000000000001, 8.1199999999999992, 19.68, 18.079999999999998, 26.760000000000002, 20.133705352145519, 20.133705352145519, 19.989999999999998, 20.133705352145519, 12.59, 17.920000000000002, 11.26, 17.399999999999999, 15.643979182434389, 21.379999999999999, 12.390000000000001, 8.2599999999999998, 16.829999999999998, 14.01, 9.3800000000000008, 14.24, 17.84, 15.31, 15.286324002697182, 10.99, 11.710000000000001, 10.880000000000001, 8.1300000000000008, 6.3200000000000003, 9.9299999999999997, 12.93, 11.41, 11.37713652084159, 12.970000000000001, 12.16, 5.2599999999999998, 15.26, 7.6600000000000001, 11.37713652084159, 16.77, 16.73, 24.07, 11.37713652084159, 11.37713652084159, 27.190000000000001, 15.06, 13.720000000000001, 11.37713652084159, 11.37713652084159, 16.850000000000001, 67.129999999999995, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 12.15, 5.1299999999999999, 9.7300000000000004, 8.6699999999999999, 22.109999999999999, 21.039999999999999, 11.42, 12.27, 13.73, 13.41, 24.719999999999999, 23.190000000000001, 16.629999999999999, 9.75, 22.829999999999998, 22.25, 23, 17.32, 15.41, 24.48, 12.67, 14.800000000000001, 10.15, 15.630000000000001, 18.440000000000001, 15.57, 17.199999999999999, 7.5899999999999999, 12.49, 19.289999999999999, 14.091836650358694, 16.870000000000001, 4.9500000000000002, 10.32, 10.380000000000001, 18.129999999999999, 15.75, 11.529999999999999, 14.05897549625498, 8.7400000000000002, 17.66, 21.850000000000001, 11.19, 13.59, 17.920000000000002, 14.05897549625498, 9.3800000000000008, 12.039999999999999, 4.6500000000000004, 8.1799999999999997, 17.02, 8.8300000000000001, 17.460000000000001, 14.05897549625498, 10.859999999999999, 11.970000000000001, 10.359999999999999, 17.359999999999999, 14.05897549625498, 46.600000000000001, 37.009999999999998, 22.23, 22.010000000000002, 8.75, 16.199999999999999, 16.489999999999998, 14.08, 15.359999999999999, 2.7400000000000002, 14.05897549625498, 19.670000000000002, 11.050000000000001, 18.859999999999999, 14.05897549625498, 14.05897549625498, 43.560000000000002, 14.05897549625498, 19.079999999999998, 10.5, 11.44, 12.18, 15.609999999999999, 12.869999999999999, 11.99, 11.52, 10.710000000000001, 9.75, 11.59788789568176, 16.52, 8.6400000000000006, 7.9100000000000001, 14.92, 13.81, 7.9400000000000004, 9.1799999999999997, 14.5, 11.67, 14.81, 14.220000000000001, 11.59788789568176, 28.010000000000002, 12.67, 11.59788789568176, 11.59788789568176, 9.7200000000000006, 19.34, 15.56, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 24.440000000000001, 11.59788789568176, 15.65, 13.82, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 15.24, 19.899999999999999, 18.41, 18.41, 18.41, 18.41, 16.809999999999999],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [19.329999999999998, 23.140000000000001, 23.140000000000001, 23.140000000000001, 18.98, 18.969999999999999, 18.960000000000001, 17.91, 16.780000000000001, 20.109999999999999, 18.98, 22.899999999999999, 22.48, 16.370000000000001, 18.920000000000002, 21.920000000000002, 20.710000000000001, 19.57, 21.100000000000001, 17.850000000000001, 25.710000000000001, 25.039999999999999, 25.074443532037435, 28.940000000000001, 21.100000000000001, 21.100000000000001, 16.039999999999999, 23.010000000000002, 20.109999999999999, 19.969999999999999, 18.77, 16.059999999999999, 18.84, 18.84, 18.84, 18.84, 18.84, 10.880000000000001, 21.940000000000001, 21.940000000000001, 11.73, 11.73, 25.25, 18.239999999999998, 11.1, 24.190000000000001, 22.800000000000001, 8.1199999999999992, 19.68, 18.079999999999998, 26.760000000000002, 20.133705352145519, 20.133705352145519, 19.989999999999998, 20.133705352145519, 12.59, 17.920000000000002, 11.26, 17.399999999999999, 15.643979182434389, 21.379999999999999, 12.390000000000001, 8.2599999999999998, 16.829999999999998, 14.01, 9.3800000000000008, 14.24, 17.84, 15.31, 15.286324002697182, 10.99, 11.710000000000001, 10.880000000000001, 8.1300000000000008, 6.3200000000000003, 9.9299999999999997, 12.93, 11.41, 11.37713652084159, 12.970000000000001, 12.16, 5.2599999999999998, 15.26, 7.6600000000000001, 11.37713652084159, 16.77, 16.73, 24.07, 11.37713652084159, 11.37713652084159, 27.190000000000001, 15.06, 13.720000000000001, 11.37713652084159, 11.37713652084159, 16.850000000000001, 67.129999999999995, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 11.37713652084159, 12.15, 5.1299999999999999, 9.7300000000000004, 8.6699999999999999, 22.109999999999999, 21.039999999999999, 11.42, 12.27, 13.73, 13.41, 24.719999999999999, 23.190000000000001, 16.629999999999999, 9.75, 22.829999999999998, 22.25, 23, 17.32, 15.41, 24.48, 12.67, 14.800000000000001, 10.15, 15.630000000000001, 18.440000000000001, 15.57, 17.199999999999999, 7.5899999999999999, 12.49, 19.289999999999999, 14.091836650358694, 16.870000000000001, 4.9500000000000002, 10.32, 10.380000000000001, 18.129999999999999, 15.75, 11.529999999999999, 14.05897549625498, 8.7400000000000002, 17.66, 21.850000000000001, 11.19, 13.59, 17.920000000000002, 14.05897549625498, 9.3800000000000008, 12.039999999999999, 4.6500000000000004, 8.1799999999999997, 17.02, 8.8300000000000001, 17.460000000000001, 14.05897549625498, 10.859999999999999, 11.970000000000001, 10.359999999999999, 17.359999999999999, 14.05897549625498, 46.600000000000001, 37.009999999999998, 22.23, 22.010000000000002, 8.75, 16.199999999999999, 16.489999999999998, 14.08, 15.359999999999999, 2.7400000000000002, 14.05897549625498, 19.670000000000002, 11.050000000000001, 18.859999999999999, 14.05897549625498, 14.05897549625498, 43.560000000000002, 14.05897549625498, 19.079999999999998, 10.5, 11.44, 12.18, 15.609999999999999, 12.869999999999999, 11.99, 11.52, 10.710000000000001, 9.75, 11.59788789568176, 16.52, 8.6400000000000006, 7.9100000000000001, 14.92, 13.81, 7.9400000000000004, 9.1799999999999997, 14.5, 11.67, 14.81, 14.220000000000001, 11.59788789568176, 28.010000000000002, 12.67, 11.59788789568176, 11.59788789568176, 9.7200000000000006, 19.34, 15.56, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 24.440000000000001, 11.59788789568176, 15.65, 13.82, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 11.59788789568176, 15.24, 19.899999999999999, 18.41, 18.41, 18.41, 18.41, 16.809999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [18.82, 23.039999999999999, 23.039999999999999, 23.039999999999999, 19.16, 19.16, 19.16, 16.579999999999998, 17.170000000000002, 20.420000000000002, 18.890000000000001, 22.510000000000002, 22.199999999999999, 16.379999999999999, 18.32, 20.649999999999999, 18.829999999999998, 19.190000000000001, 19.82, 17.370000000000001, 25.02, 24.93, 24.969573871331377, 29.390000000000001, 21.18, 21.18, 14.73, 22.02, 19.359999999999999, 20.039999999999999, 18.829999999999998, 16.170000000000002, 19.399999999999999, 19.399999999999999, 19.399999999999999, 19.399999999999999, 19.399999999999999, 10.4, 20.739999999999998, 20.739999999999998, 11.51, 11.51, 24.300000000000001, 16.890000000000001, 11.210000000000001, 22.629999999999999, 21.91, 11.43, 14.9, 17.41, 26.309999999999999, 19.238400248440851, 19.238400248440851, 19.989999999999998, 19.238400248440851, 12.32, 16.969999999999999, 11.609999999999999, 16.199999999999999, 15.571572449564471, 20.600000000000001, 12.9, 11.779999999999999, 18.170000000000002, 13.92, 9.3599999999999994, 14.470000000000001, 17.719999999999999, 14.630000000000001, 14.605975516092373, 10.35, 9.6199999999999992, 10.4, 8.3200000000000003, 6.3899999999999997, 9.1400000000000006, 13.109999999999999, 10.32, 11.245890837628442, 12.58, 12.630000000000001, 4.4800000000000004, 15.31, 7.75, 11.245890837628442, 15.74, 20.809999999999999, 22.050000000000001, 11.245890837628442, 11.245890837628442, 25.629999999999999, 13.789999999999999, 13.720000000000001, 11.245890837628442, 11.245890837628442, 16.079999999999998, 67.129999999999995, 11.245890837628442, 11.245890837628442, 11.245890837628442, 11.245890837628442, 11.245890837628442, 11.245890837628442, 11.245890837628442, 11.245890837628442, 11.245890837628442, 11.245890837628442, 11.245890837628442, 11.245890837628442, 11.245890837628442, 12.390000000000001, 5.1699999999999999, 9.6899999999999995, 8.6400000000000006, 22.109999999999999, 21.5, 11.24, 25.559999999999999, 12.56, 15.619999999999999, 23.559999999999999, 21.300000000000001, 14.449999999999999, 8.75, 26.989999999999998, 22.420000000000002, 19.859999999999999, 15.44, 13.07, 22.859999999999999, 12.75, 13.77, 12.33, 16.149999999999999, 19.469999999999999, 15.460000000000001, 16.920000000000002, 4.9100000000000001, 13.18, 19.52, 14.325251547557318, 17, 6.25, 10.32, 11.48, 17.859999999999999, 13.890000000000001, 12.17, 13.665098224935488, 8.7400000000000002, 18.75, 14.31, 11, 14.24, 13.665098224935488, 21, 9.3800000000000008, 12.68, 4.6500000000000004, 6.9500000000000002, 16.550000000000001, 8.8100000000000005, 19.23, 13.665098224935488, 11.039999999999999, 10.5, 10.43, 14.970000000000001, 13.665098224935488, 36.609999999999999, 37.009999999999998, 20.359999999999999, 20.530000000000001, 7.7599999999999998, 15.01, 14.18, 14.199999999999999, 17.710000000000001, 2.7400000000000002, 19.670000000000002, 13.665098224935488, 11.039999999999999, 18.859999999999999, 13.665098224935488, 13.665098224935488, 38.310000000000002, 13.665098224935488, 18.469999999999999, 10.02, 11.109999999999999, 11.43, 15.68, 11.960000000000001, 11.01, 11.26, 10.880000000000001, 8.9100000000000001, 11.232790036257063, 16.260000000000002, 7.5899999999999999, 7.3399999999999999, 15.01, 13.77, 7.5899999999999999, 9.0800000000000001, 13.98, 11.33, 14.43, 12.890000000000001, 11.232790036257063, 27.18, 12.67, 11.232790036257063, 11.232790036257063, 10.02, 15.039999999999999, 17.670000000000002, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 22.890000000000001, 11.232790036257063, 15.65, 13.82, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 11.232790036257063, 15.16, 19.420000000000002, 18.300000000000001, 18.300000000000001, 18.300000000000001, 18.300000000000001, 17.07],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [18.780000000000001, 23.07, 23.07, 23.07, 19.609999999999999, 18.440000000000001, 20.02, 16.510000000000002, 17.329999999999998, 20.989999999999998, 19.350000000000001, 22.280000000000001, 22.09, 16.579999999999998, 18.329999999999998, 20.32, 18.48, 18.52, 17.870000000000001, 16.859999999999999, 24.899999999999999, 24.5, 24.551031839000434, 30.27, 21.41, 21.41, 16.239999999999998, 22.120000000000001, 18.149999999999999, 19.940000000000001, 18.91, 16.059999999999999, 19.600000000000001, 19.600000000000001, 19.600000000000001, 19.600000000000001, 19.600000000000001, 10.369999999999999, 19.370000000000001, 19.370000000000001, 11.25, 11.25, 24.460000000000001, 17.530000000000001, 11.029999999999999, 19.510000000000002, 21.66, 14.380000000000001, 16.440000000000001, 16.18, 29.940000000000001, 18.617842079421241, 18.617842079421241, 19.989999999999998, 18.617842079421241, 12.19, 16.870000000000001, 11.25, 15.9, 15.3831646743151, 20.789999999999999, 10.42, 14.6, 17.510000000000002, 14.65, 9.7100000000000009, 12.140000000000001, 17.739999999999998, 14.800000000000001, 14.769343993436493, 9.25, 9.7799999999999994, 10.369999999999999, 8.1099999999999994, 5.4699999999999998, 8.8699999999999992, 13.65, 9.9000000000000004, 11.027153536328132, 11.470000000000001, 13.09, 4.0700000000000003, 15.31, 8.1699999999999999, 11.027153536328132, 15.94, 35.119999999999997, 18.41, 11.027153536328132, 11.027153536328132, 25.559999999999999, 13.25, 13.720000000000001, 11.027153536328132, 11.027153536328132, 15.609999999999999, 67.129999999999995, 11.027153536328132, 11.027153536328132, 11.027153536328132, 11.027153536328132, 11.027153536328132, 11.027153536328132, 11.027153536328132, 11.027153536328132, 11.027153536328132, 11.027153536328132, 11.027153536328132, 11.027153536328132, 11.027153536328132, 12.859999999999999, 5.1799999999999997, 9.1600000000000001, 8.9000000000000004, 22.109999999999999, 22.510000000000002, 12.08, 19.969999999999999, 12.25, 13.720000000000001, 23.079999999999998, 19.530000000000001, 14.539999999999999, 7.8700000000000001, 27.02, 20.789999999999999, 15.710000000000001, 14.06, 14.300000000000001, 21.34, 12.74, 11.449999999999999, 10.41, 16.789999999999999, 17.780000000000001, 13.85, 4.1600000000000001, 16.920000000000002, 11.31, 17.120000000000001, 13.073573120242312, 16.149999999999999, 5.4000000000000004, 10.32, 11.92, 17.379999999999999, 14.49, 15.31, 13.435525285523278, 8.7400000000000002, 16.030000000000001, 16.120000000000001, 10.69, 13.789999999999999, 13.435525285523278, 15.210000000000001, 9.3800000000000008, 12.449999999999999, 4.6500000000000004, 6.9900000000000002, 16.41, 8.9900000000000002, 13.435525285523278, 14.1, 13, 10.029999999999999, 8.7100000000000009, 12.51, 13.435525285523278, 35.229999999999997, 19.27, 37.009999999999998, 19.399999999999999, 8.25, 12.539999999999999, 14.609999999999999, 14.52, 16.960000000000001, 2.7400000000000002, 19.670000000000002, 13.435525285523278, 11.050000000000001, 18.859999999999999, 13.435525285523278, 13.435525285523278, 34.009999999999998, 13.435525285523278, 18.890000000000001, 10.08, 12.140000000000001, 10.949999999999999, 13.960000000000001, 11.06, 10.94, 11.44, 10.720000000000001, 8.6099999999999994, 11.277704252332095, 15.970000000000001, 8.0899999999999999, 6.5999999999999996, 15.52, 13.99, 8.1199999999999992, 9.4299999999999997, 13.51, 11.99, 13.94, 14.210000000000001, 11.277704252332095, 26.91, 12.67, 11.277704252332095, 11.277704252332095, 9.75, 14.609999999999999, 16.699999999999999, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 22.84, 11.277704252332095, 15.65, 13.82, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 11.277704252332095, 15.050000000000001, 19.079999999999998, 18.379999999999999, 18.379999999999999, 18.379999999999999, 18.379999999999999, 17.949999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [18.329999999999998, 22.760000000000002, 22.760000000000002, 22.760000000000002, 19.48, 18.82, 20.16, 16.899999999999999, 17.359999999999999, 20.32, 19.260000000000002, 23.190000000000001, 21.940000000000001, 15.17, 18.539999999999999, 19.93, 18.77, 19.149999999999999, 17.219999999999999, 15.83, 24.629999999999999, 24.199999999999999, 24.230575002912165, 27.670000000000002, 21.32, 21.32, 15.92, 21.989999999999998, 18.149999999999999, 20.059999999999999, 18.649999999999999, 16.23, 19.789999999999999, 19.789999999999999, 19.789999999999999, 19.789999999999999, 19.789999999999999, 9.8000000000000007, 18.57, 18.57, 10.74, 10.74, 24.309999999999999, 17.649999999999999, 10.529999999999999, 20.390000000000001, 20.969999999999999, 12.01, 19.989999999999998, 16.510000000000002, 19.109999999999999, 18.633615395837495, 18.633615395837495, 19.989999999999998, 18.633615395837495, 12.91, 17.390000000000001, 10.18, 15.300000000000001, 14.091969285876768, 19.210000000000001, 8.5399999999999991, 11.1, 17.989999999999998, 11.710000000000001, 9.2699999999999996, 11.68, 17.600000000000001, 14.82, 14.786224548232067, 8.7699999999999996, 8.7200000000000006, 9.8000000000000007, 8.6300000000000008, 5.5300000000000002, 9.0700000000000003, 13.5, 9.9100000000000001, 11.404863808847509, 11.17, 15.359999999999999, 3.46, 15.31, 7.5700000000000003, 11.404863808847509, 18.57, 33.390000000000001, 18.059999999999999, 11.404863808847509, 11.404863808847509, 24.93, 14.08, 13.720000000000001, 11.404863808847509, 11.404863808847509, 21.170000000000002, 67.129999999999995, 11.404863808847509, 11.404863808847509, 11.404863808847509, 11.404863808847509, 11.404863808847509, 11.404863808847509, 11.404863808847509, 11.404863808847509, 11.404863808847509, 11.404863808847509, 11.404863808847509, 11.404863808847509, 11.404863808847509, 13.369999999999999, 5.4400000000000004, 11.57, 8.6799999999999997, 22.109999999999999, 21.809999999999999, 12.470000000000001, 15.68, 13.76, 11.289999999999999, 22.559999999999999, 20.640000000000001, 6.9199999999999999, 14.529999999999999, 26.16, 18.629999999999999, 13.890000000000001, 14.720000000000001, 12.710000000000001, 22.039999999999999, 12.289999999999999, 11.23, 10.92, 16.140000000000001, 16.91, 13.26, 4.5700000000000003, 16.710000000000001, 10.07, 13.99, 12.764583018946279, 15.859999999999999, 5.9500000000000002, 10.32, 11.890000000000001, 14.35, 14.1, 8.6799999999999997, 12.315678516503812, 8.7400000000000002, 15.34, 16.870000000000001, 9.9199999999999999, 15.1, 12.315678516503812, 5.8799999999999999, 9.3800000000000008, 12.869999999999999, 4.6500000000000004, 6.2699999999999996, 16.079999999999998, 9.6699999999999999, 12.315678516503812, 15.199999999999999, 15, 10.220000000000001, 6.8600000000000003, 12.75, 12.315678516503812, 25.920000000000002, 19.440000000000001, 37.009999999999998, 27.719999999999999, 8.3900000000000006, 13.34, 11.210000000000001, 14.119999999999999, 17.109999999999999, 7.2599999999999998, 19.670000000000002, 12.315678516503812, 11.050000000000001, 18.859999999999999, 12.315678516503812, 12.315678516503812, 38.700000000000003, 12.315678516503812, 19.039999999999999, 9.8900000000000006, 12.43, 10.300000000000001, 13.880000000000001, 11.710000000000001, 11.289999999999999, 10.92, 10.6, 8.5099999999999998, 11.268567057706026, 14.35, 8.7899999999999991, 6.8399999999999999, 15, 14.33, 8.3000000000000007, 15.17, 13.17, 11.84, 13.1, 13.890000000000001, 11.268567057706026, 26.91, 12.67, 11.268567057706026, 11.268567057706026, 10.24, 13.74, 14.51, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 22.32, 11.268567057706026, 15.65, 13.82, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 11.268567057706026, 15, 19.25, 18.309999999999999, 18.309999999999999, 18.309999999999999, 18.309999999999999, 18.359999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [17.859999999999999, 22.43, 22.43, 22.43, 19.030000000000001, 18.199999999999999, 20.52, 16.440000000000001, 17.710000000000001, 19.609999999999999, 18.739999999999998, 23.23, 21.620000000000001, 14.43, 18.190000000000001, 19.120000000000001, 17.140000000000001, 17.469999999999999, 17.620000000000001, 15.9, 24.149999999999999, 24.34, 24.374331088370287, 28.25, 20.77, 20.77, 15.390000000000001, 20.780000000000001, 16.690000000000001, 20.739999999999998, 17.449999999999999, 16.850000000000001, 19.68, 19.68, 19.68, 19.68, 19.68, 9.8599999999999994, 18.649999999999999, 18.649999999999999, 10.42, 10.42, 23.800000000000001, 17.030000000000001, 10.48, 20.739999999999998, 21.079999999999998, 16.5, 19.949999999999999, 16.800000000000001, 19.879999999999999, 19.603849697514992, 19.603849697514992, 19.989999999999998, 19.603849697514992, 13.390000000000001, 17.300000000000001, 11.050000000000001, 15.609999999999999, 13.864916846203046, 18.52, 9.6600000000000001, 8.9000000000000004, 17.100000000000001, 9.8499999999999996, 9.4000000000000004, 13.07, 17.629999999999999, 14.630000000000001, 14.595273702500418, 8.4199999999999999, 8.7300000000000004, 9.8599999999999994, 8.3499999999999996, 5.5499999999999998, 9.2300000000000004, 13.93, 9.1400000000000006, 11.939464620750138, 11.57, 15.27, 5.7300000000000004, 15.31, 7.9199999999999999, 11.939464620750138, 17.18, 31.309999999999999, 22.620000000000001, 11.939464620750138, 11.939464620750138, 22.93, 16.489999999999998, 13.720000000000001, 11.939464620750138, 11.939464620750138, 18.23, 65.060000000000002, 11.939464620750138, 11.939464620750138, 11.939464620750138, 11.939464620750138, 11.939464620750138, 11.939464620750138, 11.939464620750138, 11.939464620750138, 11.939464620750138, 11.939464620750138, 11.939464620750138, 11.939464620750138, 11.939464620750138, 13.44, 5.3600000000000003, 10.4, 9.1999999999999993, 22.109999999999999, 19.57, 9.4800000000000004, 18.73, 15.58, 12.289999999999999, 21.91, 20.600000000000001, 6.7300000000000004, 13.720000000000001, 28.210000000000001, 18.809999999999999, 14.01, 12.4, 12.1, 20.66, 11.33, 11.640000000000001, 11.15, 15.92, 17.210000000000001, 13.949999999999999, 6, 16.640000000000001, 13.4, 14.74, 13.178793138762515, 15.890000000000001, 6.9500000000000002, 10.32, 13.109999999999999, 14.630000000000001, 12.890000000000001, 8.5199999999999996, 12.528527070216922, 8.7400000000000002, 15.539999999999999, 19.030000000000001, 10.07, 16.690000000000001, 12.528527070216922, 3.21, 9.3800000000000008, 13.59, 4.6500000000000004, 6.7800000000000002, 14.16, 9.5700000000000003, 12.528527070216922, 19, 11.16, 8.7799999999999994, 6.3700000000000001, 16.800000000000001, 12.528527070216922, 25.629999999999999, 23.57, 37.009999999999998, 27.91, 7.9199999999999999, 13.67, 10.67, 12.44, 18.07, 7.6500000000000004, 19.670000000000002, 12.528527070216922, 10.720000000000001, 18.859999999999999, 12.528527070216922, 12.528527070216922, 35.240000000000002, 12.528527070216922, 18.940000000000001, 9.9499999999999993, 12.99, 10.550000000000001, 13.73, 12.470000000000001, 11.48, 10.460000000000001, 10.93, 8.8000000000000007, 11.297073545475971, 14.06, 9.1799999999999997, 7.6799999999999997, 16.600000000000001, 14.34, 7.6699999999999999, 14.02, 12.81, 11.74, 12.470000000000001, 14.890000000000001, 11.297073545475971, 26.91, 10.119999999999999, 11.297073545475971, 11.297073545475971, 10.1, 14.41, 13.01, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 21.41, 11.297073545475971, 16.260000000000002, 13.82, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 11.297073545475971, 15.19, 19.25, 18.170000000000002, 18.170000000000002, 18.170000000000002, 18.170000000000002, 18.43],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [18.260000000000002, 22.559999999999999, 22.559999999999999, 22.559999999999999, 19.559999999999999, 19.82, 20.719999999999999, 17.050000000000001, 18.82, 19.77, 19.27, 23.489999999999998, 22.670000000000002, 14.49, 18.68, 19.129999999999999, 17.530000000000001, 18.68, 19.710000000000001, 18.440000000000001, 24.640000000000001, 25.100000000000001, 25.15509768559885, 31.390000000000001, 21.559999999999999, 21.559999999999999, 15.880000000000001, 21.370000000000001, 17.149999999999999, 20.600000000000001, 18.16, 18.649999999999999, 20.379999999999999, 20.379999999999999, 20.379999999999999, 20.379999999999999, 20.379999999999999, 10.539999999999999, 18.399999999999999, 18.399999999999999, 10.57, 10.57, 24.260000000000002, 16.969999999999999, 10.380000000000001, 20.129999999999999, 22.079999999999998, 19.399999999999999, 20.41, 18.579999999999998, 22.219999999999999, 20.304756168983552, 20.304756168983552, 19.989999999999998, 20.304756168983552, 13.6, 17.829999999999998, 10.19, 15.93, 13.475888001288174, 16.52, 8.5, 9.3300000000000001, 7.0300000000000002, 17.52, 9.4000000000000004, 14.640000000000001, 18.030000000000001, 14.49, 14.457260353255089, 8.6699999999999999, 8.7200000000000006, 10.539999999999999, 8.4199999999999999, 5.6299999999999999, 8.8100000000000005, 14.34, 10.109999999999999, 12.076757956377516, 11.5, 16.18, 5.6299999999999999, 15.31, 7.7699999999999996, 12.076757956377516, 15.630000000000001, 30.43, 17.140000000000001, 12.076757956377516, 12.076757956377516, 25, 15.51, 13.720000000000001, 12.076757956377516, 12.076757956377516, 18.640000000000001, 65.579999999999998, 12.076757956377516, 12.076757956377516, 12.076757956377516, 12.076757956377516, 12.076757956377516, 12.076757956377516, 12.076757956377516, 12.076757956377516, 12.076757956377516, 12.076757956377516, 12.076757956377516, 12.076757956377516, 12.076757956377516, 14.050000000000001, 5.1799999999999997, 10.58, 9.8900000000000006, 22.109999999999999, 19.420000000000002, 10.050000000000001, 16.649999999999999, 13.52, 11.23, 21.879999999999999, 18.379999999999999, 7.2999999999999998, 13.4, 25.07, 13.4, 14.16, 10.18, 11.289999999999999, 17.699999999999999, 10.890000000000001, 13.210000000000001, 10.140000000000001, 15.23, 17.140000000000001, 15.49, 6.2699999999999996, 16.129999999999999, 12.08, 14.94, 13.238786919131565, 17.07, 8.25, 10.32, 11.32, 15.67, 11.210000000000001, 8.7300000000000004, 11.965790809849318, 16.809999999999999, 8.7400000000000002, 14.08, 11.039999999999999, 14.67, 11.965790809849318, 9.3800000000000008, 2.0499999999999998, 12.789999999999999, 4.6500000000000004, 5.9699999999999998, 12.279999999999999, 10.23, 11.965790809849318, 20.199999999999999, 11.83, 9.8599999999999994, 7.0499999999999998, 12.140000000000001, 11.965790809849318, 26.359999999999999, 21.52, 38.340000000000003, 30.5, 9.7799999999999994, 12.43, 8.8300000000000001, 12.460000000000001, 20.510000000000002, 6.6500000000000004, 19.670000000000002, 11.965790809849318, 10.93, 18.140000000000001, 11.965790809849318, 11.965790809849318, 28.120000000000001, 11.965790809849318, 18.84, 10.26, 13.630000000000001, 11.26, 13.140000000000001, 11.859999999999999, 12.210000000000001, 10.369999999999999, 11.83, 9.1600000000000001, 11.523969500080559, 13.279999999999999, 10.06, 8.1400000000000006, 17.109999999999999, 14.710000000000001, 7.4299999999999997, 13.84, 13.58, 11.23, 12.07, 16.210000000000001, 11.523969500080559, 26.91, 10.9, 11.523969500080559, 11.523969500080559, 11.18, 14.81, 13.32, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 21.25, 11.523969500080559, 14.619999999999999, 13.82, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 11.523969500080559, 15.93, 19.719999999999999, 18.09, 18.09, 18.09, 18.09, 19.789999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [19.989999999999998, 24.079999999999998, 24.079999999999998, 24.079999999999998, 20.68, 19.68, 23.309999999999999, 18.780000000000001, 20.640000000000001, 21.309999999999999, 20.68, 26, 24.190000000000001, 16.079999999999998, 18.75, 20.670000000000002, 19.989999999999998, 21.27, 19.039999999999999, 20.530000000000001, 26, 27.93, 27.978599352176268, 33.479999999999997, 24.07, 24.070000000000004, 16.100000000000001, 22.02, 16.739999999999998, 22.5, 20.16, 20.039999999999999, 21.989999999999998, 21.989999999999998, 21.989999999999998, 21.989999999999998, 21.989999999999998, 11.460000000000001, 21.5, 21.5, 11.380000000000001, 11.380000000000001, 25.300000000000001, 19.440000000000001, 11.109999999999999, 19.510000000000002, 23.460000000000001, 18.52, 23.760000000000002, 19.079999999999998, 21.859999999999999, 20.602779531718475, 19.989999999999998, 20.602779531718475, 20.602779531718475, 15.66, 20.789999999999999, 11.66, 15.470000000000001, 14.097384023044127, 16.100000000000001, 11.119999999999999, 12.460000000000001, 7.4400000000000004, 18.43, 12.279999999999999, 14.109999999999999, 19.329999999999998, 14.75, 14.718999390334904, 9.1899999999999995, 9.6400000000000006, 11.460000000000001, 9.5899999999999999, 5.7800000000000002, 9.8300000000000001, 15.98, 9.9299999999999997, 13.580937510513401, 13.050000000000001, 17.609999999999999, 6.1600000000000001, 15.31, 13.380000000000001, 13.580937510513401, 16.91, 30.59, 23.289999999999999, 13.580937510513401, 13.580937510513401, 26.140000000000001, 16.43, 13.720000000000001, 13.580937510513401, 13.580937510513401, 20.199999999999999, 65.219999999999999, 13.580937510513401, 13.580937510513401, 13.580937510513401, 13.580937510513401, 13.580937510513401, 13.580937510513401, 13.580937510513401, 13.580937510513401, 13.580937510513401, 13.580937510513401, 13.580937510513401, 13.580937510513401, 13.580937510513401, 14.66, 5.0899999999999999, 11.529999999999999, 22.109999999999999, 10.779999999999999, 21.899999999999999, 11.18, 21.059999999999999, 14.74, 11.970000000000001, 22.149999999999999, 20.920000000000002, 10.23, 12.91, 28.969999999999999, 18.48, 19.359999999999999, 15.630000000000001, 13.98, 22.190000000000001, 11.35, 16.149999999999999, 11.380000000000001, 16.75, 18.350000000000001, 14.56, 7.5899999999999999, 16.629999999999999, 18.23, 15.76, 14.822749817540045, 17.789999999999999, 7.0899999999999999, 10.32, 12.33, 13.550000000000001, 6.5899999999999999, 7.5700000000000003, 19.899999999999999, 12.049532425718832, 8.7400000000000002, 12.51, 11.26, 15.220000000000001, 12.049532425718832, 9.3800000000000008, 9.4399999999999995, 13.57, 4.6500000000000004, 9.9600000000000009, 12.75, 11.289999999999999, 12.049532425718832, 19.699999999999999, 12.32, 10.66, 7.1799999999999997, 13.41, 12.049532425718832, 20.109999999999999, 23.550000000000001, 35.939999999999998, 43.479999999999997, 9.5999999999999996, 16.120000000000001, 8.8100000000000005, 13.92, 11.130000000000001, 21.82, 19.670000000000002, 12.049532425718832, 11.48, 19.629999999999999, 12.049532425718832, 12.049532425718832, 29.59, 12.049532425718832, 19.649999999999999, 11.380000000000001, 15.9, 12.869999999999999, 13.800000000000001, 13.699999999999999, 12.94, 11.470000000000001, 13.73, 10.35, 12.570459084463794, 14.710000000000001, 10.710000000000001, 6.9900000000000002, 18.699999999999999, 16.100000000000001, 9.1400000000000006, 14.5, 15.75, 11.52, 11.949999999999999, 16.539999999999999, 12.570459084463794, 26.91, 13.18, 12.570459084463794, 12.570459084463794, 12.67, 16.219999999999999, 15.859999999999999, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 24.829999999999998, 12.570459084463794, 16.850000000000001, 13.82, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 12.570459084463794, 16.809999999999999, 21.960000000000001, 18.43, 18.43, 18.43, 18.43, 19.780000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [19.559999999999999, 23.989999999999998, 23.989999999999998, 23.989999999999998, 20.550000000000001, 19.059999999999999, 22.359999999999999, 18.52, 20.629999999999999, 20.59, 20.489999999999998, 26.239999999999998, 23.73, 15.789999999999999, 19.260000000000002, 20.530000000000001, 19.199999999999999, 19.84, 18.41, 19.559999999999999, 25.030000000000001, 27.370000000000001, 27.417906322703768, 32.880000000000003, 23.690000000000001, 23.690000000000001, 15.01, 21.399999999999999, 16.5, 22.43, 20.420000000000002, 18.670000000000002, 21.530000000000001, 21.530000000000001, 21.530000000000001, 21.530000000000001, 21.530000000000001, 11.01, 21.23, 21.23, 11.18, 11.18, 24.82, 19.670000000000002, 11.16, 19.140000000000001, 23.129999999999999, 15.27, 18.210000000000001, 18.289999999999999, 22.09, 19.053843135425165, 19.989999999999998, 19.053843135425165, 19.053843135425165, 14.869999999999999, 18.73, 10.81, 12.51, 12.640979460448127, 16.02, 10.880000000000001, 11.33, 7.1299999999999999, 18.129999999999999, 12.039999999999999, 12.69, 19.199999999999999, 14.59, 14.557510559620095, 8.8599999999999994, 8.1500000000000004, 11.01, 9.0099999999999998, 10.380000000000001, 9.7200000000000006, 15.800000000000001, 9.6899999999999995, 12.917977164482521, 12.58, 16.16, 6.3399999999999999, 15.31, 11.9, 12.917977164482521, 14.98, 31.539999999999999, 22.149999999999999, 12.917977164482521, 12.917977164482521, 23.82, 18.27, 13.720000000000001, 12.917977164482521, 61.649999999999999, 12.917977164482521, 18.18, 12.917977164482521, 12.917977164482521, 12.917977164482521, 12.917977164482521, 12.917977164482521, 12.917977164482521, 12.917977164482521, 12.917977164482521, 12.917977164482521, 12.917977164482521, 12.917977164482521, 12.917977164482521, 12.917977164482521, 14.199999999999999, 5.0800000000000001, 10.92, 22.109999999999999, 9.9900000000000002, 20.469999999999999, 10.800000000000001, 18.920000000000002, 11.85, 13.32, 22.02, 19.25, 9.6799999999999997, 12.220000000000001, 25.829999999999998, 17.129999999999999, 16.370000000000001, 13.98, 12.93, 20.199999999999999, 11.16, 17.23, 9.4499999999999993, 16.59, 15.48, 15.69, 6.7400000000000002, 15.15, 17.460000000000001, 13.52, 14.207207838212852, 18, 7.2999999999999998, 10.32, 10.359999999999999, 12.949999999999999, 8.2699999999999996, 7.0700000000000003, 17.039999999999999, 12.090194077375173, 8.7400000000000002, 13.119999999999999, 11.41, 14.460000000000001, 12.090194077375173, 9.3800000000000008, 15.32, 14.16, 4.6500000000000004, 12.57, 13.08, 11.210000000000001, 12.090194077375173, 21.899999999999999, 13.1, 10.4, 7.6399999999999997, 10.57, 12.090194077375173, 31.809999999999999, 25.190000000000001, 30.780000000000001, 39.909999999999997, 10.140000000000001, 13.49, 9.1999999999999993, 13.82, 11.68, 21.489999999999998, 19.670000000000002, 12.090194077375173, 11.140000000000001, 19.789999999999999, 12.090194077375173, 12.090194077375173, 27.800000000000001, 12.090194077375173, 19.02, 11.27, 15.16, 12.550000000000001, 13.76, 11.210000000000001, 12.65, 10.529999999999999, 13.199999999999999, 10.65, 12.170299122602641, 13.83, 9.9299999999999997, 7.2800000000000002, 17.93, 15.710000000000001, 9.0600000000000005, 14.1, 16.620000000000001, 11.02, 12.609999999999999, 16.120000000000001, 12.170299122602641, 26.91, 13.32, 12.170299122602641, 12.170299122602641, 12.52, 16.43, 15.42, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 26.469999999999999, 12.170299122602641, 16.73, 13.82, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 12.170299122602641, 16.690000000000001, 21.48, 18.829999999999998, 18.829999999999998, 18.829999999999998, 18.829999999999998, 19.699999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [19.07, 23.739999999999998, 23.739999999999998, 23.739999999999998, 19.82, 19.600000000000001, 22.100000000000001, 19.09, 20.670000000000002, 19.710000000000001, 19.899999999999999, 25.789999999999999, 24.050000000000001, 16.039999999999999, 18.210000000000001, 19.800000000000001, 18.32, 18.32, 18.629999999999999, 18.370000000000001, 24.940000000000001, 26.559999999999999, 26.612178985480806, 32.600000000000001, 23.359999999999999, 23.359999999999999, 13.470000000000001, 20.600000000000001, 15.85, 22.890000000000001, 20.559999999999999, 19.079999999999998, 20.899999999999999, 20.899999999999999, 20.899999999999999, 20.899999999999999, 20.899999999999999, 11.08, 20.789999999999999, 20.789999999999999, 11.279999999999999, 11.279999999999999, 24.879999999999999, 17.690000000000001, 10.970000000000001, 18.940000000000001, 13.73, 23.09, 16.559999999999999, 18.120000000000001, 21.059999999999999, 18.435351796334643, 18.435351796334643, 19.989999999999998, 18.435351796334643, 13.6, 17.629999999999999, 10.48, 11.970000000000001, 12.181110065626804, 13.449999999999999, 10.130000000000001, 13.65, 6.6299999999999999, 18.23, 11.91, 12.26, 19.890000000000001, 15.24, 15.202550138017333, 8.7100000000000009, 7.0899999999999999, 11.08, 9.0600000000000005, 9.9800000000000004, 9.7100000000000009, 16.140000000000001, 9.2400000000000002, 12.662688671319376, 13.27, 14.710000000000001, 6.0199999999999996, 15.31, 11.56, 12.662688671319376, 17.32, 24.559999999999999, 18.73, 12.662688671319376, 12.662688671319376, 23.289999999999999, 16.91, 13.34, 12.662688671319376, 62.310000000000002, 12.662688671319376, 18.329999999999998, 12.662688671319376, 12.662688671319376, 12.662688671319376, 12.662688671319376, 12.662688671319376, 12.662688671319376, 12.662688671319376, 12.662688671319376, 12.662688671319376, 12.662688671319376, 12.662688671319376, 12.662688671319376, 12.662688671319376, 14.369999999999999, 5.0999999999999996, 10.23, 22.109999999999999, 8.1999999999999993, 20.550000000000001, 13.199999999999999, 19.670000000000002, 12.800000000000001, 12.779999999999999, 21.879999999999999, 20.059999999999999, 9.6699999999999999, 12.57, 25.859999999999999, 14.880000000000001, 15.82, 11.039999999999999, 13.84, 19.23, 11.449999999999999, 20.670000000000002, 6.25, 17.219999999999999, 16.390000000000001, 18.789999999999999, 6.4800000000000004, 16.43, 43.700000000000003, 10.460000000000001, 15.724542151134743, 18.199999999999999, 8.0600000000000005, 10.32, 9.6999999999999993, 12.68, 15.4, 13.789999999999999, 18.239999999999998, 13.336199370178072, 8.7400000000000002, 14.119999999999999, 12.050000000000001, 14.289999999999999, 13.336199370178072, 10.25, 18.77, 14.83, 4.6500000000000004, 14.98, 12.02, 13.336199370178072, 11.02, 22.899999999999999, 12.09, 10.109999999999999, 12.83, 7.1500000000000004, 13.336199370178072, 26.620000000000001, 22.859999999999999, 28.329999999999998, 38.18, 9.2300000000000004, 12.789999999999999, 8.6699999999999999, 13.460000000000001, 11.779999999999999, 19.780000000000001, 19.670000000000002, 13.336199370178072, 10.66, 19.890000000000001, 13.336199370178072, 13.336199370178072, 28.370000000000001, 13.336199370178072, 18.670000000000002, 11.33, 15.69, 12.31, 13.35, 11.52, 12.76, 10.359999999999999, 12.73, 10.359999999999999, 11.821043221951271, 13.779999999999999, 9.3200000000000003, 6.5499999999999998, 16.059999999999999, 15.76, 13.6, 10.06, 16.960000000000001, 11.859999999999999, 10.470000000000001, 15.800000000000001, 11.821043221951271, 26.91, 13.32, 11.821043221951271, 11.821043221951271, 13.76, 16.399999999999999, 15.470000000000001, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 25.109999999999999, 11.821043221951271, 17.370000000000001, 14.039999999999999, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 11.821043221951271, 16.100000000000001, 21.149999999999999, 18.66, 18.66, 18.66, 18.66, 19.579999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [19.280000000000001, 23.949999999999999, 23.949999999999999, 23.949999999999999, 19.809999999999999, 19.829999999999998, 22.260000000000002, 18.809999999999999, 19.98, 18.34, 19.859999999999999, 26.030000000000001, 24.300000000000001, 16.300000000000001, 18.120000000000001, 19.449999999999999, 17.82, 17.449999999999999, 17.32, 18.199999999999999, 25.75, 26.469999999999999, 26.515209693923417, 31.75, 24.100000000000001, 24.100000000000001, 13.779999999999999, 19.960000000000001, 15.789999999999999, 22.800000000000001, 20.359999999999999, 18.239999999999998, 20.739999999999998, 20.739999999999998, 20.739999999999998, 20.739999999999998, 20.739999999999998, 10.68, 20.609999999999999, 20.609999999999999, 11.31, 11.31, 24.760000000000002, 18.940000000000001, 10.84, 18.969999999999999, 13.619999999999999, 23.370000000000001, 16.690000000000001, 18.649999999999999, 21.09, 18.531123721245248, 18.531123721245248, 19.989999999999998, 18.531123721245248, 14.130000000000001, 17.969999999999999, 11.52, 12.359999999999999, 12.410671215619468, 13.57, 10.529999999999999, 12.84, 5.9400000000000004, 20.109999999999999, 10.91, 13.529999999999999, 19.960000000000001, 15.76, 15.721327566179212, 9.0999999999999996, 6.8700000000000001, 10.68, 9.25, 10.449999999999999, 10.789999999999999, 16.350000000000001, 8.8599999999999994, 12.626199158834352, 13.84, 13.26, 5.7800000000000002, 15.31, 13.42, 12.626199158834352, 18.73, 25.489999999999998, 18.440000000000001, 12.626199158834352, 12.626199158834352, 23.600000000000001, 16.170000000000002, 14.34, 12.626199158834352, 64.090000000000003, 12.626199158834352, 19.440000000000001, 12.626199158834352, 12.626199158834352, 12.626199158834352, 12.626199158834352, 12.626199158834352, 12.626199158834352, 12.626199158834352, 12.626199158834352, 12.626199158834352, 12.626199158834352, 12.626199158834352, 12.626199158834352, 12.626199158834352, 14.69, 5.04, 10.1, 22.109999999999999, 7.9000000000000004, 19.640000000000001, 13.33, 16.579999999999998, 14.460000000000001, 14.56, 22.109999999999999, 19.109999999999999, 9.4800000000000004, 13.67, 25.609999999999999, 17.140000000000001, 15.06, 12.25, 15.44, 19.809999999999999, 11.18, 20.32, 6.4500000000000002, 18.23, 15.1, 15.48, 6.8799999999999999, 16.66, 24.370000000000001, 12.07, 14.776754411067078, 18.82, 7.8200000000000003, 8.3000000000000007, 10.43, 12.27, 7.5899999999999999, 11.76, 17.84, 12.822046104437881, 8.7400000000000002, 15.01, 12.26, 14.25, 12.822046104437881, 11.9, 20.010000000000002, 14.57, 4.6500000000000004, 14.48, 12.949999999999999, 12.822046104437881, 11.130000000000001, 23.300000000000001, 11.609999999999999, 10.289999999999999, 13.76, 10.92, 12.822046104437881, 26.620000000000001, 24.969999999999999, 31.84, 8.75, 39.509999999999998, 14.029999999999999, 9.7699999999999996, 11.57, 13.359999999999999, 18.309999999999999, 19.670000000000002, 12.822046104437881, 10.039999999999999, 18.52, 12.822046104437881, 12.822046104437881, 27.399999999999999, 12.822046104437881, 18.530000000000001, 11.449999999999999, 16.649999999999999, 12.33, 13.48, 12.19, 13.27, 10.869999999999999, 13.34, 10.51, 12.161544242456745, 13.44, 9.8900000000000006, 7.4400000000000004, 16.199999999999999, 15.76, 13.57, 11.73, 16.789999999999999, 10.859999999999999, 10.630000000000001, 16.280000000000001, 12.161544242456745, 26.91, 13.32, 12.161544242456745, 12.161544242456745, 13.09, 16.16, 15.199999999999999, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 26.18, 12.161544242456745, 18.440000000000001, 14.109999999999999, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 12.161544242456745, 15.48, 21.059999999999999, 18.899999999999999, 18.899999999999999, 18.899999999999999, 18.899999999999999, 19.379999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [19.629999999999999, 24.109999999999999, 24.109999999999999, 24.109999999999999, 19.809999999999999, 18.760000000000002, 20.719999999999999, 18.449999999999999, 19.91, 18.850000000000001, 19.920000000000002, 25.789999999999999, 24.309999999999999, 16.350000000000001, 18.420000000000002, 19.719999999999999, 18.079999999999998, 16.66, 17.640000000000001, 18.640000000000001, 26.199999999999999, 26.010000000000002, 26.04739948488287, 30.399999999999999, 24.539999999999999, 24.539999999999999, 14.26, 19.719999999999999, 17.079999999999998, 22.68, 19.640000000000001, 17.18, 20.129999999999999, 20.129999999999999, 20.129999999999999, 20.129999999999999, 20.129999999999999, 10.300000000000001, 20.98, 20.98, 11.41, 11.41, 24.350000000000001, 18.899999999999999, 11.029999999999999, 17.899999999999999, 14.02, 22.829999999999998, 15.31, 17.5, 19.48, 17.727685337205013, 17.727685337205013, 19.989999999999998, 17.727685337205013, 14.02, 18.68, 10.17, 13.32, 12.715472638192734, 13.43, 10.279999999999999, 13.300000000000001, 6.0599999999999996, 18.449999999999999, 11.94, 13.460000000000001, 19.850000000000001, 15.880000000000001, 15.841443795336989, 9.2899999999999991, 6.5, 10.300000000000001, 9.5199999999999996, 10.92, 10.82, 16.359999999999999, 9.7400000000000002, 12.527157798548847, 13.720000000000001, 11.81, 5.6100000000000003, 15.31, 17.07, 12.527157798548847, 18.940000000000001, 30.559999999999999, 20.16, 12.527157798548847, 24.16, 12.527157798548847, 15.74, 14.57, 12.527157798548847, 61.479999999999997, 12.527157798548847, 20.050000000000001, 12.527157798548847, 12.527157798548847, 12.527157798548847, 12.527157798548847, 12.527157798548847, 12.527157798548847, 12.527157798548847, 12.527157798548847, 12.527157798548847, 12.527157798548847, 12.527157798548847, 12.527157798548847, 12.527157798548847, 14.98, 5.1200000000000001, 10.26, 22.109999999999999, 7.5300000000000002, 17.760000000000002, 12.970000000000001, 17.460000000000001, 13.09, 19.109999999999999, 22.109999999999999, 18.260000000000002, 10.710000000000001, 12.93, 25.02, 18.899999999999999, 16.390000000000001, 14.56, 15.550000000000001, 22.23, 11.35, 19.140000000000001, 6.4000000000000004, 18.329999999999998, 15.300000000000001, 16.879999999999999, 7.9199999999999999, 17.300000000000001, 31.66, 11.69, 15.035035818149112, 19.079999999999998, 8.1899999999999995, 8.9600000000000009, 10.050000000000001, 11.84, 7.0999999999999996, 8.7799999999999994, 21.620000000000001, 12.979786547464666, 15.65, 8.7400000000000002, 12.26, 14.66, 12.979786547464666, 12.18, 18.440000000000001, 14.6, 4.6500000000000004, 18.870000000000001, 12.979786547464666, 12.859999999999999, 11.039999999999999, 24.699999999999999, 12.41, 8.7100000000000009, 14.07, 17.359999999999999, 12.979786547464666, 26.620000000000001, 27.940000000000001, 31.059999999999999, 9.2699999999999996, 40.549999999999997, 14.460000000000001, 7.1200000000000001, 15.4, 14.35, 18.559999999999999, 19.670000000000002, 12.979786547464666, 9.3300000000000001, 18.75, 12.979786547464666, 12.979786547464666, 26.469999999999999, 12.979786547464666, 18.890000000000001, 11.710000000000001, 16.809999999999999, 12.789999999999999, 14.1, 12.390000000000001, 13.52, 11.5, 14.01, 11.289999999999999, 12.551159461506847, 13.84, 7.1900000000000004, 10.449999999999999, 16.73, 16.309999999999999, 13.76, 11.300000000000001, 17.129999999999999, 10.710000000000001, 10.34, 15.5, 12.551159461506847, 26.91, 13.32, 12.551159461506847, 12.551159461506847, 12.93, 16.57, 14.76, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 26.190000000000001, 12.551159461506847, 19.859999999999999, 13.66, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 12.551159461506847, 15.039999999999999, 20.699999999999999, 18.850000000000001, 18.850000000000001, 18.850000000000001, 18.850000000000001, 18.739999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [19.59, 24.129999999999999, 24.129999999999999, 24.129999999999999, 19.539999999999999, 18.510000000000002, 20.59, 16.789999999999999, 19.670000000000002, 18.399999999999999, 19.800000000000001, 25.68, 24.23, 16.050000000000001, 18.350000000000001, 19.329999999999998, 18.359999999999999, 16.609999999999999, 17.829999999999998, 18.73, 26.079999999999998, 25.789999999999999, 25.816120255387339, 28.859999999999999, 24.510000000000002, 24.510000000000002, 14.43, 19.989999999999998, 16.829999999999998, 23.09, 18.890000000000001, 16.41, 19.870000000000001, 19.870000000000001, 19.870000000000001, 19.870000000000001, 19.870000000000001, 10.44, 21.719999999999999, 21.719999999999999, 11.48, 11.48, 24.120000000000001, 18.670000000000002, 11.449999999999999, 18.050000000000001, 14.27, 22.859999999999999, 13.91, 17.109999999999999, 19.370000000000001, 17.6038838764457, 17.6038838764457, 19.989999999999998, 17.6038838764457, 14.02, 18.030000000000001, 10.69, 13.25, 12.841225651542439, 10.890000000000001, 13.75, 14.039999999999999, 6.5800000000000001, 17.469999999999999, 12.09, 13.02, 19.93, 15.82, 15.782850012379402, 9.4800000000000004, 7.0999999999999996, 10.44, 9.4299999999999997, 10.32, 10.56, 16.920000000000002, 9.6300000000000008, 11.892874660779574, 13.33, 10.359999999999999, 5.4900000000000002, 15.31, 15.18, 11.892874660779574, 20, 30.52, 21.420000000000002, 11.892874660779574, 23.43, 11.892874660779574, 13.92, 15.890000000000001, 11.892874660779574, 70.890000000000001, 11.892874660779574, 20.18, 11.892874660779574, 11.892874660779574, 11.892874660779574, 11.892874660779574, 11.892874660779574, 11.892874660779574, 11.892874660779574, 11.892874660779574, 11.892874660779574, 11.892874660779574, 11.892874660779574, 11.892874660779574, 11.892874660779574, 15.23, 5.3399999999999999, 10.029999999999999, 22.109999999999999, 8, 17.350000000000001, 12.82, 18, 12.19, 19.620000000000001, 18.219999999999999, 21.98, 10.640000000000001, 12.75, 25.18, 21.620000000000001, 17.760000000000002, 15.470000000000001, 16.129999999999999, 25.710000000000001, 11.85, 19.530000000000001, 6.0800000000000001, 19.109999999999999, 17.940000000000001, 16.260000000000002, 6.2300000000000004, 17.329999999999998, 42.649999999999999, 13.630000000000001, 15.67681829136821, 19.309999999999999, 8.3200000000000003, 9.25, 9.8699999999999992, 11.74, 7.4299999999999997, 8.2699999999999996, 17.98, 12.883976733668764, 15.800000000000001, 8.7400000000000002, 12.06, 15.470000000000001, 12.883976733668764, 14.52, 19.559999999999999, 14.73, 4.8799999999999999, 17.789999999999999, 14.279999999999999, 12.883976733668764, 10.18, 25.899999999999999, 12.08, 7.1500000000000004, 16.73, 15.529999999999999, 12.883976733668764, 26.620000000000001, 27.73, 29.25, 8.8399999999999999, 38.840000000000003, 14.85, 13.83, 15.890000000000001, 14.34, 19.280000000000001, 19.09, 12.883976733668764, 10.279999999999999, 19.789999999999999, 12.883976733668764, 12.883976733668764, 23.280000000000001, 12.883976733668764, 19.149999999999999, 11.75, 16.949999999999999, 13.23, 14.24, 14.6, 13.699999999999999, 12.4, 14.300000000000001, 11.26, 12.771910349461026, 14.710000000000001, 7.6600000000000001, 10.470000000000001, 15.33, 15.949999999999999, 11.550000000000001, 14.279999999999999, 17.010000000000002, 10.039999999999999, 10.77, 14.52, 12.771910349461026, 26.91, 13.32, 12.771910349461026, 12.771910349461026, 12.199999999999999, 16.359999999999999, 14.31, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 24.82, 12.771910349461026, 20.469999999999999, 12.83, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 12.771910349461026, 14.619999999999999, 20.27, 18.77, 18.77, 18.77, 18.77, 18.77],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [19.690000000000001, 23.809999999999999, 23.809999999999999, 23.809999999999999, 19.109999999999999, 17.09, 20.649999999999999, 16.350000000000001, 19.52, 17.850000000000001, 19.760000000000002, 24.98, 23.620000000000001, 15.970000000000001, 18.02, 18.920000000000002, 18.550000000000001, 17.210000000000001, 18.079999999999998, 19.579999999999998, 25.719999999999999, 25.469999999999999, 25.4938005322044, 28.260000000000002, 24.379999999999999, 24.379999999999995, 13.92, 19.710000000000001, 16.09, 22.449999999999999, 18.82, 12.52, 19.550000000000001, 19.550000000000001, 19.550000000000001, 19.550000000000001, 19.550000000000001, 10.43, 23.100000000000001, 23.100000000000001, 11.539999999999999, 11.539999999999999, 23.43, 18.920000000000002, 11.109999999999999, 16.41, 14.289999999999999, 21.969999999999999, 13.699999999999999, 16.98, 19.199999999999999, 16.731569010602325, 16.731569010602325, 19.989999999999998, 16.731569010602325, 13.81, 17.77, 11.630000000000001, 13.619999999999999, 13.333520556235376, 12.41, 14.92, 11.56, 8.4600000000000009, 17.760000000000002, 14.869999999999999, 13.109999999999999, 19.620000000000001, 16.219999999999999, 16.182395181504578, 9.6400000000000006, 9.6699999999999999, 10.43, 9.75, 10.65, 10.91, 17.120000000000001, 10.19, 11.450625263408307, 13.09, 8.9100000000000001, 5.4000000000000004, 15.31, 15.109999999999999, 11.450625263408307, 20.149999999999999, 29.57, 11.450625263408307, 25.059999999999999, 23.829999999999998, 11.450625263408307, 16.460000000000001, 15.19, 11.450625263408307, 62.890000000000001, 11.450625263408307, 21.32, 11.450625263408307, 11.450625263408307, 11.450625263408307, 11.450625263408307, 11.450625263408307, 11.450625263408307, 11.450625263408307, 11.450625263408307, 11.450625263408307, 11.450625263408307, 11.450625263408307, 11.450625263408307, 11.450625263408307, 15.08, 5.4000000000000004, 9.7899999999999991, 22.109999999999999, 8.8100000000000005, 18.260000000000002, 15.57, 18.670000000000002, 10.800000000000001, 16.719999999999999, 17.82, 12.02, 21.920000000000002, 12.529999999999999, 25.010000000000002, 24.640000000000001, 24.190000000000001, 20.23, 17.690000000000001, 29.32, 11.76, 6.1699999999999999, 21.559999999999999, 18.16, 16.5, 16.370000000000001, 5.1500000000000004, 17.91, 50.840000000000003, 14.619999999999999, 16.029605847321342, 18.989999999999998, 9.0600000000000005, 9.0099999999999998, 9.9299999999999997, 12.73, 8.9499999999999993, 7.6799999999999997, 16.43, 13.018408712639808, 15.140000000000001, 8.7400000000000002, 12.25, 15.94, 13.018408712639808, 14.779999999999999, 14.300000000000001, 18.879999999999999, 4.6900000000000004, 19.5, 13.85, 11.41, 13.018408712639808, 22.420000000000002, 13.029999999999999, 10.17, 19.309999999999999, 13.018408712639808, 14.779999999999999, 26.620000000000001, 27.23, 8.3300000000000001, 31.640000000000001, 36.939999999999998, 14.82, 11.33, 21.780000000000001, 14.19, 21.960000000000001, 19.91, 13.018408712639808, 10.59, 20.260000000000002, 13.018408712639808, 13.018408712639808, 23.18, 13.018408712639808, 19.780000000000001, 11.9, 18.100000000000001, 13.59, 14.81, 14.6, 13.84, 12.970000000000001, 14.43, 11.09, 13.039997546098844, 17.5, 8.2599999999999998, 10.289999999999999, 14.31, 16.5, 11.800000000000001, 14.050000000000001, 16.960000000000001, 10.289999999999999, 8.8000000000000007, 13.82, 13.039997546098844, 26.91, 13.32, 13.039997546098844, 11.529999999999999, 13.039997546098844, 17.170000000000002, 13.58, 13.039997546098844, 13.039997546098844, 13.039997546098844, 13.039997546098844, 23.260000000000002, 13.039997546098844, 13.039997546098844, 13.039997546098844, 21.350000000000001, 12.5, 13.039997546098844, 13.039997546098844, 13.039997546098844, 13.039997546098844, 13.039997546098844, 13.039997546098844, 13.039997546098844, 13.039997546098844, 13.039997546098844, 13.039997546098844, 13.039997546098844, 13.039997546098844, 13.039997546098844, 13.039997546098844, 14.33, 20.879999999999999, 19.18, 19.18, 19.18, 19.18, 18.5],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [19.899999999999999, 23.73, 23.73, 23.73, 19.030000000000001, 15.83, 20.609999999999999, 15.25, 19.100000000000001, 17.59, 19.649999999999999, 24.68, 23.260000000000002, 15.67, 17.949999999999999, 18.960000000000001, 18.879999999999999, 17, 17.84, 19.719999999999999, 26.370000000000001, 24.870000000000001, 24.893886660502492, 27.66, 23.670000000000002, 23.670000000000002, 15.23, 19.960000000000001, 15.59, 21.969999999999999, 19.039999999999999, 12.83, 19.219999999999999, 19.219999999999999, 19.219999999999999, 19.219999999999999, 19.219999999999999, 10.31, 24.219999999999999, 24.219999999999999, 11.51, 11.51, 23.010000000000002, 18.600000000000001, 11.27, 16, 15.31, 20.91, 14.380000000000001, 15.43, 19.609999999999999, 16.524346350719519, 16.524346350719519, 19.699999999999999, 16.524346350719519, 14.73, 18.469999999999999, 11.630000000000001, 14.140000000000001, 13.743239492647916, 12.83, 15.65, 11.76, 8.5999999999999996, 17.43, 15.960000000000001, 13.449999999999999, 19.66, 16.359999999999999, 16.323573648580926, 9.9600000000000009, 10.4, 10.31, 9.5299999999999994, 10.4, 11.26, 16.870000000000001, 10.26, 10.951357585975202, 12.56, 8.1699999999999999, 5.21, 15.31, 13.970000000000001, 10.951357585975202, 18.940000000000001, 29.079999999999998, 10.951357585975202, 26.219999999999999, 24.469999999999999, 10.951357585975202, 14.9, 12.57, 10.951357585975202, 68.670000000000002, 10.951357585975202, 20.420000000000002, 10.951357585975202, 10.951357585975202, 10.951357585975202, 10.951357585975202, 10.951357585975202, 10.951357585975202, 10.951357585975202, 10.951357585975202, 10.951357585975202, 10.951357585975202, 10.951357585975202, 10.951357585975202, 10.951357585975202, 15.24, 5.8700000000000001, 10.609999999999999, 22.109999999999999, 7.9299999999999997, 17.280000000000001, 15.779999999999999, 18.390000000000001, 8.8000000000000007, 16.73, 17.25, 12.109999999999999, 21.899999999999999, 12.98, 26.120000000000001, 23.530000000000001, 25.710000000000001, 19.539999999999999, 17.109999999999999, 25.010000000000002, 11.43, 5.5899999999999999, 20.890000000000001, 18.359999999999999, 15.27, 16.239999999999998, 4.21, 18.719999999999999, 48.420000000000002, 13.44, 15.486107777838784, 19.309999999999999, 7.4400000000000004, 11.130000000000001, 9.0700000000000003, 12.609999999999999, 7.3499999999999996, 7.8899999999999997, 13.880000000000001, 12.715645506039806, 14.76, 9.2300000000000004, 12.119999999999999, 16.510000000000002, 12.715645506039806, 16.07, 14.029999999999999, 18.120000000000001, 5.29, 16.879999999999999, 15.07, 10.279999999999999, 23.469999999999999, 12.715645506039806, 15.48, 11.83, 21.309999999999999, 12.715645506039806, 14.41, 26.620000000000001, 26.989999999999998, 8.4499999999999993, 28.48, 39.310000000000002, 14.640000000000001, 9.8200000000000003, 25.210000000000001, 14.880000000000001, 24.5, 22.23, 12.715645506039806, 10.609999999999999, 19.829999999999998, 12.715645506039806, 12.715645506039806, 23.280000000000001, 12.715645506039806, 20.379999999999999, 11.57, 17.649999999999999, 14.34, 14.539999999999999, 14.6, 13.84, 13.16, 14.609999999999999, 10.44, 12.996584255373065, 17.460000000000001, 8.2100000000000009, 10.300000000000001, 14.109999999999999, 11.359999999999999, 14.460000000000001, 16.32, 16.710000000000001, 10.970000000000001, 8.25, 13.84, 12.996584255373065, 26.91, 13.32, 12.996584255373065, 10.84, 12.996584255373065, 18.109999999999999, 13.390000000000001, 12.996584255373065, 12.996584255373065, 12.996584255373065, 12.996584255373065, 23.489999999999998, 12.996584255373065, 12.996584255373065, 12.996584255373065, 19.079999999999998, 12.130000000000001, 12.996584255373065, 12.996584255373065, 12.996584255373065, 12.996584255373065, 12.996584255373065, 12.996584255373065, 12.996584255373065, 12.996584255373065, 12.996584255373065, 12.996584255373065, 12.996584255373065, 12.996584255373065, 12.996584255373065, 12.996584255373065, 14.24, 21.050000000000001, 19.960000000000001, 19.960000000000001, 19.960000000000001, 19.960000000000001, 18.149999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [19.84, 23.640000000000001, 23.640000000000001, 23.640000000000001, 18.829999999999998, 14.539999999999999, 20.489999999999998, 14.82, 18.66, 17.18, 19.489999999999998, 24.32, 23.030000000000001, 16.219999999999999, 17.690000000000001, 18.760000000000002, 18.899999999999999, 16.300000000000001, 18, 19.260000000000002, 26.02, 24.41, 24.43726925234413, 27.57, 22.789999999999999, 22.789999999999999, 15.75, 20.190000000000001, 15.58, 21.82, 18.449999999999999, 12.32, 18.66, 18.66, 18.66, 18.66, 18.66, 10.77, 23.809999999999999, 23.809999999999999, 11.51, 11.51, 23.68, 20.68, 11.5, 16.140000000000001, 13.85, 20.170000000000002, 14.76, 14.92, 18.43, 16.173523733954955, 16.173523733954955, 19.870000000000001, 16.173523733954955, 14.380000000000001, 18.219999999999999, 10.539999999999999, 12.6, 12.80648239113334, 11.34, 15.65, 11.390000000000001, 9.3699999999999992, 17.129999999999999, 13.93, 12.32, 19.41, 16.32, 16.282788265335554, 9.8300000000000001, 9.7300000000000004, 10.77, 9.1199999999999992, 10.130000000000001, 11.32, 16.300000000000001, 10.19, 10.714692329854916, 12.19, 7.8499999999999996, 5.1200000000000001, 15.31, 13.970000000000001, 10.714692329854916, 19.280000000000001, 25.98, 10.714692329854916, 26.48, 23.510000000000002, 10.714692329854916, 17.440000000000001, 12.119999999999999, 10.714692329854916, 66.109999999999999, 10.714692329854916, 20.059999999999999, 10.714692329854916, 10.714692329854916, 10.714692329854916, 10.714692329854916, 10.714692329854916, 10.714692329854916, 10.714692329854916, 10.714692329854916, 10.714692329854916, 10.714692329854916, 10.714692329854916, 10.714692329854916, 10.714692329854916, 15.42, 6.0199999999999996, 10.75, 22.109999999999999, 8.5199999999999996, 18.190000000000001, 16.059999999999999, 16.309999999999999, 6.1100000000000003, 16.489999999999998, 16.949999999999999, 13.050000000000001, 22.079999999999998, 13.210000000000001, 24.530000000000001, 20.75, 24.420000000000002, 17.609999999999999, 16.629999999999999, 23.530000000000001, 9.5800000000000001, 6.4299999999999997, 18.949999999999999, 17.98, 15.460000000000001, 16.18, 4.3300000000000001, 19.120000000000001, 40.270000000000003, 13.380000000000001, 14.910966738435459, 19.239999999999998, 5.46, 11.109999999999999, 8.5, 12.34, 8.0099999999999998, 12.94, 6.96, 12.587474865254459, 16.120000000000001, 9.5999999999999996, 11.68, 17.739999999999998, 12.587474865254459, 13.720000000000001, 13.630000000000001, 5.8899999999999997, 21.649999999999999, 15.279999999999999, 15.01, 10.48, 25.09, 12.587474865254459, 13.98, 10.470000000000001, 18.09, 12.587474865254459, 14.07, 26.620000000000001, 25.600000000000001, 7.8700000000000001, 28.879999999999999, 39.689999999999998, 13.23, 9.3000000000000007, 23.690000000000001, 14.449999999999999, 25.149999999999999, 21.77, 12.587474865254459, 10.82, 17.77, 12.587474865254459, 12.587474865254459, 22.940000000000001, 12.587474865254459, 20.16, 11.220000000000001, 17.699999999999999, 14.65, 14.880000000000001, 14.6, 13.84, 13.210000000000001, 14.57, 10.57, 17.02, 12.954090615926161, 7.9000000000000004, 10.94, 13.5, 11.109999999999999, 14.41, 16.129999999999999, 16.359999999999999, 11.42, 8.7599999999999998, 13.380000000000001, 12.954090615926161, 26.91, 13.32, 12.954090615926161, 11.9, 12.954090615926161, 18.82, 12.119999999999999, 12.954090615926161, 12.954090615926161, 12.954090615926161, 12.954090615926161, 23.02, 12.954090615926161, 12.954090615926161, 12.954090615926161, 24.079999999999998, 12.954090615926161, 11.630000000000001, 12.954090615926161, 12.954090615926161, 12.954090615926161, 12.954090615926161, 12.954090615926161, 12.954090615926161, 12.954090615926161, 12.954090615926161, 12.954090615926161, 12.954090615926161, 12.954090615926161, 12.954090615926161, 12.954090615926161, 14, 20.699999999999999, 19.93, 19.93, 19.93, 19.93, 17.920000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [19.879999999999999, 23.27, 23.27, 23.27, 18.879999999999999, 15.390000000000001, 19.780000000000001, 14.58, 18.710000000000001, 16.98, 19.34, 24.370000000000001, 23.140000000000001, 16.800000000000001, 17.649999999999999, 19.41, 18.649999999999999, 16.370000000000001, 17.899999999999999, 19.129999999999999, 26.059999999999999, 24.280000000000001, 24.316036771506994, 28.41, 22.899999999999999, 22.899999999999999, 16.66, 19.690000000000001, 16.420000000000002, 21.84, 18.25, 12.02, 18.539999999999999, 18.539999999999999, 18.539999999999999, 18.539999999999999, 18.539999999999999, 10.82, 23.109999999999999, 23.109999999999999, 11.26, 11.26, 24.149999999999999, 20.77, 11.289999999999999, 16.539999999999999, 13.210000000000001, 19.66, 14.279999999999999, 14.279999999999999, 18.5, 16.024028455268787, 16.024028455268787, 19.41, 16.024028455268787, 14.51, 17.710000000000001, 8.3200000000000003, 13.43, 12.99537960880274, 10.470000000000001, 15.74, 11.220000000000001, 10.02, 17.170000000000002, 12.69, 11.49, 19.559999999999999, 16.539999999999999, 16.501768399177386, 9.9299999999999997, 9.4399999999999995, 10.82, 9.0199999999999996, 9.75, 12.039999999999999, 16.170000000000002, 9.9800000000000004, 10.811726222329522, 11.970000000000001, 8.6099999999999994, 4.9299999999999997, 15.31, 13.970000000000001, 10.811726222329522, 20.390000000000001, 26.829999999999998, 10.811726222329522, 24.140000000000001, 16.920000000000002, 23.510000000000002, 10.811726222329522, 13.41, 10.811726222329522, 74.650000000000006, 10.811726222329522, 19.219999999999999, 10.811726222329522, 10.811726222329522, 10.811726222329522, 10.811726222329522, 10.811726222329522, 10.811726222329522, 10.811726222329522, 10.811726222329522, 10.811726222329522, 10.811726222329522, 10.811726222329522, 10.811726222329522, 10.811726222329522, 16.050000000000001, 5.96, 10.99, 22.109999999999999, 8.0600000000000005, 18.489999999999998, 15.75, 15.880000000000001, 9.1400000000000006, 15.960000000000001, 16.739999999999998, 11.69, 22.350000000000001, 15.34, 21.559999999999999, 21.989999999999998, 23.050000000000001, 16.280000000000001, 16.289999999999999, 23.600000000000001, 7.9400000000000004, 6.71, 17.260000000000002, 18, 15.17, 15.880000000000001, 3.6000000000000001, 18.390000000000001, 35.340000000000003, 12.98, 14.240964785500182, 19.350000000000001, 6.3200000000000003, 10.25, 8.1099999999999994, 12.35, 8.6400000000000006, 10.470000000000001, 7.0999999999999996, 11.781159326031924, 13.6, 9.4000000000000004, 11.92, 18.420000000000002, 11.781159326031924, 12.710000000000001, 13.779999999999999, 5.9800000000000004, 10.369999999999999, 15.48, 14.75, 10.41, 26.210000000000001, 11.781159326031924, 13.199999999999999, 9.2400000000000002, 13.5, 11.781159326031924, 7.7000000000000002, 26.620000000000001, 25.370000000000001, 6.8200000000000003, 29.100000000000001, 10.57, 38.060000000000002, 12.619999999999999, 23.530000000000001, 14.56, 23.100000000000001, 21.350000000000001, 11.781159326031924, 10.23, 18.129999999999999, 11.781159326031924, 11.781159326031924, 22.149999999999999, 11.781159326031924, 19.899999999999999, 11.26, 15.81, 14.859999999999999, 15.42, 14.6, 13.84, 13.08, 14.720000000000001, 11.119999999999999, 17.530000000000001, 13.084577632247335, 8.2599999999999998, 10.859999999999999, 13.460000000000001, 11.52, 14.800000000000001, 16.109999999999999, 16.199999999999999, 11.42, 7.9800000000000004, 13.44, 13.084577632247335, 26.91, 13.32, 13.084577632247335, 11.460000000000001, 19.41, 13.084577632247335, 11.76, 13.084577632247335, 13.084577632247335, 13.084577632247335, 13.084577632247335, 23.07, 13.084577632247335, 13.084577632247335, 13.084577632247335, 27.390000000000001, 13.084577632247335, 11.73, 13.084577632247335, 13.084577632247335, 13.084577632247335, 13.084577632247335, 13.084577632247335, 13.084577632247335, 13.084577632247335, 13.084577632247335, 13.084577632247335, 13.084577632247335, 13.084577632247335, 13.084577632247335, 13.084577632247335, 13.960000000000001, 20.68, 19.989999999999998, 19.989999999999998, 19.989999999999998, 19.989999999999998, 18.23],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [20.25, 22.98, 22.98, 22.98, 18.620000000000001, 16.32, 20.18, 16.09, 18.859999999999999, 17, 19.460000000000001, 24.620000000000001, 23.039999999999999, 17.239999999999998, 18.02, 19.59, 19.579999999999998, 16.890000000000001, 19.16, 19.539999999999999, 25.75, 24.129999999999999, 24.160726207366686, 27.609999999999999, 23.190000000000001, 23.190000000000005, 17.539999999999999, 20.09, 16.710000000000001, 21.73, 18.309999999999999, 12.06, 19.100000000000001, 19.100000000000001, 19.100000000000001, 19.100000000000001, 19.100000000000001, 11, 24.100000000000001, 24.099999999999998, 11.35, 11.35, 24.59, 18.780000000000001, 11.35, 16.620000000000001, 13.109999999999999, 19.359999999999999, 15.210000000000001, 14, 17.800000000000001, 16.061403395447453, 16.061403395447453, 19.52, 16.061403395447453, 15.27, 18.100000000000001, 9.1300000000000008, 16.149999999999999, 14.319454298268152, 11.119999999999999, 11.15, 16.84, 9.6999999999999993, 17.170000000000002, 13.109999999999999, 12.56, 19.949999999999999, 16.77, 16.735655063344108, 10.880000000000001, 10.210000000000001, 11, 8.8100000000000005, 9.5800000000000001, 12.470000000000001, 16.170000000000002, 10.24, 10.808674585574892, 11.65, 8.9700000000000006, 4.8099999999999996, 15.31, 13.970000000000001, 10.808674585574892, 21.239999999999998, 27.629999999999999, 10.808674585574892, 25.039999999999999, 20.57, 23.510000000000002, 10.808674585574892, 13.77, 10.808674585574892, 79.519999999999996, 10.808674585574892, 20.329999999999998, 10.808674585574892, 10.808674585574892, 10.808674585574892, 10.808674585574892, 10.808674585574892, 10.808674585574892, 10.808674585574892, 10.808674585574892, 10.808674585574892, 10.808674585574892, 10.808674585574892, 10.808674585574892, 10.808674585574892, 17.079999999999998, 6.2400000000000002, 10.75, 22.109999999999999, 8.1199999999999992, 19.120000000000001, 15.300000000000001, 19.32, 9.1400000000000006, 15.369999999999999, 16.370000000000001, 12.26, 22.039999999999999, 15.630000000000001, 20.66, 23.109999999999999, 25.219999999999999, 18.460000000000001, 15.69, 23.399999999999999, 7.29, 6.1699999999999999, 18.34, 18.18, 15.66, 15.74, 3.5899999999999999, 18.82, 39.829999999999998, 13.300000000000001, 14.561268304515616, 19.579999999999998, 6.9299999999999997, 9.1899999999999995, 7.7800000000000002, 12.17, 8.7699999999999996, 8.5999999999999996, 7.04, 11.998664094725912, 15.109999999999999, 10.26, 12.1, 20.5, 11.998664094725912, 17.68, 14.01, 5.6100000000000003, 7.3399999999999999, 15.4, 15.82, 10.34, 27.239999999999998, 11.998664094725912, 13.25, 8.5700000000000003, 13.24, 11.998664094725912, 8.0399999999999991, 26.620000000000001, 25.550000000000001, 8.2400000000000002, 31.640000000000001, 10.99, 38.149999999999999, 14.779999999999999, 25.460000000000001, 14.75, 21.800000000000001, 19.809999999999999, 11.998664094725912, 10.09, 19.809999999999999, 11.998664094725912, 11.998664094725912, 21.82, 11.998664094725912, 19.98, 11.109999999999999, 16.440000000000001, 15.24, 15.77, 14.6, 13.84, 13.24, 14.41, 11.109999999999999, 18.140000000000001, 13.122097836855188, 7.1900000000000004, 11.07, 13.49, 11.949999999999999, 15.210000000000001, 16.030000000000001, 16.75, 11.42, 7.9699999999999998, 13.58, 13.122097836855188, 26.91, 13.32, 13.122097836855188, 12.52, 18.77, 13.122097836855188, 13.122097836855188, 10.869999999999999, 13.122097836855188, 13.122097836855188, 13.122097836855188, 22.5, 13.122097836855188, 13.122097836855188, 13.122097836855188, 27.390000000000001, 13.122097836855188, 12.26, 13.122097836855188, 13.122097836855188, 13.122097836855188, 13.122097836855188, 13.122097836855188, 13.122097836855188, 13.122097836855188, 13.122097836855188, 13.122097836855188, 13.122097836855188, 13.122097836855188, 13.122097836855188, 13.122097836855188, 14.07, 20.66, 20.34, 20.340000000000003, 20.340000000000003, 20.340000000000003, 18.84],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [22.02, 24.84, 24.84, 24.84, 20.68, 20.640000000000001, 23.079999999999998, 19.34, 22.010000000000002, 18.969999999999999, 21.120000000000001, 26.059999999999999, 24.399999999999999, 18.469999999999999, 19.050000000000001, 21.760000000000002, 20.949999999999999, 18.5, 20.280000000000001, 20.75, 26.440000000000001, 24.739999999999998, 24.784315647160295, 29.699999999999999, 24.25, 24.25, 18.670000000000002, 21.329999999999998, 19.399999999999999, 25.030000000000001, 20.609999999999999, 12.84, 22.600000000000001, 22.600000000000001, 22.600000000000001, 22.600000000000001, 22.600000000000001, 11.609999999999999, 26.129999999999999, 26.130000000000003, 12.130000000000001, 12.130000000000001, 28.149999999999999, 19.300000000000001, 11.85, 17.48, 14.710000000000001, 20.75, 17.190000000000001, 16.739999999999998, 22.600000000000001, 17.559787576611416, 17.559787576611416, 21.620000000000001, 17.559787576611416, 14.99, 19.969999999999999, 12.74, 16.149999999999999, 15.223196368812408, 16.219999999999999, 11.57, 16.960000000000001, 10.02, 17.170000000000002, 15.81, 14.970000000000001, 21, 17.129999999999999, 17.111128815562743, 12.75, 25.859999999999999, 11.609999999999999, 9.6600000000000001, 9.4800000000000004, 15.26, 17.800000000000001, 12.23, 11.724052860974611, 12.960000000000001, 10.380000000000001, 5.3899999999999997, 15.31, 13.970000000000001, 11.724052860974611, 23.629999999999999, 25.120000000000001, 11.724052860974611, 25.43, 20.57, 23.510000000000002, 11.724052860974611, 14.640000000000001, 11.724052860974611, 67.290000000000006, 11.724052860974611, 23.07, 11.724052860974611, 11.724052860974611, 11.724052860974611, 11.724052860974611, 11.724052860974611, 11.724052860974611, 11.724052860974611, 11.724052860974611, 11.724052860974611, 11.724052860974611, 11.724052860974611, 11.724052860974611, 11.724052860974611, 18.039999999999999, 5.9699999999999998, 11.789999999999999, 22.109999999999999, 9.0700000000000003, 22.32, 14.43, 22.510000000000002, 9.1400000000000006, 11.539999999999999, 16.370000000000001, 14.449999999999999, 23.23, 9.1400000000000006, 23.43, 26.07, 25.219999999999999, 21.960000000000001, 17.140000000000001, 27.960000000000001, 7.54, 14.449999999999999, 18.789999999999999, 19.399999999999999, 15.76, 15.81, 4.7400000000000002, 21.609999999999999, 61.170000000000002, 12.300000000000001, 17.588119997335404, 20.57, 7.5800000000000001, 9.1300000000000008, 7.7000000000000002, 12.48, 9.5099999999999998, 8.75, 7.8300000000000001, 12.637931953981671, 18.719999999999999, 10.43, 12.279999999999999, 19.780000000000001, 12.637931953981671, 14.710000000000001, 14.279999999999999, 6.46, 8.8699999999999992, 17.300000000000001, 11.4, 16.390000000000001, 31.34, 12.637931953981671, 13.630000000000001, 8.0899999999999999, 17.48, 12.637931953981671, 9.6799999999999997, 26.620000000000001, 26.48, 8.9900000000000002, 36.140000000000001, 13.17, 36.880000000000003, 16.510000000000002, 28.43, 17.57, 22.800000000000001, 19.59, 12.637931953981671, 10.56, 25.73, 12.637931953981671, 12.637931953981671, 26.579999999999998, 12.637931953981671, 20.140000000000001, 12.220000000000001, 16.870000000000001, 16.010000000000002, 17.170000000000002, 14.6, 13.84, 16.050000000000001, 16.359999999999999, 11.470000000000001, 19.739999999999998, 7.3099999999999996, 14.568761937715683, 12.630000000000001, 14.970000000000001, 12.640000000000001, 15.18, 19.690000000000001, 17.699999999999999, 11.42, 7.4800000000000004, 13.58, 14.568761937715683, 26.91, 13.32, 15.58, 14.568761937715683, 17.280000000000001, 14.568761937715683, 14.568761937715683, 12.119999999999999, 14.568761937715683, 14.568761937715683, 14.568761937715683, 27.469999999999999, 14.568761937715683, 14.568761937715683, 14.568761937715683, 14.568761937715683, 27.390000000000001, 12.73, 14.568761937715683, 14.568761937715683, 14.568761937715683, 14.568761937715683, 14.568761937715683, 14.568761937715683, 14.568761937715683, 14.568761937715683, 14.568761937715683, 14.568761937715683, 14.568761937715683, 14.568761937715683, 14.568761937715683, 14.9, 22.809999999999999, 21.859999999999999, 21.859999999999999, 21.859999999999999, 21.859999999999999, 20.489999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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
            "title": "Government spending percent",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [22.030000000000001, 24.41, 24.41, 24.41, 19.420000000000002, 19.649999999999999, 21.859999999999999, 19, 21.23, 18.690000000000001, 21.780000000000001, 25.760000000000002, 23.710000000000001, 17.469999999999999, 18.75, 21.449999999999999, 21.129999999999999, 17.559999999999999, 21.039999999999999, 19.809999999999999, 25.649999999999999, 24, 24.043932646570724, 28.870000000000001, 24.579999999999998, 24.579999999999998, 17.879999999999999, 20.859999999999999, 18.949999999999999, 23.140000000000001, 20.75, 12.09, 22.27, 22.27, 22.27, 22.27, 22.27, 11.19, 23.079999999999998, 23.079999999999998, 11.94, 11.94, 27.579999999999998, 17.739999999999998, 11.91, 16.84, 14, 19.43, 16.760000000000002, 15.83, 19.710000000000001, 16.725852297756052, 16.725852297756052, 18.469999999999999, 16.725852297756052, 12.949999999999999, 17.329999999999998, 11.27, 16.59, 14.942432973541287, 13.869999999999999, 10.880000000000001, 16.82, 10.17, 17.170000000000002, 14.91, 13.65, 21.43, 15.81, 15.796230859310208, 12.68, 21.149999999999999, 11.19, 9.25, 9.6099999999999994, 15.58, 18.260000000000002, 10.779999999999999, 11.763228586789937, 12.710000000000001, 9.4600000000000009, 7.21, 15.31, 13.970000000000001, 11.763228586789937, 25.07, 25.120000000000001, 11.763228586789937, 22.469999999999999, 20.57, 23.510000000000002, 11.763228586789937, 16.93, 11.763228586789937, 70.439999999999998, 11.763228586789937, 30.699999999999999, 11.763228586789937, 11.763228586789937, 11.763228586789937, 11.763228586789937, 11.763228586789937, 11.763228586789937, 11.763228586789937, 11.763228586789937, 11.763228586789937, 11.763228586789937, 11.763228586789937, 11.763228586789937, 11.763228586789937, 18.16, 5.8799999999999999, 10.93, 21.260000000000002, 8.25, 22.670000000000002, 14.23, 17.890000000000001, 9.1400000000000006, 10.92, 16.370000000000001, 14.449999999999999, 22.18, 2.3599999999999999, 23.800000000000001, 22.140000000000001, 25.219999999999999, 16.649999999999999, 15.81, 23.800000000000001, 7.5599999999999996, 10.960000000000001, 17.420000000000002, 19, 17.34, 16.25, 4.6799999999999997, 20.98, 24.5, 14.970000000000001, 15.471454371438824, 19.350000000000001, 8.2599999999999998, 8.8399999999999999, 8.0099999999999998, 12.15, 9.9299999999999997, 7.3499999999999996, 8.0099999999999998, 12.435611663740637, 17.210000000000001, 10.43, 12.050000000000001, 20.289999999999999, 12.435611663740637, 11.529999999999999, 6.8799999999999999, 15.050000000000001, 14.92, 16.34, 10.08, 16.98, 30.77, 12.435611663740637, 13.140000000000001, 7.3200000000000003, 14.869999999999999, 12.435611663740637, 9.1400000000000006, 26.620000000000001, 25.010000000000002, 9.8100000000000005, 31.550000000000001, 11.369999999999999, 35.560000000000002, 16.510000000000002, 25.829999999999998, 17.23, 18.370000000000001, 18.18, 12.435611663740637, 10.15, 25.77, 12.435611663740637, 12.435611663740637, 27.5, 12.435611663740637, 18.620000000000001, 11.460000000000001, 15.74, 14.66, 16.050000000000001, 14.6, 13.84, 13.869999999999999, 15.279999999999999, 11.31, 19.34, 7.4699999999999998, 11.470000000000001, 13.728215886163689, 14.619999999999999, 12.01, 15.390000000000001, 19.41, 16.530000000000001, 11.42, 7.1299999999999999, 13.58, 13.728215886163689, 26.91, 13.32, 14.109999999999999, 13.728215886163689, 16.66, 13.728215886163689, 13.728215886163689, 12.76, 13.728215886163689, 13.728215886163689, 13.728215886163689, 21.850000000000001, 13.728215886163689, 13.728215886163689, 13.728215886163689, 13.728215886163689, 27.390000000000001, 12.609999999999999, 13.728215886163689, 13.728215886163689, 13.728215886163689, 13.728215886163689, 13.728215886163689, 13.728215886163689, 13.728215886163689, 13.728215886163689, 13.728215886163689, 13.728215886163689, 13.728215886163689, 13.728215886163689, 13.728215886163689, 14.380000000000001, 21.859999999999999, 22.390000000000001, 22.390000000000004, 22.390000000000004, 22.390000000000004, 20.890000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 90,
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

  
