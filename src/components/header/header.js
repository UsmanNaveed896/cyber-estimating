import '../../style.css'
import '../../assets/css/bootsnav.css'
import '../../assets/css/font-awesome.min.css'
import Img1 from '../../assets/img/6.png'
import '../../assets/css/responsive.css'
import '../../assets/css/animate.css'
import '../../assets/css/animate.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default () => {
    const navigate=useNavigate();
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
                                <div class="col-lg-5  item-flex" style={{ textAlign: 'end' }}>
                                    <div class="social">
                                        <ul>
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
                                    <ul class="nav usman" data-in="#" data-out="#" style={{ justifyContent: 'center', gap: '30px' }}>
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle active" data-toggle="dropdown" style={{ textDecoration: 'none' }}>Home</a>

                                        </li>
                                        <li class="dropdown">
                                            <a class="dropdown-toggle op" data-toggle="dropdown" style={{ textDecoration: 'none' }}>Services</a>
                                            <div class="menu-wrap">

                                                <ul class="drop-menu">

                                                    <li class="drop-menu-item" >
                                                        <a onClick={()=>navigate('/services')} >Services</a>
                                                        {/* <a >Division 22 — Plumbing</a>
                                                        <a >Division 23 — Heating Ventilating and Air Conditioning (HVAC)</a>
                                                        <a >Division 26 — Electrical</a>
                                                        <a >Division 27 — Communications</a>
                                                        <a >Division 28 — Electronic Safety and Security</a> */}
                                                    </li>
                                                </ul>

                                            </div>

                                        </li>

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