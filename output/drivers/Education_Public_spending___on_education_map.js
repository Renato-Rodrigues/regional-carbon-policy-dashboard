(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Education_Public_spending___on_education_map') 

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
    "b55cdbc5869": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55cdbc5869",
  "attrs": {
    "b55cdbc5869": {
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
        "title": "Public spending on education"
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
        "title": "Public spending on education",
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
      "z": [4.1699999999999999, 5.7599999999999998, 5.7599999999999998, 5.7599999999999998, 4.54, 5.8499999999999996, 3.4300000000000002, 6.6699999999999999, 4.1699999999999999, 5.2800000000000002, 5.3600000000000003, 5.04, 5.8899999999999997, 4.8700000000000001, 5.3200000000000003, 4.1200000000000001, 4.21, 5.1100000000000003, 5.0599999999999996, 5.2699999999999996, 6.79, 8.1199999999999992, 8.1199999999999992, 8.1199999999999992, 6.1699999999999999, 6.1699999999999999, 3.54, 5.79, 4, 3.8700000000000001, 5.7000000000000002, 4.2000000000000002, 4.7999999999999998, 4.7999999999999998, 4.7999999999999998, 4.7999999999999998, 4.7999999999999998, 3.6099999999999999, 7.4000000000000004, 7.4000000000000004, 5.3799999999999999, 2.46, 7.25, 5.4000000000000004, 3.1400000000000001, 4.21, 3.8874058840651129, 2.0699999999999998, 5.4199999999999999, 3.8874058840651129, 3.8874058840651129, 1.54, 1.24, 3.1299999999999999, 3.8874058840651129, 3.3199999999999998, 3.6800000000000002, 3.23, 5.8200000000000003, 4.6940841276123511, 6.3099999999999996, 3.29, 2.4199999999999999, 4.4800000000000004, 3.0499999999999998, 2.1499999999999999, 4.3300000000000001, 3.4700000000000002, 2.7000000000000002, 2.708287798832703, 4.29, 2.7799999999999998, 3.6099999999999999, 3.2200000000000002, 4.8899999999999997, 2.9399999999999999, 3.73, 3.98, 0.84999999999999998, 7.5, 2.0600000000000001, 1.72, 1.96, 2.4100000000000001, 2.7830944676307432, 6.21, 7.3300000000000001, 2.0499999999999998, 5.3200000000000003, 2.7830944676307432, 2.7830944676307432, 8.4399999999999995, 5.1200000000000001, 2.7830944676307432, 11.720000000000001, 4.1600000000000001, 13.039999999999999, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 3.9100000000000001, 2.0699999999999998, 1.77, 3.1099999999999999, 4.6799999999999997, 6.6100000000000003, 4.3600000000000003, 5.4147688183476994, 5.9500000000000002, 6.4800000000000004, 6.1399999999999997, 3.4500000000000002, 2.6400000000000001, 3.8599999999999999, 6.1900000000000004, 3.8999999999999999, 5.21, 2.8700000000000001, 3.3700000000000001, 7.1100000000000003, 4.9500000000000002, 4.3399999999999999, 1.3100000000000001, 4.8499999999999996, 1.9399999999999999, 3.8100000000000001, 6.8200000000000003, 1.5900000000000001, 3.4827622796315274, 2.3700000000000001, 3.4827622796315274, 4.3499999999999996, 1.52, 5.4900000000000002, 3.5600000000000001, 6.4900000000000002, 4.9500000000000002, 7.54, 3.3300000000000001, 2.8599999999999999, 2.6099999999999999, 2.1200000000000001, 2.8199999999999998, 3.9399999999999999, 1.54, 2.21, 2.46, 2.75, 0.13, 2.3700000000000001, 3.9900000000000002, 2.2799999999999998, 3.7400000000000002, 3.7205738994695561, 2.4500000000000002, 3.2999999999999998, 1.54, 2.8399999999999999, 1.7, 3.1499999999999999, 13.220000000000001, 6.1399999999999997, 10.68, 1.3600000000000001, 3.0800000000000001, 1.8600000000000001, 4.4199999999999999, 5.8200000000000003, 3.7205738994695561, 3.7205738994695561, 8.8900000000000006, 4.4199999999999999, 7.4800000000000004, 3.7205738994695561, 3.25, 5.0499999999999998, 3.7205738994695561, 3.9700000000000002, 5.0700000000000003, 3.54, 3.9199999999999999, 4.3300000000000001, 3.6699999999999999, 2.0699999999999998, 2.9399999999999999, 4.3399999999999999, 3.0299999999999998, 3.7126000332511002, 6.6299999999999999, 1.8400000000000001, 1.75, 6.2999999999999998, 3.1299999999999999, 3.3799999999999999, 2.4199999999999999, 5.1299999999999999, 6.4800000000000004, 4.1699999999999999, 4.2599999999999998, 3.1400000000000001, 6.96, 5.5199999999999996, 3.7126000332511002, 3.7126000332511002, 2.3500000000000001, 6.25, 3.9399999999999999, 3.7126000332511002, 3.5299999999999998, 3.7126000332511002, 8.1699999999999999, 3.9300000000000002, 3.7126000332511002, 4.3600000000000003, 2.5099999999999998, 4.3899999999999997, 1.6699999999999999, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 6.3300000000000001, 4.7699999999999996, 5.25, 5.25, 5.25, 5.25, 5.79],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.1699999999999999, 5.7599999999999998, 5.7599999999999998, 5.7599999999999998, 4.54, 5.8499999999999996, 3.4300000000000002, 6.6699999999999999, 4.1699999999999999, 5.2800000000000002, 5.3600000000000003, 5.04, 5.8899999999999997, 4.8700000000000001, 5.3200000000000003, 4.1200000000000001, 4.21, 5.1100000000000003, 5.0599999999999996, 5.2699999999999996, 6.79, 8.1199999999999992, 8.1199999999999992, 8.1199999999999992, 6.1699999999999999, 6.1699999999999999, 3.54, 5.79, 4, 3.8700000000000001, 5.7000000000000002, 4.2000000000000002, 4.7999999999999998, 4.7999999999999998, 4.7999999999999998, 4.7999999999999998, 4.7999999999999998, 3.6099999999999999, 7.4000000000000004, 7.4000000000000004, 5.3799999999999999, 2.46, 7.25, 5.4000000000000004, 3.1400000000000001, 4.21, 3.8874058840651129, 2.0699999999999998, 5.4199999999999999, 3.8874058840651129, 3.8874058840651129, 1.54, 1.24, 3.1299999999999999, 3.8874058840651129, 3.3199999999999998, 3.6800000000000002, 3.23, 5.8200000000000003, 4.6940841276123511, 6.3099999999999996, 3.29, 2.4199999999999999, 4.4800000000000004, 3.0499999999999998, 2.1499999999999999, 4.3300000000000001, 3.4700000000000002, 2.7000000000000002, 2.708287798832703, 4.29, 2.7799999999999998, 3.6099999999999999, 3.2200000000000002, 4.8899999999999997, 2.9399999999999999, 3.73, 3.98, 0.84999999999999998, 7.5, 2.0600000000000001, 1.72, 1.96, 2.4100000000000001, 2.7830944676307432, 6.21, 7.3300000000000001, 2.0499999999999998, 5.3200000000000003, 2.7830944676307432, 2.7830944676307432, 8.4399999999999995, 5.1200000000000001, 2.7830944676307432, 11.720000000000001, 4.1600000000000001, 13.039999999999999, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 2.7830944676307432, 3.9100000000000001, 2.0699999999999998, 1.77, 3.1099999999999999, 4.6799999999999997, 6.6100000000000003, 4.3600000000000003, 5.4147688183476994, 5.9500000000000002, 6.4800000000000004, 6.1399999999999997, 3.4500000000000002, 2.6400000000000001, 3.8599999999999999, 6.1900000000000004, 3.8999999999999999, 5.21, 2.8700000000000001, 3.3700000000000001, 7.1100000000000003, 4.9500000000000002, 4.3399999999999999, 1.3100000000000001, 4.8499999999999996, 1.9399999999999999, 3.8100000000000001, 6.8200000000000003, 1.5900000000000001, 3.4827622796315274, 2.3700000000000001, 3.4827622796315274, 4.3499999999999996, 1.52, 5.4900000000000002, 3.5600000000000001, 6.4900000000000002, 4.9500000000000002, 7.54, 3.3300000000000001, 2.8599999999999999, 2.6099999999999999, 2.1200000000000001, 2.8199999999999998, 3.9399999999999999, 1.54, 2.21, 2.46, 2.75, 0.13, 2.3700000000000001, 3.9900000000000002, 2.2799999999999998, 3.7400000000000002, 3.7205738994695561, 2.4500000000000002, 3.2999999999999998, 1.54, 2.8399999999999999, 1.7, 3.1499999999999999, 13.220000000000001, 6.1399999999999997, 10.68, 1.3600000000000001, 3.0800000000000001, 1.8600000000000001, 4.4199999999999999, 5.8200000000000003, 3.7205738994695561, 3.7205738994695561, 8.8900000000000006, 4.4199999999999999, 7.4800000000000004, 3.7205738994695561, 3.25, 5.0499999999999998, 3.7205738994695561, 3.9700000000000002, 5.0700000000000003, 3.54, 3.9199999999999999, 4.3300000000000001, 3.6699999999999999, 2.0699999999999998, 2.9399999999999999, 4.3399999999999999, 3.0299999999999998, 3.7126000332511002, 6.6299999999999999, 1.8400000000000001, 1.75, 6.2999999999999998, 3.1299999999999999, 3.3799999999999999, 2.4199999999999999, 5.1299999999999999, 6.4800000000000004, 4.1699999999999999, 4.2599999999999998, 3.1400000000000001, 6.96, 5.5199999999999996, 3.7126000332511002, 3.7126000332511002, 2.3500000000000001, 6.25, 3.9399999999999999, 3.7126000332511002, 3.5299999999999998, 3.7126000332511002, 8.1699999999999999, 3.9300000000000002, 3.7126000332511002, 4.3600000000000003, 2.5099999999999998, 4.3899999999999997, 1.6699999999999999, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 3.7126000332511002, 6.3300000000000001, 4.7699999999999996, 5.25, 5.25, 5.25, 5.25, 5.79],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.0999999999999996, 5.5499999999999998, 5.5499999999999998, 5.5499999999999998, 4.3899999999999997, 4.4199999999999999, 3.6699999999999999, 6.1200000000000001, 4.1600000000000001, 5.0499999999999998, 5.2999999999999998, 5.0599999999999996, 5.6299999999999999, 4.9000000000000004, 5.3600000000000003, 3.9900000000000002, 4.0999999999999996, 5.1699999999999999, 4.8300000000000001, 4.8799999999999999, 6.6600000000000001, 8.2100000000000009, 8.2100000000000009, 8.2100000000000009, 6.1600000000000001, 6.160000000000001, 3.3100000000000001, 5.3300000000000001, 2.3199999999999998, 3.8199999999999998, 5.6399999999999997, 4.4800000000000004, 4.7300000000000004, 4.7300000000000004, 4.7300000000000004, 4.7300000000000004, 4.7300000000000004, 3.3500000000000001, 7.2800000000000002, 7.2800000000000002, 5.3099999999999996, 2.4300000000000002, 7.1600000000000001, 5.1200000000000001, 3.23, 4.21, 4.3313913221615845, 2.9100000000000001, 6.7699999999999996, 4.3313913221615845, 4.3313913221615845, 1.54, 1.24, 2.79, 4.3313913221615845, 3.3199999999999998, 3.5499999999999998, 2.2599999999999998, 5.8200000000000003, 4.6846779940561172, 5.71, 3.4500000000000002, 2.77, 4.6200000000000001, 3.0499999999999998, 2.4900000000000002, 4.3300000000000001, 3.4300000000000002, 2.7000000000000002, 2.7095169764259275, 4.5599999999999996, 2.23, 3.3500000000000001, 2.75, 4.8899999999999997, 2.4700000000000002, 4.0300000000000002, 3.6499999999999999, 0.84999999999999998, 5.9199999999999999, 2.0600000000000001, 1.72, 1.96, 2.4100000000000001, 2.4621215399539405, 6.21, 7.3300000000000001, 2.0499999999999998, 4.6600000000000001, 2.4621215399539405, 2.4621215399539405, 7.9419999999999993, 5.1200000000000001, 2.4621215399539405, 11.720000000000001, 3.9100000000000001, 13.039999999999999, 2.4621215399539405, 2.4621215399539405, 2.4621215399539405, 2.4621215399539405, 2.4621215399539405, 2.4621215399539405, 2.4621215399539405, 2.4621215399539405, 2.4621215399539405, 2.4621215399539405, 2.4621215399539405, 2.4621215399539405, 2.4621215399539405, 3.9100000000000001, 1.9399999999999999, 1.77, 3.1699999999999999, 4.6799999999999997, 6.6100000000000003, 4.2999999999999998, 4.9826908921606963, 5.5499999999999998, 5.3700000000000001, 5.75, 3.4500000000000002, 2.6400000000000001, 3.8599999999999999, 6.1900000000000004, 4.0300000000000002, 5.54, 2.8700000000000001, 3.46, 6.2800000000000002, 4.6699999999999999, 4.3399999999999999, 1.3100000000000001, 4.8499999999999996, 2.1466666666666665, 3.8599999999999999, 6.7199999999999998, 1.5900000000000001, 3.4791551134560761, 1.95, 3.4791551134560761, 4.5099999999999998, 1.52, 5.4900000000000002, 3.5600000000000001, 6.7999999999999998, 4.9500000000000002, 7.54, 3.3300000000000001, 2.9100000000000001, 2.8100000000000001, 2.1200000000000001, 2.7999999999999998, 3.9399999999999999, 2.2414285714285715, 1.54, 2.46, 3.0800000000000001, 0.13, 2.21, 3.9900000000000002, 2.5699999999999998, 3.7400000000000002, 3.7496617834389627, 2.29, 3.1499999999999999, 1.6200000000000001, 2.29, 1.7, 3.1499999999999999, 11.109999999999999, 6.1033333333333335, 10.68, 0.62, 3.0800000000000001, 1.8600000000000001, 4.3099999999999996, 5.4000000000000004, 3.7496617834389627, 9.2599999999999998, 3.7496617834389627, 4.4199999999999999, 7.4800000000000004, 3.7496617834389627, 3.23, 4.8600000000000003, 3.7496617834389627, 3.9700000000000002, 4.7300000000000004, 3.4900000000000002, 3.54, 4.0800000000000001, 3.6699999999999999, 2.5, 2.96, 4.3399999999999999, 3.0299999999999998, 3.6882048629276838, 6.8499999999999996, 1.8925000000000001, 1.75, 6.2999999999999998, 3.1550000000000002, 2.8700000000000001, 2.7142857142857144, 4.8899999999999997, 6.4800000000000004, 3.5800000000000001, 3.9100000000000001, 3.0833333333333335, 5.5099999999999998, 5.5199999999999996, 3.6882048629276838, 3.6882048629276838, 2.3500000000000001, 4.04, 6.0199999999999996, 3.6882048629276838, 3.4399999999999999, 3.6882048629276838, 7.0999999999999996, 4.0942857142857143, 3.6882048629276838, 4.3600000000000003, 2.5099999999999998, 4.3899999999999997, 1.78, 3.6882048629276838, 3.6882048629276838, 3.6882048629276838, 3.6882048629276838, 3.6882048629276838, 3.6882048629276838, 3.6882048629276838, 3.6882048629276838, 3.6882048629276838, 3.6882048629276838, 3.6882048629276838, 3.6882048629276838, 3.6882048629276838, 3.6882048629276838, 6.25, 4.7699999999999996, 5.1900000000000004, 5.1900000000000004, 5.1900000000000004, 5.1900000000000004, 5.79],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.6200000000000001, 5.4699999999999998, 5.4699999999999998, 5.4699999999999998, 4.2400000000000002, 5.3899999999999997, 3.96, 6.29, 4.1399999999999997, 5.0700000000000003, 5.25, 5.1100000000000003, 5.7999999999999998, 4.8499999999999996, 5.4299999999999997, 3.8700000000000001, 3.7599999999999998, 4.8799999999999999, 4.7699999999999996, 4.8099999999999996, 6.5099999999999998, 8.0899999999999999, 8.0899999999999999, 8.0899999999999999, 6.0300000000000002, 6.0300000000000002, 3.5, 5.3200000000000003, 4.1100000000000003, 5.3700000000000001, 5.5999999999999996, 4.5199999999999996, 4.9299999999999997, 4.9299999999999997, 4.9299999999999997, 4.9299999999999997, 4.9299999999999997, 3.1899999999999999, 6.8399999999999999, 6.8399999999999999, 5.0800000000000001, 2.2400000000000002, 7.3399999999999999, 5.8499999999999996, 3.2799999999999998, 4.21, 4.2985818829975591, 2.48, 7.1600000000000001, 4.2985818829975591, 4.2985818829975591, 1.6399999999999999, 1.262, 2.7633333333333332, 4.2985818829975591, 3.3199999999999998, 3.77, 2.2599999999999998, 5.8200000000000003, 4.7552428516813228, 5.8700000000000001, 2.9700000000000002, 3.5099999999999998, 4.8700000000000001, 3.0499999999999998, 2.71, 4.4500000000000002, 3.3100000000000001, 2.7000000000000002, 2.7072799063498301, 4.1299999999999999, 2.2799999999999998, 3.1899999999999999, 2.8700000000000001, 4.8899999999999997, 2.3300000000000001, 3.9399999999999999, 3.2000000000000002, 0.84999999999999998, 5.2050000000000001, 2.0600000000000001, 1.6799999999999999, 1.96, 2.4100000000000001, 2.3090654743884054, 5.1699999999999999, 7.3300000000000001, 2.0499999999999998, 5.0199999999999996, 2.3090654743884054, 2.3090654743884054, 7.444, 5.1200000000000001, 2.3090654743884054, 11.720000000000001, 3.9984615384615387, 13.039999999999999, 2.3090654743884054, 2.3090654743884054, 2.3090654743884054, 2.3090654743884054, 2.3090654743884054, 2.3090654743884054, 2.3090654743884054, 2.3090654743884054, 2.3090654743884054, 2.3090654743884054, 2.3090654743884054, 2.3090654743884054, 2.3090654743884054, 3.9100000000000001, 2.0350000000000001, 2.0499999999999998, 3.3599999999999999, 4.6799999999999997, 7.29, 4.0599999999999996, 4.7948903658353226, 5.1500000000000004, 5.3250000000000002, 5.5800000000000001, 3.4500000000000002, 2.6499999999999999, 3.8599999999999999, 6.1900000000000004, 3.52, 4.7400000000000002, 2.8700000000000001, 3.9700000000000002, 5.4299999999999997, 4.79, 4.3399999999999999, 1.1799999999999999, 4.8499999999999996, 2.3533333333333335, 3.52, 1.6899999999999999, 6.4500000000000002, 3.4160571802732895, 1.9550000000000001, 3.4160571802732895, 4.5199999999999996, 1.52, 5.4900000000000002, 3.5499999999999998, 7.3399999999999999, 4.413333333333334, 7.4199999999999999, 4.0099999999999998, 2.9199999999999999, 2.1200000000000001, 3.3100000000000001, 2.6600000000000001, 3.9399999999999999, 2.2728571428571427, 1.54, 1.74, 4.0599999999999996, 0.13, 1.8500000000000001, 3.9900000000000002, 2.6600000000000001, 3.7999444586038758, 3.6299999999999999, 2.3300000000000001, 2.8399999999999999, 1.6499999999999999, 1.6799999999999999, 1.7, 2.6399999999999997, 6.0666666666666664, 12.08, 10.68, 0.68999999999999995, 3.0800000000000001, 1.8600000000000001, 4.0800000000000001, 6.4800000000000004, 3.7999444586038758, 8.3699999999999992, 3.7999444586038758, 4.4199999999999999, 7.0050000000000008, 3.7999444586038758, 4.8600000000000003, 4.6699999999999999, 3.7999444586038758, 4.4800000000000004, 4.8499999999999996, 3.8599999999999999, 3.2799999999999998, 4.0199999999999996, 3.6699999999999999, 2.71, 2.8399999999999999, 4.3399999999999999, 3.0299999999999998, 3.6937626059765436, 6.71, 1.9449999999999998, 1.75, 6.2999999999999998, 3.1800000000000002, 2.8266666666666667, 3.0085714285714285, 4.7549999999999999, 6.4800000000000004, 3.5600000000000001, 4.6200000000000001, 3.0266666666666668, 8.1400000000000006, 5.5199999999999996, 3.6937626059765436, 3.6937626059765436, 2.3500000000000001, 4.1124999999999998, 5.6699999999999999, 3.6937626059765436, 4.2400000000000002, 3.6937626059765436, 6.0300000000000002, 4.2585714285714289, 3.6937626059765436, 4.6200000000000001, 2.5099999999999998, 4.3899999999999997, 1.99, 3.6937626059765436, 3.6937626059765436, 3.6937626059765436, 3.6937626059765436, 3.6937626059765436, 3.6937626059765436, 3.6937626059765436, 3.6937626059765436, 3.6937626059765436, 3.6937626059765436, 3.6937626059765436, 3.6937626059765436, 3.6937626059765436, 3.6937626059765436, 6.1699999999999999, 4.7699999999999996, 4.9000000000000004, 4.9000000000000004, 4.9000000000000004, 4.9000000000000004, 5.79],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.0300000000000002, 5.4800000000000004, 5.4800000000000004, 5.4800000000000004, 4.5300000000000002, 5.4500000000000002, 3.6800000000000002, 6.3300000000000001, 4.1799999999999997, 4.9100000000000001, 5.2300000000000004, 5.04, 5.6299999999999999, 4.4199999999999999, 5.21, 4.2000000000000002, 3.71, 4.8300000000000001, 4.6799999999999997, 5.8600000000000003, 6.3600000000000003, 7.7300000000000004, 7.7300000000000013, 7.7300000000000013, 5.9299999999999997, 5.9299999999999997, 4.3099999999999996, 5.29, 3.8999999999999999, 5.0099999999999998, 5.5899999999999999, 4.5499999999999998, 4.9699999999999998, 4.9699999999999998, 4.9699999999999998, 4.9699999999999998, 4.9699999999999998, 3.1400000000000001, 6.3600000000000003, 6.3600000000000003, 4.8399999999999999, 2.0499999999999998, 7.2000000000000002, 5.9800000000000004, 3.1899999999999999, 4.21, 4.4882842405087828, 3, 7.5, 4.4882842405087828, 4.4882842405087828, 2.2400000000000002, 1.284, 2.7366666666666668, 4.4882842405087828, 3.3199999999999998, 3.8700000000000001, 2.6299999999999999, 5.8200000000000003, 4.7772165588317907, 6.0800000000000001, 2.5600000000000001, 3.3999999999999999, 5.5499999999999998, 3.0499999999999998, 2.7200000000000002, 4.5700000000000003, 3.2799999999999998, 2.7000000000000002, 2.7057363415292759, 3.8399999999999999, 2.1899999999999999, 3.1400000000000001, 2.9550000000000001, 4.8899999999999997, 2.4300000000000002, 4.0499999999999998, 2.8599999999999999, 0.84999999999999998, 4.4900000000000002, 2.0600000000000001, 1.6400000000000001, 1.96, 2.96, 2.1890120382791012, 5.6600000000000001, 7.3300000000000001, 2.0499999999999998, 4.6500000000000004, 2.1890120382791012, 2.1890120382791012, 6.9459999999999997, 5.1200000000000001, 2.1890120382791012, 11.720000000000001, 4.0869230769230773, 13.039999999999999, 2.1890120382791012, 2.1890120382791012, 2.1890120382791012, 2.1890120382791012, 2.1890120382791012, 2.1890120382791012, 2.1890120382791012, 2.1890120382791012, 2.1890120382791012, 2.1890120382791012, 2.1890120382791012, 2.1890120382791012, 2.1890120382791012, 3.9100000000000001, 2.1299999999999999, 2.3999999999999999, 3.6099999999999999, 4.6799999999999997, 6.496666666666667, 4.29, 4.7654864180282477, 5.1399999999999997, 5.2800000000000002, 5.5899999999999999, 3.4500000000000002, 3.8599999999999999, 2.7799999999999998, 6.1900000000000004, 3.8599999999999999, 3.7599999999999998, 4.0566666666666666, 2.8700000000000001, 5.8899999999999997, 4, 4.3399999999999999, 1.55, 4.8499999999999996, 2.5600000000000001, 3.48, 1.845, 6.4400000000000004, 3.5118725556541435, 1.96, 3.5118725556541435, 4.5300000000000002, 1.52, 5.4900000000000002, 3.0099999999999998, 7.0499999999999998, 3.8766666666666669, 5.1500000000000004, 3.8700000000000001, 2.8199999999999998, 2.2799999999999998, 2.8300000000000001, 2.54, 3.98, 2.3042857142857143, 1.54, 1.49, 3.8199999999999998, 0.13, 1.76, 3.9900000000000002, 2.5600000000000001, 3.4846536214588069, 4.1500000000000004, 2.5299999999999998, 2.7199999999999998, 1.4199999999999999, 2.4820000000000002, 1.7, 2.1299999999999999, 6.0300000000000002, 11.27, 9.8650000000000002, 0.75, 3.0800000000000001, 1.8600000000000001, 3.7000000000000002, 6.5499999999999998, 3.4846536214588069, 8.2799999999999994, 3.4846536214588069, 4.4199999999999999, 6.5300000000000002, 3.4846536214588069, 4.2699999999999996, 4.4800000000000004, 3.4846536214588069, 4.8700000000000001, 4.7000000000000002, 4.1299999999999999, 3.04, 3.9199999999999999, 3.6699999999999999, 2.8599999999999999, 2.6499999999999999, 4.3399999999999999, 3.0299999999999998, 3.6344505428276777, 6.4299999999999997, 1.9974999999999998, 1.75, 6.2999999999999998, 3.4900000000000002, 2.7833333333333337, 3.3028571428571429, 4.6200000000000001, 6.4800000000000004, 3.54, 5.0549999999999997, 2.9700000000000002, 3.1200000000000001, 5.5199999999999996, 3.6344505428276777, 3.6344505428276777, 2.3500000000000001, 4.1850000000000005, 5.4450000000000003, 3.6344505428276777, 4.7000000000000002, 3.6344505428276777, 5.7350000000000003, 4.4228571428571426, 3.6344505428276777, 4.6600000000000001, 2.5099999999999998, 4.3899999999999997, 2.0649999999999999, 3.6344505428276777, 3.6344505428276777, 3.6344505428276777, 3.6344505428276777, 3.6344505428276777, 3.6344505428276777, 3.6344505428276777, 3.6344505428276777, 3.6344505428276777, 3.6344505428276777, 3.6344505428276777, 3.6344505428276777, 3.6344505428276777, 3.6344505428276777, 6.1600000000000001, 4.7699999999999996, 4.7400000000000002, 4.7400000000000002, 4.7400000000000002, 4.7400000000000002, 5.9233333333333338],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3.9199999999999999, 5.2999999999999998, 5.2999999999999998, 5.2999999999999998, 4.1100000000000003, 5.9500000000000002, 3.6200000000000001, 6.2800000000000002, 4.25, 4.9199999999999999, 5.1500000000000004, 4.8899999999999997, 5.5199999999999996, 4.2699999999999996, 4.8700000000000001, 3.8500000000000001, 3.52, 4.5999999999999996, 4.6299999999999999, 4.6200000000000001, 6.1699999999999999, 7.6200000000000001, 7.620000000000001, 7.620000000000001, 5.6699999999999999, 5.6699999999999999, 4.1500000000000004, 5.1299999999999999, 3.6800000000000002, 3.98, 5.1200000000000001, 4.7199999999999998, 4.9199999999999999, 4.9199999999999999, 4.9199999999999999, 4.9199999999999999, 4.9199999999999999, 3.1866666666666665, 6.5099999999999998, 6.5099999999999998, 4.5800000000000001, 1.9199999999999999, 6.9400000000000004, 5.9000000000000004, 3.2799999999999998, 4.21, 4.5576630943819891, 2.7000000000000002, 8.2899999999999991, 4.5576630943819891, 4.5576630943819891, 2.1000000000000001, 1.306, 2.71, 4.5576630943819891, 3.3199999999999998, 3.9849999999999999, 2.8300000000000001, 5.8200000000000003, 4.7338431022767393, 5.1500000000000004, 2.5499999999999998, 3.4100000000000001, 6.4699999999999998, 3.0499999999999998, 3.02, 4.6900000000000004, 3.2799999999999998, 2.7000000000000002, 2.7036545309510398, 3.4500000000000002, 2.04, 3.1866666666666665, 3.04, 4.8899999999999997, 2.4900000000000002, 3.6000000000000001, 2.9500000000000002, 0.84999999999999998, 4.3700000000000001, 2.0600000000000001, 1.6000000000000001, 1.96, 3.0800000000000001, 2.1720662147335243, 5.8899999999999997, 7.3300000000000001, 2.0499999999999998, 4.4199999999999999, 2.1720662147335243, 2.1720662147335243, 6.4480000000000004, 5.1200000000000001, 2.1720662147335243, 11.720000000000001, 4.1753846153846155, 13.039999999999999, 2.1720662147335243, 2.1720662147335243, 2.1720662147335243, 2.1720662147335243, 2.1720662147335243, 2.1720662147335243, 2.1720662147335243, 2.1720662147335243, 2.1720662147335243, 2.1720662147335243, 2.1720662147335243, 2.1720662147335243, 2.1720662147335243, 3.9100000000000001, 2.2000000000000002, 2.6400000000000001, 3.52, 4.1699999999999999, 5.7033333333333331, 4.5999999999999996, 4.8249307677310806, 5.8300000000000001, 4.8600000000000003, 5.3499999999999996, 3.4500000000000002, 3.8599999999999999, 2.5800000000000001, 6.1900000000000004, 3.9700000000000002, 3.7599999999999998, 4.1433333333333335, 2.5800000000000001, 5.5149999999999997, 3.6800000000000002, 4.3399999999999999, 1.7000000000000002, 4.8499999999999996, 3.0099999999999998, 3.4399999999999999, 2, 6.46, 3.5886388570945544, 2.0339999999999998, 3.5886388570945544, 4.4500000000000002, 1.52, 5.4500000000000002, 4.0300000000000002, 6.04, 3.3399999999999999, 5.5199999999999996, 4.25, 3.02, 2.4933333333333332, 2.8999999999999999, 2.8799999999999999, 4.0800000000000001, 2.3357142857142859, 1.54, 1.24, 3.9249999999999998, 0.13, 1.6700000000000002, 3.9900000000000002, 2.3599999999999999, 3.5446681975579755, 4.6699999999999999, 2.5800000000000001, 2.6000000000000001, 1.3100000000000001, 3.2840000000000003, 1.7, 2.1299999999999999, 6.2149999999999999, 11.800000000000001, 9.0500000000000007, 0.81999999999999995, 3.0800000000000001, 1.8600000000000001, 3.1899999999999999, 6.585, 3.5446681975579755, 8.4100000000000001, 3.5446681975579755, 4.4199999999999999, 4.96, 3.5446681975579755, 6.29, 4.0700000000000003, 3.5446681975579755, 4.9699999999999998, 4.6900000000000004, 4.46, 3.23, 4.0800000000000001, 3.6299999999999999, 3.1179999999999999, 2.6299999999999999, 4.3399999999999999, 3.0899999999999999, 3.6835500971670307, 6.7199999999999998, 2.0499999999999998, 1.75, 6.2999999999999998, 3.6099999999999999, 2.7400000000000002, 3.597142857142857, 4.6299999999999999, 6.4800000000000004, 3.52, 5.4900000000000002, 2.9133333333333336, 2.3900000000000001, 5.5199999999999996, 3.6835500971670307, 3.6835500971670307, 2.3500000000000001, 4.2575000000000003, 5.2199999999999998, 3.6835500971670307, 4.5899999999999999, 3.6835500971670307, 5.4400000000000004, 4.5871428571428572, 3.6835500971670307, 4.7000000000000002, 2.5099999999999998, 4.3899999999999997, 2.1400000000000001, 3.6835500971670307, 3.6835500971670307, 3.6835500971670307, 3.6835500971670307, 3.6835500971670307, 3.6835500971670307, 3.6835500971670307, 3.6835500971670307, 3.6835500971670307, 3.6835500971670307, 3.6835500971670307, 3.6835500971670307, 3.6835500971670307, 3.6835500971670307, 6.2400000000000002, 4.7699999999999996, 4.6500000000000004, 4.6500000000000004, 4.6500000000000004, 4.6500000000000004, 6.0566666666666666],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.5499999999999998, 5.4000000000000004, 5.4000000000000004, 5.4000000000000004, 4.3899999999999997, 5.5, 3.7999999999999998, 6.7199999999999998, 4.5300000000000002, 4.7000000000000002, 5.2599999999999998, 5.0300000000000002, 6.3300000000000001, 4.3300000000000001, 5.04, 3.73, 3.52, 4.8399999999999999, 5.3700000000000001, 5.4800000000000004, 6.3399999999999999, 7.4800000000000004, 7.4800000000000004, 7.4800000000000004, 5.8300000000000001, 5.8300000000000001, 4.0999999999999996, 4.9699999999999998, 4.2199999999999998, 4.29, 5.1100000000000003, 5.46, 4.9100000000000001, 4.9100000000000001, 4.9100000000000001, 4.9100000000000001, 4.9100000000000001, 3.2333333333333334, 6.25, 6.25, 4.7599999999999998, 2.0499999999999998, 7.04, 6.1500000000000004, 3.5099999999999998, 4.4400000000000004, 4.7375983084983142, 2.9199999999999999, 8.2400000000000002, 4.7375983084983142, 4.7375983084983142, 2.8700000000000001, 1.3280000000000001, 2.6833333333333331, 4.7375983084983142, 3.3199999999999998, 4.0999999999999996, 2.5899999999999999, 5.8200000000000003, 4.7715477003636195, 5.71, 2.4399999999999999, 3.46, 3.0499999999999998, 5.9100000000000001, 3.1699999999999999, 4.915, 3.27, 3.6299999999999999, 3.6274870861353441, 3.2599999999999998, 2.2000000000000002, 3.2333333333333334, 2.8999999999999999, 4.8899999999999997, 2.5800000000000001, 3.5099999999999998, 2.7599999999999998, 0.84999999999999998, 3.96, 2.0600000000000001, 1.635, 1.96, 2.2799999999999998, 2.0413642822211537, 4.25, 6.9000000000000004, 2.0499999999999998, 4.4699999999999998, 2.0413642822211537, 2.0413642822211537, 5.9500000000000002, 5.1200000000000001, 2.0413642822211537, 11.720000000000001, 4.2638461538461536, 13.039999999999999, 2.0413642822211537, 2.0413642822211537, 2.0413642822211537, 2.0413642822211537, 2.0413642822211537, 2.0413642822211537, 2.0413642822211537, 2.0413642822211537, 2.0413642822211537, 2.0413642822211537, 2.0413642822211537, 2.0413642822211537, 2.0413642822211537, 3.9100000000000001, 2.0499999999999998, 2.75, 3.8100000000000001, 4.3799999999999999, 4.9100000000000001, 3.9100000000000001, 4.5237381227849713, 5.1500000000000004, 4.5999999999999996, 5.4199999999999999, 3.4500000000000002, 3.8599999999999999, 2.0099999999999998, 6.1900000000000004, 3.7599999999999998, 4.0800000000000001, 4.2300000000000004, 2.5, 5.1399999999999997, 3.7599999999999998, 4.3399999999999999, 1.8500000000000001, 4.8499999999999996, 2.7200000000000002, 3.3999999999999999, 2.1550000000000002, 6.2699999999999996, 3.5790460190107392, 2.1080000000000001, 3.5790460190107392, 4.3700000000000001, 1.52, 5.4100000000000001, 4.1900000000000004, 5.0299999999999994, 2.8033333333333337, 5.7599999999999998, 4.6299999999999999, 2.7066666666666666, 3.1000000000000001, 2.5499999999999998, 2.5, 3.8866666666666667, 2.3671428571428574, 1.1000000000000001, 1.54, 4.0300000000000002, 0.13, 1.5800000000000001, 3.5, 2.7799999999999998, 3.4461527964838901, 5.1900000000000004, 2.4199999999999999, 2.4700000000000002, 1.29, 4.0860000000000003, 1.7, 2.1299999999999999, 6.4000000000000004, 12.33, 9.4400000000000013, 2.1800000000000002, 3.0800000000000001, 1.8600000000000001, 3.0600000000000001, 6.6200000000000001, 3.4461527964838901, 7.1033333333333335, 3.4461527964838901, 4.4199999999999999, 5.0300000000000002, 3.4461527964838901, 5.5499999999999998, 3.8966666666666669, 3.4461527964838901, 5.2699999999999996, 4.8200000000000003, 4.8399999999999999, 3.79, 3.9399999999999999, 5.25, 3.3760000000000003, 2.8700000000000001, 4.3399999999999999, 3.2400000000000002, 3.8475127082177183, 6.7199999999999998, 2.313333333333333, 1.75, 6.2999999999999998, 4.46, 2.75, 3.8914285714285715, 4.8899999999999997, 6.4800000000000004, 3.5, 6.1900000000000004, 2.8566666666666665, 2.27, 5.5199999999999996, 3.8475127082177183, 3.8475127082177183, 2.3500000000000001, 4.3300000000000001, 4.9199999999999999, 3.8475127082177183, 4.4800000000000004, 3.8475127082177183, 5.4100000000000001, 4.7514285714285718, 3.8475127082177183, 4.8300000000000001, 2.5099999999999998, 4.3899999999999997, 2.2149999999999999, 3.8475127082177183, 3.8475127082177183, 3.8475127082177183, 3.8475127082177183, 3.8475127082177183, 3.8475127082177183, 3.8475127082177183, 3.8475127082177183, 3.8475127082177183, 3.8475127082177183, 3.8475127082177183, 3.8475127082177183, 3.8475127082177183, 3.8475127082177183, 6.4400000000000004, 4.6299999999999999, 4.6299999999999999, 4.6299999999999999, 4.6299999999999999, 4.6299999999999999, 6.1900000000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.3399999999999999, 5.7300000000000004, 5.7300000000000004, 5.7300000000000004, 4.5199999999999996, 5.0700000000000003, 4.1699999999999999, 7.21, 4.9100000000000001, 5.5599999999999996, 5.7300000000000004, 5.4299999999999997, 6.46, 4.8700000000000001, 4.9900000000000002, 4.1500000000000004, 4.0099999999999998, 5.5899999999999999, 5.5199999999999996, 5.96, 6.75, 8.4499999999999993, 8.4499999999999993, 8.4499999999999993, 6.46, 6.4599999999999991, 4, 4.9500000000000002, 4.2699999999999996, 4.3899999999999997, 5.5499999999999998, 6.1600000000000001, 5.0599999999999996, 5.0599999999999996, 5.0599999999999996, 5.0599999999999996, 5.0599999999999996, 3.2799999999999998, 7.0700000000000003, 7.0700000000000012, 4.9299999999999997, 2.2199999999999998, 7.1900000000000004, 7.0499999999999998, 3.46, 4.4800000000000004, 5.0652733015738791, 3.2200000000000002, 9.5099999999999998, 5.0652733015738791, 5.0652733015738791, 3.1400000000000001, 2.6566666666666667, 1.3500000000000001, 5.0652733015738791, 3.77, 4.4699999999999998, 3.0600000000000001, 5.8200000000000003, 4.8165985518617314, 4.3700000000000001, 3.2200000000000002, 4.0999999999999996, 3.0499999999999998, 6.2300000000000004, 3.8399999999999999, 5.1399999999999997, 3.5600000000000001, 3.75, 3.7528458198651027, 4.3899999999999997, 2.5299999999999998, 3.2799999999999998, 3.5299999999999998, 4.8200000000000003, 2.54, 3.8599999999999999, 3.0099999999999998, 0.84999999999999998, 5.9699999999999998, 2.0600000000000001, 1.6699999999999999, 1.96, 1.6499999999999999, 2.462050824746286, 4.5, 6.6600000000000001, 2.0499999999999998, 5.0800000000000001, 2.462050824746286, 2.462050824746286, 5.1600000000000001, 5.0179999999999998, 2.462050824746286, 11.720000000000001, 4.3523076923076927, 13.039999999999999, 2.462050824746286, 2.462050824746286, 2.462050824746286, 2.462050824746286, 2.462050824746286, 2.462050824746286, 2.462050824746286, 2.462050824746286, 2.462050824746286, 2.462050824746286, 2.462050824746286, 2.462050824746286, 2.462050824746286, 3.9100000000000001, 1.9399999999999999, 2.5899999999999999, 4.8099999999999996, 4.6600000000000001, 4.7400000000000002, 3.8399999999999999, 4.8608070044790832, 5.9199999999999999, 5.1299999999999999, 5.3799999999999999, 3.4500000000000002, 3.8599999999999999, 1.77, 6.1900000000000004, 3.7599999999999998, 4.1900000000000004, 3.4100000000000001, 2.5375000000000001, 5.1399999999999997, 3.6400000000000001, 5.165, 2.02, 4.8300000000000001, 3.3399999999999999, 3.8700000000000001, 2.3100000000000001, 6.5300000000000002, 3.9236042520330381, 2.1819999999999999, 3.9236042520330381, 4.7599999999999998, 1.52, 4.4199999999999999, 3.96, 4.0199999999999996, 2.2666666666666666, 5.3200000000000003, 2.9199999999999999, 5.0099999999999998, 3.1699999999999999, 2.8300000000000001, 2.9100000000000001, 3.6933333333333334, 2.3985714285714286, 2.2599999999999998, 1.54, 4.9199999999999999, 0.13, 2.21, 4.0649999999999995, 3.0899999999999999, 3.4573211255963359, 6.1699999999999999, 2.8500000000000001, 2.8199999999999998, 1.25, 4.8880000000000008, 1.72, 2.1299999999999999, 7.3200000000000003, 9.8300000000000001, 10.943333333333333, 1.9099999999999999, 3.0800000000000001, 1.8600000000000001, 3.0499999999999998, 3.4573211255963359, 6.4699999999999998, 5.7966666666666669, 3.4573211255963359, 3.8900000000000001, 4.8700000000000001, 3.4573211255963359, 10.68, 3.7233333333333332, 3.4573211255963359, 5.46, 5.1900000000000004, 5.5300000000000002, 4.25, 4.7800000000000002, 6.8700000000000001, 3.6340000000000003, 3.1400000000000001, 4.3399999999999999, 3.0449999999999999, 4.0279097446715566, 7.5700000000000003, 2.5766666666666662, 1.75, 6.2999999999999998, 4.6600000000000001, 2.7600000000000002, 4.1857142857142859, 6.0099999999999998, 6.4800000000000004, 3.3866666666666667, 6.2000000000000002, 2.7999999999999998, 2.1499999999999999, 5.5199999999999996, 4.0279097446715566, 4.0279097446715566, 2.3500000000000001, 4.8300000000000001, 5.1200000000000001, 4.0279097446715566, 3.0699999999999998, 4.0279097446715566, 4.9157142857142855, 5.3799999999999999, 4.0279097446715566, 5.7999999999999998, 2.5099999999999998, 4.3899999999999997, 2.29, 4.0279097446715566, 4.0279097446715566, 4.0279097446715566, 4.0279097446715566, 4.0279097446715566, 4.0279097446715566, 4.0279097446715566, 4.0279097446715566, 4.0279097446715566, 4.0279097446715566, 4.0279097446715566, 4.0279097446715566, 4.0279097446715566, 4.0279097446715566, 6.7400000000000002, 4.8399999999999999, 5.0800000000000001, 5.0800000000000001, 5.0800000000000001, 5.0800000000000001, 6.5],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [5.0999999999999996, 5.6600000000000001, 5.6600000000000001, 5.6600000000000001, 4.3300000000000001, 6.25, 4.1399999999999997, 6.5300000000000002, 4.8600000000000003, 5.4100000000000001, 5.7000000000000002, 5.4900000000000002, 6.4400000000000004, 5.0099999999999998, 5.1100000000000003, 4.0300000000000002, 4.04, 5.2999999999999998, 5.04, 5.5199999999999996, 6.5199999999999996, 8.5600000000000005, 8.5600000000000005, 8.5600000000000005, 6.5, 6.5, 3.4199999999999999, 4.7199999999999998, 3.8599999999999999, 4.2300000000000004, 5.5499999999999998, 5.8522222222222222, 5.6900000000000004, 5.6900000000000004, 5.6900000000000004, 5.6900000000000004, 5.6900000000000004, 3.3799999999999994, 6.71, 6.71, 4.7999999999999998, 2.3900000000000001, 6.9400000000000004, 6.4950000000000001, 3.4100000000000001, 4.3300000000000001, 4.5361112570652971, 2.7999999999999998, 7.5899999999999999, 4.5361112570652971, 4.5361112570652971, 2.98, 2.6299999999999999, 1.3200000000000001, 4.5361112570652971, 3.79, 3.8500000000000001, 3.46, 5.8200000000000003, 4.7903352765289213, 5.2199999999999998, 2.7799999999999998, 4.0099999999999998, 3.0499999999999998, 5.8200000000000003, 3.25, 4.6500000000000004, 3.6000000000000001, 3.75, 3.7482957885955948, 3.5099999999999998, 2.6200000000000001, 3.3799999999999999, 2.8100000000000001, 4.0499999999999998, 2.6179999999999999, 3.5099999999999998, 3.0800000000000001, 0.84999999999999998, 4.9699999999999998, 1.6599999999999999, 1.53, 1.96, 1.71, 2.170423675141663, 4.335, 7.4800000000000004, 2.0499999999999998, 3.6299999999999999, 2.170423675141663, 2.170423675141663, 5.1639999999999997, 4.9160000000000004, 2.170423675141663, 13.039999999999999, 11.720000000000001, 4.4407692307692308, 2.170423675141663, 2.170423675141663, 2.170423675141663, 2.170423675141663, 2.170423675141663, 2.170423675141663, 2.170423675141663, 2.170423675141663, 2.170423675141663, 2.170423675141663, 2.170423675141663, 2.170423675141663, 2.170423675141663, 3.5299999999999998, 2.0350000000000001, 2.29, 3.48, 3.6299999999999999, 4.1200000000000001, 3.71, 4.4192170415603433, 4.3899999999999997, 5.1299999999999999, 5.4299999999999997, 3.4500000000000002, 3.8599999999999999, 1.6100000000000001, 6.1900000000000004, 3.7599999999999998, 4.2300000000000004, 4.54, 2.5750000000000002, 5.1399999999999997, 3.54, 5.9900000000000002, 2.02, 5.0700000000000003, 2.7200000000000002, 3.3399999999999999, 1.98, 5.96, 3.9708251062771236, 2.2560000000000002, 3.9708251062771236, 5.1299999999999999, 1.52, 4.5, 4.54, 4.8200000000000003, 1.73, 5.54, 3.4199999999999999, 5.3899999999999997, 3.25, 2.5899999999999999, 2.8500000000000001, 3.5, 2.4300000000000002, 3.4199999999999999, 1.54, 5.2199999999999998, 0.13, 2.5499999999999998, 4.6299999999999999, 3.6800000000000002, 3.7004977033259312, 6.7800000000000002, 3.0099999999999998, 2.5899999999999999, 1.1200000000000001, 5.6900000000000004, 1.74, 2.1299999999999999, 8.2400000000000002, 9.6400000000000006, 9.5566666666666666, 2.5600000000000001, 3.0800000000000001, 1.8600000000000001, 3.5499999999999998, 3.7004977033259312, 6.1200000000000001, 4.4900000000000002, 3.7004977033259312, 3.3600000000000003, 5.0800000000000001, 3.7004977033259312, 9.6500000000000004, 3.5499999999999998, 3.7004977033259312, 5.6500000000000004, 5.1600000000000001, 5.0199999999999996, 4.1900000000000004, 4.8300000000000001, 6.8700000000000001, 3.8920000000000003, 2.8700000000000001, 4.5099999999999998, 2.8500000000000001, 3.9515326753963738, 6.9699999999999998, 2.8399999999999999, 1.75, 6.2999999999999998, 4.0499999999999998, 2.77, 4.4800000000000004, 6.5700000000000003, 6.4800000000000004, 3.2733333333333334, 6.3700000000000001, 2.7433333333333332, 2.4100000000000001, 5.5199999999999996, 3.9515326753963738, 3.9515326753963738, 2.3500000000000001, 5.2699999999999996, 6.0499999999999998, 3.9515326753963738, 3.48, 3.9515326753963738, 5.0800000000000001, 4.8099999999999996, 3.9515326753963738, 6.75, 2.46, 4.3899999999999997, 2.3100000000000001, 3.9515326753963738, 3.9515326753963738, 3.9515326753963738, 3.9515326753963738, 3.9515326753963738, 3.9515326753963738, 3.9515326753963738, 3.9515326753963738, 3.9515326753963738, 3.9515326753963738, 3.9515326753963738, 3.9515326753963738, 3.9515326753963738, 3.9515326753963738, 6.6900000000000004, 5.3600000000000003, 5.54, 5.54, 5.54, 5.54, 6.5099999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.9800000000000004, 5.4800000000000004, 5.4800000000000004, 5.4800000000000004, 4.1200000000000001, 7.7000000000000002, 4.5199999999999996, 6.5199999999999996, 4.9000000000000004, 5.1200000000000001, 5.5899999999999999, 5.46, 6.4299999999999997, 4.9900000000000002, 4.8600000000000003, 4.2400000000000002, 3.8999999999999999, 5.1100000000000003, 5.0700000000000003, 5.0099999999999998, 6.3700000000000001, 8.4800000000000004, 8.4800000000000004, 8.4800000000000004, 6.4500000000000002, 6.4500000000000002, 2.9100000000000001, 4.5599999999999996, 3.5499999999999998, 4.1299999999999999, 5.54, 5.5444444444444443, 5.5599999999999996, 5.5599999999999996, 5.5599999999999996, 5.5599999999999996, 5.5599999999999996, 3.8000000000000003, 6.4100000000000001, 6.4100000000000001, 4.8600000000000003, 2.5600000000000001, 6.79, 5.9400000000000004, 3.2400000000000002, 4.2400000000000002, 2.5800000000000001, 4.3554477235118503, 7.1399999999999997, 4.3554477235118503, 4.3554477235118503, 2.9900000000000002, 1.5900000000000001, 2.7000000000000002, 4.3554477235118503, 4.2199999999999998, 3.77, 3.4900000000000002, 5.8200000000000003, 4.7367108084566549, 4.6799999999999997, 2.4399999999999999, 3.9399999999999999, 3.0499999999999998, 6.79, 3.1400000000000001, 4.6100000000000003, 3.6099999999999999, 3.52, 3.5191359046001489, 3.4199999999999999, 2.6800000000000002, 3.7999999999999998, 3.1899999999999999, 3.7799999999999998, 2.6960000000000002, 4.8099999999999996, 3.0299999999999998, 0.84999999999999998, 5.7599999999999998, 1.74, 1.51, 1.96, 1.71, 2.3629393937153313, 4.1699999999999999, 7.4800000000000004, 3.3199999999999998, 3.0800000000000001, 2.3629393937153313, 2.3629393937153313, 5.1680000000000001, 4.8140000000000001, 2.3629393937153313, 13.039999999999999, 11.720000000000001, 4.5292307692307689, 2.3629393937153313, 2.3629393937153313, 2.3629393937153313, 2.3629393937153313, 2.3629393937153313, 2.3629393937153313, 2.3629393937153313, 2.3629393937153313, 2.3629393937153313, 2.3629393937153313, 2.3629393937153313, 2.3629393937153313, 2.3629393937153313, 3.714, 2.1299999999999999, 2.2200000000000002, 3.46, 3.8399999999999999, 4.7699999999999996, 3.48, 4.5773194835316282, 5.04, 5.1299999999999999, 5.46, 3.4500000000000002, 3.8599999999999999, 1.6499999999999999, 5.3399999999999999, 3.7599999999999998, 4.2699999999999996, 4.0099999999999998, 2.6124999999999998, 5.1399999999999997, 3.3399999999999999, 6.8149999999999995, 2.02, 5.3099999999999996, 3.0800000000000001, 3.75, 2.2599999999999998, 5.9550000000000001, 4.2924152938471751, 2.3300000000000001, 4.2924152938471751, 5.29, 1.7, 5.4900000000000002, 4.5800000000000001, 4.7000000000000002, 2.2999999999999998, 8.1400000000000006, 3.2400000000000002, 5.6200000000000001, 2.8700000000000001, 2.3799999999999999, 2.6499999999999999, 3.9900000000000002, 2.8500000000000001, 3.3599999999999999, 5.0800000000000001, 4.9000000000000004, 0.13, 2.29, 4.3799999999999999, 3.9470255856166561, 4.4000000000000004, 6.3200000000000003, 3.1699999999999999, 2.6800000000000002, 2.6499999999999999, 1.1100000000000001, 1.76, 2.1299999999999999, 8.0199999999999996, 9.4499999999999993, 8.1699999999999999, 2.5, 2.9900000000000002, 1.8600000000000001, 3.3300000000000001, 3.9470255856166561, 6.8600000000000003, 5.4199999999999999, 3.9470255856166561, 2.8300000000000001, 4.5999999999999996, 3.9470255856166561, 7.9950000000000001, 3.6299999999999999, 3.9470255856166561, 5.7400000000000002, 5.1100000000000003, 5.29, 4.0599999999999996, 4.4699999999999998, 6.8700000000000001, 4.1500000000000004, 2.6600000000000001, 4.7300000000000004, 2.9700000000000002, 3.9407320127427377, 6.4500000000000002, 3.1033333333333331, 1.75, 6.2999999999999998, 3.8999999999999999, 4.3800000000000008, 3.6899999999999999, 6.3799999999999999, 3.1600000000000001, 6.4800000000000004, 6.2699999999999996, 2.6866666666666665, 2.5099999999999998, 5.5199999999999996, 3.9407320127427377, 3.9407320127427377, 2.3500000000000001, 5.5199999999999996, 5.6549999999999994, 3.9407320127427377, 3.6000000000000001, 3.9407320127427377, 5.4900000000000002, 4.8399999999999999, 3.9407320127427377, 5.9100000000000001, 2.4099999999999997, 4.3899999999999997, 2.1175000000000002, 3.9407320127427377, 3.9407320127427377, 3.9407320127427377, 3.9407320127427377, 3.9407320127427377, 3.9407320127427377, 3.9407320127427377, 3.9407320127427377, 3.9407320127427377, 3.9407320127427377, 3.9407320127427377, 3.9407320127427377, 3.9407320127427377, 3.9407320127427377, 6.5, 5.2599999999999998, 5.0700000000000003, 5.0700000000000003, 5.0700000000000003, 5.0700000000000003, 6.2699999999999996],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.9299999999999997, 5.46, 5.46, 5.46, 4.0599999999999996, 6.3499999999999996, 4.5800000000000001, 5.9100000000000001, 4.4699999999999998, 4.9500000000000002, 5.4800000000000004, 5.4100000000000001, 6.2599999999999998, 3.8799999999999999, 4.8600000000000003, 4.2199999999999998, 3.8599999999999999, 4.7599999999999998, 6.5800000000000001, 4.7199999999999998, 7.54, 7.2400000000000002, 7.2400000000000002, 7.2400000000000002, 7.1500000000000004, 7.1500000000000004, 2.8199999999999998, 4.1399999999999997, 3.48, 5.2199999999999998, 5.6200000000000001, 5.2366666666666664, 5.6299999999999999, 5.6299999999999999, 5.6299999999999999, 5.6299999999999999, 5.6299999999999999, 4.0800000000000001, 7.3300000000000001, 7.330000000000001, 4.9000000000000004, 2.5600000000000001, 7.5800000000000001, 6.4400000000000004, 3.3100000000000001, 4.1600000000000001, 1.9099999999999999, 4.1237102189662789, 6.9800000000000004, 4.1237102189662789, 4.1237102189662789, 2.5699999999999998, 1.78, 2.8850000000000002, 4.1237102189662789, 4.3899999999999997, 3.79, 3.8999999999999999, 6.0300000000000002, 4.9015460308064149, 4.96, 2.0699999999999998, 4.0199999999999996, 3.0499999999999998, 7.3799999999999999, 2.77, 5.96, 3.6499999999999999, 3.9399999999999999, 3.9374881107974984, 3.5099999999999998, 3.3300000000000001, 4.0800000000000001, 3.4100000000000001, 4.4100000000000001, 2.774, 3.6000000000000001, 3.0699999999999998, 1.5900000000000001, 5.7400000000000002, 1.45, 1.4099999999999999, 1.96, 1.8200000000000001, 2.5956952372004771, 4.46, 7.4800000000000004, 2.8900000000000001, 4.9699999999999998, 2.5956952372004771, 2.5956952372004771, 5.1719999999999997, 4.7120000000000006, 2.5956952372004771, 13.43, 11.720000000000001, 4.6176923076923071, 2.5956952372004771, 2.5956952372004771, 2.5956952372004771, 2.5956952372004771, 2.5956952372004771, 2.5956952372004771, 2.5956952372004771, 2.5956952372004771, 2.5956952372004771, 2.5956952372004771, 2.5956952372004771, 2.5956952372004771, 2.5956952372004771, 3.8980000000000001, 2.0499999999999998, 2.1400000000000001, 2.6000000000000001, 3.5299999999999998, 5.2449999999999992, 2.9399999999999999, 4.7054086087436922, 5.46, 5.1299999999999999, 5.5899999999999999, 3.4500000000000002, 3.8599999999999999, 2.1499999999999999, 4.7400000000000002, 4.3099999999999996, 3.7599999999999998, 3.5099999999999998, 2.6499999999999999, 5.1399999999999997, 3.3700000000000001, 7.6399999999999997, 2.02, 5.5499999999999998, 3.1899999999999999, 3.48, 2.21, 5.9500000000000002, 4.4896950342413007, 2.1600000000000001, 4.4896950342413007, 5.5199999999999996, 1.8799999999999999, 5.5700000000000003, 4.2300000000000004, 4.9299999999999997, 1.8, 7.9199999999999999, 3.0800000000000001, 5.6699999999999999, 3.4300000000000002, 2.3399999999999999, 2.6000000000000001, 3.6000000000000001, 2.5299999999999998, 3.7000000000000002, 6.0700000000000003, 4.7800000000000002, 0.13, 1.8300000000000001, 4.4199999999999999, 3.8991164865309389, 3.5600000000000001, 6.1699999999999999, 3.4700000000000002, 2.8799999999999999, 2.7400000000000002, 1.98, 1.78, 2.1299999999999999, 9.0800000000000001, 9.2599999999999998, 2.6400000000000001, 7.6699999999999999, 3.0099999999999998, 2, 3.8991164865309389, 3.4199999999999999, 5.5899999999999999, 6.3499999999999996, 3.8991164865309389, 2.75, 5.4000000000000004, 3.8991164865309389, 6.3399999999999999, 2.54, 3.8991164865309389, 5.8600000000000003, 5.0999999999999996, 5.3499999999999996, 4.54, 4.3700000000000001, 6.8700000000000001, 4.0899999999999999, 2.9199999999999999, 4.6399999999999997, 3.0099999999999998, 4.0079416275498536, 6.6299999999999999, 3.3666666666666667, 1.75, 6.2999999999999998, 3.71, 4.2800000000000002, 3.6699999999999999, 6.5800000000000001, 3.0466666666666669, 6.4800000000000004, 6.1100000000000003, 2.6299999999999999, 2.2400000000000002, 5.5199999999999996, 4.0079416275498536, 4.0079416275498536, 2.4500000000000002, 5.4699999999999998, 5.2599999999999998, 4.0079416275498536, 3.29, 4.0079416275498536, 5.0700000000000003, 4.8700000000000001, 4.0079416275498536, 6.3499999999999996, 2.3599999999999999, 4.3899999999999997, 1.925, 4.0079416275498536, 4.0079416275498536, 4.0079416275498536, 4.0079416275498536, 4.0079416275498536, 4.0079416275498536, 4.0079416275498536, 4.0079416275498536, 4.0079416275498536, 4.0079416275498536, 4.0079416275498536, 4.0079416275498536, 4.0079416275498536, 4.0079416275498536, 6.25, 4.6900000000000004, 4.8700000000000001, 4.8700000000000001, 4.8700000000000001, 4.8700000000000001, 6.1699999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.9400000000000004, 5.5, 5.5, 5.5, 4.1399999999999997, 7.5800000000000001, 4.5, 6.4699999999999998, 4.3499999999999996, 5.2699999999999996, 5.5499999999999998, 5.5300000000000002, 6.6299999999999999, 3.7000000000000002, 5.0199999999999996, 4.0499999999999998, 4.0700000000000003, 4.5999999999999996, 7, 4.8399999999999999, 7.6100000000000003, 8.4900000000000002, 8.4900000000000002, 8.4900000000000002, 7.1200000000000001, 7.1200000000000001, 3.0699999999999998, 4.1900000000000004, 4.0599999999999996, 4.54, 5.4100000000000001, 4.9288888888888893, 5.5300000000000002, 5.5300000000000002, 5.5300000000000002, 5.5300000000000002, 5.5300000000000002, 3.8399999999999999, 7.4400000000000004, 7.4400000000000004, 4.9100000000000001, 2.5600000000000001, 7.4500000000000002, 6.4199999999999999, 3.54, 4.0449999999999999, 3.4700000000000002, 4.2329293983412271, 5.9100000000000001, 4.2329293983412271, 4.2329293983412271, 2.5099999999999998, 1.3300000000000001, 3.0700000000000003, 4.2329293983412271, 4.3399999999999999, 3.7599999999999998, 3.4399999999999999, 5.7400000000000002, 4.7977823895313687, 5.0099999999999998, 2.4399999999999999, 4.336666666666666, 3.0699999999999998, 6.7800000000000002, 2.6499999999999999, 5.2400000000000002, 3.6200000000000001, 3.71, 3.7095451465444325, 3.7599999999999998, 2.0499999999999998, 3.8399999999999999, 3.3599999999999999, 4.5300000000000002, 2.8520000000000003, 3.8199999999999998, 2.8500000000000001, 1.8400000000000001, 5.4800000000000004, 1.5600000000000001, 1.48, 1.96, 3.23, 2.7305895865246566, 3.8799999999999999, 7.4800000000000004, 3.1200000000000001, 3.9500000000000002, 2.7305895865246566, 2.7305895865246566, 5.1760000000000002, 4.6100000000000003, 2.7305895865246566, 13.220000000000001, 12.34, 4.7061538461538461, 2.7305895865246566, 2.7305895865246566, 2.7305895865246566, 2.7305895865246566, 2.7305895865246566, 2.7305895865246566, 2.7305895865246566, 2.7305895865246566, 2.7305895865246566, 2.7305895865246566, 2.7305895865246566, 2.7305895865246566, 2.7305895865246566, 4.0819999999999999, 1.97, 2.4900000000000002, 3.4500000000000002, 3.2000000000000002, 5.7199999999999998, 2.8500000000000001, 4.7310898682622247, 5.46, 5.1299999999999999, 5.7800000000000002, 3.4500000000000002, 3.8599999999999999, 2.4300000000000002, 4.8899999999999997, 4.3499999999999996, 3.7599999999999998, 4.0700000000000003, 2.48, 5.1399999999999997, 4.1200000000000001, 7.29, 2.02, 5.5150000000000006, 3.6899999999999999, 3.2799999999999998, 2.8500000000000001, 6.04, 4.4872445455025796, 2.29, 4.4872445455025796, 5.3499999999999996, 2.0600000000000001, 4.5, 4.6399999999999997, 4.8399999999999999, 1.8700000000000001, 4.5800000000000001, 3.8700000000000001, 6.1200000000000001, 1.78, 3.46, 2.6600000000000001, 4.0800000000000001, 3.7200000000000002, 3.7200000000000002, 6, 5.6900000000000004, 0.13, 2.6299999999999999, 3.8865359878782471, 4.7400000000000002, 3.3300000000000001, 6, 3.2599999999999998, 2.3799999999999999, 5.0099999999999998, 2.6400000000000001, 1.6899999999999999, 2.1299999999999999, 8.5999999999999996, 8.0199999999999996, 1.8200000000000001, 7.29, 3.0299999999999998, 2.1299999999999999, 3.8865359878782471, 3.5699999999999998, 5.0800000000000001, 4.6500000000000004, 3.8865359878782471, 2.3799999999999999, 4.5599999999999996, 3.8865359878782471, 5.9400000000000004, 3.6200000000000001, 3.8865359878782471, 5.8399999999999999, 4.7000000000000002, 5.4400000000000004, 4.5499999999999998, 4.8799999999999999, 6.8700000000000001, 4.2400000000000002, 3.2999999999999998, 5, 2.8900000000000001, 4.0883418584187714, 6.7999999999999998, 1.75, 3.6299999999999999, 5.8700000000000001, 3.7999999999999998, 4.1799999999999997, 2.6800000000000002, 6.6900000000000004, 2.9333333333333331, 6.4800000000000004, 6.25, 2.6699999999999999, 3.3000000000000003, 5.5199999999999996, 4.0883418584187714, 4.0883418584187714, 2.4700000000000002, 5.1399999999999997, 5.1500000000000004, 4.0883418584187714, 3.8799999999999999, 4.0883418584187714, 4.7750000000000004, 4.8999999999999995, 4.0883418584187714, 6.4400000000000004, 2.6499999999999999, 4.46, 1.7324999999999999, 4.0883418584187714, 4.0883418584187714, 4.0883418584187714, 4.0883418584187714, 4.0883418584187714, 4.0883418584187714, 4.0883418584187714, 4.0883418584187714, 4.0883418584187714, 4.0883418584187714, 4.0883418584187714, 4.0883418584187714, 4.0883418584187714, 4.0883418584187714, 6.2300000000000004, 4.5899999999999999, 5.2300000000000004, 5.2300000000000004, 5.2300000000000004, 5.2300000000000004, 5.8899999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.9199999999999999, 5.5099999999999998, 5.5099999999999998, 5.5099999999999998, 4.0599999999999996, 7, 4.3200000000000003, 6.4199999999999999, 4.2999999999999998, 5.1200000000000001, 5.4500000000000002, 5.46, 6.5899999999999999, 3.8599999999999999, 4.9699999999999998, 3.9700000000000002, 4.2199999999999998, 4.4900000000000002, 5.2800000000000002, 4.3899999999999997, 7.5700000000000003, 7.6299999999999999, 7.6300000000000008, 7.6300000000000008, 7.0999999999999996, 7.0999999999999996, 3.1299999999999999, 4.5999999999999996, 4.0700000000000003, 5.1799999999999997, 5.29, 4.6211111111111114, 5.5999999999999996, 5.5999999999999996, 5.5999999999999996, 5.5999999999999996, 5.5999999999999996, 3.8999999999999999, 7.6399999999999997, 7.6399999999999997, 4.9299999999999997, 2.5600000000000001, 7.6399999999999997, 5.8700000000000001, 3.2200000000000002, 3.9300000000000002, 3, 4.1366920158827156, 6.3399999999999999, 4.1366920158827156, 4.1366920158827156, 3.0699999999999998, 1.02, 3.2549999999999999, 4.1366920158827156, 4.4100000000000001, 4.0099999999999998, 3.4199999999999999, 5.71, 4.7188933271783018, 2.6299999999999999, 4.8200000000000003, 4.6533333333333333, 3.0899999999999999, 5.5300000000000002, 2.25, 5.4299999999999997, 3.5499999999999998, 3.5800000000000001, 3.5792581809874413, 3.5699999999999998, 2.0499999999999998, 3.8999999999999999, 3.29, 3.54, 2.9300000000000002, 3.9199999999999999, 2.9199999999999999, 2.0099999999999998, 5.0300000000000002, 1.8600000000000001, 1.5700000000000001, 1.96, 2.9399999999999999, 2.7388631002616255, 3.77, 7.4800000000000004, 3.3500000000000001, 3.8900000000000001, 2.7388631002616255, 2.7388631002616255, 5.1799999999999997, 5.2199999999999998, 2.7388631002616255, 12.949999999999999, 12.23, 4.7946153846153843, 2.7388631002616255, 2.7388631002616255, 2.7388631002616255, 2.7388631002616255, 2.7388631002616255, 2.7388631002616255, 2.7388631002616255, 2.7388631002616255, 2.7388631002616255, 2.7388631002616255, 2.7388631002616255, 2.7388631002616255, 2.7388631002616255, 4.266, 2.1000000000000001, 2.4700000000000002, 3.7000000000000002, 3.4900000000000002, 6.04, 2.6200000000000001, 4.6721542703352581, 5.46, 5.1299999999999999, 3.4500000000000002, 5.7000000000000002, 3.8599999999999999, 2.3300000000000001, 4.7750000000000004, 4.3499999999999996, 3.7599999999999998, 3.6099999999999999, 2.4700000000000002, 5.1399999999999997, 4.25, 7.3200000000000003, 2.02, 5.4800000000000004, 5.0999999999999996, 3.6499999999999999, 2.3199999999999998, 6.1299999999999999, 4.6341811753986875, 2.5600000000000001, 4.6341811753986875, 5.4900000000000002, 1.95, 4.5999999999999996, 3.3799999999999999, 4.7199999999999998, 1.9099999999999999, 4.4000000000000004, 2.9300000000000002, 6.4900000000000002, 2.3799999999999999, 3.3100000000000001, 2.5800000000000001, 4.0499999999999998, 3.3300000000000001, 4.1699999999999999, 6.1399999999999997, 5.7199999999999998, 0.13, 2.4199999999999999, 4.2000000000000002, 3.7180155661680012, 3.1600000000000001, 6.7800000000000002, 3.52, 2.6600000000000001, 3.1800000000000002, 2.2200000000000002, 2.2000000000000002, 2.1299999999999999, 8.9900000000000002, 8.2200000000000006, 2.23, 7.2000000000000002, 2.6699999999999999, 2.1299999999999999, 3.7180155661680012, 4.8200000000000003, 7.0700000000000003, 4.3799999999999999, 3.7180155661680012, 2.7400000000000002, 4.5199999999999996, 3.7180155661680012, 3.75, 3.9500000000000002, 3.7180155661680012, 5.9500000000000002, 5.2599999999999998, 5.3600000000000003, 4.75, 4.6299999999999999, 6.8700000000000001, 4.2699999999999996, 3.7000000000000002, 5.2599999999999998, 2.9900000000000002, 4.3251538714577613, 7.4800000000000004, 1.75, 3.6200000000000001, 7.0899999999999999, 3.8199999999999998, 2.6000000000000001, 4.0800000000000001, 6.6799999999999997, 2.8199999999999998, 6.0700000000000003, 6.0199999999999996, 2.5699999999999998, 4.3600000000000003, 5.5199999999999996, 4.3251538714577613, 4.3251538714577613, 2.4500000000000002, 5.1500000000000004, 6.1399999999999997, 4.3251538714577613, 3.8900000000000001, 4.3251538714577613, 4.4800000000000004, 4.3251538714577613, 4.9299999999999997, 5.8499999999999996, 2.5499999999999998, 4.5199999999999996, 1.54, 4.3251538714577613, 4.3251538714577613, 4.3251538714577613, 4.3251538714577613, 4.3251538714577613, 4.3251538714577613, 4.3251538714577613, 4.3251538714577613, 4.3251538714577613, 4.3251538714577613, 4.3251538714577613, 4.3251538714577613, 4.3251538714577613, 4.3251538714577613, 6.1299999999999999, 4.8399999999999999, 5.1600000000000001, 5.1600000000000001, 5.1600000000000001, 5.1600000000000001, 5.8099999999999996],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.8600000000000003, 5.46, 5.46, 5.46, 4.0700000000000003, 5.0199999999999996, 3.6600000000000001, 6.2999999999999998, 4.2800000000000002, 4.8899999999999997, 5.46, 5.3499999999999996, 6.4500000000000002, 3.77, 4.8200000000000003, 5.75, 4.5800000000000001, 4.2300000000000004, 5.2800000000000002, 5.1399999999999997, 7.4400000000000004, 7.0099999999999998, 7.0099999999999998, 7.0099999999999998, 7.0300000000000002, 7.0300000000000002, 3.1099999999999999, 4.5, 3.9100000000000001, 4.9699999999999998, 4.9100000000000001, 4.3133333333333335, 5.5499999999999998, 5.5499999999999998, 5.5499999999999998, 5.5499999999999998, 5.5499999999999998, 4.1100000000000003, 7.5199999999999996, 7.5199999999999987, 5, 2.5600000000000001, 7.46, 5.7400000000000002, 3.4399999999999999, 3.79, 3.1600000000000001, 3.9977435552747753, 5.8099999999999996, 3.9977435552747753, 3.9977435552747753, 3.2799999999999998, 1.1950000000000001, 3.4399999999999999, 3.9977435552747753, 4.3200000000000003, 3.8300000000000001, 2.79, 5.4900000000000002, 4.7245148912066339, 2.9500000000000002, 4.79, 4.9699999999999998, 3.1099999999999999, 5.9900000000000002, 4.3899999999999997, 2.8100000000000001, 3.23, 3.8100000000000001, 3.8067351326298962, 3.2599999999999998, 3, 4.1100000000000003, 3.5800000000000001, 3.4199999999999999, 3.52, 3.8599999999999999, 2.8599999999999999, 2.25, 4.7000000000000002, 2.1099999999999999, 1.7, 1.96, 2.7400000000000002, 2.8110650276098843, 4.8099999999999996, 7.4800000000000004, 4.6399999999999997, 3.8899999999999997, 2.8110650276098843, 2.8110650276098843, 5.5999999999999996, 4.6200000000000001, 2.8110650276098843, 12.109999999999999, 13.65, 4.8830769230769224, 2.8110650276098843, 2.8110650276098843, 2.8110650276098843, 2.8110650276098843, 2.8110650276098843, 2.8110650276098843, 2.8110650276098843, 2.8110650276098843, 2.8110650276098843, 2.8110650276098843, 2.8110650276098843, 2.8110650276098843, 2.8110650276098843, 4.4500000000000002, 1.8700000000000001, 2.6499999999999999, 3.2599999999999998, 3.29, 6.2400000000000002, 2.6299999999999999, 4.6508699701918674, 5.46, 5.1299999999999999, 3.4500000000000002, 3.8599999999999999, 5.7999999999999998, 2.23, 4.6600000000000001, 4.3499999999999996, 3.7599999999999998, 3.3966666666666665, 2.6699999999999999, 5.1399999999999997, 3.9300000000000002, 2.02, 7.96, 5.1299999999999999, 4.4900000000000002, 3.7999999999999998, 2.3399999999999999, 6.2199999999999998, 4.6590892287655681, 2.8300000000000001, 4.6590892287655681, 5.4800000000000004, 2.1699999999999999, 5.1500000000000004, 4.1900000000000004, 4.7400000000000002, 2.3199999999999998, 4.4299999999999997, 3.1000000000000001, 6.0099999999999998, 2.21, 3.4900000000000002, 2.6600000000000001, 3.6699999999999999, 3.8500000000000001, 4.6200000000000001, 5.46, 6.0333333333333332, 0.13, 2.52, 3.6499999999999999, 3.1699999999999999, 3.8267020040468211, 6.3700000000000001, 3.7599999999999998, 3.2200000000000002, 3.2799999999999998, 2.1200000000000001, 1.9099999999999999, 2.1299999999999999, 9.5299999999999994, 2.1600000000000001, 8.3900000000000006, 8.6899999999999995, 2.8199999999999998, 2.1299999999999999, 3.8267020040468211, 4.7599999999999998, 5.3499999999999996, 3.6000000000000001, 3.8267020040468211, 2.5499999999999998, 4.8099999999999996, 3.8267020040468211, 3.8599999999999999, 5.0599999999999996, 3.8267020040468211, 6.2400000000000002, 5.2300000000000004, 5.7800000000000002, 4.9000000000000004, 4.4699999999999998, 6.8700000000000001, 4.21, 3.9700000000000002, 5, 3.0299999999999998, 4.408115887290788, 8.1400000000000006, 1.8500000000000001, 3.6000000000000001, 6.4100000000000001, 3.9100000000000001, 3.3300000000000001, 4.0800000000000001, 6.8700000000000001, 3.0299999999999998, 6.0700000000000003, 5.46, 3.1499999999999999, 3.8999999999999999, 5.5199999999999996, 4.408115887290788, 2.3999999999999999, 4.408115887290788, 5.3600000000000003, 5.3799999999999999, 4.408115887290788, 3.8799999999999999, 4.408115887290788, 4.2400000000000002, 5.8899999999999997, 4.408115887290788, 4.96, 2.6600000000000001, 3.4100000000000001, 1.5, 4.408115887290788, 4.408115887290788, 4.408115887290788, 4.408115887290788, 4.408115887290788, 4.408115887290788, 4.408115887290788, 4.408115887290788, 4.408115887290788, 4.408115887290788, 4.408115887290788, 4.408115887290788, 4.408115887290788, 4.408115887290788, 4.9500000000000002, 4.7400000000000002, 5.3200000000000003, 5.3200000000000003, 5.3200000000000003, 5.3200000000000003, 5.71],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.8399999999999999, 5.4199999999999999, 5.4199999999999999, 5.4199999999999999, 3.8199999999999998, 5.1100000000000003, 4.0199999999999996, 6.1200000000000001, 4.2300000000000004, 4.7699999999999996, 5.4800000000000004, 5.4800000000000004, 6.46, 3.3999999999999999, 4.6600000000000001, 5.5499999999999998, 3.8999999999999999, 4, 4.6600000000000001, 5.1600000000000001, 7.6200000000000001, 7.4800000000000004, 7.4800000000000004, 7.4800000000000004, 6.8499999999999996, 6.8499999999999996, 3.0299999999999998, 4.6200000000000001, 3.3900000000000001, 4.9000000000000004, 4.79, 4.0055555555555555, 5.4199999999999999, 5.4199999999999999, 5.4199999999999999, 5.4199999999999999, 5.4199999999999999, 4.21, 7.9800000000000004, 7.9799999999999995, 4.9800000000000004, 2.5600000000000001, 7.4299999999999997, 5.0099999999999998, 3.96, 3.6299999999999999, 3.5899999999999999, 3.9812384278714634, 5.6699999999999999, 3.9812384278714634, 3.9812384278714634, 3.2400000000000002, 1.3700000000000001, 3.3399999999999999, 3.9812384278714634, 4.6299999999999999, 3.7599999999999998, 2.98, 5.4199999999999999, 4.8780300405963031, 2.8999999999999999, 4.9500000000000002, 5.7300000000000004, 3.1299999999999999, 6.5899999999999999, 5.2000000000000002, 2.7599999999999998, 3.1499999999999999, 3.7599999999999998, 3.757221012981208, 3.29, 3.1000000000000001, 4.21, 3.5699999999999998, 3.4700000000000002, 3.0299999999999998, 3.77, 2.8700000000000001, 2.1600000000000001, 4.3499999999999996, 3.23, 1.8700000000000001, 1.96, 2.77, 2.8929538975591829, 4.8399999999999999, 7.4800000000000004, 4.4699999999999998, 4.4299999999999997, 2.8929538975591829, 2.8929538975591829, 5.0649999999999995, 4.3499999999999996, 2.8929538975591829, 13.48, 13.51, 4.9715384615384615, 2.8929538975591829, 2.8929538975591829, 2.8929538975591829, 2.8929538975591829, 2.8929538975591829, 2.8929538975591829, 2.8929538975591829, 2.8929538975591829, 2.8929538975591829, 2.8929538975591829, 2.8929538975591829, 2.8929538975591829, 2.8929538975591829, 4.3300000000000001, 2.2200000000000002, 2.4199999999999999, 4.54, 3.48, 6.3399999999999999, 3.1699999999999999, 4.6597951526668639, 5.46, 5.1299999999999999, 3.4500000000000002, 3.8599999999999999, 5.7999999999999998, 2.1299999999999999, 4.3499999999999996, 4.9800000000000004, 3.7599999999999998, 3.1833333333333336, 3.2599999999999998, 5.1399999999999997, 3.9300000000000002, 2.02, 7.3399999999999999, 5.0899999999999999, 2.96, 3.0899999999999999, 2.3900000000000001, 6.2199999999999998, 4.2492031995572965, 1.9399999999999999, 4.2492031995572965, 5.4400000000000004, 2.1200000000000001, 5.0599999999999996, 4.0999999999999996, 4.9000000000000004, 2.1400000000000001, 4.3899999999999997, 2.75, 5.8700000000000001, 2.6899999999999999, 3.9399999999999999, 2.5600000000000001, 4.6500000000000004, 3.2799999999999998, 3.75, 5.1100000000000003, 5.9266666666666667, 0.13, 2.54, 3.4300000000000002, 2.8999999999999999, 4.6900000000000004, 3.7684198670502647, 3.6899999999999999, 2.9100000000000001, 5.21, 2.1099999999999999, 1.75, 2.1299999999999999, 10.31, 2.02, 8.7400000000000002, 7.7999999999999998, 2.6699999999999999, 2.1299999999999999, 3.7684198670502647, 4.8799999999999999, 5.4299999999999997, 3.9199999999999999, 3.7684198670502647, 2.516, 4.75, 3.7684198670502647, 5.1699999999999999, 4.3200000000000003, 3.7684198670502647, 6.3099999999999996, 4.9100000000000001, 5.5499999999999998, 5.3700000000000001, 4.4800000000000004, 6.8700000000000001, 4.3600000000000003, 3.8100000000000001, 4.3600000000000003, 2.9399999999999999, 4.280669078381524, 8.1500000000000004, 1.3899999999999999, 3.8500000000000001, 6.3099999999999996, 3.4300000000000002, 4.0800000000000001, 3.8300000000000001, 6.8899999999999997, 3.0800000000000001, 6.0700000000000003, 5.3099999999999996, 3.77, 4.7400000000000002, 5.6399999999999997, 4.280669078381524, 2.6000000000000001, 4.280669078381524, 5.6799999999999997, 4.7000000000000002, 4.280669078381524, 5.21, 4.280669078381524, 3.7050000000000001, 5.4900000000000002, 4.280669078381524, 5.4500000000000002, 2.9100000000000001, 5.1299999999999999, 1.9199999999999999, 4.280669078381524, 4.280669078381524, 4.280669078381524, 4.280669078381524, 4.280669078381524, 4.280669078381524, 4.280669078381524, 4.280669078381524, 4.280669078381524, 4.280669078381524, 4.280669078381524, 4.280669078381524, 4.280669078381524, 4.280669078381524, 4.8099999999999996, 4.8200000000000003, 5.29, 5.29, 5.29, 5.29, 5.5],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.8700000000000001, 5.4500000000000002, 5.4500000000000002, 5.4500000000000002, 4.04, 4.5599999999999996, 3.48, 5.7000000000000002, 4.21, 5.0199999999999996, 5.3700000000000001, 5.1799999999999997, 6.4299999999999997, 3.4900000000000002, 4.5700000000000003, 3.8100000000000001, 3.9300000000000002, 3.8100000000000001, 4.3700000000000001, 4.96, 7.5700000000000003, 7.1200000000000001, 7.1200000000000001, 7.1200000000000001, 6.3600000000000003, 6.3600000000000003, 3.1200000000000001, 4.6100000000000003, 4.0800000000000001, 3.8900000000000001, 4.7800000000000002, 3.6977777777777781, 5.4299999999999997, 5.4299999999999997, 5.4299999999999997, 5.4299999999999997, 5.4299999999999997, 4.3099999999999996, 7.8499999999999996, 7.8499999999999996, 5.0199999999999996, 2.5600000000000001, 7.5800000000000001, 5.4199999999999999, 3.6099999999999999, 3.71, 3.5699999999999998, 4.0245033611962846, 5.71, 4.0245033611962846, 4.0245033611962846, 3.2200000000000002, 1.46, 3.3700000000000001, 4.0245033611962846, 4.3200000000000003, 4.6900000000000004, 2.75, 5.0300000000000002, 4.5519495602838758, 2.4700000000000002, 4.7999999999999998, 5.54, 3.1499999999999999, 6.0300000000000002, 4.3200000000000003, 2.71, 3.1299999999999999, 3.6699999999999999, 3.6676613846785555, 3.3100000000000001, 2.71, 4.3099999999999996, 2.6699999999999999, 3.4199999999999999, 3.9700000000000002, 3.4700000000000002, 2.7599999999999998, 2.3300000000000001, 4.1799999999999997, 2.5899999999999999, 2.1000000000000001, 1.96, 2.5, 2.8305333217902442, 4.8799999999999999, 7.4800000000000004, 3.8700000000000001, 4.4299999999999997, 2.8305333217902442, 2.8305333217902442, 4.5300000000000002, 3.96, 2.8305333217902442, 13.58, 12.42, 5.0599999999999996, 2.8305333217902442, 2.8305333217902442, 2.8305333217902442, 2.8305333217902442, 2.8305333217902442, 2.8305333217902442, 2.8305333217902442, 2.8305333217902442, 2.8305333217902442, 2.8305333217902442, 2.8305333217902442, 2.8305333217902442, 2.8305333217902442, 4.3300000000000001, 1.8500000000000001, 2.1400000000000001, 4.3399999999999999, 3.5299999999999998, 6.7000000000000002, 3.46, 4.6295289455549851, 5.46, 5.1299999999999999, 3.21, 3.8599999999999999, 6.0099999999999998, 2.1400000000000001, 4.3499999999999996, 4.7199999999999998, 3.7599999999999998, 2.9700000000000002, 2.3199999999999998, 5.1399999999999997, 3.9300000000000002, 2.02, 6.4000000000000004, 4.7400000000000002, 2.5800000000000001, 3.79, 2.4500000000000002, 6.2199999999999998, 3.9992817821501094, 1.8866666666666667, 3.9992817821501094, 5.5999999999999996, 1.45, 5.5, 4.4299999999999997, 4.96, 2.25, 2.4700000000000002, 3.5299999999999998, 5.5099999999999998, 2.7000000000000002, 3.7400000000000002, 3.0600000000000001, 5.6299999999999999, 2.77, 3.73, 4.6200000000000001, 0.13, 5.8200000000000003, 2.3199999999999998, 3.1200000000000001, 3.54, 4.7599999999999998, 3.7720564513451889, 3.7599999999999998, 4.6600000000000001, 4.4500000000000002, 2.6600000000000001, 1.75, 2.1299999999999999, 9.7100000000000009, 2.46, 7.8099999999999996, 8.1600000000000001, 3.5600000000000001, 2.1299999999999999, 3.7720564513451889, 4.8799999999999999, 6.1799999999999997, 3.73, 3.7720564513451889, 2.4819999999999998, 4.5899999999999999, 3.7720564513451889, 5.04, 4.2400000000000002, 3.7720564513451889, 6.3200000000000003, 4.5199999999999996, 5.4500000000000002, 5.4299999999999997, 4.54, 6.8700000000000001, 4.4199999999999999, 3.9300000000000002, 4.6100000000000003, 2.9500000000000002, 8.0999999999999996, 4.3169944954923736, 1.5, 3.9199999999999999, 6.0899999999999999, 3.0899999999999999, 4.3600000000000003, 3.73, 7.0700000000000003, 2.98, 6.0700000000000003, 5.2599999999999998, 3.2999999999999998, 4.6600000000000001, 5.46, 4.3169944954923736, 2.8100000000000001, 4.3169944954923736, 5.9000000000000004, 4.3600000000000003, 4.3169944954923736, 3.6299999999999999, 4.3169944954923736, 3.1699999999999999, 5.4900000000000002, 4.3169944954923736, 5.3799999999999999, 2.8799999999999999, 4.7699999999999996, 4.3169944954923736, 1.3200000000000001, 4.3169944954923736, 4.3169944954923736, 4.3169944954923736, 4.3169944954923736, 4.3169944954923736, 4.3169944954923736, 4.3169944954923736, 4.3169944954923736, 4.3169944954923736, 4.3169944954923736, 4.3169944954923736, 4.3169944954923736, 4.3169944954923736, 5.1200000000000001, 4.96, 5.1399999999999997, 5.1399999999999997, 5.1399999999999997, 5.1399999999999997, 5.2699999999999996],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.9800000000000004, 5.4100000000000001, 5.4100000000000001, 5.4100000000000001, 4.2599999999999998, 4.96, 3.6000000000000001, 5.04, 4.1799999999999997, 4.6799999999999997, 5.2300000000000004, 5.3600000000000003, 6.3799999999999999, 3.6600000000000001, 4.6100000000000003, 4.2699999999999996, 3.9500000000000002, 3.8900000000000001, 4.2400000000000002, 5.2400000000000002, 7.6399999999999997, 7, 7, 7, 6.2800000000000002, 6.2800000000000002, 3.3199999999999998, 4.6200000000000001, 4.0499999999999998, 3.9500000000000002, 4.9299999999999997, 3.3900000000000001, 5.2000000000000002, 5.2000000000000002, 5.2000000000000002, 5.2000000000000002, 5.2000000000000002, 4.3033333333333328, 7.5999999999999996, 7.6000000000000005, 4.9299999999999997, 2.5600000000000001, 7.5599999999999996, 5.3200000000000003, 3.1499999999999999, 3.5800000000000001, 3.52, 3.9035681831201563, 5.54, 3.9035681831201563, 3.9035681831201563, 3.25, 1.3100000000000001, 3.5600000000000001, 3.9035681831201563, 4.2999999999999998, 4.6799999999999997, 2.6200000000000001, 4.8399999999999999, 4.4623991528821998, 2.46, 5.3799999999999999, 5.3899999999999997, 3.1699999999999999, 5.5499999999999998, 4, 2.2599999999999998, 3.0800000000000001, 3.54, 3.5385124407148352, 3.3300000000000001, 2.73, 4.3033333333333328, 2.75, 3.2999999999999998, 3.8599999999999999, 3.2000000000000002, 2.8599999999999999, 2.1600000000000001, 4.1299999999999999, 1.99, 2.4500000000000002, 1.8700000000000001, 2.3399999999999999, 2.6907821462329693, 5.04, 7.4800000000000004, 3.9300000000000002, 4.4299999999999997, 3.1500000000000004, 2.6907821462329693, 2.6907821462329693, 4.2599999999999998, 2.6907821462329693, 13.574999999999999, 9.6999999999999993, 4.9699999999999998, 2.6907821462329693, 2.6907821462329693, 2.6907821462329693, 2.6907821462329693, 2.6907821462329693, 2.6907821462329693, 2.6907821462329693, 2.6907821462329693, 2.6907821462329693, 2.6907821462329693, 2.6907821462329693, 2.6907821462329693, 2.6907821462329693, 4.46, 1.6599999999999999, 2.3300000000000001, 4.3399999999999999, 3.6600000000000001, 6.0700000000000003, 3.6200000000000001, 4.6524344391797907, 5.46, 5.1299999999999999, 2.9500000000000002, 3.8599999999999999, 6.0599999999999996, 2.5299999999999998, 4.3499999999999996, 4.8975, 3.7599999999999998, 2.8849999999999998, 2.8100000000000001, 5.1399999999999997, 3.9300000000000002, 2.02, 6.3200000000000003, 4.96, 3.46, 3.5600000000000001, 2.2599999999999998, 6.2199999999999998, 4.0662090260755797, 1.8333333333333333, 4.0662090260755797, 5.6399999999999997, 1.8399999999999999, 5.2199999999999998, 3.7000000000000002, 5.1100000000000003, 2.1299999999999999, 2.04, 3.8900000000000001, 5.4500000000000002, 2.8399999999999999, 3.21, 3.0299999999999998, 5.4900000000000002, 3.3199999999999998, 4.7400000000000002, 4.8600000000000003, 0.23000000000000001, 2.0499999999999998, 2.3799999999999999, 3.0699999999999998, 2.9300000000000002, 5.0800000000000001, 3.6212322530731811, 4.0899999999999999, 6.9900000000000002, 3, 2.5, 1.5700000000000001, 2.1299999999999999, 9.6199999999999992, 2.3700000000000001, 7.9100000000000001, 3.0699999999999998, 7.2800000000000002, 2.1299999999999999, 3.6212322530731811, 4.6699999999999999, 5.7400000000000002, 3.75, 3.6212322530731811, 2.448, 4.79, 3.6212322530731811, 5.2400000000000002, 4.04, 3.6212322530731811, 6.0899999999999999, 4.25, 4.8799999999999999, 5.4699999999999998, 4.4500000000000002, 6.8700000000000001, 4.6100000000000003, 3.71, 4.6200000000000001, 3.1299999999999999, 8.0199999999999996, 4.289044086285668, 1.6399999999999999, 3.9199999999999999, 6.0599999999999996, 3.2999999999999998, 4.4699999999999998, 3.6099999999999999, 6.7699999999999996, 2.9100000000000001, 6.0700000000000003, 5.4100000000000001, 3.2200000000000002, 4.4500000000000002, 4.9199999999999999, 4.289044086285668, 2.5699999999999998, 6.0700000000000003, 4.289044086285668, 5.4199999999999999, 4.289044086285668, 3.3399999999999999, 4.289044086285668, 3.5600000000000001, 5.4900000000000002, 4.289044086285668, 5.2199999999999998, 3.2400000000000002, 5.1500000000000004, 4.289044086285668, 1.9399999999999999, 4.289044086285668, 4.289044086285668, 4.289044086285668, 4.289044086285668, 4.289044086285668, 4.289044086285668, 4.289044086285668, 4.289044086285668, 4.289044086285668, 4.289044086285668, 4.289044086285668, 4.289044086285668, 4.289044086285668, 4.9299999999999997, 4.8899999999999997, 5.1200000000000001, 5.1200000000000001, 5.1200000000000001, 5.1200000000000001, 5.1799999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [5.1200000000000001, 5.3499999999999996, 5.3499999999999996, 5.3499999999999996, 4.0999999999999996, 4.9400000000000004, 3.5899999999999999, 5.21, 4.2300000000000004, 4.6299999999999999, 5.2199999999999998, 5.1600000000000001, 6.3300000000000001, 3.7400000000000002, 4.6799999999999997, 4.54, 4.2699999999999996, 3.9700000000000002, 4.4199999999999999, 5.2999999999999998, 7.6399999999999997, 6.9100000000000001, 6.9099999999999993, 6.9099999999999993, 6.4199999999999999, 6.4199999999999999, 3.5699999999999998, 4.2199999999999998, 4.2000000000000002, 3.9500000000000002, 4.9000000000000004, 3.3300000000000001, 5.25, 5.25, 5.25, 5.25, 5.25, 4.2966666666666669, 7.8600000000000003, 7.8600000000000012, 5.0099999999999998, 2.5600000000000001, 7.6100000000000003, 5.4400000000000004, 3.9199999999999999, 3.6200000000000001, 3.8700000000000001, 4.1273210721129505, 6.2300000000000004, 4.1273210721129505, 4.1273210721129505, 3.1499999999999999, 1.1599999999999999, 3.3799999999999999, 4.1273210721129505, 4.4500000000000002, 3.5099999999999998, 2.8599999999999999, 6.2999999999999998, 5.1025784226570474, 3.1800000000000002, 5.5700000000000003, 4.9800000000000004, 3.1899999999999999, 5.3700000000000001, 3.6499999999999999, 2.5699999999999998, 3.1600000000000001, 3.54, 3.5412038583402272, 3.8100000000000001, 3.0600000000000001, 4.2966666666666669, 2.8399999999999999, 3.0800000000000001, 3.3599999999999999, 3.02, 2.73, 2.1400000000000001, 3.98, 1.7749999999999999, 2.8300000000000001, 1.8700000000000001, 2.1200000000000001, 2.6506155201499126, 5.1200000000000001, 7.4800000000000004, 4.21, 4.4299999999999997, 1.77, 2.6506155201499126, 2.6506155201499126, 4.4000000000000004, 2.6506155201499126, 13.57, 10.23, 5.2699999999999996, 2.6506155201499126, 2.6506155201499126, 2.6506155201499126, 2.6506155201499126, 2.6506155201499126, 2.6506155201499126, 2.6506155201499126, 2.6506155201499126, 2.6506155201499126, 2.6506155201499126, 2.6506155201499126, 2.6506155201499126, 2.6506155201499126, 4.6799999999999997, 1.6799999999999999, 2.21, 4.3399999999999999, 3.4900000000000002, 4.7599999999999998, 3.2599999999999998, 4.6715219015748488, 5.46, 5.1299999999999999, 2.9900000000000002, 3.8599999999999999, 6.0599999999999996, 2.6000000000000001, 5.0749999999999993, 4.3499999999999996, 3.7599999999999998, 2.7999999999999998, 2.3799999999999999, 5.1399999999999997, 3.9300000000000002, 2.02, 6.04, 5, 3.5299999999999998, 3.5600000000000001, 2.3700000000000001, 6.2199999999999998, 4.0175078404740425, 1.78, 4.0175078404740425, 5.9299999999999997, 2.23, 4.4800000000000004, 3.6000000000000001, 4.5800000000000001, 2.3100000000000001, 2.0699999999999998, 3.1499999999999999, 6.29, 3.0099999999999998, 3.4399999999999999, 3.0499999999999998, 5.4100000000000001, 3.3199999999999998, 4.4199999999999999, 5.4500000000000002, 0.27000000000000002, 2.0499999999999998, 1.8600000000000001, 3.2400000000000002, 3, 5.3499999999999996, 3.6188212218646072, 4.2000000000000002, 7.4500000000000002, 3.5600000000000001, 2.4900000000000002, 1.77, 2.1299999999999999, 9.3200000000000003, 2.6499999999999999, 8.4000000000000004, 2.8700000000000001, 7.1900000000000004, 2.1299999999999999, 3.6188212218646072, 4.54, 5.7000000000000002, 3.75, 3.6188212218646072, 2.4139999999999997, 4.1399999999999997, 3.6188212218646072, 5.9000000000000004, 4.0499999999999998, 3.6188212218646072, 5.96, 4.4399999999999995, 4.7800000000000002, 5.6200000000000001, 4.5099999999999998, 6.8700000000000001, 4.6399999999999997, 3.8199999999999998, 4.2300000000000004, 3.1899999999999999, 8.0899999999999999, 4.2948892989066012, 1.76, 4.04, 5.9299999999999997, 3.4900000000000002, 4.5999999999999996, 3.3900000000000001, 6.7400000000000002, 3.0899999999999999, 6.0700000000000003, 5.1600000000000001, 3.6000000000000001, 4.4500000000000002, 5.1200000000000001, 4.2948892989066012, 2.7000000000000002, 5.9100000000000001, 4.2948892989066012, 4.2948892989066012, 4.1100000000000003, 3.2799999999999998, 4.2948892989066012, 3.7366666666666668, 5.4900000000000002, 4.2948892989066012, 5.3399999999999999, 3.46, 5.5300000000000002, 4.2948892989066012, 1.9299999999999999, 4.2948892989066012, 4.2948892989066012, 4.2948892989066012, 4.2948892989066012, 4.2948892989066012, 4.2948892989066012, 4.2948892989066012, 4.2948892989066012, 4.2948892989066012, 4.2948892989066012, 4.2948892989066012, 4.2948892989066012, 4.2948892989066012, 4.9900000000000002, 4.7699999999999996, 5.1299999999999999, 5.1299999999999999, 5.1299999999999999, 5.1299999999999999, 5.1699999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [5.5899999999999999, 5.6799999999999997, 5.6799999999999997, 5.6799999999999997, 4.4400000000000004, 5.7699999999999996, 4.5, 5.6900000000000004, 4.9000000000000004, 4.8799999999999999, 5.5700000000000003, 5.4199999999999999, 6.8099999999999996, 3.8399999999999999, 4.8499999999999996, 4.7199999999999998, 4.7599999999999998, 4.5099999999999998, 4.8200000000000003, 5.5199999999999996, 7.9299999999999997, 7.3899999999999997, 7.3899999999999997, 7.3899999999999997, 6.6299999999999999, 6.6299999999999999, 3.5899999999999999, 4.1600000000000001, 4.5, 4.4299999999999997, 5.3899999999999997, 3.27, 5.5, 5.5, 5.5, 5.5, 5.5, 4.29, 8.3699999999999992, 8.3699999999999992, 5.29, 2.5600000000000001, 8.6099999999999994, 5.3799999999999999, 3.3399999999999999, 3.5600000000000001, 3.8500000000000001, 4.1485888555116679, 6.5999999999999996, 4.1485888555116679, 4.1485888555116679, 2.8599999999999999, 1.29, 3.4199999999999999, 4.1485888555116679, 4.0099999999999998, 3.7000000000000002, 4.4500000000000002, 4.9500000000000002, 4.8857665803051731, 4.3300000000000001, 5.96, 4.8600000000000003, 3.7799999999999998, 6.0899999999999999, 4.6600000000000001, 2.71, 3.4199999999999999, 3.5699999999999998, 3.5757750299732312, 4.4100000000000001, 6.3600000000000003, 4.29, 3.4900000000000002, 3.2200000000000002, 3.8799999999999999, 3.1499999999999999, 2.6899999999999999, 2.1400000000000001, 4.5199999999999996, 1.5600000000000001, 3, 1.8700000000000001, 1.9199999999999999, 2.7658939847698107, 5.75, 7.4800000000000004, 5.79, 4.4299999999999997, 2.1699999999999999, 2.7658939847698107, 2.7658939847698107, 4.4800000000000004, 2.7658939847698107, 14.58, 10.539999999999999, 4.8600000000000003, 2.7658939847698107, 2.7658939847698107, 2.7658939847698107, 2.7658939847698107, 2.7658939847698107, 2.7658939847698107, 2.7658939847698107, 2.7658939847698107, 2.7658939847698107, 2.7658939847698107, 2.7658939847698107, 2.7658939847698107, 2.7658939847698107, 4.7999999999999998, 1.77, 2.0600000000000001, 4.3399999999999999, 4.21, 5.9800000000000004, 3.2000000000000002, 4.7092181529294539, 5.46, 5.1299999999999999, 3.1050000000000004, 3.98, 6.46, 1.6699999999999999, 5.2524999999999995, 4.3499999999999996, 3.7599999999999998, 3.23, 2.5499999999999998, 5.1399999999999997, 3.9300000000000002, 2.02, 7.04, 6.2800000000000002, 3.8199999999999998, 3.9500000000000002, 2.7400000000000002, 6.2199999999999998, 4.5512979449390913, 1.77, 4.5512979449390913, 6.1799999999999997, 2.6200000000000001, 4.0899999999999999, 3.23, 4.6299999999999999, 2.5699999999999998, 2.7400000000000002, 3.4100000000000001, 6.6399999999999997, 3.25, 3.79, 3.1000000000000001, 5.1500000000000004, 3.3199999999999998, 3.9500000000000002, 5.6900000000000004, 0.27000000000000002, 2.0499999999999998, 2.4300000000000002, 2.9399999999999999, 3.3300000000000001, 5.3200000000000003, 3.7334198549571767, 4.0899999999999999, 8.8100000000000005, 4.6200000000000001, 2.1400000000000001, 2.1400000000000001, 2.1299999999999999, 9.2799999999999994, 2.8900000000000001, 8.0600000000000005, 3.3999999999999999, 7, 2.1299999999999999, 3.7334198549571767, 4.3499999999999996, 5.3600000000000003, 3.75, 3.7334198549571767, 2.3799999999999999, 5.0899999999999999, 3.7334198549571767, 5.0199999999999996, 4.8899999999999997, 3.7334198549571767, 5.7699999999999996, 4.6299999999999999, 5.2800000000000002, 5.6299999999999999, 5.2699999999999996, 6.8700000000000001, 4.54, 4.25, 4.1100000000000003, 3.2999999999999998, 8.4399999999999995, 1.3700000000000001, 4.4793667303005824, 4.5199999999999996, 5.9800000000000004, 3.9399999999999999, 4.5800000000000001, 3.6600000000000001, 6.6299999999999999, 3.6200000000000001, 6.0700000000000003, 5.6200000000000001, 4.21, 4.4500000000000002, 5.3200000000000003, 2.8700000000000001, 4.4793667303005824, 5.1500000000000004, 4.4793667303005824, 4.4793667303005824, 4.2000000000000002, 3.6200000000000001, 4.4793667303005824, 3.9133333333333331, 5.4900000000000002, 4.4793667303005824, 5.46, 3.6699999999999999, 4.4793667303005824, 4.7000000000000002, 1.8899999999999999, 4.4793667303005824, 4.4793667303005824, 4.4793667303005824, 4.4793667303005824, 4.4793667303005824, 4.4793667303005824, 4.4793667303005824, 4.4793667303005824, 4.4793667303005824, 4.4793667303005824, 4.4793667303005824, 4.4793667303005824, 4.4793667303005824, 5.4400000000000004, 4.8899999999999997, 5.6100000000000003, 5.6100000000000012, 5.6100000000000012, 5.6100000000000012, 5.6699999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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
            "title": "Public spending on education",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.5300000000000002, 5.25, 5.25, 5.25, 4.1299999999999999, 5.6299999999999999, 4.0599999999999996, 5.6200000000000001, 4.5899999999999999, 4.71, 4.9900000000000002, 5.1399999999999997, 6.2300000000000004, 4.6399999999999997, 4.9400000000000004, 5.0499999999999998, 4.4000000000000004, 4.8399999999999999, 5.7000000000000002, 5.9100000000000001, 6.6799999999999997, 6.04, 6.04, 6.04, 5.6900000000000004, 5.6900000000000004, 3.25, 5, 4.4900000000000002, 5.2000000000000002, 5.6699999999999999, 2.98, 5.3300000000000001, 5.3300000000000001, 5.3300000000000001, 5.3300000000000001, 5.3300000000000001, 4.6399999999999997, 5.04, 5.04, 5.04, 2.5600000000000001, 7.7300000000000004, 5.7400000000000002, 3.0899999999999999, 3.2999999999999998, 3.6400000000000001, 3.8085580813119262, 5.8200000000000003, 3.8085580813119262, 3.8085580813119262, 2.5800000000000001, 1.4199999999999999, 3.1099999999999999, 3.8085580813119262, 2.8500000000000001, 3.7000000000000002, 4.3899999999999997, 5.3700000000000001, 4.8910219538667787, 3.7000000000000002, 5.54, 4.6100000000000003, 3.7799999999999998, 6.5300000000000002, 3.3399999999999999, 2.77, 3.3199999999999998, 3.2999999999999998, 3.3045901082723033, 4, 5.25, 4.6399999999999997, 3.0499999999999998, 2.9500000000000002, 3.8799999999999999, 2.9900000000000002, 2.8300000000000001, 2.1400000000000001, 4.2699999999999996, 1.51, 1.6699999999999999, 1.8700000000000001, 1.8600000000000001, 2.5432289919249325, 5.9699999999999998, 7.4800000000000004, 4.4800000000000004, 4.4299999999999997, 2.1699999999999999, 2.5432289919249325, 2.5432289919249325, 4.4800000000000004, 2.5432289919249325, 15.59, 10.539999999999999, 4.9299999999999997, 2.5432289919249325, 2.5432289919249325, 2.5432289919249325, 2.5432289919249325, 2.5432289919249325, 2.5432289919249325, 2.5432289919249325, 2.5432289919249325, 2.5432289919249325, 2.5432289919249325, 2.5432289919249325, 2.5432289919249325, 2.5432289919249325, 4.7999999999999998, 1.8300000000000001, 1.6899999999999999, 4.3399999999999999, 3.96, 6.9699999999999998, 3.2000000000000002, 4.8082801527127881, 5.46, 5.1299999999999999, 3.2200000000000002, 3.8999999999999999, 7.4199999999999999, 1.6699999999999999, 5.4299999999999997, 4.3499999999999996, 3.7599999999999998, 3.23, 2.2200000000000002, 5.1399999999999997, 3.9300000000000002, 2.02, 6.2999999999999998, 5.5999999999999996, 3.8199999999999998, 4.3600000000000003, 2.8900000000000001, 6.2199999999999998, 4.3164433680773664, 1.75, 4.3164433680773664, 6.5599999999999996, 2.6600000000000001, 4.0700000000000003, 3.1200000000000001, 4.5899999999999999, 2.6400000000000001, 2.2999999999999998, 3.4199999999999999, 7.0300000000000002, 3.2000000000000002, 3.3700000000000001, 2.8300000000000001, 5.2199999999999998, 3.3199999999999998, 3.1099999999999999, 0.27000000000000002, 5.5899999999999999, 2.0499999999999998, 2.04, 3.1899999999999999, 5.5899999999999999, 4.8700000000000001, 3.6965213573682281, 4.2300000000000004, 9.4399999999999995, 3.6699999999999999, 2.5299999999999998, 1.8700000000000001, 2.1299999999999999, 10.029999999999999, 2.9399999999999999, 8.0600000000000005, 2.7000000000000002, 7.5099999999999998, 2.1299999999999999, 3.6965213573682281, 4.6699999999999999, 5.29, 3.75, 3.6965213573682281, 2.27, 6.04, 3.6965213573682281, 5.5199999999999996, 5.6200000000000001, 3.6965213573682281, 5.7699999999999996, 4.6299999999999999, 4.6500000000000004, 5.6299999999999999, 5.2699999999999996, 6.8700000000000001, 4.4100000000000001, 3.9700000000000002, 3.6899999999999999, 3.1099999999999999, 8.4399999999999995, 1.8400000000000001, 3.75, 4.23248146218004, 5.8099999999999996, 3.4100000000000001, 4.0899999999999999, 3.5299999999999998, 6.2800000000000002, 3.27, 6.0700000000000003, 5.6299999999999999, 3.0099999999999998, 4.4500000000000002, 3.8100000000000001, 3.5699999999999998, 4.23248146218004, 5.8600000000000003, 4.23248146218004, 4.23248146218004, 4.9800000000000004, 3.6200000000000001, 4.23248146218004, 4.0899999999999999, 5.4900000000000002, 4.23248146218004, 5.46, 3.8799999999999999, 4.23248146218004, 5.4699999999999998, 1.8799999999999999, 4.23248146218004, 4.23248146218004, 4.23248146218004, 4.23248146218004, 4.23248146218004, 4.23248146218004, 4.23248146218004, 4.23248146218004, 4.23248146218004, 4.23248146218004, 4.23248146218004, 4.23248146218004, 4.23248146218004, 5.4400000000000004, 4.5899999999999999, 5.5599999999999996, 5.5599999999999987, 5.5599999999999987, 5.5599999999999987, 5.54],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
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

  
