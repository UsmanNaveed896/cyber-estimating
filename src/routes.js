import Home from "./pages/Home/Home";
import AllServices from "./pages/allServices/allServices";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
export default () => {
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/services"
                    element={<AllServices />}
                />
            </Routes>
            <Footer />
        </>
    )
}