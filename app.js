import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id: "heading"},"Hello World in React 🚀")
const Title = ()=>(
    <a href="/">
    <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51Fg8ECaMCb6T2yAd4CgUjy_hu7Zk1OKEZw&s"/>
    </a>
)
const HeaderComponent = ()=>{
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const  ResturantList =  [
    {
      "info": {
        "id": "171574",
        "name": "Savera Sudh Vaishno Hotel",
        "cloudinaryImageId": "grt7gegc70ufljxmixrz",
        "locality": "Civil Line",
        "areaName": "Bust stand",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Chinese",
          "Indian"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "179129",
        "avgRatingString": "4.4",
        "totalRatingsString": "8.5K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-23 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              "description": "OnlyOnSwiggy"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "OnlyOnSwiggy",
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/savera-sudh-vaishno-hotel-civil-line-bust-stand-rest171574",
        "type": "WEBLINK"
      }
    },
    
    {
      "info": {
        "id": "862821",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/348fd571-0041-4d23-aea9-48d623989cd2_862821.jpg",
        "locality": "Civil Lines",
        "areaName": "VKNS Complex",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "2456",
        "avgRatingString": "4.3",
        "totalRatingsString": "652",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-24 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹89"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/dominos-pizza-civil-lines-vkns-complex-rest862821",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "462562",
        "name": "The Pizza Central",
        "cloudinaryImageId": "k9qfsr4yi0g4mzm31d6j",
        "locality": "Khairabad",
        "areaName": "Didenagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Bakery",
          "Italian"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "212561",
        "avgRatingString": "4.2",
        "totalRatingsString": "248",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-23 22:20:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹300 OFF",
          "subHeader": "ABOVE ₹1399",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/the-pizza-central-khairabad-didenagar-rest462562",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "476018",
        "name": "The Pizza Box",
        "cloudinaryImageId": "nbqyal8gwa2mlktcmltz",
        "locality": "Diggi Chauraha",
        "areaName": "Lal Diggi Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Chinese"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "212550",
        "avgRatingString": "4.2",
        "totalRatingsString": "374",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-23 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "POCKET HERO",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/the-pizza-box-diggi-chauraha-lal-diggi-road-rest476018",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "291871",
        "name": "Pizza point restaurant",
        "cloudinaryImageId": "v4xhd49nxzldq9ypyulr",
        "locality": "Panchayat Gate",
        "areaName": "Tikonia park",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "American"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "158887",
        "avgRatingString": "4.1",
        "totalRatingsString": "1.9K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-23 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/pizza-point-restaurant-panchayat-gate-tikonia-park-rest291871",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "634188",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "rsa5urstinvkxhtfog4x",
        "locality": "Tikonia Park Road",
        "areaName": "Didenagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "4961",
        "avgRatingString": "4.2",
        "totalRatingsString": "2.5K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-23 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/la-pinoz-pizza-tikonia-park-road-didenagar-rest634188",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "456436",
        "name": "Swad Family Restaurant",
        "cloudinaryImageId": "xokwonh9j2ubqmz7glqg",
        "locality": "Dariyapur",
        "areaName": "Didenagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "South Indian"
        ],
        "avgRating": 4,
        "veg": true,
        "parentId": "198499",
        "avgRatingString": "4.0",
        "totalRatingsString": "608",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-23 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "Akash/Listing%20badge.png",
              "shortDescription": "Price Match Promise",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "Akash/Listing%20badge.png",
                    "shortDescription": "Price Match Promise"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹300 OFF",
          "subHeader": "ABOVE ₹1999",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/swad-family-restaurant-dariyapur-didenagar-rest456436",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "171590",
        "name": "NRC Pizza Restaurant",
        "cloudinaryImageId": "74b150289fb313b1a6a25f5e1c6d4e45",
        "locality": "Lal Diggi Chauraha",
        "areaName": "Lal Diggi Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Chinese"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "150367",
        "avgRatingString": "4.1",
        "totalRatingsString": "4.0K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-23 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/nrc-pizza-restaurant-lal-diggi-chauraha-lal-diggi-road-rest171590",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "386325",
        "name": "Kdi Food Plaza (The Family Restaurant)",
        "cloudinaryImageId": "e420d50633e64a5740e500a551014890",
        "locality": "Laldiggi Road",
        "areaName": "Didenagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Chinese",
          "South Indian",
          "Snacks"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "472329",
        "avgRatingString": "4.1",
        "totalRatingsString": "1.5K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-23 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "Akash/Listing%20badge.png",
              "shortDescription": "Price Match Promise",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "Akash/Listing%20badge.png",
                    "shortDescription": "Price Match Promise"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/kdi-food-plaza-the-family-restaurant-laldiggi-road-didenagar-rest386325",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "171577",
        "name": "M M Bakery",
        "cloudinaryImageId": "ceok2y8lnqthcghn8sh1",
        "locality": "Vibhag Post Office",
        "areaName": "CIVIL LINE",
        "costForTwo": "₹370 for two",
        "cuisines": [
          "Bakery",
          "Snacks"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "313263",
        "avgRatingString": "4.2",
        "totalRatingsString": "1.6K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "10-15 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-23 22:30:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "Akash/Listing%20badge.png",
              "shortDescription": "Price Match Promise",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "Akash/Listing%20badge.png",
                    "shortDescription": "Price Match Promise"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/m-m-bakery-vibhag-post-office-civil-line-rest171577",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "171581",
        "name": "Mehman Restaurant",
        "cloudinaryImageId": "kbjikmixrs5doluhkcog",
        "locality": "Church Market",
        "areaName": "Lal Diggi Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "South Indian"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "453521",
        "avgRatingString": "4.1",
        "totalRatingsString": "3.7K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-23 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/mehman-restaurant-church-market-lal-diggi-road-rest171581",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "171570",
        "name": "Favorite Chicken Palace",
        "cloudinaryImageId": "lh8gslhswb9bewdwiy6y",
        "locality": "Infront Of Bus Stand",
        "areaName": "Bust stand",
        "costForTwo": "₹299 for two",
        "cuisines": [
          "Biryani",
          "Indian"
        ],
        "avgRating": 4.1,
        "parentId": "79065",
        "avgRatingString": "4.1",
        "totalRatingsString": "1.5K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-23 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/favorite-chicken-palace-infront-of-bus-stand-bust-stand-rest171570",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "364767",
        "name": "Pet Pooja Restaurant",
        "cloudinaryImageId": "wjfhgabfsniixiaaw5x2",
        "locality": "Ila Panchayat Gate",
        "areaName": "Civil Line",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Pizzas",
          "Italian"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "157446",
        "avgRatingString": "4.1",
        "totalRatingsString": "997",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-23 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/pet-pooja-restaurant-ila-panchayat-gate-civil-line-rest364767",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "297507",
        "name": "American Pizza",
        "cloudinaryImageId": "mjofwahk3aokdrhv5ugw",
        "locality": "Khairabad Nagar",
        "areaName": "Civil Line",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Pizzas",
          "Italian"
        ],
        "avgRating": 3.9,
        "veg": true,
        "parentId": "31484",
        "avgRatingString": "3.9",
        "totalRatingsString": "667",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-23 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              "description": "OnlyOnSwiggy"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "OnlyOnSwiggy",
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "UPTO ₹45"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2f77d114-581a-45ef-a38e-faa7e730f3a0"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/sultanpur/american-pizza-khairabad-nagar-civil-line-rest297507",
        "type": "WEBLINK"
      }
    }
]
const ResturantCard = ({cloudinaryImageId,name,cuisines,sla})=>{
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
             <h2>{name}</h2>
             <h3>{cuisines.join(" , ")}</h3> 
              <h4>{sla.lastMileTravel} minutes</h4>
            
        </div>
    )
}




const Body = ()=>{
    return(
        <div className="resturant-list">
           {ResturantList.map((p)=>{
           return  <ResturantCard {...p.info} key={p.info.id}/>
           })}
            
             


              

        </div>
      
    )
}


const Footer = ()=>{
    return(
        <h4>Footer</h4>
    )
}


const Applayout = ()=>{
    return(
        <>
 
        <HeaderComponent/>
        <Body/>
        <Footer/>
        
        </>
    )
}











const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);