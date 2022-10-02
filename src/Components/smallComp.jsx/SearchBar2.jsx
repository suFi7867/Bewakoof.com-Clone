import { HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { useNavigate } from 'react-router-dom'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { AppContext } from '../../Context/AppContext'


const dataTobeMatch = [
    {
      id:1,
      Display_image : "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836690-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/snazzy-green-half-sleeve-t-shirt-for-men-s-436115-1655836695-2.jpg",
      name: "suFi's Blue T-shirt",
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
      name: "Donald Duck (DL) Half Sleeves AOP T-Shirt",
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
      name: "Men's Black & Red Color Block Polo T-shirt   ",
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
      name: "suFi Full Sleeve T-shirt",
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
      name:"Men's Red Abstract Printed Slim Fit Shirt",
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
      name: "Black Half Sleeve T-shirt",
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
      name: "Bubble Gum Stripe T-Shirt",
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
      name: "Toffe Half Sleeve T-shirt",
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
      name: "Men's Blue & Pink Color Block T-shirt    ",
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
      name: "suFi Full Sleeve T-shirt",
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
      name: "Toffe Half Sleeve T-shirt",
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
      name: "Black Half Sleeve T-shirt",
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
        name:"Naaz's Black Friends Typography T-shirt",
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
        name: "Women's Red Boyfriend T-shirt",
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
        name: "Women's White Boyfriend T-shirt   ",
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
        name: "Climbing Pocket Panda Boyfriend T-Shirt      ",
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
        name:" BTS Logo Typography Oversized Fit T-shirt",
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
        name:"Women's Yellow BTS Logo Typography Oversized Fit T-shirt",
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
        name: "Naaz's  Green Solid Flared Anarkali With Tussel Details",
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
        name: "Naaz's Green Floral Printed Flared Anarkali ",
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
        name: "Naaz's Black Gold Printed Tiered Anarkali",
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
        name: "Women's Maroon Ethnic Motif Printed Crop Top",
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
        name: "Women's Olive Ethnic Motif Printed Dress      ",
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
        name: "Women's Red Ethnic Motif Printed Peplum Top  ",
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
  

const SearchBar2 = () => {

    const navigate = useNavigate()

    const formatResult = (item) => {
        return (
          <HStack>
          
            <Image boxSize={50} src={item.Display_image} />
            <Text>{item.name}</Text>
          </HStack>
        )
      }


      
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    navigate(`/products/${item.id}`)
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }


  return (
    


    <Stack position="fixed"  style={{ width: "90%", left:20, top:150 }}>

    <ReactSearchAutocomplete

    // data to be match
      items={dataTobeMatch}
      onSearch={handleOnSearch}
     // onHover={handleOnHover}
      onSelect={handleOnSelect}
     // onFocus={handleOnFocus}
      autoFocus
      formatResult={formatResult}
    />

  </Stack>
 
  )
}

export default SearchBar2
