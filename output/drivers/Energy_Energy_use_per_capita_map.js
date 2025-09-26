(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Energy_Energy_use_per_capita_map') 

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
    "b55c50c478f9": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c50c478f9",
  "attrs": {
    "b55c50c478f9": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 21430,
      "colorbar": {
        "title": "Energy use"
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
        "title": "Energy use",
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
      "z": [4084.5, 4270.1199999999999, 4270.1199999999999, 4270.1199999999999, 3168.5300000000002, 2071.5, 2666.4499999999998, 2330.8800000000001, 3157.23, 2400.77, 3973.6199999999999, 5020.3800000000001, 5590.0299999999997, 8549.5, 2375.0100000000002, 4357.5699999999997, 3468.7800000000002, 2709.25, 1889.95, 3798.04, 5650.4399999999996, 3727.8299999999999, 3727.8299999999995, 3727.8299999999995, 7077.0299999999997, 7077.0299999999997, 1832.28, 2580.21, 2490.4200000000001, 2232.4899999999998, 3463.52, 3515.0900000000001, 3731.6100000000001, 3732.1152623226099, 3732.1152623226099, 3732.1152623226099, 4798.0299999999997, 422.06, 5933.2200000000003, 5933.2200000000003, 3542.0700000000002, 3542.0700000000002, 10731.33, 3025.1399999999999, 648.16999999999996, 2223.7800000000002, 1051.45, 684.58000000000004, 1157.3699999999999, 1376.4000000000001, 1745.97, 1523.7429385343694, 1523.7429385343694, 1523.7429385343694, 1523.7429385343694, 1164.6700000000001, 4461.3100000000004, 2891.0900000000001, 2015.77, 842.20000000000005, 2643.6900000000001, 1476.5899999999999, 324.92000000000002, 511.25, 3706.2199999999998, 642.39999999999998, 1003.55, 3953.1799999999998, 1118.4300000000001, 1123.059439228841, 2009.22, 1123.059439228841, 422.06, 742.76999999999998, 430.93000000000001, 469.16000000000003, 1375.6600000000001, 6216.7399999999998, 299.87, 2277.5700000000002, 449.76999999999998, 321.77999999999997, 813.26305138601776, 813.26305138601776, 813.26305138601776, 768.44000000000005, 122.94, 7075.1899999999996, 827.44000000000005, 813.26305138601776, 813.26305138601776, 141.22999999999999, 297.75999999999999, 813.26305138601776, 813.26305138601776, 542.66999999999996, 83.140000000000001, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 4233.4899999999998, 157.88999999999999, 412.44, 339.01999999999998, 337.51609274006512, 276.93000000000001, 2099.4499999999998, 936.96000000000004, 280.67000000000002, 939.30999999999995, 2949.3000000000002, 958.71000000000004, 1161.53, 10287.49, 1874.0900185547487, 3537.3000000000002, 10421.290000000001, 11573.26, 18879.889999999999, 4862.6300000000001, 642.57000000000005, 959.25, 521.79999999999995, 398.51999999999998, 127.13, 711.70640945062087, 787.5, 711.70640945062087, 3148.1500000000001, 711.70640945062087, 711.70640945062087, 2445.8299999999999, 740.17999999999995, 289.97000000000003, 477.44, 415.92000000000002, 435.14999999999998, 429.37242276696611, 278.51999999999998, 420.20999999999998, 364.22000000000003, 429.37242276696611, 467.56999999999999, 415.85000000000002, 429.37242276696611, 776.62, 429.37242276696611, 635.67999999999995, 245.05000000000001, 429.37242276696611, 429.37242276696611, 429.37242276696611, 311.45999999999998, 429.37242276696611, 429.37242276696611, 424.79000000000002, 429.37242276696611, 429.37242276696611, 276.22000000000003, 429.37242276696611, 302.06, 14.1, 608.99000000000001, 1006.7, 66.989999999999995, 1625.3599999999999, 63.850000000000001, 909.05999999999995, 380.94999999999999, 922.12, 429.37242276696611, 162.52000000000001, 58.5, 182.91, 429.37242276696611, 240.97, 3103.9699999999998, 429.37242276696611, 1089.51, 1614.1400000000001, 1590.8399999999999, 1628.9300000000001, 626.76999999999998, 2054.1399999999999, 762.17999999999995, 421.31, 696.57000000000005, 606.75, 700.31458039503661, 525.17999999999995, 788.42999999999995, 251.69, 506.56, 732.94000000000005, 740.78999999999996, 505.87, 779.28999999999996, 700.31458039503661, 832.70000000000005, 1401.8, 9879.0200000000004, 629.90999999999997, 999.39999999999998, 700.31458039503661, 700.31458039503661, 1935.3599999999999, 1396.6199999999999, 569.58000000000004, 700.31458039503661, 730.63999999999999, 700.31458039503661, 586.10000000000002, 675.70000000000005, 700.31458039503661, 700.31458039503661, 1710.1400000000001, 568.73000000000002, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 7794.2399999999998, 8341.3400000000001, 5618.0900000000001, 5618.0900000000001, 5618.0900000000001, 5618.0900000000001, 4197.5900000000001],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4084.5, 4270.1199999999999, 4270.1199999999999, 4270.1199999999999, 3168.5300000000002, 2071.5, 2666.4499999999998, 2330.8800000000001, 3157.23, 2400.77, 3973.6199999999999, 5020.3800000000001, 5590.0299999999997, 8549.5, 2375.0100000000002, 4357.5699999999997, 3468.7800000000002, 2709.25, 1889.95, 3798.04, 5650.4399999999996, 3727.8299999999999, 3727.8299999999995, 3727.8299999999995, 7077.0299999999997, 7077.0299999999997, 1832.28, 2580.21, 2490.4200000000001, 2232.4899999999998, 3463.52, 3515.0900000000001, 3731.6100000000001, 3732.1152623226099, 3732.1152623226099, 3732.1152623226099, 4798.0299999999997, 422.06, 5933.2200000000003, 5933.2200000000003, 3542.0700000000002, 3542.0700000000002, 10731.33, 3025.1399999999999, 648.16999999999996, 2223.7800000000002, 1051.45, 684.58000000000004, 1157.3699999999999, 1376.4000000000001, 1745.97, 1523.7429385343694, 1523.7429385343694, 1523.7429385343694, 1523.7429385343694, 1164.6700000000001, 4461.3100000000004, 2891.0900000000001, 2015.77, 842.20000000000005, 2643.6900000000001, 1476.5899999999999, 324.92000000000002, 511.25, 3706.2199999999998, 642.39999999999998, 1003.55, 3953.1799999999998, 1118.4300000000001, 1123.059439228841, 2009.22, 1123.059439228841, 422.06, 742.76999999999998, 430.93000000000001, 469.16000000000003, 1375.6600000000001, 6216.7399999999998, 299.87, 2277.5700000000002, 449.76999999999998, 321.77999999999997, 813.26305138601776, 813.26305138601776, 813.26305138601776, 768.44000000000005, 122.94, 7075.1899999999996, 827.44000000000005, 813.26305138601776, 813.26305138601776, 141.22999999999999, 297.75999999999999, 813.26305138601776, 813.26305138601776, 542.66999999999996, 83.140000000000001, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 813.26305138601776, 4233.4899999999998, 157.88999999999999, 412.44, 339.01999999999998, 337.51609274006512, 276.93000000000001, 2099.4499999999998, 936.96000000000004, 280.67000000000002, 939.30999999999995, 2949.3000000000002, 958.71000000000004, 1161.53, 10287.49, 1874.0900185547487, 3537.3000000000002, 10421.290000000001, 11573.26, 18879.889999999999, 4862.6300000000001, 642.57000000000005, 959.25, 521.79999999999995, 398.51999999999998, 127.13, 711.70640945062087, 787.5, 711.70640945062087, 3148.1500000000001, 711.70640945062087, 711.70640945062087, 2445.8299999999999, 740.17999999999995, 289.97000000000003, 477.44, 415.92000000000002, 435.14999999999998, 429.37242276696611, 278.51999999999998, 420.20999999999998, 364.22000000000003, 429.37242276696611, 467.56999999999999, 415.85000000000002, 429.37242276696611, 776.62, 429.37242276696611, 635.67999999999995, 245.05000000000001, 429.37242276696611, 429.37242276696611, 429.37242276696611, 311.45999999999998, 429.37242276696611, 429.37242276696611, 424.79000000000002, 429.37242276696611, 429.37242276696611, 276.22000000000003, 429.37242276696611, 302.06, 14.1, 608.99000000000001, 1006.7, 66.989999999999995, 1625.3599999999999, 63.850000000000001, 909.05999999999995, 380.94999999999999, 922.12, 429.37242276696611, 162.52000000000001, 58.5, 182.91, 429.37242276696611, 240.97, 3103.9699999999998, 429.37242276696611, 1089.51, 1614.1400000000001, 1590.8399999999999, 1628.9300000000001, 626.76999999999998, 2054.1399999999999, 762.17999999999995, 421.31, 696.57000000000005, 606.75, 700.31458039503661, 525.17999999999995, 788.42999999999995, 251.69, 506.56, 732.94000000000005, 740.78999999999996, 505.87, 779.28999999999996, 700.31458039503661, 832.70000000000005, 1401.8, 9879.0200000000004, 629.90999999999997, 999.39999999999998, 700.31458039503661, 700.31458039503661, 1935.3599999999999, 1396.6199999999999, 569.58000000000004, 700.31458039503661, 730.63999999999999, 700.31458039503661, 586.10000000000002, 675.70000000000005, 700.31458039503661, 700.31458039503661, 1710.1400000000001, 568.73000000000002, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 700.31458039503661, 7794.2399999999998, 8341.3400000000001, 5618.0900000000001, 5618.0900000000001, 5618.0900000000001, 5618.0900000000001, 4197.5900000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4114.3900000000003, 4300.9499999999998, 4300.9499999999998, 4300.9499999999998, 3169.9299999999998, 2066.5799999999999, 2711.4699999999998, 2144.0799999999999, 3238.5, 2462.9899999999998, 4007.5700000000002, 5085.8900000000003, 5592.9899999999998, 9387.4400000000005, 2383.0599999999999, 4460.2600000000002, 3416.25, 2779.1999999999998, 1961.0999999999999, 3893.4000000000001, 5847.3400000000001, 3597.1700000000001, 3597.1700000000001, 3597.1700000000001, 7134.8500000000004, 7134.8499999999995, 1803.46, 2579.29, 2440.6999999999998, 2230.9000000000001, 3571.1900000000001, 3558.0900000000001, 3694.48, 3695.1460130860423, 3695.1460130860423, 3695.1460130860423, 5086.5, 437.13, 5769.3299999999999, 5769.3299999999999, 3530.5799999999999, 3530.5799999999999, 10524.25, 3031.5, 715.40999999999997, 2424.4000000000001, 1160.8299999999999, 707.99000000000001, 1166, 1351.22, 1745.97, 1629.0460025116458, 1629.0460025116458, 1629.0460025116458, 1629.0460025116458, 1190.9100000000001, 4493.6899999999996, 3383.0700000000002, 1964.1300000000001, 855.88, 2752.7600000000002, 1539.23, 344.74000000000001, 497.87, 3820.6500000000001, 683.27999999999997, 1024.6400000000001, 4078.21, 1268.1300000000001, 1271.2765737760471, 1872.47, 1271.2765737760471, 437.13, 781.79999999999995, 473.42000000000002, 458.45999999999998, 1474.4100000000001, 7370.6499999999996, 313.61000000000001, 2391.9400000000001, 451.39999999999998, 260.38, 841.24049199829915, 841.24049199829915, 841.24049199829915, 768.44000000000005, 122.94, 6371.5900000000001, 827.44000000000005, 841.24049199829915, 841.24049199829915, 141.22999999999999, 297.75999999999999, 841.24049199829915, 841.24049199829915, 542.66999999999996, 83.140000000000001, 841.24049199829915, 841.24049199829915, 841.24049199829915, 841.24049199829915, 841.24049199829915, 841.24049199829915, 841.24049199829915, 841.24049199829915, 841.24049199829915, 841.24049199829915, 841.24049199829915, 841.24049199829915, 841.24049199829915, 4332.6700000000001, 158.16, 432.38999999999999, 339.66000000000003, 338.12970716385678, 276.93000000000001, 2252.8600000000001, 936.89999999999998, 298.30000000000001, 956.02999999999997, 2822, 1123.9400000000001, 1155.6800000000001, 10480.620000000001, 1929.4223596963059, 3567.4499999999998, 10851.49, 10847.860000000001, 21420.630000000001, 5063.1199999999999, 680.60000000000002, 957.60000000000002, 509.99000000000001, 466.94, 128.30000000000001, 727.42492448680196, 822.25, 727.42492448680196, 3153.9200000000001, 727.42492448680196, 727.42492448680196, 2645.5599999999999, 740.88, 292.67000000000002, 477.80000000000001, 429.25, 444.01999999999998, 443.60303421231822, 271.01999999999998, 425.23000000000002, 501.43000000000001, 443.60303421231822, 464.49000000000001, 417.19999999999999, 443.60303421231822, 443.60303421231822, 753.48000000000002, 633.53999999999996, 255.75999999999999, 443.60303421231822, 443.60303421231822, 443.60303421231822, 315.47000000000003, 443.60303421231822, 443.60303421231822, 418.13999999999999, 443.60303421231822, 443.60303421231822, 283.50999999999999, 443.60303421231822, 269.10000000000002, 14.1, 630.63, 972.83000000000004, 66.989999999999995, 1834.77, 63.850000000000001, 919.79999999999995, 380.94999999999999, 922.12, 162.52000000000001, 443.60303421231822, 58.5, 182.91, 443.60303421231822, 240.97, 3103.9699999999998, 443.60303421231822, 1137.0699999999999, 1607.9200000000001, 1720.3099999999999, 1717.54, 624.25, 2151.1900000000001, 865.77999999999997, 461.56, 661.12, 611.74000000000001, 709.34919301505386, 516.75999999999999, 703.36000000000001, 255.28999999999999, 532.57000000000005, 725.90999999999997, 739.13999999999999, 522.76999999999998, 909.27999999999997, 709.34919301505386, 805.74000000000001, 1411, 10312.200000000001, 629.90999999999997, 1080.45, 709.34919301505386, 709.34919301505386, 1935.3599999999999, 569.58000000000004, 1396.6199999999999, 709.34919301505386, 730.63999999999999, 709.34919301505386, 586.10000000000002, 675.70000000000005, 709.34919301505386, 709.34919301505386, 1710.1400000000001, 568.73000000000002, 709.34919301505386, 709.34919301505386, 709.34919301505386, 709.34919301505386, 709.34919301505386, 709.34919301505386, 709.34919301505386, 709.34919301505386, 709.34919301505386, 709.34919301505386, 709.34919301505386, 709.34919301505386, 709.34919301505386, 709.34919301505386, 709.34919301505386, 7881.5799999999999, 8455.5499999999993, 5652.7600000000002, 5652.7600000000002, 5652.7600000000002, 5652.7600000000002, 4239.6499999999996],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4086.5, 4286.54, 4286.54, 4286.54, 3214.6700000000001, 2181.1399999999999, 2753.0500000000002, 2140.02, 3251.4000000000001, 2519, 4085.5700000000002, 4989.4700000000003, 5555.6199999999999, 9428.8099999999995, 2414.1599999999999, 4400.8800000000001, 3504.48, 2662.8000000000002, 2022.5599999999999, 3846.3899999999999, 5711.1300000000001, 3487.6300000000001, 3487.6299999999997, 3487.6299999999997, 6562.0200000000004, 6562.0200000000013, 1810.3299999999999, 2731.04, 2597.9000000000001, 2261.48, 3645.8400000000001, 3503.6399999999999, 3686.3600000000001, 3687.0798386304746, 3687.0798386304746, 3687.0798386304746, 5177.9799999999996, 447.02999999999997, 5802.7200000000003, 5802.7200000000003, 3488.2199999999998, 3488.2199999999998, 10524.879999999999, 3033.1799999999998, 719.58000000000004, 2159.5700000000002, 1230.97, 727.88, 1210.52, 1375.01, 1745.97, 1546.3803666558749, 1546.3803666558749, 1546.3803666558749, 1546.3803666558749, 1225.7, 4540.9099999999999, 3358.9699999999998, 1799.4000000000001, 885.26999999999998, 2768.8200000000002, 1599.96, 337.72000000000003, 498.54000000000002, 3924.7199999999998, 824.45000000000005, 1170.47, 4062.98, 1393.6900000000001, 1396.0336190399448, 1844.49, 1396.0336190399448, 447.02999999999997, 785.67999999999995, 496.16000000000003, 450.42000000000002, 1504.1500000000001, 5055.9700000000003, 312.13, 2535.5100000000002, 457.49000000000001, 259.38, 878.36818201543758, 878.36818201543758, 878.36818201543758, 660.63, 120.20999999999999, 6048.0200000000004, 732.86000000000001, 878.36818201543758, 878.36818201543758, 137.84999999999999, 302.19, 878.36818201543758, 878.36818201543758, 539.60000000000002, 81.5, 878.36818201543758, 878.36818201543758, 878.36818201543758, 878.36818201543758, 878.36818201543758, 878.36818201543758, 878.36818201543758, 878.36818201543758, 878.36818201543758, 878.36818201543758, 878.36818201543758, 878.36818201543758, 878.36818201543758, 4364.2200000000003, 161.75999999999999, 438.77999999999997, 347.41000000000003, 346.43160685443581, 307.54000000000002, 2460.27, 920.96000000000004, 308.97000000000003, 1118.8299999999999, 2661.4499999999998, 1175.72, 1085.98, 10394.299999999999, 1983.1193749712754, 3938.23, 11757.030000000001, 11510.32, 19635.419999999998, 5022.9700000000003, 777.44000000000005, 983.67999999999995, 507.06, 487.77999999999997, 125.11, 730.29031824056858, 730.29031824056858, 800.36000000000001, 3044.3699999999999, 730.29031824056858, 730.29031824056858, 2616.4499999999998, 749.59000000000003, 294.67000000000002, 475.89999999999998, 437.19999999999999, 446.45999999999998, 446.48369436189284, 261.60000000000002, 420, 507.02999999999997, 433.19, 446.48369436189284, 408.36000000000001, 446.48369436189284, 446.48369436189284, 786.61000000000001, 633.26999999999998, 254.38999999999999, 446.48369436189284, 446.48369436189284, 446.48369436189284, 306.68000000000001, 446.48369436189284, 446.48369436189284, 415.25, 446.48369436189284, 446.48369436189284, 295.89999999999998, 446.48369436189284, 269.07999999999998, 675.35000000000002, 16.690000000000001, 986.04999999999995, 65.049999999999997, 2059.6399999999999, 63.060000000000002, 945.72000000000003, 372.24000000000001, 1444.3900000000001, 167.30000000000001, 446.48369436189284, 62.43, 200.88, 446.48369436189284, 265.95999999999998, 2751.6999999999998, 446.48369436189284, 1152.76, 1694.0899999999999, 1712.8499999999999, 1753.53, 641.48000000000002, 2111.2600000000002, 891.34000000000003, 484.75999999999999, 678.11000000000001, 602.38999999999999, 744.38570478073552, 553.91999999999996, 754.49000000000001, 373.81, 543.32000000000005, 746.55999999999995, 722.95000000000005, 524.58000000000004, 895.70000000000005, 744.38570478073552, 881.57000000000005, 1387.25, 11771.6, 651.57000000000005, 1224.4100000000001, 744.38570478073552, 744.38570478073552, 2001.1300000000001, 574.23000000000002, 1447.25, 744.38570478073552, 743.71000000000004, 744.38570478073552, 597.98000000000002, 716.52999999999997, 744.38570478073552, 744.38570478073552, 1715.3099999999999, 597.01999999999998, 744.38570478073552, 744.38570478073552, 744.38570478073552, 744.38570478073552, 744.38570478073552, 744.38570478073552, 744.38570478073552, 744.38570478073552, 744.38570478073552, 744.38570478073552, 744.38570478073552, 744.38570478073552, 744.38570478073552, 744.38570478073552, 744.38570478073552, 7846.5, 8422.0300000000007, 5624.1899999999996, 5624.1899999999996, 5624.1899999999996, 5624.1899999999996, 4095.1399999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4204.6499999999996, 4188.3900000000003, 4188.3900000000003, 4188.3900000000003, 3175.8000000000002, 2055.6900000000001, 2742.6300000000001, 2187.1500000000001, 3194.0799999999999, 2390.3200000000002, 4078.8099999999999, 4925.1099999999997, 5470.4899999999998, 9170.5300000000007, 2536.98, 4491.5200000000004, 3469.29, 2666.0100000000002, 2113.71, 3775.04, 5529.0799999999999, 3728.1700000000001, 3728.1700000000001, 3728.1700000000001, 7111.8599999999997, 7111.8599999999988, 1884.55, 2713.2600000000002, 2691.46, 2248.3800000000001, 3648.98, 3424.1599999999999, 3598.8099999999999, 3599.639760025615, 3599.639760025615, 3599.639760025615, 5305.6700000000001, 463.39999999999998, 5833.7700000000004, 5833.7700000000004, 3619.1500000000001, 3619.1500000000001, 12734.01, 2935.29, 706.86000000000001, 2300.73, 1306.05, 781.25, 1197.6500000000001, 1437.29, 1913.5599999999999, 1635.3841950480846, 1635.3841950480846, 1635.3841950480846, 1635.3841950480846, 1338.3699999999999, 4688.3900000000003, 4012.7800000000002, 1815.95, 889.16999999999996, 2965.3800000000001, 1559.5699999999999, 341.88999999999999, 485.42000000000002, 3964.1900000000001, 845.39999999999998, 1320.3299999999999, 4053.8800000000001, 1515.1700000000001, 1517.3435600034329, 1932.9100000000001, 1517.3435600034329, 463.39999999999998, 793.76999999999998, 503.51999999999998, 438.77999999999997, 1522.27, 5264.3999999999996, 314.14999999999998, 2493.0799999999999, 457.07999999999998, 254.44, 882.08979231444107, 882.08979231444107, 882.08979231444107, 633.00999999999999, 119.56999999999999, 8453.4699999999993, 916.02999999999997, 882.08979231444107, 882.08979231444107, 139.06, 300.98000000000002, 882.08979231444107, 882.08979231444107, 536.76999999999998, 99.920000000000002, 882.08979231444107, 882.08979231444107, 882.08979231444107, 882.08979231444107, 882.08979231444107, 882.08979231444107, 882.08979231444107, 882.08979231444107, 882.08979231444107, 882.08979231444107, 882.08979231444107, 882.08979231444107, 882.08979231444107, 4412.5299999999997, 171.22999999999999, 447.61000000000001, 344.31999999999999, 343.55847354611268, 313.39999999999998, 2531.8899999999999, 862.75999999999999, 321.04000000000002, 1113.0799999999999, 2882.4000000000001, 1128.0599999999999, 9430.1499999999996, 1015.76, 2006.4443694456327, 6025.9799999999996, 10858.530000000001, 19300.110000000001, 11454.059999999999, 5349.8900000000003, 805.63, 1038.27, 530.41999999999996, 489.58999999999997, 123.75, 750.79487864700468, 750.79487864700468, 834.79999999999995, 3008.2199999999998, 750.79487864700468, 750.79487864700468, 2572.6199999999999, 735.69000000000005, 296.23000000000002, 476.63999999999999, 440.41000000000003, 451.85000000000002, 451.52350109710301, 271.44, 421.60000000000002, 487.69999999999999, 458.50999999999999, 451.52350109710301, 378.73000000000002, 451.52350109710301, 451.52350109710301, 798.49000000000001, 625.48000000000002, 248.47999999999999, 451.52350109710301, 451.52350109710301, 451.52350109710301, 350.97000000000003, 451.52350109710301, 451.52350109710301, 402.91000000000003, 451.52350109710301, 451.52350109710301, 372, 451.52350109710301, 241.02000000000001, 668.48000000000002, 9.6099999999999994, 1000.09, 66.620000000000005, 2248.5900000000001, 63.649999999999999, 1006.5, 376.72000000000003, 1660.01, 168.84, 451.52350109710301, 69.459999999999994, 204.46000000000001, 451.52350109710301, 265.5, 2872.3400000000001, 451.52350109710301, 1180.05, 1709.29, 1844.27, 1807.4200000000001, 665.50999999999999, 2314.4400000000001, 957.98000000000002, 466.81, 669.5, 599.52999999999997, 769.47063196983538, 681.27999999999997, 771.09000000000003, 378.48000000000002, 515.62, 784.50999999999999, 737.19000000000005, 512.63, 955.35000000000002, 769.47063196983538, 924.38999999999999, 1546.97, 13059.5, 659.30999999999995, 1150.8099999999999, 769.47063196983538, 769.47063196983538, 2001.9100000000001, 595.71000000000004, 1471.76, 769.47063196983538, 714.84000000000003, 769.47063196983538, 628.21000000000004, 729.80999999999995, 769.47063196983538, 769.47063196983538, 1767.72, 610.98000000000002, 769.47063196983538, 769.47063196983538, 769.47063196983538, 769.47063196983538, 769.47063196983538, 769.47063196983538, 769.47063196983538, 769.47063196983538, 769.47063196983538, 769.47063196983538, 769.47063196983538, 769.47063196983538, 769.47063196983538, 769.47063196983538, 769.47063196983538, 7697.6499999999996, 8239.9500000000007, 5778.2799999999997, 5778.2799999999997, 5778.2799999999997, 5778.2799999999997, 4047.3200000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3985.8099999999999, 4115.1700000000001, 4115.1700000000001, 4115.1700000000001, 3149.5799999999999, 2156.5599999999999, 2734.7600000000002, 2270.54, 3180.0300000000002, 2402.4299999999998, 4019.5900000000001, 4908.8999999999996, 5336.96, 8773.8999999999996, 2527.4099999999999, 4468.96, 3320.4499999999998, 2927.2399999999998, 2179.8099999999999, 4243.6499999999996, 5472.1400000000003, 3622.5999999999999, 3622.5999999999999, 3622.5999999999999, 6974.8999999999996, 6974.8999999999996, 1904.0999999999999, 2658.04, 2666.1100000000001, 2338.4499999999998, 3632.5700000000002, 3416.0300000000002, 3441.6399999999999, 3442.5142521080938, 3442.5142521080938, 3442.5142521080938, 5229.1999999999998, 482.46000000000004, 5862.2200000000003, 5862.2200000000003, 3410.8200000000002, 3410.8200000000002, 14746.030000000001, 2996.21, 679.86000000000001, 2248.1599999999999, 1323.4200000000001, 865.59000000000003, 1168.03, 1480.3900000000001, 1927.98, 1632.5694334229024, 1632.5694334229024, 1632.5694334229024, 1632.5694334229024, 1419.0699999999999, 4709.8400000000001, 4267.9899999999998, 1777.9100000000001, 751.59000000000003, 2917.9099999999999, 1411.5599999999999, 358.75, 560.62, 4453.4200000000001, 949.55999999999995, 1370.1900000000001, 4012.6500000000001, 1630.1700000000001, 1632.40667534822, 2058.5999999999999, 1632.40667534822, 482.45999999999998, 779.74000000000001, 536.62, 431.50999999999999, 1574.74, 4677.1999999999998, 323.55000000000001, 2671.2600000000002, 461.20999999999998, 253.59999999999999, 934.85736400733504, 934.85736400733504, 934.85736400733504, 588.34000000000003, 126.83, 8520.7999999999993, 919.63999999999999, 934.85736400733504, 934.85736400733504, 153.28, 304.5, 934.85736400733504, 934.85736400733504, 543.89999999999998, 107.84999999999999, 934.85736400733504, 934.85736400733504, 934.85736400733504, 934.85736400733504, 934.85736400733504, 934.85736400733504, 934.85736400733504, 934.85736400733504, 934.85736400733504, 934.85736400733504, 934.85736400733504, 934.85736400733504, 934.85736400733504, 4564.9899999999998, 177.02000000000001, 461.60000000000002, 348.44, 348.67546136868384, 357.97000000000003, 2640.2199999999998, 885.39999999999998, 304.80000000000001, 1093.5999999999999, 2898.1500000000001, 1113.6199999999999, 8537.9200000000001, 878.47000000000003, 2022.4017317374321, 6791.8800000000001, 10477.530000000001, 17969.110000000001, 11184.110000000001, 5315.1899999999996, 846.25999999999999, 1083.99, 498.82999999999998, 498.49000000000001, 124.84, 744.82554245418009, 744.82554245418009, 854.29999999999995, 2740.3200000000002, 744.82554245418009, 744.82554245418009, 2726.96, 741.27999999999997, 297.30000000000001, 477.76999999999998, 443.36000000000001, 448.20999999999998, 452.6371562248242, 264.48000000000002, 428.45999999999998, 513.70000000000005, 471.60000000000002, 452.6371562248242, 347.35000000000002, 452.6371562248242, 452.6371562248242, 775.05999999999995, 603.98000000000002, 259.67000000000002, 452.6371562248242, 452.6371562248242, 452.6371562248242, 370.76999999999998, 452.6371562248242, 452.6371562248242, 406.27999999999997, 452.6371562248242, 452.6371562248242, 318.45999999999998, 452.6371562248242, 245, 679.40999999999997, 9.5800000000000001, 1013.47, 75.359999999999999, 2428.1799999999998, 65.489999999999995, 1007.5700000000001, 390.22000000000003, 1853.8900000000001, 165.28, 452.6371562248242, 66.459999999999994, 204.06999999999999, 452.6371562248242, 259.06, 2410.8299999999999, 452.6371562248242, 1234.2, 1675.9200000000001, 1849.45, 1856.4000000000001, 653.23000000000002, 2107.8099999999999, 951, 501.22000000000003, 744.51999999999998, 631.57000000000005, 791.03473228411497, 545.42999999999995, 774.39999999999998, 390.06999999999999, 591.79999999999995, 740.98000000000002, 756.46000000000004, 513.92999999999995, 1015.41, 791.03473228411497, 888.19000000000005, 1549.0799999999999, 13810.540000000001, 660.91999999999996, 1076.5999999999999, 791.03473228411497, 791.03473228411497, 1982.3, 598.98000000000002, 1477.28, 791.03473228411497, 764.10000000000002, 791.03473228411497, 631.63, 724.99000000000001, 791.03473228411497, 791.03473228411497, 1780.1400000000001, 625.23000000000002, 791.03473228411497, 791.03473228411497, 791.03473228411497, 791.03473228411497, 791.03473228411497, 791.03473228411497, 791.03473228411497, 791.03473228411497, 791.03473228411497, 791.03473228411497, 791.03473228411497, 791.03473228411497, 791.03473228411497, 791.03473228411497, 791.03473228411497, 7758.1700000000001, 8213.3899999999994, 5868.3400000000001, 5868.3400000000001, 5868.3400000000001, 5868.3400000000001, 4054.5],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4036.8299999999999, 4110.2799999999997, 4110.2799999999997, 4110.2799999999997, 3087.5700000000002, 2043.53, 2745.4899999999998, 2364.9200000000001, 3026.3400000000001, 2337.27, 4032.1500000000001, 4848.0100000000002, 5454.6700000000001, 8612.2299999999996, 2564.7800000000002, 4330.71, 3405.6900000000001, 2975.9099999999999, 2106.3600000000001, 4105.4200000000001, 5379.96, 3501.5100000000002, 3501.5100000000002, 3501.5100000000002, 6669.1700000000001, 6669.1700000000001, 1928.97, 2636.6500000000001, 2648.8699999999999, 2280.0700000000002, 3836.6199999999999, 3293.8800000000001, 3361.98, 3362.9106994327767, 3362.9106994327767, 3362.9106994327767, 5254.3299999999999, 499.04000000000002, 6752.71, 6752.71, 3499.79, 3499.79, 16353.83, 2910.6599999999999, 710.75, 2290, 1511.78, 780.72000000000003, 1165.9300000000001, 1475.6700000000001, 2067.9699999999998, 1671.9220684792358, 1671.9220684792358, 1671.9220684792358, 1671.9220684792358, 1384.04, 4823.1300000000001, 4428.0900000000001, 1823.3099999999999, 824.34000000000003, 2932.0999999999999, 1520.3099999999999, 335.00999999999999, 4439.6499999999996, 593.95000000000005, 1006.92, 1360.6500000000001, 3858.4299999999998, 1672.9000000000001, 1674.642045825934, 2006.3, 1674.642045825934, 499.04000000000002, 784.88, 568.19000000000005, 439.5, 1605.5899999999999, 5094.1400000000003, 310.08999999999997, 2734.6599999999999, 449.31, 250.19, 950.04081751753415, 950.04081751753415, 950.04081751753415, 588.34000000000003, 126.83, 9212.0799999999999, 919.63999999999999, 950.04081751753415, 950.04081751753415, 153.28, 304.5, 950.04081751753415, 950.04081751753415, 543.89999999999998, 107.84999999999999, 950.04081751753415, 950.04081751753415, 950.04081751753415, 950.04081751753415, 950.04081751753415, 950.04081751753415, 950.04081751753415, 950.04081751753415, 950.04081751753415, 950.04081751753415, 950.04081751753415, 950.04081751753415, 950.04081751753415, 4629.7799999999997, 184.16, 444.06999999999999, 358.38, 358.36983234698113, 357.97000000000003, 2790.8299999999999, 940.75999999999999, 311.94999999999999, 1075.74, 3129.1300000000001, 1065.75, 8487.8400000000001, 1111.1099999999999, 2080.5182720698217, 10831.52, 5904.6800000000003, 15748.65, 11362.07, 5705.3699999999999, 862.03999999999996, 1078.2, 493.04000000000002, 511.01999999999998, 126, 751.42254548729227, 751.42254548729227, 882.63999999999999, 2857.6300000000001, 751.42254548729227, 751.42254548729227, 2904.2800000000002, 742.80999999999995, 298.56999999999999, 478.44999999999999, 445.99000000000001, 450.38999999999999, 451.80256324338387, 257.77999999999997, 425.47000000000003, 492.06999999999999, 505.44, 451.80256324338387, 340.58999999999997, 451.80256324338387, 451.80256324338387, 603.01999999999998, 714.44000000000005, 264, 451.80256324338387, 451.80256324338387, 451.80256324338387, 367.99000000000001, 451.80256324338387, 451.80256324338387, 411.67000000000002, 451.80256324338387, 451.80256324338387, 329.67000000000002, 451.80256324338387, 224.38, 713.98000000000002, 9.5800000000000001, 1050.95, 75.359999999999999, 2584.73, 65.489999999999995, 1027.1700000000001, 390.22000000000003, 1853.8900000000001, 165.28, 451.80256324338387, 66.459999999999994, 204.06999999999999, 451.80256324338387, 259.06, 2410.8299999999999, 451.80256324338387, 1290.1700000000001, 1637.98, 1928.3299999999999, 1820.3099999999999, 675.96000000000004, 2322.8499999999999, 1244.9000000000001, 521.94000000000005, 674.28999999999996, 593.72000000000003, 773.00284624538392, 570.14999999999998, 766.72000000000003, 388.72000000000003, 574.12, 741.20000000000005, 785.07000000000005, 512.33000000000004, 1018.64, 773.00284624538392, 874.22000000000003, 1298.53, 13332.360000000001, 660.91999999999996, 1124.3900000000001, 773.00284624538392, 773.00284624538392, 1982.3, 598.98000000000002, 1477.28, 773.00284624538392, 764.10000000000002, 773.00284624538392, 631.63, 724.99000000000001, 773.00284624538392, 773.00284624538392, 1780.1400000000001, 625.23000000000002, 773.00284624538392, 773.00284624538392, 773.00284624538392, 773.00284624538392, 773.00284624538392, 773.00284624538392, 773.00284624538392, 773.00284624538392, 773.00284624538392, 773.00284624538392, 773.00284624538392, 773.00284624538392, 773.00284624538392, 773.00284624538392, 773.00284624538392, 7488.0799999999999, 8194.8799999999992, 5964.6700000000001, 5964.6700000000001, 5964.6700000000001, 5964.6700000000001, 4082.7199999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3790.5, 3913.23, 3913.23, 3913.23, 2869.9200000000001, 1887.2, 2649.6599999999999, 2273.1100000000001, 2757.6900000000001, 2304.0300000000002, 3798.1500000000001, 4722.1099999999997, 5196.5799999999999, 7951.7200000000003, 2466.52, 4034.7399999999998, 3106.6900000000001, 2770.8299999999999, 2055.8200000000002, 3648.98, 4883.1999999999998, 3329.21, 3329.21, 3329.21, 6268.3000000000002, 6268.3000000000002, 1712.53, 2478.0999999999999, 2351.6599999999999, 2207.0999999999999, 3496.23, 3149.5700000000002, 3145.5900000000001, 3146.7942753260854, 3146.7942753260854, 3146.7942753260854, 5579.9700000000003, 541.99000000000001, 6484.1199999999999, 6484.1199999999999, 3481.8499999999999, 3481.8499999999999, 16911.080000000002, 2487.0300000000002, 732.32000000000005, 2070.23, 1603.3699999999999, 811.52999999999997, 1108.8399999999999, 1372.8599999999999, 1646.3099999999999, 1576.1070049766333, 1576.1070049766333, 1576.1070049766333, 1576.1070049766333, 1353.96, 4531.29, 3944.29, 1591.99, 810.30999999999995, 2790.7800000000002, 1334.1700000000001, 285.5, 3837.71, 535.82000000000005, 880.47000000000003, 1396.1600000000001, 3678.5100000000002, 1778.4300000000001, 1780.1439266292084, 2107.3699999999999, 1780.1439266292084, 541.99000000000001, 837.71000000000004, 613.57000000000005, 410.83999999999997, 1588.1900000000001, 4257.7799999999997, 292.06999999999999, 2547.4699999999998, 441.64999999999998, 358.91000000000003, 909.43620397549523, 909.43620397549523, 909.43620397549523, 588.34000000000003, 126.83, 7795.8500000000004, 919.63999999999999, 909.43620397549523, 909.43620397549523, 153.28, 304.5, 909.43620397549523, 909.43620397549523, 543.89999999999998, 107.84999999999999, 909.43620397549523, 909.43620397549523, 909.43620397549523, 909.43620397549523, 909.43620397549523, 909.43620397549523, 909.43620397549523, 909.43620397549523, 909.43620397549523, 909.43620397549523, 909.43620397549523, 909.43620397549523, 909.43620397549523, 4649.7700000000004, 192.03999999999999, 440.81, 366.76536991446847, 366.99000000000001, 357.97000000000003, 2747.8400000000001, 1087.6400000000001, 336.06, 984.62, 2873.8800000000001, 1099.9200000000001, 7501.04, 1342.8, 2070.3470056387755, 11235.790000000001, 5863.3900000000003, 15049.5, 10388.48, 5850.4499999999998, 864.94000000000005, 1158.1800000000001, 496.33999999999997, 508.14999999999998, 128.72999999999999, 777.14006522525074, 777.14006522525074, 849.16999999999996, 3034.29, 777.14006522525074, 777.14006522525074, 2813.4299999999998, 711.35000000000002, 297.86000000000001, 478.19, 447.18000000000001, 463.02999999999997, 459.26954814447089, 272.19, 515.37, 429.56, 453.48000000000002, 459.26954814447089, 357.88, 459.26954814447089, 459.26954814447089, 596.15999999999997, 720.59000000000003, 308.25999999999999, 459.26954814447089, 459.26954814447089, 459.26954814447089, 374.89999999999998, 459.26954814447089, 459.26954814447089, 486.92000000000002, 459.26954814447089, 459.26954814447089, 361.61000000000001, 459.26954814447089, 234.06, 716.51999999999998, 960.35000000000002, 9.5800000000000001, 75.359999999999999, 2736.04, 65.489999999999995, 999.49000000000001, 1853.8900000000001, 390.22000000000003, 165.28, 459.26954814447089, 66.459999999999994, 204.06999999999999, 459.26954814447089, 259.06, 2410.8299999999999, 459.26954814447089, 1236.1500000000001, 1619.8900000000001, 1856.0999999999999, 1753.8099999999999, 692.86000000000001, 2295.3400000000001, 1235.02, 543.34000000000003, 789.76999999999998, 668.79999999999995, 790.30727201951333, 583.80999999999995, 742.65999999999997, 388.05000000000001, 538.44000000000005, 691.59000000000003, 787.33000000000004, 507.94, 999.50999999999999, 790.30727201951333, 947.47000000000003, 1109.29, 13396.559999999999, 660.91999999999996, 1116.47, 790.30727201951333, 790.30727201951333, 1982.3, 598.98000000000002, 1477.28, 790.30727201951333, 764.10000000000002, 790.30727201951333, 724.99000000000001, 631.63, 790.30727201951333, 790.30727201951333, 1780.1400000000001, 625.23000000000002, 790.30727201951333, 790.30727201951333, 790.30727201951333, 790.30727201951333, 790.30727201951333, 790.30727201951333, 790.30727201951333, 790.30727201951333, 790.30727201951333, 790.30727201951333, 790.30727201951333, 790.30727201951333, 790.30727201951333, 790.30727201951333, 790.30727201951333, 7056.7799999999997, 7797.1199999999999, 5862.5600000000004, 5862.5600000000004, 5862.5600000000004, 5862.5600000000004, 4073.2399999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3997.0799999999999, 4016.6599999999999, 4016.6599999999999, 4016.6599999999999, 2930.5900000000001, 2012.3199999999999, 2482.1100000000001, 2162.1599999999999, 2742.8800000000001, 2222.6300000000001, 4051.1999999999998, 5025.3199999999997, 5539.4700000000003, 8329.4799999999996, 2640.2399999999998, 4237.8999999999996, 3306.8099999999999, 2275.7600000000002, 2148.6500000000001, 4222.7399999999998, 5427.9200000000001, 3510.8000000000002, 3510.8000000000002, 3510.8000000000002, 6828.7799999999997, 6828.7799999999997, 1730.0899999999999, 2568.9499999999998, 2416.6999999999998, 2185.4499999999998, 3579.0700000000002, 3152, 3230.6199999999999, 3231.7658748739382, 3231.7658748739382, 3231.7658748739382, 5533.4300000000003, 558.78999999999996, 6934.5900000000001, 6934.5899999999992, 3347.6199999999999, 3347.6199999999999, 17023.169999999998, 2886.9899999999998, 729.14999999999998, 2141.0599999999999, 1700.6500000000001, 824.53999999999996, 1225.3099999999999, 1401.1800000000001, 1898.29, 1649.1000486166329, 1649.1000486166329, 1649.1000486166329, 1649.1000486166329, 1457.1700000000001, 4819.04, 4234.8500000000004, 1512.8199999999999, 765.84000000000003, 2902.1100000000001, 1279.55, 285.49000000000001, 4306.2399999999998, 505.39999999999998, 842.82000000000005, 1458.79, 3893.27, 1954.72, 1954.6778463128487, 1946.6500000000001, 1954.6778463128487, 558.78999999999996, 869.23000000000002, 673.96000000000004, 426.87, 1726.0799999999999, 5006.6199999999999, 283.88, 2555.2800000000002, 471.31, 368.94, 920.08454707129295, 920.08454707129295, 920.08454707129295, 588.34000000000003, 126.83, 8181.5699999999997, 919.63999999999999, 920.08454707129295, 920.08454707129295, 153.28, 304.5, 920.08454707129295, 107.84999999999999, 920.08454707129295, 543.89999999999998, 920.08454707129295, 920.08454707129295, 920.08454707129295, 920.08454707129295, 920.08454707129295, 920.08454707129295, 920.08454707129295, 920.08454707129295, 920.08454707129295, 920.08454707129295, 920.08454707129295, 920.08454707129295, 920.08454707129295, 5045.4899999999998, 205.62, 437.22000000000003, 375.47090282326252, 375.92000000000002, 357.97000000000003, 2710.2600000000002, 1199.79, 316.54000000000002, 969.65999999999997, 3042.4299999999998, 1024.8199999999999, 7273.25, 1276.76, 2105.1654645186482, 10898.25, 6495.1400000000003, 16131.58, 10436.77, 6306.5900000000001, 831.41999999999996, 1117.98, 495.23000000000002, 526.13, 133.86000000000001, 785.1321070324434, 785.1321070324434, 943.71000000000004, 3201.4899999999998, 785.1321070324434, 785.1321070324434, 2737.7399999999998, 744.84000000000003, 298.95999999999998, 477.98000000000002, 458.04000000000002, 470.14999999999998, 469.48819574756601, 289.62, 520.78999999999996, 431.67000000000002, 481.19, 469.48819574756601, 350.48000000000002, 469.48819574756601, 469.48819574756601, 596.25, 736.69000000000005, 305.75999999999999, 469.48819574756601, 469.48819574756601, 469.48819574756601, 386.76999999999998, 469.48819574756601, 469.48819574756601, 474.02999999999997, 469.48819574756601, 469.48819574756601, 377.85000000000002, 469.48819574756601, 235.34999999999999, 732.86000000000001, 1029.73, 9.5800000000000001, 75.359999999999999, 2970.0500000000002, 65.489999999999995, 1053.45, 1853.8900000000001, 390.22000000000003, 165.28, 469.48819574756601, 66.459999999999994, 204.06999999999999, 469.48819574756601, 259.06, 2410.8299999999999, 469.48819574756601, 1354.0799999999999, 1553, 1928.6500000000001, 1814.1199999999999, 696.24000000000001, 2520.6500000000001, 1219.05, 638.62, 785.17999999999995, 714.90999999999997, 830.95833867729243, 625.26999999999998, 770.27999999999997, 385.72000000000003, 540.07000000000005, 695.13, 833.44000000000005, 504.82999999999998, 1005.16, 830.95833867729243, 995.88999999999999, 978.05999999999995, 14228.58, 660.91999999999996, 1313.55, 830.95833867729243, 830.95833867729243, 1982.3, 598.98000000000002, 1477.28, 830.95833867729243, 764.10000000000002, 830.95833867729243, 724.99000000000001, 631.63, 830.95833867729243, 830.95833867729243, 1780.1400000000001, 625.23000000000002, 830.95833867729243, 830.95833867729243, 830.95833867729243, 830.95833867729243, 830.95833867729243, 830.95833867729243, 830.95833867729243, 830.95833867729243, 830.95833867729243, 830.95833867729243, 830.95833867729243, 830.95833867729243, 830.95833867729243, 830.95833867729243, 830.95833867729243, 7161.4300000000003, 7788.5600000000004, 5793.1199999999999, 5793.1199999999999, 5793.1199999999999, 5793.1199999999999, 4225.0900000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3869.8200000000002, 3846.9299999999998, 3846.9299999999998, 3846.9299999999998, 2828.4000000000001, 1993.3299999999999, 2407.7600000000002, 2068.02, 2689.6799999999998, 2163.98, 3921.9000000000001, 4636.6999999999998, 5092.3199999999997, 8056.3999999999996, 2653.4000000000001, 4077.3600000000001, 3213.9499999999998, 2412.48, 2066.6399999999999, 4237.7299999999996, 5274.6400000000003, 3230.1900000000001, 3230.1900000000001, 3230.1900000000001, 6537.6400000000003, 6537.6400000000003, 1777.1099999999999, 2500.3200000000002, 2617.1300000000001, 2140.4400000000001, 3567.98, 2865.3699999999999, 2972.1500000000001, 2973.3130924213392, 2973.3130924213392, 2973.3130924213392, 5297.25, 574.62, 5649.6999999999998, 5649.6999999999998, 3205.3299999999999, 3205.3299999999999, 18157.599999999999, 2768.9299999999998, 764.97000000000003, 2237.46, 943.53999999999996, 1908.97, 1206.71, 1516.27, 1815.53, 1750.0021787812675, 1750.0021787812675, 1750.0021787812675, 1750.0021787812675, 1530.27, 5049.4300000000003, 4670.8199999999997, 1613.8099999999999, 564.82000000000005, 3101.4299999999998, 1369.3499999999999, 280.31, 4603.6700000000001, 600.28999999999996, 927.13999999999999, 1572.01, 3610.8099999999999, 2085.0799999999999, 2085.0911400299351, 2087.21, 2085.0911400299351, 574.62, 826.87, 666.48000000000002, 422.13, 1712.9400000000001, 5069.1700000000001, 287.66000000000003, 2621.8600000000001, 501.33999999999997, 380.38999999999999, 953.66765455013433, 953.66765455013433, 953.66765455013433, 588.34000000000003, 126.83, 9645.8999999999996, 919.63999999999999, 953.66765455013433, 953.66765455013433, 153.28, 304.5, 953.66765455013433, 107.84999999999999, 953.66765455013433, 543.89999999999998, 953.66765455013433, 953.66765455013433, 953.66765455013433, 953.66765455013433, 953.66765455013433, 953.66765455013433, 953.66765455013433, 953.66765455013433, 953.66765455013433, 953.66765455013433, 953.66765455013433, 953.66765455013433, 953.66765455013433, 5216.5900000000001, 210.72999999999999, 431.31, 386.85395979452028, 387.60000000000002, 357.97000000000003, 2728.6599999999999, 1267.55, 259.63999999999999, 875.11000000000001, 2980.1799999999998, 993.79999999999995, 7502.5600000000004, 1257.95, 2118.4141065930949, 10299.969999999999, 6864.6000000000004, 17344.59, 10453.08, 5907.6899999999996, 853.5, 1144.3199999999999, 483.94999999999999, 559.35000000000002, 111.98999999999999, 739.2721331323952, 739.2721331323952, 889.5, 2211.8099999999999, 739.2721331323952, 739.2721331323952, 2693.9099999999999, 766.33000000000004, 307.02999999999997, 480.24000000000001, 470.57999999999998, 467.33999999999997, 476.36224975520145, 301.70999999999998, 520.95000000000005, 436.05000000000001, 540.34000000000003, 476.36224975520145, 328.33999999999997, 476.36224975520145, 476.36224975520145, 608.87, 787.02999999999997, 315.07999999999998, 476.36224975520145, 476.36224975520145, 476.36224975520145, 476.36224975520145, 385.94, 476.36224975520145, 464.26999999999998, 476.36224975520145, 487.05000000000001, 476.36224975520145, 476.36224975520145, 236.81999999999999, 744.88999999999999, 969.64999999999998, 9.5800000000000001, 75.359999999999999, 2308.8000000000002, 65.489999999999995, 1053.51, 1853.8900000000001, 390.22000000000003, 165.28, 476.36224975520145, 66.459999999999994, 204.06999999999999, 476.36224975520145, 259.06, 2410.8299999999999, 476.36224975520145, 1362.5599999999999, 1608.55, 1952.05, 1957.05, 689.75, 2309.5100000000002, 1314.3299999999999, 644.55999999999995, 817.90999999999997, 750.61000000000001, 845.3138001042953, 649.34000000000003, 774.33000000000004, 394.79000000000002, 586.86000000000001, 699.17999999999995, 514.66999999999996, 834.34000000000003, 994.66999999999996, 1061.5699999999999, 845.3138001042953, 1038.6600000000001, 13903.559999999999, 660.91999999999996, 1265.4300000000001, 845.3138001042953, 845.3138001042953, 1982.3, 598.98000000000002, 1477.28, 845.3138001042953, 764.10000000000002, 845.3138001042953, 724.99000000000001, 631.63, 845.3138001042953, 845.3138001042953, 1780.1400000000001, 625.23000000000002, 845.3138001042953, 845.3138001042953, 845.3138001042953, 845.3138001042953, 845.3138001042953, 845.3138001042953, 845.3138001042953, 845.3138001042953, 845.3138001042953, 845.3138001042953, 845.3138001042953, 845.3138001042953, 845.3138001042953, 845.3138001042953, 845.3138001042953, 7029.9499999999998, 7911.5500000000002, 5745.2299999999996, 5745.2299999999996, 5745.2299999999996, 5745.2299999999996, 4177.0299999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3876.9499999999998, 3836.5100000000002, 3836.5100000000002, 3836.5100000000002, 2709.3000000000002, 2090.3899999999999, 2403.23, 1925.3299999999999, 2683.3699999999999, 2039.01, 3886.77, 4646.2600000000002, 4845.4899999999998, 7722.1899999999996, 2566.5700000000002, 4054.0799999999999, 3080.73, 2469, 2170.5900000000001, 4174.3900000000003, 5269.4899999999998, 3091.5799999999999, 3091.5799999999999, 3091.5799999999999, 6275.7700000000004, 6275.7700000000004, 1741.72, 2365.5500000000002, 2513.3499999999999, 2020.75, 3424.04, 2853.0599999999999, 3042.8600000000001, 3044.0166067256318, 3044.0166067256318, 3044.0166067256318, 5344.3100000000004, 595.05999999999995, 5906.1400000000003, 5906.1400000000003, 3202.8299999999999, 3202.8299999999999, 17630.07, 2687.0599999999999, 687.89999999999998, 2020.4000000000001, 993.74000000000001, 1819.0899999999999, 1194.0899999999999, 1436.79, 1711.8, 1642.3508538718499, 1642.3508538718499, 1642.3508538718499, 1642.3508538718499, 1570.5, 5167.0100000000002, 4398.9399999999996, 1625.99, 572.77999999999997, 3228.4699999999998, 1472.9000000000001, 294.94999999999999, 4678.3299999999999, 737.23000000000002, 1019.27, 1709.1900000000001, 3537.3600000000001, 2149.5999999999999, 2148.786531353921, 1994.72, 2148.786531353921, 595.05999999999995, 847.16999999999996, 671.07000000000005, 441.23000000000002, 1824.78, 4898.3299999999999, 311.76999999999998, 2625.0700000000002, 535.5, 390.63, 974.47247266306567, 974.47247266306567, 974.47247266306567, 588.34000000000003, 126.83, 9418.8999999999996, 919.63999999999999, 974.47247266306567, 974.47247266306567, 153.28, 304.5, 974.47247266306567, 107.84999999999999, 974.47247266306567, 543.89999999999998, 974.47247266306567, 974.47247266306567, 974.47247266306567, 974.47247266306567, 974.47247266306567, 974.47247266306567, 974.47247266306567, 974.47247266306567, 974.47247266306567, 974.47247266306567, 974.47247266306567, 974.47247266306567, 974.47247266306567, 5248.5200000000004, 218.40000000000001, 428.52999999999997, 369.33397084417584, 369.63, 357.97000000000003, 2803.1100000000001, 1354.3199999999999, 228.12, 656.71000000000004, 3067.7399999999998, 1088.46, 7892.71, 1384.8199999999999, 2217.3036786280131, 6695.7399999999998, 10956.110000000001, 19987.580000000002, 10251.07, 6500.2799999999997, 857.76999999999998, 1233.6199999999999, 407.29000000000002, 559.62, 126.77, 774.09789176057086, 774.09789176057086, 916.75, 2938.4299999999998, 774.09789176057086, 774.09789176057086, 2621.1900000000001, 785.25999999999999, 368.37, 480.25999999999999, 485.10000000000002, 461.25999999999999, 485.05199714014458, 318.58999999999997, 550.60000000000002, 431.00999999999999, 573.92999999999995, 485.05199714014458, 329.20999999999998, 485.05199714014458, 485.05199714014458, 618.38, 814.90999999999997, 304.19, 485.05199714014458, 485.05199714014458, 485.05199714014458, 485.05199714014458, 388.31, 485.05199714014458, 450.87, 485.05199714014458, 542.91999999999996, 485.05199714014458, 485.05199714014458, 240.53, 759.38999999999999, 1078.77, 75.359999999999999, 9.5800000000000001, 1974.4400000000001, 65.489999999999995, 1853.8900000000001, 1067.78, 390.22000000000003, 165.28, 485.05199714014458, 66.459999999999994, 204.06999999999999, 485.05199714014458, 259.06, 2410.8299999999999, 485.05199714014458, 1408.8499999999999, 1656.1400000000001, 1936.8, 2145.52, 689.01999999999998, 2479.1599999999999, 1375.5899999999999, 687.29999999999995, 794.63999999999999, 749.03999999999996, 857.42399429780005, 734.27999999999997, 807.25999999999999, 402.85000000000002, 582.84000000000003, 685.75, 545.03999999999996, 843.62, 999.10000000000002, 1076.72, 857.42399429780005, 1003.53, 13456.280000000001, 660.91999999999996, 1396.8800000000001, 857.42399429780005, 857.42399429780005, 1982.3, 598.98000000000002, 1477.28, 857.42399429780005, 764.10000000000002, 857.42399429780005, 724.99000000000001, 631.63, 857.42399429780005, 857.42399429780005, 1780.1400000000001, 625.23000000000002, 857.42399429780005, 857.42399429780005, 857.42399429780005, 857.42399429780005, 857.42399429780005, 857.42399429780005, 857.42399429780005, 857.42399429780005, 857.42399429780005, 857.42399429780005, 857.42399429780005, 857.42399429780005, 857.42399429780005, 857.42399429780005, 857.42399429780005, 6872.0299999999997, 7733.4099999999999, 5575.29, 5575.29, 5575.29, 5575.29, 4357.8100000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3939.5300000000002, 3833.3200000000002, 3833.3200000000002, 3833.3200000000002, 2579.4699999999998, 1803.21, 2128.0100000000002, 1654.4200000000001, 2512.1100000000001, 2057.8600000000001, 3919.04, 4600.1800000000003, 4997.46, 7312.1499999999996, 2565.6700000000001, 3989.9899999999998, 3130.9299999999998, 2356.6500000000001, 2156.1599999999999, 4623.2799999999997, 5146.5299999999997, 3125.3400000000001, 3125.3400000000001, 3125.3400000000001, 6116.2299999999996, 6116.2299999999987, 1595.99, 2271.9499999999998, 2329.1199999999999, 1983.8699999999999, 3330.9899999999998, 2814.98, 2987.6999999999998, 2989.0558922871451, 2989.0558922871451, 2989.0558922871451, 5672.1499999999996, 600.97000000000003, 6415.9899999999998, 6415.9899999999998, 3304.1199999999999, 3304.1199999999999, 18178.139999999999, 2553.1100000000001, 801.33000000000004, 2080.9699999999998, 1048.3399999999999, 1784.0799999999999, 1073.53, 1308.4100000000001, 1580.4200000000001, 1639.4570623097081, 1639.4570623097081, 1639.4570623097081, 1639.4570623097081, 1527.0699999999999, 5078.6300000000001, 4786.5900000000001, 1419.48, 433.89999999999998, 2888.46, 1474, 319.69, 4713.0100000000002, 690.32000000000005, 999.64999999999998, 1848.51, 3567.6300000000001, 2204.2399999999998, 2202.8759544727523, 1943.8499999999999, 2202.8759544727523, 600.97000000000003, 858.80999999999995, 663.88999999999999, 449.29000000000002, 1950.54, 4880.4099999999999, 327.99000000000001, 2913.8000000000002, 474.76999999999998, 397.62, 1043.7545867195629, 1043.7545867195629, 1043.7545867195629, 588.34000000000003, 126.83, 7389.2200000000003, 919.63999999999999, 1043.7545867195629, 1043.7545867195629, 153.28, 304.5, 1043.7545867195629, 107.84999999999999, 1043.7545867195629, 543.89999999999998, 1043.7545867195629, 1043.7545867195629, 1043.7545867195629, 1043.7545867195629, 1043.7545867195629, 1043.7545867195629, 1043.7545867195629, 1043.7545867195629, 1043.7545867195629, 1043.7545867195629, 1043.7545867195629, 1043.7545867195629, 1043.7545867195629, 5231.6800000000003, 220.22999999999999, 432.23000000000002, 408.88165798212975, 410.22000000000003, 357.97000000000003, 2816.3099999999999, 1391.03, 306.31, 541.34000000000003, 2870.0999999999999, 1004.24, 7992.4399999999996, 1245.21, 2212.2866546329174, 6402, 9580.1299999999992, 19819.98, 10860.469999999999, 6104.3800000000001, 803.42999999999995, 1252.0699999999999, 406.47000000000003, 554.49000000000001, 153.74000000000001, 793.09826369276379, 793.09826369276379, 921.45000000000005, 3243.8200000000002, 793.09826369276379, 793.09826369276379, 2593.8400000000001, 766.91999999999996, 374.14999999999998, 483.52999999999997, 487.67000000000002, 476.25, 495.48917347565049, 325.25, 531.08000000000004, 432.89999999999998, 495.48917347565049, 602.13999999999999, 336.36000000000001, 495.48917347565049, 495.48917347565049, 631.91999999999996, 832.57000000000005, 273.00999999999999, 495.48917347565049, 495.48917347565049, 495.48917347565049, 495.48917347565049, 394.25999999999999, 495.48917347565049, 451.26999999999998, 495.48917347565049, 543.71000000000004, 495.48917347565049, 495.48917347565049, 241.96000000000001, 787.84000000000003, 1119.3499999999999, 75.359999999999999, 9.5800000000000001, 2783.4200000000001, 65.489999999999995, 1853.8900000000001, 1094.49, 390.22000000000003, 165.28, 495.48917347565049, 66.459999999999994, 204.06999999999999, 495.48917347565049, 259.06, 2410.8299999999999, 495.48917347565049, 1456.1099999999999, 1637.79, 1967.02, 2209.8600000000001, 727.85000000000002, 2304.5300000000002, 1361.1500000000001, 678.12, 843.14999999999998, 800.64999999999998, 859.78123834747078, 726.32000000000005, 399.38, 751.54999999999995, 580.25999999999999, 644.85000000000002, 575.09000000000003, 822.66999999999996, 1010.73, 1039.3399999999999, 859.78123834747078, 1037.77, 13604.32, 660.91999999999996, 1226.9100000000001, 859.78123834747078, 859.78123834747078, 1982.3, 598.98000000000002, 1477.28, 859.78123834747078, 764.10000000000002, 859.78123834747078, 724.99000000000001, 631.63, 859.78123834747078, 859.78123834747078, 1780.1400000000001, 625.23000000000002, 859.78123834747078, 859.78123834747078, 859.78123834747078, 859.78123834747078, 859.78123834747078, 859.78123834747078, 859.78123834747078, 859.78123834747078, 859.78123834747078, 859.78123834747078, 859.78123834747078, 859.78123834747078, 859.78123834747078, 859.78123834747078, 859.78123834747078, 6905.6000000000004, 7743.7299999999996, 5468.3900000000003, 5468.3900000000003, 5468.3900000000003, 5468.3900000000003, 4360.3100000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3779.46, 3659.0900000000001, 3659.0900000000001, 3659.0900000000001, 2414.48, 1781.5, 2123.9000000000001, 1676.21, 2464.6399999999999, 2034.51, 3763.3299999999999, 4325.5200000000004, 4708.2200000000003, 6861.1099999999997, 2473.4099999999999, 3915.1100000000001, 2943.1900000000001, 2387.2800000000002, 2176.8400000000001, 4592.6199999999999, 4966.4399999999996, 2872.5700000000002, 2872.5700000000002, 2872.5700000000002, 6213.3599999999997, 6213.3599999999997, 1591.6700000000001, 2314.5, 2477.6599999999999, 1897.8399999999999, 3236.2399999999998, 2741.5700000000002, 2777.3099999999999, 2778.9665878714122, 2778.9665878714122, 2778.9665878714122, 6040.46, 630.89999999999998, 5595.6499999999996, 5595.6499999999996, 3059.9400000000001, 3059.9400000000001, 17916.119999999999, 2334.4000000000001, 808.46000000000004, 1859.4300000000001, 1180.27, 2190.9400000000001, 1155.26, 1268.6800000000001, 1538.26, 1642.5987850527142, 1642.5987850527142, 1642.5987850527142, 1642.5987850527142, 1555.98, 4942.8800000000001, 4434.6400000000003, 1419.48, 474.05000000000001, 1502.0799999999999, 2936.5799999999999, 336.85000000000002, 4723.3400000000001, 650.39999999999998, 1023.8099999999999, 1851.5799999999999, 3470.7600000000002, 2224.3499999999999, 2223.0191558705942, 1970.48, 2223.0191558705942, 630.89999999999998, 880.12, 663.88999999999999, 470.5, 1926.1600000000001, 5121.8000000000002, 378.06999999999999, 2930.8499999999999, 504.31, 418.57999999999998, 1084.3714054179195, 1084.3714054179195, 1084.3714054179195, 588.34000000000003, 126.83, 8529.7299999999996, 919.63999999999999, 1084.3714054179195, 1084.3714054179195, 153.28, 304.5, 1084.3714054179195, 107.84999999999999, 1084.3714054179195, 543.89999999999998, 1084.3714054179195, 1084.3714054179195, 1084.3714054179195, 1084.3714054179195, 1084.3714054179195, 1084.3714054179195, 1084.3714054179195, 1084.3714054179195, 1084.3714054179195, 1084.3714054179195, 1084.3714054179195, 1084.3714054179195, 1084.3714054179195, 5289.2799999999997, 227.13, 431.63, 423.92268012975933, 425.67000000000002, 357.97000000000003, 2964.8600000000001, 1346.55, 306.31, 538.17999999999995, 944.74000000000001, 2762.5100000000002, 7975.79, 1194.3299999999999, 2211.237178353445, 6067.7200000000003, 9006.5, 19903.470000000001, 10798.120000000001, 6645.96, 782.75999999999999, 1333.1400000000001, 405.02999999999997, 554.23000000000002, 148.99000000000001, 797.97248671466775, 797.97248671466775, 920.07000000000005, 2930.3699999999999, 797.97248671466775, 797.97248671466775, 2686.3800000000001, 750.97000000000003, 377.72000000000003, 484.95999999999998, 488.72000000000003, 515.58000000000004, 503.54972506519738, 320.38999999999999, 540.86000000000001, 446.87, 503.54972506519738, 603.37, 340.94999999999999, 503.54972506519738, 503.54972506519738, 631.91999999999996, 832.57000000000005, 283.30000000000001, 503.54972506519738, 503.54972506519738, 503.54972506519738, 503.54972506519738, 403.91000000000003, 503.54972506519738, 452.94999999999999, 503.54972506519738, 531.48000000000002, 503.54972506519738, 503.54972506519738, 245.03, 805.07000000000005, 1201.8, 75.359999999999999, 9.5800000000000001, 2580.4400000000001, 65.489999999999995, 1853.8900000000001, 1111.1800000000001, 390.22000000000003, 165.28, 503.54972506519738, 66.459999999999994, 204.06999999999999, 503.54972506519738, 259.06, 2410.8299999999999, 503.54972506519738, 1490.4300000000001, 1582.9100000000001, 2029.9200000000001, 2041.1900000000001, 728.57000000000005, 2304.5300000000002, 1389.5999999999999, 783.35000000000002, 888.62, 863.57000000000005, 898.77964977662634, 763.16999999999996, 398.82999999999998, 743.25, 586.64999999999998, 654.77999999999997, 848.5, 589.90999999999997, 1012.6799999999999, 1083.3499999999999, 898.77964977662634, 1008.64, 13489.040000000001, 660.91999999999996, 1211.4000000000001, 898.77964977662634, 898.77964977662634, 1982.3, 598.98000000000002, 1477.28, 898.77964977662634, 764.10000000000002, 898.77964977662634, 724.99000000000001, 898.77964977662634, 631.63, 898.77964977662634, 1780.1400000000001, 625.23000000000002, 898.77964977662634, 898.77964977662634, 898.77964977662634, 898.77964977662634, 898.77964977662634, 898.77964977662634, 898.77964977662634, 898.77964977662634, 898.77964977662634, 898.77964977662634, 898.77964977662634, 898.77964977662634, 898.77964977662634, 898.77964977662634, 898.77964977662634, 6960.6800000000003, 7897.8599999999997, 5334.6800000000003, 5334.6800000000003, 5334.6800000000003, 5334.6800000000003, 4553.0299999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3817.5500000000002, 3692.02, 3692.02, 3692.02, 2481.75, 1781.5, 2182.0700000000002, 1676.21, 2571.3400000000001, 2131.6799999999998, 3800.3000000000002, 4233.04, 4687.79, 6548.4099999999999, 2490.21, 3860, 3003.6599999999999, 2387.2800000000002, 2176.8400000000001, 4173.3299999999999, 5102.79, 2816.6100000000001, 2816.6100000000001, 2816.6100000000001, 5924.6999999999998, 5924.6999999999998, 1591.6700000000001, 2432.75, 2477.6599999999999, 1897.8399999999999, 3174.8699999999999, 2819.8800000000001, 2764.52, 2766.1890599819994, 2766.1890599819994, 2766.1890599819994, 6040.46, 630.89999999999998, 5817.6400000000003, 5817.6400000000003, 2960.0700000000002, 2960.0700000000002, 17478.889999999999, 2334.4000000000001, 808.46000000000004, 1859.4300000000001, 1180.27, 2190.9400000000001, 1155.26, 1268.6800000000001, 1538.26, 1641.2601501034442, 1641.2601501034442, 1641.2601501034442, 1641.2601501034442, 1628.21, 4942.8800000000001, 4434.6400000000003, 1419.48, 474.05000000000001, 1502.0799999999999, 2936.5799999999999, 336.85000000000002, 4723.3400000000001, 650.39999999999998, 1851.5799999999999, 1023.8099999999999, 3428.5599999999999, 2224.3499999999999, 2223.015580076953, 1970.48, 2223.015580076953, 630.89999999999998, 880.12, 663.88999999999999, 470.5, 1926.1600000000001, 5121.8000000000002, 378.06999999999999, 2930.8499999999999, 504.31, 418.57999999999998, 1088.0533064641779, 1088.0533064641779, 1088.0533064641779, 588.34000000000003, 126.83, 919.63999999999999, 8529.7299999999996, 1088.0533064641779, 1088.0533064641779, 153.28, 304.5, 1088.0533064641779, 107.84999999999999, 1088.0533064641779, 543.89999999999998, 1088.0533064641779, 1088.0533064641779, 1088.0533064641779, 1088.0533064641779, 1088.0533064641779, 1088.0533064641779, 1088.0533064641779, 1088.0533064641779, 1088.0533064641779, 1088.0533064641779, 1088.0533064641779, 1088.0533064641779, 1088.0533064641779, 5413.3500000000004, 227.13, 431.63, 423.91466443662949, 425.67000000000002, 357.97000000000003, 2964.8600000000001, 1346.55, 306.31, 538.17999999999995, 944.74000000000001, 7975.79, 2777.8800000000001, 1194.3299999999999, 2258.0610351627147, 6067.7200000000003, 9006.5, 19903.470000000001, 10798.120000000001, 6645.96, 782.75999999999999, 405.02999999999997, 1333.1400000000001, 554.23000000000002, 148.99000000000001, 795.57780255842306, 795.57780255842306, 920.07000000000005, 2930.3699999999999, 795.57780255842306, 795.57780255842306, 2686.3800000000001, 750.97000000000003, 377.72000000000003, 484.95999999999998, 488.72000000000003, 515.58000000000004, 503.50230625084788, 320.38999999999999, 540.86000000000001, 446.87, 503.50230625084788, 603.37, 340.94999999999999, 503.50230625084788, 503.50230625084788, 631.91999999999996, 283.30000000000001, 832.57000000000005, 503.50230625084788, 503.50230625084788, 503.50230625084788, 403.91000000000003, 503.50230625084788, 503.50230625084788, 452.94999999999999, 503.50230625084788, 531.48000000000002, 503.50230625084788, 503.50230625084788, 245.03, 805.07000000000005, 75.359999999999999, 1201.8, 9.5800000000000001, 2580.4400000000001, 65.489999999999995, 1853.8900000000001, 1111.1800000000001, 390.22000000000003, 165.28, 503.50230625084788, 66.459999999999994, 204.06999999999999, 503.50230625084788, 259.06, 2410.8299999999999, 503.50230625084788, 1490.4300000000001, 1559.1199999999999, 2029.9200000000001, 2016.6900000000001, 728.57000000000005, 2304.5300000000002, 1389.5999999999999, 783.35000000000002, 888.62, 863.57000000000005, 897.47044489270968, 763.16999999999996, 398.82999999999998, 743.25, 586.64999999999998, 654.77999999999997, 848.5, 589.90999999999997, 1012.6799999999999, 1083.3499999999999, 897.47044489270968, 1008.64, 13489.040000000001, 660.91999999999996, 1211.4000000000001, 897.47044489270968, 1982.3, 897.47044489270968, 598.98000000000002, 1477.28, 897.47044489270968, 764.10000000000002, 897.47044489270968, 724.99000000000001, 897.47044489270968, 897.47044489270968, 631.63, 1780.1400000000001, 625.23000000000002, 897.47044489270968, 897.47044489270968, 897.47044489270968, 897.47044489270968, 897.47044489270968, 897.47044489270968, 897.47044489270968, 897.47044489270968, 897.47044489270968, 897.47044489270968, 897.47044489270968, 897.47044489270968, 897.47044489270968, 897.47044489270968, 897.47044489270968, 6804, 7631.3400000000001, 5483.8199999999997, 5483.8199999999997, 5483.8199999999997, 5483.8199999999997, 4431.5100000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3817.5500000000002, 3692.02, 3692.02, 3692.02, 2481.75, 1781.5, 2182.0700000000002, 1676.21, 2571.3400000000001, 2131.6799999999998, 3800.3000000000002, 4233.04, 4687.79, 6548.4099999999999, 2490.21, 3860, 3003.6599999999999, 2387.2800000000002, 2176.8400000000001, 4173.3299999999999, 5102.79, 2816.6100000000001, 2816.6100000000001, 2816.6100000000001, 5924.6999999999998, 5924.6999999999998, 1591.6700000000001, 2432.75, 2477.6599999999999, 1897.8399999999999, 3174.8699999999999, 2819.8800000000001, 2764.52, 2766.1996582668257, 2766.1996582668257, 2766.1996582668257, 6040.46, 630.89999999999998, 5817.6400000000003, 5817.6400000000003, 2960.0700000000002, 2960.0700000000002, 17478.889999999999, 2334.4000000000001, 808.46000000000004, 1859.4300000000001, 1180.27, 2190.9400000000001, 1155.26, 1268.6800000000001, 1538.26, 1640.4047186871144, 1640.4047186871144, 1640.4047186871144, 1640.4047186871144, 1628.21, 4942.8800000000001, 4434.6400000000003, 1419.48, 474.05000000000001, 1502.0799999999999, 2936.5799999999999, 336.85000000000002, 4723.3400000000001, 650.39999999999998, 1851.5799999999999, 1023.8099999999999, 3428.5599999999999, 2224.3499999999999, 2223.0149651422312, 1970.48, 2223.0149651422312, 630.89999999999998, 880.12, 663.88999999999999, 470.5, 1926.1600000000001, 5121.8000000000002, 378.06999999999999, 2930.8499999999999, 504.31, 418.57999999999998, 1091.7049611987329, 1091.7049611987329, 1091.7049611987329, 588.34000000000003, 126.83, 919.63999999999999, 8529.7299999999996, 1091.7049611987329, 1091.7049611987329, 153.28, 304.5, 1091.7049611987329, 107.84999999999999, 1091.7049611987329, 543.89999999999998, 1091.7049611987329, 1091.7049611987329, 1091.7049611987329, 1091.7049611987329, 1091.7049611987329, 1091.7049611987329, 1091.7049611987329, 1091.7049611987329, 1091.7049611987329, 1091.7049611987329, 1091.7049611987329, 1091.7049611987329, 1091.7049611987329, 5413.3500000000004, 227.13, 431.63, 423.90607463914989, 425.67000000000002, 357.97000000000003, 2964.8600000000001, 1346.55, 306.31, 538.17999999999995, 944.74000000000001, 7975.79, 2777.8800000000001, 1194.3299999999999, 6067.7200000000003, 2291.4388686533566, 9006.5, 19903.470000000001, 10798.120000000001, 6645.96, 782.75999999999999, 405.02999999999997, 1333.1400000000001, 554.23000000000002, 148.99000000000001, 793.08578807945901, 793.08578807945901, 920.07000000000005, 2930.3699999999999, 793.08578807945901, 793.08578807945901, 2686.3800000000001, 750.97000000000003, 377.72000000000003, 484.95999999999998, 488.72000000000003, 515.58000000000004, 503.44140136603039, 320.38999999999999, 540.86000000000001, 446.87, 503.44140136603039, 603.37, 340.94999999999999, 503.44140136603039, 503.44140136603039, 631.91999999999996, 283.30000000000001, 832.57000000000005, 503.44140136603039, 503.44140136603039, 503.44140136603039, 403.91000000000003, 503.44140136603039, 503.44140136603039, 452.94999999999999, 503.44140136603039, 531.48000000000002, 503.44140136603039, 503.44140136603039, 245.03, 805.07000000000005, 75.359999999999999, 1201.8, 9.5800000000000001, 2580.4400000000001, 65.489999999999995, 1853.8900000000001, 1111.1800000000001, 390.22000000000003, 165.28, 503.44140136603039, 66.459999999999994, 204.06999999999999, 503.44140136603039, 259.06, 2410.8299999999999, 503.44140136603039, 1490.4300000000001, 1559.1199999999999, 2029.9200000000001, 2016.6900000000001, 728.57000000000005, 2304.5300000000002, 1389.5999999999999, 783.35000000000002, 888.62, 863.57000000000005, 896.13818480783402, 763.16999999999996, 398.82999999999998, 743.25, 586.64999999999998, 848.5, 589.90999999999997, 654.77999999999997, 1012.6799999999999, 1083.3499999999999, 896.13818480783402, 1008.64, 13489.040000000001, 660.91999999999996, 1211.4000000000001, 896.13818480783402, 1982.3, 896.13818480783402, 598.98000000000002, 1477.28, 896.13818480783402, 764.10000000000002, 896.13818480783402, 724.99000000000001, 896.13818480783402, 896.13818480783402, 631.63, 1780.1400000000001, 625.23000000000002, 896.13818480783402, 896.13818480783402, 896.13818480783402, 896.13818480783402, 896.13818480783402, 896.13818480783402, 896.13818480783402, 896.13818480783402, 896.13818480783402, 896.13818480783402, 896.13818480783402, 896.13818480783402, 896.13818480783402, 896.13818480783402, 896.13818480783402, 6804, 7631.3400000000001, 5483.8199999999997, 5483.8199999999997, 5483.8199999999997, 5483.8199999999997, 4431.5100000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3817.5500000000002, 3692.02, 3692.02, 3692.02, 2481.75, 1781.5, 2182.0700000000002, 1676.21, 2571.3400000000001, 2131.6799999999998, 3800.3000000000002, 4233.04, 4687.79, 6548.4099999999999, 2490.21, 3860, 3003.6599999999999, 2387.2800000000002, 2176.8400000000001, 4173.3299999999999, 5102.79, 2816.6100000000001, 2816.6100000000001, 2816.6100000000001, 5924.6999999999998, 5924.6999999999998, 1591.6700000000001, 2432.75, 2477.6599999999999, 1897.8399999999999, 3174.8699999999999, 2819.8800000000001, 2764.52, 2766.2173717152095, 2766.2173717152095, 2766.2173717152095, 6040.46, 630.89999999999998, 5817.6400000000003, 5817.6400000000003, 2960.0700000000002, 2960.0700000000002, 17478.889999999999, 2334.4000000000001, 808.46000000000004, 1859.4300000000001, 1180.27, 2190.9400000000001, 1155.26, 1268.6800000000001, 1538.26, 1640.227495398635, 1640.227495398635, 1640.227495398635, 1640.227495398635, 1628.21, 4942.8800000000001, 4434.6400000000003, 1419.48, 474.05000000000001, 1502.0799999999999, 2936.5799999999999, 336.85000000000002, 4723.3400000000001, 650.39999999999998, 1851.5799999999999, 1023.8099999999999, 3428.5599999999999, 2224.3499999999999, 2223.0127951560839, 1970.48, 2223.0127951560839, 630.89999999999998, 880.12, 663.88999999999999, 470.5, 1926.1600000000001, 5121.8000000000002, 378.06999999999999, 2930.8499999999999, 504.31, 418.57999999999998, 1095.4989032109872, 1095.4989032109872, 1095.4989032109872, 588.34000000000003, 126.83, 919.63999999999999, 8529.7299999999996, 1095.4989032109872, 1095.4989032109872, 153.28, 304.5, 1095.4989032109872, 107.84999999999999, 1095.4989032109872, 543.89999999999998, 1095.4989032109872, 1095.4989032109872, 1095.4989032109872, 1095.4989032109872, 1095.4989032109872, 1095.4989032109872, 1095.4989032109872, 1095.4989032109872, 1095.4989032109872, 1095.4989032109872, 1095.4989032109872, 1095.4989032109872, 1095.4989032109872, 5413.3500000000004, 227.13, 431.63, 423.89466793922861, 425.67000000000002, 357.97000000000003, 2964.8600000000001, 1346.55, 306.31, 538.17999999999995, 944.74000000000001, 7975.79, 2777.8800000000001, 1194.3299999999999, 6067.7200000000003, 2307.3100104410973, 9006.5, 19903.470000000001, 10798.120000000001, 6645.96, 782.75999999999999, 405.02999999999997, 1333.1400000000001, 554.23000000000002, 148.99000000000001, 790.25495468408894, 790.25495468408894, 920.07000000000005, 2930.3699999999999, 790.25495468408894, 790.25495468408894, 2686.3800000000001, 750.97000000000003, 377.72000000000003, 484.95999999999998, 488.72000000000003, 515.58000000000004, 503.38705679093528, 540.86000000000001, 320.38999999999999, 446.87, 503.38705679093528, 603.37, 340.94999999999999, 503.38705679093528, 503.38705679093528, 631.91999999999996, 283.30000000000001, 503.38705679093528, 832.57000000000005, 503.38705679093528, 503.38705679093528, 403.91000000000003, 503.38705679093528, 503.38705679093528, 452.94999999999999, 503.38705679093528, 531.48000000000002, 503.38705679093528, 503.38705679093528, 245.03, 805.07000000000005, 75.359999999999999, 1201.8, 9.5800000000000001, 2580.4400000000001, 65.489999999999995, 1853.8900000000001, 1111.1800000000001, 390.22000000000003, 165.28, 503.38705679093528, 66.459999999999994, 204.06999999999999, 503.38705679093528, 259.06, 2410.8299999999999, 503.38705679093528, 1490.4300000000001, 1559.1199999999999, 2029.9200000000001, 2016.6900000000001, 728.57000000000005, 2304.5300000000002, 1389.5999999999999, 783.35000000000002, 888.62, 863.57000000000005, 763.16999999999996, 894.67835347198422, 398.82999999999998, 743.25, 586.64999999999998, 848.5, 589.90999999999997, 654.77999999999997, 1012.6799999999999, 1083.3499999999999, 894.67835347198422, 1008.64, 13489.040000000001, 660.91999999999996, 1211.4000000000001, 894.67835347198422, 1982.3, 894.67835347198422, 598.98000000000002, 1477.28, 894.67835347198422, 764.10000000000002, 894.67835347198422, 724.99000000000001, 894.67835347198422, 894.67835347198422, 631.63, 1780.1400000000001, 625.23000000000002, 894.67835347198422, 894.67835347198422, 894.67835347198422, 894.67835347198422, 894.67835347198422, 894.67835347198422, 894.67835347198422, 894.67835347198422, 894.67835347198422, 894.67835347198422, 894.67835347198422, 894.67835347198422, 894.67835347198422, 894.67835347198422, 894.67835347198422, 6804, 7631.3400000000001, 5483.8199999999997, 5483.8199999999988, 5483.8199999999988, 5483.8199999999988, 4431.5100000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3817.5500000000002, 3692.02, 3692.02, 3692.02, 2481.75, 1781.5, 2182.0700000000002, 1676.21, 2571.3400000000001, 2131.6799999999998, 3800.3000000000002, 4233.04, 4687.79, 6548.4099999999999, 2490.21, 3860, 3003.6599999999999, 2387.2800000000002, 2176.8400000000001, 4173.3299999999999, 5102.79, 2816.6100000000001, 2816.6100000000001, 2816.6100000000001, 5924.6999999999998, 5924.6999999999998, 1591.6700000000001, 2432.75, 2477.6599999999999, 1897.8399999999999, 3174.8699999999999, 2819.8800000000001, 2764.52, 2766.2371106515088, 2766.2371106515088, 2766.2371106515088, 6040.46, 630.89999999999998, 5817.6400000000003, 5817.6400000000003, 2960.0700000000002, 2960.0700000000002, 17478.889999999999, 2334.4000000000001, 808.46000000000004, 1859.4300000000001, 1180.27, 2190.9400000000001, 1155.26, 1268.6800000000001, 1538.26, 1640.1097689060862, 1640.1097689060862, 1640.1097689060862, 1640.1097689060862, 1628.21, 4942.8800000000001, 4434.6400000000003, 1419.48, 474.05000000000001, 1502.0799999999999, 2936.5799999999999, 336.85000000000002, 4723.3400000000001, 650.39999999999998, 1851.5799999999999, 1023.8099999999999, 3428.5599999999999, 2224.3499999999999, 2223.008364304786, 1970.48, 2223.008364304786, 630.89999999999998, 880.12, 663.88999999999999, 470.5, 1926.1600000000001, 5121.8000000000002, 378.06999999999999, 2930.8499999999999, 504.31, 418.57999999999998, 1099.3104589004879, 1099.3104589004879, 1099.3104589004879, 588.34000000000003, 126.83, 919.63999999999999, 8529.7299999999996, 153.28, 1099.3104589004879, 1099.3104589004879, 304.5, 1099.3104589004879, 107.84999999999999, 1099.3104589004879, 543.89999999999998, 1099.3104589004879, 1099.3104589004879, 1099.3104589004879, 1099.3104589004879, 1099.3104589004879, 1099.3104589004879, 1099.3104589004879, 1099.3104589004879, 1099.3104589004879, 1099.3104589004879, 1099.3104589004879, 1099.3104589004879, 1099.3104589004879, 5413.3500000000004, 227.13, 431.63, 423.88648166428158, 425.67000000000002, 357.97000000000003, 2964.8600000000001, 1346.55, 306.31, 538.17999999999995, 944.74000000000001, 7975.79, 2777.8800000000001, 1194.3299999999999, 6067.7200000000003, 2301.2889078848602, 9006.5, 19903.470000000001, 10798.120000000001, 6645.96, 782.75999999999999, 405.02999999999997, 1333.1400000000001, 554.23000000000002, 148.99000000000001, 787.40399671010846, 787.40399671010846, 920.07000000000005, 2930.3699999999999, 787.40399671010846, 787.40399671010846, 2686.3800000000001, 750.97000000000003, 377.72000000000003, 484.95999999999998, 488.72000000000003, 515.58000000000004, 503.33277223781596, 540.86000000000001, 320.38999999999999, 446.87, 503.33277223781596, 603.37, 340.94999999999999, 503.33277223781596, 503.33277223781596, 631.91999999999996, 283.30000000000001, 503.33277223781596, 832.57000000000005, 503.33277223781596, 503.33277223781596, 403.91000000000003, 503.33277223781596, 503.33277223781596, 452.94999999999999, 503.33277223781596, 531.48000000000002, 503.33277223781596, 503.33277223781596, 245.03, 805.07000000000005, 75.359999999999999, 1201.8, 2580.4400000000001, 9.5800000000000001, 65.489999999999995, 1853.8900000000001, 1111.1800000000001, 390.22000000000003, 165.28, 503.33277223781596, 66.459999999999994, 204.06999999999999, 503.33277223781596, 259.06, 2410.8299999999999, 503.33277223781596, 1490.4300000000001, 1559.1199999999999, 2029.9200000000001, 2016.6900000000001, 728.57000000000005, 2304.5300000000002, 1389.5999999999999, 783.35000000000002, 888.62, 863.57000000000005, 763.16999999999996, 893.13930609721592, 398.82999999999998, 743.25, 586.64999999999998, 848.5, 589.90999999999997, 654.77999999999997, 1012.6799999999999, 1083.3499999999999, 893.13930609721592, 1008.64, 13489.040000000001, 660.91999999999996, 1211.4000000000001, 893.13930609721592, 1982.3, 598.98000000000002, 893.13930609721592, 1477.28, 893.13930609721592, 764.10000000000002, 893.13930609721592, 724.99000000000001, 893.13930609721592, 893.13930609721592, 631.63, 1780.1400000000001, 625.23000000000002, 893.13930609721592, 893.13930609721592, 893.13930609721592, 893.13930609721592, 893.13930609721592, 893.13930609721592, 893.13930609721592, 893.13930609721592, 893.13930609721592, 893.13930609721592, 893.13930609721592, 893.13930609721592, 893.13930609721592, 893.13930609721592, 893.13930609721592, 6804, 7631.3400000000001, 5483.8199999999997, 5483.8199999999997, 5483.8199999999997, 5483.8199999999997, 4431.5100000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3817.5500000000002, 3692.02, 3692.02, 3692.02, 2481.75, 1781.5, 2182.0700000000002, 1676.21, 2571.3400000000001, 2131.6799999999998, 3800.3000000000002, 4233.04, 4687.79, 6548.4099999999999, 2490.21, 3860, 3003.6599999999999, 2387.2800000000002, 2176.8400000000001, 4173.3299999999999, 5102.79, 2816.6100000000001, 2816.6100000000001, 2816.6100000000001, 5924.6999999999998, 5924.6999999999998, 1591.6700000000001, 2432.75, 2477.6599999999999, 1897.8399999999999, 3174.8699999999999, 2819.8800000000001, 2764.52, 2766.2587924034547, 2766.2587924034547, 2766.2587924034547, 6040.46, 630.89999999999998, 5817.6400000000003, 5817.6400000000003, 2960.0700000000002, 2960.0700000000002, 17478.889999999999, 2334.4000000000001, 808.46000000000004, 1859.4300000000001, 1180.27, 2190.9400000000001, 1155.26, 1268.6800000000001, 1538.26, 1639.9052074234673, 1639.9052074234673, 1639.9052074234673, 1639.9052074234673, 1628.21, 4942.8800000000001, 4434.6400000000003, 1419.48, 474.05000000000001, 1502.0799999999999, 336.85000000000002, 2936.5799999999999, 4723.3400000000001, 650.39999999999998, 1851.5799999999999, 1023.8099999999999, 3428.5599999999999, 2224.3499999999999, 2223.003222633919, 1970.48, 2223.003222633919, 630.89999999999998, 880.12, 663.88999999999999, 470.5, 1926.1600000000001, 5121.8000000000002, 378.06999999999999, 2930.8499999999999, 504.31, 418.57999999999998, 1103.1531570721252, 1103.1531570721252, 1103.1531570721252, 588.34000000000003, 126.83, 919.63999999999999, 8529.7299999999996, 153.28, 1103.1531570721252, 1103.1531570721252, 304.5, 1103.1531570721252, 107.84999999999999, 1103.1531570721252, 543.89999999999998, 1103.1531570721252, 1103.1531570721252, 1103.1531570721252, 1103.1531570721252, 1103.1531570721252, 1103.1531570721252, 1103.1531570721252, 1103.1531570721252, 1103.1531570721252, 1103.1531570721252, 1103.1531570721252, 1103.1531570721252, 1103.1531570721252, 5413.3500000000004, 227.13, 431.63, 423.8954777906547, 425.67000000000002, 357.97000000000003, 2964.8600000000001, 1346.55, 306.31, 538.17999999999995, 944.74000000000001, 7975.79, 2777.8800000000001, 1194.3299999999999, 2286.7610871709726, 6067.7200000000003, 9006.5, 19903.470000000001, 10798.120000000001, 6645.96, 782.75999999999999, 405.02999999999997, 1333.1400000000001, 554.23000000000002, 148.99000000000001, 784.93793221093244, 784.93793221093244, 920.07000000000005, 2930.3699999999999, 784.93793221093244, 784.93793221093244, 2686.3800000000001, 750.97000000000003, 377.72000000000003, 484.95999999999998, 488.72000000000003, 515.58000000000004, 503.29117732252547, 540.86000000000001, 320.38999999999999, 446.87, 503.29117732252547, 603.37, 340.94999999999999, 503.29117732252547, 503.29117732252547, 631.91999999999996, 283.30000000000001, 503.29117732252547, 832.57000000000005, 503.29117732252547, 503.29117732252547, 403.91000000000003, 503.29117732252547, 503.29117732252547, 452.94999999999999, 503.29117732252547, 531.48000000000002, 503.29117732252547, 503.29117732252547, 245.03, 805.07000000000005, 75.359999999999999, 1201.8, 2580.4400000000001, 9.5800000000000001, 65.489999999999995, 1853.8900000000001, 1111.1800000000001, 390.22000000000003, 165.28, 503.29117732252547, 66.459999999999994, 204.06999999999999, 503.29117732252547, 259.06, 2410.8299999999999, 503.29117732252547, 1490.4300000000001, 1559.1199999999999, 2029.9200000000001, 2016.6900000000001, 728.57000000000005, 2304.5300000000002, 1389.5999999999999, 783.35000000000002, 888.62, 863.57000000000005, 763.16999999999996, 891.87627507271065, 398.82999999999998, 743.25, 586.64999999999998, 848.5, 589.90999999999997, 654.77999999999997, 1012.6799999999999, 1083.3499999999999, 891.87627507271065, 1008.64, 13489.040000000001, 660.91999999999996, 1211.4000000000001, 891.87627507271065, 1982.3, 598.98000000000002, 891.87627507271065, 891.87627507271065, 1477.28, 764.10000000000002, 891.87627507271065, 724.99000000000001, 891.87627507271065, 891.87627507271065, 631.63, 1780.1400000000001, 625.23000000000002, 891.87627507271065, 891.87627507271065, 891.87627507271065, 891.87627507271065, 891.87627507271065, 891.87627507271065, 891.87627507271065, 891.87627507271065, 891.87627507271065, 891.87627507271065, 891.87627507271065, 891.87627507271065, 891.87627507271065, 891.87627507271065, 891.87627507271065, 6804, 7631.3400000000001, 5483.8199999999997, 5483.8199999999997, 5483.8199999999997, 5483.8199999999997, 4431.5100000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3817.5500000000002, 3692.02, 3692.02, 3692.02, 2481.75, 1781.5, 2182.0700000000002, 1676.21, 2571.3400000000001, 2131.6799999999998, 3800.3000000000002, 4233.04, 4687.79, 6548.4099999999999, 2490.21, 3860, 3003.6599999999999, 2387.2800000000002, 2176.8400000000001, 4173.3299999999999, 5102.79, 2816.6100000000001, 2816.6100000000001, 2816.6100000000001, 5924.6999999999998, 5924.6999999999998, 1591.6700000000001, 2432.75, 2477.6599999999999, 1897.8399999999999, 3174.8699999999999, 2819.8800000000001, 2764.52, 2766.2855714503394, 2766.2855714503394, 2766.2855714503394, 6040.46, 630.89999999999998, 5817.6400000000003, 5817.6400000000003, 2960.0700000000002, 2960.0700000000002, 17478.889999999999, 2334.4000000000001, 808.46000000000004, 1859.4300000000001, 1180.27, 2190.9400000000001, 1155.26, 1268.6800000000001, 1538.26, 1639.1935628301765, 1639.1935628301765, 1639.1935628301765, 1639.1935628301765, 1628.21, 4942.8800000000001, 4434.6400000000003, 1419.48, 474.05000000000001, 1502.0799999999999, 336.85000000000002, 2936.5799999999999, 4723.3400000000001, 650.39999999999998, 1851.5799999999999, 1023.8099999999999, 3428.5599999999999, 2224.3499999999999, 2223.0111963151908, 1970.48, 2223.0111963151908, 630.89999999999998, 880.12, 663.88999999999999, 470.5, 1926.1600000000001, 5121.8000000000002, 378.06999999999999, 2930.8499999999999, 504.31, 418.57999999999998, 1105.6159373204987, 1105.6159373204987, 1105.6159373204987, 588.34000000000003, 126.83, 919.63999999999999, 8529.7299999999996, 153.28, 1105.6159373204987, 1105.6159373204987, 304.5, 1105.6159373204987, 107.84999999999999, 1105.6159373204987, 543.89999999999998, 1105.6159373204987, 1105.6159373204987, 1105.6159373204987, 1105.6159373204987, 1105.6159373204987, 1105.6159373204987, 1105.6159373204987, 1105.6159373204987, 1105.6159373204987, 1105.6159373204987, 1105.6159373204987, 1105.6159373204987, 1105.6159373204987, 5413.3500000000004, 227.13, 431.63, 423.9169602691365, 425.67000000000002, 357.97000000000003, 2964.8600000000001, 1346.55, 306.31, 538.17999999999995, 944.74000000000001, 7975.79, 2777.8800000000001, 1194.3299999999999, 2270.8567953263632, 6067.7200000000003, 9006.5, 19903.470000000001, 10798.120000000001, 6645.96, 782.75999999999999, 405.02999999999997, 1333.1400000000001, 554.23000000000002, 148.99000000000001, 782.46036476939139, 782.46036476939139, 920.07000000000005, 2930.3699999999999, 782.46036476939139, 782.46036476939139, 2686.3800000000001, 750.97000000000003, 377.72000000000003, 484.95999999999998, 488.72000000000003, 515.58000000000004, 503.2243601589563, 540.86000000000001, 320.38999999999999, 446.87, 503.2243601589563, 603.37, 340.94999999999999, 503.2243601589563, 503.2243601589563, 631.91999999999996, 283.30000000000001, 503.2243601589563, 832.57000000000005, 503.2243601589563, 403.91000000000003, 503.2243601589563, 503.2243601589563, 503.2243601589563, 452.94999999999999, 503.2243601589563, 531.48000000000002, 503.2243601589563, 503.2243601589563, 245.03, 805.07000000000005, 75.359999999999999, 1201.8, 2580.4400000000001, 9.5800000000000001, 65.489999999999995, 1853.8900000000001, 1111.1800000000001, 390.22000000000003, 165.28, 503.2243601589563, 66.459999999999994, 204.06999999999999, 503.2243601589563, 259.06, 2410.8299999999999, 503.2243601589563, 1490.4300000000001, 1559.1199999999999, 2029.9200000000001, 2016.6900000000001, 728.57000000000005, 2304.5300000000002, 1389.5999999999999, 783.35000000000002, 888.62, 863.57000000000005, 763.16999999999996, 398.82999999999998, 890.62110546930205, 743.25, 586.64999999999998, 848.5, 589.90999999999997, 654.77999999999997, 1012.6799999999999, 1083.3499999999999, 890.62110546930205, 1008.64, 13489.040000000001, 660.91999999999996, 1211.4000000000001, 1982.3, 890.62110546930205, 598.98000000000002, 890.62110546930205, 890.62110546930205, 1477.28, 764.10000000000002, 890.62110546930205, 724.99000000000001, 890.62110546930205, 890.62110546930205, 631.63, 1780.1400000000001, 890.62110546930205, 625.23000000000002, 890.62110546930205, 890.62110546930205, 890.62110546930205, 890.62110546930205, 890.62110546930205, 890.62110546930205, 890.62110546930205, 890.62110546930205, 890.62110546930205, 890.62110546930205, 890.62110546930205, 890.62110546930205, 890.62110546930205, 890.62110546930205, 6804, 7631.3400000000001, 5483.8199999999997, 5483.8199999999997, 5483.8199999999997, 5483.8199999999997, 4431.5100000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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
            "title": "Energy use",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3817.5500000000002, 3692.02, 3692.02, 3692.02, 2481.75, 1781.5, 2182.0700000000002, 1676.21, 2571.3400000000001, 2131.6799999999998, 3800.3000000000002, 4233.04, 4687.79, 6548.4099999999999, 2490.21, 3860, 3003.6599999999999, 2387.2800000000002, 2176.8400000000001, 4173.3299999999999, 5102.79, 2816.6100000000001, 2816.6100000000001, 2816.6100000000001, 5924.6999999999998, 5924.6999999999998, 1591.6700000000001, 2432.75, 2477.6599999999999, 1897.8399999999999, 3174.8699999999999, 2819.8800000000001, 2764.52, 2766.3204611551946, 2766.3204611551946, 2766.3204611551946, 6040.46, 630.89999999999998, 5817.6400000000003, 5817.6400000000003, 2960.0700000000002, 2960.0700000000002, 17478.889999999999, 2334.4000000000001, 808.46000000000004, 1859.4300000000001, 1180.27, 2190.9400000000001, 1155.26, 1268.6800000000001, 1538.26, 1638.5900031004471, 1638.5900031004471, 1638.5900031004471, 1638.5900031004471, 1628.21, 4942.8800000000001, 4434.6400000000003, 1419.48, 474.05000000000001, 1502.0799999999999, 336.85000000000002, 2936.5799999999999, 4723.3400000000001, 650.39999999999998, 1851.5799999999999, 1023.8099999999999, 3428.5599999999999, 2224.3499999999999, 2223.0244616467235, 1970.48, 2223.0244616467235, 630.89999999999998, 880.12, 663.88999999999999, 470.5, 1926.1600000000001, 5121.8000000000002, 378.06999999999999, 2930.8499999999999, 504.31, 418.57999999999998, 1106.6487674646894, 1106.6487674646894, 1106.6487674646894, 588.34000000000003, 126.83, 919.63999999999999, 8529.7299999999996, 153.28, 1106.6487674646894, 1106.6487674646894, 304.5, 1106.6487674646894, 107.84999999999999, 1106.6487674646894, 543.89999999999998, 1106.6487674646894, 1106.6487674646894, 1106.6487674646894, 1106.6487674646894, 1106.6487674646894, 1106.6487674646894, 1106.6487674646894, 1106.6487674646894, 1106.6487674646894, 1106.6487674646894, 1106.6487674646894, 1106.6487674646894, 1106.6487674646894, 5413.3500000000004, 227.13, 431.63, 423.9345739177715, 425.67000000000002, 357.97000000000003, 2964.8600000000001, 1346.55, 306.31, 538.17999999999995, 944.74000000000001, 7975.79, 2777.8800000000001, 1194.3299999999999, 2216.0353425365465, 6067.7200000000003, 9006.5, 19903.470000000001, 10798.120000000001, 6645.96, 782.75999999999999, 405.02999999999997, 1333.1400000000001, 554.23000000000002, 148.99000000000001, 779.78161339798362, 779.78161339798362, 920.07000000000005, 2930.3699999999999, 779.78161339798362, 779.78161339798362, 2686.3800000000001, 750.97000000000003, 377.72000000000003, 484.95999999999998, 488.72000000000003, 515.58000000000004, 503.14972957388346, 540.86000000000001, 320.38999999999999, 446.87, 503.14972957388346, 603.37, 340.94999999999999, 503.14972957388346, 503.14972957388346, 631.91999999999996, 503.14972957388346, 283.30000000000001, 832.57000000000005, 503.14972957388346, 403.91000000000003, 503.14972957388346, 503.14972957388346, 503.14972957388346, 452.94999999999999, 503.14972957388346, 531.48000000000002, 503.14972957388346, 503.14972957388346, 245.03, 805.07000000000005, 75.359999999999999, 1201.8, 2580.4400000000001, 9.5800000000000001, 65.489999999999995, 1853.8900000000001, 1111.1800000000001, 390.22000000000003, 165.28, 503.14972957388346, 66.459999999999994, 204.06999999999999, 503.14972957388346, 259.06, 2410.8299999999999, 503.14972957388346, 1490.4300000000001, 1559.1199999999999, 2029.9200000000001, 2016.6900000000001, 728.57000000000005, 2304.5300000000002, 1389.5999999999999, 783.35000000000002, 888.62, 863.57000000000005, 763.16999999999996, 398.82999999999998, 743.25, 889.3028821215637, 586.64999999999998, 848.5, 589.90999999999997, 654.77999999999997, 1012.6799999999999, 1083.3499999999999, 889.3028821215637, 1008.64, 13489.040000000001, 660.91999999999996, 1211.4000000000001, 1982.3, 889.3028821215637, 598.98000000000002, 889.3028821215637, 889.3028821215637, 1477.28, 764.10000000000002, 889.3028821215637, 724.99000000000001, 889.3028821215637, 889.3028821215637, 631.63, 1780.1400000000001, 889.3028821215637, 625.23000000000002, 889.3028821215637, 889.3028821215637, 889.3028821215637, 889.3028821215637, 889.3028821215637, 889.3028821215637, 889.3028821215637, 889.3028821215637, 889.3028821215637, 889.3028821215637, 889.3028821215637, 889.3028821215637, 889.3028821215637, 889.3028821215637, 6804, 7631.3400000000001, 5483.8199999999997, 5483.8199999999997, 5483.8199999999997, 5483.8199999999997, 4431.5100000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 21430,
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

  
