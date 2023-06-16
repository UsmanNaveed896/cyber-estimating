import Header from "./components/header/header";
import Frontpage from "./components/frontpage/frontpage";
import Aboutcompany from "./components/aboutCompany/aboutcompany";
import Services from "./components/services/services";
import Quickcontact from "./components/quickcontact/quickcontact";
import Ourprojects from "./components/ourprojects/ourprojects";
import Teammembers from "./components/teammembers/teammembers";
import Contactus from "./components/contactus/contactus";
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
       <Header/>
      <Frontpage/>
      <Aboutcompany/>
      <Services/>
      <Quickcontact/>
      <Ourprojects/>
      {/* <Teammembers/> */}
      <Contactus/>
      <Footer/>
    </div>
  );
}

export default App;
