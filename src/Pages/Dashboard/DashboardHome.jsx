import React from 'react'
import DashboardSidebar from '../../Components/DashboardSidebar'
import '../../Styles/DashboardHome.css'

const DashboardHome = () => {
   return (
      <div>
         <DashboardSidebar />
         {/* Boxicons CDN Link */}
         <link
            href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            rel="stylesheet"
         />
         <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
         />
         <section className="home-section">
            <nav>
               <div className="sidebar-button">
                  <span className="dashboard">Dashboard</span>
               </div>
               {/* <div className="search-box">
                  <input type="text" placeholder="Search..." />
                  <i className="bx bx-search" />
               </div> */}
               <div className="profile-details">
                  {/*<img src="images/profile.jpg" alt="">*/}
                  <span className="admin_name">Prem Shahi</span>
                  <i className="bx bx-chevron-down" />
               </div>
            </nav>
            <div className="home-content">
               <div className="overview-boxes">
                  <div className="box">
                     <div className="right-side">
                        <div className="box-topic">Total Order</div>
                        <div className="number">40,876</div>
                        <div className="indicator">
                           <i className="bx bx-up-arrow-alt" />
                           <span className="text">Up from yesterday</span>
                        </div>
                     </div>
                     <i className="bx bx-cart-alt cart" />
                  </div>
                  <div className="box">
                     <div className="right-side">
                        <div className="box-topic">Total Sales</div>
                        <div className="number">38,876</div>
                        <div className="indicator">
                           <i className="bx bx-up-arrow-alt" />
                           <span className="text">Up from yesterday</span>
                        </div>
                     </div>
                     <i className="bx bxs-cart-add cart two" />
                  </div>
                  <div className="box">
                     <div className="right-side">
                        <div className="box-topic">Total Profit</div>
                        <div className="number">$12,876</div>
                        <div className="indicator">
                           <i className="bx bx-up-arrow-alt" />
                           <span className="text">Up from yesterday</span>
                        </div>
                     </div>
                     <i className="bx bx-cart cart three" />
                  </div>
                  <div className="box">
                     <div className="right-side">
                        <div className="box-topic">Total Return</div>
                        <div className="number">11,086</div>
                        <div className="indicator">
                           <i className="bx bx-down-arrow-alt down" />
                           <span className="text">Down From Today</span>
                        </div>
                     </div>
                     <i className="bx bxs-cart-download cart four" />
                  </div>
               </div>
               <div className="sales-boxes">
                  <div className="recent-sales box">
                     <div className="title">Recent Sales</div>
                     <div className="sales-details">
                        <ul className="details">
                           <li className="topic">Date</li>
                           <li>02 Jan 2021</li>
                           <li>02 Jan 2021</li>
                           <li>02 Jan 2021</li>
                           <li>02 Jan 2021</li>
                           <li>02 Jan 2021</li>
                           <li>02 Jan 2021</li>
                           <li>02 Jan 2021</li>
                        </ul>
                        <ul className="details">
                           <li className="topic">Customer</li>
                           <li>Alex Doe</li>
                           <li>David Mart</li>
                           <li>Roe Parter</li>
                           <li>Diana Penty</li>
                           <li>Martin Paw</li>
                           <li>Doe Alex</li>
                           <li>Aiana Lexa</li>
                           <li>Rexel Mags</li>
                           <li>Tiana Loths</li>
                        </ul>
                        <ul className="details">
                           <li className="topic">Sales</li>
                           <li>Delivered</li>
                           <li>Pending</li>
                           <li>Returned</li>
                           <li>Delivered</li>
                           <li>Pending</li>
                           <li>Returned</li>
                           <li>Delivered</li>
                           <li>Pending</li>
                           <li>Delivered</li>
                        </ul>
                        <ul className="details">
                           <li className="topic">Total</li>
                           <li>$204.98</li>
                           <li>$24.55</li>
                           <li>$25.88</li>
                           <li>$170.66</li>
                           <li>$56.56</li>
                           <li>$44.95</li>
                           <li>$67.33</li>
                           <li>$23.53</li>
                           <li>$46.52</li>
                        </ul>
                     </div>
                     <div className="button">See All</div>
                  </div>
                  <div className="top-sales box">
                     <div className="title">Top Seling Product</div>
                     <ul className="top-sales-details">
                        <li>
                           {/*<img src="images/sunglasses.jpg" alt="">*/}
                           <span className="product">Vuitton Sunglasses</span>

                           <span className="price">$1107</span>
                        </li>
                        <li>
                           {/*<img src="images/jeans.jpg" alt="">*/}
                           <span className="product">Hourglass Jeans </span>

                           <span className="price">$1567</span>
                        </li>
                        <li>
                           {/* <img src="images/nike.jpg" alt="">*/}
                           <span className="product">Nike Sport Shoe</span>

                           <span className="price">$1234</span>
                        </li>
                        <li>
                           {/*<img src="images/scarves.jpg" alt="">*/}
                           <span className="product">Hermes Silk Scarves.</span>

                           <span className="price">$2312</span>
                        </li>
                        <li>
                           {/*<img src="images/blueBag.jpg" alt="">*/}
                           <span className="product">Succi Ladies Bag</span>

                           <span className="price">$1456</span>
                        </li>
                        <li>
                           {/*<img src="images/bag.jpg" alt="">*/}
                           <span className="product">Gucci Womens's Bags</span>

                           <span className="price">$2345</span>
                        </li>
                        <li>
                           {/*<img src="images/addidas.jpg" alt="">*/}
                           <span className="product">Addidas Running Shoe</span>

                           <span className="price">$2345</span>
                        </li>
                        <li>
                           {/*<img src="images/shirt.jpg" alt="">*/}
                           <span className="product">Bilack Wear's Shirt</span>

                           <span className="price">$1245</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default DashboardHome
