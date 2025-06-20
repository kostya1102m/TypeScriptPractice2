import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PersonsGrid from "./components/PersonsGrid";


function List(){
    return (
        <div>
            <Navbar active="2"/>
            <PersonsGrid />
            <Footer />
        </div>
    );
}

export default List;