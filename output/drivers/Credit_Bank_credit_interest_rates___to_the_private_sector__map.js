(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('Credit_Bank_credit_interest_rates___to_the_private_sector__map') 

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
    "b55c419a3c2f": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "b55c419a3c2f",
  "attrs": {
    "b55c419a3c2f": {
      "locations": {},
      "z": {},
      "text": {},
      "colorscale": [
        ["0", "#de5842"],
        ["1e-05", "#188AF0"],
        ["1", "#00D4B0"]
      ],
      "zmin": 0,
      "zmax": 110,
      "colorbar": {
        "title": "Interest rates on bank credit to the private sector"
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
        "title": "Interest rates on bank credit to the private sector",
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
      "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
      "z": [5.8300000000000001, 5.8499999999999996, 3, 5.9500000000000002, 5.9500000000000002, 5.9500000000000002, 5.9500000000000002, 5.9500000000000002, 5.0199999999999996, 25.43, 9.5999999999999996, 8.5399999999999991, 11.58, 17.406764165511948, 3.7000000000000002, 3.7000000000000002, 3.7000000000000002, 3.7000000000000002, 3.7000000000000002, 11.460000000000001, 4.3499999999999996, 4.3499999999999996, 3.3399999999999999, 3.3399999999999999, 11.949999999999999, 17.890000000000001, 14.27, 2.5899999999999999, 10.869999999999999, 23.760000000000002, 19.289999999999999, 12.52, 12.41, 10.978980600058678, 10.978980600058678, 7.4900000000000002, 10.978980600058678, 12.98, 16.199999999999999, 18.932035693698246, 23.98, 15.460000000000001, 16.73, 24.050000000000001, 18.932035693698246, 20.829999999999998, 31.91, 1.8200000000000001, 5.3099999999999996, 5.3086257338829776, 5, 6, 11.460000000000001, 16.93, 9.4800000000000004, 9.4700000000000006, 4.5499999999999998, 5.3099999999999996, 18.460000000000001, 6.2999999999999998, 10.35, 14.211946306555184, 13.359999999999999, 30.5, 14.211946306555184, 7.5999999999999996, 10, 5.5, 10.26, 14.211946306555184, 14.211946306555184, 10.550000000000001, 11.279999999999999, 14.211946306555184, 15, 9.9299999999999997, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 6.2400000000000002, 12.039999999999999, 7.2599999999999998, 17.894148518025464, 17.969999999999999, 15.19, 16.649999999999999, 15, 18, 13.411308655835613, 4.4199999999999999, 9.3000000000000007, 13.43, 13.411308655835613, 7.2800000000000002, 8.3900000000000006, 5.4199999999999999, 8.3000000000000007, 6.1799999999999997, 13.529999999999999, 8.1300000000000008, 9.2003687983454885, 9.2003687983454885, 10.789999999999999, 8.6799999999999997, 9.2003687983454885, 9.2003687983454885, 7, 21, 9.2003687983454885, 14.960000000000001, 20.710000000000001, 46.439999999999998, 7, 14.52, 16.57, 18.940000000000001, 23.145248856870012, 24.690000000000001, 7.0499999999999998, 24.25, 96.109999999999999, 23.145248856870012, 8.8699999999999992, 11.6, 48.920000000000002, 40.57, 7.0499999999999998, 23.145248856870012, 23.145248856870012, 15.99, 8.0399999999999991, 18.23, 23.145248856870012, 8.7599999999999998, 20, 23.145248856870012, 23.145248856870012, 17.059999999999999, 23.145248856870012, 16.010000000000002, 14.699999999999999, 16.399999999999999, 29.329999999999998, 23.145248856870012, 10.369999999999999, 21, 14.630000000000001, 23.145248856870012, 23.145248856870012, 23.145248856870012, 11.83, 10.800000000000001, 23.145248856870012, 29.59, 10.619999999999999, 23.145248856870012, 67.079999999999998, 7.0199999999999996, 10.56, 6.1799999999999997, 15.19, 25.190000000000001, 58.939999999999998, 21.02, 22.202180550057864, 14.98, 22.202180550057864, 17.66, 31.390000000000001, 23.210000000000001, 20.800000000000001, 22.202180550057864, 57.770000000000003, 15.550000000000001, 25.579999999999998, 22.202180550057864, 9.9299999999999997, 18.890000000000001, 11.17, 14.99, 21.039999999999999, 22.202180550057864, 22.202180550057864, 6, 8.5, 14.35, 22.202180550057864, 15, 22.202180550057864, 11.83, 12.050000000000001, 22.202180550057864, 10.699999999999999, 12.82, 11.5, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 4.1200000000000001, 4.6900000000000004, 6.6100000000000003, 6.6100000000000003, 6.6100000000000003, 6.6100000000000003, 7],
      "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
      "zmin": 0,
      "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "ZWE", "MWI", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "REU", "DJI", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BRB", "BLZ", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [5.8300000000000001, 5.8499999999999996, 3, 5.9500000000000002, 5.9500000000000002, 5.9500000000000002, 5.9500000000000002, 5.9500000000000002, 5.0199999999999996, 25.43, 9.5999999999999996, 8.5399999999999991, 11.58, 17.406764165511948, 3.7000000000000002, 3.7000000000000002, 3.7000000000000002, 3.7000000000000002, 3.7000000000000002, 11.460000000000001, 4.3499999999999996, 4.3499999999999996, 3.3399999999999999, 3.3399999999999999, 11.949999999999999, 17.890000000000001, 14.27, 2.5899999999999999, 10.869999999999999, 23.760000000000002, 19.289999999999999, 12.52, 12.41, 10.978980600058678, 10.978980600058678, 7.4900000000000002, 10.978980600058678, 12.98, 16.199999999999999, 18.932035693698246, 23.98, 15.460000000000001, 16.73, 24.050000000000001, 18.932035693698246, 20.829999999999998, 31.91, 1.8200000000000001, 5.3099999999999996, 5.3086257338829776, 5, 6, 11.460000000000001, 16.93, 9.4800000000000004, 9.4700000000000006, 4.5499999999999998, 5.3099999999999996, 18.460000000000001, 6.2999999999999998, 10.35, 14.211946306555184, 13.359999999999999, 30.5, 14.211946306555184, 7.5999999999999996, 10, 5.5, 10.26, 14.211946306555184, 14.211946306555184, 10.550000000000001, 11.279999999999999, 14.211946306555184, 15, 9.9299999999999997, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 14.211946306555184, 6.2400000000000002, 12.039999999999999, 7.2599999999999998, 17.894148518025464, 17.969999999999999, 15.19, 16.649999999999999, 15, 18, 13.411308655835613, 4.4199999999999999, 9.3000000000000007, 13.43, 13.411308655835613, 7.2800000000000002, 8.3900000000000006, 5.4199999999999999, 8.3000000000000007, 6.1799999999999997, 13.529999999999999, 8.1300000000000008, 9.2003687983454885, 9.2003687983454885, 10.789999999999999, 8.6799999999999997, 9.2003687983454885, 9.2003687983454885, 7, 21, 9.2003687983454885, 14.960000000000001, 20.710000000000001, 46.439999999999998, 7, 14.52, 16.57, 18.940000000000001, 23.145248856870012, 24.690000000000001, 7.0499999999999998, 24.25, 96.109999999999999, 23.145248856870012, 8.8699999999999992, 11.6, 48.920000000000002, 40.57, 7.0499999999999998, 23.145248856870012, 23.145248856870012, 15.99, 8.0399999999999991, 18.23, 23.145248856870012, 8.7599999999999998, 20, 23.145248856870012, 23.145248856870012, 17.059999999999999, 23.145248856870012, 16.010000000000002, 14.699999999999999, 16.399999999999999, 29.329999999999998, 23.145248856870012, 10.369999999999999, 21, 14.630000000000001, 23.145248856870012, 23.145248856870012, 23.145248856870012, 11.83, 10.800000000000001, 23.145248856870012, 29.59, 10.619999999999999, 23.145248856870012, 67.079999999999998, 7.0199999999999996, 10.56, 6.1799999999999997, 15.19, 25.190000000000001, 58.939999999999998, 21.02, 22.202180550057864, 14.98, 22.202180550057864, 17.66, 31.390000000000001, 23.210000000000001, 20.800000000000001, 22.202180550057864, 57.770000000000003, 15.550000000000001, 25.579999999999998, 22.202180550057864, 9.9299999999999997, 18.890000000000001, 11.17, 14.99, 21.039999999999999, 22.202180550057864, 22.202180550057864, 6, 8.5, 14.35, 22.202180550057864, 15, 22.202180550057864, 11.83, 12.050000000000001, 22.202180550057864, 10.699999999999999, 12.82, 11.5, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 22.202180550057864, 4.1200000000000001, 4.6900000000000004, 6.6100000000000003, 6.6100000000000003, 6.6100000000000003, 6.6100000000000003, 7],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Zimbabwe", "Malawi", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Reunion", "Djibouti", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Barbados", "Belize", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NFK", "NIU", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TUN", "TCD", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "MDG", "AGO", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "LSO", "NAM", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "MTQ", "GLP", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "KNA", "CYM", "MAF", "SXM", "VGB", "TCA", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [5.5099999999999998, 5.3200000000000003, 2.75, 6.0300000000000002, 6.0300000000000002, 6.0300000000000002, 6.0300000000000002, 6.0300000000000002, 4.1799999999999997, 25.609999999999999, 12.82, 8.8699999999999992, 11.75, 18.310555168964434, 4.3799999999999999, 4.3799999999999999, 4.3799999999999999, 4.3799999999999999, 4.3799999999999999, 10.92, 4.3499999999999996, 4.3499999999999996, 3.3399999999999999, 3.3399999999999999, 12.02, 17.399999999999999, 11.76, 3.4500000000000002, 10.279999999999999, 22.09, 20.940000000000001, 12.52, 12.41, 11.133837206815265, 11.133837206815265, 7.1399999999999997, 11.133837206815265, 11.44, 16.199999999999999, 18.037803718181358, 16.91, 15.720000000000001, 20.309999999999999, 23.34, 18.037803718181358, 18.629999999999999, 31.469999999999999, 1.77, 5.5800000000000001, 5.5772353237886332, 5.0199999999999996, 6.0099999999999998, 10.92, 14.119999999999999, 9.7200000000000006, 10.08, 4.5499999999999998, 5.2999999999999998, 18.460000000000001, 6.0499999999999998, 9.4700000000000006, 13.888608969072155, 13.25, 29.25, 13.888608969072155, 7.1699999999999999, 10, 5.5, 10.26, 13.888608969072155, 13.888608969072155, 10.550000000000001, 11.23, 13.888608969072155, 15.380000000000001, 9.9299999999999997, 13.888608969072155, 13.888608969072155, 13.888608969072155, 13.888608969072155, 13.888608969072155, 13.888608969072155, 13.888608969072155, 13.888608969072155, 13.888608969072155, 13.888608969072155, 13.888608969072155, 13.888608969072155, 13.888608969072155, 13.888608969072155, 5.9000000000000004, 10.4, 7.2599999999999998, 17.890197435913741, 17.969999999999999, 15, 16.649999999999999, 13.27, 18.5, 12.693028077354112, 4.4199999999999999, 8.2599999999999998, 10.81, 12.693028077354112, 7.2800000000000002, 7.9400000000000004, 5.6399999999999997, 7.9000000000000004, 6.1799999999999997, 13.380000000000001, 8, 9.0680101419652654, 9.0680101419652654, 10.789999999999999, 8.6799999999999997, 9.0680101419652654, 9.0680101419652654, 6.0800000000000001, 21, 9.0680101419652654, 11.289999999999999, 19.18, 46.439999999999998, 7, 14.140000000000001, 12.529999999999999, 20.600000000000001, 20.881092623465253, 22.079999999999998, 7.0499999999999998, 24.559999999999999, 82.329999999999998, 20.881092623465253, 8.8699999999999992, 36.829999999999998, 11.6, 30.73, 7.0499999999999998, 20.881092623465253, 20.881092623465253, 15.99, 8.0399999999999991, 18.25, 20.881092623465253, 8.7599999999999998, 22.079999999999998, 20.881092623465253, 20.881092623465253, 18.100000000000001, 20.881092623465253, 12.380000000000001, 11.390000000000001, 15.75, 36.5, 20.881092623465253, 10.369999999999999, 21, 11.289999999999999, 20.881092623465253, 20.881092623465253, 20.881092623465253, 11, 10.800000000000001, 20.881092623465253, 29.77, 9.9900000000000002, 20.881092623465253, 54.920000000000002, 7.4400000000000004, 10.56, 5.1299999999999999, 15.08, 18.5, 23.68, 24.670000000000002, 21.661624064229333, 13.81, 21.661624064229333, 14.470000000000001, 32.630000000000003, 25.199999999999999, 19.879999999999999, 21.661624064229333, 38.770000000000003, 13.49, 23.43, 21.661624064229333, 8.8200000000000003, 18.140000000000001, 9.3100000000000005, 14.539999999999999, 20.440000000000001, 21.661624064229333, 21.661624064229333, 6, 13.94, 8.3300000000000001, 21.661624064229333, 11.07, 21.661624064229333, 9.6899999999999995, 10.18, 21.661624064229333, 9.5999999999999996, 11.960000000000001, 8.9399999999999995, 21.661624064229333, 21.661624064229333, 21.661624064229333, 21.661624064229333, 21.661624064229333, 21.661624064229333, 21.661624064229333, 21.661624064229333, 21.661624064229333, 21.661624064229333, 21.661624064229333, 21.661624064229333, 21.661624064229333, 21.661624064229333, 21.661624064229333, 4.3399999999999999, 4, 7.0499999999999998, 7.0499999999999998, 7.0499999999999998, 7.0499999999999998, 7.0999999999999996],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Norfolk Island", "Niue", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Tunisia", "Chad", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Madagascar", "Angola", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Lesotho", "Namibia", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Martinique", "Guadeloupe", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Cayman Islands", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Turks and Caicos Islands", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "LBN", "ARE", "PSE", "OMN", "KWT", "BHR", "QAT", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [5.3099999999999996, 5.5099999999999998, 2.77, 5.7800000000000002, 5.7800000000000002, 5.7800000000000002, 5.7800000000000002, 5.7800000000000002, 3.5299999999999998, 19.600000000000001, 8.5399999999999991, 8.6600000000000001, 11.19, 14.260615958869481, 4.6500000000000004, 4.6500000000000004, 4.6500000000000004, 4.6500000000000004, 4.6500000000000004, 10.75, 4.3499999999999996, 4.3499999999999996, 3.3399999999999999, 3.3399999999999999, 14.779999999999999, 16.170000000000002, 13.07, 3.5, 9.6099999999999994, 17.550000000000001, 19.260000000000002, 12.52, 12.41, 10.038750399677635, 10.038750399677635, 7.1799999999999997, 10.038750399677635, 10.68, 16.199999999999999, 17.464489855262716, 11.359999999999999, 17.030000000000001, 23.280000000000001, 21.5, 17.464489855262716, 17.98, 30.57, 1.6799999999999999, 5.5800000000000001, 5.5838049851308913, 6.21, 7.0499999999999998, 10.75, 14.050000000000001, 11.02, 10.18, 4.7199999999999998, 5.2999999999999998, 18.460000000000001, 5.9500000000000002, 10.76, 13.839956223402638, 11.470000000000001, 26.829999999999998, 13.839956223402638, 6.7800000000000002, 9.25, 5.5, 10.26, 13.839956223402638, 13.839956223402638, 10.550000000000001, 11.43, 13.839956223402638, 16.379999999999999, 9.9299999999999997, 13.839956223402638, 13.839956223402638, 13.839956223402638, 13.839956223402638, 13.839956223402638, 13.839956223402638, 13.839956223402638, 13.839956223402638, 13.839956223402638, 13.839956223402638, 13.839956223402638, 13.839956223402638, 13.839956223402638, 13.839956223402638, 5.5899999999999999, 10.609999999999999, 9.0700000000000003, 17.878376607009724, 17.969999999999999, 14.5, 16, 13.42, 18, 12.591223906510244, 4.4199999999999999, 7.6100000000000003, 10.640000000000001, 12.591223906510244, 7.3399999999999999, 7.2800000000000002, 7.5, 7.8200000000000003, 6.6500000000000004, 13.140000000000001, 8, 9.1697808941641732, 9.1697808941641732, 10.789999999999999, 8.6799999999999997, 9.1697808941641732, 9.1697808941641732, 6.1299999999999999, 23.079999999999998, 9.1697808941641732, 10.630000000000001, 17.949999999999999, 46.439999999999998, 7, 15.25, 12.880000000000001, 19.649999999999999, 19.732712238955369, 19.469999999999999, 7.0499999999999998, 67.719999999999999, 25.879999999999999, 19.732712238955369, 8.8699999999999992, 33.079999999999998, 11.6, 28.210000000000001, 7.0499999999999998, 19.732712238955369, 19.732712238955369, 15.779999999999999, 8.0399999999999991, 19.732712238955369, 18.440000000000001, 8.7599999999999998, 24.579999999999998, 19.732712238955369, 19.732712238955369, 17.030000000000001, 19.732712238955369, 10.609999999999999, 11.720000000000001, 15.74, 34.920000000000002, 19.732712238955369, 10.369999999999999, 21.039999999999999, 10.630000000000001, 19.732712238955369, 19.732712238955369, 19.732712238955369, 11, 10.800000000000001, 19.732712238955369, 31.199999999999999, 9.7699999999999996, 19.732712238955369, 55.380000000000003, 9.6899999999999995, 10.56, 6.6799999999999997, 14.56, 16.809999999999999, 13.609999999999999, 25.530000000000001, 20.669141918619879, 13.029999999999999, 20.669141918619879, 16.620000000000001, 24.109999999999999, 23.199999999999999, 18.829999999999998, 20.669141918619879, 34.57, 12.1, 24.66, 20.669141918619879, 8.6600000000000001, 17.359999999999999, 9.0999999999999996, 14.539999999999999, 17.399999999999999, 20.669141918619879, 20.669141918619879, 5.54, 14.26, 9.1699999999999999, 20.669141918619879, 10.609999999999999, 20.669141918619879, 9.5800000000000001, 10.07, 20.669141918619879, 11, 11.390000000000001, 9.9199999999999999, 20.669141918619879, 20.669141918619879, 20.669141918619879, 20.669141918619879, 20.669141918619879, 20.669141918619879, 20.669141918619879, 20.669141918619879, 20.669141918619879, 20.669141918619879, 20.669141918619879, 20.669141918619879, 20.669141918619879, 20.669141918619879, 20.669141918619879, 6.1900000000000004, 4.4199999999999999, 7.2599999999999998, 7.2599999999999998, 7.2599999999999998, 7.2599999999999998, 7.7599999999999998],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "Lebanon", "United Arab Emirates", "Palestine, State of", "Oman", "Kuwait", "Bahrain", "Qatar", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [5.6200000000000001, 5.6500000000000004, 3.54, 5.5899999999999999, 5.5899999999999999, 5.5899999999999999, 5.5899999999999999, 5.5899999999999999, 3.6800000000000002, 13.98, 8.0800000000000001, 8.8900000000000006, 9.9299999999999997, 11.303351634148777, 4.6399999999999997, 4.6399999999999997, 4.6399999999999997, 4.6399999999999997, 4.6399999999999997, 11.19, 4.3499999999999996, 4.3499999999999996, 3.3399999999999999, 3.3399999999999999, 17.91, 15.17, 12.94, 5.1200000000000001, 8.0099999999999998, 17.059999999999999, 18.129999999999999, 11.56, 11.15, 10.063219894634914, 10.063219894634914, 6.71, 10.063219894634914, 10.43, 16.199999999999999, 17.219750112669594, 8.8399999999999999, 17.859999999999999, 24.16, 23.07, 17.219750112669594, 16.530000000000001, 26.93, 1.6599999999999999, 6.1200000000000001, 6.1303611382488761, 7.9199999999999999, 8.7599999999999998, 11.19, 15.98, 11.18, 9.7799999999999994, 6.2699999999999996, 5.3099999999999996, 19.789999999999999, 6.4900000000000002, 12.85, 15.02459152181248, 10.57, 30, 15.02459152181248, 7.3499999999999996, 8.1699999999999999, 5.5, 10.26, 15.02459152181248, 15.02459152181248, 10.550000000000001, 11.720000000000001, 15.02459152181248, 15.609999999999999, 9.9299999999999997, 15.02459152181248, 15.02459152181248, 15.02459152181248, 15.02459152181248, 15.02459152181248, 15.02459152181248, 15.02459152181248, 15.02459152181248, 15.02459152181248, 15.02459152181248, 15.02459152181248, 15.02459152181248, 15.02459152181248, 15.02459152181248, 5.9900000000000002, 11.66, 10.99, 17.867946620053203, 17.969999999999999, 14, 14, 14.380000000000001, 18, 12.99306836423481, 4.4199999999999999, 8.1799999999999997, 12.99306836423481, 10.26, 7.7300000000000004, 7.29, 8.5800000000000001, 7.1799999999999997, 7.9800000000000004, 12.6, 8, 7.2396333622885578, 7.2396333622885578, 4.7400000000000002, 4.7400000000000002, 7.2396333622885578, 7.2396333622885578, 6.3300000000000001, 24, 7.2396333622885578, 11.17, 16.890000000000001, 46.439999999999998, 7, 15.65, 13.640000000000001, 18.699999999999999, 15.789295899297645, 18.559999999999999, 4.7400000000000002, 19.510000000000002, 28.149999999999999, 15.789295899297645, 4.7400000000000002, 32.25, 11.6, 23.149999999999999, 4.7400000000000002, 15.789295899297645, 15.789295899297645, 15.869999999999999, 4.7400000000000002, 15.789295899297645, 17.07, 4.7400000000000002, 24, 15.789295899297645, 15.789295899297645, 15.5, 15.789295899297645, 11.18, 12.16, 16.460000000000001, 29.75, 15.789295899297645, 4.7400000000000002, 21.079999999999998, 11.17, 15.789295899297645, 15.789295899297645, 15.789295899297645, 10.5, 10.800000000000001, 15.789295899297645, 29.300000000000001, 10.050000000000001, 15.789295899297645, 50.810000000000002, 7.5099999999999998, 10.56, 8, 12.890000000000001, 15.48, 9.25, 23.93, 19.403694976839731, 12.76, 19.403694976839731, 11.890000000000001, 19.48, 26.370000000000001, 17.440000000000001, 19.403694976839731, 34.840000000000003, 11.58, 22.190000000000001, 19.403694976839731, 8.6799999999999997, 17.640000000000001, 10.92, 14.539999999999999, 15.640000000000001, 19.403694976839731, 19.403694976839731, 5.5, 14.210000000000001, 10.289999999999999, 19.403694976839731, 10.779999999999999, 19.403694976839731, 9.7300000000000004, 9.8499999999999996, 19.403694976839731, 9.5, 10.890000000000001, 9.5, 19.403694976839731, 19.403694976839731, 19.403694976839731, 19.403694976839731, 19.403694976839731, 19.403694976839731, 19.403694976839731, 19.403694976839731, 19.403694976839731, 19.403694976839731, 19.403694976839731, 19.403694976839731, 19.403694976839731, 19.403694976839731, 19.403694976839731, 7.96, 5.8099999999999996, 7.6100000000000003, 7.6100000000000003, 7.6100000000000003, 7.6100000000000003, 8.1899999999999995],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "BLR", "AZE", "TJK", "KGZ", "TKM", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "CIV", "AGO", "MDG", "CMR", "BFA", "MWI", "ZWE", "ZMB", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [6.3300000000000001, 6.2400000000000002, 4.5999999999999996, 5.79, 5.79, 5.79, 5.79, 5.79, 3.6800000000000002, 13.35, 9.0899999999999999, 10, 9.3300000000000001, 11.353436357215374, 5.5099999999999998, 5.5099999999999998, 5.5099999999999998, 5.5099999999999998, 5.5099999999999998, 13.02, 4.3499999999999996, 4.3499999999999996, 3.3399999999999999, 3.3399999999999999, 19.289999999999999, 13.9, 14.1, 4.3899999999999997, 7.1699999999999999, 17.09, 18.829999999999998, 10.5, 9.1999999999999993, 9.5686261631307516, 9.5686261631307516, 7.5800000000000001, 9.5686261631307516, 10.029999999999999, 16.199999999999999, 17.092281313223076, 8.5700000000000003, 19.129999999999999, 22.960000000000001, 23.219999999999999, 17.092281313223076, 17.52, 21.829999999999998, 1.8799999999999999, 7.4699999999999998, 7.4706033046152847, 7.5599999999999996, 7.8099999999999996, 13.02, 13.859999999999999, 11.18, 8.6899999999999995, 6.0499999999999998, 5.3300000000000001, 20.920000000000002, 6.4100000000000001, 17.079999999999998, 16.122555355556514, 9.7799999999999994, 28.5, 16.122555355556514, 9.0099999999999998, 8, 5.5, 10.26, 16.122555355556514, 16.122555355556514, 10.550000000000001, 12.65, 16.122555355556514, 14.029999999999999, 9.9299999999999997, 16.122555355556514, 16.122555355556514, 16.122555355556514, 16.122555355556514, 16.122555355556514, 16.122555355556514, 16.122555355556514, 16.122555355556514, 16.122555355556514, 16.122555355556514, 16.122555355556514, 16.122555355556514, 16.122555355556514, 16.122555355556514, 6.5499999999999998, 12.640000000000001, 11.77, 18.034331215387049, 18.140000000000001, 14, 12, 18.780000000000001, 18, 14.535255452793509, 4.4199999999999999, 8.6799999999999997, 14.535255452793509, 10.26, 7.9800000000000004, 7.3700000000000001, 8.5399999999999991, 7.4299999999999997, 8.2699999999999996, 12.51, 8, 7.1828315902766544, 7.1828315902766544, 4.75, 4.75, 7.1828315902766544, 7.1828315902766544, 6, 23.5, 7.1828315902766544, 13.17, 16.940000000000001, 47, 7.5, 16.07, 13.34, 19.109999999999999, 16.25972935141921, 19.52, 4.75, 17.699999999999999, 40.280000000000001, 16.25972935141921, 4.75, 27.719999999999999, 11.6, 18.890000000000001, 4.75, 16.25972935141921, 16.25972935141921, 16, 4.75, 16.25972935141921, 16.84, 4.75, 25, 16.25972935141921, 16.25972935141921, 15.050000000000001, 16.25972935141921, 12.880000000000001, 14.130000000000001, 16.219999999999999, 27.920000000000002, 16.25972935141921, 4.75, 21.870000000000001, 13.17, 16.25972935141921, 16.25972935141921, 16.25972935141921, 10.5, 10.550000000000001, 16.25972935141921, 32.399999999999999, 10.890000000000001, 16.25972935141921, 43.719999999999999, 7.5599999999999996, 10.56, 8.6699999999999999, 15.380000000000001, 17.100000000000001, 8.9399999999999995, 22.859999999999999, 17.863941209681514, 12.84, 17.863941209681514, 12.859999999999999, 15.83, 23.079999999999998, 16.600000000000001, 17.863941209681514, 28.920000000000002, 13.039999999999999, 12.800000000000001, 17.863941209681514, 8.7899999999999991, 17.199999999999999, 11.75, 14.609999999999999, 13.77, 17.863941209681514, 17.863941209681514, 5.5, 14.33, 10.76, 17.863941209681514, 10.119999999999999, 17.863941209681514, 9.6099999999999994, 9.7599999999999998, 17.863941209681514, 10.4, 10.44, 9.1699999999999999, 17.863941209681514, 17.863941209681514, 17.863941209681514, 17.863941209681514, 17.863941209681514, 17.863941209681514, 17.863941209681514, 17.863941209681514, 17.863941209681514, 17.863941209681514, 17.863941209681514, 17.863941209681514, 17.863941209681514, 17.863941209681514, 17.863941209681514, 8.0500000000000007, 6.0999999999999996, 8.1999999999999993, 8.1999999999999993, 8.1999999999999993, 8.1999999999999993, 8.6099999999999994],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Cote d Ivoire", "Angola", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zimbabwe", "Zambia", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "MNP", "ASM", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "NPL", "AFG", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "MOZ", "AGO", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "LSO", "BWA", "GMB", "GAB", "GNB", "MUS", "SWZ", "GNQ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "VCT", "GRD", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [6.8399999999999999, 5.8899999999999997, 4.5999999999999996, 6.25, 6.25, 6.25, 6.25, 6.25, 3.6800000000000002, 14.99, 10.18, 10.859999999999999, 10.07, 12.620116331155955, 4.6799999999999997, 4.6799999999999997, 4.6799999999999997, 4.6799999999999997, 4.6799999999999997, 13.31, 4.3499999999999996, 4.3499999999999996, 3.3399999999999999, 3.3399999999999999, 20.149999999999999, 17.489999999999998, 13.02, 6.0300000000000002, 6.9800000000000004, 18.039999999999999, 21.059999999999999, 10.23, 9.2400000000000002, 10.6390253797129, 10.6390253797129, 7.8899999999999997, 10.6390253797129, 12.23, 16.199999999999999, 17.421460860255415, 8.5500000000000007, 19.760000000000002, 23.59, 17.421460860255415, 25.91, 17.050000000000001, 20.579999999999998, 1.9099999999999999, 5.3099999999999996, 5.3100487060988097, 5.3099999999999996, 5.4299999999999997, 13.31, 13.6, 15.779999999999999, 8.75, 5.8200000000000003, 5.3799999999999999, 20.920000000000002, 6.0800000000000001, 18.890000000000001, 16.041376643715331, 9.1999999999999993, 24, 16.041376643715331, 8, 8, 5.5, 10.26, 16.041376643715331, 16.041376643715331, 10.550000000000001, 12.66, 16.041376643715331, 14.380000000000001, 9.9299999999999997, 16.041376643715331, 16.041376643715331, 16.041376643715331, 16.041376643715331, 16.041376643715331, 16.041376643715331, 16.041376643715331, 16.041376643715331, 16.041376643715331, 16.041376643715331, 16.041376643715331, 16.041376643715331, 16.041376643715331, 16.041376643715331, 7.1699999999999999, 12.890000000000001, 12.94, 14.892969329021012, 14.92, 13.85, 12, 19.219999999999999, 18, 14.592498284387528, 4.4199999999999999, 9.0299999999999994, 14.592498284387528, 9.9600000000000009, 7.1900000000000004, 7.6100000000000003, 6.8300000000000001, 6.8399999999999999, 8.2200000000000006, 12.32, 8, 7.1315169695784943, 7.1315169695784943, 4.9800000000000004, 4.9800000000000004, 7.1315169695784943, 7.1315169695784943, 6, 20.329999999999998, 7.1315169695784943, 15.130000000000001, 15.140000000000001, 43.149999999999999, 8, 14.98, 14.02, 20.449999999999999, 16.0599764655943, 18.309999999999999, 12.529999999999999, 4.9800000000000004, 44, 16.0599764655943, 4.9800000000000004, 25.280000000000001, 19.059999999999999, 11.6, 4.9800000000000004, 16.0599764655943, 16.0599764655943, 16.25, 4.9800000000000004, 16.0599764655943, 16.52, 4.9800000000000004, 24.5, 16.0599764655943, 16.0599764655943, 14.4, 16.0599764655943, 13.74, 16.190000000000001, 16.539999999999999, 27, 16.0599764655943, 4.9800000000000004, 11.539999999999999, 14.83, 16.0599764655943, 16.0599764655943, 16.0599764655943, 10.5, 9.9900000000000002, 16.0599764655943, 32.399999999999999, 11.81, 16.0599764655943, 47.25, 8.7100000000000009, 10.56, 13.26, 17.18, 22.370000000000001, 12.449999999999999, 23.670000000000002, 18.373898111152343, 13.390000000000001, 18.373898111152343, 13.869999999999999, 19.940000000000001, 17.809999999999999, 17.940000000000001, 18.373898111152343, 29.829999999999998, 13.17, 15.83, 18.373898111152343, 7.9100000000000001, 16.829999999999998, 12.44, 14.58, 12.199999999999999, 18.373898111152343, 18.373898111152343, 5.5, 14.140000000000001, 10.029999999999999, 18.373898111152343, 10.08, 18.373898111152343, 9.5199999999999996, 9.5299999999999994, 18.373898111152343, 10.5, 10.43, 9.0600000000000005, 18.373898111152343, 18.373898111152343, 18.373898111152343, 18.373898111152343, 18.373898111152343, 18.373898111152343, 18.373898111152343, 18.373898111152343, 18.373898111152343, 18.373898111152343, 18.373898111152343, 18.373898111152343, 18.373898111152343, 18.373898111152343, 18.373898111152343, 5.0899999999999999, 4.7300000000000004, 8.9100000000000001, 8.9100000000000001, 8.9100000000000001, 8.9100000000000001, 8.9399999999999995],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "Northern Mariana Islands", "American Samoa", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Nepal", "Afghanistan", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Mozambique", "Angola", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Lesotho", "Botswana", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Swaziland", "Equatorial Guinea", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Saint Vincent and the Grenadines", "Grenada", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "RUS", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "FSM", "TON", "KIR", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.7599999999999998, 4.4699999999999998, 1.98, 5.9900000000000002, 5.9900000000000002, 5.9900000000000002, 5.9900000000000002, 5.9900000000000002, 3.6800000000000002, 17.27, 11.039999999999999, 11.34, 11.550000000000001, 14.156259231275659, 0.64000000000000001, 0.64000000000000001, 0.64000000000000001, 0.64000000000000001, 0.64000000000000001, 12.19, 4.3499999999999996, 4.3499999999999996, 2.75, 2.75, 18.989999999999998, 20.859999999999999, 12.66, 6.8700000000000001, 7.9299999999999997, 17.870000000000001, 20.539999999999999, 11.17, 9.3599999999999994, 11.140287785231502, 5.7400000000000002, 11.140287785231502, 11.140287785231502, 15.31, 16.199999999999999, 18.01899139191152, 11.68, 20.030000000000001, 22.620000000000001, 18.01899139191152, 26.649999999999999, 18.760000000000002, 21.670000000000002, 1.72, 5.3099999999999996, 5.3083614275754156, 5, 5.25, 12.19, 14.5, 10.07, 8.5700000000000003, 4.7800000000000002, 5.3799999999999999, 20.920000000000002, 5.0800000000000001, 15.67, 15.273709633989396, 10.09, 24.77, 15.273709633989396, 7.8499999999999996, 10.17, 5.5, 10.26, 15.273709633989396, 15.273709633989396, 10.550000000000001, 12.08, 15.273709633989396, 15.380000000000001, 9.9299999999999997, 15.273709633989396, 15.273709633989396, 15.273709633989396, 15.273709633989396, 15.273709633989396, 15.273709633989396, 15.273709633989396, 15.273709633989396, 15.273709633989396, 15.273709633989396, 15.273709633989396, 15.273709633989396, 15.273709633989396, 15.273709633989396, 5.6500000000000004, 13.33, 14.539999999999999, 15, 14.969194522076972, 13.75, 12, 16.16, 18, 13.473337105321674, 4.4199999999999999, 9.25, 13.473337105321674, 9.5700000000000003, 6.1900000000000004, 6.1600000000000001, 7.3200000000000003, 7.04, 7.9400000000000004, 11.98, 8, 7.0887777877576363, 7.0887777877576363, 4.9800000000000004, 4.9800000000000004, 7.0887777877576363, 7.0887777877576363, 6, 19.5, 7.0887777877576363, 11.710000000000001, 18.989999999999998, 65.420000000000002, 8, 15.029999999999999, 14.800000000000001, 20.960000000000001, 16.249590765891909, 15.68, 15.68, 4.9800000000000004, 44.619999999999997, 16.249590765891909, 4.9800000000000004, 25.25, 22.059999999999999, 11.6, 4.9800000000000004, 16.249590765891909, 16.249590765891909, 16.719999999999999, 4.9800000000000004, 16.249590765891909, 14.08, 4.9800000000000004, 22.170000000000002, 16.249590765891909, 16.249590765891909, 14.19, 16.249590765891909, 11.119999999999999, 13.76, 13, 27, 16.249590765891909, 4.9800000000000004, 9.25, 16.249590765891909, 11.380000000000001, 16.249590765891909, 16.249590765891909, 10.5, 10.98, 16.249590765891909, 31.109999999999999, 15.35, 16.249590765891909, 44.649999999999999, 7.0700000000000003, 10.56, 7.25, 13.01, 19.890000000000001, 15.279999999999999, 21.039999999999999, 17.80473481635509, 13.85, 17.80473481635509, 12.359999999999999, 18.140000000000001, 17.329999999999998, 19.440000000000001, 17.80473481635509, 32.659999999999997, 14.039999999999999, 19.719999999999999, 17.80473481635509, 7.6299999999999999, 16.43, 11.94, 14.539999999999999, 11.65, 17.80473481635509, 17.80473481635509, 5.5, 14.08, 9.1999999999999993, 17.80473481635509, 10.58, 17.80473481635509, 10.99, 9.1899999999999995, 17.80473481635509, 10.699999999999999, 10.07, 10.02, 17.80473481635509, 17.80473481635509, 17.80473481635509, 17.80473481635509, 17.80473481635509, 17.80473481635509, 17.80473481635509, 17.80473481635509, 17.80473481635509, 17.80473481635509, 17.80473481635509, 17.80473481635509, 17.80473481635509, 17.80473481635509, 17.80473481635509, 3.25, 2.3999999999999999, 6.0199999999999996, 6.0200000000000005, 6.0200000000000005, 6.0200000000000005, 6.6600000000000001],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Micronesia, Federated States of", "Tonga", "Kiribati", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "BIH", "GEO", "MDA", "MKD", "MNE", "AND", "SMR", "MCO", "VAT", "RUS", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "CAF", "COG", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "PRY", "NIC", "CRI", "PRI", "PAN", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.0300000000000002, 4.5999999999999996, 1.75, 5.8899999999999997, 5.8899999999999997, 5.8899999999999997, 5.8899999999999997, 5.8899999999999997, 3.6800000000000002, 14.07, 7.5899999999999999, 11.140000000000001, 10.380000000000001, 11.630218061839976, 0.5, 0.5, 0.5, 0.5, 0.5, 8.3300000000000001, 4.3499999999999996, 4.3499999999999996, 2.73, 2.73, 10.26, 15.869999999999999, 12.82, 4.7599999999999998, 7.8899999999999997, 15.85, 16.359999999999999, 10.699999999999999, 9.5299999999999994, 9.351931632213919, 5.3799999999999999, 9.351931632213919, 9.351931632213919, 10.82, 16.199999999999999, 17.57464645952432, 9.2200000000000006, 20.699999999999999, 23.399999999999999, 17.57464645952432, 23.719999999999999, 19.199999999999999, 20.07, 1.6000000000000001, 5.8099999999999996, 5.8055471103042651, 5, 5.25, 8.3300000000000001, 13.25, 13.140000000000001, 7.6699999999999999, 4.3300000000000001, 5.3799999999999999, 20.920000000000002, 5, 10.220000000000001, 14.153879047395518, 10.449999999999999, 22.609999999999999, 14.153879047395518, 7.4900000000000002, 14.43, 5.5, 10.380000000000001, 14.153879047395518, 14.153879047395518, 10.550000000000001, 10.720000000000001, 14.153879047395518, 14.153879047395518, 15.130000000000001, 9.9299999999999997, 14.153879047395518, 14.153879047395518, 14.153879047395518, 14.153879047395518, 14.153879047395518, 14.153879047395518, 14.153879047395518, 14.153879047395518, 14.153879047395518, 14.153879047395518, 14.153879047395518, 14.153879047395518, 14.153879047395518, 5.5099999999999998, 12.220000000000001, 14.039999999999999, 15.609999999999999, 15.569091647918642, 13.92, 12, 14.35, 23.829999999999998, 14.483610683428353, 4.4199999999999999, 9.0199999999999996, 14.483610683428353, 8.3399999999999999, 6.3300000000000001, 5.4199999999999999, 7.1399999999999997, 7.2699999999999996, 7.25, 11.01, 8, 7.0278260757620057, 7.0278260757620057, 5.1100000000000003, 5.1100000000000003, 7.0278260757620057, 7.0278260757620057, 6, 17, 7.0278260757620057, 9.8300000000000001, 17.579999999999998, 56.520000000000003, 8, 14.539999999999999, 14.369999999999999, 20.170000000000002, 16.52676515754878, 22.539999999999999, 16.260000000000002, 5.1100000000000003, 46, 16.52676515754878, 5.1100000000000003, 24.629999999999999, 20.920000000000002, 11.6, 5.1100000000000003, 16.52676515754878, 16.52676515754878, 17, 5.1100000000000003, 16.52676515754878, 12.42, 5.1100000000000003, 21.25, 16.52676515754878, 16.52676515754878, 14.24, 16.52676515754878, 9.7200000000000006, 11.460000000000001, 11.220000000000001, 27, 16.52676515754878, 5.1100000000000003, 8.8800000000000008, 16.52676515754878, 9.75, 16.52676515754878, 16.52676515754878, 10.5, 11.039999999999999, 16.52676515754878, 28.870000000000001, 12.699999999999999, 16.52676515754878, 39.990000000000002, 5.2800000000000002, 10.56, 4.75, 9.3800000000000008, 18.350000000000001, 10.33, 18.98, 16.139381817472959, 13.34, 16.139381817472959, 9.9100000000000001, 12.140000000000001, 17.48, 18.859999999999999, 16.139381817472959, 30.09, 13.32, 17.09, 16.139381817472959, 7.3099999999999996, 20.449999999999999, 9.2799999999999994, 14.539999999999999, 11.59, 16.139381817472959, 16.139381817472959, 5.5, 13.880000000000001, 8.6999999999999993, 16.139381817472959, 10.619999999999999, 16.139381817472959, 10.58, 9.1699999999999999, 16.139381817472959, 10.300000000000001, 11, 9.4600000000000009, 16.139381817472959, 16.139381817472959, 16.139381817472959, 16.139381817472959, 16.139381817472959, 16.139381817472959, 16.139381817472959, 16.139381817472959, 16.139381817472959, 16.139381817472959, 16.139381817472959, 16.139381817472959, 16.139381817472959, 16.139381817472959, 16.139381817472959, 3.25, 2.6000000000000001, 7.2800000000000002, 7.2800000000000011, 7.2800000000000011, 7.2800000000000011, 6.2599999999999998],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Bosnia and Herzegovina", "Georgia", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "San Marino", "Monaco", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Central African Republic", "Congo", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Puerto Rico", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "KWT", "OMN", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "LSO", "GMB", "GAB", "GNB", "MUS", "GNQ", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.5999999999999996, 4.75, 2, 5.7199999999999998, 5.7199999999999998, 5.7199999999999998, 5.7199999999999998, 5.7199999999999998, 3.6800000000000002, 12.130000000000001, 8.3200000000000003, 10.630000000000001, 9.6799999999999997, 10.70473403299615, 0.5, 0.5, 0.5, 0.5, 0.5, 10.17, 4.3499999999999996, 4.3499999999999996, 2.7200000000000002, 2.7200000000000002, 7.7000000000000002, 15.949999999999999, 12.43, 4.7599999999999998, 15, 7.4299999999999997, 14.44, 9.5999999999999996, 9.6899999999999995, 8.7923032971489086, 8.7923032971489086, 5.9199999999999999, 8.7923032971489086, 8.4600000000000009, 16.199999999999999, 17.664068941777444, 13.57, 18.989999999999998, 22.460000000000001, 17.664068941777444, 23.780000000000001, 17.75, 16.609999999999999, 1.5, 6.5599999999999996, 6.5513121516021577, 5, 5.25, 10.17, 12.4, 16.949999999999999, 6.6600000000000001, 5.0700000000000003, 5.3799999999999999, 20.100000000000001, 4.9100000000000001, 9.4100000000000001, 13.631288273942223, 10.81, 22.609999999999999, 13.631288273942223, 7.4699999999999998, 13.17, 5.5, 10.199999999999999, 13.631288273942223, 13.631288273942223, 10.550000000000001, 9.9600000000000009, 13.631288273942223, 13.631288273942223, 14.35, 9.9299999999999997, 13.631288273942223, 13.631288273942223, 13.631288273942223, 13.631288273942223, 13.631288273942223, 13.631288273942223, 13.631288273942223, 13.631288273942223, 13.631288273942223, 13.631288273942223, 13.631288273942223, 13.631288273942223, 13.631288273942223, 5.7599999999999998, 13.32, 14.42, 15.15, 15.122858860065772, 14, 11, 14.130000000000001, 25, 14.640871795711066, 4.4199999999999999, 8.7100000000000009, 14.640871795711066, 7.5300000000000002, 6.79, 5.1900000000000004, 6.5199999999999996, 5.4900000000000002, 6.79, 11.029999999999999, 8, 7.0876351723686533, 7.0876351723686533, 5.2599999999999998, 5.2599999999999998, 7.0876351723686533, 7.0876351723686533, 6, 17, 7.0876351723686533, 9, 16.02, 43.75, 8, 14.960000000000001, 15.050000000000001, 21.829999999999998, 17.08768998261607, 18.760000000000002, 19.100000000000001, 5.2599999999999998, 52.5, 17.08768998261607, 5.2599999999999998, 23.75, 18.84, 11.6, 5.2599999999999998, 17.08768998261607, 17.08768998261607, 16.670000000000002, 17.08768998261607, 5.2599999999999998, 13.23, 5.2599999999999998, 21, 17.08768998261607, 17.08768998261607, 13.75, 17.08768998261607, 8.7300000000000004, 11, 10.43, 28, 17.08768998261607, 5.2599999999999998, 8.9199999999999999, 17.08768998261607, 9, 17.08768998261607, 17.08768998261607, 10.5, 9.8100000000000005, 17.08768998261607, 26.949999999999999, 11.19, 17.08768998261607, 43.880000000000003, 4.9100000000000001, 14.09, 9.0299999999999994, 11.220000000000001, 17.149999999999999, 9.7799999999999994, 18.68, 15.017155678608955, 13.43, 15.017155678608955, 10.92, 15.550000000000001, 11.609999999999999, 18.559999999999999, 15.017155678608955, 10.539999999999999, 17.399999999999999, 16.149999999999999, 7.5199999999999996, 15.017155678608955, 19.510000000000002, 7.9699999999999998, 14.449999999999999, 11.76, 15.017155678608955, 15.017155678608955, 5.0599999999999996, 13.359999999999999, 8.6999999999999993, 15.017155678608955, 10, 15.017155678608955, 10.69, 9.1400000000000006, 15.017155678608955, 9, 10.91, 8.8399999999999999, 15.017155678608955, 15.017155678608955, 15.017155678608955, 15.017155678608955, 15.017155678608955, 15.017155678608955, 15.017155678608955, 15.017155678608955, 15.017155678608955, 15.017155678608955, 15.017155678608955, 15.017155678608955, 15.017155678608955, 15.017155678608955, 15.017155678608955, 3.25, 3, 7.7400000000000002, 7.7400000000000011, 7.7400000000000011, 7.7400000000000011, 6.1100000000000003],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Kuwait", "Oman", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "PYF", "NCL", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "CIV", "MDG", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "DOM", "HTI", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [5.2199999999999998, 4.7000000000000002, 1.6299999999999999, 5.4100000000000001, 5.4100000000000001, 5.4100000000000001, 5.4100000000000001, 5.4100000000000001, 3.6800000000000002, 11.33, 9, 9.7100000000000009, 9.4800000000000004, 10.299021047786823, 0.5, 0.5, 0.5, 0.5, 0.5, 10.6, 4.3499999999999996, 4.3499999999999996, 2.6899999999999999, 2.6899999999999999, 8.3200000000000003, 18.390000000000001, 10.880000000000001, 4.7599999999999998, 14.81, 7.3300000000000001, 13.42, 9.0700000000000003, 9.5600000000000005, 8.5597631749293246, 8.5597631749293246, 6.4800000000000004, 8.5597631749293246, 9.0999999999999996, 16.199999999999999, 18.231964366858012, 19.489999999999998, 18.350000000000001, 21.09, 18.231964366858012, 23, 17.23, 18.109999999999999, 1.4099999999999999, 6, 5.9944371976668025, 5, 5.25, 10.6, 11.800000000000001, 13.470000000000001, 5.6799999999999997, 5.1900000000000004, 5.3799999999999999, 16, 4.79, 13.279999999999999, 12.534312339029832, 10.81, 22.609999999999999, 12.534312339029832, 7, 11.279999999999999, 5.5, 10.48, 12.534312339029832, 12.534312339029832, 10.550000000000001, 9.8599999999999994, 12.534312339029832, 12.534312339029832, 14.32, 9.9299999999999997, 12.534312339029832, 12.534312339029832, 12.534312339029832, 12.534312339029832, 12.534312339029832, 12.534312339029832, 12.534312339029832, 12.534312339029832, 12.534312339029832, 12.534312339029832, 12.534312339029832, 12.534312339029832, 12.534312339029832, 5.4000000000000004, 13.94, 13.52, 15, 14.977067115707797, 14, 11, 13.869999999999999, 24.5, 14.332807154250453, 4.4199999999999999, 8.7799999999999994, 14.332807154250453, 7.25, 6.9699999999999998, 5.9000000000000004, 4.9800000000000004, 5.3799999999999999, 6.0300000000000002, 12, 8, 6.993449843643468, 6.993449843643468, 5.04, 5.04, 6.993449843643468, 6.993449843643468, 6, 17, 6.993449843643468, 8.75, 16.789999999999999, 28.449999999999999, 8, 15.56, 19.719999999999999, 26.149999999999999, 18.170581623750227, 16.66, 16.809999999999999, 5.04, 56.130000000000003, 18.170581623750227, 5.04, 32.329999999999998, 12.15, 11.6, 5.04, 18.170581623750227, 18.170581623750227, 16.699999999999999, 18.170581623750227, 5.04, 14.32, 5.04, 21, 18.170581623750227, 18.170581623750227, 13.52, 18.170581623750227, 8.6500000000000004, 11, 28, 10.119999999999999, 18.170581623750227, 5.04, 18.170581623750227, 8.6699999999999999, 8.75, 18.170581623750227, 18.170581623750227, 10.5, 9.9000000000000004, 18.170581623750227, 26.170000000000002, 12.19, 18.170581623750227, 36.640000000000001, 4.6799999999999997, 14.06, 10.06, 12.59, 16.379999999999999, 11.199999999999999, 19.239999999999998, 15.026225350291531, 13.49, 15.026225350291531, 11.130000000000001, 15.48, 8.9299999999999997, 18.449999999999999, 15.026225350291531, 11.99, 17.16, 18.210000000000001, 7.7199999999999998, 15.026225350291531, 17.629999999999999, 7.71, 13.859999999999999, 11.74, 15.026225350291531, 15.026225350291531, 4.75, 12.44, 8.6999999999999993, 15.026225350291531, 9.5, 15.026225350291531, 9.7300000000000004, 9.4100000000000001, 15.026225350291531, 8.4000000000000004, 10.16, 9.0399999999999991, 15.026225350291531, 15.026225350291531, 15.026225350291531, 15.026225350291531, 15.026225350291531, 15.026225350291531, 15.026225350291531, 15.026225350291531, 15.026225350291531, 15.026225350291531, 15.026225350291531, 15.026225350291531, 15.026225350291531, 15.026225350291531, 15.026225350291531, 3.25, 3, 6.9699999999999998, 6.9700000000000006, 6.9700000000000006, 6.9700000000000006, 5.8200000000000003],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "French Polynesia", "New Caledonia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Cote d Ivoire", "Madagascar", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Dominican Republic", "Haiti", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "BLR", "AZE", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "ISR", "JOR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "SSD", "RWA", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "NIC", "PRY", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VCT", "VIR", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [5.1399999999999997, 4.7000000000000002, 1.5, 4.9699999999999998, 4.9699999999999998, 4.9699999999999998, 4.9699999999999998, 4.9699999999999998, 3.6800000000000002, 10.52, 6.2999999999999998, 9.0399999999999991, 9.25, 9.1211571886492528, 0.5, 0.5, 0.5, 0.5, 0.5, 10.289999999999999, 4.3499999999999996, 4.3499999999999996, 2.6899999999999999, 2.6899999999999999, 8.1500000000000004, 16.649999999999999, 9.8300000000000001, 4.7599999999999998, 13.59, 7.04, 12.289999999999999, 8.4900000000000002, 9.3900000000000006, 8.1026458229050373, 8.1026458229050373, 6.6200000000000001, 8.1026458229050373, 9.4700000000000006, 16.199999999999999, 18.374521672897757, 19.129999999999999, 18.210000000000001, 24.329999999999998, 18.374521672897757, 21.32, 15.99, 18.48, 1.3, 6, 5.9944399963880661, 5, 5.25, 10.289999999999999, 11.66, 10.369999999999999, 5.7699999999999996, 5.0599999999999996, 5.3799999999999999, 16, 4.6500000000000004, 12.449999999999999, 12.280753696206576, 10.130000000000001, 22.609999999999999, 12.280753696206576, 6.0999999999999996, 10.77, 5.5, 11.140000000000001, 12.280753696206576, 12.280753696206576, 10.550000000000001, 10.199999999999999, 12.280753696206576, 12.280753696206576, 15.699999999999999, 9.3499999999999996, 12.280753696206576, 12.280753696206576, 12.280753696206576, 12.280753696206576, 12.280753696206576, 12.280753696206576, 12.280753696206576, 12.280753696206576, 12.280753696206576, 12.280753696206576, 12.280753696206576, 12.280753696206576, 12.280753696206576, 4.6399999999999997, 13.59, 11.99, 15.08, 15.056682191903375, 14.039999999999999, 11, 13.57, 22.079999999999998, 13.477126832809377, 4.4199999999999999, 9.0099999999999998, 13.477126832809377, 7.3499999999999996, 7.5199999999999996, 5.5199999999999996, 4.5599999999999996, 5.1100000000000003, 5.9299999999999997, 12.289999999999999, 8, 7.0938944549044605, 7.0938944549044605, 5.29, 5.29, 7.0938944549044605, 7.0938944549044605, 6, 17, 7.0938944549044605, 8.5, 16.719999999999999, 19.370000000000001, 8, 15.859999999999999, 17.309999999999999, 23.280000000000001, 18.167702741876731, 15.81, 15.32, 58.979999999999997, 5.29, 18.167702741876731, 5.29, 46.009999999999998, 9.5199999999999996, 9.7400000000000002, 5.29, 18.167702741876731, 18.167702741876731, 18.167702741876731, 17.32, 5.29, 15.15, 5.29, 20.559999999999999, 18.167702741876731, 18.167702741876731, 13.49, 18.167702741876731, 8.2899999999999991, 10.19, 28, 9.9199999999999999, 18.167702741876731, 5.29, 18.167702741876731, 8.5, 8.5, 18.167702741876731, 18.167702741876731, 10.5, 10.52, 18.167702741876731, 25.93, 12.289999999999999, 18.167702741876731, 27.390000000000001, 4.2699999999999996, 17.149999999999999, 9.2599999999999998, 10.99, 15.9, 12.43, 18.140000000000001, 14.802946759338592, 13.6, 14.802946759338592, 11.050000000000001, 8.7200000000000006, 13.59, 20.079999999999998, 14.802946759338592, 14.98, 19.27, 15.19, 7.4000000000000004, 14.802946759338592, 17.719999999999999, 7.5, 13.5, 11.98, 14.802946759338592, 14.802946759338592, 4.75, 11.57, 8.6999999999999993, 14.802946759338592, 9.0800000000000001, 14.802946759338592, 9.2699999999999996, 9.4399999999999995, 14.802946759338592, 8.5, 9.9499999999999993, 9.0700000000000003, 14.802946759338592, 14.802946759338592, 14.802946759338592, 14.802946759338592, 14.802946759338592, 14.802946759338592, 14.802946759338592, 14.802946759338592, 14.802946759338592, 14.802946759338592, 14.802946759338592, 14.802946759338592, 14.802946759338592, 14.802946759338592, 14.802946759338592, 3.25, 3, 6.1799999999999997, 6.1799999999999997, 6.1799999999999997, 6.1799999999999997, 5.5300000000000002],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Belarus", "Azerbaijan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Israel", "Jordan", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "South Sudan", "Rwanda", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Nicaragua", "Paraguay", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Saint Vincent and the Grenadines", "Virgin Islands, U.S.", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "ARM", "MNG", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "BRN", "MDV", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "COK", "PLW", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ISR", "ARE", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "DZA", "SDN", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "ZWE", "SEN", "SOM", "GIN", "RWA", "SSD", "BEN", "BDI", "TGO", "SLE", "COG", "CAF", "LBR", "ERI", "NAM", "BWA", "GMB", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "MTQ", "BHS", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "VIR", "VCT", "ABW", "ATG", "DMA", "BMU", "CYM", "KNA", "MAF", "SXM", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.8700000000000001, 4.7000000000000002, 1.5, 4.6399999999999997, 4.6399999999999997, 4.6399999999999997, 4.6399999999999997, 4.6399999999999997, 3.6800000000000002, 8.4700000000000006, 4.4500000000000002, 8.2599999999999998, 8.5800000000000001, 7.4817213329594576, 0.5, 0.5, 0.5, 0.5, 0.5, 10.25, 4.21, 4.21, 2.6899999999999999, 2.6899999999999999, 7.7400000000000002, 17.719999999999999, 7.9699999999999998, 4.7599999999999998, 11.91, 6.6399999999999997, 11.01, 7.7699999999999996, 9.4100000000000001, 7.5239934100247678, 7.5239934100247678, 6.1100000000000003, 7.5239934100247678, 11.140000000000001, 15.99, 18.154889759570324, 17.859999999999999, 18.739999999999998, 24.530000000000001, 18.154889759570324, 20.129999999999999, 16.41, 19.030000000000001, 1.22, 5.5999999999999996, 5.596698370644523, 5, 5.25, 10.25, 12.6, 8.6600000000000001, 5.5300000000000002, 4.9500000000000002, 5.3499999999999996, 16, 4.5899999999999999, 7.8399999999999999, 11.39801122798238, 9.3800000000000008, 22.609999999999999, 11.39801122798238, 5.7599999999999998, 10.91, 5.5, 11.42, 11.39801122798238, 11.39801122798238, 10.41, 10.02, 11.39801122798238, 11.39801122798238, 15.699999999999999, 8.6400000000000006, 11.39801122798238, 11.39801122798238, 11.39801122798238, 11.39801122798238, 11.39801122798238, 11.39801122798238, 11.39801122798238, 11.39801122798238, 11.39801122798238, 11.39801122798238, 11.39801122798238, 11.39801122798238, 11.39801122798238, 4.2599999999999998, 12.94, 11.73, 15, 14.978569365162722, 14.02, 14, 12.6, 22.079999999999998, 12.964467925503845, 8.9900000000000002, 3.9100000000000001, 12.964467925503845, 7.2699999999999996, 6.4100000000000001, 5.2300000000000004, 4.2699999999999996, 4.96, 5.8700000000000001, 11.710000000000001, 8, 7.1089852022394746, 7.1089852022394746, 5.3399999999999999, 5.3399999999999999, 7.1089852022394746, 7.1089852022394746, 6, 17, 7.1089852022394746, 9.1300000000000008, 16.550000000000001, 18.690000000000001, 8, 16.289999999999999, 16.510000000000002, 21.579999999999998, 18.042419522839719, 16.379999999999999, 14.800000000000001, 60, 5.3399999999999999, 18.042419522839719, 5.3399999999999999, 44.289999999999999, 11.57, 9.4700000000000006, 5.3399999999999999, 18.042419522839719, 18.042419522839719, 17.260000000000002, 18.042419522839719, 5.3399999999999999, 15.67, 5.3399999999999999, 19.41, 18.042419522839719, 18.042419522839719, 13.5, 18.042419522839719, 8.6999999999999993, 9, 28.5, 10.34, 18.042419522839719, 5.3399999999999999, 18.042419522839719, 8.5, 8.6300000000000008, 18.042419522839719, 18.042419522839719, 10.5, 10.890000000000001, 18.042419522839719, 23.170000000000002, 11.65, 18.042419522839719, 32.009999999999998, 3.5499999999999998, 24.010000000000002, 8.0999999999999996, 10.869999999999999, 17.210000000000001, 15.529999999999999, 15.74, 14.295957213112546, 13.77, 14.295957213112546, 9.6899999999999995, 10.77, 13.9, 20.609999999999999, 14.295957213112546, 21.190000000000001, 13.539999999999999, 14.9, 6.9299999999999997, 14.295957213112546, 17.219999999999999, 7.5, 12.83, 12.279999999999999, 14.295957213112546, 14.295957213112546, 4.75, 10.82, 8.3800000000000008, 14.295957213112546, 9, 14.295957213112546, 9.1899999999999995, 14.295957213112546, 9.1500000000000004, 7.2999999999999998, 10.07, 8.9399999999999995, 14.295957213112546, 14.295957213112546, 14.295957213112546, 14.295957213112546, 14.295957213112546, 14.295957213112546, 14.295957213112546, 14.295957213112546, 14.295957213112546, 14.295957213112546, 14.295957213112546, 14.295957213112546, 14.295957213112546, 14.295957213112546, 14.295957213112546, 3.25, 3, 5.9500000000000002, 5.9500000000000002, 5.9500000000000002, 5.9500000000000002, 5.7999999999999998],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Armenia", "Mongolia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Brunei Darussalam", "Maldives", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Cook Islands", "Palau", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "Israel", "United Arab Emirates", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Algeria", "Sudan", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Zimbabwe", "Senegal", "Somalia", "Guinea", "Rwanda", "South Sudan", "Benin", "Burundi", "Togo", "Sierra Leone", "Congo", "Central African Republic", "Liberia", "Eritrea", "Namibia", "Botswana", "Gambia", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Martinique", "Bahamas", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Aruba", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "TUV", "NRU", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "SSD", "BDI", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "SLV", "PRY", "NIC", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "SXM", "MAF", "TCA", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [4.1299999999999999, 4.7000000000000002, 1.5, 4.2800000000000002, 4.2800000000000002, 4.2800000000000002, 4.2800000000000002, 4.2800000000000002, 3.6800000000000002, 6.7699999999999996, 2.8999999999999999, 7.4500000000000002, 8.5800000000000001, 6.1430692755211469, 0.5, 0.5, 0.5, 0.5, 0.5, 10.01, 3.5, 3.5000000000000004, 2.6800000000000002, 2.6800000000000002, 7.6100000000000003, 21.82, 7.8799999999999999, 4.7599999999999998, 12.49, 5.79, 14.15, 7.46, 8.9299999999999997, 7.8594284582492415, 7.8594284582492415, 2.4900000000000002, 7.8594284582492415, 15.720000000000001, 13.77, 17.594971747083186, 17.530000000000001, 18.079999999999998, 25.84, 17.594971747083186, 23.629999999999999, 19.559999999999999, 17.59, 1.1399999999999999, 4.3499999999999996, 4.3538319478493275, 5, 5.25, 10.01, 12.66, 7.1200000000000001, 5.5800000000000001, 4.7300000000000004, 5.3499999999999996, 16, 4.5700000000000003, 6.96, 11.174910795403687, 8.7300000000000004, 22.609999999999999, 11.174910795403687, 5.79, 10.48, 11.1, 5.5, 11.174910795403687, 11.174910795403687, 10.199999999999999, 9.5099999999999998, 11.174910795403687, 11.174910795403687, 15.699999999999999, 8.2400000000000002, 11.174910795403687, 11.174910795403687, 11.174910795403687, 11.174910795403687, 11.174910795403687, 11.174910795403687, 11.174910795403687, 11.174910795403687, 11.174910795403687, 11.174910795403687, 11.174910795403687, 11.174910795403687, 11.174910795403687, 3.5299999999999998, 11.710000000000001, 10.16, 15, 14.99785777560829, 14.9, 14.210000000000001, 12.289999999999999, 22.079999999999998, 12.726592931529298, 8.4800000000000004, 12.726592931529298, 3.46, 7.0899999999999999, 6.7800000000000002, 4.8799999999999999, 4.29, 4.4400000000000004, 5.1600000000000001, 11.630000000000001, 7.020911191663517, 8, 7.020911191663517, 5.1500000000000004, 5.1500000000000004, 7.020911191663517, 7.020911191663517, 6, 17, 7.020911191663517, 9.4199999999999999, 16.850000000000001, 19.370000000000001, 8, 16.100000000000001, 16.09, 22.600000000000001, 17.876259273074723, 16.879999999999999, 14.869999999999999, 56.719999999999999, 5.1500000000000004, 17.876259273074723, 5.1500000000000004, 44.390000000000001, 13.25, 5.1500000000000004, 8.5399999999999991, 17.876259273074723, 17.876259273074723, 17.329999999999998, 5.1500000000000004, 17.876259273074723, 15.33, 5.1500000000000004, 18.73, 17.876259273074723, 13.609999999999999, 17.876259273074723, 17.876259273074723, 9.3200000000000003, 28.666666666666668, 7.9500000000000002, 10.57, 17.876259273074723, 5.1500000000000004, 17.876259273074723, 8.5, 9.0399999999999991, 17.876259273074723, 17.876259273074723, 10.5, 10.41, 17.876259273074723, 23.309999999999999, 12.359999999999999, 17.876259273074723, 43.960000000000001, 3.4399999999999999, 24.920000000000002, 5.5099999999999998, 11.449999999999999, 19.399999999999999, 15.84, 16.109999999999999, 14.254600641562687, 13.23, 14.254600641562687, 8.0700000000000003, 12.92, 14.880000000000001, 20.66, 14.254600641562687, 19.739999999999998, 12.050000000000001, 14.23, 6.4900000000000002, 14.254600641562687, 16.98, 8.1799999999999997, 12.83, 12.619999999999999, 14.254600641562687, 4.75, 14.254600641562687, 10.32, 8.0600000000000005, 14.254600641562687, 8.8599999999999994, 14.254600641562687, 8.9600000000000009, 7, 14.254600641562687, 9.3000000000000007, 9.8399999999999999, 8.6699999999999999, 14.254600641562687, 14.254600641562687, 14.254600641562687, 14.254600641562687, 14.254600641562687, 14.254600641562687, 14.254600641562687, 14.254600641562687, 14.254600641562687, 14.254600641562687, 14.254600641562687, 14.254600641562687, 14.254600641562687, 14.254600641562687, 14.254600641562687, 3.2599999999999998, 2.7799999999999998, 5.5700000000000003, 5.5700000000000003, 5.5700000000000003, 5.5700000000000003, 5.7599999999999998],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "South Sudan", "Burundi", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "El Salvador", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Turks and Caicos Islands", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "GHA", "AGO", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "ZWE", "SOM", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "CUB", "BOL", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "BMU", "CYM", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3.5, 4.7000000000000002, 1.5, 3.9100000000000001, 3.9100000000000006, 3.9100000000000006, 3.9100000000000006, 3.9100000000000006, 3.6800000000000002, 5.71, 2.0899999999999999, 6.3899999999999997, 8.5800000000000001, 5.2463758988465035, 0.5, 0.5, 0.5, 0.5, 0.5, 9.6699999999999999, 3.0699999999999998, 3.0700000000000003, 2.6499999999999999, 2.6499999999999999, 8.2400000000000002, 19.239999999999998, 6.7300000000000004, 4.7599999999999998, 12.619999999999999, 5.2400000000000002, 14.279999999999999, 7.0199999999999996, 7.9699999999999998, 7.7457916455639779, 7.7457916455639779, 3.02, 7.7457916455639779, 12.6, 13.52, 16.817035879047378, 16.379999999999999, 14.4, 24.940000000000001, 16.817035879047378, 24.530000000000001, 19.739999999999998, 17.359999999999999, 1.04, 4.3499999999999996, 4.3538373120789666, 5, 5.25, 9.6699999999999999, 11.890000000000001, 6.96, 5.6399999999999997, 4.4699999999999998, 5.3499999999999996, 16, 4.5300000000000002, 10.49, 11.723776202001266, 8.3699999999999992, 22.609999999999999, 11.723776202001266, 5.8499999999999996, 10.1, 10.76, 5.5, 11.723776202001266, 11.723776202001266, 10.1, 9.0899999999999999, 11.723776202001266, 11.723776202001266, 15.699999999999999, 7.9299999999999997, 11.723776202001266, 11.723776202001266, 11.723776202001266, 11.723776202001266, 11.723776202001266, 11.723776202001266, 11.723776202001266, 11.723776202001266, 11.723776202001266, 11.723776202001266, 11.723776202001266, 11.723776202001266, 11.723776202001266, 3.3700000000000001, 10.41, 8.7599999999999998, 15, 14.982067323172522, 14.15, 18, 12.359999999999999, 22.079999999999998, 12.766463671991687, 8.1099999999999994, 12.766463671991687, 3.4199999999999999, 8.3499999999999996, 4.9100000000000001, 6.1500000000000004, 4.4800000000000004, 4.04, 5.1600000000000001, 13.6, 7.0797645610365638, 8, 7.0797645610365638, 5.2999999999999998, 5.2999999999999998, 7.0797645610365638, 7.0797645610365638, 6, 17, 7.0797645610365638, 10.460000000000001, 16.870000000000001, 19.050000000000001, 8, 15.960000000000001, 16.559999999999999, 23.890000000000001, 18.59260571243879, 15.779999999999999, 21.18, 60, 5.2999999999999998, 18.59260571243879, 5.2999999999999998, 44.109999999999999, 15.5, 5.2999999999999998, 7.1100000000000003, 18.59260571243879, 18.59260571243879, 17.289999999999999, 5.2999999999999998, 14.24, 18.59260571243879, 5.2999999999999998, 16.219999999999999, 18.59260571243879, 13.59, 18.59260571243879, 18.59260571243879, 9.8399999999999999, 28.833333333333332, 7.2999999999999998, 11.58, 18.59260571243879, 5.2999999999999998, 18.59260571243879, 8.5, 10.25, 18.59260571243879, 18.59260571243879, 10.5, 9.6099999999999994, 18.59260571243879, 19.579999999999998, 12.359999999999999, 18.59260571243879, 52.100000000000001, 4.75, 31.23, 5.5899999999999999, 14.65, 20.77, 16.170000000000002, 16.469999999999999, 14.035684289125328, 13.1, 14.035684289125328, 7.9500000000000002, 13.23, 15.08, 19.329999999999998, 18.07, 11.44, 14.035684289125328, 11.640000000000001, 6.5999999999999996, 14.035684289125328, 16.489999999999998, 9, 13, 13.48, 14.035684289125328, 4.75, 14.035684289125328, 9.8399999999999999, 8.0500000000000007, 14.035684289125328, 8.4700000000000006, 14.035684289125328, 8.6400000000000006, 6.9000000000000004, 14.035684289125328, 9.1199999999999992, 9.5700000000000003, 8.2799999999999994, 14.035684289125328, 14.035684289125328, 14.035684289125328, 14.035684289125328, 14.035684289125328, 14.035684289125328, 14.035684289125328, 14.035684289125328, 14.035684289125328, 14.035684289125328, 14.035684289125328, 14.035684289125328, 14.035684289125328, 14.035684289125328, 14.035684289125328, 3.5099999999999998, 2.7000000000000002, 5.4199999999999999, 5.4199999999999999, 5.4199999999999999, 5.4199999999999999, 5.0199999999999996],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Ghana", "Angola", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Zimbabwe", "Somalia", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Cuba", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Bermuda", "Cayman Islands", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "NCL", "PYF", "VUT", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "LSO", "GAB", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "MTQ", "BLZ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [3, 4.7000000000000002, 1.5, 3.5899999999999999, 3.5900000000000003, 3.5900000000000003, 3.5900000000000003, 3.5900000000000003, 3.6800000000000002, 5.5599999999999996, 1.48, 5.4400000000000004, 8.5800000000000001, 4.8542425772092104, 0.5, 0.5, 0.5, 0.5, 0.5, 9.5099999999999998, 3.0099999999999998, 3.0099999999999998, 2.6299999999999999, 2.6299999999999999, 7.2599999999999998, 16.379999999999999, 6.2199999999999998, 4.7599999999999998, 11.49, 4.3799999999999999, 10.359999999999999, 6.6100000000000003, 7.2000000000000002, 6.8383029866569753, 6.8383029866569753, 4.0700000000000003, 6.8383029866569753, 10.56, 15.380000000000001, 17.123529241746592, 16.539999999999999, 9.6600000000000001, 29.649999999999999, 17.123529241746592, 19.82, 20.010000000000002, 14.41, 0.98999999999999999, 4.3499999999999996, 4.3538377174086271, 5, 5.25, 9.5099999999999998, 11.07, 7.0700000000000003, 5.6299999999999999, 4.4199999999999999, 5.2800000000000002, 16, 4.6100000000000003, 11.57, 11.912462668951779, 8.3900000000000006, 22.609999999999999, 11.912462668951779, 5.7400000000000002, 10.69, 10.15, 5.5, 11.912462668951779, 11.912462668951779, 9.9700000000000006, 8.7599999999999998, 11.912462668951779, 11.912462668951779, 16.100000000000001, 7.8700000000000001, 11.912462668951779, 11.912462668951779, 11.912462668951779, 11.912462668951779, 11.912462668951779, 11.912462668951779, 11.912462668951779, 11.912462668951779, 11.912462668951779, 11.912462668951779, 11.912462668951779, 11.912462668951779, 11.912462668951779, 3.48, 9.5399999999999991, 8.2100000000000009, 14.84, 14.827787658736446, 14.25, 18, 12.359999999999999, 22.079999999999998, 12.835753996406709, 8.3900000000000006, 12.835753996406709, 3.5, 8.2899999999999991, 5.1500000000000004, 5.79, 4.6900000000000004, 4.7000000000000002, 5.1600000000000001, 18.170000000000002, 7.0035617128167278, 8, 7.0035617128167278, 5.1399999999999997, 5.1399999999999997, 7.0035617128167278, 7.0035617128167278, 6, 17, 7.0035617128167278, 10.380000000000001, 17.550000000000001, 20.620000000000001, 8, 17.77, 13.67, 21.280000000000001, 15.81, 18.406261090551183, 27.859999999999999, 60, 5.1399999999999997, 18.406261090551183, 6.5099999999999998, 38.590000000000003, 12.380000000000001, 5.1399999999999997, 18.406261090551183, 6.9100000000000001, 18.406261090551183, 17.170000000000002, 6.9299999999999997, 14.800000000000001, 18.406261090551183, 5.1399999999999997, 15.66, 18.406261090551183, 13.25, 18.406261090551183, 18.406261090551183, 10.029999999999999, 29, 6.8799999999999999, 11.58, 18.406261090551183, 5.1399999999999997, 18.406261090551183, 8.5, 10.75, 18.406261090551183, 18.406261090551183, 10.5, 9.4900000000000002, 18.406261090551183, 19.609999999999999, 12.24, 18.406261090551183, 46.920000000000002, 7.3300000000000001, 26.579999999999998, 4.5499999999999998, 13.69, 21.059999999999999, 13.83, 16.789999999999999, 13.840665305934936, 13.050000000000001, 8.1099999999999994, 13.840665305934936, 12.75, 13.91, 19.260000000000002, 16.98, 10.779999999999999, 13.840665305934936, 11.369999999999999, 6.7699999999999996, 13.840665305934936, 14.91, 9, 13, 14.43, 13.840665305934936, 4.25, 13.840665305934936, 9.4600000000000009, 8.0500000000000007, 13.840665305934936, 8.3399999999999999, 13.840665305934936, 8.3100000000000005, 6.2999999999999998, 13.840665305934936, 8.75, 9.3100000000000005, 8.0700000000000003, 13.840665305934936, 13.840665305934936, 13.840665305934936, 13.840665305934936, 13.840665305934936, 13.840665305934936, 13.840665305934936, 13.840665305934936, 13.840665305934936, 13.840665305934936, 13.840665305934936, 13.840665305934936, 13.840665305934936, 13.840665305934936, 13.840665305934936, 4.0999999999999996, 2.7000000000000002, 5.25, 5.25, 5.25, 5.25, 4.7599999999999998],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "New Caledonia", "French Polynesia", "Vanuatu", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Lesotho", "Gabon", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Martinique", "Belize", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "AZE", "BLR", "TJK", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "PSE", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "BRB", "GUF", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "MAF", "VGB", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [2.6800000000000002, 4.7000000000000002, 1.5, 3.54, 3.5400000000000005, 3.5400000000000005, 3.5400000000000005, 3.5400000000000005, 3.6800000000000002, 6.8099999999999996, 1.47, 4.96, 8.5800000000000001, 5.3660639083497932, 0.5, 0.5, 0.5, 0.5, 0.5, 9.4499999999999993, 2.9300000000000002, 2.9300000000000002, 2.6299999999999999, 2.6299999999999999, 6.9500000000000002, 19, 5.9299999999999997, 4.7599999999999998, 11.119999999999999, 3.79, 8.8499999999999996, 6.1100000000000003, 6.5300000000000002, 6.420756996444096, 6.420756996444096, 4.1600000000000001, 6.420756996444096, 8.8699999999999992, 19.969999999999999, 18.670383432981957, 17.449999999999999, 8.6999999999999993, 27.190000000000001, 18.670383432981957, 19.510000000000002, 17.710000000000001, 12.789999999999999, 0.98999999999999999, 4.3499999999999996, 4.3540837595769704, 5.04, 5.29, 9.4499999999999993, 10.539999999999999, 7.3700000000000001, 6.1200000000000001, 4.1500000000000004, 5.3300000000000001, 16, 4.9299999999999997, 11.550000000000001, 12.027188934333857, 9.0700000000000003, 22.609999999999999, 12.027188934333857, 5.6799999999999997, 10.75, 10.68, 5.5, 10.18, 12.027188934333857, 12.027188934333857, 8.9499999999999993, 12.027188934333857, 12.027188934333857, 15.699999999999999, 8.0399999999999991, 12.027188934333857, 12.027188934333857, 12.027188934333857, 12.027188934333857, 12.027188934333857, 12.027188934333857, 12.027188934333857, 12.027188934333857, 12.027188934333857, 12.027188934333857, 12.027188934333857, 12.027188934333857, 12.027188934333857, 3.6600000000000001, 9.6500000000000004, 8.5299999999999994, 14.84, 14.822982668119854, 14, 18, 12.359999999999999, 22.079999999999998, 12.952229913972902, 8.6600000000000001, 12.952229913972902, 3.48, 9.0999999999999996, 5.25, 5.8700000000000001, 4.8300000000000001, 4.9800000000000004, 5.1600000000000001, 18.32, 6.9973094985672715, 8, 6.9973094985672715, 5.1399999999999997, 5.1399999999999997, 6.9973094985672715, 6.9973094985672715, 6, 17, 6.9973094985672715, 10.08, 16.899999999999999, 24.75, 8, 17.41, 13.06, 19.850000000000001, 20.68, 17.502910067361839, 22.98, 55.390000000000001, 5.1399999999999997, 17.502910067361839, 6.7599999999999998, 32.289999999999999, 9.7899999999999991, 5.1399999999999997, 17.502910067361839, 7.1299999999999999, 17.502910067361839, 16.949999999999999, 6.7599999999999998, 14.789999999999999, 17.502910067361839, 5.1399999999999997, 15.960000000000001, 17.502910067361839, 13.25, 17.502910067361839, 17.502910067361839, 10.140000000000001, 28, 6.5, 17.502910067361839, 11.35, 5.1399999999999997, 17.502910067361839, 8.5, 10.31, 17.502910067361839, 17.502910067361839, 10.5, 8.9700000000000006, 17.502910067361839, 19.870000000000001, 12.31, 17.502910067361839, 39.079999999999998, 8.0399999999999991, 48.520000000000003, 4.1799999999999997, 12.109999999999999, 21.059999999999999, 12.199999999999999, 14.539999999999999, 12.930792136167797, 12.92, 8.0399999999999991, 12.930792136167797, 13.1, 12.529999999999999, 17.800000000000001, 15.720000000000001, 10.9, 12.930792136167797, 11.119999999999999, 6.8799999999999999, 12.930792136167797, 14.09, 9.0899999999999999, 13, 14.300000000000001, 12.930792136167797, 4.25, 9.1099999999999994, 12.930792136167797, 8.0500000000000007, 12.930792136167797, 8.1099999999999994, 12.930792136167797, 7.8399999999999999, 6, 12.930792136167797, 8.4900000000000002, 8.9800000000000004, 7.8099999999999996, 12.930792136167797, 12.930792136167797, 12.930792136167797, 12.930792136167797, 12.930792136167797, 12.930792136167797, 12.930792136167797, 12.930792136167797, 12.930792136167797, 12.930792136167797, 12.930792136167797, 12.930792136167797, 12.930792136167797, 12.930792136167797, 12.930792136167797, 4.9000000000000004, 2.7000000000000002, 5.2599999999999998, 5.2600000000000007, 5.2600000000000007, 5.2600000000000007, 4.7599999999999998],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Belarus", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Oman", "Palestine, State of", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "Barbados", "French Guiana", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Saint Martin (French part)", "Virgin Islands, British", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "NFK", "TKL", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "RWA", "BEN", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "CUB", "HTI", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "GLP", "BHS", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "DMA", "CYM", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [2.6000000000000001, 4.7000000000000002, 1.5, 3.6899999999999999, 3.6899999999999999, 3.6899999999999999, 3.6899999999999999, 3.6899999999999999, 3.6800000000000002, 7.1600000000000001, 1.79, 4.5499999999999998, 8.5800000000000001, 5.5360175946155454, 0.5, 0.5, 0.5, 0.5, 0.5, 9.4700000000000006, 3.2400000000000002, 3.2399999999999998, 2.6299999999999999, 2.6299999999999999, 6.9500000000000002, 19.82, 6.2800000000000002, 4.7599999999999998, 10.82, 3.29, 8.25, 5.6100000000000003, 6.1799999999999997, 6.1590309771440168, 6.1590309771440168, 3.98, 6.1590309771440168, 8.75, 23.609999999999999, 19.76538609257052, 17.280000000000001, 23.550000000000001, 9.0199999999999996, 19.76538609257052, 19, 17, 12.140000000000001, 0.98999999999999999, 4.3499999999999996, 4.3544562003253127, 5.0999999999999996, 5.3600000000000003, 9.4700000000000006, 10.369999999999999, 7.71, 7.0999999999999996, 4.0800000000000001, 5.25, 16, 4.8799999999999999, 11.24, 11.918552096790641, 8.6500000000000004, 22.609999999999999, 11.918552096790641, 6.0300000000000002, 10.6, 11.52, 5.5, 10.050000000000001, 11.918552096790641, 11.918552096790641, 8.9299999999999997, 11.918552096790641, 11.918552096790641, 14.699999999999999, 8.0700000000000003, 11.918552096790641, 11.918552096790641, 11.918552096790641, 11.918552096790641, 11.918552096790641, 11.918552096790641, 11.918552096790641, 11.918552096790641, 11.918552096790641, 11.918552096790641, 11.918552096790641, 11.918552096790641, 11.918552096790641, 3.4500000000000002, 9.5600000000000005, 12.23, 14.84, 14.823365187982843, 14, 18, 12.359999999999999, 22.079999999999998, 13.074968339119748, 8.6600000000000001, 13.074968339119748, 3.5299999999999998, 10.51, 5.9299999999999997, 5.4100000000000001, 4.8099999999999996, 5.04, 5.1600000000000001, 16.120000000000001, 6.9913959985738403, 8, 6.9913959985738403, 5.1399999999999997, 5.1399999999999997, 6.9913959985738403, 6.9913959985738403, 6, 17, 6.9913959985738403, 10.130000000000001, 15.380000000000001, 26.739999999999998, 8, 16.969999999999999, 12.44, 19.850000000000001, 19.300000000000001, 16.650550543510086, 18.960000000000001, 49, 5.1399999999999997, 16.650550543510086, 6.6900000000000004, 25.670000000000002, 10.289999999999999, 5.1399999999999997, 16.650550543510086, 16.18, 16.650550543510086, 16.530000000000001, 6.6900000000000004, 14.529999999999999, 16.650550543510086, 5.1399999999999997, 17.969999999999999, 16.650550543510086, 13.25, 16.650550543510086, 16.650550543510086, 9.8800000000000008, 28, 6.4000000000000004, 16.650550543510086, 11.33, 5.1399999999999997, 16.650550543510086, 8.4499999999999993, 10.130000000000001, 16.650550543510086, 16.650550543510086, 10.5, 9.1400000000000006, 16.650550543510086, 19.059999999999999, 12.6, 16.650550543510086, 37.469999999999999, 8.4299999999999997, 67.25, 4.1799999999999997, 11.77, 21.059999999999999, 11.56, 14.390000000000001, 12.897673741212904, 12.74, 8.4000000000000004, 12.897673741212904, 14.119999999999999, 12.49, 17.34, 15.48, 12.460000000000001, 12.897673741212904, 8.75, 7.0899999999999999, 12.897673741212904, 13, 9.25, 10.48, 14.960000000000001, 12.897673741212904, 4.25, 9.0700000000000003, 12.897673741212904, 12.897673741212904, 8.0500000000000007, 7.7199999999999998, 12.897673741212904, 7.5700000000000003, 5.7000000000000002, 12.897673741212904, 8.3499999999999996, 8.6099999999999994, 7.54, 12.897673741212904, 12.897673741212904, 12.897673741212904, 12.897673741212904, 12.897673741212904, 12.897673741212904, 12.897673741212904, 12.897673741212904, 12.897673741212904, 12.897673741212904, 12.897673741212904, 12.897673741212904, 12.897673741212904, 12.897673741212904, 12.897673741212904, 5.2800000000000002, 2.7000000000000002, 5.0999999999999996, 5.0999999999999988, 5.0999999999999988, 5.0999999999999988, 4.7599999999999998],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Norfolk Island", "Tokelau", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Guadeloupe", "Bahamas", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Dominica", "Cayman Islands", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "WLF", "NRU", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SEN", "SOM", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "CUB", "DOM", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [2.3300000000000001, 4.7000000000000002, 1.5, 3.3399999999999999, 3.3399999999999999, 3.3399999999999999, 3.3399999999999999, 3.3399999999999999, 3.6800000000000002, 6.4900000000000002, 1.96, 4.3399999999999999, 8.5800000000000001, 5.2132565261258259, 0.5, 0.5, 0.5, 0.5, 0.5, 9.1500000000000004, 2.7000000000000002, 2.7000000000000002, 2.6299999999999999, 2.6299999999999999, 5.7599999999999998, 14.289999999999999, 6.1200000000000001, 4.7599999999999998, 11.800000000000001, 3.0699999999999998, 8.1799999999999997, 5.1900000000000004, 5.9100000000000001, 6.2519926857283785, 6.2519926857283785, 3.73, 6.2519926857283785, 6.7800000000000002, 22.34, 19.035911187788038, 17.18, 23.550000000000001, 9.0299999999999994, 19.035911187788038, 17.039999999999999, 16.93, 11.619999999999999, 0.98999999999999999, 4.3499999999999996, 4.3538656336823021, 5, 5.2599999999999998, 9.1500000000000004, 9.5399999999999991, 7.6500000000000004, 7.0999999999999996, 3.29, 5.25, 14.83, 3.9399999999999999, 11.24, 11.119224086843003, 7.8099999999999996, 22.609999999999999, 11.119224086843003, 6.1799999999999997, 10.68, 11.6, 5.5, 9.7599999999999998, 11.119224086843003, 11.119224086843003, 8.6999999999999993, 11.119224086843003, 11.119224086843003, 14.470000000000001, 7.8300000000000001, 11.119224086843003, 11.119224086843003, 11.119224086843003, 11.119224086843003, 11.119224086843003, 11.119224086843003, 11.119224086843003, 11.119224086843003, 11.119224086843003, 11.119224086843003, 11.119224086843003, 11.119224086843003, 11.119224086843003, 2.7999999999999998, 8.3000000000000007, 10.76, 14.84, 14.823764520105119, 14, 18, 12.359999999999999, 22.079999999999998, 12.936681188694145, 7.4800000000000004, 12.936681188694145, 3.3100000000000001, 10.51, 5.5199999999999996, 5.4699999999999998, 4.1399999999999997, 4.0899999999999999, 5.1600000000000001, 11.369999999999999, 6.9851215686615786, 8, 6.9851215686615786, 5.1399999999999997, 5.1399999999999997, 6.9851215686615786, 6.9851215686615786, 6, 17, 6.9851215686615786, 7.71, 13.640000000000001, 25.960000000000001, 8, 16.68, 12, 19.850000000000001, 19.66, 16.818319508902444, 17.079999999999998, 48.869999999999997, 5.1399999999999997, 16.818319508902444, 6.54, 24.219999999999999, 9.4800000000000004, 5.1399999999999997, 16.818319508902444, 33.009999999999998, 16.818319508902444, 6.54, 16.34, 12.19, 16.818319508902444, 5.1399999999999997, 17.940000000000001, 16.818319508902444, 13.25, 16.818319508902444, 16.818319508902444, 7.8700000000000001, 28, 5.75, 16.818319508902444, 8.9800000000000004, 5.1399999999999997, 16.818319508902444, 7.2199999999999998, 7.96, 16.818319508902444, 16.818319508902444, 8.0899999999999999, 8.1899999999999995, 16.818319508902444, 18.829999999999998, 11.609999999999999, 16.818319508902444, 29.039999999999999, 6.3399999999999999, 29.390000000000001, 4.1799999999999997, 9.8499999999999996, 21.059999999999999, 11.23, 12.94, 11.976836418096493, 12.529999999999999, 7.5899999999999999, 14.630000000000001, 11.976836418096493, 10.98, 17.010000000000002, 13.539999999999999, 11.18, 11.976836418096493, 6.6399999999999997, 7.0099999999999998, 11.976836418096493, 12.06, 6.5499999999999998, 9.4700000000000006, 14.800000000000001, 4.25, 11.976836418096493, 8.7300000000000004, 11.976836418096493, 11.976836418096493, 8.0500000000000007, 7.1299999999999999, 11.976836418096493, 6.8300000000000001, 6.7999999999999998, 11.976836418096493, 7.9900000000000002, 7.6799999999999997, 11.976836418096493, 6.9000000000000004, 11.976836418096493, 11.976836418096493, 11.976836418096493, 11.976836418096493, 11.976836418096493, 11.976836418096493, 11.976836418096493, 11.976836418096493, 11.976836418096493, 11.976836418096493, 11.976836418096493, 11.976836418096493, 11.976836418096493, 11.976836418096493, 3.54, 2.7000000000000002, 5.0999999999999996, 5.0999999999999996, 5.0999999999999996, 5.0999999999999996, 4.7599999999999998],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Nauru", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Cuba", "Dominican Republic", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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
            "title": "Interest rates on bank credit to the private sector",
            "ticklen": 2
          },
          "colorscale": [
            ["0", "#de5842"],
            ["1e-05", "#188AF0"],
            ["1", "#00D4B0"]
          ],
          "showscale": true,
          "locations": ["ITA", "MLT", "NLD", "CZE", "SVK", "LTU", "LVA", "EST", "SWE", "ROU", "HUN", "BGR", "HRV", "SVN", "GBR", "JEY", "IMN", "GGY", "GIB", "IOT", "NOR", "SJM", "CHE", "LIE", "ISL", "UKR", "ALB", "SRB", "GEO", "BIH", "MDA", "MKD", "MNE", "AND", "MCO", "SMR", "VAT", "RUS", "UZB", "PRK", "AZE", "TJK", "BLR", "TKM", "KGZ", "MNG", "ARM", "JPN", "CHN", "TWN", "HKG", "MAC", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "MMR", "MYS", "LKA", "KHM", "PNG", "LAO", "TLS", "FJI", "SLB", "MDV", "BRN", "VUT", "NCL", "PYF", "WSM", "GUM", "KIR", "FSM", "TON", "ASM", "MNP", "MHL", "PLW", "COK", "NRU", "WLF", "TUV", "NIU", "TKL", "NFK", "UMI", "PCN", "KOR", "BGD", "PAK", "AFG", "NPL", "BTN", "IRN", "IRQ", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "PSE", "OMN", "KWT", "QAT", "BHR", "EGY", "SDN", "DZA", "MAR", "NER", "MLI", "TCD", "TUN", "LBY", "MRT", "ESH", "ZAF", "NGA", "COD", "ETH", "TZA", "KEN", "UGA", "AGO", "GHA", "MOZ", "MDG", "CIV", "CMR", "BFA", "MWI", "ZMB", "SOM", "SEN", "ZWE", "GIN", "BEN", "RWA", "BDI", "SSD", "TGO", "SLE", "COG", "LBR", "CAF", "ERI", "NAM", "GMB", "BWA", "GAB", "LSO", "GNB", "GNQ", "MUS", "SWZ", "DJI", "REU", "COM", "CPV", "MYT", "STP", "SYC", "SHN", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "PER", "ECU", "GTM", "BOL", "HTI", "DOM", "CUB", "HND", "PRY", "NIC", "SLV", "CRI", "PAN", "PRI", "JAM", "TTO", "GUY", "SUR", "BHS", "GLP", "BLZ", "MTQ", "GUF", "BRB", "LCA", "CUW", "GRD", "ABW", "VIR", "VCT", "ATG", "CYM", "DMA", "BMU", "KNA", "TCA", "SXM", "VGB", "MAF", "BES", "AIA", "BLM", "MSR", "FLK", "ATA", "SGS", "BVT", "USA", "CAN", "AUS", "CXR", "CCK", "HMD", "NZL"],
          "z": [2.0299999999999998, 4.7000000000000002, 1.5, 3.2000000000000002, 3.1999999999999997, 3.1999999999999997, 3.1999999999999997, 3.1999999999999997, 3.6800000000000002, 5.6100000000000003, 2.96, 4.1200000000000001, 8.5800000000000001, 4.9921850499463565, 0.5, 0.5, 0.5, 0.5, 0.5, 8.6999999999999993, 2.27, 2.27, 2.6400000000000001, 2.6400000000000001, 5.4000000000000004, 13.289999999999999, 6.0199999999999996, 4.7599999999999998, 12.51, 3.2000000000000002, 7.4000000000000004, 4.8600000000000003, 5.7599999999999998, 6.2746627661764407, 6.2746627661764407, 3.5299999999999998, 6.2746627661764407, 7.1799999999999997, 21.399999999999999, 18.622671452282734, 16.43, 23.550000000000001, 10.119999999999999, 18.622671452282734, 16.620000000000001, 16.010000000000002, 11.76, 0.98999999999999999, 4.3499999999999996, 4.3538294685170014, 5, 5.2599999999999998, 8.6999999999999993, 8.9199999999999999, 7.8099999999999996, 7.0999999999999996, 3.0600000000000001, 5.25, 14.83, 3.4399999999999999, 11.24, 10.937519782146817, 7.7199999999999998, 22.609999999999999, 10.937519782146817, 5.9400000000000004, 5.1799999999999997, 11.57, 5.5, 9.3300000000000001, 10.937519782146817, 10.937519782146817, 8.5199999999999996, 10.937519782146817, 10.937519782146817, 12.619999999999999, 7.7599999999999998, 10.937519782146817, 10.937519782146817, 10.937519782146817, 10.937519782146817, 10.937519782146817, 10.937519782146817, 10.937519782146817, 10.937519782146817, 10.937519782146817, 10.937519782146817, 10.937519782146817, 10.937519782146817, 10.937519782146817, 2.8799999999999999, 7.3200000000000003, 8.6699999999999999, 14.84, 14.824025563756434, 14, 18, 12.359999999999999, 22.079999999999998, 12.926473507238589, 7.0199999999999996, 12.926473507238589, 3.1000000000000001, 10.51, 5.5599999999999996, 5.5, 3.71, 3.8500000000000001, 5.1600000000000001, 9.4299999999999997, 6.9783411257894201, 8, 6.9783411257894201, 5.1399999999999997, 5.1399999999999997, 6.9783411257894201, 6.9783411257894201, 6, 17, 6.9783411257894201, 7.04, 11.48, 23.289999999999999, 8, 16.68, 12.08, 19.850000000000001, 19.399999999999999, 17.206566414223762, 18.170000000000002, 48.280000000000001, 5.1399999999999997, 17.206566414223762, 6.25, 23.879999999999999, 9.4800000000000004, 17.206566414223762, 5.1399999999999997, 45.479999999999997, 17.206566414223762, 6.25, 16.18, 12.859999999999999, 17.206566414223762, 5.1399999999999997, 18.859999999999999, 17.206566414223762, 13.25, 17.206566414223762, 17.206566414223762, 6.8600000000000003, 19.5, 5.25, 17.206566414223762, 8.2100000000000009, 5.1399999999999997, 17.206566414223762, 6.8700000000000001, 7.25, 17.206566414223762, 17.206566414223762, 7.8799999999999999, 7.6200000000000001, 17.206566414223762, 18.489999999999998, 9.1600000000000001, 17.206566414223762, 30.02, 4.8899999999999997, 35.560000000000002, 4.1799999999999997, 9.3399999999999999, 21.059999999999999, 7.4500000000000002, 10.98, 10.940852121847666, 12.19, 8.0199999999999996, 13.35, 9.6099999999999994, 10.940852121847666, 15.970000000000001, 12.51, 9.6199999999999992, 10.940852121847666, 5.5099999999999998, 6.9400000000000004, 10.940852121847666, 11.49, 7.4400000000000004, 8.8800000000000008, 14.890000000000001, 4.25, 10.940852121847666, 8.4399999999999995, 10.940852121847666, 10.940852121847666, 8.0500000000000007, 6.7599999999999998, 10.940852121847666, 6.5499999999999998, 6.7999999999999998, 10.940852121847666, 7.6500000000000004, 7.3899999999999997, 10.940852121847666, 6.2999999999999998, 10.940852121847666, 10.940852121847666, 10.940852121847666, 10.940852121847666, 10.940852121847666, 10.940852121847666, 10.940852121847666, 10.940852121847666, 10.940852121847666, 10.940852121847666, 10.940852121847666, 10.940852121847666, 10.940852121847666, 10.940852121847666, 3.25, 2.7000000000000002, 5.0999999999999996, 5.0999999999999996, 5.0999999999999996, 5.0999999999999996, 4.7599999999999998],
          "text": ["Italy", "Malta", "Netherlands", "Czech Republic", "Slovakia", "Lithuania", "Latvia", "Estonia", "Sweden", "Romania", "Hungary", "Bulgaria", "Croatia", "Slovenia", "United Kingdom", "Jersey", "Isle of Man", "Guernsey", "Gibraltar", "British Indian Ocean Territory", "Norway", "Svalbard and Jan Mayen", "Switzerland", "Liechtenstein", "Iceland", "Ukraine", "Albania", "Serbia", "Georgia", "Bosnia and Herzegovina", "Moldova, Republic of", "Macedonia, the former Yugoslav Republic of", "Montenegro", "Andorra", "Monaco", "San Marino", "Holy See (Vatican City State)", "Russian Federation", "Uzbekistan", "Korea, Democratic People's Republic of", "Azerbaijan", "Tajikistan", "Belarus", "Turkmenistan", "Kyrgyzstan", "Mongolia", "Armenia", "Japan", "China", "Taiwan, Province of China", "Hong Kong", "Macao", "India", "Indonesia", "Viet Nam", "Philippines", "Thailand", "Singapore", "Myanmar", "Malaysia", "Sri Lanka", "Cambodia", "Papua New Guinea", "Lao People's Democratic Republic", "Timor-Leste", "Fiji", "Solomon Islands", "Maldives", "Brunei Darussalam", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Micronesia, Federated States of", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Nauru", "Wallis and Futuna", "Tuvalu", "Niue", "Tokelau", "Norfolk Island", "United States Minor Outlying Islands", "Pitcairn", "Korea, Republic of", "Bangladesh", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Iran, Islamic Republic of", "Iraq", "Yemen", "Syrian Arab Republic", "Jordan", "United Arab Emirates", "Israel", "Lebanon", "Palestine, State of", "Oman", "Kuwait", "Qatar", "Bahrain", "Egypt", "Sudan", "Algeria", "Morocco", "Niger", "Mali", "Chad", "Tunisia", "Libya", "Mauritania", "Western Sahara", "South Africa", "Nigeria", "Congo, the Democratic Republic of the", "Ethiopia", "Tanzania, United Republic of", "Kenya", "Uganda", "Angola", "Ghana", "Mozambique", "Madagascar", "Cote d Ivoire", "Cameroon", "Burkina Faso", "Malawi", "Zambia", "Somalia", "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "South Sudan", "Togo", "Sierra Leone", "Congo", "Liberia", "Central African Republic", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Swaziland", "Djibouti", "Reunion", "Comoros", "Cape Verde", "Mayotte", "Sao Tome and Principe", "Seychelles", "Saint Helena, Ascension and Tristan da Cunha", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Venezuela, Bolivarian Republic of", "Uruguay", "Peru", "Ecuador", "Guatemala", "Bolivia, Plurinational State of", "Haiti", "Dominican Republic", "Cuba", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Bahamas", "Guadeloupe", "Belize", "Martinique", "French Guiana", "Barbados", "Saint Lucia", "Curacao", "Grenada", "Aruba", "Virgin Islands, U.S.", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Cayman Islands", "Dominica", "Bermuda", "Saint Kitts and Nevis", "Turks and Caicos Islands", "Sint Maarten (Dutch part)", "Virgin Islands, British", "Saint Martin (French part)", "Bonaire, Sint Eustatius and Saba", "Anguilla", "Saint Barthelemy", "Montserrat", "Falkland Islands (Malvinas)", "Antarctica", "South Georgia and the South Sandwich Islands", "Bouvet Island", "United States", "Canada", "Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and McDonald Islands", "New Zealand"],
          "zmin": 0,
          "zmax": 110,
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

  
