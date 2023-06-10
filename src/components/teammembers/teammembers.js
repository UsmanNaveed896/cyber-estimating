import Img from '../../assets/img/800x900.png'
export default()=>{
    return(
        <>
        <div className="it-solution">
        <div class="team-area default-padding bg-gray bottom-less">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="heading-center text-center">
                        <h5>Team members</h5>
                        <h2>Meet our professional and expert team members</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="team-items text-center">
                <div class="row">
                  
                    <div class="single-item col-lg-4 col-md-6">
                        <div class="item">
                            <div class="thumb">
                                <img src={Img} alt="Thumb" />
                                <div class="social">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="info">
                                <h4>Lucas Ethan</h4>
                                <span>SEO Expert</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="single-item col-lg-4 col-md-6">
                        <div class="item">
                            <div class="thumb">
                                <img src={Img}  alt="Thumb" />
                                <div class="social">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="info">
                                <h4>Jack Alexander</h4>
                                <span>Marketing Expert</span>
                            </div>
                        </div>
                    </div>
                
                    <div class="single-item col-lg-4 col-md-6">
                        <div class="item">
                            <div class="thumb">
                                <img src={Img}  alt="Thumb"/>
                                <div class="social">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="info">
                                <h4>William James</h4>
                                <span>Graphic Designer</span>
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