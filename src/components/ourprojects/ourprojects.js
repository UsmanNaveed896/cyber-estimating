import Img from '../../assets/img/800x600.png'
export default()=>{
    return(
        <>
        <div className="it-solution">
        <div class="portfolio-area inc-colum default-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="heading-center text-center">
                        <h5>Projects</h5>
                        <h2>Our Recent popular awesome completed projects</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="portfolio-items-area">
                <div class="row">
                    <div class="col-md-12 portfolio-content">
                        <div class="mix-item-menu text-center">
                            <button class="active" data-filter="*">All</button>
                            <button data-filter=".development">Development</button>
                            <button data-filter=".consulting">Consulting</button>
                            <button data-filter=".finance">Finance</button>
                            <button data-filter=".branding">Branding</button>
                            <button data-filter=".capital">Capital</button>
                        </div>
                      

                        <div class="magnific-mix-gallery masonary">
                            <div id="portfolio-grid" class="portfolio-items colums-3">
                              
                                <div class="pf-item development capital">
                                    <div class="overlay">
                                        <img src={Img} alt="thumb"/>
                                        <a href="assets/img/800x600.png" class="item popup-link"><i class="fa fa-plus"></i></a>
                                        <div class="content">
                                            <span>Finance</span>
                                            <h5><a href="#">Startup Funding</a></h5>
                                        </div>
                                    </div>
                                </div>
                           
                                <div class="pf-item consulting branding">
                                    <div class="overlay">
                                        <img src={Img} alt="thumb"/>
                                        <a href="assets/img/800x600.png" class="item popup-link"><i class="fa fa-plus"></i></a>
                                        <div class="content">
                                            <span>Creative</span>
                                            <h5><a href="#">Accounting Advisory</a></h5>
                                        </div>
                                    </div>
                                </div>
                              
                                <div class="pf-item consulting finance">
                                    <div class="overlay">
                                        <img src={Img} alt="thumb"/>
                                        <a href="assets/img/800x600.png" class="item popup-link"><i class="fa fa-plus"></i></a>
                                        <div class="content">
                                            <span>Business</span>
                                            <h5><a href="#">Merger & Acquisition</a></h5>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="pf-item finance">
                                    <div class="overlay">
                                        <img src={Img} alt="thumb"/>
                                        <a href="assets/img/800x800.png" class="item popup-link"><i class="fa fa-plus"></i></a>
                                        <div class="content">
                                            <span>Invest</span>
                                            <h5><a href="#">Assets For Technology</a></h5>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="pf-item capital development">
                                    <div class="overlay">
                                        <img src={Img} alt="thumb"/>
                                        <a href="assets/img/800x800.png" class="item popup-link"><i class="fa fa-plus"></i></a>
                                        <div class="content">
                                            <span>Finance</span>
                                            <h5><a href="#">Business Matching</a></h5>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="pf-item consulting branding">
                                    <div class="overlay">
                                        <img src={Img} alt="thumb"/>
                                        <a href="assets/img/800x600.png" class="item popup-link"><i class="fa fa-plus"></i></a>
                                        <div class="content">
                                            <span>Source</span>
                                            <h5><a href="#">Startup Funding</a></h5>
                                        </div>
                                    </div>
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