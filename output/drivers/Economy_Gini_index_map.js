(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Economy_Gini_index_map') 

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
    "b55c70ae4d85": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c70ae4d85",
  "attrs": {
    "b55c70ae4d85": {
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
        "title": "Gini income inequality index"
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
        "title": "Gini income inequality index",
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
      "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
      "z": [29.899999999999999, 31.399999999999999, 31.399999999999999, 31.399999999999999, 34.899999999999999, 28, 32.799999999999997, 30.100000000000001, 31.800000000000001, 38.799999999999997, 29.5, 29.800000000000001, 28.100000000000001, 30.199999999999999, 38, 27.5, 27.100000000000001, 37, 36.399999999999999, 37.200000000000003, 25.300000000000001, 25.600000000000001, 25.600000000000001, 25.600000000000001, 27.699999999999999, 27.699999999999999, 39.600000000000001, 29.899999999999999, 35.700000000000003, 32.600000000000001, 24.800000000000001, 32.899999999999999, 34.899999999999999, 34.899999999999999, 34.899999999999999, 34.899999999999999, 34.899999999999999, 34.399999999999999, 27.600000000000001, 27.600000000000001, 33.899999999999999, 33.899999999999999, 26.800000000000001, 28.699999999999999, 30.600000000000001, 39.899999999999999, 34, 36.700000000000003, 34.899999999999999, 42.799999999999997, 41.200000000000003, 37.934731239930024, 37.934731239930024, 37.934731239930024, 37.934731239930024, 42.200000000000003, 40, 33.700000000000003, 35.299999999999997, 32.185024140904623, 28.800000000000001, 26.800000000000001, 32.700000000000003, 28.699999999999999, 32.185024140904623, 33, 35.799999999999997, 34.799999999999997, 40.899999999999999, 40.899999999999999, 40.899999999999999, 40.899999999999999, 34.399999999999999, 33, 36.799999999999997, 46.600000000000001, 42.5, 38.100000000000001, 46.399999999999999, 39.700000000000003, 40.483642934701962, 41.899999999999999, 35.399999999999999, 40.483642934701962, 40.399999999999999, 46.100000000000001, 40.483642934701962, 38.399999999999999, 40.483642934701962, 40.483642934701962, 37.399999999999999, 42, 40.483642934701962, 42.399999999999999, 37.5, 37, 40.483642934701962, 40.483642934701962, 40.483642934701962, 40.483642934701962, 40.483642934701962, 40.483642934701962, 40.483642934701962, 39.100000000000001, 40.483642934701962, 40.483642934701962, 40.483642934701962, 40.483642934701962, 40.483642934701962, 31.699999999999999, 33.200000000000003, 30.899999999999999, 43.799999999999997, 43.729757915061825, 40.899999999999999, 43.600000000000001, 28.600000000000001, 34.700000000000003, 37.5, 40.700000000000003, 33.899999999999999, 31.800000000000001, 32.5, 34, 33.567726428268728, 33.567726428268728, 33.567726428268728, 33.567726428268728, 31.800000000000001, 27.600000000000001, 35.399999999999999, 40.700000000000003, 44.399999999999999, 38.899999999999999, 37.700000000000003, 39.799999999999997, 36.430122145393085, 40.200000000000003, 36.430122145393085, 64.799999999999997, 40.100000000000001, 42.200000000000003, 29.800000000000001, 40.299999999999997, 46.5, 42.899999999999999, 42.799999999999997, 45.600000000000001, 43.200000000000003, 39.899999999999999, 42.700000000000003, 42.799999999999997, 43.299999999999997, 43.200000000000003, 39.899999999999999, 54.299999999999997, 39.200000000000003, 43.369504135779621, 39.399999999999999, 52, 38.600000000000001, 33.399999999999999, 43.369504135779621, 42.200000000000003, 40.200000000000003, 56.200000000000003, 47.299999999999997, 36.5, 43.369504135779621, 44.899999999999999, 63.299999999999997, 60.5, 47.299999999999997, 42.200000000000003, 50.700000000000003, 35.700000000000003, 51.5, 43.369504135779621, 43.369504135779621, 45.100000000000001, 55.899999999999999, 47.200000000000003, 43.369504135779621, 30.800000000000001, 46.799999999999997, 43.369504135779621, 57.600000000000001, 50, 50.899999999999999, 51.5, 53.600000000000001, 48.100000000000001, 45.899999999999999, 53.100000000000001, 53.5, 54.600000000000001, 52.280182469739124, 55, 52.100000000000001, 41.100000000000001, 58.100000000000001, 50.5, 54.899999999999999, 48.799999999999997, 49.299999999999997, 52.280182469739124, 55.700000000000003, 45.5, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 51.200000000000003, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 40.799999999999997, 33.799999999999997, 33.5, 33.5, 33.5, 33.5],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [29.899999999999999, 31.399999999999999, 31.399999999999999, 31.399999999999999, 34.899999999999999, 28, 32.799999999999997, 30.100000000000001, 31.800000000000001, 38.799999999999997, 29.5, 29.800000000000001, 28.100000000000001, 30.199999999999999, 38, 27.5, 27.100000000000001, 37, 36.399999999999999, 37.200000000000003, 25.300000000000001, 25.600000000000001, 25.600000000000001, 25.600000000000001, 27.699999999999999, 27.699999999999999, 39.600000000000001, 29.899999999999999, 35.700000000000003, 32.600000000000001, 24.800000000000001, 32.899999999999999, 34.899999999999999, 34.899999999999999, 34.899999999999999, 34.899999999999999, 34.899999999999999, 34.399999999999999, 27.600000000000001, 27.600000000000001, 33.899999999999999, 33.899999999999999, 26.800000000000001, 28.699999999999999, 30.600000000000001, 39.899999999999999, 34, 36.700000000000003, 34.899999999999999, 42.799999999999997, 41.200000000000003, 37.934731239930024, 37.934731239930024, 37.934731239930024, 37.934731239930024, 42.200000000000003, 40, 33.700000000000003, 35.299999999999997, 32.185024140904623, 28.800000000000001, 26.800000000000001, 32.700000000000003, 28.699999999999999, 32.185024140904623, 33, 35.799999999999997, 34.799999999999997, 40.899999999999999, 40.899999999999999, 40.899999999999999, 40.899999999999999, 34.399999999999999, 33, 36.799999999999997, 46.600000000000001, 42.5, 38.100000000000001, 46.399999999999999, 39.700000000000003, 40.483642934701962, 41.899999999999999, 35.399999999999999, 40.483642934701962, 40.399999999999999, 46.100000000000001, 40.483642934701962, 38.399999999999999, 40.483642934701962, 40.483642934701962, 37.399999999999999, 42, 40.483642934701962, 42.399999999999999, 37.5, 37, 40.483642934701962, 40.483642934701962, 40.483642934701962, 40.483642934701962, 40.483642934701962, 40.483642934701962, 40.483642934701962, 39.100000000000001, 40.483642934701962, 40.483642934701962, 40.483642934701962, 40.483642934701962, 40.483642934701962, 31.699999999999999, 33.200000000000003, 30.899999999999999, 43.799999999999997, 43.729757915061825, 40.899999999999999, 43.600000000000001, 28.600000000000001, 34.700000000000003, 37.5, 40.700000000000003, 33.899999999999999, 31.800000000000001, 32.5, 34, 33.567726428268728, 33.567726428268728, 33.567726428268728, 33.567726428268728, 31.800000000000001, 27.600000000000001, 35.399999999999999, 40.700000000000003, 44.399999999999999, 38.899999999999999, 37.700000000000003, 39.799999999999997, 36.430122145393085, 40.200000000000003, 36.430122145393085, 64.799999999999997, 40.100000000000001, 42.200000000000003, 29.800000000000001, 40.299999999999997, 46.5, 42.899999999999999, 42.799999999999997, 45.600000000000001, 43.200000000000003, 39.899999999999999, 42.700000000000003, 42.799999999999997, 43.299999999999997, 43.200000000000003, 39.899999999999999, 54.299999999999997, 39.200000000000003, 43.369504135779621, 39.399999999999999, 52, 38.600000000000001, 33.399999999999999, 43.369504135779621, 42.200000000000003, 40.200000000000003, 56.200000000000003, 47.299999999999997, 36.5, 43.369504135779621, 44.899999999999999, 63.299999999999997, 60.5, 47.299999999999997, 42.200000000000003, 50.700000000000003, 35.700000000000003, 51.5, 43.369504135779621, 43.369504135779621, 45.100000000000001, 55.899999999999999, 47.200000000000003, 43.369504135779621, 30.800000000000001, 46.799999999999997, 43.369504135779621, 57.600000000000001, 50, 50.899999999999999, 51.5, 53.600000000000001, 48.100000000000001, 45.899999999999999, 53.100000000000001, 53.5, 54.600000000000001, 52.280182469739124, 55, 52.100000000000001, 41.100000000000001, 58.100000000000001, 50.5, 54.899999999999999, 48.799999999999997, 49.299999999999997, 52.280182469739124, 55.700000000000003, 45.5, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 51.200000000000003, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 52.280182469739124, 40.799999999999997, 33.799999999999997, 33.5, 33.5, 33.5, 33.5],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [30.199999999999999, 30.600000000000001, 30.600000000000005, 30.600000000000005, 34.299999999999997, 28, 33.600000000000001, 30.100000000000001, 33.299999999999997, 38.899999999999999, 29.800000000000001, 29.800000000000001, 30.5, 30.199999999999999, 38, 27.5, 27.100000000000001, 37, 36.399999999999999, 33.600000000000001, 26.100000000000001, 24.899999999999999, 24.900000000000002, 24.900000000000002, 27.899999999999999, 27.900000000000002, 39.600000000000001, 29.899999999999999, 35.700000000000003, 32.600000000000001, 24.800000000000001, 33.600000000000001, 34.799999999999997, 34.799999999999997, 34.799999999999997, 34.799999999999997, 34.799999999999997, 34.399999999999999, 31.600000000000001, 31.600000000000001, 33.899999999999999, 33.899999999999999, 28, 28.899999999999999, 30.600000000000001, 39.899999999999999, 34, 36.200000000000003, 35, 42.799999999999997, 41.200000000000003, 37.867239351849761, 37.867239351849761, 37.867239351849761, 37.867239351849761, 41.299999999999997, 40.299999999999997, 31.800000000000001, 35.299999999999997, 32.642868757049357, 26.5, 26.600000000000001, 33.600000000000001, 34.799999999999997, 32.642868757049357, 37.5, 35.799999999999997, 34.799999999999997, 40.899999999999999, 40.899999999999999, 40.899999999999999, 40.899999999999999, 34.399999999999999, 33.899999999999999, 36.799999999999997, 46.800000000000004, 42.5, 38.100000000000001, 45.866666666666667, 39.700000000000003, 40.378461602396143, 41.899999999999999, 35.399999999999999, 40.378461602396143, 40.399999999999999, 46.100000000000001, 40.378461602396143, 38.399999999999999, 40.378461602396143, 40.378461602396143, 37.399999999999999, 42, 40.378461602396143, 42.399999999999999, 37.5, 37, 40.378461602396143, 40.378461602396143, 40.378461602396143, 40.378461602396143, 40.378461602396143, 40.378461602396143, 40.378461602396143, 39.100000000000001, 40.378461602396143, 40.378461602396143, 40.378461602396143, 40.378461602396143, 40.378461602396143, 31.699999999999999, 33.200000000000003, 30.899999999999999, 42.228571428571428, 42.179084606879293, 40.200000000000003, 43.600000000000001, 28.600000000000001, 34.700000000000003, 37.5, 41.5, 33.899999999999999, 31.800000000000001, 32.5, 34, 33.617521583973421, 33.617521583973421, 33.617521583973421, 33.617521583973421, 31.800000000000001, 27.600000000000001, 35.399999999999999, 40.700000000000003, 44.399999999999999, 38.899999999999999, 37.700000000000003, 40.237499999999997, 36.485498509490824, 40.200000000000003, 36.485498509490824, 64.799999999999997, 39.471428571428575, 42.200000000000003, 29.800000000000001, 40.299999999999997, 46.5, 42.899999999999999, 42.799999999999997, 45.600000000000001, 43.200000000000003, 39.899999999999999, 42.700000000000003, 42.799999999999997, 42.716666666666661, 39.899999999999999, 43.200000000000003, 54.299999999999997, 39.200000000000003, 43.341380485131815, 39.399999999999999, 52, 39.200000000000003, 33.399999999999999, 43.341380485131815, 42.200000000000003, 39.425000000000004, 56.200000000000003, 47.299999999999997, 36.5, 43.341380485131815, 44.899999999999999, 62.916666666666664, 60.5, 46.771428571428572, 42.200000000000003, 50.700000000000003, 35.700000000000003, 51.5, 43.341380485131815, 45.100000000000001, 43.341380485131815, 55.899999999999999, 47.200000000000003, 43.341380485131815, 30.800000000000001, 46.799999999999997, 43.341380485131815, 56.5, 50, 48.399999999999999, 50.100000000000001, 55, 47.5, 45.899999999999999, 49.899999999999999, 53.899999999999999, 54.600000000000001, 51.244835660534292, 55, 52.100000000000001, 41.100000000000001, 58.100000000000001, 47.799999999999997, 52.299999999999997, 48.799999999999997, 48.399999999999999, 51.244835660534292, 54.799999999999997, 45.5, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.200000000000003, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 51.244835660534292, 40.299999999999997, 33.799999999999997, 33.100000000000001, 33.100000000000001, 33.100000000000001, 33.100000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [31.600000000000001, 29.800000000000001, 29.800000000000001, 29.800000000000001, 33.799999999999997, 28, 34.600000000000001, 30.300000000000001, 32.399999999999999, 38.5, 28.699999999999999, 29, 29.300000000000001, 30.800000000000001, 35.799999999999997, 26.899999999999999, 29.300000000000001, 35.299999999999997, 39, 33.399999999999999, 26.800000000000001, 25.199999999999999, 25.199999999999999, 25.199999999999999, 27.600000000000001, 27.600000000000001, 39.600000000000001, 34.700000000000003, 35.700000000000003, 32.600000000000001, 24.600000000000001, 33.799999999999997, 35.5, 35.499999999999993, 35.499999999999993, 35.499999999999993, 35.499999999999993, 34.600000000000001, 30.600000000000001, 30.600000000000001, 33.899999999999999, 33.899999999999999, 29, 29, 30.600000000000001, 39.899999999999999, 33.700000000000003, 37.399999999999999, 36.299999999999997, 42.799999999999997, 41.200000000000003, 38.18957005157673, 38.18957005157673, 38.18957005157673, 38.18957005157673, 42.600000000000001, 41.299999999999997, 39.799999999999997, 35.299999999999997, 32.519601762262432, 27.600000000000001, 26.600000000000001, 33.133333333333333, 32.600000000000001, 32.519601762262432, 36, 35.799999999999997, 34.799999999999997, 40.899999999999999, 40.899999999999999, 40.899999999999999, 40.899999999999999, 34.600000000000001, 34.100000000000001, 36.299999999999997, 47, 42.149999999999999, 38.100000000000001, 45.333333333333329, 39.700000000000003, 40.271015279696059, 41.899999999999999, 35.399999999999999, 40.271015279696059, 40.399999999999999, 46.100000000000001, 40.271015279696059, 38.399999999999999, 40.271015279696059, 40.271015279696059, 37.399999999999999, 42, 40.271015279696059, 42.399999999999999, 37.5, 37, 40.271015279696059, 40.271015279696059, 40.271015279696059, 40.271015279696059, 40.271015279696059, 40.271015279696059, 40.271015279696059, 39.100000000000001, 40.271015279696059, 40.271015279696059, 40.271015279696059, 40.271015279696059, 40.271015279696059, 31.699999999999999, 33.200000000000003, 31.300000000000001, 40.657142857142851, 40.628747054788526, 39.5, 43.600000000000001, 28.600000000000001, 34.700000000000003, 37.5, 42.299999999999997, 33.899999999999999, 31.800000000000001, 32.5, 34.700000000000003, 33.690149053099198, 33.690149053099198, 33.690149053099198, 33.690149053099198, 31.625, 27.600000000000001, 35.399999999999999, 40.700000000000003, 44.399999999999999, 38.899999999999999, 40.674999999999997, 37.700000000000003, 36.517893134004503, 39.075000000000003, 36.517893134004503, 64.799999999999997, 38.842857142857142, 42.1875, 30.366666666666667, 40.299999999999997, 46.5, 42.899999999999999, 42.799999999999997, 45.600000000000001, 43.200000000000003, 42.700000000000003, 39.899999999999999, 42.799999999999997, 42.133333333333333, 40.833333333333329, 43.200000000000003, 54.450000000000003, 39.200000000000003, 43.348868039722916, 39.399999999999999, 52, 39.799999999999997, 43.348868039722916, 33.399999999999999, 42.200000000000003, 38.650000000000006, 56.200000000000003, 47.299999999999997, 36.5, 43.348868039722916, 62.533333333333331, 44.899999999999999, 60.5, 46.24285714285714, 42.200000000000003, 50.700000000000003, 35.700000000000003, 51.5, 43.348868039722916, 45.100000000000001, 43.348868039722916, 54.839999999999996, 47.200000000000003, 43.348868039722916, 30.800000000000001, 46.799999999999997, 43.348868039722916, 56.299999999999997, 50.100000000000001, 47.700000000000003, 48.699999999999996, 53.899999999999999, 49.5, 45.899999999999999, 50.5, 53.100000000000001, 54.600000000000001, 51.443087135738203, 58.5, 50, 41.100000000000001, 59.5, 48.5, 51.399999999999999, 48.799999999999997, 47.5, 51.443087135738203, 53.799999999999997, 45.5, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.200000000000003, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 51.443087135738203, 41, 33.600000000000001, 33.674999999999997, 33.674999999999997, 33.674999999999997, 33.674999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [31, 29.699999999999999, 29.699999999999999, 29.699999999999999, 33.700000000000003, 28, 35.100000000000001, 31.100000000000001, 33.5, 38.100000000000001, 29.600000000000001, 30, 28.100000000000001, 30.899999999999999, 34.700000000000003, 26.699999999999999, 25.800000000000001, 34.399999999999999, 35.600000000000001, 33.700000000000003, 26.399999999999999, 25.899999999999999, 25.899999999999995, 25.899999999999995, 28, 28.000000000000004, 39.600000000000001, 28.300000000000001, 35.700000000000003, 32.600000000000001, 24.399999999999999, 32.700000000000003, 35.899999999999999, 35.899999999999999, 35.899999999999999, 35.899999999999999, 35.899999999999999, 34.799999999999997, 26.399999999999999, 26.399999999999999, 33.899999999999999, 33.899999999999999, 30.199999999999999, 29.800000000000001, 30.400000000000002, 39.899999999999999, 33.399999999999999, 36.899999999999999, 35.399999999999999, 42.799999999999997, 41.200000000000003, 37.938987333962203, 37.938987333962203, 37.938987333962203, 37.938987333962203, 39.600000000000001, 41, 30.199999999999999, 35.299999999999997, 32.672404042185434, 28.300000000000001, 26.600000000000001, 32.666666666666671, 37.399999999999999, 32.672404042185434, 29.699999999999999, 35.799999999999997, 34.799999999999997, 41.600000000000001, 41.600000000000001, 41.600000000000001, 41.600000000000001, 34.799999999999997, 35.299999999999997, 35.799999999999997, 47.200000000000003, 41.799999999999997, 38.100000000000001, 44.799999999999997, 39.700000000000003, 40.154907869345685, 41.899999999999999, 35.399999999999999, 40.154907869345685, 40.399999999999999, 44.814285714285717, 40.154907869345685, 38.399999999999999, 40.154907869345685, 40.154907869345685, 37.399999999999999, 42, 40.154907869345685, 42.112499999999997, 37.5, 37, 40.154907869345685, 40.154907869345685, 40.154907869345685, 40.154907869345685, 40.154907869345685, 40.154907869345685, 39.100000000000001, 40.154907869345685, 40.154907869345685, 40.154907869345685, 40.154907869345685, 40.154907869345685, 40.154907869345685, 31.699999999999999, 32.980000000000004, 30.5, 39.085714285714282, 39.078677449141679, 38.799999999999997, 44.799999999999997, 28.600000000000001, 34.922222222222224, 37.5, 41.600000000000001, 33.899999999999999, 32.5, 31.800000000000001, 34, 33.704518925915067, 33.704518925915067, 33.704518925915067, 33.704518925915067, 31.450000000000003, 27.600000000000001, 35.399999999999999, 40.700000000000003, 40.849999999999994, 38.899999999999999, 41.112499999999997, 37.32, 36.181801579630928, 37.950000000000003, 36.181801579630928, 64.200000000000003, 38.214285714285715, 42.175000000000004, 30.933333333333334, 40.299999999999997, 45.93, 43.225000000000001, 42.74285714285714, 45.600000000000001, 43.200000000000003, 42.700000000000003, 40.399999999999999, 42.799999999999997, 41.549999999999997, 41.766666666666666, 43.200000000000003, 54.600000000000001, 39.383333333333333, 43.330708924158408, 39.399999999999999, 51.039999999999999, 40.399999999999999, 43.330708924158408, 33.399999999999999, 42.200000000000003, 37.875, 56.200000000000003, 47.566666666666663, 36.5, 43.330708924158408, 62.149999999999999, 44.899999999999999, 60.5, 45.714285714285715, 41.850000000000001, 50.700000000000003, 35.700000000000003, 51.5, 43.330708924158408, 45.100000000000001, 43.330708924158408, 53.780000000000001, 47.200000000000003, 43.330708924158408, 30.800000000000001, 46.799999999999997, 43.330708924158408, 55.600000000000001, 48.899999999999999, 46.299999999999997, 47.299999999999997, 54.366666666666667, 44.799999999999997, 45.899999999999999, 50.299999999999997, 52.299999999999997, 54.600000000000001, 51.162751407214039, 56.700000000000003, 52, 41.100000000000001, 57.5, 45.700000000000003, 53, 47.574999999999996, 49.299999999999997, 51.162751407214039, 54.600000000000001, 45.5, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.200000000000003, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 51.162751407214039, 41.399999999999999, 34.100000000000001, 34.25, 34.25, 34.25, 34.25],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [31.100000000000001, 32.399999999999999, 32.399999999999999, 32.399999999999999, 32.899999999999999, 29.199999999999999, 34, 31.100000000000001, 34.100000000000001, 36.799999999999997, 30.600000000000001, 29.600000000000001, 29.199999999999999, 31.100000000000001, 34, 26, 24.699999999999999, 34.799999999999997, 37.5, 31.199999999999999, 27.100000000000001, 26.199999999999999, 26.199999999999996, 26.199999999999996, 28.300000000000001, 28.300000000000001, 37.5, 27.899999999999999, 36.100000000000001, 32.600000000000001, 24.399999999999999, 31.899999999999999, 34.399999999999999, 34.399999999999999, 34.399999999999999, 34.399999999999999, 34.399999999999999, 35, 27.100000000000001, 27.100000000000001, 34.299999999999997, 34.299999999999997, 29.5, 27, 30.199999999999999, 39.899999999999999, 33.100000000000001, 38.100000000000001, 34.399999999999999, 42.799999999999997, 41.200000000000003, 37.969830477983891, 37.969830477983891, 37.969830477983891, 37.969830477983891, 38.399999999999999, 42.299999999999997, 30.100000000000001, 35.299999999999997, 32.613901663852815, 29.600000000000001, 26.600000000000001, 32.200000000000003, 33.899999999999999, 32.613901663852815, 31.199999999999999, 35.799999999999997, 34.799999999999997, 42.299999999999997, 42.299999999999997, 42.299999999999997, 42.299999999999997, 35, 36.700000000000003, 35.700000000000003, 46.899999999999999, 39.799999999999997, 38.100000000000001, 45.149999999999999, 38.5, 40.028714394333441, 41.899999999999999, 35.399999999999999, 40.028714394333441, 40.399999999999999, 43.528571428571432, 40.028714394333441, 38.399999999999999, 40.028714394333441, 40.028714394333441, 37.399999999999999, 42, 40.028714394333441, 41.825000000000003, 37.5, 36.292307692307695, 40.028714394333441, 40.028714394333441, 40.028714394333441, 40.028714394333441, 40.028714394333441, 40.028714394333441, 39.100000000000001, 40.028714394333441, 40.028714394333441, 40.028714394333441, 40.028714394333441, 40.028714394333441, 40.028714394333441, 32, 32.760000000000005, 29.699999999999999, 37.514285714285712, 37.528757182005748, 38.100000000000001, 43.899999999999999, 28.75, 35.144444444444446, 37.5, 41.100000000000001, 33.25, 32.5, 31.800000000000001, 35.600000000000001, 33.844676523380336, 33.844676523380336, 33.844676523380336, 33.844676523380336, 31.275000000000002, 27.600000000000001, 35.399999999999999, 40.528571428571432, 37.299999999999997, 36.93333333333333, 41.549999999999997, 36.939999999999998, 35.611817728816938, 36.825000000000003, 35.611817728816938, 63.600000000000001, 37.585714285714289, 42.162500000000001, 31.5, 40.299999999999997, 45.359999999999999, 43.549999999999997, 42.685714285714283, 45.600000000000001, 43.200000000000003, 42.700000000000003, 40.899999999999999, 42.799999999999997, 40.966666666666661, 42.700000000000003, 43.200000000000003, 53.950000000000003, 39.56666666666667, 43.316527418007318, 39.399999999999999, 50.079999999999998, 41, 43.316527418007318, 34.142857142857139, 42.960000000000001, 37.100000000000001, 56.200000000000003, 47.833333333333329, 36.5, 43.316527418007318, 61.766666666666666, 44.899999999999999, 60.5, 45.185714285714283, 41.5, 50.700000000000003, 36.166666666666671, 51.5, 43.316527418007318, 45.100000000000001, 43.316527418007318, 52.719999999999999, 47.200000000000003, 43.316527418007318, 30.800000000000001, 46.799999999999997, 43.316527418007318, 54.899999999999999, 49.399999999999999, 46.200000000000003, 47.199999999999996, 54.833333333333329, 44.799999999999997, 46.399999999999999, 50, 53.399999999999999, 53.8125, 50.480337393113565, 54.5, 48.899999999999999, 41.100000000000001, 55.799999999999997, 45.200000000000003, 53, 46.349999999999994, 49.299999999999997, 50.480337393113565, 52.700000000000003, 45.5, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 51.200000000000003, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 50.480337393113565, 40.799999999999997, 33.799999999999997, 34.825000000000003, 34.825000000000003, 34.825000000000003, 34.825000000000003],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [30.899999999999999, 33, 33, 33, 33.799999999999997, 29, 33.600000000000001, 31.699999999999999, 34.200000000000003, 36.600000000000001, 30.399999999999999, 29.300000000000001, 28.399999999999999, 32.600000000000001, 33.5, 26.300000000000001, 26, 35.700000000000003, 37.200000000000003, 31.899999999999999, 28.100000000000001, 25.199999999999999, 25.199999999999999, 25.199999999999999, 27.800000000000001, 27.800000000000001, 36.399999999999999, 27.5, 33.600000000000001, 32.600000000000001, 23.699999999999999, 30.899999999999999, 35.399999999999999, 35.399999999999999, 35.399999999999999, 35.399999999999999, 35.399999999999999, 35.199999999999996, 27, 27, 33.799999999999997, 33.799999999999997, 31.800000000000001, 26.600000000000001, 30, 39.899999999999999, 33.075000000000003, 38.5, 34.700000000000003, 42.799999999999997, 41.200000000000003, 38.082124191139869, 38.082124191139869, 38.082124191139869, 38.082124191139869, 39, 41.600000000000001, 28.5, 35.299999999999997, 31.939004413217194, 27.800000000000001, 26.600000000000001, 31.5, 31.939004413217194, 31.5, 29.199999999999999, 34.899999999999999, 34.799999999999997, 43, 43, 43, 43, 35.199999999999996, 36.100000000000001, 35.600000000000001, 46.600000000000001, 40.299999999999997, 38.100000000000001, 45.5, 37.300000000000004, 39.913529955269368, 41.899999999999999, 35.519999999999996, 39.913529955269368, 40.399999999999999, 42.242857142857147, 39.913529955269368, 38.399999999999999, 39.913529955269368, 39.913529955269368, 37.399999999999999, 42, 39.913529955269368, 41.537500000000001, 37.5, 35.584615384615383, 39.913529955269368, 39.913529955269368, 39.913529955269368, 39.913529955269368, 39.913529955269368, 39.913529955269368, 39.100000000000001, 39.913529955269368, 39.913529955269368, 39.913529955269368, 39.913529955269368, 39.913529955269368, 39.913529955269368, 32.299999999999997, 32.539999999999999, 29.399999999999999, 35.942857142857136, 35.99982434165284, 38.240000000000002, 43, 28.900000000000002, 35.366666666666667, 37.5, 41.600000000000001, 32.600000000000001, 32.5, 31.800000000000001, 35.049999999999997, 33.919287167381981, 33.919287167381981, 33.919287167381981, 33.919287167381981, 31.100000000000001, 27.600000000000001, 35.399999999999999, 40.357142857142861, 35.849999999999994, 34.966666666666669, 41.987499999999997, 36.560000000000002, 35.234975592692656, 35.700000000000003, 35.234975592692656, 63, 36.957142857142863, 42.150000000000006, 32.06666666666667, 39.674999999999997, 44.789999999999999, 43.875, 42.628571428571426, 45.600000000000001, 42.700000000000003, 43.200000000000003, 41.399999999999999, 43.342857142857142, 40.383333333333333, 43.633333333333333, 53.299999999999997, 43.200000000000003, 39.75, 43.225214943788508, 38.259999999999998, 49.120000000000005, 41.600000000000001, 43.225214943788508, 34.885714285714286, 43.719999999999999, 36.325000000000003, 56.200000000000003, 48.099999999999994, 36.028571428571432, 43.225214943788508, 61.383333333333333, 44.899999999999999, 60.5, 44.657142857142858, 41.150000000000006, 50.700000000000003, 36.633333333333333, 51.5, 43.225214943788508, 45.100000000000001, 43.225214943788508, 51.659999999999997, 46.600000000000001, 43.225214943788508, 30.800000000000001, 46.799999999999997, 43.225214943788508, 54, 49.899999999999999, 44.899999999999999, 47.100000000000001, 55.299999999999997, 44.799999999999997, 45.100000000000001, 47.5, 49.799999999999997, 53.024999999999999, 48.900658691762629, 50.799999999999997, 48.100000000000001, 41.100000000000001, 55.5, 46.899999999999999, 50.700000000000003, 45.125, 48.600000000000001, 48.900658691762629, 52.700000000000003, 45.5, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 51.200000000000003, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 48.900658691762629, 40.799999999999997, 33.899999999999999, 35.399999999999999, 35.399999999999999, 35.399999999999999, 35.399999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [30.5, 32.700000000000003, 32.700000000000003, 32.700000000000003, 33.799999999999997, 30.199999999999999, 33.600000000000001, 32.100000000000001, 34.899999999999999, 34.899999999999999, 31.5, 27.899999999999999, 28.600000000000001, 31.199999999999999, 33.399999999999999, 26.199999999999999, 27.199999999999999, 37.200000000000003, 36, 31.399999999999999, 27.300000000000001, 26.699999999999999, 26.699999999999999, 26.699999999999999, 27.5, 27.5, 35.600000000000001, 27, 33.799999999999997, 32.600000000000001, 24.800000000000001, 32.700000000000003, 35.100000000000001, 35.100000000000001, 35.100000000000001, 35.100000000000001, 35.100000000000001, 35.399999999999999, 26.199999999999999, 26.199999999999999, 32.899999999999999, 32.899999999999999, 28.699999999999999, 25.300000000000001, 29.75, 39.899999999999999, 33.049999999999997, 38.200000000000003, 32.899999999999999, 42.799999999999997, 41.200000000000003, 37.804306886709909, 37.804306886709909, 37.804306886709909, 37.804306886709909, 39, 39.799999999999997, 28.199999999999999, 35.299999999999997, 31.628263513972147, 27.699999999999999, 26.600000000000001, 30.800000000000001, 31.628263513972147, 29.899999999999999, 28, 34, 33.450000000000003, 43.350000000000001, 43.350000000000001, 43.350000000000001, 43.350000000000001, 35.399999999999999, 36, 37.450000000000003, 46.299999999999997, 39.600000000000001, 38.100000000000001, 44.966666666666669, 36.100000000000001, 39.575570144567195, 41.899999999999999, 35.640000000000001, 39.575570144567195, 39.659999999999997, 40.957142857142856, 39.575570144567195, 38.399999999999999, 39.575570144567195, 39.575570144567195, 37.399999999999999, 41.340000000000003, 39.575570144567195, 41.25, 37.5, 34.876923076923077, 39.575570144567195, 39.575570144567195, 39.575570144567195, 39.575570144567195, 39.575570144567195, 39.575570144567195, 39.100000000000001, 39.575570144567195, 39.575570144567195, 39.575570144567195, 39.575570144567195, 39.575570144567195, 39.575570144567195, 32.149999999999999, 32.32, 29.100000000000001, 34.471256259106987, 34.371428571428567, 38.380000000000003, 42.100000000000001, 29.050000000000001, 35.588888888888889, 37.5, 42.600000000000001, 33.150000000000006, 32.5, 31.800000000000001, 34.5, 34.078109346938007, 34.078109346938007, 34.078109346938007, 34.078109346938007, 30.649999999999999, 27.600000000000001, 35.399999999999999, 40.18571428571429, 34.399999999999999, 33, 42.424999999999997, 36.18, 34.864057721692362, 35.183333333333337, 34.864057721692362, 63.200000000000003, 36.328571428571429, 42.137500000000003, 32.633333333333333, 39.049999999999997, 44.219999999999999, 44.200000000000003, 42.571428571428569, 43.560000000000002, 47, 42.957142857142863, 41.899999999999999, 43.885714285714286, 39.799999999999997, 44.566666666666663, 52.649999999999999, 43.200000000000003, 39.93333333333333, 43.233173107569485, 37.119999999999997, 48.160000000000004, 42.200000000000003, 43.233173107569485, 35.628571428571426, 44.480000000000004, 35.549999999999997, 55.184615384615384, 48.366666666666667, 35.557142857142857, 43.233173107569485, 61, 60.5, 44.899999999999999, 44.128571428571426, 40.800000000000004, 50.700000000000003, 37.100000000000001, 43.233173107569485, 51.5, 45.100000000000001, 43.233173107569485, 50.599999999999994, 46, 43.233173107569485, 30.800000000000001, 46.799999999999997, 43.233173107569485, 53.700000000000003, 48.549999999999997, 43.700000000000003, 47, 54.299999999999997, 44.799999999999997, 45.5, 47, 48.5, 52.237499999999997, 48.067437488752915, 49.200000000000003, 48.899999999999999, 41.100000000000001, 51.299999999999997, 45.799999999999997, 49.100000000000001, 43.899999999999999, 50.600000000000001, 48.067437488752915, 51.799999999999997, 45.5, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 51.200000000000003, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 48.067437488752915, 40.600000000000001, 34, 35.049999999999997, 35.049999999999997, 35.049999999999997, 35.049999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [30.300000000000001, 33.700000000000003, 33.700000000000003, 33.700000000000003, 34.700000000000003, 29, 34.100000000000001, 31.5, 35.200000000000003, 35.799999999999997, 30.300000000000001, 27.800000000000001, 28.399999999999999, 30.5, 33.200000000000003, 26.600000000000001, 27.300000000000001, 33.600000000000001, 35, 32, 27.699999999999999, 27.199999999999999, 27.200000000000003, 27.200000000000003, 27.699999999999999, 27.699999999999996, 35.5, 29.399999999999999, 35.700000000000003, 32.399999999999999, 24.899999999999999, 32.299999999999997, 33.700000000000003, 33.700000000000003, 33.700000000000003, 33.700000000000003, 33.700000000000003, 35.549999999999997, 25.699999999999999, 25.699999999999999, 32.600000000000001, 32.600000000000001, 26.199999999999999, 24.800000000000001, 29.5, 39.899999999999999, 33.024999999999999, 39.5, 32.100000000000001, 40.200000000000003, 41.200000000000003, 37.699021723366769, 37.699021723366769, 37.699021723366769, 37.699021723366769, 38.799999999999997, 39.5, 28, 35.299999999999997, 31.908361536348124, 28.600000000000001, 26.600000000000001, 31.333333333333336, 31.908361536348124, 30.100000000000001, 30, 33.100000000000001, 32.100000000000001, 43.700000000000003, 43.700000000000003, 43.700000000000003, 43.700000000000003, 35.549999999999997, 37.200000000000003, 39.299999999999997, 46.366666666666667, 39.399999999999999, 38.100000000000001, 44.43333333333333, 36.966666666666669, 39.606748049526288, 41.899999999999999, 35.759999999999998, 39.606748049526288, 38.920000000000002, 39.671428571428571, 39.606748049526288, 37.385714285714286, 39.606748049526288, 39.606748049526288, 37.399999999999999, 40.68, 39.606748049526288, 34.169230769230772, 40.962499999999999, 36.833333333333336, 39.606748049526288, 39.606748049526288, 39.606748049526288, 39.606748049526288, 39.606748049526288, 39.606748049526288, 39.100000000000001, 39.606748049526288, 39.606748049526288, 39.606748049526288, 39.606748049526288, 39.606748049526288, 39.606748049526288, 32, 32.100000000000001, 28.800000000000001, 32.943110632364245, 32.799999999999997, 38.519999999999996, 40.924999999999997, 29.199999999999999, 35.811111111111117, 37.5, 42.5, 33.700000000000003, 32.5, 31.800000000000001, 35.299999999999997, 34.218789606064455, 34.218789606064455, 34.218789606064455, 34.218789606064455, 30.199999999999999, 27.600000000000001, 35.159999999999997, 40.014285714285712, 32.950000000000003, 33.333333333333336, 42.862499999999997, 35.799999999999997, 34.659344813435176, 34.666666666666671, 34.659344813435176, 63.399999999999999, 35.700000000000003, 42.125, 33.200000000000003, 38.424999999999997, 43.649999999999999, 43.133333333333333, 42.514285714285712, 44.420000000000002, 48.399999999999999, 42.714285714285715, 42.399999999999999, 44.428571428571431, 38.899999999999999, 45.5, 52, 43.200000000000003, 40.116666666666667, 43.116892525384117, 35.980000000000004, 47.200000000000003, 42.799999999999997, 43.116892525384117, 36.371428571428574, 45.240000000000002, 34.774999999999999, 54.169230769230772, 48.633333333333333, 35.085714285714289, 43.116892525384117, 60.683333333333337, 59.299999999999997, 44.899999999999999, 43.600000000000001, 40.450000000000003, 50.700000000000003, 37.56666666666667, 43.116892525384117, 51.942857142857143, 45.100000000000001, 43.116892525384117, 49.539999999999999, 45.399999999999999, 43.116892525384117, 30.800000000000001, 46.799999999999997, 43.116892525384117, 53.299999999999997, 47.200000000000003, 43.600000000000001, 46.5, 54.600000000000001, 44.799999999999997, 44.5, 45.5, 48.799999999999997, 51.450000000000003, 47.439901895137147, 47.650000000000006, 47.299999999999997, 41.100000000000001, 53.100000000000001, 43.5, 51, 44.359999999999999, 48, 47.439901895137147, 51.600000000000001, 45.5, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 51.200000000000003, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 47.439901895137147, 40, 33.600000000000001, 34.700000000000003, 34.700000000000003, 34.700000000000003, 34.700000000000003],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [30.699999999999999, 33.299999999999997, 33.299999999999997, 33.299999999999997, 35.100000000000001, 29.100000000000001, 34.799999999999997, 32.600000000000001, 35.700000000000003, 36.299999999999997, 30.800000000000001, 27.800000000000001, 28.100000000000001, 32.100000000000001, 33.200000000000003, 26.399999999999999, 26.5, 32.5, 35.799999999999997, 32.5, 27.600000000000001, 27.300000000000001, 27.300000000000004, 27.300000000000004, 27.600000000000001, 27.599999999999998, 35.899999999999999, 29.199999999999999, 34.299999999999997, 32.299999999999997, 24.899999999999999, 32.899999999999999, 33.200000000000003, 33.200000000000003, 33.200000000000003, 33.200000000000003, 33.200000000000003, 35.700000000000003, 25.300000000000001, 25.300000000000001, 31.699999999999999, 31.699999999999999, 26.800000000000001, 24.600000000000001, 29.25, 39.899999999999999, 39.600000000000001, 33, 30.600000000000001, 39.399999999999999, 41.200000000000003, 37.452393626341042, 37.452393626341042, 37.452393626341042, 37.452393626341042, 40, 39.700000000000003, 28, 35.299999999999997, 31.598588245616519, 27.199999999999999, 26.600000000000001, 31.866666666666667, 31.598588245616519, 27.800000000000001, 29.399999999999999, 33.899999999999999, 32.366666666666667, 42.399999999999999, 42.399999999999999, 42.399999999999999, 42.399999999999999, 35.700000000000003, 40.5, 37.450000000000003, 46.43333333333333, 37.5, 38.100000000000001, 43.899999999999999, 37.833333333333336, 39.631043944661549, 41.899999999999999, 35.880000000000003, 39.631043944661549, 38.18, 38.385714285714286, 39.631043944661549, 36.371428571428574, 39.631043944661549, 39.631043944661549, 36.833333333333329, 40.020000000000003, 39.631043944661549, 33.46153846153846, 40.674999999999997, 36.166666666666664, 39.631043944661549, 39.631043944661549, 39.631043944661549, 39.631043944661549, 39.631043944661549, 39.631043944661549, 39.100000000000001, 39.631043944661549, 39.631043944661549, 39.631043944661549, 39.631043944661549, 39.631043944661549, 39.631043944661549, 31.800000000000001, 32.149999999999999, 29.699999999999999, 32.947546257310542, 32.799999999999997, 38.659999999999997, 39.75, 29.350000000000001, 36.033333333333339, 37.5, 41.399999999999999, 33.700000000000003, 32.5, 31.800000000000001, 34.399999999999999, 34.188814993958829, 34.188814993958829, 34.188814993958829, 34.188814993958829, 29.25, 27.600000000000001, 34.920000000000002, 39.842857142857142, 31.5, 33.666666666666664, 43.299999999999997, 35.199999999999996, 34.438698705720938, 34.150000000000006, 34.438698705720938, 63.299999999999997, 35.600000000000001, 42.112500000000004, 33.560000000000002, 37.799999999999997, 43.079999999999998, 42.06666666666667, 42.457142857142856, 45.280000000000001, 49.799999999999997, 42.471428571428575, 42.5, 44.971428571428568, 38, 45.366666666666667, 52.780000000000001, 43.200000000000003, 40.299999999999997, 42.987892443917204, 34.840000000000003, 46.5, 42.987892443917204, 43.399999999999999, 37.114285714285714, 46, 34, 48.899999999999999, 53.153846153846153, 34.614285714285714, 42.987892443917204, 60.366666666666667, 58.100000000000001, 44.899999999999999, 42.060000000000002, 40.100000000000001, 48.712500000000006, 38.033333333333331, 42.987892443917204, 52.385714285714286, 45.100000000000001, 42.987892443917204, 48.479999999999997, 44.799999999999997, 42.987892443917204, 32.214285714285715, 46.799999999999997, 42.987892443917204, 52.899999999999999, 47.950000000000003, 42.600000000000001, 46, 53.5, 44.799999999999997, 42.200000000000003, 44.700000000000003, 45.899999999999999, 50.662500000000001, 46.741718097131127, 46.100000000000001, 47.700000000000003, 41.100000000000001, 52.600000000000001, 42.299999999999997, 44.82, 52.299999999999997, 48.799999999999997, 51.299999999999997, 46.741718097131127, 45.5, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 51.200000000000003, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 46.741718097131127, 40.899999999999999, 32.700000000000003, 34.625, 34.625, 34.625, 34.625],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [31.100000000000001, 33.100000000000001, 33.100000000000001, 33.100000000000001, 35.200000000000003, 29.399999999999999, 36.299999999999997, 34.299999999999997, 35.399999999999999, 36, 30.5, 27.600000000000001, 27.5, 34.299999999999997, 33, 26.100000000000001, 26.100000000000001, 35.100000000000001, 35.200000000000003, 32.899999999999999, 27.600000000000001, 27.800000000000001, 27.800000000000001, 27.800000000000001, 27.100000000000001, 27.099999999999998, 36.5, 30.800000000000001, 36, 32.5, 25.600000000000001, 33.200000000000003, 33.100000000000001, 33.100000000000001, 33.100000000000001, 33.100000000000001, 33.100000000000001, 35.450000000000003, 25.699999999999999, 25.699999999999999, 31.600000000000001, 31.600000000000001, 26.800000000000001, 24.699999999999999, 29, 39.899999999999999, 39, 33, 29.199999999999999, 38.100000000000001, 41.200000000000003, 37.060550061608673, 37.060550061608673, 37.060550061608673, 37.060550061608673, 40.200000000000003, 40.700000000000003, 28.199999999999999, 35.299999999999997, 31.547922260105089, 26.5, 26.600000000000001, 32.399999999999999, 31.547922260105089, 27.399999999999999, 29.600000000000001, 33.799999999999997, 32.633333333333333, 42.200000000000003, 42.200000000000003, 42.200000000000003, 42.200000000000003, 35.450000000000003, 40.5, 35.600000000000001, 46.5, 39.299999999999997, 38.100000000000001, 42.599999999999994, 38.700000000000003, 39.457886693814885, 41.899999999999999, 36, 39.457886693814885, 37.440000000000005, 37.100000000000001, 39.457886693814885, 35.357142857142854, 39.457886693814885, 39.457886693814885, 36.266666666666666, 39.359999999999999, 39.457886693814885, 32.753846153846155, 40.387500000000003, 35.5, 39.457886693814885, 39.457886693814885, 39.457886693814885, 39.457886693814885, 39.457886693814885, 39.457886693814885, 39.100000000000001, 39.457886693814885, 39.457886693814885, 39.457886693814885, 39.457886693814885, 39.457886693814885, 39.457886693814885, 31.600000000000001, 32.200000000000003, 29.600000000000001, 32.952330611916366, 32.799999999999997, 38.799999999999997, 38.575000000000003, 29.5, 36.25555555555556, 37.5, 41.600000000000001, 33.700000000000003, 32.5, 31.800000000000001, 34.259999999999998, 34.244702509046263, 34.244702509046263, 34.244702509046263, 34.244702509046263, 28.300000000000001, 27.600000000000001, 34.68, 39.671428571428571, 32.43333333333333, 34, 42.471428571428568, 34.599999999999994, 34.366999523797986, 33.633333333333333, 34.366999523797986, 63.200000000000003, 35.5, 42.100000000000001, 33.920000000000002, 38.185714285714283, 42.509999999999998, 41, 42.399999999999999, 46.140000000000001, 51.200000000000003, 42.228571428571428, 42.600000000000001, 45.514285714285712, 37.099999999999994, 45.233333333333334, 53.560000000000002, 43.383333333333333, 40.014285714285712, 42.96281244806007, 33.700000000000003, 45.800000000000004, 42.96281244806007, 44.5, 37.857142857142861, 45.274999999999999, 34.24285714285714, 48.899999999999999, 52.138461538461542, 34.142857142857146, 42.96281244806007, 60.049999999999997, 56.899999999999999, 40.520000000000003, 44.899999999999999, 39.75, 46.725000000000001, 42.96281244806007, 38.5, 52.828571428571429, 45.100000000000001, 42.96281244806007, 47.419999999999995, 44.200000000000003, 42.96281244806007, 33.628571428571433, 46.799999999999997, 42.96281244806007, 53.399999999999999, 48.700000000000003, 41.299999999999997, 45.899999999999999, 52.600000000000001, 44.799999999999997, 39.899999999999999, 44.399999999999999, 46.100000000000001, 49.875, 46.36360307261431, 46.600000000000001, 46.100000000000001, 41.100000000000001, 53.399999999999999, 41.799999999999997, 45.280000000000001, 47.600000000000001, 48.399999999999999, 51.700000000000003, 46.36360307261431, 45.5, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 51.200000000000003, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 46.36360307261431, 40.899999999999999, 33.5, 34.549999999999997, 34.549999999999997, 34.549999999999997, 34.549999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [31.5, 32.5, 32.5, 32.5, 34.899999999999999, 28.800000000000001, 36.100000000000001, 37, 36.200000000000003, 36.200000000000003, 30.800000000000001, 28.100000000000001, 27.699999999999999, 32, 33.100000000000001, 26.5, 28.100000000000001, 35.299999999999997, 35.5, 35.100000000000001, 28.800000000000001, 28.5, 28.5, 28.5, 27.199999999999999, 27.199999999999999, 36.899999999999999, 31.5, 36.600000000000001, 32, 26.199999999999999, 33.5, 32.700000000000003, 32.700000000000003, 32.700000000000003, 32.700000000000003, 32.700000000000003, 35.200000000000003, 26.399999999999999, 26.399999999999999, 32.5, 32.5, 25.399999999999999, 24.600000000000001, 31.800000000000001, 39.5, 38.600000000000001, 33, 28.5, 36.200000000000003, 39, 36.510261743507755, 36.510261743507755, 36.510261743507755, 36.510261743507755, 40.200000000000003, 40.899999999999999, 27.100000000000001, 35.299999999999997, 31.763583599996743, 26.600000000000001, 26.600000000000001, 32.933333333333337, 31.763583599996743, 28.800000000000001, 30.600000000000001, 32.899999999999999, 32.899999999999999, 39.700000000000003, 39.700000000000003, 39.700000000000003, 39.700000000000003, 35.200000000000003, 40.799999999999997, 35.200000000000003, 45.866666666666667, 37.799999999999997, 38.100000000000001, 41.299999999999997, 38.850000000000001, 39.179428728062391, 41.899999999999999, 36.466666666666669, 39.179428728062391, 36.700000000000003, 37.100000000000001, 39.179428728062391, 34.342857142857142, 39.179428728062391, 39.179428728062391, 35.699999999999996, 38.700000000000003, 39.179428728062391, 32.04615384615385, 40.100000000000001, 34.833333333333336, 39.179428728062391, 39.179428728062391, 39.179428728062391, 39.179428728062391, 39.179428728062391, 39.179428728062391, 39.100000000000001, 39.179428728062391, 39.179428728062391, 39.179428728062391, 39.179428728062391, 39.179428728062391, 39.179428728062391, 31.399999999999999, 32.25, 29.5, 32.946513231430011, 32.799999999999997, 38.519999999999996, 37.399999999999999, 29.5, 36.477777777777781, 37.5, 40.200000000000003, 33.700000000000003, 32.5, 31.800000000000001, 34.119999999999997, 34.113344832196134, 34.113344832196134, 34.113344832196134, 34.113344832196134, 29.466666666666669, 27.600000000000001, 34.440000000000005, 39.5, 33.366666666666667, 34.333333333333336, 41.642857142857139, 34, 34.298152091284372, 33.116666666666667, 34.298152091284372, 63.100000000000001, 35.633333333333333, 42.100000000000001, 34.280000000000001, 38.571428571428569, 41.939999999999998, 41.450000000000003, 42.674999999999997, 47, 52.600000000000001, 42.600000000000001, 41.985714285714288, 46.057142857142857, 36.199999999999996, 45.100000000000001, 54.339999999999996, 43.56666666666667, 39.728571428571428, 43.083841030285711, 33.016666666666666, 43.083841030285711, 45.100000000000001, 45.599999999999994, 38.600000000000001, 44.549999999999997, 34.485714285714288, 48.899999999999999, 51.123076923076923, 33.671428571428571, 43.083841030285711, 59.733333333333334, 55.699999999999996, 38.979999999999997, 44.899999999999999, 39.399999999999999, 44.737499999999997, 43.083841030285711, 38.159999999999997, 53.271428571428572, 44.100000000000001, 43.083841030285711, 46.359999999999999, 43.600000000000001, 43.083841030285711, 35.042857142857144, 46.799999999999997, 43.083841030285711, 52.700000000000003, 48.700000000000003, 40.899999999999999, 45.799999999999997, 52.600000000000001, 44.799999999999997, 40.5, 43.899999999999999, 46.899999999999999, 49.087499999999999, 46.371327740346423, 47.600000000000001, 41.100000000000001, 47.700000000000003, 50, 43.399999999999999, 45.740000000000002, 47.899999999999999, 49.200000000000003, 51.5, 46.371327740346423, 45.5, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 51.200000000000003, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 46.371327740346423, 40.700000000000003, 33.799999999999997, 34.475000000000001, 34.475000000000001, 34.475000000000001, 34.475000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [30.899999999999999, 32.299999999999997, 32.299999999999997, 32.299999999999997, 34.700000000000003, 29, 35.799999999999997, 35.600000000000001, 36.100000000000001, 35.600000000000001, 30.5, 28.600000000000001, 28.100000000000001, 31.199999999999999, 32.799999999999997, 25.899999999999999, 26.100000000000001, 37.700000000000003, 35.100000000000001, 34.600000000000001, 28.399999999999999, 28.399999999999999, 28.400000000000002, 28.400000000000002, 26.800000000000001, 26.800000000000001, 36, 30.899999999999999, 37.399999999999999, 32.100000000000001, 25.699999999999999, 31.899999999999999, 33.100000000000001, 33.100000000000001, 33.100000000000001, 33.100000000000001, 33.100000000000001, 34.950000000000003, 26.800000000000001, 26.800000000000001, 32.5, 32.5, 27.800000000000001, 24, 34.600000000000001, 40.5, 37.600000000000001, 33, 26.800000000000001, 35.200000000000003, 38.799999999999997, 36.435692559881623, 36.435692559881623, 36.435692559881623, 36.435692559881623, 41.200000000000003, 39.899999999999999, 27, 35.299999999999997, 31.755933634209356, 26.600000000000001, 27.199999999999999, 33.466666666666669, 31.755933634209356, 26.800000000000001, 31.5, 32, 32.899999999999999, 39.200000000000003, 39.200000000000003, 39.200000000000003, 39.200000000000003, 34.950000000000003, 40.200000000000003, 34.799999999999997, 45.233333333333334, 37, 38.100000000000001, 41.200000000000003, 39, 39.198881444079447, 41.899999999999999, 36.93333333333333, 39.198881444079447, 35.700000000000003, 37.100000000000001, 39.198881444079447, 33.328571428571429, 39.198881444079447, 39.198881444079447, 35.133333333333333, 38.700000000000003, 39.198881444079447, 31.338461538461537, 40.100000000000001, 34.166666666666664, 39.198881444079447, 39.198881444079447, 39.198881444079447, 39.198881444079447, 39.198881444079447, 39.198881444079447, 39.100000000000001, 39.198881444079447, 39.198881444079447, 39.198881444079447, 39.198881444079447, 39.198881444079447, 39.198881444079447, 31.199999999999999, 32.299999999999997, 30.399999999999999, 32.94040502354666, 32.799999999999997, 38.239999999999995, 38.799999999999997, 29.5, 36.700000000000003, 37.5, 33.700000000000003, 39.799999999999997, 31.199999999999999, 31.800000000000001, 33.980000000000004, 33.971410356713349, 33.971410356713349, 33.971410356713349, 33.971410356713349, 30.633333333333333, 27.600000000000001, 34.200000000000003, 39.5, 34.299999999999997, 34.666666666666664, 40.81428571428571, 33.399999999999999, 34.26451529806927, 32.600000000000001, 34.26451529806927, 63, 35.766666666666666, 42.100000000000001, 34.640000000000001, 38.957142857142856, 41.369999999999997, 41.899999999999999, 42.950000000000003, 47.859999999999999, 54, 42.600000000000001, 41.74285714285714, 46.600000000000001, 35.299999999999997, 44.966666666666669, 55.119999999999997, 43.75, 39.442857142857143, 43.195637702694171, 32.333333333333336, 44.633333333333333, 43.195637702694171, 46.699999999999996, 38.600000000000001, 43.825000000000003, 34.728571428571428, 48.899999999999999, 50.107692307692311, 33.200000000000003, 43.195637702694171, 59.416666666666671, 54.5, 37.439999999999998, 44.899999999999999, 39.049999999999997, 42.75, 43.195637702694171, 37.82, 53.714285714285715, 43.475000000000001, 43.195637702694171, 45.299999999999997, 43, 43.195637702694171, 36.457142857142856, 43.859999999999999, 43.195637702694171, 52, 48.700000000000003, 41.600000000000001, 45.099999999999994, 52.600000000000001, 44.799999999999997, 40.100000000000001, 43.100000000000001, 45, 48.299999999999997, 45.631669835465843, 47.799999999999997, 41.100000000000001, 44.299999999999997, 49.899999999999999, 41.600000000000001, 50.700000000000003, 46.200000000000003, 48.600000000000001, 50.5, 45.631669835465843, 45.5, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 51.200000000000003, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 45.631669835465843, 41.5, 33.200000000000003, 34.399999999999999, 34.399999999999999, 34.399999999999999, 34.399999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [31.399999999999999, 32.700000000000003, 32.700000000000003, 32.700000000000003, 35.399999999999999, 29.399999999999999, 36, 34, 36.200000000000003, 35.5, 30.5, 28.199999999999999, 27.699999999999999, 32.899999999999999, 31.800000000000001, 25.899999999999999, 26.5, 37.399999999999999, 34.200000000000003, 32.700000000000003, 29.199999999999999, 28.199999999999999, 28.199999999999996, 28.199999999999996, 27.100000000000001, 27.100000000000001, 35.899999999999999, 30.399999999999999, 38.600000000000001, 31.100000000000001, 25.399999999999999, 31.800000000000001, 33.299999999999997, 33.299999999999997, 33.299999999999997, 33.299999999999997, 33.299999999999997, 34.700000000000003, 27.5, 27.499999999999996, 32.299999999999997, 32.299999999999997, 26.800000000000001, 25.5, 32.799999999999997, 40.5, 36.5, 33, 27, 35.600000000000001, 39, 36.319153475425971, 36.319153475425971, 36.319153475425971, 36.319153475425971, 42.899999999999999, 37.700000000000003, 26.800000000000001, 35.299999999999997, 31.853191245453736, 26.600000000000001, 25.600000000000001, 34, 31.853191245453736, 29, 32.149999999999999, 32.399999999999999, 32.899999999999999, 38.600000000000001, 38.600000000000001, 38.600000000000001, 38.600000000000001, 34.700000000000003, 40.399999999999999, 35.049999999999997, 44.600000000000001, 36, 38.100000000000001, 41.100000000000001, 39.149999999999999, 39.218023882493888, 41.899999999999999, 37.399999999999999, 39.218023882493888, 34.700000000000003, 37.100000000000001, 32.314285714285717, 39.218023882493888, 39.218023882493888, 39.218023882493888, 34.566666666666663, 38.700000000000003, 39.218023882493888, 30.630769230769232, 40.100000000000001, 33.5, 39.218023882493888, 39.218023882493888, 39.218023882493888, 39.218023882493888, 39.218023882493888, 39.218023882493888, 39.100000000000001, 39.218023882493888, 39.218023882493888, 39.218023882493888, 39.218023882493888, 39.218023882493888, 39.218023882493888, 31.299999999999997, 32.350000000000001, 31.300000000000001, 32.933789239394265, 32.799999999999997, 37.960000000000001, 39.5, 29.5, 36.700000000000003, 37.5, 33.700000000000003, 29.899999999999999, 39.700000000000003, 31.800000000000001, 33.840000000000003, 33.826066212369206, 33.826066212369206, 33.826066212369206, 33.826066212369206, 31.800000000000001, 34.200000000000003, 27.600000000000001, 39.5, 35.049999999999997, 35, 39.985714285714288, 32.799999999999997, 34.273976902191023, 32.600000000000001, 34.273976902191023, 63, 35.899999999999999, 42.100000000000001, 35, 39.342857142857142, 40.799999999999997, 42.349999999999994, 43.225000000000001, 48.719999999999999, 53.299999999999997, 42.600000000000001, 41.5, 46.600000000000001, 37.224999999999994, 44.833333333333336, 55.899999999999999, 39.157142857142851, 43.93333333333333, 43.2958482204387, 31.650000000000002, 44.166666666666671, 47.799999999999997, 43.2958482204387, 38.600000000000001, 43.100000000000001, 34.971428571428575, 48.899999999999999, 34.25, 49.092307692307692, 43.2958482204387, 59.100000000000001, 35.899999999999999, 53.299999999999997, 44.899999999999999, 38.700000000000003, 40.762500000000003, 43.2958482204387, 37.479999999999997, 54.157142857142858, 42.850000000000001, 43.2958482204387, 45.299999999999997, 42.399999999999999, 43.2958482204387, 37.871428571428574, 40.920000000000002, 43.2958482204387, 51.899999999999999, 48.200000000000003, 41.799999999999997, 44.399999999999999, 51, 44.799999999999997, 40.100000000000001, 43.399999999999999, 46, 48.299999999999997, 45.572693998257527, 46.700000000000003, 41.100000000000001, 45.200000000000003, 49.200000000000003, 40.600000000000001, 47.600000000000001, 46.200000000000003, 48.399999999999999, 50.799999999999997, 45.572693998257527, 45.5, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 51.200000000000003, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 45.572693998257527, 41.200000000000003, 33.700000000000003, 34.049999999999997, 34.049999999999997, 34.049999999999997, 34.049999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [31.399999999999999, 31.899999999999999, 31.899999999999999, 31.899999999999999, 35.200000000000003, 29.100000000000001, 35, 32.899999999999999, 35.799999999999997, 35.200000000000003, 30.800000000000001, 28.199999999999999, 27.600000000000001, 31.699999999999999, 31.199999999999999, 25.399999999999999, 25.199999999999999, 38.399999999999999, 34.299999999999997, 31.199999999999999, 29.600000000000001, 28.199999999999999, 28.200000000000003, 28.200000000000003, 27.100000000000001, 27.100000000000001, 34.399999999999999, 30.300000000000001, 40.600000000000001, 30.899999999999999, 24.800000000000001, 32.799999999999997, 33.100000000000001, 33.100000000000001, 33.100000000000001, 33.100000000000001, 33.100000000000001, 34.799999999999997, 28.5, 28.5, 33, 33, 27.199999999999999, 25, 33.700000000000003, 38.799999999999997, 36.600000000000001, 33, 26.300000000000001, 34.5, 38.5, 35.441383448301679, 35.441383448301679, 35.441383448301679, 35.441383448301679, 41.899999999999999, 36.799999999999997, 27.199999999999999, 35.299999999999997, 31.653018450409714, 26.600000000000001, 25.300000000000001, 34, 31.653018450409714, 26.800000000000001, 32.299999999999997, 32.5, 32.899999999999999, 38.5, 38.5, 38.5, 38.5, 34.799999999999997, 39.299999999999997, 35.299999999999997, 43.833333333333336, 36.899999999999999, 34.399999999999999, 41.133333333333333, 39.299999999999997, 37.725419113489487, 41.899999999999999, 37.866666666666667, 37.725419113489487, 33.700000000000003, 37.100000000000001, 31.300000000000001, 37.725419113489487, 37.725419113489487, 37.725419113489487, 34, 38.700000000000003, 37.725419113489487, 29.923076923076923, 40.100000000000001, 33.5, 37.725419113489487, 37.725419113489487, 37.725419113489487, 37.725419113489487, 37.725419113489487, 37.725419113489487, 37.725419113489487, 39.100000000000001, 37.725419113489487, 37.725419113489487, 37.725419113489487, 37.725419113489487, 37.725419113489487, 31.399999999999999, 32.399999999999999, 30.733333333333334, 32.927148534135135, 32.799999999999997, 37.68, 40, 29.5, 36.700000000000003, 37.5, 33.700000000000003, 28.600000000000001, 39, 31.800000000000001, 33.664065417824943, 33.700000000000003, 33.664065417824943, 33.664065417824943, 33.664065417824943, 31.649999999999999, 34.200000000000003, 27.600000000000001, 39.5, 35.799999999999997, 35.333333333333336, 39.157142857142858, 32.799999999999997, 34.323060988514953, 32.600000000000001, 34.323060988514953, 63, 35.633333333333333, 42.100000000000001, 35, 39.728571428571428, 39.879999999999995, 42.799999999999997, 43.5, 49.579999999999998, 52.600000000000001, 42.600000000000001, 40.06666666666667, 46.600000000000001, 39.149999999999999, 44.700000000000003, 55.899999999999999, 38.871428571428567, 44.116666666666667, 43.192221054667144, 30.966666666666669, 43.700000000000003, 44.5, 38.600000000000001, 43.192221054667144, 42.899999999999999, 35.214285714285715, 48.899999999999999, 35.299999999999997, 48.07692307692308, 43.192221054667144, 59.100000000000001, 36.479999999999997, 53.299999999999997, 44.899999999999999, 38.350000000000001, 38.774999999999999, 43.192221054667144, 37.140000000000001, 54.600000000000001, 42.225000000000001, 43.192221054667144, 45.299999999999997, 42.399999999999999, 43.192221054667144, 39.285714285714292, 37.980000000000004, 43.192221054667144, 53.299999999999997, 47.700000000000003, 42, 44.399999999999999, 50.600000000000001, 44.799999999999997, 39.700000000000003, 43.600000000000001, 45, 48.299999999999997, 45.444884460560289, 45.200000000000003, 41.100000000000001, 45.700000000000003, 49.799999999999997, 47.899999999999999, 46.200000000000003, 40, 48.700000000000003, 50.399999999999999, 45.444884460560289, 45.5, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 51.200000000000003, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 45.444884460560289, 41.100000000000001, 32.700000000000003, 33.700000000000003, 33.700000000000003, 33.700000000000003, 33.700000000000003],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [31.899999999999999, 31.600000000000001, 31.600000000000005, 31.600000000000005, 35.899999999999999, 29.199999999999999, 34.399999999999999, 31.399999999999999, 34.700000000000003, 33.799999999999997, 29.699999999999999, 28.5, 27.399999999999999, 34.5, 29.699999999999999, 24.899999999999999, 23.199999999999999, 37.299999999999997, 35.600000000000001, 30.399999999999999, 28.800000000000001, 28.699999999999999, 28.699999999999999, 28.699999999999999, 27.399999999999999, 27.399999999999999, 36, 30.600000000000001, 40.399999999999999, 30.399999999999999, 24.199999999999999, 31.399999999999999, 32.600000000000001, 32.600000000000001, 32.600000000000001, 32.600000000000001, 32.600000000000001, 35.899999999999999, 27, 27, 32.700000000000003, 32.700000000000003, 26.100000000000001, 26, 33.100000000000001, 36.200000000000003, 37.899999999999999, 33, 25.899999999999999, 34.200000000000003, 36.899999999999999, 34.487848978633913, 34.487848978633913, 34.487848978633913, 34.487848978633913, 41.399999999999999, 37.200000000000003, 27.5, 35.299999999999997, 31.782997781851424, 26.600000000000001, 25.399999999999999, 34, 31.782997781851424, 27.300000000000001, 32.5, 33.600000000000001, 32.899999999999999, 39.100000000000001, 39.100000000000001, 39.100000000000001, 39.100000000000001, 35.899999999999999, 38.799999999999997, 35.5, 43.066666666666663, 36.5, 30.699999999999999, 41.166666666666671, 38.766666666666666, 36.132163895954555, 41.899999999999999, 38.333333333333329, 36.132163895954555, 32.700000000000003, 37.100000000000001, 30.633333333333333, 36.132163895954555, 36.132163895954555, 36.132163895954555, 33.43333333333333, 38.700000000000003, 36.132163895954555, 29.215384615384615, 40.100000000000001, 33.5, 36.132163895954555, 36.132163895954555, 36.132163895954555, 36.132163895954555, 36.132163895954555, 36.132163895954555, 36.132163895954555, 39.100000000000001, 36.132163895954555, 36.132163895954555, 36.132163895954555, 36.132163895954555, 36.132163895954555, 31.399999999999999, 32.399999999999999, 30.166666666666668, 32.920628175473382, 32.799999999999997, 37.399999999999999, 40.799999999999997, 29.5, 36.700000000000003, 37.5, 33.700000000000003, 27.300000000000001, 38.200000000000003, 31.800000000000001, 33.512836004574289, 33.700000000000003, 33.512836004574289, 33.512836004574289, 33.512836004574289, 31.5, 34.200000000000003, 27.600000000000001, 39.5, 36.549999999999997, 35.666666666666664, 38.328571428571429, 32.799999999999997, 34.374475548498623, 32.600000000000001, 34.374475548498623, 63, 35.366666666666667, 42.100000000000001, 35, 40.114285714285714, 38.960000000000001, 42.766666666666666, 50.439999999999998, 43.5, 51.899999999999999, 42.600000000000001, 38.633333333333333, 46.600000000000001, 41.075000000000003, 42.633333333333333, 55.899999999999999, 38.585714285714282, 42.964465282391458, 44.299999999999997, 30.283333333333335, 43.700000000000003, 41.199999999999996, 38.600000000000001, 42.964465282391458, 42.700000000000003, 35.457142857142863, 48.899999999999999, 35.299999999999997, 47.061538461538461, 42.964465282391458, 59.100000000000001, 37.059999999999995, 53.299999999999997, 44.899999999999999, 38, 36.787499999999994, 42.964465282391458, 36.799999999999997, 54.600000000000001, 41.600000000000001, 42.964465282391458, 45.299999999999997, 42.399999999999999, 42.964465282391458, 40.700000000000003, 35.039999999999999, 42.964465282391458, 53.299999999999997, 47.200000000000003, 41.100000000000001, 44.399999999999999, 49.700000000000003, 44.799999999999997, 39.5, 43.299999999999997, 44.700000000000003, 48.299999999999997, 44.600000000000001, 44.906152172118965, 41.100000000000001, 42.200000000000003, 49.399999999999999, 48.5, 46.200000000000003, 38, 48.299999999999997, 49.899999999999999, 44.906152172118965, 45.5, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 51.200000000000003, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 44.906152172118965, 41.200000000000003, 33.299999999999997, 34, 34, 34, 34],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [31.800000000000001, 32.399999999999999, 32.399999999999999, 32.399999999999999, 35.200000000000003, 28.699999999999999, 32.899999999999999, 32.700000000000003, 34.700000000000003, 33.5, 30.800000000000001, 28.100000000000001, 27.199999999999999, 35.399999999999999, 30.199999999999999, 25, 25, 35.700000000000003, 35.100000000000001, 30.300000000000001, 30, 28.199999999999999, 28.199999999999999, 28.199999999999999, 27.300000000000001, 27.300000000000001, 35.799999999999997, 29.600000000000001, 41.299999999999997, 29.699999999999999, 24.600000000000001, 30.600000000000001, 33.700000000000003, 33.700000000000003, 33.700000000000003, 33.700000000000003, 33.700000000000003, 34.600000000000001, 27.600000000000001, 27.600000000000001, 33.100000000000001, 33.100000000000001, 26.100000000000001, 26.100000000000001, 30.100000000000001, 35, 36.399999999999999, 33, 25.699999999999999, 33, 36.799999999999997, 33.607791657903761, 33.607791657903761, 33.607791657903761, 33.607791657903761, 41.899999999999999, 37.5, 27.800000000000001, 35.299999999999997, 31.854106550897324, 26.600000000000001, 25.199999999999999, 34, 31.854106550897324, 27.699999999999999, 32.700000000000003, 34.399999999999999, 32.899999999999999, 38.5, 38.5, 38.5, 38.5, 34.600000000000001, 38.399999999999999, 35.700000000000003, 42.299999999999997, 36.399999999999999, 30.699999999999999, 41.200000000000003, 38.233333333333334, 36.085740198201378, 41.899999999999999, 38.799999999999997, 36.085740198201378, 31.699999999999999, 37.100000000000001, 29.966666666666669, 36.085740198201378, 32.866666666666667, 36.085740198201378, 36.085740198201378, 38.700000000000003, 36.085740198201378, 28.507692307692309, 40.100000000000001, 33.5, 36.085740198201378, 36.085740198201378, 36.085740198201378, 36.085740198201378, 36.085740198201378, 36.085740198201378, 36.085740198201378, 39.100000000000001, 36.085740198201378, 36.085740198201378, 36.085740198201378, 36.085740198201378, 36.085740198201378, 31.399999999999999, 32.399999999999999, 29.600000000000001, 32.921184406858274, 32.799999999999997, 37.399999999999999, 42, 29.5, 36.700000000000003, 37.5, 33.700000000000003, 26, 38.600000000000001, 31.800000000000001, 33.457624994082913, 33.700000000000003, 33.457624994082913, 33.457624994082913, 33.457624994082913, 31.699999999999999, 34.200000000000003, 27.600000000000001, 39.5, 37.299999999999997, 36, 37.5, 32.799999999999997, 34.427385367407993, 32.600000000000001, 34.427385367407993, 63, 35.100000000000001, 42.100000000000001, 35, 40.5, 38.039999999999999, 42.733333333333334, 51.299999999999997, 43.5, 51.200000000000003, 42.600000000000001, 37.200000000000003, 46.600000000000001, 43, 40.56666666666667, 55.899999999999999, 38.299999999999997, 42.826001705393381, 47.299999999999997, 29.600000000000001, 43.700000000000003, 37.899999999999999, 38.600000000000001, 42.826001705393381, 42.5, 35.700000000000003, 48.899999999999999, 35.299999999999997, 46.046153846153842, 42.826001705393381, 59.100000000000001, 37.640000000000001, 53.299999999999997, 38, 44.899999999999999, 34.799999999999997, 42.826001705393381, 36.799999999999997, 54.600000000000001, 41.600000000000001, 42.826001705393381, 45.299999999999997, 42.399999999999999, 42.826001705393381, 40.700000000000003, 32.100000000000001, 42.826001705393381, 53.899999999999999, 46.700000000000003, 41.299999999999997, 44.566666666666663, 50.399999999999999, 44.799999999999997, 39.700000000000003, 42.399999999999999, 45.399999999999999, 48.299999999999997, 42.600000000000001, 44.5882147974934, 41.100000000000001, 43.700000000000003, 48.899999999999999, 46, 46.200000000000003, 38.600000000000001, 48, 49.200000000000003, 44.5882147974934, 45.5, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 51.200000000000003, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 44.5882147974934, 41.399999999999999, 32.5, 34.299999999999997, 34.299999999999997, 34.299999999999997, 34.299999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [31.699999999999999, 31.199999999999999, 31.199999999999999, 31.199999999999999, 34.600000000000001, 31, 33.100000000000001, 31.199999999999999, 34.299999999999997, 32.799999999999997, 30.199999999999999, 29.199999999999999, 27.199999999999999, 34.200000000000003, 28.800000000000001, 25.300000000000001, 23.199999999999999, 35.299999999999997, 34.5, 30.800000000000001, 29.300000000000001, 27.699999999999999, 27.700000000000003, 27.700000000000003, 27.699999999999999, 27.699999999999996, 34.799999999999997, 30, 40.299999999999997, 28.899999999999999, 24.399999999999999, 30.800000000000001, 32.799999999999997, 32.799999999999997, 32.799999999999997, 32.799999999999997, 32.799999999999997, 35, 27.699999999999999, 27.699999999999999, 33.100000000000001, 33.100000000000001, 26.100000000000001, 26.600000000000001, 30.100000000000001, 34.5, 35.899999999999999, 33, 26, 33.5, 36.799999999999997, 33.4074892280602, 33.4074892280602, 33.4074892280602, 33.4074892280602, 41.899999999999999, 37.700000000000003, 27.800000000000001, 35.299999999999997, 31.890378875923211, 26.600000000000001, 34, 25.300000000000001, 31.890378875923211, 29.699999999999999, 32.700000000000003, 30, 32.899999999999999, 38.200000000000003, 38.200000000000003, 38.200000000000003, 38.200000000000003, 35, 37.600000000000001, 36.25, 41.766666666666666, 34.899999999999999, 30.699999999999999, 41.200000000000003, 37.700000000000003, 36.002300872379251, 41.899999999999999, 38.799999999999997, 36.002300872379251, 30.699999999999999, 37.100000000000001, 29.300000000000001, 36.002300872379251, 32.299999999999997, 36.002300872379251, 36.002300872379251, 38.700000000000003, 36.002300872379251, 27.800000000000001, 40.100000000000001, 33.5, 36.002300872379251, 36.002300872379251, 36.002300872379251, 36.002300872379251, 36.002300872379251, 36.002300872379251, 36.002300872379251, 39.100000000000001, 36.002300872379251, 36.002300872379251, 36.002300872379251, 36.002300872379251, 36.002300872379251, 31.399999999999999, 32.399999999999999, 29.600000000000001, 32.920573148640891, 32.799999999999997, 37.399999999999999, 40.899999999999999, 29.5, 36.700000000000003, 37.5, 33.700000000000003, 26, 38.600000000000001, 31.800000000000001, 33.700000000000003, 33.482059835525241, 33.482059835525241, 33.482059835525241, 33.482059835525241, 31.899999999999999, 34.200000000000003, 27.600000000000001, 39.5, 37.299999999999997, 36, 37.5, 32.799999999999997, 34.430199056156937, 32.600000000000001, 34.430199056156937, 63, 35.100000000000001, 42.100000000000001, 35, 40.5, 37.120000000000005, 42.700000000000003, 51.299999999999997, 43.5, 50.5, 42.600000000000001, 37.200000000000003, 46.600000000000001, 43, 38.5, 55.899999999999999, 38.299999999999997, 42.705077641018377, 50.299999999999997, 29.600000000000001, 43.700000000000003, 37.899999999999999, 38.600000000000001, 42.705077641018377, 42.5, 35.700000000000003, 48.899999999999999, 35.299999999999997, 45.030769230769231, 42.705077641018377, 59.100000000000001, 38.219999999999999, 53.299999999999997, 38, 44.899999999999999, 34.799999999999997, 42.705077641018377, 36.799999999999997, 54.600000000000001, 41.600000000000001, 42.705077641018377, 45.299999999999997, 42.399999999999999, 42.705077641018377, 40.700000000000003, 32.100000000000001, 42.705077641018377, 53.5, 46.049999999999997, 42.899999999999999, 44.733333333333334, 51.299999999999997, 44.799999999999997, 39.700000000000003, 41.600000000000001, 45.700000000000003, 48.299999999999997, 41.600000000000001, 44.196336069176056, 41.100000000000001, 41.899999999999999, 48.200000000000003, 45.700000000000003, 46.200000000000003, 38.799999999999997, 48.200000000000003, 49.799999999999997, 44.196336069176056, 45.5, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 51.200000000000003, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 44.196336069176056, 41.5, 31.699999999999999, 34.299999999999997, 34.299999999999997, 34.299999999999997, 34.299999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [31.699999999999999, 30.699999999999999, 30.699999999999996, 30.699999999999996, 35.200000000000003, 31.399999999999999, 33.600000000000001, 31.699999999999999, 34.899999999999999, 34.700000000000003, 29.800000000000001, 26, 26, 33.399999999999999, 28.800000000000001, 26.199999999999999, 23.199999999999999, 36, 35.700000000000003, 30.699999999999999, 28.899999999999999, 27.5, 27.5, 27.5, 27.100000000000001, 27.100000000000001, 34.600000000000001, 29.699999999999999, 40.5, 29.5, 24, 29.199999999999999, 32.600000000000001, 32.600000000000001, 32.600000000000001, 32.600000000000001, 32.600000000000001, 34.799999999999997, 27.699999999999999, 27.699999999999999, 33.100000000000001, 33.100000000000001, 26.100000000000001, 25.600000000000001, 29.399999999999999, 35, 34.5, 33, 25.850000000000001, 33.5, 36.799999999999997, 33.355863898328764, 33.355863898328764, 33.355863898328764, 33.355863898328764, 41.899999999999999, 36, 27.800000000000001, 35.299999999999997, 31.554996960759986, 26.600000000000001, 34, 24.399999999999999, 31.554996960759986, 29, 32.700000000000003, 25.100000000000001, 32.899999999999999, 37.100000000000001, 37.100000000000001, 37.100000000000001, 37.100000000000001, 34.799999999999997, 37.600000000000001, 36.799999999999997, 41.233333333333334, 35, 30.699999999999999, 41.200000000000003, 37.700000000000003, 36.017395762211557, 41.899999999999999, 38.799999999999997, 36.017395762211557, 30.699999999999999, 37.100000000000001, 29.300000000000001, 36.017395762211557, 32.299999999999997, 36.017395762211557, 36.017395762211557, 38.700000000000003, 36.017395762211557, 27.800000000000001, 40.100000000000001, 33.5, 36.017395762211557, 36.017395762211557, 36.017395762211557, 36.017395762211557, 36.017395762211557, 36.017395762211557, 36.017395762211557, 39.100000000000001, 36.017395762211557, 36.017395762211557, 36.017395762211557, 36.017395762211557, 36.017395762211557, 31.399999999999999, 32.399999999999999, 29.600000000000001, 32.919113482451579, 32.799999999999997, 37.399999999999999, 40.899999999999999, 29.5, 36.700000000000003, 37.5, 33.700000000000003, 26, 38.600000000000001, 31.800000000000001, 33.700000000000003, 33.509273634836852, 33.509273634836852, 33.509273634836852, 33.509273634836852, 31.899999999999999, 34.200000000000003, 27.600000000000001, 39.5, 37.299999999999997, 36, 37.5, 32.799999999999997, 34.434921529465441, 32.600000000000001, 34.434921529465441, 63, 35.100000000000001, 42.100000000000001, 35, 40.5, 36.200000000000003, 42.700000000000003, 51.299999999999997, 43.5, 50.5, 42.600000000000001, 37.200000000000003, 46.600000000000001, 43, 38.5, 55.899999999999999, 38.299999999999997, 42.615252674850993, 50.299999999999997, 29.600000000000001, 37.899999999999999, 43.700000000000003, 38.600000000000001, 42.615252674850993, 42.5, 35.700000000000003, 48.899999999999999, 35.299999999999997, 44.015384615384619, 42.615252674850993, 59.100000000000001, 38.799999999999997, 53.299999999999997, 38, 44.899999999999999, 34.799999999999997, 42.615252674850993, 36.799999999999997, 54.600000000000001, 41.600000000000001, 42.615252674850993, 45.299999999999997, 42.399999999999999, 42.615252674850993, 40.700000000000003, 32.100000000000001, 42.615252674850993, 48.899999999999999, 45.399999999999999, 42.299999999999997, 44.899999999999999, 53.5, 44.799999999999997, 40.200000000000003, 43.799999999999997, 47.299999999999997, 48.299999999999997, 43.600000000000001, 41.100000000000001, 44.842332386292348, 39.600000000000001, 48.200000000000003, 43.5, 46.200000000000003, 38.899999999999999, 49.200000000000003, 50.349999999999994, 44.842332386292348, 45.5, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 51.200000000000003, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 44.842332386292348, 39.700000000000003, 31.699999999999999, 34.299999999999997, 34.299999999999997, 34.299999999999997, 34.299999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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
            "title": "Gini income inequality index",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD"],
          "z": [31.699999999999999, 30.699999999999999, 30.699999999999999, 30.699999999999999, 35.200000000000003, 31.399999999999999, 33.600000000000001, 31.699999999999999, 34.899999999999999, 34.700000000000003, 29.800000000000001, 26, 26, 33.399999999999999, 28.800000000000001, 26.199999999999999, 23.199999999999999, 36, 35.700000000000003, 30.699999999999999, 28.899999999999999, 27.5, 27.5, 27.5, 27.100000000000001, 27.100000000000005, 34.600000000000001, 29.699999999999999, 40.5, 29.5, 24, 29.199999999999999, 32.600000000000001, 32.600000000000001, 32.600000000000001, 32.600000000000001, 32.600000000000001, 34.200000000000003, 27.699999999999999, 27.699999999999999, 33.100000000000001, 33.100000000000001, 26.100000000000001, 25.600000000000001, 29.399999999999999, 35, 34.200000000000003, 33, 25.699999999999999, 33.5, 36.799999999999997, 33.291538857863138, 33.291538857863138, 33.291538857863138, 33.291538857863138, 41.899999999999999, 36, 27.800000000000001, 35.299999999999997, 31.702843198521592, 26.600000000000001, 34, 24.399999999999999, 31.702843198521592, 29, 32.700000000000003, 27.899999999999999, 32.899999999999999, 37.100000000000001, 37.100000000000001, 37.100000000000001, 37.100000000000001, 34.200000000000003, 37.899999999999999, 36.799999999999997, 40.700000000000003, 35.100000000000001, 30.699999999999999, 41.200000000000003, 37.700000000000003, 36.031201094450722, 41.899999999999999, 38.799999999999997, 36.031201094450722, 30.699999999999999, 37.100000000000001, 29.300000000000001, 36.031201094450722, 32.299999999999997, 36.031201094450722, 36.031201094450722, 38.700000000000003, 36.031201094450722, 27.800000000000001, 40.100000000000001, 33.5, 36.031201094450722, 36.031201094450722, 36.031201094450722, 36.031201094450722, 36.031201094450722, 36.031201094450722, 36.031201094450722, 39.100000000000001, 36.031201094450722, 36.031201094450722, 36.031201094450722, 36.031201094450722, 36.031201094450722, 31.399999999999999, 32.399999999999999, 29.600000000000001, 32.917916690963821, 32.799999999999997, 37.399999999999999, 40.899999999999999, 29.5, 36.700000000000003, 37.5, 33.700000000000003, 26, 38.600000000000001, 31.800000000000001, 33.700000000000003, 33.517802578000818, 33.517802578000818, 33.517802578000818, 33.517802578000818, 31.899999999999999, 34.200000000000003, 27.600000000000001, 39.5, 37.299999999999997, 36, 37.5, 32.799999999999997, 34.441762964398549, 32.600000000000001, 34.441762964398549, 63, 35.100000000000001, 42.100000000000001, 35, 40.5, 38.700000000000003, 42.700000000000003, 51.299999999999997, 43.5, 50.5, 42.600000000000001, 37.200000000000003, 46.600000000000001, 43, 38.5, 55.899999999999999, 42.856435956595035, 38.299999999999997, 50.299999999999997, 29.600000000000001, 37.899999999999999, 43.700000000000003, 38.600000000000001, 42.856435956595035, 42.5, 35.700000000000003, 48.899999999999999, 35.299999999999997, 43, 42.856435956595035, 59.100000000000001, 38.799999999999997, 53.299999999999997, 38, 44.899999999999999, 34.799999999999997, 42.856435956595035, 36.799999999999997, 54.600000000000001, 41.600000000000001, 42.856435956595035, 45.299999999999997, 42.399999999999999, 42.856435956595035, 40.700000000000003, 32.100000000000001, 42.856435956595035, 52.899999999999999, 45.399999999999999, 42, 44.899999999999999, 51.5, 44.799999999999997, 40.799999999999997, 40.200000000000003, 45.799999999999997, 48.299999999999997, 40.899999999999999, 41.100000000000001, 38.5, 43.509883981305123, 48.200000000000003, 42.899999999999999, 46.200000000000003, 39, 48.700000000000003, 50.899999999999999, 43.509883981305123, 45.5, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 51.200000000000003, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 43.509883981305123, 39.799999999999997, 31.699999999999999, 34.299999999999997, 34.299999999999997, 34.299999999999997, 34.299999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands"],
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

  
