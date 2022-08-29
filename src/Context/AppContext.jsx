
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'


// 1
export const AppContext = createContext()


const data = {

    SliderData : {
      men: [
          "https://images.bewakoof.com/uploads/grid/app/1x1-oversized-men-1660651512.jpg",
          "https://images.bewakoof.com/uploads/grid/app/dragon1x1-refresh--1--1661164540.gif",
          "https://images.bewakoof.com/uploads/grid/app/clearance-banner-men-1661275920.jpg",
          "https://images.bewakoof.com/uploads/grid/app/urban-collection-men--1660893379.jpg",
          "https://images.bewakoof.com/uploads/grid/app/just-arrived-polo-1661102739.jpg",
        ],
      women : [
        "https://images.bewakoof.com/uploads/grid/app/buy-2-get-1-women-1660891856.jpg",
        "https://images.bewakoof.com/uploads/grid/app/urban-collection-women-1660893379.jpg",
        "https://images.bewakoof.com/uploads/grid/app/clearance-banner-women-1661275921.jpg",
        "https://images.bewakoof.com/uploads/grid/app/1x1-oversized-women-1660651512.jpg"
      ] ,
      acc:[
        "https://images.bewakoof.com/uploads/grid/app/best-seller-1x1--1658468285.gif",
        "https://images.bewakoof.com/uploads/grid/app/bags-banner-1658468284.jpg",
        "https://images.bewakoof.com/uploads/grid/app/1x1-mobile-cover-superhero--1--1659537519.gif",
        "https://images.bewakoof.com/uploads/grid/app/clearance-zone-70-1661275921.jpg"

      ] ,
      acc2:[
        "https://images.bewakoof.com/uploads/grid/app/arena-banner-gif-1652286939.gif",
        "https://images.bewakoof.com/uploads/grid/app/accessories-banner-1658468282.gif",
        "https://images.bewakoof.com/uploads/grid/app/slider-new-1658468288.jpg",
     
      ],
      men2: [
        "https://images.bewakoof.com/uploads/grid/app/just-arrived-polo-1661102739.jpg",
        "https://images.bewakoof.com/uploads/grid/app/flatknits-1x1-revised-1661245626.gif",
        "https://images.bewakoof.com/uploads/grid/app/pyjamas-m--1--1660988001.jpg",
        "https://images.bewakoof.com/uploads/grid/app/anime-men-banner--1660918150.jpg",
      ],
      women2: [
        "https://images.bewakoof.com/uploads/grid/app/printed-tops-1x1-1661320785.gif",
        "https://images.bewakoof.com/uploads/grid/app/k-pop-collection-1x1--1--1661335372.gif",
        "https://images.bewakoof.com/uploads/grid/app/sweatshirts-hoodies-1x1-w-1660893504.jpg",
        "https://images.bewakoof.com/uploads/grid/app/pyjamas-w--1--1660988002.jpg",
      ]
        
    
  
    },
              
    
    longDiv : {
      men : "https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg",
      women :  "https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-women-1654149139.jpg",
      acc :  "https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-women-1654149139.jpg",
      men2 : "https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png",
      men3 : "https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif"
    },

    smallProduct: {
        men : "https://i.im.ge/2022/08/24/O0gisT.Screenshot-1846.png",
        women :  "https://i.im.ge/2022/08/24/O0gNTJ.Screenshot-1847.png",
        acc :  "https://i.im.ge/2022/08/24/O0gCs6.Screenshot-1848.png"
    },

    giftVoucher : {
        forAll : "https://images.bewakoof.com/uploads/grid/app/thin-strip-new-2022-freebie-desktop-129-1661241484.jpg"
    },

    PopularCat: {
        men : [          
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-men-printed-1657526330.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-PlainTees-1657526329.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-OversizedTees-1657526328.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Kurtas-1657526328.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Vests-1657526332.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shorts-1657526331.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Joggers-1657526328.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shirts-1657526330.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-sweatshirts-m-1660748009.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Covers-1657526326.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Bags-1657526325.jpg"
        ],
        women : [          
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-BoyfriendTees-1657527656.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-FashionTops-1657527658.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-OversizedTees-1657527660.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Dresses-1657527657.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PJs-1657527660.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Joggers-1657527659.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Shorts-1657527662.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Jeans-1657527659.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Covers-1657527657.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Boxers-1657527655.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Bagss-1657534528.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PrrintedTees-1657527661.jpg"
        ],
        acc : [
          "https://images.bewakoof.com/uploads/grid/app/category-box-mobile-covers-1657542496.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-sliders-1657542498.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1657542495.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-flip-flops-1657542496.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-notebook-1657542498.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-casual-shoes-1657542495.jpg",
         
        ]
    },

    DiscountProduct: {
      men:[
        "https://images.bewakoof.com/uploads/grid/app/b1g1-mid-banner-1658840210.jpg",
        "https://images.bewakoof.com/uploads/grid/app/undrdawg-mid-banner2-1660818217.jpg",
        "https://images.bewakoof.com/uploads/grid/app/sweatshirt-men-1660737200.jpg",
        "https://images.bewakoof.com/uploads/grid/app/play-men-banner-1660743046.jpg"
      ],
      women: [
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-plus-size-w-1660204325.jpg",
        "https://images.bewakoof.com/uploads/grid/app/me-shirt-women-1658985548.jpg",
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-joggers-women1-1660716100.jpg",
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-lastsizesleft-women-1658984794.jpg",
      ],
      stoopid : [
        "https://images.bewakoof.com/uploads/grid/app/jackets--1659349867.jpg",
        "https://images.bewakoof.com/uploads/grid/app/play-men-banner-1660743046.jpg",
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-plus-size-m-1659160620.jpg",
        "https://images.bewakoof.com/uploads/grid/app/me-shirt-men-1658682131.jpg"
      ],
      stoopidWomen : [
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-joggers-women1-1660716100.jpg",
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-combo-tees-w-1660582615.jpg",
        "https://images.bewakoof.com/uploads/grid/app/AOp-Boxers-mid-banner-Women-1658560814.jpg",
        "https://images.bewakoof.com/uploads/grid/app/jacket-women-mid-banner-1659350736.jpg"
      ],
      acc: [
        "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Bags-1656667081.jpg",
        "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Sliders-1656667081.jpg"
      ]
    }


  }  

  //npm i react-hover-image
 

const AllProductsData = {
  menData : [
    {
      id:1,
      Display_image : "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836690-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836695-2.jpg",
      Title: "suFi's Blue T-shirt",
      price:699,
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836690-1.jpg",
        "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836695-2.jpg",
        "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836701-3.jpg",
        "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836706-4.jpg",
        "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836717-6.jpg"
      ]
    },
    {
      id:2,
      Display_image : "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834278-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834283-2.jpg",
      Title: "Donald Duck (DL) Half Sleeves AOP T-Shirt",
      price:499,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834278-1.jpg",
        "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834283-2.jpg",
        "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834288-3.jpg",
        "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834283-2.jpg",
        "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834294-4.jpg"
      ]
    },
    {
      id:3,
      Display_image : "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078759-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078765-2.jpg",
      Title: "Men's Black & Red Color Block Polo T-shirt   ",
      price:399,
      strikeprice:12000,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078759-1.jpg",
        "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078765-2.jpg",
        "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078770-3.jpg",
        "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078780-5.jpg",
        "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078791-7.jpg"
      ]
    },
    {
      id:4,
      Display_image : "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179088-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179098-3.jpg",
      price:499,
      Title: "suFi Full Sleeve T-shirt",
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179088-1.jpg",
        "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179098-3.jpg",
        "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179093-2.jpg",
        "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179109-5.jpg",
        "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179104-4.jpg"
      ]
    },
    {
      id:5,
      Display_image : "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955140-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955161-5.jpg",
      Title:"Men's Red Abstract Printed Slim Fit Shirt",
      price:799,
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955161-5.jpg",
        "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955140-1.jpg",
        "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955151-3.jpg",
        "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955156-4.jpg",
        "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955161-5.jpg"
      ]
    },
    {
      id:6,
      Display_image : "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708213-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708239-6.jpg",
      Title: "Black Half Sleeve T-shirt",
      price:399,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708213-1.jpg",
        "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708239-6.jpg",
        "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708218-2.jpg",
        "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708229-4.jpg",
        "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708239-6.jpg"
      ]
    },{
      id:7,
      Display_image : "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750446-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750451-2.jpg",
      Title: "Bubble Gum Stripe T-Shirt",
      price:499,
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750451-2.jpg",
        "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750457-3.jpg",
        "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750473-6.jpg",
        "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750446-1.jpg",
        "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750467-5.jpg"
      ]
    },
    {
      id:8,
      Display_image : "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814402-4.jpg",
      Title: "Toffe Half Sleeve T-shirt",
      price:299,
      strikeprice:699,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814402-4.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814408-6.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814397-3.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814413-7.jpg"
      ]
    },
    {
      id:9,
      Display_image : "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500497-4.jpg",
      Title: "Men's Blue & Pink Color Block T-shirt    ",
      price:399,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500497-4.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500503-5.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500519-8.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500508-6.jpg"
      ]
    },
    {
      id:10,
      Display_image : "https://images.bewakoof.com/t1080/men-s-blue-t-shirt-1092-1659608118-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/men-s-blue-t-shirt-1092-1659608134-4.jpg",
      price:499,
      Title: "suFi Full Sleeve T-shirt",
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750451-2.jpg",
        "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750457-3.jpg",
        "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750473-6.jpg",
        "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750446-1.jpg",
        "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750467-5.jpg"
      ]
    },
    {
      id:11,
      Display_image : "https://images.bewakoof.com/t1080/men-s-red-striped-oversized-t-shirt-425013-1655751638-2.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/men-s-red-striped-oversized-t-shirt-425013-1655751632-1.jpg",
      Title: "Toffe Half Sleeve T-shirt",
      price:299,
      strikeprice:699,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814402-4.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814408-6.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814397-3.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814413-7.jpg"
      ]
    },
    {
      id:12,
      Display_image : "https://images.bewakoof.com/t1080/men-s-black-anime-back-printed-oversized-t-shirt-468376-1655751023-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/men-s-black-anime-back-printed-oversized-t-shirt-468376-1655751034-3.jpg",
      Title: "Black Half Sleeve T-shirt",
      price:399,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500497-4.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500503-5.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500519-8.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500508-6.jpg"
      ]
    },
    
   
  ],
  womenData : [
    {
      id:13,
      Display_image : "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810540-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810556-4.jpg",
      Title:"Naaz's Black Friends Typography T-shirt",
      price:699,
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810540-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810556-4.jpg",
        "https://i.im.ge/2022/07/29/Fwb5aG.jpg",
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810566-6.jpg",
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810577-8.jpg"
      ]
    },
    {
      id:14,
      Display_image : "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918677-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918699-5.jpg",
      Title: "Women's Red Boyfriend T-shirt",
      price:699,
      strikeprice:14000,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918677-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918699-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918683-2.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918693-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658919098-6.jpg"
      ]
    },
    {
      id:15,
      Display_image : "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407355-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407377-5.jpg",
      Title: "Women's White Boyfriend T-shirt   ",
      price:399,
      strikeprice:999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407355-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407377-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407366-3.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407372-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407383-6.jpg"
      ]
    },
    {
      id:16,
      Display_image : "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748601-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748622-5.jpg",
      price:499,
      Title: "Climbing Pocket Panda Boyfriend T-Shirt      ",
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748601-1.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748622-5.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748607-2.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748612-3.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748628-6.jpg"
      ]
    },
    {
      id:17,
      Display_image : "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407432-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407453-5.jpg",
      Title:" BTS Logo Typography Oversized Fit T-shirt",
      price:799,
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407432-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407453-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407437-2.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407448-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407459-6.jpg"
      ]
    },
    {
      id:18,
      Display_image : "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407143-4.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407126-1.jpg",
      Title:"Women's Yellow BTS Logo Typography Oversized Fit T-shirt",
      price:444,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407143-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407126-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407148-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407153-6.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407137-3.jpg"
      ]
    },
    {
      id:19,
      Display_image : "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161846-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161867-5.jpg",
      Title: "Naaz's  Green Solid Flared Anarkali With Tussel Details",
      price:800,
      strikeprice:1200,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161846-1.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161867-5.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161851-2.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161861-4.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161851-2.jpg"
      ]
    },
    {
      id:20,
      Display_image : "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937808-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937825-4.jpg",
      Title: "Naaz's Green Floral Printed Flared Anarkali ",
      price:786,
      strikeprice:999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937808-1.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937825-4.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937814-2.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937830-5.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937814-2.jpg"
      ]
    },
    {
      id:21,
      Display_image : "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938050-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938066-4.jpg",
      Title: "Naaz's Black Gold Printed Tiered Anarkali",
      price:1600,
      strikeprice:3999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938050-1.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938066-4.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938056-2.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938061-3.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938072-5.jpg"
      ]
    },
    
    {
      id:22,
      Display_image : "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801504-1.JPG",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801530-6.JPG",
      Title: "Women's Maroon Ethnic Motif Printed Crop Top",
      price:375,
      strikeprice:699,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801504-1.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801530-6.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801509-2.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801525-5.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801519-4.JPG"
      ]
    },
    {
      id:23,
      Display_image : "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800632-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800653-5.jpg",
      Title: "Women's Olive Ethnic Motif Printed Dress      ",
      price:786,
      strikeprice:999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800632-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800653-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800637-2.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800648-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800643-3.jpg"
      ]
    },
    {
      id:24,
      Display_image : "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800744-1.JPG",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800770-6.JPG",
      Title: "Women's Red Ethnic Motif Printed Peplum Top  ",
      price:399,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800744-1.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800770-6.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800754-3.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800765-5.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800760-4.JPG"
      ]
    },
   
    
   
  ],
}

const CartDataToMatch = [
  {
    id:1,
    Display_image : "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836690-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836695-2.jpg",
    Title: "suFi's Blue T-shirt",
    price:699,
    strikeprice:1299,
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836690-1.jpg",
      "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836695-2.jpg",
      "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836701-3.jpg",
      "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836706-4.jpg",
      "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836717-6.jpg"
    ]
  },
  {
    id:2,
    Display_image : "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834278-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834283-2.jpg",
    Title: "Donald Duck (DL) Half Sleeves AOP T-Shirt",
    price:499,
    strikeprice:899,
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834278-1.jpg",
      "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834283-2.jpg",
      "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834288-3.jpg",
      "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834283-2.jpg",
      "https://images.bewakoof.com/t1080/donald-duck-dl-half-sleeves-aop-t-shirt-303743-1655834294-4.jpg"
    ]
  },
  {
    id:3,
    Display_image : "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078759-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078765-2.jpg",
    Title: "Men's Black & Red Color Block Polo T-shirt   ",
    price:399,
    strikeprice:12000,
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078759-1.jpg",
      "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078765-2.jpg",
      "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078770-3.jpg",
      "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078780-5.jpg",
      "https://images.bewakoof.com/t1080/men-s-black-beauty-color-block-polo-t-shirt-492878-1659078791-7.jpg"
    ]
  },
  {
    id:4,
    Display_image : "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179088-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179098-3.jpg",
    price:499,
    Title: "suFi Full Sleeve T-shirt",
    strikeprice:1299,
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179088-1.jpg",
      "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179098-3.jpg",
      "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179093-2.jpg",
      "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179109-5.jpg",
      "https://images.bewakoof.com/t1080/snitch-men-s-white-abstract-printed-slim-fit-shirt-505598-1656179104-4.jpg"
    ]
  },
  {
    id:5,
    Display_image : "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955140-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955161-5.jpg",
    Title:"Men's Red Abstract Printed Slim Fit Shirt",
    price:799,
    strikeprice:1299,
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955161-5.jpg",
      "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955140-1.jpg",
      "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955151-3.jpg",
      "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955156-4.jpg",
      "https://images.bewakoof.com/t1080/men-s-red-abstract-printed-slim-fit-shirt-534486-1659955161-5.jpg"
    ]
  },
  {
    id:6,
    Display_image : "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708213-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708239-6.jpg",
    Title: "Black Half Sleeve T-shirt",
    price:399,
    strikeprice:899,
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708213-1.jpg",
      "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708239-6.jpg",
      "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708218-2.jpg",
      "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708229-4.jpg",
      "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708239-6.jpg"
    ]
  },{
    id:7,
    Display_image : "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750446-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750451-2.jpg",
    Title: "Bubble Gum Stripe T-Shirt",
    price:499,
    strikeprice:1299,
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750451-2.jpg",
      "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750457-3.jpg",
      "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750473-6.jpg",
      "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750446-1.jpg",
      "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750467-5.jpg"
    ]
  },
  {
    id:8,
    Display_image : "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814402-4.jpg",
    Title: "Toffe Half Sleeve T-shirt",
    price:299,
    strikeprice:699,
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814402-4.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814408-6.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814397-3.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814413-7.jpg"
    ]
  },
  {
    id:9,
    Display_image : "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500497-4.jpg",
    Title: "Men's Blue & Pink Color Block T-shirt    ",
    price:399,
    strikeprice:899,
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500497-4.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500503-5.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500519-8.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500508-6.jpg"
    ]
  },
  {
    id:10,
    Display_image : "https://images.bewakoof.com/t1080/men-s-blue-t-shirt-1092-1659608118-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/men-s-blue-t-shirt-1092-1659608134-4.jpg",
    price:499,
    Title: "suFi Full Sleeve T-shirt",
    strikeprice:1299,
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750451-2.jpg",
      "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750457-3.jpg",
      "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750473-6.jpg",
      "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750446-1.jpg",
      "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750467-5.jpg"
    ]
  },
  {
    id:11,
    Display_image : "https://images.bewakoof.com/t1080/men-s-red-striped-oversized-t-shirt-425013-1655751638-2.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/men-s-red-striped-oversized-t-shirt-425013-1655751632-1.jpg",
    Title: "Toffe Half Sleeve T-shirt",
    price:299,
    strikeprice:699,
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814402-4.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814408-6.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814397-3.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814413-7.jpg"
    ]
  },
  {
    id:12,
    Display_image : "https://images.bewakoof.com/t1080/men-s-black-anime-back-printed-oversized-t-shirt-468376-1655751023-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/men-s-black-anime-back-printed-oversized-t-shirt-468376-1655751034-3.jpg",
    Title: "Black Half Sleeve T-shirt",
    price:399,
    strikeprice:899,
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500497-4.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500503-5.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500519-8.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500508-6.jpg"
    ]
  },
  
  
    {
      id:13,
      Display_image : "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810540-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810556-4.jpg",
      Title:"Naaz's Black Friends Typography T-shirt",
      price:699,
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810540-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810556-4.jpg",
        "https://i.im.ge/2022/07/29/Fwb5aG.jpg",
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810566-6.jpg",
        "https://images.bewakoof.com/t1080/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810577-8.jpg"
      ]
    },
    {
      id:14,
      Display_image : "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918677-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918699-5.jpg",
      Title: "Women's Red Boyfriend T-shirt",
      price:699,
      strikeprice:14000,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918677-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918699-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918683-2.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658918693-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-red-boyfriend-t-shirt-170465-1658919098-6.jpg"
      ]
    },
    {
      id:15,
      Display_image : "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407355-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407377-5.jpg",
      Title: "Women's White Boyfriend T-shirt   ",
      price:399,
      strikeprice:999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407355-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407377-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407366-3.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407372-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-white-boyfriend-t-shirt-119167-1658407383-6.jpg"
      ]
    },
    {
      id:16,
      Display_image : "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748601-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748622-5.jpg",
      price:499,
      Title: "Climbing Pocket Panda Boyfriend T-Shirt      ",
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748601-1.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748622-5.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748607-2.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748612-3.jpg",
        "https://images.bewakoof.com/t1080/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748628-6.jpg"
      ]
    },
    {
      id:17,
      Display_image : "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407432-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407453-5.jpg",
      Title:" BTS Logo Typography Oversized Fit T-shirt",
      price:799,
      strikeprice:1299,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407432-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407453-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407437-2.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407448-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-varsity-green-tie-dye-oversized-t-shirt-512610-1658407459-6.jpg"
      ]
    },
    {
      id:18,
      Display_image : "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407143-4.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407126-1.jpg",
      Title:"Women's Yellow BTS Logo Typography Oversized Fit T-shirt",
      price:444,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407143-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407126-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407148-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407153-6.jpg",
        "https://images.bewakoof.com/t1080/women-s-yellow-bts-logo-typography-oversized-fit-t-shirt-468421-1658407137-3.jpg"
      ]
    },
    {
      id:19,
      Display_image : "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161846-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161867-5.jpg",
      Title: "Naaz's  Green Solid Flared Anarkali With Tussel Details",
      price:800,
      strikeprice:1200,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161846-1.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161867-5.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161851-2.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161861-4.jpg",
        "https://images.bewakoof.com/t1080/aks-green-solid-flared-anarkali-with-tussel-details-404759-1656161851-2.jpg"
      ]
    },
    {
      id:20,
      Display_image : "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937808-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937825-4.jpg",
      Title: "Naaz's Green Floral Printed Flared Anarkali ",
      price:786,
      strikeprice:999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937808-1.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937825-4.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937814-2.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937830-5.jpg",
        "https://images.bewakoof.com/t1080/aks-green-floral-printed-flared-anarkali-404758-1655937814-2.jpg"
      ]
    },
    {
      id:21,
      Display_image : "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938050-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938066-4.jpg",
      Title: "Naaz's Black Gold Printed Tiered Anarkali",
      price:1600,
      strikeprice:3999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938050-1.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938066-4.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938056-2.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938061-3.jpg",
        "https://images.bewakoof.com/t1080/aks-black-gold-printed-tiered-anarkali-404969-1655938072-5.jpg"
      ]
    },
    
    {
      id:22,
      Display_image : "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801504-1.JPG",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801530-6.JPG",
      Title: "Women's Maroon Ethnic Motif Printed Crop Top",
      price:375,
      strikeprice:699,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801504-1.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801530-6.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801509-2.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801525-5.JPG",
        "https://images.bewakoof.com/t1080/women-s-maroon-ethnic-motif-printed-crop-top-511556-1655801519-4.JPG"
      ]
    },
    {
      id:23,
      Display_image : "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800632-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800653-5.jpg",
      Title: "Women's Olive Ethnic Motif Printed Dress      ",
      price:786,
      strikeprice:999,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800632-1.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800653-5.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800637-2.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800648-4.jpg",
        "https://images.bewakoof.com/t1080/women-s-olive-ethnic-motif-printed-dress-511979-1655800643-3.jpg"
      ]
    },
    {
      id:24,
      Display_image : "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800744-1.JPG",
      hover_Image: "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800770-6.JPG",
      Title: "Women's Red Ethnic Motif Printed Peplum Top  ",
      price:399,
      strikeprice:899,
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800744-1.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800770-6.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800754-3.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800765-5.JPG",
        "https://images.bewakoof.com/t1080/women-s-red-ethnic-motif-printed-peplum-top-512009-1655800760-4.JPG"
      ]
    },
   
    
   

    
   
  
]

const AppContextProvider = ({children}) => {

  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState(null)

  const [cartData, setCartData] = useState([])

  const [price, setPrice] = useState(0);
  const [discountPrice, setdiscountPrice] = useState(0);
  const [TotalQty, setTotalQty] = useState(0);
  const [Totalprice, setTotalPrice] = useState(0);


  const handleRemove = (id) => {
    const arr = cartData.filter((item) => item.id !== id);
    setCartData(arr);
    handlePrice();
  };

  const cartDataEmpty = ()=>{
    setCartData([])
  }

  const handlePrice = () => {
    let ans = 0;
    let discountP = 0;
    let Qty=0;

    cartData.map((item) => {
      ans += item.amount * item.price
      discountP += item.amount * item.strikeprice
      Qty += item.amount
    });
    setPrice(ans);
    setdiscountPrice(discountP)
    setTotalPrice(ans+discountP)
    setTotalQty(Qty)
  };
  

  
useEffect(() => {
handlePrice();
});

  console.log(price)

  
  const handleCart = (data)=>{

    if (cartData.indexOf(data) !== -1) return;
    setCartData([...cartData,data])

  }

  console.log(cartData)


  const handleChange = (item, d) => {

    const ind = cartData.indexOf(item);
    const arr = cartData;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCartData([...arr]);

  };


  const toggle = () => {
    setIsAuth(!isAuth);
  };

  const loginUser = (Name) => {
    setIsAuth(true);
    console.log("LOGIN USER RUNNING APP CONTEXT")
    setUserName(Name)
   // console.log(Name)
  };

  const logoutUser = () => {
    setIsAuth(false);
    setUserName(null)
    console.log(isAuth,userName)
  };

 // console.log(userName)
    
  return (

    <div>

  <AppContext.Provider value={{data, userName, isAuth, toggle, loginUser, logoutUser, AllProductsData, cartData, handleCart, CartDataToMatch, handleChange ,handleRemove, price, discountPrice, Totalprice, cartDataEmpty,
  handlePrice, TotalQty }} >

      {children}

  </AppContext.Provider>

      
    </div>
  )
}

export default AppContextProvider
