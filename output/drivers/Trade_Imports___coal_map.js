(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Trade_Imports___coal_map') 

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
    "b55c4d907a52": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c4d907a52",
  "attrs": {
    "b55c4d907a52": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 356800,
      "colorbar": {
        "title": "Coal imports"
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
        "title": "Coal imports",
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
      "z": [38331.730000000003, 18529.830000000002, 1.8461409373564006, 0.041375941678900297, 22674.52, 0.01, 823.42999999999995, 21.109999999999999, 23755.57, 5890.7399999999998, 4444.5100000000002, 33705.910000000003, 10350.690000000001, 94.799999999999997, 2824.71, 1428.5899999999999, 6339.3800000000001, 325.18000000000001, 136.69, 62.890000000000001, 3521.8800000000001, 10488.48, 217.01163028288471, 1.0000000000000001e-05, 11184.040000000001, 56.392468581131759, 3624.3699999999999, 1546.54, 3219.7600000000002, 1242.6600000000001, 705.19000000000005, 3014.8200000000002, 35153.769999999997, 177.77036102372006, 91.91043261486702, 70.163121127018925, 1.0000000000000001e-05, 0.081750935043597095, 739.64999999999998, 0.38952356646596659, 203.93000000000001, 0.94695864873161895, 93.700000000000003, 11350.5, 3.4300000000000002, 621.83000000000004, 1.0000000000000001e-05, 6.3899999999999997, 294.31999999999999, 399.04000000000002, 13.82, 5.9098842495836017, 2.7534552671907941, 2.3680871997403248, 0.067496821524761053, 17819.939999999999, 27110.560000000001, 353.76999999999998, 31.300000000000001, 683.19000000000005, 255.49000000000001, 3.7799999999999998, 3.3599999999999999, 1165.1400000000001, 1.0000000000000001e-05, 3.0099999999999998, 0.35999999999999999, 184123.01999999999, 12235.639999999999, 60262.57, 11768.889999999999, 1.51, 30433.23, 254.36000000000001, 48.420000000000002, 7754.75, 7837.8999999999996, 0.80000000000000004, 3.48, 7772.1300000000001, 0.089999999999999997, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 211.09563924704861, 18.190000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 57.935159719406045, 345.01999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 37.55953278390993, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.062077850249619, 13.116608385786993, 11.889005642057443, 4.5261519765527458, 3.4712240373612979, 3.460748432552653, 2.3159144784650327, 1.0000000000000001e-05, 0.49246854254266864, 0.44388936419928249, 0.3648043037208315, 0.068056896295284178, 0.011511653635873509, 79036.179999999993, 1392.28, 3074.3499999999999, 308.64999999999998, 1.0000000000000001e-05, 36.490000000000002, 679.01999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.25, 13552.9, 1.1699999999999999, 73.840000000000003, 294.81, 367.92113148177731, 0.13, 0.080000000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 12.99, 1995.1800000000001, 407.66000000000003, 1.0000000000000001e-05, 4429.9499999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.3200000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 19.170598713868465, 1748.26, 1.0000000000000001e-05, 1.1399999999999999, 1.0000000000000001e-05, 11.34, 165.34999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 18.18, 1.0000000000000001e-05, 13.880000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 21.210000000000001, 14.58, 144.71000000000001, 132.28, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 23.444536293308484, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 10.07, 21.149999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 307.83999999999997, 173.06, 1.0000000000000001e-05, 2.7678919311141268, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.60726107341282065, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.019516376825965565, 14873.469999999999, 3792.1799999999998, 1915.47, 3202.21, 0.029999999999999999, 53.560000000000002, 0.059999999999999998, 850.98000000000002, 1.6100000000000001, 450.23000000000002, 30.210000000000001, 1.0000000000000001e-05, 422.18000000000001, 1.0000000000000001e-05, 0.19, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 272.4718906525153, 1448.1600000000001, 16.329999999999998, 93.700000000000003, 3.5099999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 27.593514369487416, 27.218623778115468, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 12.258682044481564, 1.0000000000000001e-05, 8.6832811186558185, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.1432967981057161, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.0399416888560857, 2.8923423024558916, 2.1326860492570359, 2.0623755476176928, 1.4571653963344724, 1.4303710385000035, 1.0132480624823288, 0.77315218282063991, 0.50395776221832422, 1.0000000000000001e-05, 0.20862732181187055, 0.065833803033092636, 0.001975014090992779, 6.5833803033092637e-05, 25043.970000000001, 24878.040000000001, 82.650000000000006, 0.0079101308434872397, 0.0025749625888728199, 4.191019838660188e-06, 464.86000000000001],
      "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [38331.730000000003, 18529.830000000002, 1.8461409373564006, 0.041375941678900297, 22674.52, 0.01, 823.42999999999995, 21.109999999999999, 23755.57, 5890.7399999999998, 4444.5100000000002, 33705.910000000003, 10350.690000000001, 94.799999999999997, 2824.71, 1428.5899999999999, 6339.3800000000001, 325.18000000000001, 136.69, 62.890000000000001, 3521.8800000000001, 10488.48, 217.01163028288471, 1.0000000000000001e-05, 11184.040000000001, 56.392468581131759, 3624.3699999999999, 1546.54, 3219.7600000000002, 1242.6600000000001, 705.19000000000005, 3014.8200000000002, 35153.769999999997, 177.77036102372006, 91.91043261486702, 70.163121127018925, 1.0000000000000001e-05, 0.081750935043597095, 739.64999999999998, 0.38952356646596659, 203.93000000000001, 0.94695864873161895, 93.700000000000003, 11350.5, 3.4300000000000002, 621.83000000000004, 1.0000000000000001e-05, 6.3899999999999997, 294.31999999999999, 399.04000000000002, 13.82, 5.9098842495836017, 2.7534552671907941, 2.3680871997403248, 0.067496821524761053, 17819.939999999999, 27110.560000000001, 353.76999999999998, 31.300000000000001, 683.19000000000005, 255.49000000000001, 3.7799999999999998, 3.3599999999999999, 1165.1400000000001, 1.0000000000000001e-05, 3.0099999999999998, 0.35999999999999999, 184123.01999999999, 12235.639999999999, 60262.57, 11768.889999999999, 1.51, 30433.23, 254.36000000000001, 48.420000000000002, 7754.75, 7837.8999999999996, 0.80000000000000004, 3.48, 7772.1300000000001, 0.089999999999999997, 0.040000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 211.09563924704861, 18.190000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 57.935159719406045, 345.01999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 37.55953278390993, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.062077850249619, 13.116608385786993, 11.889005642057443, 4.5261519765527458, 3.4712240373612979, 3.460748432552653, 2.3159144784650327, 1.0000000000000001e-05, 0.49246854254266864, 0.44388936419928249, 0.3648043037208315, 0.068056896295284178, 0.011511653635873509, 79036.179999999993, 1392.28, 3074.3499999999999, 308.64999999999998, 1.0000000000000001e-05, 36.490000000000002, 679.01999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.25, 13552.9, 1.1699999999999999, 73.840000000000003, 294.81, 367.92113148177731, 0.13, 0.080000000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 12.99, 1995.1800000000001, 407.66000000000003, 1.0000000000000001e-05, 4429.9499999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.3200000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 19.170598713868465, 1748.26, 1.0000000000000001e-05, 1.1399999999999999, 1.0000000000000001e-05, 11.34, 165.34999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 18.18, 1.0000000000000001e-05, 13.880000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 21.210000000000001, 14.58, 144.71000000000001, 132.28, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 23.444536293308484, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 10.07, 21.149999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 307.83999999999997, 173.06, 1.0000000000000001e-05, 2.7678919311141268, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.60726107341282065, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.019516376825965565, 14873.469999999999, 3792.1799999999998, 1915.47, 3202.21, 0.029999999999999999, 53.560000000000002, 0.059999999999999998, 850.98000000000002, 1.6100000000000001, 450.23000000000002, 30.210000000000001, 1.0000000000000001e-05, 422.18000000000001, 1.0000000000000001e-05, 0.19, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 272.4718906525153, 1448.1600000000001, 16.329999999999998, 93.700000000000003, 3.5099999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 27.593514369487416, 27.218623778115468, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 12.258682044481564, 1.0000000000000001e-05, 8.6832811186558185, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.1432967981057161, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.0399416888560857, 2.8923423024558916, 2.1326860492570359, 2.0623755476176928, 1.4571653963344724, 1.4303710385000035, 1.0132480624823288, 0.77315218282063991, 0.50395776221832422, 1.0000000000000001e-05, 0.20862732181187055, 0.065833803033092636, 0.001975014090992779, 6.5833803033092637e-05, 25043.970000000001, 24878.040000000001, 82.650000000000006, 0.0079101308434872397, 0.0025749625888728199, 4.191019838660188e-06, 464.86000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [43599.669999999998, 21495.040000000001, 2.1117092547077401, 0.048332279021798777, 28364.23, 0.28999999999999998, 897.27999999999997, 19.329999999999998, 26688.040000000001, 5783.8199999999997, 4130.3599999999997, 26735.369999999999, 10791.620000000001, 138.88999999999999, 2647.8200000000002, 1786.8399999999999, 6444.1000000000004, 292.11000000000001, 104.72, 49.700000000000003, 3511.96, 8368.7399999999998, 173.13603825889896, 1.0000000000000001e-05, 9133.7399999999998, 46.237775475634692, 4083.1300000000001, 1897.0799999999999, 3171.79, 1434.3499999999999, 782.02999999999997, 3302.52, 39851.809999999998, 201.81511031910361, 104.58774506713942, 79.26644563444637, 1.0000000000000001e-05, 0.092542451943476808, 844.37, 0.4446268894642969, 199.52000000000001, 0.93006958269194995, 114.64, 10559.040000000001, 6.6100000000000003, 621.83000000000004, 329.58999999999997, 7.1100000000000003, 203.93000000000001, 288.81, 13.82, 7.1118587350342741, 3.0913262045442624, 2.8186212278224634, 0.076146884377265731, 18107.650000000001, 24521.549999999999, 418.51999999999998, 19.899999999999999, 630.61000000000001, 271.99000000000001, 4.9500000000000002, 1.1899999999999999, 1033.97, 1.0000000000000001e-05, 1.75, 0.34999999999999998, 198422.81, 20513.990000000002, 66701.860000000001, 11785.459999999999, 1.73, 35042.480000000003, 107.13, 147.56, 8278.3500000000004, 8322.3799999999992, 0.96999999999999997, 1.8899999999999999, 9525.6299999999992, 0.62, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 260.9052414879676, 0.02, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 71.793493959969666, 309.75, 1.0000000000000001e-05, 1.0000000000000001e-05, 46.00159686757349, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 17.955253650686242, 15.955794706194922, 14.544098060976118, 5.5659095898620752, 4.244076267991197, 4.1710623177710087, 2.8250782277503768, 1.0000000000000001e-05, 0.55743342764259418, 0.53089566496641039, 0.42362132271982539, 0.083348232405199993, 0.014041144273113206, 87044.110000000001, 1192.97, 3645.3400000000001, 273.37, 1.0000000000000001e-05, 37.920000000000002, 508.16000000000003, 1.0000000000000001e-05, 0.029999999999999999, 0.11, 14110.67, 2.3599999999999999, 87.450000000000003, 194.47999999999999, 376.99696426838614, 0.46000000000000002, 0.12, 1.0000000000000001e-05, 1.0000000000000001e-05, 16.300000000000001, 2039.27, 420.69999999999999, 1.0000000000000001e-05, 5047.4399999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.8500000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 21.975138912724251, 1712.3699999999999, 0.91000000000000003, 3.2400000000000002, 0.01, 30.34, 192.91, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.51, 1.0000000000000001e-05, 18.359999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 28.510000000000002, 27.199999999999999, 83.140000000000001, 139.99000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 26.776060977976528, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.040000000000000001, 1.72, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 329.20999999999998, 169.75999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.0522963176250091, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.68022581438473617, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.020871364035380365, 15521.629999999999, 4545.9300000000003, 2862.6500000000001, 4833.6300000000001, 0.28999999999999998, 143.78999999999999, 0.070000000000000007, 1002, 1.9099999999999999, 397.17000000000002, 26.300000000000001, 1.0000000000000001e-05, 475.10000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 303.24993336394249, 1601.3599999999999, 12.09, 72.75, 2.6000000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.612167064568922, 29.503179618523191, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 13.984869082914361, 1.0000000000000001e-05, 9.6887998408539477, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.831356292014906, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.3439904363088009, 3.2744608499940995, 2.3949801740861321, 2.2880504572303981, 1.6520316349602, 1.6502266093549378, 1.1588625390904543, 0.86164702292797635, 0.56659753749181285, 1.0000000000000001e-05, 0.23006856364672337, 0.072201024210489059, 0.0021660307263146718, 7.220102421048905e-05, 27280, 21190.810000000001, 99.849999999999994, 0.0094235910178248616, 0.0030667246550671809, 5.0093509556798108e-06, 965.76999999999998],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [38513.82, 20180.439999999999, 1.9531769956765701, 0.045675275614349878, 27661.07, 0.26000000000000001, 712.09000000000003, 25.859999999999999, 27178.720000000001, 5811.3800000000001, 4636.5600000000004, 39922.089999999997, 9704.7399999999998, 134.47999999999999, 3718.9299999999998, 1393.3199999999999, 6613.8599999999997, 326.27999999999997, 127.87, 60.82, 3530.6999999999998, 6648.0299999999997, 137.22468767406602, 1.0000000000000001e-05, 5206.21, 26.445395600842989, 4554.8599999999997, 2373.27, 2810.7800000000002, 1147, 734.94000000000005, 2994.0300000000002, 48466.370000000003, 245.50172317654307, 127.48530634971199, 95.975516265401097, 1.0000000000000001e-05, 0.11800901898116517, 735.24000000000001, 0.38675992491063188, 240.30000000000001, 1.1229012728726127, 128.94999999999999, 8179.1499999999996, 4.4100000000000001, 621.83000000000004, 652.57000000000005, 13.98, 184.08000000000001, 337.31, 13.82, 8.6951652497640026, 3.6175104002131016, 3.3508860695671561, 0.089623511312327056, 19136.099999999999, 23356.880000000001, 483.25999999999999, 3.2999999999999998, 384, 152.84, 5.3200000000000003, 4.2400000000000002, 934.75999999999999, 1.0000000000000001e-05, 0.77000000000000002, 0.52000000000000002, 199337.75, 28902.57, 66519.050000000003, 11932.620000000001, 1.3500000000000001, 45420.739999999998, 108.22, 190.11000000000001, 7336.9799999999996, 9445.5799999999999, 1.8100000000000001, 6.8300000000000001, 11182.57, 0.14000000000000001, 0.23999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 311.65744815979559, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 85.285617692512332, 286.60000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 54.017697218301592, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 20.492315835792155, 18.606880804359697, 17.058635304433196, 6.5134106480669196, 4.977817971691084, 4.7826029797665806, 3.302551269106639, 1.0000000000000001e-05, 0.60996468857218844, 0.60174856938344667, 0.46963337282847917, 0.097936140729801793, 0.016432238377483525, 84612.059999999998, 1484.9000000000001, 3133.8699999999999, 268.41000000000003, 1.0000000000000001e-05, 36.82, 573.20000000000005, 1.0000000000000001e-05, 0.11, 0.040000000000000001, 13982.799999999999, 1.6000000000000001, 86.180000000000007, 256.23000000000002, 369.23740531171183, 1.54, 0.62, 1.0000000000000001e-05, 1.0000000000000001e-05, 31.870000000000001, 2093.1399999999999, 415.45999999999998, 1.0000000000000001e-05, 5292.1899999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.58999999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 23.227223996942833, 2032.8900000000001, 0.059999999999999998, 11.5, 0.01, 43.090000000000003, 159.84, 1.0000000000000001e-05, 1.0000000000000001e-05, 17.850000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 18.789999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 26.66, 25.93, 53.119999999999997, 167.55000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 25.971854468719805, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.28999999999999998, 1.0000000000000001e-05, 18.210000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 397.87, 137.78999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.8525934635190771, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.6403601077061607, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.018931037906425786, 15100.540000000001, 8053.25, 2751.98, 4420.2600000000002, 0.12, 163.38999999999999, 0.080000000000000002, 1036.1700000000001, 3.1699999999999999, 400.52999999999997, 36.759999999999998, 1.0000000000000001e-05, 524.70000000000005, 1.0000000000000001e-05, 0.60999999999999999, 1.0000000000000001e-05, 0.19, 1.0000000000000001e-05, 315.85519045961598, 1674.4300000000001, 7.8499999999999996, 66.140000000000001, 4.2000000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 29.888810285784785, 29.676559547060585, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.917887698583476, 1.0000000000000001e-05, 10.203601254163063, 1.0000000000000001e-05, 1.0000000000000001e-05, 8.038843850831384, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.4680592154453902, 3.4420421002743771, 2.5148395541940491, 2.3761557294505615, 1.7780585718582542, 1.7541168960741031, 1.2396673580558351, 0.89896174585196387, 0.59624408671118057, 1.0000000000000001e-05, 0.23752662554276202, 0.074122835245049784, 0.0022236850573514938, 7.4122835245049793e-05, 30460.349999999999, 23242.209999999999, 112.06999999999999, 0.010414475623640642, 0.0033881760695577559, 5.5543869992750092e-06, 1194.77],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [43710.910000000003, 20459.110000000001, 1.9543486944413331, 0.046434874780309096, 27726.77, 0.23000000000000001, 422.18000000000001, 18.629999999999999, 26130.439999999999, 6373.5600000000004, 4696.9399999999996, 39738.25, 8880.2099999999991, 162.03999999999999, 5820.8699999999999, 2201.3099999999999, 6169.6300000000001, 437.62, 176.37, 105, 3364.25, 9576.8700000000008, 196.48742407830426, 1.0000000000000001e-05, 7367.8400000000001, 37.624438024042824, 4496.2700000000004, 2720.1300000000001, 2766.8000000000002, 1286.0699999999999, 749.80999999999995, 2350.8099999999999, 55697.519999999997, 282.05215220826682, 146.8549905288144, 109.77727867618046, 1.0000000000000001e-05, 0.13467914833048109, 582.01999999999998, 0.30720197945491612, 267.86000000000001, 1.2540210563054137, 119.05, 10841.23, 53.640000000000001, 621.83000000000004, 693.35000000000002, 16.449999999999999, 190.75999999999999, 331.80000000000001, 13.82, 9.1491953678887157, 3.6853145179168005, 3.4699919957825336, 0.091762112742963781, 22393.43, 28627.950000000001, 330.36000000000001, 5.1299999999999999, 300.13, 112.23, 18.149999999999999, 5.75, 882.95000000000005, 1.0000000000000001e-05, 1.23, 0.17000000000000001, 195366.10999999999, 42009.040000000001, 68818.429999999993, 12570.27, 1.3300000000000001, 52654.110000000001, 122.01000000000001, 462.22000000000003, 8095.3599999999997, 12362.18, 0.52000000000000002, 2.8199999999999998, 11993.92, 0.050000000000000003, 0.48999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 342.66765712554655, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 92.35949804428823, 311.94999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 57.838590465584041, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 21.292056774383308, 19.780468814460377, 18.242915787444993, 6.8747778316550567, 5.3330142532192735, 5.0035386045731194, 1.0000000000000001e-05, 3.520722746022908, 0.64298628982329875, 0.64028451932854324, 0.47895022407028803, 0.10470237865390032, 0.017543964251658904, 87863.240000000005, 1680.04, 4685.9300000000003, 263.44999999999999, 1.0000000000000001e-05, 37.170000000000002, 615.09000000000003, 1.0000000000000001e-05, 0.070000000000000007, 0.059999999999999998, 14061.07, 0.83999999999999997, 322.31999999999999, 87.219999999999999, 365.6187033267106, 0.01, 1.1200000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 17.27, 2103.1799999999998, 275.08999999999997, 1.0000000000000001e-05, 5223.25, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.2200000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 22.61296515740078, 2165.8499999999999, 1.6100000000000001, 9.8000000000000007, 0.01, 45.509999999999998, 213.84999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.949999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.08, 1.0000000000000001e-05, 1.0000000000000001e-05, 19.079999999999998, 24.739999999999998, 54.799999999999997, 184.09, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 31.927141102104759, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 10.300000000000001, 1.0000000000000001e-05, 14.16, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 709.59000000000003, 165.34999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.3836915470909696, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.7641455028634484, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.021720311723496106, 14768.75, 8441.1100000000006, 2546.4200000000001, 5525.8800000000001, 0.14000000000000001, 174.31999999999999, 0.089999999999999997, 799.16999999999996, 9.8900000000000006, 534.15999999999997, 31.579999999999998, 1.0000000000000001e-05, 776.02999999999997, 1.0000000000000001e-05, 0.81999999999999995, 1.0000000000000001e-05, 0.029999999999999999, 1.0000000000000001e-05, 304.35279289556473, 1942.1400000000001, 5.5999999999999996, 30.859999999999999, 5.4100000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 28.237293951516708, 27.858731685688593, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.640288170522243, 1.0000000000000001e-05, 9.9474894629389663, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.6324491507956926, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.3969888754272697, 3.2798634711347767, 2.4409694900596768, 2.283910168609129, 1.7694176380278508, 1.7250466189633464, 1.2258374393931755, 0.8680520793174884, 0.58013346672114829, 1.0000000000000001e-05, 0.22646827270145106, 0.070430188991276954, 0.0021129056697383086, 7.0430188991276948e-05, 36245.980000000003, 22999.700000000001, 94.950000000000003, 0.0086755593843342166, 0.0028228299827010618, 4.6428124715477981e-06, 1362.55],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [47663.68, 19216.75, 1.8204567634416478, 0.043766608312275086, 28134.98, 0.28000000000000003, 673.50999999999999, 14.609999999999999, 26940.57, 5271.25, 5010, 42420.139999999999, 8173.6300000000001, 133.38, 6543.1400000000003, 2814.1999999999998, 6844.2399999999998, 399.14999999999998, 169.53999999999999, 83.319999999999993, 3505.3499999999999, 8952.9599999999991, 182.17990136435546, 1.0000000000000001e-05, 7352.4099999999999, 37.726296845361446, 5845.5799999999999, 2833.52, 2932.1399999999999, 1286.51, 796.90999999999997, 2068.04, 47800.57, 241.88848528444046, 126.38369260877663, 93.752443940399701, 1.0000000000000001e-05, 0.16460812726823196, 672.40999999999997, 0.35525625945897282, 343.92000000000002, 1.6060282260227199, 153.84999999999999, 14500.91, 107.94, 587.08000000000004, 740.75, 62.299999999999997, 165.44, 357.14999999999998, 21.48, 9.4847561884486975, 3.6880464937850816, 3.615529701841449, 0.092487870108301964, 25292.5, 25911.639999999999, 392.01999999999998, 3.5299999999999998, 322.88999999999999, 81.590000000000003, 13.1, 7.0899999999999999, 1245.3900000000001, 1.0000000000000001e-05, 3.0099999999999998, 0.69999999999999996, 205593.23000000001, 56239.860000000001, 72097.789999999994, 13515.92, 1.47, 65331.650000000001, 74.439999999999998, 605.96000000000004, 8519.75, 15964.09, 0.53000000000000003, 5.0300000000000002, 14731.290000000001, 53.229999999999997, 27.399999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 432.89244283924302, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 114.77784778736979, 268.95999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 71.194764148789744, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 25.390976986898877, 24.172713249959397, 22.415966602420781, 8.315037712307598, 6.6802035957286261, 6.0155002908850532, 1.0000000000000001e-05, 4.3164790113626639, 0.78489269048929866, 0.78342801697246911, 0.57833064598347073, 0.12871895494961716, 0.021539316423965386, 97316.660000000003, 1727.3099999999999, 6599.54, 281.87, 1.0000000000000001e-05, 39.719999999999999, 429.89999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.080000000000000002, 14870.16, 1.6799999999999999, 432.77999999999997, 88.260000000000005, 379.43338372030979, 1.0600000000000001, 0.91000000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 24.940000000000001, 2057.5599999999999, 281.25999999999999, 1.0000000000000001e-05, 5337.7200000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.58999999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 23.352920507706106, 1783.21, 4.9500000000000002, 15.119999999999999, 0.79000000000000004, 41.909999999999997, 196.21000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 17.969999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 11.24, 1.0000000000000001e-05, 1.0000000000000001e-05, 12.970000000000001, 26.43, 82.670000000000002, 237, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.6000000000000001, 34.301288168947025, 1.0000000000000001e-05, 102.31, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 19.84, 1.0000000000000001e-05, 16.52, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 732.01999999999998, 172.18000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.5189333303370285, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.79983229124344002, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.021722517412232981, 16384.740000000002, 5960.3000000000002, 3166.6999999999998, 7421.8500000000004, 0.20000000000000001, 182.24000000000001, 0.48999999999999999, 848.25, 2.5800000000000001, 509.19999999999999, 27.969999999999999, 1.0000000000000001e-05, 802.48000000000002, 1.0000000000000001e-05, 1.03, 1.0000000000000001e-05, 0.17999999999999999, 1.0000000000000001e-05, 311.78584121841999, 1944.1300000000001, 2.6499999999999999, 39.68, 8, 1.0000000000000001e-05, 1.0000000000000001e-05, 28.586865135283329, 28.174448494942524, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.182932834472672, 1.0000000000000001e-05, 10.253899126844122, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.7114224308943173, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.5367182617558721, 3.3245308256399011, 2.5152859543878128, 2.3340617972756816, 1.8698973320250116, 1.8055506556584107, 1.2881435865114823, 0.89149330547953021, 0.60004699310890175, 1.0000000000000001e-05, 0.22880795484561858, 0.071179951732965818, 0.0021353985519889742, 7.1179951732965797e-05, 36346.849999999999, 20357.459999999999, 96.260000000000005, 0.0086066173084954206, 0.0028007786966750209, 4.6217470242162065e-06, 795.13],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [46060.660000000003, 22829.25, 2.14851668966313, 0.052201313314915031, 28926.790000000001, 0.14000000000000001, 746.25999999999999, 14.66, 23113.119999999999, 4220.75, 4619.6800000000003, 42583.480000000003, 8191.2700000000004, 126.77, 11419.01, 2557.3600000000001, 6213.7200000000003, 421.41000000000003, 187.03, 91.709999999999994, 3149.3000000000002, 8343.3799999999992, 168.11082236788528, 1.0000000000000001e-05, 6252.3000000000002, 32.220284631363086, 3735.52, 2965.29, 2465.8699999999999, 1378.3699999999999, 735.46000000000004, 1819.28, 48364.949999999997, 244.54274120277657, 128.2517295670462, 94.40524306023255, 1.0000000000000001e-05, 0.17646380161838457, 709.88999999999999, 0.37458133992364429, 261.25, 1.2117828294220139, 108.23999999999999, 14129.43, 113, 653.52999999999997, 780.44000000000005, 78.650000000000006, 168.91, 347.23000000000002, 20.140000000000001, 10.524860267599285, 4.0130481044288988, 3.9911147469037496, 0.1006665478136989, 21482.919999999998, 26135.080000000002, 322.33999999999997, 6.1299999999999999, 291.11000000000001, 51.810000000000002, 12.34, 7.6299999999999999, 1.0000000000000001e-05, 1074.75, 2.7599999999999998, 0.19, 211302.5, 48139.449999999997, 70680.309999999998, 12505.860000000001, 1.0000000000000001e-05, 71052.029999999999, 117.87, 690.57000000000005, 10006.77, 17655.959999999999, 1.24, 4.4900000000000002, 17004.259999999998, 58.840000000000003, 158.78999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 513.40318998022474, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 133.45870246157631, 372.36000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 82.395317021696783, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 28.419380226020238, 27.761980039514576, 25.873322015045197, 9.4527383852391722, 7.9877603599398608, 6.7955387660311386, 1.0000000000000001e-05, 4.9772454362596079, 0.90529276817969984, 0.90126482452561818, 0.67008074986110711, 0.14878527670385397, 0.02486384971655314, 109778.08, 1558.0999999999999, 5129.0500000000002, 300.30000000000001, 1.0000000000000001e-05, 40.32, 157.63, 1.0000000000000001e-05, 52.909999999999997, 0.14999999999999999, 14080.91, 6.1900000000000004, 728.73000000000002, 91.609999999999999, 363.27368952362775, 0.56999999999999995, 3.3500000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 49.18, 2082.73, 287.68000000000001, 1.0000000000000001e-05, 4913.3199999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.29, 1.0000000000000001e-05, 1.0000000000000001e-05, 21.77540977846925, 2187.8200000000002, 2.5099999999999998, 17.210000000000001, 16.219999999999999, 38.57, 195.11000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 18.190000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.550000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 8.3100000000000005, 136.53, 29.550000000000001, 280.94999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.71, 36.967477670729664, 1.0000000000000001e-05, 93.450000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.08, 1.0000000000000001e-05, 2.7000000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 669.10000000000002, 177.36000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.6641045715991822, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.84262014383093786, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.02205015111278584, 16877.470000000001, 5051.1700000000001, 3654.8899999999999, 7828.6099999999997, 0.23999999999999999, 136.13, 0.77000000000000002, 731.67999999999995, 5.29, 621.34000000000003, 22.670000000000002, 1.0000000000000001e-05, 841.05999999999995, 1.0000000000000001e-05, 0.70999999999999996, 1.0000000000000001e-05, 0.11, 1.0000000000000001e-05, 303.83550369931731, 1961.8699999999999, 41.18, 84.879999999999995, 11.77, 1.0000000000000001e-05, 1.0000000000000001e-05, 27.515584681809646, 27.062505966137319, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.953205735268174, 1.0000000000000001e-05, 9.9826496061437986, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.4176670507072187, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.5002914039200808, 3.2049451213582723, 2.460625956523983, 2.2681308006281613, 1.8768448776234297, 1.7989024735831378, 1.2865286805614646, 0.87115520161100635, 0.59004247483530914, 1.0000000000000001e-05, 0.21928571882977649, 0.068430556663996417, 0.0020529166999198926, 6.8430556663996413e-05, 34207.68, 22665.700000000001, 77.989999999999995, 0.0068112610738880076, 0.0022168346204485168, 3.6702559941200602e-06, 660.61000000000001],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [38847.830000000002, 17710.34, 1.6569974331455994, 0.04067225281886952, 22469.200000000001, 0.22, 327.38999999999999, 14.720000000000001, 18447.119999999999, 5578.79, 4612.3999999999996, 42504.139999999999, 5297.6999999999998, 114.64, 11954.5, 2246.5100000000002, 5664.7700000000004, 237, 150.22, 77.620000000000005, 2092.1799999999998, 7397.6000000000004, 148.24658176079078, 1.0000000000000001e-05, 6557.6400000000003, 33.93301424514658, 1311.98, 1952.27, 2392.0500000000002, 839.86000000000001, 668.00999999999999, 1987.53, 42071.870000000003, 212.60834878868206, 111.95106272060046, 81.778308280289608, 1.0000000000000001e-05, 0.24658121287249105, 467.38, 0.24623776954832394, 274.48000000000002, 1.2668747755471421, 125.67, 8684.0100000000002, 100.03, 427.62, 899.49000000000001, 40.43, 175.05000000000001, 105.81999999999999, 11.23, 8.3941646354940378, 3.3087145698698959, 3.2384696769875188, 0.079931083239946563, 22447.439999999999, 26616.380000000001, 296.56999999999999, 4.2800000000000002, 289.37, 76.159999999999997, 7.0199999999999996, 2.71, 1.0000000000000001e-05, 1349.76, 0.39000000000000001, 0.42999999999999999, 178381.09, 132944.01999999999, 65096.980000000003, 13593.450000000001, 1.0000000000000001e-05, 100730.46000000001, 75.840000000000003, 887.11000000000001, 7745.9300000000003, 18065.43, 0.34000000000000002, 6.3399999999999999, 15958.16, 47.210000000000001, 177.06, 1.0000000000000001e-05, 1.0000000000000001e-05, 492.40343430073466, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 125.32643157779061, 243.72, 1.0000000000000001e-05, 1.0000000000000001e-05, 77.281400598098557, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 25.824180898288031, 25.72977251472744, 24.19226455388354, 8.7009184632270351, 7.7361391937864186, 6.2279303864613205, 1.0000000000000001e-05, 4.6581003435609594, 0.84432719386331068, 0.84000208072482063, 0.63039686658315486, 0.13933375228942324, 0.023253296443495202, 113518.66, 1934, 5134.5699999999997, 1.0000000000000001e-05, 292.32999999999998, 31.98, 11.02, 1.0000000000000001e-05, 99.209999999999994, 1.25, 13054.66, 2.3900000000000001, 1335.1400000000001, 130.69, 352.26022588276004, 1.1000000000000001, 9.8200000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 30.68, 1797.1800000000001, 183.19999999999999, 1.0000000000000001e-05, 4684.4300000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 20.428650850216712, 684.30999999999995, 0.10000000000000001, 12.130000000000001, 27.48, 37.890000000000001, 169.75999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 16.59, 1.0000000000000001e-05, 15.9, 1.0000000000000001e-05, 1.0000000000000001e-05, 13.869999999999999, 120.45, 31.059999999999999, 348.13, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.11, 37.261994542802952, 1.0000000000000001e-05, 126.89, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 9.7100000000000009, 28.449999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 617.17999999999995, 1.0000000000000001e-05, 153.77000000000001, 1.0000000000000001e-05, 3.5599370266907302, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.83177571812978424, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.021302517143991145, 13966.27, 6665.9700000000003, 2004.8299999999999, 6894.9499999999998, 0.31, 90.019999999999996, 1.0600000000000001, 842.09000000000003, 7.1600000000000001, 421.51999999999998, 25.27, 1.0000000000000001e-05, 823.42999999999995, 1.0000000000000001e-05, 0.57999999999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 296.90103588214441, 1658.6700000000001, 54.810000000000002, 36.380000000000003, 4.2599999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 26.56906030211498, 26.010662486156289, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 14.74832024287406, 1.0000000000000001e-05, 9.6881988078297212, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.1526121754917034, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.4717920690197999, 3.0955679940349872, 2.4084411057691426, 2.2097720966882459, 1.8862668985734548, 1.7958728293470088, 1.2874226852163584, 0.85419096365369895, 0.58168913452580029, 1.0000000000000001e-05, 0.21080952640766012, 0.065981072428062643, 0.0019794321728418794, 6.5981072428062629e-05, 17937.040000000001, 14302.469999999999, 41.57, 0.0035442000662651209, 0.0011536760245980332, 1.916405356475138e-06, 773.84000000000003],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [43503.769999999997, 21107.220000000001, 1.9644523873611521, 0.048689335443518306, 24510.759999999998, 0.050000000000000003, 717.60000000000002, 9.5, 13039.76, 3054.5, 3604, 43654.230000000003, 6917, 112.44, 15640.9, 2278.4699999999998, 4862.29, 352.74000000000001, 199.90000000000001, 85.510000000000005, 3621.0900000000001, 5037.5600000000004, 101.5556543567036, 1.0000000000000001e-05, 6525.6800000000003, 33.911111424348057, 1058.6600000000001, 2267.6199999999999, 2393.1900000000001, 1322.8299999999999, 712.63, 1874.3199999999999, 29255.310000000001, 147.71890830555205, 78.108371503846072, 56.603960542260559, 1.0000000000000001e-05, 0.29926192777877009, 753.98000000000002, 0.3966325646540616, 217.36000000000001, 1.0006176327417993, 115.45999999999999, 13408.52, 71.340000000000003, 560.35000000000002, 1358.29, 72.930000000000007, 200.71000000000001, 294.31999999999999, 0.37, 11.582262017522948, 4.7746370446185971, 4.7592812837597398, 0.11466591519838472, 23515.580000000002, 28153, 137.66999999999999, 4.2000000000000002, 287.62, 60.530000000000001, 8.2200000000000006, 2.79, 1.0000000000000001e-05, 1234.5899999999999, 2.5600000000000001, 0.20000000000000001, 203462.82999999999, 177319.98000000001, 70515.649999999994, 11380.59, 1.0000000000000001e-05, 124042.23, 60.880000000000003, 1240.28, 12087.93, 18700.150000000001, 0.56000000000000005, 2.5299999999999998, 21967.509999999998, 223.00999999999999, 174.65000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 692.32061870918335, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 172.70373355649994, 629.09000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 106.28638893966844, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 35.250505568993937, 34.524789902448958, 33.218246393726382, 11.741658224944095, 10.985943757759175, 8.3878561406339873, 1.0000000000000001e-05, 6.4101692516369617, 1.1565495055228692, 1.1488902372743732, 0.87251830797448238, 0.19148170621239552, 0.031913617702065925, 130724.95, 1636.8399999999999, 4703.5600000000004, 1.3100000000000001, 290.74000000000001, 32.25, 56.219999999999999, 1.0000000000000001e-05, 187.38999999999999, 2.98, 13569.440000000001, 18.23, 2415.4499999999998, 210.16999999999999, 393.3695537284334, 1.6200000000000001, 11.16, 1.0000000000000001e-05, 1.0000000000000001e-05, 77.109999999999999, 1790.8, 1.8700000000000001, 1.0000000000000001e-05, 4694.6300000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.3100000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 19.738453074452345, 419.36000000000001, 0.089999999999999997, 18.239999999999998, 41.520000000000003, 39.780000000000001, 295.42000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 12.83, 1.0000000000000001e-05, 38.270000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 12.869999999999999, 157.34999999999999, 32.859999999999999, 428.88999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 54.118637550497077, 1.0000000000000001e-05, 160.33000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.1099999999999999, 11.34, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 728.21000000000004, 1.0000000000000001e-05, 121.56, 1.0000000000000001e-05, 4.9428362626151321, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.176030985676906, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029547163874707266, 17536.650000000001, 8712.1100000000006, 2967.3200000000002, 7642.3199999999997, 0.11, 128.08000000000001, 0.02, 863.25, 15.449999999999999, 671.40999999999997, 26.100000000000001, 1.0000000000000001e-05, 781.53999999999996, 1.0000000000000001e-05, 0.81000000000000005, 1.0000000000000001e-05, 0.050000000000000003, 1.0000000000000001e-05, 319.81545313485145, 1554.6300000000001, 61.270000000000003, 43.240000000000002, 5.6799999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 28.294462161502729, 27.529980325972691, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 16.036779855218896, 1.0000000000000001e-05, 10.43852370311952, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.6063503284999081, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.7975944924787193, 3.2884547144061456, 2.5871853937188427, 2.3722417841147863, 2.0875924252171876, 1.9427055505526638, 1.4196316423343016, 0.92460148723051161, 0.63089669866637998, 1.0000000000000001e-05, 0.22368315218919829, 0.070197129197928226, 0.0021059138759378471, 7.0197129197928227e-05, 16577.77, 13907.85, 79.010000000000005, 0.0066093446957232183, 0.0021517128689277974, 3.5861881148796623e-06, 276.85000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [47228.43, 17254.57, 1.5964367599095388, 0.039610539076409032, 26516.98, 1.0000000000000001e-05, 557.76999999999998, 0.95999999999999996, 17823.220000000001, 4136.9700000000003, 3810.3600000000001, 40895.889999999999, 6544.4099999999999, 98.109999999999999, 16613.040000000001, 2630.1100000000001, 5041.9700000000003, 436.51999999999998, 219.19999999999999, 76.159999999999997, 3390.71, 6764.8800000000001, 135.79693809453352, 1.0000000000000001e-05, 7683.1000000000004, 39.741067284650811, 1093.3399999999999, 2094.6500000000001, 2542.23, 1301.1300000000001, 653.13999999999999, 2427.9299999999998, 35855.940000000002, 180.86590961806209, 95.56201511146304, 69.059416480967698, 1.0000000000000001e-05, 0.33758825390319702, 781.53999999999996, 0.40583185277548062, 189.43000000000001, 0.86934228536026636, 121.83, 14009.280000000001, 100.05, 914.20000000000005, 89.420000000000002, 1529.9300000000001, 229.55000000000001, 326.27999999999997, 0.90000000000000002, 15.121652411295626, 6.59938049128783, 6.3415952284749029, 0.1397989309870111, 26100.5, 26815.66, 14.01, 67.459999999999994, 323.99000000000001, 129.19999999999999, 6.2300000000000004, 3.3100000000000001, 1.0000000000000001e-05, 1141.99, 3.3199999999999998, 0.16, 193182.70000000001, 206744.57999999999, 74386.899999999994, 13810.719999999999, 1.0000000000000001e-05, 141924.91, 46.789999999999999, 1595.1199999999999, 12084.629999999999, 18008.630000000001, 7.0800000000000001, 12.25, 24239.040000000001, 615.37, 213.38999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 785.33596262077401, 0.01, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 192.21369088382176, 623.90999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 117.80884755973578, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 38.83151310347295, 37.921117669204442, 36.717867759576841, 12.787978757347373, 12.569398967767754, 9.125175681479206, 1.0000000000000001e-05, 7.1431026381067459, 1.2807077962262097, 1.2732803276482614, 0.97759634044994292, 0.21221338794137687, 0.035368897990229485, 142296.66, 1753.1099999999999, 4472.0799999999999, 4, 349.85000000000002, 30.609999999999999, 78.260000000000005, 1.0000000000000001e-05, 191.80000000000001, 4.54, 13751.32, 166.84, 2615.5599999999999, 235.89499999999998, 401.4804005632966, 24.719999999999999, 10.73, 1.0000000000000001e-05, 1.0000000000000001e-05, 77.129999999999995, 1641.8, 2.2000000000000002, 1.0000000000000001e-05, 4414.3400000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.29, 1.0000000000000001e-05, 1.0000000000000001e-05, 18.754048348442236, 882.44000000000005, 0.69999999999999996, 14.56, 107.83, 41.18, 422.19, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.3199999999999998, 1.0000000000000001e-05, 133.19, 1.0000000000000001e-05, 1.0000000000000001e-05, 18.82, 93.739999999999995, 33.140000000000001, 399.88999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 68.510216869794192, 2.8500000000000001, 1.0000000000000001e-05, 144.03, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 9.4000000000000004, 8.5999999999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 727.75, 1.0000000000000001e-05, 120.15000000000001, 1.0000000000000001e-05, 5.9708305518266389, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.4475759785761142, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.035663158938749849, 19849.299999999999, 8189.9099999999999, 3355.77, 10653.83, 0.26000000000000001, 166.13999999999999, 0.42999999999999999, 655.53999999999996, 14.210000000000001, 694.32000000000005, 0.71999999999999997, 1.0000000000000001e-05, 972.24000000000001, 1.0000000000000001e-05, 10.32, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.28000000000000003, 301.14530395399032, 261.25, 1672.6300000000001, 78.829999999999998, 11.74, 1.0000000000000001e-05, 1.0000000000000001e-05, 26.336012882011893, 25.452501556693651, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.262446649592432, 1.0000000000000001e-05, 9.8532956271266894, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.0742313149256404, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.6325580062587051, 3.0629089429458269, 2.4215964596267296, 2.2385509693282568, 2.0150682347418627, 1.8755303449211851, 1.3635647819414805, 0.87155653419595935, 0.59499583356120367, 1.0000000000000001e-05, 0.20737969627141425, 0.065326727444137422, 0.0019598018233241226, 6.5326727444137402e-05, 10685.75, 10408.01, 61.789999999999999, 0.0050975312291517676, 0.0016595326844769725, 2.7658878074616211e-06, 188.94],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [48275.379999999997, 19669.709999999999, 1.8055676059056569, 0.04493697376569579, 28526.290000000001, 1.0000000000000001e-05, 455.25, 1.1399999999999999, 24707.279999999999, 5705.5600000000004, 3786.6199999999999, 45629.989999999998, 5923.8100000000004, 90.390000000000001, 11455.98, 2298.3200000000002, 5336.2799999999997, 352.74000000000001, 157.37, 86.760000000000005, 2514.3699999999999, 4384.9899999999998, 87.583078166783679, 1.0000000000000001e-05, 4359.54, 22.442813110746254, 1415, 1988.6600000000001, 2439.6399999999999, 1015.84, 790.71000000000004, 2331.3899999999999, 49401.129999999997, 249.10719081963089, 130.6764133048049, 94.825815396068663, 1.0000000000000001e-05, 0.41444631074687682, 842.15999999999997, 0.43160386827092084, 213.84999999999999, 0.98027206550170121, 114.64, 14615.549999999999, 109.8, 738.63999999999999, 83.439999999999998, 1166.7, 189.99000000000001, 229.28, 0.76000000000000001, 11.847140816285284, 5.3521371381690201, 5.160631438949582, 0.098559132802789842, 32181.939999999999, 26292.630000000001, 9.3000000000000007, 549.88999999999999, 266.80000000000001, 457.38999999999999, 6.4900000000000002, 8.1799999999999997, 1.0000000000000001e-05, 1365.28, 2.9199999999999999, 0.28000000000000003, 204117.20000000001, 273637.56, 72460.009999999995, 13614.360000000001, 1.0000000000000001e-05, 176647.31, 85.739999999999995, 1751.3199999999999, 13111.98, 20518.529999999999, 43.119999999999997, 22.649999999999999, 23169.209999999999, 1013.8200000000001, 221.80000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 771.61352021919049, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 185.67106495859707, 632.50999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 113.08921030023149, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 37.047321185162794, 36.194040925158404, 34.960014094952854, 12.237942661313987, 12.078505035042246, 8.6150710553909562, 1.0000000000000001e-05, 6.9805804218845342, 1.2330069733210876, 1.2238282613608809, 0.97906260908870457, 0.20397137689348011, 0.033995229482246689, 138379.67000000001, 1583.3299999999999, 3605.6599999999999, 5.7800000000000002, 392.17000000000002, 8.6099999999999994, 100.31, 1.0000000000000001e-05, 196.21000000000001, 6.5300000000000002, 15399.27, 378.17000000000002, 2936.1700000000001, 261.62, 446.9564614231212, 5.5300000000000002, 125.66, 1.0000000000000001e-05, 1.0000000000000001e-05, 87.540000000000006, 1084.97, 17.379999999999999, 1.0000000000000001e-05, 5155.5100000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.0899999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 22.184003648227627, 891.14999999999998, 0.040000000000000001, 16.579999999999998, 311.63, 48.450000000000003, 378.10000000000002, 1.0000000000000001e-05, 0.83999999999999997, 1.0000000000000001e-05, 7.71, 1.0000000000000001e-05, 289.97000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 16.780000000000001, 74.370000000000005, 29.550000000000001, 359.52999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 72.238587603612203, 1.71, 1.0000000000000001e-05, 118.97, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 9.7100000000000009, 7.9500000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 803.95000000000005, 106.92, 1.0000000000000001e-05, 6.0587688872486414, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.501509611751169, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.036192363557885118, 18543.66, 7488.8000000000002, 2885.9099999999999, 11418.83, 0.33000000000000002, 137.06999999999999, 0.089999999999999997, 688.38, 18.600000000000001, 681.91999999999996, 1.0600000000000001, 1.0000000000000001e-05, 963.41999999999996, 1.0000000000000001e-05, 12.35, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.029999999999999999, 304.42595599969462, 275.50999999999999, 1599.45, 103.23999999999999, 3.25, 1.0000000000000001e-05, 1.0000000000000001e-05, 26.303714729363868, 25.259487593198749, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.615954040351973, 1.0000000000000001e-05, 9.9271419355594563, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.0616855486580556, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.7294012784054305, 3.06995467528778, 2.4330923070190562, 2.2860336910808137, 2.0970049508423982, 1.98068961413492, 1.3997656541480759, 0.87823953726101001, 0.60151738800660259, 1.0000000000000001e-05, 0.20847990204471692, 0.065272355054701595, 0.0019581706516410479, 6.527235505470159e-05, 7271.9799999999996, 10820.280000000001, 16.579999999999998, 0.001344139135851046, 0.0004375927734729395, 7.2932128912156584e-07, 1.52],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [56414.669999999998, 19985.82, 1.8184637830773243, 0.045423741459050551, 22434.610000000001, 0.54000000000000004, 486.12, 1.0700000000000001, 15061.24, 4680.4099999999999, 3612.75, 53386.010000000002, 5911.6899999999996, 82.670000000000002, 11900.639999999999, 2342.4099999999999, 4453.5200000000004, 464.43000000000001, 131.16999999999999, 65.469999999999999, 2791.3200000000002, 5459.7399999999998, 107.98011591484094, 1.0000000000000001e-05, 5582.3000000000002, 28.605457667368029, 1215.97, 1747.4100000000001, 1874.47, 1360.55, 579.51999999999998, 2651.7800000000002, 55789.190000000002, 281.19555889540635, 146.25116995010654, 106.70177078133332, 1.0000000000000001e-05, 0.46323501271148321, 709.88999999999999, 0.35944342326192319, 229.91, 1.0511345960476903, 137.91, 15797.370000000001, 112.47, 455.73000000000002, 86.310000000000002, 1304.05, 285.50999999999999, 313.06, 1.04, 10.086025573738707, 4.7546260142074628, 4.431901095591412, 0.075020800906881652, 29358.189999999999, 28317.849999999999, 3.1200000000000001, 751.19000000000005, 372.13, 645.57000000000005, 5.9900000000000002, 8.2699999999999996, 1.0000000000000001e-05, 1405.45, 1.3899999999999999, 0.80000000000000004, 211162.25, 321195, 74146.309999999998, 14298.620000000001, 1.0000000000000001e-05, 200091.20000000001, 672.26999999999998, 2792.96, 15889.799999999999, 19875.130000000001, 475.36000000000001, 69.849999999999994, 25303.580000000002, 1229.25, 238.93000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 866.89167538208198, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 606.74000000000001, 205.54107525653313, 1.0000000000000001e-05, 1.0000000000000001e-05, 124.16946978839351, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 40.405241949507612, 39.471535658484655, 37.917602993056235, 13.40369796219686, 13.2035646025425, 9.3254663978009411, 1.0000000000000001e-05, 7.8684207233079935, 1.3657698992487155, 1.3466917658984872, 1.123739462433071, 0.22444862764974782, 0.037408104608291311, 139452.45000000001, 1863.49, 3813.8000000000002, 10.33, 345.98000000000002, 22.75, 146.63, 1.0000000000000001e-05, 205.03, 4.4500000000000002, 14126.1, 329.54000000000002, 2898.5999999999999, 188.53, 413.56870296693177, 8.0199999999999996, 290.94, 1.0000000000000001e-05, 1.0000000000000001e-05, 108.40000000000001, 922.52999999999997, 50.520000000000003, 1.0000000000000001e-05, 4935.3800000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.8700000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 21.489486207442841, 2164.3200000000002, 0.14999999999999999, 6.29, 321.80000000000001, 36.329999999999998, 534.63, 1.0000000000000001e-05, 33.100000000000001, 1.0000000000000001e-05, 12.49, 414.63, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 26.25, 57.630000000000003, 37.229999999999997, 356.22000000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 94.111001239784471, 1.0000000000000001e-05, 1.3999999999999999, 1.0000000000000001e-05, 107.27, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.3799999999999999, 12.56, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 780.76999999999998, 119.03, 1.0000000000000001e-05, 7.6434017534359606, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.9467290578876839, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.045693196094623453, 20292.93, 8257.8999999999996, 3080.2600000000002, 12730.68, 0.34000000000000002, 105.8, 0.13, 525.19000000000005, 22.25, 860.53999999999996, 3.25, 1.0000000000000001e-05, 1.0000000000000001e-05, 936.96000000000004, 33.079999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.050000000000000003, 289.85689751913708, 258.80000000000001, 1593.47, 104.72, 1.4299999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 24.728460148958934, 23.645494867610417, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.080601150201513, 1.0000000000000001e-05, 9.4539817546375673, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.6402571982733116, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.6049674287050393, 2.8928857199167588, 2.2997915985800677, 2.2036058680213189, 2.0683312399319869, 1.9484832050504792, 1.3523160571783648, 0.84200927070597631, 0.57391843575565005, 1.0000000000000001e-05, 0.20033059984424306, 0.061460530708465418, 0.0018438159212539626, 6.1460530708465412e-05, 8906.4200000000001, 9426.9599999999991, 48.07, 0.0038305307792082964, 0.0012470528852550069, 2.0784214754250114e-06, 712.96000000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [63238.68, 15957.059999999999, 1.4411680507561317, 0.036095376125132694, 21569.720000000001, 1.0000000000000001e-05, 370.38, 0.41999999999999998, 18073.060000000001, 4827.0200000000004, 3605.8000000000002, 59917.260000000002, 5770.5900000000001, 93.700000000000003, 11844.33, 4980.2399999999998, 4687.5, 331.80000000000001, 93.700000000000003, 84, 3045.4499999999998, 4996.7700000000004, 97.998810298777656, 1.0000000000000001e-05, 5996.8800000000001, 30.603071545022701, 1194.21, 1764.76, 1971.55, 1107.6600000000001, 509.08999999999997, 2175.96, 46545.040000000001, 234.24553498935964, 120.76328565396653, 88.586661630456703, 1.0000000000000001e-05, 0.56551028630962474, 838.86000000000001, 0.41998257427346097, 192.06, 0.87363017757874351, 110.34, 16592.970000000001, 146.71000000000001, 688.66999999999996, 139.11000000000001, 1555.1500000000001, 160.59, 308.64999999999998, 0.97999999999999998, 12.555599038686616, 6.15171056687511, 5.5603440146508731, 0.081630038910538313, 32867.629999999997, 27693.299999999999, 2.5699999999999998, 771.77999999999997, 315.20999999999998, 2.27, 861.29999999999995, 1.8999999999999999, 1.0000000000000001e-05, 1274.6900000000001, 1.1499999999999999, 0.80000000000000004, 207699.53, 267666.96999999997, 73959.479999999996, 15199.639999999999, 1.0000000000000001e-05, 247368.75, 2692.1900000000001, 2719.8600000000001, 16735.27, 23074.400000000001, 707.44000000000005, 121.67, 23517.59, 1782.01, 279.94999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 833.2613805733215, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 769.94000000000005, 194.85745716232097, 1.0000000000000001e-05, 1.0000000000000001e-05, 116.67039750771144, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 37.694424139487936, 36.786362599599769, 35.107012764185484, 12.560577946154883, 12.489371257079805, 8.6769933246689046, 1.0000000000000001e-05, 7.5732896440051514, 1.292295654204193, 1.2690301023281765, 1.0536474932941442, 0.21150501705469604, 0.035250836175782681, 144439.92000000001, 2583.9000000000001, 5282.9899999999998, 9.5899999999999999, 296.69999999999999, 33.479999999999997, 154.31999999999999, 1.0000000000000001e-05, 206.13, 2.9300000000000002, 291.89999999999998, 12148.559999999999, 2944.4099999999999, 183, 369.1743903131914, 5.6600000000000001, 405.70999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 117.75, 1091.4100000000001, 33.5, 1.0000000000000001e-05, 7184.3299999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.6099999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 30.989779185267121, 2390.6999999999998, 0.14999999999999999, 8.1500000000000004, 381.27999999999997, 45.770000000000003, 833.38, 1.0000000000000001e-05, 46.259999999999998, 1.0000000000000001e-05, 9.4499999999999993, 541.88999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 21.809999999999999, 44.460000000000001, 38.609999999999999, 505.75999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 132.00245880034549, 42.479999999999997, 1.0000000000000001e-05, 155.93000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.3100000000000001, 12.59, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 850.75999999999999, 116.43000000000001, 1.0000000000000001e-05, 10.747996856448379, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.8164395024487532, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.064109188827174091, 23865.57, 8291.0900000000001, 3439.8499999999999, 10998.93, 0.20000000000000001, 111.92, 0.11, 558.39999999999998, 20.489999999999998, 1382.3, 1.97, 1.0000000000000001e-05, 1.0000000000000001e-05, 1149.71, 30.039999999999999, 1.0000000000000001e-05, 0.26000000000000001, 1.0000000000000001e-05, 366.74965469545123, 353.94, 1822.2, 103.98, 5, 1.0000000000000001e-05, 1.0000000000000001e-05, 30.838436975394895, 29.572309059949443, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 19.338772002639388, 1.0000000000000001e-05, 11.994576160971249, 1.0000000000000001e-05, 8.2997060169579715, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.6283004948016497, 3.6227068151548352, 2.8811478312885934, 2.8212938122567506, 2.6965081838895912, 2.5358716906524594, 1.7364204840079893, 1.0863350587906697, 0.72871114173472773, 1.0000000000000001e-05, 0.25641831032536405, 0.076933186416250826, 0.0023079955924875249, 7.693318641625082e-05, 11350.33, 8618.9599999999991, 91.950000000000003, 0.0072186963993299278, 0.002350091068691241, 3.9168184478187353e-06, 519.83000000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [62076.970000000001, 15045.58, 1.3515373808654265, 0.033912781386720298, 21578.209999999999, 1.0000000000000001e-05, 283.29000000000002, 0.23000000000000001, 20982.259999999998, 5970.1099999999997, 3451.3499999999999, 62097.25, 4517.3800000000001, 80.469999999999999, 9573.2900000000009, 4511.75, 4519, 250.22, 78.260000000000005, 9.4199999999999999, 2988.4000000000001, 3039.0700000000002, 58.991024948548556, 1.0000000000000001e-05, 3901.71, 19.845596166898225, 1274.52, 1729.3499999999999, 1212.1300000000001, 1167.1199999999999, 453.51999999999998, 2605.23, 26673.779999999999, 133.77602519462863, 68.415207178133258, 50.439161211837998, 1.0000000000000001e-05, 0.55016346543330108, 763.89999999999998, 0.37866633568508845, 229.33000000000001, 1.0381656491672218, 128.30000000000001, 16085.49, 123.38, 1090.21, 120.92, 1528.24, 187.36000000000001, 207.22999999999999, 1.46, 15.405268642302293, 7.8456432993197742, 7.0217408280796212, 0.10232612557319422, 37461.419999999998, 26914.080000000002, 2.3399999999999999, 1079.0999999999999, 259.81, 0.17999999999999999, 746.25999999999999, 13, 1.0000000000000001e-05, 1388.51, 0.80000000000000004, 1.24, 210159.97, 224937.38, 72730.699999999997, 12328.76, 1.0000000000000001e-05, 243543.51999999999, 3315.6799999999998, 4924.4700000000003, 19046.810000000001, 24175.810000000001, 725.48000000000002, 146.81, 22159.400000000001, 2200.3800000000001, 794.19000000000005, 1.0000000000000001e-05, 1.0000000000000001e-05, 816.3487117970069, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 963.02999999999997, 188.2248080517281, 1.0000000000000001e-05, 1.0000000000000001e-05, 111.70568537269843, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 35.819248847139548, 34.895283201171502, 33.056835427595793, 12.037294375991337, 11.986828510430765, 8.2523544589484761, 1.0000000000000001e-05, 7.4201757228254968, 1.2508083323167136, 1.2193095034768939, 0.98526981822618998, 0.20321825057948228, 0.033869708429913721, 148906.92000000001, 3560.2399999999998, 5570.5, 7.0999999999999996, 345.5, 29.739999999999998, 112.29000000000001, 1.0000000000000001e-05, 171.96000000000001, 3.6699999999999999, 243.72999999999999, 2242.3299999999999, 12171.709999999999, 177.47, 351.48856510084266, 81.420000000000002, 421.64999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 113.7, 2224.1199999999999, 1.0000000000000001e-05, 23.149999999999999, 7120.0500000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.84999999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 30.413965817707524, 2245.1999999999998, 15.48, 15.52, 567.38, 58.030000000000001, 885.15999999999997, 1.0000000000000001e-05, 55, 1.0000000000000001e-05, 5.5, 361.24000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 37.359999999999999, 54.950000000000003, 642.22000000000003, 32.960000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 45.880000000000003, 128.3946934547422, 1.0000000000000001e-05, 151.65000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.79, 1.0000000000000001e-05, 9.3499999999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 886.48000000000002, 79.340000000000003, 1.0000000000000001e-05, 10.663312903812606, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.884544480841801, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.063541008680548128, 25247.439999999999, 8496.25, 3391.3099999999999, 10841.469999999999, 0.42999999999999999, 51.520000000000003, 0.27000000000000002, 427.67000000000002, 24.870000000000001, 2168.2399999999998, 3.0800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1229.0799999999999, 25.75, 1.0000000000000001e-05, 2.02, 1.0000000000000001e-05, 419.5188560172237, 357.69999999999999, 1610.26, 89.260000000000005, 7.0999999999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 34.749653483353562, 1.0000000000000001e-05, 33.393629121531539, 1.0000000000000001e-05, 1.0000000000000001e-05, 22.379909308868669, 1.0000000000000001e-05, 13.755721493604039, 1.0000000000000001e-05, 1.0000000000000001e-05, 9.3787585360113823, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.3673261445039886, 4.0999851751445329, 3.2626955316295536, 3.2538141315007549, 3.1872907030850475, 3.0038288396401578, 2.0169485547401189, 1.2647723291261266, 0.83964060237260252, 1.0000000000000001e-05, 0.29669971508707282, 0.087072550282339789, 0.0026121765084701934, 8.7072550282339778e-05, 11317.969999999999, 8342.2800000000007, 52.950000000000003, 0.004097534031225653, 0.001333977438272052, 2.2232957304534201e-06, 477.67000000000002],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [60801.550000000003, 14326.299999999999, 1.2807422562017468, 0.032206427230555237, 19040.66, 0.059999999999999998, 343.92000000000002, 0.22, 15244.049999999999, 5781.7700000000004, 3776.4899999999998, 57458.419999999998, 3897.3299999999999, 89.200000000000003, 9668.0799999999999, 4077.4200000000001, 4526.8199999999997, 287.83999999999997, 77.849999999999994, 19.640000000000001, 3349.9899999999998, 3181.27, 61.346022358766064, 1.0000000000000001e-05, 4305.0900000000001, 21.834494547434417, 1115, 1727.45, 867.36000000000001, 1239.8800000000001, 427.69, 1875.01, 9362.7099999999991, 46.723936889946366, 23.79661170747584, 17.558504404387499, 1.0000000000000001e-05, 0.48458660224113936, 727.51999999999998, 0.35746960513468384, 199.38999999999999, 0.89811174946001215, 137.78, 17248.880000000001, 89.689999999999998, 570.28999999999996, 114.09999999999999, 1505.97, 132.78, 227.61000000000001, 0.75, 10.90885087449829, 5.6335922915697791, 5.0026166553077385, 0.072452627550664034, 40050.43, 24432.77, 0.39000000000000001, 859.80999999999995, 500.11000000000001, 0.39000000000000001, 867.04999999999995, 21.309999999999999, 1.0000000000000001e-05, 870.20000000000005, 0.87, 1.3200000000000001, 209161.69, 281695.31, 72343.020000000004, 12303.07, 1.0000000000000001e-05, 217085.79999999999, 4297.8299999999999, 11541.629999999999, 22079.27, 24009.919999999998, 762.87, 168.13999999999999, 26670.880000000001, 2558.3600000000001, 1763.04, 1.0000000000000001e-05, 1.0000000000000001e-05, 1003.7028593705433, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1188.25, 228.1275090313776, 1.0000000000000001e-05, 1.0000000000000001e-05, 134.20135250897363, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 42.691478946565717, 41.488648876523705, 38.984931937251481, 14.542640459604364, 14.337538321302363, 9.8551168884114428, 9.1111109245709194, 1.0000000000000001e-05, 1.5206975274104468, 1.4708519878231081, 1.1656502003498133, 0.24514199797051803, 0.040856999661753005, 148170.44, 3150.5900000000001, 7107.7600000000002, 5.0999999999999996, 363.52999999999997, 21.469999999999999, 274.16000000000003, 1.0000000000000001e-05, 148.81, 5.0300000000000002, 224.72999999999999, 2726.1599999999999, 9694.8299999999999, 135.97999999999999, 71.950000000000003, 304.88355490708318, 417.11000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 123.38, 2811.5799999999999, 1.0000000000000001e-05, 23.07, 7410.6800000000003, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.2599999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 31.368023144788982, 2037.04, 46.920000000000002, 17.879999999999999, 629.13, 42.229999999999997, 871.95000000000005, 1.0000000000000001e-05, 59.789999999999999, 1.0000000000000001e-05, 4.0599999999999996, 424.55000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 36.840000000000003, 46.210000000000001, 660.47000000000003, 19.539999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 87.780000000000001, 1.0000000000000001e-05, 122.92075296123348, 161.05000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.6399999999999997, 1.0000000000000001e-05, 5.6399999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1020.1900000000001, 95.579999999999998, 1.0000000000000001e-05, 10.517144715219244, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.9541903061493544, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.062538039698647019, 24292.139999999999, 9127.2600000000002, 2673.9499999999998, 12925.24, 0.45000000000000001, 36.939999999999998, 0.44, 494.75999999999999, 14.119999999999999, 2416.8400000000001, 2.0699999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1237.8900000000001, 20.309999999999999, 1.6799999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 456.9717147551554, 336.70999999999998, 1731.3199999999999, 72.959999999999994, 0.71999999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 37.35527004576489, 1.0000000000000001e-05, 35.711316677867877, 1.0000000000000001e-05, 1.0000000000000001e-05, 24.676060223530818, 1.0000000000000001e-05, 14.991157149574983, 1.0000000000000001e-05, 1.0000000000000001e-05, 10.094882077949343, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.9245792172197955, 4.4199614366184123, 3.597468347191386, 3.5912714814491276, 3.4904315752796493, 3.1808699638822855, 2.2317636403122969, 1.3908677374688658, 0.92413107679058359, 1.0000000000000001e-05, 0.32937280339155373, 0.093891905185733676, 0.0028167571555720106, 9.3891905185733673e-05, 9846.4599999999991, 6965.5, 46.490000000000002, 0.0035418709186885804, 0.0011530778899691524, 1.921796483281921e-06, 499.33999999999997],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [53719.879999999997, 16684.349999999999, 1.4852303303355359, 0.037398782868949196, 17767.400000000001, 0.029999999999999999, 453.38999999999999, 0.27000000000000002, 21142.189999999999, 6201.0900000000001, 4050.52, 51702.720000000001, 3793.71, 74.609999999999999, 14696.790000000001, 4464.3199999999997, 4910.3699999999999, 386.76999999999998, 79.650000000000006, 49.869999999999997, 2945.25, 3389.6100000000001, 64.919293409001696, 1.0000000000000001e-05, 4299.8000000000002, 21.7565486380885, 952.02999999999997, 1930.5899999999999, 1022.08, 747.48000000000002, 432.19, 1395.0999999999999, 9367.3400000000001, 46.553553151978143, 23.687437396063395, 17.452164088988066, 1.0000000000000001e-05, 0.48416830592765497, 860.90999999999997, 0.41960847971789861, 192.31, 0.863773121592458, 140.25, 21797.299999999999, 85.540000000000006, 700.28999999999996, 178.78999999999999, 1569.3900000000001, 219.84, 176.21000000000001, 0.59999999999999998, 12.903493992766183, 6.5910801710809528, 5.9170679650409586, 0.083862302511179168, 43128.559999999998, 27453.82, 0.14000000000000001, 905.64999999999998, 1218.1500000000001, 2.2400000000000002, 976.09000000000003, 22.690000000000001, 1.0000000000000001e-05, 1015.42, 2, 1.8100000000000001, 212531.82999999999, 298648.84000000003, 74506.059999999998, 11577.110000000001, 1.0000000000000001e-05, 219434.34, 4797.6400000000003, 15076.52, 24950.790000000001, 24599.240000000002, 855.02999999999997, 211.16, 37541.5, 2651.3099999999999, 2219.27, 1.0000000000000001e-05, 1.0000000000000001e-05, 1399.78645343728, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1154.3199999999999, 313.22285588824775, 1.0000000000000001e-05, 1.0000000000000001e-05, 182.83177980116758, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 57.688911816154089, 55.869428632249885, 52.033640481794166, 19.919259048372364, 19.453484772959879, 13.3480954413526, 12.663692424419976, 1.0000000000000001e-05, 2.0901131350442368, 2.0129500498018329, 1.6618020966697358, 0.33549167496697219, 0.055915279161162026, 162239.17000000001, 3804.1300000000001, 10721.35, 1, 426.79000000000002, 27.170000000000002, 260.97000000000003, 1.0000000000000001e-05, 139.99000000000001, 16.420000000000002, 207.30000000000001, 1726.3299999999999, 9387.2800000000007, 128.71000000000001, 64.359999999999999, 272.39326867908756, 265.07999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 127.8, 3289.5500000000002, 1.0000000000000001e-05, 37.079999999999998, 7537.4099999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.5800000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 31.591548953913399, 2696.5599999999999, 53.789999999999999, 21.829999999999998, 709.35000000000002, 1.3500000000000001, 829.32000000000005, 1.0000000000000001e-05, 1.0000000000000001e-05, 56.700000000000003, 1.3700000000000001, 604.65999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 42.600000000000001, 51.789999999999999, 771.17999999999995, 1.0000000000000001e-05, 16.899999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 83.629999999999995, 1.0000000000000001e-05, 117.18114388428521, 161.61000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 30.199999999999999, 1.0000000000000001e-05, 0.60999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1576.9100000000001, 99.790000000000006, 1.0000000000000001e-05, 10.653843676143696, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.1018442006949027, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.062764472162533794, 25975.43, 11415.030000000001, 2716.9400000000001, 12260.639999999999, 0.83999999999999997, 34.109999999999999, 0.02, 414.05000000000001, 15.460000000000001, 2630.6900000000001, 1.0000000000000001e-05, 2.3900000000000001, 1.0000000000000001e-05, 1133.5999999999999, 27.579999999999998, 3.25, 1.0000000000000001e-05, 1.0000000000000001e-05, 447.59308990552148, 397.19, 1217.73, 67.640000000000001, 6.3099999999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 36.168919568839044, 1.0000000000000001e-05, 34.386036402611573, 1.0000000000000001e-05, 1.0000000000000001e-05, 24.538204413421685, 1.0000000000000001e-05, 14.592029388645454, 1.0000000000000001e-05, 1.0000000000000001e-05, 9.7733572957282533, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.879173507702415, 1.0000000000000001e-05, 4.2862805227767664, 3.636095951234624, 3.5525567537981466, 3.355870682625457, 2.9788966379230071, 2.2197102673266165, 1.367874645047676, 0.91505939874667863, 1.0000000000000001e-05, 0.32777975177366214, 0.091100542460717665, 0.0027330162738215301, 9.1100542460717667e-05, 7802.6199999999999, 8244.1800000000003, 61.060000000000002, 0.0045759144991165636, 0.0014897171456700693, 2.4828619094501156e-06, 513.83000000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [49851.620000000003, 14873.209999999999, 1.3164974940271013, 0.033219719758443129, 16323.620000000001, 1.0000000000000001e-05, 418.06999999999999, 0.25, 17390.369999999999, 4743.3999999999996, 3856.3099999999999, 48835.5, 4227.6899999999996, 69.950000000000003, 21765.919999999998, 4200.04, 5190.8400000000001, 404.87, 89.730000000000004, 44.200000000000003, 2995.0799999999999, 3037.96, 57.731783468765222, 1.0000000000000001e-05, 4429.9799999999996, 22.385534029852096, 1026.23, 1958.6700000000001, 931.44000000000005, 669.21000000000004, 449.25, 1764.9200000000001, 11115.959999999999, 55.119932336223158, 28.004570682072529, 20.679874219263763, 1.0000000000000001e-05, 0.53931512868560982, 821.88, 0.39794969649369455, 138.00999999999999, 0.61993498959225091, 163.77000000000001, 23575.240000000002, 87.670000000000002, 681.62, 284.85000000000002, 1673.6900000000001, 151.59, 235.31999999999999, 0.89000000000000001, 13.730548520549995, 6.9699495523411361, 6.3064579977438973, 0.087576500901408519, 42295.440000000002, 27800.880000000001, 0.34999999999999998, 1528.79, 1.0000000000000001e-05, 2.9500000000000002, 1382.6500000000001, 31.199999999999999, 1.0000000000000001e-05, 906.25999999999999, 2.29, 2.0899999999999999, 208699.56, 310120.15999999997, 73318.149999999994, 11994.370000000001, 1.0000000000000001e-05, 247124.81, 5906.0299999999997, 25542.400000000001, 28991.860000000001, 27523.389999999999, 850.60000000000002, 469.63999999999999, 37763.779999999999, 2387.5700000000002, 2483.8499999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1436.2868203722974, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1383.96, 314.97453808662686, 1.0000000000000001e-05, 183.12007176668288, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 57.304732715951616, 55.243662440102874, 50.975187024472945, 20.052378969945039, 19.420324923036755, 13.300150652261456, 12.919117179637318, 1.0000000000000001e-05, 2.1235440062199014, 2.0261750390648405, 1.8246831879578371, 0.33769583984414003, 0.05628263997402335, 163934.63, 4630.4799999999996, 16076.200000000001, 1.1599999999999999, 474.69, 39.359999999999999, 130.84, 1.0000000000000001e-05, 101.61, 8.7699999999999996, 162.84999999999999, 1948.98, 8511.1800000000003, 187.55000000000001, 43.280000000000001, 255.8375605065925, 369.45999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 99.010000000000005, 5866.6899999999996, 1.0000000000000001e-05, 16.469999999999999, 8547.8600000000006, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.2200000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 35.223048421781925, 3315.25, 53.32, 38.280000000000001, 732.53999999999996, 0.69999999999999996, 757.83000000000004, 1.0000000000000001e-05, 1.0000000000000001e-05, 59.030000000000001, 0.55000000000000004, 497.68000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 52.600000000000001, 97.109999999999999, 1062.0999999999999, 1.0000000000000001e-05, 18.690000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 132.08000000000001, 1.0000000000000001e-05, 113.14297307536992, 310.36000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 24.809999999999999, 1.0000000000000001e-05, 0.20999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1414.7, 117.98, 1.0000000000000001e-05, 10.519498249220725, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.1625393770088341, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.061159711087798017, 26139.790000000001, 10255.99, 2494.6300000000001, 12276.74, 1.27, 4.0899999999999999, 0.029999999999999999, 351.31999999999999, 17.079999999999998, 2232.48, 1.0000000000000001e-05, 4.0700000000000003, 1.0000000000000001e-05, 1233.9300000000001, 21.66, 4.8300000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 409.6662399433265, 666.97000000000003, 1291.1900000000001, 72.769999999999996, 3.0499999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 32.7432680208153, 1.0000000000000001e-05, 1.0000000000000001e-05, 30.973201963742216, 1.0000000000000001e-05, 22.859397309155259, 1.0000000000000001e-05, 13.165989555810617, 1.0000000000000001e-05, 1.0000000000000001e-05, 8.8415301530180983, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 5.4487279541328251, 1.0000000000000001e-05, 3.8842875247247668, 3.4340347438741614, 3.2814164861697992, 2.9756841886570014, 2.8637200634867734, 2.0632798564579948, 1.2544113536599448, 0.84762213726656432, 1.0000000000000001e-05, 0.30205524690757712, 0.082630350679134754, 0.0024789105203740429, 8.2630350679134751e-05, 5954, 8372.0400000000009, 84.840000000000003, 0.0062636103027898047, 0.0020391569081247328, 3.3985948468745548e-06, 662.83000000000004],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [45577.349999999999, 11588.67, 1.0190081563400089, 0.02579767484405085, 11933.27, 1.0000000000000001e-05, 359.92000000000002, 0.20000000000000001, 9467.6499999999996, 3135.3499999999999, 4103.2399999999998, 41513.989999999998, 4087.1500000000001, 78.590000000000003, 18764.900000000001, 4208.9099999999999, 4199.8400000000001, 408.72000000000003, 87.469999999999999, 19.609999999999999, 2574.8600000000001, 2631.5999999999999, 49.999957835346734, 1.0000000000000001e-05, 3392.3699999999999, 17.123413780338545, 1152.8299999999999, 1790.97, 629.24000000000001, 819.14999999999998, 481.58999999999997, 393.85000000000002, 6866.2700000000004, 33.996933702070045, 17.231935491186828, 12.800238895004187, 1.0000000000000001e-05, 0.57546240934733461, 874.95000000000005, 0.42079565496412047, 139.37, 0.62674633481355713, 164.90000000000001, 23239.299999999999, 104.09, 674.50999999999999, 279.99000000000001, 1835.0699999999999, 162.74000000000001, 288.51999999999998, 0.20999999999999999, 14.668152831674016, 7.3095252799940509, 6.64856266972195, 0.091951675961823923, 41615.139999999999, 26742.040000000001, 0.11, 1244.78, 1.0000000000000001e-05, 13.77, 31.07, 1980.29, 1.0000000000000001e-05, 340.31999999999999, 0.93999999999999995, 4.8399999999999999, 205232.69, 330526.71999999997, 74221.020000000004, 11062.01, 1.0000000000000001e-05, 266444.90999999997, 7461.9200000000001, 45717.550000000003, 30525.169999999998, 23881.07, 810.95000000000005, 277.83999999999997, 37958.830000000002, 2611.46, 3115.7800000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1466.6869850044336, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 375.95999999999998, 1.0000000000000001e-05, 1317.6500000000001, 314.58327306206422, 1.0000000000000001e-05, 182.42253720918055, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 56.605688042221303, 54.260693496864491, 49.613545652652576, 20.065486979932977, 19.289834938007264, 13.206377934764294, 13.063197979350681, 1.0000000000000001e-05, 2.1651740501720016, 2.0293222027126285, 1.9752069439736251, 0.33822036711877135, 0.056370061186461901, 155861.94, 8076.0699999999997, 17878.84, 0.46000000000000002, 728.86000000000001, 18.07, 110.25, 1.0000000000000001e-05, 36.439999999999998, 11.09, 112.34999999999999, 2122.7600000000002, 6499.6499999999996, 201.59999999999999, 207.42642899208792, 74.180000000000007, 281.39999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 126.02, 5501.04, 1.0000000000000001e-05, 16.27, 9824.2900000000009, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.4500000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 40.003149701531768, 3779.6799999999998, 56.68, 20.02, 660.33000000000004, 0.23000000000000001, 650.36000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 81.620000000000005, 0.47999999999999998, 563.96000000000004, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 40.060000000000002, 82.230000000000004, 981.46000000000004, 1.0000000000000001e-05, 7.5099999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 129.90000000000001, 1.0000000000000001e-05, 106.36980856035015, 339.39999999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 62.329999999999998, 1.0000000000000001e-05, 0.92000000000000004, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1293.1199999999999, 130.63999999999999, 1.0000000000000001e-05, 9.6887508373924778, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.0052369319914676, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.05558110133176971, 23264.650000000001, 10530.790000000001, 1706.29, 11490.77, 101.34, 23.07, 1.0000000000000001e-05, 400.80000000000001, 16.309999999999999, 2646.98, 1.0000000000000001e-05, 3.1499999999999999, 1.0000000000000001e-05, 2153.71, 28.100000000000001, 1.2, 1.0000000000000001e-05, 1.0000000000000001e-05, 530.88714687568461, 898.79999999999995, 1736.6600000000001, 105.31, 5.3499999999999996, 1.0000000000000001e-05, 1.0000000000000001e-05, 41.995335039378553, 1.0000000000000001e-05, 1.0000000000000001e-05, 39.527497867342504, 30.164784537906275, 1.0000000000000001e-05, 1.0000000000000001e-05, 16.718175263119456, 1.0000000000000001e-05, 1.0000000000000001e-05, 11.326852834659899, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.1492469302154049, 1.0000000000000001e-05, 4.9856883845630087, 4.5836646960309864, 4.2883588645973996, 3.8646730438782311, 3.6387072728280079, 2.7152527014284464, 1.6331017743735476, 1.1128920411145984, 1.0000000000000001e-05, 0.39395348242308664, 0.10618692248600718, 0.0031856076745802155, 0.00010618692248600717, 6697.1300000000001, 8808.5599999999995, 135.33000000000001, 0.0098446774412423443, 0.0032049953688255053, 5.341658948042509e-06, 1184.5899999999999],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [33000.339999999997, 8194.9200000000001, 0.71589209200854831, 0.018183695504408137, 8607.75, 0.040000000000000001, 335.49000000000001, 0.070000000000000007, 4375.2600000000002, 253.16, 3285.21, 23469.18, 3379.1300000000001, 80.379999999999995, 14416.790000000001, 3959.7199999999998, 3186.73, 277.98000000000002, 43.729999999999997, 3.8199999999999998, 2232.73, 1224.6600000000001, 23.254228878667025, 1.0000000000000001e-05, 2680.8200000000002, 13.512352507250599, 792.47000000000003, 1530.75, 668.55999999999995, 676.28999999999996, 347.61000000000001, 440.70999999999998, 4994.6899999999996, 24.728154507218331, 12.504873104308972, 9.3408712613244376, 1.0000000000000001e-05, 0.5106139631298463, 936.17999999999995, 0.44760036248890456, 138.68000000000001, 0.62452956512649049, 135.63999999999999, 18685.389999999999, 121.54000000000001, 572.77999999999997, 217.59999999999999, 1472.9300000000001, 146.83000000000001, 191.43000000000001, 0.66000000000000003, 12.194357236788248, 5.9963206624423986, 5.4794236381898092, 0.075548912630088991, 44363.5, 26399.119999999999, 0.02, 3301.5599999999999, 1.0000000000000001e-05, 21.030000000000001, 33.259999999999998, 2293.0100000000002, 1.0000000000000001e-05, 530.29999999999995, 0.029999999999999999, 13.109999999999999, 191439.48000000001, 335176.81, 69735.279999999999, 6046.1899999999996, 1.0000000000000001e-05, 238732.06, 8828.2099999999991, 51058.660000000003, 32544.599999999999, 26325.560000000001, 772.08000000000004, 562.10000000000002, 39798.360000000001, 2864.3299999999999, 3649.4299999999998, 1.0000000000000001e-05, 1.0000000000000001e-05, 1579.6664013599636, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1322.76, 1.0000000000000001e-05, 1268.52, 332.6089351310348, 1.0000000000000001e-05, 193.17142249346671, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 59.278007589495417, 56.6179366313687, 50.873708167379895, 21.194797351988552, 20.285274657617869, 13.883473793769705, 13.869774368772635, 1.0000000000000001e-05, 2.3140115701572483, 2.1758260658389776, 2.1442578256283382, 0.35737630427138967, 0.059562717378564951, 136127.44, 9180.75, 18900.52, 0.69999999999999996, 857.52999999999997, 40.390000000000001, 38.219999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 37.399999999999999, 215.65000000000001, 2823.3200000000002, 6133.8500000000004, 215.65000000000001, 213.90900660218426, 127.23, 65.290000000000006, 1.0000000000000001e-05, 1.0000000000000001e-05, 80.310000000000002, 2325.73, 1.0000000000000001e-05, 26.41, 10274.780000000001, 13.24, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.9399999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 41.3610313846536, 2165.0500000000002, 59.880000000000003, 11.529999999999999, 582.35000000000002, 0.01, 922.10000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 52.479999999999997, 1.0000000000000001e-05, 161.59999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 27.530000000000001, 108.94, 985.99000000000001, 1.0000000000000001e-05, 0.32000000000000001, 1.0000000000000001e-05, 86.25, 1.0000000000000001e-05, 1.0000000000000001e-05, 106.99657305463599, 280.48000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 64.719999999999999, 1.0000000000000001e-05, 0.27000000000000002, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1310.73, 148.94, 1.0000000000000001e-05, 9.5792906679643064, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.0562049938332767, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.054211030818027889, 19686.599999999999, 6404.9700000000003, 1963.4200000000001, 11688.59, 87.219999999999999, 0.20000000000000001, 1.0000000000000001e-05, 291.10000000000002, 11.109999999999999, 2619, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.53000000000000003, 2365.5599999999999, 27.969999999999999, 0.029999999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 524.07183062183992, 1267.21, 1521.27, 90.049999999999997, 1.3799999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 41.186262933402318, 1.0000000000000001e-05, 38.557638254193996, 30.289874008827695, 1.0000000000000001e-05, 1.0000000000000001e-05, 16.129955572820602, 1.0000000000000001e-05, 1.0000000000000001e-05, 11.064770391392555, 1.0000000000000001e-05, 1.0000000000000001e-05, 7.1499923752225616, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.8791587942851535, 4.6205748291687829, 4.2689256205685, 3.8657469986298101, 3.3089170351002326, 2.7225227212916496, 1.6223957714728852, 1.1118381801229484, 1.0000000000000001e-05, 0.39000999408554149, 0.1040998249260754, 0.0031229947477822624, 0.0001040998249260754, 5137.3699999999999, 6821.0900000000001, 183.34, 0.013173704741753054, 0.0042887807081127679, 7.1479678468546127e-06, 1189.76],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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
            "title": "Coal imports",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["DEU", "FRA", "SPM", "ATF", "ITA", "MLT", "GRC", "CYP", "ESP", "PRT", "AUT", "NLD", "BEL", "LUX", "POL", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "DNK", "GRL", "FRO", "FIN", "ALA", "ROU", "HUN", "BGR", "HRV", "SVN", "IRL", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "TUR", "RUS", "KAZ", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "SAU", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [42753.370000000003, 8904.1700000000001, 0.77206087502771681, 0.019687060136703356, 8714.3999999999996, 0.01, 293.64999999999998, 0.070000000000000007, 4888.6800000000003, 44.840000000000003, 3412.8299999999999, 33895.900000000001, 3452.77, 65.810000000000002, 14048.25, 5255.3500000000004, 3884.7800000000002, 328.13, 40.630000000000003, 5.7999999999999998, 1436.03, 853.48000000000002, 16.215101292908233, 1.0000000000000001e-05, 2443.8200000000002, 12.292275446908032, 878.13999999999999, 1373.21, 948.78999999999996, 747.05999999999995, 273.81999999999999, 1909.5699999999999, 5079.1099999999997, 25.242787592371297, 12.732740557175379, 9.5473602743949932, 1.0000000000000001e-05, 0.4472011863273781, 972.42999999999995, 0.46245228832613455, 153.5, 0.69095355461387653, 197.49000000000001, 20673.630000000001, 140.25, 713.5, 110.09, 1759.5999999999999, 140.63, 437.16000000000003, 0.32000000000000001, 14.850428277336551, 7.3010878750567265, 6.4909508110271492, 0.090849054618895711, 40252.82, 27245.84, 0.20999999999999999, 2905.4699999999998, 1.0000000000000001e-05, 27.989999999999998, 37.590000000000003, 1948.4300000000001, 1.0000000000000001e-05, 404.37, 0.10000000000000001, 20.07, 201137.09, 356794.19, 74296.779999999999, 7201.8999999999996, 1.0000000000000001e-05, 210811.22, 14812.379999999999, 44010.639999999999, 34435.059999999998, 26531.66, 824.08000000000004, 87.069999999999993, 38673.220000000001, 2429.9499999999998, 2854.1399999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1500.8107837738876, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1429.3800000000001, 1.0000000000000001e-05, 1036.8299999999999, 311.01601450936801, 1.0000000000000001e-05, 182.00181583325761, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 54.718374057241228, 52.221726659931655, 45.983442958372734, 19.767533689383864, 18.899932044860215, 13.015692063712294, 12.925096888787657, 1.0000000000000001e-05, 2.153163850662799, 2.0553432936889595, 2.0008750290103445, 0.33347917150172407, 0.055579861916954021, 138468.28, 7422.3000000000002, 21610.73, 5.3200000000000003, 553.45000000000005, 43.920000000000002, 46.299999999999997, 1.0000000000000001e-05, 1.0000000000000001e-05, 41.950000000000003, 190.74000000000001, 2683.2199999999998, 7087.3500000000004, 190.74000000000001, 232.18022913335309, 63.979999999999997, 122.73, 1.0000000000000001e-05, 1.0000000000000001e-05, 83.930000000000007, 3599.0500000000002, 1.0000000000000001e-05, 37.759999999999998, 12640.58, 26.300000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 2.8799999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 50.093646986667835, 3658.21, 62.770000000000003, 15.220000000000001, 509.30000000000001, 0.29999999999999999, 1051.8, 1.0000000000000001e-05, 1.0000000000000001e-05, 113.20999999999999, 1.0000000000000001e-05, 471.94999999999999, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 15, 3.6099999999999999, 1.0000000000000001e-05, 1043.97, 0.029999999999999999, 1.0000000000000001e-05, 173.83000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 127.09868584172268, 215.27000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.97, 1.0000000000000001e-05, 0.22, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 841.94000000000005, 197.5, 1.0000000000000001e-05, 11.300958261033969, 1.0000000000000001e-05, 1.0000000000000001e-05, 3.6964639545054427, 1.0000000000000001e-05, 1.0000000000000001e-05, 0.06320556360847987, 24265.330000000002, 6448.1300000000001, 2967.9299999999998, 13237.77, 0.90000000000000002, 4.79, 1.0000000000000001e-05, 245.91999999999999, 20.739999999999998, 2557.21, 1.0000000000000001e-05, 1.0000000000000001e-05, 2312.04, 1.6699999999999999, 32.210000000000001, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 499.5558922875453, 1069.3699999999999, 1383.54, 106.29000000000001, 0.16, 1.0000000000000001e-05, 1.0000000000000001e-05, 1.0000000000000001e-05, 39.100806305543536, 1.0000000000000001e-05, 36.409960868312616, 29.366156719153899, 1.0000000000000001e-05, 1.0000000000000001e-05, 15.042887799726206, 1.0000000000000001e-05, 1.0000000000000001e-05, 10.452195206091877, 1.0000000000000001e-05, 1.0000000000000001e-05, 6.9215311373258661, 1.0000000000000001e-05, 1.0000000000000001e-05, 4.6167564411303914, 4.4666918646379026, 4.1041674403744723, 3.7327576135555662, 2.9579505107180388, 2.6365951182949812, 1.5552416272935237, 1.0723199984033902, 1.0000000000000001e-05, 0.37160728020902833, 0.098726695060847053, 0.0029618008518254115, 9.8726695060847057e-05, 5389.1899999999996, 6766.9099999999999, 123.98, 0.00889591103307979, 0.0028961186217297198, 4.8268643695495331e-06, 2033.98],
          "text": ["Germany", "France", "Saint Pierre and Miquelon", "French Southern Territories", "Italy", "Malta", "Greece", "Cyprus", "Spain", "Portugal", "Austria", "Netherlands", "Belgium", "Luxembourg", "Poland", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Denmark", "Greenland", "Faroe Islands", "Finland", "Aland Islands", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "Ireland", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Turkey", "Russian Federation", "Kazakhstan", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Saudi Arabia", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 356800,
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

  
