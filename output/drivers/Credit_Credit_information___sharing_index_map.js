(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Credit_Credit_information___sharing_index_map') 

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
    "b55c15855e3e": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c15855e3e",
  "attrs": {
    "b55c15855e3e": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 20,
      "colorbar": {
        "title": "Credit information sharing"
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
        "title": "Credit information sharing",
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
      "z": [8, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 3, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 6, 8, 6, 7, 5, 6, 6, 6, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 5, 8, 1.0000000000000001e-05, 7, 5, 5.8633321446641808, 5.8633321446641808, 1.0000000000000001e-05, 5.8633321446641808, 6, 7, 7, 7, 5.7885916909663093, 6, 6, 1.0000000000000001e-05, 5, 5.7885916909663093, 8, 6, 6, 6, 6.0051970040400553, 7, 6.0051970040400553, 7, 6, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.0807078691372105, 5, 1.0000000000000001e-05, 5, 5, 3.0807078691372105, 3.0807078691372105, 3, 1.0000000000000001e-05, 3.0807078691372105, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 1.0000000000000001e-05, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 7, 1.0000000000000001e-05, 6, 6, 7, 6, 6, 6, 5, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.5697935847169944, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 4, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0608978519931647, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 7, 6, 1.0000000000000001e-05, 1.0608978519931647, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0608978519931647, 5, 1.0000000000000001e-05, 1.0608978519931647, 7, 8, 8, 7, 7, 7, 7, 8, 8, 8, 6.8207470085477384, 7, 8, 1.0000000000000001e-05, 8, 7, 8, 7, 7, 7, 8, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8207470085477384, 6.8207470085477384, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8207470085477384, 1.0000000000000001e-05, 6.8207470085477384, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8207470085477384, 6.8207470085477384, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 8, 8, 7, 7.0000000000000009, 7.0000000000000009, 7.0000000000000009, 7],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 3, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 6, 8, 6, 7, 5, 6, 6, 6, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 5, 8, 1.0000000000000001e-05, 7, 5, 5.8633321446641808, 5.8633321446641808, 1.0000000000000001e-05, 5.8633321446641808, 6, 7, 7, 7, 5.7885916909663093, 6, 6, 1.0000000000000001e-05, 5, 5.7885916909663093, 8, 6, 6, 6, 6.0051970040400553, 7, 6.0051970040400553, 7, 6, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.0807078691372105, 5, 1.0000000000000001e-05, 5, 5, 3.0807078691372105, 3.0807078691372105, 3, 1.0000000000000001e-05, 3.0807078691372105, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 1.0000000000000001e-05, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 3.0807078691372105, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 7, 1.0000000000000001e-05, 6, 6, 7, 6, 6, 6, 5, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.5697935847169944, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 4, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0608978519931647, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 7, 6, 1.0000000000000001e-05, 1.0608978519931647, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0608978519931647, 5, 1.0000000000000001e-05, 1.0608978519931647, 7, 8, 8, 7, 7, 7, 7, 8, 8, 8, 6.8207470085477384, 7, 8, 1.0000000000000001e-05, 8, 7, 8, 7, 7, 7, 8, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8207470085477384, 6.8207470085477384, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8207470085477384, 1.0000000000000001e-05, 6.8207470085477384, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8207470085477384, 6.8207470085477384, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 6.8207470085477384, 8, 8, 7, 7.0000000000000009, 7.0000000000000009, 7.0000000000000009, 7],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6.0000000000000009, 6.0000000000000009, 7, 1.0000000000000001e-05, 7, 3, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 6, 8, 6, 7, 5, 6, 6, 6, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 5, 8, 1.0000000000000001e-05, 7, 5, 5.862482603116745, 5.862482603116745, 1.0000000000000001e-05, 5.862482603116745, 6, 7, 7, 7, 5.7811480627328162, 6, 6, 1.0000000000000001e-05, 5, 5.7811480627328162, 8, 6, 6, 6, 6.0052066283483585, 7, 6.0052066283483585, 7, 6, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.0882633754202815, 5, 1.0000000000000001e-05, 5, 5, 3.0882633754202815, 3.0882633754202815, 3, 1.0000000000000001e-05, 3.0882633754202815, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 3.0882633754202815, 3.0882633754202815, 3.0882633754202815, 1.0000000000000001e-05, 3.0882633754202815, 3.0882633754202815, 3.0882633754202815, 3.0882633754202815, 3.0882633754202815, 3.0882633754202815, 3.0882633754202815, 3.0882633754202815, 3.0882633754202815, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 7, 1.0000000000000001e-05, 6, 6, 7, 6, 6, 6, 5, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.5556844516564901, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 4, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0571751673869079, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 7, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0571751673869079, 1.0000000000000001e-05, 6, 1.0571751673869079, 5, 1.0000000000000001e-05, 1.0571751673869079, 7, 8, 8, 7, 7, 7, 7, 8, 8, 8, 6.8223110467853996, 7, 8, 1.0000000000000001e-05, 8, 7, 8, 7, 7, 7, 8, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8223110467853996, 6.8223110467853996, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8223110467853996, 1.0000000000000001e-05, 6.8223110467853996, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8223110467853996, 6.8223110467853996, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8223110467853996, 6.8223110467853996, 6.8223110467853996, 6.8223110467853996, 6.8223110467853996, 6.8223110467853996, 6.8223110467853996, 6.8223110467853996, 6.8223110467853996, 6.8223110467853996, 6.8223110467853996, 6.8223110467853996, 6.8223110467853996, 6.8223110467853996, 6.8223110467853996, 8, 8, 7, 6.9999999999999991, 6.9999999999999991, 6.9999999999999991, 7],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 5.9999999999999991, 5.9999999999999991, 7, 1.0000000000000001e-05, 7, 3, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 6, 8, 6, 7, 5, 6, 6, 6, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 5, 8, 1.0000000000000001e-05, 7, 5, 5.8616327324325317, 5.8616327324325317, 1.0000000000000001e-05, 5.8616327324325317, 6, 7, 7, 7, 5.7738737976167132, 6, 6, 1.0000000000000001e-05, 5, 5.7738737976167132, 8, 6, 6, 6, 6.005198799999877, 7, 6.005198799999877, 7, 6, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.096137973009442, 5, 1.0000000000000001e-05, 5, 5, 3.096137973009442, 3.096137973009442, 3, 1.0000000000000001e-05, 3.096137973009442, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 3.096137973009442, 3.096137973009442, 3.096137973009442, 1.0000000000000001e-05, 3.096137973009442, 3.096137973009442, 3.096137973009442, 3.096137973009442, 3.096137973009442, 3.096137973009442, 3.096137973009442, 3.096137973009442, 3.096137973009442, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 7, 1.0000000000000001e-05, 6, 6, 7, 6, 6, 6, 5, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.541722748457085, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 4, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0534581543335477, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 7, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0534581543335477, 1.0000000000000001e-05, 6, 1.0534581543335477, 5, 1.0000000000000001e-05, 1.0534581543335477, 7, 8, 8, 7, 7, 7, 7, 8, 8, 8, 6.824113811200859, 7, 8, 1.0000000000000001e-05, 8, 7, 8, 7, 7, 7, 8, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.824113811200859, 6.824113811200859, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.824113811200859, 1.0000000000000001e-05, 6.824113811200859, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.824113811200859, 6.824113811200859, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.824113811200859, 6.824113811200859, 6.824113811200859, 6.824113811200859, 6.824113811200859, 6.824113811200859, 6.824113811200859, 6.824113811200859, 6.824113811200859, 6.824113811200859, 6.824113811200859, 6.824113811200859, 6.824113811200859, 6.824113811200859, 6.824113811200859, 8, 8, 7, 7.0000000000000009, 7.0000000000000009, 7.0000000000000009, 7],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 3, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 6, 8, 6, 7, 5, 6, 6, 6, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 5, 8, 1.0000000000000001e-05, 7, 5, 5.8604781316539087, 5.8604781316539087, 1.0000000000000001e-05, 5.8604781316539087, 6, 7, 7, 7, 5.7671952986169703, 6, 6, 1.0000000000000001e-05, 5, 5.7671952986169703, 8, 6, 6, 6, 6.0052031407177502, 7, 6.0052031407177502, 7, 6, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.104502461883448, 5, 1.0000000000000001e-05, 5, 5, 3.104502461883448, 3.104502461883448, 3, 1.0000000000000001e-05, 3.104502461883448, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 3.104502461883448, 3.104502461883448, 3.104502461883448, 1.0000000000000001e-05, 3.104502461883448, 3.104502461883448, 3.104502461883448, 3.104502461883448, 3.104502461883448, 3.104502461883448, 3.104502461883448, 3.104502461883448, 3.104502461883448, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 7, 1.0000000000000001e-05, 6, 6, 7, 6, 6, 5, 6, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.5279283143730575, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 4, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.050322661380706, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 7, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.050322661380706, 1.0000000000000001e-05, 6, 1.050322661380706, 5, 1.0000000000000001e-05, 1.050322661380706, 7, 8, 8, 7, 7, 7, 7, 8, 8, 8, 6.8250306121260769, 7, 8, 1.0000000000000001e-05, 8, 7, 8, 7, 7, 7, 8, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8250306121260769, 6.8250306121260769, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8250306121260769, 1.0000000000000001e-05, 6.8250306121260769, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8250306121260769, 6.8250306121260769, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8250306121260769, 6.8250306121260769, 6.8250306121260769, 6.8250306121260769, 6.8250306121260769, 6.8250306121260769, 6.8250306121260769, 6.8250306121260769, 6.8250306121260769, 6.8250306121260769, 6.8250306121260769, 6.8250306121260769, 6.8250306121260769, 6.8250306121260769, 6.8250306121260769, 8, 8, 7, 7, 7, 7, 7],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 3, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 6, 8, 6, 7, 5, 6, 6, 6, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7.0000000000000009, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 5, 8, 1.0000000000000001e-05, 7, 5, 5.8595073784575096, 5.8595073784575096, 1.0000000000000001e-05, 5.8595073784575096, 6, 7, 7, 7, 5.7610924513813195, 6, 6, 1.0000000000000001e-05, 5, 5.7610924513813195, 8, 6, 6, 6, 6.0052206319543915, 7, 6.0052206319543915, 7, 6, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.1128862097031615, 5, 1.0000000000000001e-05, 5, 5, 3.1128862097031615, 3.1128862097031615, 3, 1.0000000000000001e-05, 3.1128862097031615, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 3.1128862097031615, 3.1128862097031615, 3.1128862097031615, 1.0000000000000001e-05, 3.1128862097031615, 3.1128862097031615, 3.1128862097031615, 3.1128862097031615, 3.1128862097031615, 3.1128862097031615, 3.1128862097031615, 3.1128862097031615, 3.1128862097031615, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 7, 1.0000000000000001e-05, 6, 6, 7, 6, 6, 5, 6, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.5135591993547015, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 4, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0473704122919254, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 7, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0473704122919254, 1.0000000000000001e-05, 6, 1.0473704122919254, 5, 1.0000000000000001e-05, 1.0473704122919254, 7, 8, 8, 7, 7, 7, 7, 8, 8, 8, 6.8257386905062605, 7, 8, 1.0000000000000001e-05, 8, 7, 8, 7, 7, 7, 8, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8257386905062605, 6.8257386905062605, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8257386905062605, 1.0000000000000001e-05, 6.8257386905062605, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8257386905062605, 6.8257386905062605, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8257386905062605, 6.8257386905062605, 6.8257386905062605, 6.8257386905062605, 6.8257386905062605, 6.8257386905062605, 6.8257386905062605, 6.8257386905062605, 6.8257386905062605, 6.8257386905062605, 6.8257386905062605, 6.8257386905062605, 6.8257386905062605, 6.8257386905062605, 6.8257386905062605, 8, 8, 7, 7.0000000000000009, 7.0000000000000009, 7.0000000000000009, 7],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 3, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 6, 8, 6, 7, 5, 6, 6, 6, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7.0000000000000009, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 5, 8, 1.0000000000000001e-05, 7, 5, 5.8596894370349837, 5.8596894370349837, 1.0000000000000001e-05, 5.8596894370349837, 6, 7, 7, 7, 5.7556600384781333, 6, 6, 1.0000000000000001e-05, 5.7556600384781333, 5, 8, 6, 6, 6, 6.0052250924593107, 7, 6.0052250924593107, 7, 6, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.1225666911312864, 5, 1.0000000000000001e-05, 5, 5, 3.1225666911312864, 3.1225666911312864, 3, 1.0000000000000001e-05, 3.1225666911312864, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 3.1225666911312864, 3.1225666911312864, 3.1225666911312864, 1.0000000000000001e-05, 3.1225666911312864, 3.1225666911312864, 3.1225666911312864, 3.1225666911312864, 3.1225666911312864, 3.1225666911312864, 3.1225666911312864, 3.1225666911312864, 3.1225666911312864, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 7, 1.0000000000000001e-05, 6, 6, 7, 6, 6, 5, 6, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.4979709531672103, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 4, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0441203058999202, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 7, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0441203058999202, 1.0000000000000001e-05, 6, 1.0441203058999202, 5, 1.0000000000000001e-05, 1.0441203058999202, 7, 8, 8, 7, 7, 7, 7, 8, 8, 8, 6.8263498301736911, 7, 8, 1.0000000000000001e-05, 8, 7, 8, 7, 7, 7, 8, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8263498301736911, 6.8263498301736911, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8263498301736911, 1.0000000000000001e-05, 6.8263498301736911, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8263498301736911, 6.8263498301736911, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8263498301736911, 6.8263498301736911, 6.8263498301736911, 6.8263498301736911, 6.8263498301736911, 6.8263498301736911, 6.8263498301736911, 6.8263498301736911, 6.8263498301736911, 6.8263498301736911, 6.8263498301736911, 6.8263498301736911, 6.8263498301736911, 6.8263498301736911, 6.8263498301736911, 8, 8, 7, 7, 7, 7, 7],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 3, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 6, 8, 6, 7, 5, 6, 6.0000000000000009, 6.0000000000000009, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 5, 8, 1.0000000000000001e-05, 7, 5, 5.8570946377698139, 1.0000000000000001e-05, 5.8570946377698139, 5.8570946377698139, 6, 7, 7, 7, 5.7499591023221912, 6, 6, 1.0000000000000001e-05, 5.7499591023221912, 5, 8, 6, 6, 6, 6.0052104536669546, 7, 6.0052104536669546, 7, 6, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.1312331485280809, 5, 1.0000000000000001e-05, 5, 5, 3.1312331485280809, 3.1312331485280809, 3, 1.0000000000000001e-05, 3.1312331485280809, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 3.1312331485280809, 3.1312331485280809, 3.1312331485280809, 1.0000000000000001e-05, 3.1312331485280809, 3.1312331485280809, 3.1312331485280809, 3.1312331485280809, 3.1312331485280809, 3.1312331485280809, 3.1312331485280809, 3.1312331485280809, 3.1312331485280809, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 7, 1.0000000000000001e-05, 6, 6, 7, 6, 6, 5, 6, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.4815313838032493, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 4, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0414573032417949, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0414573032417949, 1.0000000000000001e-05, 6, 1.0414573032417949, 5, 1.0000000000000001e-05, 1.0414573032417949, 7, 8, 8, 7, 7, 7, 7, 8, 8, 8, 6.8269355626554722, 7, 8, 1.0000000000000001e-05, 8, 7, 8, 7, 7, 7, 8, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8269355626554722, 6.8269355626554722, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8269355626554722, 1.0000000000000001e-05, 6.8269355626554722, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8269355626554722, 6.8269355626554722, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8269355626554722, 6.8269355626554722, 6.8269355626554722, 6.8269355626554722, 6.8269355626554722, 6.8269355626554722, 6.8269355626554722, 6.8269355626554722, 6.8269355626554722, 6.8269355626554722, 6.8269355626554722, 6.8269355626554722, 6.8269355626554722, 6.8269355626554722, 6.8269355626554722, 8, 8, 7, 7, 7, 7, 7],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 3, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 6, 8, 6, 7, 5, 6, 6, 6, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 5, 8, 1.0000000000000001e-05, 7, 5, 5.8552474704259714, 1.0000000000000001e-05, 5.8552474704259714, 5.8552474704259714, 6, 7, 7, 7, 5.743190791108769, 6, 6, 1.0000000000000001e-05, 5.743190791108769, 5, 8, 6, 6, 6, 6.0052235052232072, 7, 6.0052235052232072, 7, 6, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.1363927565013707, 5, 1.0000000000000001e-05, 5, 5, 3.1363927565013707, 3.1363927565013707, 3, 1.0000000000000001e-05, 3.1363927565013707, 1.0000000000000001e-05, 1.0000000000000001e-05, 3, 3.1363927565013707, 3.1363927565013707, 3.1363927565013707, 1.0000000000000001e-05, 3.1363927565013707, 3.1363927565013707, 3.1363927565013707, 3.1363927565013707, 3.1363927565013707, 3.1363927565013707, 3.1363927565013707, 3.1363927565013707, 3.1363927565013707, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 7, 1.0000000000000001e-05, 6, 6, 7, 6, 6, 5, 6, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.4665868362527563, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 4, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0387965220665285, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0387965220665285, 1.0000000000000001e-05, 6, 1.0387965220665285, 5, 1.0000000000000001e-05, 1.0387965220665285, 7, 8, 8, 7, 7, 7, 7, 8, 8, 8, 6.830077256282884, 7, 8, 1.0000000000000001e-05, 8, 7, 8, 7, 7, 7, 8, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.830077256282884, 6.830077256282884, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.830077256282884, 1.0000000000000001e-05, 6.830077256282884, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.830077256282884, 6.830077256282884, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.830077256282884, 6.830077256282884, 6.830077256282884, 6.830077256282884, 6.830077256282884, 6.830077256282884, 6.830077256282884, 6.830077256282884, 6.830077256282884, 6.830077256282884, 6.830077256282884, 6.830077256282884, 6.830077256282884, 6.830077256282884, 6.830077256282884, 8, 8, 7, 7.0000000000000009, 7.0000000000000009, 7.0000000000000009, 7],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 3, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 6, 8, 6, 7, 5, 6, 6.0000000000000009, 6.0000000000000009, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7.0000000000000009, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 8, 5, 1.0000000000000001e-05, 7, 5, 5.8524380590461069, 5.8524380590461069, 1.0000000000000001e-05, 5.8524380590461069, 6, 7, 7, 7, 5.735663673294396, 6, 6, 1.0000000000000001e-05, 5.735663673294396, 5, 8, 6, 6, 6, 6.005230061002587, 7, 6.005230061002587, 7, 6, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.1399709501409063, 5, 1.0000000000000001e-05, 5, 5, 3.1399709501409063, 3.1399709501409063, 3, 1.0000000000000001e-05, 3.1399709501409063, 1.0000000000000001e-05, 1.0000000000000001e-05, 3, 3.1399709501409063, 3.1399709501409063, 3.1399709501409063, 1.0000000000000001e-05, 3.1399709501409063, 3.1399709501409063, 3.1399709501409063, 3.1399709501409063, 3.1399709501409063, 3.1399709501409063, 3.1399709501409063, 3.1399709501409063, 3.1399709501409063, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 7, 1.0000000000000001e-05, 6, 6, 7, 6, 6, 5, 6, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.4553523771461396, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 4, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0360367541592332, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0360367541592332, 1.0000000000000001e-05, 6, 1.0360367541592332, 5, 1.0000000000000001e-05, 1.0360367541592332, 7, 8, 8, 7, 7, 7, 7, 8, 8, 8, 6.8336528292460734, 7, 8, 1.0000000000000001e-05, 8, 7, 7, 8, 7, 8, 7, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8336528292460734, 6.8336528292460734, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8336528292460734, 1.0000000000000001e-05, 6.8336528292460734, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8336528292460734, 6.8336528292460734, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8336528292460734, 6.8336528292460734, 6.8336528292460734, 6.8336528292460734, 6.8336528292460734, 6.8336528292460734, 6.8336528292460734, 6.8336528292460734, 6.8336528292460734, 6.8336528292460734, 6.8336528292460734, 6.8336528292460734, 6.8336528292460734, 6.8336528292460734, 6.8336528292460734, 8, 8, 7, 7, 7, 7, 7],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 3, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 6, 8, 6, 7, 5, 6, 6, 6, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 8, 5, 1.0000000000000001e-05, 7, 5, 5.8509378507287142, 5.8509378507287142, 1.0000000000000001e-05, 5.8509378507287142, 6, 7, 7, 7, 5.7271545613849923, 6, 6, 1.0000000000000001e-05, 5.7271545613849923, 5, 8, 6, 6, 6, 6.0052522510723065, 7, 6.0052522510723065, 7, 6, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.1435016324601581, 5, 1.0000000000000001e-05, 5, 5, 3.1435016324601581, 3.1435016324601581, 3, 1.0000000000000001e-05, 3.1435016324601581, 1.0000000000000001e-05, 1.0000000000000001e-05, 3, 3.1435016324601581, 3.1435016324601581, 3.1435016324601581, 3.1435016324601581, 1.0000000000000001e-05, 3.1435016324601581, 3.1435016324601581, 3.1435016324601581, 3.1435016324601581, 3.1435016324601581, 3.1435016324601581, 3.1435016324601581, 3.1435016324601581, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 7, 1.0000000000000001e-05, 6, 6, 7, 6, 6, 5, 6, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.4438352587681587, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 4, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0331475153818424, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 6, 1.0000000000000001e-05, 1.0331475153818424, 1.0000000000000001e-05, 6, 1.0331475153818424, 5, 1.0000000000000001e-05, 1.0331475153818424, 7, 8, 8, 7, 7, 7, 7, 8, 8, 8, 6.8351721246480279, 7, 8, 1.0000000000000001e-05, 8, 7, 7, 8, 7, 8, 7, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8351721246480279, 6.8351721246480279, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8351721246480279, 1.0000000000000001e-05, 6.8351721246480279, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8351721246480279, 6.8351721246480279, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8351721246480279, 6.8351721246480279, 6.8351721246480279, 6.8351721246480279, 6.8351721246480279, 6.8351721246480279, 6.8351721246480279, 6.8351721246480279, 6.8351721246480279, 6.8351721246480279, 6.8351721246480279, 6.8351721246480279, 6.8351721246480279, 6.8351721246480279, 6.8351721246480279, 8, 8, 7, 7, 7, 7, 7],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 3, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 6, 8, 6, 7, 5, 6, 6, 6, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 8, 5, 1.0000000000000001e-05, 7, 5, 5.8508056264261956, 5.8508056264261956, 1.0000000000000001e-05, 5.8508056264261956, 6, 7, 7, 7, 5.718106253931265, 6, 6, 1.0000000000000001e-05, 5.718106253931265, 5, 8, 6, 6, 6, 6.0052384712440841, 7, 6.0052384712440841, 7, 6, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.1312618260342249, 5, 1.0000000000000001e-05, 5, 5, 3.1312618260342249, 3.1312618260342249, 3, 1.0000000000000001e-05, 3.1312618260342249, 1.0000000000000001e-05, 1.0000000000000001e-05, 3, 3.1312618260342249, 3.1312618260342249, 3.1312618260342249, 3.1312618260342249, 1.0000000000000001e-05, 3.1312618260342249, 3.1312618260342249, 3.1312618260342249, 3.1312618260342249, 3.1312618260342249, 3.1312618260342249, 3.1312618260342249, 3.1312618260342249, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 7, 1.0000000000000001e-05, 6, 6, 7, 6, 6, 5, 6, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.4290775763500347, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 4, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0295484702517992, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 6, 1.0000000000000001e-05, 1.0295484702517992, 1.0000000000000001e-05, 6, 1.0295484702517992, 5, 1.0000000000000001e-05, 1.0295484702517992, 7, 8, 8, 7, 7, 7, 7, 8, 8, 8, 6.8367264926375411, 7, 1.0000000000000001e-05, 8, 8, 7, 7, 8, 7, 8, 7, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8367264926375411, 6.8367264926375411, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8367264926375411, 1.0000000000000001e-05, 6.8367264926375411, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8367264926375411, 6.8367264926375411, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8367264926375411, 6.8367264926375411, 6.8367264926375411, 6.8367264926375411, 6.8367264926375411, 6.8367264926375411, 6.8367264926375411, 6.8367264926375411, 6.8367264926375411, 6.8367264926375411, 6.8367264926375411, 6.8367264926375411, 6.8367264926375411, 6.8367264926375411, 6.8367264926375411, 8, 8, 7, 7, 7, 7, 7],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 4, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 6, 8, 6, 7, 5, 6, 6, 6, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7.0000000000000009, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 8, 6, 6, 7, 5, 6.8072163299152235, 6.8072163299152235, 1.0000000000000001e-05, 6.8072163299152235, 7, 7, 7, 7, 6.4365214692352186, 6, 6, 6, 6.4365214692352186, 5, 8, 6, 6, 6, 6.0052422268460468, 7, 6.0052422268460468, 7, 6, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.1361367456870313, 5, 1.0000000000000001e-05, 5, 5, 3.1361367456870313, 3.1361367456870313, 3, 1.0000000000000001e-05, 3.1361367456870313, 1.0000000000000001e-05, 1.0000000000000001e-05, 3, 3.1361367456870313, 3.1361367456870313, 3.1361367456870313, 3.1361367456870313, 1.0000000000000001e-05, 3.1361367456870313, 3.1361367456870313, 3.1361367456870313, 3.1361367456870313, 3.1361367456870313, 3.1361367456870313, 3.1361367456870313, 3.1361367456870313, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 7, 7, 6, 7, 6, 6, 5, 7, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.4124663499349115, 7, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 4, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 4, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.2834854596826435, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 2, 7, 6, 1.0000000000000001e-05, 1.2834854596826435, 1.0000000000000001e-05, 6, 1.2834854596826435, 5, 1.0000000000000001e-05, 1.2834854596826435, 7, 8, 8, 7, 7, 7, 8, 8, 8, 8, 7.0016375678063349, 7, 1.0000000000000001e-05, 8, 8, 7, 8, 8, 7, 8, 7, 6, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.0016375678063349, 7.0016375678063349, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.0016375678063349, 1.0000000000000001e-05, 7.0016375678063349, 1.0000000000000001e-05, 7.0016375678063349, 1.0000000000000001e-05, 7.0016375678063349, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.0016375678063349, 7.0016375678063349, 7.0016375678063349, 7.0016375678063349, 7.0016375678063349, 7.0016375678063349, 7.0016375678063349, 7.0016375678063349, 7.0016375678063349, 7.0016375678063349, 7.0016375678063349, 7.0016375678063349, 7.0016375678063349, 7.0016375678063349, 7.0016375678063349, 8, 8, 7, 7, 7, 7, 8],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 7, 8, 6, 7, 5, 6, 6, 6, 6, 5.9999999999999991, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 6.9999999999999991, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 8, 6, 6, 7, 5, 6.8093979927860095, 6.8093979927860095, 1.0000000000000001e-05, 6.8093979927860095, 7, 7, 7, 7, 6.6862087093674427, 6, 6, 7, 6.6862087093674427, 6, 7, 8, 6, 6, 6.0052563119826941, 7, 6.0052563119826941, 7, 6, 7, 6, 6, 7, 1.0000000000000001e-05, 7, 6, 5, 5, 6, 3.7603165047705702, 5, 1.0000000000000001e-05, 5, 6, 3.7603165047705702, 3.7603165047705702, 4, 1.0000000000000001e-05, 3.7603165047705702, 1.0000000000000001e-05, 1.0000000000000001e-05, 3, 3.7603165047705702, 3.7603165047705702, 3.7603165047705702, 1.0000000000000001e-05, 3.7603165047705702, 3.7603165047705702, 3.7603165047705702, 3.7603165047705702, 3.7603165047705702, 3.7603165047705702, 3.7603165047705702, 3.7603165047705702, 3.7603165047705702, 8, 1.0000000000000001e-05, 3, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 7, 7, 6, 8, 6, 6, 5, 7, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 2, 1.43670626185348, 7, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 7, 6, 1.0000000000000001e-05, 4, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 8, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 8, 1.0000000000000001e-05, 2.5956588264294633, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 2, 7, 6, 1.0000000000000001e-05, 2.5956588264294633, 2, 6, 2.5956588264294633, 5, 5, 2.5956588264294633, 7, 8, 8, 7, 7, 7, 8, 8, 8, 8, 7.0225928900831418, 7, 1.0000000000000001e-05, 8, 8, 7, 8, 8, 7, 8, 7, 7, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.0225928900831418, 1.0000000000000001e-05, 7.0225928900831418, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.0225928900831418, 1.0000000000000001e-05, 7.0225928900831418, 1.0000000000000001e-05, 7.0225928900831418, 7.0225928900831418, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.0225928900831418, 7.0225928900831418, 7.0225928900831418, 7.0225928900831418, 7.0225928900831418, 7.0225928900831418, 7.0225928900831418, 7.0225928900831418, 7.0225928900831418, 7.0225928900831418, 7.0225928900831418, 7.0225928900831418, 7.0225928900831418, 7.0225928900831418, 7.0225928900831418, 8, 8, 7, 7.0000000000000009, 7.0000000000000009, 7.0000000000000009, 8],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 4, 7, 5, 7, 7, 7, 6, 5, 1.0000000000000001e-05, 8, 7, 7, 8, 8, 7, 5, 6, 6, 6, 6, 6, 7, 5, 5, 6, 4, 7, 8, 8, 8, 8, 8, 7, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 8, 6, 6, 7, 5, 6.8119274617930934, 6.8119274617930934, 1.0000000000000001e-05, 6.8119274617930934, 7, 7, 7, 7, 6.8193473693213909, 6, 7, 7, 6.8193473693213909, 6, 7, 8, 6, 8, 7.9947412657747332, 7, 7.9947412657747332, 7, 6, 7, 7, 7, 7, 1.0000000000000001e-05, 8, 6, 6, 5, 6, 4.0829969015512999, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 7, 4.0829969015512999, 4.0829969015512999, 4, 1.0000000000000001e-05, 4.0829969015512999, 1.0000000000000001e-05, 1.0000000000000001e-05, 3, 4.0829969015512999, 4.0829969015512999, 4.0829969015512999, 1.0000000000000001e-05, 4.0829969015512999, 4.0829969015512999, 4.0829969015512999, 4.0829969015512999, 4.0829969015512999, 4.0829969015512999, 4.0829969015512999, 4.0829969015512999, 4.0829969015512999, 8, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 7, 7, 6, 6, 8, 6, 5, 8, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 3, 1.7395651573901969, 7, 6, 1.0000000000000001e-05, 1.0000000000000001e-05, 8, 7, 7, 6, 1.0000000000000001e-05, 4, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 8, 1.0000000000000001e-05, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.473961660814934, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 7, 5, 2, 1.0000000000000001e-05, 2, 7, 6, 1.0000000000000001e-05, 3.473961660814934, 2, 6, 3.473961660814934, 5, 5, 3.473961660814934, 7, 8, 8, 7, 7, 7, 8, 8, 8, 8, 7.023251937206874, 7, 1.0000000000000001e-05, 8, 8, 7, 8, 7, 7, 8, 7, 7, 6, 8, 1.0000000000000001e-05, 7.023251937206874, 1.0000000000000001e-05, 7.023251937206874, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.023251937206874, 1.0000000000000001e-05, 7.023251937206874, 1.0000000000000001e-05, 7.023251937206874, 7.023251937206874, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.023251937206874, 7.023251937206874, 7.023251937206874, 7.023251937206874, 7.023251937206874, 7.023251937206874, 7.023251937206874, 7.023251937206874, 7.023251937206874, 7.023251937206874, 7.023251937206874, 7.023251937206874, 7.023251937206874, 7.023251937206874, 7.023251937206874, 8, 8, 7, 7, 7, 7, 8],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 4, 7, 5, 7, 7, 7, 7, 5, 1.0000000000000001e-05, 8, 7, 7, 8, 8, 7, 5, 6, 6, 6, 6, 6, 7, 6, 5, 6, 6, 7, 8, 8, 8, 8, 8, 7, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 8, 6, 6, 7, 5, 6.8149602556219966, 6.8149602556219966, 1.0000000000000001e-05, 6.8149602556219966, 7, 7, 7, 7, 6.9053773691063958, 6, 7, 7, 6.9053773691063958, 7, 7, 8, 6, 8, 7.9947327181474144, 7, 7.9947327181474144, 7, 7, 7, 7, 7, 7, 1.0000000000000001e-05, 8, 6, 6, 5, 6, 4.0963892258521195, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 7, 4.0963892258521195, 4.0963892258521195, 4, 1.0000000000000001e-05, 4.0963892258521195, 1.0000000000000001e-05, 1.0000000000000001e-05, 4, 4.0963892258521195, 4.0963892258521195, 4.0963892258521195, 1.0000000000000001e-05, 4.0963892258521195, 4.0963892258521195, 4.0963892258521195, 4.0963892258521195, 4.0963892258521195, 4.0963892258521195, 4.0963892258521195, 4.0963892258521195, 4.0963892258521195, 8, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 6, 8, 7, 6, 6, 8, 6, 6, 8, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 3, 1.717379959423359, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 8, 8, 7, 1.0000000000000001e-05, 6, 4, 6, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 4, 1.0000000000000001e-05, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.3310858989114536, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 7, 6, 2, 1.0000000000000001e-05, 2, 7, 7, 1.0000000000000001e-05, 4.3310858989114536, 2, 6, 4.3310858989114536, 5, 5, 4.3310858989114536, 7, 8, 8, 7, 7, 7, 8, 8, 8, 8, 7, 7.0251094906032208, 1.0000000000000001e-05, 8, 8, 7, 8, 7, 7, 8, 7, 7, 6, 8, 1.0000000000000001e-05, 7.0251094906032208, 1.0000000000000001e-05, 7.0251094906032208, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.0251094906032208, 1.0000000000000001e-05, 7.0251094906032208, 1.0000000000000001e-05, 7.0251094906032208, 7.0251094906032208, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.0251094906032208, 7.0251094906032208, 7.0251094906032208, 7.0251094906032208, 7.0251094906032208, 7.0251094906032208, 7.0251094906032208, 7.0251094906032208, 7.0251094906032208, 7.0251094906032208, 7.0251094906032208, 7.0251094906032208, 7.0251094906032208, 7.0251094906032208, 7.0251094906032208, 8, 8, 7, 7, 7, 7, 8],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 5, 7, 5, 7, 7, 7, 7, 5, 1.0000000000000001e-05, 8, 7, 7, 8, 8, 7, 5, 6, 6, 6, 6, 6, 7, 6, 5, 6, 6, 7, 8, 8, 8, 8, 8, 7, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 8, 6, 6, 7, 5, 6.8259193288339368, 6.8259193288339368, 5, 6.8259193288339368, 8, 7, 7, 7, 7.1751989377563348, 8, 7, 7, 7.1751989377563348, 7, 7, 8, 6, 8, 7.9947152649182112, 7, 7.9947152649182112, 7, 8, 7, 7, 7, 7, 1.0000000000000001e-05, 8, 6, 6, 5, 6, 4.1117496269235554, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 8, 4, 4.1117496269235554, 4.1117496269235554, 1.0000000000000001e-05, 4.1117496269235554, 1.0000000000000001e-05, 1.0000000000000001e-05, 4, 4.1117496269235554, 4.1117496269235554, 4.1117496269235554, 1.0000000000000001e-05, 4.1117496269235554, 4.1117496269235554, 4.1117496269235554, 4.1117496269235554, 4.1117496269235554, 4.1117496269235554, 4.1117496269235554, 4.1117496269235554, 4.1117496269235554, 8, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 7, 8, 7, 6, 6, 8, 6, 7, 8, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 4, 1.7159234615398264, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 8, 8, 7, 1.0000000000000001e-05, 6, 4, 6, 8, 6, 1.0000000000000001e-05, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 6, 1.0000000000000001e-05, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.8029159935128121, 1.0000000000000001e-05, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 7, 2, 6, 1.0000000000000001e-05, 2, 7, 7, 1.0000000000000001e-05, 4.8029159935128121, 2, 6, 4.8029159935128121, 5, 5, 4.8029159935128121, 8, 8, 8, 7, 7, 7, 8, 8, 8, 8, 7, 7.0471955696261244, 1.0000000000000001e-05, 8, 8, 7, 8, 7, 7, 8, 7, 8, 6, 8, 1.0000000000000001e-05, 7.0471955696261244, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.0471955696261244, 1.0000000000000001e-05, 7.0471955696261244, 1.0000000000000001e-05, 7.0471955696261244, 1.0000000000000001e-05, 7.0471955696261244, 7.0471955696261244, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.0471955696261244, 7.0471955696261244, 7.0471955696261244, 7.0471955696261244, 7.0471955696261244, 7.0471955696261244, 7.0471955696261244, 7.0471955696261244, 7.0471955696261244, 7.0471955696261244, 7.0471955696261244, 7.0471955696261244, 7.0471955696261244, 7.0471955696261244, 7.0471955696261244, 8, 8, 7, 7, 7, 7, 8],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 5, 7, 5, 7, 7, 7, 7, 5, 1.0000000000000001e-05, 8, 7, 7, 8, 8, 7, 5, 6, 6, 6, 6, 6.0000000000000009, 7, 6, 5, 5, 6, 7, 8, 8, 8, 8, 8, 6.9999999999999991, 6, 6.0000000000000009, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 8, 6, 6, 7, 5, 6.8284050809741981, 6.8284050809741981, 5, 6.8284050809741981, 8, 7, 8, 7, 7.2618677337600621, 8, 7, 7, 7.2618677337600621, 8, 7, 8, 6, 8, 7.9946950117537297, 7, 7.9946950117537297, 7, 8, 8, 7, 7, 7, 1.0000000000000001e-05, 8, 6, 6, 5, 6, 4.1223101146335699, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 8, 4, 4.1223101146335699, 4.1223101146335699, 1.0000000000000001e-05, 4.1223101146335699, 1.0000000000000001e-05, 1.0000000000000001e-05, 4, 4.1223101146335699, 4.1223101146335699, 4.1223101146335699, 1.0000000000000001e-05, 4.1223101146335699, 4.1223101146335699, 4.1223101146335699, 4.1223101146335699, 4.1223101146335699, 4.1223101146335699, 4.1223101146335699, 4.1223101146335699, 4.1223101146335699, 8, 4, 7, 1.0000000000000001e-05, 5, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 8, 8, 8, 6, 8, 6, 8, 8, 8, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 6, 2.6165665096822885, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 8, 8, 7, 1.0000000000000001e-05, 6, 4, 6, 8, 6, 1.0000000000000001e-05, 7, 8, 7, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 8, 1.0000000000000001e-05, 1, 5.2065235225646651, 8, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 7, 2, 6, 1.0000000000000001e-05, 2, 7, 7, 1.0000000000000001e-05, 5.2065235225646651, 2, 6, 5.2065235225646651, 5, 5, 5.2065235225646651, 8, 8, 8, 7, 7, 7, 8, 8, 8, 8, 7, 7.4213136754394293, 5, 8, 8, 7, 8, 7, 7, 8, 7, 8, 6, 8, 1.0000000000000001e-05, 7.4213136754394293, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.4213136754394293, 7.4213136754394293, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.4213136754394293, 1.0000000000000001e-05, 7.4213136754394293, 7.4213136754394293, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.4213136754394293, 7.4213136754394293, 7.4213136754394293, 7.4213136754394293, 7.4213136754394293, 7.4213136754394293, 7.4213136754394293, 7.4213136754394293, 7.4213136754394293, 7.4213136754394293, 7.4213136754394293, 7.4213136754394293, 7.4213136754394293, 7.4213136754394293, 7.4213136754394293, 8, 8, 8, 8, 8, 8, 8],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 5, 7, 5, 7, 7, 7, 7, 5, 1.0000000000000001e-05, 8, 7, 7, 8, 8, 7, 5, 6, 6, 6, 6, 6, 7, 6, 5, 5, 6, 7, 8, 8, 8, 8, 8, 6.9999999999999991, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 8, 6, 6, 7, 5, 6.831057565359024, 6.831057565359024, 5, 6.831057565359024, 8, 7, 8, 7, 7.2608831277942265, 8, 7, 7, 7.2608831277942265, 8, 7, 8, 6, 8, 7.9947264202749091, 7, 7.9947264202749091, 7, 8, 8, 7, 7, 7, 1.0000000000000001e-05, 8, 6, 6, 5, 6, 4.1304903324150075, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 8, 4, 4.1304903324150075, 4.1304903324150075, 1.0000000000000001e-05, 4.1304903324150075, 1.0000000000000001e-05, 1.0000000000000001e-05, 4, 4.1304903324150075, 4.1304903324150075, 4.1304903324150075, 1.0000000000000001e-05, 4.1304903324150075, 4.1304903324150075, 4.1304903324150075, 4.1304903324150075, 4.1304903324150075, 4.1304903324150075, 4.1304903324150075, 4.1304903324150075, 4.1304903324150075, 8, 4, 7, 1.0000000000000001e-05, 5, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 8, 8, 8, 6, 8, 6, 8, 8, 8, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 6, 2.6077322213177241, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 8, 8, 7, 1.0000000000000001e-05, 6, 4, 6, 8, 6, 1.0000000000000001e-05, 7, 8, 7, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 8, 1, 5.203334238089365, 8, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 7, 2, 6, 1.0000000000000001e-05, 2, 7, 7, 1.0000000000000001e-05, 5.203334238089365, 2, 6, 5.203334238089365, 5, 5, 5.203334238089365, 8, 8, 8, 7, 7, 7, 8, 8, 8, 8, 7, 5, 7.4222919808656407, 8, 8, 7, 8, 7, 7, 8, 7, 8, 6, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.4222919808656407, 1.0000000000000001e-05, 7.4222919808656407, 7.4222919808656407, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.4222919808656407, 1.0000000000000001e-05, 7.4222919808656407, 7.4222919808656407, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.4222919808656407, 1.0000000000000001e-05, 7.4222919808656407, 7.4222919808656407, 7.4222919808656407, 7.4222919808656407, 7.4222919808656407, 7.4222919808656407, 7.4222919808656407, 7.4222919808656407, 7.4222919808656407, 7.4222919808656407, 7.4222919808656407, 7.4222919808656407, 7.4222919808656407, 7.4222919808656407, 8, 8, 8, 8, 8, 8, 8],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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
            "title": "Credit information sharing",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [8, 6, 6, 6, 7, 5, 7, 5, 7, 7, 7, 7, 5, 1.0000000000000001e-05, 8, 7, 7, 8, 8, 7, 5, 6, 6.0000000000000009, 6.0000000000000009, 6, 6, 7, 6, 5, 5, 6, 7, 8, 8, 8, 8, 8, 7.0000000000000009, 6, 6, 7, 1.0000000000000001e-05, 7, 7, 6, 7, 8, 6, 6, 7, 5, 6.8335440191141386, 6.8335440191141386, 5, 6.8335440191141386, 8, 7, 8, 7, 7.2596192618893216, 8, 7, 7, 7.2596192618893216, 8, 7, 8, 6, 8, 7.9947786727329886, 7, 7.9947786727329886, 7, 8, 8, 7, 7, 7, 1.0000000000000001e-05, 8, 6, 6, 5, 6, 4.1385738506552485, 1.0000000000000001e-05, 1.0000000000000001e-05, 5, 8, 4, 4.1385738506552485, 4.1385738506552485, 1.0000000000000001e-05, 4.1385738506552485, 1.0000000000000001e-05, 1.0000000000000001e-05, 4, 4.1385738506552485, 4.1385738506552485, 4.1385738506552485, 1.0000000000000001e-05, 4.1385738506552485, 4.1385738506552485, 4.1385738506552485, 4.1385738506552485, 4.1385738506552485, 4.1385738506552485, 4.1385738506552485, 4.1385738506552485, 4.1385738506552485, 8, 4, 7, 1.0000000000000001e-05, 5, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 2, 8, 8, 8, 6, 8, 6, 8, 8, 8, 8, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 6, 2.5979642293031908, 7, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 8, 8, 7, 1.0000000000000001e-05, 6, 4, 6, 8, 6, 1.0000000000000001e-05, 7, 8, 1.0000000000000001e-05, 7, 7, 1.0000000000000001e-05, 1.0000000000000001e-05, 8, 1, 5.2004354480726391, 8, 1.0000000000000001e-05, 2, 1.0000000000000001e-05, 1, 1.0000000000000001e-05, 7, 1.0000000000000001e-05, 7, 2, 6, 1.0000000000000001e-05, 2, 7, 7, 1.0000000000000001e-05, 5.2004354480726391, 2, 6, 5.2004354480726391, 5, 5, 5.2004354480726391, 8, 8, 8, 7, 7, 7, 8, 8, 8, 8, 7, 5, 8, 7.4232983097597929, 8, 7, 8, 7, 7, 8, 7, 8, 6, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.4232983097597929, 1.0000000000000001e-05, 7.4232983097597929, 7.4232983097597929, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.4232983097597929, 1.0000000000000001e-05, 7.4232983097597929, 7.4232983097597929, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.4232983097597929, 1.0000000000000001e-05, 7.4232983097597929, 7.4232983097597929, 7.4232983097597929, 7.4232983097597929, 7.4232983097597929, 7.4232983097597929, 7.4232983097597929, 7.4232983097597929, 7.4232983097597929, 7.4232983097597929, 7.4232983097597929, 7.4232983097597929, 7.4232983097597929, 7.4232983097597929, 8, 8, 8, 8, 8, 8, 8],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 20,
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

  
