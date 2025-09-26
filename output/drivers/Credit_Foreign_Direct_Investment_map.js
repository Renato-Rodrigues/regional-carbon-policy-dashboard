(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Credit_Foreign_Direct_Investment_map') 

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
    "b55ce4252f4": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55ce4252f4",
  "attrs": {
    "b55ce4252f4": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 1290,
      "colorbar": {
        "title": "Foreign Direct Investment"
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
        "title": "Foreign Direct Investment",
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
      "z": [2.6099999999999999, 2.2999999999999998, 2.2999999999999998, 2.2999999999999998, 1.24, 16.73, 0.69999999999999996, 6.2400000000000002, 3.3900000000000001, 6.2699999999999996, 2.3599999999999999, 3.5299999999999998, 10.859999999999999, 14.460000000000001, 2.4700000000000002, 2.02, 2.0699999999999998, 1.1599999999999999, 2.6899999999999999, 10.51, 1.8, 0.54000000000000004, 0.54000000000000004, 0.54000000000000004, 3.48, 3.4800000000000004, 3.1899999999999999, 4.8700000000000001, 9.9199999999999999, 5.2400000000000002, 1.8100000000000001, 13.83, 1.75, 1.75, 1.75, 1.75, 1.75, 0.60999999999999999, 1.8200000000000001, 1.8199999999999998, 5.4500000000000002, 563.54999999999995, 2.9300000000000002, 2.7400000000000002, 3.1699999999999999, 10.25, 4.4900000000000002, 8.3900000000000006, 3.7200000000000002, 2.4100000000000001, 25.469999999999999, 7.7727555853689898, 7.7727555853689898, 7.7727555853689898, 7.7727555853689898, 0.54000000000000004, 1.8400000000000001, 8.0500000000000007, 0.81999999999999995, 8.5219216284252113, 0.95999999999999996, 55.07, 2.0299999999999998, 2.3700000000000001, 3.7799999999999998, 4.3799999999999999, 8.25, 0.19, 3.4900000000000002, 3.532521099521571, 11.5, 6.1399999999999997, 0.60999999999999999, -0.25, 3.6699999999999999, 0.56999999999999995, 3.4399999999999999, 17.460000000000001, 2.3799999999999999, 2.9199999999999999, 1.21, 1.75, 4.7699999999999996, 0.95999999999999996, 2.264689806747842, 1.75, -0.23999999999999999, 1.8899999999999999, 3.02, 2.264689806747842, 2.3599999999999999, 5.7300000000000004, 0.81999999999999995, 2.264689806747842, 1.0000000000000001e-05, 0.089999999999999997, 0.73999999999999999, 2.264689806747842, 2.264689806747842, 2.264689806747842, 2.98, 2.264689806747842, 2.264689806747842, 2.264689806747842, -0.059999999999999998, 2.264689806747842, 2.264689806747842, 2.264689806747842, 2.264689806747842, 2.264689806747842, 1, 0.45000000000000001, 0.47999999999999998, 0.23000000000000001, 1.28, 0.56000000000000005, 1.8700000000000001, 4.5599999999999996, -0.76000000000000001, 0.17000000000000001, 2.5299999999999998, 5.3600000000000003, 14.24, 3.4199999999999999, 0.32000000000000001, 0.12, -0.14000000000000001, 4.6699999999999999, 2.6600000000000001, -0.27000000000000002, 0.29999999999999999, 0.93999999999999995, 6.3200000000000003, 3.9900000000000002, 0.55000000000000004, 1.54, 1.97, 25.98, 0.54000000000000004, 4.9699999999999998, 4.4591296743825746, 0.40000000000000002, 1.9099999999999999, 4.3799999999999999, 5.3899999999999997, 2.0899999999999999, 0.55000000000000004, 3.0600000000000001, 1.79, 5.1100000000000003, 0.78000000000000003, 0.20000000000000001, 20.079999999999998, 2.1000000000000001, 0.60999999999999999, 0.070000000000000007, 1.4099999999999999, 7.0800000000000001, 0.98999999999999999, 4.4199999999999999, 2.29, 0.22, 0.20000000000000001, 1.0000000000000001e-05, 3.3413190574920986, 2.1600000000000001, 0.63, 0.98999999999999999, 6.2800000000000002, 49.759999999999998, 2.8700000000000001, 3.7999999999999998, 1.3200000000000001, 5.5700000000000003, 3.75, 1.53, 0.83999999999999997, 1.0800000000000001, -2.7400000000000002, 27.760000000000002, 3.3413190574920986, 2.29, 0.14999999999999999, 4.8200000000000003, 3.3413190574920986, 3.3300000000000001, 7.7800000000000002, 3.3413190574920986, 1.8100000000000001, 2.3700000000000001, 1.29, 5.2599999999999998, 1.8200000000000001, 1.8799999999999999, 3.3399999999999999, 2.27, 2.6899999999999999, 0.089999999999999997, 2.4300763752216334, 2.4399999999999999, 2.8799999999999999, 0.27000000000000002, 4.7400000000000002, 1.0700000000000001, -0.75, 3.7799999999999998, 4.4800000000000004, 2.4300763752216334, 7.6699999999999999, 7.25, 7.1500000000000004, 3.5099999999999998, -5.9699999999999998, 2.4300763752216334, 2.4300763752216334, 2.1400000000000001, 5.75, -0.83999999999999997, 2.4300763752216334, 10.779999999999999, 2.4300763752216334, 10.84, 15.09, 2.4300763752216334, 7.8200000000000003, 19.420000000000002, 9.1699999999999999, 0.31, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 1.02, 0.78000000000000003, 1.9199999999999999, 1.9199999999999999, 1.9199999999999999, 1.9199999999999999, -3.8100000000000001],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [2.6099999999999999, 2.2999999999999998, 2.2999999999999998, 2.2999999999999998, 1.24, 16.73, 0.69999999999999996, 6.2400000000000002, 3.3900000000000001, 6.2699999999999996, 2.3599999999999999, 3.5299999999999998, 10.859999999999999, 14.460000000000001, 2.4700000000000002, 2.02, 2.0699999999999998, 1.1599999999999999, 2.6899999999999999, 10.51, 1.8, 0.54000000000000004, 0.54000000000000004, 0.54000000000000004, 3.48, 3.4800000000000004, 3.1899999999999999, 4.8700000000000001, 9.9199999999999999, 5.2400000000000002, 1.8100000000000001, 13.83, 1.75, 1.75, 1.75, 1.75, 1.75, 0.60999999999999999, 1.8200000000000001, 1.8199999999999998, 5.4500000000000002, 563.54999999999995, 2.9300000000000002, 2.7400000000000002, 3.1699999999999999, 10.25, 4.4900000000000002, 8.3900000000000006, 3.7200000000000002, 2.4100000000000001, 25.469999999999999, 7.7727555853689898, 7.7727555853689898, 7.7727555853689898, 7.7727555853689898, 0.54000000000000004, 1.8400000000000001, 8.0500000000000007, 0.81999999999999995, 8.5219216284252113, 0.95999999999999996, 55.07, 2.0299999999999998, 2.3700000000000001, 3.7799999999999998, 4.3799999999999999, 8.25, 0.19, 3.4900000000000002, 3.532521099521571, 11.5, 6.1399999999999997, 0.60999999999999999, -0.25, 3.6699999999999999, 0.56999999999999995, 3.4399999999999999, 17.460000000000001, 2.3799999999999999, 2.9199999999999999, 1.21, 1.75, 4.7699999999999996, 0.95999999999999996, 2.264689806747842, 1.75, -0.23999999999999999, 1.8899999999999999, 3.02, 2.264689806747842, 2.3599999999999999, 5.7300000000000004, 0.81999999999999995, 2.264689806747842, 1.0000000000000001e-05, 0.089999999999999997, 0.73999999999999999, 2.264689806747842, 2.264689806747842, 2.264689806747842, 2.98, 2.264689806747842, 2.264689806747842, 2.264689806747842, -0.059999999999999998, 2.264689806747842, 2.264689806747842, 2.264689806747842, 2.264689806747842, 2.264689806747842, 1, 0.45000000000000001, 0.47999999999999998, 0.23000000000000001, 1.28, 0.56000000000000005, 1.8700000000000001, 4.5599999999999996, -0.76000000000000001, 0.17000000000000001, 2.5299999999999998, 5.3600000000000003, 14.24, 3.4199999999999999, 0.32000000000000001, 0.12, -0.14000000000000001, 4.6699999999999999, 2.6600000000000001, -0.27000000000000002, 0.29999999999999999, 0.93999999999999995, 6.3200000000000003, 3.9900000000000002, 0.55000000000000004, 1.54, 1.97, 25.98, 0.54000000000000004, 4.9699999999999998, 4.4591296743825746, 0.40000000000000002, 1.9099999999999999, 4.3799999999999999, 5.3899999999999997, 2.0899999999999999, 0.55000000000000004, 3.0600000000000001, 1.79, 5.1100000000000003, 0.78000000000000003, 0.20000000000000001, 20.079999999999998, 2.1000000000000001, 0.60999999999999999, 0.070000000000000007, 1.4099999999999999, 7.0800000000000001, 0.98999999999999999, 4.4199999999999999, 2.29, 0.22, 0.20000000000000001, 1.0000000000000001e-05, 3.3413190574920986, 2.1600000000000001, 0.63, 0.98999999999999999, 6.2800000000000002, 49.759999999999998, 2.8700000000000001, 3.7999999999999998, 1.3200000000000001, 5.5700000000000003, 3.75, 1.53, 0.83999999999999997, 1.0800000000000001, -2.7400000000000002, 27.760000000000002, 3.3413190574920986, 2.29, 0.14999999999999999, 4.8200000000000003, 3.3413190574920986, 3.3300000000000001, 7.7800000000000002, 3.3413190574920986, 1.8100000000000001, 2.3700000000000001, 1.29, 5.2599999999999998, 1.8200000000000001, 1.8799999999999999, 3.3399999999999999, 2.27, 2.6899999999999999, 0.089999999999999997, 2.4300763752216334, 2.4399999999999999, 2.8799999999999999, 0.27000000000000002, 4.7400000000000002, 1.0700000000000001, -0.75, 3.7799999999999998, 4.4800000000000004, 2.4300763752216334, 7.6699999999999999, 7.25, 7.1500000000000004, 3.5099999999999998, -5.9699999999999998, 2.4300763752216334, 2.4300763752216334, 2.1400000000000001, 5.75, -0.83999999999999997, 2.4300763752216334, 10.779999999999999, 2.4300763752216334, 10.84, 15.09, 2.4300763752216334, 7.8200000000000003, 19.420000000000002, 9.1699999999999999, 0.31, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 2.4300763752216334, 1.02, 0.78000000000000003, 1.9199999999999999, 1.9199999999999999, 1.9199999999999999, 1.9199999999999999, -3.8100000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [-0.72999999999999998, 1.6799999999999999, 1.6799999999999999, 1.6799999999999999, 1.1100000000000001, 122.48, 0.89000000000000001, 6.46, 2.3599999999999999, 1.3100000000000001, 1.0600000000000001, 21.25, 12.050000000000001, 14.77, 5.4400000000000004, 5.3600000000000003, 7.0700000000000003, 3.8900000000000001, 4.0999999999999996, 8.9499999999999993, 4.3799999999999999, -3.5, -3.5000000000000004, -3.5000000000000004, 3.4300000000000002, 3.4300000000000002, 8.5899999999999999, 4.3600000000000003, 11.75, 3.1400000000000001, 2.2200000000000002, -5.46, 3.6000000000000001, 3.6000000000000001, 3.6000000000000001, 3.6000000000000001, 3.6000000000000001, 0.77000000000000002, 1.8500000000000001, 1.8500000000000003, 1.76, 53.43, 5.46, 2.5499999999999998, 4.75, 10.25, 8.7599999999999998, 9.6099999999999994, 5.8099999999999996, 5.4400000000000004, 25.469999999999999, 9.2926265019841274, 9.2926265019841274, 9.2926265019841274, 9.2926265019841274, 0.68000000000000005, 2.6099999999999999, 13.01, 1.47, 10.2927932833529, 0.70999999999999996, 54.369999999999997, 13.1, 7.9299999999999997, 5.1699999999999999, 6.9100000000000001, 4.6600000000000001, 0.14999999999999999, 3.48, 3.5314896641881628, 13.119999999999999, 7.25, 0.77000000000000002, 0.73999999999999999, 3.54, 0.62, 3.3900000000000001, 21.199999999999999, 2, 3.5099999999999998, 1.1299999999999999, 2.46, 0.82999999999999996, 0.70999999999999996, 2.1440115538207825, 9.25, -0.64000000000000001, 1.4399999999999999, 4.3099999999999996, 2.1440115538207825, 0.46999999999999997, 5.4400000000000004, 0.60999999999999999, 2.1440115538207825, 1.0000000000000001e-05, 2.3999999999999999, 1.9099999999999999, 2.1440115538207825, 2.1440115538207825, 2.1440115538207825, 4.1399999999999997, 2.1440115538207825, 2.1440115538207825, 2.1440115538207825, -0.050000000000000003, 2.1440115538207825, 2.1440115538207825, 2.1440115538207825, 2.1440115538207825, 2.1440115538207825, 1.6799999999999999, 0.68999999999999995, 0.84999999999999998, -0.01, 3.5800000000000001, 1.3, 1.6000000000000001, 0.81999999999999995, 1.04, 0.23999999999999999, 2.1099999999999999, 8.2100000000000009, 8.9700000000000006, 6.7699999999999996, 0.45000000000000001, 0.45000000000000001, 0.040000000000000001, 6.5800000000000001, 3.7799999999999998, -0.13, 1.5900000000000001, 1.04, 5.6699999999999999, 1.3500000000000001, 0.65000000000000002, 1.5600000000000001, 1.8999999999999999, 10.550000000000001, 1.0800000000000001, 17.100000000000001, 3.0763663545561979, 0.27000000000000002, 1.3799999999999999, 3.9700000000000002, 5.3799999999999999, 2.6499999999999999, 0.28999999999999998, 3.7200000000000002, 1.5700000000000001, 5.9900000000000002, 1.2, 1.04, 9.3300000000000001, 0.35999999999999999, 0.26000000000000001, 2.1299999999999999, 0.14999999999999999, 5.8499999999999996, 1.3700000000000001, 4.4199999999999999, 2.6899999999999999, 0.32000000000000001, -0.66000000000000003, 1.0000000000000001e-05, 2.5364699454075237, 3.54, 4.2800000000000002, 1.1899999999999999, 1.8999999999999999, 8.4000000000000004, 2.1699999999999999, 3.6800000000000002, 3.3799999999999999, 4.3600000000000003, 5.7699999999999996, 4.04, 0.35999999999999999, 0.20999999999999999, 2.5099999999999998, 7.7300000000000004, 5.79, 2.5364699454075237, 0.11, 7.3099999999999996, 2.5364699454075237, 3.0600000000000001, 4.2599999999999998, 2.5364699454075237, 2.71, 3.0699999999999998, 2.5099999999999998, 6.8600000000000003, 2.6600000000000001, 1.3200000000000001, 2.5800000000000001, 2.3900000000000001, 2.29, 1.3600000000000001, 2.8629119656710666, 0.75, 4.1900000000000004, 0.10000000000000001, 6.6799999999999997, 2.6499999999999999, 0.97999999999999998, 4.3099999999999996, 5.8200000000000003, 2.8629119656710666, 8.5099999999999998, 5.5, 7.5199999999999996, 3.8100000000000001, -2.5099999999999998, 2.8629119656710666, 2.8629119656710666, 3.02, 8, 6.6299999999999999, 2.8629119656710666, 7.1699999999999999, 2.8629119656710666, 11.949999999999999, 10.85, 2.8629119656710666, -4.6900000000000004, 8.7400000000000002, 7.1299999999999999, 18.539999999999999, 2.8629119656710666, 2.8629119656710666, 2.8629119656710666, 2.8629119656710666, 2.8629119656710666, 2.8629119656710666, 2.8629119656710666, 2.8629119656710666, 2.8629119656710666, 2.8629119656710666, 2.8629119656710666, 2.8629119656710666, 2.8629119656710666, 2.8629119656710666, 1.75, 0.14000000000000001, 6.9800000000000004, 6.9800000000000004, 6.9800000000000004, 6.9800000000000004, 2.23],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [2.1000000000000001, 3.8799999999999999, 3.8799999999999999, 3.8799999999999999, 1.98, 339.79000000000002, 0.28000000000000003, 6.2999999999999998, 2.3399999999999999, 1.71, 25.66, 30.629999999999999, 8.7300000000000004, 12.33, 3.6099999999999999, 10.01, 6.25, 4.9500000000000002, 4.7599999999999998, 21.670000000000002, 5.2999999999999998, 4.8600000000000003, 4.8600000000000003, 4.8600000000000003, 5.2999999999999998, 5.2999999999999998, 6.5999999999999996, 24.280000000000001, 13.720000000000001, 4.0300000000000002, 2.6800000000000002, 22.18, 9.9299999999999997, 9.9299999999999979, 9.9299999999999979, 9.9299999999999979, 9.9299999999999979, 0.89000000000000001, 3.2400000000000002, 3.2400000000000002, 0.64000000000000001, -7.2999999999999998, 18.359999999999999, 8.75, 3.2599999999999998, 10.25, 5.5599999999999996, 7.0700000000000003, 6.3799999999999999, 2.3199999999999998, 25.469999999999999, 8.0820936030101223, 8.0820936030101223, 8.0820936030101223, 8.0820936030101223, 1.98, 2.0299999999999998, 4.46, 1.49, 6.2708016849695021, 1.01, 33.799999999999997, 2.3599999999999999, 1.73, 5.1600000000000001, 5.96, 7.4299999999999997, 0.11, 4.5499999999999998, 4.6472263581871847, 22.559999999999999, 14.6, 0.89000000000000001, 2.9199999999999999, 3.3900000000000001, 1.55, 4.3399999999999999, 15.109999999999999, 1.96, 2.73, 1.1200000000000001, 6.0300000000000002, 0.81999999999999995, 1.01, 2.3459940496949043, 5.7999999999999998, 0.10000000000000001, 1.8400000000000001, 4.5499999999999998, 2.3459940496949043, -0.11, 3.3599999999999999, 0.79000000000000004, 2.3459940496949043, 1.0000000000000001e-05, 2.29, 2.3199999999999998, 2.3459940496949043, 2.3459940496949043, 2.3459940496949043, 2.0899999999999999, 2.3459940496949043, 2.3459940496949043, 2.3459940496949043, -0.050000000000000003, 2.3459940496949043, 2.3459940496949043, 2.3459940496949043, 2.3459940496949043, 2.3459940496949043, 1.46, 1.1699999999999999, 1.52, 0.029999999999999999, 4.3700000000000001, 0.78000000000000003, 1.28, 1.03, -1.8100000000000001, 0.37, 3.2799999999999998, 15.76, 12.199999999999999, 6.0300000000000002, 0.70999999999999996, 4.9500000000000002, 0.28999999999999998, 6.5700000000000003, 5.6100000000000003, 3.6800000000000002, 6, 1.1200000000000001, 4.4400000000000004, 2.4300000000000002, 1.1399999999999999, 2.5699999999999998, -1.49, 2.21, 2.1899999999999999, 27.649999999999999, 2.6518467538331696, 2.2599999999999998, 2.8399999999999999, 1.5, 2.1400000000000001, 5.0899999999999999, 0.11, 4.1100000000000003, 1.3500000000000001, 1.3799999999999999, 1.45, -3.5299999999999998, 1.46, 1.25, 0.84999999999999998, 2.6299999999999999, 1.79, 4.2800000000000002, 1.53, 4.4199999999999999, 3.5699999999999998, 0.27000000000000002, -0.13, 2.1407774100098731, 0.050000000000000003, 4.21, 5.5800000000000001, 0.75, 12.050000000000001, 8.7300000000000004, 0.13, 5.3799999999999999, 1.6299999999999999, 4.2400000000000002, 5.2199999999999998, 3.3999999999999999, 1.48, 0.64000000000000001, -1.4399999999999999, 9.3599999999999994, 3.1299999999999999, 2.1407774100098731, 0.089999999999999997, 8.2799999999999994, 2.1407774100098731, 11.48, 8.2599999999999998, 2.1407774100098731, 1.73, 2.7400000000000002, 2.6499999999999999, 6.0999999999999996, 7.0300000000000002, 1.6799999999999999, 4.7599999999999998, 3.3900000000000001, 1.1899999999999999, 2.02, 2.7329047314429933, -2.5, 3.1299999999999999, 0.37, 6.1600000000000001, 3.48, 0.070000000000000007, 3.8100000000000001, 7.6299999999999999, 2.7329047314429933, 6.7400000000000002, 5.6699999999999999, 5.8799999999999999, 9.3100000000000005, 1.5600000000000001, 2.7329047314429933, 2.7329047314429933, 5.7300000000000004, 8.6400000000000006, 10.210000000000001, 2.7329047314429933, 6.8899999999999997, 2.7329047314429933, 6.9100000000000001, 10.09, 2.7329047314429933, -8.8000000000000007, 21.600000000000001, 5.2800000000000002, 0.90000000000000002, 2.7329047314429933, 2.7329047314429933, 2.7329047314429933, 2.7329047314429933, 2.7329047314429933, 2.7329047314429933, 2.7329047314429933, 2.7329047314429933, 2.7329047314429933, 2.7329047314429933, 2.7329047314429933, 2.7329047314429933, 2.7329047314429933, 2.7329047314429933, 1.0900000000000001, 2.1800000000000002, -3.6099999999999999, -3.6099999999999999, -3.6099999999999999, -3.6099999999999999, 1.6599999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [2.9199999999999999, 3.3999999999999999, 3.3999999999999999, 3.3999999999999999, 2.9199999999999999, 369.33999999999997, 1.98, 9.3300000000000001, 2.6099999999999999, 6.4199999999999999, 3.1200000000000001, 51.159999999999997, 14.41, 75.090000000000003, 6.2300000000000004, 4.5599999999999996, 8.0600000000000005, 7.4900000000000002, 7.9100000000000001, 10.33, 5.21, 0.83999999999999997, 0.84000000000000008, 0.84000000000000008, 2.1400000000000001, 2.1400000000000001, 9.0199999999999996, 16.140000000000001, 22.899999999999999, 6.75, 1.75, 9.5099999999999998, 7.5199999999999996, 7.5199999999999996, 7.5199999999999996, 7.5199999999999996, 7.5199999999999996, 2.1299999999999999, 3.4199999999999999, 3.4199999999999999, 12.17, 1114.9300000000001, 22.199999999999999, 5.0099999999999998, 3.6499999999999999, 10.25, 6.5800000000000001, 15.119999999999999, 7.5899999999999999, 6.2300000000000004, 25.469999999999999, 10.146964094253885, 10.146964094253885, 10.146964094253885, 10.146964094253885, 3.6200000000000001, 3.7999999999999998, 9.4000000000000004, 1.2, 6.164105681855383, 0.96999999999999997, 21.379999999999999, 11.960000000000001, 6.4199999999999999, 7.1100000000000003, 7.3099999999999996, 7.1900000000000004, -0.050000000000000003, 4.5099999999999998, 4.612924043671911, 23.199999999999999, 19.609999999999999, 2.1299999999999999, 1.3500000000000001, 3.6200000000000001, 2.1200000000000001, 4.0199999999999996, 26.329999999999998, 1.8999999999999999, 4.7300000000000004, 1.7, 6.6399999999999997, 1.54, 5.4199999999999999, 3.3236275641104398, 18.98, 7.1799999999999997, 0.77000000000000002, 4.0499999999999998, 3.3236275641104398, 10.73, 9.8900000000000006, 4.3899999999999997, 3.3236275641104398, 1.0000000000000001e-05, 3.7599999999999998, 0.52000000000000002, 3.3236275641104398, 3.3236275641104398, 3.3236275641104398, 17.300000000000001, 3.3236275641104398, 3.3236275641104398, -0.040000000000000001, 3.3236275641104398, 3.3236275641104398, 3.3236275641104398, 3.3236275641104398, 3.3236275641104398, 3.3236275641104398, 0.87, 0.64000000000000001, 2.6400000000000001, -0.070000000000000007, 3.4100000000000001, 0.69999999999999996, 0.87, 0.58999999999999997, 5.8799999999999999, 0.42999999999999999, 9.0700000000000003, 23.539999999999999, 5.7699999999999996, 12.140000000000001, 0.34999999999999998, 4.29, 0.12, 5.75, 15.75, 4.8499999999999996, 9.3499999999999996, 1.5700000000000001, 4.0700000000000003, 3.2400000000000002, 0.84999999999999998, 2.1499999999999999, -3.75, 9.4199999999999999, 3.4300000000000002, 3.9399999999999999, 2.680179987343152, 0.20999999999999999, 2.04, 1.77, 3.5699999999999998, 2.1600000000000001, 0.20000000000000001, 6.46, 3.0499999999999998, 2.6400000000000001, 1.3899999999999999, -0.070000000000000007, 4.6100000000000003, 0.28000000000000003, 1.28, 0.60999999999999999, 0.72999999999999998, 4.8300000000000001, 2.48, 4.4199999999999999, 2.96, 0.92000000000000004, -0.17999999999999999, 2.5719203140815718, 1.0000000000000001e-05, 3.8900000000000001, 3.1600000000000001, 2.3700000000000001, 18.449999999999999, 9.6400000000000006, 1.27, 7.6299999999999999, 1.3500000000000001, 4.9100000000000001, 7.7999999999999998, 2.5899999999999999, 3.02, 1.52, 3.6800000000000002, 4.6500000000000004, 14.08, 2.5719203140815718, 0.11, 11.880000000000001, 2.5719203140815718, 26.629999999999999, 13, 2.5719203140815718, 1.75, 2.1699999999999999, 2.3799999999999999, 4.9299999999999997, 4.1699999999999999, 0.11, 7.6399999999999997, 3.9100000000000001, 0.57999999999999996, 2.1400000000000001, 3.6503021787971055, 2.4500000000000002, 4.04, 2.1000000000000001, 6.5700000000000003, 1.51, 1.3999999999999999, 4.2400000000000002, 7.9299999999999997, 3.6503021787971055, 16.23, 7.0599999999999996, 4.8099999999999996, 4.2999999999999998, -6.2199999999999998, 3.6503021787971055, 3.6503021787971055, 6.9500000000000002, 6.8700000000000001, 8.1199999999999992, 3.6503021787971055, 18.440000000000001, 3.6503021787971055, 16.960000000000001, 12.85, 3.6503021787971055, 8.9199999999999999, 31, 6.6399999999999997, -1.4399999999999999, 3.6503021787971055, 3.6503021787971055, 3.6503021787971055, 3.6503021787971055, 3.6503021787971055, 3.6503021787971055, 3.6503021787971055, 3.6503021787971055, 3.6503021787971055, 3.6503021787971055, 3.6503021787971055, 3.6503021787971055, 3.6503021787971055, 3.6503021787971055, 2.1600000000000001, 4.8700000000000001, 4.0800000000000001, 4.0800000000000001, 4.0800000000000001, 4.0800000000000001, 2.6099999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.48, 3.1499999999999999, 3.1499999999999999, 3.1499999999999999, 2.98, 449.07999999999998, 0.60999999999999999, 9.5700000000000003, 4.6299999999999999, 2.5, 17.690000000000001, 86.480000000000004, 20.5, -57.530000000000001, 5.8300000000000001, 7.2599999999999998, 5.8399999999999999, 6.5499999999999998, 8.7400000000000002, 13.51, 9.3900000000000006, 3.7000000000000002, 3.7000000000000002, 3.7000000000000002, 8.5700000000000003, 8.5700000000000003, 5.79, 50.380000000000003, 31.23, 7.8300000000000001, 3.9199999999999999, 22.190000000000001, 6.7800000000000002, 6.7800000000000002, 6.7800000000000002, 6.7800000000000002, 6.7800000000000002, 2.0699999999999998, 6.1600000000000001, 6.1600000000000001, 9.9199999999999999, 728.87, 31.739999999999998, 6.8499999999999996, 6.1100000000000003, 10.25, 11.67, 18.600000000000001, 12.18, 8.8000000000000007, 25.469999999999999, 12.467720891281891, 12.467720891281891, 12.467720891281891, 12.467720891281891, 3.2400000000000002, 4.2999999999999998, 11.42, 2.9900000000000002, 6.0861711522331907, 3.9900000000000002, 13.9, 9.6799999999999997, 5.4699999999999998, 6.7599999999999998, 7.25, 8.8000000000000007, 0.46999999999999997, 4.4000000000000004, 4.5398537095356888, 29.359999999999999, 28.82, 2.0699999999999998, 1.6000000000000001, 8.6500000000000004, 1.8700000000000001, 3.2799999999999998, 26.16, 3.52, 4.6900000000000004, 1.8600000000000001, 10.039999999999999, 1.3700000000000001, 7.6600000000000001, 4.4137417372314838, 13.74, 12.369999999999999, 2.1000000000000001, 7.0899999999999999, 4.4137417372314838, 4.7300000000000004, 6.6100000000000003, 1.1899999999999999, 4.4137417372314838, 1.0000000000000001e-05, 5.8899999999999997, 0.87, 4.4137417372314838, 4.4137417372314838, 4.4137417372314838, 2.2000000000000002, 4.4137417372314838, 4.4137417372314838, -0.040000000000000001, 4.4137417372314838, 4.4137417372314838, 4.4137417372314838, 4.4137417372314838, 4.4137417372314838, 4.4137417372314838, 0.75, 0.81999999999999995, 3.04, 0.059999999999999998, 1.9399999999999999, 6.3200000000000003, 0.57999999999999996, 1.0900000000000001, 4.2400000000000002, 0.68999999999999995, 4.7800000000000002, 15.32, 5.5, 13.6, 0.34000000000000002, 7.9199999999999999, 0.10000000000000001, 5.9000000000000004, 8.0800000000000001, 5.8499999999999996, 8.8800000000000008, 1.25, 2.5299999999999998, 3.25, 1.73, 2.5299999999999998, -3.7200000000000002, 3.8900000000000001, 6.8899999999999997, 3.21, 2.1537570372864456, 1.98, 2.1699999999999999, 10.800000000000001, 1.1299999999999999, 2.6600000000000001, 2.2799999999999998, 6.6600000000000001, 5.5700000000000003, 3.8500000000000001, 1.54, -1.3700000000000001, 9.2599999999999998, 0.79000000000000004, 0.28000000000000003, 1.9299999999999999, 1.3, 9.4199999999999999, 2.5099999999999998, 4.4199999999999999, 6.1399999999999997, 2.02, 1.7, 3.6106461555899929, 0.040000000000000001, 1.6599999999999999, 4.4900000000000002, 3.3399999999999999, 16.219999999999999, 9.5899999999999999, 0.55000000000000004, 7.5700000000000003, 4.5, 4.6799999999999997, 6.0999999999999996, 5.2599999999999998, 2.6899999999999999, 4.1799999999999997, 1.0800000000000001, 9.5099999999999998, 23.039999999999999, 3.6106461555899929, 0.96999999999999997, 11.619999999999999, 3.6106461555899929, 24.16, 16.329999999999998, 3.6106461555899929, 3.1899999999999999, 2.8100000000000001, 2.25, 7.8099999999999996, 4.3099999999999996, 1.8899999999999999, 5.71, 5.3700000000000001, 0.38, 2.5600000000000001, 4.2936014264630362, 2.79, 5.1200000000000001, 0.81000000000000005, 7.8200000000000003, 9.1099999999999994, 0.58999999999999997, 5.1399999999999997, 8.3399999999999999, 4.2936014264630362, 10.44, 6.3399999999999999, 3.8399999999999999, 5.5800000000000001, -8.4000000000000004, 4.2936014264630362, 4.2936014264630362, 6.7199999999999998, 8.2599999999999998, 10.19, 4.2936014264630362, 20.350000000000001, 4.2936014264630362, 16.73, 20.640000000000001, 4.2936014264630362, -17.59, 25.760000000000002, 9.6099999999999994, 9.1199999999999992, 4.2936014264630362, 4.2936014264630362, 4.2936014264630362, 4.2936014264630362, 4.2936014264630362, 4.2936014264630362, 4.2936014264630362, 4.2936014264630362, 4.2936014264630362, 4.2936014264630362, 4.2936014264630362, 4.2936014264630362, 4.2936014264630362, 4.2936014264630362, 2.3900000000000001, 8.1999999999999993, 5.2000000000000002, 5.2000000000000002, 5.2000000000000002, 5.2000000000000002, 3.1600000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.82999999999999996, 2.3199999999999998, 2.3199999999999998, 2.3199999999999998, -0.39000000000000001, 163.22, 1.6100000000000001, 44.159999999999997, 4.54, 2.9700000000000002, 1.46, 20.539999999999999, 36.799999999999997, 12.09, 2.73, 3.7200000000000002, 4.5999999999999996, 3.6099999999999999, 4, 8.1199999999999992, 8, 0.62, 0.62, 0.62, 6.79, 6.79, 6.3799999999999999, 47.439999999999998, 18.899999999999999, 7.6600000000000001, 1.9399999999999999, 8.4499999999999993, 8.6500000000000004, 8.6500000000000004, 8.6500000000000004, 8.6500000000000004, 8.6500000000000004, 3.6199999999999997, 4.4299999999999997, 4.4299999999999997, 0.53000000000000003, 319.10000000000002, 6.6600000000000001, 5.6900000000000004, 9.6799999999999997, 7.7699999999999996, 5.2599999999999998, 12.52, 12, 6.1699999999999999, 21.449999999999999, 8.9212356885050266, 8.9212356885050266, 8.9212356885050266, 8.9212356885050266, 2.5800000000000001, 4.5, 12.6, 1.8500000000000001, 5.2500452511852904, 3.6000000000000001, 8.1600000000000001, 9.4299999999999997, 6.6299999999999999, 7.3300000000000001, 8.0899999999999999, 15.02, 0.47999999999999998, 3.73, 3.8763580578364278, 30.57, 18.940000000000001, 3.6200000000000001, 1.8300000000000001, 9.6600000000000001, 0.73999999999999999, 2.9399999999999999, 7.0199999999999996, 2.71, 3.2799999999999998, 1.8500000000000001, 7.8700000000000001, 0.40999999999999998, 4.1799999999999997, 3.405869310457323, 19.280000000000001, 9.6799999999999997, 1.54, 7.9800000000000004, 3.405869310457323, 19.260000000000002, 6.3799999999999999, 7.1600000000000001, 3.405869310457323, 1.0000000000000001e-05, 6.25, -0.90000000000000002, 3.405869310457323, 3.405869310457323, 3.405869310457323, 2.3900000000000001, 3.405869310457323, 3.405869310457323, 5.2999999999999998, 3.405869310457323, 3.405869310457323, 3.405869310457323, 3.405869310457323, 3.405869310457323, 3.405869310457323, 1.0700000000000001, 1.45, 2.6899999999999999, 0.01, 0.46000000000000002, 0.26000000000000001, 0.47999999999999998, 1.4099999999999999, 5.7800000000000002, 0.67000000000000004, 4.6600000000000001, 12.48, 1.6000000000000001, 14.880000000000001, 0.69999999999999996, 1.0000000000000001e-05, 4.8499999999999996, 3.2799999999999998, 6.9800000000000004, 7.5899999999999999, 5.8300000000000001, 1.54, 2.5499999999999998, 2.4199999999999999, 3.8799999999999999, 2.7200000000000002, 4.4800000000000004, 5.7999999999999998, 4.7400000000000002, 6.5800000000000001, 2.9616141862406575, 3.1299999999999999, 2.4100000000000001, 8.7300000000000004, 0.40000000000000002, 4.9500000000000002, 0.27000000000000002, 5.0499999999999998, 9.4700000000000006, 4.96, 1.8999999999999999, 1.3700000000000001, 10.58, 0.080000000000000002, 0.34999999999999998, 2.52, 5.2400000000000002, 1.1699999999999999, 2.7000000000000002, 4.4199999999999999, 5.4800000000000004, 1.97, 0.48999999999999999, 3.8977040279164692, 0.23999999999999999, 1.1100000000000001, 2.1699999999999999, 5.8700000000000001, 16.719999999999999, 16.43, 2.8300000000000001, 8.7200000000000006, 0.62, 4.8499999999999996, 4.5300000000000002, 4.4500000000000002, 0.76000000000000001, 3.7799999999999998, 3.21, -4.0199999999999996, 22.789999999999999, 3.8977040279164692, 0.51000000000000001, 10.76, 3.8977040279164692, 42.090000000000003, 18.359999999999999, 3.8977040279164692, 2.9900000000000002, 2.5600000000000001, 2.6899999999999999, 10.27, 4.3600000000000003, 0.66000000000000003, 6.8799999999999999, 5.7400000000000002, 1.71, 1.8999999999999999, 4.5869017710100692, 3.0699999999999998, 5.6699999999999999, 0.28999999999999998, 8.6500000000000004, 5.0199999999999996, 1.3899999999999999, 7.3799999999999999, 7.9100000000000001, 4.5869017710100692, 9.5, 10.039999999999999, 10.050000000000001, 5.8799999999999999, -6.5499999999999998, 4.5869017710100692, 4.5869017710100692, 8.1699999999999999, 9.8000000000000007, 12.85, 4.5869017710100692, 11.210000000000001, 4.5869017710100692, 21.73, 16.32, 4.5869017710100692, 0.66000000000000003, 11.59, 12.34, 2.46, 4.5869017710100692, 4.5869017710100692, 4.5869017710100692, 4.5869017710100692, 4.5869017710100692, 4.5869017710100692, 4.5869017710100692, 4.5869017710100692, 4.5869017710100692, 4.5869017710100692, 4.5869017710100692, 4.5869017710100692, 4.5869017710100692, 4.5869017710100692, 2.3100000000000001, 4.5199999999999996, 4.2800000000000002, 4.2800000000000002, 4.2800000000000002, 4.2800000000000002, 1.95],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.6599999999999999, 0.68000000000000005, 0.68000000000000005, 0.68000000000000005, 0.75, 16.609999999999999, 0.82999999999999996, 249.11000000000001, 0.64000000000000001, 2.2799999999999998, 3.5600000000000001, 11, 16.010000000000002, 50.039999999999999, 3.1899999999999999, 2.54, 1.7, -0.95999999999999996, -0.56999999999999995, 9.5099999999999998, 2.0499999999999998, 1.1699999999999999, 1.1699999999999999, 1.1699999999999999, -3.48, -3.4800000000000004, 2.6600000000000001, -2.1299999999999999, 7.4900000000000002, 4.9400000000000004, -0.68999999999999995, 22.829999999999998, 0.59999999999999998, 0.59999999999999998, 0.59999999999999998, 0.59999999999999998, 0.59999999999999998, 2.6499999999999999, 2.23, 2.23, 8.5999999999999996, 664.57000000000005, 0.47999999999999998, 3.9199999999999999, 11.17, 6.4900000000000002, 0.79000000000000004, 6.1399999999999997, 4.8499999999999996, 2.7599999999999998, 37.270000000000003, 5.7519091905937403, 5.7519091905937403, 5.7519091905937403, 5.7519091905937403, 1.3200000000000001, 2.9900000000000002, 12.380000000000001, 1.8200000000000001, 5.3208916926389067, 3.6899999999999999, 6.5499999999999998, 2.9900000000000002, 22.52, 4.04, 8.7899999999999991, 13.6, 0.23000000000000001, 2.5699999999999998, 2.6869084825613521, 25.359999999999999, -1.9099999999999999, 2.6499999999999999, 0.90000000000000002, 7.1699999999999999, 1.1699999999999999, 2.2799999999999998, 12.07, 2.9199999999999999, 0.059999999999999998, 0.95999999999999996, 8.9299999999999997, 3.6099999999999999, 5.46, 2.9065650901238063, 10.74, 6.0300000000000002, 3.0299999999999998, 6.7400000000000002, 2.9065650901238063, 13.58, 5.4199999999999999, 1.5700000000000001, 2.9065650901238063, 1.0000000000000001e-05, 0.080000000000000002, 3.77, 2.9065650901238063, 2.9065650901238063, 2.9065650901238063, 1.49, 2.9065650901238063, 2.9065650901238063, 6.2400000000000002, 2.9065650901238063, 2.9065650901238063, 2.9065650901238063, 2.9065650901238063, 2.9065650901238063, 2.9065650901238063, 0.95999999999999996, 0.88, 1.25, 0.45000000000000001, 0.29999999999999999, 1.48, 0.71999999999999997, 1.4299999999999999, 0.51000000000000001, 1.1399999999999999, 2.1699999999999999, 9.8300000000000001, 0.45000000000000001, 13.57, 3.7200000000000002, 1.05, 3.0699999999999998, 8.3100000000000005, 1.1200000000000001, 8.5, 3.5499999999999998, 2, 2.96, 1.95, 8.6199999999999992, 6.3399999999999999, 4.04, 3.5099999999999998, 2.25, -0.070000000000000007, 3.444243842000319, 2.3100000000000001, 2.8999999999999999, -1.3, 0.68000000000000005, 3.2400000000000002, 0.27000000000000002, 3.3500000000000001, 9.1099999999999994, 3.1400000000000001, 7.5800000000000001, 1.1699999999999999, 13.449999999999999, 2.6699999999999999, 0.59999999999999998, 0.55000000000000004, 4.5300000000000002, 1.0900000000000001, 2.0499999999999998, 4.4199999999999999, 1.3600000000000001, 2.0899999999999999, -0.19, 3.6789398567413651, 0.02, 0.97999999999999998, 4.5700000000000003, 2.0499999999999998, 12.23, 7.2300000000000004, 4.9000000000000004, 9.2699999999999996, 2.0600000000000001, 5.25, 2.7200000000000002, 5.25, 2.2799999999999998, 2.8100000000000001, 10.890000000000001, 1.8400000000000001, 9.2300000000000004, 3.6789398567413651, 1.53, 6.7999999999999998, 3.6789398567413651, 7.7199999999999998, 19.77, 3.6789398567413651, 1.8899999999999999, 2.0800000000000001, 1.21, 8.0700000000000003, 3.46, -0.34000000000000002, 4.9000000000000004, 5.3200000000000003, 0.48999999999999999, 1.3500000000000001, 3.0174541691913435, 2.4399999999999999, 3.5099999999999998, 0.47999999999999998, 3.3900000000000001, 2.0899999999999999, 0.69999999999999996, 5.2300000000000004, 5.25, 3.0174541691913435, 4, 4, 3.7000000000000002, 5.1799999999999997, -2.4100000000000001, 3.0174541691913435, 3.0174541691913435, 6.6500000000000004, 6.4699999999999998, 7.9699999999999998, 3.0174541691913435, 10.449999999999999, 3.0174541691913435, 13.300000000000001, 15.43, 3.0174541691913435, -0.41999999999999998, 6.5700000000000003, 8.6699999999999999, -1.0600000000000001, 3.0174541691913435, 3.0174541691913435, 3.0174541691913435, 3.0174541691913435, 3.0174541691913435, 3.0174541691913435, 3.0174541691913435, 3.0174541691913435, 3.0174541691913435, 3.0174541691913435, 3.0174541691913435, 3.0174541691913435, 3.0174541691913435, 3.0174541691913435, 1.1100000000000001, 1.52, 3.0899999999999999, 3.0899999999999999, 3.0899999999999999, 3.0899999999999999, -0.040000000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [2.5299999999999998, 1.47, 1.47, 1.47, 0.46000000000000002, 102.31, 0.17999999999999999, 120.59999999999999, 2.5699999999999998, 3.77, -5.6100000000000003, 13.66, 26.07, 69.609999999999999, 3.8999999999999999, 4.8600000000000003, 2.3199999999999998, 2.9700000000000002, 1.98, 13.279999999999999, 0.13, -3.6499999999999999, -3.6499999999999999, -3.6499999999999999, 4.9000000000000004, 4.9000000000000004, 1.8899999999999999, -15.710000000000001, 3.6299999999999999, 2.6299999999999999, 0.66000000000000003, 17.010000000000002, 2.6800000000000002, 2.6800000000000002, 2.6800000000000002, 2.6800000000000002, 2.6800000000000002, 1.6399999999999999, 5.0199999999999996, 5.0199999999999996, 2.9500000000000002, 587.84000000000003, 1.8700000000000001, 4.5700000000000003, 9.1400000000000006, 4.0499999999999998, 2.5800000000000001, 7.5199999999999996, 4.2599999999999998, 3.2000000000000002, 18.300000000000001, 4.7425840409480937, 4.7425840409480937, 4.7425840409480937, 4.7425840409480937, 1.1699999999999999, 2.8300000000000001, 5.04, 3.3399999999999999, 5.7878223095651222, 2.4300000000000002, 6.3399999999999999, 1.6599999999999999, 16.079999999999998, 9.8599999999999994, 5.7199999999999998, 23.530000000000001, 0.13, 4, 4.1715058060627701, 36.170000000000002, 12.85, 1.6399999999999999, 2.0299999999999998, 5.4299999999999997, 0.51000000000000001, 4.3200000000000003, 23.07, 1.8200000000000001, 4.2699999999999996, 0.81000000000000005, 12.49, 0.25, 3.9100000000000001, 3.5439789064392464, 5.6699999999999999, 18.469999999999999, 3.5099999999999998, 8.3599999999999994, 3.5439789064392464, 15.369999999999999, 9.4100000000000001, 0.050000000000000003, 3.5439789064392464, -4.25, 1.0000000000000001e-05, 1.27, 3.5439789064392464, 3.5439789064392464, 3.5439789064392464, 1.4399999999999999, 3.5439789064392464, 3.5439789064392464, 1.4199999999999999, 3.5439789064392464, 3.5439789064392464, 3.5439789064392464, 3.5439789064392464, 3.5439789064392464, 3.5439789064392464, 0.82999999999999996, 1.0700000000000001, 1.03, 1.2, 0.55000000000000004, 4.8600000000000003, 0.75, 1.01, 0.60999999999999999, 0.57999999999999996, 2.9300000000000002, 6.2199999999999998, 2.9300000000000002, 11.130000000000001, 1.8600000000000001, 1.1299999999999999, 1.9099999999999999, 3.73, 0.60999999999999999, 5.5300000000000002, 2.9199999999999999, 1.4299999999999999, 2.7799999999999998, 1.23, 10.15, 3.48, 2.9300000000000002, 2.8900000000000001, 2.3700000000000001, 2.3199999999999998, 2.9732138488052597, 0.88, 1.6399999999999999, 12.720000000000001, 0.95999999999999996, 5.6600000000000001, 0.39000000000000001, 2.04, 7.8499999999999996, -3.8500000000000001, 11.029999999999999, 1.03, 9.1400000000000006, 1.95, 0.38, 0.95999999999999996, 8.5299999999999994, 1.02, 1.6899999999999999, 4.4199999999999999, 1.0000000000000001e-05, 3.5299999999999998, 0.56000000000000005, 4.4284230225369017, 0.040000000000000001, 2.6299999999999999, 9.25, 2.8700000000000001, 11.58, 103.34, 5.7300000000000004, 2.52, 1.73, 0.42999999999999999, 2.4100000000000001, 3.6499999999999999, 3.0899999999999999, 4.2999999999999998, 16.760000000000002, 3.0600000000000001, 3.23, 4.4284230225369017, 0.92000000000000004, 6.3700000000000001, 4.4284230225369017, 26.629999999999999, 16.27, 4.4284230225369017, 3.73, 2.7599999999999998, 2.6800000000000002, 7.3799999999999999, 2.2400000000000002, 0.40000000000000002, 5.2199999999999998, 5.7300000000000004, 0.23999999999999999, 2.71, 3.4033935530424939, 3.1699999999999999, 3.3799999999999999, 1.5, 3.8300000000000001, -0.60999999999999999, 2.5899999999999999, 5.5899999999999999, 5.0599999999999996, 3.4033935530424939, 8.6600000000000001, 1.4099999999999999, 2.48, 5.7699999999999996, -5.8499999999999996, 3.4033935530424939, 3.4033935530424939, 8.6400000000000006, 5.5499999999999998, 9.3900000000000006, 3.4033935530424939, 8.1799999999999997, 3.4033935530424939, 7.8399999999999999, 13.49, 3.4033935530424939, 7.6100000000000003, 8.4199999999999999, 4.9299999999999997, 3.3599999999999999, 3.4033935530424939, 3.4033935530424939, 3.4033935530424939, 3.4033935530424939, 3.4033935530424939, 3.4033935530424939, 3.4033935530424939, 3.4033935530424939, 3.4033935530424939, 3.4033935530424939, 3.4033935530424939, 3.4033935530424939, 3.4033935530424939, 3.4033935530424939, 1.75, 1.8400000000000001, 3.0600000000000001, 3.0600000000000001, 3.0600000000000001, 3.0600000000000001, 0.20000000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [2.6000000000000001, 1.54, 1.54, 1.54, 1.5, 81, 0.39000000000000001, 146.72999999999999, 1.8100000000000001, 4.0099999999999998, 5.3200000000000003, 36.68, 31.27, 14.33, 3.4900000000000002, 1.8200000000000001, 5.4400000000000004, 4.3200000000000003, 5.5300000000000002, 4.8200000000000003, 1.22, 3.9399999999999999, 3.9399999999999999, 3.9399999999999999, -2.1800000000000002, -2.1800000000000002, 1.23, 7.5700000000000003, 3.6400000000000001, 1.99, 1.7, 9.9100000000000001, 1.01, 1.01, 1.01, 1.01, 1.01, 2, 2.0499999999999998, 2.0499999999999998, 2.8999999999999999, 460.20999999999998, 7.2699999999999996, 4.2599999999999998, 8.1400000000000006, 10.01, 7.75, 2.5299999999999998, 4.4299999999999997, 4.8399999999999999, 12.25, 7.2271974295784576, 7.2271974295784576, 7.2271974295784576, 7.2271974295784576, 1.9299999999999999, 2.6899999999999999, 7.1399999999999997, 2.6800000000000002, 6.741359696516346, 6.4800000000000004, 6.7999999999999998, 2.2400000000000002, 11.6, 11.06, 6.4400000000000004, 43.909999999999997, -0.01, 3.71, 3.8932475480465762, 38.68, 4.7599999999999998, 2, 2.2999999999999998, 4.2999999999999998, 0.85999999999999999, 0.67000000000000004, 17.600000000000001, 4.2000000000000002, 5.0700000000000003, 1.4099999999999999, 11.99, 0.20000000000000001, 3.4399999999999999, 4.6325953985614952, 5.75, 11.279999999999999, 3.73, 15.27, 4.6325953985614952, 16.98, 7.9400000000000004, 2.04, 4.6325953985614952, -0.19, 1.0000000000000001e-05, 1.8400000000000001, 4.6325953985614952, 4.6325953985614952, 4.6325953985614952, 4.2300000000000004, 4.6325953985614952, 4.6325953985614952, -0.29999999999999999, 4.6325953985614952, 4.6325953985614952, 4.6325953985614952, 4.6325953985614952, 4.6325953985614952, 4.6325953985614952, 0.78000000000000003, 0.97999999999999998, 0.57999999999999996, 0.28999999999999998, 0.44, 1.75, 0.68000000000000005, 1.1200000000000001, -1.5800000000000001, 1.1899999999999999, 3.2400000000000002, 5.0300000000000002, 1.98, 7.8600000000000003, 2.1400000000000001, 2.1200000000000001, 2.1000000000000001, 0.56000000000000005, 2.71, 2.4100000000000001, -0.20000000000000001, 1.29, 2.21, 2.29, 12.16, 4.29, 2.3199999999999998, 0.90000000000000002, 1.0000000000000001e-05, 8.6999999999999993, 3.1904118249516142, 0.90000000000000002, 2.1299999999999999, 6.1799999999999997, 1.97, 3.5499999999999998, 3.0899999999999999, 3.21, 8.2599999999999998, -2.7000000000000002, 25.059999999999999, 0.81999999999999995, 7.0599999999999996, 2.1299999999999999, 1.1899999999999999, 6.9800000000000004, 4.7300000000000004, 2.4399999999999999, 1.8999999999999999, 4.4199999999999999, 14.09, 1.6299999999999999, 6.0189223115114405, 1.51, 0.14999999999999999, 13.44, 32.409999999999997, 1.9099999999999999, 1.51, 86.989999999999995, 1.8899999999999999, 6.4199999999999999, 1.9399999999999999, 2.3700000000000001, 2.5600000000000001, 6.1699999999999999, 2.2799999999999998, 3.7599999999999998, 9.25, 2.0499999999999998, 6.3799999999999999, 6.0189223115114405, 2.2599999999999998, 5, 6.0189223115114405, 14.199999999999999, 13.52, 6.0189223115114405, 3.9199999999999999, 1.9399999999999999, 2.04, 10.17, 4.3700000000000001, 1.8500000000000001, 5.3399999999999999, 4.4699999999999998, 0.81000000000000005, 1.8700000000000001, 3.608314025500345, 3.5800000000000001, 3.79, 0.91000000000000003, 5.8899999999999997, 0.59999999999999998, 9.5800000000000001, 1.79, 6.3899999999999997, 12.67, 3.608314025500345, 1.2, 0.16, 6.6900000000000004, 3.29, 3.608314025500345, 3.608314025500345, 6.6200000000000001, 5.2400000000000002, 9.8699999999999992, 3.608314025500345, 6.1500000000000004, 3.608314025500345, 5.4800000000000004, 12, 3.608314025500345, 18.510000000000002, 5.0899999999999999, 2.8300000000000001, -4.0800000000000001, 3.608314025500345, 3.608314025500345, 3.608314025500345, 3.608314025500345, 3.608314025500345, 3.608314025500345, 3.608314025500345, 3.608314025500345, 3.608314025500345, 3.608314025500345, 3.608314025500345, 3.608314025500345, 3.608314025500345, 3.608314025500345, 1.6899999999999999, 2.1400000000000001, 4.6900000000000004, 4.6900000000000004, 4.6900000000000004, 4.6900000000000004, 0.81999999999999995],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.8600000000000001, 1.23, 1.23, 1.23, 1.0000000000000001e-05, 35.130000000000003, 0.68999999999999995, 280.14999999999998, 1.5700000000000001, 9.9000000000000004, 1.27, 28.57, 2.3799999999999999, 4.7199999999999998, 1.45, 4.5199999999999996, 1.8799999999999999, 1.5800000000000001, 3.8399999999999999, 7.7599999999999998, 0.77000000000000002, -5, -5, -5, 1.9099999999999999, 1.9099999999999999, 1.7, 8.4000000000000004, 3.29, 2.5499999999999998, 0.070000000000000007, 25.800000000000001, 1.73, 1.73, 1.73, 1.73, 1.73, 1.3100000000000001, 5.4400000000000004, 5.4400000000000004, 5.8200000000000003, 540.37, 6.9400000000000004, 4.4800000000000004, 7.4500000000000002, 2.9399999999999999, 5.8700000000000001, 2.2799999999999998, 2.8799999999999999, 3.4700000000000002, 15.119999999999999, 3.7151927830859481, 3.7151927830859481, 3.7151927830859481, 3.7151927830859481, 1.5600000000000001, 2.29, 6.5599999999999996, 1.1000000000000001, 4.5838004964452379, 2.23, 7.5999999999999996, 3.1699999999999999, 8.9000000000000004, 3.9500000000000002, 4.6799999999999997, 34.759999999999998, 0.01, 2.8300000000000001, 2.9670858126980675, 28.510000000000002, 8.2599999999999998, 1.3100000000000001, 2.3100000000000001, 4.2800000000000002, 1.23, 3.2400000000000002, 18.739999999999998, 2.23, 2.8300000000000001, 1.3400000000000001, 14.15, 0.14000000000000001, 6.0599999999999996, 3.7294290749184427, 6.9800000000000004, 2.0099999999999998, 4.54, 7.9000000000000004, 3.7294290749184427, 27.77, 8.0800000000000001, 2.7000000000000002, 3.7294290749184427, -1.26, 1.0000000000000001e-05, -0.17999999999999999, 3.7294290749184427, 3.7294290749184427, 3.7294290749184427, 3.7294290749184427, 10.19, 3.7294290749184427, 3.3700000000000001, 3.7294290749184427, 3.7294290749184427, 3.7294290749184427, 3.7294290749184427, 3.7294290749184427, 3.7294290749184427, 0.73999999999999999, 1.1899999999999999, 0.34000000000000002, 0.28999999999999998, 0.41999999999999998, 1.3700000000000001, 0.71999999999999997, 1.5600000000000001, -0.040000000000000001, 1.1899999999999999, 3.4399999999999999, 4.8899999999999997, 2.4900000000000002, 7.0700000000000003, 0.52000000000000002, 1.5600000000000001, 1.6499999999999999, 0.20999999999999999, 5.0199999999999996, 1.6399999999999999, 1, 0.71999999999999997, 3.6600000000000001, 2.6600000000000001, 8.9199999999999999, 3.2000000000000002, 4.6900000000000004, 3.29, 1.54, 20.600000000000001, 3.6584509213143654, 1.0600000000000001, 1.52, 9.8699999999999992, 0.64000000000000001, 4.54, 2.4500000000000002, 4.4100000000000001, 7.9800000000000004, -1.1399999999999999, 33.770000000000003, 0.91000000000000003, 7.04, 1.75, 2.6200000000000001, -0.10000000000000001, 6.79, 2.04, 1.5600000000000001, 4.4199999999999999, 7.9299999999999997, 3.52, 6.0170182692909808, 2.5299999999999998, 0.029999999999999999, 2.2400000000000002, 19.07, -0.39000000000000001, 2.79, 82.75, 1.8899999999999999, 7.9900000000000002, 1.05, 2.9100000000000001, 2.29, 3.9399999999999999, 0.67000000000000004, 4.4000000000000004, 5.0499999999999998, 0.54000000000000004, 8.1300000000000008, 6.0170182692909808, 1.02, 6.6900000000000004, 6.0170182692909808, 9.8000000000000007, 56.259999999999998, 6.0170182692909808, 3.75, 1.45, 2.8100000000000001, 11.91, 4.0599999999999996, 1.3100000000000001, 11.789999999999999, 7.3600000000000003, 0.65000000000000002, 2.8199999999999998, 4.3198003750441689, 3.9100000000000001, 5.6299999999999999, 1.1399999999999999, 5.8399999999999999, 2.0099999999999998, 7.3700000000000001, 2.3199999999999998, 5.71, 8.3599999999999994, 4.3198003750441689, 2.79, -6.9699999999999998, 6.8399999999999999, 3.3999999999999999, 4.3198003750441689, 4.3198003750441689, 4.9100000000000001, 10.220000000000001, 11.44, 4.3198003750441689, 4.7400000000000002, 4.3198003750441689, 3.9399999999999999, 15.81, 4.3198003750441689, -12.029999999999999, 9.75, 4.7599999999999998, 0.75, 4.3198003750441689, 4.3198003750441689, 4.3198003750441689, 4.3198003750441689, 4.3198003750441689, 4.3198003750441689, 4.3198003750441689, 4.3198003750441689, 4.3198003750441689, 4.3198003750441689, 4.3198003750441689, 4.3198003750441689, 4.3198003750441689, 4.3198003750441689, 1.54, 2.7000000000000002, 3.7200000000000002, 3.7199999999999998, 3.7199999999999998, 3.7199999999999998, 2.1800000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.8, 1.1200000000000001, 1.1200000000000001, 1.1200000000000001, 0.91000000000000003, 4.8300000000000001, 1.23, 108.65000000000001, 3.4900000000000002, 6.9500000000000002, 0.10000000000000001, 37.469999999999999, -5.6799999999999997, 35.729999999999997, 0.20000000000000001, 3.48, 1.01, 1.6499999999999999, 3.2799999999999998, 4.3700000000000001, 0.22, 0.20000000000000001, 0.20000000000000001, 0.20000000000000001, -1.8100000000000001, -1.8099999999999998, 2.0299999999999998, -2.6400000000000001, 3.5600000000000001, 1.6200000000000001, 0.20999999999999999, 29.739999999999998, 1.96, 1.96, 1.96, 1.96, 1.96, 1.52, -0.26000000000000001, -0.26000000000000001, -3.5299999999999998, 18.07, 2.9300000000000002, 2.3700000000000001, 9.8200000000000003, 4.2599999999999998, 6.0899999999999999, 1.72, 2.5499999999999998, 3.7200000000000002, 10, 4.0421659636740053, 4.0421659636740053, 4.0421659636740053, 4.0421659636740053, 1.4199999999999999, 3.02, 4.2300000000000004, 0.94999999999999996, 3.5659784146341975, 2.9700000000000002, 3.5299999999999998, 3.3500000000000001, 7.2999999999999998, 8.3399999999999999, 3.1099999999999999, 16.370000000000001, 0.20000000000000001, 3.04, 3.1719152321776023, 27.879999999999999, 7.3200000000000003, 1.52, 2.5499999999999998, 4.1600000000000001, 1.3200000000000001, 3.79, 20.93, 3.7400000000000002, 3.4900000000000002, 1.21, 13.58, 0.13, 5.6900000000000004, 4.352324924356048, 5.8200000000000003, 4.1600000000000001, 4.29, 10.949999999999999, 21.34, 4.352324924356048, 7.8300000000000001, 1.73, 4.352324924356048, 0.45000000000000001, 1.0000000000000001e-05, 1.3899999999999999, 4.352324924356048, 4.352324924356048, 4.352324924356048, 4.352324924356048, 8.1600000000000001, 4.352324924356048, 0.87, 4.352324924356048, 4.352324924356048, 4.352324924356048, 4.352324924356048, 4.352324924356048, 4.352324924356048, 0.93000000000000005, 1.74, 0.52000000000000002, 0.23999999999999999, 0.33000000000000002, 1.1599999999999999, 0.62, -1, -0.33000000000000002, 1.1899999999999999, 3.98, 5.6500000000000004, 2.4399999999999999, 5.6799999999999997, 1.3999999999999999, 1.79, 0.81999999999999995, -0.41999999999999998, 11.460000000000001, 1.1799999999999999, 1.45, 0.81000000000000005, 2.5600000000000001, 2.8999999999999999, 7.04, 2.3300000000000001, 4.0199999999999996, 2.1699999999999999, 0.93000000000000005, 15.59, 2.9871318065639678, 2.0499999999999998, 1.0700000000000001, 5.1900000000000004, 2.8199999999999998, 4.5700000000000003, 1.8100000000000001, 3.79, 5.1399999999999997, -5.3799999999999999, 38.939999999999998, 4.5499999999999998, 0.94999999999999996, 1.6200000000000001, 3.6499999999999999, 5.6200000000000001, 7.4900000000000002, 1.95, 1.6499999999999999, 4.4199999999999999, 1.0000000000000001e-05, 5.5551212390666063, 2.9900000000000002, 2.8799999999999999, 4.7599999999999998, 3.0499999999999998, 8.7300000000000004, 10.460000000000001, 0.11, 62.909999999999997, 1.8899999999999999, 6.4500000000000002, 0.46999999999999997, 4.9699999999999998, 2.1299999999999999, 1.8400000000000001, 1.8799999999999999, 2.6600000000000001, 2.3900000000000001, 1.78, 14, 5.5551212390666063, 0.38, 4.4000000000000004, 5.5551212390666063, 4.5499999999999998, 4.3200000000000003, 5.5551212390666063, 3.04, 3.8399999999999999, 1.78, 7.6100000000000003, 4.2400000000000002, 0.57999999999999996, 1.6100000000000001, 4.7599999999999998, 0.76000000000000001, 2.8700000000000001, 3.6687397699731648, 5.71, 1.0900000000000001, 2.5499999999999998, 5.7800000000000002, 1.1100000000000001, 8.7899999999999991, 0.94999999999999996, 6.29, 8.3300000000000001, 3.6687397699731648, 3.8199999999999998, -3.9399999999999999, 4.8099999999999996, 3.6299999999999999, 3.6687397699731648, 3.6687397699731648, 3.6800000000000002, 4.5599999999999996, 2.2200000000000002, 3.6687397699731648, 5.0300000000000002, 3.6687397699731648, 8.8599999999999994, 16.57, 3.6687397699731648, 8.3000000000000007, 10.130000000000001, 3.6000000000000001, 0.84999999999999998, 3.6687397699731648, 3.6687397699731648, 3.6687397699731648, 3.6687397699731648, 3.6687397699731648, 3.6687397699731648, 3.6687397699731648, 3.6687397699731648, 3.6687397699731648, 3.6687397699731648, 3.6687397699731648, 3.6687397699731648, 3.6687397699731648, 3.6687397699731648, 1.71, 3.6299999999999999, 3.4500000000000002, 3.4500000000000002, 3.4500000000000002, 3.4500000000000002, -0.040000000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [0.5, 0.20000000000000001, 0.20000000000000001, 0.20000000000000001, 0.79000000000000004, 1.3400000000000001, 1.1499999999999999, 223.44, 2.3999999999999999, 5.2400000000000002, 0.39000000000000001, 13.18, -2.8399999999999999, 29.16, 3.79, 3.8599999999999999, -0.35999999999999999, 0.73999999999999999, 3.3300000000000001, 6.6900000000000004, -1.48, 1.8600000000000001, 1.8600000000000001, 1.8600000000000001, 6.3799999999999999, 6.3800000000000008, 1.9399999999999999, 9.2599999999999998, 1.9099999999999999, 5.3600000000000003, 2.04, 37.5, 1.9199999999999999, 1.9199999999999999, 1.9199999999999999, 1.9199999999999999, 1.9199999999999999, 1.7, 0.65000000000000002, 0.65000000000000002, 2.8900000000000001, 140.28999999999999, 4.29, 0.63, 8.6899999999999995, 4.25, 10.42, 2.9399999999999999, 3.6800000000000002, 0.54000000000000004, 10.82, 4.8798464380837876, 4.8798464380837876, 4.8798464380837876, 4.8798464380837876, 1.4199999999999999, 1.0700000000000001, 3.2999999999999998, 1, 3.1504540953389801, 5.8899999999999997, 2.3599999999999999, 3.5800000000000001, 8.8000000000000007, 4.5899999999999999, 3.5, 2.7599999999999998, 0.40000000000000002, 2.5600000000000001, 2.7808600372309797, 44.549999999999997, 4.4199999999999999, 1.7, 2.8199999999999998, 3.9399999999999999, 1.9299999999999999, 1.22, 21.82, 3.3199999999999998, 3.1400000000000001, 1.0800000000000001, 11.1, 0.13, 6.5300000000000002, 3.8405747475530156, 7.7800000000000002, 1.5700000000000001, 3.3599999999999999, 9.0199999999999996, 16.52, 3.8405747475530156, 1.72, 2.8700000000000001, 3.8405747475530156, 1.48, 6.3300000000000001, 3.0099999999999998, 3.8405747475530156, 3.8405747475530156, 3.8405747475530156, 3.8405747475530156, 16.489999999999998, 3.8405747475530156, 0.77000000000000002, 3.8405747475530156, 3.8405747475530156, 3.8405747475530156, 3.8405747475530156, 3.8405747475530156, 3.8405747475530156, 0.62, 1.47, 0.69999999999999996, 0.20999999999999999, 0.13, 1.23, 0.46000000000000002, -4.46, -0.54000000000000004, 1.1899999999999999, 5.9100000000000001, 1.9199999999999999, 2.6699999999999999, 5.9500000000000002, 1.1399999999999999, 1.3899999999999999, 0.29999999999999999, 0.5, 4.5499999999999998, 1.05, 1.51, 0.69999999999999996, 1.6299999999999999, 2.96, 7.5800000000000001, 1, -4.8499999999999996, 2.04, 1.0000000000000001e-05, 7.6200000000000001, 1.8312308550627314, 1.52, 0.81999999999999995, 4.1799999999999997, 3.3399999999999999, 2.8300000000000001, 1.2, 3.25, 6.1399999999999997, 2.6899999999999999, 27.800000000000001, 2.98, 0.90000000000000002, 1.99, 2.5600000000000001, 6.7999999999999998, 5.5599999999999996, 2.4300000000000002, 2.04, 3.9900000000000002, -0.83999999999999997, 3.8100000000000001, 4.5802687270036593, 3.0499999999999998, 3.02, 0.83999999999999997, 7.4800000000000004, 16.129999999999999, 0.17999999999999999, 15.56, 1.8899999999999999, 3.5800000000000001, 3.3300000000000001, 1.8700000000000001, 3.8700000000000001, 6.9400000000000004, 2.7400000000000002, 0.77000000000000002, 3.48, 0.57999999999999996, 6.9100000000000001, 4.5802687270036593, 0.40999999999999998, 8.8399999999999999, 4.5802687270036593, 9.0399999999999991, 7.8099999999999996, 4.5802687270036593, 3.5699999999999998, 2.0800000000000001, 0.95999999999999996, 9.8399999999999999, 4.2400000000000002, 0.23999999999999999, 6.6399999999999997, 2.1200000000000001, 0.76000000000000001, 2.4300000000000002, 3.2154665273374956, 1.99, 0.65000000000000002, 3.5499999999999998, 8.6300000000000008, 2.2400000000000002, 2.21, 9.0600000000000005, 6.2300000000000004, 9.9800000000000004, 3.2154665273374956, 4.1900000000000004, 2.23, 5.7599999999999998, -1.1399999999999999, 3.2154665273374956, 3.2154665273374956, 2.29, 6.6399999999999997, 16.010000000000002, 3.2154665273374956, 3.7400000000000002, 3.2154665273374956, 11.720000000000001, 3.2154665273374956, 16.140000000000001, 8.9800000000000004, 3.3599999999999999, 2.3700000000000001, -0.050000000000000003, 3.2154665273374956, 3.2154665273374956, 3.2154665273374956, 3.2154665273374956, 3.2154665273374956, 3.2154665273374956, 3.2154665273374956, 3.2154665273374956, 3.2154665273374956, 3.2154665273374956, 3.2154665273374956, 3.2154665273374956, 3.2154665273374956, 3.2154665273374956, 1.4399999999999999, 3.5499999999999998, 4.2999999999999998, 4.2999999999999998, 4.2999999999999998, 4.2999999999999998, 1.6200000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.8600000000000001, 1.76, 1.76, 1.76, 0.71999999999999997, 32.82, 0.65000000000000002, 145.94999999999999, 1.9299999999999999, 0.64000000000000001, -2.0899999999999999, 43.490000000000002, -4.2199999999999998, 75.629999999999995, 3.27, 0.90000000000000002, 1.71, 2.5, 2.98, -3.1299999999999999, 2.0299999999999998, 0.60999999999999999, 0.60999999999999999, 0.60999999999999999, 7.46, 7.46, 2.4300000000000002, -4.21, 4.3700000000000001, 0.070000000000000007, 4.0099999999999998, 81.079999999999998, 1.55, 1.55, 1.55, 1.55, 1.55, 2.0899999999999999, 1.8700000000000001, 1.8700000000000001, 17.109999999999999, 1282.6099999999999, 6.54, -0.22, 8.6899999999999995, 5.9100000000000001, 11.6, 2.3399999999999999, 2.8999999999999999, 2.9500000000000002, 17.260000000000002, 5.9797759921473768, 5.9797759921473768, 5.9797759921473768, 5.9797759921473768, 2.23, 0.5, 3.5699999999999998, 1.21, 4.5576566632316879, 7.6299999999999999, 2.9300000000000002, 5.4900000000000002, 8.5, 17.129999999999999, 0.81000000000000005, 1.74, 0.12, 2.1899999999999999, 2.4854366793001441, 58.520000000000003, 1.0800000000000001, 2.0899999999999999, 2.2999999999999998, 4.9299999999999997, 1.8400000000000001, 2.2200000000000002, 22.649999999999999, 6.8399999999999999, 3.27, 0.80000000000000004, 10.1, 0.14000000000000001, 7.4699999999999998, 5.0307357444042609, 4.3899999999999997, 2.46, 7.2199999999999998, 1.3200000000000001, 13.779999999999999, 5.0307357444042609, 4.2400000000000002, 3.2599999999999998, 5.0307357444042609, -0.47999999999999998, 6.3300000000000001, 1.45, 5.0307357444042609, 5.0307357444042609, 5.0307357444042609, 12.33, 5.0307357444042609, 5.0307357444042609, 0.81000000000000005, 5.0307357444042609, 5.0307357444042609, 5.0307357444042609, 5.0307357444042609, 5.0307357444042609, 5.0307357444042609, 0.28000000000000003, 1.45, 0.56000000000000005, 0.88, 0.20999999999999999, 0.32000000000000001, 0.5, -4.54, -0.040000000000000001, 1.1899999999999999, 4.1500000000000004, 2.3100000000000001, 3.7400000000000002, 4.3200000000000003, 0.75, -2.7599999999999998, 0.25, 0.66000000000000003, 0.20999999999999999, 1.22, 2.1000000000000001, 2.0299999999999998, -0.32000000000000001, 2.9500000000000002, 5.4699999999999998, 2.1000000000000001, 5.1100000000000003, 2.1200000000000001, 1.0000000000000001e-05, 8.1400000000000006, 2.3715336248104961, 0.44, 0.62, 3.0699999999999998, 4.0700000000000003, 3.1800000000000002, 0.88, 2.2799999999999998, 6.46, 11.08, 23.870000000000001, 2.8999999999999999, 1.0800000000000001, 2.1600000000000001, 1.96, 3.1200000000000001, 7.4500000000000002, 2.2999999999999998, 2, 4.3399999999999999, 0.60999999999999999, 1.8999999999999999, 1.3200000000000001, 4.8125747349386288, 1.6000000000000001, 4.4800000000000004, 5.9400000000000004, 34.420000000000002, 7.21, 0.17999999999999999, 1.8899999999999999, 7.4000000000000004, 5.2199999999999998, 2.7999999999999998, 8.75, 0.28999999999999998, 1.77, 1.77, 1.8, 0.78000000000000003, 5.9299999999999997, 4.8125747349386288, 0.51000000000000001, 5.4900000000000002, 4.8125747349386288, 10.74, 7.6100000000000003, 4.8125747349386288, 3.5899999999999999, 2.9900000000000002, 1.98, 7.3300000000000001, 3.96, 0.23999999999999999, 4.6299999999999999, 3.8700000000000001, 1.3300000000000001, 1.9399999999999999, 3.2790835638121312, 1.6799999999999999, 0.70999999999999996, 3.1299999999999999, 6.2800000000000002, 2.1099999999999999, 1.6100000000000001, 7.5800000000000001, 5.2400000000000002, 9.4600000000000009, 3.2790835638121312, 6.5199999999999996, 0.65000000000000002, 3.2200000000000002, 3.5800000000000001, 3.2790835638121312, 0.65000000000000002, 3.2790835638121312, 2.6899999999999999, 14.539999999999999, 3.2790835638121312, 8.4199999999999999, 3.2790835638121312, 15.69, -0.96999999999999997, 3.2790835638121312, 15.75, 7.9299999999999997, 1.3200000000000001, -2.1499999999999999, 3.2790835638121312, 3.2790835638121312, 3.2790835638121312, 3.2790835638121312, 3.2790835638121312, 3.2790835638121312, 3.2790835638121312, 3.2790835638121312, 3.2790835638121312, 3.2790835638121312, 3.2790835638121312, 3.2790835638121312, 3.2790835638121312, 3.2790835638121312, 2.8100000000000001, 3.8500000000000001, 3.4700000000000002, 3.4700000000000002, 3.4700000000000002, 3.4700000000000002, -0.040000000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.8700000000000001, 1.3300000000000001, 1.3300000000000001, 1.3300000000000001, 1.3700000000000001, 23.789999999999999, 1.3999999999999999, 40.609999999999999, 3.5899999999999999, 3.5600000000000001, -7.3099999999999996, 30.75, 12.09, 28.260000000000002, 3.7799999999999998, 5.5300000000000002, 5.2699999999999996, 2.7400000000000002, 1.1899999999999999, 3.8500000000000001, 3.0299999999999998, 2.4900000000000002, 2.4900000000000002, 2.4900000000000002, 2.1299999999999999, 2.1299999999999999, 3.3700000000000001, 54.18, 2.7599999999999998, 0.81000000000000005, 3.23, 34.469999999999999, 12.08, 12.08, 12.08, 12.08, 12.08, 1.9399999999999999, -5.0300000000000002, -5.0300000000000002, 24.25, 972.69000000000005, -5.1299999999999999, 4.4199999999999999, 8.8100000000000005, 5.79, 10.960000000000001, 1.8300000000000001, 1.1000000000000001, 5.1500000000000004, 5.1799999999999997, 5.3581209217435255, 5.3581209217435255, 5.3581209217435255, 5.3581209217435255, 1.5900000000000001, 2.5499999999999998, 12.550000000000001, 1.9299999999999999, 2.845491776798589, 11.880000000000001, 2.6099999999999999, 3.46, 6.2000000000000002, 9.0899999999999999, -37.170000000000002, 3.1699999999999999, 0.81999999999999995, 1.5600000000000001, 1.7712947722171799, 41.530000000000001, 4.1299999999999999, 1.9399999999999999, 0.48999999999999999, 4.9000000000000004, 2.6000000000000001, 0.83999999999999997, 20.489999999999998, 5.1900000000000004, 4.4699999999999998, 1.02, 12.369999999999999, -0.19, 5.8799999999999999, 4.8992774472770897, 7.9400000000000004, 2.71, 10.35, -1.3200000000000001, 9.2799999999999994, 4.8992774472770897, 6.2800000000000002, 0.29999999999999999, 4.8992774472770897, 1.01, 6.3300000000000001, 1.3600000000000001, 4.8992774472770897, 4.8992774472770897, 4.8992774472770897, 21.359999999999999, 4.8992774472770897, 4.8992774472770897, 4.8992774472770897, 0.71999999999999997, 4.8992774472770897, 4.8992774472770897, 4.8992774472770897, 4.8992774472770897, 4.8992774472770897, 0.81000000000000005, 0.88, 0.81999999999999995, 0.52000000000000002, 0.42999999999999999, 0.55000000000000004, 0.73999999999999999, -3.75, -1.79, 1.1899999999999999, 3.8900000000000001, 2.6000000000000001, 3.7200000000000002, 5.0199999999999996, 3.02, 1.9199999999999999, 0.27000000000000002, 0.51000000000000001, 0.75, 1.1200000000000001, 2.4399999999999999, 1.03, 1.02, 1.9299999999999999, 2.8999999999999999, 2.54, 2.4199999999999999, 1.3999999999999999, 1.0000000000000001e-05, 4.2400000000000002, 1.7005443523949575, 0.68000000000000005, 0.84999999999999998, 2.5099999999999998, 5.5800000000000001, 1.74, 0.63, 2.1400000000000001, 6.21, -0.34000000000000002, 25.920000000000002, 4.5599999999999996, 1.1899999999999999, 1.96, 3.04, 1.46, 3.1600000000000001, 2.48, 1.6699999999999999, 4.4699999999999998, 18.829999999999998, 3.2200000000000002, 1.1100000000000001, 1.0000000000000001e-05, 3.9399159121841292, -0.76000000000000001, 3.5899999999999999, 0.46000000000000002, 9.1699999999999999, 0.40000000000000002, 1.8899999999999999, 3.3500000000000001, 4.7000000000000002, 0.93999999999999995, 3.7200000000000002, 8.8699999999999992, 1.21, 0.47999999999999998, 3.0099999999999998, 0.69999999999999996, 6.1399999999999997, 3.9399159121841292, 0.34999999999999998, 6.8300000000000001, 3.9399159121841292, 7.9800000000000004, 4.6799999999999997, 3.9399159121841292, 4.1399999999999997, 3.5, 0.57999999999999996, 4.5599999999999996, 4.9000000000000004, 0.23999999999999999, -0.90000000000000002, 3.5499999999999998, 0.76000000000000001, 1.28, 2.932243116874083, 0.98999999999999999, 0.75, 3.3199999999999998, 5.2800000000000002, 2.0499999999999998, 7.4400000000000004, 1.98, 4.4500000000000002, 9.0600000000000005, 2.932243116874083, 6.5899999999999999, -0.10000000000000001, 3.6299999999999999, 6.9800000000000004, 2.932243116874083, 3.3199999999999998, 2.932243116874083, 1.46, 11.51, 2.932243116874083, 8.6600000000000001, 2.932243116874083, 10.35, 0.92000000000000004, 2.932243116874083, 8.6600000000000001, 6.54, 7.3300000000000001, -1.0600000000000001, 2.932243116874083, 2.932243116874083, 2.932243116874083, 2.932243116874083, 2.932243116874083, 2.932243116874083, 2.932243116874083, 2.932243116874083, 2.932243116874083, 2.932243116874083, 2.932243116874083, 2.932243116874083, 2.932243116874083, 2.932243116874083, 2.54, 2.2400000000000002, 3.5600000000000001, 3.5600000000000001, 3.5600000000000001, 3.5600000000000001, 1.0600000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [2.9700000000000002, 1.3799999999999999, 1.3799999999999999, 1.3799999999999999, 0.56999999999999995, 28.850000000000001, 1.72, 62.990000000000002, 2.3999999999999999, 4.8300000000000001, 3.2400000000000002, 27.27, -7.4199999999999999, -41.649999999999999, 2.29, 5.1399999999999997, 4.4199999999999999, 2.8999999999999999, 3.8999999999999999, 6.4500000000000002, 4.54, 1.0900000000000001, 1.0900000000000001, 1.0900000000000001, 6.71, 6.7100000000000009, 2.8300000000000001, -8.4800000000000004, 3.3799999999999999, 0.81000000000000005, 2.46, 17.289999999999999, 4.6799999999999997, 4.6799999999999997, 4.6799999999999997, 4.6799999999999997, 4.6799999999999997, 1.51, 1.47, 1.47, 20.600000000000001, 602.37, -28.309999999999999, 3.2799999999999998, 7.8600000000000003, 6.5499999999999998, 11.880000000000001, 2.7799999999999998, 1.5700000000000001, 3.3700000000000001, 11.539999999999999, 6.0930031228374109, 6.0930031228374109, 6.0930031228374109, 6.0930031228374109, 1.3, 1.8100000000000001, 2.8500000000000001, 2.8999999999999999, 3.5431808390197808, 7.0199999999999996, 2.3300000000000001, 2.4700000000000002, 5.5, -1.3899999999999999, 13.02, 2.1899999999999999, 0.38, 1.3500000000000001, 1.5377868475035119, 36.840000000000003, 3.3799999999999999, 1.51, 2.02, 5.0099999999999998, 3.1200000000000001, 1.8200000000000001, 29.760000000000002, 7.2699999999999996, 2.9399999999999999, 1.45, 12.57, -0.79000000000000004, 9.9199999999999999, 5.5544987636481116, 7.2400000000000002, 2.9199999999999999, 9.5099999999999998, 3.8599999999999999, 5.3300000000000001, 5.5544987636481116, 4.5099999999999998, 1.04, 5.5544987636481116, 0.41999999999999998, 6.3300000000000001, -1.22, 5.5544987636481116, 5.5544987636481116, 5.5544987636481116, 15.58, 5.5544987636481116, 5.5544987636481116, 5.5544987636481116, 0.66000000000000003, 5.5544987636481116, 5.5544987636481116, 5.5544987636481116, 5.5544987636481116, 5.5544987636481116, 1.1000000000000001, 0.62, 0.73999999999999999, 0.27000000000000002, 0.68000000000000005, -0.64000000000000001, 1.03, -2.6899999999999999, -1.01, 1.1899999999999999, 4.8799999999999999, 2.6499999999999999, 4.7199999999999998, 4.7599999999999998, 3.7000000000000002, 1.1399999999999999, 0.089999999999999997, 0.60999999999999999, 1.46, 0.20000000000000001, 2.98, 0.81999999999999995, 0.71999999999999997, 2.2599999999999998, 3.0299999999999998, 3.6499999999999999, 3.6299999999999999, 1.9199999999999999, 1.0000000000000001e-05, 8.6500000000000004, 1.9963719993069877, 0.54000000000000004, 0.64000000000000001, 2.7599999999999998, 4.9100000000000001, 1.76, 1.6399999999999999, 2.6099999999999999, -10.039999999999999, 5.3899999999999997, 17.48, 3.5299999999999998, 1.8600000000000001, 2.2599999999999998, 0.02, 1.01, 4.2800000000000002, 2.7999999999999998, 4.4699999999999998, 1.75, 5.5899999999999999, 2.96, 1.5800000000000001, 0.01, 3.0906406651082428, 1.3899999999999999, 11.119999999999999, 37.32, 7.3099999999999996, 0.33000000000000002, 1.8899999999999999, 2.1800000000000002, 4.2800000000000002, 1.6200000000000001, 1.8300000000000001, 8.8000000000000007, 1.1599999999999999, 2.5, 3.5, -1.3100000000000001, 5.9699999999999998, 3.0906406651082428, 0.35999999999999999, 5.5899999999999999, 3.0906406651082428, 10.619999999999999, 12.9, 3.0906406651082428, 3.3399999999999999, 2.7799999999999998, 1.79, 1.8999999999999999, 4.3899999999999997, 0.23999999999999999, 4.1299999999999999, 3.5099999999999998, 0.59999999999999998, 1.3899999999999999, 1.8999999999999999, 3.0017183765115121, 2.48, 4.5, 4.1100000000000003, 1.3400000000000001, 7.5099999999999998, 2.02, 4.8300000000000001, 6.5599999999999996, 3.0017183765115121, 6, -1.96, 6.8899999999999997, 2.6699999999999999, 3.0017183765115121, 2.4900000000000002, 3.0017183765115121, 1.3999999999999999, 1.8300000000000001, 3.0017183765115121, 4.5, 3.0017183765115121, 13.83, 5.25, 3.0017183765115121, 19.600000000000001, 9.8800000000000008, 4.3499999999999996, 3.0017183765115121, -4.0300000000000002, 3.0017183765115121, 3.0017183765115121, 3.0017183765115121, 3.0017183765115121, 3.0017183765115121, 3.0017183765115121, 3.0017183765115121, 3.0017183765115121, 3.0017183765115121, 3.0017183765115121, 3.0017183765115121, 3.0017183765115121, 3.0017183765115121, 1.96, 1.54, 3.6299999999999999, 3.6299999999999999, 3.6299999999999999, 3.6299999999999999, 1.1599999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.2000000000000002, 2.7799999999999998, 2.7799999999999998, 2.7799999999999998, 2.1200000000000001, 29.120000000000001, 1.8999999999999999, -4.3499999999999996, 4.1200000000000001, 3.2400000000000002, -6.29, -36.140000000000001, -7.6600000000000001, -117.37, 3.2599999999999998, 3.3399999999999999, 2.1200000000000001, 2.4199999999999999, 1.23, 4.0199999999999996, -0.25, 2.46, 2.46, 2.46, -3.8300000000000001, -3.8300000000000001, 3.02, -40.090000000000003, 2.73, 2.1400000000000001, 2.8399999999999999, 17.420000000000002, -0.87, -0.87, -0.87, -0.87, -0.87, 1.5599999999999998, -1.29, -1.29, -22.109999999999999, -1303.1099999999999, -2.3700000000000001, 3.7999999999999998, 7.9500000000000002, 8.0399999999999991, 7.4199999999999999, 2.9399999999999999, 2.6099999999999999, 5.1100000000000003, 8.8200000000000003, 6.1768711294011096, 6.1768711294011096, 6.1768711294011096, 6.1768711294011096, 1.6000000000000001, 0.53000000000000003, 0.20000000000000001, 1.1799999999999999, 2.5893787162782425, 2.98, 2.3799999999999999, 2.8399999999999999, 3.9399999999999999, 1.74, 14.81, 2.1400000000000001, 0.5, 1.6899999999999999, 1.8234686964759015, 26.829999999999998, 3.1299999999999999, 1.5600000000000001, 1.8100000000000001, 5, 2.8700000000000001, 2.71, 21.539999999999999, 2.6099999999999999, 2.3100000000000001, 1.71, 13.07, 1.27, 7.4900000000000002, 3.8161892087190599, 8.4000000000000004, 1.55, 10.65, 3.7999999999999998, 4.1100000000000003, 3.4900000000000002, 3.8161892087190599, 1.8999999999999999, 3.8161892087190599, -0.57999999999999996, 6.3300000000000001, 4.0700000000000003, 3.8161892087190599, 3.8161892087190599, 3.8161892087190599, 17.539999999999999, 3.8161892087190599, 3.8161892087190599, 3.8161892087190599, 0.62, 3.8161892087190599, 3.8161892087190599, 3.8161892087190599, 3.8161892087190599, 3.8161892087190599, 0.70999999999999996, 0.75, 0.48999999999999999, 0.66000000000000003, 0.20999999999999999, 0.10000000000000001, 0.71999999999999997, -2.1499999999999999, -1.3100000000000001, 1.1899999999999999, 2.2000000000000002, 2.4300000000000002, 5.71, 4.8399999999999999, 7.0499999999999998, 1.29, -0.02, -1.1899999999999999, 0.28999999999999998, 0.5, 3.1000000000000001, 3.5099999999999998, 0.83999999999999997, 2.7799999999999998, 3.6299999999999999, 2.7400000000000002, 4.0999999999999996, 2.3199999999999998, 1.0000000000000001e-05, 10.34, 2.7679487363768391, 1.3700000000000001, 0.17999999999999999, 2.96, 3.9900000000000002, 1.7, 0.82999999999999996, 3.21, -8.1300000000000008, 4.4400000000000004, 11.17, 4.4500000000000002, 1.0600000000000001, 1.9099999999999999, 1.6899999999999999, 0.78000000000000003, 1.55, 3.6699999999999999, 4.9299999999999997, 2.1000000000000001, 2.98, 3.7999999999999998, 1.3600000000000001, 0.040000000000000001, 2.4707487401158237, -2.5699999999999998, 6.1299999999999999, 29.210000000000001, 3.77, 0.81000000000000005, 1.8899999999999999, 1.71, 4.9000000000000004, 1.6799999999999999, 8.1799999999999997, 1.6000000000000001, 1.3700000000000001, 3.02, 3.1299999999999999, 0.67000000000000004, 5.8300000000000001, 2.4707487401158237, 0.47999999999999998, 4.7000000000000002, 2.4707487401158237, 6.1799999999999997, 19.219999999999999, 2.4707487401158237, 4.0800000000000001, 3.0099999999999998, 2.23, 2.6800000000000002, 3.3799999999999999, 0.23999999999999999, 2.6499999999999999, 2.6400000000000001, 1.29, 1.26, 0.75, 2.6837074767578004, 0.64000000000000001, 3.21, 5.9900000000000002, 0.54000000000000004, 6.4299999999999997, 1.5900000000000001, 4.8300000000000001, 7.4500000000000002, 2.6837074767578004, 4.9199999999999999, -2.8500000000000001, 24.66, 3.2799999999999998, 2.6837074767578004, 3.8799999999999999, 5.3200000000000003, 2.6837074767578004, 4.7300000000000004, 2.6837074767578004, 2.21, 2.6837074767578004, 15.77, 4.1500000000000004, 2.6837074767578004, 4.5199999999999996, 12.31, 14.109999999999999, 2.6837074767578004, 1.3200000000000001, 2.6837074767578004, 2.6837074767578004, 2.6837074767578004, 2.6837074767578004, 2.6837074767578004, 2.6837074767578004, 2.6837074767578004, 2.6837074767578004, 2.6837074767578004, 2.6837074767578004, 2.6837074767578004, 2.6837074767578004, 2.6837074767578004, 1.05, 2.4700000000000002, 4.2400000000000002, 4.2400000000000002, 4.2400000000000002, 4.2400000000000002, 1.1899999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [1.8999999999999999, 1.96, 1.96, 1.96, 1.55, 27.280000000000001, 2.4399999999999999, 203.63, 1.8600000000000001, 4.2999999999999998, -2.79, -2, -3.9900000000000002, 234.25, 2.96, 4.2599999999999998, 2.1600000000000001, 6.2699999999999996, 3.2599999999999998, 9.8200000000000003, 3.0899999999999999, -1.1000000000000001, -1.1000000000000001, -1.1000000000000001, 5.8099999999999996, 5.8099999999999987, 2.9300000000000002, 60.039999999999999, 3.2200000000000002, 6.4100000000000001, 3.96, -11.69, 0.68999999999999995, 0.68999999999999995, 0.68999999999999995, 0.68999999999999995, 0.68999999999999995, 1.78, 4, 4, 1.22, -1303.1099999999999, -2.25, 3.77, 7.7999999999999998, 8.2899999999999991, 7.9100000000000001, 2.1899999999999999, 4.3200000000000003, 4.3600000000000003, 7.5300000000000002, 6.3701358904022802, 6.3701358904022802, 6.3701358904022802, 6.3701358904022802, 1.25, 1.8899999999999999, 2.0499999999999998, 3.8399999999999999, 3.8694520151260674, 3.1200000000000001, 2.5600000000000001, 1.98, 4.0999999999999996, 4.3099999999999996, 17.199999999999999, 0.73999999999999999, 0.78000000000000003, 1.3100000000000001, 1.393199500905733, 16.059999999999999, 11.82, 1.78, 2.23, 4.8200000000000003, 2.2999999999999998, 1.01, 27.940000000000001, 2.3100000000000001, 2.5099999999999998, 0.83999999999999997, 13.52, 1.3600000000000001, 4.0300000000000002, 3.5154439899539214, 5.9199999999999999, 2.02, 16.780000000000001, 2.77, 3.96, 7.6399999999999997, 3.5154439899539214, -0.23999999999999999, 3.5154439899539214, -0.32000000000000001, 6.3300000000000001, 0.34000000000000002, 3.5154439899539214, 3.5154439899539214, 3.5154439899539214, 19.23, 3.5154439899539214, 3.5154439899539214, 3.5154439899539214, 0.55000000000000004, 3.5154439899539214, 3.5154439899539214, 3.5154439899539214, 3.5154439899539214, 3.5154439899539214, 0.57999999999999996, 0.54000000000000004, 0.69999999999999996, 0.12, 0.54000000000000004, 0.47999999999999998, 0.53000000000000003, -1.3200000000000001, -1.6899999999999999, 1.1899999999999999, 1.6399999999999999, 4.2800000000000002, 4.3099999999999996, 3.6899999999999999, 0.77000000000000002, 4.8099999999999996, 0.38, -1.5900000000000001, 4.0099999999999998, 0.54000000000000004, 2.8300000000000001, 2.5499999999999998, 0.80000000000000004, 1.3300000000000001, 5.5599999999999996, 4.9699999999999998, 5.0099999999999998, 1.9299999999999999, 1.0000000000000001e-05, -11.19, 2.3332429534906836, 1.3100000000000001, 0.48999999999999999, 2.6099999999999999, 2.6600000000000001, 1.99, 0.46999999999999997, 3.6000000000000001, -5.7800000000000002, 5.6799999999999997, 21.780000000000001, 3.3599999999999999, 1.4199999999999999, 2.5800000000000001, 1.02, 0.5, 2.3500000000000001, 4.5499999999999998, 4.75, 1.1399999999999999, 0.33000000000000002, 2.54, 1.52, 0.040000000000000001, 2.9161064091033757, 4.9400000000000004, 8.4000000000000004, -10.210000000000001, 2.6099999999999999, 1.1499999999999999, 1.8899999999999999, -1.4099999999999999, 3.9199999999999999, 0.56000000000000005, 9.1999999999999993, 1.51, 4.9800000000000004, 3.98, 3.0800000000000001, 2.8700000000000001, 5.6699999999999999, 2.9161064091033757, 0.35999999999999999, 5.46, 2.9161064091033757, 5.8600000000000003, 15.630000000000001, 2.9161064091033757, 3.6899999999999999, 2.29, 1.49, 4.8700000000000001, 4.3300000000000001, 0.23999999999999999, 2.3700000000000001, 2.0800000000000001, 0.91000000000000003, 1.52, -0.53000000000000003, 2.2260505818299112, 0.5, 3.1800000000000002, 3.8100000000000001, 1.0600000000000001, 3.96, 2.5899999999999999, 4.2199999999999998, 6.0499999999999998, 2.2260505818299112, 4.2000000000000002, 0.77000000000000002, 32.759999999999998, 2.1000000000000001, 2.2260505818299112, 3.6899999999999999, 3.9300000000000002, 2.2260505818299112, 2.2260505818299112, 4.0300000000000002, 3.5899999999999999, 2.2260505818299112, 16.399999999999999, -2.2200000000000002, 2.2260505818299112, 7.5599999999999996, 7.4299999999999997, 10.31, 2.2260505818299112, 0.059999999999999998, 2.2260505818299112, 2.2260505818299112, 2.2260505818299112, 2.2260505818299112, 2.2260505818299112, 2.2260505818299112, 2.2260505818299112, 2.2260505818299112, 2.2260505818299112, 2.2260505818299112, 2.2260505818299112, 2.2260505818299112, 2.2260505818299112, 1.48, 2.8100000000000001, 2.79, 2.79, 2.79, 2.79, 1.3700000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.1399999999999997, 0.72999999999999998, 0.72999999999999998, 0.72999999999999998, -1.1599999999999999, 29.890000000000001, 1.75, -103.16, 2.8700000000000001, 1.74, -2.6800000000000002, -22.289999999999999, -4.6299999999999999, 13.35, 3.1899999999999999, 3.46, -1.0700000000000001, 7.9100000000000001, 2.73, 11.529999999999999, 3.46, -0.070000000000000007, -0.070000000000000007, -0.070000000000000007, -0.91000000000000003, -0.91000000000000014, 1.4299999999999999, 106.59, 5.1100000000000003, 2.1600000000000001, 0.93999999999999995, 8.1199999999999992, 4.9100000000000001, 4.9100000000000001, 4.9100000000000001, 4.9100000000000001, 4.9100000000000001, 2.4100000000000001, -1.1200000000000001, -1.1200000000000001, -32.640000000000001, -1303.1099999999999, -4.0700000000000003, 0.19, 7.0599999999999996, 6.5300000000000002, 3.48, 2.1400000000000001, 1.3700000000000001, 0.059999999999999998, 11.130000000000001, 4.1967769058470932, 4.1967769058470932, 4.1967769058470932, 4.1967769058470932, 1.0700000000000001, 0.63, 4.21, 2.8700000000000001, 2.1252276075835992, 1.1899999999999999, 1.3100000000000001, 2.27, 3.1299999999999999, -4.8499999999999996, 12.91, 0.46000000000000002, 1.24, 1.72, 1.8764559479460652, 34.049999999999997, -27.18, 2.4100000000000001, 1.8100000000000001, 4.5599999999999996, 1.8899999999999999, -0.98999999999999999, 22.52, 2.4100000000000001, 1.2, 0.51000000000000001, 14.01, 0.46999999999999997, 5.0999999999999996, 3.2314468903820077, 5.4000000000000004, 0.57999999999999996, 11.869999999999999, 4.71, 2.6899999999999999, 6.0499999999999998, 3.2314468903820077, 0.51000000000000001, 3.2314468903820077, 1.48, 6.3300000000000001, 0.87, 3.2314468903820077, 3.2314468903820077, 3.2314468903820077, 16.449999999999999, 3.2314468903820077, 3.2314468903820077, 3.2314468903820077, 0.19, 3.2314468903820077, 3.2314468903820077, 3.2314468903820077, 3.2314468903820077, 3.2314468903820077, 0.53000000000000003, 0.40999999999999998, 0.68000000000000005, 0.059999999999999998, 0.38, -0.11, 0.56000000000000005, -1.5800000000000001, -1.6899999999999999, 1.1899999999999999, 1.74, 5.6900000000000004, 5.5899999999999999, 5.1200000000000001, 0.51000000000000001, 3.8100000000000001, -0.53000000000000003, -1.6899999999999999, 2.9500000000000002, 0.73999999999999999, 1.52, 2.6499999999999999, 0.78000000000000003, 1.1699999999999999, 2.6200000000000001, 3.0699999999999998, 5.2000000000000002, 1.3899999999999999, 1.0000000000000001e-05, 11.23, 2.2828318503642953, 0.93000000000000005, 0.55000000000000004, 3.0800000000000001, 2.23, 1.04, 0.41999999999999998, 2.3199999999999998, -3.8500000000000001, 2.6800000000000002, 22.390000000000001, 2.75, 1.1299999999999999, 1.6599999999999999, -0.56000000000000005, 0.38, 1.3500000000000001, 7.5199999999999996, 5.7999999999999998, 0.69999999999999996, 1.24, 1.1100000000000001, 1.5, 0.33000000000000002, 2.3829461000005563, -0.79000000000000004, 4.25, -17.289999999999999, 2.8599999999999999, 0.070000000000000007, 1.8899999999999999, -1.4199999999999999, 10.460000000000001, 0.20999999999999999, 11.210000000000001, 1.3500000000000001, 1.47, 4.1399999999999997, 1.97, 0.96999999999999997, 4.9699999999999998, 2.3829461000005563, 0.32000000000000001, 3.71, 2.3829461000005563, 10, 6.7599999999999998, 2.3829461000005563, 2.5600000000000001, 2.8100000000000001, 1.27, 4.5, 2.7599999999999998, 0.23999999999999999, 0.97999999999999998, 0.39000000000000001, 1.1000000000000001, 1.29, -3.0800000000000001, 0.17000000000000001, 1.0398875343995646, 3.1200000000000001, 0.98999999999999999, 0.27000000000000002, 5.8899999999999997, 1.55, 3.3700000000000001, -4.3399999999999999, 1.0398875343995646, 1.9199999999999999, 5.0700000000000003, 23.66, 0.040000000000000001, 4.46, 1.0398875343995646, 3.7200000000000002, 1.0398875343995646, 1.0398875343995646, 5.5300000000000002, 2.96, 1.0398875343995646, 14.26, 6.29, 1.0398875343995646, 7.5099999999999998, 5.4699999999999998, 1.0398875343995646, 4.2699999999999996, 6.9199999999999999, 1.0398875343995646, 1.0398875343995646, 1.0398875343995646, 1.0398875343995646, 1.0398875343995646, 1.0398875343995646, 1.0398875343995646, 1.0398875343995646, 1.0398875343995646, 1.0398875343995646, 1.0398875343995646, 1.0398875343995646, 1.0398875343995646, 0.66000000000000003, 1.8400000000000001, 1.1499999999999999, 1.1499999999999999, 1.1499999999999999, 1.1499999999999999, 1.95],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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
            "title": "Foreign Direct Investment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [2.2400000000000002, 3.2400000000000002, 3.2400000000000002, 3.2400000000000002, 0.88, 26.32, 2.8599999999999999, -113.14, 3.04, 3.0699999999999998, 2.5699999999999998, -12.77, 4, 29.350000000000001, 5.4500000000000002, 4.5700000000000003, 0.81999999999999995, 4.4500000000000002, 9.4299999999999997, 19.789999999999999, 8.1999999999999993, 4.4400000000000004, 4.4400000000000004, 4.4400000000000004, 8.0399999999999991, 8.0399999999999991, 4.1100000000000003, 16.390000000000001, 2.9700000000000002, 6.75, 3.5899999999999999, 15.779999999999999, 0.19, 0.19, 0.19, 0.19, 0.19, 1.4199999999999999, 2.8900000000000001, 2.8900000000000001, -16.510000000000002, -1303.1099999999999, 0.41999999999999998, 3.98, 6.7999999999999998, 7.29, 6.7999999999999998, 2.7000000000000002, 2.8599999999999999, 4.9699999999999998, 11.84, 5.8522326976988372, 5.8522326976988372, 5.8522326976988372, 5.8522326976988372, 1.6299999999999999, 2.2000000000000002, 2.3100000000000001, 3.27, 2.3496746527324373, -3.1099999999999999, 0.93999999999999995, 1.77, 2.5699999999999998, 2.4500000000000002, 14.220000000000001, 2.6400000000000001, 0.68999999999999995, 1.9299999999999999, 2.1206173315096928, 37.189999999999998, 15.67, 1.4199999999999999, 1.79, 4.2800000000000002, 3.04, 2.8999999999999999, 32.689999999999998, 3.1200000000000001, 5.4199999999999999, 0.67000000000000004, 12.92, -0.040000000000000001, 5.6900000000000004, 4.3917788738336077, 9.5199999999999996, 1.77, 12.23, 1.46, 4.25, 7.8799999999999999, 4.3917788738336077, 1.0600000000000001, 4.3917788738336077, 0.45000000000000001, 6.3300000000000001, 0.059999999999999998, 4.3917788738336077, 4.3917788738336077, 4.3917788738336077, 13.98, 4.3917788738336077, 4.3917788738336077, 4.3917788738336077, 0.33000000000000002, 4.3917788738336077, 4.3917788738336077, 4.3917788738336077, 4.3917788738336077, 4.3917788738336077, 1.21, 0.40999999999999998, 0.62, 0.14000000000000001, 0.53000000000000003, 0.25, 0.40000000000000002, -1.27, -1.6899999999999999, 1.1899999999999999, 1.3400000000000001, 4.9800000000000004, 4.4000000000000004, 2.5800000000000001, 1.95, 4.5599999999999996, -0.20000000000000001, -0.60999999999999999, 4.5300000000000002, 2.21, 1.21, 1.53, 0.53000000000000003, 1.6000000000000001, 3.9900000000000002, 3.3100000000000001, 5.9900000000000002, 1.1399999999999999, 1.0000000000000001e-05, 11.6, 2.3061702098504369, 9.6799999999999997, 0.75, 3.0299999999999998, 3.8300000000000001, 1.46, 0.41999999999999998, 2.7200000000000002, -6.5499999999999998, 3.29, 32.75, 2.46, 1.9399999999999999, 2.1400000000000001, -0.40999999999999998, 0.37, -1.23, 6.1100000000000003, 9.3900000000000006, 0.88, 1.23, 1.96, 1.9199999999999999, 0.35999999999999999, 3.1958350333795389, -1.6100000000000001, 5, 3.5899999999999999, 1.3, 0.20999999999999999, 1.8899999999999999, 5.5499999999999998, 12.35, -1.7, 7.5599999999999996, -0.53000000000000003, 1.1299999999999999, 3.7999999999999998, 2.2000000000000002, 2.3300000000000001, 4.9199999999999999, 3.1958350333795389, 0.31, 4.5800000000000001, 3.1958350333795389, 11.25, 8.6600000000000001, 3.1958350333795389, 2.8199999999999998, 2.5499999999999998, 1.4099999999999999, 5.0300000000000002, 3, 0.23999999999999999, 5.9400000000000004, 3.3199999999999998, 0.60999999999999999, 4.1799999999999997, 1.4399999999999999, 0.25, 3.5499999999999998, 2.8933329450177405, 2.8100000000000001, 0.52000000000000002, 8.6300000000000008, 2.8100000000000001, 5.5300000000000002, 2.6099999999999999, 2.8933329450177405, 2.1899999999999999, -3.8199999999999998, 27.82, -4.3099999999999996, 3.3199999999999998, 2.8933329450177405, 5.1799999999999997, 2.8933329450177405, 2.8933329450177405, 4.8499999999999996, 4.3700000000000001, 2.8933329450177405, 12.85, 4.2999999999999998, 2.8933329450177405, 18.379999999999999, 15.27, 2.8933329450177405, 6.0800000000000001, 0.69999999999999996, 2.8933329450177405, 2.8933329450177405, 2.8933329450177405, 2.8933329450177405, 2.8933329450177405, 2.8933329450177405, 2.8933329450177405, 2.8933329450177405, 2.8933329450177405, 2.8933329450177405, 2.8933329450177405, 2.8933329450177405, 2.8933329450177405, 2.1099999999999999, 3.23, 1.5900000000000001, 1.5899999999999999, 1.5899999999999999, 1.5899999999999999, 1.78],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 1290,
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

  
