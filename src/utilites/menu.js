const Menus = [
   // 20240809160052
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5833886&lng=77.08162759999999&restaurantId=441176

{
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            "text": "Bakingo",
            "headerStyling": {
              "textColor": "text_Highest_Emphasis",
              "textVariant": "header_H3_Black"
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            "tabs": [
              {
                "id": "Order Online",
                "title": "Order Online"
              }
            ]
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "441176",
              "name": "Bakingo",
              "city": "Noida 1",
              "slugs": {
                "restaurant": "bakingo-sector-18-sector-18",
                "city": "noida-1"
              },
              "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/94334df3-9e70-4e70-a5d0-a85996c1db0b_441176.JPG",
              "locality": "E Block",
              "areaName": "Sector 3",
              "costForTwo": "30000",
              "costForTwoMessage": "₹300 for two",
              "cuisines": [
                "Bakery"
              ],
              "avgRating": 4.6,
              "feeDetails": {
                "restaurantId": "441176",
                "fees": [
                  {
                    "name": "TYPE_DISTANCE",
                    "fee": 28700
                  },
                  {
                    "name": "TYPE_TIME"
                  }
                ],
                "totalFee": 28700,
                "title": "Delivery Charge",
                "amount": "28700",
                "icon": "v1648635511/Delivery_fee_new_cjxumu",
                "message": "<b>23.1 kms</b> | ₹287 Delivery fee will apply"
              },
              "parentId": "3818",
              "avgRatingString": "4.6",
              "totalRatingsString": "5K+ ratings",
              "sla": {
                "restaurantId": "441176",
                "deliveryTime": 64,
                "minDeliveryTime": 60,
                "maxDeliveryTime": 65,
                "lastMileTravel": 23.1,
                "serviceability": "NON_SERVICEABLE",
                "stressFactor": 1,
                "rainMode": "RAIN_MODE_NONE",
                "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                "zoneId": 2828,
                "slaString": "60-65 MINS",
                "lastMileTravelString": "23.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-10 01:00:00",
                "visibility": true,
                "opened": true,
                "restaurantClosedMeta": {
                  
                }
              },
              "aggregatedDiscountInfo": {
                "header": "Get items under 109",
                "shortDescriptionList": [
                  {
                    "meta": "Get items under 109",
                    "discountType": "FinalPrice",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "Get items under 109",
                    "discountType": "FinalPrice",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "10% off upto ₹150 |  Use HSBCFEST Above ₹499",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "visible": true
              },
              "badges": {
                
              },
              "slugString": "bakingo-sector-18-sector-18",
              "multiOutlet": true,
              "isOpen": true,
              "labels": [
                {
                  "title": "Timings",
                  "message": "null"
                },
                {
                  "title": "Address",
                  "message": "D-24 Ground Floor, Sector-3, Noida-201301"
                },
                {
                  "title": "Cuisines",
                  "message": "Bakery"
                }
              ],
              "logo": "rng/md/carousel/production/sy7qlk0rswg7hi1xlvls",
              "totalRatings": 5000,
              "aggregatedDiscountInfoV2": {
                "header": "Get items under 109",
                "shortDescriptionList": [
                  {
                    "meta": "Get items under 109",
                    "discountType": "FinalPrice",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "Get items under 109",
                    "discountType": "FinalPrice",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "10% off upto ₹150 |  Use HSBCFEST Above ₹499",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "couponDetailsCta": "View coupon details"
              },
              "type": "F",
              "nudgeBanners": [
                {
                  "priority": 1,
                  "discountInfo": {
                    "discountType": "FinalPrice",
                    "value": 109
                  },
                  "unlockedMessage": "Deal of the Day unlocked!",
                  "minItemCount": 1,
                  "maxItemCount": 1,
                  "type": "SILD",
                  "nudgeTagInfo": {
                    "title": "Deal of the Day",
                    "fontName": "FONT_NAME_CONDENSED_BOLD"
                  },
                  "logoCtx": {
                    
                  }
                }
              ],
              "headerBanner": {
                "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/441176"
              },
              "ratingSlab": "RATING_SLAB_5",
              "availabilityServiceabilityMessage": "Does not deliver to your location",
              "orderabilityCommunication": {
                "title": {
                  "text": "Wish you were"
                },
                "subTitle": {
                  "text": "CLOSER!"
                },
                "message": {
                  "text": "This location is outside the outlet's delivery area",
                  "textColour": "negative"
                },
                "customIcon": {
                  "bgGradientColorStart": "#F64C41",
                  "bgGradientColorEnd": "#E53554"
                }
              },
              "hasBestsellerItems": true,
              "nearestOutletNudge": {
                "nearestOutletInfo": {
                  "siblingOutlet": {
                    "id": "101565",
                    "city": "0",
                    "slugs": {
                      
                    },
                    "areaName": "Dwarka",
                    "costForTwo": "0",
                    "feeDetails": {
                      
                    },
                    "sla": {
                      "deliveryTime": 25,
                      "lastMileTravel": 2,
                      "slaString": "25 MINS",
                      "lastMileTravelString": "2.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "restaurantClosedMeta": {
                        
                      }
                    },
                    "aggregatedDiscountInfo": {
                      "visible": true
                    },
                    "badges": {
                      
                    },
                    "aggregatedDiscountInfoV2": {
                      "visible": true
                    },
                    "availabilityServiceabilityMessage": "Temporarily closed for delivery",
                    "cartOrderabilityNudgeBanner": {
                      "parameters": {
                        
                      },
                      "presentation": {
                        
                      }
                    }
                  }
                },
                "nearestOutletComms": {
                  "title": {
                    "text": "Don't worry! Try our outlet that's delivering"
                  },
                  "subTitle": {
                    "text": "Switch to the fastest alternate"
                  }
                }
              },
              "cartOrderabilityNudgeBanner": {
                "parameters": {
                  
                },
                "presentation": {
                  
                }
              },
              "latLong": "28.5817457,77.318264",
              "backgroundImageOverlayInfo": {
                
              }
            },
            "analytics": {
              
            }
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            "sectionId": "POP_UP_CROUTON_MENU"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "rows": 1,
              "columns": 5,
              "horizontalScrollEnabled": true,
              "itemSpacing": 12,
              "lineSpacing": 10,
              "widgetPadding": {
                
              },
              "containerStyle": {
                "containerPadding": {
                  "left": 10,
                  "right": 10,
                  "bottom": 16
                }
              },
              "scrollBar": {
                
              }
            },
            "id": "offerCollectionWidget_UX4",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                "offers": [
                  {
                    "info": {
                      "header": "ITEMS AT ₹109",
                      "offerTag": "DEAL OF DAY",
                      "offerTagColor": "#E46D47",
                      "offerIds": [
                        "07b946fb-1bbd-45a7-a948-ff213ee4fc50"
                      ],
                      "expiryTime": "1970-01-01T11:58:09Z",
                      "description": "ON SELECT ITEMS |",
                      "offerType": "offers",
                      "restId": "441176",
                      "offerLogo": "offers/deal-of-day",
                      "descriptionTextColor": "#7302060C",
                      "showExpiryTimer": true
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "10% OFF UPTO ₹150",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/224113cb-129f-4263-bc1d-92c84fd3ed8c_HSBC.png",
                      "offerIds": [
                        "4cab15ad-5a73-4aa1-91e0-f945bd61c465"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE HSBCFEST",
                      "description": "ABOVE ₹499",
                      "offerType": "offers",
                      "restId": "441176",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/224113cb-129f-4263-bc1d-92c84fd3ed8c_HSBC.png",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "30% OFF UPTO ₹150",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/16d410a3-56fd-4a93-8f21-373180d89ce4_AxisMenuLogo.png",
                      "offerIds": [
                        "a2812cd5-616f-47e9-81e6-04d650f77d20"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE AXIS30",
                      "description": "ABOVE ₹200",
                      "offerType": "offers",
                      "restId": "441176",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/16d410a3-56fd-4a93-8f21-373180d89ce4_AxisMenuLogo.png",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "FLAT ₹200 OFF",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/d2b89c98-2528-4370-a271-ea127127ad2d_Axis.png",
                      "offerIds": [
                        "19096af1-e158-440f-abfe-129ebd0a67b8"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE AXIS200",
                      "description": "ABOVE ₹1000",
                      "offerType": "offers",
                      "restId": "441176",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/d2b89c98-2528-4370-a271-ea127127ad2d_Axis.png",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "20% OFF UPTO ₹100",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/8/1/80812b58-923d-4130-a83c-ad230fa32cdb_RuPay.png",
                      "offerIds": [
                        "c0aaa402-7f3e-4aac-aae8-8655a78f64bb"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE RUPAY100",
                      "description": "ABOVE ₹129",
                      "offerType": "offers",
                      "restId": "441176",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/8/1/80812b58-923d-4130-a83c-ad230fa32cdb_RuPay.png",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  }
                ],
                "habitMilestoneInfo": {
                  "callout": {
                    
                  }
                },
                "loyaltyDiscoverPresentationInfo": {
                  "logoCtx": {
                    
                  }
                }
              }
            }
          }
        }
      },
      {
        "groupedCard": {
          "cardGroupMap": {
            "REGULAR": {
              "cards": [
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      "badges": {
                        
                      },
                      "vegOnlyDetails": {
                        "imageId": "AutoVegOnly_qkjowj",
                        "title": "Showing only vegetarian options.",
                        "description": "Tap on the VEG ONLY button to turn off the setting"
                      },
                      "topRatedFilter": {
                        "attributes": {
                          "displayText": "Ratings 4.0+"
                        }
                      },
                      "kidsCategoryFilter": {
                        "attributes": {
                          "displayText": "Kids Favourites",
                          "tooltip": {
                            "enabled": true,
                            "displayText": "Kids Favourites Filter applied. Remove this filter to see the full Menu."
                          }
                        }
                      },
                      "vegFilter": {
                        "attributes": {
                          "displayText": "VEG"
                        }
                      },
                      "nonvegFilter": {
                        "attributes": {
                          "displayText": "NONVEG"
                        }
                      }
                    },
                    "relevance": {
                      "type": "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      "sectionId": "MENU_FILTER_TOGGLE"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Recommended",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "79385006",
                              "name": "Butterscotch Pastry",
                              "category": "Pastries",
                              "description": "Serves 1 | A childhood favourite combines butterscotch chips with choco sticks, white marbles & whipped cream",
                              "imageId": "v5je8qzy4w8s0conzzxo",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 9900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142323119",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "52001522",
                                  "groupName": "Add On",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "102193413",
                                      "name": "Premium Bakingo Opener",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113522238",
                                      "name": "Single Red Rose",
                                      "price": 14900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "182 ratings",
                                  "ratingCountV2": "182"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "79385005",
                              "name": "Black Forest Pastry",
                              "category": "Pastries",
                              "description": "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/073d1754-7431-4501-924b-2700f9f27e0b_eba1a687-f635-4ec2-b0f2-fdfa2fe3ba8f.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 9900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142322709",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "52001521",
                                  "groupName": "Add On",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "102193413",
                                      "name": "Premium Bakingo Opener",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113522238",
                                      "name": "Single Red Rose",
                                      "price": 14900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.9",
                                  "ratingCount": "180 ratings",
                                  "ratingCountV2": "180"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "79384485",
                              "name": "Blueberry Bake Cheesecake Slice",
                              "category": "Baked Cheesecakes",
                              "description": "Serves 1 | A light & creamy cheese cake with blueberry pulp baked with cream cheese",
                              "imageId": "f532ecd6ffae5ca5b75cf0f18c1123ac",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 19900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142322382",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "385 ratings",
                                  "ratingCountV2": "385"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861072",
                              "name": "Chocolate Jar Cake",
                              "category": "Jar Cake",
                              "description": "Serves 1 | A thick layered velvety chocolate classic in a jar",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/267b53e3-ca48-461c-a9cc-cacf2a02878d_1325764d-bbf7-4a7e-80ba-7c048e87d115.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                "variantGroups": [
                                  {
                                    "groupId": "13890496",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Mini (200ml)",
                                        "price": 119,
                                        "default": 1,
                                        "id": "45026629",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Large (375ml)",
                                        "price": 199,
                                        "id": "45026630",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ],
                                "pricingModels": [
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890496",
                                        "variationId": "45026629"
                                      }
                                    ],
                                    "price": 11900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142323238",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142323238",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "52001504",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "52001504",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "52001504",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "52001504",
                                        "addonId": "102193413"
                                      }
                                    ]
                                  },
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890496",
                                        "variationId": "45026630"
                                      }
                                    ],
                                    "price": 19900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142323238",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142323238",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "52001504",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "52001504",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "52001504",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "52001504",
                                        "addonId": "102193413"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "addons": [
                                {
                                  "groupId": "142323238",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "52001504",
                                  "groupName": "Add On",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "102193413",
                                      "name": "Premium Bakingo Opener",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113522238",
                                      "name": "Single Red Rose",
                                      "price": 14900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 11900,
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "403 ratings",
                                  "ratingCountV2": "403"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861074",
                              "name": "Red Velvet Jar Cake",
                              "category": "Jar Cake",
                              "description": "Serves 1 | A perfct construction of red velvet goodness, carfully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet cake in a jar",
                              "imageId": "eba8fb9aa7a92797a97af17520bcd749",
                              "inStock": 1,
                              "isVeg": 1,
                              "finalPrice": 10900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                "variantGroups": [
                                  {
                                    "groupId": "13890529",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Mini (200ml)",
                                        "price": 159,
                                        "default": 1,
                                        "id": "45026698",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Large (375ml)",
                                        "price": 229,
                                        "id": "45026699",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ],
                                "pricingModels": [
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890529",
                                        "variationId": "45026698"
                                      }
                                    ],
                                    "price": 15900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142322354",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142322354",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "102193413"
                                      }
                                    ],
                                    "finalPrice": {
                                      "units": "109"
                                    }
                                  },
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890529",
                                        "variationId": "45026699"
                                      }
                                    ],
                                    "price": 22900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142322354",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142322354",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "102193413"
                                      }
                                    ],
                                    "finalPrice": {
                                      "units": "179"
                                    }
                                  }
                                ]
                              },
                              "addons": [
                                {
                                  "groupId": "142322354",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "52001520",
                                  "groupName": "Add On",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "102193413",
                                      "name": "Premium Bakingo Opener",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113522238",
                                      "name": "Single Red Rose",
                                      "price": 14900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 15900,
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "offerTags": [
                                {
                                  
                                }
                              ],
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "itemNudgeType": "FinalPrice",
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "120 ratings",
                                  "ratingCountV2": "120"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861067",
                              "name": "Blueberry Jar Cake",
                              "category": "Jar Cake",
                              "description": "Serves 1 | An exotic mix of fresh blueberry pulp and freshly baked cake in a jar is a seasoal treat",
                              "imageId": "rxbbzo6bj4tkbzbkypmr",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15900,
                              "finalPrice": 10900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142323061",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "52001497",
                                  "groupName": "Add On",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "102193413",
                                      "name": "Premium Bakingo Opener",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113522238",
                                      "name": "Single Red Rose",
                                      "price": 14900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 15900,
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "offerTags": [
                                {
                                  
                                }
                              ],
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "itemNudgeType": "FinalPrice",
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "115 ratings",
                                  "ratingCountV2": "115"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861091",
                              "name": "Black Forest Cake",
                              "category": "Cakes",
                              "description": "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes & a cherry on top",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/da853906-73b9-4176-ac06-0e0c9eb65b1b_f3b48d48-5345-4bf1-a4ad-d4425c4bf935.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                "variantGroups": [
                                  {
                                    "groupId": "13890280",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "500 gm",
                                        "price": 479,
                                        "default": 1,
                                        "id": "45026147",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "1 Kg",
                                        "price": 849,
                                        "id": "45026148",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ],
                                "pricingModels": [
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890280",
                                        "variationId": "45026147"
                                      }
                                    ],
                                    "price": 47900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142322414",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142322414",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "48132293",
                                        "addonId": "34455116"
                                      },
                                      {
                                        "groupId": "48132293",
                                        "addonId": "34455117"
                                      },
                                      {
                                        "groupId": "48132296",
                                        "addonId": "34455118"
                                      },
                                      {
                                        "groupId": "48132296",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "48132296",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "137419533",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "137419533",
                                        "addonId": "117749265"
                                      },
                                      {
                                        "groupId": "48132305",
                                        "addonId": "34455145"
                                      },
                                      {
                                        "groupId": "48132305",
                                        "addonId": "34455147"
                                      },
                                      {
                                        "groupId": "48132305",
                                        "addonId": "34455136"
                                      },
                                      {
                                        "groupId": "48132305",
                                        "addonId": "113484071"
                                      }
                                    ]
                                  },
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890280",
                                        "variationId": "45026148"
                                      }
                                    ],
                                    "price": 84900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142322414",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142322414",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "48132293",
                                        "addonId": "34455116"
                                      },
                                      {
                                        "groupId": "48132293",
                                        "addonId": "34455117"
                                      },
                                      {
                                        "groupId": "48132296",
                                        "addonId": "34455118"
                                      },
                                      {
                                        "groupId": "48132296",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "48132296",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "137419533",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "137419533",
                                        "addonId": "117749265"
                                      },
                                      {
                                        "groupId": "48132305",
                                        "addonId": "34455145"
                                      },
                                      {
                                        "groupId": "48132305",
                                        "addonId": "34455147"
                                      },
                                      {
                                        "groupId": "48132305",
                                        "addonId": "34455136"
                                      },
                                      {
                                        "groupId": "48132305",
                                        "addonId": "113484071"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "addons": [
                                {
                                  "groupId": "48132293",
                                  "groupName": "Add On - Birthday Caps",
                                  "choices": [
                                    {
                                      "id": "34455116",
                                      "name": "Birthday Cap for Boys",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455117",
                                      "name": "Birthday Caps For Girls",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "48132296",
                                  "groupName": "Add On -  Candles",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455118",
                                      "name": "BIRTHDAY Letter Candles",
                                      "price": 12900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "48132305",
                                  "groupName": "Add On - Extras",
                                  "choices": [
                                    {
                                      "id": "34455145",
                                      "name": "Happy Birthday Banner",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455136",
                                      "name": "6 Inch Teddy Bear",
                                      "price": 29900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455147",
                                      "name": "Set of 50 balloons (deflated)",
                                      "price": 14900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113484071",
                                      "name": "Set of 2 Party Poppers",
                                      "price": 13900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "142322414",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 47900,
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "93 ratings",
                                  "ratingCountV2": "93"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861095",
                              "name": "German Black Forest Cake",
                              "category": "Cakes",
                              "description": "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist German chocolate topped with whipped cream and garnished with chocolate flakes & a cherry on top",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/b4697009-19c9-4424-bfe4-081ea9510d58_8bc6d937-5d88-4a18-a60b-3b95baabb40a.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 49900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "48132569",
                                  "groupName": "Add On - Birthday Caps",
                                  "choices": [
                                    {
                                      "id": "34455116",
                                      "name": "Birthday Cap for Boys",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455117",
                                      "name": "Birthday Caps For Girls",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "48132572",
                                  "groupName": "Add On -  Candles",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455118",
                                      "name": "BIRTHDAY Letter Candles",
                                      "price": 12900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "48132579",
                                  "groupName": "Add On - Extras",
                                  "choices": [
                                    {
                                      "id": "34455145",
                                      "name": "Happy Birthday Banner",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455136",
                                      "name": "6 Inch Teddy Bear",
                                      "price": 29900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455147",
                                      "name": "Set of 50 balloons (deflated)",
                                      "price": 14900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113484071",
                                      "name": "Set of 2 Party Poppers",
                                      "price": 13900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "142322981",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 49900,
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "59 ratings",
                                  "ratingCountV2": "59"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861132",
                              "name": "Red Velvet Cake",
                              "category": "Cakes",
                              "description": "Serves 1 | A vanilla based red velvet cake dressed in red velvet crumbs with dollops of whipped cream",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/ef4312f3-5ad8-4930-bcb7-a9f3ddcff4e5_9b6b6195-18bf-4cb5-984a-feb3f4748862.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 59900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "48131806",
                                  "groupName": "Add On - Birthday Caps",
                                  "choices": [
                                    {
                                      "id": "34455116",
                                      "name": "Birthday Cap for Boys",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455117",
                                      "name": "Birthday Caps For Girls",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "48131808",
                                  "groupName": "Add On -  Candles",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455118",
                                      "name": "BIRTHDAY Letter Candles",
                                      "price": 12900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "48131818",
                                  "groupName": "Add On - Extras",
                                  "choices": [
                                    {
                                      "id": "34455145",
                                      "name": "Happy Birthday Banner",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455136",
                                      "name": "6 Inch Teddy Bear",
                                      "price": 29900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455147",
                                      "name": "Set of 50 balloons (deflated)",
                                      "price": 14900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113484071",
                                      "name": "Set of 2 Party Poppers",
                                      "price": 13900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "142322966",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 59900,
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.9",
                                  "ratingCount": "58 ratings",
                                  "ratingCountV2": "58"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861044",
                              "name": "Classic Walnut Brownie",
                              "category": "Brownie & Tarts",
                              "description": "Serves 1 | A classic brownie Bakingo style. Infused with milkmaid, fresh cream and Vanleer dark chocolate, inundated with walnuts.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/deb05d15-23ed-4fde-9416-ebe06d9c7787_44f72fed-67c3-4c09-9227-d44e54b44182.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                "variantGroups": [
                                  {
                                    "groupId": "13890272",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Single",
                                        "price": 89,
                                        "default": 1,
                                        "id": "45026130",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Pack of 6",
                                        "price": 499,
                                        "id": "45026131",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ],
                                "pricingModels": [
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890272",
                                        "variationId": "45026130"
                                      }
                                    ],
                                    "price": 8900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142323186",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142323186",
                                        "addonId": "115200445"
                                      }
                                    ]
                                  },
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890272",
                                        "variationId": "45026131"
                                      }
                                    ],
                                    "price": 49900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142323186",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142323186",
                                        "addonId": "115200445"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "addons": [
                                {
                                  "groupId": "142323186",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 8900,
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.9",
                                  "ratingCount": "120 ratings",
                                  "ratingCountV2": "120"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861051",
                              "name": "Blueberry Cup Cake",
                              "category": "Cup Cakes",
                              "description": "Serves 1 | Fresh blueberry pulp topped with whipped cream & sprinkles in a cup cake",
                              "imageId": "bqct0qlenq6npiooqtjo",
                              "inStock": 1,
                              "isVeg": 1,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                "variantGroups": [
                                  {
                                    "groupId": "13890475",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Single",
                                        "price": 89,
                                        "default": 1,
                                        "id": "45026581",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Double",
                                        "price": 109,
                                        "id": "45026582",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Pack Of 6",
                                        "price": 299,
                                        "id": "45026583",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ],
                                "pricingModels": [
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890475",
                                        "variationId": "45026581"
                                      }
                                    ],
                                    "price": 8900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142322851",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142322851",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "52001495",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "52001495",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "52001495",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "52001495",
                                        "addonId": "102193413"
                                      }
                                    ]
                                  },
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890475",
                                        "variationId": "45026582"
                                      }
                                    ],
                                    "price": 10900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142322851",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142322851",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "52001495",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "52001495",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "52001495",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "52001495",
                                        "addonId": "102193413"
                                      }
                                    ]
                                  },
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890475",
                                        "variationId": "45026583"
                                      }
                                    ],
                                    "price": 29900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142322851",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142322851",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "52001495",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "52001495",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "52001495",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "52001495",
                                        "addonId": "102193413"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "addons": [
                                {
                                  "groupId": "142322851",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "52001495",
                                  "groupName": "Add On",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "102193413",
                                      "name": "Premium Bakingo Opener",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113522238",
                                      "name": "Single Red Rose",
                                      "price": 14900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 8900,
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "63 ratings",
                                  "ratingCountV2": "63"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861047",
                              "name": "Vanilla Cup Cake",
                              "category": "Cup Cakes",
                              "description": "Serves 1 | A classic cupcake with vanilla whippd cream adn edible sugar sprinkles",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/6/c80b9d34-fae8-4259-8c8f-1862db9a9813_8a0cfc9a-bc37-4c84-8146-334a9a0cd484_compressed",
                              "inStock": 1,
                              "isVeg": 1,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                "variantGroups": [
                                  {
                                    "groupId": "13890275",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Single",
                                        "price": 89,
                                        "default": 1,
                                        "id": "45026136",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Double",
                                        "price": 129,
                                        "id": "45026137",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Pack Of 6",
                                        "price": 299,
                                        "id": "45026138",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ],
                                "pricingModels": [
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890275",
                                        "variationId": "45026136"
                                      }
                                    ],
                                    "price": 8900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142323224",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142323224",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "52001241",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "52001241",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "52001241",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "52001241",
                                        "addonId": "102193413"
                                      }
                                    ]
                                  },
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890275",
                                        "variationId": "45026137"
                                      }
                                    ],
                                    "price": 12900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142323224",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142323224",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "52001241",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "52001241",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "52001241",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "52001241",
                                        "addonId": "102193413"
                                      }
                                    ]
                                  },
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890275",
                                        "variationId": "45026138"
                                      }
                                    ],
                                    "price": 29900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142323224",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142323224",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "52001241",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "52001241",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "52001241",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "52001241",
                                        "addonId": "102193413"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "addons": [
                                {
                                  "groupId": "142323224",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "52001241",
                                  "groupName": "Add On",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "102193413",
                                      "name": "Premium Bakingo Opener",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113522238",
                                      "name": "Single Red Rose",
                                      "price": 14900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 8900,
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "135 ratings",
                                  "ratingCountV2": "135"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "type": "CATEGORY_TYPE_RECOMMENDED"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Items at 109",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861074",
                              "name": "Red Velvet Jar Cake",
                              "category": "Jar Cake",
                              "description": "Serves 1 | A perfct construction of red velvet goodness, carfully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet cake in a jar",
                              "imageId": "eba8fb9aa7a92797a97af17520bcd749",
                              "inStock": 1,
                              "isVeg": 1,
                              "finalPrice": 10900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                "variantGroups": [
                                  {
                                    "groupId": "13890529",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Mini (200ml)",
                                        "price": 159,
                                        "default": 1,
                                        "id": "45026698",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Large (375ml)",
                                        "price": 229,
                                        "id": "45026699",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ],
                                "pricingModels": [
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890529",
                                        "variationId": "45026698"
                                      }
                                    ],
                                    "price": 15900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142322354",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142322354",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "102193413"
                                      }
                                    ],
                                    "finalPrice": {
                                      "units": "109"
                                    }
                                  },
                                  {
                                    "variations": [
                                      {
                                        "groupId": "13890529",
                                        "variationId": "45026699"
                                      }
                                    ],
                                    "price": 22900,
                                    "addonCombinations": [
                                      {
                                        "groupId": "142322354",
                                        "addonId": "115200444"
                                      },
                                      {
                                        "groupId": "142322354",
                                        "addonId": "115200445"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "34455119"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "34455120"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "113522238"
                                      },
                                      {
                                        "groupId": "52001520",
                                        "addonId": "102193413"
                                      }
                                    ],
                                    "finalPrice": {
                                      "units": "179"
                                    }
                                  }
                                ]
                              },
                              "addons": [
                                {
                                  "groupId": "142322354",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "52001520",
                                  "groupName": "Add On",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "102193413",
                                      "name": "Premium Bakingo Opener",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113522238",
                                      "name": "Single Red Rose",
                                      "price": 14900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 15900,
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "offerTags": [
                                {
                                  
                                }
                              ],
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "itemNudgeType": "FinalPrice",
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "120 ratings",
                                  "ratingCountV2": "120"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861067",
                              "name": "Blueberry Jar Cake",
                              "category": "Jar Cake",
                              "description": "Serves 1 | An exotic mix of fresh blueberry pulp and freshly baked cake in a jar is a seasoal treat",
                              "imageId": "rxbbzo6bj4tkbzbkypmr",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15900,
                              "finalPrice": 10900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142323061",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "52001497",
                                  "groupName": "Add On",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "102193413",
                                      "name": "Premium Bakingo Opener",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113522238",
                                      "name": "Single Red Rose",
                                      "price": 14900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 15900,
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "offerTags": [
                                {
                                  
                                }
                              ],
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "itemNudgeType": "FinalPrice",
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "115 ratings",
                                  "ratingCountV2": "115"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861071",
                              "name": "Choco Mud Jar Cake",
                              "category": "Jar Cake",
                              "description": "Serves 1 | A layered chococalte classic with vanilla cream and the texture of chocolate mud",
                              "imageId": "dyukktyibpcrg1ylf5uo",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 12900,
                              "finalPrice": 10900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142322063",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "52001513",
                                  "groupName": "Add On",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "102193413",
                                      "name": "Premium Bakingo Opener",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113522238",
                                      "name": "Single Red Rose",
                                      "price": 14900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 12900,
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "offerTags": [
                                {
                                  
                                }
                              ],
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "itemNudgeType": "FinalPrice",
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "337 ratings",
                                  "ratingCountV2": "337"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861070",
                              "name": "Choco Crunch Jar Cake",
                              "category": "Jar Cake",
                              "description": "Serves 1 | A crunchy rendition of the original blends soft and crispy in perfect proportions",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/6/a13bc6a7-12fb-4829-97ab-c270cca236c9_15973f2c-99ed-4845-b128-64fc08a212f1_compressed",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 12900,
                              "finalPrice": 10900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142322198",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "52001512",
                                  "groupName": "Add On",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "102193413",
                                      "name": "Premium Bakingo Opener",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113522238",
                                      "name": "Single Red Rose",
                                      "price": 14900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 12900,
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "offerTags": [
                                {
                                  
                                }
                              ],
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "itemNudgeType": "FinalPrice",
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "116 ratings",
                                  "ratingCountV2": "116"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "78861068",
                              "name": "Butterscotch Jar Cake",
                              "category": "Jar Cake",
                              "description": "Serves 1 | This childhood favourite combines crunchy butterscotch bits & creamy butterscotch bread in a jar cake",
                              "imageId": "vatp3njevgajwz3of2rn",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15900,
                              "finalPrice": 10900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142322459",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "52001501",
                                  "groupName": "Add On",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "102193413",
                                      "name": "Premium Bakingo Opener",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113522238",
                                      "name": "Single Red Rose",
                                      "price": 14900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 15900,
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "offerTags": [
                                {
                                  
                                }
                              ],
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "itemNudgeType": "FinalPrice",
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "50 ratings",
                                  "ratingCountV2": "50"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Pastries",
                      "categories": [
                        {
                          "title": "Classic",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "79384476",
                                  "name": "Choco Truffle Pastry",
                                  "category": "Pastries",
                                  "description": "Serves 1 | A decadent and exotic combination of melted chocolate and truffles augmented with a streak of white chocolate to top it off",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/a765adfc-9ae1-46e5-bcf5-6f62d3d830a0_e7784b64-8240-4b8a-940a-f2d6c769a1a3.jpg_compressed",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 10900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142321901",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001150",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "683 ratings",
                                      "ratingCountV2": "683"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "79385014",
                                  "name": "Pineapple Pastry",
                                  "category": "Pastries",
                                  "description": "Serves 1 | An eggless classic pineapple pastry topped with a cherry. Freshly baked bread and scented vanilla essence seals the deal.",
                                  "imageId": "fmymcdjsjiubmcf7eki3",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 9900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323026",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001528",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCount": "446 ratings",
                                      "ratingCountV2": "446"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "79385006",
                                  "name": "Butterscotch Pastry",
                                  "category": "Pastries",
                                  "description": "Serves 1 | A childhood favourite combines butterscotch chips with choco sticks, white marbles & whipped cream",
                                  "imageId": "v5je8qzy4w8s0conzzxo",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 9900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323119",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001522",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCount": "182 ratings",
                                      "ratingCountV2": "182"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "79385019",
                                  "name": "Kit Kat Pastry",
                                  "category": "Pastries",
                                  "description": "Serves 1 | A perfect match of chocolatty goodness and kit kat crumbs binds together with whipped cream, A bakingo special",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/1245670a-cbe4-434a-ba9c-f0b7daec11dc_21807d6f-82ad-4b79-914e-2f94482c2390.jpg_compressed",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 9900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323254",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001533",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "224 ratings",
                                      "ratingCountV2": "224"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "79385018",
                                  "name": "Red Velvet Pastry",
                                  "category": "Pastries",
                                  "description": "Serves 1 | An eggless construction of layers of red velvet goodness, carefully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet pastry",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/aa597c6f-9668-407b-b3ed-a341e645d3fb_e4fc503e-ab56-4a6b-ab52-60b08eecaba3.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 9900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323247",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001530",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCount": "239 ratings",
                                      "ratingCountV2": "239"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "79385005",
                                  "name": "Black Forest Pastry",
                                  "category": "Pastries",
                                  "description": "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/073d1754-7431-4501-924b-2700f9f27e0b_eba1a687-f635-4ec2-b0f2-fdfa2fe3ba8f.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 9900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322709",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001521",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.9",
                                      "ratingCount": "180 ratings",
                                      "ratingCountV2": "180"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "79385007",
                                  "name": "Chocolate Chip Pastry",
                                  "category": "Pastries",
                                  "description": "Serves 1 | The softness of freshly baked bread and chocolate with the crispyness of chocolate chips & white chocolates defines this classic",
                                  "imageId": "xauvrdljflukdvr3wssa",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 9900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322792",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001523",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCount": "185 ratings",
                                      "ratingCountV2": "185"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Gourmet",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "90185507",
                                  "name": "Opera Pastry",
                                  "category": "Pastries",
                                  "description": "Serves 1 | Jocan sponge, coffee, fresh cream, chd 45 chocolate, egg & butter complete this delicacy",
                                  "imageId": "jhlcqlll26l5vsw1qwc9",
                                  "inStock": 1,
                                  "price": 11900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322608",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001622",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCount": "48 ratings",
                                      "ratingCountV2": "48"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "90185508",
                                  "name": "Tiramisu Pastry Tub",
                                  "category": "Pastries",
                                  "description": "Serves 1 | A crowd favorite, Bakingo style, replete with Jocan sponge, topping cream, butter & cream cheese",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/27/1a3e48ba-c77e-4e5b-847f-6065d3cb4542_8cc6104e-1cb9-4084-95b8-71f940d47557.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 19900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322597",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001623",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.7",
                                      "ratingCount": "73 ratings",
                                      "ratingCountV2": "73"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "131002572",
                                  "name": "4 Assorted Pastries",
                                  "category": "Pastries",
                                  "description": "Serves 4 | Choose your own set of 4 pastries",
                                  "imageId": "22d952222a676b4c13c1126f746116cf",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 2500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "130869745",
                                      "groupName": "Choose any 2 of  Classic",
                                      "choices": [
                                        {
                                          "id": "110999961",
                                          "name": "Pineapple Pastry",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "110999960",
                                          "name": "Butterscotch Pastry",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "110999959",
                                          "name": "Kit Kat Pastry",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "110999958",
                                          "name": "Red Velvet Pastry",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "110999957",
                                          "name": "Choco Truffle Pastry",
                                          "price": 9900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1,
                                      "minAddons": 2
                                    },
                                    {
                                      "groupId": "130869746",
                                      "groupName": "Choose any 2 of Gourmet",
                                      "choices": [
                                        {
                                          "id": "110999955",
                                          "name": "New York Bake Cheesecake Slice",
                                          "price": 14900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "110999953",
                                          "name": "Blueberry Bake Cheesecake Slice",
                                          "price": 14900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "110999962",
                                          "name": "Nutella Cheesecake Slice",
                                          "price": 19900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "110999954",
                                          "name": "Oreo Bake Cheesecake slice",
                                          "price": 19900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "110999956",
                                          "name": "Opera Pastry",
                                          "price": 10900,
                                          "inStock": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1,
                                      "minAddons": 2
                                    },
                                    {
                                      "groupId": "142322338",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 4"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Tres Leches",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "141356363",
                                  "name": "Rose Tres Leches",
                                  "category": "Pastries",
                                  "description": "Serves 1 | A luscious rose-flavored tres leches cake, soaked in a trio of sweet milks and adorned with delicate rose petals.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/25/5c992c28-0307-45f4-b2bc-759fef2d8de5_c5d8c0ec-0e75-4aad-864d-42a55a1352a1.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 19900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "155481455",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.3",
                                      "ratingCount": "5 ratings",
                                      "ratingCountV2": "5"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "141356364",
                                  "name": "Pistachio Tres Leches",
                                  "category": "Pastries",
                                  "description": "Serves 1 | A rich and creamy pistachio-flavored tres leches cake, infused with the nutty essence of pistachios and topped with a light pistachio cream",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/25/0182fd23-024f-41f3-89c1-6d54ddd633c1_17fa1c28-5b69-4c26-a8ec-dfdd594770d8.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 22900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "155481456",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCount": "6 ratings",
                                      "ratingCountV2": "6"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "146001197",
                                  "name": "Coconut Tres Leches",
                                  "category": "Pastries",
                                  "description": "Serves 1 | Coconut Tres Leches is a decadent dessert featuring a sponge cake soaked in a blend Three milks, infused with rich coconut flavor, and topped with whipped cream and toasted coconut flakes",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/15/9ed22624-1b22-45c4-9f85-6b135d41bb24_be055d67-0972-4b11-ab23-a08cf42a02a6.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 17900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "146001198",
                                  "name": "Ras malai Tres leches",
                                  "category": "Pastries",
                                  "description": "Serves 1 | A classic tres leches cake with the flavors of Indian rasmalai, featuring a sponge cake soaked in a mixture of three milks and saffron, topped with cream and garnished with nuts",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/15/b4158217-7769-4e1e-9b90-cc05fe22ddf4_4dbaa4e5-9a69-4b8f-91b5-0a4fa57a4677.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 24900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Baked Cheesecakes",
                      "categories": [
                        {
                          "title": "Slices",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "79384485",
                                  "name": "Blueberry Bake Cheesecake Slice",
                                  "category": "Baked Cheesecakes",
                                  "description": "Serves 1 | A light & creamy cheese cake with blueberry pulp baked with cream cheese",
                                  "imageId": "f532ecd6ffae5ca5b75cf0f18c1123ac",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 19900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322382",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "385 ratings",
                                      "ratingCountV2": "385"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "86187327",
                                  "name": "New York Bake Cheesecake Slice",
                                  "category": "Baked Cheesecakes",
                                  "description": "Serves 1 | Fresh & velvety cream cheese makes for a classic New York Baked Cheese Cake",
                                  "imageId": "bdfe8157c3371bc8b03d362290d834dc",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 17900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323207",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.9",
                                      "ratingCount": "150 ratings",
                                      "ratingCountV2": "150"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100318534",
                                  "name": "Crunchy Biscuit Cheesecake Slice",
                                  "category": "Baked Cheesecakes",
                                  "description": "Serves 1 | The perfect crunch of biscuit with the taste of cream cheese and fresh cream perfectly blended together.",
                                  "imageId": "xuhuloeocrlm70hriinx",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 19900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322129",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.9",
                                      "ratingCount": "18 ratings",
                                      "ratingCountV2": "18"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "133444914",
                                  "name": "Biscoff Baked Cheesecake Slice",
                                  "category": "Baked Cheesecakes",
                                  "description": "Serves 1 | Biscoff baked cheesecake slices combine the creamy richness of cheesecake with the irresistible flavor of  Biscoff spread",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/21/78f0383f-bdd4-4503-a507-c03a7269f165_03c621ae-adce-4628-9dfb-a030f5f635cb.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 17900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322343",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.9",
                                      "ratingCount": "6 ratings",
                                      "ratingCountV2": "6"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "101470263",
                                  "name": "Nutella Cheesecake Slice",
                                  "category": "Baked Cheesecakes",
                                  "description": "Serves 1 | A scrumptious and decadent cheesecake layered with fresh cream, cream cheese & nutella and inundated with butter and cookies",
                                  "imageId": "rgqlm27asr8qhgwxioln",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 19900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322868",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCount": "70 ratings",
                                      "ratingCountV2": "70"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "99530188",
                                  "name": "Oreo Bake Cheesecake slice",
                                  "category": "Baked Cheesecakes",
                                  "description": "Serves 1 | Delectable cream cheese, fresh cream, oreos and chocolate make for a classic oreo baked cheesecake, Bakingo style.",
                                  "imageId": "s44gxrymdttx1cfjxc4x",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 19900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322917",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCount": "43 ratings",
                                      "ratingCountV2": "43"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Cheesecakes",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "99530189",
                                  "name": "Blueberry Baked Cheesecake (600 gm)",
                                  "category": "Baked Cheesecakes",
                                  "description": "Serves 1 | Delectable cream cheese, fresh cream, and fresh blueberry pulp completes a classic cheese cake",
                                  "imageId": "ljvavslj6h5c93cnmppw",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 79900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322141",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "36 ratings",
                                      "ratingCountV2": "36"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Jar Cake",
                      "categories": [
                        {
                          "title": "Classic Jar Cakes",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861071",
                                  "name": "Choco Mud Jar Cake",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | A layered chococalte classic with vanilla cream and the texture of chocolate mud",
                                  "imageId": "dyukktyibpcrg1ylf5uo",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 12900,
                                  "finalPrice": 10900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322063",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001513",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 12900,
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "offerTags": [
                                    {
                                      
                                    }
                                  ],
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "itemNudgeType": "FinalPrice",
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "337 ratings",
                                      "ratingCountV2": "337"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861072",
                                  "name": "Chocolate Jar Cake",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | A thick layered velvety chocolate classic in a jar",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/267b53e3-ca48-461c-a9cc-cacf2a02878d_1325764d-bbf7-4a7e-80ba-7c048e87d115.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    "variantGroups": [
                                      {
                                        "groupId": "13890496",
                                        "name": "Quantity",
                                        "variations": [
                                          {
                                            "name": "Mini (200ml)",
                                            "price": 119,
                                            "default": 1,
                                            "id": "45026629",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "Large (375ml)",
                                            "price": 199,
                                            "id": "45026630",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          }
                                        ]
                                      }
                                    ],
                                    "pricingModels": [
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890496",
                                            "variationId": "45026629"
                                          }
                                        ],
                                        "price": 11900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142323238",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142323238",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001504",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001504",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001504",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001504",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890496",
                                            "variationId": "45026630"
                                          }
                                        ],
                                        "price": 19900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142323238",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142323238",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001504",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001504",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001504",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001504",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323238",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001504",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 11900,
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "403 ratings",
                                      "ratingCountV2": "403"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861074",
                                  "name": "Red Velvet Jar Cake",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | A perfct construction of red velvet goodness, carfully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet cake in a jar",
                                  "imageId": "eba8fb9aa7a92797a97af17520bcd749",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "finalPrice": 10900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    "variantGroups": [
                                      {
                                        "groupId": "13890529",
                                        "name": "Quantity",
                                        "variations": [
                                          {
                                            "name": "Mini (200ml)",
                                            "price": 159,
                                            "default": 1,
                                            "id": "45026698",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "Large (375ml)",
                                            "price": 229,
                                            "id": "45026699",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          }
                                        ]
                                      }
                                    ],
                                    "pricingModels": [
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890529",
                                            "variationId": "45026698"
                                          }
                                        ],
                                        "price": 15900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322354",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322354",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001520",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001520",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001520",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001520",
                                            "addonId": "102193413"
                                          }
                                        ],
                                        "finalPrice": {
                                          "units": "109"
                                        }
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890529",
                                            "variationId": "45026699"
                                          }
                                        ],
                                        "price": 22900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322354",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322354",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001520",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001520",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001520",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001520",
                                            "addonId": "102193413"
                                          }
                                        ],
                                        "finalPrice": {
                                          "units": "179"
                                        }
                                      }
                                    ]
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322354",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001520",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 15900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "offerTags": [
                                    {
                                      
                                    }
                                  ],
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "itemNudgeType": "FinalPrice",
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "120 ratings",
                                      "ratingCountV2": "120"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861067",
                                  "name": "Blueberry Jar Cake",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | An exotic mix of fresh blueberry pulp and freshly baked cake in a jar is a seasoal treat",
                                  "imageId": "rxbbzo6bj4tkbzbkypmr",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 15900,
                                  "finalPrice": 10900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323061",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001497",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 15900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "offerTags": [
                                    {
                                      
                                    }
                                  ],
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "itemNudgeType": "FinalPrice",
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "115 ratings",
                                      "ratingCountV2": "115"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861070",
                                  "name": "Choco Crunch Jar Cake",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | A crunchy rendition of the original blends soft and crispy in perfect proportions",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/6/a13bc6a7-12fb-4829-97ab-c270cca236c9_15973f2c-99ed-4845-b128-64fc08a212f1_compressed",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 12900,
                                  "finalPrice": 10900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322198",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001512",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 12900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "offerTags": [
                                    {
                                      
                                    }
                                  ],
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "itemNudgeType": "FinalPrice",
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "116 ratings",
                                      "ratingCountV2": "116"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861068",
                                  "name": "Butterscotch Jar Cake",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | This childhood favourite combines crunchy butterscotch bits & creamy butterscotch bread in a jar cake",
                                  "imageId": "vatp3njevgajwz3of2rn",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 15900,
                                  "finalPrice": 10900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322459",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001501",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 15900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "offerTags": [
                                    {
                                      
                                    }
                                  ],
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "itemNudgeType": "FinalPrice",
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "50 ratings",
                                      "ratingCountV2": "50"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Gourmet Jar Cakes",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "112326017",
                                  "name": "Belgian Chocolate Mousse Jar Cake",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | A mousse based chocolate jar cake prepared with milk chocolate, fresh cream, chocolate sponge and nutella.",
                                  "imageId": "14456111aaf9b8147aa1553fcd5d6950",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 17900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322276",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "82148635",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "78 ratings",
                                      "ratingCountV2": "78"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "112326018",
                                  "name": "Biscoff Cheesecake Jar",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | A delectable cheesecake jar prepared with fresh cream, infused with cream cheese and topped with a Lotus Biscoff Biscuit",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/a61e5cdb-cda5-46ea-927e-4142bd149a11_5d468f5b-2bc6-414c-b544-4cf67311163a.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 19900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322650",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "109 ratings",
                                      "ratingCountV2": "109"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "79384497",
                                  "name": "Chocolate Hazelnut Caramel Jar Cake",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | A chocolate cake base topped with chocolate sauce, a sticky toffee caramel syrup and a blend of hazelnuts completes this decadent concoction",
                                  "imageId": "hypy5cbzqxf9bciwviav",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 15900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322625",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001223",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "83 ratings",
                                      "ratingCountV2": "83"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "79384489",
                                  "name": "Banoffee Jar Cake",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | Banana, cream and thick caramel sauce layered with sponge cake completes this classic, Bakingo style.",
                                  "imageId": "wdwmtt41w64imixpqyg9",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 15900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322889",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001221",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCount": "73 ratings",
                                      "ratingCountV2": "73"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Verrine Cups",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "96812089",
                                  "name": "Trio Mousse",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | A decadent trio of white chocolate, milk chocolate, CHD 45 chocolate & egg topped off with a rich creamy mousse.",
                                  "imageId": "cbpd40juwalzvgydndol",
                                  "inStock": 1,
                                  "price": 11900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323127",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "56132955",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.4",
                                      "ratingCount": "44 ratings",
                                      "ratingCountV2": "44"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100976410",
                                  "name": "Filter Coffee",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | The flavour, fragrance and taste of filter coffee in a verrine cup topped with coffee balls, chocolate and fresh cream.",
                                  "imageId": "ykumu3jsmhr74xnapyik",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 15900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322660",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "12 ratings",
                                      "ratingCountV2": "12"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100976412",
                                  "name": "Caramel Cheese",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | The silkiness of caramel, fresh cream and cream cheese topped with whipped cream in a verrine cup.",
                                  "imageId": "gxea4q7o4swls0cidzd4",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 17900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142321919",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "30 ratings",
                                      "ratingCountV2": "30"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100284628",
                                  "name": "Lemon Cheesecake",
                                  "category": "Jar Cake",
                                  "description": "Serves 1 | A classic lemon cheescake verrine cup with lemon spread, white glaze, topped with fresh cream",
                                  "imageId": "omezknessyh4c24mtqxm",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 15900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323016",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCount": "24 ratings",
                                      "ratingCountV2": "24"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Gourmet Cakes",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "96812091",
                              "name": "Trio Mousse Cake (500 gm)",
                              "category": "Gourmet Cakes",
                              "description": "Serves 1 | A decadent trio of white chocolate, milk chocolate, CHD 45 chocolate & egg topped off with a rich cream.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/a7a26657-9d00-4b8a-ad54-190ca31dcfa0_881fd7d2-fa64-46db-ac0a-cf8085498470.jpg_compressed",
                              "inStock": 1,
                              "price": 61900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "56132957",
                                  "groupName": "Add On - Birthday Caps",
                                  "choices": [
                                    {
                                      "id": "34455116",
                                      "name": "Birthday Cap for Boys",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455117",
                                      "name": "Birthday Caps For Girls",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "56132958",
                                  "groupName": "Add On -  Candles",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455118",
                                      "name": "BIRTHDAY Letter Candles",
                                      "price": 12900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "56132960",
                                  "groupName": "Add On - Extras",
                                  "choices": [
                                    {
                                      "id": "34455145",
                                      "name": "Happy Birthday Banner",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455136",
                                      "name": "6 Inch Teddy Bear",
                                      "price": 29900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455147",
                                      "name": "Set of 50 balloons (deflated)",
                                      "price": 14900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113484071",
                                      "name": "Set of 2 Party Poppers",
                                      "price": 13900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "142323109",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.8",
                                  "ratingCount": "14 ratings",
                                  "ratingCountV2": "14"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "110237312",
                              "name": "Belgian Chocolate Cake (600 gm)",
                              "category": "Gourmet Cakes",
                              "description": "Serves 1 | Inspired by the famous chocolate, blended with truffle, milk chocolate, cocoa butter and inundated with french biscuits for the perfect texture.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/e2aec75e-9b0f-4a6e-beda-1600934016e7_9a135240-3a59-4ba5-9d13-8c2bc0cab59b.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 59900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "77848333",
                                  "groupName": "Add On - Birthday Caps",
                                  "choices": [
                                    {
                                      "id": "34455116",
                                      "name": "Birthday Cap for Boys",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455117",
                                      "name": "Birthday Caps For Girls",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "77848334",
                                  "groupName": "Add On -  Candles",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455118",
                                      "name": "BIRTHDAY Letter Candles",
                                      "price": 12900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "77848335",
                                  "groupName": "Add On - Extras",
                                  "choices": [
                                    {
                                      "id": "34455145",
                                      "name": "Happy Birthday Banner",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455136",
                                      "name": "6 Inch Teddy Bear",
                                      "price": 29900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455147",
                                      "name": "Set of 50 balloons (deflated)",
                                      "price": 14900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113484071",
                                      "name": "Set of 2 Party Poppers",
                                      "price": 13900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "142322828",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 59900,
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "15 ratings",
                                  "ratingCountV2": "15"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "135118765",
                              "name": "Dream Cake (500 gm)",
                              "category": "Gourmet Cakes",
                              "description": "Serves 1 | It's a luscious chocolate cake with layers of rich chocolate ganache, making it a decadent treat.",
                              "imageId": "4134968f461f4430e089bd055312754c",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 59900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "139803885",
                                  "groupName": "Add On - Birthday Caps",
                                  "choices": [
                                    {
                                      "id": "34455116",
                                      "name": "Birthday Cap for Boys",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455117",
                                      "name": "Birthday Caps For Girls",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "139803886",
                                  "groupName": "Add On -  Candles",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455118",
                                      "name": "BIRTHDAY Letter Candles",
                                      "price": 12900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "139803887",
                                  "groupName": "Add On - Extras",
                                  "choices": [
                                    {
                                      "id": "34455145",
                                      "name": "Happy Birthday Banner",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455136",
                                      "name": "6 Inch Teddy Bear",
                                      "price": 29900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455147",
                                      "name": "Set of 50 balloons (deflated)",
                                      "price": 14900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113484071",
                                      "name": "Set of 2 Party Poppers",
                                      "price": 13900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "142322292",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "90185475",
                              "name": "Coffee Opera Cake (500 gm)",
                              "category": "Gourmet Cakes",
                              "description": "Serves 1 | Jocan sponge, coffee, fresh cream, egg and rich chocolate is topped off with our signature Opera glaze.",
                              "imageId": "veunwhek56tgfetrqjmk",
                              "inStock": 1,
                              "price": 61900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "49999616",
                                  "groupName": "Add On - Birthday Caps",
                                  "choices": [
                                    {
                                      "id": "34455116",
                                      "name": "Birthday Cap for Boys",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455117",
                                      "name": "Birthday Caps For Girls",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "49999628",
                                  "groupName": "Add On -  Candles",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455118",
                                      "name": "BIRTHDAY Letter Candles",
                                      "price": 12900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "49999661",
                                  "groupName": "Add On - Extras",
                                  "choices": [
                                    {
                                      "id": "34455145",
                                      "name": "Happy Birthday Banner",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455136",
                                      "name": "6 Inch Teddy Bear",
                                      "price": 29900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455147",
                                      "name": "Set of 50 balloons (deflated)",
                                      "price": 14900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113484071",
                                      "name": "Set of 2 Party Poppers",
                                      "price": 13900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "142322520",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 61900,
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.7",
                                  "ratingCount": "15 ratings",
                                  "ratingCountV2": "15"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "90185497",
                              "name": "Tiramisu Cake (500 gm)",
                              "category": "Gourmet Cakes",
                              "description": "Serves 1 | A crowd favourite, Bakingo style, replete with Jocan spunge, topping cream, butter & cream cheese",
                              "imageId": "5467aa073049b97d8d5416cb2fa825d9",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 64900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "49999688",
                                  "groupName": "Add On - Birthday Caps",
                                  "choices": [
                                    {
                                      "id": "34455116",
                                      "name": "Birthday Cap for Boys",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455117",
                                      "name": "Birthday Caps For Girls",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "49999693",
                                  "groupName": "Add On -  Candles",
                                  "choices": [
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455118",
                                      "name": "BIRTHDAY Letter Candles",
                                      "price": 12900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "49999714",
                                  "groupName": "Add On - Extras",
                                  "choices": [
                                    {
                                      "id": "34455145",
                                      "name": "Happy Birthday Banner",
                                      "price": 9900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455136",
                                      "name": "6 Inch Teddy Bear",
                                      "price": 29900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455147",
                                      "name": "Set of 50 balloons (deflated)",
                                      "price": 14900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "113484071",
                                      "name": "Set of 2 Party Poppers",
                                      "price": 13900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "142322675",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "defaultPrice": 64900,
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.9",
                                  "ratingCount": "18 ratings",
                                  "ratingCountV2": "18"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Cakes",
                      "categories": [
                        {
                          "title": "Chocolate All star",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861110",
                                  "name": "Choco Truffle Cake",
                                  "category": "Cakes",
                                  "description": "Serves 1 | A decadent and exotic combination of melted chocolate and truffles augmented with a streak of white chocolate to top it off",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/7019ba44-3056-4391-a8cc-b8efa687ac84_a249f455-3863-490f-a0bc-46e1f33badeb.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    "variantGroups": [
                                      {
                                        "groupId": "13890222",
                                        "name": "Choose your Cake Size",
                                        "variations": [
                                          {
                                            "name": "500 gm",
                                            "price": 519,
                                            "default": 1,
                                            "id": "45026030",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "1 Kg",
                                            "price": 949,
                                            "id": "45026031",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          }
                                        ]
                                      }
                                    ],
                                    "pricingModels": [
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890222",
                                            "variationId": "45026030"
                                          }
                                        ],
                                        "price": 51900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142321996",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142321996",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "73139779",
                                            "addonId": "34455116"
                                          },
                                          {
                                            "groupId": "73139779",
                                            "addonId": "34455117"
                                          },
                                          {
                                            "groupId": "73139781",
                                            "addonId": "34455118"
                                          },
                                          {
                                            "groupId": "73139781",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "73139781",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "137419458",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "137419458",
                                            "addonId": "117749265"
                                          },
                                          {
                                            "groupId": "73139784",
                                            "addonId": "34455145"
                                          },
                                          {
                                            "groupId": "73139784",
                                            "addonId": "34455147"
                                          },
                                          {
                                            "groupId": "73139784",
                                            "addonId": "34455136"
                                          },
                                          {
                                            "groupId": "73139784",
                                            "addonId": "113484071"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890222",
                                            "variationId": "45026031"
                                          }
                                        ],
                                        "price": 94900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142321996",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142321996",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "73139779",
                                            "addonId": "34455116"
                                          },
                                          {
                                            "groupId": "73139779",
                                            "addonId": "34455117"
                                          },
                                          {
                                            "groupId": "73139781",
                                            "addonId": "34455118"
                                          },
                                          {
                                            "groupId": "73139781",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "73139781",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "137419458",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "137419458",
                                            "addonId": "117749265"
                                          },
                                          {
                                            "groupId": "73139784",
                                            "addonId": "34455145"
                                          },
                                          {
                                            "groupId": "73139784",
                                            "addonId": "34455147"
                                          },
                                          {
                                            "groupId": "73139784",
                                            "addonId": "34455136"
                                          },
                                          {
                                            "groupId": "73139784",
                                            "addonId": "113484071"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "addons": [
                                    {
                                      "groupId": "73139779",
                                      "groupName": "Add On - Birthday Caps",
                                      "choices": [
                                        {
                                          "id": "34455116",
                                          "name": "Birthday Cap for Boys",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455117",
                                          "name": "Birthday Caps For Girls",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "73139781",
                                      "groupName": "Add On -  Candles",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455118",
                                          "name": "BIRTHDAY Letter Candles",
                                          "price": 12900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "73139784",
                                      "groupName": "Add On - Extras",
                                      "choices": [
                                        {
                                          "id": "34455145",
                                          "name": "Happy Birthday Banner",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455136",
                                          "name": "6 Inch Teddy Bear",
                                          "price": 29900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455147",
                                          "name": "Set of 50 balloons (deflated)",
                                          "price": 14900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113484071",
                                          "name": "Set of 2 Party Poppers",
                                          "price": 13900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "142321996",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 51900,
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "951 ratings",
                                      "ratingCountV2": "951"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861113",
                                  "name": "Choco Vanilla Cake",
                                  "category": "Cakes",
                                  "description": "Serves 1 | The perfect duality of chocolate and vanilla combines two classics in one cake",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/c4e1b0a3-81d4-4a40-bc2f-513df90fd095_cb041551-995c-4d2d-b514-dd0a167c9be8.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    "variantGroups": [
                                      {
                                        "groupId": "13890289",
                                        "name": "Quantity",
                                        "variations": [
                                          {
                                            "name": "500 gm",
                                            "price": 519,
                                            "default": 1,
                                            "id": "45026165",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "1 Kg",
                                            "price": 899,
                                            "id": "45026166",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          }
                                        ]
                                      }
                                    ],
                                    "pricingModels": [
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890289",
                                            "variationId": "45026165"
                                          }
                                        ],
                                        "price": 51900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322811",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322811",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "48132354",
                                            "addonId": "34455116"
                                          },
                                          {
                                            "groupId": "48132354",
                                            "addonId": "34455117"
                                          },
                                          {
                                            "groupId": "48132358",
                                            "addonId": "34455118"
                                          },
                                          {
                                            "groupId": "48132358",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "48132358",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "137419486",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "137419486",
                                            "addonId": "117749265"
                                          },
                                          {
                                            "groupId": "48132365",
                                            "addonId": "34455145"
                                          },
                                          {
                                            "groupId": "48132365",
                                            "addonId": "34455147"
                                          },
                                          {
                                            "groupId": "48132365",
                                            "addonId": "34455136"
                                          },
                                          {
                                            "groupId": "48132365",
                                            "addonId": "113484071"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890289",
                                            "variationId": "45026166"
                                          }
                                        ],
                                        "price": 89900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322811",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322811",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "48132354",
                                            "addonId": "34455116"
                                          },
                                          {
                                            "groupId": "48132354",
                                            "addonId": "34455117"
                                          },
                                          {
                                            "groupId": "48132358",
                                            "addonId": "34455118"
                                          },
                                          {
                                            "groupId": "48132358",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "48132358",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "137419486",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "137419486",
                                            "addonId": "117749265"
                                          },
                                          {
                                            "groupId": "48132365",
                                            "addonId": "34455145"
                                          },
                                          {
                                            "groupId": "48132365",
                                            "addonId": "34455147"
                                          },
                                          {
                                            "groupId": "48132365",
                                            "addonId": "34455136"
                                          },
                                          {
                                            "groupId": "48132365",
                                            "addonId": "113484071"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "addons": [
                                    {
                                      "groupId": "48132354",
                                      "groupName": "Add On - Birthday Caps",
                                      "choices": [
                                        {
                                          "id": "34455116",
                                          "name": "Birthday Cap for Boys",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455117",
                                          "name": "Birthday Caps For Girls",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132358",
                                      "groupName": "Add On -  Candles",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455118",
                                          "name": "BIRTHDAY Letter Candles",
                                          "price": 12900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132365",
                                      "groupName": "Add On - Extras",
                                      "choices": [
                                        {
                                          "id": "34455145",
                                          "name": "Happy Birthday Banner",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455136",
                                          "name": "6 Inch Teddy Bear",
                                          "price": 29900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455147",
                                          "name": "Set of 50 balloons (deflated)",
                                          "price": 14900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113484071",
                                          "name": "Set of 2 Party Poppers",
                                          "price": 13900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "142322811",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 51900,
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "248 ratings",
                                      "ratingCountV2": "248"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "86441241",
                                  "name": "Marble Cake",
                                  "category": "Cakes",
                                  "description": "Serves 1 | A glossy marble cake combines morde twin compound chips, white compound, chocolate sponge & truffle finished with chocolate glaze",
                                  "imageId": "fj84rv8uwcctefw3nmjx",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 54900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "48136840",
                                      "groupName": "Add On - Birthday Caps",
                                      "choices": [
                                        {
                                          "id": "34455116",
                                          "name": "Birthday Cap for Boys",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455117",
                                          "name": "Birthday Caps For Girls",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48136848",
                                      "groupName": "Add On -  Candles",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455118",
                                          "name": "BIRTHDAY Letter Candles",
                                          "price": 12900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48136862",
                                      "groupName": "Add On - Extras",
                                      "choices": [
                                        {
                                          "id": "34455145",
                                          "name": "Happy Birthday Banner",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455136",
                                          "name": "6 Inch Teddy Bear",
                                          "price": 29900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455147",
                                          "name": "Set of 50 balloons (deflated)",
                                          "price": 14900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113484071",
                                          "name": "Set of 2 Party Poppers",
                                          "price": 13900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "142322495",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 54900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "116 ratings",
                                      "ratingCountV2": "116"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "79385030",
                                  "name": "Choco Crunch KitKat Cake",
                                  "category": "Cakes",
                                  "description": "Serves 1 | A perfect match of chocolatty goodness and kit kat crumbs binds together with whipped cream & white chocolate marbles. A bakingo special",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/24e4a4ae-ee65-4f9a-8294-e2749d6ebac8_02608f3b-1b17-4547-a4de-bca8554c6e80.JPG",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 59900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "48135470",
                                      "groupName": "Add On - Birthday Caps",
                                      "choices": [
                                        {
                                          "id": "34455116",
                                          "name": "Birthday Cap for Boys",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455117",
                                          "name": "Birthday Caps For Girls",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48135482",
                                      "groupName": "Add On -  Candles",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455118",
                                          "name": "BIRTHDAY Letter Candles",
                                          "price": 12900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48135516",
                                      "groupName": "Add On - Extras",
                                      "choices": [
                                        {
                                          "id": "34455145",
                                          "name": "Happy Birthday Banner",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455136",
                                          "name": "6 Inch Teddy Bear",
                                          "price": 29900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455147",
                                          "name": "Set of 50 balloons (deflated)",
                                          "price": 14900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113484071",
                                          "name": "Set of 2 Party Poppers",
                                          "price": 13900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "142321972",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 59900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "96 ratings",
                                      "ratingCountV2": "96"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Fruit Cakes",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861101",
                                  "name": "Pineapple Cake",
                                  "category": "Cakes",
                                  "description": "Serves 1 | Freshly whipped vanilla cake topped with pineapples, chocolate marbles and cherries",
                                  "imageId": "wbpb3vtcxeokyxf0ofsc",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    "variantGroups": [
                                      {
                                        "groupId": "13890346",
                                        "name": "Quantity",
                                        "variations": [
                                          {
                                            "name": "500 gm",
                                            "price": 469,
                                            "default": 1,
                                            "id": "45026304",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "1 Kg",
                                            "price": 849,
                                            "id": "45026305",
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          }
                                        ]
                                      }
                                    ],
                                    "pricingModels": [
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890346",
                                            "variationId": "45026304"
                                          }
                                        ],
                                        "price": 46900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322314",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322314",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "48132713",
                                            "addonId": "34455116"
                                          },
                                          {
                                            "groupId": "48132713",
                                            "addonId": "34455117"
                                          },
                                          {
                                            "groupId": "48132721",
                                            "addonId": "34455118"
                                          },
                                          {
                                            "groupId": "48132721",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "48132721",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "137419453",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "137419453",
                                            "addonId": "117749265"
                                          },
                                          {
                                            "groupId": "48132734",
                                            "addonId": "34455145"
                                          },
                                          {
                                            "groupId": "48132734",
                                            "addonId": "34455147"
                                          },
                                          {
                                            "groupId": "48132734",
                                            "addonId": "34455136"
                                          },
                                          {
                                            "groupId": "48132734",
                                            "addonId": "113484071"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890346",
                                            "variationId": "45026305"
                                          }
                                        ],
                                        "price": 84900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322314",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322314",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "48132713",
                                            "addonId": "34455116"
                                          },
                                          {
                                            "groupId": "48132713",
                                            "addonId": "34455117"
                                          },
                                          {
                                            "groupId": "48132721",
                                            "addonId": "34455118"
                                          },
                                          {
                                            "groupId": "48132721",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "48132721",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "137419453",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "137419453",
                                            "addonId": "117749265"
                                          },
                                          {
                                            "groupId": "48132734",
                                            "addonId": "34455145"
                                          },
                                          {
                                            "groupId": "48132734",
                                            "addonId": "34455147"
                                          },
                                          {
                                            "groupId": "48132734",
                                            "addonId": "34455136"
                                          },
                                          {
                                            "groupId": "48132734",
                                            "addonId": "113484071"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "addons": [
                                    {
                                      "groupId": "48132713",
                                      "groupName": "Add On - Birthday Caps",
                                      "choices": [
                                        {
                                          "id": "34455116",
                                          "name": "Birthday Cap for Boys",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455117",
                                          "name": "Birthday Caps For Girls",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132721",
                                      "groupName": "Add On -  Candles",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455118",
                                          "name": "BIRTHDAY Letter Candles",
                                          "price": 12900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132734",
                                      "groupName": "Add On - Extras",
                                      "choices": [
                                        {
                                          "id": "34455145",
                                          "name": "Happy Birthday Banner",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455136",
                                          "name": "6 Inch Teddy Bear",
                                          "price": 29900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455147",
                                          "name": "Set of 50 balloons (deflated)",
                                          "price": 14900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113484071",
                                          "name": "Set of 2 Party Poppers",
                                          "price": 13900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "142322314",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 46900,
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.8",
                                      "ratingCount": "203 ratings",
                                      "ratingCountV2": "203"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861094",
                                  "name": "Fresh Fruit Cake",
                                  "category": "Cakes",
                                  "description": "Serves 1 | A rainbow of flavors, fresh fruit & an almondy vanilla tango",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/4eca92db-372c-4282-a366-84c6134b6429_e13ec21b-8192-495e-9797-e40bcfd5e4d3.jpg_compressed",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 57900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "48132540",
                                      "groupName": "Add On - Birthday Caps",
                                      "choices": [
                                        {
                                          "id": "34455116",
                                          "name": "Birthday Cap for Boys",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455117",
                                          "name": "Birthday Caps For Girls",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132543",
                                      "groupName": "Add On -  Candles",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455118",
                                          "name": "BIRTHDAY Letter Candles",
                                          "price": 12900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132551",
                                      "groupName": "Add On - Extras",
                                      "choices": [
                                        {
                                          "id": "34455145",
                                          "name": "Happy Birthday Banner",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455136",
                                          "name": "6 Inch Teddy Bear",
                                          "price": 29900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455147",
                                          "name": "Set of 50 balloons (deflated)",
                                          "price": 14900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113484071",
                                          "name": "Set of 2 Party Poppers",
                                          "price": 13900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "142323076",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 57900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCount": "125 ratings",
                                      "ratingCountV2": "125"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "79384552",
                                  "name": "Vanilla Blueberry Cake",
                                  "category": "Cakes",
                                  "description": "Serves 1 | An exotic mix of fresh blueberry puree and freshly baked cake decorated with chocolate flowers & sticks",
                                  "imageId": "ptfb5tjl6kkcb48hlurf",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 52900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "48132804",
                                      "groupName": "Add On - Birthday Caps",
                                      "choices": [
                                        {
                                          "id": "34455116",
                                          "name": "Birthday Cap for Boys",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455117",
                                          "name": "Birthday Caps For Girls",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132808",
                                      "groupName": "Add On -  Candles",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455118",
                                          "name": "BIRTHDAY Letter Candles",
                                          "price": 12900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132821",
                                      "groupName": "Add On - Extras",
                                      "choices": [
                                        {
                                          "id": "34455145",
                                          "name": "Happy Birthday Banner",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455136",
                                          "name": "6 Inch Teddy Bear",
                                          "price": 29900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455147",
                                          "name": "Set of 50 balloons (deflated)",
                                          "price": 14900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113484071",
                                          "name": "Set of 2 Party Poppers",
                                          "price": 13900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "142322432",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 52900,
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "115 ratings",
                                      "ratingCountV2": "115"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Black forest & Butterscotch",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861106",
                                  "name": "Butterscotch Cake",
                                  "category": "Cakes",
                                  "description": "Serves 1 | A childhood favourite combines butterscotch chips with choco sticks, white marbles & a cherry on top",
                                  "imageId": "12468edcc3f9e8973cc50ab3a87bbbca",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    "variantGroups": [
                                      {
                                        "groupId": "13890363",
                                        "name": "Quantity",
                                        "variations": [
                                          {
                                            "name": "500 gm",
                                            "price": 489,
                                            "default": 1,
                                            "id": "45026340",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "1 Kg",
                                            "price": 849,
                                            "id": "45026341",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          }
                                        ]
                                      }
                                    ],
                                    "pricingModels": [
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890363",
                                            "variationId": "45026340"
                                          }
                                        ],
                                        "price": 48900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322735",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322735",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "48132844",
                                            "addonId": "34455116"
                                          },
                                          {
                                            "groupId": "48132844",
                                            "addonId": "34455117"
                                          },
                                          {
                                            "groupId": "48132848",
                                            "addonId": "34455118"
                                          },
                                          {
                                            "groupId": "48132848",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "48132848",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "137419550",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "137419550",
                                            "addonId": "117749265"
                                          },
                                          {
                                            "groupId": "48132861",
                                            "addonId": "34455145"
                                          },
                                          {
                                            "groupId": "48132861",
                                            "addonId": "34455147"
                                          },
                                          {
                                            "groupId": "48132861",
                                            "addonId": "34455136"
                                          },
                                          {
                                            "groupId": "48132861",
                                            "addonId": "113484071"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890363",
                                            "variationId": "45026341"
                                          }
                                        ],
                                        "price": 84900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322735",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322735",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "48132844",
                                            "addonId": "34455116"
                                          },
                                          {
                                            "groupId": "48132844",
                                            "addonId": "34455117"
                                          },
                                          {
                                            "groupId": "48132848",
                                            "addonId": "34455118"
                                          },
                                          {
                                            "groupId": "48132848",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "48132848",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "137419550",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "137419550",
                                            "addonId": "117749265"
                                          },
                                          {
                                            "groupId": "48132861",
                                            "addonId": "34455145"
                                          },
                                          {
                                            "groupId": "48132861",
                                            "addonId": "34455147"
                                          },
                                          {
                                            "groupId": "48132861",
                                            "addonId": "34455136"
                                          },
                                          {
                                            "groupId": "48132861",
                                            "addonId": "113484071"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "addons": [
                                    {
                                      "groupId": "48132844",
                                      "groupName": "Add On - Birthday Caps",
                                      "choices": [
                                        {
                                          "id": "34455116",
                                          "name": "Birthday Cap for Boys",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455117",
                                          "name": "Birthday Caps For Girls",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132848",
                                      "groupName": "Add On -  Candles",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455118",
                                          "name": "BIRTHDAY Letter Candles",
                                          "price": 12900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132861",
                                      "groupName": "Add On - Extras",
                                      "choices": [
                                        {
                                          "id": "34455145",
                                          "name": "Happy Birthday Banner",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455136",
                                          "name": "6 Inch Teddy Bear",
                                          "price": 29900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455147",
                                          "name": "Set of 50 balloons (deflated)",
                                          "price": 14900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113484071",
                                          "name": "Set of 2 Party Poppers",
                                          "price": 13900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "142322735",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 48900,
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "231 ratings",
                                      "ratingCountV2": "231"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861091",
                                  "name": "Black Forest Cake",
                                  "category": "Cakes",
                                  "description": "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes & a cherry on top",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/da853906-73b9-4176-ac06-0e0c9eb65b1b_f3b48d48-5345-4bf1-a4ad-d4425c4bf935.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    "variantGroups": [
                                      {
                                        "groupId": "13890280",
                                        "name": "Quantity",
                                        "variations": [
                                          {
                                            "name": "500 gm",
                                            "price": 479,
                                            "default": 1,
                                            "id": "45026147",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "1 Kg",
                                            "price": 849,
                                            "id": "45026148",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          }
                                        ]
                                      }
                                    ],
                                    "pricingModels": [
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890280",
                                            "variationId": "45026147"
                                          }
                                        ],
                                        "price": 47900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322414",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322414",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "48132293",
                                            "addonId": "34455116"
                                          },
                                          {
                                            "groupId": "48132293",
                                            "addonId": "34455117"
                                          },
                                          {
                                            "groupId": "48132296",
                                            "addonId": "34455118"
                                          },
                                          {
                                            "groupId": "48132296",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "48132296",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "137419533",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "137419533",
                                            "addonId": "117749265"
                                          },
                                          {
                                            "groupId": "48132305",
                                            "addonId": "34455145"
                                          },
                                          {
                                            "groupId": "48132305",
                                            "addonId": "34455147"
                                          },
                                          {
                                            "groupId": "48132305",
                                            "addonId": "34455136"
                                          },
                                          {
                                            "groupId": "48132305",
                                            "addonId": "113484071"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890280",
                                            "variationId": "45026148"
                                          }
                                        ],
                                        "price": 84900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322414",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322414",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "48132293",
                                            "addonId": "34455116"
                                          },
                                          {
                                            "groupId": "48132293",
                                            "addonId": "34455117"
                                          },
                                          {
                                            "groupId": "48132296",
                                            "addonId": "34455118"
                                          },
                                          {
                                            "groupId": "48132296",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "48132296",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "137419533",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "137419533",
                                            "addonId": "117749265"
                                          },
                                          {
                                            "groupId": "48132305",
                                            "addonId": "34455145"
                                          },
                                          {
                                            "groupId": "48132305",
                                            "addonId": "34455147"
                                          },
                                          {
                                            "groupId": "48132305",
                                            "addonId": "34455136"
                                          },
                                          {
                                            "groupId": "48132305",
                                            "addonId": "113484071"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "addons": [
                                    {
                                      "groupId": "48132293",
                                      "groupName": "Add On - Birthday Caps",
                                      "choices": [
                                        {
                                          "id": "34455116",
                                          "name": "Birthday Cap for Boys",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455117",
                                          "name": "Birthday Caps For Girls",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132296",
                                      "groupName": "Add On -  Candles",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455118",
                                          "name": "BIRTHDAY Letter Candles",
                                          "price": 12900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132305",
                                      "groupName": "Add On - Extras",
                                      "choices": [
                                        {
                                          "id": "34455145",
                                          "name": "Happy Birthday Banner",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455136",
                                          "name": "6 Inch Teddy Bear",
                                          "price": 29900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455147",
                                          "name": "Set of 50 balloons (deflated)",
                                          "price": 14900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113484071",
                                          "name": "Set of 2 Party Poppers",
                                          "price": 13900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "142322414",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 47900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "93 ratings",
                                      "ratingCountV2": "93"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861095",
                                  "name": "German Black Forest Cake",
                                  "category": "Cakes",
                                  "description": "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist German chocolate topped with whipped cream and garnished with chocolate flakes & a cherry on top",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/b4697009-19c9-4424-bfe4-081ea9510d58_8bc6d937-5d88-4a18-a60b-3b95baabb40a.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 49900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "48132569",
                                      "groupName": "Add On - Birthday Caps",
                                      "choices": [
                                        {
                                          "id": "34455116",
                                          "name": "Birthday Cap for Boys",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455117",
                                          "name": "Birthday Caps For Girls",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132572",
                                      "groupName": "Add On -  Candles",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455118",
                                          "name": "BIRTHDAY Letter Candles",
                                          "price": 12900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48132579",
                                      "groupName": "Add On - Extras",
                                      "choices": [
                                        {
                                          "id": "34455145",
                                          "name": "Happy Birthday Banner",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455136",
                                          "name": "6 Inch Teddy Bear",
                                          "price": 29900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455147",
                                          "name": "Set of 50 balloons (deflated)",
                                          "price": 14900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113484071",
                                          "name": "Set of 2 Party Poppers",
                                          "price": 13900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "142322981",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 49900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "59 ratings",
                                      "ratingCountV2": "59"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Red Velvet & Coffee Kick",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861132",
                                  "name": "Red Velvet Cake",
                                  "category": "Cakes",
                                  "description": "Serves 1 | A vanilla based red velvet cake dressed in red velvet crumbs with dollops of whipped cream",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/ef4312f3-5ad8-4930-bcb7-a9f3ddcff4e5_9b6b6195-18bf-4cb5-984a-feb3f4748862.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 59900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "48131806",
                                      "groupName": "Add On - Birthday Caps",
                                      "choices": [
                                        {
                                          "id": "34455116",
                                          "name": "Birthday Cap for Boys",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455117",
                                          "name": "Birthday Caps For Girls",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48131808",
                                      "groupName": "Add On -  Candles",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455118",
                                          "name": "BIRTHDAY Letter Candles",
                                          "price": 12900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "48131818",
                                      "groupName": "Add On - Extras",
                                      "choices": [
                                        {
                                          "id": "34455145",
                                          "name": "Happy Birthday Banner",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455136",
                                          "name": "6 Inch Teddy Bear",
                                          "price": 29900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455147",
                                          "name": "Set of 50 balloons (deflated)",
                                          "price": 14900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113484071",
                                          "name": "Set of 2 Party Poppers",
                                          "price": 13900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "142322966",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 59900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.9",
                                      "ratingCount": "58 ratings",
                                      "ratingCountV2": "58"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Croissant & Puffs",
                      "categories": [
                        {
                          "title": "Croissants",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "137153950",
                                  "name": "Almond Croissant",
                                  "category": "Croissant & Puffs",
                                  "description": "Serves 1 | A delectable delicacy that combines the rich, buttery goodness of a croissant with the nutty flavor and crunchiness of almonds",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/28/8d0286e9-f5af-4b6a-ad67-3ae9f24993f6_bad62eeb-411a-442d-8ede-233e78325b6c.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 12900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.8",
                                      "ratingCount": "4 ratings",
                                      "ratingCountV2": "4"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "111248847",
                                  "name": "Butter Croissant",
                                  "category": "Croissant & Puffs",
                                  "description": "Serves 1 | The quintessential Butter Croissant made with the softest flaky bread, milk and unsalted butter.",
                                  "imageId": "f1bdcbb70058939532cda1a168f5fc51",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 7900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142321927",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "33 ratings",
                                      "ratingCountV2": "33"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "111248848",
                                  "name": "Chocolate Croissant",
                                  "category": "Croissant & Puffs",
                                  "description": "Serves 1 | A classic croissant infused with chocolate and fresh cream.",
                                  "imageId": "382c2eecb87a93bac069ea8729fe298b",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 9900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322884",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "67 ratings",
                                      "ratingCountV2": "67"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Stuffed Croissants",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "145015948",
                                  "name": "Peshawari Chole",
                                  "category": "Croissant & Puffs",
                                  "description": "Serves 1 | Spicy and flavorful chickpeas made in Peshawari style and wrapped in our signature croissant base. Delicious blend of tangy, spicy, and savory goodness in every bite.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/3/be99d68d-c352-4a3f-91bc-8749c32205e4_16b978e0-d671-4b9b-ac25-75481821a007.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 8900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "133444916",
                                  "name": "Chilli Paneer",
                                  "category": "Croissant & Puffs",
                                  "description": "Serves 1 | Chili paneer wrapped and baked in our signature croissant base. A burst of juicy, spicy flavors, ideal for a quick bite.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/5/adedaf49-daf4-4b8b-a6cb-af458284d8c6_11ec5da6-1a4b-4aa2-b0c6-0ca558d7c917.JPG",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 8900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322152",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "142340621",
                                  "name": "Chicken Tikka Masala",
                                  "category": "Croissant & Puffs",
                                  "description": "Serves 1 | This savory features tender chicken tikka marinated in a blend of aromatic spices and mouthwatering flavors, stuffed and baked in a croissant base.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/6/d5f91eea-e8a0-4dfb-938a-ae2fd26026e0_53fe6782-0742-49fa-b045-5256e5e0f2c0.jpg",
                                  "inStock": 1,
                                  "price": 9900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "3 ratings",
                                      "ratingCountV2": "3"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "133444917",
                                  "name": "Kung Pao Chicken",
                                  "category": "Croissant & Puffs",
                                  "description": "Serves 1 | Get a rich taste of succulent chicken with a spicy Kung Pao twist, encased in a croissant-based savory. Perfect for a quick, flavorful bite.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/30/4220f06f-3f48-4168-b29c-f956d5de021a_0d937a50-9471-4fa7-95f8-2385e8f623ff.jpg",
                                  "inStock": 1,
                                  "price": 9900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322476",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCount": "6 ratings",
                                      "ratingCountV2": "6"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Puffs",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127749897",
                                  "name": "Paneer Puff",
                                  "category": "Croissant & Puffs",
                                  "description": "Serves 1 | A flaky puff filled with spiced paneer (Indian cottage cheese) and vegetables, baked to golden perfection",
                                  "imageId": "57d54b393055f5f53d27ae40562b5b1a",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 6900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322080",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "11 ratings",
                                      "ratingCountV2": "11"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127749898",
                                  "name": "Chicken Puff",
                                  "category": "Croissant & Puffs",
                                  "description": "Serves 1 | Seasoned tender chicken and vegetables, wrapped in layers of flaky puff",
                                  "imageId": "a9f7ddc0f397daab0ad0b4d98aa0e77e",
                                  "inStock": 1,
                                  "price": 7900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323264",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.5",
                                      "ratingCount": "3 ratings",
                                      "ratingCountV2": "3"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Brownie & Tarts",
                      "categories": [
                        {
                          "title": "Brownie",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861044",
                                  "name": "Classic Walnut Brownie",
                                  "category": "Brownie & Tarts",
                                  "description": "Serves 1 | A classic brownie Bakingo style. Infused with milkmaid, fresh cream and Vanleer dark chocolate, inundated with walnuts.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/16/deb05d15-23ed-4fde-9416-ebe06d9c7787_44f72fed-67c3-4c09-9227-d44e54b44182.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    "variantGroups": [
                                      {
                                        "groupId": "13890272",
                                        "name": "Quantity",
                                        "variations": [
                                          {
                                            "name": "Single",
                                            "price": 89,
                                            "default": 1,
                                            "id": "45026130",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "Pack of 6",
                                            "price": 499,
                                            "id": "45026131",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          }
                                        ]
                                      }
                                    ],
                                    "pricingModels": [
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890272",
                                            "variationId": "45026130"
                                          }
                                        ],
                                        "price": 8900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142323186",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142323186",
                                            "addonId": "115200445"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890272",
                                            "variationId": "45026131"
                                          }
                                        ],
                                        "price": 49900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142323186",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142323186",
                                            "addonId": "115200445"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323186",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 8900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.9",
                                      "ratingCount": "120 ratings",
                                      "ratingCountV2": "120"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "102672475",
                                  "name": "Millionaire Brownie",
                                  "category": "Brownie & Tarts",
                                  "description": "Serves 1 | A Dark Compound chocolate brownie prepared with the classic molten gooeyness of a millionaire caramel spread, vanilla essence & Morde CHD 45 Truffle",
                                  "imageId": "qnqczdww7ydtjybfwk2a",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 10900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322365",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "32 ratings",
                                      "ratingCountV2": "32"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "102672478",
                                  "name": "Double Choco Brownie",
                                  "category": "Brownie & Tarts",
                                  "description": "Serves 1 | A delicious chocolate overload brownie prepared with CHD 45 chocolate and infused with vanilla essence and inundated with chocolate chips.",
                                  "imageId": "ox7dn8jonqeoe5vvtvfb",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 10900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322839",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCount": "22 ratings",
                                      "ratingCountV2": "22"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Tart & Pie",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87184436",
                                  "name": "Choco Tart",
                                  "category": "Brownie & Tarts",
                                  "description": "Serves 1 | A perfctly crunchy biscuity shell, dark compound & fresh cream completes this classic",
                                  "imageId": "zqwl5zpqf1wg2pq56sjf",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 10900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322564",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.9",
                                      "ratingCount": "19 ratings",
                                      "ratingCountV2": "19"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87184438",
                                  "name": "Apple Pie Tart",
                                  "category": "Brownie & Tarts",
                                  "description": "Serves 1 | A classic tart with fresh apples, almonds, raisin, pista & milk maid",
                                  "imageId": "mafier6hpsaiuxvyhbuq",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 10900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322939",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "53 ratings",
                                      "ratingCountV2": "53"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Cup Cakes",
                      "categories": [
                        {
                          "title": "Classic Cup cakes",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "90185509",
                                  "name": "Choco Lava",
                                  "category": "Cup Cakes",
                                  "description": "Serves 1 | The classic Choco lava cake Bakingo style. Gooey molten CHD 45 chocolaty goodness.",
                                  "imageId": "ozzljnba6jjdfaljpa8h",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 8900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322327",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001624",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.6",
                                      "ratingCount": "91 ratings",
                                      "ratingCountV2": "91"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861051",
                                  "name": "Blueberry Cup Cake",
                                  "category": "Cup Cakes",
                                  "description": "Serves 1 | Fresh blueberry pulp topped with whipped cream & sprinkles in a cup cake",
                                  "imageId": "bqct0qlenq6npiooqtjo",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    "variantGroups": [
                                      {
                                        "groupId": "13890475",
                                        "name": "Quantity",
                                        "variations": [
                                          {
                                            "name": "Single",
                                            "price": 89,
                                            "default": 1,
                                            "id": "45026581",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "Double",
                                            "price": 109,
                                            "id": "45026582",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "Pack Of 6",
                                            "price": 299,
                                            "id": "45026583",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          }
                                        ]
                                      }
                                    ],
                                    "pricingModels": [
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890475",
                                            "variationId": "45026581"
                                          }
                                        ],
                                        "price": 8900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322851",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322851",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001495",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001495",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001495",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001495",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890475",
                                            "variationId": "45026582"
                                          }
                                        ],
                                        "price": 10900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322851",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322851",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001495",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001495",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001495",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001495",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890475",
                                            "variationId": "45026583"
                                          }
                                        ],
                                        "price": 29900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322851",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322851",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001495",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001495",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001495",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001495",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322851",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001495",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 8900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "63 ratings",
                                      "ratingCountV2": "63"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861047",
                                  "name": "Vanilla Cup Cake",
                                  "category": "Cup Cakes",
                                  "description": "Serves 1 | A classic cupcake with vanilla whippd cream adn edible sugar sprinkles",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/6/c80b9d34-fae8-4259-8c8f-1862db9a9813_8a0cfc9a-bc37-4c84-8146-334a9a0cd484_compressed",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    "variantGroups": [
                                      {
                                        "groupId": "13890275",
                                        "name": "Quantity",
                                        "variations": [
                                          {
                                            "name": "Single",
                                            "price": 89,
                                            "default": 1,
                                            "id": "45026136",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "Double",
                                            "price": 129,
                                            "id": "45026137",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "Pack Of 6",
                                            "price": 299,
                                            "id": "45026138",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          }
                                        ]
                                      }
                                    ],
                                    "pricingModels": [
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890275",
                                            "variationId": "45026136"
                                          }
                                        ],
                                        "price": 8900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142323224",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142323224",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001241",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001241",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001241",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001241",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890275",
                                            "variationId": "45026137"
                                          }
                                        ],
                                        "price": 12900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142323224",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142323224",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001241",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001241",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001241",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001241",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890275",
                                            "variationId": "45026138"
                                          }
                                        ],
                                        "price": 29900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142323224",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142323224",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001241",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001241",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001241",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001241",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323224",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001241",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 8900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "135 ratings",
                                      "ratingCountV2": "135"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861054",
                                  "name": "Red Velvet Cup Cake",
                                  "category": "Cup Cakes",
                                  "description": "Serves 1 | A red velvet extravaganza topped with whippe cream and red velvet sprinkles",
                                  "imageId": "hdltmvqjlou5hsqely7t",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    "variantGroups": [
                                      {
                                        "groupId": "13890452",
                                        "name": "Quantity",
                                        "variations": [
                                          {
                                            "name": "Single",
                                            "price": 99,
                                            "default": 1,
                                            "id": "45026530",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "Double",
                                            "price": 129,
                                            "id": "45026531",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "Pack Of 6",
                                            "price": 299,
                                            "id": "45026532",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          }
                                        ]
                                      }
                                    ],
                                    "pricingModels": [
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890452",
                                            "variationId": "45026530"
                                          }
                                        ],
                                        "price": 9900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322267",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322267",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001486",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001486",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001486",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001486",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890452",
                                            "variationId": "45026531"
                                          }
                                        ],
                                        "price": 12900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322267",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322267",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001486",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001486",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001486",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001486",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890452",
                                            "variationId": "45026532"
                                          }
                                        ],
                                        "price": 29900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322267",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322267",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001486",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001486",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001486",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001486",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322267",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001486",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 9900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "61 ratings",
                                      "ratingCountV2": "61"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861046",
                                  "name": "Coffee Cup Cake",
                                  "category": "Cup Cakes",
                                  "description": "Serves 1 | Deliciously baked Coffee Cupcakes frosted with a buttercream swirl, topped with a chocolate ball and dusted with coffee powder.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/6/ccb9c6d2-92ce-4757-b31a-e1e193a7f4d6_1508bbe0-181e-481a-aadb-6d76c2a52c47_compressed",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    "variantGroups": [
                                      {
                                        "groupId": "13890459",
                                        "name": "Quantity",
                                        "variations": [
                                          {
                                            "name": "Single",
                                            "price": 89,
                                            "default": 1,
                                            "id": "45026546",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "Double",
                                            "price": 129,
                                            "id": "45026547",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "Pack Of 6",
                                            "price": 349,
                                            "id": "45026548",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          }
                                        ]
                                      }
                                    ],
                                    "pricingModels": [
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890459",
                                            "variationId": "45026546"
                                          }
                                        ],
                                        "price": 8900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142323202",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142323202",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001489",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001489",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001489",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001489",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890459",
                                            "variationId": "45026547"
                                          }
                                        ],
                                        "price": 12900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142323202",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142323202",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001489",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001489",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001489",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001489",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890459",
                                            "variationId": "45026548"
                                          }
                                        ],
                                        "price": 34900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142323202",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142323202",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001489",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001489",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001489",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001489",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323202",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001489",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 8900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "52 ratings",
                                      "ratingCountV2": "52"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "78861055",
                                  "name": "Choco Chip Cream Cup Cake",
                                  "category": "Cup Cakes",
                                  "description": "Serves 1 | A classic chocolate cream cup cake overloaded with choco chips",
                                  "imageId": "edhfkkyf58bxoliyi6uy",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    "variantGroups": [
                                      {
                                        "groupId": "13890454",
                                        "name": "Quantity",
                                        "variations": [
                                          {
                                            "name": "Single",
                                            "price": 89,
                                            "default": 1,
                                            "id": "45026535",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "Double",
                                            "price": 119,
                                            "id": "45026536",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          },
                                          {
                                            "name": "Pack Of 6",
                                            "price": 299,
                                            "id": "45026537",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "isEnabled": 1
                                          }
                                        ]
                                      }
                                    ],
                                    "pricingModels": [
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890454",
                                            "variationId": "45026535"
                                          }
                                        ],
                                        "price": 8900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322255",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322255",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001487",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001487",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001487",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001487",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890454",
                                            "variationId": "45026536"
                                          }
                                        ],
                                        "price": 11900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322255",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322255",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001487",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001487",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001487",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001487",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      },
                                      {
                                        "variations": [
                                          {
                                            "groupId": "13890454",
                                            "variationId": "45026537"
                                          }
                                        ],
                                        "price": 29900,
                                        "addonCombinations": [
                                          {
                                            "groupId": "142322255",
                                            "addonId": "115200444"
                                          },
                                          {
                                            "groupId": "142322255",
                                            "addonId": "115200445"
                                          },
                                          {
                                            "groupId": "52001487",
                                            "addonId": "34455119"
                                          },
                                          {
                                            "groupId": "52001487",
                                            "addonId": "34455120"
                                          },
                                          {
                                            "groupId": "52001487",
                                            "addonId": "113522238"
                                          },
                                          {
                                            "groupId": "52001487",
                                            "addonId": "102193413"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322255",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "52001487",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "defaultPrice": 8900,
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "124 ratings",
                                      "ratingCountV2": "124"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Assorted Cup Cakes",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "121455044",
                                  "name": "Pack of 6 Assorted Cup Cakes",
                                  "category": "Cup Cakes",
                                  "description": "Serves 1",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/6/93f2ca21-6ea4-4a61-91ff-81f86fc2a1d0_5417e9c3-c1a9-46b0-a83c-fc7e75916370_compressed",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 37900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "102456081",
                                      "groupName": "Select 1st, 2nd & 3rd",
                                      "choices": [
                                        {
                                          "id": "117260683",
                                          "name": "Blueberry Cup Cake",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "117260707",
                                          "name": "Choco Chip Cream Cup Cake",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "117260711",
                                          "name": "Coffee Cup Cake",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "117260699",
                                          "name": "Red Velvet Cup Cake",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "117260701",
                                          "name": "Vanilla Cup Cake",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 3,
                                      "maxFreeAddons": -1,
                                      "minAddons": 3
                                    },
                                    {
                                      "groupId": "102456082",
                                      "groupName": "Select 4th,5th & 6th",
                                      "choices": [
                                        {
                                          "id": "117260703",
                                          "name": "Blueberry Cup Cake",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "117260705",
                                          "name": "Choco Chip Cream Cup Cake",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "117260694",
                                          "name": "Coffee Cup Cake",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "117260696",
                                          "name": "Red Velvet Cup Cake",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "117260697",
                                          "name": "Vanilla Cup Cake",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 3,
                                      "maxFreeAddons": -1,
                                      "minAddons": 3
                                    },
                                    {
                                      "groupId": "142322118",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.5",
                                      "ratingCount": "7 ratings",
                                      "ratingCountV2": "7"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Cookies & Tea Cake",
                      "categories": [
                        {
                          "title": "Tea Cakes",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "93238963",
                                  "name": "Marble Tea Cake",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | A Bakingo special marble cake is formed with the perfect blend of icing sugar, milk powder, flour, butter, cocao powder, dark compound and fresh cream.",
                                  "imageId": "gsipttsypai9b3eous03",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 25340,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322896",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCount": "10 ratings",
                                      "ratingCountV2": "10"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "93238964",
                                  "name": "Fruit Nut & Cranberry Tea Cake",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | The quintessential tea time dry cake molds together cranberries, almonds, raisins, cashew and tooty fruity.",
                                  "imageId": "j8msrjykmu4gp8nlzuzk",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 27900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323095",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.1",
                                      "ratingCount": "8 ratings",
                                      "ratingCountV2": "8"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "93238965",
                                  "name": "Dense Loaf Tea Cake",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | A dense dry loaf cake gives you the smell of breakfast with the taste of milk, cocao powder and CHD 45 chocolate",
                                  "imageId": "o28xuz9ydafdllz1nm70",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 21100,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322072",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCount": "17 ratings",
                                      "ratingCountV2": "17"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "93238966",
                                  "name": "Banana & Walnut Tea Cake",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | This classic dry cake is baked with walnuts, banana, flour, sugar and milk",
                                  "imageId": "casgeokvjayp871wzq6t",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 19400,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322557",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "25 ratings",
                                      "ratingCountV2": "25"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97999113",
                                  "name": "Multigrain Tea Cake",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | A classic staple for dry cake lovers.",
                                  "imageId": "isa49jatxbnzs3ogs6vb",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 22800,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323175",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "7 ratings",
                                      "ratingCountV2": "7"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Cookies",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "134164854",
                                  "name": "Almond & Hazelnut Rocks Combo (100 gm)",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | Combo of delicious Hazelnut & Almond Rock",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/6/606290ff-f3c7-484b-b29c-8b8a440d08e3_347d764e-dd4f-4ac7-806e-12ad4da47735_compressed",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 34900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322571",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "139716810",
                                  "name": "Jeera Cookies",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | Jeera cookies are golden-brown delights with a crispy exterior and a melt-in-your-mouth texture, infused with the aromatic warmth of toasted cumin seeds, perfect for pairing with a cup of hot chai or coffee",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/4/5b18c129-f1d4-4523-8aeb-2bec8f25afd7_1ad2aff0-397e-40a3-b744-bbcd4f5103d2.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 17900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "151027951",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "139716811",
                                  "name": "Multigrain Cookies",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | Multigrain cookies are wholesome delights, packed with a variety of grains and seeds, offering a crunchy texture and a nutty flavor profile that's both satisfying and nutritious.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/4/3e2e475c-f78f-4e47-b576-2b219aedbad9_4ad1c9c4-428a-429c-974b-f1ce2204d6ba.jpg_compressed",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 20900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "151027952",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "139716812",
                                  "name": "Pista Cookies",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | Pista cookies are delectable treats bursting with the rich, nutty flavor of pistachios, offering a delightful crunch and a hint of sweetness in every bite",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/4/ca544ac0-d521-44f8-831e-c18117ed16d5_eaa98e73-a99e-4336-a649-cf648437dbba.jpg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 23900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "151027953",
                                      "groupName": "Add On",
                                      "choices": [
                                        {
                                          "id": "34455119",
                                          "name": "Flower Candle",
                                          "price": 8900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "34455120",
                                          "name": "One Pack Magic Candle",
                                          "price": 6900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "102193413",
                                          "name": "Premium Bakingo Opener",
                                          "price": 9900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "113522238",
                                          "name": "Single Red Rose",
                                          "price": 14900,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "133444912",
                                  "name": "Almond Rocks (100 gm)",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | Almond rocks are a delightful confectionery that typically combines the rich and nutty flavor of almonds with the sweetness of chocolate",
                                  "imageId": "d4b7f092377407989c7c0822eb91da0b",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 16900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322395",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "133444913",
                                  "name": "Hazelnut Rocks (100 gm)",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | Hazelnut rocks are a delicious confectionery treat that combines the rich, nutty flavor of hazelnuts with the sweetness of chocolate",
                                  "imageId": "508aff53b3a034e049faf4602363ec07",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 20900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323087",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "81851450",
                                  "name": "Choco Chip cookies",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | Cocoa powder, chd 45 chocolate & dark choco chips for the win",
                                  "imageId": "kp0epn538qgcbxtzvnu9",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 15900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322872",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "15 ratings",
                                      "ratingCountV2": "15"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "90388244",
                                  "name": "Oatmeal Jaggery Cookie",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | The quintessential oatmeal cookie, bakingo style. Oats, kishmish, jaggery, cream, butter and flour.",
                                  "imageId": "t4tgdtt4zn1y0xqxsaqc",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 15900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323214",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "5.0",
                                      "ratingCount": "4 ratings",
                                      "ratingCountV2": "4"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "81851459",
                                  "name": "Almond Cookies",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | Baked with butter, flour, milk, custard powder & fresh almonds",
                                  "imageId": "y6p1cqxcf2pdccot5exa",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 25900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322467",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCount": "5 ratings",
                                      "ratingCountV2": "5"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "81851462",
                                  "name": "Coconut Cookies",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | A tinge of Coconut and the crispiness of Bakingo cookies",
                                  "imageId": "gcfo9uqavbtrs1xyvzqi",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 19900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322446",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.8",
                                      "ratingCount": "8 ratings",
                                      "ratingCountV2": "8"
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127265268",
                                  "name": "French Hearts",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | Classic crunchy heart shaped puff pastries sprinkled with ground spices and breakfast sugar.",
                                  "imageId": "03ca5750de1a9ecd87be926e2922db43",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 12900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322179",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "81851474",
                                  "name": "Corn Flakes Cookies",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | A twist on the classic breakfast dish, in a cookie",
                                  "imageId": "vwn9v6lydjpwedhp1ih7",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 15900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142323271",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "125487555",
                                  "name": "Almond Biscotti",
                                  "category": "Cookies & Tea Cake",
                                  "description": "Serves 1 | Classic Italian twice-baked cookies that are popular for their crunchy texture and delightful almond flavor",
                                  "inStock": 1,
                                  "price": 18900,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "142322617",
                                      "groupName": "Chocolates",
                                      "choices": [
                                        {
                                          "id": "115200444",
                                          "name": "Almond Rocks 100gm",
                                          "price": 15900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "115200445",
                                          "name": "Hazelnut Rocks 100gm",
                                          "price": 18900,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG",
                                    "portionSize": "Serves 1"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  },
                                  "itemPriceStrikeOff": true
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Party Props",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "121455038",
                              "name": "Set of 2 Party Poppers",
                              "category": "Party Props",
                              "description": "Serves 1",
                              "imageId": "8dcf305a42b3f25fa7c196a68f94e239",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 14900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142321885",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "121455039",
                              "name": "Birthday Cap Boy",
                              "category": "Party Props",
                              "description": "Serves 1",
                              "imageId": "388b01ed2ccf727799e52059525215d6",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 10900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142323183",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "121455040",
                              "name": "Birthday Cap Girl",
                              "category": "Party Props",
                              "description": "Serves 1",
                              "imageId": "d48f750594eef7c25aebe1e5a839e50c",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 10900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142323217",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "121455041",
                              "name": "HAPPY BIRTHDAY Letter Candle",
                              "category": "Party Props",
                              "description": "Serves 1",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/6/b05635b9-35ac-4df7-ad59-9029984dc7fa_bd813631-2490-44f5-b28a-ccb297b951fb_compressed",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 14900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142322686",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "121455042",
                              "name": "Flower Candle",
                              "category": "Party Props",
                              "description": "Serves 1",
                              "imageId": "acbcb29d75a892fd49908cd9ea7ee804",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 9900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142322934",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "121455043",
                              "name": "Pack of Magic Candle",
                              "category": "Party Props",
                              "description": "Serves 1",
                              "imageId": "f49e888a9a6319f14959929dc4168262",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 7900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142321912",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "125026843",
                              "name": "Happy Birthday Foil Balloon",
                              "category": "Party Props",
                              "description": "Serves 1",
                              "imageId": "6c6994a5da3dadfa88d483215e2f14de",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 27900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142322226",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "125026844",
                              "name": "Happy Anniversary Foil Balloon",
                              "category": "Party Props",
                              "description": "Serves 1",
                              "imageId": "e786cc771be0720a7b2cec7ce3632396",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 27900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142323171",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "125026845",
                              "name": "I Love You Foil Balloon",
                              "category": "Party Props",
                              "description": "Serves 1",
                              "imageId": "06dc14ea9ce527a700272798cbda64f4",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 27900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142323283",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "125842251",
                              "name": "Premium Bakingo Opener",
                              "category": "Party Props",
                              "description": "Serves 1 | A Premium Bottle Opener by Bakingo",
                              "imageId": "f4df5b6f7eb5fef0308697fc258a3968",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 10900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142322923",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Combos",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "79385020",
                              "name": "Choco Chip & Butterscotch Pastry Match Day Combo",
                              "category": "Combos",
                              "description": "Serves 1 | A combo of 2 pastries. Choco chip & Butterscotch",
                              "imageId": "ayqfh3gdn5ptojwkotac",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 12900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142322775",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.1",
                                  "ratingCount": "15 ratings",
                                  "ratingCountV2": "15"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "79385022",
                              "name": "Red Velvet & Choco Chip Cup Cake Match Day Combo",
                              "category": "Combos",
                              "description": "Serves 1 | A combo of 2 cup cakes. Red Velvet & Choco Chip",
                              "imageId": "95d1ab2c250f4355884351aa5c88a793",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 10900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "48134995",
                                  "groupName": "Add On -  Candles",
                                  "choices": [
                                    {
                                      "id": "34455118",
                                      "name": "BIRTHDAY Letter Candles",
                                      "price": 12900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455119",
                                      "name": "Flower Candle",
                                      "price": 8900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "34455120",
                                      "name": "One Pack Magic Candle",
                                      "price": 6900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "142323192",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "8 ratings",
                                  "ratingCountV2": "8"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "79385023",
                              "name": "Blueberry & Vanilla Cup Cake Match Day Combo",
                              "category": "Combos",
                              "description": "Serves 1 | A combo of 2 cup cakes. Blueberry & Vanilla",
                              "imageId": "hkbyjl0ljqc3qpktc4za",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 11900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "142322863",
                                  "groupName": "Chocolates",
                                  "choices": [
                                    {
                                      "id": "115200444",
                                      "name": "Almond Rocks 100gm",
                                      "price": 15900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "115200445",
                                      "name": "Hazelnut Rocks 100gm",
                                      "price": 18900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "8 ratings",
                                  "ratingCountV2": "8"
                                }
                              },
                              "itemPriceStrikeOff": true
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      "type": "FSSAI",
                      "imageId": "fssai_final_edss9i",
                      "text": [
                        "License No. 12721055001268"
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      "name": "Bakingo",
                      "area": "Sector 3",
                      "completeAddress": "D-24 Ground Floor, Sector-3, Noida-201301"
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "isQCLink": false
  },
  "tid": "0cf24234-2659-41f7-946e-83cb043816ad",
  "sid": "ffre25cd-ab66-4b17-af36-60e89cfbd158",
  "deviceId": "dbb7d06c-1abe-864c-5d4c-7299d871884d",
  "csrfToken": "EpY4yQxj8U7c-ps0AAfVBb81FodCe-VX3T3Xw76M"
}


]

export default Menus;