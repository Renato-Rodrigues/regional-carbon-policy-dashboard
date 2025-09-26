(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Consumption_Coal_consumption_map') 

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
    "b55c4e5b63a0": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c4e5b63a0",
  "attrs": {
    "b55c4e5b63a0": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 4733490,
      "colorbar": {
        "title": "Coal consumption"
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
        "title": "Coal consumption",
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
      "z": [274393.63, 22317.369999999999, 2.2234964039675273, 0.049833279611655311, 23317.16, 0.01, 78155.979999999996, 21.109999999999999, 47353.029999999999, 5901.7700000000004, 6575.2799999999997, 15057.549999999999, 9224.1299999999992, 94.799999999999997, 160801.67000000001, 65601.770000000004, 9975.9099999999999, 298.73000000000002, 111.33, 34.170000000000002, 3647.54, 10621.860000000001, 219.77132580093226, 1.0000000000000001e-05, 9828.2000000000007, 49.556015510412976, 40704.440000000002, 16189.629999999999, 34901.339999999997, 1237.8900000000001, 5890.7399999999998, 3088.6700000000001, 69471.979999999996, 351.31534869894926, 181.6362721953119, 138.65855490531561, 1.0000000000000001e-05, 1.0615318848810475, 833.35000000000002, 0.43886901117341082, 203.93000000000001, 0.94695864873161895, 93.700000000000003, 78941.929999999993, 70.549999999999997, 40321.400000000001, 7348.7799999999997, 13.23, 273.75, 8334.5699999999997, 1609.3699999999999, 335.40648387916974, 156.26816206292261, 134.39718404639385, 3.8306793542081725, 70460.759999999995, 247112.54999999999, 61939.900000000001, 3058.9099999999999, 39747.089999999997, 255.49000000000001, 3.7799999999999998, 58.420000000000002, 1621.5, 1.0000000000000001e-05, 3.0099999999999998, 5689.79, 185567.28, 1931366.3799999999, 61254.129999999997, 11768.26, 1.51, 395174, 36011.769999999997, 9191.3500000000004, 8987.1299999999992, 27855.439999999999, 0.16, 289.66000000000003, 7125.3000000000002, 0.089999999999999997, 0.040000000000000001, 1.0000000000000001e-05, 41.890000000000001, 208.48425688212316, 18.190000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 57.2184663052738, 317.62, 1.0000000000000001e-05, 1.0000000000000001e-05, 37.094898356137818, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.87575072090876, 12.954347905426284, 11.741931359609413, 4.4701607040911213, 3.4282828697076071, 3.4179368545473165, 2.2872651977441678, 1.0000000000000001e-05, 0.48637640500793067, 0.43839818085801324, 0.36029145102153637, 0.067214990799599958, 0.011369247428890386, 87296.339999999997, 1322.3900000000001, 5823.5, 320.76999999999998, 38.579999999999998, 82.469999999999999, 1882.75, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.25, 13970.68, 1.1699999999999999, 87.450000000000003, 198.41999999999999, 377.70202396125916, 0.13, 0.080000000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 12.960000000000001, 1995.8599999999999, 407.66000000000003, 1.0000000000000001e-05, 5390.3000000000002, 187.28, 1.0000000000000001e-05, 1.3200000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 23.266684119329391, 187997.88, 306.44, 1.1399999999999999, 1.0000000000000001e-05, 71.540000000000006, 165.34999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 13.880000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3980.2800000000002, 67.719999999999999, 159.83000000000001, 132.28, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 139.7492001439702, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 10.07, 904.46000000000004, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 348.32999999999998, 251.30000000000001, 1.0000000000000001e-05, 16.498969253171001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.6197879210019743, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.11633405826480155, 20106.639999999999, 18327.689999999999, 2000.6900000000001, 3823.9099999999999, 4902.46, 65.040000000000006, 0.059999999999999998, 643.75, 1.6100000000000001, 403.44999999999999, 27.559999999999999, 1.0000000000000001e-05, 422.18000000000001, 1.0000000000000001e-05, 0.19, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 224.30481194014936, 1295.9100000000001, 16.329999999999998, 93.700000000000003, 3.5099999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 22.715583749183882, 22.406965625698049, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 10.091614823226681, 1.0000000000000001e-05, 7.1482666842410412, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.8805179539608501, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.5025463991714321, 2.3810393602996727, 1.7556737396300792, 1.6977925989008025, 1.1995703828668676, 1.177512682233145, 0.83412793723249112, 0.63647576472343415, 0.41486903771780392, 1.0000000000000001e-05, 0.17174656832497981, 0.054195824652880975, 0.0016258747395864292, 5.4195824652880974e-05, 1094860.8799999999, 62106.349999999999, 139780.85999999999, 13.377917628737709, 4.3548758032724635, 0.0070880140027221082, 3996.23],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [274393.63, 22317.369999999999, 2.2234964039675273, 0.049833279611655311, 23317.16, 0.01, 78155.979999999996, 21.109999999999999, 47353.029999999999, 5901.7700000000004, 6575.2799999999997, 15057.549999999999, 9224.1299999999992, 94.799999999999997, 160801.67000000001, 65601.770000000004, 9975.9099999999999, 298.73000000000002, 111.33, 34.170000000000002, 3647.54, 10621.860000000001, 219.77132580093226, 1.0000000000000001e-05, 9828.2000000000007, 49.556015510412976, 40704.440000000002, 16189.629999999999, 34901.339999999997, 1237.8900000000001, 5890.7399999999998, 3088.6700000000001, 69471.979999999996, 351.31534869894926, 181.6362721953119, 138.65855490531561, 1.0000000000000001e-05, 1.0615318848810475, 833.35000000000002, 0.43886901117341082, 203.93000000000001, 0.94695864873161895, 93.700000000000003, 78941.929999999993, 70.549999999999997, 40321.400000000001, 7348.7799999999997, 13.23, 273.75, 8334.5699999999997, 1609.3699999999999, 335.40648387916974, 156.26816206292261, 134.39718404639385, 3.8306793542081725, 70460.759999999995, 247112.54999999999, 61939.900000000001, 3058.9099999999999, 39747.089999999997, 255.49000000000001, 3.7799999999999998, 58.420000000000002, 1621.5, 1.0000000000000001e-05, 3.0099999999999998, 5689.79, 185567.28, 1931366.3799999999, 61254.129999999997, 11768.26, 1.51, 395174, 36011.769999999997, 9191.3500000000004, 8987.1299999999992, 27855.439999999999, 0.16, 289.66000000000003, 7125.3000000000002, 0.089999999999999997, 0.040000000000000001, 1.0000000000000001e-05, 41.890000000000001, 208.48425688212316, 18.190000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 57.2184663052738, 317.62, 1.0000000000000001e-05, 1.0000000000000001e-05, 37.094898356137818, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.87575072090876, 12.954347905426284, 11.741931359609413, 4.4701607040911213, 3.4282828697076071, 3.4179368545473165, 2.2872651977441678, 1.0000000000000001e-05, 0.48637640500793067, 0.43839818085801324, 0.36029145102153637, 0.067214990799599958, 0.011369247428890386, 87296.339999999997, 1322.3900000000001, 5823.5, 320.76999999999998, 38.579999999999998, 82.469999999999999, 1882.75, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.25, 13970.68, 1.1699999999999999, 87.450000000000003, 198.41999999999999, 377.70202396125916, 0.13, 0.080000000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 12.960000000000001, 1995.8599999999999, 407.66000000000003, 1.0000000000000001e-05, 5390.3000000000002, 187.28, 1.0000000000000001e-05, 1.3200000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 23.266684119329391, 187997.88, 306.44, 1.1399999999999999, 1.0000000000000001e-05, 71.540000000000006, 165.34999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 13.880000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3980.2800000000002, 67.719999999999999, 159.83000000000001, 132.28, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 139.7492001439702, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 10.07, 904.46000000000004, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 348.32999999999998, 251.30000000000001, 1.0000000000000001e-05, 16.498969253171001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.6197879210019743, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.11633405826480155, 20106.639999999999, 18327.689999999999, 2000.6900000000001, 3823.9099999999999, 4902.46, 65.040000000000006, 0.059999999999999998, 643.75, 1.6100000000000001, 403.44999999999999, 27.559999999999999, 1.0000000000000001e-05, 422.18000000000001, 1.0000000000000001e-05, 0.19, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 224.30481194014936, 1295.9100000000001, 16.329999999999998, 93.700000000000003, 3.5099999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 22.715583749183882, 22.406965625698049, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 10.091614823226681, 1.0000000000000001e-05, 7.1482666842410412, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.8805179539608501, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.5025463991714321, 2.3810393602996727, 1.7556737396300792, 1.6977925989008025, 1.1995703828668676, 1.177512682233145, 0.83412793723249112, 0.63647576472343415, 0.41486903771780392, 1.0000000000000001e-05, 0.17174656832497981, 0.054195824652880975, 0.0016258747395864292, 5.4195824652880974e-05, 1094860.8799999999, 62106.349999999999, 139780.85999999999, 13.377917628737709, 4.3548758032724635, 0.0070880140027221082, 3996.23],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [276135.28000000003, 21632.830000000002, 2.1252459784452244, 0.048642104205953524, 26774.009999999998, 0.28999999999999998, 78958.470000000001, 19.329999999999998, 50232.269999999997, 5970.1099999999997, 6110.1000000000004, 14928.58, 8606.8400000000001, 138.88999999999999, 159885.66, 64290.029999999999, 9634.1900000000005, 291.00999999999999, 108.03, 79.370000000000005, 3762.1799999999998, 8141.6599999999999, 168.43811102399494, 1.0000000000000001e-05, 8809.6599999999999, 44.597183749119196, 38736.279999999999, 14850.32, 33607.230000000003, 1310.6500000000001, 5923.8100000000004, 3175.7600000000002, 66636.839999999997, 337.4582287709506, 174.88281796986783, 132.54267384872361, 1.0000000000000001e-05, 1.1597120092216746, 931.45000000000005, 0.4904813247646404, 200.62, 0.93519727185073687, 114.64, 73402.820000000007, 65.040000000000006, 40321.400000000001, 6312.25, 15.43, 189.68000000000001, 8333.4599999999991, 1609.3699999999999, 356.90531703555274, 155.13676525351633, 141.45119305639119, 3.8213959138498872, 71041.669999999998, 239243.16, 68504.160000000003, 3597.9400000000001, 41355.360000000001, 257.94, 4.9500000000000002, 108.03, 1500.24, 1.0000000000000001e-05, 1.75, 5719.3400000000001, 189829.91, 2338681, 63283.470000000001, 11784.799999999999, 1.73, 439141, 39773.260000000002, 16651.900000000001, 10656.030000000001, 30967.57, 0.51000000000000001, 333.74000000000001, 10653.09, 0.62, 1.0000000000000001e-05, 1.0000000000000001e-05, 50.710000000000001, 309.00773717806175, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 85.029894325446847, 309.35000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 54.482804843465971, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 21.265622221363326, 18.897527657628039, 17.225559768316618, 6.5920834625327842, 5.0265467895690197, 4.9400714262865515, 3.3459313639293544, 1.0000000000000001e-05, 0.66020613890653757, 0.62877567032887138, 0.50172340581385999, 0.098714953162448549, 0.016629877554320847, 88444.949999999997, 1410.8800000000001, 7299.5, 283.29000000000002, 37.479999999999997, 98.140000000000001, 1916.9200000000001, 1.0000000000000001e-05, 0.029999999999999999, 0.11, 14018.08, 2.3599999999999999, 87.450000000000003, 224.87, 375.07696027288944, 0.46000000000000002, 0.12, 1.0000000000000001e-05, 1.0000000000000001e-05, 16.25, 1934.21, 420.69999999999999, 1.0000000000000001e-05, 6031.8400000000001, 210.74000000000001, 1.0000000000000001e-05, 2.8500000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 26.275978935232875, 189064.44, 306.44, 3.2400000000000002, 0.01, 86.260000000000005, 192.91, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 18.359999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 62.829999999999998, 3635.8000000000002, 117.95, 139.99000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 133.84273391166184, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 934.37, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 318.56999999999999, 249.19999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.257198741646349, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.4001746093058038, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.10432753440689047, 21858.98, 20099.5, 2461.46, 5075.04, 3948.4499999999998, 60.630000000000003, 0.070000000000000007, 750.66999999999996, 1.9099999999999999, 468.48000000000002, 26.300000000000001, 1.0000000000000001e-05, 475.10000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 256.86670910302502, 1433, 12.09, 72.75, 2.6000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 25.082874112806746, 24.990556708846388, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 11.84583046306444, 1.0000000000000001e-05, 8.2068612601844855, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.6335207273695183, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.8325144514236649, 2.7736196783108289, 2.0286588981577105, 1.9380844859249904, 1.3993471480735153, 1.397818207961552, 0.98161013068283542, 0.72985485184691812, 0.47993430114535701, 1.0000000000000001e-05, 0.19487870667087351, 0.061157604478541829, 0.0018347281343562547, 6.1157604478541817e-05, 1107254.5, 65430.919999999998, 145303.17000000001, 13.71334649647951, 4.462742252362724, 0.0072896802554111781, 4192.5500000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [266199.03000000003, 23716.200000000001, 2.295387824292467, 0.053677916414361863, 26728.810000000001, 0.26000000000000001, 77888.130000000005, 25.859999999999999, 49070.43, 6012, 5863.1899999999996, 14336.639999999999, 8169.2200000000003, 134.47999999999999, 157063.75, 63153.540000000001, 9138.1499999999996, 316.36000000000001, 132.28, 63.93, 3589.1199999999999, 6918.1000000000004, 142.79931224708017, 1.0000000000000001e-05, 4926.2200000000003, 25.023162092344482, 39499.07, 12773.57, 32320.830000000002, 1256.6300000000001, 5723.1899999999996, 3312.4400000000001, 68181.179999999993, 345.36519195083218, 179.34288496507693, 135.01576350950648, 1.0000000000000001e-05, 1.2042595604554189, 792.55999999999995, 0.41691209140847935, 240.30000000000001, 1.1229012728726127, 128.97, 70379.190000000002, 59.520000000000003, 40321.400000000001, 5242.6800000000003, 19.84, 200.62, 8237.5599999999995, 1609.3699999999999, 370.11994233600666, 153.98358769123075, 142.63440926282399, 3.814930238360823, 84682.759999999995, 236608.64000000001, 70291, 3476.6900000000001, 41207.660000000003, 185.19, 5.3200000000000003, 113.54000000000001, 1440.72, 1.0000000000000001e-05, 0.77000000000000002, 6032.5, 197235.22, 2682751.75, 65856.279999999999, 11931.4, 1.3500000000000001, 463510, 45581.330000000002, 16327.42, 11062.780000000001, 32644.389999999999, 1.77, 382.5, 12038.33, 0.14000000000000001, 0.23999999999999999, 1.0000000000000001e-05, 56.219999999999999, 355.02740433944393, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 97.153883713165897, 286.60000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 61.534748952878019, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 23.344007156071889, 21.196196766130836, 19.43249888448323, 7.4198107230681067, 5.670526419948084, 5.448145494093982, 3.7621311850300931, 1.0000000000000001e-05, 0.69484679862830656, 0.68548733205195533, 0.53498710950422956, 0.11156484159010523, 0.018718933152702222, 91087.179999999993, 1681.1099999999999, 7880.4099999999999, 278.62, 36.380000000000003, 111.48, 1951.0899999999999, 1.0000000000000001e-05, 0.11, 0.040000000000000001, 13992.719999999999, 1.6000000000000001, 86.180000000000007, 260.14999999999998, 369.56359593356501, 1.54, 0.62, 1.0000000000000001e-05, 1.0000000000000001e-05, 31.809999999999999, 2150.3299999999999, 415.45999999999998, 1.0000000000000001e-05, 6206.0100000000002, 193.53999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.58999999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 27.276045873289906, 193198.79999999999, 360.45999999999998, 11.5, 0.01, 77.040000000000006, 159.84, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 18.789999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 64.340000000000003, 3963.3699999999999, 155.43000000000001, 167.55000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 142.61995506709437, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.28999999999999998, 1.0000000000000001e-05, 1039.97, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 401.24000000000001, 226.88, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.664524536812234, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.5164269805148827, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.10395652643286163, 21954.599999999999, 24706.849999999999, 2615.7800000000002, 5037.3400000000001, 4354.1300000000001, 56.219999999999999, 0.080000000000000002, 830.03999999999996, 3.1699999999999999, 450.83999999999997, 24.25, 1.0000000000000001e-05, 524.70000000000005, 1.0000000000000001e-05, 0.60999999999999999, 1.0000000000000001e-05, 0.19, 1.0000000000000001e-05, 274.39218276391586, 1466.0699999999999, 7.8499999999999996, 65.040000000000006, 4.2000000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 25.965240218465393, 25.780852102484019, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 12.959583668341361, 1.0000000000000001e-05, 8.8641520062036232, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.9835670831248571, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.0127994309539234, 2.9901976398907268, 2.184711017641376, 2.0642325245381277, 1.5446489003531396, 1.5238501011696286, 1.0769334889926665, 0.78095305417220606, 0.51797381000669751, 1.0000000000000001e-05, 0.2063459813732548, 0.064392567131613301, 0.001931777013948399, 6.4392567131613294e-05, 1125977.6299999999, 69252.630000000005, 147255.09, 13.684166550031312, 4.4519155176101872, 0.0072982221600167005, 4678.5600000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [267558.19, 22004.310000000001, 2.1019533362195308, 0.049941927067067106, 27343.900000000001, 0.23000000000000001, 71717.389999999999, 18.629999999999999, 43880.760000000002, 6014.1999999999998, 5500.5299999999997, 13947.530000000001, 7899.1499999999996, 162.03999999999999, 161287.79999999999, 63275.900000000001, 9166.8099999999995, 439.81999999999999, 143.30000000000001, 49.600000000000001, 4149.0900000000001, 10282.35, 210.96166753558856, 1.0000000000000001e-05, 8626.6800000000003, 44.05280068693807, 44845.279999999999, 13262.99, 33126.620000000003, 1180.5699999999999, 5766.1800000000003, 2925.5300000000002, 74509.539999999994, 377.31619140399687, 196.45574508535239, 146.85491448477444, 1.0000000000000001e-05, 1.2613911057773408, 680.13, 0.35898643051213375, 251.33000000000001, 1.1766337343434616, 119.05, 75640.520000000004, 89.010000000000005, 40321.400000000001, 5585.5299999999997, 17.640000000000001, 209.44, 7583.8900000000003, 1609.3699999999999, 382.66331206981374, 154.13756103564768, 145.13173853760455, 3.8379324708692004, 92292.009999999995, 242177.5, 75657.050000000003, 3725.8099999999999, 40032.589999999997, 112.23, 18.149999999999999, 120.15000000000001, 1369.0699999999999, 1.0000000000000001e-05, 1.23, 6273.4700000000003, 194701.01999999999, 2983285.5, 68516.669999999998, 12569.639999999999, 1.3300000000000001, 493153, 47823.010000000002, 17639.16, 11091.440000000001, 33143.07, 0.5, 384.38999999999999, 12367.92, 0.050000000000000003, 0.48999999999999999, 1.0000000000000001e-05, 68.340000000000003, 373.4910377500716, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 100.6673494078797, 311.94999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 63.041243390757963, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 23.207303680791401, 21.559746509688782, 19.88388868151522, 7.4931726214980712, 5.8127254975832798, 5.4536131058318027, 1.0000000000000001e-05, 3.8374161222942704, 0.70082370381744585, 0.69787890571682132, 0.5220323905652462, 0.11412048743199227, 0.019122065588470558, 94471.270000000004, 2014.04, 8358.8199999999997, 276.63999999999999, 38.579999999999998, 113.28, 1808.8900000000001, 1.0000000000000001e-05, 0.070000000000000007, 0.059999999999999998, 13960.76, 0.83999999999999997, 322.31999999999999, 84.909999999999997, 363.02334235848349, 0.01, 1.1200000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 17.190000000000001, 2123.0599999999999, 275.08999999999997, 1.0000000000000001e-05, 6477.1700000000001, 179.16999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.2200000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 28.085179526343346, 197328.73000000001, 439.81999999999999, 9.8000000000000007, 0.01, 65.260000000000005, 213.84999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.08, 1.0000000000000001e-05, 1.0000000000000001e-05, 68.359999999999999, 3693.54, 65.040000000000006, 184.09, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 138.61029938699187, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 10.300000000000001, 1.0000000000000001e-05, 1079.1600000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 534.62, 242.63, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.690150204040467, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.3175045829625973, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.09429779199911234, 22109.290000000001, 27262.529999999999, 2502.2399999999998, 6310.4499999999998, 3818.4699999999998, 132.83000000000001, 0.089999999999999997, 894.40999999999997, 9.8900000000000006, 471.79000000000002, 22.050000000000001, 1.0000000000000001e-05, 776.02999999999997, 1.0000000000000001e-05, 0.81999999999999995, 1.0000000000000001e-05, 0.029999999999999999, 1.0000000000000001e-05, 308.88068833835848, 1653.47, 5.5999999999999996, 35.270000000000003, 5.4100000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 28.657383786683003, 28.273189601587941, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.858093610905506, 1.0000000000000001e-05, 10.095479536491323, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.7459980734076863, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.4475263135822924, 3.3286584196635807, 2.4772841054929327, 2.317888192420936, 1.795741490631281, 1.750710358238744, 1.2440743798287406, 0.88096620117145785, 0.58876418653544005, 1.0000000000000001e-05, 0.22983747017175038, 0.071477987924661895, 0.0021443396377398569, 7.1477987924661897e-05, 1112291.75, 69554.660000000003, 150231.06, 13.726576960521081, 4.4663163823166103, 0.0073459151024944241, 4609.2799999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [275892.75, 22880.650000000001, 2.1675483130311388, 0.052111228302405818, 27692.23, 0.28000000000000003, 73946.270000000004, 14.609999999999999, 46709.290000000001, 5204.0100000000002, 4817.0900000000001, 14842.6, 7204.6999999999998, 133.38, 158482.42000000001, 64364.980000000003, 8769.9799999999996, 417.77999999999997, 178.56999999999999, 92.590000000000003, 3747.8499999999999, 8731.3999999999996, 177.67147298465906, 1.0000000000000001e-05, 7592.71, 38.959311480282565, 43593.050000000003, 13282.84, 37122.489999999998, 1263.25, 5802.5600000000004, 2782.23, 69477.5, 351.58173294481026, 183.69703547941535, 136.26794458453361, 1.0000000000000001e-05, 1.354202126826908, 744.05999999999995, 0.39311130472932188, 295.42000000000002, 1.3795442502082809, 133.38, 78058.979999999996, 118.5, 41283.709999999999, 5919.5200000000004, 84.879999999999995, 143.30000000000001, 7698.5299999999997, 1244.51, 406.16334096672006, 157.93229217432815, 154.82692373819634, 3.960584919181569, 108524.63, 233889.23000000001, 80189.740000000005, 3939.6599999999999, 34815.360000000001, 81.590000000000003, 13.1, 206.13, 1564.1800000000001, 1.0000000000000001e-05, 3.0099999999999998, 6510.3500000000004, 202162.54999999999, 3201220, 71473.440000000002, 13515.42, 1.47, 537472, 56759.82, 18928.869999999999, 11260.1, 35773.080000000002, 0.23999999999999999, 389.99000000000001, 15457.690000000001, 53.229999999999997, 27.399999999999999, 1.0000000000000001e-05, 82.670000000000002, 474.76050952062013, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 125.87881908912826, 268.95999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 78.080509515920994, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 27.846716594225708, 26.510626020118206, 24.583972073438431, 9.1192433739119547, 7.3262929747825458, 6.5973015476793364, 1.0000000000000001e-05, 4.7339559945393113, 0.86080517186133987, 0.8591988394879434, 0.63426506214261746, 0.14116826857967529, 0.023622534902890777, 102048.55, 2155.0100000000002, 10631.780000000001, 297.31, 112.23, 113.22, 1862.95, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.080000000000000002, 14721.35, 1.6799999999999999, 432.77999999999997, 88.260000000000005, 375.73601415360719, 1.0600000000000001, 0.91000000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 24.760000000000002, 2116.71, 281.25999999999999, 1.0000000000000001e-05, 6643.6199999999999, 161.08000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.58999999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.070365102687138, 203252.41, 626.11000000000001, 15.119999999999999, 0.79000000000000004, 71.890000000000001, 196.21000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 11.24, 1.0000000000000001e-05, 1.0000000000000001e-05, 66.140000000000001, 3702.4699999999998, 87.299999999999997, 331.80000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.6000000000000001, 145.05835723539661, 1.0000000000000001e-05, 102.31, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 19.84, 1.0000000000000001e-05, 975.53999999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 631.62, 249.72, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.881385375540615, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.382449010665197, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.091863392281822415, 23031.57, 24469.790000000001, 2900.1799999999998, 6335.7200000000003, 4593.2700000000004, 209.44, 0.48999999999999999, 893.97000000000003, 2.5800000000000001, 493.82999999999998, 19.84, 1.0000000000000001e-05, 802.48000000000002, 1.0000000000000001e-05, 1.03, 1.0000000000000001e-05, 0.17999999999999999, 1.0000000000000001e-05, 311.18116254476155, 1655.1600000000001, 2.6499999999999999, 39.68, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 28.531423657804734, 28.119806859900972, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.153486995454719, 1.0000000000000001e-05, 10.234012674978258, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.6964668682256878, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.5298591365971901, 3.3180832176204711, 2.5104077990205669, 2.3295351087439058, 1.8662708458632675, 1.8020489636911932, 1.285645355827467, 0.88976433989396631, 0.59888325963560507, 1.0000000000000001e-05, 0.22836420380766934, 0.07104190505760441, 0.0021312571517281319, 7.1041905057604395e-05, 1127998.1299999999, 68046.699999999997, 151036.95000000001, 13.504230501686655, 4.3945675459253097, 0.0072517616269394559, 3494.77],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [262148.06, 21377.099999999999, 2.0118512928194177, 0.048880830288523282, 27462.950000000001, 0.14000000000000001, 71787.940000000002, 7.9699999999999998, 29100.98, 4564.6700000000001, 4555.8500000000004, 13988.309999999999, 6330.5699999999997, 126.77, 156003.32999999999, 60939, 8846.0400000000009, 357.14999999999998, 178.56999999999999, 142.19999999999999, 3623.29, 7712.8599999999997, 155.40647044823174, 1.0000000000000001e-05, 5623.9899999999998, 28.982383852972458, 43679.040000000001, 13048.040000000001, 36584.57, 1302.9300000000001, 5728.71, 2483.0700000000002, 64357.269999999997, 325.40307024254582, 170.65935533301234, 125.6212136483758, 1.0000000000000001e-05, 1.4593822433050903, 768.30999999999995, 0.40540730152098936, 262.35000000000002, 1.2168850729143172, 120.15000000000001, 77559.630000000005, 147.99000000000001, 42704.589999999997, 6708.9499999999998, 132.28, 218.25999999999999, 8536.2900000000009, 1873.9300000000001, 435.54064471556671, 166.0682910972487, 165.16064306825885, 4.1657914709845079, 108782.56, 253015.42000000001, 93502.339999999997, 3841.5500000000002, 37956.940000000002, 47.399999999999999, 12.34, 225.97, 1.0000000000000001e-05, 2167.1399999999999, 2.7599999999999998, 6441.0200000000004, 196199.04999999999, 3313598.5, 68675.869999999995, 12505.709999999999, 1.0000000000000001e-05, 587611, 58944.099999999999, 20530.150000000001, 13275.120000000001, 37893.010000000002, 1, 365.97000000000003, 17104.540000000001, 58.840000000000003, 158.78999999999999, 1.0000000000000001e-05, 137.78999999999999, 536.30252320445879, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 139.41136375972533, 268.19, 1.0000000000000001e-05, 1.0000000000000001e-05, 86.070397070710328, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.686970436838582, 29.000248216059923, 27.027350338210173, 9.8743590732084794, 8.3440386023961182, 7.0986403237903355, 1.0000000000000001e-05, 5.1992456185882308, 0.94567156045957379, 0.94146395835041552, 0.69996837556675395, 0.15542154951359763, 0.025972852525668052, 113555.57000000001, 2304.3600000000001, 9246.1900000000005, 315.56, 185.88999999999999, 113.16, 1591.4000000000001, 1.0000000000000001e-05, 52.909999999999997, 0.14999999999999999, 13968.469999999999, 6.1900000000000004, 728.61000000000001, 109.47499999999999, 360.83324349454927, 0.56999999999999995, 3.3500000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 48.960000000000001, 1933.45, 287.68000000000001, 1.0000000000000001e-05, 6218.1300000000001, 184.41999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.29, 1.0000000000000001e-05, 1.0000000000000001e-05, 27.580538729261615, 203264.95000000001, 1332.6900000000001, 17.210000000000001, 16.219999999999999, 95.489999999999995, 195.11000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.550000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 62.090000000000003, 128.09, 2715.2199999999998, 279.99000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.71, 120.76444365629379, 1.0000000000000001e-05, 93.450000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.08, 1.0000000000000001e-05, 878.53999999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 718.71000000000004, 224.08000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 11.969806380325974, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.7526506890650122, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.072032889433006037, 22759.669999999998, 22413.130000000001, 3394.02, 8013.7399999999998, 3048.6799999999998, 212.75, 0.77000000000000002, 936.74000000000001, 5.29, 497.13999999999999, 22.670000000000002, 1.0000000000000001e-05, 870.82000000000005, 1.0000000000000001e-05, 0.70999999999999996, 1.0000000000000001e-05, 0.11, 1.0000000000000001e-05, 325.44341721338685, 1670.26, 41.18, 52.909999999999997, 11.77, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.472414502073125, 28.987114121769395, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 16.01663503287099, 1.0000000000000001e-05, 10.692587143740726, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.9451903524819247, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.7492221345591021, 3.4328716676521585, 2.6356186489897788, 2.4294337872174823, 2.0103207265655119, 1.9268352812904863, 1.3780229270352173, 0.93310927223328277, 0.6320046109604085, 1.0000000000000001e-05, 0.23488069304988449, 0.073297142471488386, 0.0021989142741446512, 7.3297142471488383e-05, 1120548.5, 62001.629999999997, 149819.31, 13.08447793716836, 4.2585540866740432, 0.0070505862362153036, 4408.5100000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [247775.03, 17242.330000000002, 1.61320994128003, 0.039597455777042032, 21989.98, 0.22, 72256.419999999998, 14.720000000000001, 20811.610000000001, 5145.5799999999999, 3667.3899999999999, 13102.059999999999, 4916.3000000000002, 114.64, 146061.59, 56838.410000000003, 8369.8400000000001, 266.75999999999999, 143.30000000000001, 95.900000000000006, 2738.1399999999999, 7510.04, 150.49985926338391, 1.0000000000000001e-05, 6224.7399999999998, 32.210397504640959, 37873.169999999998, 11768.26, 33252.290000000001, 934.75999999999999, 5454.2299999999996, 2015.02, 53702.550000000003, 271.38347977500496, 142.89969861824972, 104.38574965499909, 1.0000000000000001e-05, 1.5731750789043426, 577.61000000000001, 0.30431211876590225, 245.81999999999999, 1.1345932575233113, 108.03, 67656.479999999996, 177.47, 43083.790000000001, 8319.7999999999993, 249.12, 197.31, 8245.2800000000007, 1030.6600000000001, 450.63329709292447, 177.6254124746643, 173.85437758815809, 4.2910294406569243, 110690.66, 224904.31, 83975.080000000002, 3991.3299999999999, 32489.48, 54.009999999999998, 7.0199999999999996, 225.97, 1.0000000000000001e-05, 1908.0999999999999, 0.39000000000000001, 7083.71, 187911.89000000001, 3578759.5, 66195.940000000002, 13592.58, 1.0000000000000001e-05, 642655, 62054.540000000001, 21925.790000000001, 12669.950000000001, 36727.870000000003, 0.17999999999999999, 454.14999999999998, 18282.91, 47.210000000000001, 177.06, 1.0000000000000001e-05, 185.19, 588.49242388140601, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 149.78298354145161, 287.58999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 92.362310233499343, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 30.863584112014294, 30.750752611244611, 28.913211027281221, 10.398840137438327, 9.2457911308043101, 7.4432662194935792, 1.0000000000000001e-05, 5.5670951315720929, 1.0090915746175253, 1.0039224467497518, 0.75341428223302431, 0.16652373217042721, 0.027791010041793594, 118390.3, 2359.1700000000001, 8495.5, 326.94, 308.67000000000002, 107.73, 1251.28, 1.0000000000000001e-05, 99.209999999999994, 1.25, 13570.540000000001, 2.3900000000000001, 943.13, 130.69, 356.20781952619649, 1.1000000000000001, 9.8200000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 30.440000000000001, 1844.1600000000001, 183.19999999999999, 1.0000000000000001e-05, 5803.6599999999999, 195.55000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 25.513340234958459, 203453.10999999999, 1332.6900000000001, 12.130000000000001, 27.48, 97.299999999999997, 169.75999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.9, 1.0000000000000001e-05, 1.0000000000000001e-05, 60.630000000000003, 174.83000000000001, 2812.02, 348.32999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.11, 125.70416508853017, 1.0000000000000001e-05, 126.89, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 9.7100000000000009, 797.10000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 632.88, 1.0000000000000001e-05, 202.88, 1.0000000000000001e-05, 12.00952652155696, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.8060138345066701, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.071864514090717646, 19193.130000000001, 22595.220000000001, 2363.6399999999999, 7329.21, 3993.8000000000002, 256.83999999999997, 1.0600000000000001, 914.42999999999995, 7.1600000000000001, 324.07999999999998, 25.350000000000001, 1.0000000000000001e-05, 852.09000000000003, 1.0000000000000001e-05, 0.57999999999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 303.69813431101841, 1658.6700000000001, 53.890000000000001, 56.219999999999999, 4.2599999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 27.177318597676638, 26.606137111542253, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.085960642320703, 1.0000000000000001e-05, 9.909995409851204, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.316360371370946, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.5512734771853105, 3.1664363232282877, 2.4635787081268425, 2.2603614737240725, 1.9294501152794414, 1.8369866110842255, 1.3168962728883611, 0.8737463688403404, 0.59500602407666014, 1.0000000000000001e-05, 0.21563569044066797, 0.067491608901617525, 0.0020247482670485259, 6.7491608901617517e-05, 997477.63, 52171.230000000003, 154433.09, 13.166749285819758, 4.2859214177914433, 0.0071194707936734925, 3406.9000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [253876.32999999999, 18196.93, 1.693591225236851, 0.041975988728606681, 23999.490000000002, 0.050000000000000003, 64284.519999999997, 14.949999999999999, 16431.029999999999, 2959.6999999999998, 4232.8699999999999, 13108.67, 6121.1300000000001, 112.44, 155369.5, 57094.139999999999, 7952.0600000000004, 330.69, 184.09, 66.140000000000001, 3449.1300000000001, 7350.1999999999998, 148.17776277655108, 1.0000000000000001e-05, 7676.4899999999998, 39.891368828672817, 35056.769999999997, 12113.280000000001, 35936.410000000003, 1290.8099999999999, 5420.0600000000004, 2170.4499999999998, 56575.139999999999, 285.6649927152975, 151.04923013983108, 109.46310233023908, 1.0000000000000001e-05, 1.6491655842514767, 749.57000000000005, 0.39431267604942433, 217.36000000000001, 1.0006176327417993, 116.84, 72857.179999999993, 162.05000000000001, 41533.940000000002, 8425.1700000000001, 89.799999999999997, 205.03, 7648.9300000000003, 2103.21, 422.47523117413249, 174.15992542268711, 173.59980783867064, 4.1825602769079353, 104456, 222806.60999999999, 90875.539999999994, 3964.8000000000002, 30433.68, 87.079999999999998, 8.2200000000000006, 228.18000000000001, 1.0000000000000001e-05, 1860.7, 2.5600000000000001, 7612.3299999999999, 202956.22, 3985044, 69704.330000000002, 11380.25, 1.0000000000000001e-05, 683569, 72611.389999999999, 25968.5, 14573.639999999999, 39042.720000000001, 0.46999999999999997, 375.92000000000002, 25839.25, 223.00999999999999, 174.65000000000001, 1.0000000000000001e-05, 318.56999999999999, 834.99252568453653, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 208.29413826553466, 611.00999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 128.18965367822221, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 42.514852051625951, 41.639582500262534, 40.063789385362874, 14.161353269024968, 13.249902830314078, 10.116407044188499, 1.0000000000000001e-05, 7.7311628006532809, 1.3948886781622767, 1.3856510047969635, 1.0523249575319162, 0.23094183413282723, 0.038490305688804544, 131696.28, 2413.9699999999998, 8033.6400000000003, 547.35000000000002, 303.75, 114.88, 1222.5799999999999, 1.0000000000000001e-05, 187.38999999999999, 2.98, 13556.209999999999, 18.23, 1069.24, 210.16999999999999, 364.26275816392837, 1.6200000000000001, 11.16, 1.0000000000000001e-05, 1.0000000000000001e-05, 76.840000000000003, 1771.05, 1.8700000000000001, 1.0000000000000001e-05, 5842.2399999999998, 240.63, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.3100000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 25.075997079269882, 206727.76999999999, 1332.6900000000001, 18.239999999999998, 41.520000000000003, 105.45999999999999, 295.42000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 38.270000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 69.670000000000002, 141.09999999999999, 3366.73, 316.36000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 155.35982348648957, 1.0000000000000001e-05, 160.33000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.1099999999999999, 767.45000000000005, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 708.84000000000003, 1.0000000000000001e-05, 156.66999999999999, 1.0000000000000001e-05, 14.189532553660037, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.376063674532181, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.084821835357877351, 23930.209999999999, 29260.48, 2741.4499999999998, 9297.9200000000001, 3894.1199999999999, 300.93000000000001, 0.02, 957.25, 15.449999999999999, 541.23000000000002, 25.350000000000001, 1.0000000000000001e-05, 823.42999999999995, 1.0000000000000001e-05, 0.81000000000000005, 1.0000000000000001e-05, 0.050000000000000003, 1.0000000000000001e-05, 328.07213291315765, 1554.6300000000001, 61.270000000000003, 50.710000000000001, 5.6799999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.024940664892693, 28.240722191716063, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 16.450801612585018, 1.0000000000000001e-05, 10.708015207454602, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.8027235754097646, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.8956370396568096, 3.3733527932080611, 2.6539787932048906, 2.4334859815923067, 2.1414878264358652, 1.992860405414189, 1.4562822911976099, 0.9484719360402164, 0.64718456706991956, 1.0000000000000001e-05, 0.2294579830840944, 0.072009409409726791, 0.0021602822822918036, 7.2009409409726791e-05, 1048513.6899999999, 51885.730000000003, 142705.5, 11.937600803386024, 3.8863594585087431, 0.0064772657641812385, 2936.98],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [258750.73000000001, 15375.02, 1.4225360071183668, 0.035295740810148871, 26945.970000000001, 1.0000000000000001e-05, 66533.229999999996, 5.0499999999999998, 19958.799999999999, 4098.3900000000003, 4328.7700000000004, 12898.129999999999, 5728.71, 98.109999999999999, 158514.38, 57787.5, 7946.5500000000002, 367.06999999999999, 189.59999999999999, 80.469999999999999, 3222.0500000000002, 6126.6400000000003, 122.9850274960521, 1.0000000000000001e-05, 5916.1000000000004, 30.601206305101154, 42468.699999999997, 12802.23, 44242.309999999998, 1319.47, 5540.21, 2205.2199999999998, 56776.980000000003, 286.39662307184022, 151.32004964151645, 109.35385066885915, 1.0000000000000001e-05, 1.7000258306021432, 785.95000000000005, 0.40812184237388877, 189.43000000000001, 0.86934228536026636, 115.73999999999999, 80390.369999999995, 146.62, 46601.260000000002, 141.03999999999999, 9263.1100000000006, 218.25999999999999, 8846.0400000000009, 2126.3600000000001, 460.33272350579017, 200.89807068546537, 193.05058227066169, 4.2557533326435557, 110930.97, 231500.53, 97718.679999999993, 4261.75, 20950.5, 100.31, 6.2300000000000004, 252.43000000000001, 1.0000000000000001e-05, 2016.1300000000001, 3.3199999999999998, 7454.04, 198376.10999999999, 4401764, 73586.699999999997, 13810.84, 1.0000000000000001e-05, 714705, 72752.460000000006, 30546.110000000001, 16136.719999999999, 40473.519999999997, 6.4699999999999998, 343.92000000000002, 25829.330000000002, 567.86000000000001, 213.38999999999999, 1.0000000000000001e-05, 419.98000000000002, 855.29130136429796, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 209.33550179904884, 612.88, 1.0000000000000001e-05, 1.0000000000000001e-05, 128.30290135363433, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 42.290506174427961, 41.299015484082958, 39.988583732508104, 13.927093007037229, 13.689042794670014, 9.9380185745536149, 1.0000000000000001e-05, 7.7793884934761541, 1.394789351103048, 1.3867002662167833, 1.0646776488397749, 0.23111671103613055, 0.038519451839355096, 142421.76999999999, 2488.3499999999999, 8151.5799999999999, 693.69000000000005, 364.36000000000001, 107.90000000000001, 1292.8499999999999, 1.0000000000000001e-05, 191.80000000000001, 4.54, 13906.74, 166.84, 1720.9100000000001, 280.31999999999999, 386.65689408070989, 24.719999999999999, 10.73, 1.0000000000000001e-05, 1.0000000000000001e-05, 76.859999999999999, 1406.5899999999999, 2.2000000000000002, 1.0000000000000001e-05, 5162.1199999999999, 271.17000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.29, 1.0000000000000001e-05, 1.0000000000000001e-05, 22.528566157632028, 195146.97, 1599.45, 14.56, 107.83, 113.23999999999999, 422.19, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 133.19, 1.0000000000000001e-05, 1.0000000000000001e-05, 91.659999999999997, 78.260000000000005, 3355.1300000000001, 350.52999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 174.87052119933259, 2.8500000000000001, 1.0000000000000001e-05, 144.03, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 9.4000000000000004, 820.76999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 680.45000000000005, 1.0000000000000001e-05, 154.55000000000001, 1.0000000000000001e-05, 15.240387467685441, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.6948994969660713, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.091029272365118374, 25210.639999999999, 31473.389999999999, 2844.6799999999998, 10536.969999999999, 4958.9899999999998, 309.75, 0.42999999999999999, 734.61000000000001, 14.210000000000001, 542.34000000000003, 0.71999999999999997, 1.0000000000000001e-05, 875.23000000000002, 1.0000000000000001e-05, 10.32, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.28000000000000003, 294.8190554105613, 250.22, 1672.6300000000001, 61.840000000000003, 11.74, 1.0000000000000001e-05, 1.0000000000000001e-05, 25.782764463567318, 24.917813322191879, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.941823914924456, 1.0000000000000001e-05, 9.6463045291728271, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.9256208436205124, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.5562477849327014, 2.9985655081170135, 2.3707252659725624, 2.1915250664728423, 1.9727370998459537, 1.8361305237819274, 1.3349199729327823, 0.8532474880890486, 0.58249657995840465, 1.0000000000000001e-05, 0.20302320960451861, 0.063954389543083509, 0.0019186316862925053, 6.3954389543083504e-05, 1002948.1899999999, 47638.529999999999, 137743.69, 11.36353392771646, 3.6994684517796395, 0.0061657807529660663, 3059.4299999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [271234.40999999997, 17942.299999999999, 1.6470011838222864, 0.040990572021460586, 27761.68, 1.0000000000000001e-05, 68630.919999999998, 8.7100000000000009, 24690, 5361.6400000000003, 3950.6799999999998, 14121.690000000001, 5738.6300000000001, 90.390000000000001, 155991.19, 55220.220000000001, 7598.2200000000003, 345.01999999999998, 153.22, 70.549999999999997, 2888.0500000000002, 4802.7600000000002, 95.927357758239367, 1.0000000000000001e-05, 5098.1800000000003, 26.245315089423272, 38604, 12572.950000000001, 38806.82, 1159.6300000000001, 5457.54, 2684.1199999999999, 70594.5, 355.97561396503346, 186.73734910610443, 135.50663770196692, 1.0000000000000001e-05, 1.8214729365112496, 821.22000000000003, 0.42087219614021759, 209.44, 0.96005696235060223, 114.64, 80805.940000000002, 131.19999999999999, 42743.169999999998, 284.39999999999998, 8886.9099999999999, 210.53999999999999, 8433.7700000000004, 1909.2, 422.99924073887422, 191.09673640949401, 184.25907265389515, 3.5190295270360572, 108903.82000000001, 242965.66, 99173.729999999996, 4754.1000000000004, 19825.169999999998, 394.63, 6.4900000000000002, 478.39999999999998, 1.0000000000000001e-05, 2831.8299999999999, 2.9199999999999999, 8048.1899999999996, 207804.17000000001, 4657005, 72950.550000000003, 13614.629999999999, 1.0000000000000001e-05, 776357, 73854.770000000004, 31276.939999999999, 18107.330000000002, 39690.879999999997, 43.009999999999998, 293.20999999999998, 27770.5, 868.34000000000003, 221.80000000000001, 1.0000000000000001e-05, 471.79000000000002, 933.82603243982942, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 224.70377901091157, 614.75999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 136.86339831943263, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 44.835597158843299, 43.802935989903723, 42.309485773469206, 14.810665107830937, 14.617709694192424, 10.426175037158021, 1.0000000000000001e-05, 8.4480734832689919, 1.4922159600573019, 1.4811076526623344, 1.1848861221298672, 0.24685127544372235, 0.041141879240620398, 140359.34, 2503.7600000000002, 7302.8000000000002, 840.02999999999997, 409.88999999999999, 100.92, 1019.64, 1.0000000000000001e-05, 196.21000000000001, 6.5300000000000002, 15624.139999999999, 249.12, 2285.0900000000001, 261.62, 436.63105006349565, 5.5300000000000002, 262.55000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 87.069999999999993, 1075.7, 17.379999999999999, 1.0000000000000001e-05, 5161.0200000000004, 283.18000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.0899999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 22.856623596590808, 202973.06, 2132.9699999999998, 16.579999999999998, 246.91999999999999, 125.93000000000001, 378.10000000000002, 1.0000000000000001e-05, 0.83999999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 289.97000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 90.609999999999999, 113.98, 3650.0599999999999, 384.70999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 191.67288661010852, 1.71, 1.0000000000000001e-05, 118.97, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 9.7100000000000009, 726.50999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 715.57000000000005, 141.88, 1.0000000000000001e-05, 16.075919538941715, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.9840020563023701, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.096030321556777737, 26036.560000000001, 26096.360000000001, 2869.3099999999999, 12097.790000000001, 4925.5299999999997, 318.56999999999999, 0.089999999999999997, 798.02999999999997, 18.600000000000001, 724.22000000000003, 1.0600000000000001, 1.0000000000000001e-05, 965.62, 1.0000000000000001e-05, 12.35, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 327.89872041989605, 236.41, 1599.45, 81, 3.25, 1.0000000000000001e-05, 1.0000000000000001e-05, 28.33186274713394, 27.20712047392049, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 16.820022232179355, 1.0000000000000001e-05, 10.692574249811672, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.6061768380057941, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.0169567772423838, 3.3066635414456913, 2.6206958980062849, 2.4622983269630359, 2.2586945250361605, 2.1334106938781177, 1.5076945898901382, 0.94595619990542346, 0.64789738834845267, 1.0000000000000001e-05, 0.22455474563343911, 0.070305180223368527, 0.0021091554067010558, 7.0305180223368522e-05, 889185.13, 45848.379999999997, 136817.44, 11.091777778706414, 3.6109965638762058, 0.0060183276064603441, 3761.8099999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [272161.44, 19093.110000000001, 1.7372381539167014, 0.043394791521649489, 23232.290000000001, 0.54000000000000004, 60282.029999999999, 2.7200000000000002, 23273.07, 4890.9499999999998, 3930.8400000000001, 14324.52, 5733.8900000000003, 82.670000000000002, 158228.89000000001, 50166.129999999997, 7327.0500000000002, 393.63, 133.38, 69.450000000000003, 3024.7399999999998, 6077.04, 120.18877888308327, 1.0000000000000001e-05, 6417.6499999999996, 32.886053311177179, 29226.650000000001, 12400.99, 33597.300000000003, 1227.97, 4906.3800000000001, 2334.6900000000001, 66365.660000000003, 334.50438794975366, 173.9773497251168, 126.9302071077193, 1.0000000000000001e-05, 1.8688176025032663, 854.28999999999996, 0.43255845561767081, 217.16, 0.99284236822111449, 132.28, 78618.949999999997, 115.77, 44558.68, 428.26999999999998, 8541.8500000000004, 275.57999999999998, 7683.1000000000004, 1843.0599999999999, 429.99541556592379, 202.70297491243053, 188.94431105824518, 3.1983460904596268, 92718.600000000006, 218386.34, 98450.610000000001, 4780.54, 17820.330000000002, 598.54999999999995, 5.9900000000000002, 579.82000000000005, 1.0000000000000001e-05, 2228.8699999999999, 1.3899999999999999, 8839.2000000000007, 219370.72, 4733478, 73760.610000000001, 14299.17, 1.0000000000000001e-05, 807223, 79443.479999999996, 29137.490000000002, 20105.360000000001, 41485.440000000002, 470.23000000000002, 389.69999999999999, 26344.25, 915.75, 238.93000000000001, 1.0000000000000001e-05, 892.87, 917.99073244477211, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 606.74000000000001, 217.65672411038915, 1.0000000000000001e-05, 1.0000000000000001e-05, 131.48865741280409, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 42.786934867598774, 41.798191122185976, 40.152661667680874, 14.193780906204234, 13.981850656286026, 9.8751573835719153, 1.0000000000000001e-05, 8.3322259379057186, 1.4462754064511638, 1.426072709729989, 1.1899784500080242, 0.23767878495499814, 0.03961313082583303, 139555.75, 2805.96, 7107.6899999999996, 937.80999999999995, 366.93000000000001, 102.70999999999999, 1234.8699999999999, 1.0000000000000001e-05, 205.03, 4.4500000000000002, 12922.379999999999, 264, 2922.2199999999998, 243.04500000000002, 386.19759837555489, 8.0199999999999996, 290.94, 1.0000000000000001e-05, 1.0000000000000001e-05, 107.86, 866.95000000000005, 50.520000000000003, 1.0000000000000001e-05, 5049.6800000000003, 251.88, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.8700000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 22.575396406189498, 202730.69, 2666.4899999999998, 6.29, 320.76999999999998, 100.62, 534.63, 1.0000000000000001e-05, 33.100000000000001, 1.0000000000000001e-05, 17.640000000000001, 414.63, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 91.159999999999997, 164.24000000000001, 3613.1300000000001, 382.5, 1.0000000000000001e-05, 1.0000000000000001e-05, 213.08967358040934, 1.0000000000000001e-05, 1.3999999999999999, 1.0000000000000001e-05, 107.27, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.3799999999999999, 684.45000000000005, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 753.11000000000001, 77.159999999999997, 1.0000000000000001e-05, 17.306478129307884, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.4078572539872214, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.10346025557459307, 28770.290000000001, 26056.700000000001, 3169.1399999999999, 13804.290000000001, 6068, 317.47000000000003, 0.13, 608.00999999999999, 22.25, 1092.3900000000001, 3.25, 1.0000000000000001e-05, 1.0000000000000001e-05, 950.19000000000005, 33.079999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 328.5181809377346, 258.80000000000001, 1593.47, 98.549999999999997, 1.4299999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 28.02675670324837, 26.799344875921239, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 17.09206059857388, 1.0000000000000001e-05, 10.714959399739703, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.5259386076587056, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.0858001039625824, 3.2787405181726159, 2.6065391542098011, 2.4975241143546913, 2.3442064768332247, 2.2083730405920341, 1.5326887680076502, 0.95431696230990348, 0.65046801416422462, 1.0000000000000001e-05, 0.22705081304008251, 0.069658172431379811, 0.0020897451729413943, 6.9658172431379806e-05, 924441.81000000006, 43651.480000000003, 124974.39999999999, 9.95877440842707, 3.2421403391515149, 0.0054035672319191919, 3272.02],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [264632.65999999997, 14227.52, 1.2849639761643987, 0.032183101757331738, 22163.040000000001, 1.0000000000000001e-05, 57502, 6.0099999999999998, 25535.009999999998, 4982.4399999999996, 3527.8899999999999, 16140.02, 5088.3699999999999, 93.700000000000003, 151044.03, 50858.379999999997, 6943.4499999999998, 342.31999999999999, 112.44, 81.569999999999993, 2851.6799999999998, 4775.21, 93.653479933402181, 1.0000000000000001e-05, 5249.1999999999998, 26.787536711445476, 29244.290000000001, 11820.1, 36725.660000000003, 1183.8800000000001, 3946.27, 2237.6900000000001, 53235.809999999998, 267.91793054731295, 138.12280170025181, 101.32084293177712, 1.0000000000000001e-05, 2.0465805688152057, 903.88999999999999, 0.45254041086717517, 192.06, 0.87363017757874351, 110.34, 66772.429999999993, 144.5, 34015.080000000002, 465.50999999999999, 8694.3299999999999, 174.16, 7404.2200000000003, 1796.77, 333.7328122187206, 163.51491164324472, 147.79615366779663, 2.1697588751597521, 106463.3, 210322.95000000001, 91382.600000000006, 4784.3400000000001, 17853.509999999998, 2.27, 820.12, 979.95000000000005, 1.0000000000000001e-05, 2813.0999999999999, 1.1499999999999999, 8767.4400000000005, 215079.42000000001, 4585493, 73984.839999999997, 15197.719999999999, 1.0000000000000001e-05, 895227, 83973.979999999996, 37747.32, 19308.029999999999, 39614.82, 706.11000000000001, 447.87, 26852.27, 1764.6500000000001, 279.94999999999999, 1.0000000000000001e-05, 947.99000000000001, 968.47675442990374, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 769.94000000000005, 226.47745604048541, 1.0000000000000001e-05, 1.0000000000000001e-05, 135.6027898935759, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 43.811191064198354, 42.755776144610444, 40.803914080589934, 14.598813825604269, 14.516052251940936, 10.085030374866667, 1.0000000000000001e-05, 8.802225983084929, 1.5019996487613736, 1.4749587385545402, 1.2246254637609779, 0.24582645642575668, 0.040971076070959456, 144082.94, 3627.79, 9182.2399999999998, 754.53999999999996, 319.85000000000002, 108.87, 1242.1900000000001, 1.0000000000000001e-05, 206.13, 2.9300000000000002, 278.88, 12092.34, 2943.3299999999999, 224.47, 368.29468928828913, 5.6600000000000001, 405.70999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 117.15000000000001, 1026.04, 33.5, 1.0000000000000001e-05, 6853.0600000000004, 295.86000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.6099999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 30.28169595347854, 201736.81, 2666.4899999999998, 8.1500000000000004, 446.44, 290.5, 833.38, 1.0000000000000001e-05, 46.259999999999998, 1.0000000000000001e-05, 20.940000000000001, 426.58999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 83.219999999999999, 175.27000000000001, 3655.2600000000002, 516.98000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 261.45172004438075, 42.479999999999997, 1.0000000000000001e-05, 155.93000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.3100000000000001, 800.07000000000005, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 784, 80.870000000000005, 1.0000000000000001e-05, 21.288105469310175, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.5784033040620837, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.12697837481093036, 30678.389999999999, 24421.830000000002, 3085.3699999999999, 12081.32, 8480.8700000000008, 297.62, 0.11, 622.75999999999999, 20.489999999999998, 1180.5699999999999, 1.97, 1.0000000000000001e-05, 1.0000000000000001e-05, 1087.98, 30.039999999999999, 1.0000000000000001e-05, 0.26000000000000001, 1.0000000000000001e-05, 349.61710716141226, 257.06, 1674.6099999999999, 104.06, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.397833063183572, 28.190851752016609, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 18.435369841674049, 1.0000000000000001e-05, 11.434254852968559, 1.0000000000000001e-05, 7.9119889297471859, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.4120914889749052, 3.4534736722795762, 2.7465562876015657, 2.6894983225347029, 2.5705419994775665, 2.4174095688096875, 1.6553043708761319, 1.0355873981062191, 0.69466972379604885, 1.0000000000000001e-05, 0.24443984263220345, 0.073339286718332869, 0.0022001786015499862, 7.3339286718332856e-05, 917731.5, 45142.900000000001, 119085.86, 9.3490447938347767, 3.0436391081393741, 0.0050727318468989568, 3165.6500000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [264188.44, 13792.1, 1.238937861527043, 0.031087433795425969, 21449.849999999999, 1.0000000000000001e-05, 49105.709999999999, 5.6600000000000001, 25070.939999999999, 6068.2200000000003, 4124.2600000000002, 19863.630000000001, 4684.9300000000003, 80.469999999999999, 149679.38, 50433.989999999998, 7014, 277.57999999999998, 89.290000000000006, 12.859999999999999, 2922.2199999999998, 3475.5799999999999, 67.464068445503528, 1.0000000000000001e-05, 4186.5699999999997, 21.29450357521474, 30339.98, 11802.43, 40552.879999999997, 1097.9000000000001, 3950.6799999999998, 2024.0799999999999, 41282.519999999997, 207.04270019538887, 105.88496113544572, 78.063764547466704, 1.0000000000000001e-05, 2.1202953290700517, 864.21000000000004, 0.42839014787591351, 228.18000000000001, 1.0329596556358813, 127.87, 54930.309999999998, 123.48, 42594.360000000001, 467.70999999999998, 8585.5200000000004, 188.5, 6674.4899999999998, 1895.97, 398.05445334996557, 202.72241446760168, 181.43372061758831, 2.6439895937037368, 101722.27, 234109.70000000001, 84313.479999999996, 4921.6599999999999, 15352.559999999999, 0.17999999999999999, 749.57000000000005, 1161.6099999999999, 1.0000000000000001e-05, 2897.9699999999998, 8423.2999999999993, 1.24, 212558.44, 4407410, 71423.300000000003, 12328.76, 1.0000000000000001e-05, 938601.38, 95365.360000000001, 48281.18, 23822.490000000002, 39485.849999999999, 725.40999999999997, 591.90999999999997, 30434.779999999999, 2072.3400000000001, 561.08000000000004, 1.0000000000000001e-05, 5284.4700000000003, 1150.9071876432804, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 963.02999999999997, 265.3636630388628, 1.0000000000000001e-05, 1.0000000000000001e-05, 157.48524415878038, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 50.498800767884468, 49.196172751556425, 46.604286801179363, 16.970454435593389, 16.899306497751422, 11.634359097446055, 1.0000000000000001e-05, 10.461134377461448, 1.7634183520159361, 1.7190105787320256, 1.389056048203184, 0.2865017631220042, 0.047750293853667379, 148402.89000000001, 4305.3999999999996, 9949.4500000000007, 734.07000000000005, 366.44, 113.93000000000001, 1388.1199999999999, 1.0000000000000001e-05, 171.96000000000001, 3.6699999999999999, 251.81, 2239.3400000000001, 11856.450000000001, 177.47, 344.58788470813232, 81.420000000000002, 421.64999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 113.15000000000001, 2148.96, 1.0000000000000001e-05, 23.149999999999999, 7533.1899999999996, 248.13, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.84999999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 32.780419641628605, 197529.66, 2799.8699999999999, 15.52, 453.05000000000001, 315.45999999999998, 885.15999999999997, 1.0000000000000001e-05, 55, 1.0000000000000001e-05, 15.43, 425.56999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 93.530000000000001, 187.03, 540.13, 3825.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 45.880000000000003, 264.78806809382559, 1.0000000000000001e-05, 151.65000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.79, 1.0000000000000001e-05, 1298.6300000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 796.77999999999997, 95.040000000000006, 1.0000000000000001e-05, 21.990924603716291, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.9487891583466155, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.13104046966852209, 30206.599999999999, 26275.32, 3001.5900000000001, 13355.59, 7961.0299999999997, 198.41999999999999, 0.27000000000000002, 544.72000000000003, 24.870000000000001, 1692.05, 3.0800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1211.4400000000001, 25.75, 1.0000000000000001e-05, 2.02, 1.0000000000000001e-05, 391.58791209570404, 261.35000000000002, 1610.26, 106.92, 7.0999999999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 32.436073035622883, 1.0000000000000001e-05, 31.170330766877292, 1.0000000000000001e-05, 1.0000000000000001e-05, 20.889888102648932, 1.0000000000000001e-05, 12.839885935494767, 1.0000000000000001e-05, 1.0000000000000001e-05, 8.7543346872009895, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.0099775214316269, 3.8270142362618178, 3.0454700967775943, 3.0371800071116843, 2.9750856100062406, 2.8038383656329815, 1.8826631080503911, 1.180565661197805, 0.78373857498402344, 1.0000000000000001e-05, 0.27694588761361194, 0.081275388881470859, 0.0024382616664441257, 8.1275388881470845e-05, 798114.68999999994, 43304.25, 124697.72, 9.6497290144711574, 3.1415287079124763, 0.0052358811798541268, 3102.21],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [255911.19, 14045.629999999999, 1.2556509256385067, 0.031575463343801513, 18787.77, 0.059999999999999998, 38077.089999999997, 0.22, 21948.09, 5290.1800000000003, 3978.8499999999999, 18201.34, 4160.2299999999996, 89.200000000000003, 148848.22, 50386.589999999997, 6708.6599999999999, 272.41000000000003, 67.859999999999999, 19.760000000000002, 2857.1900000000001, 3985.9499999999998, 76.863069724017009, 1.0000000000000001e-05, 5294.3999999999996, 26.852063007262746, 26886.439999999999, 11663.540000000001, 35234.239999999998, 1179.47, 4143.5799999999999, 1811.05, 19882.139999999999, 99.220402489992551, 50.533185957236064, 37.286281723843722, 1.0000000000000001e-05, 2.089612008740577, 824.52999999999997, 0.40513582241271845, 199.52000000000001, 0.89869730805086334, 136.69, 54963.379999999997, 105.12, 43189.610000000001, 419.45999999999998, 8777.9400000000005, 137.78999999999999, 5987.0200000000004, 1500.24, 404.44219852719436, 208.86365376345157, 185.47043146324739, 2.6861582684354195, 116877.92999999999, 227094.59, 82074.919999999998, 5122.3199999999997, 15247.42, 0.39000000000000001, 681.23000000000002, 1521.5599999999999, 1.0000000000000001e-05, 2447.1300000000001, 9241.9899999999998, 1.3200000000000001, 212493.41, 4286001.5, 72649.580000000002, 12303.07, 1.0000000000000001e-05, 936107.38, 99814.169999999998, 56587.080000000002, 22372.48, 38047.330000000002, 762.79999999999995, 751.14999999999998, 33023, 2209.0300000000002, 1361.3499999999999, 1.0000000000000001e-05, 12496.889999999999, 1329.1799536849355, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1188.25, 302.10386376576383, 1.0000000000000001e-05, 1.0000000000000001e-05, 177.71967654271717, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 56.535315685485003, 54.942436277139052, 51.626823160853746, 19.258474748867382, 18.98686283888448, 13.050898168720297, 12.065628670555226, 1.0000000000000001e-05, 2.0138237628612803, 1.947814493901292, 1.543642986416774, 0.32463574898354863, 0.054105958163924779, 148575.95000000001, 4277.1499999999996, 12330.440000000001, 1045.9200000000001, 386.68000000000001, 143.16999999999999, 1524.5799999999999, 1.0000000000000001e-05, 148.81, 5.0300000000000002, 224.72999999999999, 2725.1300000000001, 10167.719999999999, 180.70666666666668, 71.950000000000003, 315.79777194551502, 387.11000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 122.78, 2716.4499999999998, 1.0000000000000001e-05, 23.07, 7153.9899999999998, 261.25, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.2599999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 30.936240631686683, 199816.78, 2932.1399999999999, 17.879999999999999, 579.82000000000005, 292.94999999999999, 871.95000000000005, 1.0000000000000001e-05, 59.789999999999999, 1.0000000000000001e-05, 28.109999999999999, 397.27999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 89.370000000000005, 405.94, 566.59000000000003, 3347.7199999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 87.780000000000001, 1.0000000000000001e-05, 243.78447636556899, 161.05000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.6399999999999997, 1.0000000000000001e-05, 1785.74, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 809.55999999999995, 97.599999999999994, 1.0000000000000001e-05, 20.858289226956153, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.8589434210185098, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.12402953035661948, 28267.639999999999, 19825, 2624.5999999999999, 13368.82, 7932.96, 167.74000000000001, 0.44, 594.54999999999995, 14.119999999999999, 1987.46, 2.0699999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1245.6099999999999, 20.309999999999999, 1.6799999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 430.9414889426676, 330.69, 1591.0999999999999, 80.469999999999999, 0.71999999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 35.22742255940851, 1.0000000000000001e-05, 33.677112793532878, 1.0000000000000001e-05, 1.0000000000000001e-05, 23.270451519444588, 1.0000000000000001e-05, 14.137224196628411, 1.0000000000000001e-05, 1.0000000000000001e-05, 9.5198529206627676, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.5871007040237801, 4.1681896298243961, 3.3925477571263252, 3.3867038800032576, 3.2916080613642471, 2.9996798359891854, 2.1046369284357089, 1.311640511553982, 0.8714903118756584, 1.0000000000000001e-05, 0.31061092345032359, 0.088543592773752455, 0.0026563077832125735, 8.8543592773752443e-05, 731070.68999999994, 38686.669999999998, 126265.2, 9.6195964706904125, 3.1317188727152727, 0.0052195314545254549, 2765.5900000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [245810.72, 15875.610000000001, 1.4132368048247694, 0.035585952782225178, 16750.700000000001, 0.029999999999999999, 42325.400000000001, 0.27000000000000002, 26412.450000000001, 5998.8000000000002, 3803.73, 16238.129999999999, 4003.48, 74.609999999999999, 150120.75, 50564.059999999998, 6782.5100000000002, 278.44, 72.049999999999997, 49.600000000000001, 2817.5, 2960.8200000000002, 56.706919766946768, 1.0000000000000001e-05, 4851.2700000000004, 24.546930487813292, 28971.18, 10649.42, 38163.07, 698.20000000000005, 4136.9700000000003, 1319.96, 15916.34, 79.100596345916315, 40.248064800088351, 29.65351715386911, 1.0000000000000001e-05, 2.1136564843467185, 888.46000000000004, 0.43303637998183814, 192.90000000000001, 0.86642314572921397, 134.47999999999999, 47154.510000000002, 136.25, 44453.169999999998, 449.95999999999998, 9267.5300000000007, 190.91, 5958.8299999999999, 1524.27, 429.45424396609286, 219.36441039754956, 196.93192796053702, 2.7911061718930212, 122959.38, 229360.73000000001, 79863.429999999993, 5357.8100000000004, 30035.880000000001, 3.2400000000000002, 709.88999999999999, 1804.3800000000001, 1.0000000000000001e-05, 2363.3499999999999, 9526.1599999999999, 1.8100000000000001, 214392.69, 4314474.5, 66277.910000000003, 11577.110000000001, 1.0000000000000001e-05, 957949.56000000006, 106957.14, 56298.279999999999, 32393.580000000002, 39353.57, 854.28999999999996, 1160.01, 36318.809999999998, 2300.52, 1575.2, 1.0000000000000001e-05, 16003.67, 1510.3273463549203, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1154.3199999999999, 337.95801037347564, 1.0000000000000001e-05, 1.0000000000000001e-05, 197.26997367232156, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 62.24459515481302, 60.281427700137712, 56.142728026175618, 21.492279473064972, 20.989723084083856, 14.402192218195795, 13.66374201397865, 1.0000000000000001e-05, 2.2551690060160809, 2.1719123653445398, 1.7930343193899927, 0.36198539422408998, 0.060330899037348333, 152392.16, 5083.9099999999999, 19820.73, 1141.05, 452.14999999999998, 203.59, 1709.6300000000001, 1.0000000000000001e-05, 139.99000000000001, 16.420000000000002, 171.96000000000001, 1724.71, 9191.1499999999996, 183.94333333333333, 64.359999999999999, 267.94902048477746, 265.07999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 127.31999999999999, 3192.46, 1.0000000000000001e-05, 37.079999999999998, 7406.4200000000001, 256.83999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.5800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 31.692910237600493, 199900.57999999999, 2532.75, 21.829999999999998, 641.53999999999996, 507.63, 829.32000000000005, 1.0000000000000001e-05, 1.0000000000000001e-05, 56.700000000000003, 40.789999999999999, 563.41999999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 93.019999999999996, 929.28999999999996, 675.72000000000003, 1.0000000000000001e-05, 2700.7600000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 132.28, 1.0000000000000001e-05, 248.01919268151843, 161.61000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 27.629999999999999, 1.0000000000000001e-05, 1679.3599999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 837.97000000000003, 131.18000000000001, 1.0000000000000001e-05, 22.549342154583783, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.5651935881415335, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.13284384499783744, 28530.150000000001, 23032.09, 2735.27, 14082.01, 7111.46, 123.45999999999999, 0.02, 496.57999999999998, 15.460000000000001, 2389.9200000000001, 1.0000000000000001e-05, 2.3900000000000001, 1.0000000000000001e-05, 1278.6800000000001, 27.579999999999998, 3.25, 1.0000000000000001e-05, 1.0000000000000001e-05, 444.72711259357771, 326.39999999999998, 1119.1199999999999, 65.290000000000006, 6.3099999999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 35.937326844957425, 1.0000000000000001e-05, 34.165859634023924, 1.0000000000000001e-05, 1.0000000000000001e-05, 24.381084165788842, 1.0000000000000001e-05, 14.498595360939838, 1.0000000000000001e-05, 1.0000000000000001e-05, 9.7107776426844801, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.8415286506524255, 1.0000000000000001e-05, 4.2588350974385474, 3.6128137140077516, 3.5298094252861554, 3.3343827520583162, 2.959822504806441, 2.2054972702792548, 1.3591160252505801, 0.90920019418111553, 1.0000000000000001e-05, 0.32568094964046529, 0.090517217798906424, 0.0027155165339671928, 9.051721779890642e-05, 716855.68999999994, 42477.519999999997, 121663.03999999999, 9.1175838313560167, 2.9682855663665815, 0.0049471426106109688, 2728.3600000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [238343.67000000001, 13681.17, 1.2109844492452375, 0.03055726594108598, 15324.610000000001, 1.0000000000000001e-05, 42204.540000000001, 0.25, 20828, 5011.29, 3646.4000000000001, 14473.52, 4014.2800000000002, 69.950000000000003, 146982.94, 50010.07, 6585.1999999999998, 293.76999999999998, 86.150000000000006, 44.200000000000003, 2735.9299999999998, 3046.0799999999999, 57.886091649836189, 1.0000000000000001e-05, 4747.6499999999996, 23.990781140507924, 27943.919999999998, 10662.639999999999, 34310.5, 644.29999999999995, 4066.5500000000002, 1420.1600000000001, 13292.219999999999, 65.911200381990611, 33.487248470816567, 24.728537858608902, 1.0000000000000001e-05, 2.2578393445198275, 863.38999999999999, 0.4180486061903087, 147.16, 0.66103639640892431, 159.06999999999999, 52483.519999999997, 195.69, 42725.699999999997, 400.56999999999999, 8796.5100000000002, 147.61000000000001, 5413.2799999999997, 1733.5999999999999, 423.0503474362734, 214.75031207370179, 194.30755028066082, 2.6983094723523786, 134169.25, 243703.47, 83702.690000000002, 5636.4200000000001, 26806.349999999999, 2.9500000000000002, 441, 2060.77, 1.0000000000000001e-05, 2359.2800000000002, 10486.5, 2.0899999999999999, 208503.75, 4381153, 73865.369999999995, 11276.870000000001, 1.0000000000000001e-05, 1034586.4399999999, 126853.84, 68941.149999999994, 33991.93, 37251.459999999999, 850.28999999999996, 1546.4300000000001, 38958.550000000003, 2214.54, 2341.3099999999999, 1.0000000000000001e-05, 16201.42, 1652.8181510028778, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1383.96, 362.45938225512748, 1.0000000000000001e-05, 210.72683682390826, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 65.943863737984145, 63.572071200382005, 58.660090150361661, 23.075429964415207, 22.348088888574903, 15.305251080304696, 14.866773868956624, 1.0000000000000001e-05, 2.4436846653120745, 2.3316365743767471, 2.0997682705915039, 0.38860609572945781, 0.064767682621576311, 153101.54999999999, 5647.9200000000001, 22514.439999999999, 1236.1800000000001, 502.25, 220.63999999999999, 1694.6800000000001, 1.0000000000000001e-05, 101.61, 8.7699999999999996, 162.84999999999999, 1948.51, 8662.7800000000007, 187.18000000000001, 43.280000000000001, 259.19608533476577, 369.45999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 98.680000000000007, 5229.5699999999997, 1.0000000000000001e-05, 16.469999999999999, 8568.2600000000002, 246.91999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.2200000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 35.935307226628588, 189076.06, 2967.0599999999999, 38.280000000000001, 685.63999999999999, 517.44000000000005, 757.83000000000004, 1.0000000000000001e-05, 1.0000000000000001e-05, 59.030000000000001, 44.090000000000003, 460.91000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 96.670000000000002, 1388.22, 773.82000000000005, 1.0000000000000001e-05, 2916.1999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 132.08000000000001, 1.0000000000000001e-05, 249.15345895706176, 310.36000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 24.25, 1.0000000000000001e-05, 1572.98, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 796, 150.22999999999999, 1.0000000000000001e-05, 23.165109631157971, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.9642648010032948, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.13468051220634425, 27777.23, 19341.130000000001, 2518.21, 14407.690000000001, 6272.8900000000003, 65.689999999999998, 0.029999999999999999, 416.57999999999998, 17.079999999999998, 2361.75, 1.0000000000000001e-05, 4.0700000000000003, 1.0000000000000001e-05, 1257.74, 21.66, 4.8300000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 434.7893609617268, 648.63999999999999, 1243.8, 70.25, 3.0499999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 34.751276015661695, 1.0000000000000001e-05, 1.0000000000000001e-05, 32.872659193535178, 1.0000000000000001e-05, 24.261268757202945, 1.0000000000000001e-05, 13.973404755519002, 1.0000000000000001e-05, 1.0000000000000001e-05, 9.3837443028900474, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.7828757028146711, 1.0000000000000001e-05, 4.1224946700521992, 3.6446297649910515, 3.4826520663953566, 3.1581704828522765, 3.0393400650952835, 2.1898122002893854, 1.3313391675047321, 0.89960326594187079, 1.0000000000000001e-05, 0.32057903476803556, 0.087697725281913705, 0.0026309317584574114, 8.7697725281913707e-05, 688105, 36102.860000000001, 116347.72, 8.5897781435420004, 2.7964551742404775, 0.0046607586237341295, 2718.1799999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [188824.59, 10897.190000000001, 0.95820534118123823, 0.024258363067879447, 11425.190000000001, 1.0000000000000001e-05, 29691.110000000001, 0.20000000000000001, 8758.9799999999996, 2321.3000000000002, 3520.3400000000001, 16603.68, 4039.1900000000001, 70.670000000000002, 131484.29999999999, 45963.68, 5708.8599999999997, 289.57999999999998, 74.370000000000005, 19.609999999999999, 2631.21, 1740.49, 33.069017560739717, 1.0000000000000001e-05, 3923.4499999999998, 19.804106803346706, 24672.709999999999, 9143.6599999999999, 31812.73, 759.49000000000001, 3830.23, 268.00999999999999, 8797.0200000000004, 43.556648036821187, 22.077442505855483, 16.399581951209278, 1.0000000000000001e-05, 2.3120910121650389, 921.26999999999998, 0.44307264763563092, 136.06, 0.61186127799908574, 156.93000000000001, 48765.089999999997, 238.25999999999999, 42884.730000000003, 274.36000000000001, 7838.2700000000004, 162.74000000000001, 6595.8400000000001, 1646.74, 434.01119721115145, 216.27916304259969, 196.72215562060492, 2.7207281944585868, 137176, 247453.97, 83259.309999999998, 5708.5799999999999, 30011.459999999999, 13.77, 2242.54, 341.25, 1.0000000000000001e-05, 2355.21, 10794.15, 4.8399999999999999, 206516.79999999999, 4430349, 70960.479999999996, 10796.870000000001, 1.0000000000000001e-05, 1070521.5, 152579.75, 90937.570000000007, 36510.709999999999, 37823.559999999998, 810.87, 2414.52, 36820.260000000002, 2435, 2764.8299999999999, 1.0000000000000001e-05, 16231.860000000001, 1658.6030081371648, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 375.95999999999998, 1.0000000000000001e-05, 1317.6500000000001, 355.74650102236888, 1.0000000000000001e-05, 206.29253007671991, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 64.012543524560144, 61.360706393147751, 56.105479154839145, 22.691056377345131, 21.81391024926257, 14.934432767963864, 14.772517712343971, 1.0000000000000001e-05, 2.4484871206141885, 2.2948590560299604, 2.2336628145358279, 0.38247650933832666, 0.063746084889721125, 146354.91, 6373.7600000000002, 27506.549999999999, 1331.3099999999999, 746.5, 222.44, 1678.46, 1.0000000000000001e-05, 36.439999999999998, 11.09, 112.34999999999999, 2122.0300000000002, 6499.6499999999996, 201.41500000000002, 207.40683895518666, 74.180000000000007, 281.39999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 126, 4345.1300000000001, 1.0000000000000001e-05, 16.27, 9824.2900000000009, 249.12, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.4500000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 40.644645121828937, 208986.70000000001, 3001.1700000000001, 20.02, 660.33000000000004, 605.74000000000001, 650.36000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 81.620000000000005, 51.369999999999997, 523.71000000000004, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 93.489999999999995, 1167.54, 981.05999999999995, 1.0000000000000001e-05, 2735.04, 1.0000000000000001e-05, 1.0000000000000001e-05, 129.90000000000001, 1.0000000000000001e-05, 247.29759505392934, 339.39999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 33.280000000000001, 1.0000000000000001e-05, 1466.5999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 731.87, 174.80000000000001, 1.0000000000000001e-05, 22.525233556329123, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.986830905379346, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.12921968062015429, 26724.259999999998, 20118.18, 1730.54, 13670.209999999999, 7800.9200000000001, 66.140000000000001, 1.0000000000000001e-05, 448.81, 16.309999999999999, 2249.6399999999999, 1.0000000000000001e-05, 3.1499999999999999, 1.0000000000000001e-05, 2122.8099999999999, 28.100000000000001, 1.2, 1.0000000000000001e-05, 1.0000000000000001e-05, 498.09347960338221, 874.10000000000002, 1732.0699999999999, 109.13, 5.3499999999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 39.401222425473563, 1.0000000000000001e-05, 1.0000000000000001e-05, 37.085827126589365, 28.301462147642358, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.685469385410276, 1.0000000000000001e-05, 1.0000000000000001e-05, 10.627176744763617, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.7076276021590155, 1.0000000000000001e-05, 4.6777151986063554, 4.3005250950554181, 4.0234607321459714, 3.6259465976588499, 3.4139390592657182, 2.5475276130082602, 1.532222714622731, 1.0441470893464371, 1.0000000000000001e-05, 0.36961840575118377, 0.099627602628351422, 0.0029888280788505426, 9.9627602628351409e-05, 586543, 28089.619999999999, 112009.02, 8.1481761058868134, 2.6526889113033572, 0.004421148185505595, 2940.8000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [152853.79999999999, 8288.9300000000003, 0.72410462069335835, 0.018392294150199603, 8515.6900000000005, 0.040000000000000001, 15774.65, 0.070000000000000007, 4984.1199999999999, 1046.5, 3218.1700000000001, 9277.7099999999991, 3251.1500000000001, 71.930000000000007, 120794.03999999999, 38287.730000000003, 4709.0699999999997, 223.77000000000001, 43.299999999999997, 3.8199999999999998, 2194.6999999999998, 1363.6600000000001, 25.893604553658225, 1.0000000000000001e-05, 3003.79, 15.140244155800938, 17597.880000000001, 8217.7199999999993, 25223.610000000001, 631.84000000000003, 3817.48, 754.04999999999995, 7804.4099999999999, 38.638765632637828, 19.539382164658868, 14.595498235244444, 1.0000000000000001e-05, 2.205396489026898, 961.16999999999996, 0.45954842061725354, 137.22, 0.61795462162285131, 135.63999999999999, 42728.07, 261.54000000000002, 45081.709999999999, 292.66000000000003, 8038.5500000000002, 146.80000000000001, 5743.6400000000003, 1757.0799999999999, 461.97107425322343, 227.16463395367217, 207.58250519235696, 2.8620952829800377, 113734.81, 231471.32999999999, 82186.270000000004, 6247.8999999999996, 28200.450000000001, 21.030000000000001, 2353.54, 268.25, 1.0000000000000001e-05, 1966.6300000000001, 9653.7000000000007, 13.109999999999999, 203062.19, 4456931.5, 69927.520000000004, 5748.6899999999996, 1.0000000000000001e-05, 1031109.38, 145379.97, 94431.990000000005, 36206.110000000001, 38760.529999999999, 771.96000000000004, 2399.4699999999998, 37563.389999999999, 2465.1300000000001, 2598.9400000000001, 1.0000000000000001e-05, 14081.09, 1683.4795468547907, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1322.76, 1.0000000000000001e-05, 1268.52, 354.46746155529172, 1.0000000000000001e-05, 205.86633894639138, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 63.173663293278061, 60.338776732841367, 54.217046775642224, 22.587685482888268, 21.618390413970491, 14.795873452131369, 14.781273722868036, 1.0000000000000001e-05, 2.4660847038281508, 2.3188178695197519, 2.2851750151303327, 0.38086250252172216, 0.063477083753620364, 138064.78, 7477.54, 27601.299999999999, 1097.71, 887.23000000000002, 213.78999999999999, 1676.28, 1.0000000000000001e-05, 1.0000000000000001e-05, 37.399999999999999, 215.65000000000001, 2821.4899999999998, 5609.9899999999998, 215.65000000000001, 202.17130401373066, 127.23, 65.290000000000006, 1.0000000000000001e-05, 1.0000000000000001e-05, 80.030000000000001, 2256.0700000000002, 1.0000000000000001e-05, 26.41, 10274.780000000001, 259.02999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.9399999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 41.99990730817408, 207375.67000000001, 2591.9200000000001, 11.529999999999999, 582.35000000000002, 635.67999999999995, 922.10000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 52.479999999999997, 50.740000000000002, 161.59999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 79.400000000000006, 1296.26, 985.99000000000001, 1.0000000000000001e-05, 2359.6700000000001, 1.0000000000000001e-05, 86.25, 1.0000000000000001e-05, 1.0000000000000001e-05, 246.14060278933422, 280.48000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 42.200000000000003, 1.0000000000000001e-05, 1360.22, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 728.10000000000002, 186.13, 1.0000000000000001e-05, 22.03670932622282, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.0306563841607277, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.12470993623848969, 24042.48, 15762.83, 1948.1199999999999, 11899.75, 6551.2399999999998, 68.340000000000003, 1.0000000000000001e-05, 321.83999999999997, 11.109999999999999, 2513.6100000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.53000000000000003, 2128.8699999999999, 27.969999999999999, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 499.24064583952668, 1063.73, 1499.5999999999999, 90.049999999999997, 1.3799999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 39.234805813146963, 1.0000000000000001e-05, 36.730728688908954, 28.854701548491985, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.365697919658889, 1.0000000000000001e-05, 1.0000000000000001e-05, 10.540507605055558, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.8112167122554883, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.6479780924729885, 4.4016461619907421, 4.0666585367214072, 3.6825830267545219, 3.1521363696894906, 2.5935261585757643, 1.545524612144048, 1.0591578838629776, 1.0000000000000001e-05, 0.37153082832195544, 0.099167443833432664, 0.0029750233150029801, 9.9167443833432661e-05, 476693, 21864.209999999999, 106908.64, 7.6818089762319746, 2.5008602201514836, 0.0041681003669191393, 2847.2800000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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
            "title": "Coal consumption",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [181467.44, 10375.24, 0.8996140991268774, 0.022939586038084415, 7992.3800000000001, 0.01, 13607.059999999999, 0.070000000000000007, 4780.7299999999996, 350.57999999999998, 3142.1900000000001, 14705.540000000001, 3488.9200000000001, 71.890000000000001, 128278.14999999999, 39383.220000000001, 5229.3599999999997, 248.22999999999999, 31.859999999999999, 5.7999999999999998, 2310.0100000000002, 2021.74, 38.410646866856034, 1.0000000000000001e-05, 3368.6599999999999, 16.944167985768679, 20639.650000000001, 6840.9399999999996, 32107.669999999998, 742.40999999999997, 3488.27, 1258.71, 8023.5900000000001, 39.876627617490946, 20.114210916311482, 15.08219046723401, 1.0000000000000001e-05, 2.2270902794910703, 1016.13, 0.48323441660256788, 153.5, 0.69095355461387653, 150.66, 45062.239999999998, 405.63, 41620.169999999998, 291.31, 8939.7999999999993, 140.63, 4824.1800000000003, 1595.04, 441.06565501948342, 216.84621115481136, 192.7847074642354, 2.6982654664940577, 120818.11, 273031.46999999997, 83302.960000000006, 6743.1499999999996, 23201.099999999999, 27.989999999999998, 2422.4000000000001, 232.12, 1.0000000000000001e-05, 1493.4000000000001, 9674.7000000000007, 20.07, 201874.57999999999, 4675320.5, 71852.979999999996, 6385.9700000000003, 1.0000000000000001e-05, 1049853.25, 165481.04999999999, 90568.470000000001, 38686.949999999997, 37703.410000000003, 823.73000000000002, 2532.21, 36224.589999999997, 2717.1500000000001, 2932.98, 1.0000000000000001e-05, 14694.76, 1672.2991469924384, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1429.3800000000001, 1.0000000000000001e-05, 1036.8299999999999, 346.55389032929816, 1.0000000000000001e-05, 202.798037340653, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 60.970704135428107, 58.188780285998519, 51.23768650015753, 22.026247468569181, 21.059510351703736, 14.502914671848204, 14.401967746768721, 1.0000000000000001e-05, 2.3991925629319302, 2.2901946560976447, 2.2295026397921909, 0.37158377329869846, 0.061930628883116422, 139457.69, 8581.3199999999997, 29253.990000000002, 1845.27, 586.10000000000002, 248.94999999999999, 1584.97, 1.0000000000000001e-05, 1.0000000000000001e-05, 41.950000000000003, 190.74000000000001, 2681.9099999999999, 6482.0600000000004, 190.74000000000001, 218.57862343201379, 63.979999999999997, 122.73, 1.0000000000000001e-05, 1.0000000000000001e-05, 83.379999999999995, 3594.0100000000002, 1.0000000000000001e-05, 37.759999999999998, 12606.459999999999, 247.08000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.8799999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 50.536300087863815, 189300.06, 2762.4400000000001, 15.220000000000001, 509.30000000000001, 618.29999999999995, 1051.8, 1.0000000000000001e-05, 1.0000000000000001e-05, 113.20999999999999, 59.770000000000003, 471.94999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 71.599999999999994, 1209.8800000000001, 1.0000000000000001e-05, 1043.97, 2255.0700000000002, 1.0000000000000001e-05, 173.83000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 263.79706042042574, 215.27000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 45.020000000000003, 1.0000000000000001e-05, 1538.97, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 811.97000000000003, 243.56999999999999, 1.0000000000000001e-05, 23.45547123049845, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.6721196501033901, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.13118500613685996, 28310.389999999999, 15481.379999999999, 2997.6300000000001, 13258.209999999999, 5086.8400000000001, 67.239999999999995, 1.0000000000000001e-05, 259.41000000000003, 20.739999999999998, 2557.21, 1.0000000000000001e-05, 1.0000000000000001e-05, 2278.8600000000001, 1.6699999999999999, 32.210000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 500.38366407069907, 1069.3699999999999, 1405.21, 105.81999999999999, 0.16, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 39.165596941902713, 1.0000000000000001e-05, 36.470292732470021, 29.414816891693299, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.067814095762353, 1.0000000000000001e-05, 1.0000000000000001e-05, 10.469514654019914, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.9330002206860124, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.6244064774339595, 4.4740932416342956, 4.1109681088340588, 3.7389428502298947, 2.9628518801274266, 2.640963996885386, 1.5578186865474233, 1.0740968491039697, 1.0000000000000001e-05, 0.37222303917758531, 0.098890286710304282, 0.0029667086013091281, 9.8890286710304271e-05, 548846.75, 24174.630000000001, 109921.25, 7.8871564820529256, 2.5677123652912397, 0.0042795206088187326, 3463.1700000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 4733490,
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

  
