import React, { useContext, useEffect, useState } from "react";
import styles from "./main.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { VscHeart } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

import { FaUserAlt } from "react-icons/fa";
import { AppContext } from "../Context/AppContext";
import { Circle, Text } from "@chakra-ui/react";


const Navbar = () => {
  
  const {userName, isAuth, logoutUser,cartData, TotalQty } = useContext(AppContext);

  console.log(isAuth)

  const [active, setActive] = useState("Men");
  const [info, setinfo] = useState(false);
  
 // console.log(userName)

  const token = localStorage.getItem("jwtoken");
  
  const activeStyle = {
    color: "black",
    
    textDecoration: "none",
    
    
    borderBottom : "4px solid #fdd835"
    
  };
  const defaultStyle = {
    color: "black",
    textDecoration: "none",
    BsBorderBottom: "yellow"
  };


  /// LOGOUT 
  const LogOut_User = () =>{

    console.log("LOGOUT IS RUNNUNG")
    alert("LogOut User Successfully")
    logoutUser()
  }



  return (
    <div id={styles.fixedNav}>
      <div className={styles.upperDiv}>
      <div className={styles.upHead} >
           
           <div>
            <div>Offers </div>
            <div>Fanbook </div>
            <div>Download App</div>
            <div>TriBe Membership</div>
           </div>

           <div>
            <div>Contact Us  </div>
            <div>Track Order </div>
          
           </div>
           
        </div>

      </div>
      <div id={styles.navBar}>
        <div id={styles.menuNav}>
          <li>
            <NavLink to="/">
              <img
                src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
                alt="logo"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/men-clothing"
              onClick={() => setActive("")}
            >
              MEN
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      <h5>TopWear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      Printed T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      Oversized T-shirts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      Fashion T-Shirts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      {" "}
                      Plain T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      Half Sleeve T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      Full Slave T_Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men-clothing">Shirts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men-clothing">Vests</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men-clothing">
                      Co-ord Sets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men-clothing">Kurtas</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men-clothing">Henleys</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men-clothing">Jackets</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men-clothing">
                      Sweatshirt & Hoodie
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men-clothing">
                      Sweaters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men-clothing">
                      Customize T-shirts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men-clothing">
                      Sweaters
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/men">
                      <h5>Bottomwear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/men-joggers"
                      onClick={() => setActive("")}
                    >
                      Joggers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">Boxers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">Sorts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers"> Pnats</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">Jeans</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">Joggers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">
                      Plus Size Store
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">bRIEFS</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <h5>Ethnic Fusion Wear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/men-activewear"
                      onClick={() => setActive("")}
                    >
                      Activewear
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Neharu Jackets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      {" "}
                      <h5>Reginal</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Marati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Bengali T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Gujrati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Tamil T-Shirt
                    </NavLink>
                  </li>
                </ul>

                <hr />
                <ul className={styles.typesofMenu}>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="https://images.bewakoof.com/nav_menu/Anime-Bewakoof-Homepage-NavigationCircleIcon-final-1632292125.jpg"
                        alt=""
                      />
                      <span>Amine Collection</span>
                    </NavLink>
                  </li>
                  {/* <li><NavLink to="/men"><https://images.bewakoof.com/nav_menu/WinterWear-Bewakoof-Homepage-NavigationCircleIcon-1630653435.png" alt=""/><span>Winter Collection</span></NavLink></li> */}
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif"
                        alt=""
                      />
                      <span>Collebration</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="https://images.bewakoof.com/nav_menu/nav-icon-1617643368.png"
                        alt=""
                      />
                      <span>Shop Unique Brands</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="https://images.bewakoof.com/nav_menu/new-arrival-icon-1625237098.png"
                        alt=""
                      />
                      <span>Upcomming Collection</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="https://images.bewakoof.com/nav_menu/bewakoof-men-logo-last-size-1592822253.png"
                        alt=""
                      />
                      <span>Last Size Left</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/women-clothing" onClick={() => setActive("")}>
              WOMEN
            </NavLink>
            <div id={styles.mainMenu2}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink to="/women">
                      <h5>TopWear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/women-clothing"
                      onClick={() => setActive("")}
                    >
                      Half Sleeve T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing">
                      Full Slave T_Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/women-clothing"
                      onClick={() => setActive("")}
                    >
                      Printed T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing"> Kurties</NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing">Vest</NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing">Polo T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing">Shirts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing">Kurtas</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/women">
                      <h5>Bottom Wear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/women-joggers"
                      onClick={() => setActive("")}
                    >
                      Joggers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                      Neharu Jackets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                      {" "}
                      <h5>Reginal</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                      Marati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                      Bengali T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                      Gujrati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                      Tamil T-Shirt
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/products/women-joggers">
                      <h5>Ethnic Fusion Wear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/women-pyjamas"
                      onClick={() => setActive("")}
                    >
                      Pyjamas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      Neharu Jackets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      {" "}
                      <h5>Reginal</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      Marati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      Bengali T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      Gujrati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      Tamil T-Shirt
                    </NavLink>
                  </li>
                </ul>
                <ul className={styles.typesofMenu}>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://images.bewakoof.com/nav_menu/Anime-Bewakoof-Homepage-NavigationCircleIcon-final-1632292125.jpg"
                        alt=""
                      />
                      <span>Amine Collection</span>
                    </NavLink>
                  </li>
                  {/* <li><NavLink to="mobile-covers-india"><https://images.bewakoof.com/nav_menu/WinterWear-Bewakoof-Homepage-NavigationCircleIcon-1630653435.png" alt=""/><span>Winter Collection</span></NavLink></li> */}
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif"
                        alt=""
                      />
                      <span>Collebration</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://images.bewakoof.com/nav_menu/nav-icon-1617643368.png"
                        alt=""
                      />
                      <span>Shop Unique Brands</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://images.bewakoof.com/nav_menu/new-arrival-icon-1625237098.png"
                        alt=""
                      />
                      <span>Upcomming Collection</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://images.bewakoof.com/nav_menu/bewakoof-men-logo-last-size-1592822253.png"
                        alt=""
                      />
                      <span>Last Size Left</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/mobile-covers-india">MOBILE COVERS</NavLink>
            <div id={styles.mainMenu3}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink to="/mobile-covers-india">
                      <h2 className={styles.dropH2}>POPULAR</h2>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">
                      <h3>Xiaomi</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Realme 9 Power</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Xiaomi Mi 10T</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Xiaomi Redami K2</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">
                      <h3>Sumsang Galaxy F62</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Sumsung Galaxy F41</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Sumsumg Galaxy A30</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="mobile-covers-india">
                      <h3>Oneplus</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="mobile-covers-india">Oneplus 9R</NavLink>
                  </li>
                  <li>
                    <NavLink to="mobile-covers-india">Oneplus 8 pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="mobile-covers-india">Oneplus 8T</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">
                      {" "}
                      <h3>Realme</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">Realme 6</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">Realme 5</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/products/iphone">
                      <h3>Apple</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">iphone 13</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">iphone 12</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">iphone 12 pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">
                      <h3>Vivo</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">vovo vii Pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone"> Vivo X60</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">Vivo Y91</NavLink>
                  </li>
                </ul>
                <hr />
                <ul></ul>

                <ul>
                  <li>
                    <NavLink to="mobile-covers-india">
                      <span></span>
                      <img
                        src="https://images.bewakoof.com/nav_menu/bewakoof-online-fashion-COTM-mobile-cover-navigation-box-desktop-1612275399.jpg"
                        alt=""
                      />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </div>
        <div id={styles.searchBars}>
          <li>
            <div className={styles.iconInput}>
              <IoSearchOutline />
              <input
                type="text"
                id={styles.inpSrch}
                placeholder="search by product,category or collection"
              ></input>
            </div>
            <div id={styles.searchBarsData}></div>
          </li>
          {!isAuth && (
            <NavLink
              id={styles.loginButton}
             
              to="/login"
              onClick={() => setActive("")}
              className={styles.LogoutHOver} 
            >
              Login
            </NavLink>
          )}
          { (
            <li
           
            >
              
              {isAuth && (
                <div style={{textAlign:"center"}} >
                <div style={{display:"flex", gap:"10px", alignItems:"center" , textAlign:"center"}}>
                  <p>
                    
                <FaUserAlt />
                  </p> 
                  <div >
                 
                    <p style={{fontWeight :"bold"}}>
                    {userName}
                    </p>
                  </div>
                  <p >
                 
                  </p>
                 
                <button 
                onClick={LogOut_User}
                className={styles.LogoutHOver} 
                 >
                    Logout
                 </button>
                </div>


                </div>
              )}
            </li>
          )}

          <li>
            <p
              
             
            >
               <NavLink to="/wishlist"><VscHeart /></NavLink>
              
            </p>
          </li>
          <li>
            <p
              
             
            >
              <span style={{display:"flex", alignContent:"center"}} >
              <NavLink to="/cart"><IoBagOutline  /></NavLink>
                
                <span  >
                  {TotalQty !== 0 ? <Circle minWidth={30} bg="#fdd835" >{TotalQty}</Circle> : "" }
                </span>
              </span>
            </p>
          </li>
        </div>
      </div>
      <hr className={styles.hrLine} />

      <div id={styles.dataBar}>
        <li >
          <NavLink
              style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            to="/"
            
          >
            MEN
          </NavLink>
        </li>

        <li>
          <NavLink
              style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            to="/landingPage/women"
           
          >
            WOMEN
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
              style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            to="/landingPage/accessories"
           
          >
            ACCESSORIES
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
