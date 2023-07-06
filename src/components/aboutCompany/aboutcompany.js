import Img from '../../assets/img/deep.jpg'
export default () => {
    return (
        <>
            <div class="about-us-content-area overflow-hidden default-padding">
                <div class="container">
                    <div class="about-items">
                        <div class="row align-center">


                            <div class="col-lg-6">
                                <div class="thumb">
                                    <img src={Img} alt="Thumb" />
                                    <div class="overlay">
                                        <h2><strong>2500<span>+</span></strong> Customers worldwide</h2>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="content">
                                    <h5>10 YEARS OF EXPERIENCE</h5>
                                    <h2>We Cover a Range of Industries As Diverse As You Expected</h2>
                                    <p>
                                        Cyber Estimating is Devoted to helping you make informed decisions with reliable 
                                        and accurate construction estimating services using advanced technology and industry expertise.
                                        Our fast and precise estimates help you save time, reduce costs, and increase efficiency.
                                    </p>
                                    <ul>
                                        <li>
                                            <h5>Industry experts</h5>
                                            <p>
                                                Our team of experienced professionals and advanced technology ensure 
                                                that our construction estimates are accurate, reliable, and tailored to your specific project needs.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Lightning Turn Around</h5>
                                            <p>
                                                Efficient workflow and advanced software allow us to provide 
                                                fast and comprehensive estimates, giving you the information, 
                                                you need to make timely decisions.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Cost Effective</h5>
                                            <p>
                                                Our structures approach and advanced technology enable us to offer 
                                                cost-effective construction estimating services without compromising accuracy or quality.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}