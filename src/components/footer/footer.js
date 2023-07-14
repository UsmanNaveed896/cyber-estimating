import Img from '../../assets/img/6.png'
export default () => {
    return (
        <>
            <div className="it-solution ">
                <footer class="bg-dark text-light">
                    <div class="container pb-5">
                        <div class="f-items">
                            <div class="row">
                                <div class="col-lg-5 col-md-6 item">
                                    <div class="f-item about">
                                        <h4 class="widget-title">About Us</h4>
                                        <p>
                                            At Cyber Estimating, our mission is to assist you in making informed decisions with
                                            dependable and precise construction estimating services. Our industry knowledge
                                            enables us to provide fast and accurate estimates, saving you time, lowering costs,
                                            and enhancing efficiency.<br></br>
                                            Services:<br></br>
                                            
                                        </p>
                                        <div class="social">
                                            <ul>
                                                <li class="facebook">
                                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li class="twitter">
                                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                                </li>
                                                <li class="youtube">
                                                    <a href="#"><i class="fab fa-youtube"></i></a>
                                                </li>
                                                <li class="instagram">
                                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-2 col-md-6 item">
                                    <div class="f-item link">
                                        <h4 class="widget-title">Services</h4>
                                        <ul>
                                            <li>
                                                <a href="#"> Cost Estimates</a>
                                            </li>
                                            <li>
                                                <a href="#">Budgetary Cost Estimates</a>
                                            </li>
                                            <li>
                                                <a href="#">Material Takeoffs</a>
                                            </li>
                                            <li>
                                                <a href="#">Scope Revisions & Comparisons</a>
                                            </li>
                                            <li>
                                                <a href="#">Print & Email Ready Final Estimates</a>
                                            </li>
                                            <li>
                                                <a href="#">Project Scheduling</a>
                                            </li>
                                            <li>
                                                <a href="#">Change Order Management</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-lg-2 col-md-6 item">
                                    <div class="f-item link">
                                        <h4 class="widget-title">Company</h4>
                                        <ul>
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Team</a>
                                            </li>
                                            <li>
                                                <a href="#">Career</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact</a>
                                            </li>
                                            <li>
                                                <a href="#">Terms</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 item">
                                    <div class="f-item contact">
                                        <h4 class="widget-title">Contact Us</h4>
                                        <div class="address">
                                            <ul>
                                                <li>
                                                    <p>Email</p>
                                                    <strong>info@cyberestimating.com</strong>
                                                </li>
                                                <li>
                                                    <p>Contact</p>
                                                    <strong>Whatsapp: +1 786-840-5432</strong>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <div class="container">
                            <div class="row align-center">
                                <div class="col-lg-4">
                                    <p>&copy; Copyright 2021. All Rights Reserved</p>
                                </div>
                                <div class="col-lg-4 text-center logo">
                                    <a href="#"><img src={Img} alt="Logo" /></a>
                                </div>
                                <div class="col-lg-4 text-right newsletter">
                                    <form action="#">
                                        <div class="input-group stylish-input-group">
                                            <input type="email" placeholder="Enter your e-mail" class="form-control" name="email" />
                                            <span class="input-group-addon">
                                                <button type="submit">
                                                    <i class="fa fa-paper-plane"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </div>
        </>
    )
}