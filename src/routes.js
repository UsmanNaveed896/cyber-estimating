import Home from "./pages/Home/Home";
import AllServices from "./pages/allServices/allServices";
import { Routes, Route } from "react-router-dom";
export default () => {
    return (
        <>
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

        </>
    )
}