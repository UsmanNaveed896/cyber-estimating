import './modal.css'
import Img1 from '../assets/img/close.png'
export default (props) => {
    const { show, setShow } = props;
    return (
        <>

            <div class="modal-main ">
                <div class=" modal-dialog-a ">
                    <div class="modal-content-a">
                        {
                            show?.div1 &&
                            <div className='repeat'>
                                <div className='flex justify-end close'>
                                    <img className='h-[25px] mr-3 mt-3' style={{ cursor: 'pointer' }} src={Img1} alt="sd"
                                        onClick={() => setShow((st) => ({
                                            ...st,
                                            show: false,
                                            div1: false
                                        }))}
                                    />
                                </div>
                                <>
                                    <div class="modal-header-abc  p-4 0 rounded-t-md">
                                    <i class="fa fa-fire-extinguisher oic-icon" aria-hidden="true"></i>
                                        <h3 className="text-base" style={{ fontWeight: '600' }}>Division 21 — Fire Suppression</h3>
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
                                    </div> </>
                            </div>
                        }
                        {
                            show?.div2 &&
                            <div className='repeat'>
                                <div className='flex justify-end close'>
                                    <img className='h-[25px] mr-3 mt-3' style={{ cursor: 'pointer' }} src={Img1} alt="sd"
                                        onClick={() => setShow((st) => ({
                                            ...st,
                                            show: false,
                                            div2: false
                                        }))}
                                    />
                                </div>
                                <>
                                    <div class="modal-header-abc  p-4 0 rounded-t-md">
                                    <i class="fa fa-bath oic-icon" aria-hidden="true"></i>
                                        <h3 className="text-base" style={{ fontWeight: '600' }}>Division 22 — Plumbing</h3>
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
                                    </div> </>
                            </div>
                        }
                        {
                            show?.div3 &&
                            <div className='repeat'>
                                <div className='flex justify-end close'>
                                    <img className='h-[25px] mr-3 mt-3' style={{ cursor: 'pointer' }} src={Img1} alt="sd"
                                        onClick={() => setShow((st) => ({
                                            ...st,
                                            show: false,
                                            div3: false
                                        }))}
                                    />
                                </div>
                                <>
                                    <div class="modal-header-abc  p-4 0 rounded-t-md">
                                    <i class="fa fa-universal-access oic-icon" aria-hidden="true"></i>
                                        <h3 className="text-base" style={{ fontWeight: '600' }}>Division 23 — Heating Ventilating and Air Conditioning (HVAC)</h3>
                                        <p className="text-base" style={{ lineHeight: '27px' }}> The heating, ventilating, and air conditioning systems in buildings are becoming
                                            more complex over time, making it difficult to calculate the materials and
                                            equipment needed for these systems accurately.
                                            Division 23, which covers ductwork, HVAC piping, pumps, controls, and other
                                            related equipment, can have requirements. To ensure a successful bid, it is
                                            crucial to have accurate quantity calculations. Cyber Estimating is here to
                                            seamlessly integrate our services with yours to help you achieve this goal.
                                            Ensure your Division 23 projects, no matter the scale, are executed confidently
                                            using Cyber Estimating.</p>
                                    </div> </>
                            </div>
                        }
                        {
                            show?.div4 &&
                            <div className='repeat'>
                                <div className='flex justify-end close'>
                                    <img className='h-[25px] mr-3 mt-3' style={{ cursor: 'pointer' }} src={Img1} alt="sd"
                                        onClick={() => setShow((st) => ({
                                            ...st,
                                            show: false,
                                            div4: false
                                        }))}
                                    />
                                </div>
                                <>
                                    <div class="modal-header-abc  p-4 0 rounded-t-md">
                                    <i class="fa fa-lightbulb-o oic-icon" aria-hidden="true"></i>
                                        <h3 className="text-base" style={{ fontWeight: '600' }}>Division 26 — Electrical</h3>
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
                                    </div> </>
                            </div>
                        }
                        {
                            show?.div5 &&
                            <div className='repeat'>
                                <div className='flex justify-end close'>
                                    <img className='h-[25px] mr-3 mt-3' style={{ cursor: 'pointer' }} src={Img1} alt="sd"
                                        onClick={() => setShow((st) => ({
                                            ...st,
                                            show: false,
                                            div5: false
                                        }))}
                                    />
                                </div>
                                <>
                                    <div class="modal-header-abc  p-4 0 rounded-t-md">
                                    <i class="fa fa-volume-control-phone oic-icon" aria-hidden="true"></i>
                                        <h3 className="text-base" style={{ fontWeight: '600' }}>Division 27 — Communications</h3>
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
                                    </div> </>
                            </div>
                        }
                        {
                            show?.div6 &&
                            <div className='repeat'>
                                <div className='flex justify-end close'>
                                    <img className='h-[25px] mr-3 mt-3' style={{ cursor: 'pointer' }} src={Img1} alt="sd"
                                        onClick={() => setShow((st) => ({
                                            ...st,
                                            show: false,
                                            div5: false
                                        }))}
                                    />
                                </div>
                                <>
                                    <div class="modal-header-abc  p-4 0 rounded-t-md">
                                    <i class="fa fa-plug oic-icon" aria-hidden="true"></i>
                                        <h3 className="text-base" style={{ fontWeight: '600' }}>Division 28 — Electronic Safety and Security</h3>
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
                                    </div> </>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}