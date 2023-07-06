// import '../../assets/css/owl.theme.default.min.css'
// import '../../assets/css/owl.carousel.min.css'
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const navigateToServices = (divId) => {
        navigate('/services', { state: { targetDiv: divId } });
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
                                    <i class="fa fa-fire-extinguisher" aria-hidden="true"></i>
                                        <h4>Division 21 — Fire Suppression</h4>
                                    </div>
                                    <p>
                                        The Fire Suppression division is rigorous and requires close attention to detail. The systems for extinguishing fires using water
                                        and suppressing fires are thoroughly <span style={{color:'#5a5454', fontWeight:"600"}}>Continue Reading...</span>
                                    </p>
                                    <a  style={{cursor:'pointer', color:'#0d6efd'}}
                                    onClick={()=>navigateToServices('div-21')}
                                    ><i class="fas fa-plus"></i> Discover Now</a>
                                </div>

                                <div class="item">
                                    <div class="top">
                                    <i class="fa fa-bath" aria-hidden="true"></i>
                                        <h4>Division 22 — Plumbing</h4>
                                    </div>
                                    <p style={{marginTop: '35px'}}>
                                        When it comes to Plumbing, mistakes can be costly regarding time and customer satisfaction. Division 22 covers everything
                                        from piping and pumps to fixtures and  <span style={{color:'#5a5454', fontWeight:"600"}}>Continue Reading...</span>
                                    </p>
                                    <a style={{cursor:'pointer', color:'#0d6efd'}}
                                     onClick={()=>navigateToServices('div-22')}
                                    ><i class="fas fa-plus"></i> Discover Now</a>
                                </div>

                                <div class="item" style={{paddingTop:'45px' , paddingBottom:'45px'}}>
                                    <div class="top">
                                    <i class="fa fa-universal-access" aria-hidden="true"></i>
                                        <h4>Division 23 — Heating Ventilating and Air Conditioning (HVAC)</h4>
                                    </div>
                                    <p>
                                        The heating, ventilating, and air conditioning systems in buildings are becoming more complex over time,
                                        making it difficult to calculate the materials and equipment <span style={{color:'#5a5454', fontWeight:"600"}}>Continue Reading...</span>

                                    </p>
                                    <a style={{cursor:'pointer', color:'#0d6efd'}}
                                     onClick={()=>navigateToServices('div-23')}
                                    ><i class="fas fa-plus"></i> Discover Now</a>
                                </div>

                                <div class="item">
                                    <div class="top">
                                    <i class="fa fa-lightbulb" aria-hidden="true"></i>
                                        <h4>Division 26 — Electrical</h4>
                                    </div>
                                    <p style={{marginTop: '35px'}}>
                                        Efficient electrical contracting often depends on precise measurements.
                                        Complex cables, ducts, raceways, controls, substations, and switchgear networks make up medium <span style={{color:'#5a5454', fontWeight:"600"}}>Continue Reading...</span>
                                    </p>
                                    <a style={{cursor:'pointer', color:'#0d6efd'}}
                                     onClick={()=>navigateToServices('div-26')}
                                    ><i class="fas fa-plus"></i> Discover Now</a>
                                </div>
                                <div class="item">
                                    <div class="top">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                        <h4>Division 27 — Communications</h4>
                                    </div>
                                    <p style={{marginTop: '35px'}}>
                                        Managing the constantly evolving technology and equipment in Division 27 requires a lot of time and effort,
                                        and doing it correctly is crucial. Additional <br></br><span style={{color:'#5a5454', fontWeight:"600"}}>Continue Reading...</span>
                                    </p>
                                    <a style={{cursor:'pointer', color:'#0d6efd'}} 
                                     onClick={()=>navigateToServices('div-27')}
                                    ><i class="fas fa-plus"></i> Discover Now</a>
                                </div>
                                <div class="item">
                                    <div class="top">
                                    <i class="fa fa-plug" aria-hidden="true"></i>
                                        <h4>Division 28 — Electronic Safety and Security</h4>
                                    </div>
                                    <p>
                                    Regarding Electronic Safety and Security, even a tiny deviation from the specifications can lead to significant complications during inspections.
                                     This is because access <br></br><span style={{color:'#5a5454', fontWeight:"600"}}>Continue Reading...</span>
                                    </p>
                                    <a style={{cursor:'pointer', color:'#0d6efd'}}
                                     onClick={()=>navigateToServices('div-28')}
                                    ><i class="fas fa-plus"></i> Discover Now</a>
                                </div>
                            </MultiCarousel>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}