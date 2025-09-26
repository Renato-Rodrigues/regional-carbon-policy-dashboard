(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Education_Tertiary_school___enrollment_map') 

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
    "b55c7a6a77": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c7a6a77",
  "attrs": {
    "b55c7a6a77": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 160,
      "colorbar": {
        "title": "Tertiary school enrollment"
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
        "title": "Tertiary school enrollment",
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
      "z": [60.899999999999999, 52.32, 52.32, 52.32, 60.009999999999998, 30.09, 71.989999999999995, 31.960000000000001, 65.530000000000001, 61.859999999999999, 63.799999999999997, 55, 59.609999999999999, 12.06, 60.619999999999997, 39.210000000000001, 34.549999999999997, 69.629999999999995, 71.030000000000001, 64.219999999999999, 80.489999999999995, 68.170000000000002, 68.170000000000002, 68.170000000000002, 88.290000000000006, 88.290000000000006, 38.909999999999997, 54.630000000000003, 42.850000000000001, 42.380000000000003, 69.599999999999994, 55.850000000000001, 61.460000000000001, 61.459999999999994, 61.459999999999994, 61.459999999999994, 61.459999999999994, 10.619999999999999, 77.969999999999999, 77.969999999999999, 43.049999999999997, 20.350000000000001, 60.030000000000001, 60.259999999999998, 16.379999999999999, 39.539999999999999, 19.219999999999999, 48.030000000000001, 33.280000000000001, 26.969999999999999, 16.210000000000001, 7.3399999999999999, 49.079999999999998, 66.640000000000001, 34.761189324799375, 29.719999999999999, 68.700000000000003, 56.310000000000002, 13.82, 30.579999999999998, 59.479999999999997, 19.789999999999999, 18.300000000000001, 39.57, 7.8099999999999996, 36.659999999999997, 36.810000000000002, 62.840000000000003, 14.390000000000001, 14.501236603625387, 31.93, 73.129999999999995, 10.619999999999999, 15.9, 10.06, 29.879999999999999, 43.960000000000001, 83.939999999999998, 10.92, 31.469999999999999, 16.170000000000002, 3.1699999999999999, 15.173127502159623, 4.8600000000000003, 15.173127502159623, 14.609999999999999, 15.173127502159623, 12.83, 0.20999999999999999, 15.173127502159623, 15.173127502159623, 4.8600000000000003, 12.59, 15.173127502159623, 15.173127502159623, 6.2699999999999996, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 67.260000000000005, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 84.459999999999994, 6.2000000000000002, 2.3900000000000001, 4.8799999999999999, 1.3799999999999999, 4.8700000000000001, 20.34, 15.449999999999999, 9.2699999999999996, 13.140000000000001, 54.520000000000003, 36.490000000000002, 33.020000000000003, 46.479999999999997, 31.41, 14.33, 19.579999999999998, 29.350000000000001, 15.75, 26.129999999999999, 26.390000000000001, 18.350000000000001, 8.1300000000000008, 10.93, 0.81000000000000005, 4.9199999999999999, 26.120000000000001, 0.96999999999999997, 61.600000000000001, 3.2000000000000002, 12.796619932201894, 16.579999999999998, 9.5700000000000003, 4.2999999999999998, 2.3500000000000001, 0.89000000000000001, 2.9199999999999999, 3.79, 5.0700000000000003, 0.97999999999999998, 8.7799999999999994, 2.1800000000000002, 2.77, 5.1699999999999999, 1.52, 7.3700000000000001, 0.38, 4.0099999999999998, 4.9100000000000001, 3.5172536831869268, 2.3199999999999998, 2.23, 5.6600000000000001, 2.1600000000000001, 3.5172536831869268, 5.0800000000000001, 3.5172536831869268, 1.6499999999999999, 3.7999999999999998, 9.4100000000000001, 1.76, 2.73, 6.4100000000000001, 8.8699999999999992, 1.02, 7.6699999999999999, 2.1699999999999999, 16.629999999999999, 5.3300000000000001, 6.1600000000000001, 3.5172536831869268, 1.1399999999999999, 3.3999999999999999, 4.1399999999999997, 3.5172536831869268, 3.9300000000000002, 2.4300000000000002, 3.5172536831869268, 43.229999999999997, 23.050000000000001, 64.400000000000006, 43.520000000000003, 29.5, 39.549999999999997, 41.759999999999998, 30.23, 38.32, 17.239999999999998, 28.784538325409887, 28.784538325409887, 34.100000000000001, 28.784538325409887, 15.539999999999999, 20.469999999999999, 27, 15.42, 25.989999999999998, 78.950000000000003, 44.329999999999998, 18.52, 8.4600000000000009, 7.25, 8.8000000000000007, 28.784538325409887, 28.784538325409887, 28.784538325409887, 59.990000000000002, 16.190000000000001, 28.784538325409887, 14.01, 28.784538325409887, 23.84, 54.380000000000003, 28.784538325409887, 27.690000000000001, 14.83, 28.784538325409887, 33.189999999999998, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 80.629999999999995, 63.829999999999998, 119.68000000000001, 119.68000000000001, 119.68000000000001, 119.68000000000001, 80.390000000000001],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.899999999999999, 52.32, 52.32, 52.32, 60.009999999999998, 30.09, 71.989999999999995, 31.960000000000001, 65.530000000000001, 61.859999999999999, 63.799999999999997, 55, 59.609999999999999, 12.06, 60.619999999999997, 39.210000000000001, 34.549999999999997, 69.629999999999995, 71.030000000000001, 64.219999999999999, 80.489999999999995, 68.170000000000002, 68.170000000000002, 68.170000000000002, 88.290000000000006, 88.290000000000006, 38.909999999999997, 54.630000000000003, 42.850000000000001, 42.380000000000003, 69.599999999999994, 55.850000000000001, 61.460000000000001, 61.459999999999994, 61.459999999999994, 61.459999999999994, 61.459999999999994, 10.619999999999999, 77.969999999999999, 77.969999999999999, 43.049999999999997, 20.350000000000001, 60.030000000000001, 60.259999999999998, 16.379999999999999, 39.539999999999999, 19.219999999999999, 48.030000000000001, 33.280000000000001, 26.969999999999999, 16.210000000000001, 7.3399999999999999, 49.079999999999998, 66.640000000000001, 34.761189324799375, 29.719999999999999, 68.700000000000003, 56.310000000000002, 13.82, 30.579999999999998, 59.479999999999997, 19.789999999999999, 18.300000000000001, 39.57, 7.8099999999999996, 36.659999999999997, 36.810000000000002, 62.840000000000003, 14.390000000000001, 14.501236603625387, 31.93, 73.129999999999995, 10.619999999999999, 15.9, 10.06, 29.879999999999999, 43.960000000000001, 83.939999999999998, 10.92, 31.469999999999999, 16.170000000000002, 3.1699999999999999, 15.173127502159623, 4.8600000000000003, 15.173127502159623, 14.609999999999999, 15.173127502159623, 12.83, 0.20999999999999999, 15.173127502159623, 15.173127502159623, 4.8600000000000003, 12.59, 15.173127502159623, 15.173127502159623, 6.2699999999999996, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 67.260000000000005, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 15.173127502159623, 84.459999999999994, 6.2000000000000002, 2.3900000000000001, 4.8799999999999999, 1.3799999999999999, 4.8700000000000001, 20.34, 15.449999999999999, 9.2699999999999996, 13.140000000000001, 54.520000000000003, 36.490000000000002, 33.020000000000003, 46.479999999999997, 31.41, 14.33, 19.579999999999998, 29.350000000000001, 15.75, 26.129999999999999, 26.390000000000001, 18.350000000000001, 8.1300000000000008, 10.93, 0.81000000000000005, 4.9199999999999999, 26.120000000000001, 0.96999999999999997, 61.600000000000001, 3.2000000000000002, 12.796619932201894, 16.579999999999998, 9.5700000000000003, 4.2999999999999998, 2.3500000000000001, 0.89000000000000001, 2.9199999999999999, 3.79, 5.0700000000000003, 0.97999999999999998, 8.7799999999999994, 2.1800000000000002, 2.77, 5.1699999999999999, 1.52, 7.3700000000000001, 0.38, 4.0099999999999998, 4.9100000000000001, 3.5172536831869268, 2.3199999999999998, 2.23, 5.6600000000000001, 2.1600000000000001, 3.5172536831869268, 5.0800000000000001, 3.5172536831869268, 1.6499999999999999, 3.7999999999999998, 9.4100000000000001, 1.76, 2.73, 6.4100000000000001, 8.8699999999999992, 1.02, 7.6699999999999999, 2.1699999999999999, 16.629999999999999, 5.3300000000000001, 6.1600000000000001, 3.5172536831869268, 1.1399999999999999, 3.3999999999999999, 4.1399999999999997, 3.5172536831869268, 3.9300000000000002, 2.4300000000000002, 3.5172536831869268, 43.229999999999997, 23.050000000000001, 64.400000000000006, 43.520000000000003, 29.5, 39.549999999999997, 41.759999999999998, 30.23, 38.32, 17.239999999999998, 28.784538325409887, 28.784538325409887, 34.100000000000001, 28.784538325409887, 15.539999999999999, 20.469999999999999, 27, 15.42, 25.989999999999998, 78.950000000000003, 44.329999999999998, 18.52, 8.4600000000000009, 7.25, 8.8000000000000007, 28.784538325409887, 28.784538325409887, 28.784538325409887, 59.990000000000002, 16.190000000000001, 28.784538325409887, 14.01, 28.784538325409887, 23.84, 54.380000000000003, 28.784538325409887, 27.690000000000001, 14.83, 28.784538325409887, 33.189999999999998, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 28.784538325409887, 80.629999999999995, 63.829999999999998, 119.68000000000001, 119.68000000000001, 119.68000000000001, 119.68000000000001, 80.390000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.899999999999999, 53.460000000000001, 53.460000000000001, 53.460000000000001, 63.329999999999998, 26.620000000000001, 79.790000000000006, 36.020000000000003, 67.469999999999999, 61.859999999999999, 63.799999999999997, 56.770000000000003, 62.039999999999999, 11.323333333333334, 61.740000000000002, 45.420000000000002, 36.659999999999997, 74.900000000000006, 74.609999999999999, 65.780000000000001, 83.030000000000001, 74.969999999999999, 74.969999999999999, 74.969999999999999, 90.140000000000001, 90.140000000000001, 41.799999999999997, 61.5, 43.689999999999998, 44.079999999999998, 73.349999999999994, 58.920000000000002, 59.460000000000001, 59.460000000000001, 59.460000000000001, 59.460000000000001, 59.460000000000001, 10.93, 78.609999999999999, 78.609999999999999, 44.880000000000003, 24.710000000000001, 66.579999999999998, 63.439999999999998, 19.82, 40.920000000000002, 21.41, 46.920000000000002, 34.140000000000001, 27.420000000000002, 18.879999999999999, 7.6600000000000001, 49.079999999999998, 66.640000000000001, 35.747523043192565, 30.77, 69.510000000000005, 56.310000000000002, 13.960000000000001, 30.579999999999998, 60.869999999999997, 19.789999999999999, 19.539999999999999, 38.5, 7.8099999999999996, 37.079999999999998, 39.719999999999999, 62.840000000000003, 16.780000000000001, 16.874456317944144, 32, 60.460000000000001, 10.93, 16.32, 13.195, 29.350000000000001, 45.979999999999997, 83.939999999999998, 10.92, 30.300000000000001, 16.170000000000002, 3.1800000000000002, 15.00253333535573, 5.6600000000000001, 15.00253333535573, 14.5, 15.00253333535573, 13.33, 2.7324999999999999, 15.00253333535573, 15.00253333535573, 4.8799999999999999, 12.59, 15.00253333535573, 15.00253333535573, 7.0917647058823521, 15.00253333535573, 15.00253333535573, 15.00253333535573, 15.00253333535573, 67.260000000000005, 15.00253333535573, 15.00253333535573, 15.00253333535573, 15.00253333535573, 15.00253333535573, 15.00253333535573, 15.00253333535573, 15.00253333535573, 15.00253333535573, 89.799999999999997, 5.7300000000000004, 3, 5.6600000000000001, 1.3899999999999999, 4.8700000000000001, 22.32, 15.449999999999999, 8.8300000000000001, 15.17, 53.909999999999997, 40.890000000000001, 34.890000000000001, 46.479999999999997, 35.439999999999998, 15.15, 19.969999999999999, 25.925000000000001, 16.890000000000001, 29.5, 27.68, 19, 9.8399999999999999, 11.06, 0.78000000000000003, 4.9199999999999999, 28.510000000000002, 1.25, 61.600000000000001, 3.25, 13.439119230642529, 16.579999999999998, 9.8200000000000003, 4.2999999999999998, 2.6600000000000001, 1.21, 2.9199999999999999, 3.6600000000000001, 5.0700000000000003, 1.22, 8.7799999999999994, 2.5299999999999998, 2.0699999999999998, 5.1600000000000001, 1.8400000000000001, 0.46000000000000002, 7.3700000000000001, 4.0099999999999998, 4.9100000000000001, 3.5799649900078401, 2.3199999999999998, 2.6099999999999999, 5.7199999999999998, 2.1600000000000001, 3.5799649900078401, 5.0800000000000001, 3.5799649900078401, 1.6499999999999999, 4.1366666666666667, 9.4100000000000001, 1.76, 3.1150000000000002, 6.7800000000000002, 9.3599999999999994, 1.02, 8.4168749999999992, 2.1699999999999999, 18.09, 5.3300000000000001, 6.1600000000000001, 1.4399999999999999, 3.5799649900078401, 3.6825000000000001, 5.5999999999999996, 3.5799649900078401, 3.9300000000000002, 2.4300000000000002, 3.5799649900078401, 43.229999999999997, 23.699999999999999, 64.890000000000001, 44.329999999999998, 29.5, 41.560000000000002, 42.770000000000003, 32.07, 38.32, 17.239999999999998, 29.525462690547428, 29.525462690547428, 36.131428571428572, 29.525462690547428, 15.630000000000001, 21.52, 27.239999999999998, 15.42, 25.989999999999998, 78.950000000000003, 43.140000000000001, 18.629999999999999, 11.539999999999999, 10.43, 8.8000000000000007, 29.525462690547428, 29.525462690547428, 29.525462690547428, 15.59, 59.990000000000002, 29.525462690547428, 14.01, 29.525462690547428, 23.84, 54.380000000000003, 29.525462690547428, 27.84, 14.83, 29.525462690547428, 33.189999999999998, 29.525462690547428, 29.525462690547428, 29.525462690547428, 29.525462690547428, 29.525462690547428, 29.525462690547428, 29.525462690547428, 29.525462690547428, 29.525462690547428, 29.525462690547428, 29.525462690547428, 29.525462690547428, 29.525462690547428, 29.525462690547428, 80.629999999999995, 63.829999999999998, 119.68000000000001, 119.68000000000002, 119.68000000000002, 119.68000000000002, 80.390000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.899999999999999, 53.880000000000003, 53.880000000000003, 53.880000000000003, 65.329999999999998, 32.210000000000001, 89.790000000000006, 34.100000000000001, 68.140000000000001, 61.859999999999999, 63.799999999999997, 58.789999999999999, 62.82, 10.586666666666666, 63.780000000000001, 49.119999999999997, 40.770000000000003, 79.730000000000004, 75.420000000000002, 67.980000000000004, 81.739999999999995, 80.810000000000002, 80.810000000000002, 80.810000000000002, 91.939999999999998, 91.939999999999998, 45.460000000000001, 64.980000000000004, 46.229999999999997, 47.289999999999999, 81.269999999999996, 58.869999999999997, 59.280000000000001, 59.280000000000008, 59.280000000000008, 59.280000000000008, 59.280000000000008, 10.65, 78.450000000000003, 78.450000000000003, 45.25, 24.710000000000001, 69.829999999999998, 66.890000000000001, 23.539999999999999, 44.030000000000001, 24.66, 51.82, 36.100000000000001, 29.050000000000001, 21.469999999999999, 7.8799999999999999, 49.079999999999998, 66.640000000000001, 38.890869755028007, 33.219999999999999, 71.950000000000003, 56.310000000000002, 9.8900000000000006, 30.579999999999998, 63.719999999999999, 19.789999999999999, 20.07, 39.450000000000003, 7.8099999999999996, 38.340000000000003, 43.859999999999999, 62.840000000000003, 18.559999999999999, 18.646728706268242, 33.060000000000002, 50.049999999999997, 10.65, 16.870000000000001, 16.329999999999998, 28.59, 49.68, 83.939999999999998, 10.92, 27.690000000000001, 16.170000000000002, 3.8300000000000001, 14.639143176175393, 7.7000000000000002, 14.639143176175393, 14.41, 14.639143176175393, 13.19, 5.2549999999999999, 14.639143176175393, 14.639143176175393, 4.8799999999999999, 12.59, 14.639143176175393, 14.639143176175393, 7.9135294117647055, 14.639143176175393, 14.639143176175393, 14.639143176175393, 14.639143176175393, 67.260000000000005, 14.639143176175393, 14.639143176175393, 14.639143176175393, 14.639143176175393, 14.639143176175393, 14.639143176175393, 14.639143176175393, 14.639143176175393, 14.639143176175393, 95.370000000000005, 6.2999999999999998, 4.3799999999999999, 7.1100000000000003, 1.9159999999999999, 4.8700000000000001, 23.579999999999998, 15.5, 8.8000000000000007, 18.329999999999998, 54.899999999999999, 40.25, 36.909999999999997, 46.479999999999997, 38.789999999999999, 17.120000000000001, 23.375, 22.5, 14.720000000000001, 31.170000000000002, 28.800000000000001, 20.829999999999998, 11.050000000000001, 11.640000000000001, 0.93000000000000005, 4.9199999999999999, 1.46, 30.289999999999999, 61.600000000000001, 2.9900000000000002, 14.288030060242555, 16.579999999999998, 10.44, 4.2999999999999998, 2.8500000000000001, 1.4199999999999999, 2.96, 3.6100000000000003, 5.0700000000000003, 1.5, 8.7799999999999994, 2.5499999999999998, 2.6200000000000001, 5.9500000000000002, 2.1600000000000001, 0.45000000000000001, 7.3700000000000001, 4.0099999999999998, 5.4100000000000001, 3.7596491556174021, 3.1099999999999999, 2.75, 5.6500000000000004, 3.7596491556174021, 2.1899999999999999, 5.0800000000000001, 3.7596491556174021, 1.3700000000000001, 4.4733333333333336, 9.4100000000000001, 2.0979999999999999, 7.1500000000000004, 3.5, 9.0399999999999991, 1.1616666666666666, 9.1637500000000003, 2.1699999999999999, 21.789999999999999, 4.6799999999999997, 6.1600000000000001, 2.1600000000000001, 3.7596491556174021, 3.9649999999999999, 7.1200000000000001, 3.7596491556174021, 3.9300000000000002, 2.4300000000000002, 3.7596491556174021, 43.229999999999997, 24.129999999999999, 63.729999999999997, 50.270000000000003, 32.25, 50.859999999999999, 44.380000000000003, 32.369999999999997, 38.32, 17.239999999999998, 29.89777792575482, 29.89777792575482, 38.162857142857142, 29.89777792575482, 16.077500000000001, 22.32, 27.920000000000002, 15.42, 28.697142857142854, 78.950000000000003, 41.770000000000003, 16.82, 11.539999999999999, 10.94, 8.8000000000000007, 29.89777792575482, 29.89777792575482, 29.89777792575482, 16.050000000000001, 59.990000000000002, 29.89777792575482, 13.65, 29.89777792575482, 23.84, 54.380000000000003, 29.89777792575482, 33.920000000000002, 14.83, 29.89777792575482, 33.189999999999998, 29.89777792575482, 29.89777792575482, 29.89777792575482, 29.89777792575482, 29.89777792575482, 29.89777792575482, 29.89777792575482, 29.89777792575482, 29.89777792575482, 29.89777792575482, 29.89777792575482, 29.89777792575482, 29.89777792575482, 29.89777792575482, 80.629999999999995, 63.829999999999998, 119.68000000000001, 119.68000000000001, 119.68000000000001, 119.68000000000001, 80.390000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.899999999999999, 53.880000000000003, 53.880000000000003, 53.880000000000003, 67.280000000000001, 31.23, 94.219999999999999, 34.299999999999997, 68.959999999999994, 61.859999999999999, 63.799999999999997, 59.829999999999998, 63.369999999999997, 9.8499999999999996, 65.090000000000003, 49.880000000000003, 45.030000000000001, 82.450000000000003, 74.599999999999994, 68.799999999999997, 79.340000000000003, 78.510000000000005, 78.510000000000005, 78.510000000000005, 93.430000000000007, 93.430000000000007, 54.140000000000001, 66.400000000000006, 47.789999999999999, 48.600000000000001, 85.269999999999996, 58.439999999999998, 59.200000000000003, 59.200000000000003, 59.200000000000003, 59.200000000000003, 59.200000000000003, 11.43, 77.930000000000007, 77.930000000000007, 46.280000000000001, 29.890000000000001, 72.969999999999999, 71.939999999999998, 27.710000000000001, 46.549999999999997, 27.670000000000002, 42.810000000000002, 39.399999999999999, 28.59, 25.559999999999999, 9.3200000000000003, 49.079999999999998, 66.640000000000001, 39.408528569621588, 37.310000000000002, 73.150000000000006, 56.310000000000002, 10.029999999999999, 30.579999999999998, 66.489999999999995, 19.789999999999999, 21.199999999999999, 40.090000000000003, 7.8099999999999996, 41.810000000000002, 47.460000000000001, 62.840000000000003, 20.510000000000002, 20.589964719473052, 34.079999999999998, 45.310000000000002, 11.43, 16.960000000000001, 17.239999999999998, 28.84, 50.329999999999998, 83.939999999999998, 10.92, 28.25, 16.170000000000002, 6.2000000000000002, 15.164010369382808, 8.9100000000000001, 15.164010369382808, 16.992142857142859, 15.164010369382808, 13.06, 7.7774999999999999, 15.164010369382808, 15.164010369382808, 4.8799999999999999, 12.59, 15.164010369382808, 15.164010369382808, 8.735294117647058, 15.164010369382808, 15.164010369382808, 15.164010369382808, 15.164010369382808, 67.260000000000005, 15.164010369382808, 15.164010369382808, 15.164010369382808, 15.164010369382808, 15.164010369382808, 15.164010369382808, 15.164010369382808, 15.164010369382808, 15.164010369382808, 99.950000000000003, 7.2400000000000002, 4.4500000000000002, 7.5999999999999996, 2.4420000000000002, 5.1100000000000003, 26.32, 15.5, 8.4700000000000006, 21.039999999999999, 54.310000000000002, 39.43, 46.479999999999997, 38.159999999999997, 40.630000000000003, 19.23, 26.780000000000001, 12.84, 19.719999999999999, 29.870000000000001, 28.73, 21.510000000000002, 12.48, 12.140000000000001, 0.93999999999999995, 4.9199999999999999, 1.6433333333333333, 31.050000000000001, 61.600000000000001, 3.3999999999999999, 14.840992913918335, 16.579999999999998, 10.272, 4.2999999999999998, 3.04, 1.4399999999999999, 3.2124999999999999, 3.5600000000000001, 4.5700000000000003, 2.2200000000000002, 8.7799999999999994, 2.48, 2.8100000000000001, 6.96, 2.27, 0.47999999999999998, 7.3700000000000001, 4.0099999999999998, 5.5800000000000001, 3.9765731790945544, 5.4199999999999999, 3.5699999999999998, 6.4800000000000004, 3.9765731790945544, 2.2200000000000002, 5.0800000000000001, 3.9765731790945544, 1.0900000000000001, 4.8100000000000005, 9.4100000000000001, 2.4359999999999999, 6.7999999999999998, 3.7200000000000002, 9.8800000000000008, 1.3033333333333332, 9.9106249999999996, 2.52, 23.719999999999999, 4.4500000000000002, 6.1600000000000001, 2.4500000000000002, 3.9765731790945544, 4.2475000000000005, 8.1999999999999993, 3.9765731790945544, 3.9300000000000002, 2.4300000000000002, 3.9765731790945544, 43.229999999999997, 24.57, 67.120000000000005, 49.32, 34.369999999999997, 60.160000000000004, 45.340000000000003, 33.829999999999998, 38.32, 17.239999999999998, 30.717573103171315, 30.717573103171315, 40.194285714285712, 30.717573103171315, 16.525000000000002, 23.149999999999999, 29.600000000000001, 15.42, 31.404285714285713, 78.950000000000003, 42.780000000000001, 16.699999999999999, 11.539999999999999, 10.98, 8.8000000000000007, 30.717573103171315, 30.717573103171315, 30.717573103171315, 16.879999999999999, 59.990000000000002, 30.717573103171315, 10.300000000000001, 30.717573103171315, 23.84, 54.380000000000003, 30.717573103171315, 34.030000000000001, 14.83, 30.717573103171315, 33.189999999999998, 30.717573103171315, 30.717573103171315, 30.717573103171315, 30.717573103171315, 30.717573103171315, 30.717573103171315, 30.717573103171315, 30.717573103171315, 30.717573103171315, 30.717573103171315, 30.717573103171315, 30.717573103171315, 30.717573103171315, 30.717573103171315, 81.642499999999998, 63.829999999999998, 119.68000000000001, 119.68000000000001, 119.68000000000001, 119.68000000000001, 80.390000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.899999999999999, 52.950000000000003, 52.950000000000003, 52.950000000000003, 68.870000000000005, 34.670000000000002, 89.730000000000004, 36.229999999999997, 69.230000000000004, 61.859999999999999, 63.799999999999997, 60.390000000000001, 62.460000000000001, 10.26, 66.939999999999998, 54.18, 50.560000000000002, 82.519999999999996, 73.040000000000006, 68.819999999999993, 75.390000000000001, 78.239999999999995, 78.239999999999995, 78.239999999999995, 95.079999999999998, 95.079999999999998, 60.280000000000001, 66.260000000000005, 51.240000000000002, 50.530000000000001, 87.269999999999996, 58.299999999999997, 58.850000000000001, 58.850000000000001, 58.850000000000001, 58.850000000000001, 58.850000000000001, 13.029999999999999, 77.040000000000006, 77.040000000000006, 47.82, 30.969999999999999, 73.140000000000001, 76.260000000000005, 32.119999999999997, 47.68, 31.390000000000001, 41.549999999999997, 41.200000000000003, 34.560000000000002, 32.700000000000003, 10.530000000000001, 49.079999999999998, 66.640000000000001, 41.272929857104543, 39.390000000000001, 75.879999999999995, 54.067500000000003, 9.9399999999999995, 30.579999999999998, 69.530000000000001, 19.359999999999999, 22.170000000000002, 39.82, 7.8099999999999996, 44.43, 47.759999999999998, 62.840000000000003, 21.449999999999999, 21.571344996710987, 42.909999999999997, 45.25, 13.029999999999999, 17.800000000000001, 19.23, 28.954999999999998, 54.619999999999997, 83.939999999999998, 10.92, 29.859999999999999, 16.170000000000002, 7.5099999999999998, 15.876938152523159, 11.42, 15.876938152523159, 19.574285714285715, 15.876938152523159, 13.34, 10.300000000000001, 15.876938152523159, 15.876938152523159, 4.8799999999999999, 12.59, 15.876938152523159, 15.876938152523159, 9.5570588235294114, 15.876938152523159, 15.876938152523159, 15.876938152523159, 15.876938152523159, 67.260000000000005, 15.876938152523159, 15.876938152523159, 15.876938152523159, 15.876938152523159, 15.876938152523159, 15.876938152523159, 15.876938152523159, 15.876938152523159, 15.876938152523159, 102.95, 7.8700000000000001, 5.0300000000000002, 9.4900000000000002, 2.968, 5.54, 31.039999999999999, 15.5, 9.5600000000000005, 21.670000000000002, 57.100000000000001, 37.159999999999997, 46.479999999999997, 40.649999999999999, 44.149999999999999, 20.41, 30.185000000000002, 11.82, 25.084, 29.260000000000002, 29.18, 23.77, 12.210000000000001, 11.609999999999999, 0.89000000000000001, 4.9199999999999999, 1.8266666666666664, 31.34, 61.600000000000001, 3.8599999999999999, 15.143789080118971, 16.579999999999998, 10.103999999999999, 4.2800000000000002, 3.23, 1.46, 3.4649999999999999, 3.6749999999999998, 5.7199999999999998, 3.1699999999999999, 8.7799999999999994, 3.25, 3.1800000000000002, 7.4299999999999997, 2.4199999999999999, 0.48999999999999999, 7.3700000000000001, 4.0099999999999998, 6.21, 4.4112323148574353, 8.3499999999999996, 3.8700000000000001, 7.7599999999999998, 4.4112323148574353, 2.3199999999999998, 5.7000000000000002, 4.4112323148574353, 1.645, 5.1466666666666665, 9.4100000000000001, 2.774, 8.1850000000000005, 4.9383333333333335, 10.02, 1.4450000000000001, 10.657500000000001, 2.52, 24.27, 4.9119999999999999, 6.1600000000000001, 2.7200000000000002, 4.4112323148574353, 4.5300000000000002, 9.3599999999999994, 4.4112323148574353, 3.9300000000000002, 2.4300000000000002, 4.4112323148574353, 43.229999999999997, 25.149999999999999, 66.909999999999997, 54.719999999999999, 35.479999999999997, 69.460000000000008, 50.390000000000001, 37.780000000000001, 38.32, 17.239999999999998, 32.2636485064087, 32.2636485064087, 42.22571428571429, 32.2636485064087, 16.9725, 24.649999999999999, 31.280000000000001, 15.42, 34.111428571428569, 78.950000000000003, 42.979999999999997, 19.185000000000002, 11.539999999999999, 11.06, 8.8000000000000007, 32.2636485064087, 32.2636485064087, 32.2636485064087, 17.890000000000001, 59.990000000000002, 32.2636485064087, 9.2300000000000004, 32.2636485064087, 23.84, 54.380000000000003, 32.2636485064087, 36.799999999999997, 14.83, 32.2636485064087, 30.48, 32.2636485064087, 32.2636485064087, 32.2636485064087, 32.2636485064087, 32.2636485064087, 32.2636485064087, 32.2636485064087, 32.2636485064087, 32.2636485064087, 32.2636485064087, 32.2636485064087, 32.2636485064087, 32.2636485064087, 32.2636485064087, 82.655000000000001, 63.829999999999998, 119.68000000000001, 119.68000000000001, 119.68000000000001, 119.68000000000001, 80.390000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.899999999999999, 52.479999999999997, 52.479999999999997, 52.479999999999997, 67.579999999999998, 33.32, 94.61333333333333, 40.850000000000001, 69.400000000000006, 61.859999999999999, 66.200000000000003, 61.020000000000003, 62.759999999999998, 10.67, 70.290000000000006, 57.920000000000002, 54.159999999999997, 85.75, 72.359999999999999, 67.840000000000003, 71.159999999999997, 74.859999999999999, 74.859999999999999, 74.859999999999999, 95.870000000000005, 95.870000000000005, 73.450000000000003, 63.969999999999999, 52.649999999999999, 52.350000000000001, 88.599999999999994, 54.020000000000003, 57.43, 57.43, 57.43, 57.43, 57.43, 14.91, 73.590000000000003, 73.590000000000003, 49.689999999999998, 36.600000000000001, 73.579999999999998, 79.730000000000004, 33.420000000000002, 48.200000000000003, 34.590000000000003, 38.060000000000002, 40, 39.140000000000001, 40.450000000000003, 11.74, 49.079999999999998, 66.640000000000001, 41.932113180663471, 40.770000000000003, 77.25, 51.825000000000003, 10.029999999999999, 30.579999999999998, 70.510000000000005, 19.050000000000001, 22.640000000000001, 7.8099999999999996, 44.100000000000001, 46, 49.979999999999997, 62.840000000000003, 21.850000000000001, 22.04071647449037, 56.210000000000001, 49.579999999999998, 14.91, 20.809999999999999, 20.079999999999998, 29.07, 53.109999999999999, 83.939999999999998, 11.74, 33.259999999999998, 16.170000000000002, 8.6999999999999993, 17.296265448942062, 13.25, 17.296265448942062, 22.15642857142857, 17.296265448942062, 14.050000000000001, 11.380000000000001, 17.296265448942062, 17.296265448942062, 4.8799999999999999, 12.59, 17.296265448942062, 17.296265448942062, 10.378823529411765, 17.296265448942062, 17.296265448942062, 17.296265448942062, 17.296265448942062, 67.260000000000005, 17.296265448942062, 17.296265448942062, 17.296265448942062, 17.296265448942062, 17.296265448942062, 17.296265448942062, 17.296265448942062, 17.296265448942062, 17.296265448942062, 103.14, 8.8399999999999999, 4.9699999999999998, 10.48, 3.4939999999999998, 6.5700000000000003, 37.640000000000001, 15.5, 9.7300000000000004, 22.280000000000001, 56.5, 39.909999999999997, 46.479999999999997, 41.939999999999998, 45.390000000000001, 33.590000000000003, 20.449999999999999, 11.34, 30.448, 29.219999999999999, 28.989999999999998, 27.265000000000001, 13.59, 12.67, 1.02, 4.9199999999999999, 2.0099999999999998, 32.530000000000001, 61.600000000000001, 3.98, 16.432989241911493, 16.579999999999998, 9.9359999999999999, 5.3600000000000003, 3.4199999999999999, 1.6866666666666668, 3.7175000000000002, 3.79, 7.7000000000000002, 3.6499999999999999, 4.0199999999999996, 8.3499999999999996, 3.27, 8.0500000000000007, 2.9399999999999999, 0.57333333333333336, 4.0099999999999998, 7.3700000000000001, 7.8099999999999996, 4.8665363511302715, 9.4100000000000001, 4.2300000000000004, 7.6600000000000001, 4.8665363511302715, 2.5499999999999998, 6.8399999999999999, 4.8665363511302715, 2.2000000000000002, 5.4833333333333334, 9.4100000000000001, 3.1120000000000001, 9.5700000000000003, 6.1566666666666663, 13.94, 1.5866666666666667, 11.404375, 2.52, 26.289999999999999, 5.3740000000000006, 6.1600000000000001, 2.9100000000000001, 4.8665363511302715, 5.5050000000000008, 11.619999999999999, 4.8665363511302715, 3.9300000000000002, 2.4300000000000002, 4.8665363511302715, 43.229999999999997, 25.780000000000001, 68.819999999999993, 56.770000000000003, 37.939999999999998, 78.760000000000005, 51.060000000000002, 41.729999999999997, 38.32, 16.174999999999997, 34.053345395963994, 34.053345395963994, 44.25714285714286, 34.053345395963994, 17.420000000000002, 25.460000000000001, 37.119999999999997, 15.42, 36.818571428571424, 84.599999999999994, 43.100000000000001, 21.670000000000002, 11.539999999999999, 10.52, 8.8000000000000007, 34.053345395963994, 34.053345395963994, 34.053345395963994, 18.739999999999998, 67, 34.053345395963994, 16.68, 34.053345395963994, 23.84, 54.380000000000003, 34.053345395963994, 37.240000000000002, 14.83, 34.053345395963994, 31.510000000000002, 34.053345395963994, 34.053345395963994, 34.053345395963994, 34.053345395963994, 34.053345395963994, 34.053345395963994, 34.053345395963994, 34.053345395963994, 34.053345395963994, 34.053345395963994, 34.053345395963994, 34.053345395963994, 34.053345395963994, 34.053345395963994, 83.667500000000004, 64.299999999999997, 119.68000000000001, 119.68000000000001, 119.68000000000001, 119.68000000000001, 80.390000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.899999999999999, 52.770000000000003, 52.770000000000003, 52.770000000000003, 66.950000000000003, 35.789999999999999, 99.49666666666667, 47.700000000000003, 71.430000000000007, 61.859999999999999, 67.989999999999995, 61.43, 64.980000000000004, 14.434999999999999, 72.680000000000007, 61.409999999999997, 56.770000000000003, 89.25, 73.049999999999997, 67.849999999999994, 71.010000000000005, 73.109999999999999, 73.109999999999999, 73.109999999999999, 92.019999999999996, 92.019999999999996, 81.530000000000001, 61.979999999999997, 55.009999999999998, 51.960000000000001, 87.969999999999999, 56.5, 59.100000000000001, 59.100000000000001, 59.100000000000001, 59.100000000000001, 59.100000000000001, 15.880000000000001, 73.069999999999993, 73.069999999999993, 50.299999999999997, 34.509999999999998, 72.469999999999999, 82.5, 34.219999999999999, 49.079999999999998, 36.369999999999997, 28.260000000000002, 38.289999999999999, 39.420000000000002, 48.990000000000002, 12.125, 65.674999999999997, 49.079999999999998, 40.992397930513697, 46.939999999999998, 77.549999999999997, 49.582500000000003, 9.9100000000000001, 30.579999999999998, 75.900000000000006, 19.059999999999999, 22.43, 7.8099999999999996, 42.560000000000002, 47.380000000000003, 53.359999999999999, 62.840000000000003, 23.27, 23.459525118545574, 56.689999999999998, 61.960000000000001, 15.880000000000001, 23.050000000000001, 21.510000000000002, 28.190000000000001, 52.359999999999999, 83.939999999999998, 12.559999999999999, 35.240000000000002, 16.170000000000002, 10.58, 18.543229632894533, 16.41, 18.543229632894533, 24.738571428571429, 18.543229632894533, 15.31, 11.760000000000002, 18.543229632894533, 18.543229632894533, 4.8799999999999999, 12.59, 18.543229632894533, 18.543229632894533, 11.200588235294116, 18.543229632894533, 18.543229632894533, 18.543229632894533, 18.543229632894533, 67.260000000000005, 18.543229632894533, 18.543229632894533, 18.543229632894533, 18.543229632894533, 18.543229632894533, 18.543229632894533, 18.543229632894533, 18.543229632894533, 18.543229632894533, 102.66, 10.82, 6.0899999999999999, 4.0199999999999996, 10.49, 6.29, 37.840000000000003, 15.5, 10.25, 23.600000000000001, 59.079999999999998, 40.869999999999997, 46.479999999999997, 42.07, 44.170000000000002, 36.995000000000005, 21.969999999999999, 10.17, 35.811999999999998, 29.68, 29.609999999999999, 30.760000000000002, 14.06, 13.17, 1.24, 5.4500000000000002, 2.0699999999999998, 34.060000000000002, 61.600000000000001, 4.0499999999999998, 17.483095795379835, 16.579999999999998, 9.7679999999999989, 6.3499999999999996, 4.96, 1.9133333333333333, 3.9700000000000002, 4.1799999999999997, 8.1199999999999992, 4.79, 3.9500000000000002, 8.1799999999999997, 3.4700000000000002, 9.2100000000000009, 3.2799999999999998, 0.65666666666666662, 4.0099999999999998, 7.3700000000000001, 7.9199999999999999, 5.291406541281451, 9.4199999999999999, 5.1600000000000001, 9.75, 5.291406541281451, 2.7400000000000002, 7.9799999999999995, 5.291406541281451, 2.3700000000000001, 5.8200000000000003, 9.4100000000000001, 3.4500000000000002, 11.452500000000001, 21.399999999999999, 7.375, 1.7283333333333335, 12.151250000000001, 2.52, 30.23, 6.1600000000000001, 5.8360000000000003, 3.6600000000000001, 5.291406541281451, 6.4800000000000004, 14.56, 5.291406541281451, 3.9300000000000002, 2.4300000000000002, 5.291406541281451, 43.229999999999997, 26.210000000000001, 71.040000000000006, 59.990000000000002, 39.509999999999998, 78.739999999999995, 50.939999999999998, 45.68, 38.594999999999999, 15.109999999999999, 35.531367393708571, 35.531367393708571, 46.28857142857143, 35.531367393708571, 18.295000000000002, 25.829999999999998, 40, 15.42, 39.525714285714287, 86.560000000000002, 42.990000000000002, 21.870000000000001, 11.539999999999999, 9.9600000000000009, 8.8000000000000007, 35.531367393708571, 35.531367393708571, 35.531367393708571, 21.969999999999999, 74.010000000000005, 35.531367393708571, 18.059999999999999, 35.531367393708571, 54.380000000000003, 23.84, 35.531367393708571, 36.159999999999997, 14.83, 35.531367393708571, 39.850000000000001, 35.531367393708571, 35.531367393708571, 35.531367393708571, 35.531367393708571, 35.531367393708571, 35.531367393708571, 35.531367393708571, 35.531367393708571, 35.531367393708571, 35.531367393708571, 35.531367393708571, 35.531367393708571, 35.531367393708571, 35.531367393708571, 84.680000000000007, 63.609999999999999, 119.68000000000001, 119.68000000000001, 119.68000000000001, 119.68000000000001, 80.390000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.899999999999999, 54.880000000000003, 54.880000000000003, 54.880000000000003, 65.379999999999995, 36.829999999999998, 104.38, 48.310000000000002, 76.379999999999995, 61.859999999999999, 75.040000000000006, 63.700000000000003, 66.859999999999999, 18.199999999999999, 76.560000000000002, 64.930000000000007, 58.039999999999999, 86.569999999999993, 69.049999999999997, 68.709999999999994, 73.079999999999998, 72.5, 72.5, 72.5, 93.189999999999998, 93.189999999999998, 75.230000000000004, 60.75, 58.350000000000001, 57.07, 90.25, 58.152727272727276, 59.850000000000001, 59.850000000000001, 59.850000000000001, 59.850000000000001, 59.850000000000001, 17.670000000000002, 72.120000000000005, 72.120000000000005, 52.799999999999997, 34.93, 78.5, 81.909999999999997, 45, 48.490000000000002, 37.240000000000002, 31.600000000000001, 38.149999999999999, 37.719999999999999, 52.740000000000002, 12.51, 64.709999999999994, 49.079999999999998, 41.430154277303437, 56.75, 78.640000000000001, 47.340000000000003, 8.8900000000000006, 30.309999999999999, 82.670000000000002, 19.260000000000002, 22.760000000000002, 7.8099999999999996, 41.189999999999998, 47.75, 53.490000000000002, 62.840000000000003, 25.289999999999999, 25.482725707373007, 58.939999999999998, 67.939999999999998, 17.670000000000002, 23.809999999999999, 24.309999999999999, 29.41, 51.68, 83.939999999999998, 13.379999999999999, 36.68, 16.170000000000002, 12.31, 19.497064971842754, 16.870000000000001, 19.497064971842754, 27.320714285714288, 19.497064971842754, 14.630000000000001, 12.140000000000001, 19.497064971842754, 19.497064971842754, 4.8799999999999999, 12.59, 19.497064971842754, 19.497064971842754, 19.497064971842754, 12.02235294117647, 19.497064971842754, 19.497064971842754, 19.497064971842754, 67.260000000000005, 19.497064971842754, 19.497064971842754, 19.497064971842754, 19.497064971842754, 19.497064971842754, 19.497064971842754, 19.497064971842754, 19.497064971842754, 19.497064971842754, 101.67, 12.195, 6.7750000000000004, 3.8899999999999997, 13.43, 6.5700000000000003, 43.619999999999997, 15.5, 9.8000000000000007, 25.690000000000001, 61.850000000000001, 37.200000000000003, 46.479999999999997, 42.310000000000002, 45.950000000000003, 40.400000000000006, 27.850000000000001, 9.6400000000000006, 41.176000000000002, 34.439999999999998, 30.510000000000002, 30.98, 14.550000000000001, 14.08, 1.29, 5.6699999999999999, 2.1600000000000001, 34.640000000000001, 61.600000000000001, 4.5999999999999996, 17.817845563658807, 16.579999999999998, 9.5999999999999996, 7.0199999999999996, 6.8300000000000001, 2.1400000000000001, 4.8583333333333334, 3.8999999999999999, 9.6400000000000006, 5.5600000000000005, 4.75, 7.4699999999999998, 3.6200000000000001, 11.33, 3.3700000000000001, 0.73999999999999999, 4.0099999999999998, 7.3700000000000001, 7.5899999999999999, 5.8252527103844294, 10.619999999999999, 5.8799999999999999, 13.140000000000001, 5.8252527103844294, 3.1200000000000001, 9.1199999999999992, 5.8252527103844294, 2.4700000000000002, 6.8700000000000001, 9.4100000000000001, 4.1200000000000001, 13.335000000000001, 18.960000000000001, 8.5933333333333319, 1.8700000000000001, 12.898125, 2.52, 31.859999999999999, 6.1600000000000001, 6.298, 3.6499999999999999, 5.8252527103844294, 6.3499999999999996, 17.210000000000001, 5.8252527103844294, 4.2300000000000004, 2.4300000000000002, 5.8252527103844294, 43.229999999999997, 27.170000000000002, 74.189999999999998, 66.340000000000003, 41.530000000000001, 78.739999999999995, 51.890000000000001, 49.629999999999995, 38.870000000000005, 15.779999999999999, 37.102065003254502, 37.102065003254502, 48.32, 37.102065003254502, 19.170000000000002, 26.210000000000001, 37.789999999999999, 15.42, 42.232857142857142, 90.489999999999995, 43.979999999999997, 25.32, 11.539999999999999, 10.81, 8.8000000000000007, 37.102065003254502, 37.102065003254502, 37.102065003254502, 21.440000000000001, 68.310000000000002, 37.102065003254502, 12.619999999999999, 37.102065003254502, 60.796666666666667, 23.84, 37.102065003254502, 37.219999999999999, 16.600000000000001, 37.102065003254502, 37.240000000000002, 37.102065003254502, 37.102065003254502, 37.102065003254502, 37.102065003254502, 37.102065003254502, 37.102065003254502, 37.102065003254502, 37.102065003254502, 37.102065003254502, 37.102065003254502, 37.102065003254502, 37.102065003254502, 37.102065003254502, 37.102065003254502, 85.692499999999995, 61.880000000000003, 119.68000000000001, 119.68000000000002, 119.68000000000002, 119.68000000000002, 80.390000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.899999999999999, 55.630000000000003, 55.630000000000003, 55.630000000000003, 64.25, 39.450000000000003, 109.84999999999999, 46.539999999999999, 80.719999999999999, 61.859999999999999, 77.260000000000005, 75.519999999999996, 67.700000000000003, 18.66, 75.799999999999997, 66.799999999999997, 57.149999999999999, 84.060000000000002, 67.950000000000003, 71.019999999999996, 71.920000000000002, 75.930000000000007, 75.930000000000007, 75.930000000000007, 93.290000000000006, 93.290000000000006, 66.790000000000006, 60, 59.82, 59.340000000000003, 87.189999999999998, 59.805454545454545, 59.350000000000001, 59.350000000000001, 59.350000000000001, 59.350000000000001, 59.350000000000001, 22.489999999999998, 71.060000000000002, 71.060000000000002, 53.140000000000001, 43.560000000000002, 79.920000000000002, 84.799999999999997, 49.670000000000002, 49.909999999999997, 34.359999999999999, 39.780000000000001, 39.450000000000003, 38.700000000000003, 57.020000000000003, 12.895, 49.079999999999998, 63.899999999999999, 43.300426075247884, 61.520000000000003, 79.730000000000004, 50.950000000000003, 8.7799999999999994, 30.039999999999999, 91.260000000000005, 19.649999999999999, 22.289999999999999, 7.8099999999999996, 40.950000000000003, 47.82, 56.740000000000002, 62.840000000000003, 26.809999999999999, 26.996714344709318, 59.659999999999997, 63.670000000000002, 22.489999999999998, 25.460000000000001, 26.620000000000001, 30.829999999999998, 52.590000000000003, 83.939999999999998, 14.199999999999999, 35.659999999999997, 14.82, 14.140000000000001, 19.674898337930244, 17.670000000000002, 19.674898337930244, 29.902857142857144, 19.674898337930244, 17.100000000000001, 12.52, 19.674898337930244, 19.674898337930244, 4.8799999999999999, 12.59, 19.674898337930244, 19.674898337930244, 19.674898337930244, 12.844117647058823, 19.674898337930244, 19.674898337930244, 19.674898337930244, 67.260000000000005, 19.674898337930244, 19.674898337930244, 19.674898337930244, 19.674898337930244, 19.674898337930244, 19.674898337930244, 19.674898337930244, 19.674898337930244, 19.674898337930244, 100.81999999999999, 13.57, 7.46, 3.7599999999999998, 13.43, 7.7000000000000002, 48.57, 15.5, 9.3200000000000003, 25.640000000000001, 61.950000000000003, 37, 46.479999999999997, 45.560000000000002, 48.409999999999997, 43.805, 31.559999999999999, 12.6, 46.539999999999999, 39.109999999999999, 25.870000000000001, 32.609999999999999, 14.59, 15.960000000000001, 1.3300000000000001, 5.1200000000000001, 2.2799999999999998, 34.490000000000002, 61.600000000000001, 5.0099999999999998, 18.348900018099346, 17.609999999999999, 10.15, 7.6900000000000004, 7.1799999999999997, 3.085, 5.746666666666667, 4.3499999999999996, 11.16, 6.3300000000000001, 5.04, 3.2999999999999998, 4.0099999999999998, 12.25, 3.9399999999999999, 0.84999999999999998, 4.0099999999999998, 7.4699999999999998, 10.01, 6.2295256722195829, 10.68, 6.9100000000000001, 6.2295256722195829, 12.279999999999999, 3.0550000000000002, 9.9000000000000004, 6.2295256722195829, 7.9199999999999999, 2.8900000000000001, 10.335000000000001, 4.0625, 15.217500000000001, 16.940000000000001, 9.8116666666666656, 2.9399999999999999, 13.645, 2.52, 36.090000000000003, 6.1600000000000001, 6.7599999999999998, 5.21, 6.2295256722195829, 8.7799999999999994, 19.620000000000001, 6.2295256722195829, 3.7400000000000002, 2.4300000000000002, 6.2295256722195829, 43.229999999999997, 28.039999999999999, 77.430000000000007, 70.819999999999993, 45.289999999999999, 78.739999999999995, 52.560000000000002, 53.579999999999998, 39.145000000000003, 16.489999999999998, 38.180662618803716, 38.180662618803716, 47.170000000000002, 38.180662618803716, 19.010000000000002, 27.199999999999999, 15.859999999999999, 37.789999999999999, 44.939999999999998, 41.969999999999999, 90.810000000000002, 24.960000000000001, 11.539999999999999, 11.15, 8.8000000000000007, 38.180662618803716, 38.180662618803716, 38.180662618803716, 21.420000000000002, 65.040000000000006, 38.180662618803716, 16.329999999999998, 38.180662618803716, 67.213333333333338, 23.84, 38.180662618803716, 37.109999999999999, 15, 38.180662618803716, 38.700000000000003, 38.180662618803716, 38.180662618803716, 38.180662618803716, 38.180662618803716, 38.180662618803716, 38.180662618803716, 38.180662618803716, 38.180662618803716, 38.180662618803716, 38.180662618803716, 38.180662618803716, 38.180662618803716, 38.180662618803716, 38.180662618803716, 86.704999999999998, 63.149999999999999, 119.68000000000001, 119.68000000000001, 119.68000000000001, 119.68000000000001, 80.390000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.899999999999999, 57.909999999999997, 57.909999999999997, 57.909999999999997, 62.340000000000003, 42.549999999999997, 113.72, 45.859999999999999, 82.890000000000001, 61.859999999999999, 79.549999999999997, 75.810000000000002, 69.75, 19.120000000000001, 75.040000000000006, 66.930000000000007, 57.039999999999999, 79.75, 66.640000000000001, 72.939999999999998, 68.739999999999995, 77.75, 77.75, 77.75, 91.549999999999997, 91.549999999999997, 54.950000000000003, 60.68, 62.159999999999997, 62.030000000000001, 89.019999999999996, 61.458181818181821, 59.240000000000002, 59.240000000000002, 59.240000000000002, 59.240000000000002, 59.240000000000002, 23.91, 71.700000000000003, 71.700000000000003, 54.840000000000003, 42.590000000000003, 79.579999999999998, 83.879999999999995, 59.579999999999998, 52.850000000000001, 32.5, 41.880000000000003, 40.109999999999999, 39.68, 57.579999999999998, 13.279999999999999, 49.079999999999998, 59.600000000000001, 44.745150006123829, 70.099999999999994, 79.989999999999995, 54.549999999999997, 8.0299999999999994, 29.535, 98.599999999999994, 20.440000000000001, 22.710000000000001, 7.8099999999999996, 43.039999999999999, 41.479999999999997, 58.990000000000002, 62.840000000000003, 29.329999999999998, 29.508889365507795, 61.159999999999997, 57.579999999999998, 23.91, 29.57, 26.91, 31.309999999999999, 50.850000000000001, 83.939999999999998, 13.66, 36.93, 16.399999999999999, 14.2675, 20.101206732154349, 17.510000000000002, 20.101206732154349, 32.484999999999999, 20.101206732154349, 22.140000000000001, 12.9, 20.101206732154349, 20.101206732154349, 4.8799999999999999, 12.59, 20.101206732154349, 20.101206732154349, 20.101206732154349, 13.665882352941175, 20.101206732154349, 20.101206732154349, 20.101206732154349, 20.101206732154349, 67.260000000000005, 20.101206732154349, 20.101206732154349, 20.101206732154349, 20.101206732154349, 20.101206732154349, 20.101206732154349, 20.101206732154349, 20.101206732154349, 98.290000000000006, 13.67, 8.5, 5.2766666666666664, 14.789999999999999, 7.5999999999999996, 54.079999999999998, 15.5, 9.3200000000000003, 30.27, 63.590000000000003, 43.549999999999997, 46.479999999999997, 44.829999999999998, 47.869999999999997, 33.354999999999997, 47.210000000000008, 12.289999999999999, 47.359999999999999, 46.950000000000003, 26.460000000000001, 33.710000000000001, 15.26, 19.18, 1.53, 6.6200000000000001, 2.6866666666666665, 34.280000000000001, 61.600000000000001, 5.46, 19.379656956523871, 17.260000000000002, 10.388333333333334, 7.8099999999999996, 7.5999999999999996, 4.0300000000000002, 6.6349999999999998, 3.7200000000000002, 11.43, 7.7249999999999996, 5.3300000000000001, 5.7099999999999991, 4.0700000000000003, 13.26, 4.3700000000000001, 0.88, 3.98, 7.6699999999999999, 10.130000000000001, 6.7864741177585879, 10.050000000000001, 6.6900000000000004, 6.7864741177585879, 13.35, 2.9900000000000002, 10.960000000000001, 6.7864741177585879, 9.0700000000000003, 2.73, 11.26, 4.0049999999999999, 17.100000000000001, 20.84, 2.6600000000000001, 11.029999999999999, 14.391875000000001, 2.52, 6.1600000000000001, 39.950000000000003, 6.4699999999999998, 5.21, 6.7864741177585879, 9.4800000000000004, 19.399999999999999, 6.7864741177585879, 7.8399999999999999, 1.28, 6.7864741177585879, 43.229999999999997, 29.350000000000001, 78.459999999999994, 75.079999999999998, 47.469999999999999, 78.739999999999995, 54.710000000000001, 57.530000000000001, 39.420000000000002, 16.93, 39.670000808857111, 39.670000808857111, 48.82, 39.670000808857111, 18.850000000000001, 27.949999999999999, 16.489999999999998, 37.789999999999999, 47.32, 43.840000000000003, 91.75, 27.460000000000001, 11.539999999999999, 11.630000000000001, 8.8000000000000007, 39.670000808857111, 39.670000808857111, 39.670000808857111, 23.879999999999999, 65.040000000000006, 39.670000808857111, 10.27, 39.670000808857111, 73.629999999999995, 23.84, 39.670000808857111, 37.369999999999997, 24.93, 39.670000808857111, 38.270000000000003, 39.670000808857111, 39.670000808857111, 39.670000808857111, 39.670000808857111, 39.670000808857111, 39.670000808857111, 39.670000808857111, 39.670000808857111, 39.670000808857111, 39.670000808857111, 39.670000808857111, 39.670000808857111, 39.670000808857111, 39.670000808857111, 87.717500000000001, 63.619999999999997, 119.68000000000001, 119.68000000000001, 119.68000000000001, 119.68000000000001, 80.390000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60.899999999999999, 59.850000000000001, 59.850000000000001, 59.850000000000001, 60.890000000000001, 44.039999999999999, 115.29000000000001, 47.530000000000001, 85.209999999999994, 61.859999999999999, 80.959999999999994, 77.260000000000005, 71.780000000000001, 19.510000000000002, 73.319999999999993, 66.319999999999993, 55.25, 73.530000000000001, 69.079999999999998, 75.450000000000003, 65.780000000000001, 80.420000000000002, 80.420000000000002, 80.420000000000002, 91.239999999999995, 91.239999999999995, 51.380000000000003, 57.210000000000001, 65.390000000000001, 66.060000000000002, 87.859999999999999, 63.110909090909097, 57.079999999999998, 57.079999999999998, 57.079999999999998, 57.079999999999998, 57.079999999999998, 23.370000000000001, 75.859999999999999, 75.859999999999999, 56.18, 39.855000000000004, 78.370000000000005, 81.530000000000001, 65.319999999999993, 55.710000000000001, 39.469999999999999, 47.259999999999998, 41.280000000000001, 38.57, 57, 14.76, 49.079999999999998, 60.159999999999997, 48.049043631573895, 79.650000000000006, 82.049999999999997, 53.469999999999999, 8.1400000000000006, 29.030000000000001, 101.42, 21.440000000000001, 22.77, 7.8099999999999996, 46.140000000000001, 41.619999999999997, 60.359999999999999, 62.840000000000003, 32.759999999999998, 32.961985094501074, 68.659999999999997, 65.200000000000003, 23.370000000000001, 30.440000000000001, 26.940000000000001, 33.789999999999999, 49.700000000000003, 83.939999999999998, 14.781666666666666, 38.229999999999997, 17.989999999999998, 14.395, 21.303928277088925, 19.100000000000001, 21.303928277088925, 35.067142857142855, 21.303928277088925, 24.02, 13.280000000000001, 21.303928277088925, 21.303928277088925, 4.8799999999999999, 12.59, 21.303928277088925, 21.303928277088925, 21.303928277088925, 14.487647058823528, 21.303928277088925, 21.303928277088925, 21.303928277088925, 21.303928277088925, 67.260000000000005, 21.303928277088925, 21.303928277088925, 21.303928277088925, 21.303928277088925, 21.303928277088925, 21.303928277088925, 21.303928277088925, 21.303928277088925, 96.340000000000003, 13.65, 8.9000000000000004, 6.793333333333333, 16.149999999999999, 10.34, 56.619999999999997, 15.5, 9.3200000000000003, 33.140000000000001, 62.060000000000002, 40.123333333333335, 46.479999999999997, 48.07, 45.950000000000003, 35.149999999999999, 50.615000000000002, 14.869999999999999, 42.93, 53.359999999999999, 28.52, 35.5, 17.539999999999999, 22.550000000000001, 2.0800000000000001, 6.1299999999999999, 3.0933333333333333, 33.020000000000003, 61.600000000000001, 5.7800000000000002, 20.759483613803678, 18.09, 10.626666666666667, 6.5499999999999998, 8.0500000000000007, 3.7599999999999998, 7.5233333333333334, 4.0199999999999996, 13.49, 9.1199999999999992, 5.71, 4.21, 8.1199999999999992, 15.449999999999999, 4.5999999999999996, 0.87, 3.98, 7.6299999999999999, 10.42, 7.4783237753474667, 10.48, 7.4783237753474667, 7.1500000000000004, 15.31, 3.79, 11.09, 7.4783237753474667, 8.5700000000000003, 2.73, 11.26, 3.9475000000000002, 17.66, 25.629999999999999, 2.6600000000000001, 10.56, 15.138750000000002, 2.52, 6.1600000000000001, 41.189999999999998, 6.1799999999999997, 5.21, 7.4783237753474667, 9.4700000000000006, 21.280000000000001, 7.4783237753474667, 8.5599999999999987, 3.0099999999999998, 7.4783237753474667, 44.340000000000003, 30.329999999999998, 78.769999999999996, 79.870000000000005, 50.75, 78.739999999999995, 59.950000000000003, 61.479999999999997, 40, 19.66, 40.771913703921442, 40.771913703921442, 40.771913703921442, 45.159999999999997, 19.390000000000001, 28.109999999999999, 16.359999999999999, 37.789999999999999, 47.840000000000003, 44.405000000000001, 92.379999999999995, 25.82, 11.539999999999999, 11.630000000000001, 8.8000000000000007, 40.771913703921442, 40.771913703921442, 40.771913703921442, 23.850000000000001, 65.040000000000006, 40.771913703921442, 13.99, 40.771913703921442, 80.046666666666667, 23.84, 40.771913703921442, 16.640000000000001, 24.93, 40.771913703921442, 37.140000000000001, 40.771913703921442, 40.771913703921442, 40.771913703921442, 40.771913703921442, 40.771913703921442, 40.771913703921442, 40.771913703921442, 40.771913703921442, 40.771913703921442, 40.771913703921442, 40.771913703921442, 40.771913703921442, 40.771913703921442, 40.771913703921442, 88.730000000000004, 65.769999999999996, 119.68000000000001, 119.68000000000001, 119.68000000000001, 119.68000000000001, 80.390000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [65.180000000000007, 61.509999999999998, 61.509999999999998, 61.509999999999998, 60.880000000000003, 44.490000000000002, 118.68000000000001, 53.100000000000001, 88, 61.859999999999999, 81.019999999999996, 78.709999999999994, 74.040000000000006, 19.899999999999999, 70.239999999999995, 67.400000000000006, 53.880000000000003, 70.400000000000006, 70.900000000000006, 76.200000000000003, 64.950000000000003, 81.310000000000002, 81.310000000000002, 81.310000000000002, 89.989999999999995, 89.989999999999995, 51.100000000000001, 52.82, 69.590000000000003, 67.230000000000004, 84.379999999999995, 64.763636363636365, 56.990000000000002, 56.990000000000002, 56.990000000000002, 56.990000000000002, 56.990000000000002, 24.899999999999999, 78.239999999999995, 78.239999999999995, 58.07, 37.119999999999997, 80.400000000000006, 83.780000000000001, 66.829999999999998, 57.619999999999997, 45.770000000000003, 48.990000000000002, 52.149999999999999, 38.780000000000001, 59.460000000000001, 13.699999999999999, 49.079999999999998, 62.079999999999998, 51.700633751858192, 87, 83.769999999999996, 51.710000000000001, 8.1500000000000004, 28.524999999999999, 23.16, 99.849999999999994, 24.48, 7.8099999999999996, 44.060000000000002, 44.409999999999997, 64.290000000000006, 62.729999999999997, 43.880000000000003, 44.030751905906108, 70.140000000000001, 73.069999999999993, 24.899999999999999, 30.530000000000001, 32.869999999999997, 35.960000000000001, 50.030000000000001, 83.939999999999998, 15.903333333333332, 38.68, 18.170000000000002, 14.522500000000001, 21.945534047365008, 18.609999999999999, 21.945534047365008, 37.649285714285725, 21.945534047365008, 28.850000000000001, 13.66, 21.945534047365008, 21.945534047365008, 4.8799999999999999, 12.59, 21.945534047365008, 21.945534047365008, 21.945534047365008, 15.309411764705882, 21.945534047365008, 21.945534047365008, 21.945534047365008, 21.945534047365008, 67.260000000000005, 21.945534047365008, 21.945534047365008, 21.945534047365008, 21.945534047365008, 21.945534047365008, 21.945534047365008, 21.945534047365008, 21.945534047365008, 94.439999999999998, 13.65, 8.9299999999999997, 8.3100000000000005, 15.42, 11.4475, 64.969999999999999, 15.5, 9.3200000000000003, 47.380000000000003, 36.696666666666665, 62.109999999999999, 46.479999999999997, 42.530000000000001, 45.43, 41.18, 54.020000000000003, 17.309999999999999, 44.149999999999999, 59.340000000000003, 29.170000000000002, 36.060000000000002, 17.09, 25.449999999999999, 2.4900000000000002, 5.7000000000000002, 3.5, 33.079999999999998, 61.600000000000001, 5.8250000000000002, 21.269319139104098, 18.140000000000001, 10.865, 6.3933333333333335, 7.7400000000000002, 3.96, 8.4116666666666671, 4.5700000000000003, 15.210000000000001, 8.8999999999999986, 6.3499999999999996, 4.7300000000000004, 8.3699999999999992, 16.41, 4.9199999999999999, 0.85999999999999999, 3.98, 9.1150000000000002, 10.83, 7.9604632369475832, 10.890000000000001, 7.1100000000000003, 7.9604632369475832, 15.199999999999999, 4.5800000000000001, 10.77, 7.9604632369475832, 10.08, 2.73, 11.26, 3.8900000000000001, 18.75, 24.620000000000001, 2.6600000000000001, 10.449999999999999, 15.885625000000001, 2.52, 6.1600000000000001, 40.340000000000003, 6.1799999999999997, 5.21, 7.9604632369475832, 9.6300000000000008, 21.789999999999999, 7.9604632369475832, 9.2799999999999994, 5.9299999999999997, 7.9604632369475832, 47.159999999999997, 31.210000000000001, 81.170000000000002, 83.659999999999997, 53.18, 78.739999999999995, 59.829999999999998, 65.430000000000007, 42.475000000000001, 18.350000000000001, 42.464596623663425, 42.464596623663425, 42.464596623663425, 49.509999999999998, 19.66, 27.370000000000001, 37.789999999999999, 17.149999999999999, 50.759999999999998, 44.969999999999999, 94.019999999999996, 26.115000000000002, 11.539999999999999, 11.630000000000001, 8.8000000000000007, 42.464596623663425, 42.464596623663425, 42.464596623663425, 23.859999999999999, 65.040000000000006, 42.464596623663425, 17.050000000000001, 42.464596623663425, 86.463333333333338, 42.464596623663425, 23.84, 17.68, 24.93, 42.464596623663425, 35.100000000000001, 42.464596623663425, 42.464596623663425, 42.464596623663425, 42.464596623663425, 42.464596623663425, 42.464596623663425, 42.464596623663425, 42.464596623663425, 42.464596623663425, 42.464596623663425, 42.464596623663425, 42.464596623663425, 42.464596623663425, 42.464596623663425, 88.629999999999995, 67.230000000000004, 119.68000000000001, 119.68000000000002, 119.68000000000002, 119.68000000000002, 80.709999999999994],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [68.230000000000004, 62.789999999999999, 62.789999999999999, 62.789999999999999, 60.939999999999998, 46.950000000000003, 122.88, 60.100000000000001, 88.569999999999993, 61.859999999999999, 82.260000000000005, 80.159999999999997, 76.420000000000002, 20.289999999999999, 69.370000000000005, 67.230000000000004, 52.719999999999999, 69.739999999999995, 74.299999999999997, 76.280000000000001, 66.430000000000007, 83.299999999999997, 83.299999999999997, 83.299999999999997, 89.659999999999997, 89.659999999999997, 49.359999999999999, 50.060000000000002, 74.040000000000006, 66.239999999999995, 82.200000000000003, 66.416363636363641, 56.93, 56.93, 56.93, 56.93, 56.93, 26.170000000000002, 79.180000000000007, 79.180000000000007, 60.82, 33.939999999999998, 75.640000000000001, 76.859999999999999, 62.990000000000002, 57.939999999999998, 51.18, 48.619999999999997, 52.100000000000001, 41.060000000000002, 60.340000000000003, 13.880000000000001, 49.079999999999998, 61.619999999999997, 52.916355508436759, 95.560000000000002, 85.269999999999996, 49.030000000000001, 8.2699999999999996, 28.02, 25.48, 98.030000000000001, 26.460000000000001, 8.8439999999999994, 44.670000000000002, 68.230000000000004, 45.469999999999999, 62.469999999999999, 47.439999999999998, 47.571873566700312, 69.939999999999998, 76.930000000000007, 26.170000000000002, 33.030000000000001, 31.09, 38.100000000000001, 49.935000000000002, 83.939999999999998, 17.024999999999999, 44.869999999999997, 18.690000000000001, 14.65, 24.077996547525775, 18.18, 24.077996547525775, 40.23142857142858, 24.077996547525775, 20.699999999999999, 36.979999999999997, 24.077996547525775, 24.077996547525775, 4.8799999999999999, 12.59, 24.077996547525775, 24.077996547525775, 24.077996547525775, 16.131176470588237, 24.077996547525775, 24.077996547525775, 24.077996547525775, 67.260000000000005, 24.077996547525775, 24.077996547525775, 24.077996547525775, 24.077996547525775, 24.077996547525775, 24.077996547525775, 24.077996547525775, 24.077996547525775, 24.077996547525775, 93.969999999999999, 15.59, 8.6099999999999994, 8.7225000000000001, 14.869999999999999, 12.555, 72.120000000000005, 15.5, 9.3200000000000003, 51.170000000000002, 33.270000000000003, 46.479999999999997, 60.82, 38.82, 46.579999999999998, 45.189999999999998, 58.700000000000003, 15.93, 43.640000000000001, 60.640000000000001, 32.810000000000002, 17.210000000000001, 38.329999999999998, 28.699999999999999, 3.2200000000000002, 5.2800000000000002, 3.3300000000000001, 33.060000000000002, 61.600000000000001, 5.8700000000000001, 22.293365229983589, 18.859999999999999, 11.103333333333333, 6.2366666666666664, 9.2799999999999994, 4.1600000000000001, 9.3000000000000007, 4.9199999999999999, 15.73, 8.6799999999999997, 6.8099999999999996, 4.7300000000000004, 8.9000000000000004, 16.960000000000001, 4.9299999999999997, 0.83999999999999997, 3.98, 10.93, 10.6, 8.1875887042617705, 8.6999999999999993, 7.2599999999999998, 12.91, 8.1875887042617705, 5.3899999999999997, 11.039999999999999, 8.1875887042617705, 11.59, 11.26, 2.73, 3.3100000000000001, 20.02, 2.6600000000000001, 27.170000000000002, 9.6899999999999995, 16.6325, 2.52, 6.1600000000000001, 38.100000000000001, 6.1799999999999997, 5.21, 8.1875887042617705, 9.6300000000000008, 20.579999999999998, 8.1875887042617705, 12.9, 12.69, 8.1875887042617705, 48.43, 31.969999999999999, 83.760000000000005, 86.420000000000002, 54.799999999999997, 78.739999999999995, 57.789999999999999, 69.379999999999995, 44.950000000000003, 22.07, 44.755193434201196, 44.755193434201196, 44.755193434201196, 51.950000000000003, 20.27, 27.210000000000001, 37.789999999999999, 17.34, 51.649999999999999, 47.93, 98.269999999999996, 26.41, 11.539999999999999, 11.630000000000001, 8.8000000000000007, 44.755193434201196, 44.755193434201196, 44.755193434201196, 23.27, 65.040000000000006, 44.755193434201196, 17.010000000000002, 44.755193434201196, 92.879999999999995, 17.27, 44.755193434201196, 23.559999999999999, 24.93, 44.755193434201196, 31.940000000000001, 44.755193434201196, 44.755193434201196, 44.755193434201196, 44.755193434201196, 44.755193434201196, 44.755193434201196, 44.755193434201196, 44.755193434201196, 44.755193434201196, 44.755193434201196, 44.755193434201196, 44.755193434201196, 44.755193434201196, 44.755193434201196, 88.890000000000001, 67.400000000000006, 119.68000000000001, 119.68000000000001, 119.68000000000001, 119.68000000000001, 82.180000000000007],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [67.950000000000003, 64.730000000000004, 64.730000000000004, 64.730000000000004, 61.359999999999999, 48.130000000000003, 127.08, 67.170000000000002, 89.810000000000002, 63.270000000000003, 82.849999999999994, 79.849999999999994, 77.239999999999995, 19.920000000000002, 69.849999999999994, 67.510000000000005, 50.299999999999997, 71.120000000000005, 80.599999999999994, 73.030000000000001, 68.310000000000002, 82.170000000000002, 82.170000000000002, 82.170000000000002, 89.329999999999998, 89.329999999999998, 49.909999999999997, 49.479999999999997, 75.469999999999999, 66.560000000000002, 79.469999999999999, 68.069090909090917, 58.600000000000001, 58.600000000000001, 58.600000000000001, 58.600000000000001, 58.600000000000001, 26.23, 82.040000000000006, 82.040000000000006, 61.189999999999998, 34.509999999999998, 74.700000000000003, 77.040000000000006, 59.270000000000003, 61.420000000000002, 57.390000000000001, 48.670000000000002, 52.840000000000003, 41.010000000000005, 56.299999999999997, 15.109999999999999, 49.079999999999998, 55.586666666666666, 55.402369840864445, 103.72, 84.909999999999997, 48.689999999999998, 8.5399999999999991, 27.75, 25.93, 94.760000000000005, 29.120000000000001, 9.8780000000000001, 43.399999999999999, 63.439999999999998, 51.75, 63.189999999999998, 49.710000000000001, 49.84600263394114, 72.950000000000003, 79.329999999999998, 26.23, 35.479999999999997, 30.23, 40.490000000000002, 49.840000000000003, 83.939999999999998, 18.146666666666668, 46.399999999999999, 17.809999999999999, 14.074999999999999, 24.697444575719043, 17.120000000000001, 24.697444575719043, 42.813571428571436, 24.697444575719043, 27.740000000000002, 34.420000000000002, 24.697444575719043, 24.697444575719043, 4.8799999999999999, 12.59, 24.697444575719043, 24.697444575719043, 24.697444575719043, 16.952941176470588, 24.697444575719043, 24.697444575719043, 24.697444575719043, 67.260000000000005, 24.697444575719043, 24.697444575719043, 24.697444575719043, 24.697444575719043, 24.697444575719043, 24.697444575719043, 24.697444575719043, 24.697444575719043, 24.697444575719043, 93.659999999999997, 17.399999999999999, 8.4800000000000004, 9.1350000000000016, 11.970000000000001, 13.6625, 69.180000000000007, 15.5, 9.3200000000000003, 46.579999999999998, 31.66, 46.479999999999997, 60.450000000000003, 42.109999999999999, 46.82, 45.710000000000001, 57.780000000000001, 14.82, 43.670000000000002, 65.870000000000005, 31.93, 17.210000000000001, 44.109999999999999, 32.270000000000003, 3.4199999999999999, 3.6499999999999999, 3.5700000000000003, 31.190000000000001, 61.600000000000001, 5.5499999999999998, 23.808665387419822, 18.960000000000001, 11.341666666666667, 6.0800000000000001, 9.9900000000000002, 3.9500000000000002, 11.699999999999999, 4.7599999999999998, 15.779999999999999, 9.6600000000000001, 7.3899999999999997, 4.7599999999999998, 9.0899999999999999, 12.460000000000001, 5.4299999999999997, 1.1399999999999999, 3.98, 11.130000000000001, 7.9299999999999997, 8.206276614306697, 8.6400000000000006, 7.29, 12.359999999999999, 4.0899999999999999, 8.206276614306697, 12.32, 8.206276614306697, 11.925000000000001, 11.26, 2.73, 3.0099999999999998, 22, 2.6600000000000001, 23.289999999999999, 9.9199999999999999, 17.379375000000003, 2.52, 6.1600000000000001, 38.979999999999997, 6.1799999999999997, 5.21, 8.206276614306697, 9.6300000000000008, 21.059999999999999, 8.206276614306697, 17.690000000000001, 15.57, 8.206276614306697, 48.329999999999998, 38.590000000000003, 86.620000000000005, 88.849999999999994, 57.140000000000001, 78.739999999999995, 59.649999999999999, 73.329999999999998, 46.076666666666668, 16.120000000000001, 45.436836413219041, 45.436836413219041, 45.436836413219041, 54.530000000000001, 20.949999999999999, 37.789999999999999, 17.77, 27.010000000000002, 52.130000000000003, 48.729999999999997, 99.680000000000007, 26.41, 11.539999999999999, 11.630000000000001, 8.8000000000000007, 45.436836413219041, 45.436836413219041, 45.436836413219041, 24.32, 65.040000000000006, 45.436836413219041, 19.809999999999999, 45.436836413219041, 93.219999999999999, 18.43, 45.436836413219041, 23.559999999999999, 24.93, 45.436836413219041, 27.18, 45.436836413219041, 45.436836413219041, 45.436836413219041, 45.436836413219041, 45.436836413219041, 45.436836413219041, 45.436836413219041, 45.436836413219041, 45.436836413219041, 45.436836413219041, 45.436836413219041, 45.436836413219041, 45.436836413219041, 45.436836413219041, 88.840000000000003, 69.510000000000005, 119.68000000000001, 119.67999999999999, 119.67999999999999, 119.67999999999999, 81.859999999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [68.469999999999999, 65.799999999999997, 65.799999999999997, 65.799999999999997, 62.700000000000003, 52.840000000000003, 132.30000000000001, 75.939999999999998, 91.890000000000001, 64.170000000000002, 83.840000000000003, 83.200000000000003, 80.769999999999996, 19.600000000000001, 70.620000000000005, 67.709999999999994, 49.130000000000003, 72.420000000000002, 88.060000000000002, 72.140000000000001, 70.430000000000007, 81.319999999999993, 81.319999999999993, 81.319999999999993, 90.700000000000003, 90.700000000000003, 50.509999999999998, 49.909999999999997, 76.079999999999998, 67.560000000000002, 79.269999999999996, 69.721818181818193, 60.149999999999999, 60.149999999999999, 60.149999999999999, 60.149999999999999, 60.149999999999999, 26.809999999999999, 83.739999999999995, 83.739999999999995, 62.460000000000001, 36.020000000000003, 71.340000000000003, 80.200000000000003, 58.649999999999999, 65.659999999999997, 62.75, 46.420000000000002, 51.950000000000003, 40.960000000000001, 58.359999999999999, 15.44, 49.079999999999998, 49.553333333333335, 57.670115526154959, 110.53, 82.769999999999996, 51.07, 8.8499999999999996, 27.48, 27.07, 91.329999999999998, 31.109999999999999, 10.911999999999999, 41.280000000000001, 61.899999999999999, 53.590000000000003, 62.460000000000001, 51.579999999999998, 51.734474961342528, 78.780000000000001, 75.989999999999995, 26.809999999999999, 36.630000000000003, 29.656666666666666, 35.409999999999997, 48.859999999999999, 84.790000000000006, 19.268333333333334, 43.670000000000002, 17.949999999999999, 13.5, 24.412103676227701, 15.44, 24.412103676227701, 45.395714285714291, 24.412103676227701, 34.780000000000001, 34.909999999999997, 24.412103676227701, 24.412103676227701, 4.8799999999999999, 12.59, 24.412103676227701, 24.412103676227701, 24.412103676227701, 17.77470588235294, 24.412103676227701, 24.412103676227701, 24.412103676227701, 67.260000000000005, 24.412103676227701, 24.412103676227701, 24.412103676227701, 24.412103676227701, 24.412103676227701, 24.412103676227701, 24.412103676227701, 24.412103676227701, 24.412103676227701, 93.719999999999999, 18.530000000000001, 8.8000000000000007, 9.5475000000000012, 12.109999999999999, 14.77, 68.129999999999995, 15.5, 9.3200000000000003, 46.579999999999998, 28.43, 46.479999999999997, 59.07, 43.990000000000002, 43.579999999999998, 45.659999999999997, 55.130000000000003, 16.780000000000001, 45.189999999999998, 69.609999999999999, 33.159999999999997, 17.210000000000001, 49.380000000000003, 33.740000000000002, 3.6299999999999999, 4.1600000000000001, 3.8100000000000001, 31.02, 61.600000000000001, 5.1399999999999997, 25.123266953634474, 21.420000000000002, 11.58, 6.2275, 10.359999999999999, 3.6400000000000001, 11.890000000000001, 4.7599999999999998, 9.6600000000000001, 16.370000000000001, 7.2400000000000002, 5.2400000000000002, 9.4700000000000006, 12.75, 5.8600000000000003, 1.4399999999999999, 3.98, 11.77, 8.336721229971392, 8.5399999999999991, 8.5299999999999994, 7.0599999999999996, 11.74, 4.4400000000000004, 8.336721229971392, 12.52, 8.336721229971392, 12.26, 11.26, 2.73, 3.0099999999999998, 23.359999999999999, 2.6600000000000001, 22.440000000000001, 10.15, 18.126249999999999, 2.52, 6.1600000000000001, 40.049999999999997, 6.1799999999999997, 5.21, 8.336721229971392, 9.6300000000000008, 21.16, 8.336721229971392, 17.690000000000001, 16.489999999999998, 8.336721229971392, 50.030000000000001, 40.340000000000003, 89.230000000000004, 89.920000000000002, 58.399999999999999, 78.739999999999995, 59.75, 71.25, 47.203333333333333, 17.100000000000001, 46.042453091502431, 46.042453091502431, 46.042453091502431, 59.950000000000003, 24.460000000000001, 37.789999999999999, 18.539999999999999, 27.469999999999999, 54.460000000000001, 47.852499999999999, 100.91500000000001, 26.41, 11.539999999999999, 11.630000000000001, 8.8000000000000007, 46.042453091502431, 46.042453091502431, 46.042453091502431, 24.77, 65.040000000000006, 46.042453091502431, 20.789999999999999, 46.042453091502431, 95.379999999999995, 18.43, 46.042453091502431, 23.559999999999999, 24.93, 46.042453091502431, 46.042453091502431, 22.420000000000002, 46.042453091502431, 46.042453091502431, 46.042453091502431, 46.042453091502431, 46.042453091502431, 46.042453091502431, 46.042453091502431, 46.042453091502431, 46.042453091502431, 46.042453091502431, 46.042453091502431, 46.042453091502431, 46.042453091502431, 88.170000000000002, 70.629999999999995, 109.98999999999999, 109.98999999999999, 109.98999999999999, 109.98999999999999, 81.269999999999996],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [69.159999999999997, 67.540000000000006, 67.540000000000006, 67.540000000000006, 64.480000000000004, 55.75, 138.38999999999999, 81.340000000000003, 92.170000000000002, 65.030000000000001, 85.870000000000005, 83.650000000000006, 79.120000000000005, 19.390000000000001, 71.019999999999996, 66.790000000000006, 47.810000000000002, 73.730000000000004, 93.019999999999996, 72.069999999999993, 73.409999999999997, 81.140000000000001, 81.140000000000001, 81.140000000000001, 92.390000000000001, 92.390000000000001, 51.990000000000002, 50.899999999999999, 76.230000000000004, 68.319999999999993, 77.299999999999997, 71.374545454545455, 61.670000000000002, 61.670000000000009, 61.670000000000009, 61.670000000000009, 61.670000000000009, 27.420000000000002, 85.390000000000001, 85.390000000000001, 64.349999999999994, 38.390000000000001, 69.340000000000003, 81.489999999999995, 56.609999999999999, 66.049999999999997, 66.040000000000006, 43.159999999999997, 52.829999999999998, 40.93, 56.399999999999999, 15.390000000000001, 49.079999999999998, 43.520000000000003, 57.957389053902254, 115.45999999999999, 83.659999999999997, 53.520000000000003, 10.16, 27.210000000000001, 27.710000000000001, 84.540000000000006, 31.109999999999999, 11.946000000000002, 39.920000000000002, 60, 56.170000000000002, 62.210000000000001, 54.009999999999998, 54.178936249686799, 83.930000000000007, 77.329999999999998, 27.420000000000002, 36.799999999999997, 29.083333333333336, 29.43, 48.700000000000003, 88.890000000000001, 20.390000000000001, 45.280000000000001, 18.670000000000002, 13.98, 25.422917962482451, 14.52, 25.422917962482451, 47.977857142857147, 25.422917962482451, 35.525000000000006, 31.539999999999999, 4.8799999999999999, 25.422917962482451, 25.422917962482451, 13.56, 25.422917962482451, 25.422917962482451, 25.422917962482451, 18.596470588235292, 25.422917962482451, 25.422917962482451, 25.422917962482451, 67.260000000000005, 25.422917962482451, 25.422917962482451, 25.422917962482451, 25.422917962482451, 25.422917962482451, 25.422917962482451, 25.422917962482451, 25.422917962482451, 25.422917962482451, 93.329999999999998, 19.699999999999999, 8.3900000000000006, 9.9600000000000009, 13.01, 14.880000000000001, 62.710000000000001, 15.5, 9.3200000000000003, 46.579999999999998, 32.310000000000002, 46.479999999999997, 57.390000000000001, 47.280000000000001, 44.950000000000003, 46.450000000000003, 52.109999999999999, 17.449999999999999, 48.539999999999999, 69.609999999999999, 36.719999999999999, 17.210000000000001, 53.159999999999997, 35.619999999999997, 4.2999999999999998, 4.9699999999999998, 4.0499999999999998, 31.140000000000001, 61.600000000000001, 5.1200000000000001, 26.284589495618942, 23.390000000000001, 11.81, 6.375, 10.380000000000001, 3.3300000000000001, 18.09, 4.7599999999999998, 9.3499999999999996, 16.02, 7.4500000000000002, 5.3200000000000003, 9.6900000000000013, 14.300000000000001, 6.3499999999999996, 1.74, 3.98, 13.06, 9.0340725517970917, 8.4299999999999997, 7.5999999999999996, 6.4900000000000002, 12.01, 4.7000000000000002, 9.0340725517970917, 13.1, 9.0340725517970917, 12.26, 11.26, 2.73, 3.0099999999999998, 24.960000000000001, 2.6600000000000001, 22.704999999999998, 18.873125000000002, 9.7200000000000006, 2.52, 6.1600000000000001, 40.530000000000001, 6.1799999999999997, 5.21, 9.0340725517970917, 9.6300000000000008, 20.219999999999999, 9.0340725517970917, 17.690000000000001, 14.31, 9.0340725517970917, 51.189999999999998, 41.640000000000001, 90.969999999999999, 91.200000000000003, 57.32, 78.739999999999995, 60.280000000000001, 71.25, 48.329999999999998, 17.52, 46.449997681842888, 46.449997681842888, 46.449997681842888, 61.270000000000003, 26.210000000000001, 37.789999999999999, 19.309999999999999, 28.030000000000001, 52.869999999999997, 46.974999999999994, 102.15000000000001, 26.41, 11.539999999999999, 11.630000000000001, 8.8000000000000007, 46.449997681842888, 46.449997681842888, 24.649999999999999, 46.449997681842888, 65.040000000000006, 46.449997681842888, 14.699999999999999, 46.449997681842888, 96.890000000000001, 18.43, 46.449997681842888, 23.559999999999999, 24.93, 46.449997681842888, 46.449997681842888, 22.859999999999999, 46.449997681842888, 46.449997681842888, 46.449997681842888, 46.449997681842888, 46.449997681842888, 46.449997681842888, 46.449997681842888, 46.449997681842888, 46.449997681842888, 46.449997681842888, 46.449997681842888, 46.449997681842888, 46.449997681842888, 88.299999999999997, 69.579999999999998, 103.31999999999999, 103.31999999999999, 103.31999999999999, 103.31999999999999, 81.25],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [72.709999999999994, 67.730000000000004, 67.730000000000004, 67.730000000000004, 65.689999999999998, 58.539999999999999, 142.38999999999999, 88.489999999999995, 91.019999999999996, 65.930000000000007, 86.319999999999993, 84.379999999999995, 79.299999999999997, 19.399999999999999, 70.909999999999997, 66.879999999999995, 48.189999999999998, 72.010000000000005, 94.859999999999999, 72.709999999999994, 75.109999999999999, 81.689999999999998, 81.689999999999998, 81.689999999999998, 94.590000000000003, 94.590000000000003, 52.439999999999998, 52.359999999999999, 75.340000000000003, 68.959999999999994, 76.469999999999999, 73.027272727272731, 65.959999999999994, 65.959999999999994, 65.959999999999994, 65.959999999999994, 65.959999999999994, 27.890000000000001, 85.760000000000005, 85.760000000000005, 66.310000000000002, 42.270000000000003, 70.609999999999999, 84.480000000000004, 62.079999999999998, 66.609999999999999, 69.019999999999996, 41.600000000000001, 54.770000000000003, 39.740000000000002, 54.960000000000001, 15, 49.079999999999998, 49.68, 58.599509590471207, 117.01000000000001, 83.329999999999998, 59.579999999999998, 12.77, 27.210000000000001, 31.539999999999999, 31.109999999999999, 80.170000000000002, 12.98, 41.560000000000002, 63.420000000000002, 53.310000000000002, 62.119999999999997, 57.280000000000001, 57.475175368411136, 91.840000000000003, 82.400000000000006, 27.890000000000001, 37.93, 28.510000000000002, 31.239999999999998, 49.149999999999999, 91.090000000000003, 20.390000000000001, 43.200000000000003, 20.219999999999999, 13.539999999999999, 25.112494188706087, 13.77, 25.112494188706087, 50.560000000000002, 25.112494188706087, 36.270000000000003, 31.399999999999999, 4.8799999999999999, 25.112494188706087, 25.112494188706087, 13.119999999999999, 25.112494188706087, 25.112494188706087, 25.112494188706087, 19.418235294117643, 25.112494188706087, 25.112494188706087, 25.112494188706087, 67.260000000000005, 25.112494188706087, 25.112494188706087, 25.112494188706087, 25.112494188706087, 25.112494188706087, 25.112494188706087, 25.112494188706087, 25.112494188706087, 25.112494188706087, 94, 22.809999999999999, 11.35, 10.41, 13.92, 15.91, 59.950000000000003, 15.5, 9.3200000000000003, 46.579999999999998, 31.600000000000001, 46.479999999999997, 55.939999999999998, 50.350000000000001, 45.350000000000001, 45.170000000000002, 50.469999999999999, 21.09, 53.689999999999998, 69.609999999999999, 38.364999999999995, 17.210000000000001, 54.189999999999998, 38.020000000000003, 4.1200000000000001, 4.7300000000000004, 4.29, 31.82, 61.600000000000001, 5.8700000000000001, 26.810989882287117, 24.02, 11.81, 6.5225, 10.380000000000001, 3.02, 10.57, 4.7599999999999998, 11.06, 17.43, 7.2999999999999998, 5.5300000000000002, 9.9100000000000001, 14.300000000000001, 6.9400000000000004, 2.085, 3.98, 13.380000000000001, 8.5174026380711734, 10, 6.8399999999999999, 6.0599999999999996, 10.800000000000001, 5.2300000000000004, 8.5174026380711734, 13.32, 8.5174026380711734, 12.26, 11.26, 2.73, 3.0099999999999998, 27.75, 2.6600000000000001, 22.969999999999999, 19.620000000000001, 9.7200000000000006, 2.52, 5.3700000000000001, 42.659999999999997, 6.1799999999999997, 5.21, 8.5174026380711734, 9.6300000000000008, 20.219999999999999, 8.5174026380711734, 17.690000000000001, 16.350000000000001, 8.5174026380711734, 52.619999999999997, 43.039999999999999, 95.079999999999998, 92.069999999999993, 56.670000000000002, 78.739999999999995, 61.960000000000001, 71.25, 48.090000000000003, 22.649999999999999, 47.125432907441187, 47.125432907441187, 47.125432907441187, 62.509999999999998, 25.129999999999999, 37.789999999999999, 17.77, 28.370000000000001, 54.719999999999999, 46.097499999999997, 102.15000000000001, 26.41, 11.539999999999999, 11.630000000000001, 8.8000000000000007, 47.125432907441187, 47.125432907441187, 25.07, 47.125432907441187, 47.125432907441187, 65.040000000000006, 16.010000000000002, 47.125432907441187, 96.890000000000001, 18.43, 47.125432907441187, 23.559999999999999, 24.93, 47.125432907441187, 47.125432907441187, 22.859999999999999, 47.125432907441187, 47.125432907441187, 47.125432907441187, 47.125432907441187, 47.125432907441187, 47.125432907441187, 47.125432907441187, 47.125432907441187, 47.125432907441187, 47.125432907441187, 47.125432907441187, 47.125432907441187, 47.125432907441187, 87.890000000000001, 72.819999999999993, 109.76000000000001, 109.76000000000001, 109.76000000000001, 109.76000000000001, 77.579999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [72.390000000000001, 68.409999999999997, 68.409999999999997, 68.409999999999997, 68.719999999999999, 62.880000000000003, 143.31, 92.939999999999998, 90.950000000000003, 67.799999999999997, 88.709999999999994, 85.109999999999999, 79.5, 19.960000000000001, 70.969999999999999, 67.180000000000007, 48.380000000000003, 70.790000000000006, 94.510000000000005, 72.040000000000006, 79.120000000000005, 82.659999999999997, 82.659999999999997, 82.659999999999997, 96.469999999999999, 96.470000000000013, 53.479999999999997, 54.600000000000001, 74.379999999999995, 69.349999999999994, 75.819999999999993, 74.680000000000007, 69.989999999999995, 69.989999999999995, 69.989999999999995, 69.989999999999995, 69.989999999999995, 28.649999999999999, 87.170000000000002, 87.170000000000002, 68.069999999999993, 43.509999999999998, 74.590000000000003, 82.129999999999995, 61.390000000000001, 66.879999999999995, 71.310000000000002, 40.880000000000003, 56.240000000000002, 40.43, 56.829999999999998, 15.1, 49.079999999999998, 53.75, 59.356036428351672, 118.88, 83.329999999999998, 64.849999999999994, 16.280000000000001, 27.210000000000001, 36.149999999999999, 31.109999999999999, 76.890000000000001, 14.35, 45.920000000000002, 64.549999999999997, 53.310000000000002, 62.140000000000001, 62.240000000000002, 62.452014226504623, 99.790000000000006, 91.409999999999997, 28.649999999999999, 38.649999999999999, 33.689999999999998, 32.850000000000001, 48.009999999999998, 93.129999999999995, 20.390000000000001, 42.409999999999997, 20.809999999999999, 14.44, 25.079815551833303, 12.58, 25.079815551833303, 50.560000000000002, 25.079815551833303, 36.270000000000003, 32.700000000000003, 4.8799999999999999, 25.079815551833303, 25.079815551833303, 16.390000000000001, 25.079815551833303, 25.079815551833303, 25.079815551833303, 20.239999999999998, 25.079815551833303, 25.079815551833303, 25.079815551833303, 67.260000000000005, 25.079815551833303, 25.079815551833303, 25.079815551833303, 25.079815551833303, 25.079815551833303, 25.079815551833303, 25.079815551833303, 25.079815551833303, 25.079815551833303, 96.879999999999995, 22.539999999999999, 11.975, 10.859999999999999, 13.93, 16.850000000000001, 57.340000000000003, 15.5, 9.3200000000000003, 46.579999999999998, 32.670000000000002, 52.710000000000001, 56.43, 51.700000000000003, 44.840000000000003, 48.380000000000003, 53.729999999999997, 23.760000000000002, 56.630000000000003, 69.609999999999999, 40.009999999999998, 17.210000000000001, 53.609999999999999, 40.020000000000003, 4.2699999999999996, 4.7300000000000004, 4.5300000000000002, 33.130000000000003, 61.600000000000001, 5.9500000000000002, 27.003986438939037, 25.129999999999999, 11.81, 6.6699999999999999, 10.380000000000001, 7.5099999999999998, 19.350000000000001, 4.7599999999999998, 11.06, 18.649999999999999, 7.2999999999999998, 5.6799999999999997, 9.7799999999999994, 14.300000000000001, 7.6799999999999997, 2.4300000000000002, 3.98, 14.23, 10.070432554863208, 9.7200000000000006, 5.7699999999999996, 10.800000000000001, 7.2400000000000002, 5.7599999999999998, 10.070432554863208, 15.07, 10.070432554863208, 12.26, 11.26, 2.73, 3.0099999999999998, 28.370000000000001, 2.6600000000000001, 24.010000000000002, 19.620000000000001, 9.7200000000000006, 2.52, 5.3700000000000001, 42.780000000000001, 6.1799999999999997, 5.21, 10.070432554863208, 9.6300000000000008, 20.219999999999999, 10.070432554863208, 17.690000000000001, 12.69, 10.070432554863208, 54.57, 45.170000000000002, 99.269999999999996, 89.109999999999999, 55.729999999999997, 78.739999999999995, 64.930000000000007, 71.25, 57.939999999999998, 18.690000000000001, 47.775853844039951, 47.775853844039951, 47.775853844039951, 58.770000000000003, 25.129999999999999, 37.789999999999999, 18.690000000000001, 30.82, 54.719999999999999, 45.219999999999999, 102.15000000000001, 26.41, 11.539999999999999, 11.630000000000001, 8.8000000000000007, 47.775853844039951, 47.775853844039951, 25.699999999999999, 47.775853844039951, 47.775853844039951, 65.040000000000006, 16.899999999999999, 47.775853844039951, 96.890000000000001, 18.43, 47.775853844039951, 23.559999999999999, 24.93, 47.775853844039951, 47.775853844039951, 22.859999999999999, 47.775853844039951, 47.775853844039951, 47.775853844039951, 47.775853844039951, 47.775853844039951, 47.775853844039951, 47.775853844039951, 47.775853844039951, 47.775853844039951, 47.775853844039951, 47.775853844039951, 47.775853844039951, 47.775853844039951, 87.569999999999993, 74.159999999999997, 110.14, 110.14, 110.14, 110.14, 75.730000000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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
            "title": "Tertiary school enrollment",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [75.670000000000002, 68.969999999999999, 68.969999999999999, 68.969999999999999, 71.290000000000006, 73.019999999999996, 150.19999999999999, 96.540000000000006, 94.590000000000003, 71.870000000000005, 93.939999999999998, 88.950000000000003, 82.689999999999998, 20.73, 70.930000000000007, 69.109999999999999, 50.729999999999997, 71.909999999999997, 93.480000000000004, 73.150000000000006, 85.939999999999998, 83.980000000000004, 83.980000000000004, 83.980000000000004, 100.87, 100.87, 55.270000000000003, 56.520000000000003, 74.030000000000001, 72.329999999999998, 82.239999999999995, 78.780000000000001, 77.010000000000005, 77.010000000000005, 77.010000000000005, 77.010000000000005, 77.010000000000005, 30.329999999999998, 93.920000000000002, 93.920000000000002, 71.890000000000001, 47.32, 86.519999999999996, 75.909999999999997, 60.32, 68.739999999999995, 76.819999999999993, 43.579999999999998, 61.299999999999997, 40.549999999999997, 56.829999999999998, 15.199999999999999, 49.079999999999998, 56.700000000000003, 62.217581175038013, 125.76000000000001, 83.329999999999998, 64.849999999999994, 21.789999999999999, 27.210000000000001, 38.869999999999997, 31.109999999999999, 73.959999999999994, 16.420000000000002, 52.530000000000001, 64.459999999999994, 58.759999999999998, 62.140000000000001, 67.390000000000001, 67.565990599776569, 97.819999999999993, 103.15000000000001, 30.329999999999998, 41, 38.869999999999997, 34.890000000000001, 49.670000000000002, 97.099999999999994, 20.390000000000001, 40.909999999999997, 21.359999999999999, 13.880000000000001, 24.719891656198431, 12.460000000000001, 24.719891656198431, 50.560000000000002, 24.719891656198431, 36.270000000000003, 32.700000000000003, 4.8799999999999999, 24.719891656198431, 24.719891656198431, 17.57, 24.719891656198431, 24.719891656198431, 24.719891656198431, 20.239999999999998, 24.719891656198431, 24.719891656198431, 24.719891656198431, 67.260000000000005, 24.719891656198431, 24.719891656198431, 24.719891656198431, 24.719891656198431, 24.719891656198431, 24.719891656198431, 24.719891656198431, 24.719891656198431, 24.719891656198431, 100.31999999999999, 23.399999999999999, 12.6, 10.859999999999999, 14.380000000000001, 17.710000000000001, 57.340000000000003, 15.5, 9.3200000000000003, 46.579999999999998, 33.490000000000002, 52.710000000000001, 58.990000000000002, 58.439999999999998, 43.509999999999998, 43.840000000000003, 61.560000000000002, 31.280000000000001, 70.760000000000005, 69.609999999999999, 40.009999999999998, 17.210000000000001, 54.210000000000001, 42.82, 4.2699999999999996, 4.7300000000000004, 4.5300000000000002, 33.899999999999999, 61.600000000000001, 5.9500000000000002, 27.486252292467906, 25.239999999999998, 11.81, 6.6699999999999999, 10.380000000000001, 3.71, 19.989999999999998, 4.7599999999999998, 11.06, 19.190000000000001, 7.2999999999999998, 5.5800000000000001, 9.7799999999999994, 14.300000000000001, 9.3599999999999994, 2.4100000000000001, 3.98, 9.850134931585929, 15.73, 9.7200000000000006, 6.7199999999999998, 10.800000000000001, 7, 6.29, 9.850134931585929, 15.07, 9.850134931585929, 12.26, 11.26, 2.73, 3.0099999999999998, 28.370000000000001, 2.6600000000000001, 22.899999999999999, 19.620000000000001, 9.7200000000000006, 2.52, 5.3700000000000001, 43.960000000000001, 6.1799999999999997, 5.21, 9.850134931585929, 9.6300000000000008, 20.219999999999999, 9.850134931585929, 17.690000000000001, 15.470000000000001, 9.850134931585929, 56.829999999999998, 45.649999999999999, 107.13, 96.219999999999999, 58.32, 78.739999999999995, 75.170000000000002, 71.25, 57.939999999999998, 18.690000000000001, 48.026913118374708, 48.026913118374708, 58.520000000000003, 48.026913118374708, 25.129999999999999, 37.789999999999999, 19.899999999999999, 30.82, 54.719999999999999, 53.039999999999999, 102.15000000000001, 26.41, 11.539999999999999, 11.630000000000001, 8.8000000000000007, 48.026913118374708, 48.026913118374708, 23.52, 48.026913118374708, 48.026913118374708, 65.040000000000006, 16.899999999999999, 48.026913118374708, 96.890000000000001, 18.43, 48.026913118374708, 23.559999999999999, 24.93, 48.026913118374708, 48.026913118374708, 22.859999999999999, 48.026913118374708, 48.026913118374708, 48.026913118374708, 48.026913118374708, 48.026913118374708, 48.026913118374708, 48.026913118374708, 48.026913118374708, 48.026913118374708, 48.026913118374708, 48.026913118374708, 48.026913118374708, 48.026913118374708, 84.859999999999999, 77.799999999999997, 112.69, 112.69, 112.69, 112.69, 79.409999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 160,
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

  
