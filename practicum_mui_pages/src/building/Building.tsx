import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuildingInfo from "./components/BuildingInfo";


function Building () {
    return (
        <>
            <Navbar active=""/> 
            <BuildingInfo />
            <Footer /> 
        </>
    );
}

export default Building;