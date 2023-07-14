import Img1 from '../../assets/img/shape/47.png'
import Img2 from '../../assets/img/whatsapp.png'
import '../../style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default () => {
    return (
        <>
            <div className='it-solution'>
                <div class="banner-area shadow it-banner bg-cover text-light"
                    style={{
                        backgroundImage: `url(${require('../../assets/img/new.jpg')})`,
                        backgroundPosition: 'center',
                        // backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <div class="item-box">
                        <div class="item">

                            <div class="sahpe" >
                                <img src={Img1} />
                            </div>

                            <div class="container">
                                <div class="row align-center">

                                    <div class="col-lg-6">
                                        <div class="content">
                                            <Carousel autoPlay interval="5000" infiniteLoop showIndicators={false} showStatus={false} showArrows={false}>
                                                <div class="content">
                                                    {/* <img src="assets/1.jpeg" /> */}
                                                    <h2 class="wow fadeInDown" style={{textAlign:'start'}}>
                                                        Unlocking Time, Money,<br></br> and Confidence for Your <br></br>Project's Success</h2>
                                                 
                                                </div>
                                                <div class="content">
                                                    {/* <img src="assets/2.jpeg" /> */}
                                                    <h2 class="wow fadeInDown"  style={{textAlign:'start'}}>Empowering Projects with <br></br> Precision, Trust, and Confidences</h2>
                                                  
                                                    {/* <p className="legend"></p> */}
                                                </div>
                                                <div class="content">
                                                    {/* <img src={Img2} /> */}
                                                    <h2 class="wow fadeInDown" style={{textAlign:'start'}}>Excellence Defined: Accurate,<br></br> Reliable, and Expert Estimating Services.</h2>
                                                </div>
                                            </Carousel>
                                            {/* <h4 class="wow fadeInUp">Estimating excellence for your construction needs</h4>
                                            <h2 class="wow fadeInDown">Precise estimates, Profitable projects</h2>
                                            <p class="wow fadeInLeft">
                                                Expert Estimating for Superior Construction
                                            </p>
                                            <a class="btn btn-theme effect btn-md wow fadeInUp" href="#">Get Details <i class="fa fa-arrow_right"></i></a> */}
                                        </div>
                                    </div>

                                    <div class="col-lg-5 offset-lg-1 appoinment">
                                        <div class="appoinment-box text-center">
                                            <div class="heading">
                                                <h4>Appointment</h4>
                                                <p>
                                                    Country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon
                                                </p>
                                            </div>
                                            <form action="#">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="form-group">
                                                            <input class="form-control" id="ap-name" name="name" placeholder="Name*" type="text" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-group">
                                                            <input class="form-control" id="ap-email" name="email" placeholder="Email*" type="text" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-group">
                                                            <input class="form-control" id="ap-phone" name="phone" placeholder="Phone*" type="text" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-group">
                                                            <textarea class="form-control" id="textAreaExample1" rows="4" placeholder='Tell Us About The Project'></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <button type="submit" name="submit" id="ap-submit">
                                                            Submit Query
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}