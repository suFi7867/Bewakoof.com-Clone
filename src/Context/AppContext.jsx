
import React from 'react'
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
  

const AppContextProvider = ({children}) => {


    
  return (

    <div>

  <AppContext.Provider value={{data}} >

      {children}

  </AppContext.Provider>

      
    </div>
  )
}

export default AppContextProvider
