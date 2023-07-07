import './allServices.css'
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Frontpage from '../../components/frontpage/frontpage';
export default () => {
    const divRef = useRef(null);
    const location = useLocation();
    const [division, setDivision] = useState({
        division21: false,
        division22: false,
        division23: false,
        division26: false,
        division27: false,
        division28: false,
    })
    useEffect(() => {
        if (location.state && location.state.targetDiv && divRef.current) {
            const targetDiv = document.getElementById(location.state.targetDiv);
            if (targetDiv) {
                targetDiv.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <>
            <Frontpage />
            <div className="all-services pt-4 ">
                <div className="container  services-detail pt-5">
                    <h3 style={{ fontWeight: '700', paddingLeft: '24px' }}>DIVISION SERVICED</h3>
                    <div class="modal-header-def  p-4 0 rounded-t-md" ref={divRef} id="div-21">
                        <p className="text-base" style={{ lineHeight: '27px' }}>
                            Cyber Estimating offers a wide range of services covering most of the divisions
                            listed in CSI's 2020 Master Format Publication which is the industry standard
                            for specifications in commercial construction. Our Cyber Estimating service
                            caters to large general contractors who require material quantity takeoffs
                            across multiple divisions. We also work with specialty contractors who only
                            need quantities calculated for one division. Whether you require assistance
                            with a single division or multiple ones, we take the time to understand the
                            unique needs of your business and provide the necessary quantities and details
                            required for seamless integration into your estimates.
                        </p>
                        <p style={{ marginTop: '20px' }}>Discover more about our services associated with any of the following
                            divisions. Please reach out if you are still waiting to see your division listed. We
                            do it all.</p>
                    </div>
                    <div className='col-md-12 d-flex mt-4 gap-3'>
                        <div className='col-md-6'>
                            <div className='open-close'>
                                <h5 className="text-base" style={{ fontWeight: '600' }}>Division 21 — Fire Suppression</h5>
                                <i class="fa fa-plus-circle plois" aria-hidden="true"
                                    onClick={() => setDivision((st) => ({
                                        ...st,
                                        division21: true,
                                        division22: false,
                                        division23: false,
                                        division26: false,
                                        division27: false,
                                        division28: false,
                                    }))}

                                ></i>
                            </div>
                            {division?.division21 &&
                                <div class={`modal-header-abc p-4 0 rounded-t-md  ${division.division21 ? 'open' : ''}`} ref={divRef} id="div-21">
                                    <i class="fa fa-fire-extinguisher oic-icon" aria-hidden="true"></i>
                                    <h3 className="text-base mt-5" style={{ fontWeight: '600' }}>Division 21 — Fire Suppression</h3>
                                    <p className="text-base" style={{ lineHeight: '27px' }}> The Fire Suppression division is rigorous and requires close attention to detail.
                                        The systems for extinguishing fires using water and suppressing fires are
                                        thoroughly inspected, and the materials, quantities, and installation must be
                                        precise. At Cyber Estimating, we aim to earn your trust by understanding your
                                        needs and presenting information in the way you prefer, one project at a time.
                                        Division 21 provides essential equipment to support water-based systems, wet
                                        or dry-chemical fire extinguishing systems, and storage tanks for suppression.
                                        It includes hydrants, hoses, nozzles, and reels. Additionally, Cyber Estimating
                                        assigns a dedicated consultant to your account who works with your estimating
                                        team to provide accurate calculations. The consultant provides a spreadsheet
                                        of the required material counts, a marked-up pdf with detailed estimates, and
                                        backup documentation that covers assumptions and logic.
                                        Fire suppression is a crucial aspect of any building project. Regardless of size, it
                                        must be executed correctly. Cyber Estimating can help you understand the
                                        requirements to secure a successful bid.</p>
                                </div>
                            }
                            <div className='open-close'>
                                <h5 className="text-base" style={{ fontWeight: '600' }}>Division 22 — Plumbing</h5>
                                <i class="fa fa-plus-circle plois" aria-hidden="true"
                                    onClick={() => setDivision((st) => ({
                                        ...st,
                                        division21: false,
                                        division22: true,
                                        division23: false,
                                        division26: false,
                                        division27: false,
                                        division28: false,
                                    }))}
                                ></i>
                            </div>
                            {division?.division22 &&
                                <div class={`modal-header-abc p-4 0 rounded-t-md  ${division.division22 ? 'open' : ''}`} id="div-22">
                                    <i class="fa fa-bath oic-icon" aria-hidden="true"></i>
                                    <h3 className="text-base mt-5" style={{ fontWeight: '600' }}>Division 22 — Plumbing</h3>
                                    <p className="text-base" style={{ lineHeight: '27px' }}> When it comes to Plumbing, mistakes can be costly regarding time and
                                        customer satisfaction. Division 22 covers everything from piping and pumps to
                                        fixtures and related equipment, including numerous small components that
                                        should be noticed. With Cyber Estimating, you can rely on our expert
                                        estimators to accurately calculate and present quantities according to your
                                        preferences.
                                        Division 22 encompasses potable water storage, sanitary sewer, and
                                        stormwater drainage, all highly regulated. It also includes auxiliary components
                                        such as water heaters, fixtures, filtration equipment, and pool and fountain
                                        systems. When you work with Cyber Estimating, a dedicated consultant will be
                                        assigned to your project. You will receive tailored reporting, including a
                                        spreadsheet of the required material counts, a marked-up PDF detailing the
                                        calculated areas, and all assumptions.
                                        Plumbing projects come in various sizes and types, from industrial to
                                        residential. Cyber Estimating is always available to help with plumbing needs,
                                        with consultants available seven days a week.</p>
                                </div>
                            }
                            <div className='open-close'>
                                <h5 className="text-base" style={{ fontWeight: '600' }}>Division 23 — Heating Ventilating and Air Conditioning (HVAC)</h5>
                                <i class="fa fa-plus-circle plois" aria-hidden="true"
                                    onClick={() => setDivision((st) => ({
                                        ...st,
                                        division21: false,
                                        division22: false,
                                        division23: true,
                                        division26: false,
                                        division27: false,
                                        division28: false,
                                    }))}
                                ></i>
                            </div>
                            {division?.division23 &&
                                <div class={`modal-header-abc p-4 0 rounded-t-md  ${division.division23 ? 'open' : ''}`} id="div-23">
                                    <i class="fa fa-universal-access oic-icon" aria-hidden="true"></i>
                                    <h3 className="text-base mt-5" style={{ fontWeight: '600' }}>Division 23 — Heating Ventilating and Air Conditioning (HVAC)</h3>
                                    <p className="text-base" style={{ lineHeight: '27px' }}> The heating, ventilating, and air conditioning systems in buildings are becoming
                                        more complex over time, making it difficult to calculate the materials and
                                        equipment needed for these systems accurately.
                                        Division 23, which covers ductwork, HVAC piping, pumps, controls, and other
                                        related equipment, can have requirements. To ensure a successful bid, it is
                                        crucial to have accurate quantity calculations. Cyber Estimating is here to
                                        seamlessly integrate our services with yours to help you achieve this goal.
                                        Ensure your Division 23 projects, no matter the scale, are executed confidently
                                        using Cyber Estimating.</p>
                                </div>
                            }
                        </div>
                        <div className='col-md-6'>
                            <div className='open-close'>
                                <h5 className="text-base" style={{ fontWeight: '600' }}>Division 26 — Electrical</h5>
                                <i class="fa fa-plus-circle plois" aria-hidden="true"
                                    onClick={() => setDivision((st) => ({
                                        ...st,
                                        division21: false,
                                        division22: false,
                                        division23: false,
                                        division26: true,
                                        division27: false,
                                        division28: false,
                                    }))}
                                ></i>
                            </div>
                            {division?.division26 &&
                                <div class={`modal-header-abc p-4 0 rounded-t-md  ${division.division26 ? 'open' : ''}`} id="div-26">
                                    <i class="fa fa-lightbulb oic-icon" aria-hidden="true"></i>
                                    <h3 className="text-base mt-5" style={{ fontWeight: '600' }}>Division 26 — Electrical</h3>
                                    <p className="text-base" style={{ lineHeight: '27px' }}> Efficient electrical contracting often depends on precise measurements.
                                        Complex cables, ducts, raceways, controls, substations, and switchgear
                                        networks make up medium- and low-voltage electrical distribution systems, so
                                        accurate calculations of material quantities are crucial. Cyber Estimating
                                        eliminates the guesswork and provides support for this process.
                                        It is vital to clearly understand electrical power monitoring, peak load
                                        controllers, and circuit breakers in Division 26 by carefully studying the drawing
                                        sets. Lighting systems, including interior and exterior lighting, specific purpose
                                        lighting, and electrical protection, are crucial for most building projects.
                                        Our competent team of consultants is readily accessible to provide exceptional
                                        assistance and has an ample experience in professional estimating and will
                                        collaborate with you to fully comprehend your vision and specifications. Our
                                        comprehensive reporting will include a marked-up pdf outlining the calculated
                                        areas, backup documentation covering all assumptions and reasoning, and a
                                        material quantity spreadsheet.
                                        Cyber Estimating can provide the necessary expertise to help your team
                                        succeed in Division 26 bidding, whether it's a commercial, residential, or
                                        industrial project.</p>
                                </div>
                            }
                            <div className='open-close'>
                                <h5 className="text-base" style={{ fontWeight: '600' }}>Division 27 — Communications</h5>
                                <i class="fa fa-plus-circle plois" aria-hidden="true"
                                    onClick={() => setDivision((st) => ({
                                        ...st,
                                        division21: false,
                                        division22: false,
                                        division23: false,
                                        division26: false,
                                        division27: true,
                                        division28: false,
                                    }))}
                                ></i>
                            </div>
                            {division?.division27 &&
                                <div class={`modal-header-abc p-4 0 rounded-t-md  ${division.division27 ? 'open' : ''}`} id="div-27">
                                    <i class="fa fa-phone oic-icon" aria-hidden="true"></i>
                                    <h3 className="text-base mt-5" style={{ fontWeight: '600' }}>Division 27 — Communications</h3>
                                    <p className="text-base" style={{ lineHeight: '27px' }}> Managing the constantly evolving technology and equipment in Division 27
                                        requires a lot of time and effort, and doing it correctly is crucial. Additional
                                        infrastructure like racks, frames, ducts, and raceways must be quantified in the
                                        bidding process to support structured cabling and enclosures for data, voice,
                                        audio video, and other specialized channels. Cyber Estimating can be a valuable
                                        resource for your team, providing expertise in materials and quantities as
                                        needed.
                                        Various communication systems such as data, voice, audio-video, and
                                        distributed monitoring are being integrated with commercial spaces. To ensure
                                        a seamless integration and streamlined installation process, it is imperative to
                                        have all necessary components readily available.
                                        Cyber Estimating offers consultants with relevant Division 27 experience who
                                        can work with your account to assist with this. Our approach involves
                                        understanding your specific information needs and preferred presentation
                                        styles for each project. The takeoff report will include a PDF with marked-up
                                        areas, a spreadsheet showing the necessary material counts, and supporting
                                        documentation.
                                        With Cyber Estimating by your side, you can confidently stay ahead of the curve
                                        regarding the newest communication technology and equipment
                                        developments.
                                    </p>
                                </div>
                            }
                            <div className={`open-close ${division.division28 ? 'open' : ''}`  }  >
                                <h5 className="text-base" style={{ fontWeight: '600' }}>Division 28 — Electronic Safety and Security</h5>
                                <i class="fa fa-plus-circle plois" aria-hidden="true"
                                    onClick={() => setDivision((st) => ({
                                        ...st,
                                        division21: false,
                                        division22: false,
                                        division23: false,
                                        division26: false,
                                        division27: false,
                                        division28: true,
                                    }))}
                                ></i>
                            </div>
                            {division?.division28 &&
                                <div class= {`modal-header-abc p-4 0 rounded-t-md  ${division.division28 ? 'open' : ''}`} id="div-28">
                                    <div className='open'>
                                        <i class="fa fa-plug oic-icon" aria-hidden="true"></i>
                                        <h5 className="text-base mt-5" style={{ fontWeight: '600' }}>Division 28 — Electronic Safety and Security</h5>
                                        <p className="text-base" style={{ lineHeight: '27px' }}> Regarding Electronic Safety and Security, even a tiny deviation from the
                                            specifications can lead to significant complications during inspections. This is
                                            because access control, video surveillance, security detection systems, alarms,
                                            and life safety overlap with many other divisions. Our goal is to provide top notch service to ensure your satisfaction. Cyber Estimating will assign a
                                            dedicated consultant to better understand your business with each estimate.
                                            A dependable fire alarm, electronic safety and security, and life safety
                                            detection systems are essential in contemporary office buildings. These
                                            systems operate 24/7 and must be failsafe. Many facilities also have integrated
                                            visitor management systems at self-check-in kiosks. Additionally, specialty
                                            items like metal detectors, X-ray machines, explosive detection equipment, and
                                            emergency response systems require careful installation and maintenance. At
                                            Cyber Estimating, we prioritize your safety and build confidence by providing
                                            Division 28 reporting in the format and level of detail you require.
                                            When dealing with Division 28 and electronic safety and security, it is
                                            imperative that you get it right. Fortunately, with Cyber Estimating, you can
                                            confidently bid and build projects
                                        </p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}