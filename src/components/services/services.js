// import '../../assets/css/owl.theme.default.min.css'
// import '../../assets/css/owl.carousel.min.css'
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="it-solution">
                <div class="services-list-area it-services carousel-shadow overflow-hidden default-padding-bottom bottom-less">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 offset-lg-3">
                                <div class="heading-center text-center">
                                    <h5>Services We Provide</h5>
                                    <h2>We Transform Construction Data <br></br> into Actionable Insights</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="services-list-items services-default-carousel owl-carousel owl-theme">
                            <MultiCarousel responsive={responsive} keyBoardControl={true} transitionDuration={500}
                                autoPlay={true}
                            >
                                <div class="item">
                                    <div class="top">
                                        <i class="flaticon-secure"></i>
                                        <h4>Division 21 — Fire Suppression</h4>
                                    </div>
                                    <p>
                                        The Fire Suppression division is rigorous and requires close attention to detail. The systems for extinguishing fires using water
                                        and suppressing fires are thoroughly inspected, and the materials, quantities, and installation must be precise. At Cyber Estimating,
                                        we aim to earn your trust by understanding your needs and presenting information
                                    </p>
                                    <a href="#"><i class="fas fa-plus"></i> Discover Now</a>
                                </div>

                                <div class="item">
                                    <div class="top">
                                        <i class="flaticon-technical-support"></i>
                                        <h4>Division 22 — Plumbing</h4>
                                    </div>
                                    <p>
                                        When it comes to Plumbing, mistakes can be costly regarding time and customer satisfaction. Division 22 covers everything
                                        from piping and pumps to fixtures and related equipment, including numerous small components that should be noticed. With Cyber Estimating,
                                        you can rely on our expert estimators to accurately calculate and present quantities according to your preferences.
                                    </p>
                                    <a href="#"><i class="fas fa-plus"></i> Discover Now</a>
                                </div>

                                <div class="item">
                                    <div class="top">
                                        <i class="flaticon-laboratory"></i>
                                        <h4>Division 23 — Heating Ventilating and Air Conditioning (HVAC)</h4>
                                    </div>
                                    <p>
                                        The heating, ventilating, and air conditioning systems in buildings are becoming more complex over time,
                                        making it difficult to calculate the materials and equipment needed for these systems accurately.
                                        Division 23, which covers ductwork, HVAC piping, pumps, controls, and other related equipment, can have requirements.

                                    </p>
                                    <a href="#"><i class="fas fa-plus"></i> Discover Now</a>
                                </div>

                                <div class="item">
                                    <div class="top">
                                        <i class="flaticon-seo"></i>
                                        <h4>Division 26 — Electrical</h4>
                                    </div>
                                    <p>
                                        Efficient electrical contracting often depends on precise measurements.
                                        Complex cables, ducts, raceways, controls, substations, and switchgear networks make up medium- and low-voltage electrical distribution systems,
                                        so accurate calculations of material quantities are crucial.
                                        Cyber Estimating eliminates the guesswork and provides support for this process.
                                    </p>
                                    <a href="#"><i class="fas fa-plus"></i> Discover Now</a>
                                </div>
                                <div class="item">
                                    <div class="top">
                                        <i class="flaticon-seo"></i>
                                        <h4>Division 27 — Communications</h4>
                                    </div>
                                    <p>
                                        Managing the constantly evolving technology and equipment in Division 27 requires a lot of time and effort,
                                        and doing it correctly is crucial. Additional infrastructure like racks, frames, ducts, and raceways must
                                        be quantified in the bidding process to support structured cabling and enclosures for data, voice, audio video,
                                    </p>
                                    <a href="#"><i class="fas fa-plus"></i> Discover Now</a>
                                </div>
                                <div class="item">
                                    <div class="top">
                                        <i class="flaticon-seo"></i>
                                        <h4>Division 28 — Electronic Safety and Security</h4>
                                    </div>
                                    <p>
                                    Regarding Electronic Safety and Security, even a tiny deviation from the specifications can lead to significant complications during inspections.
                                     This is because access control, video surveillance, security detection systems, alarms, and life safety overlap with many other divisions.
                                      Our goal is to provide top-notch service to ensure your satisfaction.
                                    </p>
                                    <a href="#"><i class="fas fa-plus"></i> Discover Now</a>
                                </div>
                            </MultiCarousel>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}