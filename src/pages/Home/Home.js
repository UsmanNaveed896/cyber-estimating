import Header from "../../components/header/header";
import Frontpage from "../../components/frontpage/frontpage";
import Aboutcompany from "../../components/aboutCompany/aboutcompany";
import Services from "../../components/services/services";
import Quickcontact from "../../components/quickcontact/quickcontact";
import Ourprojects from "../../components/ourprojects/ourprojects";
import Contactus from "../../components/contactus/contactus";
import Footer from "../../components/footer/footer";
export default () => {
    return (
        <>
            {/* <Header /> */}
            <Frontpage />
            <Aboutcompany />
            <Services />
            <Quickcontact />
            <Ourprojects />
            <Contactus />
            {/* <Footer /> */}
        </>
    )
}