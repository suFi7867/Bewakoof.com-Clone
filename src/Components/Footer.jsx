import React from "react";
import styles from "./footer.module.css";
import { NavLink } from "react-router-dom";

const FooterPart = () => {
  return (
    <div id={styles.fooTerdivs}>
      <div id={styles.fooTer}>
        <h1 className={styles.H1}>Bewakoof</h1>
        <div className={styles.footerGrid}>
          <div>
            <h4>CUSTOMERS SERVICE</h4>
            <p>
              <a href="/">Contact us</a>
            </p>
            <p>
              <a href="/">Track Order</a>
            </p>
            <p>
              <a href="/">Return Order</a>
            </p>
            <p>
              <a href="/">Cancel Order</a>
            </p>
          </div>
          <div>
            <h4>COMPANY</h4>
            <p>
              <a href="/">About us</a>
            </p>
            <p>
              <a href="/">We're Hiring</a>
            </p>
            <p>
              <a href="/">Terms & Conditions</a>
            </p>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              <a href="/">Blog</a>
            </p>
          </div>
          <div>
            <h4>CONNECT WITH US</h4>
            <p>
              <a href="/">4.7M People Like this</a>
            </p>
            <p>
              <a href="/">1M Followers</a>
            </p>
          </div>
          <div>
            <h4>KEEP UP TO DATE</h4>
            <div className={styles.inpbtnFlex}>
              <input placeholder="Enter Email id" />
              <button className={styles.bTTn}>Subscribe</button>
            </div>
          </div>
          <div>
            <p>
              <a href="/">15 Days return policy</a>
            </p>
            <p>
              <a href="/">Cash on delivery*</a>
            </p>
          </div>
          <div>
            <h4>DOWNLOAD THE APP</h4>
            <div id={styles.imgDivmain}>
              {/* //overflow={"hidden"} w="95%"  m="auto" mt={{base:"70px",lg:"190px"}} h={{base:"350px",lg:"auto"}} */}
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.bewakoof.com/web/app_android_v1.png"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://itunes.apple.com/in/app/bewakoof/id1100190514?mt=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.bewakoof.com/web/app_ios_v1.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4>100% SECURE PAYMENT</h4>
            <div>
              <img
                src="https://images.bewakoof.com/web/secure-payments-image.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.footerGrid} id={styles.footerGrid}>
          <div>
            <h3>
              <NavLink to="/men">MEN'S CLOTHING</NavLink>
            </h3>
            <p>
              <NavLink to="/men">Top Wear</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's New Arrivals</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Half Sleeve T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Hoodies & Sweatshirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Long Sleeve T-shirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Printed T-shirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Plain T-shirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Vests</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Polo T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Kurtas</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Combo T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Shirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Nightwear</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Plus Size Store</NavLink>
            </p>
            <br />
            <p>
              <NavLink to="/men">Bottom Wear</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Pajamas</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Boxer Shorts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Shorts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Track Pants</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Pants</NavLink>
            </p>
            <br />
            <p>
              <NavLink to="/men">Featured</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Flip Flops</NavLink>
            </p>
            <p>
              <NavLink to="/men">Men's Sliders</NavLink>
            </p>
            <p>
              <NavLink to="/men">Marvel T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Disney T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Avengers T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Star Wars T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Batman T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Superman T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="/men">Joker T-Shirts</NavLink>
            </p>
          </div>
          <div>
            <h3>
              <NavLink to="/women">WOMEN'S CLOTHING</NavLink>
            </h3>
            <p>
              <NavLink to="/women">Women's Top Wear</NavLink>
            </p>
            <p>
              <NavLink to="/women">Women's New Arrivals</NavLink>
            </p>
            <p>
              <NavLink to="/women">Women's T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="/women">Women's Hoodies & Sweatshirts</NavLink>
            </p>
            <p>
              <NavLink to="/women">Women's Top Wear</NavLink>
            </p>
            <p>
              <NavLink to="/women">Women's 3/4 Sleeve T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="/women">Women's Kurtis</NavLink>
            </p>
            <p>
              <NavLink to="/women">Women's Kurtis</NavLink>
            </p>
            <p>
              <NavLink to="/women">Women's Nightwear</NavLink>
            </p>
            <p>
              <NavLink to="/women">Women's Plus Size Store</NavLink>
            </p>
            <br />
            <p>
              <NavLink to="/women">Women's Bottom Wear</NavLink>
            </p>
            <p>
              <a href="//">Women's Pajamas</a>
            </p>
            <p>
              <a href="//">Women's Boxer Shorts</a>
            </p>
            <p>
              <a href="//">Women's Jeans</a>
            </p>
            <p>
              <a href="//">Women's Joggers</a>
            </p>
            <p>
              <a href="//">Women's Shorts</a>
            </p>
            <br />
            <p>
              <a href="//">BAGS</a>
            </p>
            <p>
              <a href="//">Laptop Bags</a>
            </p>
            <p>
              <a href="//">Small Backpacks</a>
            </p>
            <br />
            <p>
              <a href="//">Featured</a>
            </p>
            <p>
              <a href="//">Women's Slides</a>
            </p>
            <p>
              <a href="//">Women's Flip Flops</a>
            </p>
          </div>
          <div>
            <h3>
              <a href="/">MOBILE COVERS</a>
            </h3>
            <p>
              <a href="/">Brands</a>
            </p>
            <p>
              <a href="/">Realme</a>
            </p>
            <p>
              <a href="/">Samsung</a>
            </p>
            <p>
              <a href="/">Xiaomi</a>
            </p>
            <p>
              <a href="/">Oneplus</a>
            </p>
            <p>
              <a href="/">Vivo</a>
            </p>
            <p>
              <a href="/">Oppo</a>
            </p>
          </div>
          <div className={styles.footerEnd}>
            <h4>
              <a href="/">FANBOOK</a>
            </h4>
            <h4>
              <a href="/">OFFERS</a>
            </h4>
            <h4>
              <a href="/">SITEMAP</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPart;
