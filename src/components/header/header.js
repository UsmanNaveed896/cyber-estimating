import '../../style.css'
import '../../assets/css/bootsnav.css'
import '../../assets/css/font-awesome.min.css'
import Img1 from '../../assets/img/6.png'
// import '../../assets/css/responsive.css'
// import '../../assets/css/animate.css'
// import '../../assets/css/animate.css'
import { useState } from 'react'
export default () => {
    return (
        <>
            {/* <!-- Start Header Top 
    ============================================= --> */}
            <div className='it-solution' >
                <div className='header-abs'>
                <div class="top-bar-area">
                    <div class="container-full">
                        <div class="row align-center">
                            <div class="col-lg-7 info-colums text-left">
                                <ul>
                                    {/* <li>
                                        <i class="fas fa-map-marker-alt"></i>
                                        California, TX 70240
                                    </li> */}
                                    <li>
                                        <i class="fas fa-envelope"></i>
                                         &nbsp;info@cyberestimating.com
                                    </li>
                                    <li>
                                        <i class="fas fa-phone"></i>
                                        +1 786-840-5432
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-5  item-flex" style={{textAlign:'end'}}>
                                <div class="info">
                                    <ul>
                                        {/* <li>
                                            <i class="fas fa-clock"></i> Office Hours: 8:00 AM – 7:45 PM
                                        </li> */}
                                    </ul>
                                </div>
                                <div class="social">
                                    <ul>
                                        {/* <li>
                                            <a href="#">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li> */}
                                        <li>
                                        <span>Linkedin</span> <a href="#">
                                               <i class="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
            {/* <!-- End Header Top --> */}

            <header id="home">

                {/* <!-- Start Navigation --> */}
                <nav class="navbar navbar-default navbar-sticky bootsnav">

                    <div class="container-full">

                        {/* <!-- Start Atribute Navigation --> */}
                        <div class="attr-nav">
                            <form action="#">
                                <input type="text" placeholder="Search" class="form-control" name="text" />
                                <button type="submit">
                                    <i class="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                        {/* <!-- End Atribute Navigation --> */}

                        {/* <!-- Start Header Navigation --> */}
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i class="fa fa-bars"></i>
                            </button>
                            <a class="navbar-brand" href="index.html">
                                <img src={Img1} class="logo" alt="Logo" />
                            </a>
                        </div>
                        {/* <!-- End Header Navigation -->

        <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div class="collapse navbar-collapse" id="navbar-menu">
                            <ul class="nav usman" data-in="#" data-out="#" style={{justifyContent:'center'}}>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle active" data-toggle="dropdown" style={{textDecoration:'none'}}>Home</a>
                                    
                                    {/* <ul class="dropdown-menu">
                                        <li><a href="index-business.html">Corporate Business <span class="badge">new</span></a></li>
                                        <li><a href="index.html">Startup Agency</a></li>
                                        <li><a href="index-marketing-agency.html">Marketing Agency</a></li>
                                        <li><a href="app-landing.html">App Landing <span class="badge">new</span></a></li>
                                        <li><a href="index-digital-agency.html">Digital Agency</a></li>
                                        <li><a href="index-it-solution.html">It Solution</a></li>
                                        <li><a href="index-software-landing.html">Software Landing <span class="badge">New</span></a></li>
                                        <li><a href="minimal-ecommerce.html">Minimal Ecommerce <span class="badge">new</span></a></li>
                                    </ul> */}
                                </li>
                                <li class="dropdown">
                                    <a  class="dropdown-toggle" data-toggle="dropdown" style={{textDecoration:'none'}}>Services</a>
                                    {/* <ul class="dropdown-menu">
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Projects</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="projects.html">Our Projects</a></li>
                                                <li><a href="project-details.html">Projects Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="pricing-table.html">Pricing Table</a></li>
                                        <li><a href="team.html">Team</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="404.html">Error Page</a></li>
                                    </ul> */}
                                </li>
                                {/* <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Shop</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="shop.html">shop</a></li>
                                        <li><a href="shop-single.html">Product Details</a></li>
                                    </ul>
                                </li> */}
                                {/* <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Services</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="services.html">Services Version One</a></li>
                                        <li><a href="services-2.html">Services Version Two</a></li>
                                        <li><a href="services-details.html">Services Details</a></li>
                                    </ul>
                                </li> */}
                                {/* <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Blog</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="blog-standard.html">Blog Standard</a></li>
                                        <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                                        <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>
                                        <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                        <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>
                                    </ul>
                                </li> */}
                                <li className=' mt-2'><button className='get-btn'>Get Estimate</button></li>
                            </ul>
                        </div>
                    </div>

                </nav>
                {/* <!-- End Navigation --> */}

            </header>
            </div>
            </div>
        </>
    )
}