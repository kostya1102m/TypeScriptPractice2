import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PersonInfo from "./components/PersonInfo";


function Person () {
    return (
        <>
            <Navbar active=""/> 
            <PersonInfo />
            <Footer /> 
        </>
    );
}

export default Person;