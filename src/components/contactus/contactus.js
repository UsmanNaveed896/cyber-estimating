import Img from '../../assets/img/illustration/9.png';
import Img1 from '../../assets/img/whatsapp.png'
export default () => {
    return (
        <>
            <div className='it-solution'>
                <div class="contact-area default-padding">

                    <div class="fixed-bg left">
                        <img src={Img} alt="Shape" />
                    </div>


                    <div class="container">
                        <div class="contact-items">
                            <div class="row">


                                <div class="col-lg-7 contact-box">
                                    <div class="form-items">
                                        <h5>Contact Us</h5>
                                        <p style={{fontWeight:'500'}}> Are you looking 
                                            for speedy completion of your project? Our team offers prompt
                                            turn Around on a case-by-case basis, ensuring delivery within 24-48
                                            hours.</p>
                                        <form action="assets/mail/contact.php" method="POST" class="contact-form">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <input class="form-control" id="name" name="name" placeholder="Name" type="text" />
                                                        <span class="alert-error"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <input class="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                                        <span class="alert-error"></span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <input class="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                                                        <span class="alert-error"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="form-group comments">
                                                        <textarea class="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-4">
                                                <div class="col-lg-12">
                                                    <button type="submit" name="submit" id="submit">
                                                        Send Now
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 alert-notification">
                                                <div id="message" class="alert-msg"></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="col-lg-5 left-info">
                                    <div class="info-items">

                                        {/* <div class="item">
                                            <div class="icon">
                                                <i class="flaticon-location"></i>
                                            </div>
                                            <div class="info">
                                                <h5>Location</h5>
                                                <p>
                                                    22 Baker Street, London, <br></br> United Kingdom, W1U 3BW
                                                </p>
                                            </div>
                                        </div> */}

                                        <div class="item">
                                            <div class="icon">
                                                <i class="flaticon-telephone"></i>
                                            </div>
                                            <div class="info">
                                                <h5>Make a Call</h5>
                                                <div className='mt-3'>
                                                <img className='' src={Img1} alt="abc" />
                                                <span className='icons-whatsapp'>+1 786-840-5432</span>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="item">
                                            <div class="icon">
                                                <i class="flaticon-email"></i>
                                            </div>
                                            <div class="info">
                                                <h5>Send a Mail</h5>
                                                <p>
                                                info@cyberestimating.com
                                                </p>
                                            </div>
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